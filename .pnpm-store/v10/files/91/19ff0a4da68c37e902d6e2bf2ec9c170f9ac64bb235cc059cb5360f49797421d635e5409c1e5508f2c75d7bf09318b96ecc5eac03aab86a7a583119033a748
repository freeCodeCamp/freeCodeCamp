/**
 * @since 2.0.0
 */
import type * as Array from "./Array.js";
import type * as Cause from "./Cause.js";
import type * as Chunk from "./Chunk.js";
import type * as Context from "./Context.js";
import type * as Effect from "./Effect.js";
import type * as NonEmptyIterable from "./NonEmptyIterable.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const RandomTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type RandomTypeId = typeof RandomTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface Random {
    readonly [RandomTypeId]: RandomTypeId;
    /**
     * Returns the next numeric value from the pseudo-random number generator.
     */
    readonly next: Effect.Effect<number>;
    /**
     * Returns the next boolean value from the pseudo-random number generator.
     */
    readonly nextBoolean: Effect.Effect<boolean>;
    /**
     * Returns the next integer value from the pseudo-random number generator.
     */
    readonly nextInt: Effect.Effect<number>;
    /**
     * Returns the next numeric value in the specified range from the
     * pseudo-random number generator.
     */
    nextRange(min: number, max: number): Effect.Effect<number>;
    /**
     * Returns the next integer value in the specified range from the
     * pseudo-random number generator.
     */
    nextIntBetween(min: number, max: number): Effect.Effect<number>;
    /**
     * Uses the pseudo-random number generator to shuffle the specified iterable.
     */
    shuffle<A>(elements: Iterable<A>): Effect.Effect<Chunk.Chunk<A>>;
}
/**
 * Returns the next numeric value from the pseudo-random number generator.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const next: Effect.Effect<number>;
/**
 * Returns the next integer value from the pseudo-random number generator.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const nextInt: Effect.Effect<number>;
/**
 * Returns the next boolean value from the pseudo-random number generator.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const nextBoolean: Effect.Effect<boolean>;
/**
 * Returns the next numeric value in the specified range from the
 * pseudo-random number generator.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const nextRange: (min: number, max: number) => Effect.Effect<number>;
/**
 * Returns the next integer value in the specified range from the
 * pseudo-random number generator.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const nextIntBetween: (min: number, max: number) => Effect.Effect<number>;
/**
 * Uses the pseudo-random number generator to shuffle the specified iterable.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const shuffle: <A>(elements: Iterable<A>) => Effect.Effect<Chunk.Chunk<A>>;
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
export declare const choice: <Self extends Iterable<unknown>>(elements: Self) => Self extends NonEmptyIterable.NonEmptyIterable<infer A> ? Effect.Effect<A> : Self extends Array.NonEmptyReadonlyArray<infer A> ? Effect.Effect<A> : Self extends Iterable<infer A> ? Effect.Effect<A, Cause.NoSuchElementException> : never;
/**
 * Retreives the `Random` service from the context and uses it to run the
 * specified workflow.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const randomWith: <A, E, R>(f: (random: Random) => Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
/**
 * @since 2.0.0
 * @category context
 */
export declare const Random: Context.Tag<Random, Random>;
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
export declare const make: <A>(seed: A) => Random;
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
export declare const fixed: <const T extends Array.NonEmptyArray<any>>(values: T) => Random;
//# sourceMappingURL=Random.d.ts.map