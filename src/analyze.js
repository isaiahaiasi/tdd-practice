// return { average, min, max, length}
export default function analyze(arr) {
  const sum = arr.reduce((acc, n) => acc + n);
  const average = sum / arr.length;
  const min = arr.reduce((acc, n) => (n < acc ? n : acc), arr[0]);
  const max = arr.reduce((acc, n) => (n > acc ? n : acc), arr[0]);
  return { average, min, max, length: arr.length };
}
