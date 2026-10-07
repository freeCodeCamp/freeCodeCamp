"use strict";
/**
 * Character classes and associated utilities for the 5th edition of XML 1.0.
 *
 * @author Louis-Dominique Dubeau
 * @license MIT
 * @copyright Louis-Dominique Dubeau
 */
Object.defineProperty(exports, "__esModule", { value: true });
//
// Fragments.
//
exports.CHAR = "\t\n\r -\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF";
exports.S = " \t\r\n";
// tslint:disable-next-line:max-line-length
exports.NAME_START_CHAR = ":A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\uD800\uDC00-\uDB7F\uDFFF";
exports.NAME_CHAR = "-" + exports.NAME_START_CHAR + ".0-9\u00B7\u0300-\u036F\u203F-\u2040";
//
// Regular expressions.
//
exports.CHAR_RE = new RegExp("^[" + exports.CHAR + "]$", "u");
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
    return (c >= SPACE && c <= 0xD7FF) ||
        c === NL || c === CR || c === TAB ||
        (c >= 0xE000 && c <= 0xFFFD) ||
        (c >= 0x10000 && c <= 0x10FFFF);
}
exports.isChar = isChar;
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
//# sourceMappingURL=ed5.js.map