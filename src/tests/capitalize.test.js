import capitalize from '../capitalize';

test('Happy path (1): "hello"', () => {
  expect(capitalize('hello')).toBe('Hello');
});
