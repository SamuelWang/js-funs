import { getRandomInts } from '../getRandomInts';

describe('getRandomInts', () => {
  it.each([10, 100])('should get %d integers', (length: number) => {
    const results = getRandomInts(length);
    expect(results.length).toBe(length);
  });

  it.each([
    [10, 10, 100],
    [31.4, 3.14, 31.4],
  ])(
    'should get %d integers that are between %d (inclusive) and %d (exclusive)',
    (length: number, min: number, max: number) => {
      const results = getRandomInts(length, min, max);
      expect(results.length).toBe(Math.round(length));

      const allInLimitations = results.every((num) => {
        if (!(Number.isInteger(num) && min <= num && num < max)) {
          console.log(num);
        }
        return Number.isInteger(num) && min <= num && num < max;
      });
      expect(allInLimitations).toBeTruthy();
    }
  );
});
