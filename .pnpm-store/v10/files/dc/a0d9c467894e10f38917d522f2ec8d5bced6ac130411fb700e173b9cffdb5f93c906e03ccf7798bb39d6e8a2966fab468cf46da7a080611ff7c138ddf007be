/**
 * # Number
 *
 * This module provides utility functions and type class instances for working
 * with the `number` type in TypeScript. It includes functions for basic
 * arithmetic operations, as well as type class instances for `Equivalence` and
 * `Order`.
 *
 * ## Operations Reference
 *
 * | Category     | Operation                                  | Description                                             | Domain                         | Co-domain             |
 * | ------------ | ------------------------------------------ | ------------------------------------------------------- | ------------------------------ | --------------------- |
 * | constructors | {@link module:Number.parse}                | Safely parses a string to a number                      | `string`                       | `Option<number>`      |
 * |              |                                            |                                                         |                                |                       |
 * | math         | {@link module:Number.sum}                  | Adds two numbers                                        | `number`, `number`             | `number`              |
 * | math         | {@link module:Number.sumAll}               | Sums all numbers in a collection                        | `Iterable<number>`             | `number`              |
 * | math         | {@link module:Number.subtract}             | Subtracts one number from another                       | `number`, `number`             | `number`              |
 * | math         | {@link module:Number.multiply}             | Multiplies two numbers                                  | `number`, `number`             | `number`              |
 * | math         | {@link module:Number.multiplyAll}          | Multiplies all numbers in a collection                  | `Iterable<number>`             | `number`              |
 * | math         | {@link module:Number.divide}               | Safely divides handling division by zero                | `number`, `number`             | `Option<number>`      |
 * | math         | {@link module:Number.unsafeDivide}         | Divides but misbehaves for division by zero             | `number`, `number`             | `number`              |
 * | math         | {@link module:Number.remainder}            | Calculates remainder of division                        | `number`, `number`             | `number`              |
 * | math         | {@link module:Number.increment}            | Adds 1 to a number                                      | `number`                       | `number`              |
 * | math         | {@link module:Number.decrement}            | Subtracts 1 from a number                               | `number`                       | `number`              |
 * | math         | {@link module:Number.sign}                 | Determines the sign of a number                         | `number`                       | `Ordering`            |
 * | math         | {@link module:Number.nextPow2}             | Finds the next power of 2                               | `number`                       | `number`              |
 * | math         | {@link module:Number.round}                | Rounds a number with specified precision                | `number`, `number`             | `number`              |
 * |              |                                            |                                                         |                                |                       |
 * | predicates   | {@link module:Number.between}              | Checks if a number is in a range                        | `number`, `{minimum, maximum}` | `boolean`             |
 * | predicates   | {@link module:Number.lessThan}             | Checks if one number is less than another               | `number`, `number`             | `boolean`             |
 * | predicates   | {@link module:Number.lessThanOrEqualTo}    | Checks if one number is less than or equal              | `number`, `number`             | `boolean`             |
 * | predicates   | {@link module:Number.greaterThan}          | Checks if one number is greater than another            | `number`, `number`             | `boolean`             |
 * | predicates   | {@link module:Number.greaterThanOrEqualTo} | Checks if one number is greater or equal                | `number`, `number`             | `boolean`             |
 * |              |                                            |                                                         |                                |                       |
 * | guards       | {@link module:Number.isNumber}             | Type guard for JavaScript numbers                       | `unknown`                      | `boolean`             |
 * |              |                                            |                                                         |                                |                       |
 * | comparison   | {@link module:Number.min}                  | Returns the minimum of two numbers                      | `number`, `number`             | `number`              |
 * | comparison   | {@link module:Number.max}                  | Returns the maximum of two numbers                      | `number`, `number`             | `number`              |
 * | comparison   | {@link module:Number.clamp}                | Restricts a number to a range                           | `number`, `{minimum, maximum}` | `number`              |
 * |              |                                            |                                                         |                                |                       |
 * | instances    | {@link module:Number.Equivalence}          | Equivalence instance for numbers                        |                                | `Equivalence<number>` |
 * | instances    | {@link module:Number.Order}                | Order instance for numbers                              |                                | `Order<number>`       |
 * |              |                                            |                                                         |                                |                       |
 * | errors       | {@link module:Number.DivisionByZeroError}  | Error thrown by unsafeDivide                            |                                |                       |
 *
 * ## Composition Patterns and Type Safety
 *
 * When building function pipelines, understanding how types flow through
 * operations is critical:
 *
 * ### Composing with type-preserving operations
 *
 * Most operations in this module are type-preserving (`number → number`),
 * making them easily composable in pipelines:
 *
 * ```ts
 * import { pipe } from "effect"
 * import * as Number from "effect/Number"
 *
 * const result = pipe(
 *   10,
 *   Number.increment, // number → number
 *   Number.multiply(2), // number → number
 *   Number.round(1) // number → number
 * ) // Result: number (21)
 * ```
 *
 * ### Working with Option results
 *
 * Operations that might fail (like division by zero) return Option types and
 * require Option combinators:
 *
 * ```ts
 * import { pipe, Option } from "effect"
 * import * as Number from "effect/Number"
 *
 * const result = pipe(
 *   10,
 *   Number.divide(0), // number → Option<number>
 *   Option.getOrElse(() => 0) // Option<number> → number
 * ) // Result: number (0)
 * ```
 *
 * ### Composition best practices
 *
 * - Chain type-preserving operations for maximum composability
 * - Use Option combinators when working with potentially failing operations
 * - Consider using Effect for operations that might fail with specific errors
 * - Remember that all operations maintain JavaScript's floating-point precision
 *   limitations
 *
 * @module Number
 * @since 2.0.0
 * @see {@link module:BigInt} for more similar operations on `bigint` types
 * @see {@link module:BigDecimal} for more similar operations on `BigDecimal` types
 */
