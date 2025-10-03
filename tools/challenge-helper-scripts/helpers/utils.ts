export function insertInto<T>(arr: T[], index: number, elem: T): T[] {
  if (index >= arr.length) return [...arr, elem];
  if (index <= 0) return [elem, ...arr];

  return arr.flatMap((x, id) => {
    return id === index ? [elem, x] : x;
  });
}
