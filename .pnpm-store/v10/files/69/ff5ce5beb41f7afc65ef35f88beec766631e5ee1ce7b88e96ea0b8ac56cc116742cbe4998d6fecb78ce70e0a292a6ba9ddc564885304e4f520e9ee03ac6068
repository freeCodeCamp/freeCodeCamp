"use strict";
/**
 * Character class utilities for XML NS 1.0 edition 3.
 *
 * @author Louis-Dominique Dubeau
 * @license MIT
 * @copyright Louis-Dominique Dubeau
 */
Object.defineProperty(exports, "__esModule", { value: true });
//
// Fragments.
//
// tslint:disable-next-line:max-line-length
exports.NC_NAME_START_CHAR = "A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\uD800\uDC00-\uDB7F\uDFFF";
exports.NC_NAME_CHAR = "-" + exports.NC_NAME_START_CHAR + ".0-9\u00B7\u0300-\u036F\u203F-\u2040";
//
// Regular expressions.
//
exports.NC_NAME_START_CHAR_RE = new RegExp("^[" + exports.NC_NAME_START_CHAR + "]$", "u");
exports.NC_NAME_CHAR_RE = new RegExp("^[" + exports.NC_NAME_CHAR + "]$", "u");
exports.NC_NAME_RE = new RegExp("^[" + exports.NC_NAME_START_CHAR + "][" + exports.NC_NAME_CHAR + "]*$", "u");
/**
 * Determines whether a codepoint matches [[NC_NAME_START_CHAR]].
 *
 * @param c The code point.
 *
 * @returns ``true`` if the codepoint matches.
 */
// tslint:disable-next-line:cyclomatic-complexity
function isNCNameStartChar(c) {
    return ((c >= 0x41 && c <= 0x5A) ||
        c === 0x5F ||
        (c >= 0x61 && c <= 0x7A) ||
        (c >= 0xC0 && c <= 0xD6) ||
        (c >= 0xD8 && c <= 0xF6) ||
        (c >= 0x00F8 && c <= 0x02FF) ||
        (c >= 0x0370 && c <= 0x037D) ||
        (c >= 0x037F && c <= 0x1FFF) ||
        (c >= 0x200C && c <= 0x200D) ||
        (c >= 0x2070 && c <= 0x218F) ||
        (c >= 0x2C00 && c <= 0x2FEF) ||
        (c >= 0x3001 && c <= 0xD7FF) ||
        (c >= 0xF900 && c <= 0xFDCF) ||
        (c >= 0xFDF0 && c <= 0xFFFD) ||
        (c >= 0x10000 && c <= 0xEFFFF));
}
exports.isNCNameStartChar = isNCNameStartChar;
/**
 * Determines whether a codepoint matches [[NC_NAME_CHAR]].
 *
 * @param c The code point.
 *
 * @returns ``true`` if the codepoint matches.
 */
function isNCNameChar(c) {
    return isNCNameStartChar(c) ||
        (c === 0x2D ||
            c === 0x2E ||
            (c >= 0x30 && c <= 0x39) ||
            c === 0x00B7 ||
            (c >= 0x0300 && c <= 0x036F) ||
            (c >= 0x203F && c <= 0x2040));
}
exports.isNCNameChar = isNCNameChar;
//# sourceMappingURL=ed3.js.map