import * as equivalence from "./Equivalence.js";
import type { Option } from "./Option.js";
import * as order from "./Order.js";
import type { Ordering } from "./Ordering.js";
/**
 * Type guard that tests if a value is a member of the set of JavaScript
 * numbers.
 *
 * @memberof Number
 * @since 2.0.0
 * @category guards
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import * as Number from "effect/Number"
 *
 * // Regular numbers
 * assert.equal(Number.isNumber(2), true)
 * assert.equal(Number.isNumber(-3.14), true)
 * assert.equal(Number.isNumber(0), true)
 *
 * // Special numeric values
 * assert.equal(Number.isNumber(Infinity), true)
 * assert.equal(Number.isNumber(NaN), true)
 *
 * // Non-number values
 * assert.equal(Number.isNumber("2"), false)
 * assert.equal(Number.isNumber(true), false)
 * assert.equal(Number.isNumber(null), false)
 * assert.equal(Number.isNumber(undefined), false)
 * assert.equal(Number.isNumber({}), false)
 * assert.equal(Number.isNumber([]), false)
 *
 * // Using as a type guard in conditionals
 * function processValue(value: unknown): string {
 *   if (Number.isNumber(value)) {
 *     // TypeScript now knows 'value' is a number
 *     return `Numeric value: ${value.toFixed(2)}`
 *   }
 *   return "Not a number"
 * }
 *
 * assert.strictEqual(processValue(42), "Numeric value: 42.00")
 * assert.strictEqual(processValue("hello"), "Not a number")
 *
 * // Filtering for numbers in an array
 * const mixed = [1, "two", 3, false, 5]
 * const onlyNumbers = mixed.filter(Number.isNumber)
 * assert.equal(onlyNumbers, [1, 3, 5])
 * ```
 *
 * @param input - The value to test for membership in the set of JavaScript
 *   numbers
 *
 * @returns `true` if the input is a JavaScript number, `false` otherwise
 */
export declare const isNumber: (input: unknown) => input is number;
/**
 * Returns the additive inverse of a number, effectively negating it.
 *
 * @memberof Number
 * @since 3.14.6
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { pipe } from "effect"
 * import * as Number from "effect/Number"
 *
 * assert.equal(
 *   Number.negate(5), //
 *   -5
 * )
 *
 * assert.equal(
 *   Number.negate(-5), //
 *   5
 * )
 *
 * assert.equal(
 *   Number.negate(0), //
 *   0
 * )
 * ```
 *
 * @param n - The number value to be negated.
 *
 * @returns The negated number value.
 */
export declare const negate: (n: number) => number;
/**
 * Performs addition in the set of JavaScript numbers.
 *
 * @memberof Number
 * @since 2.0.0
 * @category math
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { pipe } from "effect"
 * import * as Number from "effect/Number"
 *
 * // Data-first style (direct application)
 * assert.equal(Number.sum(2, 3), 5)
 * assert.equal(Number.sum(-10, 5), -5)
 * assert.equal(Number.sum(0.1, 0.2), 0.30000000000000004) // Note: floating-point precision limitation
 *
 * // Data-last style (pipeable)
 * assert.equal(
 *   pipe(
 *     10,
 *     Number.sum(5) // 10 + 5 = 15
 *   ),
 *   15
 * )
 *
 * // Chaining multiple additions
 * assert.equal(
 *   pipe(
 *     1,
 *     Number.sum(2), // 1 + 2 = 3
 *     Number.sum(3), // 3 + 3 = 6
 *     Number.sum(4) // 6 + 4 = 10
 *   ),
 *   10
 * )
 *
 * // Identity property: a + 0 = a
 * assert.equal(Number.sum(42, 0), 42)
 *
 * // Commutative property: a + b = b + a
 * assert.equal(Number.sum(5, 3), Number.sum(3, 5))
 * ```
 */
