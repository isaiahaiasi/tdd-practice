import analyze from '../analyze';

test('Average is accurate', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('Length is accurate', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test('Minimum is accurate', () => {
  expect(analyze([4, -3, 3, 4, 2, 6]).min).toBe(-3);
});

test('Maximum is accurate', () => {
  expect(analyze([4, -3, 23, 4, 2, 6]).max).toBe(23);
});
