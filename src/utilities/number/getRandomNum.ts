/**
 * A function for getting a random number.
 * @param min The generated number will be greater than or equal to this minimum number.
 * @param max The generated number will be less than this maximum number.
 * @returns The generated number.
 */
export function getRandomNum(
  min: number = 0,
  max: number = Number.MAX_VALUE
): number {
  return Math.random() * (max - min) + min;
}