export declare const sum: {
    /**
     * Returns a function that adds a specified number to its argument.
     *
     * @param that - The number to add to the input of the resulting function
     *
     * @returns A function that takes a number and returns the sum of that number
     *   and `that`
     */
    (that: number): (self: number) => number;
    /**
     * Adds two numbers together.
     *
     * @param self - The first addend
     * @param that - The second addend
     *
     * @returns The sum of the two numbers
     */
    (self: number, that: number): number;
};
/**
 * Computes the sum of all elements in an iterable collection of numbers.
 *
 * @memberof Number
 * @since 2.0.0
 * @category math
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import * as Number from "effect/Number"
 *
 * // Basic sums
 * assert.equal(Number.sumAll([2, 3, 4]), 9) // 2 + 3 + 4 = 9
 * assert.equal(Number.sumAll([1.1, 2.2, 3.3]), 6.6) // 1.1 + 2.2 + 3.3 = 6.6
 *
 * // Empty collection returns the additive identity (0)
 * assert.equal(Number.sumAll([]), 0)
 *
 * // Single element collection
 * assert.equal(Number.sumAll([42]), 42)
 *
 * // Sums with negative numbers
 * assert.equal(Number.sumAll([2, -3, 4]), 3) // 2 + (-3) + 4 = 3
 * assert.equal(Number.sumAll([-2, -3, -4]), -9) // (-2) + (-3) + (-4) = -9
 *
 * // Works with any iterable
 * assert.equal(Number.sumAll(new Set([2, 3, 4])), 9)
 *
 * // Using with generated sequences
 * function* range(start: number, end: number) {
 *   for (let i = start; i <= end; i++) yield i
 * }
 *
 * // Compute sum of first 5 natural numbers: 1 + 2 + 3 + 4 + 5 = 15
 * assert.equal(Number.sumAll(range(1, 5)), 15)
 *
 * // Floating point precision example
 * assert.equal(
 *   Number.sumAll([0.1, 0.2]),
 *   0.30000000000000004 // Note IEEE 754 precision limitation
 * )
 * ```
 *
 * @param collection - An `iterable` containing the `numbers` to sum
 *
 * @returns The sum of all numbers in the collection, or 0 if the collection is
 *   empty
 */
export declare const sumAll: (collection: Iterable<number>) => number;
/**
 * Performs subtraction in the set of JavaScript numbers.
 *
 * @memberof Number
 * @since 2.0.0
 * @category math
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { pipe } from "effect"
 * import * as Number from "effect/Number"
 *
 * // Data-first style (direct application)
 * assert.equal(Number.subtract(2, 3), -1) // 2 - 3 = -1
 * assert.equal(Number.subtract(10, 5), 5) // 10 - 5 = 5
 * assert.equal(Number.subtract(0.3, 0.1), 0.19999999999999998) // Note: floating-point precision limitation
 *
 * // Data-last style (pipeable)
 * assert.equal(
 *   pipe(
 *     10,
 *     Number.subtract(5) // 10 - 5 = 5
 *   ),
 *   5
 * )
 *
 * // Chaining multiple subtractions
 * assert.equal(
 *   pipe(
 *     20,
 *     Number.subtract(5), // 20 - 5 = 15
 *     Number.subtract(3), // 15 - 3 = 12
 *     Number.subtract(2) // 12 - 2 = 10
 *   ),
 *   10
 * )
 *
 * // Right identity property: a - 0 = a
 * assert.equal(Number.subtract(42, 0), 42)
 *
 * // Self-annihilation property: a - a = 0
 * assert.equal(Number.subtract(42, 42), 0)
 *
 * // Non-commutative property: a - b ≠ b - a
 * assert.equal(Number.subtract(5, 3), 2) // 5 - 3 = 2
 * assert.equal(Number.subtract(3, 5), -2) // 3 - 5 = -2
 *
 * // Inverse relation: a - b = -(b - a)
 * assert.equal(Number.subtract(5, 3), -Number.subtract(3, 5))
 * ```
 */
export declare const subtract: {
    /**
     * Returns a function that subtracts a specified number from its argument.
     *
     * @param subtrahend - The number to subtract from the input of the resulting
     *   function
     *
     * @returns A function that takes a minuend and returns the difference of
     *   subtracting the subtrahend from it
     */
    (subtrahend: number): (minuend: number) => number;
    /**
     * Subtracts the subtrahend from the minuend and returns the difference.
     *
     * @param minuend - The number from which another number is to be subtracted
     * @param subtrahend - The number to subtract from the minuend
     *
     * @returns The difference of the minuend minus the subtrahend
     */
    (minuend: number, subtrahend: number): number;
};
/**
 * Performs **multiplication** in the set of JavaScript numbers.
 *
 * @memberof Number
 * @since 2.0.0
 * @category math
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { pipe } from "effect"
 * import * as Number from "effect/Number"
 *
 * // Data-first style (direct application)
 * assert.equal(Number.multiply(2, 3), 6) // 2 × 3 = 6
 * assert.equal(Number.multiply(-4, 5), -20) // (-4) × 5 = -20
 * assert.equal(Number.multiply(-3, -2), 6) // (-3) × (-2) = 6
 * assert.equal(Number.multiply(0.1, 0.2), 0.020000000000000004) // Note: floating-point precision limitation
 *
 * // Data-last style (pipeable)
 * assert.equal(
 *   pipe(
 *     10,
 *     Number.multiply(5) // 10 × 5 = 50
 *   ),
 *   50
 * )
 *
 * // Chaining multiple multiplications
 * assert.equal(
 *   pipe(
 *     2,
 *     Number.multiply(3), // 2 × 3 = 6
 *     Number.multiply(4), // 6 × 4 = 24
 *     Number.multiply(0.5) // 24 × 0.5 = 12
 *   ),
 *   12
 * )
 *
 * // Identity property: a × 1 = a
 * assert.equal(Number.multiply(42, 1), 42)
 *
 * // Zero property: a × 0 = 0
 * assert.equal(Number.multiply(42, 0), 0)
 *
 * // Commutative property: a × b = b × a
 * assert.equal(Number.multiply(5, 3), Number.multiply(3, 5))
 *
 * // Associative property: (a × b) × c = a × (b × c)
 * const a = 2,
 *   b = 3,
 *   c = 4
 * assert.equal(
 *   Number.multiply(Number.multiply(a, b), c),
 *   Number.multiply(a, Number.multiply(b, c))
 * )
 * ```
 */
