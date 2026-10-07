"use strict";
/**
 * Character classes and associated utilities for the 2nd edition of XML 1.1.
 *
 * @author Louis-Dominique Dubeau
 * @license MIT
 * @copyright Louis-Dominique Dubeau
 */
Object.defineProperty(exports, "__esModule", { value: true });
//
// Fragments.
//
exports.CHAR = "\u0001-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF";
exports.RESTRICTED_CHAR = "\u0001-\u0008\u000B\u000C\u000E-\u001F\u007F-\u0084\u0086-\u009F";
exports.S = " \t\r\n";
// tslint:disable-next-line:max-line-length
exports.NAME_START_CHAR = ":A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\uD800\uDC00-\uDB7F\uDFFF";
exports.NAME_CHAR = "-" + exports.NAME_START_CHAR + ".0-9\u00B7\u0300-\u036F\u203F-\u2040";
//
// Regular expressions.
//
exports.CHAR_RE = new RegExp("^[" + exports.CHAR + "]$", "u");
exports.RESTRICTED_CHAR_RE = new RegExp("^[" + exports.RESTRICTED_CHAR + "]$", "u");
exports.S_RE = new RegExp("^[" + exports.S + "]+$", "u");
exports.NAME_START_CHAR_RE = new RegExp("^[" + exports.NAME_START_CHAR + "]$", "u");
exports.NAME_CHAR_RE = new RegExp("^[" + exports.NAME_CHAR + "]$", "u");
exports.NAME_RE = new RegExp("^[" + exports.NAME_START_CHAR + "][" + exports.NAME_CHAR + "]*$", "u");
exports.NMTOKEN_RE = new RegExp("^[" + exports.NAME_CHAR + "]+$", "u");
var TAB = 9;
var NL = 0xA;
var CR = 0xD;
var SPACE = 0x20;
//
// Lists.
//
/** All characters in the ``S`` production. */
exports.S_LIST = [SPACE, NL, CR, TAB];
/**
 * Determines whether a codepoint matches the ``CHAR`` production.
 *
 * @param c The code point.
 *
 * @returns ``true`` if the codepoint matches ``CHAR``.
 */
function isChar(c) {
    return (c >= 0x0001 && c <= 0xD7FF) ||
        (c >= 0xE000 && c <= 0xFFFD) ||
        (c >= 0x10000 && c <= 0x10FFFF);
}
exports.isChar = isChar;
/**
 * Determines whether a codepoint matches the ``RESTRICTED_CHAR`` production.
 *
 * @param c The code point.
 *
 * @returns ``true`` if the codepoint matches ``RESTRICTED_CHAR``.
 */
function isRestrictedChar(c) {
    return (c >= 0x1 && c <= 0x8) ||
        c === 0xB ||
        c === 0xC ||
        (c >= 0xE && c <= 0x1F) ||
        (c >= 0x7F && c <= 0x84) ||
        (c >= 0x86 && c <= 0x9F);
}
exports.isRestrictedChar = isRestrictedChar;
/**
 * Determines whether a codepoint matches the ``CHAR`` production and does not
 * match the ``RESTRICTED_CHAR`` production. ``isCharAndNotRestricted(x)`` is
 * equivalent to ``isChar(x) && !isRestrictedChar(x)``. This function is faster
 * than running the two-call equivalent.
 *
 * @param c The code point.
 *
 * @returns ``true`` if the codepoint matches ``CHAR`` and does not match
 * ``RESTRICTED_CHAR``.
 */
function isCharAndNotRestricted(c) {
    return (c === 0x9) ||
        (c === 0xA) ||
        (c === 0xD) ||
        (c > 0x1F && c < 0x7F) ||
        (c === 0x85) ||
        (c > 0x9F && c <= 0xD7FF) ||
        (c >= 0xE000 && c <= 0xFFFD) ||
        (c >= 0x10000 && c <= 0x10FFFF);
}
exports.isCharAndNotRestricted = isCharAndNotRestricted;
/**
 * Determines whether a codepoint matches the ``S`` (space) production.
 *
 * @param c The code point.
 *
 * @returns ``true`` if the codepoint matches ``S``.
 */
function isS(c) {
    return c === SPACE || c === NL || c === CR || c === TAB;
}
exports.isS = isS;
/**
 * Determines whether a codepoint matches the ``NAME_START_CHAR`` production.
 *
 * @param c The code point.
 *
 * @returns ``true`` if the codepoint matches ``NAME_START_CHAR``.
 */
// tslint:disable-next-line:cyclomatic-complexity
function isNameStartChar(c) {
    return ((c >= 0x41 && c <= 0x5A) ||
        (c >= 0x61 && c <= 0x7A) ||
        c === 0x3A ||
        c === 0x5F ||
        c === 0x200C ||
        c === 0x200D ||
        (c >= 0xC0 && c <= 0xD6) ||
        (c >= 0xD8 && c <= 0xF6) ||
        (c >= 0x00F8 && c <= 0x02FF) ||
        (c >= 0x0370 && c <= 0x037D) ||
        (c >= 0x037F && c <= 0x1FFF) ||
        (c >= 0x2070 && c <= 0x218F) ||
        (c >= 0x2C00 && c <= 0x2FEF) ||
        (c >= 0x3001 && c <= 0xD7FF) ||
        (c >= 0xF900 && c <= 0xFDCF) ||
        (c >= 0xFDF0 && c <= 0xFFFD) ||
        (c >= 0x10000 && c <= 0xEFFFF));
}
exports.isNameStartChar = isNameStartChar;
/**
 * Determines whether a codepoint matches the ``NAME_CHAR`` production.
 *
 * @param c The code point.
 *
 * @returns ``true`` if the codepoint matches ``NAME_CHAR``.
 */
function isNameChar(c) {
    return isNameStartChar(c) ||
        (c >= 0x30 && c <= 0x39) ||
        c === 0x2D ||
        c === 0x2E ||
        c === 0xB7 ||
        (c >= 0x0300 && c <= 0x036F) ||
        (c >= 0x203F && c <= 0x2040);
}
exports.isNameChar = isNameChar;
//# sourceMappingURL=ed2.js.map