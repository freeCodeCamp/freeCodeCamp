import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
import type { WebAuthorityConstraints } from './webAuthority.js';
import type { SizeForArbitrary } from './_internals/helpers/MaxLengthFromMinLength.js';
/**
 * Constraints to be applied on {@link webUrl}
 * @remarks Since 1.14.0
 * @public
 */
export interface WebUrlConstraints {
    /**
     * Enforce specific schemes, eg.: http, https
     * @defaultValue ['http', 'https']
     * @remarks Since 1.14.0
     */
    validSchemes?: string[];
    /**
     * Settings for {@link webAuthority}
     * @defaultValue &#123;&#125;
     * @remarks Since 1.14.0
     */
    authoritySettings?: WebAuthorityConstraints;
    /**
     * Enable query parameters in the generated url
     * @defaultValue false
     * @remarks Since 1.14.0
     */
    withQueryParameters?: boolean;
    /**
     * Enable fragments in the generated url
     * @defaultValue false
     * @remarks Since 1.14.0
     */
    withFragments?: boolean;
    /**
     * Define how large the generated values should be (at max)
     * @remarks Since 2.22.0
     */
    size?: Exclude<SizeForArbitrary, 'max'>;
}
/**
 * For web url
 *
 * According to {@link https://www.ietf.org/rfc/rfc3986.txt | RFC 3986} and
 * {@link https://url.spec.whatwg.org/ | WHATWG URL Standard}
 *
 * @param constraints - Constraints to apply when building instances
 *
 * @remarks Since 1.14.0
 * @public
 */
export declare function webUrl(constraints?: WebUrlConstraints): Arbitrary<string>;
