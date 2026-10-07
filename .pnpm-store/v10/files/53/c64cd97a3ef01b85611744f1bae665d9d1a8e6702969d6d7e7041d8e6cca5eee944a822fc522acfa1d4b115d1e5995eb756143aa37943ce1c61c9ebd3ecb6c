import './lineNumbers.css';
import { isLinux } from '../../../../base/common/platform.js';
import { DynamicViewOverlay } from '../../view/dynamicViewOverlay.js';
import { Position } from '../../../common/core/position.js';
import { Range } from '../../../common/core/range.js';
import { registerThemingParticipant } from '../../../../platform/theme/common/themeService.js';
import { editorLineNumbers, editorDimmedLineNumber } from '../../../common/core/editorColorRegistry.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Renders line numbers to the left of the main view lines content.
 */
class LineNumbersOverlay extends DynamicViewOverlay {
    static { this.CLASS_NAME = 'line-numbers'; }
    constructor(context) {
        super();
        this._context = context;
        this._readConfig();
        this._lastCursorModelPosition = new Position(1, 1);
        this._renderResult = null;
        this._activeModelLineNumber = 1;
        this._context.addEventHandler(this);
    }
    _readConfig() {
        const options = this._context.configuration.options;
        this._lineHeight = options.get(75 /* EditorOption.lineHeight */);
        const lineNumbers = options.get(76 /* EditorOption.lineNumbers */);
        this._renderLineNumbers = lineNumbers.renderType;
        this._renderCustomLineNumbers = lineNumbers.renderFn;
        this._renderFinalNewline = options.get(109 /* EditorOption.renderFinalNewline */);
        const layoutInfo = options.get(165 /* EditorOption.layoutInfo */);
        this._lineNumbersLeft = layoutInfo.lineNumbersLeft;
        this._lineNumbersWidth = layoutInfo.lineNumbersWidth;
    }
    dispose() {
        this._context.removeEventHandler(this);
        this._renderResult = null;
        super.dispose();
    }
    // --- begin event handlers
    onConfigurationChanged(e) {
        this._readConfig();
        return true;
    }
    onCursorStateChanged(e) {
        const primaryViewPosition = e.selections[0].getPosition();
        this._lastCursorModelPosition = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(primaryViewPosition);
        let shouldRender = false;
        if (this._activeModelLineNumber !== this._lastCursorModelPosition.lineNumber) {
            this._activeModelLineNumber = this._lastCursorModelPosition.lineNumber;
            shouldRender = true;
        }
        if (this._renderLineNumbers === 2 /* RenderLineNumbersType.Relative */ || this._renderLineNumbers === 3 /* RenderLineNumbersType.Interval */) {
            shouldRender = true;
        }
        return shouldRender;
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
    onDecorationsChanged(e) {
        return e.affectsLineNumber;
    }
    // --- end event handlers
    _getLineRenderLineNumber(viewLineNumber) {
        const modelPosition = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new Position(viewLineNumber, 1));
        if (modelPosition.column !== 1) {
            return '';
        }
        const modelLineNumber = modelPosition.lineNumber;
        if (this._renderCustomLineNumbers) {
            return this._renderCustomLineNumbers(modelLineNumber);
        }
        if (this._renderLineNumbers === 2 /* RenderLineNumbersType.Relative */) {
            const diff = Math.abs(this._lastCursorModelPosition.lineNumber - modelLineNumber);
            if (diff === 0) {
                return '<span class="relative-current-line-number">' + modelLineNumber + '</span>';
            }
            return String(diff);
        }
        if (this._renderLineNumbers === 3 /* RenderLineNumbersType.Interval */) {
            if (this._lastCursorModelPosition.lineNumber === modelLineNumber) {
                return String(modelLineNumber);
            }
            if (modelLineNumber % 10 === 0) {
                return String(modelLineNumber);
            }
            const finalLineNumber = this._context.viewModel.getLineCount();
            if (modelLineNumber === finalLineNumber) {
                return String(modelLineNumber);
            }
            return '';
        }
        return String(modelLineNumber);
    }
    prepareRender(ctx) {
        if (this._renderLineNumbers === 0 /* RenderLineNumbersType.Off */) {
            this._renderResult = null;
            return;
        }
        const lineHeightClassName = (isLinux ? (this._lineHeight % 2 === 0 ? ' lh-even' : ' lh-odd') : '');
        const visibleStartLineNumber = ctx.visibleRange.startLineNumber;
        const visibleEndLineNumber = ctx.visibleRange.endLineNumber;
        const lineNoDecorations = this._context.viewModel.getDecorationsInViewport(ctx.visibleRange).filter(d => !!d.options.lineNumberClassName);
        lineNoDecorations.sort((a, b) => Range.compareRangesUsingEnds(a.range, b.range));
        let decorationStartIndex = 0;
        const lineCount = this._context.viewModel.getLineCount();
        const output = [];
        for (let lineNumber = visibleStartLineNumber; lineNumber <= visibleEndLineNumber; lineNumber++) {
            const lineIndex = lineNumber - visibleStartLineNumber;
            const modelLineNumber = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new Position(lineNumber, 1)).lineNumber;
            let renderLineNumber = this._getLineRenderLineNumber(lineNumber);
            let extraClassNames = '';
            // skip decorations whose end positions we've already passed
            while (decorationStartIndex < lineNoDecorations.length && lineNoDecorations[decorationStartIndex].range.endLineNumber < lineNumber) {
                decorationStartIndex++;
            }
            for (let i = decorationStartIndex; i < lineNoDecorations.length; i++) {
                const { range, options } = lineNoDecorations[i];
                if (range.startLineNumber <= lineNumber) {
                    extraClassNames += ' ' + options.lineNumberClassName;
                }
            }
            if (!renderLineNumber && !extraClassNames) {
                output[lineIndex] = '';
                continue;
            }
            if (lineNumber === lineCount && this._context.viewModel.getLineLength(lineNumber) === 0) {
                // this is the last line
                if (this._renderFinalNewline === 'off') {
                    renderLineNumber = '';
                }
                if (this._renderFinalNewline === 'dimmed') {
                    extraClassNames += ' dimmed-line-number';
                }
            }
            if (modelLineNumber === this._activeModelLineNumber) {
                extraClassNames += ' active-line-number';
            }
            output[lineIndex] = (`<div class="${LineNumbersOverlay.CLASS_NAME}${lineHeightClassName}${extraClassNames}" style="left:${this._lineNumbersLeft}px;width:${this._lineNumbersWidth}px;">${renderLineNumber}</div>`);
        }
        this._renderResult = output;
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
    const editorLineNumbersColor = theme.getColor(editorLineNumbers);
    const editorDimmedLineNumberColor = theme.getColor(editorDimmedLineNumber);
    if (editorDimmedLineNumberColor) {
        collector.addRule(`.monaco-editor .line-numbers.dimmed-line-number { color: ${editorDimmedLineNumberColor}; }`);
    }
    else if (editorLineNumbersColor) {
        collector.addRule(`.monaco-editor .line-numbers.dimmed-line-number { color: ${editorLineNumbersColor.transparent(0.4)}; }`);
    }
});

export { LineNumbersOverlay };