export declare const multiply: {
    /**
     * Returns a function that multiplies a specified number with its argument.
     *
     * @param multiplicand - The number to multiply with the input of the
     *   resulting function
     *
     * @returns A function that takes a multiplier and returns the product of that
     *   multiplier and the multiplicand
     */
    (multiplicand: number): (multiplier: number) => number;
    /**
     * Multiplies two numbers together.
     *
     * @param multiplier - The first factor
     * @param multiplicand - The second factor
     *
     * @returns The product of the two numbers
     */
    (multiplier: number, multiplicand: number): number;
};
/**
 * Computes the product of all elements in an iterable collection of numbers.
 *
 * @memberof Number
 * @since 2.0.0
 * @category math
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import * as Number from "effect/Number"
 *
 * // Basic products
 * assert.equal(Number.multiplyAll([2, 3, 4]), 24) // 2 × 3 × 4 = 24
 * assert.equal(Number.multiplyAll([1.5, 2, 3]), 9) // 1.5 × 2 × 3 = 9
 *
 * // Empty collection returns the multiplicative identity (1)
 * assert.equal(Number.multiplyAll([]), 1)
 *
 * // Single element collection
 * assert.equal(Number.multiplyAll([42]), 42)
 *
 * // Products with negative numbers
 * assert.equal(Number.multiplyAll([2, -3, 4]), -24) // 2 × (-3) × 4 = -24
 * assert.equal(Number.multiplyAll([-2, -3]), 6) // (-2) × (-3) = 6
 *
 * // Zero property - if any element is zero, product is zero
 * assert.equal(Number.multiplyAll([2, 0, 3]), 0)
 *
 * // Works with any iterable
 * assert.equal(Number.multiplyAll(new Set([2, 3, 4])), 24)
 *
 * // Using with generated sequences
 * function* range(start: number, end: number) {
 *   for (let i = start; i <= end; i++) yield i
 * }
 *
 * // Compute factorial: 5! = 5 × 4 × 3 × 2 × 1 = 120
 * assert.equal(Number.multiplyAll(range(1, 5)), 120)
 * ```
 *
 * @param collection - An `iterable` containing the `numbers` to multiply
 *
 * @returns The product of all numbers in the collection, or 1 if the collection
 *   is empty
 */
export declare const multiplyAll: (collection: Iterable<number>) => number;
/**
 * Performs division in the set of JavaScript numbers, returning the result
 * wrapped in an `Option` to handle division by zero.
 *
 * @memberof Number
 * @since 2.0.0
 * @category math
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { pipe, Option } from "effect"
 * import * as Number from "effect/Number"
 *
 * // Data-first style (direct application)
 * assert.equal(Number.divide(6, 3), Option.some(2)) // 6 ÷ 3 = 2
 * assert.equal(Number.divide(-8, 4), Option.some(-2)) // (-8) ÷ 4 = -2
 * assert.equal(Number.divide(-10, -5), Option.some(2)) // (-10) ÷ (-5) = 2
 * assert.equal(Number.divide(1, 3), Option.some(0.3333333333333333)) // Note: floating-point approximation
 *
 * // Handling division by zero
 * assert.equal(Number.divide(6, 0), Option.none()) // 6 ÷ 0 is undefined
 *
 * // Data-last style (pipeable)
 * assert.equal(
 *   pipe(
 *     10,
 *     Number.divide(2) // 10 ÷ 2 = 5
 *   ),
 *   Option.some(5)
 * )
 *
 * // Chaining multiple divisions using Option combinators
 * assert.equal(
 *   pipe(
 *     Option.some(24),
 *     Option.flatMap((n) => Number.divide(n, 2)), // 24 ÷ 2 = 12
 *     Option.flatMap(Number.divide(3)), // 12 ÷ 3 = 4
 *     Option.flatMap(Number.divide(2)) // 4 ÷ 2 = 2
 *   ),
 *   Option.some(2)
 * )
 *
 * // Division-by-one property: a ÷ 1 = a
 * assert.equal(Number.divide(42, 1), Option.some(42))
 *
 * // Self-division property: a ÷ a = 1 (for a ≠ 0)
 * assert.equal(Number.divide(42, 42), Option.some(1))
 *
 * // Non-commutative property: a ÷ b ≠ b ÷ a
 * assert.notDeepStrictEqual(
 *   Number.divide(6, 3), // 6 ÷ 3 = 2
 *   Number.divide(3, 6) // 3 ÷ 6 = 0.5
 * )
 * ```
 */
