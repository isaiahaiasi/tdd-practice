// return a single character shifted by shift # of characters
// does not alter case
// loops if c + shift > 26
function mod(divisor, denominator) {
  return ((divisor % denominator) + denominator) % denominator;
}

function shiftChar(c, shift) {
  const code = c.charCodeAt(0);
  const base = code < 97 ? 65 : 97;
  return String.fromCharCode(mod(code + shift - base, 26) + base);
}

export default function caesar(str, shift) {
  return [...str].reduce(
    (acc, c) => (c.match(/[a-z]/i) ? acc + shiftChar(c, shift) : acc + c),
    ''
  );
}
