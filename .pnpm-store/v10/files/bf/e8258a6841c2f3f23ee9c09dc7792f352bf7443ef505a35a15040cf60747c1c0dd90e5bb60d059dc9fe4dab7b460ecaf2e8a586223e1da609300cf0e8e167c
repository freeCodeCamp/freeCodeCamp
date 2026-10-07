import { getActiveWindow, addDisposableListener } from '../../../../../base/browser/dom.js';
import { IAccessibilityService } from '../../../../../platform/accessibility/common/accessibility.js';
import { Selection } from '../../../../common/core/selection.js';
import { SimplePagedScreenReaderStrategy } from '../screenReaderUtils.js';
import '../../../../common/core/text/positionToOffset.js';
import { Disposable, MutableDisposable } from '../../../../../base/common/lifecycle.js';
import { IME } from '../../../../../base/common/ime.js';
import { PositionOffsetTransformer } from '../../../../common/core/text/positionToOffsetImpl.js';

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
let SimpleScreenReaderContent = class SimpleScreenReaderContent extends Disposable {
    constructor(_domNode, _context, _viewController, _accessibilityService) {
        super();
        this._domNode = _domNode;
        this._context = _context;
        this._viewController = _viewController;
        this._accessibilityService = _accessibilityService;
        this._selectionChangeListener = this._register(new MutableDisposable());
        this._accessibilityPageSize = 1;
        this._ignoreSelectionChangeTime = 0;
        this._strategy = new SimplePagedScreenReaderStrategy();
        this.onConfigurationChanged(this._context.configuration.options);
    }
    updateScreenReaderContent(primarySelection) {
        const domNode = this._domNode.domNode;
        const focusedElement = getActiveWindow().document.activeElement;
        if (!focusedElement || focusedElement !== domNode) {
            return;
        }
        const isScreenReaderOptimized = this._accessibilityService.isScreenReaderOptimized();
        if (isScreenReaderOptimized) {
            this._state = this._getScreenReaderContentState(primarySelection);
            if (domNode.textContent !== this._state.value) {
                this._setIgnoreSelectionChangeTime('setValue');
                domNode.textContent = this._state.value;
            }
            const selection = getActiveWindow().document.getSelection();
            if (!selection) {
                return;
            }
            const data = this._getScreenReaderRange(this._state.selectionStart, this._state.selectionEnd);
            if (!data) {
                return;
            }
            this._setIgnoreSelectionChangeTime('setRange');
            selection.setBaseAndExtent(data.anchorNode, data.anchorOffset, data.focusNode, data.focusOffset);
        }
        else {
            this._state = undefined;
            this._setIgnoreSelectionChangeTime('setValue');
            this._domNode.domNode.textContent = '';
        }
    }
    updateScrollTop(primarySelection) {
        if (!this._state) {
            return;
        }
        const viewLayout = this._context.viewModel.viewLayout;
        const stateStartLineNumber = this._state.startPositionWithinEditor.lineNumber;
        const verticalOffsetOfStateStartLineNumber = viewLayout.getVerticalOffsetForLineNumber(stateStartLineNumber);
        const verticalOffsetOfPositionLineNumber = viewLayout.getVerticalOffsetForLineNumber(primarySelection.positionLineNumber);
        this._domNode.domNode.scrollTop = verticalOffsetOfPositionLineNumber - verticalOffsetOfStateStartLineNumber;
    }
    onFocusChange(newFocusValue) {
        if (newFocusValue) {
            this._selectionChangeListener.value = this._setSelectionChangeListener();
        }
        else {
            this._selectionChangeListener.value = undefined;
        }
    }
    onConfigurationChanged(options) {
        this._accessibilityPageSize = options.get(3 /* EditorOption.accessibilityPageSize */);
    }
    onWillCut() {
        this._setIgnoreSelectionChangeTime('onCut');
    }
    onWillPaste() {
        this._setIgnoreSelectionChangeTime('onWillPaste');
    }
    // --- private methods
    _setIgnoreSelectionChangeTime(reason) {
        this._ignoreSelectionChangeTime = Date.now();
    }
    _setSelectionChangeListener() {
        // See https://github.com/microsoft/vscode/issues/27216 and https://github.com/microsoft/vscode/issues/98256
        // When using a Braille display or NVDA for example, it is possible for users to reposition the
        // system caret. This is reflected in Chrome as a `selectionchange` event and needs to be reflected within the editor.
        // `selectionchange` events often come multiple times for a single logical change
        // so throttle multiple `selectionchange` events that burst in a short period of time.
        let previousSelectionChangeEventTime = 0;
        return addDisposableListener(this._domNode.domNode.ownerDocument, 'selectionchange', () => {
            const isScreenReaderOptimized = this._accessibilityService.isScreenReaderOptimized();
            if (!this._state || !isScreenReaderOptimized || !IME.enabled) {
                return;
            }
            const activeElement = getActiveWindow().document.activeElement;
            const isFocused = activeElement === this._domNode.domNode;
            if (!isFocused) {
                return;
            }
            const selection = getActiveWindow().document.getSelection();
            if (!selection) {
                return;
            }
            const rangeCount = selection.rangeCount;
            if (rangeCount === 0) {
                return;
            }
            const range = selection.getRangeAt(0);
            const now = Date.now();
            const delta1 = now - previousSelectionChangeEventTime;
            previousSelectionChangeEventTime = now;
            if (delta1 < 5) {
                // received another `selectionchange` event within 5ms of the previous `selectionchange` event
                // => ignore it
                return;
            }
            const delta2 = now - this._ignoreSelectionChangeTime;
            this._ignoreSelectionChangeTime = 0;
            if (delta2 < 100) {
                // received a `selectionchange` event within 100ms since we touched the hidden div
                // => ignore it, since we caused it
                return;
            }
            this._viewController.setSelection(this._getEditorSelectionFromDomRange(this._context, this._state, selection.direction, range));
        });
    }
    _getScreenReaderContentState(primarySelection) {
        const state = this._strategy.fromEditorSelection(this._context.viewModel, primarySelection, this._accessibilityPageSize, this._accessibilityService.getAccessibilitySupport() === 0 /* AccessibilitySupport.Unknown */);
        const endPosition = this._context.viewModel.model.getPositionAt(Infinity);
        let value = state.value;
        if (endPosition.column === 1 && primarySelection.getEndPosition().equals(endPosition)) {
            value += '\n';
        }
        state.value = value;
        return state;
    }
    _getScreenReaderRange(selectionOffsetStart, selectionOffsetEnd) {
        const textContent = this._domNode.domNode.firstChild;
        if (!textContent) {
            return;
        }
        const range = new globalThis.Range();
        range.setStart(textContent, selectionOffsetStart);
        range.setEnd(textContent, selectionOffsetEnd);
        return {
            anchorNode: textContent,
            anchorOffset: selectionOffsetStart,
            focusNode: textContent,
            focusOffset: selectionOffsetEnd
        };
    }
    _getEditorSelectionFromDomRange(context, state, direction, range) {
        const viewModel = context.viewModel;
        const model = viewModel.model;
        const coordinatesConverter = viewModel.coordinatesConverter;
        const modelScreenReaderContentStartPositionWithinEditor = coordinatesConverter.convertViewPositionToModelPosition(state.startPositionWithinEditor);
        const offsetOfStartOfScreenReaderContent = model.getOffsetAt(modelScreenReaderContentStartPositionWithinEditor);
        let offsetOfSelectionStart = range.startOffset + offsetOfStartOfScreenReaderContent;
        let offsetOfSelectionEnd = range.endOffset + offsetOfStartOfScreenReaderContent;
        const modelUsesCRLF = model.getEndOfLineSequence() === 1 /* EndOfLineSequence.CRLF */;
        if (modelUsesCRLF) {
            const screenReaderContentText = state.value;
            const offsetTransformer = new PositionOffsetTransformer(screenReaderContentText);
            const positionOfStartWithinText = offsetTransformer.getPosition(range.startOffset);
            const positionOfEndWithinText = offsetTransformer.getPosition(range.endOffset);
            offsetOfSelectionStart += positionOfStartWithinText.lineNumber - 1;
            offsetOfSelectionEnd += positionOfEndWithinText.lineNumber - 1;
        }
        const positionOfSelectionStart = model.getPositionAt(offsetOfSelectionStart);
        const positionOfSelectionEnd = model.getPositionAt(offsetOfSelectionEnd);
        const selectionStart = direction === 'forward' ? positionOfSelectionStart : positionOfSelectionEnd;
        const selectionEnd = direction === 'forward' ? positionOfSelectionEnd : positionOfSelectionStart;
        return Selection.fromPositions(selectionStart, selectionEnd);
    }
};
SimpleScreenReaderContent = __decorate([
    __param(3, IAccessibilityService)
], SimpleScreenReaderContent);

export { SimpleScreenReaderContent };
