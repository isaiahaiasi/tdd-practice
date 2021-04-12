import caesar from '../caesar';

test('Preserves case', () => {
  expect(caesar('Hello', 13)).toBe('Uryyb');
});

test('Considers non-alpha chars', () => {
  expect(caesar('Hi Odie!123', 7)).toBe('Op Vkpl!123');
});

test('Handles (large) negative shifts', () => {
  expect(caesar('Hello Bob!', -28)).toBe('Fcjjm Zmz!');
});

test('Handles large positive shifts', () => {
  expect(caesar('Hello Bob!', 73)).toBe('Czggj Wjw!');
});
