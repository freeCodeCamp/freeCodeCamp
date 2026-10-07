import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
import type { SizeForArbitrary } from './_internals/helpers/MaxLengthFromMinLength.js';
/**
 * Constraints to be applied on {@link webFragments}
 * @remarks Since 2.22.0
 * @public
 */
export interface WebFragmentsConstraints {
    /**
     * Define how large the generated values should be (at max)
     * @remarks Since 2.22.0
     */
    size?: Exclude<SizeForArbitrary, 'max'>;
}
/**
 * For fragments of an URI (web included)
 *
 * According to {@link https://www.ietf.org/rfc/rfc3986.txt | RFC 3986}
 *
 * eg.: In the url `https://domain/plop?page=1#hello=1&world=2`, `?hello=1&world=2` are query parameters
 *
 * @param constraints - Constraints to apply when building instances (since 2.22.0)
 *
 * @remarks Since 1.14.0
 * @public
 */
export declare function webFragments(constraints?: WebFragmentsConstraints): Arbitrary<string>;
