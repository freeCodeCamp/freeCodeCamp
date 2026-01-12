/**
 * Interleaves an array of items with a separator element between each item.
 * @param items - The array of items to interleave
 * @param separator - A function that returns the separator element for each position
 * @returns An array with separators inserted between items
 */
export function interleave<T>(
  items: T[],
  separator: (index: number) => T
): T[] {
  const result: T[] = [];
  items.forEach((item, index) => {
    result.push(item);
    if (index < items.length - 1) {
      result.push(separator(index));
    }
  });
  return result;
}
