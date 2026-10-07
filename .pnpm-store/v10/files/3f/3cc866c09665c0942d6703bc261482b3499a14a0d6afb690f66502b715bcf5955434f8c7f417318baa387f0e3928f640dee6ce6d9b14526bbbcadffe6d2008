import type { SerializedCookie } from './constants';
/**
 * Optional configuration to be used when parsing cookies.
 * @public
 */
export interface ParseCookieOptions {
    /**
     * If `true` then keyless cookies like `=abc` and `=` which are not RFC-compliant will be parsed.
     */
    loose?: boolean | undefined;
}
/**
 * Configurable values that can be set when creating a {@link Cookie}.
 * @public
 */
export interface CreateCookieOptions {
    /** {@inheritDoc Cookie.key} */
    key?: string;
    /** {@inheritDoc Cookie.value} */
    value?: string;
    /** {@inheritDoc Cookie.expires} */
    expires?: Date | 'Infinity' | null;
    /** {@inheritDoc Cookie.maxAge} */
    maxAge?: number | 'Infinity' | '-Infinity' | null;
    /** {@inheritDoc Cookie.domain} */
    domain?: string | null;
    /** {@inheritDoc Cookie.path} */
    path?: string | null;
    /** {@inheritDoc Cookie.secure} */
    secure?: boolean;
    /** {@inheritDoc Cookie.httpOnly} */
    httpOnly?: boolean;
    /** {@inheritDoc Cookie.extensions} */
    extensions?: string[] | null;
    /** {@inheritDoc Cookie.creation} */
    creation?: Date | 'Infinity' | null;
    /** {@inheritDoc Cookie.hostOnly} */
    hostOnly?: boolean | null;
    /** {@inheritDoc Cookie.pathIsDefault} */
    pathIsDefault?: boolean | null;
    /** {@inheritDoc Cookie.lastAccessed} */
    lastAccessed?: Date | 'Infinity' | null;
    /** {@inheritDoc Cookie.sameSite} */
    sameSite?: string | undefined;
}
/**
 * An HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to a user's web browser.
 * It is defined in {@link https://www.rfc-editor.org/rfc/rfc6265.html | RFC6265}.
 * @public
 */
