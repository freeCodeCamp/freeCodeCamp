import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
/**
 * Constraints to be applied on {@link double}
 * @remarks Since 2.6.0
 * @public
 */
export interface DoubleConstraints {
    /**
     * Lower bound for the generated 64-bit floats (included, see minExcluded to exclude it)
     * @defaultValue Number.NEGATIVE_INFINITY, -1.7976931348623157e+308 when noDefaultInfinity is true
     * @remarks Since 2.8.0
     */
    min?: number;
    /**
     * Should the lower bound (aka min) be excluded?
     * Note: Excluding min=Number.NEGATIVE_INFINITY would result into having min set to -Number.MAX_VALUE.
     * @defaultValue false
     * @remarks Since 3.12.0
     */
    minExcluded?: boolean;
    /**
     * Upper bound for the generated 64-bit floats (included, see maxExcluded to exclude it)
     * @defaultValue Number.POSITIVE_INFINITY, 1.7976931348623157e+308 when noDefaultInfinity is true
     * @remarks Since 2.8.0
     */
    max?: number;
    /**
     * Should the upper bound (aka max) be excluded?
     * Note: Excluding max=Number.POSITIVE_INFINITY would result into having max set to Number.MAX_VALUE.
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
 * For 64-bit floating point numbers:
 * - sign: 1 bit
 * - significand: 52 bits
 * - exponent: 11 bits
 *
 * @param constraints - Constraints to apply when building instances (since 2.8.0)
 *
 * @remarks Since 0.0.6
 * @public
 */
export declare function double(constraints?: DoubleConstraints): Arbitrary<number>;
