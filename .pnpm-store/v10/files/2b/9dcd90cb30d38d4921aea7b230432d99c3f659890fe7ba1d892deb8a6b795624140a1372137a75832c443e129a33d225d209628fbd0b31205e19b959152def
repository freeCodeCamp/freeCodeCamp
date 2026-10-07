/**
 * This module provides utility functions and type class instances for working with the `bigint` type in TypeScript.
 * It includes functions for basic arithmetic operations, as well as type class instances for
 * `Equivalence` and `Order`.
 *
 * @module BigInt
 * @since 2.0.0
 * @see {@link module:BigDecimal} for more similar operations on `BigDecimal` types
 * @see {@link module:Number} for more similar operations on `number` types
 */
import * as equivalence from "./Equivalence.js";
import * as Option from "./Option.js";
import * as order from "./Order.js";
import type { Ordering } from "./Ordering.js";
/**
 * Tests if a value is a `bigint`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isBigInt } from "effect/BigInt"
 *
 * assert.deepStrictEqual(isBigInt(1n), true)
 * assert.deepStrictEqual(isBigInt(1), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
export declare const isBigInt: (u: unknown) => u is bigint;
/**
 * Provides an addition operation on `bigint`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { sum } from "effect/BigInt"
 *
 * assert.deepStrictEqual(sum(2n, 3n), 5n)
 * ```
 *
 * @category math
 * @since 2.0.0
 */
export declare const sum: {
    /**
     * Provides an addition operation on `bigint`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { sum } from "effect/BigInt"
     *
     * assert.deepStrictEqual(sum(2n, 3n), 5n)
     * ```
     *
     * @category math
     * @since 2.0.0
     */
    (that: bigint): (self: bigint) => bigint;
    /**
     * Provides an addition operation on `bigint`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { sum } from "effect/BigInt"
     *
     * assert.deepStrictEqual(sum(2n, 3n), 5n)
     * ```
     *
     * @category math
     * @since 2.0.0
     */
    (self: bigint, that: bigint): bigint;
};
/**
 * Provides a multiplication operation on `bigint`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { multiply } from "effect/BigInt"
 *
 * assert.deepStrictEqual(multiply(2n, 3n), 6n)
 * ```
 *
 * @category math
 * @since 2.0.0
 */
export declare const multiply: {
    /**
     * Provides a multiplication operation on `bigint`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { multiply } from "effect/BigInt"
     *
     * assert.deepStrictEqual(multiply(2n, 3n), 6n)
     * ```
     *
     * @category math
     * @since 2.0.0
     */
    (that: bigint): (self: bigint) => bigint;
    /**
     * Provides a multiplication operation on `bigint`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { multiply } from "effect/BigInt"
     *
     * assert.deepStrictEqual(multiply(2n, 3n), 6n)
     * ```
     *
     * @category math
     * @since 2.0.0
     */
    (self: bigint, that: bigint): bigint;
};
/**
 * Provides a subtraction operation on `bigint`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { subtract } from "effect/BigInt"
 *
 * assert.deepStrictEqual(subtract(2n, 3n), -1n)
 * ```
 *
 * @category math
 * @since 2.0.0
 */
export declare const subtract: {
    /**
     * Provides a subtraction operation on `bigint`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { subtract } from "effect/BigInt"
     *
     * assert.deepStrictEqual(subtract(2n, 3n), -1n)
     * ```
     *
     * @category math
     * @since 2.0.0
     */
    (that: bigint): (self: bigint) => bigint;
    /**
     * Provides a subtraction operation on `bigint`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { subtract } from "effect/BigInt"
     *
     * assert.deepStrictEqual(subtract(2n, 3n), -1n)
     * ```
     *
     * @category math
     * @since 2.0.0
     */
    (self: bigint, that: bigint): bigint;
};
/**
 * Provides a division operation on `bigint`s.
 *
 * If the dividend is not a multiple of the divisor the result will be a `bigint` value
 * which represents the integer division rounded down to the nearest integer.
 *
 * Returns `None` if the divisor is `0n`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { BigInt, Option } from "effect"
 *
 * assert.deepStrictEqual(BigInt.divide(6n, 3n), Option.some(2n))
 * assert.deepStrictEqual(BigInt.divide(6n, 0n), Option.none())
 * ```
 *
 * @category math
 * @since 2.0.0
 */
