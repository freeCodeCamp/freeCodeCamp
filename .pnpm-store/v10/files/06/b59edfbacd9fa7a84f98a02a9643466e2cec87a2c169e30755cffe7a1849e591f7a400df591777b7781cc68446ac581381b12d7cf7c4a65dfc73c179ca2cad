"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xor = exports.tuple = exports.struct = exports.some = exports.productMany = exports.product = exports.or = exports.not = exports.nor = exports.nand = exports.mapInput = exports.isUnknown = exports.isUndefined = exports.isUint8Array = exports.isTupleOfAtLeast = exports.isTupleOf = exports.isTruthy = exports.isTagged = exports.isSymbol = exports.isString = exports.isSet = exports.isRegExp = exports.isRecordOrArray = exports.isRecord = exports.isReadonlyRecord = exports.isPropertyKey = exports.isPromiseLike = exports.isPromise = exports.isObject = exports.isNumber = exports.isNullable = exports.isNull = exports.isNotUndefined = exports.isNotNullable = exports.isNotNull = exports.isNever = exports.isMap = exports.isIterable = exports.isFunction = exports.isError = exports.isDate = exports.isBoolean = exports.isBigInt = exports.implies = exports.hasProperty = exports.every = exports.eqv = exports.compose = exports.and = exports.all = void 0;
var _Function = require("./Function.js");
/**
 * This module provides a collection of functions for working with predicates and refinements.
 *
 * A `Predicate<A>` is a function that takes a value of type `A` and returns a boolean.
 * It is used to check if a value satisfies a certain condition.
 *
 * A `Refinement<A, B>` is a special type of predicate that not only checks a condition
 * but also provides a type guard, allowing TypeScript to narrow the type of the input
 * value from `A` to a more specific type `B` within a conditional block.
 *
 * The module includes:
 * - Basic predicates and refinements for common types (e.g., `isString`, `isNumber`).
 * - Combinators to create new predicates from existing ones (e.g., `and`, `or`, `not`).
 * - Advanced combinators for working with data structures (e.g., `tuple`, `struct`).
 * - Type-level utilities for inspecting predicate and refinement types.
 *
 * @since 2.0.0
 */

/**
 * Transforms a `Predicate<A>` into a `Predicate<B>` by applying a function `(b: B) => A`
 * to the input before passing it to the predicate. This is also known as "contramap" or
 * "pre-composition".
 *
 * @example
 * ```ts
 * import { Predicate, Number } from "effect"
 * import * as assert from "node:assert"
 *
 * // A predicate on numbers
 * const isPositive: Predicate.Predicate<number> = Number.greaterThan(0)
 *
 * // A function from `string` to `number`
 * const stringLength = (s: string): number => s.length
 *
 * // Create a new predicate on strings by mapping the input
 * const hasPositiveLength = Predicate.mapInput(isPositive, stringLength)
 *
 * assert.strictEqual(hasPositiveLength("hello"), true)
 * assert.strictEqual(hasPositiveLength(""), false)
 * ```
 *
 * @category combinators
 * @since 2.0.0
 */
const mapInput = exports.mapInput = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => b => self(f(b)));
/**
 * A refinement that checks if a `ReadonlyArray<T>` is a tuple with exactly `N` elements.
 * If the check is successful, the type is narrowed to `TupleOf<N, T>`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isTupleOf } from "effect/Predicate"
 *
 * const isTupleOf3 = isTupleOf(3)
 *
 * assert.strictEqual(isTupleOf3([1, 2, 3]), true);
 * assert.strictEqual(isTupleOf3([1, 2]), false);
 *
 * const arr: number[] = [1, 2, 3];
 * if (isTupleOf(arr, 3)) {
 *   // The type of arr is now [number, number, number]
 *   const [a, b, c] = arr;
 *   assert.deepStrictEqual([a, b, c], [1, 2, 3])
 * }
 * ```
 *
 * @category guards
 * @since 3.3.0
 */
