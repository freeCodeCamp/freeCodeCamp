import type { RandomGenerator } from 'pure-rand';
/**
 * Wrapper around an instance of a `pure-rand`'s random number generator
 * offering a simpler interface to deal with random with impure patterns
 *
 * @public
 */
export declare class Random {
    private static MIN_INT;
    private static MAX_INT;
    private static DBL_FACTOR;
    private static DBL_DIVISOR;
    /**
     * Create a mutable random number generator by cloning the passed one and mutate it
     * @param sourceRng - Immutable random generator from pure-rand library, will not be altered (a clone will be)
     */
    constructor(sourceRng: RandomGenerator);
    /**
     * Clone the random number generator
     */
    clone(): Random;
    /**
     * Generate an integer having `bits` random bits
     * @param bits - Number of bits to generate
     */
    next(bits: number): number;
    /**
     * Generate a random boolean
     */
    nextBoolean(): boolean;
    /**
     * Generate a random integer (32 bits)
     */
    nextInt(): number;
    /**
     * Generate a random integer between min (included) and max (included)
     * @param min - Minimal integer value
     * @param max - Maximal integer value
     */
    nextInt(min: number, max: number): number;
    /**
     * Generate a random bigint between min (included) and max (included)
     * @param min - Minimal bigint value
     * @param max - Maximal bigint value
     */
    nextBigInt(min: bigint, max: bigint): bigint;
    /**
     * Generate a random ArrayInt between min (included) and max (included)
     * @param min - Minimal ArrayInt value
     * @param max - Maximal ArrayInt value
     */
    nextArrayInt(min: {
        sign: 1 | -1;
        data: number[];
    }, max: {
        sign: 1 | -1;
        data: number[];
    }): {
        sign: 1 | -1;
        data: number[];
    };
    /**
     * Generate a random floating point number between 0.0 (included) and 1.0 (excluded)
     */
    nextDouble(): number;
    /**
     * Extract the internal state of the internal RandomGenerator backing the current instance of Random
     */
    getState(): readonly number[] | undefined;
}
