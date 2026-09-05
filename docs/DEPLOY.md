# Deployment and DNS notes

How metricmine.ai serves. Verified against GitHub Docs 2026-08-19; re-verify
values there before changing records.

## Pipeline

Merge to main runs `.github/workflows/deploy.yml`: withastro/action@v6
builds on Node 24 and uploads dist/, actions/deploy-pages@v4 publishes to
GitHub Pages. The Pages source for this repo is GitHub Actions, not a
branch.

## Custom domain

Canonical host is the apex, https://metricmine.ai (W-03). The custom domain
is set in the repo's Pages settings, which GitHub stores server-side; no
CNAME file is needed with Actions-based deploys. The metricminellc org
carries a verified domain record for metricmine.ai, which protects against
Pages takeover.

## DNS records (GoDaddy, W-04)

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | metricminellc.github.io |

No wildcard records, ever: GitHub warns they enable subdomain takeover even
on a verified domain.

## metricmine.io (W-16)

metricmine.io and www.metricmine.io forward permanently (301) to
https://metricmine.ai through the registrar's domain forwarding. No code
and no record in this repository; the forward is checked with:

```bash
curl -sI http://metricmine.io | head -n 3
curl -sI https://www.metricmine.io | head -n 3
```

## HTTPS

Enforce HTTPS in Pages settings once the Let's Encrypt certificate
provisions. If the certificate stalls, remove and re-add the custom domain
and wait about fifteen minutes.

## Checks

```bash
dig +noall +answer metricmine.ai A
dig +noall +answer metricmine.ai AAAA
dig +noall +answer www.metricmine.ai CNAME
curl -sI https://metricmine.ai | head -n 6
```