const isTupleOf = exports.isTupleOf = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => self.length === n);
/**
 * A refinement that checks if a `ReadonlyArray<T>` is a tuple with at least `N` elements.
 * If the check is successful, the type is narrowed to `TupleOfAtLeast<N, T>`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isTupleOfAtLeast } from "effect/Predicate"
 *
 * const isTupleOfAtLeast3 = isTupleOfAtLeast(3)
 *
 * assert.strictEqual(isTupleOfAtLeast3([1, 2, 3]), true);
 * assert.strictEqual(isTupleOfAtLeast3([1, 2, 3, 4]), true);
 * assert.strictEqual(isTupleOfAtLeast3([1, 2]), false);
 *
 * const arr: number[] = [1, 2, 3, 4];
 * if (isTupleOfAtLeast(arr, 3)) {
 *   // The type of arr is now [number, number, number, ...number[]]
 *   const [a, b, c] = arr;
 *   assert.deepStrictEqual([a, b, c], [1, 2, 3])
 * }
 * ```
 *
 * @category guards
 * @since 3.3.0
 */
const isTupleOfAtLeast = exports.isTupleOfAtLeast = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => self.length >= n);
/**
 * A predicate that checks if a value is "truthy" in JavaScript.
 * Fails for `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isTruthy } from "effect/Predicate"
 *
 * assert.strictEqual(isTruthy(1), true)
 * assert.strictEqual(isTruthy("hello"), true)
 * assert.strictEqual(isTruthy({}), true)
 *
 * assert.strictEqual(isTruthy(0), false)
 * assert.strictEqual(isTruthy(""), false)
 * assert.strictEqual(isTruthy(null), false)
 * assert.strictEqual(isTruthy(undefined), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
const isTruthy = input => !!input;
/**
 * A refinement that checks if a value is a `Set`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isSet } from "effect/Predicate"
 *
 * assert.strictEqual(isSet(new Set([1, 2])), true)
 * assert.strictEqual(isSet(new Set()), true)
 *
 * assert.strictEqual(isSet({}), false)
 * assert.strictEqual(isSet([1, 2]), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isTruthy = isTruthy;
const isSet = input => input instanceof Set;
/**
 * A refinement that checks if a value is a `Map`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isMap } from "effect/Predicate"
 *
 * assert.strictEqual(isMap(new Map()), true)
 *
 * assert.strictEqual(isMap({}), false)
 * assert.strictEqual(isMap(new Set()), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isSet = isSet;
const isMap = input => input instanceof Map;
/**
 * A refinement that checks if a value is a `string`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isString } from "effect/Predicate"
 *
 * assert.strictEqual(isString("hello"), true)
 * assert.strictEqual(isString(""), true)
 *
 * assert.strictEqual(isString(123), false)
 * assert.strictEqual(isString(null), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isMap = isMap;
const isString = input => typeof input === "string";
/**
 * A refinement that checks if a value is a `number`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isNumber } from "effect/Predicate"
 *
 * assert.strictEqual(isNumber(123), true)
 * assert.strictEqual(isNumber(0), true)
 * assert.strictEqual(isNumber(-1.5), true)
 * assert.strictEqual(isNumber(NaN), true)
 *
 * assert.strictEqual(isNumber("123"), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isString = isString;
const isNumber = input => typeof input === "number";
/**
 * A refinement that checks if a value is a `boolean`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isBoolean } from "effect/Predicate"
 *
 * assert.strictEqual(isBoolean(true), true)
 * assert.strictEqual(isBoolean(false), true)
 *
 * assert.strictEqual(isBoolean("true"), false)
 * assert.strictEqual(isBoolean(0), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isNumber = isNumber;
const isBoolean = input => typeof input === "boolean";
/**
 * A refinement that checks if a value is a `bigint`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isBigInt } from "effect/Predicate"
 *
 * assert.strictEqual(isBigInt(1n), true)
 *
 * assert.strictEqual(isBigInt(1), false)
 * assert.strictEqual(isBigInt("1"), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isBoolean = isBoolean;
const isBigInt = input => typeof input === "bigint";
/**
 * A refinement that checks if a value is a `symbol`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isSymbol } from "effect/Predicate"
 *
 * assert.strictEqual(isSymbol(Symbol.for("a")), true)
 *
 * assert.strictEqual(isSymbol("a"), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isBigInt = isBigInt;
const isSymbol = input => typeof input === "symbol";
// TODO: make public
/**
 * A refinement that checks if a value is a valid `PropertyKey` (a `string`, `number`, or `symbol`).
 * @internal
 */
