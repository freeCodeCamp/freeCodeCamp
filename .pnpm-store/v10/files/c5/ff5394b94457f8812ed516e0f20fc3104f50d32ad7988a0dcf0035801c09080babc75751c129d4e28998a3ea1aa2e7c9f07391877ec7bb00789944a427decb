/**
 * This module provides utility functions and type class instances for working with the `BigDecimal` type in TypeScript.
 * It includes functions for basic arithmetic operations, as well as type class instances for `Equivalence` and `Order`.
 *
 * A `BigDecimal` allows storing any real number to arbitrary precision; which avoids common floating point errors
 * (such as 0.1 + 0.2 ≠ 0.3) at the cost of complexity.
 *
 * Internally, `BigDecimal` uses a `BigInt` object, paired with a 64-bit integer which determines the position of the
 * decimal point. Therefore, the precision *is not* actually arbitrary, but limited to 2<sup>63</sup> decimal places.
 *
 * It is not recommended to convert a floating point number to a decimal directly, as the floating point representation
 * may be unexpected.
 *
 * @module BigDecimal
 * @since 2.0.0
 * @see {@link module:BigInt} for more similar operations on `bigint` types
 * @see {@link module:Number} for more similar operations on `number` types
 */
import * as Equal from "./Equal.js";
import * as equivalence from "./Equivalence.js";
import { type Inspectable } from "./Inspectable.js";
import * as Option from "./Option.js";
import * as order from "./Order.js";
import type { Ordering } from "./Ordering.js";
import { type Pipeable } from "./Pipeable.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const TypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbol
 */
export type TypeId = typeof TypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface BigDecimal extends Equal.Equal, Pipeable, Inspectable {
    readonly [TypeId]: TypeId;
    readonly value: bigint;
    readonly scale: number;
}
/**
 * Checks if a given value is a `BigDecimal`.
 *
 * @since 2.0.0
 * @category guards
 */
export declare const isBigDecimal: (u: unknown) => u is BigDecimal;
/**
 * Creates a `BigDecimal` from a `bigint` value and a scale.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const make: (value: bigint, scale: number) => BigDecimal;
/**
 * Normalizes a given `BigDecimal` by removing trailing zeros.
 *
 * **Example**
 *
 * ```ts
 * import * as assert from "node:assert"
 * import { normalize, make, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(normalize(unsafeFromString("123.00000")), normalize(make(123n, 0)))
 * assert.deepStrictEqual(normalize(unsafeFromString("12300000")), normalize(make(123n, -5)))
 * ```
 *
 * @since 2.0.0
 * @category scaling
 */
export declare const normalize: (self: BigDecimal) => BigDecimal;
/**
 * Scales a given `BigDecimal` to the specified scale.
 *
 * If the given scale is smaller than the current scale, the value will be rounded down to
 * the nearest integer.
 *
 * @since 2.0.0
 * @category scaling
 */
export declare const scale: {
    /**
     * Scales a given `BigDecimal` to the specified scale.
     *
     * If the given scale is smaller than the current scale, the value will be rounded down to
     * the nearest integer.
     *
     * @since 2.0.0
     * @category scaling
     */
    (scale: number): (self: BigDecimal) => BigDecimal;
    /**
     * Scales a given `BigDecimal` to the specified scale.
     *
     * If the given scale is smaller than the current scale, the value will be rounded down to
     * the nearest integer.
     *
     * @since 2.0.0
     * @category scaling
     */
    (self: BigDecimal, scale: number): BigDecimal;
};
/**
 * Provides an addition operation on `BigDecimal`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { sum, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(sum(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("5"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
export declare const sum: {
    /**
     * Provides an addition operation on `BigDecimal`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { sum, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(sum(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("5"))
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (that: BigDecimal): (self: BigDecimal) => BigDecimal;
    /**
     * Provides an addition operation on `BigDecimal`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { sum, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(sum(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("5"))
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (self: BigDecimal, that: BigDecimal): BigDecimal;
};
/**
 * Provides a multiplication operation on `BigDecimal`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { multiply, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(multiply(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("6"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
export declare const multiply: {
    /**
     * Provides a multiplication operation on `BigDecimal`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { multiply, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(multiply(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("6"))
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (that: BigDecimal): (self: BigDecimal) => BigDecimal;
    /**
     * Provides a multiplication operation on `BigDecimal`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { multiply, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(multiply(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("6"))
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (self: BigDecimal, that: BigDecimal): BigDecimal;
};
/**
 * Provides a subtraction operation on `BigDecimal`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { subtract, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(subtract(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("-1"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
export declare const subtract: {
    /**
     * Provides a subtraction operation on `BigDecimal`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { subtract, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(subtract(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("-1"))
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (that: BigDecimal): (self: BigDecimal) => BigDecimal;
    /**
     * Provides a subtraction operation on `BigDecimal`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { subtract, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(subtract(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("-1"))
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (self: BigDecimal, that: BigDecimal): BigDecimal;
};
/**
 * Provides a division operation on `BigDecimal`s.
 *
 * If the dividend is not a multiple of the divisor the result will be a `BigDecimal` value
 * which represents the integer division rounded down to the nearest integer.
 *
 * If the divisor is `0`, the result will be `None`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { BigDecimal, Option } from "effect"
 *
 * assert.deepStrictEqual(BigDecimal.divide(BigDecimal.unsafeFromString("6"), BigDecimal.unsafeFromString("3")), Option.some(BigDecimal.unsafeFromString("2")))
 * assert.deepStrictEqual(BigDecimal.divide(BigDecimal.unsafeFromString("6"), BigDecimal.unsafeFromString("4")), Option.some(BigDecimal.unsafeFromString("1.5")))
 * assert.deepStrictEqual(BigDecimal.divide(BigDecimal.unsafeFromString("6"), BigDecimal.unsafeFromString("0")), Option.none())
 * ```
 *
 * @since 2.0.0
 * @category math
 */
