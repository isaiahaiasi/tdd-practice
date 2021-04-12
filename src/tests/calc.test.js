import calc from '../calc';

test('add', () => {
  const c = calc();
  expect(c.add(1, 2)).toBe(3);
});

test('subtract', () => {
  const c = calc();
  expect(c.subtract(1, 2)).toBe(-1);
});

test('multiply', () => {
  const c = calc();
  expect(c.multiply(3, 4)).toBe(12);
});

test('divide', () => {
  const c = calc();
  expect(c.divide(12, 4)).toBe(3);
});
