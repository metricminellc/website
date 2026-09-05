// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// Apex custom domain on GitHub Pages: site is the canonical URL, no base value.
// See CLAUDE.md build rules before changing anything here.
//
// Fonts (W-12, spec 4.1 as amended at Rev 3): the three OFL faces are
// self-hosted from src/assets/fonts/ as latin-subset variable woff2 files.
// Astro's Fonts API emits the @font-face rules with hashed URLs, one file
// per family, and no third-party request. The weight ranges below are the
// ranges the files carry; the site uses Manrope 600 to 800, Inter 400 to
// 600, and JetBrains Mono 400 to 500 within them.
export default defineConfig({
  site: 'https://metricmine.ai',
  build: {
    inlineStylesheets: 'always',
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Manrope',
      cssVariable: '--font-manrope',
      fallbacks: ['Avenir Next', 'Aptos', 'Arial', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/manrope-latin-wght-normal.woff2'],
            weight: '200 800',
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-inter',
      fallbacks: ['Avenir Next', 'Aptos', 'Arial', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/inter-latin-wght-normal.woff2'],
            weight: '100 900',
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/jetbrains-mono-latin-wght-normal.woff2'],
            weight: '100 800',
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
  ],
});
