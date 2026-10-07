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
    let diff = haystack.length - needle.length;
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
/**
 * Computes the difference score for two strings. More similar strings have a higher score.
 * We use largest common subsequence dynamic programming approach but penalize in the end for length differences.
 * Strings that have a large length difference will get a bad default score 0.
 * Complexity - both time and space O(first.length * second.length)
 * Dynamic programming LCS computation http://en.wikipedia.org/wiki/Longest_common_subsequence_problem
 *
 * @param first a string
 * @param second a string
 */
function difference(first, second, maxLenDelta = 4) {
    let lengthDifference = Math.abs(first.length - second.length);
    // We only compute score if length of the currentWord and length of entry.name are similar.
    if (lengthDifference > maxLenDelta) {
        return 0;
    }
    // Initialize LCS (largest common subsequence) matrix.
    let LCS = [];
    let zeroArray = [];
    let i, j;
    for (i = 0; i < second.length + 1; ++i) {
        zeroArray.push(0);
    }
    for (i = 0; i < first.length + 1; ++i) {
        LCS.push(zeroArray);
    }
    for (i = 1; i < first.length + 1; ++i) {
        for (j = 1; j < second.length + 1; ++j) {
            if (first[i - 1] === second[j - 1]) {
                LCS[i][j] = LCS[i - 1][j - 1] + 1;
            }
            else {
                LCS[i][j] = Math.max(LCS[i - 1][j], LCS[i][j - 1]);
            }
        }
    }
    return LCS[first.length][second.length] - Math.sqrt(lengthDifference);
}
/**
 * Limit of string length.
 */
function getLimitedString(str, ellipsis = true) {
    if (!str) {
        return '';
    }
    if (str.length < 140) {
        return str;
    }
    return str.slice(0, 140) + (ellipsis ? '\u2026' : '');
}
/**
 * Limit of string length.
 */
function trim(str, regexp) {
    const m = regexp.exec(str);
    if (m && m[0].length) {
        return str.substr(0, str.length - m[0].length);
    }
    return str;
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

export { difference, endsWith, getLimitedString, repeat, startsWith, trim };
