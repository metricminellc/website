// Site-wide constants. One place to edit, no magic strings in pages.

export const SITE_URL = 'https://metricmine.ai';
export const SITE_TITLE = 'MetricMine | Agents propose. Humans approve.';
export const SITE_DESCRIPTION =
  'MetricMine is a contract-driven data pipeline that ends in an answer, not a table. Agents propose. Humans approve. Deterministic code runs it locally.';

export const REPO_URL = 'https://github.com/metricminellc/metricmine';
export const REPO_API = 'https://api.github.com/repos/metricminellc/metricmine';
export const REPO_BLOB = `${REPO_URL}/blob/main`;
export const REPO_TREE = `${REPO_URL}/tree/main`;
export const ORG_URL = 'https://github.com/metricminellc';
export const CONTACT_EMAIL = 'github@metricmine.ai';

// The docs target (W-14): the map of every document on main.
export const DOCS_URL = `${REPO_BLOB}/docs/README.md`;

// The release line (W-15): the current tagged release and the changelog.
export const RELEASE_TAG = 'v1.1.0';
export const RELEASE_URL = `${REPO_URL}/releases/tag/${RELEASE_TAG}`;
export const RELEASES_URL = `${REPO_URL}/releases`;
export const CHANGELOG_URL = `${REPO_BLOB}/CHANGELOG.md`;
export const LICENSE_URL = `${REPO_BLOB}/LICENSE`;

// Documents the pages link into, by repository path.
export const DOC = {
  demo: `${REPO_BLOB}/docs/demo.md`,
  sources: `${REPO_BLOB}/docs/sources.md`,
  sourcesExplained: `${REPO_BLOB}/docs/sources-explained.md`,
  addingASource: `${REPO_BLOB}/docs/adding-a-source.md`,
  operating: `${REPO_BLOB}/docs/operating.md`,
  adoption: `${REPO_BLOB}/docs/adoption.md`,
  scale: `${REPO_BLOB}/docs/scale.md`,
  register: `${REPO_BLOB}/docs/decisions/decision-register.md`,
  findings: `${REPO_BLOB}/docs/verification/gate_proof_findings.md`,
  signatureTest: `${REPO_BLOB}/docs/verification/signature-test.md`,
  evidence: `${REPO_TREE}/docs/verification/evidence`,
  arc6Exit: `${REPO_BLOB}/docs/verification/evidence/2026-09-05_arc6_exit.md`,
  specs: `${REPO_TREE}/docs/spec`,
  goldSpec: `${REPO_BLOB}/docs/spec/gold-unified-event-star.md`,
  servingSpec: `${REPO_BLOB}/docs/spec/serving.md`,
  agentSpec: `${REPO_BLOB}/docs/spec/agent-layer.md`,
  engineSpec: `${REPO_BLOB}/docs/spec/engine.md`,
  diagrams: `${REPO_TREE}/docs/diagrams`,
  claudeMd: `${REPO_BLOB}/CLAUDE.md`,
  contributing: `${REPO_BLOB}/CONTRIBUTING.md`,
  conduct: `${REPO_BLOB}/CODE_OF_CONDUCT.md`,
  security: `${REPO_BLOB}/SECURITY.md`,
  notice: `${REPO_BLOB}/NOTICE`,
  readme: `${REPO_URL}#readme`,
  contracts: `${REPO_TREE}/contracts`,
  oscar: `${REPO_BLOB}/.claude/agents/oscar.md`,
  reviewSkill: `${REPO_BLOB}/.claude/skills/contract-review/SKILL.md`,
  guardHook: `${REPO_BLOB}/.claude/hooks/working_tree_guard.py`,
  claudeAction: `${REPO_BLOB}/.github/workflows/claude.yml`,
  questions: `${REPO_BLOB}/tests/fixtures/serving_questions.json`,
  testDeclaredJoins: `${REPO_BLOB}/tests/test_declared_joins.py`,
  testConservation: `${REPO_BLOB}/tests/test_aviation_conservation.py`,
  testServingQuestions: `${REPO_BLOB}/tests/test_serving_questions.py`,
  testCommittedSamples: `${REPO_BLOB}/tests/test_committed_samples.py`,
  brandStandards: 'https://github.com/metricminellc/website/blob/main/brand/BRAND_STANDARDS.md',
  websiteRepo: 'https://github.com/metricminellc/website',
};

// Third-party pages the site cites by name. The connector count is
// Airbyte's own published figure, cited to this page (read 2026-09-05).
export const AIRBYTE_CONNECTORS_URL = 'https://airbyte.com/connectors';

export const BUILDER_NAME = 'Justin Goff';
export const BUILDER_URL = 'https://github.com/justinrgoff';

// The site's own pages, in navigation order. The header carries the first
// four plus Docs and GitHub; the footer carries all of them.
export const PAGES = [
  { href: '/what-it-is/', label: 'What it is' },
  { href: '/demo/', label: 'Demo' },
  { href: '/where-it-fits/', label: 'Where it fits' },
  { href: '/get-started/', label: 'Get started' },
  { href: '/why-open-source/', label: 'Why open source' },
  { href: '/about/', label: 'About' },
];
export const HEADER_PAGES = PAGES.slice(0, 4);

// Cloudflare Web Analytics beacon token (W-07).
// Empty string disables the beacon. Filled by its own one-line PR once the
// site exists in the Cloudflare dashboard. Never commit any other tracker.
export const CF_BEACON_TOKEN = '6bc011dfdf2f442aa8d8d58bc8ad011d';
