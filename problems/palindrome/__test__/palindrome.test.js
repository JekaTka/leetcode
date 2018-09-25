const isPalindrome = require('../palindrome');

describe('palindrome', () => {
    test('should check palindrome number', () => {
      expect(isPalindrome(100)).toBe(false);
      expect(isPalindrome(123)).toBe(false);
      expect(isPalindrome(-3200)).toBe(false);
      expect(isPalindrome(1221)).toBe(true);
      expect(isPalindrome(121)).toBe(true);
    });
});