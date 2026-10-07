/**
 * This module provides utility functions for working with arrays in TypeScript.
 *
 * @since 2.0.0
 */
import * as Either from "./Either.js";
import * as Equivalence from "./Equivalence.js";
import type { LazyArg } from "./Function.js";
import type { TypeLambda } from "./HKT.js";
import * as Option from "./Option.js";
import * as Order from "./Order.js";
import * as Predicate from "./Predicate.js";
import * as Record from "./Record.js";
import type { NoInfer, TupleOf } from "./Types.js";
/**
 * @category type lambdas
 * @since 2.0.0
 */
export interface ReadonlyArrayTypeLambda extends TypeLambda {
    readonly type: ReadonlyArray<this["Target"]>;
}
/**
 * @category models
 * @since 2.0.0
 */
export type NonEmptyReadonlyArray<A> = readonly [A, ...Array<A>];
/**
 * @category models
 * @since 2.0.0
 */
export type NonEmptyArray<A> = [A, ...Array<A>];
/**
 * Builds a `NonEmptyArray` from an non-empty collection of elements.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.make(1, 2, 3)
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const make: <Elements extends NonEmptyArray<any>>(...elements: Elements) => NonEmptyArray<Elements[number]>;
/**
 * Creates a new `Array` of the specified length.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.allocate<number>(3)
 * console.log(result) // [ <3 empty items> ]
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const allocate: <A = never>(n: number) => Array<A | undefined>;
/**
 * Return a `NonEmptyArray` of length `n` with element `i` initialized with `f(i)`.
 *
 * **Note**. `n` is normalized to an integer >= 1.
 *
 * **Example**
 *
 * ```ts
 * import { makeBy } from "effect/Array"
 *
 * const result = makeBy(5, n => n * 2)
 * console.log(result) // [0, 2, 4, 6, 8]
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const makeBy: {
    /**
     * Return a `NonEmptyArray` of length `n` with element `i` initialized with `f(i)`.
     *
     * **Note**. `n` is normalized to an integer >= 1.
     *
     * **Example**
     *
     * ```ts
     * import { makeBy } from "effect/Array"
     *
     * const result = makeBy(5, n => n * 2)
     * console.log(result) // [0, 2, 4, 6, 8]
     * ```
     *
     * @category constructors
     * @since 2.0.0
     */
    <A>(f: (i: number) => A): (n: number) => NonEmptyArray<A>;
    /**
     * Return a `NonEmptyArray` of length `n` with element `i` initialized with `f(i)`.
     *
     * **Note**. `n` is normalized to an integer >= 1.
     *
     * **Example**
     *
     * ```ts
     * import { makeBy } from "effect/Array"
     *
     * const result = makeBy(5, n => n * 2)
     * console.log(result) // [0, 2, 4, 6, 8]
     * ```
     *
     * @category constructors
     * @since 2.0.0
     */
    <A>(n: number, f: (i: number) => A): NonEmptyArray<A>;
};
/**
 * Return a `NonEmptyArray` containing a range of integers, including both endpoints.
 *
 * **Example**
 *
 * ```ts
 * import { range } from "effect/Array"
 *
 * const result = range(1, 3)
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const range: (start: number, end: number) => NonEmptyArray<number>;
/**
 * Return a `NonEmptyArray` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to an integer >= 1.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.replicate("a", 3)
 * console.log(result) // ["a", "a", "a"]
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const replicate: {
    /**
     * Return a `NonEmptyArray` containing a value repeated the specified number of times.
     *
     * **Note**. `n` is normalized to an integer >= 1.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.replicate("a", 3)
     * console.log(result) // ["a", "a", "a"]
     * ```
     *
     * @category constructors
     * @since 2.0.0
     */
    (n: number): <A>(a: A) => NonEmptyArray<A>;
    /**
     * Return a `NonEmptyArray` containing a value repeated the specified number of times.
     *
     * **Note**. `n` is normalized to an integer >= 1.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.replicate("a", 3)
     * console.log(result) // ["a", "a", "a"]
     * ```
     *
     * @category constructors
     * @since 2.0.0
     */
    <A>(a: A, n: number): NonEmptyArray<A>;
};
/**
 * Creates a new `Array` from an iterable collection of values.
 * If the input is already an array, it returns the input as-is.
 * Otherwise, it converts the iterable collection to an array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.fromIterable(new Set([1, 2, 3]))
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const fromIterable: <A>(collection: Iterable<A>) => Array<A>;
/**
 * Creates a new `Array` from a value that might not be an iterable.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * console.log(Array.ensure("a")) // ["a"]
 * console.log(Array.ensure(["a"])) // ["a"]
 * console.log(Array.ensure(["a", "b", "c"])) // ["a", "b", "c"]
 * ```
 *
 * @category constructors
 * @since 3.3.0
 */
export declare const ensure: <A>(self: ReadonlyArray<A> | A) => Array<A>;
/**
 * Takes a record and returns an array of tuples containing its keys and values.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.fromRecord({ a: 1, b: 2, c: 3 })
 * console.log(result) // [["a", 1], ["b", 2], ["c", 3]]
 * ```
 *
 * @category conversions
 * @since 2.0.0
 */
export declare const fromRecord: <K extends string, A>(self: Readonly<Record<K, A>>) => Array<[K, A]>;
/**
 * Converts an `Option` to an array.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Option } from "effect"
 *
 * console.log(Array.fromOption(Option.some(1))) // [1]
 * console.log(Array.fromOption(Option.none())) // []
 * ```
 *
 * @category conversions
 * @since 2.0.0
 */
export declare const fromOption: <A>(self: Option.Option<A>) => Array<A>;
/**
 * Matches the elements of an array, applying functions to cases of empty and non-empty arrays.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const match = Array.match({
 *   onEmpty: () => "empty",
 *   onNonEmpty: ([head, ...tail]) => `head: ${head}, tail: ${tail.length}`
 * })
 * console.log(match([])) // "empty"
 * console.log(match([1, 2, 3])) // "head: 1, tail: 2"
 * ```
 *
 * @category pattern matching
 * @since 2.0.0
 */
export declare const match: {
    /**
     * Matches the elements of an array, applying functions to cases of empty and non-empty arrays.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const match = Array.match({
     *   onEmpty: () => "empty",
     *   onNonEmpty: ([head, ...tail]) => `head: ${head}, tail: ${tail.length}`
     * })
     * console.log(match([])) // "empty"
     * console.log(match([1, 2, 3])) // "head: 1, tail: 2"
     * ```
     *
     * @category pattern matching
     * @since 2.0.0
     */
    <B, A, C = B>(options: {
        readonly onEmpty: LazyArg<B>;
        readonly onNonEmpty: (self: NonEmptyReadonlyArray<A>) => C;
    }): (self: ReadonlyArray<A>) => B | C;
    /**
     * Matches the elements of an array, applying functions to cases of empty and non-empty arrays.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const match = Array.match({
     *   onEmpty: () => "empty",
     *   onNonEmpty: ([head, ...tail]) => `head: ${head}, tail: ${tail.length}`
     * })
     * console.log(match([])) // "empty"
     * console.log(match([1, 2, 3])) // "head: 1, tail: 2"
     * ```
     *
     * @category pattern matching
     * @since 2.0.0
     */
    <A, B, C = B>(self: ReadonlyArray<A>, options: {
        readonly onEmpty: LazyArg<B>;
        readonly onNonEmpty: (self: NonEmptyReadonlyArray<A>) => C;
    }): B | C;
};
/**
 * Matches the elements of an array from the left, applying functions to cases of empty and non-empty arrays.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const matchLeft = Array.matchLeft({
 *   onEmpty: () => "empty",
 *   onNonEmpty: (head, tail) => `head: ${head}, tail: ${tail.length}`
 * })
 * console.log(matchLeft([])) // "empty"
 * console.log(matchLeft([1, 2, 3])) // "head: 1, tail: 2"
 * ```
 *
 * @category pattern matching
 * @since 2.0.0
 */
export declare const matchLeft: {
    /**
     * Matches the elements of an array from the left, applying functions to cases of empty and non-empty arrays.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const matchLeft = Array.matchLeft({
     *   onEmpty: () => "empty",
     *   onNonEmpty: (head, tail) => `head: ${head}, tail: ${tail.length}`
     * })
     * console.log(matchLeft([])) // "empty"
     * console.log(matchLeft([1, 2, 3])) // "head: 1, tail: 2"
     * ```
     *
     * @category pattern matching
     * @since 2.0.0
     */
    <B, A, C = B>(options: {
        readonly onEmpty: LazyArg<B>;
        readonly onNonEmpty: (head: A, tail: Array<A>) => C;
    }): (self: ReadonlyArray<A>) => B | C;
    /**
     * Matches the elements of an array from the left, applying functions to cases of empty and non-empty arrays.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const matchLeft = Array.matchLeft({
     *   onEmpty: () => "empty",
     *   onNonEmpty: (head, tail) => `head: ${head}, tail: ${tail.length}`
     * })
     * console.log(matchLeft([])) // "empty"
     * console.log(matchLeft([1, 2, 3])) // "head: 1, tail: 2"
     * ```
     *
     * @category pattern matching
     * @since 2.0.0
     */
    <A, B, C = B>(self: ReadonlyArray<A>, options: {
        readonly onEmpty: LazyArg<B>;
        readonly onNonEmpty: (head: A, tail: Array<A>) => C;
    }): B | C;
};
/**
 * Matches the elements of an array from the right, applying functions to cases of empty and non-empty arrays.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const matchRight = Array.matchRight({
 *   onEmpty: () => "empty",
 *   onNonEmpty: (init, last) => `init: ${init.length}, last: ${last}`
 * })
 * console.log(matchRight([])) // "empty"
 * console.log(matchRight([1, 2, 3])) // "init: 2, last: 3"
 * ```
 *
 * @category pattern matching
 * @since 2.0.0
 */
export declare const matchRight: {
    /**
     * Matches the elements of an array from the right, applying functions to cases of empty and non-empty arrays.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const matchRight = Array.matchRight({
     *   onEmpty: () => "empty",
     *   onNonEmpty: (init, last) => `init: ${init.length}, last: ${last}`
     * })
     * console.log(matchRight([])) // "empty"
     * console.log(matchRight([1, 2, 3])) // "init: 2, last: 3"
     * ```
     *
     * @category pattern matching
     * @since 2.0.0
     */
    <B, A, C = B>(options: {
        readonly onEmpty: LazyArg<B>;
        readonly onNonEmpty: (init: Array<A>, last: A) => C;
    }): (self: ReadonlyArray<A>) => B | C;
    /**
     * Matches the elements of an array from the right, applying functions to cases of empty and non-empty arrays.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const matchRight = Array.matchRight({
     *   onEmpty: () => "empty",
     *   onNonEmpty: (init, last) => `init: ${init.length}, last: ${last}`
     * })
     * console.log(matchRight([])) // "empty"
     * console.log(matchRight([1, 2, 3])) // "init: 2, last: 3"
     * ```
     *
     * @category pattern matching
     * @since 2.0.0
     */
    <A, B, C = B>(self: ReadonlyArray<A>, options: {
        readonly onEmpty: LazyArg<B>;
        readonly onNonEmpty: (init: Array<A>, last: A) => C;
    }): B | C;
};
/**
 * Prepend an element to the front of an `Iterable`, creating a new `NonEmptyArray`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.prepend([2, 3, 4], 1)
 * console.log(result) // [1, 2, 3, 4]
 * ```
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const prepend: {
    /**
     * Prepend an element to the front of an `Iterable`, creating a new `NonEmptyArray`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.prepend([2, 3, 4], 1)
     * console.log(result) // [1, 2, 3, 4]
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <B>(head: B): <A>(self: Iterable<A>) => NonEmptyArray<A | B>;
    /**
     * Prepend an element to the front of an `Iterable`, creating a new `NonEmptyArray`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.prepend([2, 3, 4], 1)
     * console.log(result) // [1, 2, 3, 4]
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, head: B): NonEmptyArray<A | B>;
};
/**
 * Prepends the specified prefix array (or iterable) to the beginning of the specified array (or iterable).
 * If either array is non-empty, the result is also a non-empty array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.prependAll([2, 3], [0, 1])
 * console.log(result) // [0, 1, 2, 3]
 * ```
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const prependAll: {
    /**
     * Prepends the specified prefix array (or iterable) to the beginning of the specified array (or iterable).
     * If either array is non-empty, the result is also a non-empty array.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.prependAll([2, 3], [0, 1])
     * console.log(result) // [0, 1, 2, 3]
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <S extends Iterable<any>, T extends Iterable<any>>(that: T): (self: S) => ReadonlyArray.OrNonEmpty<S, T, ReadonlyArray.Infer<S> | ReadonlyArray.Infer<T>>;
    /**
     * Prepends the specified prefix array (or iterable) to the beginning of the specified array (or iterable).
     * If either array is non-empty, the result is also a non-empty array.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.prependAll([2, 3], [0, 1])
     * console.log(result) // [0, 1, 2, 3]
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, that: NonEmptyReadonlyArray<B>): NonEmptyArray<A | B>;
    /**
     * Prepends the specified prefix array (or iterable) to the beginning of the specified array (or iterable).
     * If either array is non-empty, the result is also a non-empty array.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.prependAll([2, 3], [0, 1])
     * console.log(result) // [0, 1, 2, 3]
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: NonEmptyReadonlyArray<A>, that: Iterable<B>): NonEmptyArray<A | B>;
    /**
     * Prepends the specified prefix array (or iterable) to the beginning of the specified array (or iterable).
     * If either array is non-empty, the result is also a non-empty array.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.prependAll([2, 3], [0, 1])
     * console.log(result) // [0, 1, 2, 3]
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, that: Iterable<B>): Array<A | B>;
};
/**
 * Append an element to the end of an `Iterable`, creating a new `NonEmptyArray`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.append([1, 2, 3], 4);
 * console.log(result) // [1, 2, 3, 4]
 * ```
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const append: {
    /**
     * Append an element to the end of an `Iterable`, creating a new `NonEmptyArray`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.append([1, 2, 3], 4);
     * console.log(result) // [1, 2, 3, 4]
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <B>(last: B): <A>(self: Iterable<A>) => NonEmptyArray<A | B>;
    /**
     * Append an element to the end of an `Iterable`, creating a new `NonEmptyArray`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.append([1, 2, 3], 4);
     * console.log(result) // [1, 2, 3, 4]
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, last: B): NonEmptyArray<A | B>;
};
/**
 * Concatenates two arrays (or iterables), combining their elements.
 * If either array is non-empty, the result is also a non-empty array.
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const appendAll: {
    /**
     * Concatenates two arrays (or iterables), combining their elements.
     * If either array is non-empty, the result is also a non-empty array.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <S extends Iterable<any>, T extends Iterable<any>>(that: T): (self: S) => ReadonlyArray.OrNonEmpty<S, T, ReadonlyArray.Infer<S> | ReadonlyArray.Infer<T>>;
    /**
     * Concatenates two arrays (or iterables), combining their elements.
     * If either array is non-empty, the result is also a non-empty array.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, that: NonEmptyReadonlyArray<B>): NonEmptyArray<A | B>;
    /**
     * Concatenates two arrays (or iterables), combining their elements.
     * If either array is non-empty, the result is also a non-empty array.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: NonEmptyReadonlyArray<A>, that: Iterable<B>): NonEmptyArray<A | B>;
    /**
     * Concatenates two arrays (or iterables), combining their elements.
     * If either array is non-empty, the result is also a non-empty array.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, that: Iterable<B>): Array<A | B>;
};
/**
 * Accumulates values from an `Iterable` starting from the left, storing
 * each intermediate result in an array. Useful for tracking the progression of
 * a value through a series of transformations.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect";
 *
 * const result = Array.scan([1, 2, 3, 4], 0, (acc, value) => acc + value)
 * console.log(result) // [0, 1, 3, 6, 10]
 *
 * // Explanation:
 * // This function starts with the initial value (0 in this case)
 * // and adds each element of the array to this accumulator one by one,
 * // keeping track of the cumulative sum after each addition.
 * // Each of these sums is captured in the resulting array.
 * ```
 *
 * @category folding
 * @since 2.0.0
 */
