import { Position } from './core/position.js';
import { Range } from './core/range.js';
import { Selection } from './core/selection.js';
import { createScopedLineTokens } from './languages/supports.js';
import { CursorColumns } from './core/cursorColumns.js';
import { normalizeIndentation } from './core/misc/indentation.js';
import { InputMode } from './inputMode.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const autoCloseAlways = () => true;
const autoCloseNever = () => false;
const autoCloseBeforeWhitespace = (chr) => (chr === ' ' || chr === '\t');
class CursorConfiguration {
    static shouldRecreate(e) {
        return (e.hasChanged(165 /* EditorOption.layoutInfo */)
            || e.hasChanged(148 /* EditorOption.wordSeparators */)
            || e.hasChanged(45 /* EditorOption.emptySelectionClipboard */)
            || e.hasChanged(85 /* EditorOption.multiCursorMergeOverlapping */)
            || e.hasChanged(88 /* EditorOption.multiCursorPaste */)
            || e.hasChanged(89 /* EditorOption.multiCursorLimit */)
            || e.hasChanged(10 /* EditorOption.autoClosingBrackets */)
            || e.hasChanged(11 /* EditorOption.autoClosingComments */)
            || e.hasChanged(15 /* EditorOption.autoClosingQuotes */)
            || e.hasChanged(13 /* EditorOption.autoClosingDelete */)
            || e.hasChanged(14 /* EditorOption.autoClosingOvertype */)
            || e.hasChanged(20 /* EditorOption.autoSurround */)
            || e.hasChanged(145 /* EditorOption.useTabStops */)
            || e.hasChanged(141 /* EditorOption.trimWhitespaceOnDelete */)
            || e.hasChanged(59 /* EditorOption.fontInfo */)
            || e.hasChanged(104 /* EditorOption.readOnly */)
            || e.hasChanged(147 /* EditorOption.wordSegmenterLocales */)
            || e.hasChanged(93 /* EditorOption.overtypeOnPaste */));
    }
    constructor(languageId, modelOptions, configuration, languageConfigurationService) {
        this.languageConfigurationService = languageConfigurationService;
        this._cursorMoveConfigurationBrand = undefined;
        this._languageId = languageId;
        const options = configuration.options;
        const layoutInfo = options.get(165 /* EditorOption.layoutInfo */);
        const fontInfo = options.get(59 /* EditorOption.fontInfo */);
        this.readOnly = options.get(104 /* EditorOption.readOnly */);
        this.tabSize = modelOptions.tabSize;
        this.indentSize = modelOptions.indentSize;
        this.insertSpaces = modelOptions.insertSpaces;
        this.stickyTabStops = options.get(132 /* EditorOption.stickyTabStops */);
        this.lineHeight = fontInfo.lineHeight;
        this.typicalHalfwidthCharacterWidth = fontInfo.typicalHalfwidthCharacterWidth;
        this.pageSize = Math.max(1, Math.floor(layoutInfo.height / this.lineHeight) - 2);
        this.useTabStops = options.get(145 /* EditorOption.useTabStops */);
        this.trimWhitespaceOnDelete = options.get(141 /* EditorOption.trimWhitespaceOnDelete */);
        this.wordSeparators = options.get(148 /* EditorOption.wordSeparators */);
        this.emptySelectionClipboard = options.get(45 /* EditorOption.emptySelectionClipboard */);
        this.copyWithSyntaxHighlighting = options.get(31 /* EditorOption.copyWithSyntaxHighlighting */);
        this.multiCursorMergeOverlapping = options.get(85 /* EditorOption.multiCursorMergeOverlapping */);
        this.multiCursorPaste = options.get(88 /* EditorOption.multiCursorPaste */);
        this.multiCursorLimit = options.get(89 /* EditorOption.multiCursorLimit */);
        this.autoClosingBrackets = options.get(10 /* EditorOption.autoClosingBrackets */);
        this.autoClosingComments = options.get(11 /* EditorOption.autoClosingComments */);
        this.autoClosingQuotes = options.get(15 /* EditorOption.autoClosingQuotes */);
        this.autoClosingDelete = options.get(13 /* EditorOption.autoClosingDelete */);
        this.autoClosingOvertype = options.get(14 /* EditorOption.autoClosingOvertype */);
        this.autoSurround = options.get(20 /* EditorOption.autoSurround */);
        this.autoIndent = options.get(16 /* EditorOption.autoIndent */);
        this.wordSegmenterLocales = options.get(147 /* EditorOption.wordSegmenterLocales */);
        this.overtypeOnPaste = options.get(93 /* EditorOption.overtypeOnPaste */);
        this.surroundingPairs = {};
        this._electricChars = null;
        this.shouldAutoCloseBefore = {
            quote: this._getShouldAutoClose(languageId, this.autoClosingQuotes, true),
            comment: this._getShouldAutoClose(languageId, this.autoClosingComments, false),
            bracket: this._getShouldAutoClose(languageId, this.autoClosingBrackets, false),
        };
        this.autoClosingPairs = this.languageConfigurationService.getLanguageConfiguration(languageId).getAutoClosingPairs();
        const surroundingPairs = this.languageConfigurationService.getLanguageConfiguration(languageId).getSurroundingPairs();
        if (surroundingPairs) {
            for (const pair of surroundingPairs) {
                this.surroundingPairs[pair.open] = pair.close;
            }
        }
        const commentsConfiguration = this.languageConfigurationService.getLanguageConfiguration(languageId).comments;
        this.blockCommentStartToken = commentsConfiguration?.blockCommentStartToken ?? null;
    }
    get electricChars() {
        if (!this._electricChars) {
            this._electricChars = {};
            const electricChars = this.languageConfigurationService.getLanguageConfiguration(this._languageId).electricCharacter?.getElectricCharacters();
            if (electricChars) {
                for (const char of electricChars) {
                    this._electricChars[char] = true;
                }
            }
        }
        return this._electricChars;
    }
    get inputMode() {
        return InputMode.getInputMode();
    }
    /**
     * Should return opening bracket type to match indentation with
     */
    onElectricCharacter(character, context, column) {
        const scopedLineTokens = createScopedLineTokens(context, column - 1);
        const electricCharacterSupport = this.languageConfigurationService.getLanguageConfiguration(scopedLineTokens.languageId).electricCharacter;
        if (!electricCharacterSupport) {
            return null;
        }
        return electricCharacterSupport.onElectricCharacter(character, scopedLineTokens, column - scopedLineTokens.firstCharOffset);
    }
    normalizeIndentation(str) {
        return normalizeIndentation(str, this.indentSize, this.insertSpaces);
    }
    _getShouldAutoClose(languageId, autoCloseConfig, forQuotes) {
        switch (autoCloseConfig) {
            case 'beforeWhitespace':
                return autoCloseBeforeWhitespace;
            case 'languageDefined':
                return this._getLanguageDefinedShouldAutoClose(languageId, forQuotes);
            case 'always':
                return autoCloseAlways;
            case 'never':
                return autoCloseNever;
        }
    }
    _getLanguageDefinedShouldAutoClose(languageId, forQuotes) {
        const autoCloseBeforeSet = this.languageConfigurationService.getLanguageConfiguration(languageId).getAutoCloseBeforeSet(forQuotes);
        return c => autoCloseBeforeSet.indexOf(c) !== -1;
    }
    /**
     * Returns a visible column from a column.
     * @see {@link CursorColumns}
     */
    visibleColumnFromColumn(model, position) {
        return CursorColumns.visibleColumnFromColumn(model.getLineContent(position.lineNumber), position.column, this.tabSize);
    }
    /**
     * Returns a visible column from a column.
     * @see {@link CursorColumns}
     */
    columnFromVisibleColumn(model, lineNumber, visibleColumn) {
        const result = CursorColumns.columnFromVisibleColumn(model.getLineContent(lineNumber), visibleColumn, this.tabSize);
        const minColumn = model.getLineMinColumn(lineNumber);
        if (result < minColumn) {
            return minColumn;
        }
        const maxColumn = model.getLineMaxColumn(lineNumber);
        if (result > maxColumn) {
            return maxColumn;
        }
        return result;
    }
}
class CursorState {
    static fromModelState(modelState) {
        return new PartialModelCursorState(modelState);
    }
    static fromViewState(viewState) {
        return new PartialViewCursorState(viewState);
    }
    static fromModelSelection(modelSelection) {
        const selection = Selection.liftSelection(modelSelection);
        const modelState = new SingleCursorState(Range.fromPositions(selection.getSelectionStart()), 0 /* SelectionStartKind.Simple */, 0, selection.getPosition(), 0);
        return CursorState.fromModelState(modelState);
    }
    static fromModelSelections(modelSelections) {
        const states = [];
        for (let i = 0, len = modelSelections.length; i < len; i++) {
            states[i] = this.fromModelSelection(modelSelections[i]);
        }
        return states;
    }
    constructor(modelState, viewState) {
        this._cursorStateBrand = undefined;
        this.modelState = modelState;
        this.viewState = viewState;
    }
    equals(other) {
        return (this.viewState.equals(other.viewState) && this.modelState.equals(other.modelState));
    }
}
class PartialModelCursorState {
    constructor(modelState) {
        this.modelState = modelState;
        this.viewState = null;
    }
}
class PartialViewCursorState {
    constructor(viewState) {
        this.modelState = null;
        this.viewState = viewState;
    }
}
/**
 * Represents the cursor state on either the model or on the view model.
 */
