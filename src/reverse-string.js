export default function reverseString(str) {
  const strArray = [...str];
  const reversedStr = strArray.reduce(
    (acc, _, i) => acc + str[str.length - i - 1],
    ''
  );
  return reversedStr;
}
