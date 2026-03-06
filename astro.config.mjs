import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://ultranetic.org',
  output: 'static', 
  adapter: cloudflare({
    mode: 'directory'
  }),
  integrations: [mdx(), sitemap()],
});
