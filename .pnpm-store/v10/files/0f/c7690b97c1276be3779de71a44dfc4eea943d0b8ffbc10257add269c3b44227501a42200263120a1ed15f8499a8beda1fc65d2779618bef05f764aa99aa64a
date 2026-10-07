import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
/**
 * Constraints to be applied on {@link float}
 * @remarks Since 2.6.0
 * @public
 */
export interface FloatConstraints {
    /**
     * Lower bound for the generated 32-bit floats (included)
     * @defaultValue Number.NEGATIVE_INFINITY, -3.4028234663852886e+38 when noDefaultInfinity is true
     * @remarks Since 2.8.0
     */
    min?: number;
    /**
     * Should the lower bound (aka min) be excluded?
     * Note: Excluding min=Number.NEGATIVE_INFINITY would result into having min set to -3.4028234663852886e+38.
     * @defaultValue false
     * @remarks Since 3.12.0
     */
    minExcluded?: boolean;
    /**
     * Upper bound for the generated 32-bit floats (included)
     * @defaultValue Number.POSITIVE_INFINITY, 3.4028234663852886e+38 when noDefaultInfinity is true
     * @remarks Since 2.8.0
     */
    max?: number;
    /**
     * Should the upper bound (aka max) be excluded?
     * Note: Excluding max=Number.POSITIVE_INFINITY would result into having max set to 3.4028234663852886e+38.
     * @defaultValue false
     * @remarks Since 3.12.0
     */
    maxExcluded?: boolean;
    /**
     * By default, lower and upper bounds are -infinity and +infinity.
     * By setting noDefaultInfinity to true, you move those defaults to minimal and maximal finite values.
     * @defaultValue false
     * @remarks Since 2.8.0
     */
    noDefaultInfinity?: boolean;
    /**
     * When set to true, no more Number.NaN can be generated.
     * @defaultValue false
     * @remarks Since 2.8.0
     */
    noNaN?: boolean;
    /**
     * When set to true, Number.isInteger(value) will be false for any generated value.
     * Note: -infinity and +infinity, or NaN can stil be generated except if you rejected them via another constraint.
     * @defaultValue false
     * @remarks Since 3.18.0
     */
    noInteger?: boolean;
}
/**
 * For 32-bit floating point numbers:
 * - sign: 1 bit
 * - significand: 23 bits
 * - exponent: 8 bits
 *
 * The smallest non-zero value (in absolute value) that can be represented by such float is: 2 ** -126 * 2 ** -23.
 * And the largest one is: 2 ** 127 * (1 + (2 ** 23 - 1) / 2 ** 23).
 *
 * @param constraints - Constraints to apply when building instances (since 2.8.0)
 *
 * @remarks Since 0.0.6
 * @public
 */
export declare function float(constraints?: FloatConstraints): Arbitrary<number>;
