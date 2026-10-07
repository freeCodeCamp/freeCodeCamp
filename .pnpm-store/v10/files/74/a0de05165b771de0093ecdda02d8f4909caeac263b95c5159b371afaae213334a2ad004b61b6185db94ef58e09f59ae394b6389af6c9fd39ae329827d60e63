import * as defaultServices from "./internal/defaultServices.js";
import * as internal from "./internal/random.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export const RandomTypeId = internal.RandomTypeId;
/**
 * Returns the next numeric value from the pseudo-random number generator.
 *
 * @since 2.0.0
 * @category constructors
 */
export const next = defaultServices.next;
/**
 * Returns the next integer value from the pseudo-random number generator.
 *
 * @since 2.0.0
 * @category constructors
 */
export const nextInt = defaultServices.nextInt;
/**
 * Returns the next boolean value from the pseudo-random number generator.
 *
 * @since 2.0.0
 * @category constructors
 */
export const nextBoolean = defaultServices.nextBoolean;
/**
 * Returns the next numeric value in the specified range from the
 * pseudo-random number generator.
 *
 * @since 2.0.0
 * @category constructors
 */
export const nextRange = defaultServices.nextRange;
/**
 * Returns the next integer value in the specified range from the
 * pseudo-random number generator.
 *
 * @since 2.0.0
 * @category constructors
 */
export const nextIntBetween = defaultServices.nextIntBetween;
/**
 * Uses the pseudo-random number generator to shuffle the specified iterable.
 *
 * @since 2.0.0
 * @category constructors
 */
export const shuffle = defaultServices.shuffle;
/**
 * Get a random element from an iterable.
 *
 * @example
 * ```ts
 * import { Effect, Random } from "effect"
 *
 * Effect.gen(function* () {
 *   const randomItem = yield* Random.choice([1, 2, 3])
 *   console.log(randomItem)
 * })
 * ```
 *
 * @since 3.6.0
 * @category constructors
 */
export const choice = defaultServices.choice;
/**
 * Retreives the `Random` service from the context and uses it to run the
 * specified workflow.
 *
 * @since 2.0.0
 * @category constructors
 */
export const randomWith = defaultServices.randomWith;
/**
 * @since 2.0.0
 * @category context
 */
export const Random = internal.randomTag;
/**
 * Constructs the `Random` service, seeding the pseudo-random number generator
 * with an hash of the specified seed.
 * This constructor is useful for generating predictable sequences of random values for specific use cases.
 *
 * Example uses:
 * - Generating random UI data for visual tests.
 * - Creating data that needs to change daily but remain the same throughout a single day, such as using a date as the seed.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Effect, Random } from "effect"
 *
 * const random1 = Random.make("myseed")
 * const random2 = Random.make("myseed")
 *
 * assert.equal(Effect.runSync(random1.next), Effect.runSync(random2.next))
 * ```
 *
 * @since 3.5.0
 * @category constructors
 */
export const make = internal.make;
/**
 * Constructs the `Random` service from an array of literal values.
 * The service will cycle through the provided values in order when generating random values.
 * This constructor is useful for creating deterministic sequences for testing or when specific values need to be returned.
 *
 * @example
 * ```ts
 * import { Effect, Random } from "effect"
 *
 * Effect.gen(function* () {
 *   console.log(yield* Random.next) // 0.2
 *   console.log(yield* Random.next) // 0.5
 *   console.log(yield* Random.next) // 0.8
 *   console.log(yield* Random.next) // 0.2 (cycles back)
 * }).pipe(Effect.withRandom(Random.fixed([0.2, 0.5, 0.8])))
 * ```
 *
 * @example
 * ```ts
 * import { Effect, Random } from "effect"
 *
 * Effect.gen(function* () {
 *   console.log(yield* Random.nextBoolean) // true
 *   console.log(yield* Random.nextBoolean) // false
 *   console.log(yield* Random.nextBoolean) // true
 * }).pipe(Effect.withRandom(Random.fixed([true, false, true])))
 * ```
 *
 * @since 3.11.0
 * @category constructors
 */
export const fixed = internal.fixed;
//# sourceMappingURL=Random.js.map