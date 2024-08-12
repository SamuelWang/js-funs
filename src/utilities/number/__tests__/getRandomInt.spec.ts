import { getRandomInt } from '../getRandomInt';

describe('getRandomInt', () => {
  it.each([10, 123.456])(
    'should get a integer that is greater than or equal to %d and is less than the maximum of Number',
    (min: number) => {
      const result = getRandomInt(min);
      expect(result >= min).toBeTruthy();
      expect(result < Number.MAX_VALUE).toBeTruthy();
      expect(Number.isInteger(result)).toBeTruthy();
    }
  );

  it.each([10, 123.456])(
    'should get a integer that is less than %d',
    (max: number) => {
      const result = getRandomInt(undefined, max);
      expect(result >= 0).toBeTruthy();
      expect(result < max).toBeTruthy();
      expect(Number.isInteger(result)).toBeTruthy();
    }
  );

  it.each([
    [0, 10],
    [3.14, 123.456],
    [10, 100],
  ])(
    'should get a integer that is greater than or equal to %d and is less than %d',
    (min: number, max: number) => {
      const result = getRandomInt(min, max);
      expect(result >= min).toBeTruthy();
      expect(result < max).toBeTruthy();
      expect(Number.isInteger(result)).toBeTruthy();
    }
  );
});
