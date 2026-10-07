/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function startsWith(haystack, needle) {
    if (haystack.length < needle.length) {
        return false;
    }
    for (let i = 0; i < needle.length; i++) {
        if (haystack[i] !== needle[i]) {
            return false;
        }
    }
    return true;
}
/**
 * Determines if haystack ends with needle.
 */
function endsWith(haystack, needle) {
    const diff = haystack.length - needle.length;
    if (diff > 0) {
        return haystack.lastIndexOf(needle) === diff;
    }
    else if (diff === 0) {
        return haystack === needle;
    }
    else {
        return false;
    }
}
function repeat(value, count) {
    let s = '';
    while (count > 0) {
        if ((count & 1) === 1) {
            s += value;
        }
        value += value;
        count = count >>> 1;
    }
    return s;
}
const _a = 'a'.charCodeAt(0);
const _z = 'z'.charCodeAt(0);
const _A = 'A'.charCodeAt(0);
const _Z = 'Z'.charCodeAt(0);
const _0 = '0'.charCodeAt(0);
const _9 = '9'.charCodeAt(0);
function isLetterOrDigit(text, index) {
    const c = text.charCodeAt(index);
    return (_a <= c && c <= _z) || (_A <= c && c <= _Z) || (_0 <= c && c <= _9);
}

export { endsWith, isLetterOrDigit, repeat, startsWith };
