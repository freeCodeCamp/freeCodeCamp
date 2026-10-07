import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
import type { SizeForArbitrary } from './_internals/helpers/MaxLengthFromMinLength.js';
/**
 * Constraints to be applied on {@link webAuthority}
 * @remarks Since 1.14.0
 * @public
 */
export interface WebAuthorityConstraints {
    /**
     * Enable IPv4 in host
     * @defaultValue false
     * @remarks Since 1.14.0
     */
    withIPv4?: boolean;
    /**
     * Enable IPv6 in host
     * @defaultValue false
     * @remarks Since 1.14.0
     */
    withIPv6?: boolean;
    /**
     * Enable extended IPv4 format
     * @defaultValue false
     * @remarks Since 1.17.0
     */
    withIPv4Extended?: boolean;
    /**
     * Enable user information prefix
     * @defaultValue false
     * @remarks Since 1.14.0
     */
    withUserInfo?: boolean;
    /**
     * Enable port suffix
     * @defaultValue false
     * @remarks Since 1.14.0
     */
    withPort?: boolean;
    /**
     * Define how large the generated values should be (at max)
     * @remarks Since 2.22.0
     */
    size?: Exclude<SizeForArbitrary, 'max'>;
}
/**
 * For web authority
 *
 * According to {@link https://www.ietf.org/rfc/rfc3986.txt | RFC 3986} - `authority = [ userinfo "@" ] host [ ":" port ]`
 *
 * @param constraints - Constraints to apply when building instances
 *
 * @remarks Since 1.14.0
 * @public
 */
export declare function webAuthority(constraints?: WebAuthorityConstraints): Arbitrary<string>;
