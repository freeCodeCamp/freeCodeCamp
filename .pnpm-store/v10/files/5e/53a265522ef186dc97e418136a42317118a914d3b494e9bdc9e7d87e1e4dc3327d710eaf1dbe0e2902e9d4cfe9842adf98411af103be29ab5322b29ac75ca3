import { findLastIdxMonotonous, findLastMonotonous, findFirstMonotonous } from '../../../../base/common/arraysFind.js';
import { OffsetRange } from '../../core/ranges/offsetRange.js';
import { Position } from '../../core/position.js';
import { Range } from '../../core/range.js';
import { isSpace } from './utils.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class LinesSliceCharSequence {
    constructor(lines, range, considerWhitespaceChanges) {
        this.lines = lines;
        this.range = range;
        this.considerWhitespaceChanges = considerWhitespaceChanges;
        this.elements = [];
        this.firstElementOffsetByLineIdx = [];
        this.lineStartOffsets = [];
        this.trimmedWsLengthsByLineIdx = [];
        this.firstElementOffsetByLineIdx.push(0);
        for (let lineNumber = this.range.startLineNumber; lineNumber <= this.range.endLineNumber; lineNumber++) {
            let line = lines[lineNumber - 1];
            let lineStartOffset = 0;
            if (lineNumber === this.range.startLineNumber && this.range.startColumn > 1) {
                lineStartOffset = this.range.startColumn - 1;
                line = line.substring(lineStartOffset);
            }
            this.lineStartOffsets.push(lineStartOffset);
            let trimmedWsLength = 0;
            if (!considerWhitespaceChanges) {
                const trimmedStartLine = line.trimStart();
                trimmedWsLength = line.length - trimmedStartLine.length;
                line = trimmedStartLine.trimEnd();
            }
            this.trimmedWsLengthsByLineIdx.push(trimmedWsLength);
            const lineLength = lineNumber === this.range.endLineNumber ? Math.min(this.range.endColumn - 1 - lineStartOffset - trimmedWsLength, line.length) : line.length;
            for (let i = 0; i < lineLength; i++) {
                this.elements.push(line.charCodeAt(i));
            }
            if (lineNumber < this.range.endLineNumber) {
                this.elements.push('\n'.charCodeAt(0));
                this.firstElementOffsetByLineIdx.push(this.elements.length);
            }
        }
    }
    toString() {
        return `Slice: "${this.text}"`;
    }
    get text() {
        return this.getText(new OffsetRange(0, this.length));
    }
    getText(range) {
        return this.elements.slice(range.start, range.endExclusive).map(e => String.fromCharCode(e)).join('');
    }
    getElement(offset) {
        return this.elements[offset];
    }
    get length() {
        return this.elements.length;
    }
    getBoundaryScore(length) {
        //   a   b   c   ,           d   e   f
        // 11  0   0   12  15  6   13  0   0   11
        const prevCategory = getCategory(length > 0 ? this.elements[length - 1] : -1);
        const nextCategory = getCategory(length < this.elements.length ? this.elements[length] : -1);
        if (prevCategory === 7 /* CharBoundaryCategory.LineBreakCR */ && nextCategory === 8 /* CharBoundaryCategory.LineBreakLF */) {
            // don't break between \r and \n
            return 0;
        }
        if (prevCategory === 8 /* CharBoundaryCategory.LineBreakLF */) {
            // prefer the linebreak before the change
            return 150;
        }
        let score = 0;
        if (prevCategory !== nextCategory) {
            score += 10;
            if (prevCategory === 0 /* CharBoundaryCategory.WordLower */ && nextCategory === 1 /* CharBoundaryCategory.WordUpper */) {
                score += 1;
            }
        }
        score += getCategoryBoundaryScore(prevCategory);
        score += getCategoryBoundaryScore(nextCategory);
        return score;
    }
    translateOffset(offset, preference = 'right') {
        // find smallest i, so that lineBreakOffsets[i] <= offset using binary search
        const i = findLastIdxMonotonous(this.firstElementOffsetByLineIdx, (value) => value <= offset);
        const lineOffset = offset - this.firstElementOffsetByLineIdx[i];
        return new Position(this.range.startLineNumber + i, 1 + this.lineStartOffsets[i] + lineOffset + ((lineOffset === 0 && preference === 'left') ? 0 : this.trimmedWsLengthsByLineIdx[i]));
    }
    translateRange(range) {
        const pos1 = this.translateOffset(range.start, 'right');
        const pos2 = this.translateOffset(range.endExclusive, 'left');
        if (pos2.isBefore(pos1)) {
            return Range.fromPositions(pos2, pos2);
        }
        return Range.fromPositions(pos1, pos2);
    }
    /**
     * Finds the word that contains the character at the given offset
     */
    findWordContaining(offset) {
        if (offset < 0 || offset >= this.elements.length) {
            return undefined;
        }
        if (!isWordChar(this.elements[offset])) {
            return undefined;
        }
        // find start
        let start = offset;
        while (start > 0 && isWordChar(this.elements[start - 1])) {
            start--;
        }
        // find end
        let end = offset;
        while (end < this.elements.length && isWordChar(this.elements[end])) {
            end++;
        }
        return new OffsetRange(start, end);
    }
    /** fooBar has the two sub-words foo and bar */
    findSubWordContaining(offset) {
        if (offset < 0 || offset >= this.elements.length) {
            return undefined;
        }
        if (!isWordChar(this.elements[offset])) {
            return undefined;
        }
        // find start
        let start = offset;
        while (start > 0 && isWordChar(this.elements[start - 1]) && !isUpperCase(this.elements[start])) {
            start--;
        }
        // find end
        let end = offset;
        while (end < this.elements.length && isWordChar(this.elements[end]) && !isUpperCase(this.elements[end])) {
            end++;
        }
        return new OffsetRange(start, end);
    }
    countLinesIn(range) {
        return this.translateOffset(range.endExclusive).lineNumber - this.translateOffset(range.start).lineNumber;
    }
    isStronglyEqual(offset1, offset2) {
        return this.elements[offset1] === this.elements[offset2];
    }
    extendToFullLines(range) {
        const start = findLastMonotonous(this.firstElementOffsetByLineIdx, x => x <= range.start) ?? 0;
        const end = findFirstMonotonous(this.firstElementOffsetByLineIdx, x => range.endExclusive <= x) ?? this.elements.length;
        return new OffsetRange(start, end);
    }
}
function isWordChar(charCode) {
    return charCode >= 97 /* CharCode.a */ && charCode <= 122 /* CharCode.z */
        || charCode >= 65 /* CharCode.A */ && charCode <= 90 /* CharCode.Z */
        || charCode >= 48 /* CharCode.Digit0 */ && charCode <= 57 /* CharCode.Digit9 */;
}
function isUpperCase(charCode) {
    return charCode >= 65 /* CharCode.A */ && charCode <= 90 /* CharCode.Z */;
}
const score = {
    [0 /* CharBoundaryCategory.WordLower */]: 0,
    [1 /* CharBoundaryCategory.WordUpper */]: 0,
    [2 /* CharBoundaryCategory.WordNumber */]: 0,
    [3 /* CharBoundaryCategory.End */]: 10,
    [4 /* CharBoundaryCategory.Other */]: 2,
    [5 /* CharBoundaryCategory.Separator */]: 30,
    [6 /* CharBoundaryCategory.Space */]: 3,
    [7 /* CharBoundaryCategory.LineBreakCR */]: 10,
    [8 /* CharBoundaryCategory.LineBreakLF */]: 10,
};
function getCategoryBoundaryScore(category) {
    return score[category];
}
function getCategory(charCode) {
    if (charCode === 10 /* CharCode.LineFeed */) {
        return 8 /* CharBoundaryCategory.LineBreakLF */;
    }
    else if (charCode === 13 /* CharCode.CarriageReturn */) {
        return 7 /* CharBoundaryCategory.LineBreakCR */;
    }
    else if (isSpace(charCode)) {
        return 6 /* CharBoundaryCategory.Space */;
    }
    else if (charCode >= 97 /* CharCode.a */ && charCode <= 122 /* CharCode.z */) {
        return 0 /* CharBoundaryCategory.WordLower */;
    }
    else if (charCode >= 65 /* CharCode.A */ && charCode <= 90 /* CharCode.Z */) {
        return 1 /* CharBoundaryCategory.WordUpper */;
    }
    else if (charCode >= 48 /* CharCode.Digit0 */ && charCode <= 57 /* CharCode.Digit9 */) {
        return 2 /* CharBoundaryCategory.WordNumber */;
    }
    else if (charCode === -1) {
        return 3 /* CharBoundaryCategory.End */;
    }
    else if (charCode === 44 /* CharCode.Comma */ || charCode === 59 /* CharCode.Semicolon */) {
        return 5 /* CharBoundaryCategory.Separator */;
    }
    else {
        return 4 /* CharBoundaryCategory.Other */;
    }
}

export { LinesSliceCharSequence };
