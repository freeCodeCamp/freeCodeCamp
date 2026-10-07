import { splitLines } from '../../../../../base/common/strings.js';
import { Range } from '../../../core/range.js';
import { TextLength } from '../../../core/text/textLength.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * The end must be greater than or equal to the start.
*/
function lengthDiff(startLineCount, startColumnCount, endLineCount, endColumnCount) {
    return (startLineCount !== endLineCount)
        ? toLength(endLineCount - startLineCount, endColumnCount)
        : toLength(0, endColumnCount - startColumnCount);
}
// eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
const lengthZero = 0;
function lengthIsZero(length) {
    // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
    return length === 0;
}
/*
 * We have 52 bits available in a JS number.
 * We use the upper 26 bits to store the line and the lower 26 bits to store the column.
 */
///*
const factor = 2 ** 26;
/*/
const factor = 1000000;
// */
function toLength(lineCount, columnCount) {
    // llllllllllllllllllllllllllcccccccccccccccccccccccccc (52 bits)
    //       line count (26 bits)    column count (26 bits)
    // If there is no overflow (all values/sums below 2^26 = 67108864),
    // we have `toLength(lns1, cols1) + toLength(lns2, cols2) = toLength(lns1 + lns2, cols1 + cols2)`.
    // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
    return (lineCount * factor + columnCount);
}
function lengthToObj(length) {
    // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
    const l = length;
    const lineCount = Math.floor(l / factor);
    const columnCount = l - lineCount * factor;
    return new TextLength(lineCount, columnCount);
}
function lengthGetLineCount(length) {
    // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
    return Math.floor(length / factor);
}
/**
 * Returns the amount of columns of the given length, assuming that it does not span any line.
*/
function lengthGetColumnCountIfZeroLineCount(length) {
    // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
    return length;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function lengthAdd(l1, l2) {
    let r = l1 + l2;
    if (l2 >= factor) {
        r = r - (l1 % factor);
    }
    return r;
}
function sumLengths(items, lengthFn) {
    return items.reduce((a, b) => lengthAdd(a, lengthFn(b)), lengthZero);
}
function lengthEquals(length1, length2) {
    return length1 === length2;
}
/**
 * Returns a non negative length `result` such that `lengthAdd(length1, result) = length2`, or zero if such length does not exist.
 */
function lengthDiffNonNegative(length1, length2) {
    // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
    const l1 = length1;
    // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
    const l2 = length2;
    const diff = l2 - l1;
    if (diff <= 0) {
        // line-count of length1 is higher than line-count of length2
        // or they are equal and column-count of length1 is higher than column-count of length2
        return lengthZero;
    }
    const lineCount1 = Math.floor(l1 / factor);
    const lineCount2 = Math.floor(l2 / factor);
    const colCount2 = l2 - lineCount2 * factor;
    if (lineCount1 === lineCount2) {
        const colCount1 = l1 - lineCount1 * factor;
        return toLength(0, colCount2 - colCount1);
    }
    else {
        return toLength(lineCount2 - lineCount1, colCount2);
    }
}
function lengthLessThan(length1, length2) {
    // First, compare line counts, then column counts.
    // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
    return length1 < length2;
}
function lengthLessThanEqual(length1, length2) {
    // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
    return length1 <= length2;
}
function lengthGreaterThanEqual(length1, length2) {
    // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
    return length1 >= length2;
}
function positionToLength(position) {
    return toLength(position.lineNumber - 1, position.column - 1);
}
function lengthsToRange(lengthStart, lengthEnd) {
    // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
    const l = lengthStart;
    const lineCount = Math.floor(l / factor);
    const colCount = l - lineCount * factor;
    // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
    const l2 = lengthEnd;
    const lineCount2 = Math.floor(l2 / factor);
    const colCount2 = l2 - lineCount2 * factor;
    return new Range(lineCount + 1, colCount + 1, lineCount2 + 1, colCount2 + 1);
}
function lengthOfString(str) {
    const lines = splitLines(str);
    return toLength(lines.length - 1, lines[lines.length - 1].length);
}

export { lengthAdd, lengthDiff, lengthDiffNonNegative, lengthEquals, lengthGetColumnCountIfZeroLineCount, lengthGetLineCount, lengthGreaterThanEqual, lengthIsZero, lengthLessThan, lengthLessThanEqual, lengthOfString, lengthToObj, lengthZero, lengthsToRange, positionToLength, sumLengths, toLength };
