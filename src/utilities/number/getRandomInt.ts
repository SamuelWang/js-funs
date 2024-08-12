/**
 * A function for getting a random integer.
 * @param min The generated integer will be greater than or equal to this minimum number.
 * @param max The generated integer will be less than this maximum number.
 * @returns The generated integer.
 */
export function getRandomInt(
  min: number = 0,
  max: number = Number.MAX_VALUE
): number {
  return Math.floor(Math.random() * max) + Math.floor(min);
}