export declare const divide: {
    /**
     * Provides a division operation on `BigDecimal`s.
     *
     * If the dividend is not a multiple of the divisor the result will be a `BigDecimal` value
     * which represents the integer division rounded down to the nearest integer.
     *
     * If the divisor is `0`, the result will be `None`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { BigDecimal, Option } from "effect"
     *
     * assert.deepStrictEqual(BigDecimal.divide(BigDecimal.unsafeFromString("6"), BigDecimal.unsafeFromString("3")), Option.some(BigDecimal.unsafeFromString("2")))
     * assert.deepStrictEqual(BigDecimal.divide(BigDecimal.unsafeFromString("6"), BigDecimal.unsafeFromString("4")), Option.some(BigDecimal.unsafeFromString("1.5")))
     * assert.deepStrictEqual(BigDecimal.divide(BigDecimal.unsafeFromString("6"), BigDecimal.unsafeFromString("0")), Option.none())
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (that: BigDecimal): (self: BigDecimal) => Option.Option<BigDecimal>;
    /**
     * Provides a division operation on `BigDecimal`s.
     *
     * If the dividend is not a multiple of the divisor the result will be a `BigDecimal` value
     * which represents the integer division rounded down to the nearest integer.
     *
     * If the divisor is `0`, the result will be `None`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { BigDecimal, Option } from "effect"
     *
     * assert.deepStrictEqual(BigDecimal.divide(BigDecimal.unsafeFromString("6"), BigDecimal.unsafeFromString("3")), Option.some(BigDecimal.unsafeFromString("2")))
     * assert.deepStrictEqual(BigDecimal.divide(BigDecimal.unsafeFromString("6"), BigDecimal.unsafeFromString("4")), Option.some(BigDecimal.unsafeFromString("1.5")))
     * assert.deepStrictEqual(BigDecimal.divide(BigDecimal.unsafeFromString("6"), BigDecimal.unsafeFromString("0")), Option.none())
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (self: BigDecimal, that: BigDecimal): Option.Option<BigDecimal>;
};
/**
 * Provides an unsafe division operation on `BigDecimal`s.
 *
 * If the dividend is not a multiple of the divisor the result will be a `BigDecimal` value
 * which represents the integer division rounded down to the nearest integer.
 *
 * Throws a `RangeError` if the divisor is `0`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { unsafeDivide, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(unsafeDivide(unsafeFromString("6"), unsafeFromString("3")), unsafeFromString("2"))
 * assert.deepStrictEqual(unsafeDivide(unsafeFromString("6"), unsafeFromString("4")), unsafeFromString("1.5"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
export declare const unsafeDivide: {
    /**
     * Provides an unsafe division operation on `BigDecimal`s.
     *
     * If the dividend is not a multiple of the divisor the result will be a `BigDecimal` value
     * which represents the integer division rounded down to the nearest integer.
     *
     * Throws a `RangeError` if the divisor is `0`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { unsafeDivide, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(unsafeDivide(unsafeFromString("6"), unsafeFromString("3")), unsafeFromString("2"))
     * assert.deepStrictEqual(unsafeDivide(unsafeFromString("6"), unsafeFromString("4")), unsafeFromString("1.5"))
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (that: BigDecimal): (self: BigDecimal) => BigDecimal;
    /**
     * Provides an unsafe division operation on `BigDecimal`s.
     *
     * If the dividend is not a multiple of the divisor the result will be a `BigDecimal` value
     * which represents the integer division rounded down to the nearest integer.
     *
     * Throws a `RangeError` if the divisor is `0`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { unsafeDivide, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(unsafeDivide(unsafeFromString("6"), unsafeFromString("3")), unsafeFromString("2"))
     * assert.deepStrictEqual(unsafeDivide(unsafeFromString("6"), unsafeFromString("4")), unsafeFromString("1.5"))
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (self: BigDecimal, that: BigDecimal): BigDecimal;
};
/**
 * @since 2.0.0
 * @category instances
 */
export declare const Order: order.Order<BigDecimal>;
/**
 * Returns `true` if the first argument is less than the second, otherwise `false`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { lessThan, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(lessThan(unsafeFromString("2"), unsafeFromString("3")), true)
 * assert.deepStrictEqual(lessThan(unsafeFromString("3"), unsafeFromString("3")), false)
 * assert.deepStrictEqual(lessThan(unsafeFromString("4"), unsafeFromString("3")), false)
 * ```
 *
 * @since 2.0.0
 * @category predicates
 */
export declare const lessThan: {
    /**
     * Returns `true` if the first argument is less than the second, otherwise `false`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { lessThan, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(lessThan(unsafeFromString("2"), unsafeFromString("3")), true)
     * assert.deepStrictEqual(lessThan(unsafeFromString("3"), unsafeFromString("3")), false)
     * assert.deepStrictEqual(lessThan(unsafeFromString("4"), unsafeFromString("3")), false)
     * ```
     *
     * @since 2.0.0
     * @category predicates
     */
    (that: BigDecimal): (self: BigDecimal) => boolean;
    /**
     * Returns `true` if the first argument is less than the second, otherwise `false`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { lessThan, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(lessThan(unsafeFromString("2"), unsafeFromString("3")), true)
     * assert.deepStrictEqual(lessThan(unsafeFromString("3"), unsafeFromString("3")), false)
     * assert.deepStrictEqual(lessThan(unsafeFromString("4"), unsafeFromString("3")), false)
     * ```
     *
     * @since 2.0.0
     * @category predicates
     */
    (self: BigDecimal, that: BigDecimal): boolean;
};
/**
 * Checks if a given `BigDecimal` is less than or equal to the provided one.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { lessThanOrEqualTo, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(lessThanOrEqualTo(unsafeFromString("2"), unsafeFromString("3")), true)
 * assert.deepStrictEqual(lessThanOrEqualTo(unsafeFromString("3"), unsafeFromString("3")), true)
 * assert.deepStrictEqual(lessThanOrEqualTo(unsafeFromString("4"), unsafeFromString("3")), false)
 * ```
 *
 * @since 2.0.0
 * @category predicates
 */
export declare const lessThanOrEqualTo: {
    /**
     * Checks if a given `BigDecimal` is less than or equal to the provided one.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { lessThanOrEqualTo, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(lessThanOrEqualTo(unsafeFromString("2"), unsafeFromString("3")), true)
     * assert.deepStrictEqual(lessThanOrEqualTo(unsafeFromString("3"), unsafeFromString("3")), true)
     * assert.deepStrictEqual(lessThanOrEqualTo(unsafeFromString("4"), unsafeFromString("3")), false)
     * ```
     *
     * @since 2.0.0
     * @category predicates
     */
    (that: BigDecimal): (self: BigDecimal) => boolean;
    /**
     * Checks if a given `BigDecimal` is less than or equal to the provided one.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { lessThanOrEqualTo, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(lessThanOrEqualTo(unsafeFromString("2"), unsafeFromString("3")), true)
     * assert.deepStrictEqual(lessThanOrEqualTo(unsafeFromString("3"), unsafeFromString("3")), true)
     * assert.deepStrictEqual(lessThanOrEqualTo(unsafeFromString("4"), unsafeFromString("3")), false)
     * ```
     *
     * @since 2.0.0
     * @category predicates
     */
    (self: BigDecimal, that: BigDecimal): boolean;
};
/**
 * Returns `true` if the first argument is greater than the second, otherwise `false`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { greaterThan, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(greaterThan(unsafeFromString("2"), unsafeFromString("3")), false)
 * assert.deepStrictEqual(greaterThan(unsafeFromString("3"), unsafeFromString("3")), false)
 * assert.deepStrictEqual(greaterThan(unsafeFromString("4"), unsafeFromString("3")), true)
 * ```
 *
 * @since 2.0.0
 * @category predicates
 */
export declare const greaterThan: {
    /**
     * Returns `true` if the first argument is greater than the second, otherwise `false`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { greaterThan, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(greaterThan(unsafeFromString("2"), unsafeFromString("3")), false)
     * assert.deepStrictEqual(greaterThan(unsafeFromString("3"), unsafeFromString("3")), false)
     * assert.deepStrictEqual(greaterThan(unsafeFromString("4"), unsafeFromString("3")), true)
     * ```
     *
     * @since 2.0.0
     * @category predicates
     */
    (that: BigDecimal): (self: BigDecimal) => boolean;
    /**
     * Returns `true` if the first argument is greater than the second, otherwise `false`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { greaterThan, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(greaterThan(unsafeFromString("2"), unsafeFromString("3")), false)
     * assert.deepStrictEqual(greaterThan(unsafeFromString("3"), unsafeFromString("3")), false)
     * assert.deepStrictEqual(greaterThan(unsafeFromString("4"), unsafeFromString("3")), true)
     * ```
     *
     * @since 2.0.0
     * @category predicates
     */
    (self: BigDecimal, that: BigDecimal): boolean;
};
/**
 * Checks if a given `BigDecimal` is greater than or equal to the provided one.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { greaterThanOrEqualTo, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(greaterThanOrEqualTo(unsafeFromString("2"), unsafeFromString("3")), false)
 * assert.deepStrictEqual(greaterThanOrEqualTo(unsafeFromString("3"), unsafeFromString("3")), true)
 * assert.deepStrictEqual(greaterThanOrEqualTo(unsafeFromString("4"), unsafeFromString("3")), true)
 * ```
 *
 * @since 2.0.0
 * @category predicates
 */
export declare const greaterThanOrEqualTo: {
    /**
     * Checks if a given `BigDecimal` is greater than or equal to the provided one.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { greaterThanOrEqualTo, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(greaterThanOrEqualTo(unsafeFromString("2"), unsafeFromString("3")), false)
     * assert.deepStrictEqual(greaterThanOrEqualTo(unsafeFromString("3"), unsafeFromString("3")), true)
     * assert.deepStrictEqual(greaterThanOrEqualTo(unsafeFromString("4"), unsafeFromString("3")), true)
     * ```
     *
     * @since 2.0.0
     * @category predicates
     */
    (that: BigDecimal): (self: BigDecimal) => boolean;
    /**
     * Checks if a given `BigDecimal` is greater than or equal to the provided one.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { greaterThanOrEqualTo, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(greaterThanOrEqualTo(unsafeFromString("2"), unsafeFromString("3")), false)
     * assert.deepStrictEqual(greaterThanOrEqualTo(unsafeFromString("3"), unsafeFromString("3")), true)
     * assert.deepStrictEqual(greaterThanOrEqualTo(unsafeFromString("4"), unsafeFromString("3")), true)
     * ```
     *
     * @since 2.0.0
     * @category predicates
     */
    (self: BigDecimal, that: BigDecimal): boolean;
};
/**
 * Checks if a `BigDecimal` is between a `minimum` and `maximum` value (inclusive).
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { BigDecimal } from "effect"
 *
 * const between = BigDecimal.between({
 *   minimum: BigDecimal.unsafeFromString("1"),
 *   maximum: BigDecimal.unsafeFromString("5") }
 * )
 *
 * assert.deepStrictEqual(between(BigDecimal.unsafeFromString("3")), true)
 * assert.deepStrictEqual(between(BigDecimal.unsafeFromString("0")), false)
 * assert.deepStrictEqual(between(BigDecimal.unsafeFromString("6")), false)
 * ```
 *
 * @since 2.0.0
 * @category predicates
 */
export declare const between: {
    /**
     * Checks if a `BigDecimal` is between a `minimum` and `maximum` value (inclusive).
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { BigDecimal } from "effect"
     *
     * const between = BigDecimal.between({
     *   minimum: BigDecimal.unsafeFromString("1"),
     *   maximum: BigDecimal.unsafeFromString("5") }
     * )
     *
     * assert.deepStrictEqual(between(BigDecimal.unsafeFromString("3")), true)
     * assert.deepStrictEqual(between(BigDecimal.unsafeFromString("0")), false)
     * assert.deepStrictEqual(between(BigDecimal.unsafeFromString("6")), false)
     * ```
     *
     * @since 2.0.0
     * @category predicates
     */
    (options: {
        minimum: BigDecimal;
        maximum: BigDecimal;
    }): (self: BigDecimal) => boolean;
    /**
     * Checks if a `BigDecimal` is between a `minimum` and `maximum` value (inclusive).
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { BigDecimal } from "effect"
     *
     * const between = BigDecimal.between({
     *   minimum: BigDecimal.unsafeFromString("1"),
     *   maximum: BigDecimal.unsafeFromString("5") }
     * )
     *
     * assert.deepStrictEqual(between(BigDecimal.unsafeFromString("3")), true)
     * assert.deepStrictEqual(between(BigDecimal.unsafeFromString("0")), false)
     * assert.deepStrictEqual(between(BigDecimal.unsafeFromString("6")), false)
     * ```
     *
     * @since 2.0.0
     * @category predicates
     */
    (self: BigDecimal, options: {
        minimum: BigDecimal;
        maximum: BigDecimal;
    }): boolean;
};
/**
 * Restricts the given `BigDecimal` to be within the range specified by the `minimum` and `maximum` values.
 *
 * - If the `BigDecimal` is less than the `minimum` value, the function returns the `minimum` value.
 * - If the `BigDecimal` is greater than the `maximum` value, the function returns the `maximum` value.
 * - Otherwise, it returns the original `BigDecimal`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { BigDecimal } from "effect"
 *
 * const clamp = BigDecimal.clamp({
 *   minimum: BigDecimal.unsafeFromString("1"),
 *   maximum: BigDecimal.unsafeFromString("5") }
 * )
 *
 * assert.deepStrictEqual(clamp(BigDecimal.unsafeFromString("3")), BigDecimal.unsafeFromString("3"))
 * assert.deepStrictEqual(clamp(BigDecimal.unsafeFromString("0")), BigDecimal.unsafeFromString("1"))
 * assert.deepStrictEqual(clamp(BigDecimal.unsafeFromString("6")), BigDecimal.unsafeFromString("5"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
export declare const clamp: {
    /**
     * Restricts the given `BigDecimal` to be within the range specified by the `minimum` and `maximum` values.
     *
     * - If the `BigDecimal` is less than the `minimum` value, the function returns the `minimum` value.
     * - If the `BigDecimal` is greater than the `maximum` value, the function returns the `maximum` value.
     * - Otherwise, it returns the original `BigDecimal`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { BigDecimal } from "effect"
     *
     * const clamp = BigDecimal.clamp({
     *   minimum: BigDecimal.unsafeFromString("1"),
     *   maximum: BigDecimal.unsafeFromString("5") }
     * )
     *
     * assert.deepStrictEqual(clamp(BigDecimal.unsafeFromString("3")), BigDecimal.unsafeFromString("3"))
     * assert.deepStrictEqual(clamp(BigDecimal.unsafeFromString("0")), BigDecimal.unsafeFromString("1"))
     * assert.deepStrictEqual(clamp(BigDecimal.unsafeFromString("6")), BigDecimal.unsafeFromString("5"))
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (options: {
        minimum: BigDecimal;
        maximum: BigDecimal;
    }): (self: BigDecimal) => BigDecimal;
    /**
     * Restricts the given `BigDecimal` to be within the range specified by the `minimum` and `maximum` values.
     *
     * - If the `BigDecimal` is less than the `minimum` value, the function returns the `minimum` value.
     * - If the `BigDecimal` is greater than the `maximum` value, the function returns the `maximum` value.
     * - Otherwise, it returns the original `BigDecimal`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { BigDecimal } from "effect"
     *
     * const clamp = BigDecimal.clamp({
     *   minimum: BigDecimal.unsafeFromString("1"),
     *   maximum: BigDecimal.unsafeFromString("5") }
     * )
     *
     * assert.deepStrictEqual(clamp(BigDecimal.unsafeFromString("3")), BigDecimal.unsafeFromString("3"))
     * assert.deepStrictEqual(clamp(BigDecimal.unsafeFromString("0")), BigDecimal.unsafeFromString("1"))
     * assert.deepStrictEqual(clamp(BigDecimal.unsafeFromString("6")), BigDecimal.unsafeFromString("5"))
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (self: BigDecimal, options: {
        minimum: BigDecimal;
        maximum: BigDecimal;
    }): BigDecimal;
};
/**
 * Returns the minimum between two `BigDecimal`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { min, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(min(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("2"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
export declare const min: {
    /**
     * Returns the minimum between two `BigDecimal`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { min, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(min(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("2"))
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (that: BigDecimal): (self: BigDecimal) => BigDecimal;
    /**
     * Returns the minimum between two `BigDecimal`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { min, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(min(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("2"))
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (self: BigDecimal, that: BigDecimal): BigDecimal;
};
/**
 * Returns the maximum between two `BigDecimal`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { max, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(max(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("3"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
export declare const max: {
    /**
     * Returns the maximum between two `BigDecimal`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { max, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(max(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("3"))
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (that: BigDecimal): (self: BigDecimal) => BigDecimal;
    /**
     * Returns the maximum between two `BigDecimal`s.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { max, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(max(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("3"))
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (self: BigDecimal, that: BigDecimal): BigDecimal;
};
/**
 * Determines the sign of a given `BigDecimal`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { sign, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(sign(unsafeFromString("-5")), -1)
 * assert.deepStrictEqual(sign(unsafeFromString("0")), 0)
 * assert.deepStrictEqual(sign(unsafeFromString("5")), 1)
 * ```
 *
 * @since 2.0.0
 * @category math
 */
export declare const sign: (n: BigDecimal) => Ordering;
/**
 * Determines the absolute value of a given `BigDecimal`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { abs, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(abs(unsafeFromString("-5")), unsafeFromString("5"))
 * assert.deepStrictEqual(abs(unsafeFromString("0")), unsafeFromString("0"))
 * assert.deepStrictEqual(abs(unsafeFromString("5")), unsafeFromString("5"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
export declare const abs: (n: BigDecimal) => BigDecimal;
/**
 * Provides a negate operation on `BigDecimal`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { negate, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(negate(unsafeFromString("3")), unsafeFromString("-3"))
 * assert.deepStrictEqual(negate(unsafeFromString("-6")), unsafeFromString("6"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
export declare const negate: (n: BigDecimal) => BigDecimal;
/**
 * Returns the remainder left over when one operand is divided by a second operand.
 *
 * If the divisor is `0`, the result will be `None`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { BigDecimal, Option } from "effect"
 *
 * assert.deepStrictEqual(BigDecimal.remainder(BigDecimal.unsafeFromString("2"), BigDecimal.unsafeFromString("2")), Option.some(BigDecimal.unsafeFromString("0")))
 * assert.deepStrictEqual(BigDecimal.remainder(BigDecimal.unsafeFromString("3"), BigDecimal.unsafeFromString("2")), Option.some(BigDecimal.unsafeFromString("1")))
 * assert.deepStrictEqual(BigDecimal.remainder(BigDecimal.unsafeFromString("-4"), BigDecimal.unsafeFromString("2")), Option.some(BigDecimal.unsafeFromString("0")))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
export declare const remainder: {
    /**
     * Returns the remainder left over when one operand is divided by a second operand.
     *
     * If the divisor is `0`, the result will be `None`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { BigDecimal, Option } from "effect"
     *
     * assert.deepStrictEqual(BigDecimal.remainder(BigDecimal.unsafeFromString("2"), BigDecimal.unsafeFromString("2")), Option.some(BigDecimal.unsafeFromString("0")))
     * assert.deepStrictEqual(BigDecimal.remainder(BigDecimal.unsafeFromString("3"), BigDecimal.unsafeFromString("2")), Option.some(BigDecimal.unsafeFromString("1")))
     * assert.deepStrictEqual(BigDecimal.remainder(BigDecimal.unsafeFromString("-4"), BigDecimal.unsafeFromString("2")), Option.some(BigDecimal.unsafeFromString("0")))
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (divisor: BigDecimal): (self: BigDecimal) => Option.Option<BigDecimal>;
    /**
     * Returns the remainder left over when one operand is divided by a second operand.
     *
     * If the divisor is `0`, the result will be `None`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { BigDecimal, Option } from "effect"
     *
     * assert.deepStrictEqual(BigDecimal.remainder(BigDecimal.unsafeFromString("2"), BigDecimal.unsafeFromString("2")), Option.some(BigDecimal.unsafeFromString("0")))
     * assert.deepStrictEqual(BigDecimal.remainder(BigDecimal.unsafeFromString("3"), BigDecimal.unsafeFromString("2")), Option.some(BigDecimal.unsafeFromString("1")))
     * assert.deepStrictEqual(BigDecimal.remainder(BigDecimal.unsafeFromString("-4"), BigDecimal.unsafeFromString("2")), Option.some(BigDecimal.unsafeFromString("0")))
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (self: BigDecimal, divisor: BigDecimal): Option.Option<BigDecimal>;
};
/**
 * Returns the remainder left over when one operand is divided by a second operand.
 *
 * Throws a `RangeError` if the divisor is `0`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { unsafeRemainder, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(unsafeRemainder(unsafeFromString("2"), unsafeFromString("2")), unsafeFromString("0"))
 * assert.deepStrictEqual(unsafeRemainder(unsafeFromString("3"), unsafeFromString("2")), unsafeFromString("1"))
 * assert.deepStrictEqual(unsafeRemainder(unsafeFromString("-4"), unsafeFromString("2")), unsafeFromString("0"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
export declare const unsafeRemainder: {
    /**
     * Returns the remainder left over when one operand is divided by a second operand.
     *
     * Throws a `RangeError` if the divisor is `0`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { unsafeRemainder, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(unsafeRemainder(unsafeFromString("2"), unsafeFromString("2")), unsafeFromString("0"))
     * assert.deepStrictEqual(unsafeRemainder(unsafeFromString("3"), unsafeFromString("2")), unsafeFromString("1"))
     * assert.deepStrictEqual(unsafeRemainder(unsafeFromString("-4"), unsafeFromString("2")), unsafeFromString("0"))
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (divisor: BigDecimal): (self: BigDecimal) => BigDecimal;
    /**
     * Returns the remainder left over when one operand is divided by a second operand.
     *
     * Throws a `RangeError` if the divisor is `0`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { unsafeRemainder, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(unsafeRemainder(unsafeFromString("2"), unsafeFromString("2")), unsafeFromString("0"))
     * assert.deepStrictEqual(unsafeRemainder(unsafeFromString("3"), unsafeFromString("2")), unsafeFromString("1"))
     * assert.deepStrictEqual(unsafeRemainder(unsafeFromString("-4"), unsafeFromString("2")), unsafeFromString("0"))
     * ```
     *
     * @since 2.0.0
     * @category math
     */
    (self: BigDecimal, divisor: BigDecimal): BigDecimal;
};
/**
 * @category instances
 * @since 2.0.0
 */
