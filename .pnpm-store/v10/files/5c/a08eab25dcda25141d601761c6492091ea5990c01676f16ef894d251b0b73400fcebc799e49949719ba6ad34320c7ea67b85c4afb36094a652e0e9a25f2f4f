import type { Nullable } from '../utils';
/**
 * Given a current request/response path, gives the path appropriate for storing
 * in a cookie. This is basically the "directory" of a "file" in the path, but
 * is specified by {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.1.4 | RFC6265 - Section 5.1.4}.
 *
 * @remarks
 * ### RFC6265 - Section 5.1.4
 *
 * The user agent MUST use an algorithm equivalent to the following algorithm to compute the default-path of a cookie:
 *
 * 1. Let uri-path be the path portion of the request-uri if such a
 *     portion exists (and empty otherwise).  For example, if the
 *     request-uri contains just a path (and optional query string),
 *     then the uri-path is that path (without the %x3F ("?") character
 *     or query string), and if the request-uri contains a full
 *     absoluteURI, the uri-path is the path component of that URI.
 *
 * 2. If the uri-path is empty or if the first character of the uri-
 *     path is not a %x2F ("/") character, output %x2F ("/") and skip
 *     the remaining steps.
 *
 * 3. If the uri-path contains no more than one %x2F ("/") character,
 *     output %x2F ("/") and skip the remaining step.
 *
 * 4. Output the characters of the uri-path from the first character up
 *     to, but not including, the right-most %x2F ("/").
 *
 * @example
 * ```
 * defaultPath('') === '/'
 * defaultPath('/some-path') === '/'
 * defaultPath('/some-parent-path/some-path') === '/some-parent-path'
 * defaultPath('relative-path') === '/'
 * ```
 *
 * @param path - the path portion of the request-uri (excluding the hostname, query, fragment, and so on)
 * @public
 */
export declare function defaultPath(path?: Nullable<string>): string;
