export default function capitalize(str) {
  const cpStr = [...str];
  cpStr[0] = str[0].toUpperCase();
  return cpStr.join('');
}