export declare const Equivalence: equivalence.Equivalence<BigDecimal>;
/**
 * Checks if two `BigDecimal`s are equal.
 *
 * @since 2.0.0
 * @category predicates
 */
export declare const equals: {
    /**
     * Checks if two `BigDecimal`s are equal.
     *
     * @since 2.0.0
     * @category predicates
     */
    (that: BigDecimal): (self: BigDecimal) => boolean;
    /**
     * Checks if two `BigDecimal`s are equal.
     *
     * @since 2.0.0
     * @category predicates
     */
    (self: BigDecimal, that: BigDecimal): boolean;
};
/**
 * Creates a `BigDecimal` from a `bigint` value.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromBigInt: (n: bigint) => BigDecimal;
/**
 * Creates a `BigDecimal` from a `number` value.
 *
 * It is not recommended to convert a floating point number to a decimal directly,
 * as the floating point representation may be unexpected.
 *
 * Throws a `RangeError` if the number is not finite (`NaN`, `+Infinity` or `-Infinity`).
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { unsafeFromNumber, make } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(unsafeFromNumber(123), make(123n, 0))
 * assert.deepStrictEqual(unsafeFromNumber(123.456), make(123456n, 3))
 * ```
 *
 * @since 3.11.0
 * @category constructors
 */
