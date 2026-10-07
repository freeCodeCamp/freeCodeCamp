/**
 * This is the same as TypeScript's `Iterable`, but with all three type parameters.
 * @todo Remove once TypeScript 5.6 is the minimum.
 */
interface Iterable<T, TReturn, TNext> {
    [Symbol.iterator](): Iterator<T, TReturn, TNext>;
}
/**
 * This is the same as TypeScript's `AsyncIterable`, but with all three type parameters.
 * @todo Remove once TypeScript 5.6 is the minimum.
 */
interface AsyncIterable<T, TReturn, TNext> {
    [Symbol.asyncIterator](): AsyncIterator<T, TReturn, TNext>;
}
/**
 * Determines if the given function is an iterator.
 */
declare function isIterable<IteratorType>(fn: any): fn is Iterable<IteratorType, IteratorType, IteratorType> | AsyncIterable<IteratorType, IteratorType, IteratorType>;

export { type AsyncIterable, type Iterable, isIterable };
