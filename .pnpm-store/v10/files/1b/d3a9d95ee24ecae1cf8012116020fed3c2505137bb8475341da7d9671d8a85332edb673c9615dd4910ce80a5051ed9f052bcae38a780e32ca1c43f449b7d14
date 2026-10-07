import { KeyChord } from '../../../../base/common/keyCodes.js';
import { localize, localize2 } from '../../../../nls.js';
import { MenuId } from '../../../../platform/actions/common/actions.js';
import { registerEditorAction, EditorAction } from '../../../browser/editorExtensions.js';
import { Range } from '../../../common/core/range.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { ILanguageConfigurationService } from '../../../common/languages/languageConfigurationRegistry.js';
import { BlockCommentCommand } from './blockCommentCommand.js';
import { LineCommentCommand } from './lineCommentCommand.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class CommentLineAction extends EditorAction {
    constructor(type, opts) {
        super(opts);
        this._type = type;
    }
    run(accessor, editor) {
        const languageConfigurationService = accessor.get(ILanguageConfigurationService);
        if (!editor.hasModel()) {
            return;
        }
        const model = editor.getModel();
        const commands = [];
        const modelOptions = model.getOptions();
        const commentsOptions = editor.getOption(29 /* EditorOption.comments */);
        const selections = editor.getSelections().map((selection, index) => ({ selection, index, ignoreFirstLine: false }));
        selections.sort((a, b) => Range.compareRangesUsingStarts(a.selection, b.selection));
        // Remove selections that would result in copying the same line
        let prev = selections[0];
        for (let i = 1; i < selections.length; i++) {
            const curr = selections[i];
            if (prev.selection.endLineNumber === curr.selection.startLineNumber) {
                // these two selections would copy the same line
                if (prev.index < curr.index) {
                    // prev wins
                    curr.ignoreFirstLine = true;
                }
                else {
                    // curr wins
                    prev.ignoreFirstLine = true;
                    prev = curr;
                }
            }
        }
        for (const selection of selections) {
            commands.push(new LineCommentCommand(languageConfigurationService, selection.selection, modelOptions.indentSize, this._type, commentsOptions.insertSpace, commentsOptions.ignoreEmptyLines, selection.ignoreFirstLine));
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    }
}
class ToggleCommentLineAction extends CommentLineAction {
    constructor() {
        super(0 /* Type.Toggle */, {
            id: 'editor.action.commentLine',
            label: localize2(897, "Toggle Line Comment"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 90 /* KeyCode.Slash */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: MenuId.MenubarEditMenu,
                group: '5_insert',
                title: localize(895, "&&Toggle Line Comment"),
                order: 1
            },
            canTriggerInlineEdits: true,
        });
    }
}
class AddLineCommentAction extends CommentLineAction {
    constructor() {
        super(1 /* Type.ForceAdd */, {
            id: 'editor.action.addCommentLine',
            label: localize2(898, "Add Line Comment"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: KeyChord(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 33 /* KeyCode.KeyC */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            canTriggerInlineEdits: true,
        });
    }
}
class RemoveLineCommentAction extends CommentLineAction {
    constructor() {
        super(2 /* Type.ForceRemove */, {
            id: 'editor.action.removeCommentLine',
            label: localize2(899, "Remove Line Comment"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: KeyChord(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 51 /* KeyCode.KeyU */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            canTriggerInlineEdits: true,
        });
    }
}
class BlockCommentAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.blockComment',
            label: localize2(900, "Toggle Block Comment"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 31 /* KeyCode.KeyA */,
                linux: { primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 31 /* KeyCode.KeyA */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: MenuId.MenubarEditMenu,
                group: '5_insert',
                title: localize(896, "Toggle &&Block Comment"),
                order: 2
            },
            canTriggerInlineEdits: true,
        });
    }
    run(accessor, editor) {
        const languageConfigurationService = accessor.get(ILanguageConfigurationService);
        if (!editor.hasModel()) {
            return;
        }
        const commentsOptions = editor.getOption(29 /* EditorOption.comments */);
        const commands = [];
        const selections = editor.getSelections();
        for (const selection of selections) {
            commands.push(new BlockCommentCommand(selection, commentsOptions.insertSpace, languageConfigurationService));
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    }
}
registerEditorAction(ToggleCommentLineAction);
registerEditorAction(AddLineCommentAction);
registerEditorAction(RemoveLineCommentAction);
registerEditorAction(BlockCommentAction);
