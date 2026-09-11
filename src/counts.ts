// The two register counts the site states, as figures or as words (W-20).
// Held to the pipeline repository's registers on main by
// scripts/check-counts.mjs, which CI runs on every pull request: a count
// that drifts fails the gate rather than the reader. A page never carries
// either number as a literal; it renders DECISIONS or FINDINGS from here.
export const DECISIONS = 42;
export const FINDINGS = 58;

const ONES = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
  'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen', 'eighteen', 'nineteen',
];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

// 'forty-two', 'fifty-eight': the form the prose uses, for 0 through 99.
export function words(n: number): string {
  if (!Number.isInteger(n) || n < 0 || n > 99) throw new Error(`words(${n}): 0 through 99 only`);
  if (n < 20) return ONES[n];
  const tens = TENS[Math.floor(n / 10)];
  const ones = n % 10;
  return ones === 0 ? tens : `${tens}-${ONES[ones]}`;
}

// 'Forty-two': the same at the head of a sentence.
export function Words(n: number): string {
  const w = words(n);
  return w.charAt(0).toUpperCase() + w.slice(1);
}
