import { getRandomInt } from '../getRandomInt';

describe('getRandomInt', () => {
  it.each([10, 326.78])(
    'should get a integrer that is less than %d',
    (max: number) => {
      const result = getRandomInt(max);
      expect(result < max).toBeTruthy();
      expect(Number.isInteger(result)).toBeTruthy();
    }
  );
});
