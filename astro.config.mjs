import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// public/ 配下の静的HTMLとして配信しているツール（Astroページを経由しないため
// @astrojs/sitemap が自動検出できない）を、サイトマップに明示的に含める
const staticToolPages = [
  'https://smalltoollab.com/freelance-time-tracker/',
  'https://smalltoollab.com/knitting-voice-counter/',
  'https://smalltoollab.com/masking-tool/',
  'https://smalltoollab.com/screenshot-stitcher/',
  'https://smalltoollab.com/yarn-calculator/',
];

export default defineConfig({
  site: 'https://smalltoollab.com',
  integrations: [
    tailwind(),
    sitemap({
      customPages: staticToolPages,
    }),
  ],
});