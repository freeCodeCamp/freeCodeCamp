/**
 * Cookie prefixes are a way to indicate that a given cookie was set with a set of attributes simply by inspecting the
 * first few characters of the cookie's name. These are defined in {@link https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-13#section-4.1.3 | RFC6265bis - Section 4.1.3}.
 *
 * The following values can be used to configure how a {@link CookieJar} enforces attribute restrictions for Cookie prefixes:
 *
 * - `silent` - Enable cookie prefix checking but silently ignores the cookie if conditions are not met. This is the default configuration for a {@link CookieJar}.
 *
 * - `strict` - Enables cookie prefix checking and will raise an error if conditions are not met.
 *
 * - `unsafe-disabled` - Disables cookie prefix checking.
 * @public
 */
declare const PrefixSecurityEnum: {
    readonly SILENT: "silent";
    readonly STRICT: "strict";
    readonly DISABLED: "unsafe-disabled";
};
/**
 * A JSON representation of a {@link CookieJar}.
 * @public
 */
interface SerializedCookieJar {
    /**
     * The version of `tough-cookie` used during serialization.
     */
    version: string;
    /**
     * The name of the store used during serialization.
     */
    storeType: string | null;
    /**
     * The value of {@link CreateCookieJarOptions.rejectPublicSuffixes} configured on the {@link CookieJar}.
     */
    rejectPublicSuffixes: boolean;
    /**
     * Other configuration settings on the {@link CookieJar}.
     */
    [key: string]: unknown;
    /**
     * The list of {@link Cookie} values serialized as JSON objects.
     */
    cookies: SerializedCookie[];
}
/**
 * A JSON object that is created when {@link Cookie.toJSON} is called. This object will contain the properties defined in {@link Cookie.serializableProperties}.
 * @public
 */
type SerializedCookie = {
    key?: string;
    value?: string;
    [key: string]: unknown;
};

/**
 * Optional configuration to be used when parsing cookies.
 * @public
 */
interface ParseCookieOptions {
    /**
     * If `true` then keyless cookies like `=abc` and `=` which are not RFC-compliant will be parsed.
     */
    loose?: boolean | undefined;
}
/**
 * Configurable values that can be set when creating a {@link Cookie}.
 * @public
 */
