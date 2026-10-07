import { status } from '../../../../base/browser/ui/aria/aria.js';
import { RunOnceScheduler } from '../../../../base/common/async.js';
import { KeyChord } from '../../../../base/common/keyCodes.js';
import { Disposable, DisposableStore } from '../../../../base/common/lifecycle.js';
import { registerEditorContribution, registerEditorAction, EditorAction } from '../../../browser/editorExtensions.js';
import { CursorMoveCommands } from '../../../common/cursor/cursorMoveCommands.js';
import { Range } from '../../../common/core/range.js';
import { Selection } from '../../../common/core/selection.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { CommonFindController } from '../../find/browser/findController.js';
import { localize, localize2 } from '../../../../nls.js';
import { MenuId } from '../../../../platform/actions/common/actions.js';
import { ContextKeyExpr } from '../../../../platform/contextkey/common/contextkey.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';
import { getSelectionHighlightDecorationOptions } from '../../wordHighlighter/browser/highlightDecorations.js';
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var SelectionHighlighter_1;
function announceCursorChange(previousCursorState, cursorState) {
    const cursorDiff = cursorState.filter(cs => !previousCursorState.find(pcs => pcs.equals(cs)));
    if (cursorDiff.length >= 1) {
        const cursorPositions = cursorDiff.map(cs => `line ${cs.viewState.position.lineNumber} column ${cs.viewState.position.column}`).join(', ');
        const msg = cursorDiff.length === 1 ? localize(1288, "Cursor added: {0}", cursorPositions) : localize(1289, "Cursors added: {0}", cursorPositions);
        status(msg);
    }
}
class InsertCursorAbove extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.insertCursorAbove',
            label: localize2(1298, "Add Cursor Above"),
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 16 /* KeyCode.UpArrow */,
                linux: {
                    primary: 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 16 /* KeyCode.UpArrow */,
                    secondary: [2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 16 /* KeyCode.UpArrow */]
                },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: MenuId.MenubarSelectionMenu,
                group: '3_multi',
                title: localize(1290, "&&Add Cursor Above"),
                order: 2
            }
        });
    }
    run(accessor, editor, args) {
        if (!editor.hasModel()) {
            return;
        }
        let useLogicalLine = true;
        if (args && args.logicalLine === false) {
            useLogicalLine = false;
        }
        const viewModel = editor._getViewModel();
        if (viewModel.cursorConfig.readOnly) {
            return;
        }
        viewModel.model.pushStackElement();
        const previousCursorState = viewModel.getCursorStates();
        viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, CursorMoveCommands.addCursorUp(viewModel, previousCursorState, useLogicalLine));
        viewModel.revealTopMostCursor(args.source);
        announceCursorChange(previousCursorState, viewModel.getCursorStates());
    }
}
class InsertCursorBelow extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.insertCursorBelow',
            label: localize2(1299, "Add Cursor Below"),
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 18 /* KeyCode.DownArrow */,
                linux: {
                    primary: 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 18 /* KeyCode.DownArrow */,
                    secondary: [2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 18 /* KeyCode.DownArrow */]
                },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: MenuId.MenubarSelectionMenu,
                group: '3_multi',
                title: localize(1291, "A&&dd Cursor Below"),
                order: 3
            }
        });
    }
    run(accessor, editor, args) {
        if (!editor.hasModel()) {
            return;
        }
        let useLogicalLine = true;
        if (args && args.logicalLine === false) {
            useLogicalLine = false;
        }
        const viewModel = editor._getViewModel();
        if (viewModel.cursorConfig.readOnly) {
            return;
        }
        viewModel.model.pushStackElement();
        const previousCursorState = viewModel.getCursorStates();
        viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, CursorMoveCommands.addCursorDown(viewModel, previousCursorState, useLogicalLine));
        viewModel.revealBottomMostCursor(args.source);
        announceCursorChange(previousCursorState, viewModel.getCursorStates());
    }
}
class InsertCursorAtEndOfEachLineSelected extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.insertCursorAtEndOfEachLineSelected',
            label: localize2(1300, "Add Cursors to Line Ends"),
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 39 /* KeyCode.KeyI */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: MenuId.MenubarSelectionMenu,
                group: '3_multi',
                title: localize(1292, "Add C&&ursors to Line Ends"),
                order: 4
            }
        });
    }
    getCursorsForSelection(selection, model, result) {
        if (selection.isEmpty()) {
            return;
        }
        for (let i = selection.startLineNumber; i < selection.endLineNumber; i++) {
            const currentLineMaxColumn = model.getLineMaxColumn(i);
            result.push(new Selection(i, currentLineMaxColumn, i, currentLineMaxColumn));
        }
        if (selection.endColumn > 1) {
            result.push(new Selection(selection.endLineNumber, selection.endColumn, selection.endLineNumber, selection.endColumn));
        }
    }
    run(accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const model = editor.getModel();
        const selections = editor.getSelections();
        const viewModel = editor._getViewModel();
        const previousCursorState = viewModel.getCursorStates();
        const newSelections = [];
        selections.forEach((sel) => this.getCursorsForSelection(sel, model, newSelections));
        if (newSelections.length > 0) {
            editor.setSelections(newSelections);
        }
        announceCursorChange(previousCursorState, viewModel.getCursorStates());
    }
}
class InsertCursorAtEndOfLineSelected extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.addCursorsToBottom',
            label: localize2(1301, "Add Cursors to Bottom"),
            precondition: undefined
        });
    }
    run(accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const selections = editor.getSelections();
        const lineCount = editor.getModel().getLineCount();
        const newSelections = [];
        for (let i = selections[0].startLineNumber; i <= lineCount; i++) {
            newSelections.push(new Selection(i, selections[0].startColumn, i, selections[0].endColumn));
        }
        const viewModel = editor._getViewModel();
        const previousCursorState = viewModel.getCursorStates();
        if (newSelections.length > 0) {
            editor.setSelections(newSelections);
        }
        announceCursorChange(previousCursorState, viewModel.getCursorStates());
    }
}
class InsertCursorAtTopOfLineSelected extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.addCursorsToTop',
            label: localize2(1302, "Add Cursors to Top"),
            precondition: undefined
        });
    }
    run(accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const selections = editor.getSelections();
        const newSelections = [];
        for (let i = selections[0].startLineNumber; i >= 1; i--) {
            newSelections.push(new Selection(i, selections[0].startColumn, i, selections[0].endColumn));
        }
        const viewModel = editor._getViewModel();
        const previousCursorState = viewModel.getCursorStates();
        if (newSelections.length > 0) {
            editor.setSelections(newSelections);
        }
        announceCursorChange(previousCursorState, viewModel.getCursorStates());
    }
}
class MultiCursorSessionResult {
    constructor(selections, revealRange, revealScrollType) {
        this.selections = selections;
        this.revealRange = revealRange;
        this.revealScrollType = revealScrollType;
    }
}
class MultiCursorSession {
    static create(editor, findController) {
        if (!editor.hasModel()) {
            return null;
        }
        const findState = findController.getState();
        // Find widget owns entirely what we search for if:
        //  - focus is not in the editor (i.e. it is in the find widget)
        //  - and the search widget is visible
        //  - and the search string is non-empty
        if (!editor.hasTextFocus() && findState.isRevealed && findState.searchString.length > 0) {
            // Find widget owns what is searched for
            return new MultiCursorSession(editor, findController, false, findState.searchString, findState.wholeWord, findState.matchCase, null);
        }
        // Otherwise, the selection gives the search text, and the find widget gives the search settings
        // The exception is the find state disassociation case: when beginning with a single, collapsed selection
        let isDisconnectedFromFindController = false;
        let wholeWord;
        let matchCase;
        const selections = editor.getSelections();
        if (selections.length === 1 && selections[0].isEmpty()) {
            isDisconnectedFromFindController = true;
            wholeWord = true;
            matchCase = true;
        }
        else {
            wholeWord = findState.wholeWord;
            matchCase = findState.matchCase;
        }
        // Selection owns what is searched for
        const s = editor.getSelection();
        let searchText;
        let currentMatch = null;
        if (s.isEmpty()) {
            // selection is empty => expand to current word
            const word = editor.getConfiguredWordAtPosition(s.getStartPosition());
            if (!word) {
                return null;
            }
            searchText = word.word;
            currentMatch = new Selection(s.startLineNumber, word.startColumn, s.startLineNumber, word.endColumn);
        }
        else {
            searchText = editor.getModel().getValueInRange(s).replace(/\r\n/g, '\n');
        }
        return new MultiCursorSession(editor, findController, isDisconnectedFromFindController, searchText, wholeWord, matchCase, currentMatch);
    }
    constructor(_editor, findController, isDisconnectedFromFindController, searchText, wholeWord, matchCase, currentMatch) {
        this._editor = _editor;
        this.findController = findController;
        this.isDisconnectedFromFindController = isDisconnectedFromFindController;
        this.searchText = searchText;
        this.wholeWord = wholeWord;
        this.matchCase = matchCase;
        this.currentMatch = currentMatch;
    }
    addSelectionToNextFindMatch() {
        if (!this._editor.hasModel()) {
            return null;
        }
        const nextMatch = this._getNextMatch();
        if (!nextMatch) {
            return null;
        }
        const allSelections = this._editor.getSelections();
        return new MultiCursorSessionResult(allSelections.concat(nextMatch), nextMatch, 0 /* ScrollType.Smooth */);
    }
    moveSelectionToNextFindMatch() {
        if (!this._editor.hasModel()) {
            return null;
        }
        const nextMatch = this._getNextMatch();
        if (!nextMatch) {
            return null;
        }
        const allSelections = this._editor.getSelections();
        return new MultiCursorSessionResult(allSelections.slice(0, allSelections.length - 1).concat(nextMatch), nextMatch, 0 /* ScrollType.Smooth */);
    }
    _getNextMatch() {
        if (!this._editor.hasModel()) {
            return null;
        }
        if (this.currentMatch) {
            const result = this.currentMatch;
            this.currentMatch = null;
            return result;
        }
        this.findController.highlightFindOptions();
        const allSelections = this._editor.getSelections();
        const lastAddedSelection = allSelections[allSelections.length - 1];
        const nextMatch = this._editor.getModel().findNextMatch(this.searchText, lastAddedSelection.getEndPosition(), false, this.matchCase, this.wholeWord ? this._editor.getOption(148 /* EditorOption.wordSeparators */) : null, false);
        if (!nextMatch) {
            return null;
        }
        return new Selection(nextMatch.range.startLineNumber, nextMatch.range.startColumn, nextMatch.range.endLineNumber, nextMatch.range.endColumn);
    }
    addSelectionToPreviousFindMatch() {
        if (!this._editor.hasModel()) {
            return null;
        }
        const previousMatch = this._getPreviousMatch();
        if (!previousMatch) {
            return null;
        }
        const allSelections = this._editor.getSelections();
        return new MultiCursorSessionResult(allSelections.concat(previousMatch), previousMatch, 0 /* ScrollType.Smooth */);
    }
    moveSelectionToPreviousFindMatch() {
        if (!this._editor.hasModel()) {
            return null;
        }
        const previousMatch = this._getPreviousMatch();
        if (!previousMatch) {
            return null;
        }
        const allSelections = this._editor.getSelections();
        return new MultiCursorSessionResult(allSelections.slice(0, allSelections.length - 1).concat(previousMatch), previousMatch, 0 /* ScrollType.Smooth */);
    }
    _getPreviousMatch() {
        if (!this._editor.hasModel()) {
            return null;
        }
        if (this.currentMatch) {
            const result = this.currentMatch;
            this.currentMatch = null;
            return result;
        }
        this.findController.highlightFindOptions();
        const allSelections = this._editor.getSelections();
        const lastAddedSelection = allSelections[allSelections.length - 1];
        const previousMatch = this._editor.getModel().findPreviousMatch(this.searchText, lastAddedSelection.getStartPosition(), false, this.matchCase, this.wholeWord ? this._editor.getOption(148 /* EditorOption.wordSeparators */) : null, false);
        if (!previousMatch) {
            return null;
        }
        return new Selection(previousMatch.range.startLineNumber, previousMatch.range.startColumn, previousMatch.range.endLineNumber, previousMatch.range.endColumn);
    }
    selectAll(searchScope) {
        if (!this._editor.hasModel()) {
            return [];
        }
        this.findController.highlightFindOptions();
        const editorModel = this._editor.getModel();
        if (searchScope) {
            return editorModel.findMatches(this.searchText, searchScope, false, this.matchCase, this.wholeWord ? this._editor.getOption(148 /* EditorOption.wordSeparators */) : null, false, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */);
        }
        return editorModel.findMatches(this.searchText, true, false, this.matchCase, this.wholeWord ? this._editor.getOption(148 /* EditorOption.wordSeparators */) : null, false, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */);
    }
}
class MultiCursorSelectionController extends Disposable {
    static { this.ID = 'editor.contrib.multiCursorController'; }
    static get(editor) {
        return editor.getContribution(MultiCursorSelectionController.ID);
    }
    constructor(editor) {
        super();
        this._sessionDispose = this._register(new DisposableStore());
        this._editor = editor;
        this._ignoreSelectionChange = false;
        this._session = null;
    }
    dispose() {
        this._endSession();
        super.dispose();
    }
    _beginSessionIfNeeded(findController) {
        if (!this._session) {
            // Create a new session
            const session = MultiCursorSession.create(this._editor, findController);
            if (!session) {
                return;
            }
            this._session = session;
            const newState = { searchString: this._session.searchText };
            if (this._session.isDisconnectedFromFindController) {
                newState.wholeWordOverride = 1 /* FindOptionOverride.True */;
                newState.matchCaseOverride = 1 /* FindOptionOverride.True */;
                newState.isRegexOverride = 2 /* FindOptionOverride.False */;
            }
            findController.getState().change(newState, false);
            this._sessionDispose.add(this._editor.onDidChangeCursorSelection((e) => {
                if (this._ignoreSelectionChange) {
                    return;
                }
                this._endSession();
            }));
            this._sessionDispose.add(this._editor.onDidBlurEditorText(() => {
                this._endSession();
            }));
            this._sessionDispose.add(findController.getState().onFindReplaceStateChange((e) => {
                if (e.matchCase || e.wholeWord) {
                    this._endSession();
                }
            }));
        }
    }
    _endSession() {
        this._sessionDispose.clear();
        if (this._session && this._session.isDisconnectedFromFindController) {
            const newState = {
                wholeWordOverride: 0 /* FindOptionOverride.NotSet */,
                matchCaseOverride: 0 /* FindOptionOverride.NotSet */,
                isRegexOverride: 0 /* FindOptionOverride.NotSet */,
            };
            this._session.findController.getState().change(newState, false);
        }
        this._session = null;
    }
    _setSelections(selections) {
        this._ignoreSelectionChange = true;
        this._editor.setSelections(selections);
        this._ignoreSelectionChange = false;
    }
    _expandEmptyToWord(model, selection) {
        if (!selection.isEmpty()) {
            return selection;
        }
        const word = this._editor.getConfiguredWordAtPosition(selection.getStartPosition());
        if (!word) {
            return selection;
        }
        return new Selection(selection.startLineNumber, word.startColumn, selection.startLineNumber, word.endColumn);
    }
    _applySessionResult(result) {
        if (!result) {
            return;
        }
        this._setSelections(result.selections);
        if (result.revealRange) {
            this._editor.revealRangeInCenterIfOutsideViewport(result.revealRange, result.revealScrollType);
        }
    }
    getSession(findController) {
        return this._session;
    }
    addSelectionToNextFindMatch(findController) {
        if (!this._editor.hasModel()) {
            return;
        }
        if (!this._session) {
            // If there are multiple cursors, handle the case where they do not all select the same text.
            const allSelections = this._editor.getSelections();
            if (allSelections.length > 1) {
                const findState = findController.getState();
                const matchCase = findState.matchCase;
                const selectionsContainSameText = modelRangesContainSameText(this._editor.getModel(), allSelections, matchCase);
                if (!selectionsContainSameText) {
                    const model = this._editor.getModel();
                    const resultingSelections = [];
                    for (let i = 0, len = allSelections.length; i < len; i++) {
                        resultingSelections[i] = this._expandEmptyToWord(model, allSelections[i]);
                    }
                    this._editor.setSelections(resultingSelections);
                    return;
                }
            }
        }
        this._beginSessionIfNeeded(findController);
        if (this._session) {
            this._applySessionResult(this._session.addSelectionToNextFindMatch());
        }
    }
    addSelectionToPreviousFindMatch(findController) {
        this._beginSessionIfNeeded(findController);
        if (this._session) {
            this._applySessionResult(this._session.addSelectionToPreviousFindMatch());
        }
    }
    moveSelectionToNextFindMatch(findController) {
        this._beginSessionIfNeeded(findController);
        if (this._session) {
            this._applySessionResult(this._session.moveSelectionToNextFindMatch());
        }
    }
    moveSelectionToPreviousFindMatch(findController) {
        this._beginSessionIfNeeded(findController);
        if (this._session) {
            this._applySessionResult(this._session.moveSelectionToPreviousFindMatch());
        }
    }
    selectAll(findController) {
        if (!this._editor.hasModel()) {
            return;
        }
        let matches = null;
        const findState = findController.getState();
        // Special case: find widget owns entirely what we search for if:
        // - focus is not in the editor (i.e. it is in the find widget)
        // - and the search widget is visible
        // - and the search string is non-empty
        // - and we're searching for a regex
        if (findState.isRevealed && findState.searchString.length > 0 && findState.isRegex) {
            const editorModel = this._editor.getModel();
            if (findState.searchScope) {
                matches = editorModel.findMatches(findState.searchString, findState.searchScope, findState.isRegex, findState.matchCase, findState.wholeWord ? this._editor.getOption(148 /* EditorOption.wordSeparators */) : null, false, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */);
            }
            else {
                matches = editorModel.findMatches(findState.searchString, true, findState.isRegex, findState.matchCase, findState.wholeWord ? this._editor.getOption(148 /* EditorOption.wordSeparators */) : null, false, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */);
            }
        }
        else {
            this._beginSessionIfNeeded(findController);
            if (!this._session) {
                return;
            }
            matches = this._session.selectAll(findState.searchScope);
        }
        if (matches.length > 0) {
            const editorSelection = this._editor.getSelection();
            // Have the primary cursor remain the one where the action was invoked
            for (let i = 0, len = matches.length; i < len; i++) {
                const match = matches[i];
                const intersection = match.range.intersectRanges(editorSelection);
                if (intersection) {
                    // bingo!
                    matches[i] = matches[0];
                    matches[0] = match;
                    break;
                }
            }
            this._setSelections(matches.map(m => new Selection(m.range.startLineNumber, m.range.startColumn, m.range.endLineNumber, m.range.endColumn)));
        }
    }
}
class MultiCursorSelectionControllerAction extends EditorAction {
    run(accessor, editor) {
        const multiCursorController = MultiCursorSelectionController.get(editor);
        if (!multiCursorController) {
            return;
        }
        const viewModel = editor._getViewModel();
        if (viewModel) {
            const previousCursorState = viewModel.getCursorStates();
            const findController = CommonFindController.get(editor);
            if (findController) {
                this._run(multiCursorController, findController);
            }
            else {
                const newFindController = accessor.get(IInstantiationService).createInstance(CommonFindController, editor);
                this._run(multiCursorController, newFindController);
                newFindController.dispose();
            }
            announceCursorChange(previousCursorState, viewModel.getCursorStates());
        }
    }
}
class AddSelectionToNextFindMatchAction extends MultiCursorSelectionControllerAction {
    constructor() {
        super({
            id: 'editor.action.addSelectionToNextFindMatch',
            label: localize2(1303, "Add Selection to Next Find Match"),
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.focus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 34 /* KeyCode.KeyD */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: MenuId.MenubarSelectionMenu,
                group: '3_multi',
                title: localize(1293, "Add &&Next Occurrence"),
                order: 5
            }
        });
    }
    _run(multiCursorController, findController) {
        multiCursorController.addSelectionToNextFindMatch(findController);
    }
}
class AddSelectionToPreviousFindMatchAction extends MultiCursorSelectionControllerAction {
    constructor() {
        super({
            id: 'editor.action.addSelectionToPreviousFindMatch',
            label: localize2(1304, "Add Selection to Previous Find Match"),
            precondition: undefined,
            menuOpts: {
                menuId: MenuId.MenubarSelectionMenu,
                group: '3_multi',
                title: localize(1294, "Add P&&revious Occurrence"),
                order: 6
            }
        });
    }
    _run(multiCursorController, findController) {
        multiCursorController.addSelectionToPreviousFindMatch(findController);
    }
}
class MoveSelectionToNextFindMatchAction extends MultiCursorSelectionControllerAction {
    constructor() {
        super({
            id: 'editor.action.moveSelectionToNextFindMatch',
            label: localize2(1305, "Move Last Selection to Next Find Match"),
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.focus,
                primary: KeyChord(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 34 /* KeyCode.KeyD */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    _run(multiCursorController, findController) {
        multiCursorController.moveSelectionToNextFindMatch(findController);
    }
}
class MoveSelectionToPreviousFindMatchAction extends MultiCursorSelectionControllerAction {
    constructor() {
        super({
            id: 'editor.action.moveSelectionToPreviousFindMatch',
            label: localize2(1306, "Move Last Selection to Previous Find Match"),
            precondition: undefined
        });
    }
    _run(multiCursorController, findController) {
        multiCursorController.moveSelectionToPreviousFindMatch(findController);
    }
}
class SelectHighlightsAction extends MultiCursorSelectionControllerAction {
    constructor() {
        super({
            id: 'editor.action.selectHighlights',
            label: localize2(1307, "Select All Occurrences of Find Match"),
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.focus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 42 /* KeyCode.KeyL */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: MenuId.MenubarSelectionMenu,
                group: '3_multi',
                title: localize(1295, "Select All &&Occurrences"),
                order: 7
            }
        });
    }
    _run(multiCursorController, findController) {
        multiCursorController.selectAll(findController);
    }
}
class CompatChangeAll extends MultiCursorSelectionControllerAction {
    constructor() {
        super({
            id: 'editor.action.changeAll',
            label: localize2(1308, "Change All Occurrences"),
            precondition: ContextKeyExpr.and(EditorContextKeys.writable, EditorContextKeys.editorTextFocus),
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 60 /* KeyCode.F2 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            contextMenuOpts: {
                group: '1_modification',
                order: 1.2
            }
        });
    }
    _run(multiCursorController, findController) {
        multiCursorController.selectAll(findController);
    }
}
class SelectionHighlighterState {
    constructor(_model, _searchText, _matchCase, _wordSeparators, prevState) {
        this._model = _model;
        this._searchText = _searchText;
        this._matchCase = _matchCase;
        this._wordSeparators = _wordSeparators;
        this._cachedFindMatches = null;
        this._modelVersionId = this._model.getVersionId();
        if (prevState
            && this._model === prevState._model
            && this._searchText === prevState._searchText
            && this._matchCase === prevState._matchCase
            && this._wordSeparators === prevState._wordSeparators
            && this._modelVersionId === prevState._modelVersionId) {
            this._cachedFindMatches = prevState._cachedFindMatches;
        }
    }
    findMatches() {
        if (this._cachedFindMatches === null) {
            this._cachedFindMatches = this._model.findMatches(this._searchText, true, false, this._matchCase, this._wordSeparators, false).map(m => m.range);
            this._cachedFindMatches.sort(Range.compareRangesUsingStarts);
        }
        return this._cachedFindMatches;
    }
}
let SelectionHighlighter = class SelectionHighlighter extends Disposable {
    static { SelectionHighlighter_1 = this; }
    static { this.ID = 'editor.contrib.selectionHighlighter'; }
    constructor(editor, _languageFeaturesService) {
        super();
        this._languageFeaturesService = _languageFeaturesService;
        this.editor = editor;
        this._isEnabled = editor.getOption(122 /* EditorOption.selectionHighlight */);
        this._isEnabledMultiline = editor.getOption(124 /* EditorOption.selectionHighlightMultiline */);
        this._maxLength = editor.getOption(123 /* EditorOption.selectionHighlightMaxLength */);
        this._decorations = editor.createDecorationsCollection();
        this.updateSoon = this._register(new RunOnceScheduler(() => this._update(), 300));
        this.state = null;
        this._register(editor.onDidChangeConfiguration((e) => {
            this._isEnabled = editor.getOption(122 /* EditorOption.selectionHighlight */);
            this._isEnabledMultiline = editor.getOption(124 /* EditorOption.selectionHighlightMultiline */);
            this._maxLength = editor.getOption(123 /* EditorOption.selectionHighlightMaxLength */);
        }));
        this._register(editor.onDidChangeCursorSelection((e) => {
            if (!this._isEnabled) {
                // Early exit if nothing needs to be done!
                // Leave some form of early exit check here if you wish to continue being a cursor position change listener ;)
                return;
            }
            if (e.selection.isEmpty()) {
                if (e.reason === 3 /* CursorChangeReason.Explicit */) {
                    if (this.state) {
                        // no longer valid
                        this._setState(null);
                    }
                    this.updateSoon.schedule();
                }
                else {
                    this._setState(null);
                }
            }
            else {
                this._update();
            }
        }));
        this._register(editor.onDidChangeModel((e) => {
            this._setState(null);
        }));
        this._register(editor.onDidChangeModelContent((e) => {
            if (this._isEnabled) {
                this.updateSoon.schedule();
            }
        }));
        const findController = CommonFindController.get(editor);
        if (findController) {
            this._register(findController.getState().onFindReplaceStateChange((e) => {
                this._update();
            }));
        }
        this.updateSoon.schedule();
    }
    _update() {
        this._setState(SelectionHighlighter_1._createState(this.state, this._isEnabled, this._isEnabledMultiline, this._maxLength, this.editor));
    }
    static _createState(oldState, isEnabled, isEnabledMultiline, maxLength, editor) {
        if (!isEnabled) {
            return null;
        }
        if (!editor.hasModel()) {
            return null;
        }
        if (!isEnabledMultiline) {
            const s = editor.getSelection();
            if (s.startLineNumber !== s.endLineNumber) {
                // multiline forbidden for perf reasons
                return null;
            }
        }
        const multiCursorController = MultiCursorSelectionController.get(editor);
        if (!multiCursorController) {
            return null;
        }
        const findController = CommonFindController.get(editor);
        if (!findController) {
            return null;
        }
        let r = multiCursorController.getSession(findController);
        if (!r) {
            const allSelections = editor.getSelections();
            if (allSelections.length > 1) {
                const findState = findController.getState();
                const matchCase = findState.matchCase;
                const selectionsContainSameText = modelRangesContainSameText(editor.getModel(), allSelections, matchCase);
                if (!selectionsContainSameText) {
                    return null;
                }
            }
            r = MultiCursorSession.create(editor, findController);
        }
        if (!r) {
            return null;
        }
        if (r.currentMatch) {
            // This is an empty selection
            // Do not interfere with semantic word highlighting in the no selection case
            return null;
        }
        if (/^[ \t]+$/.test(r.searchText)) {
            // whitespace only selection
            return null;
        }
        if (maxLength > 0 && r.searchText.length > maxLength) {
            // very long selection
            return null;
        }
        // TODO: better handling of this case
        const findState = findController.getState();
        const caseSensitive = findState.matchCase;
        // Return early if the find widget shows the exact same matches
        if (findState.isRevealed) {
            let findStateSearchString = findState.searchString;
            if (!caseSensitive) {
                findStateSearchString = findStateSearchString.toLowerCase();
            }
            let mySearchString = r.searchText;
            if (!caseSensitive) {
                mySearchString = mySearchString.toLowerCase();
            }
            if (findStateSearchString === mySearchString && r.matchCase === findState.matchCase && r.wholeWord === findState.wholeWord && !findState.isRegex) {
                return null;
            }
        }
        return new SelectionHighlighterState(editor.getModel(), r.searchText, r.matchCase, r.wholeWord ? editor.getOption(148 /* EditorOption.wordSeparators */) : null, oldState);
    }
    _setState(newState) {
        this.state = newState;
        if (!this.state) {
            this._decorations.clear();
            return;
        }
        if (!this.editor.hasModel()) {
            return;
        }
        const model = this.editor.getModel();
        if (model.isTooLargeForTokenization()) {
            // the file is too large, so searching word under cursor in the whole document would be blocking the UI.
            return;
        }
        const allMatches = this.state.findMatches();
        const selections = this.editor.getSelections();
        selections.sort(Range.compareRangesUsingStarts);
        // do not overlap with selection (issue #64 and #512)
        const matches = [];
        for (let i = 0, j = 0, len = allMatches.length, lenJ = selections.length; i < len;) {
            const match = allMatches[i];
            if (j >= lenJ) {
                // finished all editor selections
                matches.push(match);
                i++;
            }
            else {
                const cmp = Range.compareRangesUsingStarts(match, selections[j]);
                if (cmp < 0) {
                    // match is before sel
                    if (selections[j].isEmpty() || !Range.areIntersecting(match, selections[j])) {
                        matches.push(match);
                    }
                    i++;
                }
                else if (cmp > 0) {
                    // sel is before match
                    j++;
                }
                else {
                    // sel is equal to match
                    i++;
                    j++;
                }
            }
        }
        const occurrenceHighlighting = this.editor.getOption(90 /* EditorOption.occurrencesHighlight */) !== 'off';
        const hasSemanticHighlights = this._languageFeaturesService.documentHighlightProvider.has(model) && occurrenceHighlighting;
        const decorations = matches.map(r => {
            return {
                range: r,
                options: getSelectionHighlightDecorationOptions(hasSemanticHighlights)
            };
        });
        this._decorations.set(decorations);
    }
    dispose() {
        this._setState(null);
        super.dispose();
    }
};
SelectionHighlighter = SelectionHighlighter_1 = __decorate([
    __param(1, ILanguageFeaturesService)
], SelectionHighlighter);
function modelRangesContainSameText(model, ranges, matchCase) {
    const selectedText = getValueInRange(model, ranges[0], !matchCase);
    for (let i = 1, len = ranges.length; i < len; i++) {
        const range = ranges[i];
        if (range.isEmpty()) {
            return false;
        }
        const thisSelectedText = getValueInRange(model, range, !matchCase);
        if (selectedText !== thisSelectedText) {
            return false;
        }
    }
    return true;
}
function getValueInRange(model, range, toLowerCase) {
    const text = model.getValueInRange(range);
    return (toLowerCase ? text.toLowerCase() : text);
}
class FocusNextCursor extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.focusNextCursor',
            label: localize2(1309, "Focus Next Cursor"),
            metadata: {
                description: localize(1296, "Focuses the next cursor"),
                args: [],
            },
            precondition: undefined
        });
    }
    run(accessor, editor, args) {
        if (!editor.hasModel()) {
            return;
        }
        const viewModel = editor._getViewModel();
        if (viewModel.cursorConfig.readOnly) {
            return;
        }
        viewModel.model.pushStackElement();
        const previousCursorState = Array.from(viewModel.getCursorStates());
        const firstCursor = previousCursorState.shift();
        if (!firstCursor) {
            return;
        }
        previousCursorState.push(firstCursor);
        viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, previousCursorState);
        viewModel.revealPrimaryCursor(args.source, true);
        announceCursorChange(previousCursorState, viewModel.getCursorStates());
    }
}
class FocusPreviousCursor extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.focusPreviousCursor',
            label: localize2(1310, "Focus Previous Cursor"),
            metadata: {
                description: localize(1297, "Focuses the previous cursor"),
                args: [],
            },
            precondition: undefined
        });
    }
    run(accessor, editor, args) {
        if (!editor.hasModel()) {
            return;
        }
        const viewModel = editor._getViewModel();
        if (viewModel.cursorConfig.readOnly) {
            return;
        }
        viewModel.model.pushStackElement();
        const previousCursorState = Array.from(viewModel.getCursorStates());
        const firstCursor = previousCursorState.pop();
        if (!firstCursor) {
            return;
        }
        previousCursorState.unshift(firstCursor);
        viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, previousCursorState);
        viewModel.revealPrimaryCursor(args.source, true);
        announceCursorChange(previousCursorState, viewModel.getCursorStates());
    }
}
registerEditorContribution(MultiCursorSelectionController.ID, MultiCursorSelectionController, 4 /* EditorContributionInstantiation.Lazy */);
registerEditorContribution(SelectionHighlighter.ID, SelectionHighlighter, 1 /* EditorContributionInstantiation.AfterFirstRender */);
registerEditorAction(InsertCursorAbove);
registerEditorAction(InsertCursorBelow);
registerEditorAction(InsertCursorAtEndOfEachLineSelected);
registerEditorAction(AddSelectionToNextFindMatchAction);
registerEditorAction(AddSelectionToPreviousFindMatchAction);
registerEditorAction(MoveSelectionToNextFindMatchAction);
registerEditorAction(MoveSelectionToPreviousFindMatchAction);
registerEditorAction(SelectHighlightsAction);
registerEditorAction(CompatChangeAll);
registerEditorAction(InsertCursorAtEndOfLineSelected);
registerEditorAction(InsertCursorAtTopOfLineSelected);
registerEditorAction(FocusNextCursor);
registerEditorAction(FocusPreviousCursor);

export { AddSelectionToNextFindMatchAction, AddSelectionToPreviousFindMatchAction, CompatChangeAll, FocusNextCursor, FocusPreviousCursor, InsertCursorAbove, InsertCursorBelow, MoveSelectionToNextFindMatchAction, MoveSelectionToPreviousFindMatchAction, MultiCursorSelectionController, MultiCursorSelectionControllerAction, MultiCursorSession, MultiCursorSessionResult, SelectHighlightsAction, SelectionHighlighter };