export declare class Cookie {
    /**
     * The name or key of the cookie
     */
    key: string;
    /**
     * The value of the cookie
     */
    value: string;
    /**
     * The 'Expires' attribute of the cookie
     * (See {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.2.1 | RFC6265 Section 5.2.1}).
     */
    expires: Date | 'Infinity' | null;
    /**
     * The 'Max-Age' attribute of the cookie
     * (See {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.2.2 | RFC6265 Section 5.2.2}).
     */
    maxAge: number | 'Infinity' | '-Infinity' | null;
    /**
     * The 'Domain' attribute of the cookie represents the domain the cookie belongs to
     * (See {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.2.3 | RFC6265 Section 5.2.3}).
     */
    domain: string | null;
    /**
     * The 'Path' attribute of the cookie represents the path of the cookie
     * (See {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.2.4 | RFC6265 Section 5.2.4}).
     */
    path: string | null;
    /**
     * The 'Secure' flag of the cookie indicates if the scope of the cookie is
     * limited to secure channels (e.g.; HTTPS) or not
     * (See {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.2.5 | RFC6265 Section 5.2.5}).
     */
    secure: boolean;
    /**
     * The 'HttpOnly' flag of the cookie indicates if the cookie is inaccessible to
     * client scripts or not
     * (See {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.2.6 | RFC6265 Section 5.2.6}).
     */
    httpOnly: boolean;
    /**
     * Contains attributes which are not part of the defined spec but match the `extension-av` syntax
     * defined in Section 4.1.1 of RFC6265
     * (See {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-4.1.1 | RFC6265 Section 4.1.1}).
     */
    extensions: string[] | null;
    /**
     * Set to the date and time when a Cookie is initially stored or a matching cookie is
     * received that replaces an existing cookie
     * (See {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.3 | RFC6265 Section 5.3}).
     *
     * Also used to maintain ordering among cookies. Among cookies that have equal-length path fields,
     * cookies with earlier creation-times are listed before cookies with later creation-times
     * (See {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.4 | RFC6265 Section 5.4}).
     */
    creation: Date | 'Infinity' | null;
    /**
     * A global counter used to break ordering ties between two cookies that have equal-length path fields
     * and the same creation-time.
     */
    creationIndex: number;
    /**
     * A boolean flag indicating if a cookie is a host-only cookie (i.e.; when the request's host exactly
     * matches the domain of the cookie) or not
     * (See {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.3 | RFC6265 Section 5.3}).
     */
    hostOnly: boolean | null;
    /**
     * A boolean flag indicating if a cookie had no 'Path' attribute and the default path
     * was used
     * (See {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.2.4 | RFC6265 Section 5.2.4}).
     */
    pathIsDefault: boolean | null;
    /**
     * Set to the date and time when a cookie was initially stored ({@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.3 | RFC6265 Section 5.3}) and updated whenever
     * the cookie is retrieved from the {@link CookieJar} ({@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.4 | RFC6265 Section 5.4}).
     */
    lastAccessed: Date | 'Infinity' | null;
    /**
     * The 'SameSite' attribute of a cookie as defined in RFC6265bis
     * (See {@link https://www.ietf.org/archive/id/draft-ietf-httpbis-rfc6265bis-13.html#section-5.2 | RFC6265bis (v13) Section 5.2 }).
     */
    sameSite: string | undefined;
    /**
     * Create a new Cookie instance.
     * @public
     * @param options - The attributes to set on the cookie
     */
    constructor(options?: CreateCookieOptions);
    /**
     * For convenience in using `JSON.stringify(cookie)`. Returns a plain-old Object that can be JSON-serialized.
     *
     * @remarks
     * - Any `Date` properties (such as {@link Cookie.expires}, {@link Cookie.creation}, and {@link Cookie.lastAccessed}) are exported in ISO format (`Date.toISOString()`).
     *
     *  - Custom Cookie properties are discarded. In tough-cookie 1.x, since there was no {@link Cookie.toJSON} method explicitly defined, all enumerable properties were captured.
     *      If you want a property to be serialized, add the property name to {@link Cookie.serializableProperties}.
     */
    toJSON(): SerializedCookie;
    /**
     * Does a deep clone of this cookie, implemented exactly as `Cookie.fromJSON(cookie.toJSON())`.
     * @public
     */
    clone(): Cookie | undefined;
    /**
     * Validates cookie attributes for semantic correctness. Useful for "lint" checking any `Set-Cookie` headers you generate.
     * For now, it returns a boolean, but eventually could return a reason string.
     *
     * @remarks
     * Works for a few things, but is by no means comprehensive.
     *
     * @beta
     */
    validate(): boolean;
    /**
     * Sets the 'Expires' attribute on a cookie.
     *
     * @remarks
     * When given a `string` value it will be parsed with {@link parseDate}. If the value can't be parsed as a cookie date
     * then the 'Expires' attribute will be set to `"Infinity"`.
     *
     * @param exp - the new value for the 'Expires' attribute of the cookie.
     */
    setExpires(exp: string | Date): void;
    /**
     * Sets the 'Max-Age' attribute (in seconds) on a cookie.
     *
     * @remarks
     * Coerces `-Infinity` to `"-Infinity"` and `Infinity` to `"Infinity"` so it can be serialized to JSON.
     *
     * @param age - the new value for the 'Max-Age' attribute (in seconds).
     */
    setMaxAge(age: number): void;
    /**
     * Encodes to a `Cookie` header value (specifically, the {@link Cookie.key} and {@link Cookie.value} properties joined with "=").
     * @public
     */
    cookieString(): string;
    /**
     * Encodes to a `Set-Cookie header` value.
     * @public
     */
    toString(): string;
    /**
     * Computes the TTL relative to now (milliseconds).
     *
     * @remarks
     * - `Infinity` is returned for cookies without an explicit expiry
     *
     * - `0` is returned if the cookie is expired.
     *
     * - Otherwise a time-to-live in milliseconds is returned.
     *
     * @param now - passing an explicit value is mostly used for testing purposes since this defaults to the `Date.now()`
     * @public
     */
    TTL(now?: number): number;
    /**
     * Computes the absolute unix-epoch milliseconds that this cookie expires.
     *
     * The "Max-Age" attribute takes precedence over "Expires" (as per the RFC). The {@link Cookie.lastAccessed} attribute
     * (or the `now` parameter if given) is used to offset the {@link Cookie.maxAge} attribute.
     *
     * If Expires ({@link Cookie.expires}) is set, that's returned.
     *
     * @param now - can be used to provide a time offset (instead of {@link Cookie.lastAccessed}) to use when calculating the "Max-Age" value
     */
    expiryTime(now?: Date): number | undefined;
    /**
     * Similar to {@link Cookie.expiryTime}, computes the absolute unix-epoch milliseconds that this cookie expires and returns it as a Date.
     *
     * The "Max-Age" attribute takes precedence over "Expires" (as per the RFC). The {@link Cookie.lastAccessed} attribute
     * (or the `now` parameter if given) is used to offset the {@link Cookie.maxAge} attribute.
     *
     * If Expires ({@link Cookie.expires}) is set, that's returned.
     *
     * @param now - can be used to provide a time offset (instead of {@link Cookie.lastAccessed}) to use when calculating the "Max-Age" value
     */
    expiryDate(now?: Date): Date | undefined;
    /**
     * Indicates if the cookie has been persisted to a store or not.
     * @public
     */
    isPersistent(): boolean;
    /**
     * Calls {@link canonicalDomain} with the {@link Cookie.domain} property.
     * @public
     */
    canonicalizedDomain(): string | undefined;
    /**
     * Alias for {@link Cookie.canonicalizedDomain}
     * @public
     */
    cdomain(): string | undefined;
    /**
     * Parses a string into a Cookie object.
     *
     * @remarks
     * Note: when parsing a `Cookie` header it must be split by ';' before each Cookie string can be parsed.
     *
     * @example
     * ```
     * // parse a `Set-Cookie` header
     * const setCookieHeader = 'a=bcd; Expires=Tue, 18 Oct 2011 07:05:03 GMT'
     * const cookie = Cookie.parse(setCookieHeader)
     * cookie.key === 'a'
     * cookie.value === 'bcd'
     * cookie.expires === new Date(Date.parse('Tue, 18 Oct 2011 07:05:03 GMT'))
     * ```
     *
     * @example
     * ```
     * // parse a `Cookie` header
     * const cookieHeader = 'name=value; name2=value2; name3=value3'
     * const cookies = cookieHeader.split(';').map(Cookie.parse)
     * cookies[0].name === 'name'
     * cookies[0].value === 'value'
     * cookies[1].name === 'name2'
     * cookies[1].value === 'value2'
     * cookies[2].name === 'name3'
     * cookies[2].value === 'value3'
     * ```
     *
     * @param str - The `Set-Cookie` header or a Cookie string to parse.
     * @param options - Configures `strict` or `loose` mode for cookie parsing
     */
    static parse(str: string, options?: ParseCookieOptions): Cookie | undefined;
    /**
     * Does the reverse of {@link Cookie.toJSON}.
     *
     * @remarks
     * Any Date properties (such as .expires, .creation, and .lastAccessed) are parsed via Date.parse, not tough-cookie's parseDate, since ISO timestamps are being handled at this layer.
     *
     * @example
     * ```
     * const json = JSON.stringify({
     *   key: 'alpha',
     *   value: 'beta',
     *   domain: 'example.com',
     *   path: '/foo',
     *   expires: '2038-01-19T03:14:07.000Z',
     * })
     * const cookie = Cookie.fromJSON(json)
     * cookie.key === 'alpha'
     * cookie.value === 'beta'
     * cookie.domain === 'example.com'
     * cookie.path === '/foo'
     * cookie.expires === new Date(Date.parse('2038-01-19T03:14:07.000Z'))
     * ```
     *
     * @param str - An unparsed JSON string or a value that has already been parsed as JSON
     */
    static fromJSON(str: unknown): Cookie | undefined;
    private static cookiesCreated;
    /**
     * @internal
     */
    static sameSiteLevel: {
        readonly strict: 3;
        readonly lax: 2;
        readonly none: 1;
    };
    /**
     * @internal
     */
    static sameSiteCanonical: {
        readonly strict: "Strict";
        readonly lax: "Lax";
    };
    /**
     * Cookie properties that will be serialized when using {@link Cookie.fromJSON} and {@link Cookie.toJSON}.
     * @public
     */
    static serializableProperties: readonly ["key", "value", "expires", "maxAge", "domain", "path", "secure", "httpOnly", "extensions", "hostOnly", "pathIsDefault", "creation", "lastAccessed", "sameSite"];
}
