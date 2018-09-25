const reverse = require('../reverse-integer');

describe('reverse-integer', () => {
    test('should reverse integer', () => {
      expect(reverse(100)).toBe(1);
      expect(reverse(123)).toBe(321);
      expect(reverse(-3200)).toBe(-23);
      expect(reverse(100000000000000000000000000000)).toBe(0);
    });
});