export declare const unsafeFromNumber: (n: number) => BigDecimal;
/**
 * Creates a `BigDecimal` from a `number` value.
 *
 * It is not recommended to convert a floating point number to a decimal directly,
 * as the floating point representation may be unexpected.
 *
 * Throws a `RangeError` if the number is not finite (`NaN`, `+Infinity` or `-Infinity`).
 *
 * @since 2.0.0
 * @category constructors
 * @deprecated Use {@link unsafeFromNumber} instead.
 */
export declare const fromNumber: (n: number) => BigDecimal;
/**
 * Creates a `BigDecimal` from a `number` value.
 *
 * It is not recommended to convert a floating point number to a decimal directly,
 * as the floating point representation may be unexpected.
 *
 * Returns `None` if the number is not finite (`NaN`, `+Infinity` or `-Infinity`).
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { BigDecimal, Option } from "effect"
 *
 * assert.deepStrictEqual(BigDecimal.safeFromNumber(123), Option.some(BigDecimal.make(123n, 0)))
 * assert.deepStrictEqual(BigDecimal.safeFromNumber(123.456), Option.some(BigDecimal.make(123456n, 3)))
 * assert.deepStrictEqual(BigDecimal.safeFromNumber(Infinity), Option.none())
 * ```
 *
 * @since 3.11.0
 * @category constructors
 */
