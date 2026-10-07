/**
 * Creates an immutable copy of the given array.
 */
export function toReadonlyArray<T>(source: Array<T>): ReadonlyArray<T> {
  const clone = [...source] as Array<T>
  Object.freeze(clone)
  return clone
}
