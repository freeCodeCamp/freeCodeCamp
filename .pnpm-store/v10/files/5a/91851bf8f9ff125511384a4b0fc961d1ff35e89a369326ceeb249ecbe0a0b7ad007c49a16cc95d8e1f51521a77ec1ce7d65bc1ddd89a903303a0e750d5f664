import type { Cookie } from './cookie';
/**
 * A comparison function that can be used with {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort | Array.sort()},
 * which orders a list of cookies into the recommended order given in Step 2 of {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.4 | RFC6265 - Section 5.4}.
 *
 * The sort algorithm is, in order of precedence:
 *
 * - Longest {@link Cookie.path}
 *
 * - Oldest {@link Cookie.creation} (which has a 1-ms precision, same as Date)
 *
 * - Lowest {@link Cookie.creationIndex} (to get beyond the 1-ms precision)
 *
 * @remarks
 * ### RFC6265 - Section 5.4 - Step 2
 *
 * The user agent SHOULD sort the cookie-list in the following order:
 *
 * - Cookies with longer paths are listed before cookies with shorter paths.
 *
 * - Among cookies that have equal-length path fields, cookies with
 *    earlier creation-times are listed before cookies with later
 *    creation-times.
 *
 * NOTE: Not all user agents sort the cookie-list in this order, but
 * this order reflects common practice when this document was
 * written, and, historically, there have been servers that
 * (erroneously) depended on this order.
 *
 * ### Custom Store Implementors
 *
 * Since the JavaScript Date is limited to a 1-ms precision, cookies within the same millisecond are entirely possible.
 * This is especially true when using the `now` option to `CookieJar.setCookie(...)`. The {@link Cookie.creationIndex}
 * property is a per-process global counter, assigned during construction with `new Cookie()`, which preserves the spirit
 * of the RFC sorting: older cookies go first. This works great for {@link MemoryCookieStore} since `Set-Cookie` headers
 * are parsed in order, but is not so great for distributed systems.
 *
 * Sophisticated Stores may wish to set this to some other
 * logical clock so that if cookies `A` and `B` are created in the same millisecond, but cookie `A` is created before
 * cookie `B`, then `A.creationIndex < B.creationIndex`.
 *
 * @example
 * ```
 * const cookies = [
 *   new Cookie({ key: 'a', value: '' }),
 *   new Cookie({ key: 'b', value: '' }),
 *   new Cookie({ key: 'c', value: '', path: '/path' }),
 *   new Cookie({ key: 'd', value: '', path: '/path' }),
 * ]
 * cookies.sort(cookieCompare)
 * // cookie sort order would be ['c', 'd', 'a', 'b']
 * ```
 *
 * @param a - the first Cookie for comparison
 * @param b - the second Cookie for comparison
 * @public
 */
export declare function cookieCompare(a: Cookie, b: Cookie): number;
