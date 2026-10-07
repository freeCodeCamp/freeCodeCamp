import { Store } from '../store';
import { Cookie } from './cookie';
import { Callback, ErrorCallback, Nullable } from '../utils';
import { SerializedCookieJar } from './constants';
/**
 * Configuration options used when calling `CookieJar.setCookie(...)`
 * @public
 */
export interface SetCookieOptions {
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
     * - `undefined` - SameSite is not be enforced! This can be a valid use-case for when
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
export interface GetCookiesOptions {
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
     *     store which is potentially useful for replaying `Set-Cookie` headers.
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
     * - `undefined` - SameSite is not be enforced! This can be a valid use-case for when
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
export interface CreateCookieJarOptions {
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
}
/**
 * A CookieJar is for storage and retrieval of {@link Cookie} objects as defined in
 * {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.3 | RFC6265 - Section 5.3}.
 *
 * It also supports a pluggable persistence layer via {@link Store}.
 * @public
 */
export declare class CookieJar {
    private readonly rejectPublicSuffixes;
    private readonly enableLooseMode;
    private readonly allowSpecialUseDomain;
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
     *     atttribute on the cookie string. The {@link Cookie.domain} property is set to the
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
     *     atttribute on the cookie string. The {@link Cookie.domain} property is set to the
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
     *     atttribute on the cookie string. The {@link Cookie.domain} property is set to the
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
     *     atttribute on the cookie string. The {@link Cookie.domain} property is set to the
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
