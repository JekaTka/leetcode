const romanToInt = require('../roman-to-integer');

describe('romanToInt', () => {
    test('should convert roman string to number', () => {
      expect(romanToInt('I')).toBe(1);
      expect(romanToInt('IV')).toBe(4);
      expect(romanToInt('XXVI')).toBe(26);
    });
});