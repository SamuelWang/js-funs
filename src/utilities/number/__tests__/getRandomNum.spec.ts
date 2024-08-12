import { getRandomNum } from '../getRandomNum';

describe('getRandomNum', () => {
  it.each([10, 123.456])(
    'should get a number that is greater than or equal to %d and is less than the maximum of Number',
    (min: number) => {
      const result = getRandomNum(min);
      expect(result >= min).toBeTruthy();
      expect(result < Number.MAX_VALUE).toBeTruthy();
      expect(Number.isFinite(result)).toBeTruthy();
    }
  );

  it.each([10, 123.456])(
    'should get a number that is less than %d',
    (max: number) => {
      const result = getRandomNum(undefined, max);
      expect(result >= 0).toBeTruthy();
      expect(result < max).toBeTruthy();
      expect(Number.isFinite(result)).toBeTruthy();
    }
  );

  it.each([
    [0, 10],
    [3.14, 123.456],
    [10, 100],
  ])(
    'should get a number that is greater than or equal to %d and is less than %d',
    (min: number, max: number) => {
      const result = getRandomNum(min, max);
      expect(result >= min).toBeTruthy();
      expect(result < max).toBeTruthy();
      expect(Number.isFinite(result)).toBeTruthy();
    }
  );
});
