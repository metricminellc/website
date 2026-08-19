# CLAUDE.md · metricminellc/website

This repo is the source for metricmine.ai: a one-page Astro site for the
MetricMine project, deployed to GitHub Pages at the apex domain. It is also
the home of the MetricMine brand system. Treat both with care.

## What lives where

- `src/` is the site: one page (`src/pages/index.astro`), a 404, one layout,
  one flow-diagram component, tokens in `src/styles/tokens.css`,
  constants in `src/consts.ts`.
- `brand/` is the brand system of record. `brand/BRAND_STANDARDS.md` is the
  single maintained copy of the normative spec.
- `docs/` holds the decision register and deployment notes.
- `.github/workflows/deploy.yml` ships every merge to main.

## Brand standards

- The normative spec is brand/BRAND_STANDARDS.md. Follow it for all color,
  type, spacing, and copy decisions.
- Fonts: Manrope (headings), Inter (body), JetBrains Mono (code). Theme
  tokens are in spec Section 3.7; use the CSS custom properties as written.
- Copy rules: short declarative sentences, no em dashes, no throughput or
  SLA claims. Thesis line: "Agents propose. Humans approve."
- Logos: use files under brand/ only. Never recolor, rebuild, or normalize
  logo art.
- Published diagrams follow spec Section 6.4: SVG source, paired light and
  dark, embedded subset fonts.

## Build rules

- Astro 7.x pinned exactly in package.json. Node 24 LTS in CI; local dev
  accepts Node 22 or newer. Version bumps are their own PR.
- Static output only. No SSR, no client frameworks, no CMS.
- Deploy is GitHub Actions with withastro/action@v6 to GitHub Pages. In
  astro.config.mjs, site is https://metricmine.ai and base is never set.
- Allowed external requests, complete list: the Google Fonts embed (spec
  4.1), the Cloudflare Web Analytics beacon (token in src/consts.ts), and
  one unauthenticated GitHub API call for the live star count. Nothing else,
  ever. No other trackers, CDNs, or embeds.
- One page until the docs stage opens. New pages or sections start as spec
  PRs before implementation PRs.

## Copy rules, binding

- Positioning: reference implementation, local-first by design. No
  throughput, SLA, cost, or scale claims anywhere.
- Social proof is the live GitHub star count and nothing else. No logos, no
  testimonials, no invented adopters.
- The site speaks about the project, never about any person's career. No
  hiring, recruiting, resume, or portfolio language on any page or in any
  file in this repo.
- Sentence case for UI labels. Buttons name the action.
- No em dashes anywhere, including code comments and PR descriptions.

## Workflow rules

- Plan mode for any multi-file change.
- Small reviewed PRs. Squash merge. Branches delete on merge.
- Commit granularity: separate commits per file as the general rule; small,
  directly connected changes may share one commit. Every commit carries a
  title and a why-body.
- Breakage never merges. `npm run build` must pass before any PR is opened.
- Do not edit files under brand/ except through a dedicated brand PR that
  cites brand/BRAND_STANDARDS.md.

## Verification before any PR

1. `npm run build` passes clean.
2. Grep gates, all three must return nothing:
   `grep -rn -e $'—' -e $'–' src/ README.md docs/`
   `grep -rniE 'portfolio|hiring|recruit|resume|throughput|trusted by' src/ README.md docs/`
   `grep -rniw 'sla' src/ README.md docs/`
3. Copy read against the Copy rules above.