export declare const safeFromNumber: (n: number) => Option.Option<BigDecimal>;
/**
 * Parses a numerical `string` into a `BigDecimal`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { BigDecimal, Option } from "effect"
 *
 * assert.deepStrictEqual(BigDecimal.fromString("123"), Option.some(BigDecimal.make(123n, 0)))
 * assert.deepStrictEqual(BigDecimal.fromString("123.456"), Option.some(BigDecimal.make(123456n, 3)))
 * assert.deepStrictEqual(BigDecimal.fromString("123.abc"), Option.none())
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromString: (s: string) => Option.Option<BigDecimal>;
/**
 * Parses a numerical `string` into a `BigDecimal`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { unsafeFromString, make } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(unsafeFromString("123"), make(123n, 0))
 * assert.deepStrictEqual(unsafeFromString("123.456"), make(123456n, 3))
 * assert.throws(() => unsafeFromString("123.abc"))
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const unsafeFromString: (s: string) => BigDecimal;
/**
 * Formats a given `BigDecimal` as a `string`.
 *
 * If the scale of the `BigDecimal` is greater than or equal to 16, the `BigDecimal` will
 * be formatted in scientific notation.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { format, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(format(unsafeFromString("-5")), "-5")
 * assert.deepStrictEqual(format(unsafeFromString("123.456")), "123.456")
 * assert.deepStrictEqual(format(unsafeFromString("-0.00000123")), "-0.00000123")
 * ```
 *
 * @since 2.0.0
 * @category conversions
 */
