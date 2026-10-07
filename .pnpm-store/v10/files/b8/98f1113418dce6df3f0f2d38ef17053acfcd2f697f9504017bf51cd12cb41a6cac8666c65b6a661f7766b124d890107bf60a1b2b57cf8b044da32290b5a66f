import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
import type { SizeForArbitrary } from './_internals/helpers/MaxLengthFromMinLength.js';
/**
 * Constraints to be applied on the arbitrary {@link stringMatching}
 * @remarks Since 3.10.0
 * @public
 */
export type StringMatchingConstraints = {
    /**
     * Define how large the generated values should be (at max)
     * @remarks Since 3.10.0
     */
    size?: SizeForArbitrary;
};
/**
 * For strings matching the provided regex
 *
 * @param regex - Arbitrary able to generate random strings (possibly multiple characters)
 * @param constraints - Constraints to apply when building instances
 *
 * @remarks Since 3.10.0
 * @public
 */
export declare function stringMatching(regex: RegExp, constraints?: StringMatchingConstraints): Arbitrary<string>;
