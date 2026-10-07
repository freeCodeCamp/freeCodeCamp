"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieJar = void 0;
const getPublicSuffix_1 = require("../getPublicSuffix");
const validators = __importStar(require("../validators"));
const validators_1 = require("../validators");
const store_1 = require("../store");
const memstore_1 = require("../memstore");
const pathMatch_1 = require("../pathMatch");
const cookie_1 = require("./cookie");
const utils_1 = require("../utils");
const canonicalDomain_1 = require("./canonicalDomain");
const constants_1 = require("./constants");
const defaultPath_1 = require("./defaultPath");
const domainMatch_1 = require("./domainMatch");
const cookieCompare_1 = require("./cookieCompare");
const version_1 = require("../version");
const defaultSetCookieOptions = {
    loose: false,
    sameSiteContext: undefined,
    ignoreError: false,
    http: true,
};
const defaultGetCookieOptions = {
    http: true,
    expire: true,
    allPaths: false,
    sameSiteContext: undefined,
    sort: undefined,
};
const SAME_SITE_CONTEXT_VAL_ERR = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
function getCookieContext(url) {
    if (url &&
        typeof url === 'object' &&
        'hostname' in url &&
        typeof url.hostname === 'string' &&
        'pathname' in url &&
        typeof url.pathname === 'string' &&
        'protocol' in url &&
        typeof url.protocol === 'string') {
        return {
            hostname: url.hostname,
            pathname: url.pathname,
            protocol: url.protocol,
        };
    }
    else if (typeof url === 'string') {
        try {
            return new URL(decodeURI(url));
        }
        catch {
            return new URL(url);
        }
    }
    else {
        throw new validators_1.ParameterError('`url` argument is not a string or URL.');
    }
}
function checkSameSiteContext(value) {
    const context = String(value).toLowerCase();
    if (context === 'none' || context === 'lax' || context === 'strict') {
        return context;
    }
    else {
        return undefined;
    }
}
/**
 *  If the cookie-name begins with a case-sensitive match for the
 *  string "__Secure-", abort these steps and ignore the cookie
 *  entirely unless the cookie's secure-only-flag is true.
 * @param cookie
 * @returns boolean
 */
function isSecurePrefixConditionMet(cookie) {
    const startsWithSecurePrefix = typeof cookie.key === 'string' && cookie.key.startsWith('__Secure-');
    return !startsWithSecurePrefix || cookie.secure;
}
/**
 *  If the cookie-name begins with a case-sensitive match for the
 *  string "__Host-", abort these steps and ignore the cookie
 *  entirely unless the cookie meets all the following criteria:
 *    1.  The cookie's secure-only-flag is true.
 *    2.  The cookie's host-only-flag is true.
 *    3.  The cookie-attribute-list contains an attribute with an
 *        attribute-name of "Path", and the cookie's path is "/".
 * @param cookie
 * @returns boolean
 */
function isHostPrefixConditionMet(cookie) {
    const startsWithHostPrefix = typeof cookie.key === 'string' && cookie.key.startsWith('__Host-');
    return (!startsWithHostPrefix ||
        Boolean(cookie.secure &&
            cookie.hostOnly &&
            cookie.path != null &&
            cookie.path === '/'));
}
function getNormalizedPrefixSecurity(prefixSecurity) {
    const normalizedPrefixSecurity = prefixSecurity.toLowerCase();
    /* The three supported options */
    switch (normalizedPrefixSecurity) {
        case constants_1.PrefixSecurityEnum.STRICT:
        case constants_1.PrefixSecurityEnum.SILENT:
        case constants_1.PrefixSecurityEnum.DISABLED:
            return normalizedPrefixSecurity;
        default:
            return constants_1.PrefixSecurityEnum.SILENT;
    }
}
/**
 * A CookieJar is for storage and retrieval of {@link Cookie} objects as defined in
 * {@link https://www.rfc-editor.org/rfc/rfc6265.html#section-5.3 | RFC6265 - Section 5.3}.
 *
 * It also supports a pluggable persistence layer via {@link Store}.
 * @public
 */
