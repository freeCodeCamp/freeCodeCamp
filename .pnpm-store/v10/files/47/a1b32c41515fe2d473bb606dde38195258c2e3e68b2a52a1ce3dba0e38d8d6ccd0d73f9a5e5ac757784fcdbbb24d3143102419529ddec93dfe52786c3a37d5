import type { Nullable } from '../utils';
/**
 * Answers "does this real domain match the domain in a cookie?". The `domain` is the "current" domain name and the
 * `cookieDomain` is the "cookie" domain name. Matches according to {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.1.3 | RFC6265 - Section 5.1.3},
 * but it helps to think of it as a "suffix match".
 *
 * @remarks
 * ### 5.1.3.  Domain Matching
 *
 * A string domain-matches a given domain string if at least one of the
 * following conditions hold:
 *
 * - The domain string and the string are identical.  (Note that both
 *     the domain string and the string will have been canonicalized to
 *     lower case at this point.)
 *
 * - All of the following conditions hold:
 *
 *     - The domain string is a suffix of the string.
 *
 *     - The last character of the string that is not included in the
 *         domain string is a %x2E (".") character.
 *
 *     - The string is a host name (i.e., not an IP address).
 *
 * @example
 * ```
 * domainMatch('example.com', 'example.com') === true
 * domainMatch('eXaMpLe.cOm', 'ExAmPlE.CoM') === true
 * domainMatch('no.ca', 'yes.ca') === false
 * ```
 *
 * @param domain - The domain string to test
 * @param cookieDomain - The cookie domain string to match against
 * @param canonicalize - The canonicalize parameter toggles whether the domain parameters get normalized with canonicalDomain or not
 * @public
 */
export declare function domainMatch(domain?: Nullable<string>, cookieDomain?: Nullable<string>, canonicalize?: boolean): boolean | undefined;