export declare const divide: {
    /**
     * Returns a function that divides its input by a specified divisor.
     *
     * @param divisor - The number to divide by
     *
     * @returns A function that takes a dividend and returns the quotient wrapped
     *   in an Option (Option.none() if divisor is 0)
     */
    (divisor: number): (dividend: number) => Option<number>;
    /**
     * Divides the dividend by the divisor and returns the quotient wrapped in an
     * Option.
     *
     * @param dividend - The number to be divided
     * @param divisor - The number to divide by
     *
     * @returns Some(quotient) if the divisor is not 0, None otherwise
     */
    (dividend: number, divisor: number): Option<number>;
};
/**
 * Performs division in the set of JavaScript numbers, but misbehaves for
 * division by zero.
 *
 * Unlike {@link module:Number.divide} which returns an Option, this function
 * directly returns a number or `Infinity` or `NaN`.
 *
 * - If the `divisor` is zero, it returns `Infinity`.
 * - If both the `dividend` and the `divisor` are zero, then it returns `NaN`.
 *
 * @memberof Number
 * @since 2.0.0
 * @category math
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { pipe } from "effect"
 * import * as Number from "effect/Number"
 *
 * // Data-first style (direct application)
 * assert.equal(Number.unsafeDivide(6, 3), 2) // 6 ÷ 3 = 2
 * assert.equal(Number.unsafeDivide(-8, 4), -2) // (-8) ÷ 4 = -2
 * assert.equal(Number.unsafeDivide(-10, -5), 2) // (-10) ÷ (-5) = 2
 * assert.equal(Number.unsafeDivide(1, 3), 0.3333333333333333)
 *
 * // Data-last style (pipeable)
 * assert.equal(
 *   pipe(
 *     10,
 *     Number.unsafeDivide(2) // 10 ÷ 2 = 5
 *   ),
 *   5
 * )
 *
 * // Chaining multiple divisions
 * assert.equal(
 *   pipe(
 *     24,
 *     Number.unsafeDivide(2), // 24 ÷ 2 = 12
 *     Number.unsafeDivide(3), // 12 ÷ 3 = 4
 *     Number.unsafeDivide(2) // 4 ÷ 2 = 2
 *   ),
 *   2
 * )
 *
 * assert.equal(Number.unsafeDivide(6, 0), Infinity)
 *
 * assert.equal(Number.unsafeDivide(0, 0), NaN)
 *
 * // Compare with safe division
 * const safeResult = Number.divide(6, 3) // Option.some(2)
 * const unsafeResult = Number.unsafeDivide(6, 3) // 2 directly
 * ```
 *
 * @throws - An {@link module:Number.DivisionByZeroError} if the divisor is zero.
 * @see {@link module:Number.divide} - Safe division returning an Option
 */
export declare const unsafeDivide: {
    /**
     * Returns a function that divides its input by a specified divisor.
     *
     * @param divisor - The number to divide by
     *
     * @returns A function that takes a dividend and returns the quotient
     * @throws - An {@link module:Number.DivisionByZeroError} if the divisor is
     *   zero
     */
    (divisor: number): (dividend: number) => number;
    /**
     * Divides the dividend by the divisor and returns the quotient.
     *
     * If the divisor is zero, it returns Infinity.
     *
     * @param dividend - The number to be divided
     * @param divisor - The number to divide by
     *
     * @returns The quotient of the division
     */
    (dividend: number, divisor: number): number;
};
/**
 * Returns the result of adding `1` to a given number.
 *
 * @memberof Number
 * @since 2.0.0
 * @category math
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { increment } from "effect/Number"
 *
 * assert.equal(increment(2), 3)
 * ```
 */
export declare const increment: (n: number) => number;
/**
 * Decrements a number by `1`.
 *
 * @memberof Number
 * @since 2.0.0
 * @category math
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { decrement } from "effect/Number"
 *
 * assert.equal(decrement(3), 2)
 * ```
 */
export declare const decrement: (n: number) => number;
/**
 * @memberof Number
 * @since 2.0.0
 * @category instances
 */
export declare const Equivalence: equivalence.Equivalence<number>;
/**
 * @memberof Number
 * @since 2.0.0
 * @category instances
 */
export declare const Order: order.Order<number>;
/**
 * Returns `true` if the first argument is less than the second, otherwise
 * `false`.
 *
 * @memberof Number
 * @since 2.0.0
 * @category predicates
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { lessThan } from "effect/Number"
 *
 * assert.equal(lessThan(2, 3), true)
 * assert.equal(lessThan(3, 3), false)
 * assert.equal(lessThan(4, 3), false)
 * ```
 */