class CookieJar {
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
    constructor(store, options) {
        if (typeof options === 'boolean') {
            options = { rejectPublicSuffixes: options };
        }
        this.rejectPublicSuffixes = options?.rejectPublicSuffixes ?? true;
        this.enableLooseMode = options?.looseMode ?? false;
        this.allowSpecialUseDomain = options?.allowSpecialUseDomain ?? true;
        this.prefixSecurity = getNormalizedPrefixSecurity(options?.prefixSecurity ?? 'silent');
        this.store = store ?? new memstore_1.MemoryCookieStore();
    }
    callSync(fn) {
        if (!this.store.synchronous) {
            throw new Error('CookieJar store is not synchronous; use async API instead.');
        }
        let syncErr = null;
        let syncResult = undefined;
        try {
            fn.call(this, (error, result) => {
                syncErr = error;
                syncResult = result;
            });
        }
        catch (err) {
            syncErr = err;
        }
        if (syncErr)
            throw syncErr;
        return syncResult;
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    setCookie(cookie, url, options, callback) {
        if (typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        const cb = promiseCallback.callback;
        let context;
        try {
            if (typeof url === 'string') {
                validators.validate(validators.isNonEmptyString(url), callback, (0, utils_1.safeToString)(options));
            }
            context = getCookieContext(url);
            if (typeof url === 'function') {
                return promiseCallback.reject(new Error('No URL was specified'));
            }
            if (typeof options === 'function') {
                options = defaultSetCookieOptions;
            }
            validators.validate(typeof cb === 'function', cb);
            if (!validators.isNonEmptyString(cookie) &&
                !validators.isObject(cookie) &&
                cookie instanceof String &&
                cookie.length == 0) {
                return promiseCallback.resolve(undefined);
            }
        }
        catch (err) {
            return promiseCallback.reject(err);
        }
        const host = (0, canonicalDomain_1.canonicalDomain)(context.hostname) ?? null;
        const loose = options?.loose || this.enableLooseMode;
        let sameSiteContext = null;
        if (options?.sameSiteContext) {
            sameSiteContext = checkSameSiteContext(options.sameSiteContext);
            if (!sameSiteContext) {
                return promiseCallback.reject(new Error(SAME_SITE_CONTEXT_VAL_ERR));
            }
        }
        // S5.3 step 1
        if (typeof cookie === 'string' || cookie instanceof String) {
            const parsedCookie = cookie_1.Cookie.parse(cookie.toString(), { loose: loose });
            if (!parsedCookie) {
                const err = new Error('Cookie failed to parse');
                return options?.ignoreError
                    ? promiseCallback.resolve(undefined)
                    : promiseCallback.reject(err);
            }
            cookie = parsedCookie;
        }
        else if (!(cookie instanceof cookie_1.Cookie)) {
            // If you're seeing this error, and are passing in a Cookie object,
            // it *might* be a Cookie object from another loaded version of tough-cookie.
            const err = new Error('First argument to setCookie must be a Cookie object or string');
            return options?.ignoreError
                ? promiseCallback.resolve(undefined)
                : promiseCallback.reject(err);
        }
        // S5.3 step 2
        const now = options?.now || new Date(); // will assign later to save effort in the face of errors
        // S5.3 step 3: NOOP; persistent-flag and expiry-time is handled by getCookie()
        // S5.3 step 4: NOOP; domain is null by default
        // S5.3 step 5: public suffixes
        if (this.rejectPublicSuffixes && cookie.domain) {
            try {
                const cdomain = cookie.cdomain();
                const suffix = typeof cdomain === 'string'
                    ? (0, getPublicSuffix_1.getPublicSuffix)(cdomain, {
                        allowSpecialUseDomain: this.allowSpecialUseDomain,
                        ignoreError: options?.ignoreError,
                    })
                    : null;
                if (suffix == null && !constants_1.IP_V6_REGEX_OBJECT.test(cookie.domain)) {
                    // e.g. "com"
                    const err = new Error('Cookie has domain set to a public suffix');
                    return options?.ignoreError
                        ? promiseCallback.resolve(undefined)
                        : promiseCallback.reject(err);
                }
                // Using `any` here rather than `unknown` to avoid a type assertion, at the cost of needing
                // to disable eslint directives. It's easier to have this one spot of technically incorrect
                // types, rather than having to deal with _all_ callback errors being `unknown`.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            }
            catch (err) {
                return options?.ignoreError
                    ? promiseCallback.resolve(undefined)
                    : // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                        promiseCallback.reject(err);
            }
        }
        // S5.3 step 6:
        if (cookie.domain) {
            if (!(0, domainMatch_1.domainMatch)(host ?? undefined, cookie.cdomain() ?? undefined, false)) {
                const err = new Error(`Cookie not in this host's domain. Cookie:${cookie.cdomain() ?? 'null'} Request:${host ?? 'null'}`);
                return options?.ignoreError
                    ? promiseCallback.resolve(undefined)
                    : promiseCallback.reject(err);
            }
            if (cookie.hostOnly == null) {
                // don't reset if already set
                cookie.hostOnly = false;
            }
        }
        else {
            cookie.hostOnly = true;
            cookie.domain = host;
        }
        //S5.2.4 If the attribute-value is empty or if the first character of the
        //attribute-value is not %x2F ("/"):
        //Let cookie-path be the default-path.
        if (!cookie.path || cookie.path[0] !== '/') {
            cookie.path = (0, defaultPath_1.defaultPath)(context.pathname);
            cookie.pathIsDefault = true;
        }
        // S5.3 step 8: NOOP; secure attribute
        // S5.3 step 9: NOOP; httpOnly attribute
        // S5.3 step 10
        if (options?.http === false && cookie.httpOnly) {
            const err = new Error("Cookie is HttpOnly and this isn't an HTTP API");
            return options.ignoreError
                ? promiseCallback.resolve(undefined)
                : promiseCallback.reject(err);
        }
        // 6252bis-02 S5.4 Step 13 & 14:
        if (cookie.sameSite !== 'none' &&
            cookie.sameSite !== undefined &&
            sameSiteContext) {
            // "If the cookie's "same-site-flag" is not "None", and the cookie
            //  is being set from a context whose "site for cookies" is not an
            //  exact match for request-uri's host's registered domain, then
            //  abort these steps and ignore the newly created cookie entirely."
            if (sameSiteContext === 'none') {
                const err = new Error('Cookie is SameSite but this is a cross-origin request');
                return options?.ignoreError
                    ? promiseCallback.resolve(undefined)
                    : promiseCallback.reject(err);
            }
        }
        /* 6265bis-02 S5.4 Steps 15 & 16 */
        const ignoreErrorForPrefixSecurity = this.prefixSecurity === constants_1.PrefixSecurityEnum.SILENT;
        const prefixSecurityDisabled = this.prefixSecurity === constants_1.PrefixSecurityEnum.DISABLED;
        /* If prefix checking is not disabled ...*/
        if (!prefixSecurityDisabled) {
            let errorFound = false;
            let errorMsg;
            /* Check secure prefix condition */
            if (!isSecurePrefixConditionMet(cookie)) {
                errorFound = true;
                errorMsg = 'Cookie has __Secure prefix but Secure attribute is not set';
            }
            else if (!isHostPrefixConditionMet(cookie)) {
                /* Check host prefix condition */
                errorFound = true;
                errorMsg =
                    "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'";
            }
            if (errorFound) {
                return options?.ignoreError || ignoreErrorForPrefixSecurity
                    ? promiseCallback.resolve(undefined)
                    : promiseCallback.reject(new Error(errorMsg));
            }
        }
        const store = this.store;
        // TODO: It feels weird to be manipulating the store as a side effect of a method.
        // We should either do it in the constructor or not at all.
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!store.updateCookie) {
            store.updateCookie = async function (_oldCookie, newCookie, cb) {
                return this.putCookie(newCookie).then(() => cb?.(null), (error) => cb?.(error));
            };
        }
        const withCookie = function withCookie(err, oldCookie) {
            if (err) {
                cb(err);
                return;
            }
            const next = function (err) {
                if (err) {
                    cb(err);
                }
                else if (typeof cookie === 'string') {
                    cb(null, undefined);
                }
                else {
                    cb(null, cookie);
                }
            };
            if (oldCookie) {
                // S5.3 step 11 - "If the cookie store contains a cookie with the same name,
                // domain, and path as the newly created cookie:"
                if (options &&
                    'http' in options &&
                    options.http === false &&
                    oldCookie.httpOnly) {
                    // step 11.2
                    err = new Error("old Cookie is HttpOnly and this isn't an HTTP API");
                    if (options.ignoreError)
                        cb(null, undefined);
                    else
                        cb(err);
                    return;
                }
                if (cookie instanceof cookie_1.Cookie) {
                    cookie.creation = oldCookie.creation;
                    // step 11.3
                    cookie.creationIndex = oldCookie.creationIndex;
                    // preserve tie-breaker
                    cookie.lastAccessed = now;
                    // Step 11.4 (delete cookie) is implied by just setting the new one:
                    store.updateCookie(oldCookie, cookie, next); // step 12
                }
            }
            else {
                if (cookie instanceof cookie_1.Cookie) {
                    cookie.creation = cookie.lastAccessed = now;
                    store.putCookie(cookie, next); // step 12
                }
            }
        };
        // TODO: Refactor to avoid using a callback
        store.findCookie(cookie.domain, cookie.path, cookie.key, withCookie);
        return promiseCallback.promise;
    }
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
    setCookieSync(cookie, url, options) {
        const setCookieFn = options
            ? this.setCookie.bind(this, cookie, url, options)
            : this.setCookie.bind(this, cookie, url);
        return this.callSync(setCookieFn);
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    getCookies(url, options, callback) {
        // RFC6365 S5.4
        if (typeof options === 'function') {
            callback = options;
            options = defaultGetCookieOptions;
        }
        else if (options === undefined) {
            options = defaultGetCookieOptions;
        }
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        const cb = promiseCallback.callback;
        let context;
        try {
            if (typeof url === 'string') {
                validators.validate(validators.isNonEmptyString(url), cb, url);
            }
            context = getCookieContext(url);
            validators.validate(validators.isObject(options), cb, (0, utils_1.safeToString)(options));
            validators.validate(typeof cb === 'function', cb);
        }
        catch (parameterError) {
            return promiseCallback.reject(parameterError);
        }
        const host = (0, canonicalDomain_1.canonicalDomain)(context.hostname);
        const path = context.pathname || '/';
        const secure = context.protocol &&
            (context.protocol == 'https:' || context.protocol == 'wss:');
        let sameSiteLevel = 0;
        if (options.sameSiteContext) {
            const sameSiteContext = checkSameSiteContext(options.sameSiteContext);
            if (sameSiteContext == null) {
                return promiseCallback.reject(new Error(SAME_SITE_CONTEXT_VAL_ERR));
            }
            sameSiteLevel = cookie_1.Cookie.sameSiteLevel[sameSiteContext];
            if (!sameSiteLevel) {
                return promiseCallback.reject(new Error(SAME_SITE_CONTEXT_VAL_ERR));
            }
        }
        const http = options.http ?? true;
        const now = Date.now();
        const expireCheck = options.expire ?? true;
        const allPaths = options.allPaths ?? false;
        const store = this.store;
        function matchingCookie(c) {
            // "Either:
            //   The cookie's host-only-flag is true and the canonicalized
            //   request-host is identical to the cookie's domain.
            // Or:
            //   The cookie's host-only-flag is false and the canonicalized
            //   request-host domain-matches the cookie's domain."
            if (c.hostOnly) {
                if (c.domain != host) {
                    return false;
                }
            }
            else {
                if (!(0, domainMatch_1.domainMatch)(host ?? undefined, c.domain ?? undefined, false)) {
                    return false;
                }
            }
            // "The request-uri's path path-matches the cookie's path."
            if (!allPaths && typeof c.path === 'string' && !(0, pathMatch_1.pathMatch)(path, c.path)) {
                return false;
            }
            // "If the cookie's secure-only-flag is true, then the request-uri's
            // scheme must denote a "secure" protocol"
            if (c.secure && !secure) {
                return false;
            }
            // "If the cookie's http-only-flag is true, then exclude the cookie if the
            // cookie-string is being generated for a "non-HTTP" API"
            if (c.httpOnly && !http) {
                return false;
            }
            // RFC6265bis-02 S5.3.7
            if (sameSiteLevel) {
                let cookieLevel;
                if (c.sameSite === 'lax') {
                    cookieLevel = cookie_1.Cookie.sameSiteLevel.lax;
                }
                else if (c.sameSite === 'strict') {
                    cookieLevel = cookie_1.Cookie.sameSiteLevel.strict;
                }
                else {
                    cookieLevel = cookie_1.Cookie.sameSiteLevel.none;
                }
                if (cookieLevel > sameSiteLevel) {
                    // only allow cookies at or below the request level
                    return false;
                }
            }
            // deferred from S5.3
            // non-RFC: allow retention of expired cookies by choice
            const expiryTime = c.expiryTime();
            if (expireCheck && expiryTime != undefined && expiryTime <= now) {
                store.removeCookie(c.domain, c.path, c.key, () => { }); // result ignored
                return false;
            }
            return true;
        }
        store.findCookies(host, allPaths ? null : path, this.allowSpecialUseDomain, (err, cookies) => {
            if (err) {
                cb(err);
                return;
            }
            if (cookies == null) {
                cb(null, []);
                return;
            }
            cookies = cookies.filter(matchingCookie);
            // sorting of S5.4 part 2
            if ('sort' in options && options.sort !== false) {
                cookies = cookies.sort(cookieCompare_1.cookieCompare);
            }
            // S5.4 part 3
            const now = new Date();
            for (const cookie of cookies) {
                cookie.lastAccessed = now;
            }
            // TODO persist lastAccessed
            cb(null, cookies);
        });
        return promiseCallback.promise;
    }
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
    getCookiesSync(url, options) {
        return this.callSync(this.getCookies.bind(this, url, options)) ?? [];
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    getCookieString(url, options, callback) {
        if (typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        const next = function (err, cookies) {
            if (err) {
                promiseCallback.callback(err);
            }
            else {
                promiseCallback.callback(null, cookies
                    ?.sort(cookieCompare_1.cookieCompare)
                    .map((c) => c.cookieString())
                    .join('; '));
            }
        };
        this.getCookies(url, options, next);
        return promiseCallback.promise;
    }
    /**
     * Synchronous version of `.getCookieString()`. Accepts the same options as `.getCookies()` but returns a string suitable for a
     * `Cookie` header rather than an Array.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     *
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when retrieving the cookies.
     */
    getCookieStringSync(url, options) {
        return (this.callSync(options
            ? this.getCookieString.bind(this, url, options)
            : this.getCookieString.bind(this, url)) ?? '');
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    getSetCookieStrings(url, options, callback) {
        if (typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        const next = function (err, cookies) {
            if (err) {
                promiseCallback.callback(err);
            }
            else {
                promiseCallback.callback(null, cookies?.map((c) => {
                    return c.toString();
                }));
            }
        };
        this.getCookies(url, options, next);
        return promiseCallback.promise;
    }
    /**
     * Synchronous version of `.getSetCookieStrings()`. Returns an array of strings suitable for `Set-Cookie` headers.
     * Accepts the same options as `.getCookies()`.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     *
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when retrieving the cookies.
     */
    getSetCookieStringsSync(url, options = {}) {
        return (this.callSync(this.getSetCookieStrings.bind(this, url, options)) ?? []);
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    serialize(callback) {
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        let type = this.store.constructor.name;
        if (validators.isObject(type)) {
            type = null;
        }
        // update README.md "Serialization Format" if you change this, please!
        const serialized = {
            // The version of tough-cookie that serialized this jar. Generally a good
            // practice since future versions can make data import decisions based on
            // known past behavior. When/if this matters, use `semver`.
            version: `tough-cookie@${version_1.version}`,
            // add the store type, to make humans happy:
            storeType: type,
            // CookieJar configuration:
            rejectPublicSuffixes: this.rejectPublicSuffixes,
            enableLooseMode: this.enableLooseMode,
            allowSpecialUseDomain: this.allowSpecialUseDomain,
            prefixSecurity: getNormalizedPrefixSecurity(this.prefixSecurity),
            // this gets filled from getAllCookies:
            cookies: [],
        };
        if (typeof this.store.getAllCookies !== 'function') {
            return promiseCallback.reject(new Error('store does not support getAllCookies and cannot be serialized'));
        }
        this.store.getAllCookies((err, cookies) => {
            if (err) {
                promiseCallback.callback(err);
                return;
            }
            if (cookies == null) {
                promiseCallback.callback(null, serialized);
                return;
            }
            serialized.cookies = cookies.map((cookie) => {
                // convert to serialized 'raw' cookies
                const serializedCookie = cookie.toJSON();
                // Remove the index so new ones get assigned during deserialization
                delete serializedCookie.creationIndex;
                return serializedCookie;
            });
            promiseCallback.callback(null, serialized);
        });
        return promiseCallback.promise;
    }
    /**
     * Serialize the CookieJar if the underlying store supports `.getAllCookies`.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     */
    serializeSync() {
        return this.callSync((callback) => {
            this.serialize(callback);
        });
    }
    /**
     * Alias of {@link CookieJar.serializeSync}. Allows the cookie to be serialized
     * with `JSON.stringify(cookieJar)`.
     */
    toJSON() {
        return this.serializeSync();
    }
    /**
     * Use the class method CookieJar.deserialize instead of calling this directly
     * @internal
     */
    _importCookies(serialized, callback) {
        let cookies = undefined;
        if (serialized &&
            typeof serialized === 'object' &&
            (0, utils_1.inOperator)('cookies', serialized) &&
            Array.isArray(serialized.cookies)) {
            cookies = serialized.cookies;
        }
        if (!cookies) {
            callback(new Error('serialized jar has no cookies array'), undefined);
            return;
        }
        cookies = cookies.slice(); // do not modify the original
        const putNext = (err) => {
            if (err) {
                callback(err, undefined);
                return;
            }
            if (Array.isArray(cookies)) {
                if (!cookies.length) {
                    callback(err, this);
                    return;
                }
                let cookie;
                try {
                    cookie = cookie_1.Cookie.fromJSON(cookies.shift());
                }
                catch (e) {
                    callback(e instanceof Error ? e : new Error(), undefined);
                    return;
                }
                if (cookie === undefined) {
                    putNext(null); // skip this cookie
                    return;
                }
                this.store.putCookie(cookie, putNext);
            }
        };
        putNext(null);
    }
    /**
     * @internal
     */
    _importCookiesSync(serialized) {
        this.callSync(this._importCookies.bind(this, serialized));
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    clone(newStore, callback) {
        if (typeof newStore === 'function') {
            callback = newStore;
            newStore = undefined;
        }
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        const cb = promiseCallback.callback;
        this.serialize((err, serialized) => {
            if (err) {
                return promiseCallback.reject(err);
            }
            return CookieJar.deserialize(serialized ?? '', newStore, cb);
        });
        return promiseCallback.promise;
    }
    /**
     * @internal
     */
    _cloneSync(newStore) {
        const cloneFn = newStore && typeof newStore !== 'function'
            ? this.clone.bind(this, newStore)
            : this.clone.bind(this);
        return this.callSync((callback) => {
            cloneFn(callback);
        });
    }
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
    cloneSync(newStore) {
        if (!newStore) {
            return this._cloneSync();
        }
        if (!newStore.synchronous) {
            throw new Error('CookieJar clone destination store is not synchronous; use async API instead.');
        }
        return this._cloneSync(newStore);
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    removeAllCookies(callback) {
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        const cb = promiseCallback.callback;
        const store = this.store;
        // Check that the store implements its own removeAllCookies(). The default
        // implementation in Store will immediately call the callback with a "not
        // implemented" Error.
        if (typeof store.removeAllCookies === 'function' &&
            store.removeAllCookies !== store_1.Store.prototype.removeAllCookies) {
            // `Callback<undefined>` and `ErrorCallback` are *technically* incompatible, but for the
            // standard implementation `cb = (err, result) => {}`, they're essentially the same.
            store.removeAllCookies(cb);
            return promiseCallback.promise;
        }
        store.getAllCookies((err, cookies) => {
            if (err) {
                cb(err);
                return;
            }
            if (!cookies) {
                cookies = [];
            }
            if (cookies.length === 0) {
                cb(null, undefined);
                return;
            }
            let completedCount = 0;
            const removeErrors = [];
            // TODO: Refactor to avoid using callback
            const removeCookieCb = function removeCookieCb(removeErr) {
                if (removeErr) {
                    removeErrors.push(removeErr);
                }
                completedCount++;
                if (completedCount === cookies.length) {
                    if (removeErrors[0])
                        cb(removeErrors[0]);
                    else
                        cb(null, undefined);
                    return;
                }
            };
            cookies.forEach((cookie) => {
                store.removeCookie(cookie.domain, cookie.path, cookie.key, removeCookieCb);
            });
        });
        return promiseCallback.promise;
    }
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
    removeAllCookiesSync() {
        this.callSync((callback) => {
            // `Callback<undefined>` and `ErrorCallback` are *technically* incompatible, but for the
            // standard implementation `cb = (err, result) => {}`, they're essentially the same.
            this.removeAllCookies(callback);
        });
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    static deserialize(strOrObj, store, callback) {
        if (typeof store === 'function') {
            callback = store;
            store = undefined;
        }
        const promiseCallback = (0, utils_1.createPromiseCallback)(callback);
        let serialized;
        if (typeof strOrObj === 'string') {
            try {
                serialized = JSON.parse(strOrObj);
            }
            catch (e) {
                return promiseCallback.reject(e instanceof Error ? e : new Error());
            }
        }
        else {
            serialized = strOrObj;
        }
        const readSerializedProperty = (property) => {
            return serialized &&
                typeof serialized === 'object' &&
                (0, utils_1.inOperator)(property, serialized)
                ? serialized[property]
                : undefined;
        };
        const readSerializedBoolean = (property) => {
            const value = readSerializedProperty(property);
            return typeof value === 'boolean' ? value : undefined;
        };
        const readSerializedString = (property) => {
            const value = readSerializedProperty(property);
            return typeof value === 'string' ? value : undefined;
        };
        const jar = new CookieJar(store, {
            rejectPublicSuffixes: readSerializedBoolean('rejectPublicSuffixes'),
            looseMode: readSerializedBoolean('enableLooseMode'),
            allowSpecialUseDomain: readSerializedBoolean('allowSpecialUseDomain'),
            prefixSecurity: getNormalizedPrefixSecurity(readSerializedString('prefixSecurity') ?? 'silent'),
        });
        jar._importCookies(serialized, (err) => {
            if (err) {
                promiseCallback.callback(err);
                return;
            }
            promiseCallback.callback(null, jar);
        });
        return promiseCallback.promise;
    }
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
    static deserializeSync(strOrObj, store) {
        const serialized = typeof strOrObj === 'string' ? JSON.parse(strOrObj) : strOrObj;
        const readSerializedProperty = (property) => {
            return serialized &&
                typeof serialized === 'object' &&
                (0, utils_1.inOperator)(property, serialized)
                ? serialized[property]
                : undefined;
        };
        const readSerializedBoolean = (property) => {
            const value = readSerializedProperty(property);
            return typeof value === 'boolean' ? value : undefined;
        };
        const readSerializedString = (property) => {
            const value = readSerializedProperty(property);
            return typeof value === 'string' ? value : undefined;
        };
        const jar = new CookieJar(store, {
            rejectPublicSuffixes: readSerializedBoolean('rejectPublicSuffixes'),
            looseMode: readSerializedBoolean('enableLooseMode'),
            allowSpecialUseDomain: readSerializedBoolean('allowSpecialUseDomain'),
            prefixSecurity: getNormalizedPrefixSecurity(readSerializedString('prefixSecurity') ?? 'silent'),
        });
        // catch this mistake early:
        if (!jar.store.synchronous) {
            throw new Error('CookieJar store is not synchronous; use async API instead.');
        }
        jar._importCookiesSync(serialized);
        return jar;
    }
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
    static fromJSON(jsonString, store) {
        return CookieJar.deserializeSync(jsonString, store);
    }
}
exports.CookieJar = CookieJar;