interface CreateCookieOptions {
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
declare class Cookie {
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

/**
 * A callback function that accepts an error or a result.
 * @public
 */
interface Callback<T> {
    (error: Error, result?: never): void;
    (error: null, result: T): void;
}
/**
 * A callback function that only accepts an error.
 * @public
 */
interface ErrorCallback {
    (error: Error | null): void;
}
/**
 * The inverse of NonNullable<T>.
 * @public
 */
type Nullable<T> = T | null | undefined;

/**
 * Base class for {@link CookieJar} stores.
 *
 * The storage model for each {@link CookieJar} instance can be replaced with a custom implementation. The default is
 * {@link MemoryCookieStore}.
 *
 * @remarks
 * - Stores should inherit from the base Store class, which is available as a top-level export.
 *
 * - Stores are asynchronous by default, but if {@link Store.synchronous} is set to true, then the `*Sync` methods
 *     of the containing {@link CookieJar} can be used.
 *
 * @public
 */
declare class Store {
    /**
     * Store implementations that support synchronous methods must return `true`.
     */
    synchronous: boolean;
    constructor();
    /**
     * Retrieve a {@link Cookie} with the given `domain`, `path`, and `key` (`name`). The RFC maintains that exactly
     * one of these cookies should exist in a store. If the store is using versioning, this means that the latest or
     * newest such cookie should be returned.
     *
     * Callback takes an error and the resulting Cookie object. If no cookie is found then null MUST be passed instead (that is, not an error).
     * @param domain - The cookie domain to match against.
     * @param path - The cookie path to match against.
     * @param key - The cookie name to match against.
     */
    findCookie(domain: Nullable<string>, path: Nullable<string>, key: Nullable<string>): Promise<Cookie | undefined>;
    /**
     * Retrieve a {@link Cookie} with the given `domain`, `path`, and `key` (`name`). The RFC maintains that exactly
     * one of these cookies should exist in a store. If the store is using versioning, this means that the latest or
     * newest such cookie should be returned.
     *
     * Callback takes an error and the resulting Cookie object. If no cookie is found then null MUST be passed instead (that is, not an error).
     * @param domain - The cookie domain to match against.
     * @param path - The cookie path to match against.
     * @param key - The cookie name to match against.
     * @param callback - A function to call with either the found cookie or an error.
     */
    findCookie(domain: Nullable<string>, path: Nullable<string>, key: Nullable<string>, callback: Callback<Cookie | undefined>): void;
    /**
     * Locates all {@link Cookie} values matching the given `domain` and `path`.
     *
     * The resulting list is checked for applicability to the current request according to the RFC (`domain-match`, `path-match`,
     * `http-only-flag`, `secure-flag`, `expiry`, and so on), so it's OK to use an optimistic search algorithm when implementing
     * this method. However, the search algorithm used SHOULD try to find cookies that {@link domainMatch} the `domain` and
     * {@link pathMatch} the `path` in order to limit the amount of checking that needs to be done.
     *
     * @remarks
     * - As of version `0.9.12`, the `allPaths` option to cookiejar.getCookies() above causes the path here to be `null`.
     *
     * - If the `path` is `null`, `path-matching` MUST NOT be performed (that is, `domain-matching` only).
     *
     * @param domain - The cookie domain to match against.
     * @param path - The cookie path to match against.
     * @param allowSpecialUseDomain - If `true` then special-use domain suffixes, will be allowed in matches. Defaults to `false`.
     */
    findCookies(domain: Nullable<string>, path: Nullable<string>, allowSpecialUseDomain?: boolean): Promise<Cookie[]>;
    /**
     * Locates all {@link Cookie} values matching the given `domain` and `path`.
     *
     * The resulting list is checked for applicability to the current request according to the RFC (`domain-match`, `path-match`,
     * `http-only-flag`, `secure-flag`, `expiry`, and so on), so it's OK to use an optimistic search algorithm when implementing
     * this method. However, the search algorithm used SHOULD try to find cookies that {@link domainMatch} the `domain` and
     * {@link pathMatch} the `path` in order to limit the amount of checking that needs to be done.
     *
     * @remarks
     * - As of version `0.9.12`, the `allPaths` option to cookiejar.getCookies() above causes the path here to be `null`.
     *
     * - If the `path` is `null`, `path-matching` MUST NOT be performed (that is, `domain-matching` only).
     *
     * @param domain - The cookie domain to match against.
     * @param path - The cookie path to match against.
     * @param allowSpecialUseDomain - If `true` then special-use domain suffixes, will be allowed in matches. Defaults to `false`.
     * @param callback - A function to call with either the found cookies or an error.
     */
    findCookies(domain: Nullable<string>, path: Nullable<string>, allowSpecialUseDomain?: boolean, callback?: Callback<Cookie[]>): void;
    /**
     * Adds a new {@link Cookie} to the store. The implementation SHOULD replace any existing cookie with the same `domain`,
     * `path`, and `key` properties.
     *
     * @remarks
     * - Depending on the nature of the implementation, it's possible that between the call to `fetchCookie` and `putCookie`
     * that a duplicate `putCookie` can occur.
     *
     * - The {@link Cookie} object MUST NOT be modified; as the caller has already updated the `creation` and `lastAccessed` properties.
     *
     * @param cookie - The cookie to store.
     */
    putCookie(cookie: Cookie): Promise<void>;
    /**
     * Adds a new {@link Cookie} to the store. The implementation SHOULD replace any existing cookie with the same `domain`,
     * `path`, and `key` properties.
     *
     * @remarks
     * - Depending on the nature of the implementation, it's possible that between the call to `fetchCookie` and `putCookie`
     * that a duplicate `putCookie` can occur.
     *
     * - The {@link Cookie} object MUST NOT be modified; as the caller has already updated the `creation` and `lastAccessed` properties.
     *
     * @param cookie - The cookie to store.
     * @param callback - A function to call when the cookie has been stored or an error has occurred.
     */
    putCookie(cookie: Cookie, callback: ErrorCallback): void;
    /**
     * Update an existing {@link Cookie}. The implementation MUST update the `value` for a cookie with the same `domain`,
     * `path`, and `key`. The implementation SHOULD check that the old value in the store is equivalent to oldCookie -
     * how the conflict is resolved is up to the store.
     *
     * @remarks
     * - The `lastAccessed` property is always different between the two objects (to the precision possible via JavaScript's clock).
     *
     * - Both `creation` and `creationIndex` are guaranteed to be the same.
     *
     * - Stores MAY ignore or defer the `lastAccessed` change at the cost of affecting how cookies are selected for automatic deletion.
     *
     * - Stores may wish to optimize changing the `value` of the cookie in the store versus storing a new cookie.
     *
     * - The `newCookie` and `oldCookie` objects MUST NOT be modified.
     *
     * @param oldCookie - the cookie that is already present in the store.
     * @param newCookie - the cookie to replace the one already present in the store.
     */
    updateCookie(oldCookie: Cookie, newCookie: Cookie): Promise<void>;
    /**
     * Update an existing {@link Cookie}. The implementation MUST update the `value` for a cookie with the same `domain`,
     * `path`, and `key`. The implementation SHOULD check that the old value in the store is equivalent to oldCookie -
     * how the conflict is resolved is up to the store.
     *
     * @remarks
     * - The `lastAccessed` property is always different between the two objects (to the precision possible via JavaScript's clock).
     *
     * - Both `creation` and `creationIndex` are guaranteed to be the same.
     *
     * - Stores MAY ignore or defer the `lastAccessed` change at the cost of affecting how cookies are selected for automatic deletion.
     *
     * - Stores may wish to optimize changing the `value` of the cookie in the store versus storing a new cookie.
     *
     * - The `newCookie` and `oldCookie` objects MUST NOT be modified.
     *
     * @param oldCookie - the cookie that is already present in the store.
     * @param newCookie - the cookie to replace the one already present in the store.
     * @param callback - A function to call when the cookie has been updated or an error has occurred.
     */
    updateCookie(oldCookie: Cookie, newCookie: Cookie, callback: ErrorCallback): void;
    /**
     * Remove a cookie from the store (see notes on `findCookie` about the uniqueness constraint).
     *
     * @param domain - The cookie domain to match against.
     * @param path - The cookie path to match against.
     * @param key - The cookie name to match against.
     */
    removeCookie(domain: Nullable<string>, path: Nullable<string>, key: Nullable<string>): Promise<void>;
    /**
     * Remove a cookie from the store (see notes on `findCookie` about the uniqueness constraint).
     *
     * @param domain - The cookie domain to match against.
     * @param path - The cookie path to match against.
     * @param key - The cookie name to match against.
     * @param callback - A function to call when the cookie has been removed or an error occurs.
     */
    removeCookie(domain: Nullable<string>, path: Nullable<string>, key: Nullable<string>, callback: ErrorCallback): void;
    /**
     * Removes matching cookies from the store. The `path` parameter is optional and if missing,
     * means all paths in a domain should be removed.
     *
     * @param domain - The cookie domain to match against.
     * @param path - The cookie path to match against.
     */
    removeCookies(domain: string, path: Nullable<string>): Promise<void>;
    /**
     * Removes matching cookies from the store. The `path` parameter is optional and if missing,
     * means all paths in a domain should be removed.
     *
     * @param domain - The cookie domain to match against.
     * @param path - The cookie path to match against.
     * @param callback - A function to call when the cookies have been removed or an error occurs.
     */
    removeCookies(domain: string, path: Nullable<string>, callback: ErrorCallback): void;
    /**
     * Removes all cookies from the store.
     */
    removeAllCookies(): Promise<void>;
    /**
     * Removes all cookies from the store.
     *
     * @param callback - A function to call when all the cookies have been removed or an error occurs.
     */
    removeAllCookies(callback: ErrorCallback): void;
    /**
     * Gets all the cookies in the store.
     *
     * @remarks
     * - Cookies SHOULD be returned in creation order to preserve sorting via {@link cookieCompare}.
     */
    getAllCookies(): Promise<Cookie[]>;
    /**
     * Gets all the cookies in the store.
     *
     * @remarks
     * - Cookies SHOULD be returned in creation order to preserve sorting via {@link cookieCompare}.
     *
     * @param callback - A function to call when all the cookies have been retrieved or an error occurs.
     */
    getAllCookies(callback: Callback<Cookie[]>): void;
}

/**
 * The internal structure used in {@link MemoryCookieStore}.
 * @internal
 */
type MemoryCookieStoreIndex = {
    [domain: string]: {
        [path: string]: {
            [key: string]: Cookie;
        };
    };
};
/**
 * An in-memory {@link Store} implementation for {@link CookieJar}. This is the default implementation used by
 * {@link CookieJar} and supports both async and sync operations. Also supports serialization, getAllCookies, and removeAllCookies.
 * @public
 */
declare class MemoryCookieStore extends Store {
    /**
     * This value is `true` since {@link MemoryCookieStore} implements synchronous functionality.
     */
    synchronous: boolean;
    /**
     * @internal
     */
    idx: MemoryCookieStoreIndex;
    /**
     * Create a new {@link MemoryCookieStore}.
     */
    constructor();
    /**
     * Retrieve a {@link Cookie} with the given `domain`, `path`, and `key` (`name`). The RFC maintains that exactly
     * one of these cookies should exist in a store. If the store is using versioning, this means that the latest or
     * newest such cookie should be returned.
     *
     * @param domain - The cookie domain to match against.
     * @param path - The cookie path to match against.
     * @param key - The cookie name to match against.
     */
    findCookie(domain: Nullable<string>, path: Nullable<string>, key: Nullable<string>): Promise<Cookie | undefined>;
    /**
     * Retrieve a {@link Cookie} with the given `domain`, `path`, and `key` (`name`). The RFC maintains that exactly
     * one of these cookies should exist in a store. If the store is using versioning, this means that the latest or
     * newest such cookie should be returned.
     *
     * Callback takes an error and the resulting Cookie object. If no cookie is found then null MUST be passed instead (that is, not an error).
     * @param domain - The cookie domain to match against.
     * @param path - The cookie path to match against.
     * @param key - The cookie name to match against.
     * @param callback - A function to call with either the found cookie or an error.
     */
    findCookie(domain: Nullable<string>, path: Nullable<string>, key: Nullable<string>, callback: Callback<Cookie | undefined>): void;
    /**
     * Locates all {@link Cookie} values matching the given `domain` and `path`.
     *
     * The resulting list is checked for applicability to the current request according to the RFC (`domain-match`, `path-match`,
     * `http-only-flag`, `secure-flag`, `expiry`, and so on), so it's OK to use an optimistic search algorithm when implementing
     * this method. However, the search algorithm used SHOULD try to find cookies that {@link domainMatch} the `domain` and
     * {@link pathMatch} the `path` in order to limit the amount of checking that needs to be done.
     *
     * @remarks
     * - As of version `0.9.12`, the `allPaths` option to cookiejar.getCookies() above causes the path here to be `null`.
     *
     * - If the `path` is `null`, `path-matching` MUST NOT be performed (that is, `domain-matching` only).
     *
     * @param domain - The cookie domain to match against.
     * @param path - The cookie path to match against.
     * @param allowSpecialUseDomain - If `true` then special-use domain suffixes, will be allowed in matches. Defaults to `false`.
     */
    findCookies(domain: string, path: string, allowSpecialUseDomain?: boolean): Promise<Cookie[]>;
    /**
     * Locates all {@link Cookie} values matching the given `domain` and `path`.
     *
     * The resulting list is checked for applicability to the current request according to the RFC (`domain-match`, `path-match`,
     * `http-only-flag`, `secure-flag`, `expiry`, and so on), so it's OK to use an optimistic search algorithm when implementing
     * this method. However, the search algorithm used SHOULD try to find cookies that {@link domainMatch} the `domain` and
     * {@link pathMatch} the `path` in order to limit the amount of checking that needs to be done.
     *
     * @remarks
     * - As of version `0.9.12`, the `allPaths` option to cookiejar.getCookies() above causes the path here to be `null`.
     *
     * - If the `path` is `null`, `path-matching` MUST NOT be performed (that is, `domain-matching` only).
     *
     * @param domain - The cookie domain to match against.
     * @param path - The cookie path to match against.
     * @param allowSpecialUseDomain - If `true` then special-use domain suffixes, will be allowed in matches. Defaults to `false`.
     * @param callback - A function to call with either the found cookies or an error.
     */
    findCookies(domain: string, path: string, allowSpecialUseDomain?: boolean, callback?: Callback<Cookie[]>): void;
    /**
     * Adds a new {@link Cookie} to the store. The implementation SHOULD replace any existing cookie with the same `domain`,
     * `path`, and `key` properties.
     *
     * @remarks
     * - Depending on the nature of the implementation, it's possible that between the call to `fetchCookie` and `putCookie`
     * that a duplicate `putCookie` can occur.
     *
     * - The {@link Cookie} object MUST NOT be modified; as the caller has already updated the `creation` and `lastAccessed` properties.
     *
     * @param cookie - The cookie to store.
     */
    putCookie(cookie: Cookie): Promise<void>;
    /**
     * Adds a new {@link Cookie} to the store. The implementation SHOULD replace any existing cookie with the same `domain`,
     * `path`, and `key` properties.
     *
     * @remarks
     * - Depending on the nature of the implementation, it's possible that between the call to `fetchCookie` and `putCookie`
     * that a duplicate `putCookie` can occur.
     *
     * - The {@link Cookie} object MUST NOT be modified; as the caller has already updated the `creation` and `lastAccessed` properties.
     *
     * @param cookie - The cookie to store.
     * @param callback - A function to call when the cookie has been stored or an error has occurred.
     */
    putCookie(cookie: Cookie, callback: ErrorCallback): void;
    /**
     * Update an existing {@link Cookie}. The implementation MUST update the `value` for a cookie with the same `domain`,
     * `path`, and `key`. The implementation SHOULD check that the old value in the store is equivalent to oldCookie -
     * how the conflict is resolved is up to the store.
     *
     * @remarks
     * - The `lastAccessed` property is always different between the two objects (to the precision possible via JavaScript's clock).
     *
     * - Both `creation` and `creationIndex` are guaranteed to be the same.
     *
     * - Stores MAY ignore or defer the `lastAccessed` change at the cost of affecting how cookies are selected for automatic deletion.
     *
     * - Stores may wish to optimize changing the `value` of the cookie in the store versus storing a new cookie.
     *
     * - The `newCookie` and `oldCookie` objects MUST NOT be modified.
     *
     * @param oldCookie - the cookie that is already present in the store.
     * @param newCookie - the cookie to replace the one already present in the store.
     */
    updateCookie(oldCookie: Cookie, newCookie: Cookie): Promise<void>;
    /**
     * Update an existing {@link Cookie}. The implementation MUST update the `value` for a cookie with the same `domain`,
     * `path`, and `key`. The implementation SHOULD check that the old value in the store is equivalent to oldCookie -
     * how the conflict is resolved is up to the store.
     *
     * @remarks
     * - The `lastAccessed` property is always different between the two objects (to the precision possible via JavaScript's clock).
     *
     * - Both `creation` and `creationIndex` are guaranteed to be the same.
     *
     * - Stores MAY ignore or defer the `lastAccessed` change at the cost of affecting how cookies are selected for automatic deletion.
     *
     * - Stores may wish to optimize changing the `value` of the cookie in the store versus storing a new cookie.
     *
     * - The `newCookie` and `oldCookie` objects MUST NOT be modified.
     *
     * @param oldCookie - the cookie that is already present in the store.
     * @param newCookie - the cookie to replace the one already present in the store.
     * @param callback - A function to call when the cookie has been updated or an error has occurred.
     */
    updateCookie(oldCookie: Cookie, newCookie: Cookie, callback: ErrorCallback): void;
    /**
     * Remove a cookie from the store (see notes on `findCookie` about the uniqueness constraint).
     *
     * @param domain - The cookie domain to match against.
     * @param path - The cookie path to match against.
     * @param key - The cookie name to match against.
     */
    removeCookie(domain: string, path: string, key: string): Promise<void>;
    /**
     * Remove a cookie from the store (see notes on `findCookie` about the uniqueness constraint).
     *
     * @param domain - The cookie domain to match against.
     * @param path - The cookie path to match against.
     * @param key - The cookie name to match against.
     * @param callback - A function to call when the cookie has been removed or an error occurs.
     */
    removeCookie(domain: string, path: string, key: string, callback: ErrorCallback): void;
    /**
     * Removes matching cookies from the store. The `path` parameter is optional and if missing,
     * means all paths in a domain should be removed.
     *
     * @param domain - The cookie domain to match against.
     * @param path - The cookie path to match against.
     */
    removeCookies(domain: string, path: string): Promise<void>;
    /**
     * Removes matching cookies from the store. The `path` parameter is optional and if missing,
     * means all paths in a domain should be removed.
     *
     * @param domain - The cookie domain to match against.
     * @param path - The cookie path to match against.
     * @param callback - A function to call when the cookies have been removed or an error occurs.
     */
    removeCookies(domain: string, path: string, callback: ErrorCallback): void;
    /**
     * Removes all cookies from the store.
     */
    removeAllCookies(): Promise<void>;
    /**
     * Removes all cookies from the store.
     *
     * @param callback - A function to call when all the cookies have been removed or an error occurs.
     */
    removeAllCookies(callback: ErrorCallback): void;
    /**
     * Gets all the cookies in the store.
     *
     * @remarks
     * - Cookies SHOULD be returned in creation order to preserve sorting via {@link cookieCompare}.
     */
    getAllCookies(): Promise<Cookie[]>;
    /**
     * Gets all the cookies in the store.
     *
     * @remarks
     * - Cookies SHOULD be returned in creation order to preserve sorting via {@link cookieCompare}.
     *
     * @param callback - A function to call when all the cookies have been retrieved or an error occurs.
     */
    getAllCookies(callback: Callback<Cookie[]>): void;
}

/**
 * Answers "does the request-path path-match a given cookie-path?" as per {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.1.4 | RFC6265 Section 5.1.4}.
 * This is essentially a prefix-match where cookiePath is a prefix of reqPath.
 *
 * @remarks
 * A request-path path-matches a given cookie-path if at least one of
 * the following conditions holds:
 *
 * - The cookie-path and the request-path are identical.
 * - The cookie-path is a prefix of the request-path, and the last character of the cookie-path is %x2F ("/").
 * - The cookie-path is a prefix of the request-path, and the first character of the request-path that is not included in the cookie-path is a %x2F ("/") character.
 *
 * @param reqPath - the path of the request
 * @param cookiePath - the path of the cookie
 * @public
 */
declare function pathMatch(reqPath: string, cookiePath: string): boolean;

/**
 * Generates the permutation of all possible values that {@link domainMatch} the given `domain` parameter. The
 * array is in shortest-to-longest order. Useful when building custom {@link Store} implementations.
 *
 * @example
 * ```
 * permuteDomain('foo.bar.example.com')
 * // ['example.com', 'bar.example.com', 'foo.bar.example.com']
 * ```
 *
 * @public
 * @param domain - the domain to generate permutations for
 * @param allowSpecialUseDomain - flag to control if {@link https://www.rfc-editor.org/rfc/rfc6761.html | Special Use Domains} such as `localhost` should be allowed
 */
declare function permuteDomain(domain: string, allowSpecialUseDomain?: boolean): string[] | undefined;

/**
 * Options for configuring how {@link getPublicSuffix} behaves.
 * @public
 */
interface GetPublicSuffixOptions {
    /**
     * If set to `true` then the following {@link https://www.rfc-editor.org/rfc/rfc6761.html | Special Use Domains} will
     * be treated as if they were valid public suffixes ('local', 'example', 'invalid', 'localhost', 'test').
     *
     * @remarks
     * In testing scenarios it's common to configure the cookie store with so that `http://localhost` can be used as a domain:
     * ```json
     * {
     *   allowSpecialUseDomain: true,
     *   rejectPublicSuffixes: false
     * }
     * ```
     *
     * @defaultValue false
     */
    allowSpecialUseDomain?: boolean | undefined;
    /**
     * If set to `true` then any errors that occur while executing {@link getPublicSuffix} will be silently ignored.
     *
     * @defaultValue false
     */
    ignoreError?: boolean | undefined;
}
/**
 * Returns the public suffix of this hostname. The public suffix is the shortest domain
 * name upon which a cookie can be set.
 *
 * @remarks
 * A "public suffix" is a domain that is controlled by a
 * public registry, such as "com", "co.uk", and "pvt.k12.wy.us".
 * This step is essential for preventing attacker.com from
 * disrupting the integrity of example.com by setting a cookie
 * with a Domain attribute of "com".  Unfortunately, the set of
 * public suffixes (also known as "registry controlled domains")
 * changes over time.  If feasible, user agents SHOULD use an
 * up-to-date public suffix list, such as the one maintained by
 * the Mozilla project at http://publicsuffix.org/.
 * (See {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.3 | RFC6265 - Section 5.3})
 *
 * @example
 * ```
 * getPublicSuffix('www.example.com') === 'example.com'
 * getPublicSuffix('www.subdomain.example.com') === 'example.com'
 * ```
 *
 * @param domain - the domain attribute of a cookie
 * @param options - optional configuration for controlling how the public suffix is determined
 * @public
 */
declare function getPublicSuffix(domain: string, options?: GetPublicSuffixOptions): string | undefined;

/**
 * Represents a validation error.
 * @public
 */
declare class ParameterError extends Error {
}

/**
 * The version of `tough-cookie`
 * @public
 */
declare const version = "6.0.1";

/**
 * Transforms a domain name into a canonical domain name. The canonical domain name is a domain name
 * that has been trimmed, lowercased, stripped of leading dot, and optionally punycode-encoded
 * ({@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.1.2 | Section 5.1.2 of RFC 6265}). For
 * the most part, this function is idempotent (calling the function with the output from a previous call
 * returns the same output).
 *
 * @remarks
 * A canonicalized host name is the string generated by the following
 * algorithm:
 *
 * 1.  Convert the host name to a sequence of individual domain name
 *     labels.
 *
 * 2.  Convert each label that is not a Non-Reserved LDH (NR-LDH) label,
 *     to an A-label (see Section 2.3.2.1 of [RFC5890] for the former
 *     and latter), or to a "punycode label" (a label resulting from the
 *     "ToASCII" conversion in Section 4 of [RFC3490]), as appropriate
 *     (see Section 6.3 of this specification).
 *
 * 3.  Concatenate the resulting labels, separated by a %x2E (".")
 *     character.
 *
 * @example
 * ```
 * canonicalDomain('.EXAMPLE.com') === 'example.com'
 * ```
 *
 * @param domainName - the domain name to generate the canonical domain from
 * @public
 */
declare function canonicalDomain(domainName: Nullable<string>): string | undefined;

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
declare function cookieCompare(a: Cookie, b: Cookie): number;

/**
 * Configuration options used when calling `CookieJar.setCookie(...)`
 * @public
 */
interface SetCookieOptions {
    /**
     * Controls if a cookie string should be parsed using `loose` mode or not.
     * See {@link Cookie.parse} and {@link ParseCookieOptions} for more details.
     *
     * Defaults to `false` if not provided.
     */
    loose?: boolean | undefined;
    /**
     * Set this to 'none', 'lax', or 'strict' to enforce SameSite cookies upon storage.
     *
     * - `'strict'` - If the request is on the same "site for cookies" (see the RFC draft
     *     for more information), pass this option to add a layer of defense against CSRF.
     *
     * - `'lax'` - If the request is from another site, but is directly because of navigation
     *     by the user, such as, `<link type=prefetch>` or `<a href="...">`, then use `lax`.
     *
     * - `'none'` - This indicates a cross-origin request.
     *
     * - `undefined` - SameSite is not enforced! This can be a valid use-case for when
     *     CSRF isn't in the threat model of the system being built.
     *
     * Defaults to `undefined` if not provided.
     *
     * @remarks
     * - It is highly recommended that you read {@link https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-02##section-8.8 | RFC6265bis - Section 8.8}
     *    which discusses security considerations and defence on SameSite cookies in depth.
     */
    sameSiteContext?: 'strict' | 'lax' | 'none' | undefined;
    /**
     * Silently ignore things like parse errors and invalid domains. Store errors aren't ignored by this option.
     *
     * Defaults to `false` if not provided.
     */
    ignoreError?: boolean | undefined;
    /**
     * Indicates if this is an HTTP or non-HTTP API. Affects HttpOnly cookies.
     *
     * Defaults to `true` if not provided.
     */
    http?: boolean | undefined;
    /**
     * Forces the cookie creation and access time of cookies to this value when stored.
     *
     * Defaults to `Date.now()` if not provided.
     */
    now?: Date | undefined;
}
/**
 * Configuration options used when calling `CookieJar.getCookies(...)`.
 * @public
 */
interface GetCookiesOptions {
    /**
     * Indicates if this is an HTTP or non-HTTP API. Affects HttpOnly cookies.
     *
     * Defaults to `true` if not provided.
     */
    http?: boolean | undefined;
    /**
     * Perform `expiry-time` checking of cookies and asynchronously remove expired
     * cookies from the store.
     *
     * @remarks
     * - Using `false` returns expired cookies and does not remove them from the
     *     store, which is potentially useful for replaying `Set-Cookie` headers.
     *
     * Defaults to `true` if not provided.
     */
    expire?: boolean | undefined;
    /**
     * If `true`, do not scope cookies by path. If `false`, then RFC-compliant path scoping will be used.
     *
     * @remarks
     * - May not be supported by the underlying store (the default {@link MemoryCookieStore} supports it).
     *
     * Defaults to `false` if not provided.
     */
    allPaths?: boolean | undefined;
    /**
     * Set this to 'none', 'lax', or 'strict' to enforce SameSite cookies upon retrieval.
     *
     * - `'strict'` - If the request is on the same "site for cookies" (see the RFC draft
     *     for more information), pass this option to add a layer of defense against CSRF.
     *
     * - `'lax'` - If the request is from another site, but is directly because of navigation
     *     by the user, such as, `<link type=prefetch>` or `<a href="...">`, then use `lax`.
     *
     * - `'none'` - This indicates a cross-origin request.
     *
     * - `undefined` - SameSite is not enforced! This can be a valid use-case for when
     *     CSRF isn't in the threat model of the system being built.
     *
     * Defaults to `undefined` if not provided.
     *
     * @remarks
     * - It is highly recommended that you read {@link https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-02##section-8.8 | RFC6265bis - Section 8.8}
     *    which discusses security considerations and defence on SameSite cookies in depth.
     */
    sameSiteContext?: 'none' | 'lax' | 'strict' | undefined;
    /**
     * Flag to indicate if the returned cookies should be sorted or not.
     *
     * Defaults to `undefined` if not provided.
     */
    sort?: boolean | undefined;
}
/**
 * Configuration settings to be used with a {@link CookieJar}.
 * @public
 */
interface CreateCookieJarOptions {
    /**
     * Reject cookies that match those defined in the {@link https://publicsuffix.org/ | Public Suffix List} (e.g.; domains like "com" and "co.uk").
     *
     * Defaults to `true` if not specified.
     */
    rejectPublicSuffixes?: boolean | undefined;
    /**
     * Accept malformed cookies like `bar` and `=bar`, which have an implied empty name but are not RFC-compliant.
     *
     * Defaults to `false` if not specified.
     */
    looseMode?: boolean | undefined;
    /**
     * Controls how cookie prefixes are handled. See {@link PrefixSecurityEnum}.
     *
     * Defaults to `silent` if not specified.
     */
    prefixSecurity?: 'strict' | 'silent' | 'unsafe-disabled' | undefined;
    /**
     * Accepts {@link https://datatracker.ietf.org/doc/html/rfc6761 | special-use domains } such as `local`.
     * This is not in the standard, but is used sometimes on the web and is accepted by most browsers. It is
     * also useful for testing purposes.
     *
     * Defaults to `true` if not specified.
     */
    allowSpecialUseDomain?: boolean | undefined;
    /**
     * Flag to indicate if localhost and loopback addresses with an unsecure scheme should store and retrieve `Secure` cookies.
     *
     * If `true`, localhost, loopback addresses or similarly local addresses are treated as secure contexts
     * and thus will store and retrieve `Secure` cookies even with an unsecure scheme.
     *
     * If `false`, only secure schemes (`https` and `wss`) will store and retrieve `Secure` cookies.
     *
     * @remarks
     * When set to `true`, the {@link https://w3c.github.io/webappsec-secure-contexts/#potentially-trustworthy-origin | potentially trustworthy}
     *  algorithm is followed to determine if a URL is considered a secure context.
     */
    allowSecureOnLocal?: boolean | undefined;
}
/**
 * A CookieJar is for storage and retrieval of {@link Cookie} objects as defined in
 * {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.3 | RFC6265 - Section 5.3}.
 *
 * It also supports a pluggable persistence layer via {@link Store}.
 * @public
 */
declare class CookieJar {
    private readonly rejectPublicSuffixes;
    private readonly enableLooseMode;
    private readonly allowSpecialUseDomain;
    private readonly allowSecureOnLocal;
    /**
     * The configured {@link Store} for the {@link CookieJar}.
     */
    readonly store: Store;
    /**
     * The configured {@link PrefixSecurityEnum} value for the {@link CookieJar}.
     */
    readonly prefixSecurity: string;
    /**
     * Creates a new `CookieJar` instance.
     *
     * @remarks
     * - If a custom store is not passed to the constructor, an in-memory store ({@link MemoryCookieStore} will be created and used.
     * - If a boolean value is passed as the `options` parameter, this is equivalent to passing `{ rejectPublicSuffixes: <value> }`
     *
     * @param store - a custom {@link Store} implementation (defaults to {@link MemoryCookieStore})
     * @param options - configures how cookies are processed by the cookie jar
     */
    constructor(store?: Nullable<Store>, options?: CreateCookieJarOptions | boolean);
    private callSync;
    /**
     * Attempt to set the {@link Cookie} in the {@link CookieJar}.
     *
     * @remarks
     * - If successfully persisted, the {@link Cookie} will have updated
     *     {@link Cookie.creation}, {@link Cookie.lastAccessed} and {@link Cookie.hostOnly}
     *     properties.
     *
     * - As per the RFC, the {@link Cookie.hostOnly} flag is set if there was no `Domain={value}`
     *     attribute on the cookie string. The {@link Cookie.domain} property is set to the
     *     fully-qualified hostname of `currentUrl` in this case. Matching this cookie requires an
     *     exact hostname match (not a {@link domainMatch} as per usual)
     *
     * @param cookie - The cookie object or cookie string to store. A string value will be parsed into a cookie using {@link Cookie.parse}.
     * @param url - The domain to store the cookie with.
     * @param callback - A function to call after a cookie has been successfully stored.
     * @public
     */
    setCookie(cookie: string | Cookie, url: string | URL, callback: Callback<Cookie | undefined>): void;
    /**
     * Attempt to set the {@link Cookie} in the {@link CookieJar}.
     *
     * @remarks
     * - If successfully persisted, the {@link Cookie} will have updated
     *     {@link Cookie.creation}, {@link Cookie.lastAccessed} and {@link Cookie.hostOnly}
     *     properties.
     *
     * - As per the RFC, the {@link Cookie.hostOnly} flag is set if there was no `Domain={value}`
     *     attribute on the cookie string. The {@link Cookie.domain} property is set to the
     *     fully-qualified hostname of `currentUrl` in this case. Matching this cookie requires an
     *     exact hostname match (not a {@link domainMatch} as per usual)
     *
     * @param cookie - The cookie object or cookie string to store. A string value will be parsed into a cookie using {@link Cookie.parse}.
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when storing the cookie.
     * @param callback - A function to call after a cookie has been successfully stored.
     * @public
     */
    setCookie(cookie: string | Cookie, url: string | URL, options: SetCookieOptions, callback: Callback<Cookie | undefined>): void;
    /**
     * Attempt to set the {@link Cookie} in the {@link CookieJar}.
     *
     * @remarks
     * - If successfully persisted, the {@link Cookie} will have updated
     *     {@link Cookie.creation}, {@link Cookie.lastAccessed} and {@link Cookie.hostOnly}
     *     properties.
     *
     * - As per the RFC, the {@link Cookie.hostOnly} flag is set if there was no `Domain={value}`
     *     attribute on the cookie string. The {@link Cookie.domain} property is set to the
     *     fully-qualified hostname of `currentUrl` in this case. Matching this cookie requires an
     *     exact hostname match (not a {@link domainMatch} as per usual)
     *
     * @param cookie - The cookie object or cookie string to store. A string value will be parsed into a cookie using {@link Cookie.parse}.
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when storing the cookie.
     * @public
     */
    setCookie(cookie: string | Cookie, url: string | URL, options?: SetCookieOptions): Promise<Cookie | undefined>;
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    setCookie(cookie: string | Cookie, url: string | URL, options: SetCookieOptions | Callback<Cookie | undefined>, callback?: Callback<Cookie | undefined>): unknown;
    /**
     * Synchronously attempt to set the {@link Cookie} in the {@link CookieJar}.
     *
     * <strong>Note:</strong> Only works if the configured {@link Store} is also synchronous.
     *
     * @remarks
     * - If successfully persisted, the {@link Cookie} will have updated
     *     {@link Cookie.creation}, {@link Cookie.lastAccessed} and {@link Cookie.hostOnly}
     *     properties.
     *
     * - As per the RFC, the {@link Cookie.hostOnly} flag is set if there was no `Domain={value}`
     *     attribute on the cookie string. The {@link Cookie.domain} property is set to the
     *     fully-qualified hostname of `currentUrl` in this case. Matching this cookie requires an
     *     exact hostname match (not a {@link domainMatch} as per usual)
     *
     * @param cookie - The cookie object or cookie string to store. A string value will be parsed into a cookie using {@link Cookie.parse}.
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when storing the cookie.
     * @public
     */
    setCookieSync(cookie: string | Cookie, url: string, options?: SetCookieOptions): Cookie | undefined;
    /**
     * Retrieve the list of cookies that can be sent in a Cookie header for the
     * current URL.
     *
     * @remarks
     * - The array of cookies returned will be sorted according to {@link cookieCompare}.
     *
     * - The {@link Cookie.lastAccessed} property will be updated on all returned cookies.
     *
     * @param url - The domain to store the cookie with.
     */
    getCookies(url: string): Promise<Cookie[]>;
    /**
     * Retrieve the list of cookies that can be sent in a Cookie header for the
     * current URL.
     *
     * @remarks
     * - The array of cookies returned will be sorted according to {@link cookieCompare}.
     *
     * - The {@link Cookie.lastAccessed} property will be updated on all returned cookies.
     *
     * @param url - The domain to store the cookie with.
     * @param callback - A function to call after a cookie has been successfully retrieved.
     */
    getCookies(url: string, callback: Callback<Cookie[]>): void;
    /**
     * Retrieve the list of cookies that can be sent in a Cookie header for the
     * current URL.
     *
     * @remarks
     * - The array of cookies returned will be sorted according to {@link cookieCompare}.
     *
     * - The {@link Cookie.lastAccessed} property will be updated on all returned cookies.
     *
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when retrieving the cookies.
     * @param callback - A function to call after a cookie has been successfully retrieved.
     */
    getCookies(url: string | URL, options: GetCookiesOptions | undefined, callback: Callback<Cookie[]>): void;
    /**
     * Retrieve the list of cookies that can be sent in a Cookie header for the
     * current URL.
     *
     * @remarks
     * - The array of cookies returned will be sorted according to {@link cookieCompare}.
     *
     * - The {@link Cookie.lastAccessed} property will be updated on all returned cookies.
     *
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when retrieving the cookies.
     */
    getCookies(url: string | URL, options?: GetCookiesOptions): Promise<Cookie[]>;
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    getCookies(url: string | URL, options: GetCookiesOptions | undefined | Callback<Cookie[]>, callback?: Callback<Cookie[]>): unknown;
    /**
     * Synchronously retrieve the list of cookies that can be sent in a Cookie header for the
     * current URL.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     *
     * @remarks
     * - The array of cookies returned will be sorted according to {@link cookieCompare}.
     *
     * - The {@link Cookie.lastAccessed} property will be updated on all returned cookies.
     *
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when retrieving the cookies.
     */
    getCookiesSync(url: string, options?: GetCookiesOptions): Cookie[];
    /**
     * Accepts the same options as `.getCookies()` but returns a string suitable for a
     * `Cookie` header rather than an Array.
     *
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when retrieving the cookies.
     * @param callback - A function to call after the `Cookie` header string has been created.
     */
    getCookieString(url: string, options: GetCookiesOptions, callback: Callback<string | undefined>): void;
    /**
     * Accepts the same options as `.getCookies()` but returns a string suitable for a
     * `Cookie` header rather than an Array.
     *
     * @param url - The domain to store the cookie with.
     * @param callback - A function to call after the `Cookie` header string has been created.
     */
    getCookieString(url: string, callback: Callback<string | undefined>): void;
    /**
     * Accepts the same options as `.getCookies()` but returns a string suitable for a
     * `Cookie` header rather than an Array.
     *
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when retrieving the cookies.
     */
    getCookieString(url: string, options?: GetCookiesOptions): Promise<string>;
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    getCookieString(url: string, options: GetCookiesOptions | Callback<string | undefined>, callback?: Callback<string | undefined>): unknown;
    /**
     * Synchronous version of `.getCookieString()`. Accepts the same options as `.getCookies()` but returns a string suitable for a
     * `Cookie` header rather than an Array.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     *
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when retrieving the cookies.
     */
    getCookieStringSync(url: string, options?: GetCookiesOptions): string;
    /**
     * Returns an array of strings suitable for `Set-Cookie` headers. Accepts the same options
     * as `.getCookies()`.
     *
     * @param url - The domain to store the cookie with.
     * @param callback - A function to call after the `Set-Cookie` header strings have been created.
     */
    getSetCookieStrings(url: string, callback: Callback<string[] | undefined>): void;
    /**
     * Returns an array of strings suitable for `Set-Cookie` headers. Accepts the same options
     * as `.getCookies()`.
     *
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when retrieving the cookies.
     * @param callback - A function to call after the `Set-Cookie` header strings have been created.
     */
    getSetCookieStrings(url: string, options: GetCookiesOptions, callback: Callback<string[] | undefined>): void;
    /**
     * Returns an array of strings suitable for `Set-Cookie` headers. Accepts the same options
     * as `.getCookies()`.
     *
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when retrieving the cookies.
     */
    getSetCookieStrings(url: string, options?: GetCookiesOptions): Promise<string[] | undefined>;
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    getSetCookieStrings(url: string, options: GetCookiesOptions, callback?: Callback<string[] | undefined>): unknown;
    /**
     * Synchronous version of `.getSetCookieStrings()`. Returns an array of strings suitable for `Set-Cookie` headers.
     * Accepts the same options as `.getCookies()`.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     *
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when retrieving the cookies.
     */
    getSetCookieStringsSync(url: string, options?: GetCookiesOptions): string[];
    /**
     * Serialize the CookieJar if the underlying store supports `.getAllCookies`.
     * @param callback - A function to call after the CookieJar has been serialized
     */
    serialize(callback: Callback<SerializedCookieJar>): void;
    /**
     * Serialize the CookieJar if the underlying store supports `.getAllCookies`.
     */
    serialize(): Promise<SerializedCookieJar>;
    /**
     * Serialize the CookieJar if the underlying store supports `.getAllCookies`.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     */
    serializeSync(): SerializedCookieJar | undefined;
    /**
     * Alias of {@link CookieJar.serializeSync}. Allows the cookie to be serialized
     * with `JSON.stringify(cookieJar)`.
     */
    toJSON(): SerializedCookieJar | undefined;
    /**
     * Use the class method CookieJar.deserialize instead of calling this directly
     * @internal
     */
    _importCookies(serialized: unknown, callback: Callback<CookieJar>): void;
    /**
     * @internal
     */
    _importCookiesSync(serialized: unknown): void;
    /**
     * Produces a deep clone of this CookieJar. Modifications to the original do
     * not affect the clone, and vice versa.
     *
     * @remarks
     * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
     *
     * - Transferring between store types is supported so long as the source
     *     implements `.getAllCookies()` and the destination implements `.putCookie()`.
     *
     * @param callback - A function to call when the CookieJar is cloned.
     */
    clone(callback: Callback<CookieJar>): void;
    /**
     * Produces a deep clone of this CookieJar. Modifications to the original do
     * not affect the clone, and vice versa.
     *
     * @remarks
     * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
     *
     * - Transferring between store types is supported so long as the source
     *     implements `.getAllCookies()` and the destination implements `.putCookie()`.
     *
     * @param newStore - The target {@link Store} to clone cookies into.
     * @param callback - A function to call when the CookieJar is cloned.
     */
    clone(newStore: Store, callback: Callback<CookieJar>): void;
    /**
     * Produces a deep clone of this CookieJar. Modifications to the original do
     * not affect the clone, and vice versa.
     *
     * @remarks
     * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
     *
     * - Transferring between store types is supported so long as the source
     *     implements `.getAllCookies()` and the destination implements `.putCookie()`.
     *
     * @param newStore - The target {@link Store} to clone cookies into.
     */
    clone(newStore?: Store): Promise<CookieJar>;
    /**
     * @internal
     */
    _cloneSync(newStore?: Store): CookieJar | undefined;
    /**
     * Produces a deep clone of this CookieJar. Modifications to the original do
     * not affect the clone, and vice versa.
     *
     * <strong>Note</strong>: Only works if both the configured Store and destination
     * Store are synchronous.
     *
     * @remarks
     * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
     *
     * - Transferring between store types is supported so long as the source
     *     implements `.getAllCookies()` and the destination implements `.putCookie()`.
     *
     * @param newStore - The target {@link Store} to clone cookies into.
     */
    cloneSync(newStore?: Store): CookieJar | undefined;
    /**
     * Removes all cookies from the CookieJar.
     *
     * @remarks
     * - This is a new backwards-compatible feature of tough-cookie version 2.5,
     *     so not all Stores will implement it efficiently. For Stores that do not
     *     implement `removeAllCookies`, the fallback is to call `removeCookie` after
     *     `getAllCookies`.
     *
     * - If `getAllCookies` fails or isn't implemented in the Store, an error is returned.
     *
     * - If one or more of the `removeCookie` calls fail, only the first error is returned.
     *
     * @param callback - A function to call when all the cookies have been removed.
     */
    removeAllCookies(callback: ErrorCallback): void;
    /**
     * Removes all cookies from the CookieJar.
     *
     * @remarks
     * - This is a new backwards-compatible feature of tough-cookie version 2.5,
     *     so not all Stores will implement it efficiently. For Stores that do not
     *     implement `removeAllCookies`, the fallback is to call `removeCookie` after
     *     `getAllCookies`.
     *
     * - If `getAllCookies` fails or isn't implemented in the Store, an error is returned.
     *
     * - If one or more of the `removeCookie` calls fail, only the first error is returned.
     */
    removeAllCookies(): Promise<void>;
    /**
     * Removes all cookies from the CookieJar.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     *
     * @remarks
     * - This is a new backwards-compatible feature of tough-cookie version 2.5,
     *     so not all Stores will implement it efficiently. For Stores that do not
     *     implement `removeAllCookies`, the fallback is to call `removeCookie` after
     *     `getAllCookies`.
     *
     * - If `getAllCookies` fails or isn't implemented in the Store, an error is returned.
     *
     * - If one or more of the `removeCookie` calls fail, only the first error is returned.
     */
    removeAllCookiesSync(): void;
    /**
     * A new CookieJar is created and the serialized {@link Cookie} values are added to
     * the underlying store. Each {@link Cookie} is added via `store.putCookie(...)` in
     * the order in which they appear in the serialization.
     *
     * @remarks
     * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
     *
     * - As a convenience, if `strOrObj` is a string, it is passed through `JSON.parse` first.
     *
     * @param strOrObj - A JSON string or object representing the deserialized cookies.
     * @param callback - A function to call after the {@link CookieJar} has been deserialized.
     */
    static deserialize(strOrObj: string | object, callback: Callback<CookieJar>): void;
    /**
     * A new CookieJar is created and the serialized {@link Cookie} values are added to
     * the underlying store. Each {@link Cookie} is added via `store.putCookie(...)` in
     * the order in which they appear in the serialization.
     *
     * @remarks
     * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
     *
     * - As a convenience, if `strOrObj` is a string, it is passed through `JSON.parse` first.
     *
     * @param strOrObj - A JSON string or object representing the deserialized cookies.
     * @param store - The underlying store to persist the deserialized cookies into.
     * @param callback - A function to call after the {@link CookieJar} has been deserialized.
     */
    static deserialize(strOrObj: string | object, store: Store, callback: Callback<CookieJar>): void;
    /**
     * A new CookieJar is created and the serialized {@link Cookie} values are added to
     * the underlying store. Each {@link Cookie} is added via `store.putCookie(...)` in
     * the order in which they appear in the serialization.
     *
     * @remarks
     * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
     *
     * - As a convenience, if `strOrObj` is a string, it is passed through `JSON.parse` first.
     *
     * @param strOrObj - A JSON string or object representing the deserialized cookies.
     * @param store - The underlying store to persist the deserialized cookies into.
     */
    static deserialize(strOrObj: string | object, store?: Store): Promise<CookieJar>;
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    static deserialize(strOrObj: string | object, store?: Store | Callback<CookieJar>, callback?: Callback<CookieJar>): unknown;
    /**
     * A new CookieJar is created and the serialized {@link Cookie} values are added to
     * the underlying store. Each {@link Cookie} is added via `store.putCookie(...)` in
     * the order in which they appear in the serialization.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     *
     * @remarks
     * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
     *
     * - As a convenience, if `strOrObj` is a string, it is passed through `JSON.parse` first.
     *
     * @param strOrObj - A JSON string or object representing the deserialized cookies.
     * @param store - The underlying store to persist the deserialized cookies into.
     */
    static deserializeSync(strOrObj: string | SerializedCookieJar, store?: Store): CookieJar;
    /**
     * Alias of {@link CookieJar.deserializeSync}.
     *
     * @remarks
     * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
     *
     * - As a convenience, if `strOrObj` is a string, it is passed through `JSON.parse` first.
     *
     * @param jsonString - A JSON string or object representing the deserialized cookies.
     * @param store - The underlying store to persist the deserialized cookies into.
     */
    static fromJSON(jsonString: string | SerializedCookieJar, store?: Store): CookieJar;
}

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
declare function defaultPath(path?: Nullable<string>): string;

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
declare function domainMatch(domain?: Nullable<string>, cookieDomain?: Nullable<string>, canonicalize?: boolean): boolean | undefined;

/**
 * Format a {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date | Date} into
 * the {@link https://www.rfc-editor.org/rfc/rfc2616#section-3.3.1 | preferred Internet standard format}
 * defined in {@link https://www.rfc-editor.org/rfc/rfc822#section-5 | RFC822} and
 * updated in {@link https://www.rfc-editor.org/rfc/rfc1123#page-55 | RFC1123}.
 *
 * @example
 * ```
 * formatDate(new Date(0)) === 'Thu, 01 Jan 1970 00:00:00 GMT`
 * ```
 *
 * @param date - the date value to format
 * @public
 */
declare function formatDate(date: Date): string;

/**
 * Parse a cookie date string into a {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date | Date}. Parses according to
 * {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.1.1 | RFC6265 - Section 5.1.1}, not
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse | Date.parse()}.
 *
 * @remarks
 *
 * This implementation is compliant with RFC6265 Section 5.1.1 and incorporates
 * {@link https://www.rfc-editor.org/errata/eid4148 | RFC6265 Erratum 4148 - Grammar Fixed}
 * which corrects the ABNF grammar for day-of-month, year, and time to make trailing
 * non-digit characters optional (changing `( )` to `[ ]`).
 *
 * Also compatible with {@link https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-21 | draft-ietf-httpbis-rfc6265bis-21}
 * which maintains the same date parsing algorithm with additional clarifications.
 *
 * @example
 * ```
 * parseDate('Wed, 09 Jun 2021 10:18:14 GMT')
 * ```
 *
 * @param cookieDate - the cookie date string
 * @returns Date if valid, undefined if invalid
 * @public
 */
declare function parseDate(cookieDate: Nullable<string>): Date | undefined;

/**
 * Generates the permutation of all possible values that {@link pathMatch} the `path` parameter.
 * The array is in longest-to-shortest order.  Useful when building custom {@link Store} implementations.
 *
 * @example
 * ```
 * permutePath('/foo/bar/')
 * // ['/foo/bar/', '/foo/bar', '/foo', '/']
 * ```
 *
 * @param path - the path to generate permutations for
 * @public
 */
declare function permutePath(path: string): string[];

/**
 * {@inheritDoc Cookie.parse}
 * @public
 */
declare function parse(str: string, options?: ParseCookieOptions): Cookie | undefined;
/**
 * {@inheritDoc Cookie.fromJSON}
 * @public
 */
declare function fromJSON(str: unknown): Cookie | undefined;

export { type Callback, Cookie, CookieJar, type CreateCookieJarOptions, type CreateCookieOptions, type ErrorCallback, type GetCookiesOptions, type GetPublicSuffixOptions, MemoryCookieStore, type MemoryCookieStoreIndex, type Nullable, ParameterError, type ParseCookieOptions, PrefixSecurityEnum, type SerializedCookie, type SerializedCookieJar, type SetCookieOptions, Store, canonicalDomain, cookieCompare, defaultPath, domainMatch, formatDate, fromJSON, getPublicSuffix, parse, parseDate, pathMatch, permuteDomain, permutePath, version };