export declare const lessThan: {
    /**
     * Returns `true` if the first argument is less than the second, otherwise
     * `false`.
     *
     * @memberof Number
     * @since 2.0.0
     * @category predicates
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { lessThan } from "effect/Number"
     *
     * assert.equal(lessThan(2, 3), true)
     * assert.equal(lessThan(3, 3), false)
     * assert.equal(lessThan(4, 3), false)
     * ```
     */
    (that: number): (self: number) => boolean;
    /**
     * Returns `true` if the first argument is less than the second, otherwise
     * `false`.
     *
     * @memberof Number
     * @since 2.0.0
     * @category predicates
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { lessThan } from "effect/Number"
     *
     * assert.equal(lessThan(2, 3), true)
     * assert.equal(lessThan(3, 3), false)
     * assert.equal(lessThan(4, 3), false)
     * ```
     */
    (self: number, that: number): boolean;
};
/**
 * Returns a function that checks if a given `number` is less than or equal to
 * the provided one.
 *
 * @memberof Number
 * @since 2.0.0
 * @category predicates
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { lessThanOrEqualTo } from "effect/Number"
 *
 * assert.equal(lessThanOrEqualTo(2, 3), true)
 * assert.equal(lessThanOrEqualTo(3, 3), true)
 * assert.equal(lessThanOrEqualTo(4, 3), false)
 * ```
 */
export declare const lessThanOrEqualTo: {
    /**
     * Returns a function that checks if a given `number` is less than or equal to
     * the provided one.
     *
     * @memberof Number
     * @since 2.0.0
     * @category predicates
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { lessThanOrEqualTo } from "effect/Number"
     *
     * assert.equal(lessThanOrEqualTo(2, 3), true)
     * assert.equal(lessThanOrEqualTo(3, 3), true)
     * assert.equal(lessThanOrEqualTo(4, 3), false)
     * ```
     */
    (that: number): (self: number) => boolean;
    /**
     * Returns a function that checks if a given `number` is less than or equal to
     * the provided one.
     *
     * @memberof Number
     * @since 2.0.0
     * @category predicates
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { lessThanOrEqualTo } from "effect/Number"
     *
     * assert.equal(lessThanOrEqualTo(2, 3), true)
     * assert.equal(lessThanOrEqualTo(3, 3), true)
     * assert.equal(lessThanOrEqualTo(4, 3), false)
     * ```
     */
    (self: number, that: number): boolean;
};
/**
 * Returns `true` if the first argument is greater than the second, otherwise
 * `false`.
 *
 * @memberof Number
 * @since 2.0.0
 * @category predicates
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { greaterThan } from "effect/Number"
 *
 * assert.equal(greaterThan(2, 3), false)
 * assert.equal(greaterThan(3, 3), false)
 * assert.equal(greaterThan(4, 3), true)
 * ```
 */
export declare const greaterThan: {
    /**
     * Returns `true` if the first argument is greater than the second, otherwise
     * `false`.
     *
     * @memberof Number
     * @since 2.0.0
     * @category predicates
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { greaterThan } from "effect/Number"
     *
     * assert.equal(greaterThan(2, 3), false)
     * assert.equal(greaterThan(3, 3), false)
     * assert.equal(greaterThan(4, 3), true)
     * ```
     */
    (that: number): (self: number) => boolean;
    /**
     * Returns `true` if the first argument is greater than the second, otherwise
     * `false`.
     *
     * @memberof Number
     * @since 2.0.0
     * @category predicates
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { greaterThan } from "effect/Number"
     *
     * assert.equal(greaterThan(2, 3), false)
     * assert.equal(greaterThan(3, 3), false)
     * assert.equal(greaterThan(4, 3), true)
     * ```
     */
    (self: number, that: number): boolean;
};
/**
 * Returns a function that checks if a given `number` is greater than or equal
 * to the provided one.
 *
 * @memberof Number
 * @since 2.0.0
 * @category predicates
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { greaterThanOrEqualTo } from "effect/Number"
 *
 * assert.equal(greaterThanOrEqualTo(2, 3), false)
 * assert.equal(greaterThanOrEqualTo(3, 3), true)
 * assert.equal(greaterThanOrEqualTo(4, 3), true)
 * ```
 */