export declare const divide: {
    /**
     * Provides a division operation on `bigint`s.
     *
     * If the dividend is not a multiple of the divisor the result will be a `bigint` value
     * which represents the integer division rounded down to the nearest integer.
     *
     * Returns `None` if the divisor is `0n`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { BigInt, Option } from "effect"
     *
     * assert.deepStrictEqual(BigInt.divide(6n, 3n), Option.some(2n))
     * assert.deepStrictEqual(BigInt.divide(6n, 0n), Option.none())
     * ```
     *
     * @category math
     * @since 2.0.0
     */
    (that: bigint): (self: bigint) => Option.Option<bigint>;
    /**
     * Provides a division operation on `bigint`s.
     *
     * If the dividend is not a multiple of the divisor the result will be a `bigint` value
     * which represents the integer division rounded down to the nearest integer.
     *
     * Returns `None` if the divisor is `0n`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { BigInt, Option } from "effect"
     *
     * assert.deepStrictEqual(BigInt.divide(6n, 3n), Option.some(2n))
     * assert.deepStrictEqual(BigInt.divide(6n, 0n), Option.none())
     * ```
     *
     * @category math
     * @since 2.0.0
     */
    (self: bigint, that: bigint): Option.Option<bigint>;
};
/**
 * Provides a division operation on `bigint`s.
 *
 * If the dividend is not a multiple of the divisor the result will be a `bigint` value
 * which represents the integer division rounded down to the nearest integer.
 *
 * Throws a `RangeError` if the divisor is `0n`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { unsafeDivide } from "effect/BigInt"
 *
 * assert.deepStrictEqual(unsafeDivide(6n, 3n), 2n)
 * assert.deepStrictEqual(unsafeDivide(6n, 4n), 1n)
 * ```
 *
 * @category math
 * @since 2.0.0
 */
export declare const unsafeDivide: {
    /**
     * Provides a division operation on `bigint`s.
     *
     * If the dividend is not a multiple of the divisor the result will be a `bigint` value
     * which represents the integer division rounded down to the nearest integer.
     *
     * Throws a `RangeError` if the divisor is `0n`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { unsafeDivide } from "effect/BigInt"
     *
     * assert.deepStrictEqual(unsafeDivide(6n, 3n), 2n)
     * assert.deepStrictEqual(unsafeDivide(6n, 4n), 1n)
     * ```
     *
     * @category math
     * @since 2.0.0
     */
    (that: bigint): (self: bigint) => bigint;
    /**
     * Provides a division operation on `bigint`s.
     *
     * If the dividend is not a multiple of the divisor the result will be a `bigint` value
     * which represents the integer division rounded down to the nearest integer.
     *
     * Throws a `RangeError` if the divisor is `0n`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { unsafeDivide } from "effect/BigInt"
     *
     * assert.deepStrictEqual(unsafeDivide(6n, 3n), 2n)
     * assert.deepStrictEqual(unsafeDivide(6n, 4n), 1n)
     * ```
     *
     * @category math
     * @since 2.0.0
     */
    (self: bigint, that: bigint): bigint;
};
/**
 * Returns the result of adding `1n` to a given number.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { increment } from "effect/BigInt"
 *
 * assert.deepStrictEqual(increment(2n), 3n)
 * ```
 *
 * @category math
 * @since 2.0.0
 */
export declare const increment: (n: bigint) => bigint;
/**
 * Decrements a number by `1n`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { decrement } from "effect/BigInt"
 *
 * assert.deepStrictEqual(decrement(3n), 2n)
 * ```
 *
 * @category math
 * @since 2.0.0
 */
