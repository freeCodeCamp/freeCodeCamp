import { compareBy } from '../../../../base/common/arrays.js';
import { assertFn, checkAdjacentItems } from '../../../../base/common/assert.js';
import { BugIndicatingError } from '../../../../base/common/errors.js';
import { commonPrefixLength, commonSuffixLength } from '../../../../base/common/strings.js';
import { Position } from '../position.js';
import { Range } from '../range.js';
import { TextLength } from '../text/textLength.js';
import { StringText } from '../text/abstractText.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class TextEdit {
    static fromStringEdit(edit, initialState) {
        const edits = edit.replacements.map(e => TextReplacement.fromStringReplacement(e, initialState));
        return new TextEdit(edits);
    }
    static fromParallelReplacementsUnsorted(replacements) {
        const r = replacements.slice().sort(compareBy(i => i.range, Range.compareRangesUsingStarts));
        return new TextEdit(r);
    }
    constructor(replacements) {
        this.replacements = replacements;
        assertFn(() => checkAdjacentItems(replacements, (a, b) => a.range.getEndPosition().isBeforeOrEqual(b.range.getStartPosition())));
    }
    mapPosition(position) {
        let lineDelta = 0;
        let curLine = 0;
        let columnDeltaInCurLine = 0;
        for (const replacement of this.replacements) {
            const start = replacement.range.getStartPosition();
            if (position.isBeforeOrEqual(start)) {
                break;
            }
            const end = replacement.range.getEndPosition();
            const len = TextLength.ofText(replacement.text);
            if (position.isBefore(end)) {
                const startPos = new Position(start.lineNumber + lineDelta, start.column + (start.lineNumber + lineDelta === curLine ? columnDeltaInCurLine : 0));
                const endPos = len.addToPosition(startPos);
                return rangeFromPositions(startPos, endPos);
            }
            if (start.lineNumber + lineDelta !== curLine) {
                columnDeltaInCurLine = 0;
            }
            lineDelta += len.lineCount - (replacement.range.endLineNumber - replacement.range.startLineNumber);
            if (len.lineCount === 0) {
                if (end.lineNumber !== start.lineNumber) {
                    columnDeltaInCurLine += len.columnCount - (end.column - 1);
                }
                else {
                    columnDeltaInCurLine += len.columnCount - (end.column - start.column);
                }
            }
            else {
                columnDeltaInCurLine = len.columnCount;
            }
            curLine = end.lineNumber + lineDelta;
        }
        return new Position(position.lineNumber + lineDelta, position.column + (position.lineNumber + lineDelta === curLine ? columnDeltaInCurLine : 0));
    }
    mapRange(range) {
        function getStart(p) {
            return p instanceof Position ? p : p.getStartPosition();
        }
        function getEnd(p) {
            return p instanceof Position ? p : p.getEndPosition();
        }
        const start = getStart(this.mapPosition(range.getStartPosition()));
        const end = getEnd(this.mapPosition(range.getEndPosition()));
        return rangeFromPositions(start, end);
    }
    apply(text) {
        let result = '';
        let lastEditEnd = new Position(1, 1);
        for (const replacement of this.replacements) {
            const editRange = replacement.range;
            const editStart = editRange.getStartPosition();
            const editEnd = editRange.getEndPosition();
            const r = rangeFromPositions(lastEditEnd, editStart);
            if (!r.isEmpty()) {
                result += text.getValueOfRange(r);
            }
            result += replacement.text;
            lastEditEnd = editEnd;
        }
        const r = rangeFromPositions(lastEditEnd, text.endPositionExclusive);
        if (!r.isEmpty()) {
            result += text.getValueOfRange(r);
        }
        return result;
    }
    applyToString(str) {
        const strText = new StringText(str);
        return this.apply(strText);
    }
    getNewRanges() {
        const newRanges = [];
        let previousEditEndLineNumber = 0;
        let lineOffset = 0;
        let columnOffset = 0;
        for (const replacement of this.replacements) {
            const textLength = TextLength.ofText(replacement.text);
            const newRangeStart = Position.lift({
                lineNumber: replacement.range.startLineNumber + lineOffset,
                column: replacement.range.startColumn + (replacement.range.startLineNumber === previousEditEndLineNumber ? columnOffset : 0)
            });
            const newRange = textLength.createRange(newRangeStart);
            newRanges.push(newRange);
            lineOffset = newRange.endLineNumber - replacement.range.endLineNumber;
            columnOffset = newRange.endColumn - replacement.range.endColumn;
            previousEditEndLineNumber = replacement.range.endLineNumber;
        }
        return newRanges;
    }
    toReplacement(text) {
        if (this.replacements.length === 0) {
            throw new BugIndicatingError();
        }
        if (this.replacements.length === 1) {
            return this.replacements[0];
        }
        const startPos = this.replacements[0].range.getStartPosition();
        const endPos = this.replacements[this.replacements.length - 1].range.getEndPosition();
        let newText = '';
        for (let i = 0; i < this.replacements.length; i++) {
            const curEdit = this.replacements[i];
            newText += curEdit.text;
            if (i < this.replacements.length - 1) {
                const nextEdit = this.replacements[i + 1];
                const gapRange = Range.fromPositions(curEdit.range.getEndPosition(), nextEdit.range.getStartPosition());
                const gapText = text.getValueOfRange(gapRange);
                newText += gapText;
            }
        }
        return new TextReplacement(Range.fromPositions(startPos, endPos), newText);
    }
    toString(text) {
        if (text === undefined) {
            return this.replacements.map(edit => edit.toString()).join('\n');
        }
        if (typeof text === 'string') {
            return this.toString(new StringText(text));
        }
        if (this.replacements.length === 0) {
            return '';
        }
        return this.replacements.map(r => {
            const maxLength = 10;
            const originalText = text.getValueOfRange(r.range);
            // Get text before the edit
            const beforeRange = Range.fromPositions(new Position(Math.max(1, r.range.startLineNumber - 1), 1), r.range.getStartPosition());
            let beforeText = text.getValueOfRange(beforeRange);
            if (beforeText.length > maxLength) {
                beforeText = '...' + beforeText.substring(beforeText.length - maxLength);
            }
            // Get text after the edit
            const afterRange = Range.fromPositions(r.range.getEndPosition(), new Position(r.range.endLineNumber + 1, 1));
            let afterText = text.getValueOfRange(afterRange);
            if (afterText.length > maxLength) {
                afterText = afterText.substring(0, maxLength) + '...';
            }
            // Format the replaced text
            let replacedText = originalText;
            if (replacedText.length > maxLength) {
                const halfMax = Math.floor(maxLength / 2);
                replacedText = replacedText.substring(0, halfMax) + '...' +
                    replacedText.substring(replacedText.length - halfMax);
            }
            // Format the new text
            let newText = r.text;
            if (newText.length > maxLength) {
                const halfMax = Math.floor(maxLength / 2);
                newText = newText.substring(0, halfMax) + '...' +
                    newText.substring(newText.length - halfMax);
            }
            if (replacedText.length === 0) {
                // allow-any-unicode-next-line
                return `${beforeText}❰${newText}❱${afterText}`;
            }
            // allow-any-unicode-next-line
            return `${beforeText}❰${replacedText}↦${newText}❱${afterText}`;
        }).join('\n');
    }
}
class TextReplacement {
    static joinReplacements(replacements, initialValue) {
        if (replacements.length === 0) {
            throw new BugIndicatingError();
        }
        if (replacements.length === 1) {
            return replacements[0];
        }
        const startPos = replacements[0].range.getStartPosition();
        const endPos = replacements[replacements.length - 1].range.getEndPosition();
        let newText = '';
        for (let i = 0; i < replacements.length; i++) {
            const curEdit = replacements[i];
            newText += curEdit.text;
            if (i < replacements.length - 1) {
                const nextEdit = replacements[i + 1];
                const gapRange = Range.fromPositions(curEdit.range.getEndPosition(), nextEdit.range.getStartPosition());
                const gapText = initialValue.getValueOfRange(gapRange);
                newText += gapText;
            }
        }
        return new TextReplacement(Range.fromPositions(startPos, endPos), newText);
    }
    static fromStringReplacement(replacement, initialState) {
        return new TextReplacement(initialState.getTransformer().getRange(replacement.replaceRange), replacement.newText);
    }
    static delete(range) {
        return new TextReplacement(range, '');
    }
    constructor(range, text) {
        this.range = range;
        this.text = text;
    }
    get isEmpty() {
        return this.range.isEmpty() && this.text.length === 0;
    }
    static equals(first, second) {
        return first.range.equalsRange(second.range) && first.text === second.text;
    }
    equals(other) {
        return TextReplacement.equals(this, other);
    }
    removeCommonPrefixAndSuffix(text) {
        const prefix = this.removeCommonPrefix(text);
        const suffix = prefix.removeCommonSuffix(text);
        return suffix;
    }
    removeCommonPrefix(text) {
        const normalizedOriginalText = text.getValueOfRange(this.range).replaceAll('\r\n', '\n');
        const normalizedModifiedText = this.text.replaceAll('\r\n', '\n');
        const commonPrefixLen = commonPrefixLength(normalizedOriginalText, normalizedModifiedText);
        const start = TextLength.ofText(normalizedOriginalText.substring(0, commonPrefixLen))
            .addToPosition(this.range.getStartPosition());
        const newText = normalizedModifiedText.substring(commonPrefixLen);
        const range = Range.fromPositions(start, this.range.getEndPosition());
        return new TextReplacement(range, newText);
    }
    removeCommonSuffix(text) {
        const normalizedOriginalText = text.getValueOfRange(this.range).replaceAll('\r\n', '\n');
        const normalizedModifiedText = this.text.replaceAll('\r\n', '\n');
        const commonSuffixLen = commonSuffixLength(normalizedOriginalText, normalizedModifiedText);
        const end = TextLength.ofText(normalizedOriginalText.substring(0, normalizedOriginalText.length - commonSuffixLen))
            .addToPosition(this.range.getStartPosition());
        const newText = normalizedModifiedText.substring(0, normalizedModifiedText.length - commonSuffixLen);
        const range = Range.fromPositions(this.range.getStartPosition(), end);
        return new TextReplacement(range, newText);
    }
    toString() {
        const start = this.range.getStartPosition();
        const end = this.range.getEndPosition();
        return `(${start.lineNumber},${start.column} -> ${end.lineNumber},${end.column}): "${this.text}"`;
    }
}
function rangeFromPositions(start, end) {
    if (start.lineNumber === end.lineNumber && start.column === Number.MAX_SAFE_INTEGER) {
        return Range.fromPositions(end, end);
    }
    else if (!start.isBeforeOrEqual(end)) {
        throw new BugIndicatingError('start must be before end');
    }
    return new Range(start.lineNumber, start.column, end.lineNumber, end.column);
}

export { TextEdit, TextReplacement };
