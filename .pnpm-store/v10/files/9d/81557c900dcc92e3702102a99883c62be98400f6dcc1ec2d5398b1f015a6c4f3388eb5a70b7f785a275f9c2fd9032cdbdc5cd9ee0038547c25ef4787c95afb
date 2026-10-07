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
exports.Cookie = void 0;
/*!
 * Copyright (c) 2015-2020, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
const getPublicSuffix_1 = require("../getPublicSuffix");
const validators = __importStar(require("../validators"));
const utils_1 = require("../utils");
const formatDate_1 = require("./formatDate");
const parseDate_1 = require("./parseDate");
const canonicalDomain_1 = require("./canonicalDomain");
// From RFC6265 S4.1.1
// note that it excludes \x3B ";"
const COOKIE_OCTETS = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/;
// RFC6265 S4.1.1 defines path value as 'any CHAR except CTLs or ";"'
// Note ';' is \x3B
const PATH_VALUE = /[\x20-\x3A\x3C-\x7E]+/;
// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = /[\x00-\x1F]/;
// From Chromium // '\r', '\n' and '\0' should be treated as a terminator in
// the "relaxed" mode, see:
// https://github.com/ChromiumWebApps/chromium/blob/b3d3b4da8bb94c1b2e061600df106d590fda3620/net/cookies/parsed_cookie.cc#L60
const TERMINATORS = ['\n', '\r', '\0'];
function trimTerminator(str) {
    if (validators.isEmptyString(str))
        return str;
    for (let t = 0; t < TERMINATORS.length; t++) {
        const terminator = TERMINATORS[t];
        const terminatorIdx = terminator ? str.indexOf(terminator) : -1;
        if (terminatorIdx !== -1) {
            str = str.slice(0, terminatorIdx);
        }
    }
    return str;
}
function parseCookiePair(cookiePair, looseMode) {
    cookiePair = trimTerminator(cookiePair);
    let firstEq = cookiePair.indexOf('=');
    if (looseMode) {
        if (firstEq === 0) {
            // '=' is immediately at start
            cookiePair = cookiePair.substring(1);
            firstEq = cookiePair.indexOf('='); // might still need to split on '='
        }
    }
    else {
        // non-loose mode
        if (firstEq <= 0) {
            // no '=' or is at start
            return undefined; // needs to have non-empty "cookie-name"
        }
    }
    let cookieName, cookieValue;
    if (firstEq <= 0) {
        cookieName = '';
        cookieValue = cookiePair.trim();
    }
    else {
        cookieName = cookiePair.slice(0, firstEq).trim();
        cookieValue = cookiePair.slice(firstEq + 1).trim();
    }
    if (CONTROL_CHARS.test(cookieName) || CONTROL_CHARS.test(cookieValue)) {
        return undefined;
    }
    const c = new Cookie();
    c.key = cookieName;
    c.value = cookieValue;
    return c;
}
function parse(str, options) {
    if (validators.isEmptyString(str) || !validators.isString(str)) {
        return undefined;
    }
    str = str.trim();
    // We use a regex to parse the "name-value-pair" part of S5.2
    const firstSemi = str.indexOf(';'); // S5.2 step 1
    const cookiePair = firstSemi === -1 ? str : str.slice(0, firstSemi);
    const c = parseCookiePair(cookiePair, options?.loose ?? false);
    if (!c) {
        return undefined;
    }
    if (firstSemi === -1) {
        return c;
    }
    // S5.2.3 "unparsed-attributes consist of the remainder of the set-cookie-string
    // (including the %x3B (";") in question)." plus later on in the same section
    // "discard the first ";" and trim".
    const unparsed = str.slice(firstSemi + 1).trim();
    // "If the unparsed-attributes string is empty, skip the rest of these
    // steps."
    if (unparsed.length === 0) {
        return c;
    }
    /*
     * S5.2 says that when looping over the items "[p]rocess the attribute-name
     * and attribute-value according to the requirements in the following
     * subsections" for every item.  Plus, for many of the individual attributes
     * in S5.3 it says to use the "attribute-value of the last attribute in the
     * cookie-attribute-list".  Therefore, in this implementation, we overwrite
     * the previous value.
     */
    const cookie_avs = unparsed.split(';');
    while (cookie_avs.length) {
        const av = (cookie_avs.shift() ?? '').trim();
        if (av.length === 0) {
            // happens if ";;" appears
            continue;
        }
        const av_sep = av.indexOf('=');
        let av_key, av_value;
        if (av_sep === -1) {
            av_key = av;
            av_value = null;
        }
        else {
            av_key = av.slice(0, av_sep);
            av_value = av.slice(av_sep + 1);
        }
        av_key = av_key.trim().toLowerCase();
        if (av_value) {
            av_value = av_value.trim();
        }
        switch (av_key) {
            case 'expires': // S5.2.1
                if (av_value) {
                    const exp = (0, parseDate_1.parseDate)(av_value);
                    // "If the attribute-value failed to parse as a cookie date, ignore the
                    // cookie-av."
                    if (exp) {
                        // over and underflow not realistically a concern: V8's getTime() seems to
                        // store something larger than a 32-bit time_t (even with 32-bit node)
                        c.expires = exp;
                    }
                }
                break;
            case 'max-age': // S5.2.2
                if (av_value) {
                    // "If the first character of the attribute-value is not a DIGIT or a "-"
                    // character ...[or]... If the remainder of attribute-value contains a
                    // non-DIGIT character, ignore the cookie-av."
                    if (/^-?[0-9]+$/.test(av_value)) {
                        const delta = parseInt(av_value, 10);
                        // "If delta-seconds is less than or equal to zero (0), let expiry-time
                        // be the earliest representable date and time."
                        c.setMaxAge(delta);
                    }
                }
                break;
            case 'domain': // S5.2.3
                // "If the attribute-value is empty, the behavior is undefined.  However,
                // the user agent SHOULD ignore the cookie-av entirely."
                if (av_value) {
                    // S5.2.3 "Let cookie-domain be the attribute-value without the leading %x2E
                    // (".") character."
                    const domain = av_value.trim().replace(/^\./, '');
                    if (domain) {
                        // "Convert the cookie-domain to lower case."
                        c.domain = domain.toLowerCase();
                    }
                }
                break;
            case 'path': // S5.2.4
                /*
                 * "If the attribute-value is empty or if the first character of the
                 * attribute-value is not %x2F ("/"):
                 *   Let cookie-path be the default-path.
                 * Otherwise:
                 *   Let cookie-path be the attribute-value."
                 *
                 * We'll represent the default-path as null since it depends on the
                 * context of the parsing.
                 */
                c.path = av_value && av_value[0] === '/' ? av_value : null;
                break;
            case 'secure': // S5.2.5
                /*
                 * "If the attribute-name case-insensitively matches the string "Secure",
                 * the user agent MUST append an attribute to the cookie-attribute-list
                 * with an attribute-name of Secure and an empty attribute-value."
                 */
                c.secure = true;
                break;
            case 'httponly': // S5.2.6 -- effectively the same as 'secure'
                c.httpOnly = true;
                break;
            case 'samesite': // RFC6265bis-02 S5.3.7
                switch (av_value ? av_value.toLowerCase() : '') {
                    case 'strict':
                        c.sameSite = 'strict';
                        break;
                    case 'lax':
                        c.sameSite = 'lax';
                        break;
                    case 'none':
                        c.sameSite = 'none';
                        break;
                    default:
                        c.sameSite = undefined;
                        break;
                }
                break;
            default:
                c.extensions = c.extensions || [];
                c.extensions.push(av);
                break;
        }
    }
    return c;
}
function fromJSON(str) {
    if (!str || validators.isEmptyString(str)) {
        return undefined;
    }
    let obj;
    if (typeof str === 'string') {
        try {
            obj = JSON.parse(str);
        }
        catch {
            return undefined;
        }
    }
    else {
        // assume it's an Object
        obj = str;
    }
    const c = new Cookie();
    Cookie.serializableProperties.forEach((prop) => {
        if (obj && typeof obj === 'object' && (0, utils_1.inOperator)(prop, obj)) {
            const val = obj[prop];
            if (val === undefined) {
                return;
            }
            if ((0, utils_1.inOperator)(prop, cookieDefaults) && val === cookieDefaults[prop]) {
                return;
            }
            switch (prop) {
                case 'key':
                case 'value':
                case 'sameSite':
                    if (typeof val === 'string') {
                        c[prop] = val;
                    }
                    break;
                case 'expires':
                case 'creation':
                case 'lastAccessed':
                    if (typeof val === 'number' ||
                        typeof val === 'string' ||
                        val instanceof Date) {
                        c[prop] = obj[prop] == 'Infinity' ? 'Infinity' : new Date(val);
                    }
                    else if (val === null) {
                        c[prop] = null;
                    }
                    break;
                case 'maxAge':
                    if (typeof val === 'number' ||
                        val === 'Infinity' ||
                        val === '-Infinity') {
                        c[prop] = val;
                    }
                    break;
                case 'domain':
                case 'path':
                    if (typeof val === 'string' || val === null) {
                        c[prop] = val;
                    }
                    break;
                case 'secure':
                case 'httpOnly':
                    if (typeof val === 'boolean') {
                        c[prop] = val;
                    }
                    break;
                case 'extensions':
                    if (Array.isArray(val) &&
                        val.every((item) => typeof item === 'string')) {
                        c[prop] = val;
                    }
                    break;
                case 'hostOnly':
                case 'pathIsDefault':
                    if (typeof val === 'boolean' || val === null) {
                        c[prop] = val;
                    }
                    break;
            }
        }
    });
    return c;
}
const cookieDefaults = {
    // the order in which the RFC has them:
    key: '',
    value: '',
    expires: 'Infinity',
    maxAge: null,
    domain: null,
    path: null,
    secure: false,
    httpOnly: false,
    extensions: null,
    // set by the CookieJar:
    hostOnly: null,
    pathIsDefault: null,
    creation: null,
    lastAccessed: null,
    sameSite: undefined,
};
/**
 * An HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to a user's web browser.
 * It is defined in {@link https://www.rfc-editor.org/rfc/rfc6265.html | RFC6265}.
 * @public
 */