exports.isSymbol = isSymbol;
const isPropertyKey = u => isString(u) || isNumber(u) || isSymbol(u);
/**
 * A refinement that checks if a value is a `Function`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isFunction } from "effect/Predicate"
 *
 * assert.strictEqual(isFunction(() => {}), true)
 * assert.strictEqual(isFunction(isFunction), true)
 *
 * assert.strictEqual(isFunction("function"), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isPropertyKey = isPropertyKey;
const isFunction = exports.isFunction = _Function.isFunction;
/**
 * A refinement that checks if a value is `undefined`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isUndefined } from "effect/Predicate"
 *
 * assert.strictEqual(isUndefined(undefined), true)
 *
 * assert.strictEqual(isUndefined(null), false)
 * assert.strictEqual(isUndefined("undefined"), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
const isUndefined = input => input === undefined;
/**
 * A refinement that checks if a value is not `undefined`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isNotUndefined } from "effect/Predicate"
 *
 * assert.strictEqual(isNotUndefined(null), true)
 * assert.strictEqual(isNotUndefined("value"), true)
 *
 * assert.strictEqual(isNotUndefined(undefined), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isUndefined = isUndefined;
const isNotUndefined = input => input !== undefined;
/**
 * A refinement that checks if a value is `null`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isNull } from "effect/Predicate"
 *
 * assert.strictEqual(isNull(null), true)
 *
 * assert.strictEqual(isNull(undefined), false)
 * assert.strictEqual(isNull("null"), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isNotUndefined = isNotUndefined;
const isNull = input => input === null;
/**
 * A refinement that checks if a value is not `null`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isNotNull } from "effect/Predicate"
 *
 * assert.strictEqual(isNotNull(undefined), true)
 * assert.strictEqual(isNotNull("value"), true)
 *
 * assert.strictEqual(isNotNull(null), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isNull = isNull;
const isNotNull = input => input !== null;
/**
 * A refinement that always returns `false`. The type is narrowed to `never`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isNever } from "effect/Predicate"
 *
 * assert.strictEqual(isNever(1), false)
 * assert.strictEqual(isNever(null), false)
 * assert.strictEqual(isNever({}), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isNotNull = isNotNull;
const isNever = _ => false;
/**
 * A refinement that always returns `true`. The type is narrowed to `unknown`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isUnknown } from "effect/Predicate"
 *
 * assert.strictEqual(isUnknown(1), true)
 * assert.strictEqual(isUnknown(null), true)
 * assert.strictEqual(isUnknown({}), true)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isNever = isNever;
const isUnknown = _ => true;
/**
 * Checks if the input is an object or an array.
 * @internal
 */
exports.isUnknown = isUnknown;
const isRecordOrArray = input => typeof input === "object" && input !== null;
/**
 * A refinement that checks if a value is an `object`. Note that in JavaScript,
 * arrays and functions are also considered objects.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isObject } from "effect/Predicate"
 *
 * assert.strictEqual(isObject({}), true)
 * assert.strictEqual(isObject([]), true)
 * assert.strictEqual(isObject(() => {}), true)
 *
 * assert.strictEqual(isObject(null), false)
 * assert.strictEqual(isObject("hello"), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 * @see isRecord to check for plain objects (excluding arrays and functions).
 */
exports.isRecordOrArray = isRecordOrArray;
const isObject = input => isRecordOrArray(input) || isFunction(input);
/**
 * A refinement that checks if a value is an object-like value and has a specific property key.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { hasProperty } from "effect/Predicate"
 *
 * assert.strictEqual(hasProperty({ a: 1 }, "a"), true)
 * assert.strictEqual(hasProperty({ a: 1 }, "b"), false)
 *
 * const value: unknown = { name: "Alice" };
 * if (hasProperty(value, "name")) {
 *   // The type of `value` is narrowed to `{ name: unknown }`
 *   // and we can safely access `value.name`
 *   console.log(value.name)
 * }
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isObject = isObject;
const hasProperty = exports.hasProperty = /*#__PURE__*/(0, _Function.dual)(2, (self, property) => isObject(self) && property in self);
/**
 * A refinement that checks if a value is an object with a `_tag` property
 * that matches the given tag. This is a powerful tool for working with
 * discriminated union types.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isTagged } from "effect/Predicate"
 *
 * type Shape = { _tag: "circle"; radius: number } | { _tag: "square"; side: number }
 *
 * const isCircle = isTagged("circle")
 *
 * const shape1: Shape = { _tag: "circle", radius: 10 }
 * const shape2: Shape = { _tag: "square", side: 5 }
 *
 * assert.strictEqual(isCircle(shape1), true)
 * assert.strictEqual(isCircle(shape2), false)
 *
 * if (isCircle(shape1)) {
 *   // shape1 is now narrowed to { _tag: "circle"; radius: number }
 *   assert.strictEqual(shape1.radius, 10)
 * }
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
const isTagged = exports.isTagged = /*#__PURE__*/(0, _Function.dual)(2, (self, tag) => hasProperty(self, "_tag") && self["_tag"] === tag);
/**
 * A refinement that checks if a value is either `null` or `undefined`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isNullable } from "effect/Predicate"
 *
 * assert.strictEqual(isNullable(null), true)
 * assert.strictEqual(isNullable(undefined), true)
 *
 * assert.strictEqual(isNullable(0), false)
 * assert.strictEqual(isNullable(""), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 * @see isNotNullable
 */
