"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryCookieStore = void 0;
const pathMatch_1 = require("./pathMatch");
const permuteDomain_1 = require("./permuteDomain");
const store_1 = require("./store");
const utils_1 = require("./utils");
/**
 * An in-memory {@link Store} implementation for {@link CookieJar}. This is the default implementation used by
 * {@link CookieJar} and supports both async and sync operations. Also supports serialization, getAllCookies, and removeAllCookies.
 * @public
 */
class MemoryCookieStore extends store_1.Store {
    /**
     * Create a new {@link MemoryCookieStore}.
     */
    constructor() {
        super();
        this.synchronous = true;
        this.idx = Object.create(null);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    findCookie(domain, path, key, callback) {
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        if (domain == null || path == null || key == null) {
            return promiseCallback.resolve(undefined);
        }
        const result = this.idx[domain]?.[path]?.[key];
        return promiseCallback.resolve(result);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    findCookies(domain, path, allowSpecialUseDomain = false, callback) {
        if (typeof allowSpecialUseDomain === 'function') {
            callback = allowSpecialUseDomain;
            // TODO: It's weird that `allowSpecialUseDomain` defaults to false with no callback,
            // but true with a callback. This is legacy behavior from v4.
            allowSpecialUseDomain = true;
        }
        const results = [];
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        if (!domain) {
            return promiseCallback.resolve([]);
        }
        let pathMatcher;
        if (!path) {
            // null means "all paths"
            pathMatcher = function matchAll(domainIndex) {
                for (const curPath in domainIndex) {
                    const pathIndex = domainIndex[curPath];
                    for (const key in pathIndex) {
                        const value = pathIndex[key];
                        if (value) {
                            results.push(value);
                        }
                    }
                }
            };
        }
        else {
            pathMatcher = function matchRFC(domainIndex) {
                //NOTE: we should use path-match algorithm from S5.1.4 here
                //(see : https://github.com/ChromiumWebApps/chromium/blob/b3d3b4da8bb94c1b2e061600df106d590fda3620/net/cookies/canonical_cookie.cc#L299)
                for (const cookiePath in domainIndex) {
                    if ((0, pathMatch_1.pathMatch)(path, cookiePath)) {
                        const pathIndex = domainIndex[cookiePath];
                        for (const key in pathIndex) {
                            const value = pathIndex[key];
                            if (value) {
                                results.push(value);
                            }
                        }
                    }
                }
            };
        }
        const domains = (0, permuteDomain_1.permuteDomain)(domain, allowSpecialUseDomain) || [domain];
        const idx = this.idx;
        domains.forEach((curDomain) => {
            const domainIndex = idx[curDomain];
            if (!domainIndex) {
                return;
            }
            pathMatcher(domainIndex);
        });
        return promiseCallback.resolve(results);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    putCookie(cookie, callback) {
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        const { domain, path, key } = cookie;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (domain == null || path == null || key == null) {
            return promiseCallback.resolve(undefined);
        }
        const domainEntry = this.idx[domain] ??
            Object.create(null);
        this.idx[domain] = domainEntry;
        const pathEntry = domainEntry[path] ??
            Object.create(null);
        domainEntry[path] = pathEntry;
        pathEntry[key] = cookie;
        return promiseCallback.resolve(undefined);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    updateCookie(_oldCookie, newCookie, callback) {
        // updateCookie() may avoid updating cookies that are identical.  For example,
        // lastAccessed may not be important to some stores and an equality
        // comparison could exclude that field.
        // Don't return a value when using a callback, so that the return type is truly "void"
        if (callback)
            this.putCookie(newCookie, callback);
        else
            return this.putCookie(newCookie);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    removeCookie(domain, path, key, callback) {
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        delete this.idx[domain]?.[path]?.[key];
        return promiseCallback.resolve(undefined);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    removeCookies(domain, path, callback) {
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        const domainEntry = this.idx[domain];
        if (domainEntry) {
            if (path) {
                // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                delete domainEntry[path];
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                delete this.idx[domain];
            }
        }
        return promiseCallback.resolve(undefined);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    removeAllCookies(callback) {
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        this.idx = Object.create(null);
        return promiseCallback.resolve(undefined);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    getAllCookies(callback) {
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        const cookies = [];
        const idx = this.idx;
        const domains = Object.keys(idx);
        domains.forEach((domain) => {
            const domainEntry = idx[domain] ?? {};
            const paths = Object.keys(domainEntry);
            paths.forEach((path) => {
                const pathEntry = domainEntry[path] ?? {};
                const keys = Object.keys(pathEntry);
                keys.forEach((key) => {
                    const keyEntry = pathEntry[key];
                    if (keyEntry != null) {
                        cookies.push(keyEntry);
                    }
                });
            });
        });
        // Sort by creationIndex so deserializing retains the creation order.
        // When implementing your own store, this SHOULD retain the order too
        cookies.sort((a, b) => {
            return (a.creationIndex || 0) - (b.creationIndex || 0);
        });
        return promiseCallback.resolve(cookies);
    }
}
exports.MemoryCookieStore = MemoryCookieStore;