export declare const greaterThanOrEqualTo: {
    /**
     * Returns a function that checks if a given `number` is greater than or equal
     * to the provided one.
     *
     * @memberof Number
     * @since 2.0.0
     * @category predicates
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { greaterThanOrEqualTo } from "effect/Number"
     *
     * assert.equal(greaterThanOrEqualTo(2, 3), false)
     * assert.equal(greaterThanOrEqualTo(3, 3), true)
     * assert.equal(greaterThanOrEqualTo(4, 3), true)
     * ```
     */
    (that: number): (self: number) => boolean;
    /**
     * Returns a function that checks if a given `number` is greater than or equal
     * to the provided one.
     *
     * @memberof Number
     * @since 2.0.0
     * @category predicates
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { greaterThanOrEqualTo } from "effect/Number"
     *
     * assert.equal(greaterThanOrEqualTo(2, 3), false)
     * assert.equal(greaterThanOrEqualTo(3, 3), true)
     * assert.equal(greaterThanOrEqualTo(4, 3), true)
     * ```
     */
    (self: number, that: number): boolean;
};
/**
 * Checks if a `number` is between a `minimum` and `maximum` value (inclusive).
 *
 * @memberof Number
 * @since 2.0.0
 * @category predicates
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { Number } from "effect"
 *
 * const between = Number.between({ minimum: 0, maximum: 5 })
 *
 * assert.equal(between(3), true)
 * assert.equal(between(-1), false)
 * assert.equal(between(6), false)
 * ```
 */
export declare const between: {
    /**
     * Checks if a `number` is between a `minimum` and `maximum` value (inclusive).
     *
     * @memberof Number
     * @since 2.0.0
     * @category predicates
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { Number } from "effect"
     *
     * const between = Number.between({ minimum: 0, maximum: 5 })
     *
     * assert.equal(between(3), true)
     * assert.equal(between(-1), false)
     * assert.equal(between(6), false)
     * ```
     */
    (options: {
        minimum: number;
        maximum: number;
    }): (self: number) => boolean;
    /**
     * Checks if a `number` is between a `minimum` and `maximum` value (inclusive).
     *
     * @memberof Number
     * @since 2.0.0
     * @category predicates
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { Number } from "effect"
     *
     * const between = Number.between({ minimum: 0, maximum: 5 })
     *
     * assert.equal(between(3), true)
     * assert.equal(between(-1), false)
     * assert.equal(between(6), false)
     * ```
     */
    (self: number, options: {
        minimum: number;
        maximum: number;
    }): boolean;
};
/**
 * Restricts the given `number` to be within the range specified by the
 * `minimum` and `maximum` values.
 *
 * - If the `number` is less than the `minimum` value, the function returns the
 *   `minimum` value.
 * - If the `number` is greater than the `maximum` value, the function returns the
 *   `maximum` value.
 * - Otherwise, it returns the original `number`.
 *
 * @memberof Number
 * @since 2.0.0
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { Number } from "effect"
 *
 * const clamp = Number.clamp({ minimum: 1, maximum: 5 })
 *
 * assert.equal(clamp(3), 3)
 * assert.equal(clamp(0), 1)
 * assert.equal(clamp(6), 5)
 * ```
 */
export declare const clamp: {
    /**
     * Restricts the given `number` to be within the range specified by the
     * `minimum` and `maximum` values.
     *
     * - If the `number` is less than the `minimum` value, the function returns the
     *   `minimum` value.
     * - If the `number` is greater than the `maximum` value, the function returns the
     *   `maximum` value.
     * - Otherwise, it returns the original `number`.
     *
     * @memberof Number
     * @since 2.0.0
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { Number } from "effect"
     *
     * const clamp = Number.clamp({ minimum: 1, maximum: 5 })
     *
     * assert.equal(clamp(3), 3)
     * assert.equal(clamp(0), 1)
     * assert.equal(clamp(6), 5)
     * ```
     */
    (options: {
        minimum: number;
        maximum: number;
    }): (self: number) => number;
    /**
     * Restricts the given `number` to be within the range specified by the
     * `minimum` and `maximum` values.
     *
     * - If the `number` is less than the `minimum` value, the function returns the
     *   `minimum` value.
     * - If the `number` is greater than the `maximum` value, the function returns the
     *   `maximum` value.
     * - Otherwise, it returns the original `number`.
     *
     * @memberof Number
     * @since 2.0.0
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { Number } from "effect"
     *
     * const clamp = Number.clamp({ minimum: 1, maximum: 5 })
     *
     * assert.equal(clamp(3), 3)
     * assert.equal(clamp(0), 1)
     * assert.equal(clamp(6), 5)
     * ```
     */
    (self: number, options: {
        minimum: number;
        maximum: number;
    }): number;
};
/**
 * Returns the minimum between two `number`s.
 *
 * @memberof Number
 * @since 2.0.0
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { min } from "effect/Number"
 *
 * assert.equal(min(2, 3), 2)
 * ```
 */
export declare const min: {
    /**
     * Returns the minimum between two `number`s.
     *
     * @memberof Number
     * @since 2.0.0
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { min } from "effect/Number"
     *
     * assert.equal(min(2, 3), 2)
     * ```
     */
    (that: number): (self: number) => number;
    /**
     * Returns the minimum between two `number`s.
     *
     * @memberof Number
     * @since 2.0.0
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { min } from "effect/Number"
     *
     * assert.equal(min(2, 3), 2)
     * ```
     */
    (self: number, that: number): number;
};
/**
 * Returns the maximum between two `number`s.
 *
 * @memberof Number
 * @since 2.0.0
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { max } from "effect/Number"
 *
 * assert.equal(max(2, 3), 3)
 * ```
 */
