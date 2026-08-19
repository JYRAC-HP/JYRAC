// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jyrac.stki.org',
  output: 'server',   // ← 追加
  adapter: cloudflare(),
  integrations: [sitemap()],
});