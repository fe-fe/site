// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://maria.qa',
    vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
  },
});
