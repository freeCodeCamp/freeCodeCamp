import './selections.css';
import { DynamicViewOverlay } from '../../view/dynamicViewOverlay.js';
import '../../../../platform/theme/common/colorUtils.js';
import '../../../../platform/theme/common/colors/baseColors.js';
import '../../../../platform/theme/common/colors/chartsColors.js';
import { editorSelectionForeground } from '../../../../platform/theme/common/colors/editorColors.js';
import '../../../../platform/theme/common/colors/inputColors.js';
import '../../../../platform/theme/common/colors/listColors.js';
import '../../../../platform/theme/common/colors/menuColors.js';
import '../../../../platform/theme/common/colors/minimapColors.js';
import '../../../../platform/theme/common/colors/miscColors.js';
import '../../../../platform/theme/common/colors/quickpickColors.js';
import '../../../../platform/theme/common/colors/searchColors.js';
import { registerThemingParticipant } from '../../../../platform/theme/common/themeService.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class HorizontalRangeWithStyle {
    constructor(other) {
        this.left = other.left;
        this.width = other.width;
        this.startStyle = null;
        this.endStyle = null;
    }
}
class LineVisibleRangesWithStyle {
    constructor(lineNumber, ranges) {
        this.lineNumber = lineNumber;
        this.ranges = ranges;
    }
}
function toStyledRange(item) {
    return new HorizontalRangeWithStyle(item);
}
function toStyled(item) {
    return new LineVisibleRangesWithStyle(item.lineNumber, item.ranges.map(toStyledRange));
}
/**
 * This view part displays selected text to the user. Every line has its own selection overlay.
 */
