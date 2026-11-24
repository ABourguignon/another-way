import type { APIRoute } from 'astro';
import { getSecret } from 'astro:env/server';
import { site } from '../../lib/content';

// Runs on Vercel as a serverless function (not pre-rendered).
export const prerender = false;

/*
 * Environment variables to set in Vercel (Project → Settings → Environment Variables):
 *   RESEND_API_KEY  – API key from resend.com (required)
 *   CONTACT_TO      – address that receives the messages (default: email in contenu/site.yaml)
 *   CONTACT_FROM    – verified sender, e.g. "Another Way <formulaire@another-way.fr>"
 */
const env = (k: string): string | undefined => getSecret(k) || undefined;

const SUBJECTS: Record<string, string> = {
  renseignement: 'Demande de renseignement',
  devis: 'Demande de devis',
  prestation: 'Réservation de prestation',
  autre: 'Autre demande',
};

// Best-effort rate limit: 5 messages per 10 minutes per IP (per server instance).
const hits = new Map<string, number[]>();
const WINDOW = 10 * 60 * 1000;
const MAX = 5;
function limited(ip: string) {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);
  list.push(now);
  hits.set(ip, list);
  return list.length > MAX;
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const json = (status: number, body: object) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let data: Record<string, unknown>;
  try {
    data = request.headers.get('content-type')?.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());
  } catch {
    return json(400, { ok: false, error: 'invalid_body' });
  }

  const str = (k: string, max: number) => String(data[k] ?? '').trim().slice(0, max);
  const nom = str('nom', 120);
  const email = str('email', 200);
  const telephone = str('telephone', 40);
  const objet = str('objet', 40);
  const message = str('message', 5000);
  const consent = str('consentement', 10);

  // Honeypot filled → silently accept (bots think it worked)
  if (str('site_web', 200)) return json(200, { ok: true });

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  if (!nom || !emailOk || !SUBJECTS[objet] || message.length < 2 || consent !== 'oui') {
    return json(422, { ok: false, error: 'invalid_fields' });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || clientAddress || 'unknown';
  if (limited(ip)) return json(429, { ok: false, error: 'too_many_requests' });

  const apiKey = env('RESEND_API_KEY');
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return json(500, { ok: false, error: 'not_configured' });
  }

  const subject = `[Site] ${SUBJECTS[objet]} – ${nom}`;
  const lang = data.lang === 'en' ? 'anglais' : 'français';
  const html = `
    <h2 style="font-family:Georgia,serif;font-weight:400">${esc(SUBJECTS[objet])}</h2>
    <p><strong>Nom :</strong> ${esc(nom)}<br>
       <strong>E-mail :</strong> <a href="mailto:${esc(email)}">${esc(email)}</a><br>
       ${telephone ? `<strong>Téléphone :</strong> ${esc(telephone)}<br>` : ''}
       <strong>Langue du site :</strong> ${lang}</p>
    <p style="white-space:pre-wrap;border-left:3px solid #ccc;padding-left:12px">${esc(message)}</p>
    <p style="color:#888;font-size:12px">Message envoyé depuis le formulaire de contact de another-way.fr. Répondez directement à cet e-mail pour écrire à ${esc(nom)}.</p>`;
  const text = `${SUBJECTS[objet]}\n\nNom : ${nom}\nE-mail : ${email}\n${telephone ? `Téléphone : ${telephone}\n` : ''}Langue du site : ${lang}\n\n${message}`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: env('CONTACT_FROM') || `${site.nom_site} <formulaire@another-way.fr>`,
        to: [env('CONTACT_TO') || site.email],
        reply_to: email,
        subject,
        html,
        text,
      }),
    });
    if (!res.ok) {
      console.error('Resend error', res.status, await res.text());
      return json(502, { ok: false, error: 'send_failed' });
    }
  } catch (err) {
    console.error('Resend request failed', err);
    return json(502, { ok: false, error: 'send_failed' });
  }

  return json(200, { ok: true });
};
