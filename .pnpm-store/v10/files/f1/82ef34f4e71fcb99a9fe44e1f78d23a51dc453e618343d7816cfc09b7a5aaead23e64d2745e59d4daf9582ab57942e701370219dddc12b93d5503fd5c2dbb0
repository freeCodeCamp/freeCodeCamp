import { LineReplacement } from '../../../../../common/core/edits/lineEdit.js';
import { LineRange } from '../../../../../common/core/ranges/lineRange.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class InlineEditWithChanges {
    get lineEdit() {
        if (this.edit.replacements.length === 0) {
            return new LineReplacement(new LineRange(1, 1), []);
        }
        return LineReplacement.fromSingleTextEdit(this.edit.toReplacement(this.originalText), this.originalText);
    }
    get originalLineRange() { return this.lineEdit.lineRange; }
    get modifiedLineRange() { return this.lineEdit.toLineEdit().getNewLineRanges()[0]; }
    get displayRange() {
        return this.originalText.lineRange.intersect(this.originalLineRange.join(LineRange.ofLength(this.originalLineRange.startLineNumber, this.lineEdit.newLines.length)));
    }
    constructor(originalText, edit, cursorPosition, multiCursorPositions, commands, inlineCompletion) {
        this.originalText = originalText;
        this.edit = edit;
        this.cursorPosition = cursorPosition;
        this.multiCursorPositions = multiCursorPositions;
        this.commands = commands;
        this.inlineCompletion = inlineCompletion;
    }
}

export { InlineEditWithChanges };
