/**
 * This module provides utility functions for working with Iterables in TypeScript.
 *
 * @since 2.0.0
 */
import type { NonEmptyArray } from "./Array.js";
import type { Either } from "./Either.js";
import type { Option } from "./Option.js";
import type * as Record from "./Record.js";
import type { NoInfer } from "./Types.js";
/**
 * Return a `Iterable` with element `i` initialized with `f(i)`.
 *
 * If the `length` is not specified, the `Iterable` will be infinite.
 *
 * **Note**. `length` is normalized to an integer >= 1.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { makeBy } from "effect/Iterable"
 *
 * assert.deepStrictEqual(Array.from(makeBy(n => n * 2, { length: 5 })), [0, 2, 4, 6, 8])
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const makeBy: <A>(f: (i: number) => A, options?: {
    readonly length?: number;
}) => Iterable<A>;
/**
 * Return a `Iterable` containing a range of integers, including both endpoints.
 *
 * If `end` is omitted, the range will not have an upper bound.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { range } from "effect/Iterable"
 *
 * assert.deepStrictEqual(Array.from(range(1, 3)), [1, 2, 3])
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const range: (start: number, end?: number) => Iterable<number>;
/**
 * Return a `Iterable` containing a value repeated the specified number of times.
 *
 * **Note**. `n` is normalized to an integer >= 1.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { replicate } from "effect/Iterable"
 *
 * assert.deepStrictEqual(Array.from(replicate("a", 3)), ["a", "a", "a"])
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const replicate: {
    /**
     * Return a `Iterable` containing a value repeated the specified number of times.
     *
     * **Note**. `n` is normalized to an integer >= 1.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { replicate } from "effect/Iterable"
     *
     * assert.deepStrictEqual(Array.from(replicate("a", 3)), ["a", "a", "a"])
     * ```
     *
     * @category constructors
     * @since 2.0.0
     */
    (n: number): <A>(a: A) => Iterable<A>;
    /**
     * Return a `Iterable` containing a value repeated the specified number of times.
     *
     * **Note**. `n` is normalized to an integer >= 1.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { replicate } from "effect/Iterable"
     *
     * assert.deepStrictEqual(Array.from(replicate("a", 3)), ["a", "a", "a"])
     * ```
     *
     * @category constructors
     * @since 2.0.0
     */
    <A>(a: A, n: number): Iterable<A>;
};
/**
 * Takes a record and returns an Iterable of tuples containing its keys and values.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { fromRecord } from "effect/Iterable"
 *
 * const x = { a: 1, b: 2, c: 3 }
 * assert.deepStrictEqual(Array.from(fromRecord(x)), [["a", 1], ["b", 2], ["c", 3]])
 * ```
 *
 * @category conversions
 * @since 2.0.0
 */
