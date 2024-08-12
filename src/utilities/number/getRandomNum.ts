/**
 * A function for getting a random number.
 * @param min The minimum number (inclusive).
 * @param max The maximum number (exclusive).
 * @returns The generated number.
 */
export function getRandomNum(
  min: number = 0,
  max: number = Number.MAX_VALUE
): number {
  return Math.random() * (max - min) + min;
}