export declare const decrement: (n: bigint) => bigint;
/**
 * @category instances
 * @since 2.0.0
 */
export declare const Equivalence: equivalence.Equivalence<bigint>;
/**
 * @category instances
 * @since 2.0.0
 */
export declare const Order: order.Order<bigint>;
/**
 * Returns `true` if the first argument is less than the second, otherwise `false`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { lessThan } from "effect/BigInt"
 *
 * assert.deepStrictEqual(lessThan(2n, 3n), true)
 * assert.deepStrictEqual(lessThan(3n, 3n), false)
 * assert.deepStrictEqual(lessThan(4n, 3n), false)
 * ```
 *
 * @category predicates
 * @since 2.0.0
 */
export declare const lessThan: {
    /**
     * Returns `true` if the first argument is less than the second, otherwise `false`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { lessThan } from "effect/BigInt"
     *
     * assert.deepStrictEqual(lessThan(2n, 3n), true)
     * assert.deepStrictEqual(lessThan(3n, 3n), false)
     * assert.deepStrictEqual(lessThan(4n, 3n), false)
     * ```
     *
     * @category predicates
     * @since 2.0.0
     */
    (that: bigint): (self: bigint) => boolean;
    /**
     * Returns `true` if the first argument is less than the second, otherwise `false`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { lessThan } from "effect/BigInt"
     *
     * assert.deepStrictEqual(lessThan(2n, 3n), true)
     * assert.deepStrictEqual(lessThan(3n, 3n), false)
     * assert.deepStrictEqual(lessThan(4n, 3n), false)
     * ```
     *
     * @category predicates
     * @since 2.0.0
     */
    (self: bigint, that: bigint): boolean;
};
/**
 * Returns a function that checks if a given `bigint` is less than or equal to the provided one.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { lessThanOrEqualTo } from "effect/BigInt"
 *
 * assert.deepStrictEqual(lessThanOrEqualTo(2n, 3n), true)
 * assert.deepStrictEqual(lessThanOrEqualTo(3n, 3n), true)
 * assert.deepStrictEqual(lessThanOrEqualTo(4n, 3n), false)
 * ```
 *
 * @category predicates
 * @since 2.0.0
 */
export declare const lessThanOrEqualTo: {
    /**
     * Returns a function that checks if a given `bigint` is less than or equal to the provided one.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { lessThanOrEqualTo } from "effect/BigInt"
     *
     * assert.deepStrictEqual(lessThanOrEqualTo(2n, 3n), true)
     * assert.deepStrictEqual(lessThanOrEqualTo(3n, 3n), true)
     * assert.deepStrictEqual(lessThanOrEqualTo(4n, 3n), false)
     * ```
     *
     * @category predicates
     * @since 2.0.0
     */
    (that: bigint): (self: bigint) => boolean;
    /**
     * Returns a function that checks if a given `bigint` is less than or equal to the provided one.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { lessThanOrEqualTo } from "effect/BigInt"
     *
     * assert.deepStrictEqual(lessThanOrEqualTo(2n, 3n), true)
     * assert.deepStrictEqual(lessThanOrEqualTo(3n, 3n), true)
     * assert.deepStrictEqual(lessThanOrEqualTo(4n, 3n), false)
     * ```
     *
     * @category predicates
     * @since 2.0.0
     */
    (self: bigint, that: bigint): boolean;
};
/**
 * Returns `true` if the first argument is greater than the second, otherwise `false`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { greaterThan } from "effect/BigInt"
 *
 * assert.deepStrictEqual(greaterThan(2n, 3n), false)
 * assert.deepStrictEqual(greaterThan(3n, 3n), false)
 * assert.deepStrictEqual(greaterThan(4n, 3n), true)
 * ```
 *
 * @category predicates
 * @since 2.0.0
 */
