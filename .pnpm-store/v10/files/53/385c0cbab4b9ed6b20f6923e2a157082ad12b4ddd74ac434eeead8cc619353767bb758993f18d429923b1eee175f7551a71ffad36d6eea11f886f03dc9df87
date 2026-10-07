"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathMatch = pathMatch;
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
function pathMatch(reqPath, cookiePath) {
    // "o  The cookie-path and the request-path are identical."
    if (cookiePath === reqPath) {
        return true;
    }
    const idx = reqPath.indexOf(cookiePath);
    if (idx === 0) {
        // "o  The cookie-path is a prefix of the request-path, and the last
        // character of the cookie-path is %x2F ("/")."
        if (cookiePath[cookiePath.length - 1] === '/') {
            return true;
        }
        // " o  The cookie-path is a prefix of the request-path, and the first
        // character of the request-path that is not included in the cookie- path
        // is a %x2F ("/") character."
        if (reqPath.startsWith(cookiePath) && reqPath[cookiePath.length] === '/') {
            return true;
        }
    }
    return false;
}
