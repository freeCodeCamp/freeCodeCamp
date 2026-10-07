"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieJar = exports.defaultBinaryType = exports.globalThisShim = exports.nextTick = void 0;
exports.createCookieJar = createCookieJar;
exports.parse = parse;
exports.nextTick = process.nextTick;
exports.globalThisShim = global;
exports.defaultBinaryType = "nodebuffer";
function createCookieJar() {
    return new CookieJar();
}
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
 */
function parse(setCookieString) {
    const parts = setCookieString.split("; ");
    const i = parts[0].indexOf("=");
    if (i === -1) {
        return;
    }
    const name = parts[0].substring(0, i).trim();
    if (!name.length) {
        return;
    }
    let value = parts[0].substring(i + 1).trim();
    if (value.charCodeAt(0) === 0x22) {
        // remove double quotes
        value = value.slice(1, -1);
    }
    const cookie = {
        name,
        value,
    };
    for (let j = 1; j < parts.length; j++) {
        const subParts = parts[j].split("=");
        if (subParts.length !== 2) {
            continue;
        }
        const key = subParts[0].trim();
        const value = subParts[1].trim();
        switch (key) {
            case "Expires":
                cookie.expires = new Date(value);
                break;
            case "Max-Age":
                const expiration = new Date();
                expiration.setUTCSeconds(expiration.getUTCSeconds() + parseInt(value, 10));
                cookie.expires = expiration;
                break;
            default:
            // ignore other keys
        }
    }
    return cookie;
}
class CookieJar {
    constructor() {
        this._cookies = new Map();
    }
    parseCookies(values) {
        if (!values) {
            return;
        }
        values.forEach((value) => {
            const parsed = parse(value);
            if (parsed) {
                this._cookies.set(parsed.name, parsed);
            }
        });
    }
    get cookies() {
        const now = Date.now();
        this._cookies.forEach((cookie, name) => {
            var _a;
            if (((_a = cookie.expires) === null || _a === void 0 ? void 0 : _a.getTime()) < now) {
                this._cookies.delete(name);
            }
        });
        return this._cookies.entries();
    }
    addCookies(xhr) {
        const cookies = [];
        for (const [name, cookie] of this.cookies) {
            cookies.push(`${name}=${cookie.value}`);
        }
        if (cookies.length) {
            xhr.setDisableHeaderCheck(true);
            xhr.setRequestHeader("cookie", cookies.join("; "));
        }
    }
    appendCookies(headers) {
        for (const [name, cookie] of this.cookies) {
            headers.append("cookie", `${name}=${cookie.value}`);
        }
    }
}
exports.CookieJar = CookieJar;
