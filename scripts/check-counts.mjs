// The two register counts in src/counts.ts, held to the pipeline
// repository's registers on main (W-20). A decision is a "### D-nn"
// heading in docs/decisions/decision-register.md; a finding is a
// "### F-nn" heading in docs/verification/gate_proof_findings.md. Needs
// the network; CI has it, and a local run says so when it does not.
import { readFileSync } from 'node:fs';

const RAW = 'https://raw.githubusercontent.com/metricminellc/metricmine/main';
const SOURCES = [
  ['DECISIONS', `${RAW}/docs/decisions/decision-register.md`, /^### D-\d+$/gm],
  ['FINDINGS', `${RAW}/docs/verification/gate_proof_findings.md`, /^### F-\d+$/gm],
];

const counts = readFileSync('src/counts.ts', 'utf8');
function stated(name) {
  const m = counts.match(new RegExp(`export const ${name} = (\\d+);`));
  if (!m) throw new Error(`src/counts.ts does not state ${name}`);
  return Number(m[1]);
}

let problems = 0;
for (const [name, url, rx] of SOURCES) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  const measured = ((await res.text()).match(rx) || []).length;
  const site = stated(name);
  const ok = measured === site;
  if (!ok) problems += 1;
  console.log(`${name.toLowerCase()}: site ${site}, register ${measured}${ok ? '' : '  <-- DRIFT'}`);
}
console.log(`counts: ${problems ? `${problems} drifted` : 'clean'}`);
process.exit(problems ? 1 : 0);
