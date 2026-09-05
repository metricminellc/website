# Site specification

The pages metricmine.ai serves, what each one is for, and where its
content comes from. This file is the spec CLAUDE.md's page rule points
at: a new page or a new section starts by amending this file in its own
PR, and the implementation PR follows. Dated 2026-09-05 (W-11). Pages
land in the order of the W2 runbook; until that ladder closes, a page
listed here may not be on main yet.

## The two readers, one rule

The site speaks about the project, never about any person. It earns a
technical reader's respect by being accurate and it reads to anyone else
as an ordinary personal open source project. Every number on a page links
to the pipeline repository document or test that holds it. There are no
performance, cost, service-level, or scale figures anywhere on the site;
the measured curves stay in the repository with their environment.

## The pages

| Path | Nav label | Purpose | Content sources (pipeline repository, main) |
|---|---|---|---|
| `/` | (home) | The 50,000-foot view: what it is, how it flows, what a test holds, why it works this way, the standard parts, Oscar and the context layer, the quickstart, how the agents and the engine meet | README.md, docs/demo.md, docs/sources.md, tests/fixtures/serving_questions.json, CLAUDE.md, .claude/, .github/workflows/claude.yml |
| `/what-it-is/` | What it is | What it is and what it is not; alongside dbt, Airbyte, DuckDB, Claude Code, and MCP clients; the meaning-versus-structure paragraph | README.md (the front door and the trade-offs), CLAUDE.md non-goals, docs/adoption.md |
| `/demo/` | Demo | The family at a glance; why it can be trusted; the declared joins; the rendered Q2 transcript and the six other measured answers; data and expert context kept apart; Path A | docs/sources-explained.md, docs/sources.md, docs/demo.md, tests/fixtures/serving_questions.json, tests/test_declared_joins.py, tests/test_aviation_conservation.py, tests/test_committed_samples.py, tests/test_serving_questions.py |
| `/where-it-fits/` | Where it fits | Airbyte at the door (Airbyte's own connector count, cited to Airbyte); DuckDB on purpose; MCP at the edge (the five tools); Claude Code beside you; the pattern map; fits when and does not fit when | docs/adding-a-source.md, docs/adoption.md, docs/demo.md, docs/sources-explained.md section 10, docs/spec/serving.md, README.md non-goals |
| `/get-started/` | Get started | The ten-minute path (Path A, the Claude Desktop wiring, the first question), Path B, the three learning curves, working in the repository with Claude Code, the deeper shelf | docs/demo.md, docs/operating.md, docs/adoption.md, docs/adding-a-source.md, docs/README.md, CLAUDE.md, .claude/ |
| `/why-open-source/` | Why open source | Why the method needs readers; what open source means here (the stable line, the non-goals); the name and logo exception; taking part | README.md (the stability rule, Name and logo), LICENSE, NOTICE, CONTRIBUTING.md, CODE_OF_CONDUCT.md, SECURITY.md, the issue forms |
| `/about/` | About | The project in one paragraph; the origin line; the name and the mark; the register as memory; the builder credit; contact | README.md, NOTICE, docs/decisions/decision-register.md, docs/verification/gate_proof_findings.md, CLAUDE.md rule 19 |
| `/404` | (none) | Page not found | none |

The header carries What it is, Demo, Where it fits, Get started, Docs
(docs/README.md in the pipeline repository, W-14), and GitHub, plus the
theme toggle; below 900 px the links fold behind the menu button. The
footer carries every page, then GitHub, Docs, Releases, Changelog, the
organization, and the contact address, then the credit line (W-08, W-10).

## Section rules

- Each page opens with the PageHero (eyebrow, title, lede) and closes
  with a CTA band that names the next page, the docs, or the repository.
- Eyebrows are the spec 4.3 device. Buttons name the action. Sentence
  case for labels.
- Cards use the cube bullet (spec 7.4.2). A card's `under` line is the
  evidence path or the version pins in JetBrains Mono.
- Tables (`table.data`) carry the numbers a document holds; the mono note
  under a table names the document.
- Command blocks quote the repository's own documentation verbatim
  (README "See it run", docs/demo.md Path A and Path B) and never invent
  a command.
- The rendered transcript (`Transcript.astro`) is built from the measured
  Q2 answer in the serving-questions fixture. The site never shows a
  product screenshot.

## Diagrams

Inline SVG components driven by the theme tokens: `HeroVisual.astro`
(seven sources into the mark, one answer out), `FlowDiagram.astro` (the
six-step flow), and `AgentEngineDiagram.astro` (the agent layer above,
the engine below, contracts in git as the only bridge). One geometry, two
token sets (spec 6.4): every fill and stroke is a token, so a component
renders light and dark from one drawing. Logo art inside a diagram is the
untouched Tier 3 web crop, referenced, never redrawn. Text inside a
diagram follows the copy rules and the glyph gate. A wide diagram sits in
a `.scroll` frame so it scrolls on small screens instead of shrinking.

## The evidence rule, applied

Numbers on the site and where each one is held:

| Number | Where it is held |
|---|---|
| 7 sources; the seven extracts, rows, licenses, pins | docs/sources.md; tests/test_committed_samples.py |
| 3 categories; 13,014, 166,158, 44,721 rows | docs/demo.md |
| 31 models, 303 tests, PASS=334; 247,555 bronze rows | docs/demo.md |
| 22 of 31 engine-emitted; nine human-owned silver models | README.md |
| 13 contracts | contracts/ |
| 41 decisions, 53 findings | docs/decisions/decision-register.md; docs/verification/gate_proof_findings.md |
| join completeness 1.0000, 0.8396, 1.0000, 0.9791, 1.0000, 0.9994 and the floors | docs/sources.md; tests/test_declared_joins.py |
| 29.44 vs 12.42 minutes; 8.95 vs 2.41 percent; 13,492 and 152,569 flights; 97 flights; 3,471 flights; the other measured answers | tests/fixtures/serving_questions.json; tests/test_serving_questions.py |
| 3,439 departure hours; 597 flights; the vintage effects | README.md; docs/demo.md; docs/sources.md |
| under fifteen minutes, eight files by hand | docs/adding-a-source.md |
| nineteen hard rules; the nine-item checklist; five tools; Oscar | CLAUDE.md; .claude/skills/contract-review/SKILL.md; docs/demo.md; .claude/agents/oscar.md |
| 600+ connectors | airbyte.com/connectors, Airbyte's own figure, cited inline |
| v1.1.0 | the release page, linked from the chip |

## Adding a page

1. Amend this file in its own PR: the row in the table, the sources, the
   section plan, and any new number with where it is held.
2. Implement in a second PR: the page under `src/pages/`, its entry in
   `PAGES` in `src/consts.ts`, and `public/sitemap.xml`.
3. Run the verification in CLAUDE.md before either PR opens.
