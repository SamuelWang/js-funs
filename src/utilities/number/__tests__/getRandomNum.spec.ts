import { getRandomNum } from '../getRandomNum';

describe('getRandomNum', () => {
  it.each([
    [0, 10],
    [3.14, 123.456],
    [10, 100],
  ])(
    'should get a number that is between %d (inclusive) and %d (exclusive)',
    (min: number, max: number) => {
      for (let i = 0; i < 25; i++) {
        const result = getRandomNum(min, max);
        expect(result >= min).toBeTruthy();
        expect(result < max).toBeTruthy();
        expect(Number.isFinite(result)).toBeTruthy();
      }
    }
  );
});