class Cookie {
    /**
     * Create a new Cookie instance.
     * @public
     * @param options - The attributes to set on the cookie
     */
    constructor(options = {}) {
        this.key = options.key ?? cookieDefaults.key;
        this.value = options.value ?? cookieDefaults.value;
        this.expires = options.expires ?? cookieDefaults.expires;
        this.maxAge = options.maxAge ?? cookieDefaults.maxAge;
        this.domain = options.domain ?? cookieDefaults.domain;
        this.path = options.path ?? cookieDefaults.path;
        this.secure = options.secure ?? cookieDefaults.secure;
        this.httpOnly = options.httpOnly ?? cookieDefaults.httpOnly;
        this.extensions = options.extensions ?? cookieDefaults.extensions;
        this.creation = options.creation ?? cookieDefaults.creation;
        this.hostOnly = options.hostOnly ?? cookieDefaults.hostOnly;
        this.pathIsDefault = options.pathIsDefault ?? cookieDefaults.pathIsDefault;
        this.lastAccessed = options.lastAccessed ?? cookieDefaults.lastAccessed;
        this.sameSite = options.sameSite ?? cookieDefaults.sameSite;
        this.creation = options.creation ?? new Date();
        // used to break creation ties in cookieCompare():
        Object.defineProperty(this, 'creationIndex', {
            configurable: false,
            enumerable: false, // important for assert.deepEqual checks
            writable: true,
            value: ++Cookie.cookiesCreated,
        });
        // Duplicate operation, but it makes TypeScript happy...
        this.creationIndex = Cookie.cookiesCreated;
    }
    [Symbol.for('nodejs.util.inspect.custom')]() {
        const now = Date.now();
        const hostOnly = this.hostOnly != null ? this.hostOnly.toString() : '?';
        const createAge = this.creation && this.creation !== 'Infinity'
            ? `${String(now - this.creation.getTime())}ms`
            : '?';
        const accessAge = this.lastAccessed && this.lastAccessed !== 'Infinity'
            ? `${String(now - this.lastAccessed.getTime())}ms`
            : '?';
        return `Cookie="${this.toString()}; hostOnly=${hostOnly}; aAge=${accessAge}; cAge=${createAge}"`;
    }
    /**
     * For convenience in using `JSON.stringify(cookie)`. Returns a plain-old Object that can be JSON-serialized.
     *
     * @remarks
     * - Any `Date` properties (such as {@link Cookie.expires}, {@link Cookie.creation}, and {@link Cookie.lastAccessed}) are exported in ISO format (`Date.toISOString()`).
     *
     *  - Custom Cookie properties are discarded. In tough-cookie 1.x, since there was no {@link Cookie.toJSON} method explicitly defined, all enumerable properties were captured.
     *      If you want a property to be serialized, add the property name to {@link Cookie.serializableProperties}.
     */
    toJSON() {
        const obj = {};
        for (const prop of Cookie.serializableProperties) {
            const val = this[prop];
            if (val === cookieDefaults[prop]) {
                continue; // leave as prototype default
            }
            switch (prop) {
                case 'key':
                case 'value':
                case 'sameSite':
                    if (typeof val === 'string') {
                        obj[prop] = val;
                    }
                    break;
                case 'expires':
                case 'creation':
                case 'lastAccessed':
                    if (typeof val === 'number' ||
                        typeof val === 'string' ||
                        val instanceof Date) {
                        obj[prop] =
                            val == 'Infinity' ? 'Infinity' : new Date(val).toISOString();
                    }
                    else if (val === null) {
                        obj[prop] = null;
                    }
                    break;
                case 'maxAge':
                    if (typeof val === 'number' ||
                        val === 'Infinity' ||
                        val === '-Infinity') {
                        obj[prop] = val;
                    }
                    break;
                case 'domain':
                case 'path':
                    if (typeof val === 'string' || val === null) {
                        obj[prop] = val;
                    }
                    break;
                case 'secure':
                case 'httpOnly':
                    if (typeof val === 'boolean') {
                        obj[prop] = val;
                    }
                    break;
                case 'extensions':
                    if (Array.isArray(val)) {
                        obj[prop] = val;
                    }
                    break;
                case 'hostOnly':
                case 'pathIsDefault':
                    if (typeof val === 'boolean' || val === null) {
                        obj[prop] = val;
                    }
                    break;
            }
        }
        return obj;
    }
    /**
     * Does a deep clone of this cookie, implemented exactly as `Cookie.fromJSON(cookie.toJSON())`.
     * @public
     */
    clone() {
        return fromJSON(this.toJSON());
    }
    /**
     * Validates cookie attributes for semantic correctness. Useful for "lint" checking any `Set-Cookie` headers you generate.
     * For now, it returns a boolean, but eventually could return a reason string.
     *
     * @remarks
     * Works for a few things, but is by no means comprehensive.
     *
     * @beta
     */
    validate() {
        if (!this.value || !COOKIE_OCTETS.test(this.value)) {
            return false;
        }
        if (this.expires != 'Infinity' &&
            !(this.expires instanceof Date) &&
            !(0, parseDate_1.parseDate)(this.expires)) {
            return false;
        }
        if (this.maxAge != null &&
            this.maxAge !== 'Infinity' &&
            (this.maxAge === '-Infinity' || this.maxAge <= 0)) {
            return false; // "Max-Age=" non-zero-digit *DIGIT
        }
        if (this.path != null && !PATH_VALUE.test(this.path)) {
            return false;
        }
        const cdomain = this.cdomain();
        if (cdomain) {
            if (cdomain.match(/\.$/)) {
                return false; // S4.1.2.3 suggests that this is bad. domainMatch() tests confirm this
            }
            const suffix = (0, getPublicSuffix_1.getPublicSuffix)(cdomain);
            if (suffix == null) {
                // it's a public suffix
                return false;
            }
        }
        return true;
    }
    /**
     * Sets the 'Expires' attribute on a cookie.
     *
     * @remarks
     * When given a `string` value it will be parsed with {@link parseDate}. If the value can't be parsed as a cookie date
     * then the 'Expires' attribute will be set to `"Infinity"`.
     *
     * @param exp - the new value for the 'Expires' attribute of the cookie.
     */
    setExpires(exp) {
        if (exp instanceof Date) {
            this.expires = exp;
        }
        else {
            this.expires = (0, parseDate_1.parseDate)(exp) || 'Infinity';
        }
    }
    /**
     * Sets the 'Max-Age' attribute (in seconds) on a cookie.
     *
     * @remarks
     * Coerces `-Infinity` to `"-Infinity"` and `Infinity` to `"Infinity"` so it can be serialized to JSON.
     *
     * @param age - the new value for the 'Max-Age' attribute (in seconds).
     */
    setMaxAge(age) {
        if (age === Infinity) {
            this.maxAge = 'Infinity';
        }
        else if (age === -Infinity) {
            this.maxAge = '-Infinity';
        }
        else {
            this.maxAge = age;
        }
    }
    /**
     * Encodes to a `Cookie` header value (specifically, the {@link Cookie.key} and {@link Cookie.value} properties joined with "=").
     * @public
     */
    cookieString() {
        const val = this.value || '';
        if (this.key) {
            return `${this.key}=${val}`;
        }
        return val;
    }
    /**
     * Encodes to a `Set-Cookie header` value.
     * @public
     */
    toString() {
        let str = this.cookieString();
        if (this.expires != 'Infinity') {
            if (this.expires instanceof Date) {
                str += `; Expires=${(0, formatDate_1.formatDate)(this.expires)}`;
            }
        }
        if (this.maxAge != null && this.maxAge != Infinity) {
            str += `; Max-Age=${String(this.maxAge)}`;
        }
        if (this.domain && !this.hostOnly) {
            str += `; Domain=${this.domain}`;
        }
        if (this.path) {
            str += `; Path=${this.path}`;
        }
        if (this.secure) {
            str += '; Secure';
        }
        if (this.httpOnly) {
            str += '; HttpOnly';
        }
        if (this.sameSite && this.sameSite !== 'none') {
            if (this.sameSite.toLowerCase() ===
                Cookie.sameSiteCanonical.lax.toLowerCase()) {
                str += `; SameSite=${Cookie.sameSiteCanonical.lax}`;
            }
            else if (this.sameSite.toLowerCase() ===
                Cookie.sameSiteCanonical.strict.toLowerCase()) {
                str += `; SameSite=${Cookie.sameSiteCanonical.strict}`;
            }
            else {
                str += `; SameSite=${this.sameSite}`;
            }
        }
        if (this.extensions) {
            this.extensions.forEach((ext) => {
                str += `; ${ext}`;
            });
        }
        return str;
    }
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
    TTL(now = Date.now()) {
        // TTL() partially replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
        // elsewhere)
        // S5.3 says to give the "latest representable date" for which we use Infinity
        // For "expired" we use 0
        // -----
        // RFC6265 S4.1.2.2 If a cookie has both the Max-Age and the Expires
        // attribute, the Max-Age attribute has precedence and controls the
        // expiration date of the cookie.
        // (Concurs with S5.3 step 3)
        if (this.maxAge != null && typeof this.maxAge === 'number') {
            return this.maxAge <= 0 ? 0 : this.maxAge * 1000;
        }
        const expires = this.expires;
        if (expires === 'Infinity') {
            return Infinity;
        }
        return (expires?.getTime() ?? now) - (now || Date.now());
    }
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
    expiryTime(now) {
        // expiryTime() replaces the "expiry-time" parts of S5.3 step 3 (setCookie() elsewhere)
        if (this.maxAge != null) {
            const relativeTo = now || this.lastAccessed || new Date();
            const maxAge = typeof this.maxAge === 'number' ? this.maxAge : -Infinity;
            const age = maxAge <= 0 ? -Infinity : maxAge * 1000;
            if (relativeTo === 'Infinity') {
                return Infinity;
            }
            return relativeTo.getTime() + age;
        }
        if (this.expires == 'Infinity') {
            return Infinity;
        }
        return this.expires ? this.expires.getTime() : undefined;
    }
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
    expiryDate(now) {
        const millisec = this.expiryTime(now);
        if (millisec == Infinity) {
            // The 31-bit value of 2147483647000 was chosen to be the MAX_TIME representable
            // in tough-cookie though MDN states that the actual maximum value for a Date is 8.64e15.
            // I'm guessing this is due to the Y2038 problem that would affect systems that store
            // unix time as 32-bit integers.
            // See:
            // - https://github.com/salesforce/tough-cookie/commit/0616f70bf725e00c63d442544ad230c4f8b23357
            // - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date
            // - https://en.wikipedia.org/wiki/Year_2038_problem
            return new Date(2147483647000);
        }
        else if (millisec == -Infinity) {
            return new Date(0);
        }
        else {
            return millisec == undefined ? undefined : new Date(millisec);
        }
    }
    /**
     * Indicates if the cookie has been persisted to a store or not.
     * @public
     */
    isPersistent() {
        // This replaces the "persistent-flag" parts of S5.3 step 3
        return this.maxAge != null || this.expires != 'Infinity';
    }
    /**
     * Calls {@link canonicalDomain} with the {@link Cookie.domain} property.
     * @public
     */
    canonicalizedDomain() {
        // Mostly S5.1.2 and S5.2.3:
        return (0, canonicalDomain_1.canonicalDomain)(this.domain);
    }
    /**
     * Alias for {@link Cookie.canonicalizedDomain}
     * @public
     */
    cdomain() {
        return (0, canonicalDomain_1.canonicalDomain)(this.domain);
    }
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
    static parse(str, options) {
        return parse(str, options);
    }
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
    static fromJSON(str) {
        return fromJSON(str);
    }
}
exports.Cookie = Cookie;
Cookie.cookiesCreated = 0;
/**
 * @internal
 */
Cookie.sameSiteLevel = {
    strict: 3,
    lax: 2,
    none: 1,
};
/**
 * @internal
 */
Cookie.sameSiteCanonical = {
    strict: 'Strict',
    lax: 'Lax',
};
/**
 * Cookie properties that will be serialized when using {@link Cookie.fromJSON} and {@link Cookie.toJSON}.
 * @public
 */
Cookie.serializableProperties = [
    'key',
    'value',
    'expires',
    'maxAge',
    'domain',
    'path',
    'secure',
    'httpOnly',
    'extensions',
    'hostOnly',
    'pathIsDefault',
    'creation',
    'lastAccessed',
    'sameSite',
];