export declare const format: (n: BigDecimal) => string;
/**
 * Formats a given `BigDecimal` as a `string` in scientific notation.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { toExponential, make } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(toExponential(make(123456n, -5)), "1.23456e+10")
 * ```
 *
 * @since 3.11.0
 * @category conversions
 */
export declare const toExponential: (n: BigDecimal) => string;
/**
 * Converts a `BigDecimal` to a `number`.
 *
 * This function will produce incorrect results if the `BigDecimal` exceeds the 64-bit range of a `number`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { unsafeToNumber, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(unsafeToNumber(unsafeFromString("123.456")), 123.456)
 * ```
 *
 * @since 2.0.0
 * @category conversions
 */
export declare const unsafeToNumber: (n: BigDecimal) => number;
/**
 * Checks if a given `BigDecimal` is an integer.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isInteger, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(isInteger(unsafeFromString("0")), true)
 * assert.deepStrictEqual(isInteger(unsafeFromString("1")), true)
 * assert.deepStrictEqual(isInteger(unsafeFromString("1.1")), false)
 * ```
 *
 * @since 2.0.0
 * @category predicates
 */
export declare const isInteger: (n: BigDecimal) => boolean;
/**
 * Checks if a given `BigDecimal` is `0`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isZero, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(isZero(unsafeFromString("0")), true)
 * assert.deepStrictEqual(isZero(unsafeFromString("1")), false)
 * ```
 *
 * @since 2.0.0
 * @category predicates
 */
