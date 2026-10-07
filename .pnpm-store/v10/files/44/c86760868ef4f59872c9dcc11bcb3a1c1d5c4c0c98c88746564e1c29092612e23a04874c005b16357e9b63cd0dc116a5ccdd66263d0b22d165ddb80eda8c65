import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
import type { SizeForArbitrary } from './_internals/helpers/MaxLengthFromMinLength.js';
/**
 * Constraints to be applied on {@link emailAddress}
 * @remarks Since 2.22.0
 * @public
 */
export interface EmailAddressConstraints {
    /**
     * Define how large the generated values should be (at max)
     * @remarks Since 2.22.0
     */
    size?: Exclude<SizeForArbitrary, 'max'>;
}
/**
 * For email address
 *
 * According to {@link https://www.ietf.org/rfc/rfc2821.txt | RFC 2821},
 * {@link https://www.ietf.org/rfc/rfc3696.txt | RFC 3696} and
 * {@link https://www.ietf.org/rfc/rfc5322.txt | RFC 5322}
 *
 * @param constraints - Constraints to apply when building instances (since 2.22.0)
 *
 * @remarks Since 1.14.0
 * @public
 */
export declare function emailAddress(constraints?: EmailAddressConstraints): Arbitrary<string>;
