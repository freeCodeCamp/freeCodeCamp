import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
/**
 * Constraints to be applied on {@link shuffledSubarray}
 * @remarks Since 2.18.0
 * @public
 */
export interface ShuffledSubarrayConstraints {
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
 * For subarrays of `originalArray`
 *
 * @param originalArray - Original array
 * @param constraints - Constraints to apply when building instances (since 2.4.0)
 *
 * @remarks Since 1.5.0
 * @public
 */
export declare function shuffledSubarray<T>(originalArray: T[], constraints?: ShuffledSubarrayConstraints): Arbitrary<T[]>;
