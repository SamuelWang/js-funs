export function bubbleSort<T>(
  list: T[],
  comparison: (a: T, b: T) => number
): T[] {
  const resultList = list.slice();
  let hasSwapped = true;

  while (hasSwapped) {
    hasSwapped = false;

    for (let i = 0; i < list.length - 1; i++) {
      const a = resultList[i];
      const b = resultList[i + 1];
      const result = comparison(a, b);

      if (result > 0) {
        const temp = resultList[i];
        resultList[i] = resultList[i + 1];
        resultList[i + 1] = temp;
        hasSwapped = true;
      }
    }
  }

  return resultList;
}
