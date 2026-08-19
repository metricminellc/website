// @ts-check
import { defineConfig } from 'astro/config';

// Apex custom domain on GitHub Pages: site is the canonical URL, no base value.
// See CLAUDE.md build rules before changing anything here.
export default defineConfig({
  site: 'https://metricmine.ai',
  build: {
    inlineStylesheets: 'always',
  },
});
