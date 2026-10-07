/**
 * @since 2.0.0
 */
import type * as Context from "./Context.js";
import type * as Layer from "./Layer.js";
import type * as STM from "./STM.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const TRandomTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type TRandomTypeId = typeof TRandomTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface TRandom {
    readonly [TRandomTypeId]: TRandomTypeId;
    /**
     * Returns the next numeric value from the pseudo-random number generator.
     */
    readonly next: STM.STM<number>;
    /**
     * Returns the next boolean value from the pseudo-random number generator.
     */
    readonly nextBoolean: STM.STM<boolean>;
    /**
     * Returns the next integer value from the pseudo-random number generator.
     */
    readonly nextInt: STM.STM<number>;
    /**
     * Returns the next numeric value in the specified range from the
     * pseudo-random number generator.
     */
    nextRange(min: number, max: number): STM.STM<number>;
    /**
     * Returns the next integer value in the specified range from the
     * pseudo-random number generator.
     */
    nextIntBetween(min: number, max: number): STM.STM<number>;
    /**
     * Uses the pseudo-random number generator to shuffle the specified iterable.
     */
    shuffle<A>(elements: Iterable<A>): STM.STM<Array<A>>;
}
/**
 * The service tag used to access `TRandom` in the environment of an effect.
 *
 * @since 2.0.0
 * @category context
 */
export declare const Tag: Context.Tag<TRandom, TRandom>;
/**
 * The "live" `TRandom` service wrapped into a `Layer`.
 *
 * @since 2.0.0
 * @category context
 */
export declare const live: Layer.Layer<TRandom>;
/**
 * Returns the next number from the pseudo-random number generator.
 *
 * @since 2.0.0
 * @category random
 */
export declare const next: STM.STM<number, never, TRandom>;
/**
 * Returns the next boolean value from the pseudo-random number generator.
 *
 * @since 2.0.0
 * @category random
 */
export declare const nextBoolean: STM.STM<boolean, never, TRandom>;
/**
 * Returns the next integer from the pseudo-random number generator.
 *
 * @since 2.0.0
 * @category random
 */
export declare const nextInt: STM.STM<number, never, TRandom>;
/**
 * Returns the next integer in the specified range from the pseudo-random number
 * generator.
 *
 * @since 2.0.0
 * @category random
 */
export declare const nextIntBetween: (low: number, high: number) => STM.STM<number, never, TRandom>;
/**
 * Returns the next number in the specified range from the pseudo-random number
 * generator.
 *
 * @since 2.0.0
 * @category random
 */
export declare const nextRange: (min: number, max: number) => STM.STM<number, never, TRandom>;
/**
 * Uses the pseudo-random number generator to shuffle the specified iterable.
 *
 * @since 2.0.0
 * @category random
 */
export declare const shuffle: <A>(elements: Iterable<A>) => STM.STM<Array<A>, never, TRandom>;
//# sourceMappingURL=TRandom.d.ts.map