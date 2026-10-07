/**
 * The Redacted module provides functionality for handling sensitive information
 * securely within your application. By using the `Redacted` data type, you can
 * ensure that sensitive values are not accidentally exposed in logs or error
 * messages.
 *
 * @since 3.3.0
 */
import type * as Equal from "./Equal.js"
import * as Equivalence from "./Equivalence.js"
import * as redacted_ from "./internal/redacted.js"
import type { Pipeable } from "./Pipeable.js"
import type { Covariant } from "./Types.js"

/**
 * @since 3.3.0
 * @category symbols
 */
export const RedactedTypeId: unique symbol = redacted_.RedactedTypeId

/**
 * @since 3.3.0
 * @category symbols
 */
export type RedactedTypeId = typeof RedactedTypeId

/**
 * @since 3.3.0
 * @category models
 */
export interface Redacted<out A = string> extends Redacted.Variance<A>, Equal.Equal, Pipeable {
}

/**
 * @since 3.3.0
 */
export declare namespace Redacted {
  /**
   * @since 3.3.0
   * @category models
   */
  export interface Variance<out A> {
    readonly [RedactedTypeId]: {
      readonly _A: Covariant<A>
    }
  }

  /**
   * @since 3.3.0
   * @category type-level
   */
  export type Value<T extends Redacted<any>> = [T] extends [Redacted<infer _A>] ? _A : never
}

/**
 * @since 3.3.0
 * @category refinements
 */
export const isRedacted: (u: unknown) => u is Redacted<unknown> = redacted_.isRedacted

/**
 * This function creates a `Redacted<A>` instance from a given value `A`,
 * securely hiding its content.
 *
 * @example
 * ```ts
 * import { Redacted } from "effect"
 *
 * const API_KEY = Redacted.make("1234567890")
 * ```
 *
 * @since 3.3.0
 * @category constructors
 */
export const make: <A>(value: A) => Redacted<A> = redacted_.make

/**
 * Retrieves the original value from a `Redacted` instance. Use this function
 * with caution, as it exposes the sensitive data.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Redacted } from "effect"
 *
 * const API_KEY = Redacted.make("1234567890")
 *
 * assert.equal(Redacted.value(API_KEY), "1234567890")
 * ```
 *
 * @since 3.3.0
 * @category getters
 */
export const value: <A>(self: Redacted<A>) => A = redacted_.value

/**
 * Erases the underlying value of a `Redacted` instance, rendering it unusable.
 * This function is intended to ensure that sensitive data does not remain in
 * memory longer than necessary.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Redacted } from "effect"
 *
 * const API_KEY = Redacted.make("1234567890")
 *
 * assert.equal(Redacted.value(API_KEY), "1234567890")
 *
 * Redacted.unsafeWipe(API_KEY)
 *
 * assert.throws(() => Redacted.value(API_KEY), new Error("Unable to get redacted value"))
 * ```
 *
 * @since 3.3.0
 * @category unsafe
 */
export const unsafeWipe: <A>(self: Redacted<A>) => boolean = redacted_.unsafeWipe

/**
 * Generates an equivalence relation for `Redacted<A>` values based on an
 * equivalence relation for the underlying values `A`. This function is useful
 * for comparing `Redacted` instances without exposing their contents.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Redacted, Equivalence } from "effect"
 *
 * const API_KEY1 = Redacted.make("1234567890")
 * const API_KEY2 = Redacted.make("1-34567890")
 * const API_KEY3 = Redacted.make("1234567890")
 *
 * const equivalence = Redacted.getEquivalence(Equivalence.string)
 *
 * assert.equal(equivalence(API_KEY1, API_KEY2), false)
 * assert.equal(equivalence(API_KEY1, API_KEY3), true)
 * ```
 *
 * @category equivalence
 * @since 3.3.0
 */
export const getEquivalence = <A>(isEquivalent: Equivalence.Equivalence<A>): Equivalence.Equivalence<Redacted<A>> =>
  Equivalence.make((x, y) => isEquivalent(value(x), value(y)))