export declare const fromRecord: <K extends string, A>(self: Readonly<Record<K, A>>) => Iterable<[K, A]>;
/**
 * Prepend an element to the front of an `Iterable`, creating a new `Iterable`.
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const prepend: {
    /**
     * Prepend an element to the front of an `Iterable`, creating a new `Iterable`.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <B>(head: B): <A>(self: Iterable<A>) => Iterable<A | B>;
    /**
     * Prepend an element to the front of an `Iterable`, creating a new `Iterable`.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, head: B): Iterable<A | B>;
};
/**
 * Prepends the specified prefix iterable to the beginning of the specified iterable.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Iterable } from "effect"
 *
 * assert.deepStrictEqual(
 *   Array.from(Iterable.prependAll([1, 2], ["a", "b"])),
 *   ["a", "b", 1, 2]
 * )
 * ```
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const prependAll: {
    /**
     * Prepends the specified prefix iterable to the beginning of the specified iterable.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Iterable } from "effect"
     *
     * assert.deepStrictEqual(
     *   Array.from(Iterable.prependAll([1, 2], ["a", "b"])),
     *   ["a", "b", 1, 2]
     * )
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <B>(that: Iterable<B>): <A>(self: Iterable<A>) => Iterable<A | B>;
    /**
     * Prepends the specified prefix iterable to the beginning of the specified iterable.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Iterable } from "effect"
     *
     * assert.deepStrictEqual(
     *   Array.from(Iterable.prependAll([1, 2], ["a", "b"])),
     *   ["a", "b", 1, 2]
     * )
     * ```
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, that: Iterable<B>): Iterable<A | B>;
};
/**
 * Append an element to the end of an `Iterable`, creating a new `Iterable`.
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const append: {
    /**
     * Append an element to the end of an `Iterable`, creating a new `Iterable`.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <B>(last: B): <A>(self: Iterable<A>) => Iterable<A | B>;
    /**
     * Append an element to the end of an `Iterable`, creating a new `Iterable`.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, last: B): Iterable<A | B>;
};
/**
 * Concatenates two iterables, combining their elements.
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const appendAll: {
    /**
     * Concatenates two iterables, combining their elements.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <B>(that: Iterable<B>): <A>(self: Iterable<A>) => Iterable<A | B>;
    /**
     * Concatenates two iterables, combining their elements.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, that: Iterable<B>): Iterable<A | B>;
};
/**
 * Reduce an `Iterable` from the left, keeping all intermediate results instead of only the final result.
 *
 * @category folding
 * @since 2.0.0
 */