export declare const greaterThan: {
    /**
     * Returns `true` if the first argument is greater than the second, otherwise `false`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { greaterThan } from "effect/BigInt"
     *
     * assert.deepStrictEqual(greaterThan(2n, 3n), false)
     * assert.deepStrictEqual(greaterThan(3n, 3n), false)
     * assert.deepStrictEqual(greaterThan(4n, 3n), true)
     * ```
     *
     * @category predicates
     * @since 2.0.0
     */
    (that: bigint): (self: bigint) => boolean;
    /**
     * Returns `true` if the first argument is greater than the second, otherwise `false`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { greaterThan } from "effect/BigInt"
     *
     * assert.deepStrictEqual(greaterThan(2n, 3n), false)
     * assert.deepStrictEqual(greaterThan(3n, 3n), false)
     * assert.deepStrictEqual(greaterThan(4n, 3n), true)
     * ```
     *
     * @category predicates
     * @since 2.0.0
     */
    (self: bigint, that: bigint): boolean;
};
/**
 * Returns a function that checks if a given `bigint` is greater than or equal to the provided one.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { greaterThanOrEqualTo } from "effect/BigInt"
 *
 * assert.deepStrictEqual(greaterThanOrEqualTo(2n, 3n), false)
 * assert.deepStrictEqual(greaterThanOrEqualTo(3n, 3n), true)
 * assert.deepStrictEqual(greaterThanOrEqualTo(4n, 3n), true)
 * ```
 *
 * @category predicates
 * @since 2.0.0
 */
export declare const greaterThanOrEqualTo: {
    /**
     * Returns a function that checks if a given `bigint` is greater than or equal to the provided one.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { greaterThanOrEqualTo } from "effect/BigInt"
     *
     * assert.deepStrictEqual(greaterThanOrEqualTo(2n, 3n), false)
     * assert.deepStrictEqual(greaterThanOrEqualTo(3n, 3n), true)
     * assert.deepStrictEqual(greaterThanOrEqualTo(4n, 3n), true)
     * ```
     *
     * @category predicates
     * @since 2.0.0
     */
    (that: bigint): (self: bigint) => boolean;
    /**
     * Returns a function that checks if a given `bigint` is greater than or equal to the provided one.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { greaterThanOrEqualTo } from "effect/BigInt"
     *
     * assert.deepStrictEqual(greaterThanOrEqualTo(2n, 3n), false)
     * assert.deepStrictEqual(greaterThanOrEqualTo(3n, 3n), true)
     * assert.deepStrictEqual(greaterThanOrEqualTo(4n, 3n), true)
     * ```
     *
     * @category predicates
     * @since 2.0.0
     */
    (self: bigint, that: bigint): boolean;
};
/**
 * Checks if a `bigint` is between a `minimum` and `maximum` value (inclusive).
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { BigInt } from "effect"
 *
 * const between = BigInt.between({ minimum: 0n, maximum: 5n })
 *
 * assert.deepStrictEqual(between(3n), true)
 * assert.deepStrictEqual(between(-1n), false)
 * assert.deepStrictEqual(between(6n), false)
 * ```
 *
 * @category predicates
 * @since 2.0.0
 */
export declare const between: {
    /**
     * Checks if a `bigint` is between a `minimum` and `maximum` value (inclusive).
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { BigInt } from "effect"
     *
     * const between = BigInt.between({ minimum: 0n, maximum: 5n })
     *
     * assert.deepStrictEqual(between(3n), true)
     * assert.deepStrictEqual(between(-1n), false)
     * assert.deepStrictEqual(between(6n), false)
     * ```
     *
     * @category predicates
     * @since 2.0.0
     */
    (options: {
        minimum: bigint;
        maximum: bigint;
    }): (self: bigint) => boolean;
    /**
     * Checks if a `bigint` is between a `minimum` and `maximum` value (inclusive).
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { BigInt } from "effect"
     *
     * const between = BigInt.between({ minimum: 0n, maximum: 5n })
     *
     * assert.deepStrictEqual(between(3n), true)
     * assert.deepStrictEqual(between(-1n), false)
     * assert.deepStrictEqual(between(6n), false)
     * ```
     *
     * @category predicates
     * @since 2.0.0
     */
    (self: bigint, options: {
        minimum: bigint;
        maximum: bigint;
    }): boolean;
};
/**
 * Restricts the given `bigint` to be within the range specified by the `minimum` and `maximum` values.
 *
 * - If the `bigint` is less than the `minimum` value, the function returns the `minimum` value.
 * - If the `bigint` is greater than the `maximum` value, the function returns the `maximum` value.
 * - Otherwise, it returns the original `bigint`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { BigInt } from "effect"
 *
 * const clamp = BigInt.clamp({ minimum: 1n, maximum: 5n })
 *
 * assert.equal(clamp(3n), 3n)
 * assert.equal(clamp(0n), 1n)
 * assert.equal(clamp(6n), 5n)
 * ```
 *
 * @since 2.0.0
 */
