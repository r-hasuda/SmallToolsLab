import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://smalltoollab.com',
  integrations: [tailwind()],
});
