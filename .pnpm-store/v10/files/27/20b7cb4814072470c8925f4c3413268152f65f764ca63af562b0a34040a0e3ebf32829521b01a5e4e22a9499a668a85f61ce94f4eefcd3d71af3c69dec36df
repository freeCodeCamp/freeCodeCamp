import { getActiveWindow, addDisposableListener, isHTMLElement } from '../../../../../base/browser/dom.js';
import { createTrustedTypesPolicy } from '../../../../../base/browser/trustedTypes.js';
import { IAccessibilityService } from '../../../../../platform/accessibility/common/accessibility.js';
import { EditorFontLigatures } from '../../../../common/config/editorOptions.js';
import { Range } from '../../../../common/core/range.js';
import { Selection } from '../../../../common/core/selection.js';
import { StringBuilder } from '../../../../common/core/stringBuilder.js';
import { LineDecoration } from '../../../../common/viewLayout/lineDecorations.js';
import { RenderLineInput, renderViewLine } from '../../../../common/viewLayout/viewLineRenderer.js';
import { Disposable, MutableDisposable } from '../../../../../base/common/lifecycle.js';
import { IME } from '../../../../../base/common/ime.js';
import { getColumnOfNodeOffset } from '../../../viewParts/viewLines/viewLine.js';

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
const ttPolicy = createTrustedTypesPolicy('richScreenReaderContent', { createHTML: value => value });
const LINE_NUMBER_ATTRIBUTE = 'data-line-number';
let RichScreenReaderContent = class RichScreenReaderContent extends Disposable {
    constructor(_domNode, _context, _viewController, _accessibilityService) {
        super();
        this._domNode = _domNode;
        this._context = _context;
        this._viewController = _viewController;
        this._accessibilityService = _accessibilityService;
        this._selectionChangeListener = this._register(new MutableDisposable());
        this._accessibilityPageSize = 1;
        this._ignoreSelectionChangeTime = 0;
        this._state = RichScreenReaderState.NULL;
        this._strategy = new RichPagedScreenReaderStrategy();
        this._renderedLines = new Map();
        this._renderedSelection = new Selection(1, 1, 1, 1);
        this.onConfigurationChanged(this._context.configuration.options);
    }
    updateScreenReaderContent(primarySelection) {
        const focusedElement = getActiveWindow().document.activeElement;
        if (!focusedElement || focusedElement !== this._domNode.domNode) {
            return;
        }
        const isScreenReaderOptimized = this._accessibilityService.isScreenReaderOptimized();
        if (isScreenReaderOptimized) {
            const state = this._getScreenReaderContentLineIntervals(primarySelection);
            if (!this._state.equals(state)) {
                this._state = state;
                this._renderedLines = this._renderScreenReaderContent(state);
            }
            if (!this._renderedSelection.equalsSelection(primarySelection)) {
                this._renderedSelection = primarySelection;
                this._setSelectionOnScreenReaderContent(this._context, this._renderedLines, primarySelection);
            }
        }
        else {
            this._state = RichScreenReaderState.NULL;
            this._setIgnoreSelectionChangeTime('setValue');
            this._domNode.domNode.textContent = '';
        }
    }
    updateScrollTop(primarySelection) {
        const intervals = this._state.intervals;
        if (!intervals.length) {
            return;
        }
        const viewLayout = this._context.viewModel.viewLayout;
        const stateStartLineNumber = intervals[0].startLine;
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
            const activeElement = getActiveWindow().document.activeElement;
            const isFocused = activeElement === this._domNode.domNode;
            if (!isFocused) {
                return;
            }
            const isScreenReaderOptimized = this._accessibilityService.isScreenReaderOptimized();
            if (!isScreenReaderOptimized || !IME.enabled) {
                return;
            }
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
            const selection = this._getEditorSelectionFromDomRange();
            if (!selection) {
                return;
            }
            this._viewController.setSelection(selection);
        });
    }
    _renderScreenReaderContent(state) {
        const nodes = [];
        const renderedLines = new Map();
        for (const interval of state.intervals) {
            for (let lineNumber = interval.startLine; lineNumber <= interval.endLine; lineNumber++) {
                const renderedLine = this._renderLine(lineNumber);
                renderedLines.set(lineNumber, renderedLine);
                nodes.push(renderedLine.domNode);
            }
        }
        this._setIgnoreSelectionChangeTime('setValue');
        this._domNode.domNode.replaceChildren(...nodes);
        return renderedLines;
    }
    _renderLine(viewLineNumber) {
        const viewModel = this._context.viewModel;
        const positionLineData = viewModel.getViewLineRenderingData(viewLineNumber);
        const options = this._context.configuration.options;
        const fontInfo = options.get(59 /* EditorOption.fontInfo */);
        const stopRenderingLineAfter = options.get(133 /* EditorOption.stopRenderingLineAfter */);
        const renderControlCharacters = options.get(108 /* EditorOption.renderControlCharacters */);
        const fontLigatures = options.get(60 /* EditorOption.fontLigatures */);
        const disableMonospaceOptimizations = options.get(40 /* EditorOption.disableMonospaceOptimizations */);
        const lineDecorations = LineDecoration.filter(positionLineData.inlineDecorations, viewLineNumber, positionLineData.minColumn, positionLineData.maxColumn);
        const useMonospaceOptimizations = fontInfo.isMonospace && !disableMonospaceOptimizations;
        const useFontLigatures = fontLigatures !== EditorFontLigatures.OFF;
        let renderWhitespace;
        const experimentalWhitespaceRendering = options.get(47 /* EditorOption.experimentalWhitespaceRendering */);
        if (experimentalWhitespaceRendering === 'off') {
            renderWhitespace = options.get(113 /* EditorOption.renderWhitespace */);
        }
        else {
            renderWhitespace = 'none';
        }
        const renderLineInput = new RenderLineInput(useMonospaceOptimizations, fontInfo.canUseHalfwidthRightwardsArrow, positionLineData.content, positionLineData.continuesWithWrappedLine, positionLineData.isBasicASCII, positionLineData.containsRTL, positionLineData.minColumn - 1, positionLineData.tokens, lineDecorations, positionLineData.tabSize, positionLineData.startVisibleColumn, fontInfo.spaceWidth, fontInfo.middotWidth, fontInfo.wsmiddotWidth, stopRenderingLineAfter, renderWhitespace, renderControlCharacters, useFontLigatures, null, null, 0, true);
        const htmlBuilder = new StringBuilder(10000);
        const renderOutput = renderViewLine(renderLineInput, htmlBuilder);
        const html = htmlBuilder.build();
        const trustedhtml = ttPolicy?.createHTML(html) ?? html;
        const lineHeight = viewModel.viewLayout.getLineHeightForLineNumber(viewLineNumber) + 'px';
        const domNode = document.createElement('div');
        domNode.innerHTML = trustedhtml;
        domNode.style.lineHeight = lineHeight;
        domNode.style.height = lineHeight;
        domNode.setAttribute(LINE_NUMBER_ATTRIBUTE, viewLineNumber.toString());
        return new RichRenderedScreenReaderLine(domNode, renderOutput.characterMapping);
    }
    _setSelectionOnScreenReaderContent(context, renderedLines, viewSelection) {
        const activeDocument = getActiveWindow().document;
        const activeDocumentSelection = activeDocument.getSelection();
        if (!activeDocumentSelection) {
            return;
        }
        const startLineNumber = viewSelection.startLineNumber;
        const endLineNumber = viewSelection.endLineNumber;
        const startRenderedLine = renderedLines.get(startLineNumber);
        const endRenderedLine = renderedLines.get(endLineNumber);
        if (!startRenderedLine || !endRenderedLine) {
            return;
        }
        const viewModel = context.viewModel;
        const model = viewModel.model;
        const coordinatesConverter = viewModel.coordinatesConverter;
        const startRange = new Range(startLineNumber, 1, startLineNumber, viewSelection.selectionStartColumn);
        const modelStartRange = coordinatesConverter.convertViewRangeToModelRange(startRange);
        const characterCountForStart = model.getCharacterCountInRange(modelStartRange);
        const endRange = new Range(endLineNumber, 1, endLineNumber, viewSelection.positionColumn);
        const modelEndRange = coordinatesConverter.convertViewRangeToModelRange(endRange);
        const characterCountForEnd = model.getCharacterCountInRange(modelEndRange);
        const startDomPosition = startRenderedLine.characterMapping.getDomPosition(characterCountForStart);
        const endDomPosition = endRenderedLine.characterMapping.getDomPosition(characterCountForEnd);
        const startDomNode = startRenderedLine.domNode.firstChild;
        const endDomNode = endRenderedLine.domNode.firstChild;
        const startChildren = startDomNode.childNodes;
        const endChildren = endDomNode.childNodes;
        const startNode = startChildren.item(startDomPosition.partIndex);
        const endNode = endChildren.item(endDomPosition.partIndex);
        if (!startNode.firstChild || !endNode.firstChild) {
            return;
        }
        this._setIgnoreSelectionChangeTime('setRange');
        activeDocumentSelection.setBaseAndExtent(startNode.firstChild, viewSelection.startColumn === 1 ? 0 : startDomPosition.charIndex + 1, endNode.firstChild, viewSelection.endColumn === 1 ? 0 : endDomPosition.charIndex + 1);
    }
    _getScreenReaderContentLineIntervals(primarySelection) {
        return this._strategy.fromEditorSelection(this._context.viewModel, primarySelection, this._accessibilityPageSize);
    }
    _getEditorSelectionFromDomRange() {
        if (!this._renderedLines) {
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
        const startContainer = range.startContainer;
        const endContainer = range.endContainer;
        const startSpanElement = startContainer.parentElement;
        const endSpanElement = endContainer.parentElement;
        if (!startSpanElement || !isHTMLElement(startSpanElement) || !endSpanElement || !isHTMLElement(endSpanElement)) {
            return;
        }
        const startLineDomNode = startSpanElement.parentElement?.parentElement;
        const endLineDomNode = endSpanElement.parentElement?.parentElement;
        if (!startLineDomNode || !endLineDomNode) {
            return;
        }
        const startLineNumberAttribute = startLineDomNode.getAttribute(LINE_NUMBER_ATTRIBUTE);
        const endLineNumberAttribute = endLineDomNode.getAttribute(LINE_NUMBER_ATTRIBUTE);
        if (!startLineNumberAttribute || !endLineNumberAttribute) {
            return;
        }
        const startLineNumber = parseInt(startLineNumberAttribute);
        const endLineNumber = parseInt(endLineNumberAttribute);
        const startMapping = this._renderedLines.get(startLineNumber)?.characterMapping;
        const endMapping = this._renderedLines.get(endLineNumber)?.characterMapping;
        if (!startMapping || !endMapping) {
            return;
        }
        const startColumn = getColumnOfNodeOffset(startMapping, startSpanElement, range.startOffset);
        const endColumn = getColumnOfNodeOffset(endMapping, endSpanElement, range.endOffset);
        if (selection.direction === 'forward') {
            return new Selection(startLineNumber, startColumn, endLineNumber, endColumn);
        }
        else {
            return new Selection(endLineNumber, endColumn, startLineNumber, startColumn);
        }
    }
};
RichScreenReaderContent = __decorate([
    __param(3, IAccessibilityService)
], RichScreenReaderContent);
class RichRenderedScreenReaderLine {
    constructor(domNode, characterMapping) {
        this.domNode = domNode;
        this.characterMapping = characterMapping;
    }
}
class LineInterval {
    constructor(startLine, endLine) {
        this.startLine = startLine;
        this.endLine = endLine;
    }
}
class RichScreenReaderState {
    constructor(model, intervals) {
        this.intervals = intervals;
        let value = '';
        for (const interval of intervals) {
            for (let lineNumber = interval.startLine; lineNumber <= interval.endLine; lineNumber++) {
                value += model.getLineContent(lineNumber) + '\n';
            }
        }
        this.value = value;
    }
    equals(other) {
        return this.value === other.value;
    }
    static get NULL() {
        const nullModel = {
            getLineContent: () => '',
            getLineCount: () => 1,
            getLineMaxColumn: () => 1,
            getValueInRange: () => '',
            getValueLengthInRange: () => 0,
            modifyPosition: (position, offset) => position
        };
        return new RichScreenReaderState(nullModel, []);
    }
}
class RichPagedScreenReaderStrategy {
    constructor() { }
    _getPageOfLine(lineNumber, linesPerPage) {
        return Math.floor((lineNumber - 1) / linesPerPage);
    }
    _getRangeForPage(context, page, linesPerPage) {
        const offset = page * linesPerPage;
        const startLineNumber = offset + 1;
        const endLineNumber = Math.min(offset + linesPerPage, context.getLineCount());
        return new LineInterval(startLineNumber, endLineNumber);
    }
    fromEditorSelection(context, viewSelection, linesPerPage) {
        const selectionStartPage = this._getPageOfLine(viewSelection.startLineNumber, linesPerPage);
        const selectionStartPageRange = this._getRangeForPage(context, selectionStartPage, linesPerPage);
        const selectionEndPage = this._getPageOfLine(viewSelection.endLineNumber, linesPerPage);
        const selectionEndPageRange = this._getRangeForPage(context, selectionEndPage, linesPerPage);
        const lineIntervals = [{ startLine: selectionStartPageRange.startLine, endLine: selectionStartPageRange.endLine }];
        if (selectionStartPage + 1 < selectionEndPage) {
            lineIntervals.push({ startLine: selectionEndPageRange.startLine, endLine: selectionEndPageRange.endLine });
        }
        return new RichScreenReaderState(context, lineIntervals);
    }
}

export { RichScreenReaderContent };
