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
function extendedRegExp(pattern) {
    let flags = '';
    if (startsWith(pattern, '(?i)')) {
        pattern = pattern.substring(4);
        flags = 'i';
    }
    try {
        return new RegExp(pattern, flags + 'u');
    }
    catch (e) {
        // could be an exception due to the 'u ' flag
        try {
            return new RegExp(pattern, flags);
        }
        catch (e) {
            // invalid pattern
            return undefined;
        }
    }
}
// from https://tanishiking.github.io/posts/count-unicode-codepoint/#work-hard-with-for-statements
function stringLength(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
        // obtain the i-th 16-bit
        const code = str.charCodeAt(i);
        if (0xD800 <= code && code <= 0xDBFF) {
            // if the i-th 16bit is an upper surrogate
            // skip the next 16 bits (lower surrogate)
            i++;
        }
    }
    return count;
}

export { endsWith, extendedRegExp, startsWith, stringLength };
