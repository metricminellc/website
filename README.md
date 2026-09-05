<picture>
  <source media="(prefers-color-scheme: dark)" srcset="brand/raster/lockup-tagline-white.png">
  <img alt="MetricMine" src="brand/raster/lockup-horizontal-ink.png" width="420">
</picture>

# metricmine.ai

The source for [metricmine.ai](https://metricmine.ai), the site for
[MetricMine](https://github.com/metricminellc/metricmine): a contract-driven
data pipeline that ends in an answer, not a table.

This repo is also the home of the MetricMine brand system. The normative
spec lives at [brand/BRAND_STANDARDS.md](brand/BRAND_STANDARDS.md).

## Stack

A small static site: the home page and six pages, mapped in
[docs/SITE.md](docs/SITE.md). [Astro](https://astro.build) 7, no client
framework, no CMS, fonts self-hosted, logo art served as SVG from the
brand's vector masters. Deployed to GitHub Pages by
[deploy.yml](.github/workflows/deploy.yml) on every merge to main.

## Local development

```bash
npm ci
npm run dev        # local dev server
npm run build      # production build to dist/
npm run preview    # serve the production build
node scripts/check-glyphs.mjs   # the glyph gate (see CLAUDE.md)
```

Node 22 or newer locally. CI builds on Node 24.

## Repo map

```
src/               the site (pages, layout, components, styles, consts, fonts)
brand/             brand system of record: spec, vectors, rasters, masters, web crops
public/            favicons, robots.txt, sitemap.xml, social card
docs/              decision register, site spec, deployment notes
scripts/           the web-crop generator and the glyph gate
.github/workflows/ build and deploy to GitHub Pages
CLAUDE.md          working rules for AI-assisted changes in this repo
```

## Contributing

This is a small personal project repo. Changes land as reviewed pull
requests, the same governance the MetricMine pipeline itself demonstrates.
CLAUDE.md carries the binding build, copy, and brand rules; docs/SITE.md
is the page spec a new page amends first.

## License

Code in this repository is [MIT licensed](LICENSE). The three web fonts
under `src/assets/fonts/` are the SIL Open Font License builds of Manrope,
Inter, and JetBrains Mono; their license texts sit beside them.

Brand assets are not: everything under `brand/` and the icon files under
`public/` are all rights reserved, Justin Goff. They identify the
MetricMine project and may not be reused without permission.
