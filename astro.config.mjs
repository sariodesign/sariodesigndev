import { defineConfig } from 'astro/config';

// https://astro.build/config

import vercel from '@astrojs/vercel/static';

export default defineConfig({
  router: 'spa',
  adapter: vercel({
    analytics: true
  }),
});
