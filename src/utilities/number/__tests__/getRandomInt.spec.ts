import { getRandomInt } from '../getRandomInt';

describe('getRandomInt', () => {
  it.each([
    [0, 10],
    [3.14, 123.456],
    [10, 100],
  ])(
    'should get a integer that is between %d (inclusive) and %d (exclusive)',
    (min: number, max: number) => {
      for (let i = 0; i < 25; i++) {
        const result = getRandomInt(min, max);
        expect(result >= min).toBeTruthy();
        expect(result < max).toBeTruthy();
        expect(Number.isInteger(result)).toBeTruthy();
      }
    }
  );
});
