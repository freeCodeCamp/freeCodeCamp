import { addDisposableListener, EventType } from '../../../../base/browser/dom.js';
import { createTrustedTypesPolicy } from '../../../../base/browser/trustedTypes.js';
import { equals } from '../../../../base/common/arrays.js';
import { Disposable, DisposableStore } from '../../../../base/common/lifecycle.js';
import { ThemeIcon } from '../../../../base/common/themables.js';
import './stickyScroll.css';
import { getColumnOfNodeOffset } from '../../../browser/viewParts/viewLines/viewLine.js';
import { EmbeddedCodeEditorWidget } from '../../../browser/widget/codeEditor/embeddedCodeEditorWidget.js';
import { Position } from '../../../common/core/position.js';
import { StringBuilder } from '../../../common/core/stringBuilder.js';
import { LineDecoration } from '../../../common/viewLayout/lineDecorations.js';
import { RenderLineInput, renderViewLine } from '../../../common/viewLayout/viewLineRenderer.js';
import { foldingCollapsedIcon, foldingExpandedIcon } from '../../folding/browser/foldingDecorations.js';
import { Emitter } from '../../../../base/common/event.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class StickyScrollWidgetState {
    constructor(startLineNumbers, endLineNumbers, lastLineRelativePosition, showEndForLine = null) {
        this.startLineNumbers = startLineNumbers;
        this.endLineNumbers = endLineNumbers;
        this.lastLineRelativePosition = lastLineRelativePosition;
        this.showEndForLine = showEndForLine;
    }
    equals(other) {
        return !!other
            && this.lastLineRelativePosition === other.lastLineRelativePosition
            && this.showEndForLine === other.showEndForLine
            && equals(this.startLineNumbers, other.startLineNumbers)
            && equals(this.endLineNumbers, other.endLineNumbers);
    }
    static get Empty() {
        return new StickyScrollWidgetState([], [], 0);
    }
}
const _ttPolicy = createTrustedTypesPolicy('stickyScrollViewLayer', { createHTML: value => value });
const STICKY_INDEX_ATTR = 'data-sticky-line-index';
const STICKY_IS_LINE_ATTR = 'data-sticky-is-line';
const STICKY_IS_LINE_NUMBER_ATTR = 'data-sticky-is-line-number';
const STICKY_IS_FOLDING_ICON_ATTR = 'data-sticky-is-folding-icon';
class StickyScrollWidget extends Disposable {
    get height() { return this._height; }
    constructor(editor) {
        super();
        this._foldingIconStore = this._register(new DisposableStore());
        this._rootDomNode = document.createElement('div');
        this._lineNumbersDomNode = document.createElement('div');
        this._linesDomNodeScrollable = document.createElement('div');
        this._linesDomNode = document.createElement('div');
        this._renderedStickyLines = [];
        this._lineNumbers = [];
        this._lastLineRelativePosition = 0;
        this._minContentWidthInPx = 0;
        this._isOnGlyphMargin = false;
        this._height = -1;
        this._onDidChangeStickyScrollHeight = this._register(new Emitter());
        this.onDidChangeStickyScrollHeight = this._onDidChangeStickyScrollHeight.event;
        this._editor = editor;
        this._lineHeight = editor.getOption(75 /* EditorOption.lineHeight */);
        this._lineNumbersDomNode.className = 'sticky-widget-line-numbers';
        this._lineNumbersDomNode.setAttribute('role', 'none');
        this._linesDomNode.className = 'sticky-widget-lines';
        this._linesDomNode.setAttribute('role', 'list');
        this._linesDomNodeScrollable.className = 'sticky-widget-lines-scrollable';
        this._linesDomNodeScrollable.appendChild(this._linesDomNode);
        this._rootDomNode.className = 'sticky-widget';
        this._rootDomNode.classList.toggle('peek', editor instanceof EmbeddedCodeEditorWidget);
        this._rootDomNode.appendChild(this._lineNumbersDomNode);
        this._rootDomNode.appendChild(this._linesDomNodeScrollable);
        this._setHeight(0);
        const updateScrollLeftPosition = () => {
            this._linesDomNode.style.left = this._editor.getOption(131 /* EditorOption.stickyScroll */).scrollWithEditor ? `-${this._editor.getScrollLeft()}px` : '0px';
        };
        this._register(this._editor.onDidChangeConfiguration((e) => {
            if (e.hasChanged(131 /* EditorOption.stickyScroll */)) {
                updateScrollLeftPosition();
            }
            if (e.hasChanged(75 /* EditorOption.lineHeight */)) {
                this._lineHeight = this._editor.getOption(75 /* EditorOption.lineHeight */);
            }
        }));
        this._register(this._editor.onDidScrollChange((e) => {
            if (e.scrollLeftChanged) {
                updateScrollLeftPosition();
            }
            if (e.scrollWidthChanged) {
                this._updateWidgetWidth();
            }
        }));
        this._register(this._editor.onDidChangeModel(() => {
            updateScrollLeftPosition();
            this._updateWidgetWidth();
        }));
        updateScrollLeftPosition();
        this._register(this._editor.onDidLayoutChange((e) => {
            this._updateWidgetWidth();
        }));
        this._updateWidgetWidth();
    }
    get lineNumbers() {
        return this._lineNumbers;
    }
    get lineNumberCount() {
        return this._lineNumbers.length;
    }
    getRenderedStickyLine(lineNumber) {
        return this._renderedStickyLines.find(stickyLine => stickyLine.lineNumber === lineNumber);
    }
    getCurrentLines() {
        return this._lineNumbers;
    }
    setState(state, foldingModel, rebuildFromIndexCandidate) {
        const currentStateAndPreviousStateUndefined = !this._state && !state;
        const currentStateDefinedAndEqualsPreviousState = this._state && this._state.equals(state);
        if (rebuildFromIndexCandidate === undefined && (currentStateAndPreviousStateUndefined || currentStateDefinedAndEqualsPreviousState)) {
            return;
        }
        const data = this._findRenderingData(state);
        const previousLineNumbers = this._lineNumbers;
        this._lineNumbers = data.lineNumbers;
        this._lastLineRelativePosition = data.lastLineRelativePosition;
        const rebuildFromIndex = this._findIndexToRebuildFrom(previousLineNumbers, this._lineNumbers, rebuildFromIndexCandidate);
        this._renderRootNode(this._lineNumbers, this._lastLineRelativePosition, foldingModel, rebuildFromIndex);
        this._state = state;
    }
    _findRenderingData(state) {
        if (!state) {
            return { lineNumbers: [], lastLineRelativePosition: 0 };
        }
        const candidateLineNumbers = [...state.startLineNumbers];
        if (state.showEndForLine !== null) {
            candidateLineNumbers[state.showEndForLine] = state.endLineNumbers[state.showEndForLine];
        }
        let totalHeight = 0;
        for (let i = 0; i < candidateLineNumbers.length; i++) {
            totalHeight += this._editor.getLineHeightForPosition(new Position(candidateLineNumbers[i], 1));
        }
        if (totalHeight === 0) {
            return { lineNumbers: [], lastLineRelativePosition: 0 };
        }
        return { lineNumbers: candidateLineNumbers, lastLineRelativePosition: state.lastLineRelativePosition };
    }
    _findIndexToRebuildFrom(previousLineNumbers, newLineNumbers, rebuildFromIndexCandidate) {
        if (newLineNumbers.length === 0) {
            return 0;
        }
        if (rebuildFromIndexCandidate !== undefined) {
            return rebuildFromIndexCandidate;
        }
        const validIndex = newLineNumbers.findIndex(startLineNumber => !previousLineNumbers.includes(startLineNumber));
        return validIndex === -1 ? 0 : validIndex;
    }
    _updateWidgetWidth() {
        const layoutInfo = this._editor.getLayoutInfo();
        const lineNumbersWidth = layoutInfo.contentLeft;
        this._lineNumbersDomNode.style.width = `${lineNumbersWidth}px`;
        this._linesDomNodeScrollable.style.setProperty('--vscode-editorStickyScroll-scrollableWidth', `${this._editor.getScrollWidth() - layoutInfo.verticalScrollbarWidth}px`);
        this._rootDomNode.style.width = `${layoutInfo.width - layoutInfo.verticalScrollbarWidth}px`;
    }
    _useFoldingOpacityTransition(requireTransitions) {
        this._lineNumbersDomNode.style.setProperty('--vscode-editorStickyScroll-foldingOpacityTransition', `opacity ${requireTransitions ? 0.5 : 0}s`);
    }
    _setFoldingIconsVisibility(allVisible) {
        for (const line of this._renderedStickyLines) {
            const foldingIcon = line.foldingIcon;
            if (!foldingIcon) {
                continue;
            }
            foldingIcon.setVisible(allVisible ? true : foldingIcon.isCollapsed);
        }
    }
    async _renderRootNode(lineNumbers, lastLineRelativePosition, foldingModel, rebuildFromIndex) {
        const viewModel = this._editor._getViewModel();
        if (!viewModel) {
            this._clearWidget();
            return;
        }
        if (lineNumbers.length === 0) {
            this._clearWidget();
            return;
        }
        const renderedStickyLines = [];
        const lastLineNumber = lineNumbers[lineNumbers.length - 1];
        let top = 0;
        for (let i = 0; i < this._renderedStickyLines.length; i++) {
            if (i < rebuildFromIndex) {
                const renderedLine = this._renderedStickyLines[i];
                renderedStickyLines.push(this._updatePosition(renderedLine, top, renderedLine.lineNumber === lastLineNumber));
                top += renderedLine.height;
            }
            else {
                const renderedLine = this._renderedStickyLines[i];
                renderedLine.lineNumberDomNode.remove();
                renderedLine.lineDomNode.remove();
            }
        }
        const layoutInfo = this._editor.getLayoutInfo();
        for (let i = rebuildFromIndex; i < lineNumbers.length; i++) {
            const stickyLine = this._renderChildNode(viewModel, i, lineNumbers[i], top, lastLineNumber === lineNumbers[i], foldingModel, layoutInfo);
            top += stickyLine.height;
            this._linesDomNode.appendChild(stickyLine.lineDomNode);
            this._lineNumbersDomNode.appendChild(stickyLine.lineNumberDomNode);
            renderedStickyLines.push(stickyLine);
        }
        if (foldingModel) {
            this._setFoldingHoverListeners();
            this._useFoldingOpacityTransition(!this._isOnGlyphMargin);
        }
        this._minContentWidthInPx = Math.max(...this._renderedStickyLines.map(l => l.scrollWidth)) + layoutInfo.verticalScrollbarWidth;
        this._renderedStickyLines = renderedStickyLines;
        this._setHeight(top + lastLineRelativePosition);
        this._editor.layoutOverlayWidget(this);
    }
    _clearWidget() {
        for (let i = 0; i < this._renderedStickyLines.length; i++) {
            const stickyLine = this._renderedStickyLines[i];
            stickyLine.lineNumberDomNode.remove();
            stickyLine.lineDomNode.remove();
        }
        this._setHeight(0);
    }
    _setHeight(height) {
        if (this._height === height) {
            return;
        }
        this._height = height;
        if (this._height === 0) {
            this._rootDomNode.style.display = 'none';
        }
        else {
            this._rootDomNode.style.display = 'block';
            this._lineNumbersDomNode.style.height = `${this._height}px`;
            this._linesDomNodeScrollable.style.height = `${this._height}px`;
            this._rootDomNode.style.height = `${this._height}px`;
        }
        this._onDidChangeStickyScrollHeight.fire({ height: this._height });
    }
    _setFoldingHoverListeners() {
        const showFoldingControls = this._editor.getOption(126 /* EditorOption.showFoldingControls */);
        if (showFoldingControls !== 'mouseover') {
            return;
        }
        this._foldingIconStore.clear();
        this._foldingIconStore.add(addDisposableListener(this._lineNumbersDomNode, EventType.MOUSE_ENTER, () => {
            this._isOnGlyphMargin = true;
            this._setFoldingIconsVisibility(true);
        }));
        this._foldingIconStore.add(addDisposableListener(this._lineNumbersDomNode, EventType.MOUSE_LEAVE, () => {
            this._isOnGlyphMargin = false;
            this._useFoldingOpacityTransition(true);
            this._setFoldingIconsVisibility(false);
        }));
    }
    _renderChildNode(viewModel, index, line, top, isLastLine, foldingModel, layoutInfo) {
        const viewLineNumber = viewModel.coordinatesConverter.convertModelPositionToViewPosition(new Position(line, 1)).lineNumber;
        const lineRenderingData = viewModel.getViewLineRenderingData(viewLineNumber);
        const lineNumberOption = this._editor.getOption(76 /* EditorOption.lineNumbers */);
        const verticalScrollbarSize = this._editor.getOption(117 /* EditorOption.scrollbar */).verticalScrollbarSize;
        let actualInlineDecorations;
        try {
            actualInlineDecorations = LineDecoration.filter(lineRenderingData.inlineDecorations, viewLineNumber, lineRenderingData.minColumn, lineRenderingData.maxColumn);
        }
        catch (err) {
            actualInlineDecorations = [];
        }
        const lineHeight = this._editor.getLineHeightForPosition(new Position(line, 1));
        const textDirection = viewModel.getTextDirection(line);
        const renderLineInput = new RenderLineInput(true, true, lineRenderingData.content, lineRenderingData.continuesWithWrappedLine, lineRenderingData.isBasicASCII, lineRenderingData.containsRTL, 0, lineRenderingData.tokens, actualInlineDecorations, lineRenderingData.tabSize, lineRenderingData.startVisibleColumn, 1, 1, 1, 500, 'none', true, true, null, textDirection, verticalScrollbarSize);
        const sb = new StringBuilder(2000);
        const renderOutput = renderViewLine(renderLineInput, sb);
        let newLine;
        if (_ttPolicy) {
            newLine = _ttPolicy.createHTML(sb.build());
        }
        else {
            newLine = sb.build();
        }
        const lineHTMLNode = document.createElement('span');
        lineHTMLNode.setAttribute(STICKY_INDEX_ATTR, String(index));
        lineHTMLNode.setAttribute(STICKY_IS_LINE_ATTR, '');
        lineHTMLNode.setAttribute('role', 'listitem');
        lineHTMLNode.tabIndex = 0;
        lineHTMLNode.className = 'sticky-line-content';
        lineHTMLNode.classList.add(`stickyLine${line}`);
        lineHTMLNode.style.lineHeight = `${lineHeight}px`;
        lineHTMLNode.innerHTML = newLine;
        const lineNumberHTMLNode = document.createElement('span');
        lineNumberHTMLNode.setAttribute(STICKY_INDEX_ATTR, String(index));
        lineNumberHTMLNode.setAttribute(STICKY_IS_LINE_NUMBER_ATTR, '');
        lineNumberHTMLNode.className = 'sticky-line-number';
        lineNumberHTMLNode.style.lineHeight = `${lineHeight}px`;
        const lineNumbersWidth = layoutInfo.contentLeft;
        lineNumberHTMLNode.style.width = `${lineNumbersWidth}px`;
        const innerLineNumberHTML = document.createElement('span');
        if (lineNumberOption.renderType === 1 /* RenderLineNumbersType.On */ || lineNumberOption.renderType === 3 /* RenderLineNumbersType.Interval */ && line % 10 === 0) {
            innerLineNumberHTML.innerText = line.toString();
        }
        else if (lineNumberOption.renderType === 2 /* RenderLineNumbersType.Relative */) {
            innerLineNumberHTML.innerText = Math.abs(line - this._editor.getPosition().lineNumber).toString();
        }
        innerLineNumberHTML.className = 'sticky-line-number-inner';
        innerLineNumberHTML.style.width = `${layoutInfo.lineNumbersWidth}px`;
        innerLineNumberHTML.style.paddingLeft = `${layoutInfo.lineNumbersLeft}px`;
        lineNumberHTMLNode.appendChild(innerLineNumberHTML);
        const foldingIcon = this._renderFoldingIconForLine(foldingModel, line);
        if (foldingIcon) {
            lineNumberHTMLNode.appendChild(foldingIcon.domNode);
            foldingIcon.domNode.style.left = `${layoutInfo.lineNumbersWidth + layoutInfo.lineNumbersLeft}px`;
            foldingIcon.domNode.style.lineHeight = `${lineHeight}px`;
        }
        this._editor.applyFontInfo(lineHTMLNode);
        this._editor.applyFontInfo(lineNumberHTMLNode);
        lineNumberHTMLNode.style.lineHeight = `${lineHeight}px`;
        lineHTMLNode.style.lineHeight = `${lineHeight}px`;
        lineNumberHTMLNode.style.height = `${lineHeight}px`;
        lineHTMLNode.style.height = `${lineHeight}px`;
        const renderedLine = new RenderedStickyLine(index, line, lineHTMLNode, lineNumberHTMLNode, foldingIcon, renderOutput.characterMapping, lineHTMLNode.scrollWidth, lineHeight);
        return this._updatePosition(renderedLine, top, isLastLine);
    }
    _updatePosition(stickyLine, top, isLastLine) {
        const lineHTMLNode = stickyLine.lineDomNode;
        const lineNumberHTMLNode = stickyLine.lineNumberDomNode;
        if (isLastLine) {
            const zIndex = '0';
            lineHTMLNode.style.zIndex = zIndex;
            lineNumberHTMLNode.style.zIndex = zIndex;
            const updatedTop = `${top + this._lastLineRelativePosition + (stickyLine.foldingIcon?.isCollapsed ? 1 : 0)}px`;
            lineHTMLNode.style.top = updatedTop;
            lineNumberHTMLNode.style.top = updatedTop;
        }
        else {
            const zIndex = '1';
            lineHTMLNode.style.zIndex = zIndex;
            lineNumberHTMLNode.style.zIndex = zIndex;
            lineHTMLNode.style.top = `${top}px`;
            lineNumberHTMLNode.style.top = `${top}px`;
        }
        return stickyLine;
    }
    _renderFoldingIconForLine(foldingModel, line) {
        const showFoldingControls = this._editor.getOption(126 /* EditorOption.showFoldingControls */);
        if (!foldingModel || showFoldingControls === 'never') {
            return;
        }
        const foldingRegions = foldingModel.regions;
        const indexOfFoldingRegion = foldingRegions.findRange(line);
        const startLineNumber = foldingRegions.getStartLineNumber(indexOfFoldingRegion);
        const isFoldingScope = line === startLineNumber;
        if (!isFoldingScope) {
            return;
        }
        const isCollapsed = foldingRegions.isCollapsed(indexOfFoldingRegion);
        const foldingIcon = new StickyFoldingIcon(isCollapsed, startLineNumber, foldingRegions.getEndLineNumber(indexOfFoldingRegion), this._lineHeight);
        foldingIcon.setVisible(this._isOnGlyphMargin ? true : (isCollapsed || showFoldingControls === 'always'));
        foldingIcon.domNode.setAttribute(STICKY_IS_FOLDING_ICON_ATTR, '');
        return foldingIcon;
    }
    getId() {
        return 'editor.contrib.stickyScrollWidget';
    }
    getDomNode() {
        return this._rootDomNode;
    }
    getPosition() {
        return {
            preference: 2 /* OverlayWidgetPositionPreference.TOP_CENTER */,
            stackOridinal: 10,
        };
    }
    getMinContentWidthInPx() {
        return this._minContentWidthInPx;
    }
    focusLineWithIndex(index) {
        if (0 <= index && index < this._renderedStickyLines.length) {
            this._renderedStickyLines[index].lineDomNode.focus();
        }
    }
    /**
     * Given a leaf dom node, tries to find the editor position.
     */
    getEditorPositionFromNode(spanDomNode) {
        if (!spanDomNode || spanDomNode.children.length > 0) {
            // This is not a leaf node
            return null;
        }
        const renderedStickyLine = this._getRenderedStickyLineFromChildDomNode(spanDomNode);
        if (!renderedStickyLine) {
            return null;
        }
        const column = getColumnOfNodeOffset(renderedStickyLine.characterMapping, spanDomNode, 0);
        return new Position(renderedStickyLine.lineNumber, column);
    }
    getLineNumberFromChildDomNode(domNode) {
        return this._getRenderedStickyLineFromChildDomNode(domNode)?.lineNumber ?? null;
    }
    _getRenderedStickyLineFromChildDomNode(domNode) {
        const index = this.getLineIndexFromChildDomNode(domNode);
        if (index === null || index < 0 || index >= this._renderedStickyLines.length) {
            return null;
        }
        return this._renderedStickyLines[index];
    }
    /**
     * Given a child dom node, tries to find the line number attribute that was stored in the node.
     * @returns the attribute value or null if none is found.
     */
    getLineIndexFromChildDomNode(domNode) {
        const lineIndex = this._getAttributeValue(domNode, STICKY_INDEX_ATTR);
        return lineIndex ? parseInt(lineIndex, 10) : null;
    }
    /**
     * Given a child dom node, tries to find if it is (contained in) a sticky line.
     * @returns a boolean.
     */
    isInStickyLine(domNode) {
        const isInLine = this._getAttributeValue(domNode, STICKY_IS_LINE_ATTR);
        return isInLine !== undefined;
    }
    /**
     * Given a child dom node, tries to find if this dom node is (contained in) a sticky folding icon.
     * @returns a boolean.
     */
    isInFoldingIconDomNode(domNode) {
        const isInFoldingIcon = this._getAttributeValue(domNode, STICKY_IS_FOLDING_ICON_ATTR);
        return isInFoldingIcon !== undefined;
    }
    /**
     * Given the dom node, finds if it or its parent sequence contains the given attribute.
     * @returns the attribute value or undefined.
     */
    _getAttributeValue(domNode, attribute) {
        while (domNode && domNode !== this._rootDomNode) {
            const line = domNode.getAttribute(attribute);
            if (line !== null) {
                return line;
            }
            domNode = domNode.parentElement;
        }
        return;
    }
}
class RenderedStickyLine {
    constructor(index, lineNumber, lineDomNode, lineNumberDomNode, foldingIcon, characterMapping, scrollWidth, height) {
        this.index = index;
        this.lineNumber = lineNumber;
        this.lineDomNode = lineDomNode;
        this.lineNumberDomNode = lineNumberDomNode;
        this.foldingIcon = foldingIcon;
        this.characterMapping = characterMapping;
        this.scrollWidth = scrollWidth;
        this.height = height;
    }
}
class StickyFoldingIcon {
    constructor(isCollapsed, foldingStartLine, foldingEndLine, dimension) {
        this.isCollapsed = isCollapsed;
        this.foldingStartLine = foldingStartLine;
        this.foldingEndLine = foldingEndLine;
        this.dimension = dimension;
        this.domNode = document.createElement('div');
        this.domNode.style.width = `26px`;
        this.domNode.style.height = `${dimension}px`;
        this.domNode.style.lineHeight = `${dimension}px`;
        this.domNode.className = ThemeIcon.asClassName(isCollapsed ? foldingCollapsedIcon : foldingExpandedIcon);
    }
    setVisible(visible) {
        this.domNode.style.cursor = visible ? 'pointer' : 'default';
        this.domNode.style.opacity = visible ? '1' : '0';
    }
}

export { StickyScrollWidget, StickyScrollWidgetState };
