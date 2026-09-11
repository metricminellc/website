// Every repository path src/consts.ts links into (REPO_BLOB and REPO_TREE
// entries, and any literal blob/main or tree/main path), held to the
// pipeline repository's tree on main (W-20). A shallow clone into a temp
// directory is the measurement; a link that resolves today and not
// tomorrow fails here before a reader finds it.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const consts = readFileSync('src/consts.ts', 'utf8');
const paths = new Set();
for (const m of consts.matchAll(/\$\{REPO_(?:BLOB|TREE)\}\/([A-Za-z0-9._/-]+)/g)) paths.add(m[1]);
for (const m of consts.matchAll(/metricminellc\/metricmine\/(?:blob|tree)\/main\/([A-Za-z0-9._/-]+)/g)) paths.add(m[1]);

const dir = mkdtempSync(join(tmpdir(), 'mm-paths-'));
try {
  execFileSync('git', ['clone', '--quiet', '--depth', '1', 'https://github.com/metricminellc/metricmine.git', dir], { stdio: 'inherit' });
  let missing = 0;
  for (const p of [...paths].sort()) {
    if (!existsSync(join(dir, p))) {
      missing += 1;
      console.log(`MISSING ${p}`);
    }
  }
  console.log(`repo paths: ${paths.size} checked, ${missing} missing`);
  process.exit(missing ? 1 : 0);
} finally {
  rmSync(dir, { recursive: true, force: true });
}
