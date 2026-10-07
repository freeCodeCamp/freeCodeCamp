/**
 * This module provides utility functions for working with tuples in TypeScript.
 *
 * @since 2.0.0
 */
import * as Equivalence from "./Equivalence.js";
import type { TypeLambda } from "./HKT.js";
import * as order from "./Order.js";
import type { TupleOf } from "./Types.js";
/**
 * @category type lambdas
 * @since 2.0.0
 */
export interface TupleTypeLambda extends TypeLambda {
    readonly type: [this["Out1"], this["Target"]];
}
/**
 * Constructs a new tuple from the provided values.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { make } from "effect/Tuple"
 *
 * assert.deepStrictEqual(make(1, 'hello', true), [1, 'hello', true])
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
export declare const make: <A extends ReadonlyArray<any>>(...elements: A) => A;
/**
 * Return the first element from a tuple with two elements.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { getFirst } from "effect/Tuple"
 *
 * assert.deepStrictEqual(getFirst(["hello", 42]), "hello")
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
export declare const getFirst: <L, R>(self: readonly [L, R]) => L;
/**
 * Return the second element from a tuple with two elements.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { getSecond } from "effect/Tuple"
 *
 * assert.deepStrictEqual(getSecond(["hello", 42]), 42)
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
export declare const getSecond: <L, R>(self: readonly [L, R]) => R;
/**
 * Transforms each element of tuple using the given function, treating tuple homomorphically
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, Tuple } from "effect"
 *
 * const result = pipe(
 *   ["a", 1, false] as const,
 *   Tuple.map((el) => el.toString().toUpperCase())
 * )
 * assert.deepStrictEqual(result, ['A', '1', 'FALSE'])
 * ```
 *
 * @category mapping
 * @since 3.9.0
 */
export declare const map: {
    /**
     * Transforms each element of tuple using the given function, treating tuple homomorphically
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { pipe, Tuple } from "effect"
     *
     * const result = pipe(
     *   ["a", 1, false] as const,
     *   Tuple.map((el) => el.toString().toUpperCase())
     * )
     * assert.deepStrictEqual(result, ['A', '1', 'FALSE'])
     * ```
     *
     * @category mapping
     * @since 3.9.0
     */
    <T extends ReadonlyArray<any> | [], B>(fn: (element: T[number]) => B): (self: T) => TupleOf<T["length"], B>;
    /**
     * Transforms each element of tuple using the given function, treating tuple homomorphically
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { pipe, Tuple } from "effect"
     *
     * const result = pipe(
     *   ["a", 1, false] as const,
     *   Tuple.map((el) => el.toString().toUpperCase())
     * )
     * assert.deepStrictEqual(result, ['A', '1', 'FALSE'])
     * ```
     *
     * @category mapping
     * @since 3.9.0
     */
    <B, T extends ReadonlyArray<any> | []>(self: T, fn: (element: T[number]) => B): TupleOf<T["length"], B>;
};
/**
 * Transforms both elements of a tuple with two elements using the given functions.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { mapBoth } from "effect/Tuple"
 *
 * assert.deepStrictEqual(
 *   mapBoth(["hello", 42], { onFirst: s => s.toUpperCase(), onSecond: n => n.toString() }),
 *   ["HELLO", "42"]
 * )
 * ```
 *
 * @category mapping
 * @since 2.0.0
 */