export declare const clamp: {
    /**
     * Restricts the given `bigint` to be within the range specified by the `minimum` and `maximum` values.
     *
     * - If the `bigint` is less than the `minimum` value, the function returns the `minimum` value.
     * - If the `bigint` is greater than the `maximum` value, the function returns the `maximum` value.
     * - Otherwise, it returns the original `bigint`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { BigInt } from "effect"
     *
     * const clamp = BigInt.clamp({ minimum: 1n, maximum: 5n })
     *
     * assert.equal(clamp(3n), 3n)
     * assert.equal(clamp(0n), 1n)
     * assert.equal(clamp(6n), 5n)
     * ```
     *
     * @since 2.0.0
     */
    (options: {
        minimum: bigint;
        maximum: bigint;
    }): (self: bigint) => bigint;
    /**
     * Restricts the given `bigint` to be within the range specified by the `minimum` and `maximum` values.
     *
     * - If the `bigint` is less than the `minimum` value, the function returns the `minimum` value.
     * - If the `bigint` is greater than the `maximum` value, the function returns the `maximum` value.
     * - Otherwise, it returns the original `bigint`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { BigInt } from "effect"
     *
     * const clamp = BigInt.clamp({ minimum: 1n, maximum: 5n })
     *
     * assert.equal(clamp(3n), 3n)
     * assert.equal(clamp(0n), 1n)
     * assert.equal(clamp(6n), 5n)
     * ```
     *
     * @since 2.0.0
     */
    (self: bigint, options: {
        minimum: bigint;
        maximum: bigint;
    }): bigint;
};
/**
 * Returns the minimum between two `bigint`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { min } from "effect/BigInt"
 *
 * assert.deepStrictEqual(min(2n, 3n), 2n)
 * ```
 *
 * @since 2.0.0
 */
export declare const min: {
    /**
     * Returns the minimum between two `bigint`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { min } from "effect/BigInt"
     *
     * assert.deepStrictEqual(min(2n, 3n), 2n)
     * ```
     *
     * @since 2.0.0
     */
    (that: bigint): (self: bigint) => bigint;
    /**
     * Returns the minimum between two `bigint`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { min } from "effect/BigInt"
     *
     * assert.deepStrictEqual(min(2n, 3n), 2n)
     * ```
     *
     * @since 2.0.0
     */
    (self: bigint, that: bigint): bigint;
};
/**
 * Returns the maximum between two `bigint`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { max } from "effect/BigInt"
 *
 * assert.deepStrictEqual(max(2n, 3n), 3n)
 * ```
 *
 * @since 2.0.0
 */
export declare const max: {
    /**
     * Returns the maximum between two `bigint`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { max } from "effect/BigInt"
     *
     * assert.deepStrictEqual(max(2n, 3n), 3n)
     * ```
     *
     * @since 2.0.0
     */
    (that: bigint): (self: bigint) => bigint;
    /**
     * Returns the maximum between two `bigint`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { max } from "effect/BigInt"
     *
     * assert.deepStrictEqual(max(2n, 3n), 3n)
     * ```
     *
     * @since 2.0.0
     */
    (self: bigint, that: bigint): bigint;
};
/**
 * Determines the sign of a given `bigint`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { sign } from "effect/BigInt"
 *
 * assert.deepStrictEqual(sign(-5n), -1)
 * assert.deepStrictEqual(sign(0n), 0)
 * assert.deepStrictEqual(sign(5n), 1)
 * ```
 *
 * @category math
 * @since 2.0.0
 */
