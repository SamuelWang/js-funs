import { getRandomInt } from './getRandomInt';

/**
 * A function for getting random integers of the n amount.
 * @param length The length of the integer array.
 * @param min The minimum number (inclusive) of each integer.
 * @param max The maximum number (exclusive) of each integer.
 * @returns A array with random integers.
 */
export function getRandomInts(
  length: number,
  min: number = 0,
  max: number = Number.MAX_VALUE
): number[] {
  const results: number[] = [];
  const len = Math.round(length);

  for (let i = 0; i < len; i++) {
    results.push(getRandomInt(min, max));
  }

  return results;
}
