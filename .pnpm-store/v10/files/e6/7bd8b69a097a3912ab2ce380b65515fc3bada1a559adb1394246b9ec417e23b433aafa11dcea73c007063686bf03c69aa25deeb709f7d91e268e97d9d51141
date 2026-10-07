"use strict";
// disabling this lint on this whole file because Store should be abstract
// but we have implementations in the wild that may not implement all features
/* eslint-disable @typescript-eslint/no-unused-vars */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
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
class Store {
    constructor() {
        this.synchronous = false;
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    findCookie(_domain, _path, _key, _callback) {
        throw new Error('findCookie is not implemented');
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    findCookies(_domain, _path, _allowSpecialUseDomain = false, _callback) {
        throw new Error('findCookies is not implemented');
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    putCookie(_cookie, _callback) {
        throw new Error('putCookie is not implemented');
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    updateCookie(_oldCookie, _newCookie, _callback) {
        // recommended default implementation:
        // return this.putCookie(newCookie, cb);
        throw new Error('updateCookie is not implemented');
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    removeCookie(_domain, _path, _key, _callback) {
        throw new Error('removeCookie is not implemented');
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    removeCookies(_domain, _path, _callback) {
        throw new Error('removeCookies is not implemented');
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    removeAllCookies(_callback) {
        throw new Error('removeAllCookies is not implemented');
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    getAllCookies(_callback) {
        throw new Error('getAllCookies is not implemented (therefore jar cannot be serialized)');
    }
}
exports.Store = Store;
