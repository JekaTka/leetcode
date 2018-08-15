const twosum = require('../twosum');

describe('twosum', () => {
    test('should calculate twosum', () => {
      expect(twosum([2, 7, 11, 15], 9)).toEqual([0, 1]);
      expect(twosum([2, 7, 11, 15], 18)).toEqual([1, 2]);
      expect(twosum([2, 3, 3], 6)).toEqual([1, 2]);
      expect(twosum([1, 4, 3], 4)).toEqual([0, 2]);
      expect(twosum([1, 3, 3], 4)).toEqual([0, 1]);
    });

    test('should return empty array', () => {
        expect(twosum([2, 7, 11, 15], 20)).toEqual([]);
      });
  });