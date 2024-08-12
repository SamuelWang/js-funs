/**
 * A function for getting a random integer.
 * @param min The minimum integer (inclusive).
 * @param max The maximum integer (exclusive).
 * @returns The generated integer.
 */
export function getRandomInt(
  min: number = 0,
  max: number = Number.MAX_VALUE
): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}