export declare const mapBoth: {
    /**
     * Transforms both elements of a tuple with two elements using the given functions.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { mapBoth } from "effect/Tuple"
     *
     * assert.deepStrictEqual(
     *   mapBoth(["hello", 42], { onFirst: s => s.toUpperCase(), onSecond: n => n.toString() }),
     *   ["HELLO", "42"]
     * )
     * ```
     *
     * @category mapping
     * @since 2.0.0
     */
    <L1, L2, R1, R2>(options: {
        readonly onFirst: (e: L1) => L2;
        readonly onSecond: (a: R1) => R2;
    }): (self: readonly [L1, R1]) => [L2, R2];
    /**
     * Transforms both elements of a tuple with two elements using the given functions.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { mapBoth } from "effect/Tuple"
     *
     * assert.deepStrictEqual(
     *   mapBoth(["hello", 42], { onFirst: s => s.toUpperCase(), onSecond: n => n.toString() }),
     *   ["HELLO", "42"]
     * )
     * ```
     *
     * @category mapping
     * @since 2.0.0
     */
    <L1, R1, L2, R2>(self: readonly [L1, R1], options: {
        readonly onFirst: (e: L1) => L2;
        readonly onSecond: (a: R1) => R2;
    }): [L2, R2];
};
/**
 * Transforms the first component of a tuple with two elements using a given function.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { mapFirst } from "effect/Tuple"
 *
 * assert.deepStrictEqual(
 *   mapFirst(["hello", 42], s => s.toUpperCase()),
 *   ["HELLO", 42]
 * )
 * ```
 *
 * @category mapping
 * @since 2.0.0
 */
export declare const mapFirst: {
    /**
     * Transforms the first component of a tuple with two elements using a given function.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { mapFirst } from "effect/Tuple"
     *
     * assert.deepStrictEqual(
     *   mapFirst(["hello", 42], s => s.toUpperCase()),
     *   ["HELLO", 42]
     * )
     * ```
     *
     * @category mapping
     * @since 2.0.0
     */
    <L1, L2>(f: (left: L1) => L2): <R>(self: readonly [L1, R]) => [L2, R];
    /**
     * Transforms the first component of a tuple with two elements using a given function.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { mapFirst } from "effect/Tuple"
     *
     * assert.deepStrictEqual(
     *   mapFirst(["hello", 42], s => s.toUpperCase()),
     *   ["HELLO", 42]
     * )
     * ```
     *
     * @category mapping
     * @since 2.0.0
     */
    <L1, R, L2>(self: readonly [L1, R], f: (left: L1) => L2): [L2, R];
};
/**
 * Transforms the second component of a tuple with two elements using a given function.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { mapSecond } from "effect/Tuple"
 *
 * assert.deepStrictEqual(
 *   mapSecond(["hello", 42], n => n.toString()),
 *   ["hello", "42"]
 * )
 * ```
 *
 * @category mapping
 * @since 2.0.0
 */
export declare const mapSecond: {
    /**
     * Transforms the second component of a tuple with two elements using a given function.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { mapSecond } from "effect/Tuple"
     *
     * assert.deepStrictEqual(
     *   mapSecond(["hello", 42], n => n.toString()),
     *   ["hello", "42"]
     * )
     * ```
     *
     * @category mapping
     * @since 2.0.0
     */
    <R1, R2>(f: (right: R1) => R2): <L>(self: readonly [L, R1]) => [L, R2];
    /**
     * Transforms the second component of a tuple with two elements using a given function.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { mapSecond } from "effect/Tuple"
     *
     * assert.deepStrictEqual(
     *   mapSecond(["hello", 42], n => n.toString()),
     *   ["hello", "42"]
     * )
     * ```
     *
     * @category mapping
     * @since 2.0.0
     */
    <L, R1, R2>(self: readonly [L, R1], f: (right: R1) => R2): [L, R2];
};
/**
 * Swaps the elements of a tuple with two elements.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { swap } from "effect/Tuple"
 *
 * assert.deepStrictEqual(swap(["hello", 42]), [42, "hello"])
 * ```
 *
 * @since 2.0.0
 */
export declare const swap: <L, R>(self: readonly [L, R]) => [R, L];
/**
 * Given a tuple of `Equivalence`s returns a new `Equivalence` that compares values of a tuple
 * by applying each `Equivalence` to the corresponding element of the tuple.
 *
 * @category combinators
 * @since 2.0.0
 */
