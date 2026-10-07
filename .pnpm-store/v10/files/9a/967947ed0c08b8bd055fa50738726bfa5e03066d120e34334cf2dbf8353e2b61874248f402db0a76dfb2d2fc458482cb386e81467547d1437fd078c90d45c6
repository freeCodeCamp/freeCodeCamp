import { lastNonWhitespaceIndex } from '../../../base/common/strings.js';
import { EditOperation } from '../core/editOperation.js';
import { Range } from '../core/range.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class TrimTrailingWhitespaceCommand {
    constructor(selection, cursors, trimInRegexesAndStrings) {
        this._selection = selection;
        this._cursors = cursors;
        this._selectionId = null;
        this._trimInRegexesAndStrings = trimInRegexesAndStrings;
    }
    getEditOperations(model, builder) {
        const ops = trimTrailingWhitespace(model, this._cursors, this._trimInRegexesAndStrings);
        for (let i = 0, len = ops.length; i < len; i++) {
            const op = ops[i];
            builder.addEditOperation(op.range, op.text);
        }
        this._selectionId = builder.trackSelection(this._selection);
    }
    computeCursorState(model, helper) {
        return helper.getTrackedSelection(this._selectionId);
    }
}
/**
 * Generate commands for trimming trailing whitespace on a model and ignore lines on which cursors are sitting.
 */
function trimTrailingWhitespace(model, cursors, trimInRegexesAndStrings) {
    // Sort cursors ascending
    cursors.sort((a, b) => {
        if (a.lineNumber === b.lineNumber) {
            return a.column - b.column;
        }
        return a.lineNumber - b.lineNumber;
    });
    // Reduce multiple cursors on the same line and only keep the last one on the line
    for (let i = cursors.length - 2; i >= 0; i--) {
        if (cursors[i].lineNumber === cursors[i + 1].lineNumber) {
            // Remove cursor at `i`
            cursors.splice(i, 1);
        }
    }
    const r = [];
    let rLen = 0;
    let cursorIndex = 0;
    const cursorLen = cursors.length;
    for (let lineNumber = 1, lineCount = model.getLineCount(); lineNumber <= lineCount; lineNumber++) {
        const lineContent = model.getLineContent(lineNumber);
        const maxLineColumn = lineContent.length + 1;
        let minEditColumn = 0;
        if (cursorIndex < cursorLen && cursors[cursorIndex].lineNumber === lineNumber) {
            minEditColumn = cursors[cursorIndex].column;
            cursorIndex++;
            if (minEditColumn === maxLineColumn) {
                // The cursor is at the end of the line => no edits for sure on this line
                continue;
            }
        }
        if (lineContent.length === 0) {
            continue;
        }
        const lastNonWhitespaceIndex$1 = lastNonWhitespaceIndex(lineContent);
        let fromColumn = 0;
        if (lastNonWhitespaceIndex$1 === -1) {
            // Entire line is whitespace
            fromColumn = 1;
        }
        else if (lastNonWhitespaceIndex$1 !== lineContent.length - 1) {
            // There is trailing whitespace
            fromColumn = lastNonWhitespaceIndex$1 + 2;
        }
        else {
            // There is no trailing whitespace
            continue;
        }
        if (!trimInRegexesAndStrings) {
            if (!model.tokenization.hasAccurateTokensForLine(lineNumber)) {
                // We don't want to force line tokenization, as that can be expensive, but we also don't want to trim
                // trailing whitespace in lines that are not tokenized yet, as that can be wrong and trim whitespace from
                // lines that the user requested we don't. So we bail out if the tokens are not accurate for this line.
                continue;
            }
            const lineTokens = model.tokenization.getLineTokens(lineNumber);
            const fromColumnType = lineTokens.getStandardTokenType(lineTokens.findTokenIndexAtOffset(fromColumn));
            if (fromColumnType === 2 /* StandardTokenType.String */ || fromColumnType === 3 /* StandardTokenType.RegEx */) {
                continue;
            }
        }
        fromColumn = Math.max(minEditColumn, fromColumn);
        r[rLen++] = EditOperation.delete(new Range(lineNumber, fromColumn, lineNumber, maxLineColumn));
    }
    return r;
}

export { TrimTrailingWhitespaceCommand, trimTrailingWhitespace };
