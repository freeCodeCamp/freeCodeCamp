import { LcsDiff } from '../../../base/common/diff/diff.js';
import { LinesDiff } from './linesDiffComputer.js';
import { DetailedLineRangeMapping, RangeMapping } from './rangeMapping.js';
import { firstNonWhitespaceIndex, lastNonWhitespaceIndex } from '../../../base/common/strings.js';
import { Range } from '../core/range.js';
import { assertFn, checkAdjacentItems } from '../../../base/common/assert.js';
import { LineRange } from '../core/ranges/lineRange.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const MINIMUM_MATCHING_CHARACTER_LENGTH = 3;
class LegacyLinesDiffComputer {
    computeDiff(originalLines, modifiedLines, options) {
        const diffComputer = new DiffComputer(originalLines, modifiedLines, {
            maxComputationTime: options.maxComputationTimeMs,
            shouldIgnoreTrimWhitespace: options.ignoreTrimWhitespace,
            shouldComputeCharChanges: true,
            shouldMakePrettyDiff: true,
            shouldPostProcessCharChanges: true,
        });
        const result = diffComputer.computeDiff();
        const changes = [];
        let lastChange = null;
        for (const c of result.changes) {
            let originalRange;
            if (c.originalEndLineNumber === 0) {
                // Insertion
                originalRange = new LineRange(c.originalStartLineNumber + 1, c.originalStartLineNumber + 1);
            }
            else {
                originalRange = new LineRange(c.originalStartLineNumber, c.originalEndLineNumber + 1);
            }
            let modifiedRange;
            if (c.modifiedEndLineNumber === 0) {
                // Deletion
                modifiedRange = new LineRange(c.modifiedStartLineNumber + 1, c.modifiedStartLineNumber + 1);
            }
            else {
                modifiedRange = new LineRange(c.modifiedStartLineNumber, c.modifiedEndLineNumber + 1);
            }
            let change = new DetailedLineRangeMapping(originalRange, modifiedRange, c.charChanges?.map(c => new RangeMapping(new Range(c.originalStartLineNumber, c.originalStartColumn, c.originalEndLineNumber, c.originalEndColumn), new Range(c.modifiedStartLineNumber, c.modifiedStartColumn, c.modifiedEndLineNumber, c.modifiedEndColumn))));
            if (lastChange) {
                if (lastChange.modified.endLineNumberExclusive === change.modified.startLineNumber
                    || lastChange.original.endLineNumberExclusive === change.original.startLineNumber) {
                    // join touching diffs. Probably moving diffs up/down in the algorithm causes touching diffs.
                    change = new DetailedLineRangeMapping(lastChange.original.join(change.original), lastChange.modified.join(change.modified), lastChange.innerChanges && change.innerChanges ?
                        lastChange.innerChanges.concat(change.innerChanges) : undefined);
                    changes.pop();
                }
            }
            changes.push(change);
            lastChange = change;
        }
        assertFn(() => {
            return checkAdjacentItems(changes, (m1, m2) => m2.original.startLineNumber - m1.original.endLineNumberExclusive === m2.modified.startLineNumber - m1.modified.endLineNumberExclusive &&
                // There has to be an unchanged line in between (otherwise both diffs should have been joined)
                m1.original.endLineNumberExclusive < m2.original.startLineNumber &&
                m1.modified.endLineNumberExclusive < m2.modified.startLineNumber);
        });
        return new LinesDiff(changes, [], result.quitEarly);
    }
}
function computeDiff(originalSequence, modifiedSequence, continueProcessingPredicate, pretty) {
    const diffAlgo = new LcsDiff(originalSequence, modifiedSequence, continueProcessingPredicate);
    return diffAlgo.ComputeDiff(pretty);
}
class LineSequence {
    constructor(lines) {
        const startColumns = [];
        const endColumns = [];
        for (let i = 0, length = lines.length; i < length; i++) {
            startColumns[i] = getFirstNonBlankColumn(lines[i], 1);
            endColumns[i] = getLastNonBlankColumn(lines[i], 1);
        }
        this.lines = lines;
        this._startColumns = startColumns;
        this._endColumns = endColumns;
    }
    getElements() {
        const elements = [];
        for (let i = 0, len = this.lines.length; i < len; i++) {
            elements[i] = this.lines[i].substring(this._startColumns[i] - 1, this._endColumns[i] - 1);
        }
        return elements;
    }
    getStrictElement(index) {
        return this.lines[index];
    }
    getStartLineNumber(i) {
        return i + 1;
    }
    getEndLineNumber(i) {
        return i + 1;
    }
    createCharSequence(shouldIgnoreTrimWhitespace, startIndex, endIndex) {
        const charCodes = [];
        const lineNumbers = [];
        const columns = [];
        let len = 0;
        for (let index = startIndex; index <= endIndex; index++) {
            const lineContent = this.lines[index];
            const startColumn = (shouldIgnoreTrimWhitespace ? this._startColumns[index] : 1);
            const endColumn = (shouldIgnoreTrimWhitespace ? this._endColumns[index] : lineContent.length + 1);
            for (let col = startColumn; col < endColumn; col++) {
                charCodes[len] = lineContent.charCodeAt(col - 1);
                lineNumbers[len] = index + 1;
                columns[len] = col;
                len++;
            }
            if (!shouldIgnoreTrimWhitespace && index < endIndex) {
                // Add \n if trim whitespace is not ignored
                charCodes[len] = 10 /* CharCode.LineFeed */;
                lineNumbers[len] = index + 1;
                columns[len] = lineContent.length + 1;
                len++;
            }
        }
        return new CharSequence(charCodes, lineNumbers, columns);
    }
}
class CharSequence {
    constructor(charCodes, lineNumbers, columns) {
        this._charCodes = charCodes;
        this._lineNumbers = lineNumbers;
        this._columns = columns;
    }
    toString() {
        return ('[' + this._charCodes.map((s, idx) => (s === 10 /* CharCode.LineFeed */ ? '\\n' : String.fromCharCode(s)) + `-(${this._lineNumbers[idx]},${this._columns[idx]})`).join(', ') + ']');
    }
    _assertIndex(index, arr) {
        if (index < 0 || index >= arr.length) {
            throw new Error(`Illegal index`);
        }
    }
    getElements() {
        return this._charCodes;
    }
    getStartLineNumber(i) {
        if (i > 0 && i === this._lineNumbers.length) {
            // the start line number of the element after the last element
            // is the end line number of the last element
            return this.getEndLineNumber(i - 1);
        }
        this._assertIndex(i, this._lineNumbers);
        return this._lineNumbers[i];
    }
    getEndLineNumber(i) {
        if (i === -1) {
            // the end line number of the element before the first element
            // is the start line number of the first element
            return this.getStartLineNumber(i + 1);
        }
        this._assertIndex(i, this._lineNumbers);
        if (this._charCodes[i] === 10 /* CharCode.LineFeed */) {
            return this._lineNumbers[i] + 1;
        }
        return this._lineNumbers[i];
    }
    getStartColumn(i) {
        if (i > 0 && i === this._columns.length) {
            // the start column of the element after the last element
            // is the end column of the last element
            return this.getEndColumn(i - 1);
        }
        this._assertIndex(i, this._columns);
        return this._columns[i];
    }
    getEndColumn(i) {
        if (i === -1) {
            // the end column of the element before the first element
            // is the start column of the first element
            return this.getStartColumn(i + 1);
        }
        this._assertIndex(i, this._columns);
        if (this._charCodes[i] === 10 /* CharCode.LineFeed */) {
            return 1;
        }
        return this._columns[i] + 1;
    }
}
class CharChange {
    constructor(originalStartLineNumber, originalStartColumn, originalEndLineNumber, originalEndColumn, modifiedStartLineNumber, modifiedStartColumn, modifiedEndLineNumber, modifiedEndColumn) {
        this.originalStartLineNumber = originalStartLineNumber;
        this.originalStartColumn = originalStartColumn;
        this.originalEndLineNumber = originalEndLineNumber;
        this.originalEndColumn = originalEndColumn;
        this.modifiedStartLineNumber = modifiedStartLineNumber;
        this.modifiedStartColumn = modifiedStartColumn;
        this.modifiedEndLineNumber = modifiedEndLineNumber;
        this.modifiedEndColumn = modifiedEndColumn;
    }
    static createFromDiffChange(diffChange, originalCharSequence, modifiedCharSequence) {
        const originalStartLineNumber = originalCharSequence.getStartLineNumber(diffChange.originalStart);
        const originalStartColumn = originalCharSequence.getStartColumn(diffChange.originalStart);
        const originalEndLineNumber = originalCharSequence.getEndLineNumber(diffChange.originalStart + diffChange.originalLength - 1);
        const originalEndColumn = originalCharSequence.getEndColumn(diffChange.originalStart + diffChange.originalLength - 1);
        const modifiedStartLineNumber = modifiedCharSequence.getStartLineNumber(diffChange.modifiedStart);
        const modifiedStartColumn = modifiedCharSequence.getStartColumn(diffChange.modifiedStart);
        const modifiedEndLineNumber = modifiedCharSequence.getEndLineNumber(diffChange.modifiedStart + diffChange.modifiedLength - 1);
        const modifiedEndColumn = modifiedCharSequence.getEndColumn(diffChange.modifiedStart + diffChange.modifiedLength - 1);
        return new CharChange(originalStartLineNumber, originalStartColumn, originalEndLineNumber, originalEndColumn, modifiedStartLineNumber, modifiedStartColumn, modifiedEndLineNumber, modifiedEndColumn);
    }
}
function postProcessCharChanges(rawChanges) {
    if (rawChanges.length <= 1) {
        return rawChanges;
    }
    const result = [rawChanges[0]];
    let prevChange = result[0];
    for (let i = 1, len = rawChanges.length; i < len; i++) {
        const currChange = rawChanges[i];
        const originalMatchingLength = currChange.originalStart - (prevChange.originalStart + prevChange.originalLength);
        const modifiedMatchingLength = currChange.modifiedStart - (prevChange.modifiedStart + prevChange.modifiedLength);
        // Both of the above should be equal, but the continueProcessingPredicate may prevent this from being true
        const matchingLength = Math.min(originalMatchingLength, modifiedMatchingLength);
        if (matchingLength < MINIMUM_MATCHING_CHARACTER_LENGTH) {
            // Merge the current change into the previous one
            prevChange.originalLength = (currChange.originalStart + currChange.originalLength) - prevChange.originalStart;
            prevChange.modifiedLength = (currChange.modifiedStart + currChange.modifiedLength) - prevChange.modifiedStart;
        }
        else {
            // Add the current change
            result.push(currChange);
            prevChange = currChange;
        }
    }
    return result;
}
class LineChange {
    constructor(originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber, charChanges) {
        this.originalStartLineNumber = originalStartLineNumber;
        this.originalEndLineNumber = originalEndLineNumber;
        this.modifiedStartLineNumber = modifiedStartLineNumber;
        this.modifiedEndLineNumber = modifiedEndLineNumber;
        this.charChanges = charChanges;
    }
    static createFromDiffResult(shouldIgnoreTrimWhitespace, diffChange, originalLineSequence, modifiedLineSequence, continueCharDiff, shouldComputeCharChanges, shouldPostProcessCharChanges) {
        let originalStartLineNumber;
        let originalEndLineNumber;
        let modifiedStartLineNumber;
        let modifiedEndLineNumber;
        let charChanges = undefined;
        if (diffChange.originalLength === 0) {
            originalStartLineNumber = originalLineSequence.getStartLineNumber(diffChange.originalStart) - 1;
            originalEndLineNumber = 0;
        }
        else {
            originalStartLineNumber = originalLineSequence.getStartLineNumber(diffChange.originalStart);
            originalEndLineNumber = originalLineSequence.getEndLineNumber(diffChange.originalStart + diffChange.originalLength - 1);
        }
        if (diffChange.modifiedLength === 0) {
            modifiedStartLineNumber = modifiedLineSequence.getStartLineNumber(diffChange.modifiedStart) - 1;
            modifiedEndLineNumber = 0;
        }
        else {
            modifiedStartLineNumber = modifiedLineSequence.getStartLineNumber(diffChange.modifiedStart);
            modifiedEndLineNumber = modifiedLineSequence.getEndLineNumber(diffChange.modifiedStart + diffChange.modifiedLength - 1);
        }
        if (shouldComputeCharChanges && diffChange.originalLength > 0 && diffChange.originalLength < 20 && diffChange.modifiedLength > 0 && diffChange.modifiedLength < 20 && continueCharDiff()) {
            // Compute character changes for diff chunks of at most 20 lines...
            const originalCharSequence = originalLineSequence.createCharSequence(shouldIgnoreTrimWhitespace, diffChange.originalStart, diffChange.originalStart + diffChange.originalLength - 1);
            const modifiedCharSequence = modifiedLineSequence.createCharSequence(shouldIgnoreTrimWhitespace, diffChange.modifiedStart, diffChange.modifiedStart + diffChange.modifiedLength - 1);
            if (originalCharSequence.getElements().length > 0 && modifiedCharSequence.getElements().length > 0) {
                let rawChanges = computeDiff(originalCharSequence, modifiedCharSequence, continueCharDiff, true).changes;
                if (shouldPostProcessCharChanges) {
                    rawChanges = postProcessCharChanges(rawChanges);
                }
                charChanges = [];
                for (let i = 0, length = rawChanges.length; i < length; i++) {
                    charChanges.push(CharChange.createFromDiffChange(rawChanges[i], originalCharSequence, modifiedCharSequence));
                }
            }
        }
        return new LineChange(originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber, charChanges);
    }
}
class DiffComputer {
    constructor(originalLines, modifiedLines, opts) {
        this.shouldComputeCharChanges = opts.shouldComputeCharChanges;
        this.shouldPostProcessCharChanges = opts.shouldPostProcessCharChanges;
        this.shouldIgnoreTrimWhitespace = opts.shouldIgnoreTrimWhitespace;
        this.shouldMakePrettyDiff = opts.shouldMakePrettyDiff;
        this.originalLines = originalLines;
        this.modifiedLines = modifiedLines;
        this.original = new LineSequence(originalLines);
        this.modified = new LineSequence(modifiedLines);
        this.continueLineDiff = createContinueProcessingPredicate(opts.maxComputationTime);
        this.continueCharDiff = createContinueProcessingPredicate(opts.maxComputationTime === 0 ? 0 : Math.min(opts.maxComputationTime, 5000)); // never run after 5s for character changes...
    }
    computeDiff() {
        if (this.original.lines.length === 1 && this.original.lines[0].length === 0) {
            // empty original => fast path
            if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0) {
                return {
                    quitEarly: false,
                    changes: []
                };
            }
            return {
                quitEarly: false,
                changes: [{
                        originalStartLineNumber: 1,
                        originalEndLineNumber: 1,
                        modifiedStartLineNumber: 1,
                        modifiedEndLineNumber: this.modified.lines.length,
                        charChanges: undefined
                    }]
            };
        }
        if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0) {
            // empty modified => fast path
            return {
                quitEarly: false,
                changes: [{
                        originalStartLineNumber: 1,
                        originalEndLineNumber: this.original.lines.length,
                        modifiedStartLineNumber: 1,
                        modifiedEndLineNumber: 1,
                        charChanges: undefined
                    }]
            };
        }
        const diffResult = computeDiff(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff);
        const rawChanges = diffResult.changes;
        const quitEarly = diffResult.quitEarly;
        // The diff is always computed with ignoring trim whitespace
        // This ensures we get the prettiest diff
        if (this.shouldIgnoreTrimWhitespace) {
            const lineChanges = [];
            for (let i = 0, length = rawChanges.length; i < length; i++) {
                lineChanges.push(LineChange.createFromDiffResult(this.shouldIgnoreTrimWhitespace, rawChanges[i], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
            }
            return {
                quitEarly: quitEarly,
                changes: lineChanges
            };
        }
        // Need to post-process and introduce changes where the trim whitespace is different
        // Note that we are looping starting at -1 to also cover the lines before the first change
        const result = [];
        let originalLineIndex = 0;
        let modifiedLineIndex = 0;
        for (let i = -1 /* !!!! */, len = rawChanges.length; i < len; i++) {
            const nextChange = (i + 1 < len ? rawChanges[i + 1] : null);
            const originalStop = (nextChange ? nextChange.originalStart : this.originalLines.length);
            const modifiedStop = (nextChange ? nextChange.modifiedStart : this.modifiedLines.length);
            while (originalLineIndex < originalStop && modifiedLineIndex < modifiedStop) {
                const originalLine = this.originalLines[originalLineIndex];
                const modifiedLine = this.modifiedLines[modifiedLineIndex];
                if (originalLine !== modifiedLine) {
                    // These lines differ only in trim whitespace
                    // Check the leading whitespace
                    {
                        let originalStartColumn = getFirstNonBlankColumn(originalLine, 1);
                        let modifiedStartColumn = getFirstNonBlankColumn(modifiedLine, 1);
                        while (originalStartColumn > 1 && modifiedStartColumn > 1) {
                            const originalChar = originalLine.charCodeAt(originalStartColumn - 2);
                            const modifiedChar = modifiedLine.charCodeAt(modifiedStartColumn - 2);
                            if (originalChar !== modifiedChar) {
                                break;
                            }
                            originalStartColumn--;
                            modifiedStartColumn--;
                        }
                        if (originalStartColumn > 1 || modifiedStartColumn > 1) {
                            this._pushTrimWhitespaceCharChange(result, originalLineIndex + 1, 1, originalStartColumn, modifiedLineIndex + 1, 1, modifiedStartColumn);
                        }
                    }
                    // Check the trailing whitespace
                    {
                        let originalEndColumn = getLastNonBlankColumn(originalLine, 1);
                        let modifiedEndColumn = getLastNonBlankColumn(modifiedLine, 1);
                        const originalMaxColumn = originalLine.length + 1;
                        const modifiedMaxColumn = modifiedLine.length + 1;
                        while (originalEndColumn < originalMaxColumn && modifiedEndColumn < modifiedMaxColumn) {
                            const originalChar = originalLine.charCodeAt(originalEndColumn - 1);
                            const modifiedChar = originalLine.charCodeAt(modifiedEndColumn - 1);
                            if (originalChar !== modifiedChar) {
                                break;
                            }
                            originalEndColumn++;
                            modifiedEndColumn++;
                        }
                        if (originalEndColumn < originalMaxColumn || modifiedEndColumn < modifiedMaxColumn) {
                            this._pushTrimWhitespaceCharChange(result, originalLineIndex + 1, originalEndColumn, originalMaxColumn, modifiedLineIndex + 1, modifiedEndColumn, modifiedMaxColumn);
                        }
                    }
                }
                originalLineIndex++;
                modifiedLineIndex++;
            }
            if (nextChange) {
                // Emit the actual change
                result.push(LineChange.createFromDiffResult(this.shouldIgnoreTrimWhitespace, nextChange, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
                originalLineIndex += nextChange.originalLength;
                modifiedLineIndex += nextChange.modifiedLength;
            }
        }
        return {
            quitEarly: quitEarly,
            changes: result
        };
    }
    _pushTrimWhitespaceCharChange(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn) {
        if (this._mergeTrimWhitespaceCharChange(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn)) {
            // Merged into previous
            return;
        }
        let charChanges = undefined;
        if (this.shouldComputeCharChanges) {
            charChanges = [new CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn)];
        }
        result.push(new LineChange(originalLineNumber, originalLineNumber, modifiedLineNumber, modifiedLineNumber, charChanges));
    }
    _mergeTrimWhitespaceCharChange(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn) {
        const len = result.length;
        if (len === 0) {
            return false;
        }
        const prevChange = result[len - 1];
        if (prevChange.originalEndLineNumber === 0 || prevChange.modifiedEndLineNumber === 0) {
            // Don't merge with inserts/deletes
            return false;
        }
        if (prevChange.originalEndLineNumber === originalLineNumber && prevChange.modifiedEndLineNumber === modifiedLineNumber) {
            if (this.shouldComputeCharChanges && prevChange.charChanges) {
                prevChange.charChanges.push(new CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn));
            }
            return true;
        }
        if (prevChange.originalEndLineNumber + 1 === originalLineNumber && prevChange.modifiedEndLineNumber + 1 === modifiedLineNumber) {
            prevChange.originalEndLineNumber = originalLineNumber;
            prevChange.modifiedEndLineNumber = modifiedLineNumber;
            if (this.shouldComputeCharChanges && prevChange.charChanges) {
                prevChange.charChanges.push(new CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn));
            }
            return true;
        }
        return false;
    }
}
function getFirstNonBlankColumn(txt, defaultValue) {
    const r = firstNonWhitespaceIndex(txt);
    if (r === -1) {
        return defaultValue;
    }
    return r + 1;
}
function getLastNonBlankColumn(txt, defaultValue) {
    const r = lastNonWhitespaceIndex(txt);
    if (r === -1) {
        return defaultValue;
    }
    return r + 2;
}
function createContinueProcessingPredicate(maximumRuntime) {
    if (maximumRuntime === 0) {
        return () => true;
    }
    const startTime = Date.now();
    return () => {
        return Date.now() - startTime < maximumRuntime;
    };
}

export { DiffComputer, LegacyLinesDiffComputer };
