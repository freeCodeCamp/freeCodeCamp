import { CoreNavigationCommands } from '../coreCommands.js';
import { Position } from '../../common/core/position.js';
import { isLinux } from '../../../base/common/platform.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ViewController {
    constructor(configuration, viewModel, userInputEvents, commandDelegate) {
        this.configuration = configuration;
        this.viewModel = viewModel;
        this.userInputEvents = userInputEvents;
        this.commandDelegate = commandDelegate;
    }
    paste(text, pasteOnNewLine, multicursorText, mode) {
        this.commandDelegate.paste(text, pasteOnNewLine, multicursorText, mode);
    }
    type(text) {
        this.commandDelegate.type(text);
    }
    compositionType(text, replacePrevCharCnt, replaceNextCharCnt, positionDelta) {
        this.commandDelegate.compositionType(text, replacePrevCharCnt, replaceNextCharCnt, positionDelta);
    }
    compositionStart() {
        this.commandDelegate.startComposition();
    }
    compositionEnd() {
        this.commandDelegate.endComposition();
    }
    cut() {
        this.commandDelegate.cut();
    }
    setSelection(modelSelection) {
        CoreNavigationCommands.SetSelection.runCoreEditorCommand(this.viewModel, {
            source: 'keyboard',
            selection: modelSelection
        });
    }
    _validateViewColumn(viewPosition) {
        const minColumn = this.viewModel.getLineMinColumn(viewPosition.lineNumber);
        if (viewPosition.column < minColumn) {
            return new Position(viewPosition.lineNumber, minColumn);
        }
        return viewPosition;
    }
    _hasMulticursorModifier(data) {
        switch (this.configuration.options.get(86 /* EditorOption.multiCursorModifier */)) {
            case 'altKey':
                return data.altKey;
            case 'ctrlKey':
                return data.ctrlKey;
            case 'metaKey':
                return data.metaKey;
            default:
                return false;
        }
    }
    _hasNonMulticursorModifier(data) {
        switch (this.configuration.options.get(86 /* EditorOption.multiCursorModifier */)) {
            case 'altKey':
                return data.ctrlKey || data.metaKey;
            case 'ctrlKey':
                return data.altKey || data.metaKey;
            case 'metaKey':
                return data.ctrlKey || data.altKey;
            default:
                return false;
        }
    }
    dispatchMouse(data) {
        const options = this.configuration.options;
        const selectionClipboardIsOn = (isLinux && options.get(121 /* EditorOption.selectionClipboard */));
        const columnSelection = options.get(28 /* EditorOption.columnSelection */);
        const scrollOnMiddleClick = options.get(171 /* EditorOption.scrollOnMiddleClick */);
        if (data.middleButton && !selectionClipboardIsOn) {
            if (scrollOnMiddleClick) ;
            else {
                this._columnSelect(data.position, data.mouseColumn, data.inSelectionMode);
            }
        }
        else if (data.startedOnLineNumbers) {
            // If the dragging started on the gutter, then have operations work on the entire line
            if (this._hasMulticursorModifier(data)) {
                if (data.inSelectionMode) {
                    this._lastCursorLineSelect(data.position, data.revealType);
                }
                else {
                    this._createCursor(data.position, true);
                }
            }
            else {
                if (data.inSelectionMode) {
                    this._lineSelectDrag(data.position, data.revealType);
                }
                else {
                    this._lineSelect(data.position, data.revealType);
                }
            }
        }
        else if (data.mouseDownCount >= 4) {
            this._selectAll();
        }
        else if (data.mouseDownCount === 3) {
            if (this._hasMulticursorModifier(data)) {
                if (data.inSelectionMode) {
                    this._lastCursorLineSelectDrag(data.position, data.revealType);
                }
                else {
                    this._lastCursorLineSelect(data.position, data.revealType);
                }
            }
            else {
                if (data.inSelectionMode) {
                    this._lineSelectDrag(data.position, data.revealType);
                }
                else {
                    this._lineSelect(data.position, data.revealType);
                }
            }
        }
        else if (data.mouseDownCount === 2) {
            if (!data.onInjectedText) {
                if (this._hasMulticursorModifier(data)) {
                    this._lastCursorWordSelect(data.position, data.revealType);
                }
                else {
                    if (data.inSelectionMode) {
                        this._wordSelectDrag(data.position, data.revealType);
                    }
                    else {
                        this._wordSelect(data.position, data.revealType);
                    }
                }
            }
        }
        else {
            if (this._hasMulticursorModifier(data)) {
                if (!this._hasNonMulticursorModifier(data)) {
                    if (data.shiftKey) {
                        this._columnSelect(data.position, data.mouseColumn, true);
                    }
                    else {
                        // Do multi-cursor operations only when purely alt is pressed
                        if (data.inSelectionMode) {
                            this._lastCursorMoveToSelect(data.position, data.revealType);
                        }
                        else {
                            this._createCursor(data.position, false);
                        }
                    }
                }
            }
            else {
                if (data.inSelectionMode) {
                    if (data.altKey) {
                        this._columnSelect(data.position, data.mouseColumn, true);
                    }
                    else {
                        if (columnSelection) {
                            this._columnSelect(data.position, data.mouseColumn, true);
                        }
                        else {
                            this._moveToSelect(data.position, data.revealType);
                        }
                    }
                }
                else {
                    this.moveTo(data.position, data.revealType);
                }
            }
        }
    }
    _usualArgs(viewPosition, revealType) {
        viewPosition = this._validateViewColumn(viewPosition);
        return {
            source: 'mouse',
            position: this._convertViewToModelPosition(viewPosition),
            viewPosition,
            revealType
        };
    }
    moveTo(viewPosition, revealType) {
        CoreNavigationCommands.MoveTo.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _moveToSelect(viewPosition, revealType) {
        CoreNavigationCommands.MoveToSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _columnSelect(viewPosition, mouseColumn, doColumnSelect) {
        viewPosition = this._validateViewColumn(viewPosition);
        CoreNavigationCommands.ColumnSelect.runCoreEditorCommand(this.viewModel, {
            source: 'mouse',
            position: this._convertViewToModelPosition(viewPosition),
            viewPosition: viewPosition,
            mouseColumn: mouseColumn,
            doColumnSelect: doColumnSelect
        });
    }
    _createCursor(viewPosition, wholeLine) {
        viewPosition = this._validateViewColumn(viewPosition);
        CoreNavigationCommands.CreateCursor.runCoreEditorCommand(this.viewModel, {
            source: 'mouse',
            position: this._convertViewToModelPosition(viewPosition),
            viewPosition: viewPosition,
            wholeLine: wholeLine
        });
    }
    _lastCursorMoveToSelect(viewPosition, revealType) {
        CoreNavigationCommands.LastCursorMoveToSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _wordSelect(viewPosition, revealType) {
        CoreNavigationCommands.WordSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _wordSelectDrag(viewPosition, revealType) {
        CoreNavigationCommands.WordSelectDrag.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _lastCursorWordSelect(viewPosition, revealType) {
        CoreNavigationCommands.LastCursorWordSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _lineSelect(viewPosition, revealType) {
        CoreNavigationCommands.LineSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _lineSelectDrag(viewPosition, revealType) {
        CoreNavigationCommands.LineSelectDrag.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _lastCursorLineSelect(viewPosition, revealType) {
        CoreNavigationCommands.LastCursorLineSelect.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _lastCursorLineSelectDrag(viewPosition, revealType) {
        CoreNavigationCommands.LastCursorLineSelectDrag.runCoreEditorCommand(this.viewModel, this._usualArgs(viewPosition, revealType));
    }
    _selectAll() {
        CoreNavigationCommands.SelectAll.runCoreEditorCommand(this.viewModel, { source: 'mouse' });
    }
    // ----------------------
    _convertViewToModelPosition(viewPosition) {
        return this.viewModel.coordinatesConverter.convertViewPositionToModelPosition(viewPosition);
    }
    emitKeyDown(e) {
        this.userInputEvents.emitKeyDown(e);
    }
    emitKeyUp(e) {
        this.userInputEvents.emitKeyUp(e);
    }
    emitContextMenu(e) {
        this.userInputEvents.emitContextMenu(e);
    }
    emitMouseMove(e) {
        this.userInputEvents.emitMouseMove(e);
    }
    emitMouseLeave(e) {
        this.userInputEvents.emitMouseLeave(e);
    }
    emitMouseUp(e) {
        this.userInputEvents.emitMouseUp(e);
    }
    emitMouseDown(e) {
        this.userInputEvents.emitMouseDown(e);
    }
    emitMouseDrag(e) {
        this.userInputEvents.emitMouseDrag(e);
    }
    emitMouseDrop(e) {
        this.userInputEvents.emitMouseDrop(e);
    }
    emitMouseDropCanceled() {
        this.userInputEvents.emitMouseDropCanceled();
    }
    emitMouseWheel(e) {
        this.userInputEvents.emitMouseWheel(e);
    }
}

export { ViewController };
