import { EditOperation } from '../../../common/core/editOperation.js';
import { Position } from '../../../common/core/position.js';
import { Range } from '../../../common/core/range.js';
import { Selection } from '../../../common/core/selection.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class BlockCommentCommand {
    constructor(selection, insertSpace, languageConfigurationService) {
        this.languageConfigurationService = languageConfigurationService;
        this._selection = selection;
        this._insertSpace = insertSpace;
        this._usedEndToken = null;
    }
    static _haystackHasNeedleAtOffset(haystack, needle, offset) {
        if (offset < 0) {
            return false;
        }
        const needleLength = needle.length;
        const haystackLength = haystack.length;
        if (offset + needleLength > haystackLength) {
            return false;
        }
        for (let i = 0; i < needleLength; i++) {
            const codeA = haystack.charCodeAt(offset + i);
            const codeB = needle.charCodeAt(i);
            if (codeA === codeB) {
                continue;
            }
            if (codeA >= 65 /* CharCode.A */ && codeA <= 90 /* CharCode.Z */ && codeA + 32 === codeB) {
                // codeA is upper-case variant of codeB
                continue;
            }
            if (codeB >= 65 /* CharCode.A */ && codeB <= 90 /* CharCode.Z */ && codeB + 32 === codeA) {
                // codeB is upper-case variant of codeA
                continue;
            }
            return false;
        }
        return true;
    }
    _createOperationsForBlockComment(selection, startToken, endToken, insertSpace, model, builder) {
        const startLineNumber = selection.startLineNumber;
        const startColumn = selection.startColumn;
        const endLineNumber = selection.endLineNumber;
        const endColumn = selection.endColumn;
        const startLineText = model.getLineContent(startLineNumber);
        const endLineText = model.getLineContent(endLineNumber);
        let startTokenIndex = startLineText.lastIndexOf(startToken, startColumn - 1 + startToken.length);
        let endTokenIndex = endLineText.indexOf(endToken, endColumn - 1 - endToken.length);
        if (startTokenIndex !== -1 && endTokenIndex !== -1) {
            if (startLineNumber === endLineNumber) {
                const lineBetweenTokens = startLineText.substring(startTokenIndex + startToken.length, endTokenIndex);
                if (lineBetweenTokens.indexOf(endToken) >= 0) {
                    // force to add a block comment
                    startTokenIndex = -1;
                    endTokenIndex = -1;
                }
            }
            else {
                const startLineAfterStartToken = startLineText.substring(startTokenIndex + startToken.length);
                const endLineBeforeEndToken = endLineText.substring(0, endTokenIndex);
                if (startLineAfterStartToken.indexOf(endToken) >= 0 || endLineBeforeEndToken.indexOf(endToken) >= 0) {
                    // force to add a block comment
                    startTokenIndex = -1;
                    endTokenIndex = -1;
                }
            }
        }
        let ops;
        if (startTokenIndex !== -1 && endTokenIndex !== -1) {
            // Consider spaces as part of the comment tokens
            if (insertSpace && startTokenIndex + startToken.length < startLineText.length && startLineText.charCodeAt(startTokenIndex + startToken.length) === 32 /* CharCode.Space */) {
                // Pretend the start token contains a trailing space
                startToken = startToken + ' ';
            }
            if (insertSpace && endTokenIndex > 0 && endLineText.charCodeAt(endTokenIndex - 1) === 32 /* CharCode.Space */) {
                // Pretend the end token contains a leading space
                endToken = ' ' + endToken;
                endTokenIndex -= 1;
            }
            ops = BlockCommentCommand._createRemoveBlockCommentOperations(new Range(startLineNumber, startTokenIndex + startToken.length + 1, endLineNumber, endTokenIndex + 1), startToken, endToken);
        }
        else {
            ops = BlockCommentCommand._createAddBlockCommentOperations(selection, startToken, endToken, this._insertSpace);
            this._usedEndToken = ops.length === 1 ? endToken : null;
        }
        for (const op of ops) {
            builder.addTrackedEditOperation(op.range, op.text);
        }
    }
    static _createRemoveBlockCommentOperations(r, startToken, endToken) {
        const res = [];
        if (!Range.isEmpty(r)) {
            // Remove block comment start
            res.push(EditOperation.delete(new Range(r.startLineNumber, r.startColumn - startToken.length, r.startLineNumber, r.startColumn)));
            // Remove block comment end
            res.push(EditOperation.delete(new Range(r.endLineNumber, r.endColumn, r.endLineNumber, r.endColumn + endToken.length)));
        }
        else {
            // Remove both continuously
            res.push(EditOperation.delete(new Range(r.startLineNumber, r.startColumn - startToken.length, r.endLineNumber, r.endColumn + endToken.length)));
        }
        return res;
    }
    static _createAddBlockCommentOperations(r, startToken, endToken, insertSpace) {
        const res = [];
        if (!Range.isEmpty(r)) {
            // Insert block comment start
            res.push(EditOperation.insert(new Position(r.startLineNumber, r.startColumn), startToken + (insertSpace ? ' ' : '')));
            // Insert block comment end
            res.push(EditOperation.insert(new Position(r.endLineNumber, r.endColumn), (insertSpace ? ' ' : '') + endToken));
        }
        else {
            // Insert both continuously
            res.push(EditOperation.replace(new Range(r.startLineNumber, r.startColumn, r.endLineNumber, r.endColumn), startToken + '  ' + endToken));
        }
        return res;
    }
    getEditOperations(model, builder) {
        const startLineNumber = this._selection.startLineNumber;
        const startColumn = this._selection.startColumn;
        model.tokenization.tokenizeIfCheap(startLineNumber);
        const languageId = model.getLanguageIdAtPosition(startLineNumber, startColumn);
        const config = this.languageConfigurationService.getLanguageConfiguration(languageId).comments;
        if (!config || !config.blockCommentStartToken || !config.blockCommentEndToken) {
            // Mode does not support block comments
            return;
        }
        this._createOperationsForBlockComment(this._selection, config.blockCommentStartToken, config.blockCommentEndToken, this._insertSpace, model, builder);
    }
    computeCursorState(model, helper) {
        const inverseEditOperations = helper.getInverseEditOperations();
        if (inverseEditOperations.length === 2) {
            const startTokenEditOperation = inverseEditOperations[0];
            const endTokenEditOperation = inverseEditOperations[1];
            return new Selection(startTokenEditOperation.range.endLineNumber, startTokenEditOperation.range.endColumn, endTokenEditOperation.range.startLineNumber, endTokenEditOperation.range.startColumn);
        }
        else {
            const srcRange = inverseEditOperations[0].range;
            const deltaColumn = this._usedEndToken ? -this._usedEndToken.length - 1 : 0; // minus 1 space before endToken
            return new Selection(srcRange.endLineNumber, srcRange.endColumn + deltaColumn, srcRange.endLineNumber, srcRange.endColumn + deltaColumn);
        }
    }
}

export { BlockCommentCommand };
