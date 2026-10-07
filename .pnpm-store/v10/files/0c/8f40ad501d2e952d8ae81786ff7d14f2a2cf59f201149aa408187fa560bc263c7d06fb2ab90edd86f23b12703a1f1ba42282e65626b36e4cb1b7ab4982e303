import * as Equivalence from "./Equivalence.js";
import * as redacted_ from "./internal/redacted.js";
/**
 * @since 3.3.0
 * @category symbols
 */
export const RedactedTypeId = redacted_.RedactedTypeId;
/**
 * @since 3.3.0
 * @category refinements
 */
export const isRedacted = redacted_.isRedacted;
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
export const make = redacted_.make;
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
export const value = redacted_.value;
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
export const unsafeWipe = redacted_.unsafeWipe;
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
export const getEquivalence = isEquivalent => Equivalence.make((x, y) => isEquivalent(value(x), value(y)));
//# sourceMappingURL=Redacted.js.map