const isNullable = input => input === null || input === undefined;
/**
 * A refinement that checks if a value is neither `null` nor `undefined`.
 * The type is narrowed to `NonNullable<A>`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isNotNullable } from "effect/Predicate"
 *
 * assert.strictEqual(isNotNullable(0), true)
 * assert.strictEqual(isNotNullable("hello"), true)
 *
 * assert.strictEqual(isNotNullable(null), false)
 * assert.strictEqual(isNotNullable(undefined), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 * @see isNullable
 */
exports.isNullable = isNullable;
const isNotNullable = input => input !== null && input !== undefined;
/**
 * A refinement that checks if a value is an instance of `Error`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isError } from "effect/Predicate"
 *
 * assert.strictEqual(isError(new Error("boom")), true)
 * assert.strictEqual(isError(new TypeError("boom")), true)
 *
 * assert.strictEqual(isError({ message: "boom" }), false)
 * assert.strictEqual(isError("boom"), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isNotNullable = isNotNullable;
const isError = input => input instanceof Error;
/**
 * A refinement that checks if a value is a `Uint8Array`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isUint8Array } from "effect/Predicate"
 *
 * assert.strictEqual(isUint8Array(new Uint8Array()), true)
 *
 * assert.strictEqual(isUint8Array(new Uint16Array()), false)
 * assert.strictEqual(isUint8Array([1, 2, 3]), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isError = isError;
const isUint8Array = input => input instanceof Uint8Array;
/**
 * A refinement that checks if a value is a `Date` object.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isDate } from "effect/Predicate"
 *
 * assert.strictEqual(isDate(new Date()), true)
 *
 * assert.strictEqual(isDate(Date.now()), false) // `Date.now()` returns a number
 * assert.strictEqual(isDate("2023-01-01"), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isUint8Array = isUint8Array;
const isDate = input => input instanceof Date;
/**
 * A refinement that checks if a value is an `Iterable`.
 * Many built-in types are iterable, such as `Array`, `string`, `Map`, and `Set`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isIterable } from "effect/Predicate"
 *
 * assert.strictEqual(isIterable([]), true)
 * assert.strictEqual(isIterable("hello"), true)
 * assert.strictEqual(isIterable(new Set()), true)
 *
 * assert.strictEqual(isIterable({}), false)
 * assert.strictEqual(isIterable(123), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isDate = isDate;
const isIterable = input => typeof input === "string" || hasProperty(input, Symbol.iterator);
/**
 * A refinement that checks if a value is a record (i.e., a plain object).
 * This check returns `false` for arrays, `null`, and functions.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isRecord } from "effect/Predicate"
 *
 * assert.strictEqual(isRecord({}), true)
 * assert.strictEqual(isRecord({ a: 1 }), true)
 *
 * assert.strictEqual(isRecord([]), false)
 * assert.strictEqual(isRecord(new Date()), false)
 * assert.strictEqual(isRecord(null), false)
 * assert.strictEqual(isRecord(() => null), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 * @see isObject
 */
