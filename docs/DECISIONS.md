# Website decision register

Website workstream decisions, W-series, all dated 2026-08-19. The product
decision register (D-series) and the brand decision register (B-series,
brand/BRAND_STANDARDS.md Section 9) live with their own documents. Full
rationale sits in the project's planning records.

| ID | Decision |
|---|---|
| W-01 | One Astro page in this separate public repo, metricminellc/website |
| W-02 | Host on GitHub Pages. Deploy by GitHub Actions using withastro/action@v6 |
| W-03 | Canonical URL is the apex, https://metricmine.ai. www redirects to it |
| W-04 | DNS stays at GoDaddy. Apex A and AAAA records plus a www CNAME. No nameserver move |
| W-05 | Pin Astro 7.x exactly and Node 24 LTS in CI. Version bumps are their own PR |
| W-06 | v1 ships without the demo GIF. The GIF lands as a small follow-up PR once the VHS tape merges in the metricmine repo |
| W-07 | Analytics: Cloudflare Web Analytics standalone snippet, cookieless, token in src/consts.ts. No other tracker, ever |
| W-08 | Footer credit links to the builder's GitHub profile only |
| W-09 | Everything beyond this page is trigger-based: docs site at framework maturity, demo GIF on tape merge, promotion on the maturity bar, never a calendar date |

Standing constraints inherited from the project: reference-implementation
positioning, no performance or service-level claims, verifiable social proof
only (the live GitHub star count), honest copy per CLAUDE.md.
