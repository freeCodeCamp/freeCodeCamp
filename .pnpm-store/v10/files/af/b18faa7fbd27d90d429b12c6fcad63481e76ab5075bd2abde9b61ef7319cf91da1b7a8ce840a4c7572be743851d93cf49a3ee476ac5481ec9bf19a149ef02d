import { KeyChord } from '../../../../base/common/keyCodes.js';
import { localize2, localize } from '../../../../nls.js';
import { MenuId } from '../../../../platform/actions/common/actions.js';
import { IConfigurationService } from '../../../../platform/configuration/common/configuration.js';
import { CoreEditingCommands } from '../../../browser/coreCommands.js';
import { EditorAction, registerEditorAction } from '../../../browser/editorExtensions.js';
import { ReplaceCommandThatSelectsText, ReplaceCommand, ReplaceCommandThatPreservesSelection } from '../../../common/commands/replaceCommand.js';
import { TrimTrailingWhitespaceCommand } from '../../../common/commands/trimTrailingWhitespaceCommand.js';
import { EditOperation } from '../../../common/core/editOperation.js';
import { Position } from '../../../common/core/position.js';
import { Range } from '../../../common/core/range.js';
import { Selection } from '../../../common/core/selection.js';
import { EnterOperation } from '../../../common/cursor/cursorTypeEditOperations.js';
import { TypeOperations } from '../../../common/cursor/cursorTypeOperations.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { ILanguageConfigurationService } from '../../../common/languages/languageConfigurationRegistry.js';
import { CopyLinesCommand } from './copyLinesCommand.js';
import { MoveLinesCommand } from './moveLinesCommand.js';
import { SortLinesCommand } from './sortLinesCommand.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// copy lines
class AbstractCopyLinesAction extends EditorAction {
    constructor(down, opts) {
        super(opts);
        this.down = down;
    }
    run(_accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const selections = editor.getSelections().map((selection, index) => ({ selection, index, ignore: false }));
        selections.sort((a, b) => Range.compareRangesUsingStarts(a.selection, b.selection));
        // Remove selections that would result in copying the same line
        let prev = selections[0];
        for (let i = 1; i < selections.length; i++) {
            const curr = selections[i];
            if (prev.selection.endLineNumber === curr.selection.startLineNumber) {
                // these two selections would copy the same line
                if (prev.index < curr.index) {
                    // prev wins
                    curr.ignore = true;
                }
                else {
                    // curr wins
                    prev.ignore = true;
                    prev = curr;
                }
            }
        }
        const commands = [];
        for (const selection of selections) {
            commands.push(new CopyLinesCommand(selection.selection, this.down, selection.ignore));
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    }
}
class CopyLinesUpAction extends AbstractCopyLinesAction {
    constructor() {
        super(false, {
            id: 'editor.action.copyLinesUpAction',
            label: localize2(1249, "Copy Line Up"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 512 /* KeyMod.Alt */ | 1024 /* KeyMod.Shift */ | 16 /* KeyCode.UpArrow */,
                linux: { primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 1024 /* KeyMod.Shift */ | 16 /* KeyCode.UpArrow */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: MenuId.MenubarSelectionMenu,
                group: '2_line',
                title: localize(1244, "&&Copy Line Up"),
                order: 1
            },
            canTriggerInlineEdits: true,
        });
    }
}
class CopyLinesDownAction extends AbstractCopyLinesAction {
    constructor() {
        super(true, {
            id: 'editor.action.copyLinesDownAction',
            label: localize2(1250, "Copy Line Down"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 512 /* KeyMod.Alt */ | 1024 /* KeyMod.Shift */ | 18 /* KeyCode.DownArrow */,
                linux: { primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 1024 /* KeyMod.Shift */ | 18 /* KeyCode.DownArrow */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: MenuId.MenubarSelectionMenu,
                group: '2_line',
                title: localize(1245, "Co&&py Line Down"),
                order: 2
            },
            canTriggerInlineEdits: true,
        });
    }
}
class DuplicateSelectionAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.duplicateSelection',
            label: localize2(1251, "Duplicate Selection"),
            precondition: EditorContextKeys.writable,
            menuOpts: {
                menuId: MenuId.MenubarSelectionMenu,
                group: '2_line',
                title: localize(1246, "&&Duplicate Selection"),
                order: 5
            },
            canTriggerInlineEdits: true,
        });
    }
    run(accessor, editor, args) {
        if (!editor.hasModel()) {
            return;
        }
        const commands = [];
        const selections = editor.getSelections();
        const model = editor.getModel();
        for (const selection of selections) {
            if (selection.isEmpty()) {
                commands.push(new CopyLinesCommand(selection, true));
            }
            else {
                const insertSelection = new Selection(selection.endLineNumber, selection.endColumn, selection.endLineNumber, selection.endColumn);
                commands.push(new ReplaceCommandThatSelectsText(insertSelection, model.getValueInRange(selection)));
            }
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    }
}
// move lines
class AbstractMoveLinesAction extends EditorAction {
    constructor(down, opts) {
        super(opts);
        this.down = down;
    }
    run(accessor, editor) {
        const languageConfigurationService = accessor.get(ILanguageConfigurationService);
        const commands = [];
        const selections = editor.getSelections() || [];
        const autoIndent = editor.getOption(16 /* EditorOption.autoIndent */);
        for (const selection of selections) {
            commands.push(new MoveLinesCommand(selection, this.down, autoIndent, languageConfigurationService));
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    }
}
class MoveLinesUpAction extends AbstractMoveLinesAction {
    constructor() {
        super(false, {
            id: 'editor.action.moveLinesUpAction',
            label: localize2(1252, "Move Line Up"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 512 /* KeyMod.Alt */ | 16 /* KeyCode.UpArrow */,
                linux: { primary: 512 /* KeyMod.Alt */ | 16 /* KeyCode.UpArrow */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: MenuId.MenubarSelectionMenu,
                group: '2_line',
                title: localize(1247, "Mo&&ve Line Up"),
                order: 3
            },
            canTriggerInlineEdits: true,
        });
    }
}
class MoveLinesDownAction extends AbstractMoveLinesAction {
    constructor() {
        super(true, {
            id: 'editor.action.moveLinesDownAction',
            label: localize2(1253, "Move Line Down"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 512 /* KeyMod.Alt */ | 18 /* KeyCode.DownArrow */,
                linux: { primary: 512 /* KeyMod.Alt */ | 18 /* KeyCode.DownArrow */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: MenuId.MenubarSelectionMenu,
                group: '2_line',
                title: localize(1248, "Move &&Line Down"),
                order: 4
            },
            canTriggerInlineEdits: true,
        });
    }
}
class AbstractSortLinesAction extends EditorAction {
    constructor(descending, opts) {
        super(opts);
        this.descending = descending;
    }
    run(_accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const model = editor.getModel();
        let selections = editor.getSelections();
        if (selections.length === 1 && selections[0].isEmpty()) {
            // Apply to whole document.
            selections = [new Selection(1, 1, model.getLineCount(), model.getLineMaxColumn(model.getLineCount()))];
        }
        for (const selection of selections) {
            if (!SortLinesCommand.canRun(editor.getModel(), selection, this.descending)) {
                return;
            }
        }
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            commands[i] = new SortLinesCommand(selections[i], this.descending);
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    }
}
class SortLinesAscendingAction extends AbstractSortLinesAction {
    constructor() {
        super(false, {
            id: 'editor.action.sortLinesAscending',
            label: localize2(1254, "Sort Lines Ascending"),
            precondition: EditorContextKeys.writable,
            canTriggerInlineEdits: true,
        });
    }
}
class SortLinesDescendingAction extends AbstractSortLinesAction {
    constructor() {
        super(true, {
            id: 'editor.action.sortLinesDescending',
            label: localize2(1255, "Sort Lines Descending"),
            precondition: EditorContextKeys.writable,
            canTriggerInlineEdits: true,
        });
    }
}
class DeleteDuplicateLinesAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.removeDuplicateLines',
            label: localize2(1256, "Delete Duplicate Lines"),
            precondition: EditorContextKeys.writable,
            canTriggerInlineEdits: true,
        });
    }
    run(_accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const model = editor.getModel();
        if (model.getLineCount() === 1 && model.getLineMaxColumn(1) === 1) {
            return;
        }
        const edits = [];
        const endCursorState = [];
        let linesDeleted = 0;
        let updateSelection = true;
        let selections = editor.getSelections();
        if (selections.length === 1 && selections[0].isEmpty()) {
            // Apply to whole document.
            selections = [new Selection(1, 1, model.getLineCount(), model.getLineMaxColumn(model.getLineCount()))];
            updateSelection = false;
        }
        for (const selection of selections) {
            const uniqueLines = new Set();
            const lines = [];
            for (let i = selection.startLineNumber; i <= selection.endLineNumber; i++) {
                const line = model.getLineContent(i);
                if (uniqueLines.has(line)) {
                    continue;
                }
                lines.push(line);
                uniqueLines.add(line);
            }
            const selectionToReplace = new Selection(selection.startLineNumber, 1, selection.endLineNumber, model.getLineMaxColumn(selection.endLineNumber));
            const adjustedSelectionStart = selection.startLineNumber - linesDeleted;
            const finalSelection = new Selection(adjustedSelectionStart, 1, adjustedSelectionStart + lines.length - 1, lines[lines.length - 1].length);
            edits.push(EditOperation.replace(selectionToReplace, lines.join('\n')));
            endCursorState.push(finalSelection);
            linesDeleted += (selection.endLineNumber - selection.startLineNumber + 1) - lines.length;
        }
        editor.pushUndoStop();
        editor.executeEdits(this.id, edits, updateSelection ? endCursorState : undefined);
        editor.pushUndoStop();
    }
}
class ReverseLinesAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.reverseLines',
            label: localize2(1257, "Reverse lines"),
            precondition: EditorContextKeys.writable,
            canTriggerInlineEdits: true
        });
    }
    run(_accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const model = editor.getModel();
        const originalSelections = editor.getSelections();
        let selections = originalSelections;
        if (selections.length === 1 && selections[0].isEmpty()) {
            // Apply to whole document.
            selections = [new Selection(1, 1, model.getLineCount(), model.getLineMaxColumn(model.getLineCount()))];
        }
        const edits = [];
        const resultingSelections = [];
        for (let i = 0; i < selections.length; i++) {
            const selection = selections[i];
            const originalSelection = originalSelections[i];
            let endLineNumber = selection.endLineNumber;
            if (selection.startLineNumber < selection.endLineNumber && selection.endColumn === 1) {
                endLineNumber--;
            }
            let range = new Range(selection.startLineNumber, 1, endLineNumber, model.getLineMaxColumn(endLineNumber));
            // Exclude last line if empty and we're at the end of the document
            if (endLineNumber === model.getLineCount() && model.getLineContent(range.endLineNumber) === '') {
                range = range.setEndPosition(range.endLineNumber - 1, model.getLineMaxColumn(range.endLineNumber - 1));
            }
            const lines = [];
            for (let i = range.endLineNumber; i >= range.startLineNumber; i--) {
                lines.push(model.getLineContent(i));
            }
            const edit = EditOperation.replace(range, lines.join('\n'));
            edits.push(edit);
            const updateLineNumber = function (lineNumber) {
                return lineNumber <= range.endLineNumber ? range.endLineNumber - lineNumber + range.startLineNumber : lineNumber;
            };
            const updateSelection = function (sel) {
                if (sel.isEmpty()) {
                    // keep just the cursor
                    return new Selection(updateLineNumber(sel.positionLineNumber), sel.positionColumn, updateLineNumber(sel.positionLineNumber), sel.positionColumn);
                }
                else {
                    // keep selection - maintain direction by creating backward selection
                    const newSelectionStart = updateLineNumber(sel.selectionStartLineNumber);
                    const newPosition = updateLineNumber(sel.positionLineNumber);
                    const newSelectionStartColumn = sel.selectionStartColumn;
                    const newPositionColumn = sel.positionColumn;
                    // Create selection: from (newSelectionStart, newSelectionStartColumn) to (newPosition, newPositionColumn)
                    // After reversal: from (3, 2) to (1, 3)
                    return new Selection(newSelectionStart, newSelectionStartColumn, newPosition, newPositionColumn);
                }
            };
            resultingSelections.push(updateSelection(originalSelection));
        }
        editor.pushUndoStop();
        editor.executeEdits(this.id, edits, resultingSelections);
        editor.pushUndoStop();
    }
}
class TrimTrailingWhitespaceAction extends EditorAction {
    static { this.ID = 'editor.action.trimTrailingWhitespace'; }
    constructor() {
        super({
            id: TrimTrailingWhitespaceAction.ID,
            label: localize2(1258, "Trim Trailing Whitespace"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: KeyChord(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 54 /* KeyCode.KeyX */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(_accessor, editor, args) {
        let cursors = [];
        if (args.reason === 'auto-save') {
            // See https://github.com/editorconfig/editorconfig-vscode/issues/47
            // It is very convenient for the editor config extension to invoke this action.
            // So, if we get a reason:'auto-save' passed in, let's preserve cursor positions.
            cursors = (editor.getSelections() || []).map(s => new Position(s.positionLineNumber, s.positionColumn));
        }
        const selection = editor.getSelection();
        if (selection === null) {
            return;
        }
        const config = _accessor.get(IConfigurationService);
        const model = editor.getModel();
        const trimInRegexAndStrings = config.getValue('files.trimTrailingWhitespaceInRegexAndStrings', { overrideIdentifier: model?.getLanguageId(), resource: model?.uri });
        const command = new TrimTrailingWhitespaceCommand(selection, cursors, trimInRegexAndStrings);
        editor.pushUndoStop();
        editor.executeCommands(this.id, [command]);
        editor.pushUndoStop();
    }
}
class DeleteLinesAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.deleteLines',
            label: localize2(1259, "Delete Line"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 41 /* KeyCode.KeyK */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            canTriggerInlineEdits: true,
        });
    }
    run(_accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const ops = this._getLinesToRemove(editor);
        const model = editor.getModel();
        if (model.getLineCount() === 1 && model.getLineMaxColumn(1) === 1) {
            // Model is empty
            return;
        }
        let linesDeleted = 0;
        const edits = [];
        const cursorState = [];
        for (let i = 0, len = ops.length; i < len; i++) {
            const op = ops[i];
            let startLineNumber = op.startLineNumber;
            let endLineNumber = op.endLineNumber;
            let startColumn = 1;
            let endColumn = model.getLineMaxColumn(endLineNumber);
            if (endLineNumber < model.getLineCount()) {
                endLineNumber += 1;
                endColumn = 1;
            }
            else if (startLineNumber > 1) {
                startLineNumber -= 1;
                startColumn = model.getLineMaxColumn(startLineNumber);
            }
            edits.push(EditOperation.replace(new Selection(startLineNumber, startColumn, endLineNumber, endColumn), ''));
            cursorState.push(new Selection(startLineNumber - linesDeleted, op.positionColumn, startLineNumber - linesDeleted, op.positionColumn));
            linesDeleted += (op.endLineNumber - op.startLineNumber + 1);
        }
        editor.pushUndoStop();
        editor.executeEdits(this.id, edits, cursorState);
        editor.pushUndoStop();
    }
    _getLinesToRemove(editor) {
        // Construct delete operations
        const operations = editor.getSelections().map((s) => {
            let endLineNumber = s.endLineNumber;
            if (s.startLineNumber < s.endLineNumber && s.endColumn === 1) {
                endLineNumber -= 1;
            }
            return {
                startLineNumber: s.startLineNumber,
                selectionStartColumn: s.selectionStartColumn,
                endLineNumber: endLineNumber,
                positionColumn: s.positionColumn
            };
        });
        // Sort delete operations
        operations.sort((a, b) => {
            if (a.startLineNumber === b.startLineNumber) {
                return a.endLineNumber - b.endLineNumber;
            }
            return a.startLineNumber - b.startLineNumber;
        });
        // Merge delete operations which are adjacent or overlapping
        const mergedOperations = [];
        let previousOperation = operations[0];
        for (let i = 1; i < operations.length; i++) {
            if (previousOperation.endLineNumber + 1 >= operations[i].startLineNumber) {
                // Merge current operations into the previous one
                previousOperation.endLineNumber = operations[i].endLineNumber;
            }
            else {
                // Push previous operation
                mergedOperations.push(previousOperation);
                previousOperation = operations[i];
            }
        }
        // Push the last operation
        mergedOperations.push(previousOperation);
        return mergedOperations;
    }
}
class IndentLinesAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.indentLines',
            label: localize2(1260, "Indent Line"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 94 /* KeyCode.BracketRight */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            canTriggerInlineEdits: true,
        });
    }
    run(_accessor, editor) {
        const viewModel = editor._getViewModel();
        if (!viewModel) {
            return;
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, TypeOperations.indent(viewModel.cursorConfig, editor.getModel(), editor.getSelections()));
        editor.pushUndoStop();
    }
}
class OutdentLinesAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.outdentLines',
            label: localize2(1261, "Outdent Line"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 92 /* KeyCode.BracketLeft */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            canTriggerInlineEdits: true,
        });
    }
    run(_accessor, editor) {
        CoreEditingCommands.Outdent.runEditorCommand(_accessor, editor, null);
    }
}
class InsertLineBeforeAction extends EditorAction {
    static { this.ID = 'editor.action.insertLineBefore'; }
    constructor() {
        super({
            id: InsertLineBeforeAction.ID,
            label: localize2(1262, "Insert Line Above"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 3 /* KeyCode.Enter */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            canTriggerInlineEdits: true,
        });
    }
    run(_accessor, editor) {
        const viewModel = editor._getViewModel();
        if (!viewModel) {
            return;
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, EnterOperation.lineInsertBefore(viewModel.cursorConfig, editor.getModel(), editor.getSelections()));
    }
}
class InsertLineAfterAction extends EditorAction {
    static { this.ID = 'editor.action.insertLineAfter'; }
    constructor() {
        super({
            id: InsertLineAfterAction.ID,
            label: localize2(1263, "Insert Line Below"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 3 /* KeyCode.Enter */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            canTriggerInlineEdits: true,
        });
    }
    run(_accessor, editor) {
        const viewModel = editor._getViewModel();
        if (!viewModel) {
            return;
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, EnterOperation.lineInsertAfter(viewModel.cursorConfig, editor.getModel(), editor.getSelections()));
    }
}
class AbstractDeleteAllToBoundaryAction extends EditorAction {
    run(_accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const primaryCursor = editor.getSelection();
        const rangesToDelete = this._getRangesToDelete(editor);
        // merge overlapping selections
        const effectiveRanges = [];
        for (let i = 0, count = rangesToDelete.length - 1; i < count; i++) {
            const range = rangesToDelete[i];
            const nextRange = rangesToDelete[i + 1];
            if (Range.intersectRanges(range, nextRange) === null) {
                effectiveRanges.push(range);
            }
            else {
                rangesToDelete[i + 1] = Range.plusRange(range, nextRange);
            }
        }
        effectiveRanges.push(rangesToDelete[rangesToDelete.length - 1]);
        const endCursorState = this._getEndCursorState(primaryCursor, effectiveRanges);
        const edits = effectiveRanges.map(range => {
            return EditOperation.replace(range, '');
        });
        editor.pushUndoStop();
        editor.executeEdits(this.id, edits, endCursorState);
        editor.pushUndoStop();
    }
}
class DeleteAllLeftAction extends AbstractDeleteAllToBoundaryAction {
    constructor() {
        super({
            id: 'deleteAllLeft',
            label: localize2(1264, "Delete All Left"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 0,
                mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 1 /* KeyCode.Backspace */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            canTriggerInlineEdits: true,
        });
    }
    _getEndCursorState(primaryCursor, rangesToDelete) {
        let endPrimaryCursor = null;
        const endCursorState = [];
        let deletedLines = 0;
        rangesToDelete.forEach(range => {
            let endCursor;
            if (range.endColumn === 1 && deletedLines > 0) {
                const newStartLine = range.startLineNumber - deletedLines;
                endCursor = new Selection(newStartLine, range.startColumn, newStartLine, range.startColumn);
            }
            else {
                endCursor = new Selection(range.startLineNumber, range.startColumn, range.startLineNumber, range.startColumn);
            }
            deletedLines += range.endLineNumber - range.startLineNumber;
            if (range.intersectRanges(primaryCursor)) {
                endPrimaryCursor = endCursor;
            }
            else {
                endCursorState.push(endCursor);
            }
        });
        if (endPrimaryCursor) {
            endCursorState.unshift(endPrimaryCursor);
        }
        return endCursorState;
    }
    _getRangesToDelete(editor) {
        const selections = editor.getSelections();
        if (selections === null) {
            return [];
        }
        let rangesToDelete = selections;
        const model = editor.getModel();
        if (model === null) {
            return [];
        }
        rangesToDelete.sort(Range.compareRangesUsingStarts);
        rangesToDelete = rangesToDelete.map(selection => {
            if (selection.isEmpty()) {
                if (selection.startColumn === 1) {
                    const deleteFromLine = Math.max(1, selection.startLineNumber - 1);
                    const deleteFromColumn = selection.startLineNumber === 1 ? 1 : model.getLineLength(deleteFromLine) + 1;
                    return new Range(deleteFromLine, deleteFromColumn, selection.startLineNumber, 1);
                }
                else {
                    return new Range(selection.startLineNumber, 1, selection.startLineNumber, selection.startColumn);
                }
            }
            else {
                return new Range(selection.startLineNumber, 1, selection.endLineNumber, selection.endColumn);
            }
        });
        return rangesToDelete;
    }
}
class DeleteAllRightAction extends AbstractDeleteAllToBoundaryAction {
    constructor() {
        super({
            id: 'deleteAllRight',
            label: localize2(1265, "Delete All Right"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 0,
                mac: { primary: 256 /* KeyMod.WinCtrl */ | 41 /* KeyCode.KeyK */, secondary: [2048 /* KeyMod.CtrlCmd */ | 20 /* KeyCode.Delete */] },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            canTriggerInlineEdits: true,
        });
    }
    _getEndCursorState(primaryCursor, rangesToDelete) {
        let endPrimaryCursor = null;
        const endCursorState = [];
        for (let i = 0, len = rangesToDelete.length, offset = 0; i < len; i++) {
            const range = rangesToDelete[i];
            const endCursor = new Selection(range.startLineNumber - offset, range.startColumn, range.startLineNumber - offset, range.startColumn);
            if (range.intersectRanges(primaryCursor)) {
                endPrimaryCursor = endCursor;
            }
            else {
                endCursorState.push(endCursor);
            }
        }
        if (endPrimaryCursor) {
            endCursorState.unshift(endPrimaryCursor);
        }
        return endCursorState;
    }
    _getRangesToDelete(editor) {
        const model = editor.getModel();
        if (model === null) {
            return [];
        }
        const selections = editor.getSelections();
        if (selections === null) {
            return [];
        }
        const rangesToDelete = selections.map((sel) => {
            if (sel.isEmpty()) {
                const maxColumn = model.getLineMaxColumn(sel.startLineNumber);
                if (sel.startColumn === maxColumn) {
                    return new Range(sel.startLineNumber, sel.startColumn, sel.startLineNumber + 1, 1);
                }
                else {
                    return new Range(sel.startLineNumber, sel.startColumn, sel.startLineNumber, maxColumn);
                }
            }
            return sel;
        });
        rangesToDelete.sort(Range.compareRangesUsingStarts);
        return rangesToDelete;
    }
}
class JoinLinesAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.joinLines',
            label: localize2(1266, "Join Lines"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 0,
                mac: { primary: 256 /* KeyMod.WinCtrl */ | 40 /* KeyCode.KeyJ */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            canTriggerInlineEdits: true,
        });
    }
    run(_accessor, editor) {
        const selections = editor.getSelections();
        if (selections === null) {
            return;
        }
        let primaryCursor = editor.getSelection();
        if (primaryCursor === null) {
            return;
        }
        selections.sort(Range.compareRangesUsingStarts);
        const reducedSelections = [];
        const lastSelection = selections.reduce((previousValue, currentValue) => {
            if (previousValue.isEmpty()) {
                if (previousValue.endLineNumber === currentValue.startLineNumber) {
                    if (primaryCursor.equalsSelection(previousValue)) {
                        primaryCursor = currentValue;
                    }
                    return currentValue;
                }
                if (currentValue.startLineNumber > previousValue.endLineNumber + 1) {
                    reducedSelections.push(previousValue);
                    return currentValue;
                }
                else {
                    return new Selection(previousValue.startLineNumber, previousValue.startColumn, currentValue.endLineNumber, currentValue.endColumn);
                }
            }
            else {
                if (currentValue.startLineNumber > previousValue.endLineNumber) {
                    reducedSelections.push(previousValue);
                    return currentValue;
                }
                else {
                    return new Selection(previousValue.startLineNumber, previousValue.startColumn, currentValue.endLineNumber, currentValue.endColumn);
                }
            }
        });
        reducedSelections.push(lastSelection);
        const model = editor.getModel();
        if (model === null) {
            return;
        }
        const edits = [];
        const endCursorState = [];
        let endPrimaryCursor = primaryCursor;
        let lineOffset = 0;
        for (let i = 0, len = reducedSelections.length; i < len; i++) {
            const selection = reducedSelections[i];
            const startLineNumber = selection.startLineNumber;
            const startColumn = 1;
            let columnDeltaOffset = 0;
            let endLineNumber, endColumn;
            const selectionEndPositionOffset = model.getLineLength(selection.endLineNumber) - selection.endColumn;
            if (selection.isEmpty() || selection.startLineNumber === selection.endLineNumber) {
                const position = selection.getStartPosition();
                if (position.lineNumber < model.getLineCount()) {
                    endLineNumber = startLineNumber + 1;
                    endColumn = model.getLineMaxColumn(endLineNumber);
                }
                else {
                    endLineNumber = position.lineNumber;
                    endColumn = model.getLineMaxColumn(position.lineNumber);
                }
            }
            else {
                endLineNumber = selection.endLineNumber;
                endColumn = model.getLineMaxColumn(endLineNumber);
            }
            let trimmedLinesContent = model.getLineContent(startLineNumber);
            for (let i = startLineNumber + 1; i <= endLineNumber; i++) {
                const lineText = model.getLineContent(i);
                const firstNonWhitespaceIdx = model.getLineFirstNonWhitespaceColumn(i);
                if (firstNonWhitespaceIdx >= 1) {
                    let insertSpace = true;
                    if (trimmedLinesContent === '') {
                        insertSpace = false;
                    }
                    if (insertSpace && (trimmedLinesContent.charAt(trimmedLinesContent.length - 1) === ' ' ||
                        trimmedLinesContent.charAt(trimmedLinesContent.length - 1) === '\t')) {
                        insertSpace = false;
                        trimmedLinesContent = trimmedLinesContent.replace(/[\s\uFEFF\xA0]+$/g, ' ');
                    }
                    const lineTextWithoutIndent = lineText.substr(firstNonWhitespaceIdx - 1);
                    trimmedLinesContent += (insertSpace ? ' ' : '') + lineTextWithoutIndent;
                    if (insertSpace) {
                        columnDeltaOffset = lineTextWithoutIndent.length + 1;
                    }
                    else {
                        columnDeltaOffset = lineTextWithoutIndent.length;
                    }
                }
                else {
                    columnDeltaOffset = 0;
                }
            }
            const deleteSelection = new Range(startLineNumber, startColumn, endLineNumber, endColumn);
            if (!deleteSelection.isEmpty()) {
                let resultSelection;
                if (selection.isEmpty()) {
                    edits.push(EditOperation.replace(deleteSelection, trimmedLinesContent));
                    resultSelection = new Selection(deleteSelection.startLineNumber - lineOffset, trimmedLinesContent.length - columnDeltaOffset + 1, startLineNumber - lineOffset, trimmedLinesContent.length - columnDeltaOffset + 1);
                }
                else {
                    if (selection.startLineNumber === selection.endLineNumber) {
                        edits.push(EditOperation.replace(deleteSelection, trimmedLinesContent));
                        resultSelection = new Selection(selection.startLineNumber - lineOffset, selection.startColumn, selection.endLineNumber - lineOffset, selection.endColumn);
                    }
                    else {
                        edits.push(EditOperation.replace(deleteSelection, trimmedLinesContent));
                        resultSelection = new Selection(selection.startLineNumber - lineOffset, selection.startColumn, selection.startLineNumber - lineOffset, trimmedLinesContent.length - selectionEndPositionOffset);
                    }
                }
                if (Range.intersectRanges(deleteSelection, primaryCursor) !== null) {
                    endPrimaryCursor = resultSelection;
                }
                else {
                    endCursorState.push(resultSelection);
                }
            }
            lineOffset += deleteSelection.endLineNumber - deleteSelection.startLineNumber;
        }
        endCursorState.unshift(endPrimaryCursor);
        editor.pushUndoStop();
        editor.executeEdits(this.id, edits, endCursorState);
        editor.pushUndoStop();
    }
}
class TransposeAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.transpose',
            label: localize2(1267, "Transpose Characters around the Cursor"),
            precondition: EditorContextKeys.writable,
            canTriggerInlineEdits: true,
        });
    }
    run(_accessor, editor) {
        const selections = editor.getSelections();
        if (selections === null) {
            return;
        }
        const model = editor.getModel();
        if (model === null) {
            return;
        }
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            const selection = selections[i];
            if (!selection.isEmpty()) {
                continue;
            }
            const cursor = selection.getStartPosition();
            const maxColumn = model.getLineMaxColumn(cursor.lineNumber);
            if (cursor.column >= maxColumn) {
                if (cursor.lineNumber === model.getLineCount()) {
                    continue;
                }
                // The cursor is at the end of current line and current line is not empty
                // then we transpose the character before the cursor and the line break if there is any following line.
                const deleteSelection = new Range(cursor.lineNumber, Math.max(1, cursor.column - 1), cursor.lineNumber + 1, 1);
                const chars = model.getValueInRange(deleteSelection).split('').reverse().join('');
                commands.push(new ReplaceCommand(new Selection(cursor.lineNumber, Math.max(1, cursor.column - 1), cursor.lineNumber + 1, 1), chars));
            }
            else {
                const deleteSelection = new Range(cursor.lineNumber, Math.max(1, cursor.column - 1), cursor.lineNumber, cursor.column + 1);
                const chars = model.getValueInRange(deleteSelection).split('').reverse().join('');
                commands.push(new ReplaceCommandThatPreservesSelection(deleteSelection, chars, new Selection(cursor.lineNumber, cursor.column + 1, cursor.lineNumber, cursor.column + 1)));
            }
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    }
}
class AbstractCaseAction extends EditorAction {
    run(_accessor, editor) {
        const selections = editor.getSelections();
        if (selections === null) {
            return;
        }
        const model = editor.getModel();
        if (model === null) {
            return;
        }
        const wordSeparators = editor.getOption(148 /* EditorOption.wordSeparators */);
        const textEdits = [];
        for (const selection of selections) {
            if (selection.isEmpty()) {
                const cursor = selection.getStartPosition();
                const word = editor.getConfiguredWordAtPosition(cursor);
                if (!word) {
                    continue;
                }
                const wordRange = new Range(cursor.lineNumber, word.startColumn, cursor.lineNumber, word.endColumn);
                const text = model.getValueInRange(wordRange);
                textEdits.push(EditOperation.replace(wordRange, this._modifyText(text, wordSeparators)));
            }
            else {
                const text = model.getValueInRange(selection);
                textEdits.push(EditOperation.replace(selection, this._modifyText(text, wordSeparators)));
            }
        }
        editor.pushUndoStop();
        editor.executeEdits(this.id, textEdits);
        editor.pushUndoStop();
    }
}
class UpperCaseAction extends AbstractCaseAction {
    constructor() {
        super({
            id: 'editor.action.transformToUppercase',
            label: localize2(1268, "Transform to Uppercase"),
            precondition: EditorContextKeys.writable,
            canTriggerInlineEdits: true,
        });
    }
    _modifyText(text, wordSeparators) {
        return text.toLocaleUpperCase();
    }
}
class LowerCaseAction extends AbstractCaseAction {
    constructor() {
        super({
            id: 'editor.action.transformToLowercase',
            label: localize2(1269, "Transform to Lowercase"),
            precondition: EditorContextKeys.writable,
            canTriggerInlineEdits: true
        });
    }
    _modifyText(text, wordSeparators) {
        return text.toLocaleLowerCase();
    }
}
class BackwardsCompatibleRegExp {
    constructor(_pattern, _flags) {
        this._pattern = _pattern;
        this._flags = _flags;
        this._actual = null;
        this._evaluated = false;
    }
    get() {
        if (!this._evaluated) {
            this._evaluated = true;
            try {
                this._actual = new RegExp(this._pattern, this._flags);
            }
            catch (err) {
                // this browser does not support this regular expression
            }
        }
        return this._actual;
    }
    isSupported() {
        return (this.get() !== null);
    }
}
class TitleCaseAction extends AbstractCaseAction {
    static { this.titleBoundary = new BackwardsCompatibleRegExp('(^|[^\\p{L}\\p{N}\']|((^|\\P{L})\'))\\p{L}', 'gmu'); }
    constructor() {
        super({
            id: 'editor.action.transformToTitlecase',
            label: localize2(1270, "Transform to Title Case"),
            precondition: EditorContextKeys.writable,
            canTriggerInlineEdits: true
        });
    }
    _modifyText(text, wordSeparators) {
        const titleBoundary = TitleCaseAction.titleBoundary.get();
        if (!titleBoundary) {
            // cannot support this
            return text;
        }
        return text
            .toLocaleLowerCase()
            .replace(titleBoundary, (b) => b.toLocaleUpperCase());
    }
}
class SnakeCaseAction extends AbstractCaseAction {
    static { this.caseBoundary = new BackwardsCompatibleRegExp('(\\p{Ll})(\\p{Lu})', 'gmu'); }
    static { this.singleLetters = new BackwardsCompatibleRegExp('(\\p{Lu}|\\p{N})(\\p{Lu})(\\p{Ll})', 'gmu'); }
    constructor() {
        super({
            id: 'editor.action.transformToSnakecase',
            label: localize2(1271, "Transform to Snake Case"),
            precondition: EditorContextKeys.writable,
            canTriggerInlineEdits: true,
        });
    }
    _modifyText(text, wordSeparators) {
        const caseBoundary = SnakeCaseAction.caseBoundary.get();
        const singleLetters = SnakeCaseAction.singleLetters.get();
        if (!caseBoundary || !singleLetters) {
            // cannot support this
            return text;
        }
        return (text
            .replace(caseBoundary, '$1_$2')
            .replace(singleLetters, '$1_$2$3')
            .toLocaleLowerCase());
    }
}
class CamelCaseAction extends AbstractCaseAction {
    static { this.singleLineWordBoundary = new BackwardsCompatibleRegExp('[_\\s-]+', 'gm'); }
    static { this.multiLineWordBoundary = new BackwardsCompatibleRegExp('[_-]+', 'gm'); }
    static { this.validWordStart = new BackwardsCompatibleRegExp('^(\\p{Lu}[^\\p{Lu}])', 'gmu'); }
    constructor() {
        super({
            id: 'editor.action.transformToCamelcase',
            label: localize2(1272, "Transform to Camel Case"),
            precondition: EditorContextKeys.writable,
            canTriggerInlineEdits: true
        });
    }
    _modifyText(text, wordSeparators) {
        const wordBoundary = /\r\n|\r|\n/.test(text) ? CamelCaseAction.multiLineWordBoundary.get() : CamelCaseAction.singleLineWordBoundary.get();
        const validWordStart = CamelCaseAction.validWordStart.get();
        if (!wordBoundary || !validWordStart) {
            // cannot support this
            return text;
        }
        const words = text.split(wordBoundary);
        const firstWord = words.shift()?.replace(validWordStart, (start) => start.toLocaleLowerCase());
        return firstWord + words.map((word) => word.substring(0, 1).toLocaleUpperCase() + word.substring(1))
            .join('');
    }
}
class PascalCaseAction extends AbstractCaseAction {
    static { this.wordBoundary = new BackwardsCompatibleRegExp('[_ \\t-]', 'gm'); }
    static { this.wordBoundaryToMaintain = new BackwardsCompatibleRegExp('(?<=\\.)', 'gm'); }
    static { this.upperCaseWordMatcher = new BackwardsCompatibleRegExp('^\\p{Lu}+$', 'mu'); }
    constructor() {
        super({
            id: 'editor.action.transformToPascalcase',
            label: localize2(1273, "Transform to Pascal Case"),
            precondition: EditorContextKeys.writable,
            canTriggerInlineEdits: true,
        });
    }
    _modifyText(text, wordSeparators) {
        const wordBoundary = PascalCaseAction.wordBoundary.get();
        const wordBoundaryToMaintain = PascalCaseAction.wordBoundaryToMaintain.get();
        const upperCaseWordMatcher = PascalCaseAction.upperCaseWordMatcher.get();
        if (!wordBoundary || !wordBoundaryToMaintain || !upperCaseWordMatcher) {
            // cannot support this
            return text;
        }
        const wordsWithMaintainBoundaries = text.split(wordBoundaryToMaintain);
        const words = wordsWithMaintainBoundaries.map(word => word.split(wordBoundary)).flat();
        return words.map(word => {
            const normalizedWord = word.charAt(0).toLocaleUpperCase() + word.slice(1);
            const isAllCaps = normalizedWord.length > 1 && upperCaseWordMatcher.test(normalizedWord);
            if (isAllCaps) {
                return normalizedWord.charAt(0) + normalizedWord.slice(1).toLocaleLowerCase();
            }
            return normalizedWord;
        }).join('');
    }
}
class KebabCaseAction extends AbstractCaseAction {
    static isSupported() {
        const areAllRegexpsSupported = [
            this.caseBoundary,
            this.singleLetters,
            this.underscoreBoundary,
        ].every((regexp) => regexp.isSupported());
        return areAllRegexpsSupported;
    }
    static { this.caseBoundary = new BackwardsCompatibleRegExp('(\\p{Ll})(\\p{Lu})', 'gmu'); }
    static { this.singleLetters = new BackwardsCompatibleRegExp('(\\p{Lu}|\\p{N})(\\p{Lu}\\p{Ll})', 'gmu'); }
    static { this.underscoreBoundary = new BackwardsCompatibleRegExp('(\\S)(_)(\\S)', 'gm'); }
    constructor() {
        super({
            id: 'editor.action.transformToKebabcase',
            label: localize2(1274, 'Transform to Kebab Case'),
            precondition: EditorContextKeys.writable,
            canTriggerInlineEdits: true,
        });
    }
    _modifyText(text, _) {
        const caseBoundary = KebabCaseAction.caseBoundary.get();
        const singleLetters = KebabCaseAction.singleLetters.get();
        const underscoreBoundary = KebabCaseAction.underscoreBoundary.get();
        if (!caseBoundary || !singleLetters || !underscoreBoundary) {
            // one or more regexps aren't supported
            return text;
        }
        return text
            .replace(underscoreBoundary, '$1-$3')
            .replace(caseBoundary, '$1-$2')
            .replace(singleLetters, '$1-$2')
            .toLocaleLowerCase();
    }
}
registerEditorAction(CopyLinesUpAction);
registerEditorAction(CopyLinesDownAction);
registerEditorAction(DuplicateSelectionAction);
registerEditorAction(MoveLinesUpAction);
registerEditorAction(MoveLinesDownAction);
registerEditorAction(SortLinesAscendingAction);
registerEditorAction(SortLinesDescendingAction);
registerEditorAction(DeleteDuplicateLinesAction);
registerEditorAction(TrimTrailingWhitespaceAction);
registerEditorAction(DeleteLinesAction);
registerEditorAction(IndentLinesAction);
registerEditorAction(OutdentLinesAction);
registerEditorAction(InsertLineBeforeAction);
registerEditorAction(InsertLineAfterAction);
registerEditorAction(DeleteAllLeftAction);
registerEditorAction(DeleteAllRightAction);
registerEditorAction(JoinLinesAction);
registerEditorAction(TransposeAction);
registerEditorAction(UpperCaseAction);
registerEditorAction(LowerCaseAction);
registerEditorAction(ReverseLinesAction);
if (SnakeCaseAction.caseBoundary.isSupported() && SnakeCaseAction.singleLetters.isSupported()) {
    registerEditorAction(SnakeCaseAction);
}
if (CamelCaseAction.singleLineWordBoundary.isSupported() && CamelCaseAction.multiLineWordBoundary.isSupported()) {
    registerEditorAction(CamelCaseAction);
}
if (PascalCaseAction.wordBoundary.isSupported()) {
    registerEditorAction(PascalCaseAction);
}
if (TitleCaseAction.titleBoundary.isSupported()) {
    registerEditorAction(TitleCaseAction);
}
if (KebabCaseAction.isSupported()) {
    registerEditorAction(KebabCaseAction);
}

export { AbstractCaseAction, AbstractDeleteAllToBoundaryAction, AbstractSortLinesAction, CamelCaseAction, DeleteAllLeftAction, DeleteAllRightAction, DeleteDuplicateLinesAction, DeleteLinesAction, DuplicateSelectionAction, IndentLinesAction, InsertLineAfterAction, InsertLineBeforeAction, JoinLinesAction, KebabCaseAction, LowerCaseAction, PascalCaseAction, ReverseLinesAction, SnakeCaseAction, SortLinesAscendingAction, SortLinesDescendingAction, TitleCaseAction, TransposeAction, TrimTrailingWhitespaceAction, UpperCaseAction };