export declare const scan: {
    /**
     * Reduce an `Iterable` from the left, keeping all intermediate results instead of only the final result.
     *
     * @category folding
     * @since 2.0.0
     */
    <B, A>(b: B, f: (b: B, a: A) => B): (self: Iterable<A>) => Iterable<B>;
    /**
     * Reduce an `Iterable` from the left, keeping all intermediate results instead of only the final result.
     *
     * @category folding
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, b: B, f: (b: B, a: A) => B): Iterable<B>;
};
/**
 * Determine if an `Iterable` is empty
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isEmpty } from "effect/Iterable"
 *
 * assert.deepStrictEqual(isEmpty([]), true);
 * assert.deepStrictEqual(isEmpty([1, 2, 3]), false);
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
export declare const isEmpty: <A>(self: Iterable<A>) => self is Iterable<never>;
/**
 * Return the number of elements in a `Iterable`.
 *
 * @category getters
 * @since 2.0.0
 */
export declare const size: <A>(self: Iterable<A>) => number;
/**
 * Get the first element of a `Iterable`, or `None` if the `Iterable` is empty.
 *
 * @category getters
 * @since 2.0.0
 */
export declare const head: <A>(self: Iterable<A>) => Option<A>;
/**
 * Get the first element of a `Iterable`, or throw an error if the `Iterable` is empty.
 *
 * @category getters
 * @since 3.3.0
 */
export declare const unsafeHead: <A>(self: Iterable<A>) => A;
/**
 * Keep only a max number of elements from the start of an `Iterable`, creating a new `Iterable`.
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @category getters
 * @since 2.0.0
 */
export declare const take: {
    /**
     * Keep only a max number of elements from the start of an `Iterable`, creating a new `Iterable`.
     *
     * **Note**. `n` is normalized to a non negative integer.
     *
     * @category getters
     * @since 2.0.0
     */
    (n: number): <A>(self: Iterable<A>) => Iterable<A>;
    /**
     * Keep only a max number of elements from the start of an `Iterable`, creating a new `Iterable`.
     *
     * **Note**. `n` is normalized to a non negative integer.
     *
     * @category getters
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, n: number): Iterable<A>;
};
/**
 * Calculate the longest initial Iterable for which all element satisfy the specified predicate, creating a new `Iterable`.
 *
 * @category getters
 * @since 2.0.0
 */
export declare const takeWhile: {
    /**
     * Calculate the longest initial Iterable for which all element satisfy the specified predicate, creating a new `Iterable`.
     *
     * @category getters
     * @since 2.0.0
     */
    <A, B extends A>(refinement: (a: NoInfer<A>, i: number) => a is B): (self: Iterable<A>) => Iterable<B>;
    /**
     * Calculate the longest initial Iterable for which all element satisfy the specified predicate, creating a new `Iterable`.
     *
     * @category getters
     * @since 2.0.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: Iterable<A>) => Iterable<A>;
    /**
     * Calculate the longest initial Iterable for which all element satisfy the specified predicate, creating a new `Iterable`.
     *
     * @category getters
     * @since 2.0.0
     */
    <A, B extends A>(self: Iterable<A>, refinement: (a: A, i: number) => a is B): Iterable<B>;
    /**
     * Calculate the longest initial Iterable for which all element satisfy the specified predicate, creating a new `Iterable`.
     *
     * @category getters
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, predicate: (a: A, i: number) => boolean): Iterable<A>;
};
/**
 * Drop a max number of elements from the start of an `Iterable`
 *
 * **Note**. `n` is normalized to a non negative integer.
 *
 * @category getters
 * @since 2.0.0
 */
export declare const drop: {
    /**
     * Drop a max number of elements from the start of an `Iterable`
     *
     * **Note**. `n` is normalized to a non negative integer.
     *
     * @category getters
     * @since 2.0.0
     */
    (n: number): <A>(self: Iterable<A>) => Iterable<A>;
    /**
     * Drop a max number of elements from the start of an `Iterable`
     *
     * **Note**. `n` is normalized to a non negative integer.
     *
     * @category getters
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, n: number): Iterable<A>;
};
/**
 * Returns the first element that satisfies the specified
 * predicate, or `None` if no such element exists.
 *
 * @category elements
 * @since 2.0.0
 */
export declare const findFirst: {
    /**
     * Returns the first element that satisfies the specified
     * predicate, or `None` if no such element exists.
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B>(f: (a: NoInfer<A>, i: number) => Option<B>): (self: Iterable<A>) => Option<B>;
    /**
     * Returns the first element that satisfies the specified
     * predicate, or `None` if no such element exists.
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B extends A>(refinement: (a: NoInfer<A>, i: number) => a is B): (self: Iterable<A>) => Option<B>;
    /**
     * Returns the first element that satisfies the specified
     * predicate, or `None` if no such element exists.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: Iterable<A>) => Option<A>;
    /**
     * Returns the first element that satisfies the specified
     * predicate, or `None` if no such element exists.
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, f: (a: A, i: number) => Option<B>): Option<B>;
    /**
     * Returns the first element that satisfies the specified
     * predicate, or `None` if no such element exists.
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B extends A>(self: Iterable<A>, refinement: (a: A, i: number) => a is B): Option<B>;
    /**
     * Returns the first element that satisfies the specified
     * predicate, or `None` if no such element exists.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, predicate: (a: A, i: number) => boolean): Option<A>;
};
/**
 * Find the last element for which a predicate holds.
 *
 * @category elements
 * @since 2.0.0
 */
export declare const findLast: {
    /**
     * Find the last element for which a predicate holds.
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B>(f: (a: NoInfer<A>, i: number) => Option<B>): (self: Iterable<A>) => Option<B>;
    /**
     * Find the last element for which a predicate holds.
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B extends A>(refinement: (a: NoInfer<A>, i: number) => a is B): (self: Iterable<A>) => Option<B>;
    /**
     * Find the last element for which a predicate holds.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: Iterable<A>) => Option<A>;
    /**
     * Find the last element for which a predicate holds.
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, f: (a: A, i: number) => Option<B>): Option<B>;
    /**
     * Find the last element for which a predicate holds.
     *
     * @category elements
     * @since 2.0.0
     */
    <A, B extends A>(self: Iterable<A>, refinement: (a: A, i: number) => a is B): Option<B>;
    /**
     * Find the last element for which a predicate holds.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, predicate: (a: A, i: number) => boolean): Option<A>;
};
/**
 * Takes two `Iterable`s and returns an `Iterable` of corresponding pairs.
 *
 * @category zipping
 * @since 2.0.0
 */
export declare const zip: {
    /**
     * Takes two `Iterable`s and returns an `Iterable` of corresponding pairs.
     *
     * @category zipping
     * @since 2.0.0
     */
    <B>(that: Iterable<B>): <A>(self: Iterable<A>) => Iterable<[A, B]>;
    /**
     * Takes two `Iterable`s and returns an `Iterable` of corresponding pairs.
     *
     * @category zipping
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, that: Iterable<B>): Iterable<[A, B]>;
};
/**
 * Apply a function to pairs of elements at the same index in two `Iterable`s, collecting the results. If one
 * input `Iterable` is short, excess elements of the longer `Iterable` are discarded.
 *
 * @category zipping
 * @since 2.0.0
 */
export declare const zipWith: {
    /**
     * Apply a function to pairs of elements at the same index in two `Iterable`s, collecting the results. If one
     * input `Iterable` is short, excess elements of the longer `Iterable` are discarded.
     *
     * @category zipping
     * @since 2.0.0
     */
    <B, A, C>(that: Iterable<B>, f: (a: A, b: B) => C): (self: Iterable<A>) => Iterable<C>;
    /**
     * Apply a function to pairs of elements at the same index in two `Iterable`s, collecting the results. If one
     * input `Iterable` is short, excess elements of the longer `Iterable` are discarded.
     *
     * @category zipping
     * @since 2.0.0
     */
    <A, B, C>(self: Iterable<A>, that: Iterable<B>, f: (a: A, b: B) => C): Iterable<C>;
};
/**
 * Places an element in between members of an `Iterable`.
 * If the input is a non-empty array, the result is also a non-empty array.
 *
 * @since 2.0.0
 */
export declare const intersperse: {
    /**
     * Places an element in between members of an `Iterable`.
     * If the input is a non-empty array, the result is also a non-empty array.
     *
     * @since 2.0.0
     */
    <B>(middle: B): <A>(self: Iterable<A>) => Iterable<A | B>;
    /**
     * Places an element in between members of an `Iterable`.
     * If the input is a non-empty array, the result is also a non-empty array.
     *
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, middle: B): Iterable<A | B>;
};
/**
 * Returns a function that checks if an `Iterable` contains a given value using a provided `isEquivalent` function.
 *
 * @category elements
 * @since 2.0.0
 */
export declare const containsWith: <A>(isEquivalent: (self: A, that: A) => boolean) => {
    (a: A): (self: Iterable<A>) => boolean;
    (self: Iterable<A>, a: A): boolean;
};
/**
 * Returns a function that checks if a `Iterable` contains a given value using the default `Equivalence`.
 *
 * @category elements
 * @since 2.0.0
 */
export declare const contains: {
    /**
     * Returns a function that checks if a `Iterable` contains a given value using the default `Equivalence`.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(a: A): (self: Iterable<A>) => boolean;
    /**
     * Returns a function that checks if a `Iterable` contains a given value using the default `Equivalence`.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, a: A): boolean;
};
/**
 * Splits an `Iterable` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
 * the `Iterable`.
 *
 * @category splitting
 * @since 2.0.0
 */
export declare const chunksOf: {
    /**
     * Splits an `Iterable` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
     * the `Iterable`.
     *
     * @category splitting
     * @since 2.0.0
     */
    (n: number): <A>(self: Iterable<A>) => Iterable<Array<A>>;
    /**
     * Splits an `Iterable` into length-`n` pieces. The last piece will be shorter if `n` does not evenly divide the length of
     * the `Iterable`.
     *
     * @category splitting
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, n: number): Iterable<Array<A>>;
};
/**
 * Group equal, consecutive elements of an `Iterable` into `NonEmptyArray`s using the provided `isEquivalent` function.
 *
 * @category grouping
 * @since 2.0.0
 */
export declare const groupWith: {
    /**
     * Group equal, consecutive elements of an `Iterable` into `NonEmptyArray`s using the provided `isEquivalent` function.
     *
     * @category grouping
     * @since 2.0.0
     */
    <A>(isEquivalent: (self: A, that: A) => boolean): (self: Iterable<A>) => Iterable<NonEmptyArray<A>>;
    /**
     * Group equal, consecutive elements of an `Iterable` into `NonEmptyArray`s using the provided `isEquivalent` function.
     *
     * @category grouping
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, isEquivalent: (self: A, that: A) => boolean): Iterable<NonEmptyArray<A>>;
};
/**
 * Group equal, consecutive elements of an `Iterable` into `NonEmptyArray`s.
 *
 * @category grouping
 * @since 2.0.0
 */
export declare const group: <A>(self: Iterable<A>) => Iterable<NonEmptyArray<A>>;
/**
 * Splits an `Iterable` into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
 * function on each element, and grouping the results according to values returned
 *
 * @category grouping
 * @since 2.0.0
 */
export declare const groupBy: {
    /**
     * Splits an `Iterable` into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
     * function on each element, and grouping the results according to values returned
     *
     * @category grouping
     * @since 2.0.0
     */
    <A, K extends string | symbol>(f: (a: A) => K): (self: Iterable<A>) => Record<Record.ReadonlyRecord.NonLiteralKey<K>, NonEmptyArray<A>>;
    /**
     * Splits an `Iterable` into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
     * function on each element, and grouping the results according to values returned
     *
     * @category grouping
     * @since 2.0.0
     */
    <A, K extends string | symbol>(self: Iterable<A>, f: (a: A) => K): Record<Record.ReadonlyRecord.NonLiteralKey<K>, NonEmptyArray<A>>;
};
/**
 * @category constructors
 * @since 2.0.0
 */
export declare const empty: <A = never>() => Iterable<A>;
/**
 * Constructs a new `Iterable<A>` from the specified value.
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const of: <A>(a: A) => Iterable<A>;
/**
 * @category mapping
 * @since 2.0.0
 */
export declare const map: {
    /**
     * @category mapping
     * @since 2.0.0
     */
    <A, B>(f: (a: NoInfer<A>, i: number) => B): (self: Iterable<A>) => Iterable<B>;
    /**
     * @category mapping
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, f: (a: NoInfer<A>, i: number) => B): Iterable<B>;
};
/**
 * Applies a function to each element in an Iterable and returns a new Iterable containing the concatenated mapped elements.
 *
 * @category sequencing
 * @since 2.0.0
 */
export declare const flatMap: {
    /**
     * Applies a function to each element in an Iterable and returns a new Iterable containing the concatenated mapped elements.
     *
     * @category sequencing
     * @since 2.0.0
     */
    <A, B>(f: (a: NoInfer<A>, i: number) => Iterable<B>): (self: Iterable<A>) => Iterable<B>;
    /**
     * Applies a function to each element in an Iterable and returns a new Iterable containing the concatenated mapped elements.
     *
     * @category sequencing
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, f: (a: NoInfer<A>, i: number) => Iterable<B>): Iterable<B>;
};
/**
 * Flattens an Iterable of Iterables into a single Iterable
 *
 * @category sequencing
 * @since 2.0.0
 */
export declare const flatten: <A>(self: Iterable<Iterable<A>>) => Iterable<A>;
/**
 * @category filtering
 * @since 2.0.0
 */
export declare const filterMap: {
    /**
     * @category filtering
     * @since 2.0.0
     */
    <A, B>(f: (a: A, i: number) => Option<B>): (self: Iterable<A>) => Iterable<B>;
    /**
     * @category filtering
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, f: (a: A, i: number) => Option<B>): Iterable<B>;
};
/**
 * Transforms all elements of the `Iterable` for as long as the specified function returns some value
 *
 * @category filtering
 * @since 2.0.0
 */
export declare const filterMapWhile: {
    /**
     * Transforms all elements of the `Iterable` for as long as the specified function returns some value
     *
     * @category filtering
     * @since 2.0.0
     */
    <A, B>(f: (a: A, i: number) => Option<B>): (self: Iterable<A>) => Iterable<B>;
    /**
     * Transforms all elements of the `Iterable` for as long as the specified function returns some value
     *
     * @category filtering
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, f: (a: A, i: number) => Option<B>): Iterable<B>;
};
/**
 * Retrieves the `Some` values from an `Iterable` of `Option`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Iterable, Option } from "effect"
 *
 * assert.deepStrictEqual(
 *   Array.from(Iterable.getSomes([Option.some(1), Option.none(), Option.some(2)])),
 *   [1, 2]
 * )
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
export declare const getSomes: <A>(self: Iterable<Option<A>>) => Iterable<A>;
/**
 * Retrieves the `Left` values from an `Iterable` of `Either`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Iterable, Either } from "effect"
 *
 * assert.deepStrictEqual(
 *   Array.from(Iterable.getLefts([Either.right(1), Either.left("err"), Either.right(2)])),
 *   ["err"]
 * )
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
export declare const getLefts: <R, L>(self: Iterable<Either<R, L>>) => Iterable<L>;
/**
 * Retrieves the `Right` values from an `Iterable` of `Either`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Iterable, Either } from "effect"
 *
 * assert.deepStrictEqual(
 *   Array.from(Iterable.getRights([Either.right(1), Either.left("err"), Either.right(2)])),
 *   [1, 2]
 * )
 * ```
 *
 * @category filtering
 * @since 2.0.0
 */
export declare const getRights: <R, L>(self: Iterable<Either<R, L>>) => Iterable<R>;
/**
 * @category filtering
 * @since 2.0.0
 */
export declare const filter: {
    /**
     * @category filtering
     * @since 2.0.0
     */
    <A, B extends A>(refinement: (a: NoInfer<A>, i: number) => a is B): (self: Iterable<A>) => Iterable<B>;
    /**
     * @category filtering
     * @since 2.0.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: Iterable<A>) => Iterable<A>;
    /**
     * @category filtering
     * @since 2.0.0
     */
    <A, B extends A>(self: Iterable<A>, refinement: (a: A, i: number) => a is B): Iterable<B>;
    /**
     * @category filtering
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, predicate: (a: A, i: number) => boolean): Iterable<A>;
};
/**
 * @category sequencing
 * @since 2.0.0
 */
export declare const flatMapNullable: {
    /**
     * @category sequencing
     * @since 2.0.0
     */
    <A, B>(f: (a: A) => B | null | undefined): (self: Iterable<A>) => Iterable<NonNullable<B>>;
    /**
     * @category sequencing
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, f: (a: A) => B | null | undefined): Iterable<NonNullable<B>>;
};
/**
 * Check if a predicate holds true for some `Iterable` element.
 *
 * @category elements
 * @since 2.0.0
 */
export declare const some: {
    /**
     * Check if a predicate holds true for some `Iterable` element.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(predicate: (a: A, i: number) => boolean): (self: Iterable<A>) => boolean;
    /**
     * Check if a predicate holds true for some `Iterable` element.
     *
     * @category elements
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, predicate: (a: A, i: number) => boolean): boolean;
};
/**
 * @category constructors
 * @since 2.0.0
 */
export declare const unfold: <B, A>(b: B, f: (b: B) => Option<readonly [A, B]>) => Iterable<A>;
/**
 * Iterate over the `Iterable` applying `f`.
 *
 * @since 2.0.0
 */
export declare const forEach: {
    /**
     * Iterate over the `Iterable` applying `f`.
     *
     * @since 2.0.0
     */
    <A>(f: (a: A, i: number) => void): (self: Iterable<A>) => void;
    /**
     * Iterate over the `Iterable` applying `f`.
     *
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, f: (a: A, i: number) => void): void;
};
/**
 * @category folding
 * @since 2.0.0
 */
export declare const reduce: {
    /**
     * @category folding
     * @since 2.0.0
     */
    <B, A>(b: B, f: (b: B, a: A, i: number) => B): (self: Iterable<A>) => B;
    /**
     * @category folding
     * @since 2.0.0
     */
    <A, B>(self: Iterable<A>, b: B, f: (b: B, a: A, i: number) => B): B;
};
/**
 * Deduplicates adjacent elements that are identical using the provided `isEquivalent` function.
 *
 * @since 2.0.0
 */
export declare const dedupeAdjacentWith: {
    /**
     * Deduplicates adjacent elements that are identical using the provided `isEquivalent` function.
     *
     * @since 2.0.0
     */
    <A>(isEquivalent: (self: A, that: A) => boolean): (self: Iterable<A>) => Iterable<A>;
    /**
     * Deduplicates adjacent elements that are identical using the provided `isEquivalent` function.
     *
     * @since 2.0.0
     */
    <A>(self: Iterable<A>, isEquivalent: (self: A, that: A) => boolean): Iterable<A>;
};
/**
 * Deduplicates adjacent elements that are identical.
 *
 * @since 2.0.0
 */
export declare const dedupeAdjacent: <A>(self: Iterable<A>) => Iterable<A>;
/**
 * Zips this Iterable crosswise with the specified Iterable using the specified combiner.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const cartesianWith: {
    /**
     * Zips this Iterable crosswise with the specified Iterable using the specified combiner.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, B, C>(that: Iterable<B>, f: (a: A, b: B) => C): (self: Iterable<A>) => Iterable<C>;
    /**
     * Zips this Iterable crosswise with the specified Iterable using the specified combiner.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, B, C>(self: Iterable<A>, that: Iterable<B>, f: (a: A, b: B) => C): Iterable<C>;
};
/**
 * Zips this Iterable crosswise with the specified Iterable.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const cartesian: {
    /**
     * Zips this Iterable crosswise with the specified Iterable.
     *
     * @since 2.0.0
     * @category elements
     */
    <B>(that: Iterable<B>): <A>(self: Iterable<A>) => Iterable<[A, B]>;
    /**
     * Zips this Iterable crosswise with the specified Iterable.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, B>(self: Iterable<A>, that: Iterable<B>): Iterable<[A, B]>;
};
/**
 * Counts all the element of the given iterable that pass the given predicate
 *
 * **Example**
 *
 * ```ts
 * import { Iterable } from "effect"
 *
 * const result = Iterable.countBy([1, 2, 3, 4, 5], n => n % 2 === 0)
 * console.log(result) // 2
 * ```
 *
 * @category folding
 * @since 3.16.0
 */
export declare const countBy: {
    /**
     * Counts all the element of the given iterable that pass the given predicate
     *
     * **Example**
     *
     * ```ts
     * import { Iterable } from "effect"
     *
     * const result = Iterable.countBy([1, 2, 3, 4, 5], n => n % 2 === 0)
     * console.log(result) // 2
     * ```
     *
     * @category folding
     * @since 3.16.0
     */
    <A>(predicate: (a: NoInfer<A>, i: number) => boolean): (self: Iterable<A>) => number;
    /**
     * Counts all the element of the given iterable that pass the given predicate
     *
     * **Example**
     *
     * ```ts
     * import { Iterable } from "effect"
     *
     * const result = Iterable.countBy([1, 2, 3, 4, 5], n => n % 2 === 0)
     * console.log(result) // 2
     * ```
     *
     * @category folding
     * @since 3.16.0
     */
    <A>(self: Iterable<A>, predicate: (a: A, i: number) => boolean): number;
};
//# sourceMappingURL=Iterable.d.ts.map