export declare const sign: (n: bigint) => Ordering;
/**
 * Determines the absolute value of a given `bigint`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { abs } from "effect/BigInt"
 *
 * assert.deepStrictEqual(abs(-5n), 5n)
 * assert.deepStrictEqual(abs(0n), 0n)
 * assert.deepStrictEqual(abs(5n), 5n)
 * ```
 *
 * @category math
 * @since 2.0.0
 */
export declare const abs: (n: bigint) => bigint;
/**
 * Determines the greatest common divisor of two `bigint`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { gcd } from "effect/BigInt"
 *
 * assert.deepStrictEqual(gcd(2n, 3n), 1n)
 * assert.deepStrictEqual(gcd(2n, 4n), 2n)
 * assert.deepStrictEqual(gcd(16n, 24n), 8n)
 * ```
 *
 * @category math
 * @since 2.0.0
 */
export declare const gcd: {
    /**
     * Determines the greatest common divisor of two `bigint`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { gcd } from "effect/BigInt"
     *
     * assert.deepStrictEqual(gcd(2n, 3n), 1n)
     * assert.deepStrictEqual(gcd(2n, 4n), 2n)
     * assert.deepStrictEqual(gcd(16n, 24n), 8n)
     * ```
     *
     * @category math
     * @since 2.0.0
     */
    (that: bigint): (self: bigint) => bigint;
    /**
     * Determines the greatest common divisor of two `bigint`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { gcd } from "effect/BigInt"
     *
     * assert.deepStrictEqual(gcd(2n, 3n), 1n)
     * assert.deepStrictEqual(gcd(2n, 4n), 2n)
     * assert.deepStrictEqual(gcd(16n, 24n), 8n)
     * ```
     *
     * @category math
     * @since 2.0.0
     */
    (self: bigint, that: bigint): bigint;
};
/**
 * Determines the least common multiple of two `bigint`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { lcm } from "effect/BigInt"
 *
 * assert.deepStrictEqual(lcm(2n, 3n), 6n)
 * assert.deepStrictEqual(lcm(2n, 4n), 4n)
 * assert.deepStrictEqual(lcm(16n, 24n), 48n)
 * ```
 *
 * @category math
 * @since 2.0.0
 */
export declare const lcm: {
    /**
     * Determines the least common multiple of two `bigint`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { lcm } from "effect/BigInt"
     *
     * assert.deepStrictEqual(lcm(2n, 3n), 6n)
     * assert.deepStrictEqual(lcm(2n, 4n), 4n)
     * assert.deepStrictEqual(lcm(16n, 24n), 48n)
     * ```
     *
     * @category math
     * @since 2.0.0
     */
    (that: bigint): (self: bigint) => bigint;
    /**
     * Determines the least common multiple of two `bigint`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { lcm } from "effect/BigInt"
     *
     * assert.deepStrictEqual(lcm(2n, 3n), 6n)
     * assert.deepStrictEqual(lcm(2n, 4n), 4n)
     * assert.deepStrictEqual(lcm(16n, 24n), 48n)
     * ```
     *
     * @category math
     * @since 2.0.0
     */
    (self: bigint, that: bigint): bigint;
};
/**
 * Determines the square root of a given `bigint` unsafely. Throws if the given `bigint` is negative.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { unsafeSqrt } from "effect/BigInt"
 *
 * assert.deepStrictEqual(unsafeSqrt(4n), 2n)
 * assert.deepStrictEqual(unsafeSqrt(9n), 3n)
 * assert.deepStrictEqual(unsafeSqrt(16n), 4n)
 * ```
 *
 * @category math
 * @since 2.0.0
 */
