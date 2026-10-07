/**
 * This module provides utility functions for working with tuples in TypeScript.
 *
 * @since 2.0.0
 */
import * as Equivalence from "./Equivalence.js";
import { dual } from "./Function.js";
import * as order from "./Order.js";
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
export const make = (...elements) => elements;
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
export const getFirst = self => self[0];
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
export const getSecond = self => self[1];
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
export const map = /*#__PURE__*/dual(2, (self, fn) => self.map(element => fn(element)));
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
export const mapBoth = /*#__PURE__*/dual(2, (self, {
  onFirst,
  onSecond
}) => [onFirst(self[0]), onSecond(self[1])]);
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
export const mapFirst = /*#__PURE__*/dual(2, (self, f) => [f(self[0]), self[1]]);
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
export const mapSecond = /*#__PURE__*/dual(2, (self, f) => [self[0], f(self[1])]);
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
export const swap = self => [self[1], self[0]];
/**
 * Given a tuple of `Equivalence`s returns a new `Equivalence` that compares values of a tuple
 * by applying each `Equivalence` to the corresponding element of the tuple.
 *
 * @category combinators
 * @since 2.0.0
 */
export const getEquivalence = Equivalence.tuple;
/**
 * This function creates and returns a new `Order` for a tuple of values based on the given `Order`s for each element in the tuple.
 * The returned `Order` compares two tuples of the same type by applying the corresponding `Order` to each element in the tuple.
 * It is useful when you need to compare two tuples of the same type and you have a specific way of comparing each element
 * of the tuple.
 *
 * @category combinators
 * @since 2.0.0
 */
export const getOrder = order.tuple;
/**
 * Appends an element to the end of a tuple.
 *
 * @category concatenating
 * @since 2.0.0
 */
export const appendElement = /*#__PURE__*/dual(2, (self, that) => [...self, that]);
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
export const at = /*#__PURE__*/dual(2, (self, index) => self[index]);
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
//# sourceMappingURL=Tuple.js.map