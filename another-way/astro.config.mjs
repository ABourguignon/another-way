// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.another-way.fr',
  adapter: vercel(),
  trailingSlash: 'never',
  build: { format: 'file' },
  // Secrets read at runtime (Vercel env vars, or .env in local dev) — never baked into the build
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_TO: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_FROM: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
  integrations: [
    // hreflang FR/EN pairs are declared in each page's <head>
    sitemap({ filter: (page) => !page.includes('/api/') }),
  ],
});