export declare const isZero: (n: BigDecimal) => boolean;
/**
 * Checks if a given `BigDecimal` is negative.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isNegative, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(isNegative(unsafeFromString("-1")), true)
 * assert.deepStrictEqual(isNegative(unsafeFromString("0")), false)
 * assert.deepStrictEqual(isNegative(unsafeFromString("1")), false)
 * ```
 *
 * @since 2.0.0
 * @category predicates
 */
export declare const isNegative: (n: BigDecimal) => boolean;
/**
 * Checks if a given `BigDecimal` is positive.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isPositive, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(isPositive(unsafeFromString("-1")), false)
 * assert.deepStrictEqual(isPositive(unsafeFromString("0")), false)
 * assert.deepStrictEqual(isPositive(unsafeFromString("1")), true)
 * ```
 *
 * @since 2.0.0
 * @category predicates
 */
export declare const isPositive: (n: BigDecimal) => boolean;
/**
 * Calculate the ceiling of a `BigDecimal` at the given scale.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { ceil, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(ceil(unsafeFromString("145"), -1), unsafeFromString("150"))
 * assert.deepStrictEqual(ceil(unsafeFromString("-14.5")), unsafeFromString("-14"))
 * ```
 *
 * @since 3.16.0
 * @category math
 */
export declare const ceil: {
    /**
     * Calculate the ceiling of a `BigDecimal` at the given scale.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { ceil, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(ceil(unsafeFromString("145"), -1), unsafeFromString("150"))
     * assert.deepStrictEqual(ceil(unsafeFromString("-14.5")), unsafeFromString("-14"))
     * ```
     *
     * @since 3.16.0
     * @category math
     */
    (scale: number): (self: BigDecimal) => BigDecimal;
    /**
     * Calculate the ceiling of a `BigDecimal` at the given scale.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { ceil, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(ceil(unsafeFromString("145"), -1), unsafeFromString("150"))
     * assert.deepStrictEqual(ceil(unsafeFromString("-14.5")), unsafeFromString("-14"))
     * ```
     *
     * @since 3.16.0
     * @category math
     */
    (self: BigDecimal, scale?: number): BigDecimal;
};
/**
 * Calculate the floor of a `BigDecimal` at the given scale.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { floor, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(floor(unsafeFromString("145"), -1), unsafeFromString("140"))
 * assert.deepStrictEqual(floor(unsafeFromString("-14.5")), unsafeFromString("-15"))
 * ```
 *
 * @since 3.16.0
 * @category math
 */
