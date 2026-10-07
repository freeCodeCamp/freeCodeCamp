import { registerEditorCommand } from '../../../browser/editorExtensions.js';
import { WordPartOperations } from '../../../common/cursor/cursorWordOperations.js';
import { Range } from '../../../common/core/range.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { DeleteWordCommand, MoveWordCommand } from '../../wordOperations/browser/wordOperations.js';
import { CommandsRegistry } from '../../../../platform/commands/common/commands.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class DeleteWordPartLeft extends DeleteWordCommand {
    constructor() {
        super({
            whitespaceHeuristics: true,
            wordNavigationType: 0 /* WordNavigationType.WordStart */,
            id: 'deleteWordPartLeft',
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 0,
                mac: { primary: 256 /* KeyMod.WinCtrl */ | 512 /* KeyMod.Alt */ | 1 /* KeyCode.Backspace */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    _delete(ctx, wordNavigationType) {
        const r = WordPartOperations.deleteWordPartLeft(ctx);
        if (r) {
            return r;
        }
        return new Range(1, 1, 1, 1);
    }
}
class DeleteWordPartRight extends DeleteWordCommand {
    constructor() {
        super({
            whitespaceHeuristics: true,
            wordNavigationType: 2 /* WordNavigationType.WordEnd */,
            id: 'deleteWordPartRight',
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 0,
                mac: { primary: 256 /* KeyMod.WinCtrl */ | 512 /* KeyMod.Alt */ | 20 /* KeyCode.Delete */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    _delete(ctx, wordNavigationType) {
        const r = WordPartOperations.deleteWordPartRight(ctx);
        if (r) {
            return r;
        }
        const lineCount = ctx.model.getLineCount();
        const maxColumn = ctx.model.getLineMaxColumn(lineCount);
        return new Range(lineCount, maxColumn, lineCount, maxColumn);
    }
}
class WordPartLeftCommand extends MoveWordCommand {
    _move(wordSeparators, model, position, wordNavigationType, hasMulticursor) {
        return WordPartOperations.moveWordPartLeft(wordSeparators, model, position, hasMulticursor);
    }
}
class CursorWordPartLeft extends WordPartLeftCommand {
    constructor() {
        super({
            inSelectionMode: false,
            wordNavigationType: 0 /* WordNavigationType.WordStart */,
            id: 'cursorWordPartLeft',
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 0,
                mac: { primary: 256 /* KeyMod.WinCtrl */ | 512 /* KeyMod.Alt */ | 15 /* KeyCode.LeftArrow */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
}
// Register previous id for compatibility purposes
CommandsRegistry.registerCommandAlias('cursorWordPartStartLeft', 'cursorWordPartLeft');
class CursorWordPartLeftSelect extends WordPartLeftCommand {
    constructor() {
        super({
            inSelectionMode: true,
            wordNavigationType: 0 /* WordNavigationType.WordStart */,
            id: 'cursorWordPartLeftSelect',
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 0,
                mac: { primary: 256 /* KeyMod.WinCtrl */ | 512 /* KeyMod.Alt */ | 1024 /* KeyMod.Shift */ | 15 /* KeyCode.LeftArrow */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
}
// Register previous id for compatibility purposes
CommandsRegistry.registerCommandAlias('cursorWordPartStartLeftSelect', 'cursorWordPartLeftSelect');
class WordPartRightCommand extends MoveWordCommand {
    _move(wordSeparators, model, position, wordNavigationType, hasMulticursor) {
        return WordPartOperations.moveWordPartRight(wordSeparators, model, position);
    }
}
class CursorWordPartRight extends WordPartRightCommand {
    constructor() {
        super({
            inSelectionMode: false,
            wordNavigationType: 2 /* WordNavigationType.WordEnd */,
            id: 'cursorWordPartRight',
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 0,
                mac: { primary: 256 /* KeyMod.WinCtrl */ | 512 /* KeyMod.Alt */ | 17 /* KeyCode.RightArrow */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
}
class CursorWordPartRightSelect extends WordPartRightCommand {
    constructor() {
        super({
            inSelectionMode: true,
            wordNavigationType: 2 /* WordNavigationType.WordEnd */,
            id: 'cursorWordPartRightSelect',
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 0,
                mac: { primary: 256 /* KeyMod.WinCtrl */ | 512 /* KeyMod.Alt */ | 1024 /* KeyMod.Shift */ | 17 /* KeyCode.RightArrow */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
}
registerEditorCommand(new DeleteWordPartLeft());
registerEditorCommand(new DeleteWordPartRight());
registerEditorCommand(new CursorWordPartLeft());
registerEditorCommand(new CursorWordPartLeftSelect());
registerEditorCommand(new CursorWordPartRight());
registerEditorCommand(new CursorWordPartRightSelect());

export { CursorWordPartLeft, CursorWordPartLeftSelect, CursorWordPartRight, CursorWordPartRightSelect, DeleteWordPartLeft, DeleteWordPartRight, WordPartLeftCommand, WordPartRightCommand };