exports.isIterable = isIterable;
const isRecord = input => isRecordOrArray(input) && !Array.isArray(input);
/**
 * A refinement that checks if a value is a readonly record (i.e., a plain object).
 * This check returns `false` for arrays, `null`, and functions.
 *
 * This is an alias for `isRecord`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isReadonlyRecord } from "effect/Predicate"
 *
 * assert.strictEqual(isReadonlyRecord({}), true)
 * assert.strictEqual(isReadonlyRecord({ a: 1 }), true)
 *
 * assert.strictEqual(isReadonlyRecord([]), false)
 * assert.strictEqual(isReadonlyRecord(null), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
exports.isRecord = isRecord;
const isReadonlyRecord = exports.isReadonlyRecord = isRecord;
/**
 * A refinement that checks if a value is a `Promise`. It performs a duck-typing check
 * for `.then` and `.catch` methods.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isPromise } from "effect/Predicate"
 *
 * assert.strictEqual(isPromise(Promise.resolve(1)), true)
 * assert.strictEqual(isPromise(new Promise(() => {})), true)
 *
 * assert.strictEqual(isPromise({ then() {} }), false) // Missing .catch
 * assert.strictEqual(isPromise({}), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 * @see isPromiseLike
 */
const isPromise = input => hasProperty(input, "then") && "catch" in input && isFunction(input.then) && isFunction(input.catch);
/**
 * A refinement that checks if a value is `PromiseLike`. It performs a duck-typing
 * check for a `.then` method.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isPromiseLike } from "effect/Predicate"
 *
 * assert.strictEqual(isPromiseLike(Promise.resolve(1)), true)
 * assert.strictEqual(isPromiseLike({ then: () => {} }), true)
 *
 * assert.strictEqual(isPromiseLike({}), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 * @see isPromise
 */
exports.isPromise = isPromise;
const isPromiseLike = input => hasProperty(input, "then") && isFunction(input.then);
/**
 * A refinement that checks if a value is a `RegExp`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Predicate } from "effect"
 *
 * assert.strictEqual(Predicate.isRegExp(/a/), true)
 * assert.strictEqual(Predicate.isRegExp(new RegExp("a")), true)
 *
 * assert.strictEqual(Predicate.isRegExp("/a/"), false)
 * ```
 *
 * @category guards
 * @since 3.9.0
 */
exports.isPromiseLike = isPromiseLike;
const isRegExp = input => input instanceof RegExp;
/**
 * Composes a `Refinement` with another `Refinement` or `Predicate`.
 *
 * This can be used to chain checks. The first refinement is applied, and if it
 * passes, the second check is applied to the same value, potentially refining
 * the type further.
 *
 * @example
 * ```ts
 * import { Predicate } from "effect"
 * import * as assert from "node:assert"
 *
 * const isString = (u: unknown): u is string => typeof u === "string"
 * const minLength = (n: number) => (s: string): boolean => s.length >= n
 *
 * // Create a refinement that checks for a string with a minimum length of 3
 * const isLongString = Predicate.compose(isString, minLength(3))
 *
 * let value: unknown = "hello"
 *
 * assert.strictEqual(isLongString(value), true)
 * if (isLongString(value)) {
 *   // value is narrowed to string
 *   assert.strictEqual(value.toUpperCase(), "HELLO")
 * }
 * assert.strictEqual(isLongString("hi"), false)
 * ```
 *
 * @since 2.0.0
 */
exports.isRegExp = isRegExp;
const compose = exports.compose = /*#__PURE__*/(0, _Function.dual)(2, (ab, bc) => a => ab(a) && bc(a));
/**
 * Combines two predicates to test a tuple of two values. The first predicate tests the
 * first element of the tuple, and the second predicate tests the second element.
 *
 * @category combining
 * @since 2.0.0
 */
const product = (self, that) => ([a, b]) => self(a) && that(b);
/**
 * Takes an iterable of predicates and returns a new predicate that tests an array of values.
 * The new predicate returns `true` if each predicate at a given index is satisfied by the
 * value at the same index in the array. The check stops at the length of the shorter of
 * the two iterables (predicates or values).
 *
 * @category combining
 * @since 2.0.0
 * @see tuple for a more powerful, variadic version.
 */
exports.product = product;
const all = collection => {
  return as => {
    let collectionIndex = 0;
    for (const p of collection) {
      if (collectionIndex >= as.length) {
        break;
      }
      if (p(as[collectionIndex]) === false) {
        return false;
      }
      collectionIndex++;
    }
    return true;
  };
};
/**
 * Combines a predicate for a single value and an iterable of predicates for the rest of an array.
 * Useful for checking the head and tail of an array separately.
 *
 * @category combining
 * @since 2.0.0
 */
