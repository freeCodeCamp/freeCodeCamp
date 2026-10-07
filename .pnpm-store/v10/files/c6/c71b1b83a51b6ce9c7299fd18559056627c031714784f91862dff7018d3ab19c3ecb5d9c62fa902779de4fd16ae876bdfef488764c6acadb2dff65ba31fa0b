import { registerEditorAction, EditorAction } from '../../../browser/editorExtensions.js';
import { ReplaceCommand } from '../../../common/commands/replaceCommand.js';
import { MoveOperations } from '../../../common/cursor/cursorMoveOperations.js';
import { Range } from '../../../common/core/range.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { localize2 } from '../../../../nls.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class TransposeLettersAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.transposeLetters',
            label: localize2(812, "Transpose Letters"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 0,
                mac: {
                    primary: 256 /* KeyMod.WinCtrl */ | 50 /* KeyCode.KeyT */
                },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const model = editor.getModel();
        const commands = [];
        const selections = editor.getSelections();
        for (const selection of selections) {
            if (!selection.isEmpty()) {
                continue;
            }
            const lineNumber = selection.startLineNumber;
            const column = selection.startColumn;
            const lastColumn = model.getLineMaxColumn(lineNumber);
            if (lineNumber === 1 && (column === 1 || (column === 2 && lastColumn === 2))) {
                // at beginning of file, nothing to do
                continue;
            }
            // handle special case: when at end of line, transpose left two chars
            // otherwise, transpose left and right chars
            const endPosition = (column === lastColumn) ?
                selection.getPosition() :
                MoveOperations.rightPosition(model, selection.getPosition().lineNumber, selection.getPosition().column);
            const middlePosition = MoveOperations.leftPosition(model, endPosition);
            const beginPosition = MoveOperations.leftPosition(model, middlePosition);
            const leftChar = model.getValueInRange(Range.fromPositions(beginPosition, middlePosition));
            const rightChar = model.getValueInRange(Range.fromPositions(middlePosition, endPosition));
            const replaceRange = Range.fromPositions(beginPosition, endPosition);
            commands.push(new ReplaceCommand(replaceRange, rightChar + leftChar));
        }
        if (commands.length > 0) {
            editor.pushUndoStop();
            editor.executeCommands(this.id, commands);
            editor.pushUndoStop();
        }
    }
}
registerEditorAction(TransposeLettersAction);
