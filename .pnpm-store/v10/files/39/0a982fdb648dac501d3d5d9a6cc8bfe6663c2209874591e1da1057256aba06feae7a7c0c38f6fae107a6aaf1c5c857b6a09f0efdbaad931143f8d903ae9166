import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
/**
 * Constraints to be applied on {@link subarray}
 * @remarks Since 2.4.0
 * @public
 */
export interface SubarrayConstraints {
    /**
     * Lower bound of the generated subarray size (included)
     * @defaultValue 0
     * @remarks Since 2.4.0
     */
    minLength?: number;
    /**
     * Upper bound of the generated subarray size (included)
     * @defaultValue The length of the original array itself
     * @remarks Since 2.4.0
     */
    maxLength?: number;
}
/**
 * For subarrays of `originalArray` (keeps ordering)
 *
 * @param originalArray - Original array
 * @param constraints - Constraints to apply when building instances (since 2.4.0)
 *
 * @remarks Since 1.5.0
 * @public
 */
export declare function subarray<T>(originalArray: T[], constraints?: SubarrayConstraints): Arbitrary<T[]>;