exports.all = all;
const productMany = (self, collection) => {
  const rest = all(collection);
  return ([head, ...tail]) => self(head) === false ? false : rest(tail);
};
/**
 * Combines an array of predicates into a single predicate that tests an array of values.
 * This function is highly type-aware and will produce a `Refinement` if any of the provided
 * predicates are `Refinement`s, allowing for powerful type-narrowing of tuples.
 *
 * - If all predicates are `Predicate<T>`, the result is `Predicate<[T, T, ...]>`.
 * - If any predicate is a `Refinement<A, B>`, the result is a `Refinement` that narrows
 *   the input tuple type to a more specific tuple type.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Predicate } from "effect"
 *
 * const isString = (u: unknown): u is string => typeof u === "string"
 * const isNumber = (u: unknown): u is number => typeof u === "number"
 *
 * // Create a refinement for a [string, number] tuple
 * const isStringNumberTuple = Predicate.tuple(isString, isNumber)
 *
 * const value: [unknown, unknown] = ["hello", 123]
 * if (isStringNumberTuple(value)) {
 *   // value is narrowed to [string, number]
 *   const [s, n] = value
 *   assert.strictEqual(s.toUpperCase(), "HELLO")
 *   assert.strictEqual(n.toFixed(2), "123.00")
 * }
 * assert.strictEqual(isStringNumberTuple(["hello", "123"]), false)
 * ```
 *
 * @since 2.0.0
 */
exports.productMany = productMany;
const tuple = (...elements) => all(elements);
/**
 * Combines a record of predicates into a single predicate that tests a record of values.
 * This function is highly type-aware and will produce a `Refinement` if any of the provided
 * predicates are `Refinement`s, allowing for powerful type-narrowing of structs.
 *
 * - If all predicates are `Predicate<T>`, the result is `Predicate<{ k: T, ... }>`.
 * - If any predicate is a `Refinement<A, B>`, the result is a `Refinement` that narrows
 *   the input record type to a more specific record type.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Predicate } from "effect"
 *
 * const isString = (u: unknown): u is string => typeof u === "string"
 * const isNumber = (u: unknown): u is number => typeof u === "number"
 *
 * const personPredicate = Predicate.struct({
 *   name: isString,
 *   age: isNumber
 * })
 *
 * const value: { name: unknown; age: unknown } = { name: "Alice", age: 30 }
 * if (personPredicate(value)) {
 *   // value is narrowed to { name: string; age: number }
 *   assert.strictEqual(value.name.toUpperCase(), "ALICE")
 *   assert.strictEqual(value.age.toFixed(0), "30")
 * }
 * assert.strictEqual(personPredicate({ name: "Bob", age: "40" }), false)
 * ```
 *
 * @since 2.0.0
 */
exports.tuple = tuple;
const struct = fields => {
  const keys = Object.keys(fields);
  return a => {
    for (const key of keys) {
      if (!fields[key](a[key])) {
        return false;
      }
    }
    return true;
  };
};
/**
 * Returns a new predicate that is the logical negation of the given predicate.
 *
 * **Note**: If the input is a `Refinement`, the resulting predicate will be a
 * simple `Predicate`, as TypeScript cannot infer the negative type.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Predicate, Number } from "effect"
 *
 * const isNonPositive = Predicate.not(Number.greaterThan(0))
 *
 * assert.strictEqual(isNonPositive(-1), true)
 * assert.strictEqual(isNonPositive(0), true)
 * assert.strictEqual(isNonPositive(1), false)
 * ```
 *
 * @category combinators
 * @since 2.0.0
 */
exports.struct = struct;
const not = self => a => !self(a);
/**
 * Combines two predicates with a logical "OR". The resulting predicate returns `true`
 * if at least one of the predicates returns `true`.
 *
 * If both predicates are `Refinement`s, the resulting predicate is a `Refinement` to the
 * union of their target types (`B | C`).
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Predicate } from "effect"
 *
 * const isString = (u: unknown): u is string => typeof u === "string"
 * const isNumber = (u: unknown): u is number => typeof u === "number"
 *
 * const isStringOrNumber = Predicate.or(isString, isNumber)
 *
 * assert.strictEqual(isStringOrNumber("hello"), true)
 * assert.strictEqual(isStringOrNumber(123), true)
 * assert.strictEqual(isStringOrNumber(null), false)
 *
 * const value: unknown = "world"
 * if (isStringOrNumber(value)) {
 *   // value is narrowed to string | number
 *   console.log(value)
 * }
 * ```
 *
 * @category combinators
 * @since 2.0.0
 */
