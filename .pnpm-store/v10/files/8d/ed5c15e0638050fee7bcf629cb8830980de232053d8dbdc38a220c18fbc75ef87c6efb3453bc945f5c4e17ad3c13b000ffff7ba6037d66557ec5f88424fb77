import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
import type { SizeForArbitrary } from './_internals/helpers/MaxLengthFromMinLength.js';
/**
 * Constraints to be applied on {@link webPath}
 * @remarks Since 3.3.0
 * @public
 */
export interface WebPathConstraints {
    /**
     * Define how large the generated values should be (at max)
     * @remarks Since 3.3.0
     */
    size?: Exclude<SizeForArbitrary, 'max'>;
}
/**
 * For web path
 *
 * According to {@link https://www.ietf.org/rfc/rfc3986.txt | RFC 3986} and
 * {@link https://url.spec.whatwg.org/ | WHATWG URL Standard}
 *
 * @param constraints - Constraints to apply when building instances
 *
 * @remarks Since 3.3.0
 * @public
 */
export declare function webPath(constraints?: WebPathConstraints): Arbitrary<string>;
