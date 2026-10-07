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
import { dual } from "./Function.js";
import * as Option from "./Option.js";
import * as order from "./Order.js";
import * as predicate from "./Predicate.js";
const bigint0 = /*#__PURE__*/BigInt(0);
const bigint1 = /*#__PURE__*/BigInt(1);
const bigint2 = /*#__PURE__*/BigInt(2);
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
export const isBigInt = predicate.isBigInt;
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
export const sum = /*#__PURE__*/dual(2, (self, that) => self + that);
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
export const multiply = /*#__PURE__*/dual(2, (self, that) => self * that);
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
export const subtract = /*#__PURE__*/dual(2, (self, that) => self - that);
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
export const divide = /*#__PURE__*/dual(2, (self, that) => that === bigint0 ? Option.none() : Option.some(self / that));
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
export const unsafeDivide = /*#__PURE__*/dual(2, (self, that) => self / that);
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
export const increment = n => n + bigint1;
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
export const decrement = n => n - bigint1;
/**
 * @category instances
 * @since 2.0.0
 */
export const Equivalence = equivalence.bigint;
/**
 * @category instances
 * @since 2.0.0
 */
export const Order = order.bigint;
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
export const lessThan = /*#__PURE__*/order.lessThan(Order);
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
export const lessThanOrEqualTo = /*#__PURE__*/order.lessThanOrEqualTo(Order);
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
export const greaterThan = /*#__PURE__*/order.greaterThan(Order);
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
export const greaterThanOrEqualTo = /*#__PURE__*/order.greaterThanOrEqualTo(Order);
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
export const between = /*#__PURE__*/order.between(Order);
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
export const clamp = /*#__PURE__*/order.clamp(Order);
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
export const min = /*#__PURE__*/order.min(Order);
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
export const max = /*#__PURE__*/order.max(Order);
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
export const sign = n => Order(n, bigint0);
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
export const abs = n => n < bigint0 ? -n : n;
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
export const gcd = /*#__PURE__*/dual(2, (self, that) => {
  while (that !== bigint0) {
    const t = that;
    that = self % that;
    self = t;
  }
  return self;
});
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
export const lcm = /*#__PURE__*/dual(2, (self, that) => self * that / gcd(self, that));
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
export const unsafeSqrt = n => {
  if (n < bigint0) {
    throw new RangeError("Cannot take the square root of a negative number");
  }
  if (n < bigint2) {
    return n;
  }
  let x = n / bigint2;
  while (x * x > n) {
    x = (n / x + x) / bigint2;
  }
  return x;
};
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
export const sqrt = n => greaterThanOrEqualTo(n, bigint0) ? Option.some(unsafeSqrt(n)) : Option.none();
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
export const sumAll = collection => {
  let out = bigint0;
  for (const n of collection) {
    out += n;
  }
  return out;
};
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
export const multiplyAll = collection => {
  let out = bigint1;
  for (const n of collection) {
    if (n === bigint0) {
      return bigint0;
    }
    out *= n;
  }
  return out;
};
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
export const toNumber = b => {
  if (b > BigInt(Number.MAX_SAFE_INTEGER) || b < BigInt(Number.MIN_SAFE_INTEGER)) {
    return Option.none();
  }
  return Option.some(Number(b));
};
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
export const fromString = s => {
  try {
    return s.trim() === "" ? Option.none() : Option.some(BigInt(s));
  } catch {
    return Option.none();
  }
};
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
export const fromNumber = n => {
  if (n > Number.MAX_SAFE_INTEGER || n < Number.MIN_SAFE_INTEGER) {
    return Option.none();
  }
  try {
    return Option.some(BigInt(n));
  } catch {
    return Option.none();
  }
};
//# sourceMappingURL=BigInt.js.map