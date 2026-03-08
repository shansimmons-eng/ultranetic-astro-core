import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind'; // 1. ADD THIS IMPORT

export default defineConfig({
  site: 'https://ultranetic.org',
  output: 'server', 
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  // 2. ADD tailwind() TO THE INTEGRATIONS ARRAY BELOW
  integrations: [
    tailwind({
      applyBaseStyles: false, // Prevents Tailwind from overriding your global.css base
    }), 
    mdx(), 
    sitemap()
  ],
});