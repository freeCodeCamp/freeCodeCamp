import type { Cookie } from './cookie';
import type { Callback, ErrorCallback, Nullable } from './utils';
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
export declare class Store {
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
