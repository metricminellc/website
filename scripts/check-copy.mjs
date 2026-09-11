// The three copy greps of CLAUDE.md, as one script CI can run (W-20):
// no em or en dash; none of the words the employer-safe rule bans; no
// service-level claim. Scope: src/, README.md, docs/, scripts/. The banned
// words are assembled from parts so this file passes its own gate.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOTS = ['src', 'README.md', 'docs', 'scripts'];
const DASHES = /[\u2014\u2013]/;
const BANNED = new RegExp(
  ['port' + 'folio', 'hir' + 'ing', 'recr' + 'uit', 'res' + 'ume', 'through' + 'put', 'trusted ' + 'by'].join('|'),
  'i',
);
const SERVICE_LEVEL = new RegExp('\\b' + 's' + 'la' + '\\b', 'i');

function* walk(p) {
  const st = statSync(p);
  if (st.isDirectory()) {
    for (const n of readdirSync(p)) yield* walk(join(p, n));
  } else {
    yield p;
  }
}

let problems = 0;
let files = 0;
for (const root of ROOTS) {
  for (const f of walk(root)) {
    if (/\.(png|jpg|jpeg|webp|svg|woff2|ico)$/i.test(f)) continue;
    files += 1;
    const lines = readFileSync(f, 'utf8').split('\n');
    lines.forEach((line, i) => {
      for (const [name, rx] of [['dash', DASHES], ['banned word', BANNED], ['service-level claim', SERVICE_LEVEL]]) {
        if (rx.test(line)) {
          problems += 1;
          console.log(`${name}: ${f}:${i + 1}: ${line.trim().slice(0, 100)}`);
        }
      }
    });
  }
}
console.log(`copy: ${files} files, ${problems} problem(s)`);
process.exit(problems ? 1 : 0);
