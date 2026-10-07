/**
 * This is the same as TypeScript's `Iterable`, but with all three type parameters.
 * @todo Remove once TypeScript 5.6 is the minimum.
 */
export interface Iterable<T, TReturn, TNext> {
  [Symbol.iterator](): Iterator<T, TReturn, TNext>
}

/**
 * This is the same as TypeScript's `AsyncIterable`, but with all three type parameters.
 * @todo Remove once TypeScript 5.6 is the minimum.
 */
export interface AsyncIterable<T, TReturn, TNext> {
  [Symbol.asyncIterator](): AsyncIterator<T, TReturn, TNext>
}

/**
 * Determines if the given function is an iterator.
 */
export function isIterable<IteratorType>(
  fn: any,
): fn is
  | Iterable<IteratorType, IteratorType, IteratorType>
  | AsyncIterable<IteratorType, IteratorType, IteratorType> {
  if (!fn) {
    return false
  }

  return (
    Reflect.has(fn, Symbol.iterator) || Reflect.has(fn, Symbol.asyncIterator)
  )
}
