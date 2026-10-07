import { isFirefox, isSafari, isWebKit } from '../../../../base/browser/browser.js';
import { createFastDomNode } from '../../../../base/browser/fastDomNode.js';
import { isNative, isLinux } from '../../../../base/common/platform.js';
import { RangeUtil } from './rangeUtil.js';
import { VisibleRanges, FloatHorizontalRange } from '../../view/renderingContext.js';
import { LineDecoration } from '../../../common/viewLayout/lineDecorations.js';
import { RenderLineInput, renderViewLine, DomPosition } from '../../../common/viewLayout/viewLineRenderer.js';
import { isHighContrast } from '../../../../platform/theme/common/theme.js';
import { EditorFontLigatures } from '../../../common/config/editorOptions.js';
import { OffsetRange } from '../../../common/core/ranges/offsetRange.js';
import { TextDirection } from '../../../common/model.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const canUseFastRenderedViewLine = (function () {
    if (isNative) {
        // In VSCode we know very well when the zoom level changes
        return true;
    }
    if (isLinux || isFirefox || isSafari) {
        // On Linux, it appears that zooming affects char widths (in pixels), which is unexpected.
        // --
        // Even though we read character widths correctly, having read them at a specific zoom level
        // does not mean they are the same at the current zoom level.
        // --
        // This could be improved if we ever figure out how to get an event when browsers zoom,
        // but until then we have to stick with reading client rects.
        // --
        // The same has been observed with Firefox on Windows7
        // --
        // The same has been oversved with Safari
        return false;
    }
    return true;
})();
let monospaceAssumptionsAreValid = true;
class ViewLine {
    static { this.CLASS_NAME = 'view-line'; }
    constructor(_viewGpuContext, options) {
        this._viewGpuContext = _viewGpuContext;
        this._options = options;
        this._isMaybeInvalid = true;
        this._renderedViewLine = null;
    }
    // --- begin IVisibleLineData
    getDomNode() {
        if (this._renderedViewLine && this._renderedViewLine.domNode) {
            return this._renderedViewLine.domNode.domNode;
        }
        return null;
    }
    setDomNode(domNode) {
        if (this._renderedViewLine) {
            this._renderedViewLine.domNode = createFastDomNode(domNode);
        }
        else {
            throw new Error('I have no rendered view line to set the dom node to...');
        }
    }
    onContentChanged() {
        this._isMaybeInvalid = true;
    }
    onTokensChanged() {
        this._isMaybeInvalid = true;
    }
    onDecorationsChanged() {
        this._isMaybeInvalid = true;
    }
    onOptionsChanged(newOptions) {
        this._isMaybeInvalid = true;
        this._options = newOptions;
    }
    onSelectionChanged() {
        if (isHighContrast(this._options.themeType) || this._renderedViewLine?.input.renderWhitespace === 2 /* RenderWhitespace.Selection */) {
            this._isMaybeInvalid = true;
            return true;
        }
        return false;
    }
    renderLine(lineNumber, deltaTop, lineHeight, viewportData, sb) {
        if (this._options.useGpu && this._viewGpuContext?.canRender(this._options, viewportData, lineNumber)) {
            this._renderedViewLine?.domNode?.domNode.remove();
            this._renderedViewLine = null;
            return false;
        }
        if (this._isMaybeInvalid === false) {
            // it appears that nothing relevant has changed
            return false;
        }
        this._isMaybeInvalid = false;
        const lineData = viewportData.getViewLineRenderingData(lineNumber);
        const options = this._options;
        const actualInlineDecorations = LineDecoration.filter(lineData.inlineDecorations, lineNumber, lineData.minColumn, lineData.maxColumn);
        const renderWhitespace = (lineData.hasVariableFonts || options.experimentalWhitespaceRendering === 'off') ? options.renderWhitespace : 'none';
        const allowFastRendering = !lineData.hasVariableFonts;
        // Only send selection information when needed for rendering whitespace
        let selectionsOnLine = null;
        if (isHighContrast(options.themeType) || renderWhitespace === 'selection') {
            const selections = viewportData.selections;
            for (const selection of selections) {
                if (selection.endLineNumber < lineNumber || selection.startLineNumber > lineNumber) {
                    // Selection does not intersect line
                    continue;
                }
                const startColumn = (selection.startLineNumber === lineNumber ? selection.startColumn : lineData.minColumn);
                const endColumn = (selection.endLineNumber === lineNumber ? selection.endColumn : lineData.maxColumn);
                if (startColumn < endColumn) {
                    if (isHighContrast(options.themeType)) {
                        actualInlineDecorations.push(new LineDecoration(startColumn, endColumn, 'inline-selected-text', 0 /* InlineDecorationType.Regular */));
                    }
                    if (renderWhitespace === 'selection') {
                        if (!selectionsOnLine) {
                            selectionsOnLine = [];
                        }
                        selectionsOnLine.push(new OffsetRange(startColumn - 1, endColumn - 1));
                    }
                }
            }
        }
        const renderLineInput = new RenderLineInput(options.useMonospaceOptimizations, options.canUseHalfwidthRightwardsArrow, lineData.content, lineData.continuesWithWrappedLine, lineData.isBasicASCII, lineData.containsRTL, lineData.minColumn - 1, lineData.tokens, actualInlineDecorations, lineData.tabSize, lineData.startVisibleColumn, options.spaceWidth, options.middotWidth, options.wsmiddotWidth, options.stopRenderingLineAfter, renderWhitespace, options.renderControlCharacters, options.fontLigatures !== EditorFontLigatures.OFF, selectionsOnLine, lineData.textDirection, options.verticalScrollbarSize);
        if (this._renderedViewLine && this._renderedViewLine.input.equals(renderLineInput)) {
            // no need to do anything, we have the same render input
            return false;
        }
        sb.appendString('<div ');
        if (lineData.textDirection === TextDirection.RTL) {
            sb.appendString('dir="rtl" ');
        }
        else if (lineData.containsRTL) {
            sb.appendString('dir="ltr" ');
        }
        sb.appendString('style="top:');
        sb.appendString(String(deltaTop));
        sb.appendString('px;height:');
        sb.appendString(String(lineHeight));
        sb.appendString('px;line-height:');
        sb.appendString(String(lineHeight));
        if (lineData.textDirection === TextDirection.RTL) {
            sb.appendString('px;padding-right:');
            sb.appendString(String(options.verticalScrollbarSize));
        }
        sb.appendString('px;" class="');
        sb.appendString(ViewLine.CLASS_NAME);
        sb.appendString('">');
        const output = renderViewLine(renderLineInput, sb);
        sb.appendString('</div>');
        let renderedViewLine = null;
        if (allowFastRendering
            && monospaceAssumptionsAreValid
            && canUseFastRenderedViewLine
            && lineData.isBasicASCII
            && renderLineInput.isLTR
            && options.useMonospaceOptimizations
            && output.containsForeignElements === 0 /* ForeignElementType.None */) {
            renderedViewLine = new FastRenderedViewLine(this._renderedViewLine ? this._renderedViewLine.domNode : null, renderLineInput, output.characterMapping);
        }
        if (!renderedViewLine) {
            renderedViewLine = createRenderedLine(this._renderedViewLine ? this._renderedViewLine.domNode : null, renderLineInput, output.characterMapping, output.containsForeignElements);
        }
        this._renderedViewLine = renderedViewLine;
        return true;
    }
    layoutLine(lineNumber, deltaTop, lineHeight) {
        if (this._renderedViewLine && this._renderedViewLine.domNode) {
            this._renderedViewLine.domNode.setTop(deltaTop);
            this._renderedViewLine.domNode.setHeight(lineHeight);
            this._renderedViewLine.domNode.setLineHeight(lineHeight);
        }
    }
    // --- end IVisibleLineData
    isRenderedRTL() {
        if (!this._renderedViewLine) {
            return false;
        }
        return this._renderedViewLine.input.textDirection === TextDirection.RTL;
    }
    getWidth(context) {
        if (!this._renderedViewLine) {
            return 0;
        }
        return this._renderedViewLine.getWidth(context);
    }
    getWidthIsFast() {
        if (!this._renderedViewLine) {
            return true;
        }
        return this._renderedViewLine.getWidthIsFast();
    }
    needsMonospaceFontCheck() {
        if (!this._renderedViewLine) {
            return false;
        }
        return (this._renderedViewLine instanceof FastRenderedViewLine);
    }
    monospaceAssumptionsAreValid() {
        if (!this._renderedViewLine) {
            return monospaceAssumptionsAreValid;
        }
        if (this._renderedViewLine instanceof FastRenderedViewLine) {
            return this._renderedViewLine.monospaceAssumptionsAreValid();
        }
        return monospaceAssumptionsAreValid;
    }
    onMonospaceAssumptionsInvalidated() {
        if (this._renderedViewLine && this._renderedViewLine instanceof FastRenderedViewLine) {
            this._renderedViewLine = this._renderedViewLine.toSlowRenderedLine();
        }
    }
    getVisibleRangesForRange(lineNumber, startColumn, endColumn, context) {
        if (!this._renderedViewLine) {
            return null;
        }
        startColumn = Math.min(this._renderedViewLine.input.lineContent.length + 1, Math.max(1, startColumn));
        endColumn = Math.min(this._renderedViewLine.input.lineContent.length + 1, Math.max(1, endColumn));
        const stopRenderingLineAfter = this._renderedViewLine.input.stopRenderingLineAfter;
        if (stopRenderingLineAfter !== -1 && startColumn > stopRenderingLineAfter + 1 && endColumn > stopRenderingLineAfter + 1) {
            // This range is obviously not visible
            return new VisibleRanges(true, [new FloatHorizontalRange(this.getWidth(context), 0)]);
        }
        if (stopRenderingLineAfter !== -1 && startColumn > stopRenderingLineAfter + 1) {
            startColumn = stopRenderingLineAfter + 1;
        }
        if (stopRenderingLineAfter !== -1 && endColumn > stopRenderingLineAfter + 1) {
            endColumn = stopRenderingLineAfter + 1;
        }
        const horizontalRanges = this._renderedViewLine.getVisibleRangesForRange(lineNumber, startColumn, endColumn, context);
        if (horizontalRanges && horizontalRanges.length > 0) {
            return new VisibleRanges(false, horizontalRanges);
        }
        return null;
    }
    getColumnOfNodeOffset(spanNode, offset) {
        if (!this._renderedViewLine) {
            return 1;
        }
        return this._renderedViewLine.getColumnOfNodeOffset(spanNode, offset);
    }
}
/**
 * A rendered line which is guaranteed to contain only regular ASCII and is rendered with a monospace font.
 */
