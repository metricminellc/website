# Website decision register

Website workstream decisions, W-series. W-01 through W-09 are dated
2026-08-19; W-10 is dated 2026-08-24; W-11 through W-16 are dated
2026-09-05 (the W2 refresh); W-17 is dated 2026-09-06 (W3, the Windows path).
The product decision register (D-series)
and the brand decision register (B-series, brand/BRAND_STANDARDS.md
Section 9) live with their own documents. Full rationale sits in the
project's planning records.

| ID | Decision |
|---|---|
| W-01 | One Astro page in this separate public repo, metricminellc/website. Superseded by W-11 for the page count; the repo, the framework, and the static output stand |
| W-02 | Host on GitHub Pages. Deploy by GitHub Actions using withastro/action@v6 |
| W-03 | Canonical URL is the apex, https://metricmine.ai. www redirects to it |
| W-04 | DNS stays at GoDaddy. Apex A and AAAA records plus a www CNAME. No nameserver move |
| W-05 | Pin Astro 7.x exactly and Node 24 LTS in CI. Version bumps are their own PR |
| W-06 | v1 ships without the demo GIF. The GIF lands as a small follow-up PR once the VHS tape merges in the metricmine repo |
| W-07 | Analytics: Cloudflare Web Analytics standalone snippet, cookieless, token in src/consts.ts. No other tracker, ever |
| W-08 | Footer credit links to the builder's GitHub profile only |
| W-09 | Everything beyond this page is trigger-based: docs site at framework maturity, demo GIF on tape merge, promotion on the maturity bar, never a calendar date |
| W-10 | The copyright holder named on every public surface is Justin Goff personally until a legal entity exists and takes an assignment. The GitHub handle metricminellc stays as a namespace, not a legal claim |
| W-11 | The site is a small multi-page static site in this repo: the home page plus the six pages docs/SITE.md maps. The docs stage opens as pages that link into the pipeline repository's documents, not as a docs site. A new page or section starts as a spec PR that updates docs/SITE.md before its implementation PR |
| W-12 | Fonts are self-hosted: the three OFL faces as latin-subset variable woff2 files under src/assets/fonts/, served through Astro's Fonts API, with the glyph gate (scripts/check-glyphs.mjs) holding the source to the subset. No Google Fonts request. The allowed external requests are the Cloudflare beacon and the one GitHub API call, nothing else |
| W-13 | Logo art on the site is served from the Tier 3 web crops under brand/web/, generated from the Tier 1 vector masters by scripts/brand_web_crops.py (Brand Standards Rev 3, Section 2.1). The Tier 2 rasters stay in brand/raster/ and are not served |
| W-14 | The docs target for the header link and the hero's Read the docs button is the pipeline repository's docs/README.md, the map of every document on main |
| W-15 | The release line is a chip row under the hero buttons (the current tag linking its release, the license, the live star chip) with Releases and Changelog links in the footer. No date on the site. The tag is a constant in src/consts.ts, moved by a one-line PR at each release |
| W-16 | metricmine.io forwards permanently to https://metricmine.ai at the registrar. No code, no record in this repo beyond docs/DEPLOY.md |
| W-17 | A command block that differs by platform sits in an OS toggle (src/components/OsTabs.astro): a macOS and Linux panel and a Windows panel, both server-rendered, one hidden by the root's data-os attribute, which Base.astro resolves before paint from the remembered choice (mm-os in localStorage) or the visitor's platform, so there is no layout shift and no fetch. One choice per page, synchronized across every toggle and remembered across pages; keyboard-operable with the tabs pattern; no external request. Both panels quote the pipeline repository's docs/demo.md, the Windows text after it lands there (D-42), never before. A block whose text is the same on both platforms stays a plain CopyBlock |

Standing constraints inherited from the project: reference-implementation
positioning, no performance or service-level claims, verifiable social proof
only (the live GitHub star count), honest copy per CLAUDE.md, and every
number on a page linked to the repository document or test that holds it.
