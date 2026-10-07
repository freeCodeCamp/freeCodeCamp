import { EditorAction, registerEditorAction } from '../../../browser/editorExtensions.js';
import { InsertFinalNewLineCommand } from './insertFinalNewLineCommand.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { localize2 } from '../../../../nls.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class InsertFinalNewLineAction extends EditorAction {
    static { this.ID = 'editor.action.insertFinalNewLine'; }
    constructor() {
        super({
            id: InsertFinalNewLineAction.ID,
            label: localize2(1242, "Insert Final New Line"),
            precondition: EditorContextKeys.writable
        });
    }
    run(_accessor, editor, args) {
        const selection = editor.getSelection();
        if (selection === null) {
            return;
        }
        const command = new InsertFinalNewLineCommand(selection);
        editor.pushUndoStop();
        editor.executeCommands(this.id, [command]);
        editor.pushUndoStop();
    }
}
registerEditorAction(InsertFinalNewLineAction);

export { InsertFinalNewLineAction };
