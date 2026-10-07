/**
 * Parse options.
 */
export interface ParseOptions {
    /**
     * Specifies a function that will be used to decode a [cookie-value](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1).
     * Since the value of a cookie has a limited character set (and must be a simple string), this function can be used to decode
     * a previously-encoded cookie value into a JavaScript string.
     *
     * The default function is the global `decodeURIComponent`, wrapped in a `try..catch`. If an error
     * is thrown it will return the cookie's original value. If you provide your own encode/decode
     * scheme you must ensure errors are appropriately handled.
     *
     * @default decode
     */
    decode?: (str: string) => string | undefined;
}
/**
 * Cookies object.
 */
export type Cookies = Record<string, string | undefined>;
/**
 * Parse a `Cookie` header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 */
export declare function parseCookie(str: string, options?: ParseOptions): Cookies;
export interface StringifyOptions {
    /**
     * Specifies a function that will be used to encode a [cookie-value](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1).
     * Since value of a cookie has a limited character set (and must be a simple string), this function can be used to encode
     * a value into a string suited for a cookie's value, and should mirror `decode` when parsing.
     *
     * @default encodeURIComponent
     */
    encode?: (str: string) => string;
}
/**
 * Stringifies an object into an HTTP `Cookie` header.
 */
export declare function stringifyCookie(cookie: Cookies, options?: StringifyOptions): string;
/**
 * Set-Cookie object.
 */
export interface SetCookie {
    /**
     * Specifies the name of the cookie.
     */
    name: string;
    /**
     * Specifies the string to be the value for the cookie.
     */
    value: string | undefined;
    /**
     * Specifies the `number` (in seconds) to be the value for the [`Max-Age` `Set-Cookie` attribute](https://tools.ietf.org/html/rfc6265#section-5.2.2).
     *
     * The [cookie storage model specification](https://tools.ietf.org/html/rfc6265#section-5.3) states that if both `expires` and
     * `maxAge` are set, then `maxAge` takes precedence, but it is possible not all clients by obey this,
     * so if both are set, they should point to the same date and time.
     */
    maxAge?: number;
    /**
     * Specifies the `Date` object to be the value for the [`Expires` `Set-Cookie` attribute](https://tools.ietf.org/html/rfc6265#section-5.2.1).
     * When no expiration is set, clients consider this a "non-persistent cookie" and delete it when the current session is over.
     *
     * The [cookie storage model specification](https://tools.ietf.org/html/rfc6265#section-5.3) states that if both `expires` and
     * `maxAge` are set, then `maxAge` takes precedence, but it is possible not all clients by obey this,
     * so if both are set, they should point to the same date and time.
     */
    expires?: Date;
    /**
     * Specifies the value for the [`Domain` `Set-Cookie` attribute](https://tools.ietf.org/html/rfc6265#section-5.2.3).
     * When no domain is set, clients consider the cookie to apply to the current domain only.
     */
    domain?: string;
    /**
     * Specifies the value for the [`Path` `Set-Cookie` attribute](https://tools.ietf.org/html/rfc6265#section-5.2.4).
     * When no path is set, the path is considered the ["default path"](https://tools.ietf.org/html/rfc6265#section-5.1.4).
     */
    path?: string;
    /**
     * Enables the [`HttpOnly` `Set-Cookie` attribute](https://tools.ietf.org/html/rfc6265#section-5.2.6).
     * When enabled, clients will not allow client-side JavaScript to see the cookie in `document.cookie`.
     */
    httpOnly?: boolean;
    /**
     * Enables the [`Secure` `Set-Cookie` attribute](https://tools.ietf.org/html/rfc6265#section-5.2.5).
     * When enabled, clients will only send the cookie back if the browser has an HTTPS connection.
     */
    secure?: boolean;
    /**
     * Enables the [`Partitioned` `Set-Cookie` attribute](https://tools.ietf.org/html/draft-cutler-httpbis-partitioned-cookies/).
     * When enabled, clients will only send the cookie back when the current domain _and_ top-level domain matches.
     *
     * This is an attribute that has not yet been fully standardized, and may change in the future.
     * This also means clients may ignore this attribute until they understand it. More information
     * about can be found in [the proposal](https://github.com/privacycg/CHIPS).
     */
    partitioned?: boolean;
    /**
     * Specifies the value for the [`Priority` `Set-Cookie` attribute](https://tools.ietf.org/html/draft-west-cookie-priority-00#section-4.1).
     *
     * - `'low'` will set the `Priority` attribute to `Low`.
     * - `'medium'` will set the `Priority` attribute to `Medium`, the default priority when not set.
     * - `'high'` will set the `Priority` attribute to `High`.
     *
     * More information about priority levels can be found in [the specification](https://tools.ietf.org/html/draft-west-cookie-priority-00#section-4.1).
     */
    priority?: "low" | "medium" | "high";
    /**
     * Specifies the value for the [`SameSite` `Set-Cookie` attribute](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-09#section-5.4.7).
     *
     * - `true` will set the `SameSite` attribute to `Strict` for strict same site enforcement.
     * - `'lax'` will set the `SameSite` attribute to `Lax` for lax same site enforcement.
     * - `'none'` will set the `SameSite` attribute to `None` for an explicit cross-site cookie.
     * - `'strict'` will set the `SameSite` attribute to `Strict` for strict same site enforcement.
     *
     * More information about enforcement levels can be found in [the specification](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-09#section-5.4.7).
     */
    sameSite?: boolean | "lax" | "strict" | "none";
}
/**
 * Backward compatibility serialize options.
 */
export type SerializeOptions = StringifyOptions & Omit<SetCookie, "name" | "value">;
/**
 * Serialize data into a cookie header.
 *
 * Serialize a name value pair into a cookie string suitable for
 * http headers. An optional options object specifies cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 */
export declare function stringifySetCookie(cookie: SetCookie, options?: StringifyOptions): string;
export declare function stringifySetCookie(name: string, val: string, options?: SerializeOptions): string;
/**
 * Deserialize a `Set-Cookie` header into an object.
 *
 * deserialize('foo=bar; httpOnly')
 *   => { name: 'foo', value: 'bar', httpOnly: true }
 */
export declare function parseSetCookie(str: string, options?: ParseOptions): SetCookie;
/**
 * Backward compatibility exports.
 */
export { stringifySetCookie as serialize, parseCookie as parse };