class FastRenderedViewLine {
    constructor(domNode, renderLineInput, characterMapping) {
        this._cachedWidth = -1;
        this.domNode = domNode;
        this.input = renderLineInput;
        const keyColumnCount = Math.floor(renderLineInput.lineContent.length / 300 /* Constants.MaxMonospaceDistance */);
        if (keyColumnCount > 0) {
            this._keyColumnPixelOffsetCache = new Float32Array(keyColumnCount);
            for (let i = 0; i < keyColumnCount; i++) {
                this._keyColumnPixelOffsetCache[i] = -1;
            }
        }
        else {
            this._keyColumnPixelOffsetCache = null;
        }
        this._characterMapping = characterMapping;
        this._charWidth = renderLineInput.spaceWidth;
    }
    getWidth(context) {
        if (!this.domNode || this.input.lineContent.length < 300 /* Constants.MaxMonospaceDistance */) {
            const horizontalOffset = this._characterMapping.getHorizontalOffset(this._characterMapping.length);
            return Math.round(this._charWidth * horizontalOffset);
        }
        if (this._cachedWidth === -1) {
            this._cachedWidth = this._getReadingTarget(this.domNode).offsetWidth;
            context?.markDidDomLayout();
        }
        return this._cachedWidth;
    }
    getWidthIsFast() {
        return (this.input.lineContent.length < 300 /* Constants.MaxMonospaceDistance */) || this._cachedWidth !== -1;
    }
    monospaceAssumptionsAreValid() {
        if (!this.domNode) {
            return monospaceAssumptionsAreValid;
        }
        if (this.input.lineContent.length < 300 /* Constants.MaxMonospaceDistance */) {
            const expectedWidth = this.getWidth(null);
            const actualWidth = this.domNode.domNode.firstChild.offsetWidth;
            if (Math.abs(expectedWidth - actualWidth) >= 2) {
                // more than 2px off
                console.warn(`monospace assumptions have been violated, therefore disabling monospace optimizations!`);
                monospaceAssumptionsAreValid = false;
            }
        }
        return monospaceAssumptionsAreValid;
    }
    toSlowRenderedLine() {
        return createRenderedLine(this.domNode, this.input, this._characterMapping, 0 /* ForeignElementType.None */);
    }
    getVisibleRangesForRange(lineNumber, startColumn, endColumn, context) {
        const startPosition = this._getColumnPixelOffset(lineNumber, startColumn, context);
        const endPosition = this._getColumnPixelOffset(lineNumber, endColumn, context);
        return [new FloatHorizontalRange(startPosition, endPosition - startPosition)];
    }
    _getColumnPixelOffset(lineNumber, column, context) {
        if (column <= 300 /* Constants.MaxMonospaceDistance */) {
            const horizontalOffset = this._characterMapping.getHorizontalOffset(column);
            return this._charWidth * horizontalOffset;
        }
        const keyColumnOrdinal = Math.floor((column - 1) / 300 /* Constants.MaxMonospaceDistance */) - 1;
        const keyColumn = (keyColumnOrdinal + 1) * 300 /* Constants.MaxMonospaceDistance */ + 1;
        let keyColumnPixelOffset = -1;
        if (this._keyColumnPixelOffsetCache) {
            keyColumnPixelOffset = this._keyColumnPixelOffsetCache[keyColumnOrdinal];
            if (keyColumnPixelOffset === -1) {
                keyColumnPixelOffset = this._actualReadPixelOffset(lineNumber, keyColumn, context);
                this._keyColumnPixelOffsetCache[keyColumnOrdinal] = keyColumnPixelOffset;
            }
        }
        if (keyColumnPixelOffset === -1) {
            // Could not read actual key column pixel offset
            const horizontalOffset = this._characterMapping.getHorizontalOffset(column);
            return this._charWidth * horizontalOffset;
        }
        const keyColumnHorizontalOffset = this._characterMapping.getHorizontalOffset(keyColumn);
        const horizontalOffset = this._characterMapping.getHorizontalOffset(column);
        return keyColumnPixelOffset + this._charWidth * (horizontalOffset - keyColumnHorizontalOffset);
    }
    _getReadingTarget(myDomNode) {
        return myDomNode.domNode.firstChild;
    }
    _actualReadPixelOffset(lineNumber, column, context) {
        if (!this.domNode) {
            return -1;
        }
        const domPosition = this._characterMapping.getDomPosition(column);
        const r = RangeUtil.readHorizontalRanges(this._getReadingTarget(this.domNode), domPosition.partIndex, domPosition.charIndex, domPosition.partIndex, domPosition.charIndex, context);
        if (!r || r.length === 0) {
            return -1;
        }
        return r[0].left;
    }
    getColumnOfNodeOffset(spanNode, offset) {
        return getColumnOfNodeOffset(this._characterMapping, spanNode, offset);
    }
}
/**
 * Every time we render a line, we save what we have rendered in an instance of this class.
 */
