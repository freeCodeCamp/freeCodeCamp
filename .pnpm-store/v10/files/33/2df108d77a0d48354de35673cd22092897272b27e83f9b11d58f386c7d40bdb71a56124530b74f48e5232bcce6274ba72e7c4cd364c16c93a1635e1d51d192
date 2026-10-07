import { getActiveWindow } from '../../../../base/browser/dom.js';
import { Color } from '../../../../base/common/color.js';
import { BugIndicatingError } from '../../../../base/common/errors.js';
import { CursorColumns } from '../../../common/core/cursorColumns.js';
import { createContentSegmenter } from '../contentSegmenter.js';
import { fullFileRenderStrategyWgsl } from './fullFileRenderStrategy.wgsl.js';
import { GPULifecycle } from '../gpuDisposable.js';
import { quadVertices } from '../gpuUtils.js';
import { ViewGpuContext } from '../viewGpuContext.js';
import { BaseRenderStrategy } from './baseRenderStrategy.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * A render strategy that tracks a large buffer, uploading only dirty lines as they change and
 * leveraging heavy caching. This is the most performant strategy but has limitations around long
 * lines and too many lines.
 */
class FullFileRenderStrategy extends BaseRenderStrategy {
    /**
     * The hard cap for line count that can be rendered by the GPU renderer.
     */
    static { this.maxSupportedLines = 3000; }
    /**
     * The hard cap for line columns that can be rendered by the GPU renderer.
     */
    static { this.maxSupportedColumns = 200; }
    get bindGroupEntries() {
        return [
            { binding: 1 /* BindingId.Cells */, resource: { buffer: this._cellBindBuffer } },
            { binding: 6 /* BindingId.ScrollOffset */, resource: { buffer: this._scrollOffsetBindBuffer } }
        ];
    }
    constructor(context, viewGpuContext, device, glyphRasterizer) {
        super(context, viewGpuContext, device, glyphRasterizer);
        this.type = 'fullfile';
        this.wgsl = fullFileRenderStrategyWgsl;
        this._activeDoubleBufferIndex = 0;
        this._upToDateLines = [new Set(), new Set()];
        this._visibleObjectCount = 0;
        this._finalRenderedLine = 0;
        this._scrollInitialized = false;
        this._queuedBufferUpdates = [[], []];
        const bufferSize = FullFileRenderStrategy.maxSupportedLines * FullFileRenderStrategy.maxSupportedColumns * 6 /* Constants.IndicesPerCell */ * Float32Array.BYTES_PER_ELEMENT;
        this._cellBindBuffer = this._register(GPULifecycle.createBuffer(this._device, {
            label: 'Monaco full file cell buffer',
            size: bufferSize,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
        })).object;
        this._cellValueBuffers = [
            new ArrayBuffer(bufferSize),
            new ArrayBuffer(bufferSize),
        ];
        const scrollOffsetBufferSize = 2;
        this._scrollOffsetBindBuffer = this._register(GPULifecycle.createBuffer(this._device, {
            label: 'Monaco scroll offset buffer',
            size: scrollOffsetBufferSize * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        })).object;
        this._scrollOffsetValueBuffer = new Float32Array(scrollOffsetBufferSize);
    }
    // #region Event handlers
    // The primary job of these handlers is to:
    // 1. Invalidate the up to date line cache, which will cause the line to be re-rendered when
    //    it's _within the viewport_.
    // 2. Pass relevant events on to the render function so it can force certain line ranges to be
    //    re-rendered even if they're not in the viewport. For example when a view zone is added,
    //    there are lines that used to be visible but are no longer, so those ranges must be
    //    cleared and uploaded to the GPU.
    onConfigurationChanged(e) {
        this._invalidateAllLines();
        this._queueBufferUpdate(e);
        return true;
    }
    onDecorationsChanged(e) {
        this._invalidateAllLines();
        return true;
    }
    onTokensChanged(e) {
        // TODO: This currently fires for the entire viewport whenever scrolling stops
        //       https://github.com/microsoft/vscode/issues/233942
        for (const range of e.ranges) {
            this._invalidateLineRange(range.fromLineNumber, range.toLineNumber);
        }
        return true;
    }
    onLinesDeleted(e) {
        // TODO: This currently invalidates everything after the deleted line, it could shift the
        //       line data up to retain some up to date lines
        // TODO: This does not invalidate lines that are no longer in the file
        this._invalidateLinesFrom(e.fromLineNumber);
        this._queueBufferUpdate(e);
        return true;
    }
    onLinesInserted(e) {
        // TODO: This currently invalidates everything after the deleted line, it could shift the
        //       line data up to retain some up to date lines
        this._invalidateLinesFrom(e.fromLineNumber);
        return true;
    }
    onLinesChanged(e) {
        this._invalidateLineRange(e.fromLineNumber, e.fromLineNumber + e.count);
        return true;
    }
    onScrollChanged(e) {
        const dpr = getActiveWindow().devicePixelRatio;
        this._scrollOffsetValueBuffer[0] = (e?.scrollLeft ?? this._context.viewLayout.getCurrentScrollLeft()) * dpr;
        this._scrollOffsetValueBuffer[1] = (e?.scrollTop ?? this._context.viewLayout.getCurrentScrollTop()) * dpr;
        this._device.queue.writeBuffer(this._scrollOffsetBindBuffer, 0, this._scrollOffsetValueBuffer);
        return true;
    }
    onThemeChanged(e) {
        this._invalidateAllLines();
        return true;
    }
    onLineMappingChanged(e) {
        this._invalidateAllLines();
        this._queueBufferUpdate(e);
        return true;
    }
    onZonesChanged(e) {
        this._invalidateAllLines();
        this._queueBufferUpdate(e);
        return true;
    }
    // #endregion
    _invalidateAllLines() {
        this._upToDateLines[0].clear();
        this._upToDateLines[1].clear();
    }
    _invalidateLinesFrom(lineNumber) {
        for (const i of [0, 1]) {
            const upToDateLines = this._upToDateLines[i];
            for (const upToDateLine of upToDateLines) {
                if (upToDateLine >= lineNumber) {
                    upToDateLines.delete(upToDateLine);
                }
            }
        }
    }
    _invalidateLineRange(fromLineNumber, toLineNumber) {
        for (let i = fromLineNumber; i <= toLineNumber; i++) {
            this._upToDateLines[0].delete(i);
            this._upToDateLines[1].delete(i);
        }
    }
    reset() {
        this._invalidateAllLines();
        for (const bufferIndex of [0, 1]) {
            // Zero out buffer and upload to GPU to prevent stale rows from rendering
            const buffer = new Float32Array(this._cellValueBuffers[bufferIndex]);
            buffer.fill(0, 0, buffer.length);
            this._device.queue.writeBuffer(this._cellBindBuffer, 0, buffer.buffer, 0, buffer.byteLength);
        }
        this._finalRenderedLine = 0;
    }
    update(viewportData, viewLineOptions) {
        // IMPORTANT: This is a hot function. Variables are pre-allocated and shared within the
        // loop. This is done so we don't need to trust the JIT compiler to do this optimization to
        // avoid potential additional blocking time in garbage collector which is a common cause of
        // dropped frames.
        let chars = '';
        let segment;
        let charWidth = 0;
        let y = 0;
        let x = 0;
        let absoluteOffsetX = 0;
        let absoluteOffsetY = 0;
        let tabXOffset = 0;
        let glyph;
        let cellIndex = 0;
        let tokenStartIndex = 0;
        let tokenEndIndex = 0;
        let tokenMetadata = 0;
        let decorationStyleSetBold;
        let decorationStyleSetColor;
        let decorationStyleSetOpacity;
        let lineData;
        let decoration;
        let fillStartIndex = 0;
        let fillEndIndex = 0;
        let tokens;
        const dpr = getActiveWindow().devicePixelRatio;
        let contentSegmenter;
        if (!this._scrollInitialized) {
            this.onScrollChanged();
            this._scrollInitialized = true;
        }
        // Update cell data
        const cellBuffer = new Float32Array(this._cellValueBuffers[this._activeDoubleBufferIndex]);
        const lineIndexCount = FullFileRenderStrategy.maxSupportedColumns * 6 /* Constants.IndicesPerCell */;
        const upToDateLines = this._upToDateLines[this._activeDoubleBufferIndex];
        let dirtyLineStart = 3000;
        let dirtyLineEnd = 0;
        // Handle any queued buffer updates
        const queuedBufferUpdates = this._queuedBufferUpdates[this._activeDoubleBufferIndex];
        while (queuedBufferUpdates.length) {
            const e = queuedBufferUpdates.shift();
            switch (e.type) {
                // TODO: Refine these cases so we're not throwing away everything
                case 2 /* ViewEventType.ViewConfigurationChanged */:
                case 8 /* ViewEventType.ViewLineMappingChanged */:
                case 17 /* ViewEventType.ViewZonesChanged */: {
                    cellBuffer.fill(0);
                    dirtyLineStart = 1;
                    dirtyLineEnd = Math.max(dirtyLineEnd, this._finalRenderedLine);
                    this._finalRenderedLine = 0;
                    break;
                }
                case 10 /* ViewEventType.ViewLinesDeleted */: {
                    // Shift content below deleted line up
                    const deletedLineContentStartIndex = (e.fromLineNumber - 1) * FullFileRenderStrategy.maxSupportedColumns * 6 /* Constants.IndicesPerCell */;
                    const deletedLineContentEndIndex = (e.toLineNumber) * FullFileRenderStrategy.maxSupportedColumns * 6 /* Constants.IndicesPerCell */;
                    const nullContentStartIndex = (this._finalRenderedLine - (e.toLineNumber - e.fromLineNumber + 1)) * FullFileRenderStrategy.maxSupportedColumns * 6 /* Constants.IndicesPerCell */;
                    cellBuffer.set(cellBuffer.subarray(deletedLineContentEndIndex), deletedLineContentStartIndex);
                    // Zero out content on lines that are no longer valid
                    cellBuffer.fill(0, nullContentStartIndex);
                    // Update dirty lines and final rendered line
                    dirtyLineStart = Math.min(dirtyLineStart, e.fromLineNumber);
                    dirtyLineEnd = Math.max(dirtyLineEnd, this._finalRenderedLine);
                    this._finalRenderedLine -= e.toLineNumber - e.fromLineNumber + 1;
                    break;
                }
            }
        }
        for (y = viewportData.startLineNumber; y <= viewportData.endLineNumber; y++) {
            // Only attempt to render lines that the GPU renderer can handle
            if (!this._viewGpuContext.canRender(viewLineOptions, viewportData, y)) {
                fillStartIndex = ((y - 1) * FullFileRenderStrategy.maxSupportedColumns) * 6 /* Constants.IndicesPerCell */;
                fillEndIndex = (y * FullFileRenderStrategy.maxSupportedColumns) * 6 /* Constants.IndicesPerCell */;
                cellBuffer.fill(0, fillStartIndex, fillEndIndex);
                dirtyLineStart = Math.min(dirtyLineStart, y);
                dirtyLineEnd = Math.max(dirtyLineEnd, y);
                continue;
            }
            // Skip updating the line if it's already up to date
            if (upToDateLines.has(y)) {
                continue;
            }
            dirtyLineStart = Math.min(dirtyLineStart, y);
            dirtyLineEnd = Math.max(dirtyLineEnd, y);
            lineData = viewportData.getViewLineRenderingData(y);
            tabXOffset = 0;
            contentSegmenter = createContentSegmenter(lineData, viewLineOptions);
            charWidth = viewLineOptions.spaceWidth * dpr;
            absoluteOffsetX = 0;
            tokens = lineData.tokens;
            tokenStartIndex = lineData.minColumn - 1;
            tokenEndIndex = 0;
            for (let tokenIndex = 0, tokensLen = tokens.getCount(); tokenIndex < tokensLen; tokenIndex++) {
                tokenEndIndex = tokens.getEndOffset(tokenIndex);
                if (tokenEndIndex <= tokenStartIndex) {
                    // The faux indent part of the line should have no token type
                    continue;
                }
                tokenMetadata = tokens.getMetadata(tokenIndex);
                for (x = tokenStartIndex; x < tokenEndIndex; x++) {
                    // Only render lines that do not exceed maximum columns
                    if (x > FullFileRenderStrategy.maxSupportedColumns) {
                        break;
                    }
                    segment = contentSegmenter.getSegmentAtIndex(x);
                    if (segment === undefined) {
                        continue;
                    }
                    chars = segment;
                    if (!(lineData.isBasicASCII && viewLineOptions.useMonospaceOptimizations)) {
                        charWidth = this.glyphRasterizer.getTextMetrics(chars).width;
                    }
                    decorationStyleSetColor = undefined;
                    decorationStyleSetBold = undefined;
                    decorationStyleSetOpacity = undefined;
                    // Apply supported inline decoration styles to the cell metadata
                    for (decoration of lineData.inlineDecorations) {
                        // This is Range.strictContainsPosition except it works at the cell level,
                        // it's also inlined to avoid overhead.
                        if ((y < decoration.range.startLineNumber || y > decoration.range.endLineNumber) ||
                            (y === decoration.range.startLineNumber && x < decoration.range.startColumn - 1) ||
                            (y === decoration.range.endLineNumber && x >= decoration.range.endColumn - 1)) {
                            continue;
                        }
                        const rules = ViewGpuContext.decorationCssRuleExtractor.getStyleRules(this._viewGpuContext.canvas.domNode, decoration.inlineClassName);
                        for (const rule of rules) {
                            for (const r of rule.style) {
                                const value = rule.styleMap.get(r)?.toString() ?? '';
                                switch (r) {
                                    case 'color': {
                                        // TODO: This parsing and error handling should move into canRender so fallback
                                        //       to DOM works
                                        const parsedColor = Color.Format.CSS.parse(value);
                                        if (!parsedColor) {
                                            throw new BugIndicatingError('Invalid color format ' + value);
                                        }
                                        decorationStyleSetColor = parsedColor.toNumber32Bit();
                                        break;
                                    }
                                    case 'font-weight': {
                                        const parsedValue = parseCssFontWeight(value);
                                        if (parsedValue >= 400) {
                                            decorationStyleSetBold = true;
                                            // TODO: Set bold (https://github.com/microsoft/vscode/issues/237584)
                                        }
                                        else {
                                            decorationStyleSetBold = false;
                                            // TODO: Set normal (https://github.com/microsoft/vscode/issues/237584)
                                        }
                                        break;
                                    }
                                    case 'opacity': {
                                        const parsedValue = parseCssOpacity(value);
                                        decorationStyleSetOpacity = parsedValue;
                                        break;
                                    }
                                    default: throw new BugIndicatingError('Unexpected inline decoration style');
                                }
                            }
                        }
                    }
                    if (chars === ' ' || chars === '\t') {
                        // Zero out glyph to ensure it doesn't get rendered
                        cellIndex = ((y - 1) * FullFileRenderStrategy.maxSupportedColumns + x) * 6 /* Constants.IndicesPerCell */;
                        cellBuffer.fill(0, cellIndex, cellIndex + 6 /* CellBufferInfo.FloatsPerEntry */);
                        // Adjust xOffset for tab stops
                        if (chars === '\t') {
                            // Find the pixel offset between the current position and the next tab stop
                            const offsetBefore = x + tabXOffset;
                            tabXOffset = CursorColumns.nextRenderTabStop(x + tabXOffset, lineData.tabSize);
                            absoluteOffsetX += charWidth * (tabXOffset - offsetBefore);
                            // Convert back to offset excluding x and the current character
                            tabXOffset -= x + 1;
                        }
                        else {
                            absoluteOffsetX += charWidth;
                        }
                        continue;
                    }
                    const decorationStyleSetId = ViewGpuContext.decorationStyleCache.getOrCreateEntry(decorationStyleSetColor, decorationStyleSetBold, decorationStyleSetOpacity);
                    glyph = this._viewGpuContext.atlas.getGlyph(this.glyphRasterizer, chars, tokenMetadata, decorationStyleSetId, absoluteOffsetX);
                    absoluteOffsetY = Math.round(
                    // Top of layout box (includes line height)
                    viewportData.relativeVerticalOffset[y - viewportData.startLineNumber] * dpr +
                        // Delta from top of layout box (includes line height) to top of the inline box (no line height)
                        Math.floor((viewportData.lineHeight * dpr - (glyph.fontBoundingBoxAscent + glyph.fontBoundingBoxDescent)) / 2) +
                        // Delta from top of inline box (no line height) to top of glyph origin. If the glyph was drawn
                        // with a top baseline for example, this ends up drawing the glyph correctly using the alphabetical
                        // baseline.
                        glyph.fontBoundingBoxAscent);
                    cellIndex = ((y - 1) * FullFileRenderStrategy.maxSupportedColumns + x) * 6 /* Constants.IndicesPerCell */;
                    cellBuffer[cellIndex + 0 /* CellBufferInfo.Offset_X */] = Math.floor(absoluteOffsetX);
                    cellBuffer[cellIndex + 1 /* CellBufferInfo.Offset_Y */] = absoluteOffsetY;
                    cellBuffer[cellIndex + 4 /* CellBufferInfo.GlyphIndex */] = glyph.glyphIndex;
                    cellBuffer[cellIndex + 5 /* CellBufferInfo.TextureIndex */] = glyph.pageIndex;
                    // Adjust the x pixel offset for the next character
                    absoluteOffsetX += charWidth;
                }
                tokenStartIndex = tokenEndIndex;
            }
            // Clear to end of line
            fillStartIndex = ((y - 1) * FullFileRenderStrategy.maxSupportedColumns + tokenEndIndex) * 6 /* Constants.IndicesPerCell */;
            fillEndIndex = (y * FullFileRenderStrategy.maxSupportedColumns) * 6 /* Constants.IndicesPerCell */;
            cellBuffer.fill(0, fillStartIndex, fillEndIndex);
            upToDateLines.add(y);
        }
        const visibleObjectCount = (viewportData.endLineNumber - viewportData.startLineNumber + 1) * lineIndexCount;
        // Only write when there is changed data
        dirtyLineStart = Math.min(dirtyLineStart, FullFileRenderStrategy.maxSupportedLines);
        dirtyLineEnd = Math.min(dirtyLineEnd, FullFileRenderStrategy.maxSupportedLines);
        if (dirtyLineStart <= dirtyLineEnd) {
            // Write buffer and swap it out to unblock writes
            this._device.queue.writeBuffer(this._cellBindBuffer, (dirtyLineStart - 1) * lineIndexCount * Float32Array.BYTES_PER_ELEMENT, cellBuffer.buffer, (dirtyLineStart - 1) * lineIndexCount * Float32Array.BYTES_PER_ELEMENT, (dirtyLineEnd - dirtyLineStart + 1) * lineIndexCount * Float32Array.BYTES_PER_ELEMENT);
        }
        this._finalRenderedLine = Math.max(this._finalRenderedLine, dirtyLineEnd);
        this._activeDoubleBufferIndex = this._activeDoubleBufferIndex ? 0 : 1;
        this._visibleObjectCount = visibleObjectCount;
        return visibleObjectCount;
    }
    draw(pass, viewportData) {
        if (this._visibleObjectCount <= 0) {
            throw new BugIndicatingError('Attempt to draw 0 objects');
        }
        pass.draw(quadVertices.length / 2, this._visibleObjectCount, undefined, (viewportData.startLineNumber - 1) * FullFileRenderStrategy.maxSupportedColumns);
    }
    /**
     * Queue updates that need to happen on the active buffer, not just the cache. This will be
     * deferred to when the actual cell buffer is changed since the active buffer could be locked by
     * the GPU which would block the main thread.
     */
    _queueBufferUpdate(e) {
        this._queuedBufferUpdates[0].push(e);
        this._queuedBufferUpdates[1].push(e);
    }
}
function parseCssFontWeight(value) {
    switch (value) {
        case 'lighter':
        case 'normal': return 400;
        case 'bolder':
        case 'bold': return 700;
    }
    return parseInt(value);
}
function parseCssOpacity(value) {
    if (value.endsWith('%')) {
        return parseFloat(value.substring(0, value.length - 1)) / 100;
    }
    if (value.match(/^\d+(?:\.\d*)/)) {
        return parseFloat(value);
    }
    return 1;
}

export { FullFileRenderStrategy };