export declare const scan: {
    /**
     * Accumulates values from an `Iterable` starting from the left, storing
     * each intermediate result in an array. Useful for tracking the progression of
     * a value through a series of transformations.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect";
     *
     * const result = Array.scan([1, 2, 3, 4], 0, (acc, value) => acc + value)
     * console.log(result) // [0, 1, 3, 6, 10]
     *
     * // Explanation:
     * // This function starts with the initial value (0 in this case)
     * // and adds each element of the array to this accumulator one by one,
     * // keeping track of the cumulative sum after each addition.
     * // Each of these sums is captured in the resulting array.
     * ```
     *
     * @category folding
     * @since 2.0.0
     */
    <B, A>(b: B, f: (b: B, a: A) => B): (self: Iterable<A>) => NonEmptyArray<B>;
    /**
     * Accumulates values from an `Iterable` starting from the left, storing
     * each intermediate result in an array. Useful for tracking the progression of
     * a value through a series of transformations.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect";
     *
     * const result = Array.scan([1, 2, 3, 4], 0, (acc, value) => acc + value)
     * console.log(result) // [0, 1, 3, 6, 10]
     *
     * // Explanation:
     * // This function starts with the initial value (0 in this case)
     * // and adds each element of the array to this accumulator one by one,
     * // keeping track of the cumulative sum after each addition.
     * // Each of these sums is captured in the resulting array.
     * ```
     *
     * @category folding
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, b: B, f: (b: B, a: A) => B): NonEmptyArray<B>;
};
/**
 * Accumulates values from an `Iterable` starting from the right, storing
 * each intermediate result in an array. Useful for tracking the progression of
 * a value through a series of transformations.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect";
 *
 * const result = Array.scanRight([1, 2, 3, 4], 0, (acc, value) => acc + value)
 * console.log(result) // [10, 9, 7, 4, 0]
 * ```
 *
 * @category folding
 * @since 2.0.0
 */
export declare const scanRight: {
    /**
     * Accumulates values from an `Iterable` starting from the right, storing
     * each intermediate result in an array. Useful for tracking the progression of
     * a value through a series of transformations.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect";
     *
     * const result = Array.scanRight([1, 2, 3, 4], 0, (acc, value) => acc + value)
     * console.log(result) // [10, 9, 7, 4, 0]
     * ```
     *
     * @category folding
     * @since 2.0.0
     */
    <B, A>(b: B, f: (b: B, a: A) => B): (self: Iterable<A>) => NonEmptyArray<B>;
    /**
     * Accumulates values from an `Iterable` starting from the right, storing
     * each intermediate result in an array. Useful for tracking the progression of
     * a value through a series of transformations.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect";
     *
     * const result = Array.scanRight([1, 2, 3, 4], 0, (acc, value) => acc + value)
     * console.log(result) // [10, 9, 7, 4, 0]
     * ```
     *
     * @category folding
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, b: B, f: (b: B, a: A) => B): NonEmptyArray<B>;
};
/**
 * Determine if `unknown` is an Array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * console.log(Array.isArray(null)) // false
 * console.log(Array.isArray([1, 2, 3])) // true
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
export declare const isArray: {
    /**
     * Determine if `unknown` is an Array.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * console.log(Array.isArray(null)) // false
     * console.log(Array.isArray([1, 2, 3])) // true
     * ```
     *
     * @category guards
     * @since 2.0.0
     */
    (self: unknown): self is Array<unknown>;
    /**
     * Determine if `unknown` is an Array.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * console.log(Array.isArray(null)) // false
     * console.log(Array.isArray([1, 2, 3])) // true
     * ```
     *
     * @category guards
     * @since 2.0.0
     */
    <T>(self: T): self is Extract<T, ReadonlyArray<any>>;
};
/**
 * Determine if an `Array` is empty narrowing down the type to `[]`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * console.log(Array.isEmptyArray([])) // true
 * console.log(Array.isEmptyArray([1, 2, 3])) // false
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
export declare const isEmptyArray: <A>(self: Array<A>) => self is [];
/**
 * Determine if a `ReadonlyArray` is empty narrowing down the type to `readonly []`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * console.log(Array.isEmptyReadonlyArray([])) // true
 * console.log(Array.isEmptyReadonlyArray([1, 2, 3])) // false
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
export declare const isEmptyReadonlyArray: <A>(self: ReadonlyArray<A>) => self is readonly [];
/**
 * Determine if an `Array` is non empty narrowing down the type to `NonEmptyArray`.
 *
 * An `Array` is considered to be a `NonEmptyArray` if it contains at least one element.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * console.log(Array.isNonEmptyArray([])) // false
 * console.log(Array.isNonEmptyArray([1, 2, 3])) // true
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
export declare const isNonEmptyArray: <A>(self: Array<A>) => self is NonEmptyArray<A>;
/**
 * Determine if a `ReadonlyArray` is non empty narrowing down the type to `NonEmptyReadonlyArray`.
 *
 * A `ReadonlyArray` is considered to be a `NonEmptyReadonlyArray` if it contains at least one element.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * console.log(Array.isNonEmptyReadonlyArray([])) // false
 * console.log(Array.isNonEmptyReadonlyArray([1, 2, 3])) // true
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
export declare const isNonEmptyReadonlyArray: <A>(self: ReadonlyArray<A>) => self is NonEmptyReadonlyArray<A>;
/**
 * Return the number of elements in a `ReadonlyArray`.
 *
 * @category getters
 * @since 2.0.0
 */
export declare const length: <A>(self: ReadonlyArray<A>) => number;
/**
 * This function provides a safe way to read a value at a particular index from a `ReadonlyArray`.
 *
 * @category getters
 * @since 2.0.0
 */
export declare const get: {
    /**
     * This function provides a safe way to read a value at a particular index from a `ReadonlyArray`.
     *
     * @category getters
     * @since 2.0.0
     */
    (index: number): <A>(self: ReadonlyArray<A>) => Option.Option<A>;
    /**
     * This function provides a safe way to read a value at a particular index from a `ReadonlyArray`.
     *
     * @category getters
     * @since 2.0.0
     */
    <A>(self: ReadonlyArray<A>, index: number): Option.Option<A>;
};
/**
 * Gets an element unsafely, will throw on out of bounds.
 *
 * @since 2.0.0
 * @category unsafe
 */
export declare const unsafeGet: {
    /**
     * Gets an element unsafely, will throw on out of bounds.
     *
     * @since 2.0.0
     * @category unsafe
     */
    (index: number): <A>(self: ReadonlyArray<A>) => A;
    /**
     * Gets an element unsafely, will throw on out of bounds.
     *
     * @since 2.0.0
     * @category unsafe
     */
    <A>(self: ReadonlyArray<A>, index: number): A;
};
/**
 * Return a tuple containing the first element, and a new `Array` of the remaining elements, if any.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect";
 *
 * const result = Array.unprepend([1, 2, 3, 4])
 * console.log(result) // [1, [2, 3, 4]]
 * ```
 *
 * @category splitting
 * @since 2.0.0
 */
export declare const unprepend: <A>(self: NonEmptyReadonlyArray<A>) => [firstElement: A, remainingElements: Array<A>];
/**
 * Return a tuple containing a copy of the `NonEmptyReadonlyArray` without its last element, and that last element.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect";
 *
 * const result = Array.unappend([1, 2, 3, 4])
 * console.log(result) // [[1, 2, 3], 4]
 * ```
 *
 * @category splitting
 * @since 2.0.0
 */
export declare const unappend: <A>(self: NonEmptyReadonlyArray<A>) => [arrayWithoutLastElement: Array<A>, lastElement: A];
/**
 * Get the first element of a `ReadonlyArray`, or `None` if the `ReadonlyArray` is empty.
 *
 * @category getters
 * @since 2.0.0
 */
export declare const head: <A>(self: ReadonlyArray<A>) => Option.Option<A>;
/**
 * Get the first element of a non empty array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.headNonEmpty([1, 2, 3, 4])
 * console.log(result) // 1
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
export declare const headNonEmpty: <A>(self: NonEmptyReadonlyArray<A>) => A;
/**
 * Get the last element in a `ReadonlyArray`, or `None` if the `ReadonlyArray` is empty.
 *
 * @category getters
 * @since 2.0.0
 */
export declare const last: <A>(self: ReadonlyArray<A>) => Option.Option<A>;
/**
 * Get the last element of a non empty array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.lastNonEmpty([1, 2, 3, 4])
 * console.log(result) // 4
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
export declare const lastNonEmpty: <A>(self: NonEmptyReadonlyArray<A>) => A;
/**
 * Get all but the first element of an `Iterable`, creating a new `Array`, or `None` if the `Iterable` is empty.
 *
 * @category getters
 * @since 2.0.0
 */
export declare const tail: <A>(self: Iterable<A>) => Option.Option<Array<A>>;
/**
 * Get all but the first element of a `NonEmptyReadonlyArray`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.tailNonEmpty([1, 2, 3, 4])
 * console.log(result) // [2, 3, 4]
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
export declare const tailNonEmpty: <A>(self: NonEmptyReadonlyArray<A>) => Array<A>;
/**
 * Get all but the last element of an `Iterable`, creating a new `Array`, or `None` if the `Iterable` is empty.
 *
 * @category getters
 * @since 2.0.0
 */
export declare const init: <A>(self: Iterable<A>) => Option.Option<Array<A>>;
/**
 * Get all but the last element of a non empty array, creating a new array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.initNonEmpty([1, 2, 3, 4])
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
export declare const initNonEmpty: <A>(self: NonEmptyReadonlyArray<A>) => Array<A>;
/**
 * Keep only a max number of elements from the start of an `Iterable`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.take([1, 2, 3, 4, 5], 3)
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
export declare const take: {
    /**
     * Keep only a max number of elements from the start of an `Iterable`, creating a new `Array`.
     *
     * **Note**. `n` is normalized to a non negative integer.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.take([1, 2, 3, 4, 5], 3)
     * console.log(result) // [1, 2, 3]
     * ```
     *
     * @category getters
     * @since 2.0.0
     */
    (n: number): <A>(self: Iterable<A>) => Array<A>;
    /**
     * Keep only a max number of elements from the start of an `Iterable`, creating a new `Array`.
     *
     * **Note**. `n` is normalized to a non negative integer.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.take([1, 2, 3, 4, 5], 3)
     * console.log(result) // [1, 2, 3]
     * ```
     *
     * @category getters
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, n: number): Array<A>;
};
/**
 * Keep only a max number of elements from the end of an `Iterable`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.takeRight([1, 2, 3, 4, 5], 3)
 * console.log(result) // [3, 4, 5]
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
export declare const takeRight: {
    /**
     * Keep only a max number of elements from the end of an `Iterable`, creating a new `Array`.
     *
     * **Note**. `n` is normalized to a non negative integer.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.takeRight([1, 2, 3, 4, 5], 3)
     * console.log(result) // [3, 4, 5]
     * ```
     *
     * @category getters
     * @since 2.0.0
     */
    (n: number): <A>(self: Iterable<A>) => Array<A>;
    /**
     * Keep only a max number of elements from the end of an `Iterable`, creating a new `Array`.
     *
     * **Note**. `n` is normalized to a non negative integer.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.takeRight([1, 2, 3, 4, 5], 3)
     * console.log(result) // [3, 4, 5]
     * ```
     *
     * @category getters
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, n: number): Array<A>;
};
/**
 * Calculate the longest initial subarray for which all element satisfy the specified predicate, creating a new `Array`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.takeWhile([1, 3, 2, 4, 1, 2], x => x < 4)
 * console.log(result) // [1, 3, 2]
 *
 * // Explanation:
 * // - The function starts with the first element (`1`), which is less than `4`, so it adds `1` to the result.
 * // - The next element (`3`) is also less than `4`, so it adds `3`.
 * // - The next element (`2`) is again less than `4`, so it adds `2`.
 * // - The function then encounters `4`, which is not less than `4`. At this point, it stops checking further elements and finalizes the result.
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
export declare const takeWhile: {
    /**
     * Calculate the longest initial subarray for which all element satisfy the specified predicate, creating a new `Array`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.takeWhile([1, 3, 2, 4, 1, 2], x => x < 4)
     * console.log(result) // [1, 3, 2]
     *
     * // Explanation:
     * // - The function starts with the first element (`1`), which is less than `4`, so it adds `1` to the result.
     * // - The next element (`3`) is also less than `4`, so it adds `3`.
     * // - The next element (`2`) is again less than `4`, so it adds `2`.
     * // - The function then encounters `4`, which is not less than `4`. At this point, it stops checking further elements and finalizes the result.
     * ```
     *
     * @category getters
     * @since 2.0.0
     */
    <A, B extends A>(refinement: (a: NoInfer<A>, i: number) => a is B): (self: Iterable<A>) => Array<B>;
    /**
     * Calculate the longest initial subarray for which all element satisfy the specified predicate, creating a new `Array`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.takeWhile([1, 3, 2, 4, 1, 2], x => x < 4)
     * console.log(result) // [1, 3, 2]
     *
     * // Explanation:
     * // - The function starts with the first element (`1`), which is less than `4`, so it adds `1` to the result.
     * // - The next element (`3`) is also less than `4`, so it adds `3`.
     * // - The next element (`2`) is again less than `4`, so it adds `2`.
     * // - The function then encounters `4`, which is not less than `4`. At this point, it stops checking further elements and finalizes the result.
     * ```
     *
     * @category getters
     * @since 2.0.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: Iterable<A>) => Array<A>;
    /**
     * Calculate the longest initial subarray for which all element satisfy the specified predicate, creating a new `Array`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.takeWhile([1, 3, 2, 4, 1, 2], x => x < 4)
     * console.log(result) // [1, 3, 2]
     *
     * // Explanation:
     * // - The function starts with the first element (`1`), which is less than `4`, so it adds `1` to the result.
     * // - The next element (`3`) is also less than `4`, so it adds `3`.
     * // - The next element (`2`) is again less than `4`, so it adds `2`.
     * // - The function then encounters `4`, which is not less than `4`. At this point, it stops checking further elements and finalizes the result.
     * ```
     *
     * @category getters
     * @since 2.0.0
     */
    <A, B extends A>(self: Iterable<A>, refinement: (a: A, i: number) => a is B): Array<B>;
    /**
     * Calculate the longest initial subarray for which all element satisfy the specified predicate, creating a new `Array`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.takeWhile([1, 3, 2, 4, 1, 2], x => x < 4)
     * console.log(result) // [1, 3, 2]
     *
     * // Explanation:
     * // - The function starts with the first element (`1`), which is less than `4`, so it adds `1` to the result.
     * // - The next element (`3`) is also less than `4`, so it adds `3`.
     * // - The next element (`2`) is again less than `4`, so it adds `2`.
     * // - The function then encounters `4`, which is not less than `4`. At this point, it stops checking further elements and finalizes the result.
     * ```
     *
     * @category getters
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, predicate: (a: A, i: number) => boolean): Array<A>;
};
/**
 * Split an `Iterable` into two parts:
 *
 * 1. the longest initial subarray for which all elements satisfy the specified predicate
 * 2. the remaining elements
 *
 * @category splitting
 * @since 2.0.0
 */
export declare const span: {
    /**
     * Split an `Iterable` into two parts:
     *
     * 1. the longest initial subarray for which all elements satisfy the specified predicate
     * 2. the remaining elements
     *
     * @category splitting
     * @since 2.0.0
     */
    <A, B extends A>(refinement: (a: NoInfer<A>, i: number) => a is B): (self: Iterable<A>) => [init: Array<B>, rest: Array<Exclude<A, B>>];
    /**
     * Split an `Iterable` into two parts:
     *
     * 1. the longest initial subarray for which all elements satisfy the specified predicate
     * 2. the remaining elements
     *
     * @category splitting
     * @since 2.0.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: Iterable<A>) => [init: Array<A>, rest: Array<A>];
    /**
     * Split an `Iterable` into two parts:
     *
     * 1. the longest initial subarray for which all elements satisfy the specified predicate
     * 2. the remaining elements
     *
     * @category splitting
     * @since 2.0.0
     */
    <A, B extends A>(self: Iterable<A>, refinement: (a: A, i: number) => a is B): [init: Array<B>, rest: Array<Exclude<A, B>>];
    /**
     * Split an `Iterable` into two parts:
     *
     * 1. the longest initial subarray for which all elements satisfy the specified predicate
     * 2. the remaining elements
     *
     * @category splitting
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, predicate: (a: A, i: number) => boolean): [init: Array<A>, rest: Array<A>];
};
/**
 * Drop a max number of elements from the start of an `Iterable`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.drop([1, 2, 3, 4, 5], 2)
 * console.log(result) // [3, 4, 5]
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
export declare const drop: {
    /**
     * Drop a max number of elements from the start of an `Iterable`, creating a new `Array`.
     *
     * **Note**. `n` is normalized to a non negative integer.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.drop([1, 2, 3, 4, 5], 2)
     * console.log(result) // [3, 4, 5]
     * ```
     *
     * @category getters
     * @since 2.0.0
     */
    (n: number): <A>(self: Iterable<A>) => Array<A>;
    /**
     * Drop a max number of elements from the start of an `Iterable`, creating a new `Array`.
     *
     * **Note**. `n` is normalized to a non negative integer.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.drop([1, 2, 3, 4, 5], 2)
     * console.log(result) // [3, 4, 5]
     * ```
     *
     * @category getters
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, n: number): Array<A>;
};
/**
 * Drop a max number of elements from the end of an `Iterable`, creating a new `Array`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.dropRight([1, 2, 3, 4, 5], 2)
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
export declare const dropRight: {
    /**
     * Drop a max number of elements from the end of an `Iterable`, creating a new `Array`.
     *
     * **Note**. `n` is normalized to a non negative integer.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.dropRight([1, 2, 3, 4, 5], 2)
     * console.log(result) // [1, 2, 3]
     * ```
     *
     * @category getters
     * @since 2.0.0
     */
    (n: number): <A>(self: Iterable<A>) => Array<A>;
    /**
     * Drop a max number of elements from the end of an `Iterable`, creating a new `Array`.
     *
     * **Note**. `n` is normalized to a non negative integer.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.dropRight([1, 2, 3, 4, 5], 2)
     * console.log(result) // [1, 2, 3]
     * ```
     *
     * @category getters
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, n: number): Array<A>;
};
/**
 * Remove the longest initial subarray for which all element satisfy the specified predicate, creating a new `Array`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.dropWhile([1, 2, 3, 4, 5], x => x < 4)
 * console.log(result) // [4, 5]
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
export declare const dropWhile: {
    /**
     * Remove the longest initial subarray for which all element satisfy the specified predicate, creating a new `Array`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.dropWhile([1, 2, 3, 4, 5], x => x < 4)
     * console.log(result) // [4, 5]
     * ```
     *
     * @category getters
     * @since 2.0.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: Iterable<A>) => Array<A>;
    /**
     * Remove the longest initial subarray for which all element satisfy the specified predicate, creating a new `Array`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.dropWhile([1, 2, 3, 4, 5], x => x < 4)
     * console.log(result) // [4, 5]
     * ```
     *
     * @category getters
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, predicate: (a: A, i: number) => boolean): Array<A>;
};
/**
 * Return the first index for which a predicate holds.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.findFirstIndex([5, 3, 8, 9], x => x > 5)
 * console.log(result) // Option.some(2)
 * ```
 *
 * @category elements
 * @since 2.0.0
 */
export declare const findFirstIndex: {
    /**
     * Return the first index for which a predicate holds.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findFirstIndex([5, 3, 8, 9], x => x > 5)
     * console.log(result) // Option.some(2)
     * ```
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: Iterable<A>) => Option.Option<number>;
    /**
     * Return the first index for which a predicate holds.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findFirstIndex([5, 3, 8, 9], x => x > 5)
     * console.log(result) // Option.some(2)
     * ```
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, predicate: (a: A, i: number) => boolean): Option.Option<number>;
};
/**
 * Return the last index for which a predicate holds.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.findLastIndex([1, 3, 8, 9], x => x < 5)
 * console.log(result) // Option.some(1)
 * ```
 *
 * @category elements
 * @since 2.0.0
 */
export declare const findLastIndex: {
    /**
     * Return the last index for which a predicate holds.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findLastIndex([1, 3, 8, 9], x => x < 5)
     * console.log(result) // Option.some(1)
     * ```
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: Iterable<A>) => Option.Option<number>;
    /**
     * Return the last index for which a predicate holds.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findLastIndex([1, 3, 8, 9], x => x < 5)
     * console.log(result) // Option.some(1)
     * ```
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, predicate: (a: A, i: number) => boolean): Option.Option<number>;
};
/**
 * Returns the first element that satisfies the specified
 * predicate, or `None` if no such element exists.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.findFirst([1, 2, 3, 4, 5], x => x > 3)
 * console.log(result) // Option.some(4)
 * ```
 *
 * @category elements
 * @since 2.0.0
 */
export declare const findFirst: {
    /**
     * Returns the first element that satisfies the specified
     * predicate, or `None` if no such element exists.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findFirst([1, 2, 3, 4, 5], x => x > 3)
     * console.log(result) // Option.some(4)
     * ```
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B>(f: (a: NoInfer<A>, i: number) => Option.Option<B>): (self: Iterable<A>) => Option.Option<B>;
    /**
     * Returns the first element that satisfies the specified
     * predicate, or `None` if no such element exists.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findFirst([1, 2, 3, 4, 5], x => x > 3)
     * console.log(result) // Option.some(4)
     * ```
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B extends A>(refinement: (a: NoInfer<A>, i: number) => a is B): (self: Iterable<A>) => Option.Option<B>;
    /**
     * Returns the first element that satisfies the specified
     * predicate, or `None` if no such element exists.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findFirst([1, 2, 3, 4, 5], x => x > 3)
     * console.log(result) // Option.some(4)
     * ```
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: Iterable<A>) => Option.Option<A>;
    /**
     * Returns the first element that satisfies the specified
     * predicate, or `None` if no such element exists.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findFirst([1, 2, 3, 4, 5], x => x > 3)
     * console.log(result) // Option.some(4)
     * ```
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, f: (a: A, i: number) => Option.Option<B>): Option.Option<B>;
    /**
     * Returns the first element that satisfies the specified
     * predicate, or `None` if no such element exists.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findFirst([1, 2, 3, 4, 5], x => x > 3)
     * console.log(result) // Option.some(4)
     * ```
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B extends A>(self: Iterable<A>, refinement: (a: A, i: number) => a is B): Option.Option<B>;
    /**
     * Returns the first element that satisfies the specified
     * predicate, or `None` if no such element exists.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findFirst([1, 2, 3, 4, 5], x => x > 3)
     * console.log(result) // Option.some(4)
     * ```
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, predicate: (a: A, i: number) => boolean): Option.Option<A>;
};
/**
 * Finds the last element in an iterable collection that satisfies the given predicate or refinement.
 * Returns an `Option` containing the found element, or `Option.none` if no element matches.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.findLast([1, 2, 3, 4, 5], n => n % 2 === 0)
 * console.log(result) // Option.some(4)
 * ```
 *
 * @category elements
 * @since 2.0.0
 */
export declare const findLast: {
    /**
     * Finds the last element in an iterable collection that satisfies the given predicate or refinement.
     * Returns an `Option` containing the found element, or `Option.none` if no element matches.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findLast([1, 2, 3, 4, 5], n => n % 2 === 0)
     * console.log(result) // Option.some(4)
     * ```
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B>(f: (a: NoInfer<A>, i: number) => Option.Option<B>): (self: Iterable<A>) => Option.Option<B>;
    /**
     * Finds the last element in an iterable collection that satisfies the given predicate or refinement.
     * Returns an `Option` containing the found element, or `Option.none` if no element matches.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findLast([1, 2, 3, 4, 5], n => n % 2 === 0)
     * console.log(result) // Option.some(4)
     * ```
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B extends A>(refinement: (a: NoInfer<A>, i: number) => a is B): (self: Iterable<A>) => Option.Option<B>;
    /**
     * Finds the last element in an iterable collection that satisfies the given predicate or refinement.
     * Returns an `Option` containing the found element, or `Option.none` if no element matches.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findLast([1, 2, 3, 4, 5], n => n % 2 === 0)
     * console.log(result) // Option.some(4)
     * ```
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: Iterable<A>) => Option.Option<A>;
    /**
     * Finds the last element in an iterable collection that satisfies the given predicate or refinement.
     * Returns an `Option` containing the found element, or `Option.none` if no element matches.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findLast([1, 2, 3, 4, 5], n => n % 2 === 0)
     * console.log(result) // Option.some(4)
     * ```
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, f: (a: A, i: number) => Option.Option<B>): Option.Option<B>;
    /**
     * Finds the last element in an iterable collection that satisfies the given predicate or refinement.
     * Returns an `Option` containing the found element, or `Option.none` if no element matches.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findLast([1, 2, 3, 4, 5], n => n % 2 === 0)
     * console.log(result) // Option.some(4)
     * ```
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B extends A>(self: Iterable<A>, refinement: (a: A, i: number) => a is B): Option.Option<B>;
    /**
     * Finds the last element in an iterable collection that satisfies the given predicate or refinement.
     * Returns an `Option` containing the found element, or `Option.none` if no element matches.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findLast([1, 2, 3, 4, 5], n => n % 2 === 0)
     * console.log(result) // Option.some(4)
     * ```
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, predicate: (a: A, i: number) => boolean): Option.Option<A>;
};
/**
 * Returns a tuple of the first element that satisfies the specified
 * predicate and its index, or `None` if no such element exists.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.findFirstWithIndex([1, 2, 3, 4, 5], x => x > 3)
 * console.log(result) // Option.some([4, 3])
 * ```
 *
 * @category elements
 * @since 3.17.0
 */
export declare const findFirstWithIndex: {
    /**
     * Returns a tuple of the first element that satisfies the specified
     * predicate and its index, or `None` if no such element exists.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findFirstWithIndex([1, 2, 3, 4, 5], x => x > 3)
     * console.log(result) // Option.some([4, 3])
     * ```
     *
     * @category elements
     * @since 3.17.0
     */
    <A, B>(f: (a: NoInfer<A>, i: number) => Option.Option<B>): (self: Iterable<A>) => Option.Option<[B, number]>;
    /**
     * Returns a tuple of the first element that satisfies the specified
     * predicate and its index, or `None` if no such element exists.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findFirstWithIndex([1, 2, 3, 4, 5], x => x > 3)
     * console.log(result) // Option.some([4, 3])
     * ```
     *
     * @category elements
     * @since 3.17.0
     */
    <A, B extends A>(refinement: (a: NoInfer<A>, i: number) => a is B): (self: Iterable<A>) => Option.Option<[B, number]>;
    /**
     * Returns a tuple of the first element that satisfies the specified
     * predicate and its index, or `None` if no such element exists.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findFirstWithIndex([1, 2, 3, 4, 5], x => x > 3)
     * console.log(result) // Option.some([4, 3])
     * ```
     *
     * @category elements
     * @since 3.17.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: Iterable<A>) => Option.Option<[A, number]>;
    /**
     * Returns a tuple of the first element that satisfies the specified
     * predicate and its index, or `None` if no such element exists.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findFirstWithIndex([1, 2, 3, 4, 5], x => x > 3)
     * console.log(result) // Option.some([4, 3])
     * ```
     *
     * @category elements
     * @since 3.17.0
     */
    <A, B>(self: Iterable<A>, f: (a: A, i: number) => Option.Option<B>): Option.Option<[B, number]>;
    /**
     * Returns a tuple of the first element that satisfies the specified
     * predicate and its index, or `None` if no such element exists.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findFirstWithIndex([1, 2, 3, 4, 5], x => x > 3)
     * console.log(result) // Option.some([4, 3])
     * ```
     *
     * @category elements
     * @since 3.17.0
     */
    <A, B extends A>(self: Iterable<A>, refinement: (a: A, i: number) => a is B): Option.Option<[B, number]>;
    /**
     * Returns a tuple of the first element that satisfies the specified
     * predicate and its index, or `None` if no such element exists.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.findFirstWithIndex([1, 2, 3, 4, 5], x => x > 3)
     * console.log(result) // Option.some([4, 3])
     * ```
     *
     * @category elements
     * @since 3.17.0
     */
    <A>(self: Iterable<A>, predicate: (a: A, i: number) => boolean): Option.Option<[A, number]>;
};
/**
 * Counts all the element of the given array that pass the given predicate
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.countBy([1, 2, 3, 4, 5], n => n % 2 === 0)
 * console.log(result) // 2
 * ```
 *
 * @category folding
 * @since 3.16.0
 */
export declare const countBy: {
    /**
     * Counts all the element of the given array that pass the given predicate
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.countBy([1, 2, 3, 4, 5], n => n % 2 === 0)
     * console.log(result) // 2
     * ```
     *
     * @category folding
     * @since 3.16.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: Iterable<A>) => number;
    /**
     * Counts all the element of the given array that pass the given predicate
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.countBy([1, 2, 3, 4, 5], n => n % 2 === 0)
     * console.log(result) // 2
     * ```
     *
     * @category folding
     * @since 3.16.0
     */
    <A>(self: Iterable<A>, predicate: (a: A, i: number) => boolean): number;
};
/**
 * Insert an element at the specified index, creating a new `NonEmptyArray`,
 * or return `None` if the index is out of bounds.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.insertAt(['a', 'b', 'c', 'e'], 3, 'd')
 * console.log(result) // Option.some(['a', 'b', 'c', 'd', 'e'])
 * ```
 *
 * @since 2.0.0
 */
export declare const insertAt: {
    /**
     * Insert an element at the specified index, creating a new `NonEmptyArray`,
     * or return `None` if the index is out of bounds.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.insertAt(['a', 'b', 'c', 'e'], 3, 'd')
     * console.log(result) // Option.some(['a', 'b', 'c', 'd', 'e'])
     * ```
     *
     * @since 2.0.0
     */
    <B>(i: number, b: B): <A>(self: Iterable<A>) => Option.Option<NonEmptyArray<A | B>>;
    /**
     * Insert an element at the specified index, creating a new `NonEmptyArray`,
     * or return `None` if the index is out of bounds.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.insertAt(['a', 'b', 'c', 'e'], 3, 'd')
     * console.log(result) // Option.some(['a', 'b', 'c', 'd', 'e'])
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, i: number, b: B): Option.Option<NonEmptyArray<A | B>>;
};
/**
 * Change the element at the specified index, creating a new `Array`,
 * or return a copy of the input if the index is out of bounds.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.replace(['a', 'b', 'c', 'd'], 1, 'z')
 * console.log(result) // ['a', 'z', 'c', 'd']
 * ```
 *
 * @since 2.0.0
 */
export declare const replace: {
    /**
     * Change the element at the specified index, creating a new `Array`,
     * or return a copy of the input if the index is out of bounds.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.replace(['a', 'b', 'c', 'd'], 1, 'z')
     * console.log(result) // ['a', 'z', 'c', 'd']
     * ```
     *
     * @since 2.0.0
     */
    <B>(i: number, b: B): <A, S extends Iterable<A> = Iterable<A>>(self: S) => ReadonlyArray.With<S, ReadonlyArray.Infer<S> | B>;
    /**
     * Change the element at the specified index, creating a new `Array`,
     * or return a copy of the input if the index is out of bounds.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.replace(['a', 'b', 'c', 'd'], 1, 'z')
     * console.log(result) // ['a', 'z', 'c', 'd']
     * ```
     *
     * @since 2.0.0
     */
    <A, B, S extends Iterable<A> = Iterable<A>>(self: S, i: number, b: B): ReadonlyArray.With<S, ReadonlyArray.Infer<S> | B>;
};
/**
 * Replaces an element in an array with the given value, returning an option of the updated array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.replaceOption([1, 2, 3], 1, 4)
 * console.log(result) // Option.some([1, 4, 3])
 * ```
 *
 * @since 2.0.0
 */
export declare const replaceOption: {
    /**
     * Replaces an element in an array with the given value, returning an option of the updated array.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.replaceOption([1, 2, 3], 1, 4)
     * console.log(result) // Option.some([1, 4, 3])
     * ```
     *
     * @since 2.0.0
     */
    <B>(i: number, b: B): <A, S extends Iterable<A> = Iterable<A>>(self: S) => Option.Option<ReadonlyArray.With<S, ReadonlyArray.Infer<S> | B>>;
    /**
     * Replaces an element in an array with the given value, returning an option of the updated array.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.replaceOption([1, 2, 3], 1, 4)
     * console.log(result) // Option.some([1, 4, 3])
     * ```
     *
     * @since 2.0.0
     */
    <A, B, S extends Iterable<A> = Iterable<A>>(self: S, i: number, b: B): Option.Option<ReadonlyArray.With<S, ReadonlyArray.Infer<S> | B>>;
};
/**
 * Apply a function to the element at the specified index, creating a new `Array`,
 * or return a copy of the input if the index is out of bounds.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.modify([1, 2, 3, 4], 2, (n) => n * 2)
 * console.log(result) // [1, 2, 6, 4]
 * ```
 *
 * @since 2.0.0
 */
export declare const modify: {
    /**
     * Apply a function to the element at the specified index, creating a new `Array`,
     * or return a copy of the input if the index is out of bounds.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.modify([1, 2, 3, 4], 2, (n) => n * 2)
     * console.log(result) // [1, 2, 6, 4]
     * ```
     *
     * @since 2.0.0
     */
    <A, B, S extends Iterable<A> = Iterable<A>>(i: number, f: (a: ReadonlyArray.Infer<S>) => B): (self: S) => ReadonlyArray.With<S, ReadonlyArray.Infer<S> | B>;
    /**
     * Apply a function to the element at the specified index, creating a new `Array`,
     * or return a copy of the input if the index is out of bounds.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.modify([1, 2, 3, 4], 2, (n) => n * 2)
     * console.log(result) // [1, 2, 6, 4]
     * ```
     *
     * @since 2.0.0
     */
    <A, B, S extends Iterable<A> = Iterable<A>>(self: S, i: number, f: (a: ReadonlyArray.Infer<S>) => B): ReadonlyArray.With<S, ReadonlyArray.Infer<S> | B>;
};
/**
 * Apply a function to the element at the specified index, creating a new `Array`,
 * or return `None` if the index is out of bounds.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const input = [1, 2, 3, 4]
 * const result = Array.modifyOption(input, 2, (n) => n * 2)
 * console.log(result) // Option.some([1, 2, 6, 4])
 *
 * const outOfBoundsResult = Array.modifyOption(input, 5, (n) => n * 2)
 * console.log(outOfBoundsResult) // Option.none()
 * ```
 *
 * @since 2.0.0
 */
export declare const modifyOption: {
    /**
     * Apply a function to the element at the specified index, creating a new `Array`,
     * or return `None` if the index is out of bounds.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const input = [1, 2, 3, 4]
     * const result = Array.modifyOption(input, 2, (n) => n * 2)
     * console.log(result) // Option.some([1, 2, 6, 4])
     *
     * const outOfBoundsResult = Array.modifyOption(input, 5, (n) => n * 2)
     * console.log(outOfBoundsResult) // Option.none()
     * ```
     *
     * @since 2.0.0
     */
    <A, B, S extends Iterable<A> = Iterable<A>>(i: number, f: (a: ReadonlyArray.Infer<S>) => B): (self: S) => Option.Option<ReadonlyArray.With<S, ReadonlyArray.Infer<S> | B>>;
    /**
     * Apply a function to the element at the specified index, creating a new `Array`,
     * or return `None` if the index is out of bounds.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const input = [1, 2, 3, 4]
     * const result = Array.modifyOption(input, 2, (n) => n * 2)
     * console.log(result) // Option.some([1, 2, 6, 4])
     *
     * const outOfBoundsResult = Array.modifyOption(input, 5, (n) => n * 2)
     * console.log(outOfBoundsResult) // Option.none()
     * ```
     *
     * @since 2.0.0
     */
    <A, B, S extends Iterable<A> = Iterable<A>>(self: S, i: number, f: (a: ReadonlyArray.Infer<S>) => B): Option.Option<ReadonlyArray.With<S, ReadonlyArray.Infer<S> | B>>;
};
/**
 * Delete the element at the specified index, creating a new `Array`,
 * or return a copy of the input if the index is out of bounds.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const input = [1, 2, 3, 4]
 * const result = Array.remove(input, 2)
 * console.log(result) // [1, 2, 4]
 *
 * const outOfBoundsResult = Array.remove(input, 5)
 * console.log(outOfBoundsResult) // [1, 2, 3, 4]
 * ```
 *
 * @since 2.0.0
 */
export declare const remove: {
    /**
     * Delete the element at the specified index, creating a new `Array`,
     * or return a copy of the input if the index is out of bounds.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const input = [1, 2, 3, 4]
     * const result = Array.remove(input, 2)
     * console.log(result) // [1, 2, 4]
     *
     * const outOfBoundsResult = Array.remove(input, 5)
     * console.log(outOfBoundsResult) // [1, 2, 3, 4]
     * ```
     *
     * @since 2.0.0
     */
    (i: number): <A>(self: Iterable<A>) => Array<A>;
    /**
     * Delete the element at the specified index, creating a new `Array`,
     * or return a copy of the input if the index is out of bounds.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const input = [1, 2, 3, 4]
     * const result = Array.remove(input, 2)
     * console.log(result) // [1, 2, 4]
     *
     * const outOfBoundsResult = Array.remove(input, 5)
     * console.log(outOfBoundsResult) // [1, 2, 3, 4]
     * ```
     *
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, i: number): Array<A>;
};
/**
 * Delete the element at the specified index, creating a new `Array`,
 * or return `None` if the index is out of bounds.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Array, Option } from "effect"
 *
 * const numbers = [1, 2, 3, 4]
 * const result = Array.removeOption(numbers, 2)
 * assert.deepStrictEqual(result, Option.some([1, 2, 4]))
 *
 * const outOfBoundsResult = Array.removeOption(numbers, 5)
 * assert.deepStrictEqual(outOfBoundsResult, Option.none())
 * ```
 *
 * @since 3.16.0
 */
export declare const removeOption: {
    /**
     * Delete the element at the specified index, creating a new `Array`,
     * or return `None` if the index is out of bounds.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Array, Option } from "effect"
     *
     * const numbers = [1, 2, 3, 4]
     * const result = Array.removeOption(numbers, 2)
     * assert.deepStrictEqual(result, Option.some([1, 2, 4]))
     *
     * const outOfBoundsResult = Array.removeOption(numbers, 5)
     * assert.deepStrictEqual(outOfBoundsResult, Option.none())
     * ```
     *
     * @since 3.16.0
     */
    (i: number): <A>(self: Iterable<A>) => Option.Option<Array<A>>;
    /**
     * Delete the element at the specified index, creating a new `Array`,
     * or return `None` if the index is out of bounds.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Array, Option } from "effect"
     *
     * const numbers = [1, 2, 3, 4]
     * const result = Array.removeOption(numbers, 2)
     * assert.deepStrictEqual(result, Option.some([1, 2, 4]))
     *
     * const outOfBoundsResult = Array.removeOption(numbers, 5)
     * assert.deepStrictEqual(outOfBoundsResult, Option.none())
     * ```
     *
     * @since 3.16.0
     */
    <A>(self: Iterable<A>, i: number): Option.Option<Array<A>>;
};
/**
 * Reverse an `Iterable`, creating a new `Array`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.reverse([1, 2, 3, 4])
 * console.log(result) // [4, 3, 2, 1]
 * ```
 *
 * @category elements
 * @since 2.0.0
 */
export declare const reverse: <S extends Iterable<any>>(self: S) => S extends NonEmptyReadonlyArray<infer A> ? NonEmptyArray<A> : S extends Iterable<infer A> ? Array<A> : never;
/**
 * Create a new array with elements sorted in increasing order based on the specified comparator.
 * If the input is a `NonEmptyReadonlyArray`, the output will also be a `NonEmptyReadonlyArray`.
 *
 * @category sorting
 * @since 2.0.0
 */
export declare const sort: {
    /**
     * Create a new array with elements sorted in increasing order based on the specified comparator.
     * If the input is a `NonEmptyReadonlyArray`, the output will also be a `NonEmptyReadonlyArray`.
     *
     * @category sorting
     * @since 2.0.0
     */
    <B>(O: Order.Order<B>): <A extends B, S extends Iterable<A>>(self: S) => ReadonlyArray.With<S, ReadonlyArray.Infer<S>>;
    /**
     * Create a new array with elements sorted in increasing order based on the specified comparator.
     * If the input is a `NonEmptyReadonlyArray`, the output will also be a `NonEmptyReadonlyArray`.
     *
     * @category sorting
     * @since 2.0.0
     */
    <A extends B, B>(self: NonEmptyReadonlyArray<A>, O: Order.Order<B>): NonEmptyArray<A>;
    /**
     * Create a new array with elements sorted in increasing order based on the specified comparator.
     * If the input is a `NonEmptyReadonlyArray`, the output will also be a `NonEmptyReadonlyArray`.
     *
     * @category sorting
     * @since 2.0.0
     */
    <A extends B, B>(self: Iterable<A>, O: Order.Order<B>): Array<A>;
};
/**
 * Sorts an array based on a provided mapping function and order. The mapping
 * function transforms the elements into a value that can be compared, and the
 * order defines how those values should be sorted.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Order } from "effect"
 *
 * const result = Array.sortWith(["aaa", "b", "cc"], (s) => s.length, Order.number)
 * console.log(result) // ["b", "cc", "aaa"]
 *
 * // Explanation:
 * // The array of strings is sorted based on their lengths. The mapping function `(s) => s.length`
 * // converts each string into its length, and the `Order.number` specifies that the lengths should
 * // be sorted in ascending order.
 * ```
 *
 * @since 2.0.0
 * @category elements
 */
export declare const sortWith: {
    /**
     * Sorts an array based on a provided mapping function and order. The mapping
     * function transforms the elements into a value that can be compared, and the
     * order defines how those values should be sorted.
     *
     * **Example**
     *
     * ```ts
     * import { Array, Order } from "effect"
     *
     * const result = Array.sortWith(["aaa", "b", "cc"], (s) => s.length, Order.number)
     * console.log(result) // ["b", "cc", "aaa"]
     *
     * // Explanation:
     * // The array of strings is sorted based on their lengths. The mapping function `(s) => s.length`
     * // converts each string into its length, and the `Order.number` specifies that the lengths should
     * // be sorted in ascending order.
     * ```
     *
     * @since 2.0.0
     * @category elements
     */
    <S extends Iterable<any>, B>(f: (a: ReadonlyArray.Infer<S>) => B, order: Order.Order<B>): (self: S) => ReadonlyArray.With<S, ReadonlyArray.Infer<S>>;
    /**
     * Sorts an array based on a provided mapping function and order. The mapping
     * function transforms the elements into a value that can be compared, and the
     * order defines how those values should be sorted.
     *
     * **Example**
     *
     * ```ts
     * import { Array, Order } from "effect"
     *
     * const result = Array.sortWith(["aaa", "b", "cc"], (s) => s.length, Order.number)
     * console.log(result) // ["b", "cc", "aaa"]
     *
     * // Explanation:
     * // The array of strings is sorted based on their lengths. The mapping function `(s) => s.length`
     * // converts each string into its length, and the `Order.number` specifies that the lengths should
     * // be sorted in ascending order.
     * ```
     *
     * @since 2.0.0
     * @category elements
     */
    <A, B>(self: NonEmptyReadonlyArray<A>, f: (a: A) => B, O: Order.Order<B>): NonEmptyArray<A>;
    /**
     * Sorts an array based on a provided mapping function and order. The mapping
     * function transforms the elements into a value that can be compared, and the
     * order defines how those values should be sorted.
     *
     * **Example**
     *
     * ```ts
     * import { Array, Order } from "effect"
     *
     * const result = Array.sortWith(["aaa", "b", "cc"], (s) => s.length, Order.number)
     * console.log(result) // ["b", "cc", "aaa"]
     *
     * // Explanation:
     * // The array of strings is sorted based on their lengths. The mapping function `(s) => s.length`
     * // converts each string into its length, and the `Order.number` specifies that the lengths should
     * // be sorted in ascending order.
     * ```
     *
     * @since 2.0.0
     * @category elements
     */
    <A, B>(self: Iterable<A>, f: (a: A) => B, order: Order.Order<B>): Array<A>;
};
/**
 * Sorts the elements of an `Iterable` in increasing order based on the provided
 * orders. The elements are compared using the first order in `orders`, then the
 * second order if the first comparison is equal, and so on.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Order, pipe } from "effect"
 *
 * const users = [
 *   { name: "Alice", age: 30 },
 *   { name: "Bob", age: 25 },
 *   { name: "Charlie", age: 30 }
 * ]
 *
 * const result = pipe(
 *   users,
 *   Array.sortBy(
 *     Order.mapInput(Order.number, (user: (typeof users)[number]) => user.age),
 *     Order.mapInput(Order.string, (user: (typeof users)[number]) => user.name)
 *   )
 * )
 *
 * console.log(result)
 * // [
 * //   { name: "Bob", age: 25 },
 * //   { name: "Alice", age: 30 },
 * //   { name: "Charlie", age: 30 }
 * // ]
 *
 * // Explanation:
 * // The array of users is sorted first by age in ascending order. When ages are equal,
 * // the users are further sorted by name in ascending order.
 * ```
 *
 * @category sorting
 * @since 2.0.0
 */
export declare const sortBy: <S extends Iterable<any>>(...orders: ReadonlyArray<Order.Order<ReadonlyArray.Infer<S>>>) => (self: S) => S extends NonEmptyReadonlyArray<infer A> ? NonEmptyArray<A> : S extends Iterable<infer A> ? Array<A> : never;
/**
 * Takes two `Iterable`s and returns an `Array` of corresponding pairs.
 * If one input `Iterable` is short, excess elements of the
 * longer `Iterable` are discarded.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.zip([1, 2, 3], ['a', 'b'])
 * console.log(result) // [[1, 'a'], [2, 'b']]
 * ```
 *
 * @category zipping
 * @since 2.0.0
 */
export declare const zip: {
    /**
     * Takes two `Iterable`s and returns an `Array` of corresponding pairs.
     * If one input `Iterable` is short, excess elements of the
     * longer `Iterable` are discarded.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.zip([1, 2, 3], ['a', 'b'])
     * console.log(result) // [[1, 'a'], [2, 'b']]
     * ```
     *
     * @category zipping
     * @since 2.0.0
     */
    <B>(that: NonEmptyReadonlyArray<B>): <A>(self: NonEmptyReadonlyArray<A>) => NonEmptyArray<[A, B]>;
    /**
     * Takes two `Iterable`s and returns an `Array` of corresponding pairs.
     * If one input `Iterable` is short, excess elements of the
     * longer `Iterable` are discarded.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.zip([1, 2, 3], ['a', 'b'])
     * console.log(result) // [[1, 'a'], [2, 'b']]
     * ```
     *
     * @category zipping
     * @since 2.0.0
     */
    <B>(that: Iterable<B>): <A>(self: Iterable<A>) => Array<[A, B]>;
    /**
     * Takes two `Iterable`s and returns an `Array` of corresponding pairs.
     * If one input `Iterable` is short, excess elements of the
     * longer `Iterable` are discarded.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.zip([1, 2, 3], ['a', 'b'])
     * console.log(result) // [[1, 'a'], [2, 'b']]
     * ```
     *
     * @category zipping
     * @since 2.0.0
     */
    <A, B>(self: NonEmptyReadonlyArray<A>, that: NonEmptyReadonlyArray<B>): NonEmptyArray<[A, B]>;
    /**
     * Takes two `Iterable`s and returns an `Array` of corresponding pairs.
     * If one input `Iterable` is short, excess elements of the
     * longer `Iterable` are discarded.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.zip([1, 2, 3], ['a', 'b'])
     * console.log(result) // [[1, 'a'], [2, 'b']]
     * ```
     *
     * @category zipping
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, that: Iterable<B>): Array<[A, B]>;
};
/**
 * Apply a function to pairs of elements at the same index in two `Iterable`s, collecting the results in a new `Array`. If one
 * input `Iterable` is short, excess elements of the longer `Iterable` are discarded.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.zipWith([1, 2, 3], [4, 5, 6], (a, b) => a + b)
 * console.log(result) // [5, 7, 9]
 * ```
 *
 * @category zipping
 * @since 2.0.0
 */
export declare const zipWith: {
    /**
     * Apply a function to pairs of elements at the same index in two `Iterable`s, collecting the results in a new `Array`. If one
     * input `Iterable` is short, excess elements of the longer `Iterable` are discarded.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.zipWith([1, 2, 3], [4, 5, 6], (a, b) => a + b)
     * console.log(result) // [5, 7, 9]
     * ```
     *
     * @category zipping
     * @since 2.0.0
     */
    <B, A, C>(that: NonEmptyReadonlyArray<B>, f: (a: A, b: B) => C): (self: NonEmptyReadonlyArray<A>) => NonEmptyArray<C>;
    /**
     * Apply a function to pairs of elements at the same index in two `Iterable`s, collecting the results in a new `Array`. If one
     * input `Iterable` is short, excess elements of the longer `Iterable` are discarded.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.zipWith([1, 2, 3], [4, 5, 6], (a, b) => a + b)
     * console.log(result) // [5, 7, 9]
     * ```
     *
     * @category zipping
     * @since 2.0.0
     */
    <B, A, C>(that: Iterable<B>, f: (a: A, b: B) => C): (self: Iterable<A>) => Array<C>;
    /**
     * Apply a function to pairs of elements at the same index in two `Iterable`s, collecting the results in a new `Array`. If one
     * input `Iterable` is short, excess elements of the longer `Iterable` are discarded.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.zipWith([1, 2, 3], [4, 5, 6], (a, b) => a + b)
     * console.log(result) // [5, 7, 9]
     * ```
     *
     * @category zipping
     * @since 2.0.0
     */
    <A, B, C>(self: NonEmptyReadonlyArray<A>, that: NonEmptyReadonlyArray<B>, f: (a: A, b: B) => C): NonEmptyArray<C>;
    /**
     * Apply a function to pairs of elements at the same index in two `Iterable`s, collecting the results in a new `Array`. If one
     * input `Iterable` is short, excess elements of the longer `Iterable` are discarded.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.zipWith([1, 2, 3], [4, 5, 6], (a, b) => a + b)
     * console.log(result) // [5, 7, 9]
     * ```
     *
     * @category zipping
     * @since 2.0.0
     */
    <B, A, C>(self: Iterable<A>, that: Iterable<B>, f: (a: A, b: B) => C): Array<C>;
};
/**
 * This function is the inverse of `zip`. Takes an `Iterable` of pairs and return two corresponding `Array`s.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.unzip([[1, "a"], [2, "b"], [3, "c"]])
 * console.log(result) // [[1, 2, 3], ['a', 'b', 'c']]
 * ```
 *
 * @since 2.0.0
 */
export declare const unzip: <S extends Iterable<readonly [any, any]>>(self: S) => S extends NonEmptyReadonlyArray<readonly [infer A, infer B]> ? [NonEmptyArray<A>, NonEmptyArray<B>] : S extends Iterable<readonly [infer A, infer B]> ? [Array<A>, Array<B>] : never;
/**
 * Places an element in between members of an `Iterable`.
 * If the input is a non-empty array, the result is also a non-empty array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.intersperse([1, 2, 3], 0)
 * console.log(result) // [1, 0, 2, 0, 3]
 * ```
 *
 * @since 2.0.0
 */
export declare const intersperse: {
    /**
     * Places an element in between members of an `Iterable`.
     * If the input is a non-empty array, the result is also a non-empty array.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.intersperse([1, 2, 3], 0)
     * console.log(result) // [1, 0, 2, 0, 3]
     * ```
     *
     * @since 2.0.0
     */
    <B>(middle: B): <S extends Iterable<any>>(self: S) => ReadonlyArray.With<S, ReadonlyArray.Infer<S> | B>;
    /**
     * Places an element in between members of an `Iterable`.
     * If the input is a non-empty array, the result is also a non-empty array.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.intersperse([1, 2, 3], 0)
     * console.log(result) // [1, 0, 2, 0, 3]
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(self: NonEmptyReadonlyArray<A>, middle: B): NonEmptyArray<A | B>;
    /**
     * Places an element in between members of an `Iterable`.
     * If the input is a non-empty array, the result is also a non-empty array.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.intersperse([1, 2, 3], 0)
     * console.log(result) // [1, 0, 2, 0, 3]
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, middle: B): Array<A | B>;
};
/**
 * Apply a function to the head, creating a new `NonEmptyReadonlyArray`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.modifyNonEmptyHead([1, 2, 3], n => n * 10)
 * console.log(result) // [10, 2, 3]
 * ```
 *
 * @since 2.0.0
 */
export declare const modifyNonEmptyHead: {
    /**
     * Apply a function to the head, creating a new `NonEmptyReadonlyArray`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.modifyNonEmptyHead([1, 2, 3], n => n * 10)
     * console.log(result) // [10, 2, 3]
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(f: (a: A) => B): (self: NonEmptyReadonlyArray<A>) => NonEmptyArray<A | B>;
    /**
     * Apply a function to the head, creating a new `NonEmptyReadonlyArray`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.modifyNonEmptyHead([1, 2, 3], n => n * 10)
     * console.log(result) // [10, 2, 3]
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(self: NonEmptyReadonlyArray<A>, f: (a: A) => B): NonEmptyArray<A | B>;
};
/**
 * Change the head, creating a new `NonEmptyReadonlyArray`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.setNonEmptyHead([1, 2, 3], 10)
 * console.log(result) // [10, 2, 3]
 * ```
 *
 * @since 2.0.0
 */
export declare const setNonEmptyHead: {
    /**
     * Change the head, creating a new `NonEmptyReadonlyArray`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.setNonEmptyHead([1, 2, 3], 10)
     * console.log(result) // [10, 2, 3]
     * ```
     *
     * @since 2.0.0
     */
    <B>(b: B): <A>(self: NonEmptyReadonlyArray<A>) => NonEmptyArray<A | B>;
    /**
     * Change the head, creating a new `NonEmptyReadonlyArray`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.setNonEmptyHead([1, 2, 3], 10)
     * console.log(result) // [10, 2, 3]
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(self: NonEmptyReadonlyArray<A>, b: B): NonEmptyArray<A | B>;
};
/**
 * Apply a function to the last element, creating a new `NonEmptyReadonlyArray`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.modifyNonEmptyLast([1, 2, 3], n => n * 2)
 * console.log(result) // [1, 2, 6]
 * ```
 *
 * @since 2.0.0
 */
export declare const modifyNonEmptyLast: {
    /**
     * Apply a function to the last element, creating a new `NonEmptyReadonlyArray`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.modifyNonEmptyLast([1, 2, 3], n => n * 2)
     * console.log(result) // [1, 2, 6]
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(f: (a: A) => B): (self: NonEmptyReadonlyArray<A>) => NonEmptyArray<A | B>;
    /**
     * Apply a function to the last element, creating a new `NonEmptyReadonlyArray`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.modifyNonEmptyLast([1, 2, 3], n => n * 2)
     * console.log(result) // [1, 2, 6]
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(self: NonEmptyReadonlyArray<A>, f: (a: A) => B): NonEmptyArray<A | B>;
};
/**
 * Change the last element, creating a new `NonEmptyReadonlyArray`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.setNonEmptyLast([1, 2, 3], 4)
 * console.log(result) // [1, 2, 4]
 * ```
 *
 * @since 2.0.0
 */
export declare const setNonEmptyLast: {
    /**
     * Change the last element, creating a new `NonEmptyReadonlyArray`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.setNonEmptyLast([1, 2, 3], 4)
     * console.log(result) // [1, 2, 4]
     * ```
     *
     * @since 2.0.0
     */
    <B>(b: B): <A>(self: NonEmptyReadonlyArray<A>) => NonEmptyArray<A | B>;
    /**
     * Change the last element, creating a new `NonEmptyReadonlyArray`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.setNonEmptyLast([1, 2, 3], 4)
     * console.log(result) // [1, 2, 4]
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(self: NonEmptyReadonlyArray<A>, b: B): NonEmptyArray<A | B>;
};
/**
 * Rotate an `Iterable` by `n` steps.
 * If the input is a non-empty array, the result is also a non-empty array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.rotate(['a', 'b', 'c', 'd', 'e'], 2)
 * console.log(result) // [ 'd', 'e', 'a', 'b', 'c' ]
 * ```
 *
 * @since 2.0.0
 */
export declare const rotate: {
    /**
     * Rotate an `Iterable` by `n` steps.
     * If the input is a non-empty array, the result is also a non-empty array.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.rotate(['a', 'b', 'c', 'd', 'e'], 2)
     * console.log(result) // [ 'd', 'e', 'a', 'b', 'c' ]
     * ```
     *
     * @since 2.0.0
     */
    (n: number): <S extends Iterable<any>>(self: S) => ReadonlyArray.With<S, ReadonlyArray.Infer<S>>;
    /**
     * Rotate an `Iterable` by `n` steps.
     * If the input is a non-empty array, the result is also a non-empty array.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.rotate(['a', 'b', 'c', 'd', 'e'], 2)
     * console.log(result) // [ 'd', 'e', 'a', 'b', 'c' ]
     * ```
     *
     * @since 2.0.0
     */
    <A>(self: NonEmptyReadonlyArray<A>, n: number): NonEmptyArray<A>;
    /**
     * Rotate an `Iterable` by `n` steps.
     * If the input is a non-empty array, the result is also a non-empty array.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.rotate(['a', 'b', 'c', 'd', 'e'], 2)
     * console.log(result) // [ 'd', 'e', 'a', 'b', 'c' ]
     * ```
     *
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, n: number): Array<A>;
};
/**
 * Returns a function that checks if a `ReadonlyArray` contains a given value using a provided `isEquivalent` function.
 *
 * **Example**
 *
 * ```ts
 * import { Array, pipe } from "effect"
 *
 * const isEquivalent = (a: number, b: number) => a === b
 * const containsNumber = Array.containsWith(isEquivalent)
 * const result = pipe([1, 2, 3, 4], containsNumber(3))
 * console.log(result) // true
 * ```
 *
 * @category elements
 * @since 2.0.0
 */
export declare const containsWith: <A>(isEquivalent: (self: A, that: A) => boolean) => {
    (a: A): (self: Iterable<A>) => boolean;
    (self: Iterable<A>, a: A): boolean;
};
/**
 * Returns a function that checks if a `ReadonlyArray` contains a given value using the default `Equivalence`.
 *
 * **Example**
 *
 * ```ts
 * import { Array, pipe } from "effect"
 *
 * const result = pipe(['a', 'b', 'c', 'd'], Array.contains('c'))
 * console.log(result) // true
 * ```
 *
 * @category elements
 * @since 2.0.0
 */
export declare const contains: {
    /**
     * Returns a function that checks if a `ReadonlyArray` contains a given value using the default `Equivalence`.
     *
     * **Example**
     *
     * ```ts
     * import { Array, pipe } from "effect"
     *
     * const result = pipe(['a', 'b', 'c', 'd'], Array.contains('c'))
     * console.log(result) // true
     * ```
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(a: A): (self: Iterable<A>) => boolean;
    /**
     * Returns a function that checks if a `ReadonlyArray` contains a given value using the default `Equivalence`.
     *
     * **Example**
     *
     * ```ts
     * import { Array, pipe } from "effect"
     *
     * const result = pipe(['a', 'b', 'c', 'd'], Array.contains('c'))
     * console.log(result) // true
     * ```
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, a: A): boolean;
};
/**
 * A useful recursion pattern for processing an `Iterable` to produce a new `Array`, often used for "chopping" up the input
 * `Iterable`. Typically chop is called with some function that will consume an initial prefix of the `Iterable` and produce a
 * value and the rest of the `Array`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.chop([1, 2, 3, 4, 5], (as): [number, Array<number>] => [as[0] * 2, as.slice(1)])
 * console.log(result) // [2, 4, 6, 8, 10]
 *
 * // Explanation:
 * // The `chopFunction` takes the first element of the array, doubles it, and then returns it along with the rest of the array.
 * // The `chop` function applies this `chopFunction` recursively to the input array `[1, 2, 3, 4, 5]`,
 * // resulting in a new array `[2, 4, 6, 8, 10]`.
 * ```
 *
 * @since 2.0.0
 */
export declare const chop: {
    /**
     * A useful recursion pattern for processing an `Iterable` to produce a new `Array`, often used for "chopping" up the input
     * `Iterable`. Typically chop is called with some function that will consume an initial prefix of the `Iterable` and produce a
     * value and the rest of the `Array`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.chop([1, 2, 3, 4, 5], (as): [number, Array<number>] => [as[0] * 2, as.slice(1)])
     * console.log(result) // [2, 4, 6, 8, 10]
     *
     * // Explanation:
     * // The `chopFunction` takes the first element of the array, doubles it, and then returns it along with the rest of the array.
     * // The `chop` function applies this `chopFunction` recursively to the input array `[1, 2, 3, 4, 5]`,
     * // resulting in a new array `[2, 4, 6, 8, 10]`.
     * ```
     *
     * @since 2.0.0
     */
    <S extends Iterable<any>, B>(f: (as: NonEmptyReadonlyArray<ReadonlyArray.Infer<S>>) => readonly [B, ReadonlyArray<ReadonlyArray.Infer<S>>]): (self: S) => ReadonlyArray.With<S, ReadonlyArray.Infer<S>>;
    /**
     * A useful recursion pattern for processing an `Iterable` to produce a new `Array`, often used for "chopping" up the input
     * `Iterable`. Typically chop is called with some function that will consume an initial prefix of the `Iterable` and produce a
     * value and the rest of the `Array`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.chop([1, 2, 3, 4, 5], (as): [number, Array<number>] => [as[0] * 2, as.slice(1)])
     * console.log(result) // [2, 4, 6, 8, 10]
     *
     * // Explanation:
     * // The `chopFunction` takes the first element of the array, doubles it, and then returns it along with the rest of the array.
     * // The `chop` function applies this `chopFunction` recursively to the input array `[1, 2, 3, 4, 5]`,
     * // resulting in a new array `[2, 4, 6, 8, 10]`.
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(self: NonEmptyReadonlyArray<A>, f: (as: NonEmptyReadonlyArray<A>) => readonly [B, ReadonlyArray<A>]): NonEmptyArray<B>;
    /**
     * A useful recursion pattern for processing an `Iterable` to produce a new `Array`, often used for "chopping" up the input
     * `Iterable`. Typically chop is called with some function that will consume an initial prefix of the `Iterable` and produce a
     * value and the rest of the `Array`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.chop([1, 2, 3, 4, 5], (as): [number, Array<number>] => [as[0] * 2, as.slice(1)])
     * console.log(result) // [2, 4, 6, 8, 10]
     *
     * // Explanation:
     * // The `chopFunction` takes the first element of the array, doubles it, and then returns it along with the rest of the array.
     * // The `chop` function applies this `chopFunction` recursively to the input array `[1, 2, 3, 4, 5]`,
     * // resulting in a new array `[2, 4, 6, 8, 10]`.
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, f: (as: NonEmptyReadonlyArray<A>) => readonly [B, ReadonlyArray<A>]): Array<B>;
};
/**
 * Splits an `Iterable` into two segments, with the first segment containing a maximum of `n` elements.
 * The value of `n` can be `0`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.splitAt([1, 2, 3, 4, 5], 3)
 * console.log(result) // [[1, 2, 3], [4, 5]]
 * ```
 *
 * @category splitting
 * @since 2.0.0
 */
export declare const splitAt: {
    /**
     * Splits an `Iterable` into two segments, with the first segment containing a maximum of `n` elements.
     * The value of `n` can be `0`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.splitAt([1, 2, 3, 4, 5], 3)
     * console.log(result) // [[1, 2, 3], [4, 5]]
     * ```
     *
     * @category splitting
     * @since 2.0.0
     */
    (n: number): <A>(self: Iterable<A>) => [beforeIndex: Array<A>, fromIndex: Array<A>];
    /**
     * Splits an `Iterable` into two segments, with the first segment containing a maximum of `n` elements.
     * The value of `n` can be `0`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.splitAt([1, 2, 3, 4, 5], 3)
     * console.log(result) // [[1, 2, 3], [4, 5]]
     * ```
     *
     * @category splitting
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, n: number): [beforeIndex: Array<A>, fromIndex: Array<A>];
};
/**
 * Splits a `NonEmptyReadonlyArray` into two segments, with the first segment containing a maximum of `n` elements.
 * The value of `n` must be `>= 1`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.splitNonEmptyAt(["a", "b", "c", "d", "e"], 3)
 * console.log(result) // [["a", "b", "c"], ["d", "e"]]
 * ```
 *
 * @category splitting
 * @since 2.0.0
 */
export declare const splitNonEmptyAt: {
    /**
     * Splits a `NonEmptyReadonlyArray` into two segments, with the first segment containing a maximum of `n` elements.
     * The value of `n` must be `>= 1`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.splitNonEmptyAt(["a", "b", "c", "d", "e"], 3)
     * console.log(result) // [["a", "b", "c"], ["d", "e"]]
     * ```
     *
     * @category splitting
     * @since 2.0.0
     */
    (n: number): <A>(self: NonEmptyReadonlyArray<A>) => [beforeIndex: NonEmptyArray<A>, fromIndex: Array<A>];
    /**
     * Splits a `NonEmptyReadonlyArray` into two segments, with the first segment containing a maximum of `n` elements.
     * The value of `n` must be `>= 1`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.splitNonEmptyAt(["a", "b", "c", "d", "e"], 3)
     * console.log(result) // [["a", "b", "c"], ["d", "e"]]
     * ```
     *
     * @category splitting
     * @since 2.0.0
     */
    <A>(self: NonEmptyReadonlyArray<A>, n: number): [beforeIndex: NonEmptyArray<A>, fromIndex: Array<A>];
};
/**
 * Splits this iterable into `n` equally sized arrays.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.split([1, 2, 3, 4, 5, 6, 7, 8], 3)
 * console.log(result) // [[1, 2, 3], [4, 5, 6], [7, 8]]
 * ```
 *
 * @since 2.0.0
 * @category splitting
 */
export declare const split: {
    /**
     * Splits this iterable into `n` equally sized arrays.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.split([1, 2, 3, 4, 5, 6, 7, 8], 3)
     * console.log(result) // [[1, 2, 3], [4, 5, 6], [7, 8]]
     * ```
     *
     * @since 2.0.0
     * @category splitting
     */
    (n: number): <A>(self: Iterable<A>) => Array<Array<A>>;
    /**
     * Splits this iterable into `n` equally sized arrays.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.split([1, 2, 3, 4, 5, 6, 7, 8], 3)
     * console.log(result) // [[1, 2, 3], [4, 5, 6], [7, 8]]
     * ```
     *
     * @since 2.0.0
     * @category splitting
     */
    <A>(self: Iterable<A>, n: number): Array<Array<A>>;
};
/**
 * Splits this iterable on the first element that matches this predicate.
 * Returns a tuple containing two arrays: the first one is before the match, and the second one is from the match onward.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.splitWhere([1, 2, 3, 4, 5], n => n > 3)
 * console.log(result) // [[1, 2, 3], [4, 5]]
 * ```
 *
 * @category splitting
 * @since 2.0.0
 */
export declare const splitWhere: {
    /**
     * Splits this iterable on the first element that matches this predicate.
     * Returns a tuple containing two arrays: the first one is before the match, and the second one is from the match onward.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.splitWhere([1, 2, 3, 4, 5], n => n > 3)
     * console.log(result) // [[1, 2, 3], [4, 5]]
     * ```
     *
     * @category splitting
     * @since 2.0.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: Iterable<A>) => [beforeMatch: Array<A>, fromMatch: Array<A>];
    /**
     * Splits this iterable on the first element that matches this predicate.
     * Returns a tuple containing two arrays: the first one is before the match, and the second one is from the match onward.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.splitWhere([1, 2, 3, 4, 5], n => n > 3)
     * console.log(result) // [[1, 2, 3], [4, 5]]
     * ```
     *
     * @category splitting
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, predicate: (a: A, i: number) => boolean): [beforeMatch: Array<A>, fromMatch: Array<A>];
};
/**
 * Copies an array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.copy([1, 2, 3])
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @since 2.0.0
 */
export declare const copy: {
    /**
     * Copies an array.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.copy([1, 2, 3])
     * console.log(result) // [1, 2, 3]
     * ```
     *
     * @since 2.0.0
     */
    <A>(self: NonEmptyReadonlyArray<A>): NonEmptyArray<A>;
    /**
     * Copies an array.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.copy([1, 2, 3])
     * console.log(result) // [1, 2, 3]
     * ```
     *
     * @since 2.0.0
     */
    <A>(self: ReadonlyArray<A>): Array<A>;
};
/**
 * Pads an array.
 * Returns a new array of length `n` with the elements of `array` followed by `fill` elements if `array` is shorter than `n`.
 * If `array` is longer than `n`, the returned array will be a slice of `array` containing the `n` first elements of `array`.
 * If `n` is less than or equal to 0, the returned array will be an empty array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.pad([1, 2, 3], 6, 0)
 * console.log(result) // [1, 2, 3, 0, 0, 0]
 * ```
 *
 * @since 3.8.4
 */
export declare const pad: {
    /**
     * Pads an array.
     * Returns a new array of length `n` with the elements of `array` followed by `fill` elements if `array` is shorter than `n`.
     * If `array` is longer than `n`, the returned array will be a slice of `array` containing the `n` first elements of `array`.
     * If `n` is less than or equal to 0, the returned array will be an empty array.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.pad([1, 2, 3], 6, 0)
     * console.log(result) // [1, 2, 3, 0, 0, 0]
     * ```
     *
     * @since 3.8.4
     */
    <A, T>(n: number, fill: T): (self: Array<A>) => Array<A | T>;
    /**
     * Pads an array.
     * Returns a new array of length `n` with the elements of `array` followed by `fill` elements if `array` is shorter than `n`.
     * If `array` is longer than `n`, the returned array will be a slice of `array` containing the `n` first elements of `array`.
     * If `n` is less than or equal to 0, the returned array will be an empty array.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.pad([1, 2, 3], 6, 0)
     * console.log(result) // [1, 2, 3, 0, 0, 0]
     * ```
     *
     * @since 3.8.4
     */
    <A, T>(self: Array<A>, n: number, fill: T): Array<A | T>;
};
/**
 * Splits an `Iterable` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the `Iterable`. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
 * definition of `chunksOf`; it satisfies the property that
 *
 * ```ts skip-type-checking
 * chunksOf(n)(xs).concat(chunksOf(n)(ys)) == chunksOf(n)(xs.concat(ys)))
 * ```
 *
 * whenever `n` evenly divides the length of `self`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.chunksOf([1, 2, 3, 4, 5], 2)
 * console.log(result) // [[1, 2], [3, 4], [5]]
 *
 * // Explanation:
 * // The `chunksOf` function takes an array of numbers `[1, 2, 3, 4, 5]` and a number `2`.
 * // It splits the array into chunks of length 2. Since the array length is not evenly divisible by 2,
 * // the last chunk contains the remaining elements.
 * // The result is `[[1, 2], [3, 4], [5]]`.
 * ```
 *
 * @category splitting
 * @since 2.0.0
 */
export declare const chunksOf: {
    /**
     * Splits an `Iterable` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
     * the `Iterable`. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
     * definition of `chunksOf`; it satisfies the property that
     *
     * ```ts skip-type-checking
     * chunksOf(n)(xs).concat(chunksOf(n)(ys)) == chunksOf(n)(xs.concat(ys)))
     * ```
     *
     * whenever `n` evenly divides the length of `self`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.chunksOf([1, 2, 3, 4, 5], 2)
     * console.log(result) // [[1, 2], [3, 4], [5]]
     *
     * // Explanation:
     * // The `chunksOf` function takes an array of numbers `[1, 2, 3, 4, 5]` and a number `2`.
     * // It splits the array into chunks of length 2. Since the array length is not evenly divisible by 2,
     * // the last chunk contains the remaining elements.
     * // The result is `[[1, 2], [3, 4], [5]]`.
     * ```
     *
     * @category splitting
     * @since 2.0.0
     */
    (n: number): <S extends Iterable<any>>(self: S) => ReadonlyArray.With<S, NonEmptyArray<ReadonlyArray.Infer<S>>>;
    /**
     * Splits an `Iterable` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
     * the `Iterable`. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
     * definition of `chunksOf`; it satisfies the property that
     *
     * ```ts skip-type-checking
     * chunksOf(n)(xs).concat(chunksOf(n)(ys)) == chunksOf(n)(xs.concat(ys)))
     * ```
     *
     * whenever `n` evenly divides the length of `self`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.chunksOf([1, 2, 3, 4, 5], 2)
     * console.log(result) // [[1, 2], [3, 4], [5]]
     *
     * // Explanation:
     * // The `chunksOf` function takes an array of numbers `[1, 2, 3, 4, 5]` and a number `2`.
     * // It splits the array into chunks of length 2. Since the array length is not evenly divisible by 2,
     * // the last chunk contains the remaining elements.
     * // The result is `[[1, 2], [3, 4], [5]]`.
     * ```
     *
     * @category splitting
     * @since 2.0.0
     */
    <A>(self: NonEmptyReadonlyArray<A>, n: number): NonEmptyArray<NonEmptyArray<A>>;
    /**
     * Splits an `Iterable` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
     * the `Iterable`. Note that `chunksOf(n)([])` is `[]`, not `[[]]`. This is intentional, and is consistent with a recursive
     * definition of `chunksOf`; it satisfies the property that
     *
     * ```ts skip-type-checking
     * chunksOf(n)(xs).concat(chunksOf(n)(ys)) == chunksOf(n)(xs.concat(ys)))
     * ```
     *
     * whenever `n` evenly divides the length of `self`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.chunksOf([1, 2, 3, 4, 5], 2)
     * console.log(result) // [[1, 2], [3, 4], [5]]
     *
     * // Explanation:
     * // The `chunksOf` function takes an array of numbers `[1, 2, 3, 4, 5]` and a number `2`.
     * // It splits the array into chunks of length 2. Since the array length is not evenly divisible by 2,
     * // the last chunk contains the remaining elements.
     * // The result is `[[1, 2], [3, 4], [5]]`.
     * ```
     *
     * @category splitting
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, n: number): Array<NonEmptyArray<A>>;
};
/**
 * Creates sliding windows of size `n` from an `Iterable`.
 * If the number of elements is less than `n` or if `n` is not greater than zero,
 * an empty array is returned.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Array } from "effect"
 *
 * const numbers = [1, 2, 3, 4, 5]
 * assert.deepStrictEqual(Array.window(numbers, 3), [[1, 2, 3], [2, 3, 4], [3, 4, 5]])
 * assert.deepStrictEqual(Array.window(numbers, 6), [])
 * ```
 *
 * @category splitting
 * @since 3.13.2
 */
export declare const window: {
    /**
     * Creates sliding windows of size `n` from an `Iterable`.
     * If the number of elements is less than `n` or if `n` is not greater than zero,
     * an empty array is returned.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Array } from "effect"
     *
     * const numbers = [1, 2, 3, 4, 5]
     * assert.deepStrictEqual(Array.window(numbers, 3), [[1, 2, 3], [2, 3, 4], [3, 4, 5]])
     * assert.deepStrictEqual(Array.window(numbers, 6), [])
     * ```
     *
     * @category splitting
     * @since 3.13.2
     */
    <N extends number = number>(n: N): <A>(self: Iterable<A>) => Array<TupleOf<N, A>>;
    /**
     * Creates sliding windows of size `n` from an `Iterable`.
     * If the number of elements is less than `n` or if `n` is not greater than zero,
     * an empty array is returned.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Array } from "effect"
     *
     * const numbers = [1, 2, 3, 4, 5]
     * assert.deepStrictEqual(Array.window(numbers, 3), [[1, 2, 3], [2, 3, 4], [3, 4, 5]])
     * assert.deepStrictEqual(Array.window(numbers, 6), [])
     * ```
     *
     * @category splitting
     * @since 3.13.2
     */
    <A, N extends number = number>(self: Iterable<A>, n: N): Array<TupleOf<N, A>>;
};
/**
 * Group equal, consecutive elements of a `NonEmptyReadonlyArray` into `NonEmptyArray`s using the provided `isEquivalent` function.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.groupWith(["a", "a", "b", "b", "b", "c", "a"], (x, y) => x === y)
 * console.log(result) // [["a", "a"], ["b", "b", "b"], ["c"], ["a"]]
 * ```
 *
 * @category grouping
 * @since 2.0.0
 */
export declare const groupWith: {
    /**
     * Group equal, consecutive elements of a `NonEmptyReadonlyArray` into `NonEmptyArray`s using the provided `isEquivalent` function.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.groupWith(["a", "a", "b", "b", "b", "c", "a"], (x, y) => x === y)
     * console.log(result) // [["a", "a"], ["b", "b", "b"], ["c"], ["a"]]
     * ```
     *
     * @category grouping
     * @since 2.0.0
     */
    <A>(isEquivalent: (self: A, that: A) => boolean): (self: NonEmptyReadonlyArray<A>) => NonEmptyArray<NonEmptyArray<A>>;
    /**
     * Group equal, consecutive elements of a `NonEmptyReadonlyArray` into `NonEmptyArray`s using the provided `isEquivalent` function.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.groupWith(["a", "a", "b", "b", "b", "c", "a"], (x, y) => x === y)
     * console.log(result) // [["a", "a"], ["b", "b", "b"], ["c"], ["a"]]
     * ```
     *
     * @category grouping
     * @since 2.0.0
     */
    <A>(self: NonEmptyReadonlyArray<A>, isEquivalent: (self: A, that: A) => boolean): NonEmptyArray<NonEmptyArray<A>>;
};
/**
 * Group equal, consecutive elements of a `NonEmptyReadonlyArray` into `NonEmptyArray`s.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.group([1, 1, 2, 2, 2, 3, 1])
 * console.log(result) // [[1, 1], [2, 2, 2], [3], [1]]
 * ```
 *
 * @category grouping
 * @since 2.0.0
 */
export declare const group: <A>(self: NonEmptyReadonlyArray<A>) => NonEmptyArray<NonEmptyArray<A>>;
/**
 * Splits an `Iterable` into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
 * function on each element, and grouping the results according to values returned
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const people = [
 *   { name: "Alice", group: "A" },
 *   { name: "Bob", group: "B" },
 *   { name: "Charlie", group: "A" }
 * ]
 *
 * const result = Array.groupBy(people, person => person.group)
 * console.log(result)
 * // {
 * //  A: [{ name: "Alice", group: "A" }, { name: "Charlie", group: "A" }],
 * //  B: [{ name: "Bob", group: "B" }]
 * // }
 * ```
 *
 * @category grouping
 * @since 2.0.0
 */
export declare const groupBy: {
    /**
     * Splits an `Iterable` into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
     * function on each element, and grouping the results according to values returned
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const people = [
     *   { name: "Alice", group: "A" },
     *   { name: "Bob", group: "B" },
     *   { name: "Charlie", group: "A" }
     * ]
     *
     * const result = Array.groupBy(people, person => person.group)
     * console.log(result)
     * // {
     * //  A: [{ name: "Alice", group: "A" }, { name: "Charlie", group: "A" }],
     * //  B: [{ name: "Bob", group: "B" }]
     * // }
     * ```
     *
     * @category grouping
     * @since 2.0.0
     */
    <A, K extends string | symbol>(f: (a: A) => K): (self: Iterable<A>) => Record<Record.ReadonlyRecord.NonLiteralKey<K>, NonEmptyArray<A>>;
    /**
     * Splits an `Iterable` into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
     * function on each element, and grouping the results according to values returned
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const people = [
     *   { name: "Alice", group: "A" },
     *   { name: "Bob", group: "B" },
     *   { name: "Charlie", group: "A" }
     * ]
     *
     * const result = Array.groupBy(people, person => person.group)
     * console.log(result)
     * // {
     * //  A: [{ name: "Alice", group: "A" }, { name: "Charlie", group: "A" }],
     * //  B: [{ name: "Bob", group: "B" }]
     * // }
     * ```
     *
     * @category grouping
     * @since 2.0.0
     */
    <A, K extends string | symbol>(self: Iterable<A>, f: (a: A) => K): Record<Record.ReadonlyRecord.NonLiteralKey<K>, NonEmptyArray<A>>;
};
/**
 * Calculates the union of two arrays using the provided equivalence relation.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const union = Array.unionWith([1, 2], [2, 3], (a, b) => a === b)
 * console.log(union) // [1, 2, 3]
 * ```
 *
 * @since 2.0.0
 */
export declare const unionWith: {
    /**
     * Calculates the union of two arrays using the provided equivalence relation.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const union = Array.unionWith([1, 2], [2, 3], (a, b) => a === b)
     * console.log(union) // [1, 2, 3]
     * ```
     *
     * @since 2.0.0
     */
    <S extends Iterable<any>, T extends Iterable<any>>(that: T, isEquivalent: (self: ReadonlyArray.Infer<S>, that: ReadonlyArray.Infer<T>) => boolean): (self: S) => ReadonlyArray.OrNonEmpty<S, T, ReadonlyArray.Infer<S> | ReadonlyArray.Infer<T>>;
    /**
     * Calculates the union of two arrays using the provided equivalence relation.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const union = Array.unionWith([1, 2], [2, 3], (a, b) => a === b)
     * console.log(union) // [1, 2, 3]
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(self: NonEmptyReadonlyArray<A>, that: Iterable<B>, isEquivalent: (self: A, that: B) => boolean): NonEmptyArray<A | B>;
    /**
     * Calculates the union of two arrays using the provided equivalence relation.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const union = Array.unionWith([1, 2], [2, 3], (a, b) => a === b)
     * console.log(union) // [1, 2, 3]
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, that: NonEmptyReadonlyArray<B>, isEquivalent: (self: A, that: B) => boolean): NonEmptyArray<A | B>;
    /**
     * Calculates the union of two arrays using the provided equivalence relation.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const union = Array.unionWith([1, 2], [2, 3], (a, b) => a === b)
     * console.log(union) // [1, 2, 3]
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, that: Iterable<B>, isEquivalent: (self: A, that: B) => boolean): Array<A | B>;
};
/**
 * Creates a union of two arrays, removing duplicates.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.union([1, 2], [2, 3])
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @since 2.0.0
 */
export declare const union: {
    /**
     * Creates a union of two arrays, removing duplicates.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.union([1, 2], [2, 3])
     * console.log(result) // [1, 2, 3]
     * ```
     *
     * @since 2.0.0
     */
    <T extends Iterable<any>>(that: T): <S extends Iterable<any>>(self: S) => ReadonlyArray.OrNonEmpty<S, T, ReadonlyArray.Infer<S> | ReadonlyArray.Infer<T>>;
    /**
     * Creates a union of two arrays, removing duplicates.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.union([1, 2], [2, 3])
     * console.log(result) // [1, 2, 3]
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(self: NonEmptyReadonlyArray<A>, that: ReadonlyArray<B>): NonEmptyArray<A | B>;
    /**
     * Creates a union of two arrays, removing duplicates.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.union([1, 2], [2, 3])
     * console.log(result) // [1, 2, 3]
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(self: ReadonlyArray<A>, that: NonEmptyReadonlyArray<B>): NonEmptyArray<A | B>;
    /**
     * Creates a union of two arrays, removing duplicates.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.union([1, 2], [2, 3])
     * console.log(result) // [1, 2, 3]
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, that: Iterable<B>): Array<A | B>;
};
/**
 * Creates an `Array` of unique values that are included in all given `Iterable`s using the provided `isEquivalent` function.
 * The order and references of result values are determined by the first `Iterable`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const array1 = [{ id: 1 }, { id: 2 }, { id: 3 }]
 * const array2 = [{ id: 3 }, { id: 4 }, { id: 1 }]
 * const isEquivalent = (a: { id: number }, b: { id: number }) => a.id === b.id
 * const result = Array.intersectionWith(isEquivalent)(array2)(array1)
 * console.log(result) // [{ id: 1 }, { id: 3 }]
 * ```
 *
 * @since 2.0.0
 */
export declare const intersectionWith: <A>(isEquivalent: (self: A, that: A) => boolean) => {
    (that: Iterable<A>): (self: Iterable<A>) => Array<A>;
    (self: Iterable<A>, that: Iterable<A>): Array<A>;
};
/**
 * Creates an `Array` of unique values that are included in all given `Iterable`s.
 * The order and references of result values are determined by the first `Iterable`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.intersection([1, 2, 3], [3, 4, 1])
 * console.log(result) // [1, 3]
 * ```
 *
 * @since 2.0.0
 */
export declare const intersection: {
    /**
     * Creates an `Array` of unique values that are included in all given `Iterable`s.
     * The order and references of result values are determined by the first `Iterable`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.intersection([1, 2, 3], [3, 4, 1])
     * console.log(result) // [1, 3]
     * ```
     *
     * @since 2.0.0
     */
    <B>(that: Iterable<B>): <A>(self: Iterable<A>) => Array<A & B>;
    /**
     * Creates an `Array` of unique values that are included in all given `Iterable`s.
     * The order and references of result values are determined by the first `Iterable`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.intersection([1, 2, 3], [3, 4, 1])
     * console.log(result) // [1, 3]
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, that: Iterable<B>): Array<A & B>;
};
/**
 * Creates a `Array` of values not included in the other given `Iterable` using the provided `isEquivalent` function.
 * The order and references of result values are determined by the first `Iterable`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const array1 = [1, 2, 3]
 * const array2 = [2, 3, 4]
 * const difference = Array.differenceWith<number>((a, b) => a === b)(array1, array2)
 * console.log(difference) // [1]
 * ```
 *
 * @since 2.0.0
 */
export declare const differenceWith: <A>(isEquivalent: (self: A, that: A) => boolean) => {
    (that: Iterable<A>): (self: Iterable<A>) => Array<A>;
    (self: Iterable<A>, that: Iterable<A>): Array<A>;
};
/**
 * Creates a `Array` of values not included in the other given `Iterable`.
 * The order and references of result values are determined by the first `Iterable`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const difference = Array.difference([1, 2, 3], [2, 3, 4])
 * console.log(difference) // [1]
 * ```
 *
 * @since 2.0.0
 */
export declare const difference: {
    /**
     * Creates a `Array` of values not included in the other given `Iterable`.
     * The order and references of result values are determined by the first `Iterable`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const difference = Array.difference([1, 2, 3], [2, 3, 4])
     * console.log(difference) // [1]
     * ```
     *
     * @since 2.0.0
     */
    <A>(that: Iterable<A>): (self: Iterable<A>) => Array<A>;
    /**
     * Creates a `Array` of values not included in the other given `Iterable`.
     * The order and references of result values are determined by the first `Iterable`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const difference = Array.difference([1, 2, 3], [2, 3, 4])
     * console.log(difference) // [1]
     * ```
     *
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, that: Iterable<A>): Array<A>;
};
/**
 * @category constructors
 * @since 2.0.0
 */
export declare const empty: <A = never>() => Array<A>;
/**
 * Constructs a new `NonEmptyArray<A>` from the specified value.
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const of: <A>(a: A) => NonEmptyArray<A>;
/**
 * @since 2.0.0
 */
export declare namespace ReadonlyArray {
    /**
     * @since 2.0.0
     */
    type Infer<S extends Iterable<any>> = S extends ReadonlyArray<infer A> ? A : S extends Iterable<infer A> ? A : never;
    /**
     * @since 2.0.0
     */
    type With<S extends Iterable<any>, A> = S extends NonEmptyReadonlyArray<any> ? NonEmptyArray<A> : Array<A>;
    /**
     * @since 2.0.0
     */
    type OrNonEmpty<S extends Iterable<any>, T extends Iterable<any>, A> = S extends NonEmptyReadonlyArray<any> ? NonEmptyArray<A> : T extends NonEmptyReadonlyArray<any> ? NonEmptyArray<A> : Array<A>;
    /**
     * @since 2.0.0
     */
    type AndNonEmpty<S extends Iterable<any>, T extends Iterable<any>, A> = S extends NonEmptyReadonlyArray<any> ? T extends NonEmptyReadonlyArray<any> ? NonEmptyArray<A> : Array<A> : Array<A>;
    /**
     * @since 2.0.0
     */
    type Flatten<T extends ReadonlyArray<ReadonlyArray<any>>> = T extends NonEmptyReadonlyArray<NonEmptyReadonlyArray<any>> ? NonEmptyArray<T[number][number]> : Array<T[number][number]>;
}
/**
 * @category mapping
 * @since 2.0.0
 */
export declare const map: {
    /**
     * @category mapping
     * @since 2.0.0
     */
    <S extends ReadonlyArray<any>, B>(f: (a: ReadonlyArray.Infer<S>, i: number) => B): (self: S) => ReadonlyArray.With<S, B>;
    /**
     * @category mapping
     * @since 2.0.0
     */
    <S extends ReadonlyArray<any>, B>(self: S, f: (a: ReadonlyArray.Infer<S>, i: number) => B): ReadonlyArray.With<S, B>;
};
/**
 * Applies a function to each element in an array and returns a new array containing the concatenated mapped elements.
 *
 * @category sequencing
 * @since 2.0.0
 */
export declare const flatMap: {
    /**
     * Applies a function to each element in an array and returns a new array containing the concatenated mapped elements.
     *
     * @category sequencing
     * @since 2.0.0
     */
    <S extends ReadonlyArray<any>, T extends ReadonlyArray<any>>(f: (a: ReadonlyArray.Infer<S>, i: number) => T): (self: S) => ReadonlyArray.AndNonEmpty<S, T, ReadonlyArray.Infer<T>>;
    /**
     * Applies a function to each element in an array and returns a new array containing the concatenated mapped elements.
     *
     * @category sequencing
     * @since 2.0.0
     */
    <A, B>(self: NonEmptyReadonlyArray<A>, f: (a: A, i: number) => NonEmptyReadonlyArray<B>): NonEmptyArray<B>;
    /**
     * Applies a function to each element in an array and returns a new array containing the concatenated mapped elements.
     *
     * @category sequencing
     * @since 2.0.0
     */
    <A, B>(self: ReadonlyArray<A>, f: (a: A, i: number) => ReadonlyArray<B>): Array<B>;
};
/**
 * Combines multiple arrays into a single array by concatenating all elements
 * from each nested array. This function ensures that the structure of nested
 * arrays is collapsed into a single, flat array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.flatten([[1, 2], [], [3, 4], [], [5, 6]])
 * console.log(result) // [1, 2, 3, 4, 5, 6]
 * ```
 *
 * @category sequencing
 * @since 2.0.0
 */
export declare const flatten: <const S extends ReadonlyArray<ReadonlyArray<any>>>(self: S) => ReadonlyArray.Flatten<S>;
/**
 * Applies a function to each element of the `Iterable` and filters based on the result, keeping the transformed values where the function returns `Some`.
 * This method combines filtering and mapping functionalities, allowing transformations and filtering of elements based on a single function pass.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Option } from "effect"
 *
 * const evenSquares = (x: number) => x % 2 === 0 ? Option.some(x * x) : Option.none()
 *
 * const result = Array.filterMap([1, 2, 3, 4, 5], evenSquares);
 * console.log(result) // [4, 16]
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
export declare const filterMap: {
    /**
     * Applies a function to each element of the `Iterable` and filters based on the result, keeping the transformed values where the function returns `Some`.
     * This method combines filtering and mapping functionalities, allowing transformations and filtering of elements based on a single function pass.
     *
     * **Example**
     *
     * ```ts
     * import { Array, Option } from "effect"
     *
     * const evenSquares = (x: number) => x % 2 === 0 ? Option.some(x * x) : Option.none()
     *
     * const result = Array.filterMap([1, 2, 3, 4, 5], evenSquares);
     * console.log(result) // [4, 16]
     * ```
     *
     * @category filtering
     * @since 2.0.0
     */
    <A, B>(f: (a: A, i: number) => Option.Option<B>): (self: Iterable<A>) => Array<B>;
    /**
     * Applies a function to each element of the `Iterable` and filters based on the result, keeping the transformed values where the function returns `Some`.
     * This method combines filtering and mapping functionalities, allowing transformations and filtering of elements based on a single function pass.
     *
     * **Example**
     *
     * ```ts
     * import { Array, Option } from "effect"
     *
     * const evenSquares = (x: number) => x % 2 === 0 ? Option.some(x * x) : Option.none()
     *
     * const result = Array.filterMap([1, 2, 3, 4, 5], evenSquares);
     * console.log(result) // [4, 16]
     * ```
     *
     * @category filtering
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, f: (a: A, i: number) => Option.Option<B>): Array<B>;
};
/**
 * Applies a function to each element of the array and filters based on the result, stopping when a condition is not met.
 * This method combines filtering and mapping in a single pass, and short-circuits, i.e., stops processing, as soon as the function returns `None`.
 * This is useful when you need to transform an array but only up to the point where a certain condition holds true.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Option } from "effect"
 *
 * const toSquareTillOdd = (x: number) => x % 2 === 0 ? Option.some(x * x) : Option.none()
 *
 * const result = Array.filterMapWhile([2, 4, 5], toSquareTillOdd)
 * console.log(result) // [4, 16]
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
export declare const filterMapWhile: {
    /**
     * Applies a function to each element of the array and filters based on the result, stopping when a condition is not met.
     * This method combines filtering and mapping in a single pass, and short-circuits, i.e., stops processing, as soon as the function returns `None`.
     * This is useful when you need to transform an array but only up to the point where a certain condition holds true.
     *
     * **Example**
     *
     * ```ts
     * import { Array, Option } from "effect"
     *
     * const toSquareTillOdd = (x: number) => x % 2 === 0 ? Option.some(x * x) : Option.none()
     *
     * const result = Array.filterMapWhile([2, 4, 5], toSquareTillOdd)
     * console.log(result) // [4, 16]
     * ```
     *
     * @category filtering
     * @since 2.0.0
     */
    <A, B>(f: (a: A, i: number) => Option.Option<B>): (self: Iterable<A>) => Array<B>;
    /**
     * Applies a function to each element of the array and filters based on the result, stopping when a condition is not met.
     * This method combines filtering and mapping in a single pass, and short-circuits, i.e., stops processing, as soon as the function returns `None`.
     * This is useful when you need to transform an array but only up to the point where a certain condition holds true.
     *
     * **Example**
     *
     * ```ts
     * import { Array, Option } from "effect"
     *
     * const toSquareTillOdd = (x: number) => x % 2 === 0 ? Option.some(x * x) : Option.none()
     *
     * const result = Array.filterMapWhile([2, 4, 5], toSquareTillOdd)
     * console.log(result) // [4, 16]
     * ```
     *
     * @category filtering
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, f: (a: A, i: number) => Option.Option<B>): Array<B>;
};
/**
 * Applies a function to each element of the `Iterable`, categorizing the results into two separate arrays.
 * This function is particularly useful for operations where each element can result in two possible types,
 * and you want to separate these types into different collections. For instance, separating validation results
 * into successes and failures.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Either } from "effect";
 *
 * const isEven = (x: number) => x % 2 === 0
 *
 * const result = Array.partitionMap([1, 2, 3, 4, 5], x =>
 *   isEven(x) ? Either.right(x) : Either.left(x)
 * )
 * console.log(result)
 * // [
 * //   [1, 3, 5],
 * //   [2, 4]
 * // ]
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
export declare const partitionMap: {
    /**
     * Applies a function to each element of the `Iterable`, categorizing the results into two separate arrays.
     * This function is particularly useful for operations where each element can result in two possible types,
     * and you want to separate these types into different collections. For instance, separating validation results
     * into successes and failures.
     *
     * **Example**
     *
     * ```ts
     * import { Array, Either } from "effect";
     *
     * const isEven = (x: number) => x % 2 === 0
     *
     * const result = Array.partitionMap([1, 2, 3, 4, 5], x =>
     *   isEven(x) ? Either.right(x) : Either.left(x)
     * )
     * console.log(result)
     * // [
     * //   [1, 3, 5],
     * //   [2, 4]
     * // ]
     * ```
     *
     * @category filtering
     * @since 2.0.0
     */
    <A, B, C>(f: (a: A, i: number) => Either.Either<C, B>): (self: Iterable<A>) => [left: Array<B>, right: Array<C>];
    /**
     * Applies a function to each element of the `Iterable`, categorizing the results into two separate arrays.
     * This function is particularly useful for operations where each element can result in two possible types,
     * and you want to separate these types into different collections. For instance, separating validation results
     * into successes and failures.
     *
     * **Example**
     *
     * ```ts
     * import { Array, Either } from "effect";
     *
     * const isEven = (x: number) => x % 2 === 0
     *
     * const result = Array.partitionMap([1, 2, 3, 4, 5], x =>
     *   isEven(x) ? Either.right(x) : Either.left(x)
     * )
     * console.log(result)
     * // [
     * //   [1, 3, 5],
     * //   [2, 4]
     * // ]
     * ```
     *
     * @category filtering
     * @since 2.0.0
     */
    <A, B, C>(self: Iterable<A>, f: (a: A, i: number) => Either.Either<C, B>): [left: Array<B>, right: Array<C>];
};
/**
 * Retrieves the `Some` values from an `Iterable` of `Option`s, collecting them into an array.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Option } from "effect"
 *
 * const result = Array.getSomes([Option.some(1), Option.none(), Option.some(2)])
 * console.log(result) // [1, 2]
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
export declare const getSomes: <T extends Iterable<Option.Option<X>>, X = any>(self: T) => Array<Option.Option.Value<ReadonlyArray.Infer<T>>>;
/**
 * Retrieves the `Left` values from an `Iterable` of `Either`s, collecting them into an array.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Either } from "effect"
 *
 * const result = Array.getLefts([Either.right(1), Either.left("err"), Either.right(2)])
 * console.log(result) // ["err"]
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
export declare const getLefts: <T extends Iterable<Either.Either<any, any>>>(self: T) => Array<Either.Either.Left<ReadonlyArray.Infer<T>>>;
/**
 * Retrieves the `Right` values from an `Iterable` of `Either`s, collecting them into an array.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Either } from "effect"
 *
 * const result = Array.getRights([Either.right(1), Either.left("err"), Either.right(2)])
 * console.log(result) // [1, 2]
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
export declare const getRights: <T extends Iterable<Either.Either<any, any>>>(self: T) => Array<Either.Either.Right<ReadonlyArray.Infer<T>>>;
/**
 * @category filtering
 * @since 2.0.0
 */
export declare const filter: {
    /**
     * @category filtering
     * @since 2.0.0
     */
    <A, B extends A>(refinement: (a: NoInfer<A>, i: number) => a is B): (self: Iterable<A>) => Array<B>;
    /**
     * @category filtering
     * @since 2.0.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: Iterable<A>) => Array<A>;
    /**
     * @category filtering
     * @since 2.0.0
     */
    <A, B extends A>(self: Iterable<A>, refinement: (a: A, i: number) => a is B): Array<B>;
    /**
     * @category filtering
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, predicate: (a: A, i: number) => boolean): Array<A>;
};
/**
 * Separate elements based on a predicate that also exposes the index of the element.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.partition([1, 2, 3, 4], n => n % 2 === 0)
 * console.log(result) // [[1, 3], [2, 4]]
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
export declare const partition: {
    /**
     * Separate elements based on a predicate that also exposes the index of the element.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.partition([1, 2, 3, 4], n => n % 2 === 0)
     * console.log(result) // [[1, 3], [2, 4]]
     * ```
     *
     * @category filtering
     * @since 2.0.0
     */
    <A, B extends A>(refinement: (a: NoInfer<A>, i: number) => a is B): (self: Iterable<A>) => [excluded: Array<Exclude<A, B>>, satisfying: Array<B>];
    /**
     * Separate elements based on a predicate that also exposes the index of the element.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.partition([1, 2, 3, 4], n => n % 2 === 0)
     * console.log(result) // [[1, 3], [2, 4]]
     * ```
     *
     * @category filtering
     * @since 2.0.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: Iterable<A>) => [excluded: Array<A>, satisfying: Array<A>];
    /**
     * Separate elements based on a predicate that also exposes the index of the element.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.partition([1, 2, 3, 4], n => n % 2 === 0)
     * console.log(result) // [[1, 3], [2, 4]]
     * ```
     *
     * @category filtering
     * @since 2.0.0
     */
    <A, B extends A>(self: Iterable<A>, refinement: (a: A, i: number) => a is B): [excluded: Array<Exclude<A, B>>, satisfying: Array<B>];
    /**
     * Separate elements based on a predicate that also exposes the index of the element.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.partition([1, 2, 3, 4], n => n % 2 === 0)
     * console.log(result) // [[1, 3], [2, 4]]
     * ```
     *
     * @category filtering
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, predicate: (a: A, i: number) => boolean): [excluded: Array<A>, satisfying: Array<A>];
};
/**
 * Separates an `Iterable` into two arrays based on a predicate.
 *
 * @category filtering
 * @since 2.0.0
 */
export declare const separate: <T extends Iterable<Either.Either<any, any>>>(self: T) => [Array<Either.Either.Left<ReadonlyArray.Infer<T>>>, Array<Either.Either.Right<ReadonlyArray.Infer<T>>>];
/**
 * Reduces an array from the left.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.reduce([1, 2, 3], 0, (acc, n) => acc + n)
 * console.log(result) // 6
 * ```
 *
 * @category folding
 * @since 2.0.0
 */
export declare const reduce: {
    /**
     * Reduces an array from the left.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.reduce([1, 2, 3], 0, (acc, n) => acc + n)
     * console.log(result) // 6
     * ```
     *
     * @category folding
     * @since 2.0.0
     */
    <B, A>(b: B, f: (b: B, a: A, i: number) => B): (self: Iterable<A>) => B;
    /**
     * Reduces an array from the left.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.reduce([1, 2, 3], 0, (acc, n) => acc + n)
     * console.log(result) // 6
     * ```
     *
     * @category folding
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, b: B, f: (b: B, a: A, i: number) => B): B;
};
/**
 * Reduces an array from the right.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.reduceRight([1, 2, 3], 0, (acc, n) => acc + n)
 * console.log(result) // 6
 * ```
 *
 * @category folding
 * @since 2.0.0
 */
export declare const reduceRight: {
    /**
     * Reduces an array from the right.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.reduceRight([1, 2, 3], 0, (acc, n) => acc + n)
     * console.log(result) // 6
     * ```
     *
     * @category folding
     * @since 2.0.0
     */
    <B, A>(b: B, f: (b: B, a: A, i: number) => B): (self: Iterable<A>) => B;
    /**
     * Reduces an array from the right.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.reduceRight([1, 2, 3], 0, (acc, n) => acc + n)
     * console.log(result) // 6
     * ```
     *
     * @category folding
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, b: B, f: (b: B, a: A, i: number) => B): B;
};
/**
 * Lifts a predicate into an array.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const isEven = (n: number) => n % 2 === 0
 * const to = Array.liftPredicate(isEven)
 * console.log(to(1)) // []
 * console.log(to(2)) // [2]
 * ```
 *
 * @category lifting
 * @since 2.0.0
 */
export declare const liftPredicate: {
    <A, B extends A>(refinement: Predicate.Refinement<A, B>): (a: A) => Array<B>;
    /**
     * Lifts a predicate into an array.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const isEven = (n: number) => n % 2 === 0
     * const to = Array.liftPredicate(isEven)
     * console.log(to(1)) // []
     * console.log(to(2)) // [2]
     * ```
     *
     * @category lifting
     * @since 2.0.0
     */
    <A>(predicate: Predicate.Predicate<A>): <B extends A>(b: B) => Array<B>;
};
/**
 * @category lifting
 * @since 2.0.0
 */
export declare const liftOption: <A extends Array<unknown>, B>(f: (...a: A) => Option.Option<B>) => (...a: A) => Array<B>;
/**
 * @category conversions
 * @since 2.0.0
 */
export declare const fromNullable: <A>(a: A) => Array<NonNullable<A>>;
/**
 * @category lifting
 * @since 2.0.0
 */
export declare const liftNullable: <A extends Array<unknown>, B>(f: (...a: A) => B | null | undefined) => (...a: A) => Array<NonNullable<B>>;
/**
 * Maps over an array and flattens the result, removing null and undefined values.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.flatMapNullable([1, 2, 3], n => (n % 2 === 0 ? null : n))
 * console.log(result) // [1, 3]
 *
 * // Explanation:
 * // The array of numbers [1, 2, 3] is mapped with a function that returns null for even numbers
 * // and the number itself for odd numbers. The resulting array [1, null, 3] is then flattened
 * // to remove null values, resulting in [1, 3].
 * ```
 *
 * @category sequencing
 * @since 2.0.0
 */
export declare const flatMapNullable: {
    /**
     * Maps over an array and flattens the result, removing null and undefined values.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.flatMapNullable([1, 2, 3], n => (n % 2 === 0 ? null : n))
     * console.log(result) // [1, 3]
     *
     * // Explanation:
     * // The array of numbers [1, 2, 3] is mapped with a function that returns null for even numbers
     * // and the number itself for odd numbers. The resulting array [1, null, 3] is then flattened
     * // to remove null values, resulting in [1, 3].
     * ```
     *
     * @category sequencing
     * @since 2.0.0
     */
    <A, B>(f: (a: A) => B | null | undefined): (self: ReadonlyArray<A>) => Array<NonNullable<B>>;
    /**
     * Maps over an array and flattens the result, removing null and undefined values.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.flatMapNullable([1, 2, 3], n => (n % 2 === 0 ? null : n))
     * console.log(result) // [1, 3]
     *
     * // Explanation:
     * // The array of numbers [1, 2, 3] is mapped with a function that returns null for even numbers
     * // and the number itself for odd numbers. The resulting array [1, null, 3] is then flattened
     * // to remove null values, resulting in [1, 3].
     * ```
     *
     * @category sequencing
     * @since 2.0.0
     */
    <A, B>(self: ReadonlyArray<A>, f: (a: A) => B | null | undefined): Array<NonNullable<B>>;
};
/**
 * Lifts a function that returns an `Either` into a function that returns an array.
 * If the `Either` is a left, it returns an empty array.
 * If the `Either` is a right, it returns an array with the right value.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Either } from "effect"
 *
 * const parseNumber = (s: string): Either.Either<number, Error> =>
 *   isNaN(Number(s)) ? Either.left(new Error("Not a number")) : Either.right(Number(s))
 *
 * const liftedParseNumber = Array.liftEither(parseNumber)
 *
 * const result1 = liftedParseNumber("42")
 * console.log(result1) // [42]
 *
 * const result2 = liftedParseNumber("not a number")
 * console.log(result2) // []
 *
 * // Explanation:
 * // The function parseNumber is lifted to return an array.
 * // When parsing "42", it returns an Either.left with the number 42, resulting in [42].
 * // When parsing "not a number", it returns an Either.right with an error, resulting in an empty array [].
 * ```
 *
 * @category lifting
 * @since 2.0.0
 */
export declare const liftEither: <A extends Array<unknown>, E, B>(f: (...a: A) => Either.Either<B, E>) => (...a: A) => Array<B>;
/**
 * Check if a predicate holds true for every `ReadonlyArray` element.
 *
 * @category elements
 * @since 2.0.0
 */
export declare const every: {
    /**
     * Check if a predicate holds true for every `ReadonlyArray` element.
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B extends A>(refinement: (a: NoInfer<A>, i: number) => a is B): (self: ReadonlyArray<A>) => self is ReadonlyArray<B>;
    /**
     * Check if a predicate holds true for every `ReadonlyArray` element.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: ReadonlyArray<A>) => boolean;
    /**
     * Check if a predicate holds true for every `ReadonlyArray` element.
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B extends A>(self: ReadonlyArray<A>, refinement: (a: A, i: number) => a is B): self is ReadonlyArray<B>;
    /**
     * Check if a predicate holds true for every `ReadonlyArray` element.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: ReadonlyArray<A>, predicate: (a: A, i: number) => boolean): boolean;
};
/**
 * Check if a predicate holds true for some `ReadonlyArray` element.
 *
 * @category elements
 * @since 2.0.0
 */
export declare const some: {
    /**
     * Check if a predicate holds true for some `ReadonlyArray` element.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: ReadonlyArray<A>) => self is NonEmptyReadonlyArray<A>;
    /**
     * Check if a predicate holds true for some `ReadonlyArray` element.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: ReadonlyArray<A>, predicate: (a: A, i: number) => boolean): self is NonEmptyReadonlyArray<A>;
};
/**
 * Extends an array with a function that maps each subarray to a value.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.extend([1, 2, 3], as => as.length)
 * console.log(result) // [3, 2, 1]
 *
 * // Explanation:
 * // The function maps each subarray starting from each element to its length.
 * // The subarrays are: [1, 2, 3], [2, 3], [3].
 * // The lengths are: 3, 2, 1.
 * // Therefore, the result is [3, 2, 1].
 * ```
 *
 * @since 2.0.0
 */
export declare const extend: {
    /**
     * Extends an array with a function that maps each subarray to a value.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.extend([1, 2, 3], as => as.length)
     * console.log(result) // [3, 2, 1]
     *
     * // Explanation:
     * // The function maps each subarray starting from each element to its length.
     * // The subarrays are: [1, 2, 3], [2, 3], [3].
     * // The lengths are: 3, 2, 1.
     * // Therefore, the result is [3, 2, 1].
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(f: (as: ReadonlyArray<A>) => B): (self: ReadonlyArray<A>) => Array<B>;
    /**
     * Extends an array with a function that maps each subarray to a value.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.extend([1, 2, 3], as => as.length)
     * console.log(result) // [3, 2, 1]
     *
     * // Explanation:
     * // The function maps each subarray starting from each element to its length.
     * // The subarrays are: [1, 2, 3], [2, 3], [3].
     * // The lengths are: 3, 2, 1.
     * // Therefore, the result is [3, 2, 1].
     * ```
     *
     * @since 2.0.0
     */
    <A, B>(self: ReadonlyArray<A>, f: (as: ReadonlyArray<A>) => B): Array<B>;
};
/**
 * Finds the minimum element in an array based on a comparator.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Order } from "effect"
 *
 * const result = Array.min([3, 1, 2], Order.number)
 * console.log(result) // 1
 * ```
 *
 * @since 2.0.0
 */
export declare const min: {
    /**
     * Finds the minimum element in an array based on a comparator.
     *
     * **Example**
     *
     * ```ts
     * import { Array, Order } from "effect"
     *
     * const result = Array.min([3, 1, 2], Order.number)
     * console.log(result) // 1
     * ```
     *
     * @since 2.0.0
     */
    <A>(O: Order.Order<A>): (self: NonEmptyReadonlyArray<A>) => A;
    /**
     * Finds the minimum element in an array based on a comparator.
     *
     * **Example**
     *
     * ```ts
     * import { Array, Order } from "effect"
     *
     * const result = Array.min([3, 1, 2], Order.number)
     * console.log(result) // 1
     * ```
     *
     * @since 2.0.0
     */
    <A>(self: NonEmptyReadonlyArray<A>, O: Order.Order<A>): A;
};
/**
 * Finds the maximum element in an array based on a comparator.
 *
 * **Example**
 *
 * ```ts
 * import { Array, Order } from "effect"
 *
 * const result = Array.max([3, 1, 2], Order.number)
 * console.log(result) // 3
 * ```
 *
 * @since 2.0.0
 */
export declare const max: {
    /**
     * Finds the maximum element in an array based on a comparator.
     *
     * **Example**
     *
     * ```ts
     * import { Array, Order } from "effect"
     *
     * const result = Array.max([3, 1, 2], Order.number)
     * console.log(result) // 3
     * ```
     *
     * @since 2.0.0
     */
    <A>(O: Order.Order<A>): (self: NonEmptyReadonlyArray<A>) => A;
    /**
     * Finds the maximum element in an array based on a comparator.
     *
     * **Example**
     *
     * ```ts
     * import { Array, Order } from "effect"
     *
     * const result = Array.max([3, 1, 2], Order.number)
     * console.log(result) // 3
     * ```
     *
     * @since 2.0.0
     */
    <A>(self: NonEmptyReadonlyArray<A>, O: Order.Order<A>): A;
};
/**
 * @category constructors
 * @since 2.0.0
 */
export declare const unfold: <B, A>(b: B, f: (b: B) => Option.Option<readonly [A, B]>) => Array<A>;
/**
 * This function creates and returns a new `Order` for an array of values based on a given `Order` for the elements of the array.
 * The returned `Order` compares two arrays by applying the given `Order` to each element in the arrays.
 * If all elements are equal, the arrays are then compared based on their length.
 * It is useful when you need to compare two arrays of the same type and you have a specific way of comparing each element of the array.
 *
 * @category instances
 * @since 2.0.0
 */
export declare const getOrder: <A>(O: Order.Order<A>) => Order.Order<ReadonlyArray<A>>;
/**
 * Creates an equivalence relation for arrays.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const eq = Array.getEquivalence<number>((a, b) => a === b)
 * console.log(eq([1, 2, 3], [1, 2, 3])) // true
 * ```
 *
 * @category instances
 * @since 2.0.0
 */
export declare const getEquivalence: <A>(isEquivalent: Equivalence.Equivalence<A>) => Equivalence.Equivalence<ReadonlyArray<A>>;
/**
 * Performs a side-effect for each element of the `Iterable`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * Array.forEach([1, 2, 3], n => console.log(n)) // 1, 2, 3
 * ```
 *
 * @since 2.0.0
 */
export declare const forEach: {
    /**
     * Performs a side-effect for each element of the `Iterable`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * Array.forEach([1, 2, 3], n => console.log(n)) // 1, 2, 3
     * ```
     *
     * @since 2.0.0
     */
    <A>(f: (a: A, i: number) => void): (self: Iterable<A>) => void;
    /**
     * Performs a side-effect for each element of the `Iterable`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * Array.forEach([1, 2, 3], n => console.log(n)) // 1, 2, 3
     * ```
     *
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, f: (a: A, i: number) => void): void;
};
/**
 * Remove duplicates from an `Iterable` using the provided `isEquivalent` function,
 * preserving the order of the first occurrence of each element.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.dedupeWith([1, 2, 2, 3, 3, 3], (a, b) => a === b)
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @since 2.0.0
 */
export declare const dedupeWith: {
    /**
     * Remove duplicates from an `Iterable` using the provided `isEquivalent` function,
     * preserving the order of the first occurrence of each element.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.dedupeWith([1, 2, 2, 3, 3, 3], (a, b) => a === b)
     * console.log(result) // [1, 2, 3]
     * ```
     *
     * @since 2.0.0
     */
    <S extends Iterable<any>>(isEquivalent: (self: ReadonlyArray.Infer<S>, that: ReadonlyArray.Infer<S>) => boolean): (self: S) => ReadonlyArray.With<S, ReadonlyArray.Infer<S>>;
    /**
     * Remove duplicates from an `Iterable` using the provided `isEquivalent` function,
     * preserving the order of the first occurrence of each element.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.dedupeWith([1, 2, 2, 3, 3, 3], (a, b) => a === b)
     * console.log(result) // [1, 2, 3]
     * ```
     *
     * @since 2.0.0
     */
    <A>(self: NonEmptyReadonlyArray<A>, isEquivalent: (self: A, that: A) => boolean): NonEmptyArray<A>;
    /**
     * Remove duplicates from an `Iterable` using the provided `isEquivalent` function,
     * preserving the order of the first occurrence of each element.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.dedupeWith([1, 2, 2, 3, 3, 3], (a, b) => a === b)
     * console.log(result) // [1, 2, 3]
     * ```
     *
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, isEquivalent: (self: A, that: A) => boolean): Array<A>;
};
/**
 * Remove duplicates from an `Iterable`, preserving the order of the first occurrence of each element.
 * The equivalence used to compare elements is provided by `Equal.equivalence()` from the `Equal` module.
 *
 * @since 2.0.0
 */
export declare const dedupe: <S extends Iterable<any>>(self: S) => S extends NonEmptyReadonlyArray<infer A> ? NonEmptyArray<A> : S extends Iterable<infer A> ? Array<A> : never;
/**
 * Deduplicates adjacent elements that are identical using the provided `isEquivalent` function.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.dedupeAdjacentWith([1, 1, 2, 2, 3, 3], (a, b) => a === b)
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @since 2.0.0
 */
export declare const dedupeAdjacentWith: {
    /**
     * Deduplicates adjacent elements that are identical using the provided `isEquivalent` function.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.dedupeAdjacentWith([1, 1, 2, 2, 3, 3], (a, b) => a === b)
     * console.log(result) // [1, 2, 3]
     * ```
     *
     * @since 2.0.0
     */
    <A>(isEquivalent: (self: A, that: A) => boolean): (self: Iterable<A>) => Array<A>;
    /**
     * Deduplicates adjacent elements that are identical using the provided `isEquivalent` function.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.dedupeAdjacentWith([1, 1, 2, 2, 3, 3], (a, b) => a === b)
     * console.log(result) // [1, 2, 3]
     * ```
     *
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, isEquivalent: (self: A, that: A) => boolean): Array<A>;
};
/**
 * Deduplicates adjacent elements that are identical.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.dedupeAdjacent([1, 1, 2, 2, 3, 3])
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @since 2.0.0
 */
export declare const dedupeAdjacent: <A>(self: Iterable<A>) => Array<A>;
/**
 * Joins the elements together with "sep" in the middle.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const strings = ["a", "b", "c"]
 * const joined = Array.join(strings, "-")
 * console.log(joined) // "a-b-c"
 * ```
 *
 * @since 2.0.0
 * @category folding
 */
export declare const join: {
    /**
     * Joins the elements together with "sep" in the middle.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const strings = ["a", "b", "c"]
     * const joined = Array.join(strings, "-")
     * console.log(joined) // "a-b-c"
     * ```
     *
     * @since 2.0.0
     * @category folding
     */
    (sep: string): (self: Iterable<string>) => string;
    /**
     * Joins the elements together with "sep" in the middle.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const strings = ["a", "b", "c"]
     * const joined = Array.join(strings, "-")
     * console.log(joined) // "a-b-c"
     * ```
     *
     * @since 2.0.0
     * @category folding
     */
    (self: Iterable<string>, sep: string): string;
};
/**
 * Statefully maps over the chunk, producing new elements of type `B`.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.mapAccum([1, 2, 3], 0, (acc, n) => [acc + n, acc + n])
 * console.log(result) // [6, [1, 3, 6]]
 * ```
 *
 * @since 2.0.0
 * @category folding
 */
export declare const mapAccum: {
    /**
     * Statefully maps over the chunk, producing new elements of type `B`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.mapAccum([1, 2, 3], 0, (acc, n) => [acc + n, acc + n])
     * console.log(result) // [6, [1, 3, 6]]
     * ```
     *
     * @since 2.0.0
     * @category folding
     */
    <S, A, B, I extends Iterable<A> = Iterable<A>>(s: S, f: (s: S, a: ReadonlyArray.Infer<I>, i: number) => readonly [S, B]): (self: I) => [state: S, mappedArray: ReadonlyArray.With<I, B>];
    /**
     * Statefully maps over the chunk, producing new elements of type `B`.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.mapAccum([1, 2, 3], 0, (acc, n) => [acc + n, acc + n])
     * console.log(result) // [6, [1, 3, 6]]
     * ```
     *
     * @since 2.0.0
     * @category folding
     */
    <S, A, B, I extends Iterable<A> = Iterable<A>>(self: I, s: S, f: (s: S, a: ReadonlyArray.Infer<I>, i: number) => readonly [S, B]): [state: S, mappedArray: ReadonlyArray.With<I, B>];
};
/**
 * Zips this chunk crosswise with the specified chunk using the specified combiner.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.cartesianWith([1, 2], ["a", "b"], (a, b) => `${a}-${b}`)
 * console.log(result) // ["1-a", "1-b", "2-a", "2-b"]
 * ```
 *
 * @since 2.0.0
 * @category elements
 */
export declare const cartesianWith: {
    /**
     * Zips this chunk crosswise with the specified chunk using the specified combiner.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.cartesianWith([1, 2], ["a", "b"], (a, b) => `${a}-${b}`)
     * console.log(result) // ["1-a", "1-b", "2-a", "2-b"]
     * ```
     *
     * @since 2.0.0
     * @category elements
     */
    <A, B, C>(that: ReadonlyArray<B>, f: (a: A, b: B) => C): (self: ReadonlyArray<A>) => Array<C>;
    /**
     * Zips this chunk crosswise with the specified chunk using the specified combiner.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.cartesianWith([1, 2], ["a", "b"], (a, b) => `${a}-${b}`)
     * console.log(result) // ["1-a", "1-b", "2-a", "2-b"]
     * ```
     *
     * @since 2.0.0
     * @category elements
     */
    <A, B, C>(self: ReadonlyArray<A>, that: ReadonlyArray<B>, f: (a: A, b: B) => C): Array<C>;
};
/**
 * Zips this chunk crosswise with the specified chunk.
 *
 * **Example**
 *
 * ```ts
 * import { Array } from "effect"
 *
 * const result = Array.cartesian([1, 2], ["a", "b"])
 * console.log(result) // [[1, "a"], [1, "b"], [2, "a"], [2, "b"]]
 * ```
 *
 * @since 2.0.0
 * @category elements
 */
export declare const cartesian: {
    /**
     * Zips this chunk crosswise with the specified chunk.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.cartesian([1, 2], ["a", "b"])
     * console.log(result) // [[1, "a"], [1, "b"], [2, "a"], [2, "b"]]
     * ```
     *
     * @since 2.0.0
     * @category elements
     */
    <B>(that: ReadonlyArray<B>): <A>(self: ReadonlyArray<A>) => Array<[A, B]>;
    /**
     * Zips this chunk crosswise with the specified chunk.
     *
     * **Example**
     *
     * ```ts
     * import { Array } from "effect"
     *
     * const result = Array.cartesian([1, 2], ["a", "b"])
     * console.log(result) // [[1, "a"], [1, "b"], [2, "a"], [2, "b"]]
     * ```
     *
     * @since 2.0.0
     * @category elements
     */
    <A, B>(self: ReadonlyArray<A>, that: ReadonlyArray<B>): Array<[A, B]>;
};
/**
 * The "do simulation" for array allows you to sequentially apply operations to the elements of arrays, just as nested loops allow you to go through all combinations of elements in an arrays.
 *
 * It can be used to simulate "array comprehension".
 * It's a technique that allows you to create new arrays by iterating over existing ones and applying specific **conditions** or **transformations** to the elements. It's like assembling a new collection from pieces of other collections based on certain rules.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Array` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 * 5. Regular `Array` functions like `map` and `filter` can still be used within the do simulation. These functions will receive the accumulated variables as arguments within the scope
 *
 * **Example**
 *
 * ```ts
 * import { Array, pipe } from "effect"
 *
 * const doResult = pipe(
 *   Array.Do,
 *   Array.bind("x", () => [1, 3, 5]),
 *   Array.bind("y", () => [2, 4, 6]),
 *   Array.filter(({ x, y }) => x < y), // condition
 *   Array.map(({ x, y }) => [x, y] as const) // transformation
 * )
 * console.log(doResult) // [[1, 2], [1, 4], [1, 6], [3, 4], [3, 6], [5, 6]]
 *
 * // equivalent
 * const x = [1, 3, 5],
 *       y = [2, 4, 6],
 *       result = [];
 * for(let i = 0; i < x.length; i++) {
 *   for(let j = 0; j < y.length; j++) {
 *     const _x = x[i], _y = y[j];
 *     if(_x < _y) result.push([_x, _y] as const)
 *   }
 * }
 * ```
 *
 * @see {@link bindTo}
 * @see {@link bind}
 * @see {@link let_ let}
 *
 * @category do notation
 * @since 3.2.0
 */
export declare const Do: ReadonlyArray<{}>;
/**
 * The "do simulation" for array allows you to sequentially apply operations to the elements of arrays, just as nested loops allow you to go through all combinations of elements in an arrays.
 *
 * It can be used to simulate "array comprehension".
 * It's a technique that allows you to create new arrays by iterating over existing ones and applying specific **conditions** or **transformations** to the elements. It's like assembling a new collection from pieces of other collections based on certain rules.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Array` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 * 5. Regular `Array` functions like `map` and `filter` can still be used within the do simulation. These functions will receive the accumulated variables as arguments within the scope
 *
 * **Example**
 *
 * ```ts
 * import { Array, pipe } from "effect"
 *
 * const doResult = pipe(
 *   Array.Do,
 *   Array.bind("x", () => [1, 3, 5]),
 *   Array.bind("y", () => [2, 4, 6]),
 *   Array.filter(({ x, y }) => x < y), // condition
 *   Array.map(({ x, y }) => [x, y] as const) // transformation
 * )
 * console.log(doResult) // [[1, 2], [1, 4], [1, 6], [3, 4], [3, 6], [5, 6]]
 *
 * // equivalent
 * const x = [1, 3, 5],
 *       y = [2, 4, 6],
 *       result = [];
 * for(let i = 0; i < x.length; i++) {
 *   for(let j = 0; j < y.length; j++) {
 *     const _x = x[i], _y = y[j];
 *     if(_x < _y) result.push([_x, _y] as const)
 *   }
 * }
 * ```
 *
 * @see {@link bindTo}
 * @see {@link Do}
 * @see {@link let_ let}
 *
 * @category do notation
 * @since 3.2.0
 */
export declare const bind: {
    /**
     * The "do simulation" for array allows you to sequentially apply operations to the elements of arrays, just as nested loops allow you to go through all combinations of elements in an arrays.
     *
     * It can be used to simulate "array comprehension".
     * It's a technique that allows you to create new arrays by iterating over existing ones and applying specific **conditions** or **transformations** to the elements. It's like assembling a new collection from pieces of other collections based on certain rules.
     *
     * Here's how the do simulation works:
     *
     * 1. Start the do simulation using the `Do` value
     * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Array` values
     * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
     * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
     * 5. Regular `Array` functions like `map` and `filter` can still be used within the do simulation. These functions will receive the accumulated variables as arguments within the scope
     *
     * **Example**
     *
     * ```ts
     * import { Array, pipe } from "effect"
     *
     * const doResult = pipe(
     *   Array.Do,
     *   Array.bind("x", () => [1, 3, 5]),
     *   Array.bind("y", () => [2, 4, 6]),
     *   Array.filter(({ x, y }) => x < y), // condition
     *   Array.map(({ x, y }) => [x, y] as const) // transformation
     * )
     * console.log(doResult) // [[1, 2], [1, 4], [1, 6], [3, 4], [3, 6], [5, 6]]
     *
     * // equivalent
     * const x = [1, 3, 5],
     *       y = [2, 4, 6],
     *       result = [];
     * for(let i = 0; i < x.length; i++) {
     *   for(let j = 0; j < y.length; j++) {
     *     const _x = x[i], _y = y[j];
     *     if(_x < _y) result.push([_x, _y] as const)
     *   }
     * }
     * ```
     *
     * @see {@link bindTo}
     * @see {@link Do}
     * @see {@link let_ let}
     *
     * @category do notation
     * @since 3.2.0
     */
    <A extends object, N extends string, B>(tag: Exclude<N, keyof A>, f: (a: NoInfer<A>) => ReadonlyArray<B>): (self: ReadonlyArray<A>) => Array<{
        [K in N | keyof A]: K extends keyof A ? A[K] : B;
    }>;
    /**
     * The "do simulation" for array allows you to sequentially apply operations to the elements of arrays, just as nested loops allow you to go through all combinations of elements in an arrays.
     *
     * It can be used to simulate "array comprehension".
     * It's a technique that allows you to create new arrays by iterating over existing ones and applying specific **conditions** or **transformations** to the elements. It's like assembling a new collection from pieces of other collections based on certain rules.
     *
     * Here's how the do simulation works:
     *
     * 1. Start the do simulation using the `Do` value
     * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Array` values
     * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
     * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
     * 5. Regular `Array` functions like `map` and `filter` can still be used within the do simulation. These functions will receive the accumulated variables as arguments within the scope
     *
     * **Example**
     *
     * ```ts
     * import { Array, pipe } from "effect"
     *
     * const doResult = pipe(
     *   Array.Do,
     *   Array.bind("x", () => [1, 3, 5]),
     *   Array.bind("y", () => [2, 4, 6]),
     *   Array.filter(({ x, y }) => x < y), // condition
     *   Array.map(({ x, y }) => [x, y] as const) // transformation
     * )
     * console.log(doResult) // [[1, 2], [1, 4], [1, 6], [3, 4], [3, 6], [5, 6]]
     *
     * // equivalent
     * const x = [1, 3, 5],
     *       y = [2, 4, 6],
     *       result = [];
     * for(let i = 0; i < x.length; i++) {
     *   for(let j = 0; j < y.length; j++) {
     *     const _x = x[i], _y = y[j];
     *     if(_x < _y) result.push([_x, _y] as const)
     *   }
     * }
     * ```
     *
     * @see {@link bindTo}
     * @see {@link Do}
     * @see {@link let_ let}
     *
     * @category do notation
     * @since 3.2.0
     */
    <A extends object, N extends string, B>(self: ReadonlyArray<A>, tag: Exclude<N, keyof A>, f: (a: NoInfer<A>) => ReadonlyArray<B>): Array<{
        [K in N | keyof A]: K extends keyof A ? A[K] : B;
    }>;
};
/**
 * The "do simulation" for array allows you to sequentially apply operations to the elements of arrays, just as nested loops allow you to go through all combinations of elements in an arrays.
 *
 * It can be used to simulate "array comprehension".
 * It's a technique that allows you to create new arrays by iterating over existing ones and applying specific **conditions** or **transformations** to the elements. It's like assembling a new collection from pieces of other collections based on certain rules.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Array` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 * 5. Regular `Array` functions like `map` and `filter` can still be used within the do simulation. These functions will receive the accumulated variables as arguments within the scope
 *
 * **Example**
 *
 * ```ts
 * import { Array, pipe } from "effect"
 *
 * const doResult = pipe(
 *   Array.Do,
 *   Array.bind("x", () => [1, 3, 5]),
 *   Array.bind("y", () => [2, 4, 6]),
 *   Array.filter(({ x, y }) => x < y), // condition
 *   Array.map(({ x, y }) => [x, y] as const) // transformation
 * )
 * console.log(doResult) // [[1, 2], [1, 4], [1, 6], [3, 4], [3, 6], [5, 6]]
 *
 * // equivalent
 * const x = [1, 3, 5],
 *       y = [2, 4, 6],
 *       result = [];
 * for(let i = 0; i < x.length; i++) {
 *   for(let j = 0; j < y.length; j++) {
 *     const _x = x[i], _y = y[j];
 *     if(_x < _y) result.push([_x, _y] as const)
 *   }
 * }
 * ```
 *
 * @see {@link bindTo}
 * @see {@link Do}
 * @see {@link let_ let}
 *
 * @category do notation
 * @since 3.2.0
 */
export declare const bindTo: {
    /**
     * The "do simulation" for array allows you to sequentially apply operations to the elements of arrays, just as nested loops allow you to go through all combinations of elements in an arrays.
     *
     * It can be used to simulate "array comprehension".
     * It's a technique that allows you to create new arrays by iterating over existing ones and applying specific **conditions** or **transformations** to the elements. It's like assembling a new collection from pieces of other collections based on certain rules.
     *
     * Here's how the do simulation works:
     *
     * 1. Start the do simulation using the `Do` value
     * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Array` values
     * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
     * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
     * 5. Regular `Array` functions like `map` and `filter` can still be used within the do simulation. These functions will receive the accumulated variables as arguments within the scope
     *
     * **Example**
     *
     * ```ts
     * import { Array, pipe } from "effect"
     *
     * const doResult = pipe(
     *   Array.Do,
     *   Array.bind("x", () => [1, 3, 5]),
     *   Array.bind("y", () => [2, 4, 6]),
     *   Array.filter(({ x, y }) => x < y), // condition
     *   Array.map(({ x, y }) => [x, y] as const) // transformation
     * )
     * console.log(doResult) // [[1, 2], [1, 4], [1, 6], [3, 4], [3, 6], [5, 6]]
     *
     * // equivalent
     * const x = [1, 3, 5],
     *       y = [2, 4, 6],
     *       result = [];
     * for(let i = 0; i < x.length; i++) {
     *   for(let j = 0; j < y.length; j++) {
     *     const _x = x[i], _y = y[j];
     *     if(_x < _y) result.push([_x, _y] as const)
     *   }
     * }
     * ```
     *
     * @see {@link bindTo}
     * @see {@link Do}
     * @see {@link let_ let}
     *
     * @category do notation
     * @since 3.2.0
     */
    <N extends string>(tag: N): <A>(self: ReadonlyArray<A>) => Array<{
        [K in N]: A;
    }>;
    /**
     * The "do simulation" for array allows you to sequentially apply operations to the elements of arrays, just as nested loops allow you to go through all combinations of elements in an arrays.
     *
     * It can be used to simulate "array comprehension".
     * It's a technique that allows you to create new arrays by iterating over existing ones and applying specific **conditions** or **transformations** to the elements. It's like assembling a new collection from pieces of other collections based on certain rules.
     *
     * Here's how the do simulation works:
     *
     * 1. Start the do simulation using the `Do` value
     * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Array` values
     * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
     * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
     * 5. Regular `Array` functions like `map` and `filter` can still be used within the do simulation. These functions will receive the accumulated variables as arguments within the scope
     *
     * **Example**
     *
     * ```ts
     * import { Array, pipe } from "effect"
     *
     * const doResult = pipe(
     *   Array.Do,
     *   Array.bind("x", () => [1, 3, 5]),
     *   Array.bind("y", () => [2, 4, 6]),
     *   Array.filter(({ x, y }) => x < y), // condition
     *   Array.map(({ x, y }) => [x, y] as const) // transformation
     * )
     * console.log(doResult) // [[1, 2], [1, 4], [1, 6], [3, 4], [3, 6], [5, 6]]
     *
     * // equivalent
     * const x = [1, 3, 5],
     *       y = [2, 4, 6],
     *       result = [];
     * for(let i = 0; i < x.length; i++) {
     *   for(let j = 0; j < y.length; j++) {
     *     const _x = x[i], _y = y[j];
     *     if(_x < _y) result.push([_x, _y] as const)
     *   }
     * }
     * ```
     *
     * @see {@link bindTo}
     * @see {@link Do}
     * @see {@link let_ let}
     *
     * @category do notation
     * @since 3.2.0
     */
    <A, N extends string>(self: ReadonlyArray<A>, tag: N): Array<{
        [K in N]: A;
    }>;
};
declare const let_: {
    <N extends string, B, A extends object>(tag: Exclude<N, keyof A>, f: (a: NoInfer<A>) => B): (self: ReadonlyArray<A>) => Array<{
        [K in N | keyof A]: K extends keyof A ? A[K] : B;
    }>;
    <N extends string, A extends object, B>(self: ReadonlyArray<A>, tag: Exclude<N, keyof A>, f: (a: NoInfer<A>) => B): Array<{
        [K in N | keyof A]: K extends keyof A ? A[K] : B;
    }>;
};
export { 
/**
 * The "do simulation" for array allows you to sequentially apply operations to the elements of arrays, just as nested loops allow you to go through all combinations of elements in an arrays.
 *
 * It can be used to simulate "array comprehension".
 * It's a technique that allows you to create new arrays by iterating over existing ones and applying specific **conditions** or **transformations** to the elements. It's like assembling a new collection from pieces of other collections based on certain rules.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Array` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 * 5. Regular `Array` functions like `map` and `filter` can still be used within the do simulation. These functions will receive the accumulated variables as arguments within the scope
 *
 * **Example**
 *
 * ```ts
 * import { Array, pipe } from "effect"
 *
 * const doResult = pipe(
 *   Array.Do,
 *   Array.bind("x", () => [1, 3, 5]),
 *   Array.bind("y", () => [2, 4, 6]),
 *   Array.filter(({ x, y }) => x < y), // condition
 *   Array.map(({ x, y }) => [x, y] as const) // transformation
 * )
 * console.log(doResult) // [[1, 2], [1, 4], [1, 6], [3, 4], [3, 6], [5, 6]]
 *
 * // equivalent
 * const x = [1, 3, 5],
 *       y = [2, 4, 6],
 *       result = [];
 * for(let i = 0; i < x.length; i++) {
 *   for(let j = 0; j < y.length; j++) {
 *     const _x = x[i], _y = y[j];
 *     if(_x < _y) result.push([_x, _y] as const)
 *   }
 * }
 *
 * ```
 *
 * @see {@link bindTo}
 * @see {@link bind}
 * @see {@link Do}
 *
 * @category do notation
 * @since 3.2.0
 */
let_ as let };
//# sourceMappingURL=Array.d.ts.map