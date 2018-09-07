const countUniqueValues = require('./count-unique-values');

test('sorted array', () => {
    expect(countUniqueValues([-2, 7, 7, 7, 11])).toBe(3);
});
