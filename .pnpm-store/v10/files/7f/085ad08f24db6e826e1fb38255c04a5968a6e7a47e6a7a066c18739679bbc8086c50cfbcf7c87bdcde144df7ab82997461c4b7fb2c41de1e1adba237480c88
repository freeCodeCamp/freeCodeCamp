import { findFirstIdxMonotonousOrArrLen } from '../../../../base/common/arraysFind.js';
import { TimeoutTimer, RunOnceScheduler } from '../../../../base/common/async.js';
import { DisposableStore, dispose } from '../../../../base/common/lifecycle.js';
import { ReplaceCommand, ReplaceCommandThatPreservesSelection } from '../../../common/commands/replaceCommand.js';
import { Position } from '../../../common/core/position.js';
import { Range } from '../../../common/core/range.js';
import { Selection } from '../../../common/core/selection.js';
import { SearchParams } from '../../../common/model/textModelSearch.js';
import { FindDecorations } from './findDecorations.js';
import { ReplaceAllCommand } from './replaceAllCommand.js';
import { parseReplaceString, ReplacePattern } from './replacePattern.js';
import { RawContextKey } from '../../../../platform/contextkey/common/contextkey.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const CONTEXT_FIND_WIDGET_VISIBLE = new RawContextKey('findWidgetVisible', false);
CONTEXT_FIND_WIDGET_VISIBLE.toNegated();
// Keep ContextKey use of 'Focussed' to not break when clauses
const CONTEXT_FIND_INPUT_FOCUSED = new RawContextKey('findInputFocussed', false);
const CONTEXT_REPLACE_INPUT_FOCUSED = new RawContextKey('replaceInputFocussed', false);
const ToggleCaseSensitiveKeybinding = {
    primary: 512 /* KeyMod.Alt */ | 33 /* KeyCode.KeyC */,
    mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 33 /* KeyCode.KeyC */ }
};
const ToggleWholeWordKeybinding = {
    primary: 512 /* KeyMod.Alt */ | 53 /* KeyCode.KeyW */,
    mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 53 /* KeyCode.KeyW */ }
};
const ToggleRegexKeybinding = {
    primary: 512 /* KeyMod.Alt */ | 48 /* KeyCode.KeyR */,
    mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 48 /* KeyCode.KeyR */ }
};
const ToggleSearchScopeKeybinding = {
    primary: 512 /* KeyMod.Alt */ | 42 /* KeyCode.KeyL */,
    mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 42 /* KeyCode.KeyL */ }
};
const TogglePreserveCaseKeybinding = {
    primary: 512 /* KeyMod.Alt */ | 46 /* KeyCode.KeyP */,
    mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 46 /* KeyCode.KeyP */ }
};
const FIND_IDS = {
    StartFindAction: 'actions.find',
    StartFindWithSelection: 'actions.findWithSelection',
    StartFindWithArgs: 'editor.actions.findWithArgs',
    NextMatchFindAction: 'editor.action.nextMatchFindAction',
    PreviousMatchFindAction: 'editor.action.previousMatchFindAction',
    GoToMatchFindAction: 'editor.action.goToMatchFindAction',
    NextSelectionMatchFindAction: 'editor.action.nextSelectionMatchFindAction',
    PreviousSelectionMatchFindAction: 'editor.action.previousSelectionMatchFindAction',
    StartFindReplaceAction: 'editor.action.startFindReplaceAction',
    CloseFindWidgetCommand: 'closeFindWidget',
    ToggleCaseSensitiveCommand: 'toggleFindCaseSensitive',
    ToggleWholeWordCommand: 'toggleFindWholeWord',
    ToggleRegexCommand: 'toggleFindRegex',
    ToggleSearchScopeCommand: 'toggleFindInSelection',
    TogglePreserveCaseCommand: 'togglePreserveCase',
    ReplaceOneAction: 'editor.action.replaceOne',
    ReplaceAllAction: 'editor.action.replaceAll',
    SelectAllMatchesAction: 'editor.action.selectAllMatches'
};
const MATCHES_LIMIT = 19999;
const RESEARCH_DELAY = 240;
class FindModelBoundToEditorModel {
    constructor(editor, state) {
        this._toDispose = new DisposableStore();
        this._editor = editor;
        this._state = state;
        this._isDisposed = false;
        this._startSearchingTimer = new TimeoutTimer();
        this._decorations = new FindDecorations(editor);
        this._toDispose.add(this._decorations);
        this._updateDecorationsScheduler = new RunOnceScheduler(() => {
            if (!this._editor.hasModel()) {
                return;
            }
            return this.research(false);
        }, 100);
        this._toDispose.add(this._updateDecorationsScheduler);
        this._toDispose.add(this._editor.onDidChangeCursorPosition((e) => {
            if (e.reason === 3 /* CursorChangeReason.Explicit */
                || e.reason === 5 /* CursorChangeReason.Undo */
                || e.reason === 6 /* CursorChangeReason.Redo */) {
                this._decorations.setStartPosition(this._editor.getPosition());
            }
        }));
        this._ignoreModelContentChanged = false;
        this._toDispose.add(this._editor.onDidChangeModelContent((e) => {
            if (this._ignoreModelContentChanged) {
                return;
            }
            if (e.isFlush) {
                // a model.setValue() was called
                this._decorations.reset();
            }
            this._decorations.setStartPosition(this._editor.getPosition());
            this._updateDecorationsScheduler.schedule();
        }));
        this._toDispose.add(this._state.onFindReplaceStateChange((e) => this._onStateChanged(e)));
        this.research(false, this._state.searchScope);
    }
    dispose() {
        this._isDisposed = true;
        dispose(this._startSearchingTimer);
        this._toDispose.dispose();
    }
    _onStateChanged(e) {
        if (this._isDisposed) {
            // The find model is disposed during a find state changed event
            return;
        }
        if (!this._editor.hasModel()) {
            // The find model will be disposed momentarily
            return;
        }
        if (e.searchString || e.isReplaceRevealed || e.isRegex || e.wholeWord || e.matchCase || e.searchScope) {
            const model = this._editor.getModel();
            if (model.isTooLargeForSyncing()) {
                this._startSearchingTimer.cancel();
                this._startSearchingTimer.setIfNotSet(() => {
                    if (e.searchScope) {
                        this.research(e.moveCursor, this._state.searchScope);
                    }
                    else {
                        this.research(e.moveCursor);
                    }
                }, RESEARCH_DELAY);
            }
            else {
                if (e.searchScope) {
                    this.research(e.moveCursor, this._state.searchScope);
                }
                else {
                    this.research(e.moveCursor);
                }
            }
        }
    }
    static _getSearchRange(model, findScope) {
        // If we have set now or before a find scope, use it for computing the search range
        if (findScope) {
            return findScope;
        }
        return model.getFullModelRange();
    }
    research(moveCursor, newFindScope) {
        let findScopes = null;
        if (typeof newFindScope !== 'undefined') {
            if (newFindScope !== null) {
                if (!Array.isArray(newFindScope)) {
                    findScopes = [newFindScope];
                }
                else {
                    findScopes = newFindScope;
                }
            }
        }
        else {
            findScopes = this._decorations.getFindScopes();
        }
        if (findScopes !== null) {
            findScopes = findScopes.map(findScope => {
                if (findScope.startLineNumber !== findScope.endLineNumber) {
                    let endLineNumber = findScope.endLineNumber;
                    if (findScope.endColumn === 1) {
                        endLineNumber = endLineNumber - 1;
                    }
                    return new Range(findScope.startLineNumber, 1, endLineNumber, this._editor.getModel().getLineMaxColumn(endLineNumber));
                }
                return findScope;
            });
        }
        const findMatches = this._findMatches(findScopes, false, MATCHES_LIMIT);
        this._decorations.set(findMatches, findScopes);
        const editorSelection = this._editor.getSelection();
        let currentMatchesPosition = this._decorations.getCurrentMatchesPosition(editorSelection);
        if (currentMatchesPosition === 0 && findMatches.length > 0) {
            // current selection is not on top of a match
            // try to find its nearest result from the top of the document
            const matchAfterSelection = findFirstIdxMonotonousOrArrLen(findMatches.map(match => match.range), range => Range.compareRangesUsingStarts(range, editorSelection) >= 0);
            currentMatchesPosition = matchAfterSelection > 0 ? matchAfterSelection - 1 + 1 /** match position is one based */ : currentMatchesPosition;
        }
        this._state.changeMatchInfo(currentMatchesPosition, this._decorations.getCount(), undefined);
        if (moveCursor && this._editor.getOption(50 /* EditorOption.find */).cursorMoveOnType) {
            this._moveToNextMatch(this._decorations.getStartPosition());
        }
    }
    _hasMatches() {
        return (this._state.matchesCount > 0);
    }
    _cannotFind() {
        if (!this._hasMatches()) {
            const findScope = this._decorations.getFindScope();
            if (findScope) {
                // Reveal the selection so user is reminded that 'selection find' is on.
                this._editor.revealRangeInCenterIfOutsideViewport(findScope, 0 /* ScrollType.Smooth */);
            }
            return true;
        }
        return false;
    }
    _setCurrentFindMatch(match) {
        const matchesPosition = this._decorations.setCurrentFindMatch(match);
        this._state.changeMatchInfo(matchesPosition, this._decorations.getCount(), match);
        this._editor.setSelection(match);
        this._editor.revealRangeInCenterIfOutsideViewport(match, 0 /* ScrollType.Smooth */);
    }
    _prevSearchPosition(before) {
        const isUsingLineStops = this._state.isRegex && (this._state.searchString.indexOf('^') >= 0
            || this._state.searchString.indexOf('$') >= 0);
        let { lineNumber, column } = before;
        const model = this._editor.getModel();
        if (isUsingLineStops || column === 1) {
            if (lineNumber === 1) {
                lineNumber = model.getLineCount();
            }
            else {
                lineNumber--;
            }
            column = model.getLineMaxColumn(lineNumber);
        }
        else {
            column--;
        }
        return new Position(lineNumber, column);
    }
    _moveToPrevMatch(before, isRecursed = false) {
        if (!this._state.canNavigateBack()) {
            // we are beyond the first matched find result
            // instead of doing nothing, we should refocus the first item
            const nextMatchRange = this._decorations.matchAfterPosition(before);
            if (nextMatchRange) {
                this._setCurrentFindMatch(nextMatchRange);
            }
            return;
        }
        if (this._decorations.getCount() < MATCHES_LIMIT) {
            let prevMatchRange = this._decorations.matchBeforePosition(before);
            if (prevMatchRange && prevMatchRange.isEmpty() && prevMatchRange.getStartPosition().equals(before)) {
                before = this._prevSearchPosition(before);
                prevMatchRange = this._decorations.matchBeforePosition(before);
            }
            if (prevMatchRange) {
                this._setCurrentFindMatch(prevMatchRange);
            }
            return;
        }
        if (this._cannotFind()) {
            return;
        }
        const findScope = this._decorations.getFindScope();
        const searchRange = FindModelBoundToEditorModel._getSearchRange(this._editor.getModel(), findScope);
        // ...(----)...|...
        if (searchRange.getEndPosition().isBefore(before)) {
            before = searchRange.getEndPosition();
        }
        // ...|...(----)...
        if (before.isBefore(searchRange.getStartPosition())) {
            before = searchRange.getEndPosition();
        }
        const { lineNumber, column } = before;
        const model = this._editor.getModel();
        let position = new Position(lineNumber, column);
        let prevMatch = model.findPreviousMatch(this._state.searchString, position, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(148 /* EditorOption.wordSeparators */) : null, false);
        if (prevMatch && prevMatch.range.isEmpty() && prevMatch.range.getStartPosition().equals(position)) {
            // Looks like we're stuck at this position, unacceptable!
            position = this._prevSearchPosition(position);
            prevMatch = model.findPreviousMatch(this._state.searchString, position, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(148 /* EditorOption.wordSeparators */) : null, false);
        }
        if (!prevMatch) {
            // there is precisely one match and selection is on top of it
            return;
        }
        if (!isRecursed && !searchRange.containsRange(prevMatch.range)) {
            return this._moveToPrevMatch(prevMatch.range.getStartPosition(), true);
        }
        this._setCurrentFindMatch(prevMatch.range);
    }
    moveToPrevMatch() {
        this._moveToPrevMatch(this._editor.getSelection().getStartPosition());
    }
    _nextSearchPosition(after) {
        const isUsingLineStops = this._state.isRegex && (this._state.searchString.indexOf('^') >= 0
            || this._state.searchString.indexOf('$') >= 0);
        let { lineNumber, column } = after;
        const model = this._editor.getModel();
        if (isUsingLineStops || column === model.getLineMaxColumn(lineNumber)) {
            if (lineNumber === model.getLineCount()) {
                lineNumber = 1;
            }
            else {
                lineNumber++;
            }
            column = 1;
        }
        else {
            column++;
        }
        return new Position(lineNumber, column);
    }
    _moveToNextMatch(after) {
        if (!this._state.canNavigateForward()) {
            // we are beyond the last matched find result
            // instead of doing nothing, we should refocus the last item
            const prevMatchRange = this._decorations.matchBeforePosition(after);
            if (prevMatchRange) {
                this._setCurrentFindMatch(prevMatchRange);
            }
            return;
        }
        if (this._decorations.getCount() < MATCHES_LIMIT) {
            let nextMatchRange = this._decorations.matchAfterPosition(after);
            if (nextMatchRange && nextMatchRange.isEmpty() && nextMatchRange.getStartPosition().equals(after)) {
                // Looks like we're stuck at this position, unacceptable!
                after = this._nextSearchPosition(after);
                nextMatchRange = this._decorations.matchAfterPosition(after);
            }
            if (nextMatchRange) {
                this._setCurrentFindMatch(nextMatchRange);
            }
            return;
        }
        const nextMatch = this._getNextMatch(after, false, true);
        if (nextMatch) {
            this._setCurrentFindMatch(nextMatch.range);
        }
    }
    _getNextMatch(after, captureMatches, forceMove, isRecursed = false) {
        if (this._cannotFind()) {
            return null;
        }
        const findScope = this._decorations.getFindScope();
        const searchRange = FindModelBoundToEditorModel._getSearchRange(this._editor.getModel(), findScope);
        // ...(----)...|...
        if (searchRange.getEndPosition().isBefore(after)) {
            after = searchRange.getStartPosition();
        }
        // ...|...(----)...
        if (after.isBefore(searchRange.getStartPosition())) {
            after = searchRange.getStartPosition();
        }
        const { lineNumber, column } = after;
        const model = this._editor.getModel();
        let position = new Position(lineNumber, column);
        let nextMatch = model.findNextMatch(this._state.searchString, position, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(148 /* EditorOption.wordSeparators */) : null, captureMatches);
        if (forceMove && nextMatch && nextMatch.range.isEmpty() && nextMatch.range.getStartPosition().equals(position)) {
            // Looks like we're stuck at this position, unacceptable!
            position = this._nextSearchPosition(position);
            nextMatch = model.findNextMatch(this._state.searchString, position, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(148 /* EditorOption.wordSeparators */) : null, captureMatches);
        }
        if (!nextMatch) {
            // there is precisely one match and selection is on top of it
            return null;
        }
        if (!isRecursed && !searchRange.containsRange(nextMatch.range)) {
            return this._getNextMatch(nextMatch.range.getEndPosition(), captureMatches, forceMove, true);
        }
        return nextMatch;
    }
    moveToNextMatch() {
        this._moveToNextMatch(this._editor.getSelection().getEndPosition());
    }
    _moveToMatch(index) {
        const decorationRange = this._decorations.getDecorationRangeAt(index);
        if (decorationRange) {
            this._setCurrentFindMatch(decorationRange);
        }
    }
    moveToMatch(index) {
        this._moveToMatch(index);
    }
    _getReplacePattern() {
        if (this._state.isRegex) {
            return parseReplaceString(this._state.replaceString);
        }
        return ReplacePattern.fromStaticValue(this._state.replaceString);
    }
    replace() {
        if (!this._hasMatches()) {
            return;
        }
        const replacePattern = this._getReplacePattern();
        const selection = this._editor.getSelection();
        const nextMatch = this._getNextMatch(selection.getStartPosition(), true, false);
        if (nextMatch) {
            if (selection.equalsRange(nextMatch.range)) {
                // selection sits on a find match => replace it!
                const replaceString = replacePattern.buildReplaceString(nextMatch.matches, this._state.preserveCase);
                const command = new ReplaceCommand(selection, replaceString);
                this._executeEditorCommand('replace', command);
                this._decorations.setStartPosition(new Position(selection.startLineNumber, selection.startColumn + replaceString.length));
                this.research(true);
            }
            else {
                this._decorations.setStartPosition(this._editor.getPosition());
                this._setCurrentFindMatch(nextMatch.range);
            }
        }
    }
    _findMatches(findScopes, captureMatches, limitResultCount) {
        const searchRanges = (findScopes || [null]).map((scope) => FindModelBoundToEditorModel._getSearchRange(this._editor.getModel(), scope));
        return this._editor.getModel().findMatches(this._state.searchString, searchRanges, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(148 /* EditorOption.wordSeparators */) : null, captureMatches, limitResultCount);
    }
    replaceAll() {
        if (!this._hasMatches()) {
            return;
        }
        const findScopes = this._decorations.getFindScopes();
        if (findScopes === null && this._state.matchesCount >= MATCHES_LIMIT) {
            // Doing a replace on the entire file that is over ${MATCHES_LIMIT} matches
            this._largeReplaceAll();
        }
        else {
            this._regularReplaceAll(findScopes);
        }
        this.research(false);
    }
    _largeReplaceAll() {
        const searchParams = new SearchParams(this._state.searchString, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(148 /* EditorOption.wordSeparators */) : null);
        const searchData = searchParams.parseSearchRequest();
        if (!searchData) {
            return;
        }
        let searchRegex = searchData.regex;
        if (!searchRegex.multiline) {
            let mod = 'mu';
            if (searchRegex.ignoreCase) {
                mod += 'i';
            }
            if (searchRegex.global) {
                mod += 'g';
            }
            searchRegex = new RegExp(searchRegex.source, mod);
        }
        const model = this._editor.getModel();
        const modelText = model.getValue(1 /* EndOfLinePreference.LF */);
        const fullModelRange = model.getFullModelRange();
        const replacePattern = this._getReplacePattern();
        let resultText;
        const preserveCase = this._state.preserveCase;
        if (replacePattern.hasReplacementPatterns || preserveCase) {
            resultText = modelText.replace(searchRegex, function () {
                // eslint-disable-next-line local/code-no-any-casts
                return replacePattern.buildReplaceString(arguments, preserveCase);
            });
        }
        else {
            resultText = modelText.replace(searchRegex, replacePattern.buildReplaceString(null, preserveCase));
        }
        const command = new ReplaceCommandThatPreservesSelection(fullModelRange, resultText, this._editor.getSelection());
        this._executeEditorCommand('replaceAll', command);
    }
    _regularReplaceAll(findScopes) {
        const replacePattern = this._getReplacePattern();
        // Get all the ranges (even more than the highlighted ones)
        const matches = this._findMatches(findScopes, replacePattern.hasReplacementPatterns || this._state.preserveCase, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */);
        const replaceStrings = [];
        for (let i = 0, len = matches.length; i < len; i++) {
            replaceStrings[i] = replacePattern.buildReplaceString(matches[i].matches, this._state.preserveCase);
        }
        const command = new ReplaceAllCommand(this._editor.getSelection(), matches.map(m => m.range), replaceStrings);
        this._executeEditorCommand('replaceAll', command);
    }
    selectAllMatches() {
        if (!this._hasMatches()) {
            return;
        }
        const findScopes = this._decorations.getFindScopes();
        // Get all the ranges (even more than the highlighted ones)
        const matches = this._findMatches(findScopes, false, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */);
        let selections = matches.map(m => new Selection(m.range.startLineNumber, m.range.startColumn, m.range.endLineNumber, m.range.endColumn));
        // If one of the ranges is the editor selection, then maintain it as primary
        const editorSelection = this._editor.getSelection();
        for (let i = 0, len = selections.length; i < len; i++) {
            const sel = selections[i];
            if (sel.equalsRange(editorSelection)) {
                selections = [editorSelection].concat(selections.slice(0, i)).concat(selections.slice(i + 1));
                break;
            }
        }
        this._editor.setSelections(selections);
    }
    _executeEditorCommand(source, command) {
        try {
            this._ignoreModelContentChanged = true;
            this._editor.pushUndoStop();
            this._editor.executeCommand(source, command);
            this._editor.pushUndoStop();
        }
        finally {
            this._ignoreModelContentChanged = false;
        }
    }
}

export { CONTEXT_FIND_INPUT_FOCUSED, CONTEXT_FIND_WIDGET_VISIBLE, CONTEXT_REPLACE_INPUT_FOCUSED, FIND_IDS, FindModelBoundToEditorModel, MATCHES_LIMIT, ToggleCaseSensitiveKeybinding, TogglePreserveCaseKeybinding, ToggleRegexKeybinding, ToggleSearchScopeKeybinding, ToggleWholeWordKeybinding };