export declare const unsafeSqrt: (n: bigint) => bigint;
/**
 * Determines the square root of a given `bigint` safely. Returns `none` if the given `bigint` is negative.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { BigInt, Option } from "effect"
 *
 * assert.deepStrictEqual(BigInt.sqrt(4n), Option.some(2n))
 * assert.deepStrictEqual(BigInt.sqrt(9n), Option.some(3n))
 * assert.deepStrictEqual(BigInt.sqrt(16n), Option.some(4n))
 * assert.deepStrictEqual(BigInt.sqrt(-1n), Option.none())
 * ```
 *
 * @category math
 * @since 2.0.0
 */
export declare const sqrt: (n: bigint) => Option.Option<bigint>;
/**
 * Takes an `Iterable` of `bigint`s and returns their sum as a single `bigint
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { sumAll } from "effect/BigInt"
 *
 * assert.deepStrictEqual(sumAll([2n, 3n, 4n]), 9n)
 * ```
 *
 * @category math
 * @since 2.0.0
 */
export declare const sumAll: (collection: Iterable<bigint>) => bigint;
/**
 * Takes an `Iterable` of `bigint`s and returns their multiplication as a single `number`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { multiplyAll } from "effect/BigInt"
 *
 * assert.deepStrictEqual(multiplyAll([2n, 3n, 4n]), 24n)
 * ```
 *
 * @category math
 * @since 2.0.0
 */
export declare const multiplyAll: (collection: Iterable<bigint>) => bigint;
/**
 * Takes a `bigint` and returns an `Option` of `number`.
 *
 * If the `bigint` is outside the safe integer range for JavaScript (`Number.MAX_SAFE_INTEGER`
 * and `Number.MIN_SAFE_INTEGER`), it returns `Option.none()`. Otherwise, it converts the `bigint`
 * to a number and returns `Option.some(number)`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { BigInt as BI, Option } from "effect"
 *
 * assert.deepStrictEqual(BI.toNumber(BigInt(42)), Option.some(42))
 * assert.deepStrictEqual(BI.toNumber(BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1)), Option.none())
 * assert.deepStrictEqual(BI.toNumber(BigInt(Number.MIN_SAFE_INTEGER) - BigInt(1)), Option.none())
 * ```
 *
 * @category conversions
 * @since 2.0.0
 */
export declare const toNumber: (b: bigint) => Option.Option<number>;
/**
 * Takes a string and returns an `Option` of `bigint`.
 *
 * If the string is empty or contains characters that cannot be converted into a `bigint`,
 * it returns `Option.none()`, otherwise, it returns `Option.some(bigint)`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { BigInt as BI, Option } from "effect"
 *
 * assert.deepStrictEqual(BI.fromString("42"), Option.some(BigInt(42)))
 * assert.deepStrictEqual(BI.fromString(" "), Option.none())
 * assert.deepStrictEqual(BI.fromString("a"), Option.none())
 * ```
 *
 * @category conversions
 * @since 2.4.12
 */
export declare const fromString: (s: string) => Option.Option<bigint>;
/**
 * Takes a number and returns an `Option` of `bigint`.
 *
 * If the number is outside the safe integer range for JavaScript (`Number.MAX_SAFE_INTEGER`
 * and `Number.MIN_SAFE_INTEGER`), it returns `Option.none()`. Otherwise, it attempts to
 * convert the number to a `bigint` and returns `Option.some(bigint)`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { BigInt as BI, Option } from "effect"
 *
 * assert.deepStrictEqual(BI.fromNumber(42), Option.some(BigInt(42)))
 * assert.deepStrictEqual(BI.fromNumber(Number.MAX_SAFE_INTEGER + 1), Option.none())
 * assert.deepStrictEqual(BI.fromNumber(Number.MIN_SAFE_INTEGER - 1), Option.none())
 * ```
 *
 * @category conversions
 * @since 2.4.12
 */
export declare const fromNumber: (n: number) => Option.Option<bigint>;
//# sourceMappingURL=BigInt.d.ts.map