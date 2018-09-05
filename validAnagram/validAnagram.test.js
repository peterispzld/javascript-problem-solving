const validAnagram = require('./validAnagram');

test('first input length less than second input length', () => {
  expect(validAnagram('hello', 'hell')).toBe(false);
});

test('first input is not an anagram of the second input', () => {
  expect(validAnagram('road', 'code')).toBe(false);
});

test('two empty inputs', () => {
  expect(validAnagram('', '')).toBe(true);
});

test('first input is an anagram of the second input', () => {
  expect(validAnagram('abe', 'bae')).toBe(true);
});
