"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domainMatch = domainMatch;
const canonicalDomain_1 = require("./canonicalDomain");
// Dumped from ip-regex@4.0.0, with the following changes:
// * all capturing groups converted to non-capturing -- "(?:)"
// * support for IPv6 Scoped Literal ("%eth1") removed
// * lowercase hexadecimal only
const IP_REGEX_LOWERCASE = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/;
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
function domainMatch(domain, cookieDomain, canonicalize) {
    if (domain == null || cookieDomain == null) {
        return undefined;
    }
    let _str;
    let _domStr;
    if (canonicalize !== false) {
        _str = (0, canonicalDomain_1.canonicalDomain)(domain);
        _domStr = (0, canonicalDomain_1.canonicalDomain)(cookieDomain);
    }
    else {
        _str = domain;
        _domStr = cookieDomain;
    }
    if (_str == null || _domStr == null) {
        return undefined;
    }
    /*
     * S5.1.3:
     * "A string domain-matches a given domain string if at least one of the
     * following conditions hold:"
     *
     * " o The domain string and the string are identical. (Note that both the
     * domain string and the string will have been canonicalized to lower case at
     * this point)"
     */
    if (_str == _domStr) {
        return true;
    }
    /* " o All of the following [three] conditions hold:" */
    /* "* The domain string is a suffix of the string" */
    const idx = _str.lastIndexOf(_domStr);
    if (idx <= 0) {
        return false; // it's a non-match (-1) or prefix (0)
    }
    // next, check it's a proper suffix
    // e.g., "a.b.c".indexOf("b.c") === 2
    // 5 === 3+2
    if (_str.length !== _domStr.length + idx) {
        return false; // it's not a suffix
    }
    /* "  * The last character of the string that is not included in the
     * domain string is a %x2E (".") character." */
    if (_str.substring(idx - 1, idx) !== '.') {
        return false; // doesn't align on "."
    }
    /* "  * The string is a host name (i.e., not an IP address)." */
    return !IP_REGEX_LOWERCASE.test(_str);
}