exports.not = not;
const or = exports.or = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => a => self(a) || that(a));
/**
 * Combines two predicates with a logical "AND". The resulting predicate returns `true`
 * only if both of the predicates return `true`.
 *
 * If both predicates are `Refinement`s, the resulting predicate is a `Refinement` to the
 * intersection of their target types (`B & C`).
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Predicate } from "effect"
 *
 * type Person = { name: string }
 * type Employee = { id: number }
 *
 * const hasName = (u: unknown): u is Person => Predicate.hasProperty(u, "name") && typeof (u as any).name === "string"
 * const hasId = (u: unknown): u is Employee => Predicate.hasProperty(u, "id") && typeof (u as any).id === "number"
 *
 * const isPersonAndEmployee = Predicate.and(hasName, hasId)
 *
 * const val: unknown = { name: "Alice", id: 123 }
 * if (isPersonAndEmployee(val)) {
 *   // val is narrowed to Person & Employee
 *   assert.strictEqual(val.name, "Alice")
 *   assert.strictEqual(val.id, 123)
 * }
 *
 * assert.strictEqual(isPersonAndEmployee({ name: "Bob" }), false) // Missing id
 * assert.strictEqual(isPersonAndEmployee({ id: 456 }), false) // Missing name
 * ```
 *
 * @category combinators
 * @since 2.0.0
 */
const and = exports.and = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => a => self(a) && that(a));
/**
 * Combines two predicates with a logical "XOR" (exclusive OR). The resulting predicate
 * returns `true` if one of the predicates returns `true`, but not both.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Predicate } from "effect"
 *
 * const isPositive = (n: number) => n > 0
 * const isEven = (n: number) => n % 2 === 0
 *
 * const isPositiveXorEven = Predicate.xor(isPositive, isEven)
 *
 * assert.strictEqual(isPositiveXorEven(4), false)  // both true -> false
 * assert.strictEqual(isPositiveXorEven(3), true)   // one true -> true
 * assert.strictEqual(isPositiveXorEven(-2), true)  // one true -> true
 * assert.strictEqual(isPositiveXorEven(-1), false) // both false -> false
 * ```
 *
 * @category combinators
 * @since 2.0.0
 */
const xor = exports.xor = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => a => self(a) !== that(a));
/**
 * Combines two predicates with a logical "EQV" (equivalence). The resulting predicate
 * returns `true` if both predicates return the same boolean value (both `true` or both `false`).
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Predicate } from "effect"
 *
 * const isPositive = (n: number) => n > 0
 * const isEven = (n: number) => n % 2 === 0
 *
 * const isPositiveEqvEven = Predicate.eqv(isPositive, isEven)
 *
 * assert.strictEqual(isPositiveEqvEven(4), true)   // both true -> true
 * assert.strictEqual(isPositiveEqvEven(3), false)  // different -> false
 * assert.strictEqual(isPositiveEqvEven(-2), false) // different -> false
 * assert.strictEqual(isPositiveEqvEven(-1), true)  // both false -> true
 * ```
 *
 * @category combinators
 * @since 2.0.0
 */