export declare const floor: {
    /**
     * Calculate the floor of a `BigDecimal` at the given scale.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { floor, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(floor(unsafeFromString("145"), -1), unsafeFromString("140"))
     * assert.deepStrictEqual(floor(unsafeFromString("-14.5")), unsafeFromString("-15"))
     * ```
     *
     * @since 3.16.0
     * @category math
     */
    (scale: number): (self: BigDecimal) => BigDecimal;
    /**
     * Calculate the floor of a `BigDecimal` at the given scale.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { floor, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(floor(unsafeFromString("145"), -1), unsafeFromString("140"))
     * assert.deepStrictEqual(floor(unsafeFromString("-14.5")), unsafeFromString("-15"))
     * ```
     *
     * @since 3.16.0
     * @category math
     */
    (self: BigDecimal, scale?: number): BigDecimal;
};
/**
 * Truncate a `BigDecimal` at the given scale. This is the same operation as rounding away from zero.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { truncate, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(truncate(unsafeFromString("145"), -1), unsafeFromString("140"))
 * assert.deepStrictEqual(truncate(unsafeFromString("-14.5")), unsafeFromString("-14"))
 * ```
 *
 * @since 3.16.0
 * @category math
 */
export declare const truncate: {
    /**
     * Truncate a `BigDecimal` at the given scale. This is the same operation as rounding away from zero.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { truncate, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(truncate(unsafeFromString("145"), -1), unsafeFromString("140"))
     * assert.deepStrictEqual(truncate(unsafeFromString("-14.5")), unsafeFromString("-14"))
     * ```
     *
     * @since 3.16.0
     * @category math
     */
    (scale: number): (self: BigDecimal) => BigDecimal;
    /**
     * Truncate a `BigDecimal` at the given scale. This is the same operation as rounding away from zero.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { truncate, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(truncate(unsafeFromString("145"), -1), unsafeFromString("140"))
     * assert.deepStrictEqual(truncate(unsafeFromString("-14.5")), unsafeFromString("-14"))
     * ```
     *
     * @since 3.16.0
     * @category math
     */
    (self: BigDecimal, scale?: number): BigDecimal;
};
/**
 * Rounding modes for `BigDecimal`.
 *
 * `ceil`: round towards positive infinity
 * `floor`: round towards negative infinity
 * `to-zero`: round towards zero
 * `from-zero`: round away from zero
 * `half-ceil`: round to the nearest neighbor; if equidistant round towards positive infinity
 * `half-floor`: round to the nearest neighbor; if equidistant round towards negative infinity
 * `half-to-zero`: round to the nearest neighbor; if equidistant round towards zero
 * `half-from-zero`: round to the nearest neighbor; if equidistant round away from zero
 * `half-even`: round to the nearest neighbor; if equidistant round to the neighbor with an even digit
 * `half-odd`: round to the nearest neighbor; if equidistant round to the neighbor with an odd digit
 *
 * @since 3.16.0
 * @category math
 */
export type RoundingMode = "ceil" | "floor" | "to-zero" | "from-zero" | "half-ceil" | "half-floor" | "half-to-zero" | "half-from-zero" | "half-even" | "half-odd";
/**
 * Rounds a `BigDecimal` at the given scale with the specified rounding mode.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { round, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(round(unsafeFromString("145"), { mode: "from-zero", scale: -1 }), unsafeFromString("150"))
 * assert.deepStrictEqual(round(unsafeFromString("-14.5")), unsafeFromString("-15"))
 * ```
 *
 * @since 3.16.0
 * @category math
 */
export declare const round: {
    /**
     * Rounds a `BigDecimal` at the given scale with the specified rounding mode.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { round, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(round(unsafeFromString("145"), { mode: "from-zero", scale: -1 }), unsafeFromString("150"))
     * assert.deepStrictEqual(round(unsafeFromString("-14.5")), unsafeFromString("-15"))
     * ```
     *
     * @since 3.16.0
     * @category math
     */
    (options: {
        scale?: number;
        mode?: RoundingMode;
    }): (self: BigDecimal) => BigDecimal;
    /**
     * Rounds a `BigDecimal` at the given scale with the specified rounding mode.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import { round, unsafeFromString } from "effect/BigDecimal"
     *
     * assert.deepStrictEqual(round(unsafeFromString("145"), { mode: "from-zero", scale: -1 }), unsafeFromString("150"))
     * assert.deepStrictEqual(round(unsafeFromString("-14.5")), unsafeFromString("-15"))
     * ```
     *
     * @since 3.16.0
     * @category math
     */
    (n: BigDecimal, options?: {
        scale?: number;
        mode?: RoundingMode;
    }): BigDecimal;
};
/**
 * Takes an `Iterable` of `BigDecimal`s and returns their sum as a single `BigDecimal`
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { unsafeFromString, sumAll } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(sumAll([unsafeFromString("2"), unsafeFromString("3"), unsafeFromString("4")]), unsafeFromString("9"))
 * ```
 *
 * @category math
 * @since 3.16.0
 */
export declare const sumAll: (collection: Iterable<BigDecimal>) => BigDecimal;
//# sourceMappingURL=BigDecimal.d.ts.map