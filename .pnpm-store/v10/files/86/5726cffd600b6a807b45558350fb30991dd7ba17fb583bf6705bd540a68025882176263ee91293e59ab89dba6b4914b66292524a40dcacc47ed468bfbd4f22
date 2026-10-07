import { Position } from '../core/position.js';
import { Range } from '../core/range.js';
import { countEOL } from '../core/misc/eolCounter.js';
import { RateLimiter } from './common.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Represents sparse tokens over a contiguous range of lines.
 */
class SparseMultilineTokens {
    static create(startLineNumber, tokens) {
        return new SparseMultilineTokens(startLineNumber, new SparseMultilineTokensStorage(tokens));
    }
    /**
     * (Inclusive) start line number for these tokens.
     */
    get startLineNumber() {
        return this._startLineNumber;
    }
    /**
     * (Inclusive) end line number for these tokens.
     */
    get endLineNumber() {
        return this._endLineNumber;
    }
    constructor(startLineNumber, tokens) {
        this._startLineNumber = startLineNumber;
        this._tokens = tokens;
        this._endLineNumber = this._startLineNumber + this._tokens.getMaxDeltaLine();
    }
    toString() {
        return this._tokens.toString(this._startLineNumber);
    }
    _updateEndLineNumber() {
        this._endLineNumber = this._startLineNumber + this._tokens.getMaxDeltaLine();
    }
    isEmpty() {
        return this._tokens.isEmpty();
    }
    getLineTokens(lineNumber) {
        if (this._startLineNumber <= lineNumber && lineNumber <= this._endLineNumber) {
            return this._tokens.getLineTokens(lineNumber - this._startLineNumber);
        }
        return null;
    }
    getRange() {
        const deltaRange = this._tokens.getRange();
        if (!deltaRange) {
            return deltaRange;
        }
        return new Range(this._startLineNumber + deltaRange.startLineNumber, deltaRange.startColumn, this._startLineNumber + deltaRange.endLineNumber, deltaRange.endColumn);
    }
    removeTokens(range) {
        const startLineIndex = range.startLineNumber - this._startLineNumber;
        const endLineIndex = range.endLineNumber - this._startLineNumber;
        this._startLineNumber += this._tokens.removeTokens(startLineIndex, range.startColumn - 1, endLineIndex, range.endColumn - 1);
        this._updateEndLineNumber();
    }
    split(range) {
        // split tokens to two:
        // a) all the tokens before `range`
        // b) all the tokens after `range`
        const startLineIndex = range.startLineNumber - this._startLineNumber;
        const endLineIndex = range.endLineNumber - this._startLineNumber;
        const [a, b, bDeltaLine] = this._tokens.split(startLineIndex, range.startColumn - 1, endLineIndex, range.endColumn - 1);
        return [new SparseMultilineTokens(this._startLineNumber, a), new SparseMultilineTokens(this._startLineNumber + bDeltaLine, b)];
    }
    applyEdit(range, text) {
        const [eolCount, firstLineLength, lastLineLength] = countEOL(text);
        this.acceptEdit(range, eolCount, firstLineLength, lastLineLength, text.length > 0 ? text.charCodeAt(0) : 0 /* CharCode.Null */);
    }
    acceptEdit(range, eolCount, firstLineLength, lastLineLength, firstCharCode) {
        this._acceptDeleteRange(range);
        this._acceptInsertText(new Position(range.startLineNumber, range.startColumn), eolCount, firstLineLength, lastLineLength, firstCharCode);
        this._updateEndLineNumber();
    }
    _acceptDeleteRange(range) {
        if (range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn) {
            // Nothing to delete
            return;
        }
        const firstLineIndex = range.startLineNumber - this._startLineNumber;
        const lastLineIndex = range.endLineNumber - this._startLineNumber;
        if (lastLineIndex < 0) {
            // this deletion occurs entirely before this block, so we only need to adjust line numbers
            const deletedLinesCount = lastLineIndex - firstLineIndex;
            this._startLineNumber -= deletedLinesCount;
            return;
        }
        const tokenMaxDeltaLine = this._tokens.getMaxDeltaLine();
        if (firstLineIndex >= tokenMaxDeltaLine + 1) {
            // this deletion occurs entirely after this block, so there is nothing to do
            return;
        }
        if (firstLineIndex < 0 && lastLineIndex >= tokenMaxDeltaLine + 1) {
            // this deletion completely encompasses this block
            this._startLineNumber = 0;
            this._tokens.clear();
            return;
        }
        if (firstLineIndex < 0) {
            const deletedBefore = -firstLineIndex;
            this._startLineNumber -= deletedBefore;
            this._tokens.acceptDeleteRange(range.startColumn - 1, 0, 0, lastLineIndex, range.endColumn - 1);
        }
        else {
            this._tokens.acceptDeleteRange(0, firstLineIndex, range.startColumn - 1, lastLineIndex, range.endColumn - 1);
        }
    }
    _acceptInsertText(position, eolCount, firstLineLength, lastLineLength, firstCharCode) {
        if (eolCount === 0 && firstLineLength === 0) {
            // Nothing to insert
            return;
        }
        const lineIndex = position.lineNumber - this._startLineNumber;
        if (lineIndex < 0) {
            // this insertion occurs before this block, so we only need to adjust line numbers
            this._startLineNumber += eolCount;
            return;
        }
        const tokenMaxDeltaLine = this._tokens.getMaxDeltaLine();
        if (lineIndex >= tokenMaxDeltaLine + 1) {
            // this insertion occurs after this block, so there is nothing to do
            return;
        }
        this._tokens.acceptInsertText(lineIndex, position.column - 1, eolCount, firstLineLength, lastLineLength, firstCharCode);
    }
    reportIfInvalid(model) {
        this._tokens.reportIfInvalid(model, this._startLineNumber);
    }
}
class SparseMultilineTokensStorage {
    constructor(tokens) {
        this._tokens = tokens;
        this._tokenCount = tokens.length / 4;
    }
    toString(startLineNumber) {
        const pieces = [];
        for (let i = 0; i < this._tokenCount; i++) {
            pieces.push(`(${this._getDeltaLine(i) + startLineNumber},${this._getStartCharacter(i)}-${this._getEndCharacter(i)})`);
        }
        return `[${pieces.join(',')}]`;
    }
    getMaxDeltaLine() {
        const tokenCount = this._getTokenCount();
        if (tokenCount === 0) {
            return -1;
        }
        return this._getDeltaLine(tokenCount - 1);
    }
    getRange() {
        const tokenCount = this._getTokenCount();
        if (tokenCount === 0) {
            return null;
        }
        const startChar = this._getStartCharacter(0);
        const maxDeltaLine = this._getDeltaLine(tokenCount - 1);
        const endChar = this._getEndCharacter(tokenCount - 1);
        return new Range(0, startChar + 1, maxDeltaLine, endChar + 1);
    }
    _getTokenCount() {
        return this._tokenCount;
    }
    _getDeltaLine(tokenIndex) {
        return this._tokens[4 * tokenIndex];
    }
    _getStartCharacter(tokenIndex) {
        return this._tokens[4 * tokenIndex + 1];
    }
    _getEndCharacter(tokenIndex) {
        return this._tokens[4 * tokenIndex + 2];
    }
    isEmpty() {
        return (this._getTokenCount() === 0);
    }
    getLineTokens(deltaLine) {
        let low = 0;
        let high = this._getTokenCount() - 1;
        while (low < high) {
            const mid = low + Math.floor((high - low) / 2);
            const midDeltaLine = this._getDeltaLine(mid);
            if (midDeltaLine < deltaLine) {
                low = mid + 1;
            }
            else if (midDeltaLine > deltaLine) {
                high = mid - 1;
            }
            else {
                let min = mid;
                while (min > low && this._getDeltaLine(min - 1) === deltaLine) {
                    min--;
                }
                let max = mid;
                while (max < high && this._getDeltaLine(max + 1) === deltaLine) {
                    max++;
                }
                return new SparseLineTokens(this._tokens.subarray(4 * min, 4 * max + 4));
            }
        }
        if (this._getDeltaLine(low) === deltaLine) {
            return new SparseLineTokens(this._tokens.subarray(4 * low, 4 * low + 4));
        }
        return null;
    }
    clear() {
        this._tokenCount = 0;
    }
    removeTokens(startDeltaLine, startChar, endDeltaLine, endChar) {
        const tokens = this._tokens;
        const tokenCount = this._tokenCount;
        let newTokenCount = 0;
        let hasDeletedTokens = false;
        let firstDeltaLine = 0;
        for (let i = 0; i < tokenCount; i++) {
            const srcOffset = 4 * i;
            const tokenDeltaLine = tokens[srcOffset];
            const tokenStartCharacter = tokens[srcOffset + 1];
            const tokenEndCharacter = tokens[srcOffset + 2];
            const tokenMetadata = tokens[srcOffset + 3];
            if ((tokenDeltaLine > startDeltaLine || (tokenDeltaLine === startDeltaLine && tokenEndCharacter >= startChar))
                && (tokenDeltaLine < endDeltaLine || (tokenDeltaLine === endDeltaLine && tokenStartCharacter <= endChar))) {
                hasDeletedTokens = true;
            }
            else {
                if (newTokenCount === 0) {
                    firstDeltaLine = tokenDeltaLine;
                }
                if (hasDeletedTokens) {
                    // must move the token to the left
                    const destOffset = 4 * newTokenCount;
                    tokens[destOffset] = tokenDeltaLine - firstDeltaLine;
                    tokens[destOffset + 1] = tokenStartCharacter;
                    tokens[destOffset + 2] = tokenEndCharacter;
                    tokens[destOffset + 3] = tokenMetadata;
                }
                else if (firstDeltaLine !== 0) {
                    // must adjust the delta line in place
                    tokens[srcOffset] = tokenDeltaLine - firstDeltaLine;
                }
                newTokenCount++;
            }
        }
        this._tokenCount = newTokenCount;
        return firstDeltaLine;
    }
    split(startDeltaLine, startChar, endDeltaLine, endChar) {
        const tokens = this._tokens;
        const tokenCount = this._tokenCount;
        const aTokens = [];
        const bTokens = [];
        let destTokens = aTokens;
        let destOffset = 0;
        let destFirstDeltaLine = 0;
        for (let i = 0; i < tokenCount; i++) {
            const srcOffset = 4 * i;
            const tokenDeltaLine = tokens[srcOffset];
            const tokenStartCharacter = tokens[srcOffset + 1];
            const tokenEndCharacter = tokens[srcOffset + 2];
            const tokenMetadata = tokens[srcOffset + 3];
            if ((tokenDeltaLine > startDeltaLine || (tokenDeltaLine === startDeltaLine && tokenEndCharacter >= startChar))) {
                if ((tokenDeltaLine < endDeltaLine || (tokenDeltaLine === endDeltaLine && tokenStartCharacter <= endChar))) {
                    // this token is touching the range
                    continue;
                }
                else {
                    // this token is after the range
                    if (destTokens !== bTokens) {
                        // this token is the first token after the range
                        destTokens = bTokens;
                        destOffset = 0;
                        destFirstDeltaLine = tokenDeltaLine;
                    }
                }
            }
            destTokens[destOffset++] = tokenDeltaLine - destFirstDeltaLine;
            destTokens[destOffset++] = tokenStartCharacter;
            destTokens[destOffset++] = tokenEndCharacter;
            destTokens[destOffset++] = tokenMetadata;
        }
        return [new SparseMultilineTokensStorage(new Uint32Array(aTokens)), new SparseMultilineTokensStorage(new Uint32Array(bTokens)), destFirstDeltaLine];
    }
    acceptDeleteRange(horizontalShiftForFirstLineTokens, startDeltaLine, startCharacter, endDeltaLine, endCharacter) {
        // This is a bit complex, here are the cases I used to think about this:
        //
        // 1. The token starts before the deletion range
        // 1a. The token is completely before the deletion range
        //               -----------
        //                          xxxxxxxxxxx
        // 1b. The token starts before, the deletion range ends after the token
        //               -----------
        //                      xxxxxxxxxxx
        // 1c. The token starts before, the deletion range ends precisely with the token
        //               ---------------
        //                      xxxxxxxx
        // 1d. The token starts before, the deletion range is inside the token
        //               ---------------
        //                    xxxxx
        //
        // 2. The token starts at the same position with the deletion range
        // 2a. The token starts at the same position, and ends inside the deletion range
        //               -------
        //               xxxxxxxxxxx
        // 2b. The token starts at the same position, and ends at the same position as the deletion range
        //               ----------
        //               xxxxxxxxxx
        // 2c. The token starts at the same position, and ends after the deletion range
        //               -------------
        //               xxxxxxx
        //
        // 3. The token starts inside the deletion range
        // 3a. The token is inside the deletion range
        //                -------
        //             xxxxxxxxxxxxx
        // 3b. The token starts inside the deletion range, and ends at the same position as the deletion range
        //                ----------
        //             xxxxxxxxxxxxx
        // 3c. The token starts inside the deletion range, and ends after the deletion range
        //                ------------
        //             xxxxxxxxxxx
        //
        // 4. The token starts after the deletion range
        //                  -----------
        //          xxxxxxxx
        //
        const tokens = this._tokens;
        const tokenCount = this._tokenCount;
        const deletedLineCount = (endDeltaLine - startDeltaLine);
        let newTokenCount = 0;
        let hasDeletedTokens = false;
        for (let i = 0; i < tokenCount; i++) {
            const srcOffset = 4 * i;
            let tokenDeltaLine = tokens[srcOffset];
            let tokenStartCharacter = tokens[srcOffset + 1];
            let tokenEndCharacter = tokens[srcOffset + 2];
            const tokenMetadata = tokens[srcOffset + 3];
            if (tokenDeltaLine < startDeltaLine || (tokenDeltaLine === startDeltaLine && tokenEndCharacter <= startCharacter)) {
                // 1a. The token is completely before the deletion range
                // => nothing to do
                newTokenCount++;
                continue;
            }
            else if (tokenDeltaLine === startDeltaLine && tokenStartCharacter < startCharacter) {
                // 1b, 1c, 1d
                // => the token survives, but it needs to shrink
                if (tokenDeltaLine === endDeltaLine && tokenEndCharacter > endCharacter) {
                    // 1d. The token starts before, the deletion range is inside the token
                    // => the token shrinks by the deletion character count
                    tokenEndCharacter -= (endCharacter - startCharacter);
                }
                else {
                    // 1b. The token starts before, the deletion range ends after the token
                    // 1c. The token starts before, the deletion range ends precisely with the token
                    // => the token shrinks its ending to the deletion start
                    tokenEndCharacter = startCharacter;
                }
            }
            else if (tokenDeltaLine === startDeltaLine && tokenStartCharacter === startCharacter) {
                // 2a, 2b, 2c
                if (tokenDeltaLine === endDeltaLine && tokenEndCharacter > endCharacter) {
                    // 2c. The token starts at the same position, and ends after the deletion range
                    // => the token shrinks by the deletion character count
                    tokenEndCharacter -= (endCharacter - startCharacter);
                }
                else {
                    // 2a. The token starts at the same position, and ends inside the deletion range
                    // 2b. The token starts at the same position, and ends at the same position as the deletion range
                    // => the token is deleted
                    hasDeletedTokens = true;
                    continue;
                }
            }
            else if (tokenDeltaLine < endDeltaLine || (tokenDeltaLine === endDeltaLine && tokenStartCharacter < endCharacter)) {
                // 3a, 3b, 3c
                if (tokenDeltaLine === endDeltaLine && tokenEndCharacter > endCharacter) {
                    // 3c. The token starts inside the deletion range, and ends after the deletion range
                    // => the token moves to continue right after the deletion
                    tokenDeltaLine = startDeltaLine;
                    tokenStartCharacter = startCharacter;
                    tokenEndCharacter = tokenStartCharacter + (tokenEndCharacter - endCharacter);
                }
                else {
                    // 3a. The token is inside the deletion range
                    // 3b. The token starts inside the deletion range, and ends at the same position as the deletion range
                    // => the token is deleted
                    hasDeletedTokens = true;
                    continue;
                }
            }
            else if (tokenDeltaLine > endDeltaLine) {
                // 4. (partial) The token starts after the deletion range, on a line below...
                if (deletedLineCount === 0 && !hasDeletedTokens) {
                    // early stop, there is no need to walk all the tokens and do nothing...
                    newTokenCount = tokenCount;
                    break;
                }
                tokenDeltaLine -= deletedLineCount;
            }
            else if (tokenDeltaLine === endDeltaLine && tokenStartCharacter >= endCharacter) {
                // 4. (continued) The token starts after the deletion range, on the last line where a deletion occurs
                if (horizontalShiftForFirstLineTokens && tokenDeltaLine === 0) {
                    tokenStartCharacter += horizontalShiftForFirstLineTokens;
                    tokenEndCharacter += horizontalShiftForFirstLineTokens;
                }
                tokenDeltaLine -= deletedLineCount;
                tokenStartCharacter -= (endCharacter - startCharacter);
                tokenEndCharacter -= (endCharacter - startCharacter);
            }
            else {
                throw new Error(`Not possible!`);
            }
            const destOffset = 4 * newTokenCount;
            tokens[destOffset] = tokenDeltaLine;
            tokens[destOffset + 1] = tokenStartCharacter;
            tokens[destOffset + 2] = tokenEndCharacter;
            tokens[destOffset + 3] = tokenMetadata;
            newTokenCount++;
        }
        this._tokenCount = newTokenCount;
    }
    acceptInsertText(deltaLine, character, eolCount, firstLineLength, lastLineLength, firstCharCode) {
        // Here are the cases I used to think about this:
        //
        // 1. The token is completely before the insertion point
        //            -----------   |
        // 2. The token ends precisely at the insertion point
        //            -----------|
        // 3. The token contains the insertion point
        //            -----|------
        // 4. The token starts precisely at the insertion point
        //            |-----------
        // 5. The token is completely after the insertion point
        //            |   -----------
        //
        const isInsertingPreciselyOneWordCharacter = (eolCount === 0
            && firstLineLength === 1
            && ((firstCharCode >= 48 /* CharCode.Digit0 */ && firstCharCode <= 57 /* CharCode.Digit9 */)
                || (firstCharCode >= 65 /* CharCode.A */ && firstCharCode <= 90 /* CharCode.Z */)
                || (firstCharCode >= 97 /* CharCode.a */ && firstCharCode <= 122 /* CharCode.z */)));
        const tokens = this._tokens;
        const tokenCount = this._tokenCount;
        for (let i = 0; i < tokenCount; i++) {
            const offset = 4 * i;
            let tokenDeltaLine = tokens[offset];
            let tokenStartCharacter = tokens[offset + 1];
            let tokenEndCharacter = tokens[offset + 2];
            if (tokenDeltaLine < deltaLine || (tokenDeltaLine === deltaLine && tokenEndCharacter < character)) {
                // 1. The token is completely before the insertion point
                // => nothing to do
                continue;
            }
            else if (tokenDeltaLine === deltaLine && tokenEndCharacter === character) {
                // 2. The token ends precisely at the insertion point
                // => expand the end character only if inserting precisely one character that is a word character
                if (isInsertingPreciselyOneWordCharacter) {
                    tokenEndCharacter += 1;
                }
                else {
                    continue;
                }
            }
            else if (tokenDeltaLine === deltaLine && tokenStartCharacter < character && character < tokenEndCharacter) {
                // 3. The token contains the insertion point
                if (eolCount === 0) {
                    // => just expand the end character
                    tokenEndCharacter += firstLineLength;
                }
                else {
                    // => cut off the token
                    tokenEndCharacter = character;
                }
            }
            else {
                // 4. or 5.
                if (tokenDeltaLine === deltaLine && tokenStartCharacter === character) {
                    // 4. The token starts precisely at the insertion point
                    // => grow the token (by keeping its start constant) only if inserting precisely one character that is a word character
                    // => otherwise behave as in case 5.
                    if (isInsertingPreciselyOneWordCharacter) {
                        continue;
                    }
                }
                // => the token must move and keep its size constant
                if (tokenDeltaLine === deltaLine) {
                    tokenDeltaLine += eolCount;
                    // this token is on the line where the insertion is taking place
                    if (eolCount === 0) {
                        tokenStartCharacter += firstLineLength;
                        tokenEndCharacter += firstLineLength;
                    }
                    else {
                        const tokenLength = tokenEndCharacter - tokenStartCharacter;
                        tokenStartCharacter = lastLineLength + (tokenStartCharacter - character);
                        tokenEndCharacter = tokenStartCharacter + tokenLength;
                    }
                }
                else {
                    tokenDeltaLine += eolCount;
                }
            }
            tokens[offset] = tokenDeltaLine;
            tokens[offset + 1] = tokenStartCharacter;
            tokens[offset + 2] = tokenEndCharacter;
        }
    }
    static { this._rateLimiter = new RateLimiter(10 / 60); } // limit to 10 times per minute
    reportIfInvalid(model, startLineNumber) {
        for (let i = 0; i < this._tokenCount; i++) {
            const lineNumber = this._getDeltaLine(i) + startLineNumber;
            if (lineNumber < 1) {
                SparseMultilineTokensStorage._rateLimiter.runIfNotLimited(() => {
                    console.error('Invalid Semantic Tokens Data From Extension: lineNumber < 1');
                });
            }
            else if (lineNumber > model.getLineCount()) {
                SparseMultilineTokensStorage._rateLimiter.runIfNotLimited(() => {
                    console.error('Invalid Semantic Tokens Data From Extension: lineNumber > model.getLineCount()');
                });
            }
            else if (this._getEndCharacter(i) > model.getLineLength(lineNumber)) {
                SparseMultilineTokensStorage._rateLimiter.runIfNotLimited(() => {
                    console.error('Invalid Semantic Tokens Data From Extension: end character > model.getLineLength(lineNumber)');
                });
            }
        }
    }
}
class SparseLineTokens {
    constructor(tokens) {
        this._tokens = tokens;
    }
    getCount() {
        return this._tokens.length / 4;
    }
    getStartCharacter(tokenIndex) {
        return this._tokens[4 * tokenIndex + 1];
    }
    getEndCharacter(tokenIndex) {
        return this._tokens[4 * tokenIndex + 2];
    }
    getMetadata(tokenIndex) {
        return this._tokens[4 * tokenIndex + 3];
    }
}

export { SparseLineTokens, SparseMultilineTokens };