class RenderedViewLine {
    constructor(domNode, renderLineInput, characterMapping, containsForeignElements) {
        this.domNode = domNode;
        this.input = renderLineInput;
        this._characterMapping = characterMapping;
        this._isWhitespaceOnly = /^\s*$/.test(renderLineInput.lineContent);
        this._containsForeignElements = containsForeignElements;
        this._cachedWidth = -1;
        this._pixelOffsetCache = null;
        if (renderLineInput.isLTR) {
            this._pixelOffsetCache = new Float32Array(Math.max(2, this._characterMapping.length + 1));
            for (let column = 0, len = this._characterMapping.length; column <= len; column++) {
                this._pixelOffsetCache[column] = -1;
            }
        }
    }
    // --- Reading from the DOM methods
    _getReadingTarget(myDomNode) {
        return myDomNode.domNode.firstChild;
    }
    /**
     * Width of the line in pixels
     */
    getWidth(context) {
        if (!this.domNode) {
            return 0;
        }
        if (this._cachedWidth === -1) {
            this._cachedWidth = this._getReadingTarget(this.domNode).offsetWidth;
            context?.markDidDomLayout();
        }
        return this._cachedWidth;
    }
    getWidthIsFast() {
        if (this._cachedWidth === -1) {
            return false;
        }
        return true;
    }
    /**
     * Visible ranges for a model range
     */
    getVisibleRangesForRange(lineNumber, startColumn, endColumn, context) {
        if (!this.domNode) {
            return null;
        }
        if (this._pixelOffsetCache !== null) {
            // the text is guaranteed to be entirely LTR
            const startOffset = this._readPixelOffset(this.domNode, lineNumber, startColumn, context);
            if (startOffset === -1) {
                return null;
            }
            const endOffset = this._readPixelOffset(this.domNode, lineNumber, endColumn, context);
            if (endOffset === -1) {
                return null;
            }
            return [new FloatHorizontalRange(startOffset, endOffset - startOffset)];
        }
        return this._readVisibleRangesForRange(this.domNode, lineNumber, startColumn, endColumn, context);
    }
    _readVisibleRangesForRange(domNode, lineNumber, startColumn, endColumn, context) {
        if (startColumn === endColumn) {
            const pixelOffset = this._readPixelOffset(domNode, lineNumber, startColumn, context);
            if (pixelOffset === -1) {
                return null;
            }
            else {
                return [new FloatHorizontalRange(pixelOffset, 0)];
            }
        }
        else {
            return this._readRawVisibleRangesForRange(domNode, startColumn, endColumn, context);
        }
    }
    _readPixelOffset(domNode, lineNumber, column, context) {
        if (this.input.isLTR && this._characterMapping.length === 0) {
            // This line has no content
            if (this._containsForeignElements === 0 /* ForeignElementType.None */) {
                // We can assume the line is really empty
                return 0;
            }
            if (this._containsForeignElements === 2 /* ForeignElementType.After */) {
                // We have foreign elements after the (empty) line
                return 0;
            }
            if (this._containsForeignElements === 1 /* ForeignElementType.Before */) {
                // We have foreign elements before the (empty) line
                return this.getWidth(context);
            }
            // We have foreign elements before & after the (empty) line
            const readingTarget = this._getReadingTarget(domNode);
            if (readingTarget.firstChild) {
                context.markDidDomLayout();
                return readingTarget.firstChild.offsetWidth;
            }
            else {
                return 0;
            }
        }
        if (this._pixelOffsetCache !== null) {
            // the text is guaranteed to be LTR
            const cachedPixelOffset = this._pixelOffsetCache[column];
            if (cachedPixelOffset !== -1) {
                return cachedPixelOffset;
            }
            const result = this._actualReadPixelOffset(domNode, lineNumber, column, context);
            this._pixelOffsetCache[column] = result;
            return result;
        }
        return this._actualReadPixelOffset(domNode, lineNumber, column, context);
    }
    _actualReadPixelOffset(domNode, lineNumber, column, context) {
        if (this._characterMapping.length === 0) {
            // This line has no content
            const r = RangeUtil.readHorizontalRanges(this._getReadingTarget(domNode), 0, 0, 0, 0, context);
            if (!r || r.length === 0) {
                return -1;
            }
            return r[0].left;
        }
        if (this.input.isLTR && column === this._characterMapping.length && this._isWhitespaceOnly && this._containsForeignElements === 0 /* ForeignElementType.None */) {
            // This branch helps in the case of whitespace only lines which have a width set
            return this.getWidth(context);
        }
        const domPosition = this._characterMapping.getDomPosition(column);
        const r = RangeUtil.readHorizontalRanges(this._getReadingTarget(domNode), domPosition.partIndex, domPosition.charIndex, domPosition.partIndex, domPosition.charIndex, context);
        if (!r || r.length === 0) {
            return -1;
        }
        const result = r[0].left;
        if (this.input.isBasicASCII) {
            const horizontalOffset = this._characterMapping.getHorizontalOffset(column);
            const expectedResult = Math.round(this.input.spaceWidth * horizontalOffset);
            if (Math.abs(expectedResult - result) <= 1) {
                return expectedResult;
            }
        }
        return result;
    }
    _readRawVisibleRangesForRange(domNode, startColumn, endColumn, context) {
        if (this.input.isLTR && startColumn === 1 && endColumn === this._characterMapping.length) {
            // This branch helps IE with bidi text & gives a performance boost to other browsers when reading visible ranges for an entire line
            return [new FloatHorizontalRange(0, this.getWidth(context))];
        }
        const startDomPosition = this._characterMapping.getDomPosition(startColumn);
        const endDomPosition = this._characterMapping.getDomPosition(endColumn);
        return RangeUtil.readHorizontalRanges(this._getReadingTarget(domNode), startDomPosition.partIndex, startDomPosition.charIndex, endDomPosition.partIndex, endDomPosition.charIndex, context);
    }
    /**
     * Returns the column for the text found at a specific offset inside a rendered dom node
     */
    getColumnOfNodeOffset(spanNode, offset) {
        return getColumnOfNodeOffset(this._characterMapping, spanNode, offset);
    }
}
class WebKitRenderedViewLine extends RenderedViewLine {
    _readVisibleRangesForRange(domNode, lineNumber, startColumn, endColumn, context) {
        const output = super._readVisibleRangesForRange(domNode, lineNumber, startColumn, endColumn, context);
        if (!output || output.length === 0 || startColumn === endColumn || (startColumn === 1 && endColumn === this._characterMapping.length)) {
            return output;
        }
        // WebKit is buggy and returns an expanded range (to contain words in some cases)
        // The last client rect is enlarged (I think)
        if (this.input.isLTR) {
            // This is an attempt to patch things up
            // Find position of last column
            const endPixelOffset = this._readPixelOffset(domNode, lineNumber, endColumn, context);
            if (endPixelOffset !== -1) {
                const lastRange = output[output.length - 1];
                if (lastRange.left < endPixelOffset) {
                    // Trim down the width of the last visible range to not go after the last column's position
                    lastRange.width = endPixelOffset - lastRange.left;
                }
            }
        }
        return output;
    }
}
const createRenderedLine = (function () {
    if (isWebKit) {
        return createWebKitRenderedLine;
    }
    return createNormalRenderedLine;
})();
function createWebKitRenderedLine(domNode, renderLineInput, characterMapping, containsForeignElements) {
    return new WebKitRenderedViewLine(domNode, renderLineInput, characterMapping, containsForeignElements);
}
function createNormalRenderedLine(domNode, renderLineInput, characterMapping, containsForeignElements) {
    return new RenderedViewLine(domNode, renderLineInput, characterMapping, containsForeignElements);
}
function getColumnOfNodeOffset(characterMapping, spanNode, offset) {
    const spanNodeTextContentLength = spanNode.textContent.length;
    let spanIndex = -1;
    while (spanNode) {
        spanNode = spanNode.previousSibling;
        spanIndex++;
    }
    return characterMapping.getColumn(new DomPosition(spanIndex, offset), spanNodeTextContentLength);
}

export { ViewLine, getColumnOfNodeOffset };
