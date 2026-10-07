import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
/**
 * Constraints to be applied on {@link integer}
 * @remarks Since 2.6.0
 * @public
 */
export interface IntegerConstraints {
    /**
     * Lower bound for the generated integers (included)
     * @defaultValue -0x80000000
     * @remarks Since 2.6.0
     */
    min?: number;
    /**
     * Upper bound for the generated integers (included)
     * @defaultValue 0x7fffffff
     * @remarks Since 2.6.0
     */
    max?: number;
}
/**
 * For integers between min (included) and max (included)
 *
 * @param constraints - Constraints to apply when building instances (since 2.6.0)
 *
 * @remarks Since 0.0.1
 * @public
 */
export declare function integer(constraints?: IntegerConstraints): Arbitrary<number>;
