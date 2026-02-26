import { defineConfig } from 'astro/config';

// https://astro.build/config
import swup from '@swup/astro';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://sariodesign.dev',
  router: 'spa',
  adapter: vercel({
    analytics: true
  }),
  //integrations: [swup()]
});
