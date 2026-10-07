/**
 * Character classes and associated utilities for the 2nd edition of XML 1.1.
 *
 * @author Louis-Dominique Dubeau
 * @license MIT
 * @copyright Louis-Dominique Dubeau
 */
export declare const CHAR = "\u0001-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF";
export declare const RESTRICTED_CHAR = "\u0001-\b\v\f\u000E-\u001F-\u0084\u0086-\u009F";
export declare const S = " \t\r\n";
export declare const NAME_START_CHAR = ":A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\uD800\uDC00-\uDB7F\uDFFF";
export declare const NAME_CHAR: string;
export declare const CHAR_RE: RegExp;
export declare const RESTRICTED_CHAR_RE: RegExp;
export declare const S_RE: RegExp;
export declare const NAME_START_CHAR_RE: RegExp;
export declare const NAME_CHAR_RE: RegExp;
export declare const NAME_RE: RegExp;
export declare const NMTOKEN_RE: RegExp;
/** All characters in the ``S`` production. */
export declare const S_LIST: number[];
/**
 * Determines whether a codepoint matches the ``CHAR`` production.
 *
 * @param c The code point.
 *
 * @returns ``true`` if the codepoint matches ``CHAR``.
 */
export declare function isChar(c: number): boolean;
/**
 * Determines whether a codepoint matches the ``RESTRICTED_CHAR`` production.
 *
 * @param c The code point.
 *
 * @returns ``true`` if the codepoint matches ``RESTRICTED_CHAR``.
 */
export declare function isRestrictedChar(c: number): boolean;
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
export declare function isCharAndNotRestricted(c: number): boolean;
/**
 * Determines whether a codepoint matches the ``S`` (space) production.
 *
 * @param c The code point.
 *
 * @returns ``true`` if the codepoint matches ``S``.
 */
export declare function isS(c: number): boolean;
/**
 * Determines whether a codepoint matches the ``NAME_START_CHAR`` production.
 *
 * @param c The code point.
 *
 * @returns ``true`` if the codepoint matches ``NAME_START_CHAR``.
 */
export declare function isNameStartChar(c: number): boolean;
/**
 * Determines whether a codepoint matches the ``NAME_CHAR`` production.
 *
 * @param c The code point.
 *
 * @returns ``true`` if the codepoint matches ``NAME_CHAR``.
 */
export declare function isNameChar(c: number): boolean;