class SelectionsOverlay extends DynamicViewOverlay {
    static { this.SELECTION_CLASS_NAME = 'selected-text'; }
    static { this.SELECTION_TOP_LEFT = 'top-left-radius'; }
    static { this.SELECTION_BOTTOM_LEFT = 'bottom-left-radius'; }
    static { this.SELECTION_TOP_RIGHT = 'top-right-radius'; }
    static { this.SELECTION_BOTTOM_RIGHT = 'bottom-right-radius'; }
    static { this.EDITOR_BACKGROUND_CLASS_NAME = 'monaco-editor-background'; }
    static { this.ROUNDED_PIECE_WIDTH = 10; }
    constructor(context) {
        super();
        this._previousFrameVisibleRangesWithStyle = [];
        this._context = context;
        const options = this._context.configuration.options;
        this._roundedSelection = options.get(115 /* EditorOption.roundedSelection */);
        this._typicalHalfwidthCharacterWidth = options.get(59 /* EditorOption.fontInfo */).typicalHalfwidthCharacterWidth;
        this._selections = [];
        this._renderResult = null;
        this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this);
        this._renderResult = null;
        super.dispose();
    }
    // --- begin event handlers
    onConfigurationChanged(e) {
        const options = this._context.configuration.options;
        this._roundedSelection = options.get(115 /* EditorOption.roundedSelection */);
        this._typicalHalfwidthCharacterWidth = options.get(59 /* EditorOption.fontInfo */).typicalHalfwidthCharacterWidth;
        return true;
    }
    onCursorStateChanged(e) {
        this._selections = e.selections.slice(0);
        return true;
    }
    onDecorationsChanged(e) {
        // true for inline decorations that can end up relayouting text
        return true; //e.inlineDecorationsChanged;
    }
    onFlushed(e) {
        return true;
    }
    onLinesChanged(e) {
        return true;
    }
    onLinesDeleted(e) {
        return true;
    }
    onLinesInserted(e) {
        return true;
    }
    onScrollChanged(e) {
        return e.scrollTopChanged;
    }
    onZonesChanged(e) {
        return true;
    }
    // --- end event handlers
    _visibleRangesHaveGaps(linesVisibleRanges) {
        for (let i = 0, len = linesVisibleRanges.length; i < len; i++) {
            const lineVisibleRanges = linesVisibleRanges[i];
            if (lineVisibleRanges.ranges.length > 1) {
                // There are two ranges on the same line
                return true;
            }
        }
        return false;
    }
    _enrichVisibleRangesWithStyle(viewport, linesVisibleRanges, previousFrame) {
        const epsilon = this._typicalHalfwidthCharacterWidth / 4;
        let previousFrameTop = null;
        let previousFrameBottom = null;
        if (previousFrame && previousFrame.length > 0 && linesVisibleRanges.length > 0) {
            const topLineNumber = linesVisibleRanges[0].lineNumber;
            if (topLineNumber === viewport.startLineNumber) {
                for (let i = 0; !previousFrameTop && i < previousFrame.length; i++) {
                    if (previousFrame[i].lineNumber === topLineNumber) {
                        previousFrameTop = previousFrame[i].ranges[0];
                    }
                }
            }
            const bottomLineNumber = linesVisibleRanges[linesVisibleRanges.length - 1].lineNumber;
            if (bottomLineNumber === viewport.endLineNumber) {
                for (let i = previousFrame.length - 1; !previousFrameBottom && i >= 0; i--) {
                    if (previousFrame[i].lineNumber === bottomLineNumber) {
                        previousFrameBottom = previousFrame[i].ranges[0];
                    }
                }
            }
            if (previousFrameTop && !previousFrameTop.startStyle) {
                previousFrameTop = null;
            }
            if (previousFrameBottom && !previousFrameBottom.startStyle) {
                previousFrameBottom = null;
            }
        }
        for (let i = 0, len = linesVisibleRanges.length; i < len; i++) {
            // We know for a fact that there is precisely one range on each line
            const curLineRange = linesVisibleRanges[i].ranges[0];
            const curLeft = curLineRange.left;
            const curRight = curLineRange.left + curLineRange.width;
            const startStyle = {
                top: 0 /* CornerStyle.EXTERN */,
                bottom: 0 /* CornerStyle.EXTERN */
            };
            const endStyle = {
                top: 0 /* CornerStyle.EXTERN */,
                bottom: 0 /* CornerStyle.EXTERN */
            };
            if (i > 0) {
                // Look above
                const prevLeft = linesVisibleRanges[i - 1].ranges[0].left;
                const prevRight = linesVisibleRanges[i - 1].ranges[0].left + linesVisibleRanges[i - 1].ranges[0].width;
                if (abs(curLeft - prevLeft) < epsilon) {
                    startStyle.top = 2 /* CornerStyle.FLAT */;
                }
                else if (curLeft > prevLeft) {
                    startStyle.top = 1 /* CornerStyle.INTERN */;
                }
                if (abs(curRight - prevRight) < epsilon) {
                    endStyle.top = 2 /* CornerStyle.FLAT */;
                }
                else if (prevLeft < curRight && curRight < prevRight) {
                    endStyle.top = 1 /* CornerStyle.INTERN */;
                }
            }
            else if (previousFrameTop) {
                // Accept some hiccups near the viewport edges to save on repaints
                startStyle.top = previousFrameTop.startStyle.top;
                endStyle.top = previousFrameTop.endStyle.top;
            }
            if (i + 1 < len) {
                // Look below
                const nextLeft = linesVisibleRanges[i + 1].ranges[0].left;
                const nextRight = linesVisibleRanges[i + 1].ranges[0].left + linesVisibleRanges[i + 1].ranges[0].width;
                if (abs(curLeft - nextLeft) < epsilon) {
                    startStyle.bottom = 2 /* CornerStyle.FLAT */;
                }
                else if (nextLeft < curLeft && curLeft < nextRight) {
                    startStyle.bottom = 1 /* CornerStyle.INTERN */;
                }
                if (abs(curRight - nextRight) < epsilon) {
                    endStyle.bottom = 2 /* CornerStyle.FLAT */;
                }
                else if (curRight < nextRight) {
                    endStyle.bottom = 1 /* CornerStyle.INTERN */;
                }
            }
            else if (previousFrameBottom) {
                // Accept some hiccups near the viewport edges to save on repaints
                startStyle.bottom = previousFrameBottom.startStyle.bottom;
                endStyle.bottom = previousFrameBottom.endStyle.bottom;
            }
            curLineRange.startStyle = startStyle;
            curLineRange.endStyle = endStyle;
        }
    }
    _getVisibleRangesWithStyle(selection, ctx, previousFrame) {
        const _linesVisibleRanges = ctx.linesVisibleRangesForRange(selection, true) || [];
        const linesVisibleRanges = _linesVisibleRanges.map(toStyled);
        const visibleRangesHaveGaps = this._visibleRangesHaveGaps(linesVisibleRanges);
        if (!visibleRangesHaveGaps && this._roundedSelection) {
            this._enrichVisibleRangesWithStyle(ctx.visibleRange, linesVisibleRanges, previousFrame);
        }
        // The visible ranges are sorted TOP-BOTTOM and LEFT-RIGHT
        return linesVisibleRanges;
    }
    _createSelectionPiece(top, bottom, className, left, width) {
        return ('<div class="cslr '
            + className
            + '" style="'
            + 'top:' + top.toString() + 'px;'
            + 'bottom:' + bottom.toString() + 'px;'
            + 'left:' + left.toString() + 'px;'
            + 'width:' + width.toString() + 'px;'
            + '"></div>');
    }
    _actualRenderOneSelection(output2, visibleStartLineNumber, hasMultipleSelections, visibleRanges) {
        if (visibleRanges.length === 0) {
            return;
        }
        const visibleRangesHaveStyle = !!visibleRanges[0].ranges[0].startStyle;
        const firstLineNumber = visibleRanges[0].lineNumber;
        const lastLineNumber = visibleRanges[visibleRanges.length - 1].lineNumber;
        for (let i = 0, len = visibleRanges.length; i < len; i++) {
            const lineVisibleRanges = visibleRanges[i];
            const lineNumber = lineVisibleRanges.lineNumber;
            const lineIndex = lineNumber - visibleStartLineNumber;
            const top = hasMultipleSelections ? (lineNumber === firstLineNumber ? 1 : 0) : 0;
            const bottom = hasMultipleSelections ? (lineNumber !== firstLineNumber && lineNumber === lastLineNumber ? 1 : 0) : 0;
            let innerCornerOutput = '';
            let restOfSelectionOutput = '';
            for (let j = 0, lenJ = lineVisibleRanges.ranges.length; j < lenJ; j++) {
                const visibleRange = lineVisibleRanges.ranges[j];
                if (visibleRangesHaveStyle) {
                    const startStyle = visibleRange.startStyle;
                    const endStyle = visibleRange.endStyle;
                    if (startStyle.top === 1 /* CornerStyle.INTERN */ || startStyle.bottom === 1 /* CornerStyle.INTERN */) {
                        // Reverse rounded corner to the left
                        // First comes the selection (blue layer)
                        innerCornerOutput += this._createSelectionPiece(top, bottom, SelectionsOverlay.SELECTION_CLASS_NAME, visibleRange.left - SelectionsOverlay.ROUNDED_PIECE_WIDTH, SelectionsOverlay.ROUNDED_PIECE_WIDTH);
                        // Second comes the background (white layer) with inverse border radius
                        let className = SelectionsOverlay.EDITOR_BACKGROUND_CLASS_NAME;
                        if (startStyle.top === 1 /* CornerStyle.INTERN */) {
                            className += ' ' + SelectionsOverlay.SELECTION_TOP_RIGHT;
                        }
                        if (startStyle.bottom === 1 /* CornerStyle.INTERN */) {
                            className += ' ' + SelectionsOverlay.SELECTION_BOTTOM_RIGHT;
                        }
                        innerCornerOutput += this._createSelectionPiece(top, bottom, className, visibleRange.left - SelectionsOverlay.ROUNDED_PIECE_WIDTH, SelectionsOverlay.ROUNDED_PIECE_WIDTH);
                    }
                    if (endStyle.top === 1 /* CornerStyle.INTERN */ || endStyle.bottom === 1 /* CornerStyle.INTERN */) {
                        // Reverse rounded corner to the right
                        // First comes the selection (blue layer)
                        innerCornerOutput += this._createSelectionPiece(top, bottom, SelectionsOverlay.SELECTION_CLASS_NAME, visibleRange.left + visibleRange.width, SelectionsOverlay.ROUNDED_PIECE_WIDTH);
                        // Second comes the background (white layer) with inverse border radius
                        let className = SelectionsOverlay.EDITOR_BACKGROUND_CLASS_NAME;
                        if (endStyle.top === 1 /* CornerStyle.INTERN */) {
                            className += ' ' + SelectionsOverlay.SELECTION_TOP_LEFT;
                        }
                        if (endStyle.bottom === 1 /* CornerStyle.INTERN */) {
                            className += ' ' + SelectionsOverlay.SELECTION_BOTTOM_LEFT;
                        }
                        innerCornerOutput += this._createSelectionPiece(top, bottom, className, visibleRange.left + visibleRange.width, SelectionsOverlay.ROUNDED_PIECE_WIDTH);
                    }
                }
                let className = SelectionsOverlay.SELECTION_CLASS_NAME;
                if (visibleRangesHaveStyle) {
                    const startStyle = visibleRange.startStyle;
                    const endStyle = visibleRange.endStyle;
                    if (startStyle.top === 0 /* CornerStyle.EXTERN */) {
                        className += ' ' + SelectionsOverlay.SELECTION_TOP_LEFT;
                    }
                    if (startStyle.bottom === 0 /* CornerStyle.EXTERN */) {
                        className += ' ' + SelectionsOverlay.SELECTION_BOTTOM_LEFT;
                    }
                    if (endStyle.top === 0 /* CornerStyle.EXTERN */) {
                        className += ' ' + SelectionsOverlay.SELECTION_TOP_RIGHT;
                    }
                    if (endStyle.bottom === 0 /* CornerStyle.EXTERN */) {
                        className += ' ' + SelectionsOverlay.SELECTION_BOTTOM_RIGHT;
                    }
                }
                restOfSelectionOutput += this._createSelectionPiece(top, bottom, className, visibleRange.left, visibleRange.width);
            }
            output2[lineIndex][0] += innerCornerOutput;
            output2[lineIndex][1] += restOfSelectionOutput;
        }
    }
    prepareRender(ctx) {
        // Build HTML for inner corners separate from HTML for the rest of selections,
        // as the inner corner HTML can interfere with that of other selections.
        // In final render, make sure to place the inner corner HTML before the rest of selection HTML. See issue #77777.
        const output = [];
        const visibleStartLineNumber = ctx.visibleRange.startLineNumber;
        const visibleEndLineNumber = ctx.visibleRange.endLineNumber;
        for (let lineNumber = visibleStartLineNumber; lineNumber <= visibleEndLineNumber; lineNumber++) {
            const lineIndex = lineNumber - visibleStartLineNumber;
            output[lineIndex] = ['', ''];
        }
        const thisFrameVisibleRangesWithStyle = [];
        for (let i = 0, len = this._selections.length; i < len; i++) {
            const selection = this._selections[i];
            if (selection.isEmpty()) {
                thisFrameVisibleRangesWithStyle[i] = null;
                continue;
            }
            const visibleRangesWithStyle = this._getVisibleRangesWithStyle(selection, ctx, this._previousFrameVisibleRangesWithStyle[i]);
            thisFrameVisibleRangesWithStyle[i] = visibleRangesWithStyle;
            this._actualRenderOneSelection(output, visibleStartLineNumber, this._selections.length > 1, visibleRangesWithStyle);
        }
        this._previousFrameVisibleRangesWithStyle = thisFrameVisibleRangesWithStyle;
        this._renderResult = output.map(([internalCorners, restOfSelection]) => internalCorners + restOfSelection);
    }
    render(startLineNumber, lineNumber) {
        if (!this._renderResult) {
            return '';
        }
        const lineIndex = lineNumber - startLineNumber;
        if (lineIndex < 0 || lineIndex >= this._renderResult.length) {
            return '';
        }
        return this._renderResult[lineIndex];
    }
}
registerThemingParticipant((theme, collector) => {
    const editorSelectionForegroundColor = theme.getColor(editorSelectionForeground);
    if (editorSelectionForegroundColor && !editorSelectionForegroundColor.isTransparent()) {
        collector.addRule(`.monaco-editor .view-line span.inline-selected-text { color: ${editorSelectionForegroundColor}; }`);
    }
});
function abs(n) {
    return n < 0 ? -n : n;
}

export { SelectionsOverlay };
