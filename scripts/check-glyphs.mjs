// Glyph gate (W-12): the self-hosted fonts are latin subsets, so every
// character in the site's source must be one the subsets carry. Icons are
// inline SVG, never text glyphs, so arrows, stars, and symbols outside the
// ranges below are refused here rather than falling back to another face.
//
//   node scripts/check-glyphs.mjs        exits 1 and lists any offender
//
// Allowed: ASCII, Latin-1 Supplement (the middle dot, the copyright sign,
// accents), the general punctuation block (curly quotes, the ellipsis; the
// em and en dash are refused separately by the CLAUDE.md dash gate), the
// euro and trademark signs, the minus sign, and the division slash. These
// are the ranges the Fontsource latin subsets cover.
import fs from 'node:fs';
import path from 'node:path';

const roots = ['src'];
const exts = new Set(['.astro', '.ts', '.css', '.md']);
const allowed = (cp) =>
  cp <= 0x00ff ||
  (cp >= 0x2010 && cp <= 0x2027) ||
  (cp >= 0x2030 && cp <= 0x205f) ||
  cp === 0x20ac ||
  cp === 0x2122 ||
  cp === 0x2212 ||
  cp === 0x2215;

let bad = 0;
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (exts.has(path.extname(p))) check(p);
  }
};
const check = (file) => {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    for (const ch of line) {
      const cp = ch.codePointAt(0);
      if (!allowed(cp)) {
        bad += 1;
        console.log(`${file}:${i + 1}: U+${cp.toString(16).toUpperCase().padStart(4, '0')} ${JSON.stringify(ch)}`);
      }
    }
  });
};
roots.forEach(walk);
if (bad) {
  console.log(`${bad} character(s) outside the latin subset`);
  process.exit(1);
}
console.log('glyphs: clean');
