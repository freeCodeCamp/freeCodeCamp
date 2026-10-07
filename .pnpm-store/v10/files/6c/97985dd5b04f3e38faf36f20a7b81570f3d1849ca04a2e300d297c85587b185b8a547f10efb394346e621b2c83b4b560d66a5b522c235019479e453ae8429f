declare module "lmdb" {
    function clearKeptObjects(): void;
}
/**
 * Wrapper for any iterable providing chainable interface and convenience methods
 * similar to array.
 *
 * Additionally provides convenience methods for sorted iterables.
 *
 * Note: avoiding async iterables because of perf reasons, see https://github.com/nodejs/node/issues/31979
 * (fortunately lmdb can traverse stuff in sync manner very fast)
 */
export declare class GatsbyIterable<T> {
    private source;
    constructor(source: Iterable<T> | (() => Iterable<T>));
    [Symbol.iterator](): Iterator<T>;
    concat<U>(other: Iterable<U>): GatsbyIterable<T | U>;
    map<U>(fn: (entry: T, index: number) => U): GatsbyIterable<U>;
    filter(predicate: (entry: T) => unknown): GatsbyIterable<T>;
    slice(start: number, end?: number): GatsbyIterable<T>;
    deduplicate(keyFn?: (entry: T) => unknown): GatsbyIterable<T>;
    forEach(callback: (entry: T, index: number) => unknown): void;
    /**
     * Assuming both this and the other iterable are sorted
     * produces the new sorted iterable with interleaved values.
     *
     * Note: this method is not removing duplicates
     */
    mergeSorted<U = T>(other: Iterable<U>, comparator?: (a: T | U, b: T | U) => number): GatsbyIterable<T | U>;
    /**
     * Assuming both this and the other iterable are sorted
     * produces the new sorted iterable with values from this iterable
     * that also exist in the other iterable.
     */
    intersectSorted<U = T>(other: Iterable<U>, comparator?: (a: T | U, b: T | U) => number): GatsbyIterable<T | U>;
    /**
     * Assuming this iterable is sorted, removes duplicates from it
     * by applying comparator(prev, current) to sibling iterable values.
     *
     * Comparator function is expected to return 0 when items are equal,
     * similar to Array.prototype.sort() argument.
     *
     * If comparator is not set, uses strict === comparison
     */
    deduplicateSorted(comparator?: (a: T, b: T) => number): GatsbyIterable<T>;
}
/**
 * Returns true when passed value is iterable
 */
export declare function isIterable(obj: unknown): obj is Iterable<any>;
export declare function isNonArrayIterable<T>(value: unknown): value is Iterable<T>;