export declare const getEquivalence: <T extends ReadonlyArray<Equivalence.Equivalence<any>>>(...isEquivalents: T) => Equivalence.Equivalence<Readonly<{
    [I in keyof T]: [T[I]] extends [Equivalence.Equivalence<infer A>] ? A : never;
}>>;
/**
 * This function creates and returns a new `Order` for a tuple of values based on the given `Order`s for each element in the tuple.
 * The returned `Order` compares two tuples of the same type by applying the corresponding `Order` to each element in the tuple.
 * It is useful when you need to compare two tuples of the same type and you have a specific way of comparing each element
 * of the tuple.
 *
 * @category combinators
 * @since 2.0.0
 */
export declare const getOrder: <T extends ReadonlyArray<order.Order<any>>>(...elements: T) => order.Order<{
    [I in keyof T]: [T[I]] extends [order.Order<infer A>] ? A : never;
}>;
/**
 * Appends an element to the end of a tuple.
 *
 * @category concatenating
 * @since 2.0.0
 */
export declare const appendElement: {
    /**
     * Appends an element to the end of a tuple.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <B>(that: B): <A extends ReadonlyArray<unknown>>(self: A) => [...A, B];
    /**
     * Appends an element to the end of a tuple.
     *
     * @category concatenating
     * @since 2.0.0
     */
    <A extends ReadonlyArray<unknown>, B>(self: A, that: B): [...A, B];
};
/**
 * Retrieves the element at a specified index from a tuple.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Tuple } from "effect"
 *
 * assert.deepStrictEqual(Tuple.at([1, 'hello', true], 1), 'hello')
 * ```
 *
 * @category getters
 * @since 3.4.0
 */
export declare const at: {
    /**
     * Retrieves the element at a specified index from a tuple.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Tuple } from "effect"
     *
     * assert.deepStrictEqual(Tuple.at([1, 'hello', true], 1), 'hello')
     * ```
     *
     * @category getters
     * @since 3.4.0
     */
    <N extends number>(index: N): <A extends ReadonlyArray<unknown>>(self: A) => A[N];
    /**
     * Retrieves the element at a specified index from a tuple.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { Tuple } from "effect"
     *
     * assert.deepStrictEqual(Tuple.at([1, 'hello', true], 1), 'hello')
     * ```
     *
     * @category getters
     * @since 3.4.0
     */
    <A extends ReadonlyArray<unknown>, N extends number>(self: A, index: N): A[N];
};
export { 
/**
 * Determine if an `Array` is a tuple with exactly `N` elements, narrowing down the type to `TupleOf`.
 *
 * An `Array` is considered to be a `TupleOf` if its length is exactly `N`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isTupleOf } from "effect/Tuple"
 *
 * assert.deepStrictEqual(isTupleOf([1, 2, 3], 3), true);
 * assert.deepStrictEqual(isTupleOf([1, 2, 3], 2), false);
 * assert.deepStrictEqual(isTupleOf([1, 2, 3], 4), false);
 *
 * const arr: number[] = [1, 2, 3];
 * if (isTupleOf(arr, 3)) {
 *   console.log(arr);
 *   // ^? [number, number, number]
 * }
 *
 * ```
 * @category guards
 * @since 3.3.0
 */
isTupleOf, 
/**
 * Determine if an `Array` is a tuple with at least `N` elements, narrowing down the type to `TupleOfAtLeast`.
 *
 * An `Array` is considered to be a `TupleOfAtLeast` if its length is at least `N`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isTupleOfAtLeast } from "effect/Tuple"
 *
 * assert.deepStrictEqual(isTupleOfAtLeast([1, 2, 3], 3), true);
 * assert.deepStrictEqual(isTupleOfAtLeast([1, 2, 3], 2), true);
 * assert.deepStrictEqual(isTupleOfAtLeast([1, 2, 3], 4), false);
 *
 * const arr: number[] = [1, 2, 3, 4];
 * if (isTupleOfAtLeast(arr, 3)) {
 *   console.log(arr);
 *   // ^? [number, number, number, ...number[]]
 * }
 *
 * ```
 * @category guards
 * @since 3.3.0
 */
isTupleOfAtLeast } from "./Predicate.js";
//# sourceMappingURL=Tuple.d.ts.map