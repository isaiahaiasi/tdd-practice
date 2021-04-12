import reverseString from '../reverse-string';

test('Happy path (1): "hello"', () => {
  expect(reverseString('hello')).toBe('olleh');
});
