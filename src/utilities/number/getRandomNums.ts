import { getRandomNum } from './getRandomNum';

/**
 * A function for getting random numbers of the n amount.
 * @param length The length of the number array.
 * @param min The minimum number (inclusive) of each number.
 * @param max The maximum number (exclusive) of each number.
 * @returns A array with random numbers.
 */
export function getRandomNums(
  length: number,
  min: number = 0,
  max: number = Number.MAX_VALUE
): number[] {
  const results: number[] = [];
  const len = Math.round(length);

  for (let i = 0; i < len; i++) {
    results.push(getRandomNum(min, max));
  }

  return results;
}
