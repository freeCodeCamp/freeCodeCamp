/**
 * Wrapper around `IterableIterator` interface
 * offering a set of helpers to deal with iterations in a simple way
 *
 * @remarks Since 0.0.7
 * @public
 */
export declare class Stream<T> implements IterableIterator<T> {
    /**
     * Create an empty stream of T
     * @remarks Since 0.0.1
     */
    static nil<T>(): Stream<T>;
    /**
     * Create a stream of T from a variable number of elements
     *
     * @param elements - Elements used to create the Stream
     * @remarks Since 2.12.0
     */
    static of<T>(...elements: T[]): Stream<T>;
    /**
     * Create a Stream based on `g`
     * @param g - Underlying data of the Stream
     */
    constructor(/** @internal */ g: IterableIterator<T>);
    next(): IteratorResult<T>;
    [Symbol.iterator](): IterableIterator<T>;
    /**
     * Map all elements of the Stream using `f`
     *
     * WARNING: It closes the current stream
     *
     * @param f - Mapper function
     * @remarks Since 0.0.1
     */
    map<U>(f: (v: T) => U): Stream<U>;
    /**
     * Flat map all elements of the Stream using `f`
     *
     * WARNING: It closes the current stream
     *
     * @param f - Mapper function
     * @remarks Since 0.0.1
     */
    flatMap<U>(f: (v: T) => IterableIterator<U>): Stream<U>;
    /**
     * Drop elements from the Stream while `f(element) === true`
     *
     * WARNING: It closes the current stream
     *
     * @param f - Drop condition
     * @remarks Since 0.0.1
     */
    dropWhile(f: (v: T) => boolean): Stream<T>;
    /**
     * Drop `n` first elements of the Stream
     *
     * WARNING: It closes the current stream
     *
     * @param n - Number of elements to drop
     * @remarks Since 0.0.1
     */
    drop(n: number): Stream<T>;
    /**
     * Take elements from the Stream while `f(element) === true`
     *
     * WARNING: It closes the current stream
     *
     * @param f - Take condition
     * @remarks Since 0.0.1
     */
    takeWhile(f: (v: T) => boolean): Stream<T>;
    /**
     * Take `n` first elements of the Stream
     *
     * WARNING: It closes the current stream
     *
     * @param n - Number of elements to take
     * @remarks Since 0.0.1
     */
    take(n: number): Stream<T>;
    /**
     * Filter elements of the Stream
     *
     * WARNING: It closes the current stream
     *
     * @param f - Elements to keep
     * @remarks Since 1.23.0
     */
    filter<U extends T>(f: (v: T) => v is U): Stream<U>;
    /**
     * Filter elements of the Stream
     *
     * WARNING: It closes the current stream
     *
     * @param f - Elements to keep
     * @remarks Since 0.0.1
     */
    filter(f: (v: T) => boolean): Stream<T>;
    /**
     * Check whether all elements of the Stream are successful for `f`
     *
     * WARNING: It closes the current stream
     *
     * @param f - Condition to check
     * @remarks Since 0.0.1
     */
    every(f: (v: T) => boolean): boolean;
    /**
     * Check whether one of the elements of the Stream is successful for `f`
     *
     * WARNING: It closes the current stream
     *
     * @param f - Condition to check
     * @remarks Since 0.0.1
     */
    has(f: (v: T) => boolean): [boolean, T | null];
    /**
     * Join `others` Stream to the current Stream
     *
     * WARNING: It closes the current stream and the other ones (as soon as it iterates over them)
     *
     * @param others - Streams to join to the current Stream
     * @remarks Since 0.0.1
     */
    join(...others: IterableIterator<T>[]): Stream<T>;
    /**
     * Take the `nth` element of the Stream of the last (if it does not exist)
     *
     * WARNING: It closes the current stream
     *
     * @param nth - Position of the element to extract
     * @remarks Since 0.0.12
     */
    getNthOrLast(nth: number): T | null;
}
/**
 * Create a Stream based on `g`
 *
 * @param g - Underlying data of the Stream
 *
 * @remarks Since 0.0.7
 * @public
 */
export declare function stream<T>(g: IterableIterator<T>): Stream<T>;
