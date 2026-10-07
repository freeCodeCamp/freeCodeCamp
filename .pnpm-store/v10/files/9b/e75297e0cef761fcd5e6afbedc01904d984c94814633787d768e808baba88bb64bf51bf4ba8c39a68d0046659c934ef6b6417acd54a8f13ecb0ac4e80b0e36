"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyPath = exports.quoteKey = exports.isValidVariableName = exports.IS_VALID_IDENTIFIER = exports.quoteString = void 0;
/**
 * Match all characters that need to be escaped in a string. Modified from
 * source to match single quotes instead of double.
 *
 * Source: https://github.com/douglascrockford/JSON-js/blob/master/json2.js
 */
const ESCAPABLE = /[\\\'\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
/**
 * Map of characters to escape characters.
 */
const META_CHARS = new Map([
    ["\b", "\\b"],
    ["\t", "\\t"],
    ["\n", "\\n"],
    ["\f", "\\f"],
    ["\r", "\\r"],
    ["'", "\\'"],
    ['"', '\\"'],
    ["\\", "\\\\"],
]);
/**
 * Escape any character into its literal JavaScript string.
 *
 * @param  {string} char
 * @return {string}
 */
function escapeChar(char) {
    return (META_CHARS.get(char) ||
        `\\u${`0000${char.charCodeAt(0).toString(16)}`.slice(-4)}`);
}
/**
 * Quote a string.
 */
function quoteString(str) {
    return `'${str.replace(ESCAPABLE, escapeChar)}'`;
}
exports.quoteString = quoteString;
/**
 * JavaScript reserved keywords.
 */
const RESERVED_WORDS = new Set(("break else new var case finally return void catch for switch while " +
    "continue function this with default if throw delete in try " +
    "do instanceof typeof abstract enum int short boolean export " +
    "interface static byte extends long super char final native synchronized " +
    "class float package throws const goto private transient debugger " +
    "implements protected volatile double import public let yield").split(" "));
/**
 * Test for valid JavaScript identifier.
 */
exports.IS_VALID_IDENTIFIER = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
/**
 * Check if a variable name is valid.
 */
function isValidVariableName(name) {
    return (typeof name === "string" &&
        !RESERVED_WORDS.has(name) &&
        exports.IS_VALID_IDENTIFIER.test(name));
}
exports.isValidVariableName = isValidVariableName;
/**
 * Quote JavaScript key access.
 */
function quoteKey(key, next) {
    return isValidVariableName(key) ? key : next(key);
}
exports.quoteKey = quoteKey;
/**
 * Serialize the path to a string.
 */
function stringifyPath(path, next) {
    let result = "";
    for (const key of path) {
        if (isValidVariableName(key)) {
            result += `.${key}`;
        }
        else {
            result += `[${next(key)}]`;
        }
    }
    return result;
}
exports.stringifyPath = stringifyPath;
//# sourceMappingURL=quote.js.map