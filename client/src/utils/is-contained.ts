// Performs a check if the items in `value` exist in `other`
export function isContained(value: string[], other: string[]): boolean {
  return value.every(i => other.includes(i));
}
