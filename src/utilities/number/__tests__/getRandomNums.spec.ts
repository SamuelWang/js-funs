import { getRandomNums } from '../getRandomNums';

describe('getRandomNums', () => {
  it.each([10, 100])('should get %d numbers', (length: number) => {
    const results = getRandomNums(length);
    expect(results.length).toBe(length);
  });

  it.each([
    [10, 10, 100],
    [31.4, 3.14, 31.4],
  ])(
    'should get %d numbers that are between %d (inclusive) and %d (exclusive)',
    (length: number, min: number, max: number) => {
      const results = getRandomNums(length, min, max);
      expect(results.length).toBe(Math.round(length));

      const allInLimitations = results.every((num) => min <= num && num < max);
      expect(allInLimitations).toBeTruthy();
    }
  );
});
