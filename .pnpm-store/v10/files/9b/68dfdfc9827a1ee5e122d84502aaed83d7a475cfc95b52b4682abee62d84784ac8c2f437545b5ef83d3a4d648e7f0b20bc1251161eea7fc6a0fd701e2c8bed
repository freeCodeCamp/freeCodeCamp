import { localize2 } from '../../../../nls.js';
import { CONTEXT_ACCESSIBILITY_MODE_ENABLED } from '../../../../platform/accessibility/common/accessibility.js';
import { ContextKeyExpr } from '../../../../platform/contextkey/common/contextkey.js';
import { IsWindowsContext } from '../../../../platform/contextkey/common/contextkeys.js';
import { registerEditorCommand, registerEditorAction, EditorAction, EditorCommand } from '../../../browser/editorExtensions.js';
import { ReplaceCommand } from '../../../common/commands/replaceCommand.js';
import { EditorOptions } from '../../../common/config/editorOptions.js';
import { Position } from '../../../common/core/position.js';
import { Range } from '../../../common/core/range.js';
import { Selection } from '../../../common/core/selection.js';
import { getMapForWordSeparators } from '../../../common/core/wordCharacterClassifier.js';
import { WordOperations } from '../../../common/cursor/cursorWordOperations.js';
import { CursorState } from '../../../common/cursorCommon.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { ILanguageConfigurationService } from '../../../common/languages/languageConfigurationRegistry.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class MoveWordCommand extends EditorCommand {
    constructor(opts) {
        super(opts);
        this._inSelectionMode = opts.inSelectionMode;
        this._wordNavigationType = opts.wordNavigationType;
    }
    runEditorCommand(accessor, editor, args) {
        if (!editor.hasModel()) {
            return;
        }
        const wordSeparators = getMapForWordSeparators(editor.getOption(148 /* EditorOption.wordSeparators */), editor.getOption(147 /* EditorOption.wordSegmenterLocales */));
        const model = editor.getModel();
        const selections = editor.getSelections();
        const hasMulticursor = selections.length > 1;
        const result = selections.map((sel) => {
            const inPosition = new Position(sel.positionLineNumber, sel.positionColumn);
            const outPosition = this._move(wordSeparators, model, inPosition, this._wordNavigationType, hasMulticursor);
            return this._moveTo(sel, outPosition, this._inSelectionMode);
        });
        model.pushStackElement();
        editor._getViewModel().setCursorStates('moveWordCommand', 3 /* CursorChangeReason.Explicit */, result.map(r => CursorState.fromModelSelection(r)));
        if (result.length === 1) {
            const pos = new Position(result[0].positionLineNumber, result[0].positionColumn);
            editor.revealPosition(pos, 0 /* ScrollType.Smooth */);
        }
    }
    _moveTo(from, to, inSelectionMode) {
        if (inSelectionMode) {
            // move just position
            return new Selection(from.selectionStartLineNumber, from.selectionStartColumn, to.lineNumber, to.column);
        }
        else {
            // move everything
            return new Selection(to.lineNumber, to.column, to.lineNumber, to.column);
        }
    }
}
class WordLeftCommand extends MoveWordCommand {
    _move(wordSeparators, model, position, wordNavigationType, hasMulticursor) {
        return WordOperations.moveWordLeft(wordSeparators, model, position, wordNavigationType, hasMulticursor);
    }
}
class WordRightCommand extends MoveWordCommand {
    _move(wordSeparators, model, position, wordNavigationType, hasMulticursor) {
        return WordOperations.moveWordRight(wordSeparators, model, position, wordNavigationType);
    }
}
class CursorWordStartLeft extends WordLeftCommand {
    constructor() {
        super({
            inSelectionMode: false,
            wordNavigationType: 0 /* WordNavigationType.WordStart */,
            id: 'cursorWordStartLeft',
            precondition: undefined
        });
    }
}
class CursorWordEndLeft extends WordLeftCommand {
    constructor() {
        super({
            inSelectionMode: false,
            wordNavigationType: 2 /* WordNavigationType.WordEnd */,
            id: 'cursorWordEndLeft',
            precondition: undefined
        });
    }
}
class CursorWordLeft extends WordLeftCommand {
    constructor() {
        super({
            inSelectionMode: false,
            wordNavigationType: 1 /* WordNavigationType.WordStartFast */,
            id: 'cursorWordLeft',
            precondition: undefined,
            kbOpts: {
                kbExpr: ContextKeyExpr.and(EditorContextKeys.textInputFocus, ContextKeyExpr.and(CONTEXT_ACCESSIBILITY_MODE_ENABLED, IsWindowsContext)?.negate()),
                primary: 2048 /* KeyMod.CtrlCmd */ | 15 /* KeyCode.LeftArrow */,
                mac: { primary: 512 /* KeyMod.Alt */ | 15 /* KeyCode.LeftArrow */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
}
class CursorWordStartLeftSelect extends WordLeftCommand {
    constructor() {
        super({
            inSelectionMode: true,
            wordNavigationType: 0 /* WordNavigationType.WordStart */,
            id: 'cursorWordStartLeftSelect',
            precondition: undefined
        });
    }
}
class CursorWordEndLeftSelect extends WordLeftCommand {
    constructor() {
        super({
            inSelectionMode: true,
            wordNavigationType: 2 /* WordNavigationType.WordEnd */,
            id: 'cursorWordEndLeftSelect',
            precondition: undefined
        });
    }
}
class CursorWordLeftSelect extends WordLeftCommand {
    constructor() {
        super({
            inSelectionMode: true,
            wordNavigationType: 1 /* WordNavigationType.WordStartFast */,
            id: 'cursorWordLeftSelect',
            precondition: undefined,
            kbOpts: {
                kbExpr: ContextKeyExpr.and(EditorContextKeys.textInputFocus, ContextKeyExpr.and(CONTEXT_ACCESSIBILITY_MODE_ENABLED, IsWindowsContext)?.negate()),
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 15 /* KeyCode.LeftArrow */,
                mac: { primary: 512 /* KeyMod.Alt */ | 1024 /* KeyMod.Shift */ | 15 /* KeyCode.LeftArrow */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
}
// Accessibility navigation commands should only be enabled on windows since they are tuned to what NVDA expects
class CursorWordAccessibilityLeft extends WordLeftCommand {
    constructor() {
        super({
            inSelectionMode: false,
            wordNavigationType: 3 /* WordNavigationType.WordAccessibility */,
            id: 'cursorWordAccessibilityLeft',
            precondition: undefined
        });
    }
    _move(wordCharacterClassifier, model, position, wordNavigationType, hasMulticursor) {
        return super._move(getMapForWordSeparators(EditorOptions.wordSeparators.defaultValue, wordCharacterClassifier.intlSegmenterLocales), model, position, wordNavigationType, hasMulticursor);
    }
}
class CursorWordAccessibilityLeftSelect extends WordLeftCommand {
    constructor() {
        super({
            inSelectionMode: true,
            wordNavigationType: 3 /* WordNavigationType.WordAccessibility */,
            id: 'cursorWordAccessibilityLeftSelect',
            precondition: undefined
        });
    }
    _move(wordCharacterClassifier, model, position, wordNavigationType, hasMulticursor) {
        return super._move(getMapForWordSeparators(EditorOptions.wordSeparators.defaultValue, wordCharacterClassifier.intlSegmenterLocales), model, position, wordNavigationType, hasMulticursor);
    }
}
class CursorWordStartRight extends WordRightCommand {
    constructor() {
        super({
            inSelectionMode: false,
            wordNavigationType: 0 /* WordNavigationType.WordStart */,
            id: 'cursorWordStartRight',
            precondition: undefined
        });
    }
}
class CursorWordEndRight extends WordRightCommand {
    constructor() {
        super({
            inSelectionMode: false,
            wordNavigationType: 2 /* WordNavigationType.WordEnd */,
            id: 'cursorWordEndRight',
            precondition: undefined,
            kbOpts: {
                kbExpr: ContextKeyExpr.and(EditorContextKeys.textInputFocus, ContextKeyExpr.and(CONTEXT_ACCESSIBILITY_MODE_ENABLED, IsWindowsContext)?.negate()),
                primary: 2048 /* KeyMod.CtrlCmd */ | 17 /* KeyCode.RightArrow */,
                mac: { primary: 512 /* KeyMod.Alt */ | 17 /* KeyCode.RightArrow */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
}
class CursorWordRight extends WordRightCommand {
    constructor() {
        super({
            inSelectionMode: false,
            wordNavigationType: 2 /* WordNavigationType.WordEnd */,
            id: 'cursorWordRight',
            precondition: undefined
        });
    }
}
class CursorWordStartRightSelect extends WordRightCommand {
    constructor() {
        super({
            inSelectionMode: true,
            wordNavigationType: 0 /* WordNavigationType.WordStart */,
            id: 'cursorWordStartRightSelect',
            precondition: undefined
        });
    }
}
class CursorWordEndRightSelect extends WordRightCommand {
    constructor() {
        super({
            inSelectionMode: true,
            wordNavigationType: 2 /* WordNavigationType.WordEnd */,
            id: 'cursorWordEndRightSelect',
            precondition: undefined,
            kbOpts: {
                kbExpr: ContextKeyExpr.and(EditorContextKeys.textInputFocus, ContextKeyExpr.and(CONTEXT_ACCESSIBILITY_MODE_ENABLED, IsWindowsContext)?.negate()),
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 17 /* KeyCode.RightArrow */,
                mac: { primary: 512 /* KeyMod.Alt */ | 1024 /* KeyMod.Shift */ | 17 /* KeyCode.RightArrow */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
}
class CursorWordRightSelect extends WordRightCommand {
    constructor() {
        super({
            inSelectionMode: true,
            wordNavigationType: 2 /* WordNavigationType.WordEnd */,
            id: 'cursorWordRightSelect',
            precondition: undefined
        });
    }
}
class CursorWordAccessibilityRight extends WordRightCommand {
    constructor() {
        super({
            inSelectionMode: false,
            wordNavigationType: 3 /* WordNavigationType.WordAccessibility */,
            id: 'cursorWordAccessibilityRight',
            precondition: undefined
        });
    }
    _move(wordCharacterClassifier, model, position, wordNavigationType, hasMulticursor) {
        return super._move(getMapForWordSeparators(EditorOptions.wordSeparators.defaultValue, wordCharacterClassifier.intlSegmenterLocales), model, position, wordNavigationType, hasMulticursor);
    }
}
class CursorWordAccessibilityRightSelect extends WordRightCommand {
    constructor() {
        super({
            inSelectionMode: true,
            wordNavigationType: 3 /* WordNavigationType.WordAccessibility */,
            id: 'cursorWordAccessibilityRightSelect',
            precondition: undefined
        });
    }
    _move(wordCharacterClassifier, model, position, wordNavigationType, hasMulticursor) {
        return super._move(getMapForWordSeparators(EditorOptions.wordSeparators.defaultValue, wordCharacterClassifier.intlSegmenterLocales), model, position, wordNavigationType, hasMulticursor);
    }
}
class DeleteWordCommand extends EditorCommand {
    constructor(opts) {
        super({ canTriggerInlineEdits: true, ...opts });
        this._whitespaceHeuristics = opts.whitespaceHeuristics;
        this._wordNavigationType = opts.wordNavigationType;
    }
    runEditorCommand(accessor, editor, args) {
        const languageConfigurationService = accessor?.get(ILanguageConfigurationService);
        if (!editor.hasModel() || !languageConfigurationService) {
            return;
        }
        const wordSeparators = getMapForWordSeparators(editor.getOption(148 /* EditorOption.wordSeparators */), editor.getOption(147 /* EditorOption.wordSegmenterLocales */));
        const model = editor.getModel();
        const selections = editor.getSelections();
        const autoClosingBrackets = editor.getOption(10 /* EditorOption.autoClosingBrackets */);
        const autoClosingQuotes = editor.getOption(15 /* EditorOption.autoClosingQuotes */);
        const autoClosingPairs = languageConfigurationService.getLanguageConfiguration(model.getLanguageId()).getAutoClosingPairs();
        const viewModel = editor._getViewModel();
        const commands = selections.map((sel) => {
            const deleteRange = this._delete({
                wordSeparators,
                model,
                selection: sel,
                whitespaceHeuristics: this._whitespaceHeuristics,
                autoClosingDelete: editor.getOption(13 /* EditorOption.autoClosingDelete */),
                autoClosingBrackets,
                autoClosingQuotes,
                autoClosingPairs,
                autoClosedCharacters: viewModel.getCursorAutoClosedCharacters(),
            }, this._wordNavigationType);
            return new ReplaceCommand(deleteRange, '');
        });
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    }
}
class DeleteWordLeftCommand extends DeleteWordCommand {
    _delete(ctx, wordNavigationType) {
        const r = WordOperations.deleteWordLeft(ctx, wordNavigationType);
        if (r) {
            return r;
        }
        return new Range(1, 1, 1, 1);
    }
}
class DeleteWordRightCommand extends DeleteWordCommand {
    _delete(ctx, wordNavigationType) {
        const r = WordOperations.deleteWordRight(ctx, wordNavigationType);
        if (r) {
            return r;
        }
        const lineCount = ctx.model.getLineCount();
        const maxColumn = ctx.model.getLineMaxColumn(lineCount);
        return new Range(lineCount, maxColumn, lineCount, maxColumn);
    }
}
class DeleteWordStartLeft extends DeleteWordLeftCommand {
    constructor() {
        super({
            whitespaceHeuristics: false,
            wordNavigationType: 0 /* WordNavigationType.WordStart */,
            id: 'deleteWordStartLeft',
            precondition: EditorContextKeys.writable
        });
    }
}
class DeleteWordEndLeft extends DeleteWordLeftCommand {
    constructor() {
        super({
            whitespaceHeuristics: false,
            wordNavigationType: 2 /* WordNavigationType.WordEnd */,
            id: 'deleteWordEndLeft',
            precondition: EditorContextKeys.writable
        });
    }
}
class DeleteWordLeft extends DeleteWordLeftCommand {
    constructor() {
        super({
            whitespaceHeuristics: true,
            wordNavigationType: 0 /* WordNavigationType.WordStart */,
            id: 'deleteWordLeft',
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1 /* KeyCode.Backspace */,
                mac: { primary: 512 /* KeyMod.Alt */ | 1 /* KeyCode.Backspace */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
}
class DeleteWordStartRight extends DeleteWordRightCommand {
    constructor() {
        super({
            whitespaceHeuristics: false,
            wordNavigationType: 0 /* WordNavigationType.WordStart */,
            id: 'deleteWordStartRight',
            precondition: EditorContextKeys.writable
        });
    }
}
class DeleteWordEndRight extends DeleteWordRightCommand {
    constructor() {
        super({
            whitespaceHeuristics: false,
            wordNavigationType: 2 /* WordNavigationType.WordEnd */,
            id: 'deleteWordEndRight',
            precondition: EditorContextKeys.writable
        });
    }
}
class DeleteWordRight extends DeleteWordRightCommand {
    constructor() {
        super({
            whitespaceHeuristics: true,
            wordNavigationType: 2 /* WordNavigationType.WordEnd */,
            id: 'deleteWordRight',
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 20 /* KeyCode.Delete */,
                mac: { primary: 512 /* KeyMod.Alt */ | 20 /* KeyCode.Delete */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
}
class DeleteInsideWord extends EditorAction {
    constructor() {
        super({
            id: 'deleteInsideWord',
            precondition: EditorContextKeys.writable,
            label: localize2(1575, "Delete Word"),
        });
    }
    run(accessor, editor, args) {
        if (!editor.hasModel()) {
            return;
        }
        const wordSeparators = getMapForWordSeparators(editor.getOption(148 /* EditorOption.wordSeparators */), editor.getOption(147 /* EditorOption.wordSegmenterLocales */));
        const model = editor.getModel();
        const selections = editor.getSelections();
        const commands = selections.map((sel) => {
            const deleteRange = WordOperations.deleteInsideWord(wordSeparators, model, sel);
            return new ReplaceCommand(deleteRange, '');
        });
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    }
}
registerEditorCommand(new CursorWordStartLeft());
registerEditorCommand(new CursorWordEndLeft());
registerEditorCommand(new CursorWordLeft());
registerEditorCommand(new CursorWordStartLeftSelect());
registerEditorCommand(new CursorWordEndLeftSelect());
registerEditorCommand(new CursorWordLeftSelect());
registerEditorCommand(new CursorWordStartRight());
registerEditorCommand(new CursorWordEndRight());
registerEditorCommand(new CursorWordRight());
registerEditorCommand(new CursorWordStartRightSelect());
registerEditorCommand(new CursorWordEndRightSelect());
registerEditorCommand(new CursorWordRightSelect());
registerEditorCommand(new CursorWordAccessibilityLeft());
registerEditorCommand(new CursorWordAccessibilityLeftSelect());
registerEditorCommand(new CursorWordAccessibilityRight());
registerEditorCommand(new CursorWordAccessibilityRightSelect());
registerEditorCommand(new DeleteWordStartLeft());
registerEditorCommand(new DeleteWordEndLeft());
registerEditorCommand(new DeleteWordLeft());
registerEditorCommand(new DeleteWordStartRight());
registerEditorCommand(new DeleteWordEndRight());
registerEditorCommand(new DeleteWordRight());
registerEditorAction(DeleteInsideWord);

export { CursorWordAccessibilityLeft, CursorWordAccessibilityLeftSelect, CursorWordAccessibilityRight, CursorWordAccessibilityRightSelect, CursorWordEndLeft, CursorWordEndLeftSelect, CursorWordEndRight, CursorWordEndRightSelect, CursorWordLeft, CursorWordLeftSelect, CursorWordRight, CursorWordRightSelect, CursorWordStartLeft, CursorWordStartLeftSelect, CursorWordStartRight, CursorWordStartRightSelect, DeleteInsideWord, DeleteWordCommand, DeleteWordEndLeft, DeleteWordEndRight, DeleteWordLeft, DeleteWordLeftCommand, DeleteWordRight, DeleteWordRightCommand, DeleteWordStartLeft, DeleteWordStartRight, MoveWordCommand, WordLeftCommand, WordRightCommand };
