import { parse } from 'yaml';
import siteRaw from '../../contenu/site.yaml?raw';
import frRaw from '../../contenu/fr.yaml?raw';
import enRaw from '../../contenu/en.yaml?raw';

export type Lang = 'fr' | 'en';
export const langs: Lang[] = ['fr', 'en'];

export const site = parse(siteRaw) as Record<string, string>;
const texts: Record<Lang, any> = { fr: parse(frRaw), en: parse(enRaw) };

export function t(lang: Lang) {
  return texts[lang];
}

/** Replaces {key} placeholders with values from contenu/site.yaml. */
export function fill(str: string | undefined): string {
  if (!str) return '';
  return str.replace(/\{(\w+)\}/g, (m, k) => (k in site ? String(site[k]) : m));
}

/** Splits a multi-paragraph text block into paragraphs. */
export function paragraphs(str: string | undefined): string[] {
  return fill(str)
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export type PageKey = 'home' | 'services' | 'contact' | 'legal' | 'privacy';

export const routes: Record<Lang, Record<PageKey, string>> = {
  fr: {
    home: '/',
    services: '/prestations',
    contact: '/contact',
    legal: '/mentions-legales',
    privacy: '/confidentialite',
  },
  en: {
    home: '/en',
    services: '/en/services',
    contact: '/en/contact',
    legal: '/en/legal-notice',
    privacy: '/en/privacy',
  },
};

export const otherLang = (lang: Lang): Lang => (lang === 'fr' ? 'en' : 'fr');

/** URL-friendly id from a service name, e.g. "Séance d'évaluation" → "seance-d-evaluation". */
export const slug = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** Price line for a service with one rate or several. */
export const priceOf = (p: any): string => p.tarif ?? (p.tarifs ?? []).map((x: any) => x.prix).join(' / ');

export const telHref = (tel: string) => 'tel:' + tel.replace(/[^\d+]/g, '');

/** True when a text is still a placeholder like [À COMPLÉTER …]. */
export const isPlaceholder = (s: string | undefined) => !!s && /^\s*\[.*\]\s*$/.test(s);