class SingleCursorState {
    constructor(selectionStart, selectionStartKind, selectionStartLeftoverVisibleColumns, position, leftoverVisibleColumns) {
        this.selectionStart = selectionStart;
        this.selectionStartKind = selectionStartKind;
        this.selectionStartLeftoverVisibleColumns = selectionStartLeftoverVisibleColumns;
        this.position = position;
        this.leftoverVisibleColumns = leftoverVisibleColumns;
        this._singleCursorStateBrand = undefined;
        this.selection = SingleCursorState._computeSelection(this.selectionStart, this.position);
    }
    equals(other) {
        return (this.selectionStartLeftoverVisibleColumns === other.selectionStartLeftoverVisibleColumns
            && this.leftoverVisibleColumns === other.leftoverVisibleColumns
            && this.selectionStartKind === other.selectionStartKind
            && this.position.equals(other.position)
            && this.selectionStart.equalsRange(other.selectionStart));
    }
    hasSelection() {
        return (!this.selection.isEmpty() || !this.selectionStart.isEmpty());
    }
    move(inSelectionMode, lineNumber, column, leftoverVisibleColumns) {
        if (inSelectionMode) {
            // move just position
            return new SingleCursorState(this.selectionStart, this.selectionStartKind, this.selectionStartLeftoverVisibleColumns, new Position(lineNumber, column), leftoverVisibleColumns);
        }
        else {
            // move everything
            return new SingleCursorState(new Range(lineNumber, column, lineNumber, column), 0 /* SelectionStartKind.Simple */, leftoverVisibleColumns, new Position(lineNumber, column), leftoverVisibleColumns);
        }
    }
    static _computeSelection(selectionStart, position) {
        if (selectionStart.isEmpty() || !position.isBeforeOrEqual(selectionStart.getStartPosition())) {
            return Selection.fromPositions(selectionStart.getStartPosition(), position);
        }
        else {
            return Selection.fromPositions(selectionStart.getEndPosition(), position);
        }
    }
}
class EditOperationResult {
    constructor(type, commands, opts) {
        this._editOperationResultBrand = undefined;
        this.type = type;
        this.commands = commands;
        this.shouldPushStackElementBefore = opts.shouldPushStackElementBefore;
        this.shouldPushStackElementAfter = opts.shouldPushStackElementAfter;
    }
}
function isQuote(ch) {
    return (ch === '\'' || ch === '"' || ch === '`');
}

export { CursorConfiguration, CursorState, EditOperationResult, PartialModelCursorState, PartialViewCursorState, SingleCursorState, isQuote };