export declare const max: {
    /**
     * Returns the maximum between two `number`s.
     *
     * @memberof Number
     * @since 2.0.0
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { max } from "effect/Number"
     *
     * assert.equal(max(2, 3), 3)
     * ```
     */
    (that: number): (self: number) => number;
    /**
     * Returns the maximum between two `number`s.
     *
     * @memberof Number
     * @since 2.0.0
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { max } from "effect/Number"
     *
     * assert.equal(max(2, 3), 3)
     * ```
     */
    (self: number, that: number): number;
};
/**
 * Determines the sign of a given `number`.
 *
 * @memberof Number
 * @since 2.0.0
 * @category math
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { sign } from "effect/Number"
 *
 * assert.equal(sign(-5), -1)
 * assert.equal(sign(0), 0)
 * assert.equal(sign(5), 1)
 * ```
 */
export declare const sign: (n: number) => Ordering;
/**
 * Returns the remainder left over when one operand is divided by a second
 * operand.
 *
 * It always takes the sign of the dividend.
 *
 * @memberof Number
 * @since 2.0.0
 * @category math
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { remainder } from "effect/Number"
 *
 * assert.equal(remainder(2, 2), 0)
 * assert.equal(remainder(3, 2), 1)
 * assert.equal(remainder(-4, 2), -0)
 * ```
 */
export declare const remainder: {
    /**
     * Returns the remainder left over when one operand is divided by a second
     * operand.
     *
     * It always takes the sign of the dividend.
     *
     * @memberof Number
     * @since 2.0.0
     * @category math
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { remainder } from "effect/Number"
     *
     * assert.equal(remainder(2, 2), 0)
     * assert.equal(remainder(3, 2), 1)
     * assert.equal(remainder(-4, 2), -0)
     * ```
     */
    (divisor: number): (dividend: number) => number;
    /**
     * Returns the remainder left over when one operand is divided by a second
     * operand.
     *
     * It always takes the sign of the dividend.
     *
     * @memberof Number
     * @since 2.0.0
     * @category math
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { remainder } from "effect/Number"
     *
     * assert.equal(remainder(2, 2), 0)
     * assert.equal(remainder(3, 2), 1)
     * assert.equal(remainder(-4, 2), -0)
     * ```
     */
    (dividend: number, divisor: number): number;
};
/**
 * Returns the next power of 2 greater than or equal to the given number.
 *
 * - For `positive` inputs, returns the smallest power of 2 that is >= the input
 * - For `zero`, returns 2
 * - For `negative` inputs, returns NaN (as logarithms of negative numbers are
 *   undefined)
 * - For `NaN` input, returns NaN
 * - For `Infinity`, returns Infinity
 *
 * @memberof Number
 * @since 2.0.0
 * @category math
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { nextPow2 } from "effect/Number"
 *
 * assert.equal(nextPow2(5), 8)
 * assert.equal(nextPow2(17), 32)
 * assert.equal(nextPow2(0), 2)
 * assert.equal(Number.isNaN(nextPow2(-1)), true) // Negative inputs result in NaN
 * ```
 */
export declare const nextPow2: (n: number) => number;
/**
 * Tries to parse a `number` from a `string` using the `Number()` function. The
 * following special string values are supported: "NaN", "Infinity",
 * "-Infinity".
 *
 * @memberof Number
 * @since 2.0.0
 * @category constructors
 */
export declare const parse: {
    /**
     * Tries to parse a `number` from a `string` using the `Number()` function. The
     * following special string values are supported: "NaN", "Infinity",
     * "-Infinity".
     *
     * @memberof Number
     * @since 2.0.0
     * @category constructors
     */
    (s: string): Option<number>;
};
/**
 * Returns the number rounded with the given precision.
 *
 * @memberof Number
 * @since 3.8.0
 * @category math
 * @example
 *
 * ```ts
 * import * as assert from "node:assert/strict"
 * import { round } from "effect/Number"
 *
 * assert.equal(round(1.1234, 2), 1.12)
 * assert.equal(round(1.567, 2), 1.57)
 * ```
 */
export declare const round: {
    /**
     * Returns the number rounded with the given precision.
     *
     * @memberof Number
     * @since 3.8.0
     * @category math
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { round } from "effect/Number"
     *
     * assert.equal(round(1.1234, 2), 1.12)
     * assert.equal(round(1.567, 2), 1.57)
     * ```
     */
    (precision: number): (self: number) => number;
    /**
     * Returns the number rounded with the given precision.
     *
     * @memberof Number
     * @since 3.8.0
     * @category math
     * @example
     *
     * ```ts
     * import * as assert from "node:assert/strict"
     * import { round } from "effect/Number"
     *
     * assert.equal(round(1.1234, 2), 1.12)
     * assert.equal(round(1.567, 2), 1.57)
     * ```
     */
    (self: number, precision: number): number;
};
//# sourceMappingURL=Number.d.ts.map