const eqv = exports.eqv = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => a => self(a) === that(a));
/**
 * Creates a predicate that represents a logical "if-then" rule.
 *
 * Think of it as a conditional promise: **"If `antecedent` holds true, then I promise `consequent` will also be true."**
 *
 * This function is invaluable for defining complex validation logic where one condition dictates another.
 *
 * ### How It Works
 *
 * The rule only fails (returns `false`) when the "if" part is `true`, but the "then" part is `false`.
 * In all other cases, the promise is considered kept, and the result is `true`.
 *
 * This includes the concept of **"vacuous truth"**: if the "if" part is `false`, the rule doesn't apply,
 * so the promise isn't broken, and the result is `true`. (e.g., "If it rains, I'll bring an umbrella."
 * If it doesn't rain, you haven't broken your promise, no matter what).
 *
 * ### Key Details
 *
 * - **Logical Equivalence**: `implies(p, q)` is the same as `not(p).or(q)`, or simply `!p || q`
 *   in plain JavaScript. This can be a helpful way to reason about its behavior.
 *
 * - **Type-Safety Warning**: This function always returns a `Predicate`, never a type-narrowing
 *   `Refinement`. A `true` result doesn't guarantee the `consequent` passed (it could be `true`
 *   simply because the `antecedent` was `false`), so it cannot be used to safely narrow a type.
 *
 * @example
 * ```ts
 * // Rule: A user can only be an admin if they also belong to the "staff" group.
 * import * as assert from "node:assert"
 * import { Predicate } from "effect"
 *
 * type User = {
 *   isStaff: boolean
 *   isAdmin: boolean
 * }
 *
 * const isValidUserPermission = Predicate.implies(
 *   // antecedent: "if" the user is an admin...
 *   (user: User) => user.isAdmin,
 *   // consequent: "then" they must be staff.
 *   (user: User) => user.isStaff
 * )
 *
 * // A non-admin who is not staff. Rule doesn't apply (antecedent is false).
 * assert.strictEqual(isValidUserPermission({ isStaff: false, isAdmin: false }), true)
 *
 * // A staff member who is not an admin. Rule doesn't apply (antecedent is false).
 * assert.strictEqual(isValidUserPermission({ isStaff: true, isAdmin: false }), true)
 *
 * // An admin who is also staff. The rule was followed.
 * assert.strictEqual(isValidUserPermission({ isStaff: true, isAdmin: true }), true)
 *
 * // An admin who is NOT staff. The rule was broken!
 * assert.strictEqual(isValidUserPermission({ isStaff: false, isAdmin: true }), false)
 * ```
 *
 * @category combinators
 * @since 2.0.0
 */
const implies = exports.implies = /*#__PURE__*/(0, _Function.dual)(2, (antecedent, consequent) => a => antecedent(a) ? consequent(a) : true);
/**
 * Combines two predicates with a logical "NOR" (negated OR). The resulting predicate
 * returns `true` only if both predicates return `false`.
 * This is equivalent to `not(or(p, q))`.
 *
 * @category combinators
 * @since 2.0.0
 */
const nor = exports.nor = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => a => !(self(a) || that(a)));
/**
 * Combines two predicates with a logical "NAND" (negated AND). The resulting predicate
 * returns `true` if at least one of the predicates returns `false`.
 * This is equivalent to `not(and(p, q))`.
 *
 * @category combinators
 * @since 2.0.0
 */
const nand = exports.nand = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => a => !(self(a) && that(a)));
/**
 * Takes an iterable of predicates and returns a new predicate. The new predicate
 * returns `true` if all predicates in the collection return `true` for a given value.
 *
 * This is like `Array.prototype.every` but for a collection of predicates.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Predicate } from "effect"
 *
 * const isPositive = (n: number) => n > 0
 * const isEven = (n: number) => n % 2 === 0
 *
 * const isPositiveAndEven = Predicate.every([isPositive, isEven])
 *
 * assert.strictEqual(isPositiveAndEven(4), true)
 * assert.strictEqual(isPositiveAndEven(3), false)
 * assert.strictEqual(isPositiveAndEven(-2), false)
 * ```
 *
 * @category elements
 * @since 2.0.0
 * @see some
 */
const every = collection => a => {
  for (const p of collection) {
    if (!p(a)) {
      return false;
    }
  }
  return true;
};
/**
 * Takes an iterable of predicates and returns a new predicate. The new predicate
 * returns `true` if at least one predicate in the collection returns `true` for a given value.
 *
 * This is like `Array.prototype.some` but for a collection of predicates.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Predicate } from "effect"
 *
 * const isNegative = (n: number) => n < 0
 * const isOdd = (n: number) => n % 2 !== 0
 *
 * const isNegativeOrOdd = Predicate.some([isNegative, isOdd])
 *
 * assert.strictEqual(isNegativeOrOdd(-2), true) // isNegative is true
 * assert.strictEqual(isNegativeOrOdd(3), true)  // isOdd is true
 * assert.strictEqual(isNegativeOrOdd(4), false) // both are false
 * ```
 *
 * @category elements
 * @since 2.0.0
 * @see every
 */
exports.every = every;
const some = collection => a => {
  for (const p of collection) {
    if (p(a)) {
      return true;
    }
  }
  return false;
};
exports.some = some;
//# sourceMappingURL=Predicate.js.map