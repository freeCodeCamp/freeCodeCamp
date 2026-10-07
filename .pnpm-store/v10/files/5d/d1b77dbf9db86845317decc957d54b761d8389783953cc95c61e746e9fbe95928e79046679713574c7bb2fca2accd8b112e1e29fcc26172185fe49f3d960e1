import { n, getWindow } from '../../../../../../../base/browser/dom.js';
import { StandardMouseEvent } from '../../../../../../../base/browser/mouseEvent.js';
import { Emitter } from '../../../../../../../base/common/event.js';
import { Disposable } from '../../../../../../../base/common/lifecycle.js';
import '../../../../../../../base/common/observableInternal/index.js';
import { asCssVariable } from '../../../../../../../platform/theme/common/colorUtils.js';
import '../../../../../../../platform/theme/common/colors/baseColors.js';
import '../../../../../../../platform/theme/common/colors/chartsColors.js';
import { editorBackground } from '../../../../../../../platform/theme/common/colors/editorColors.js';
import '../../../../../../../platform/theme/common/colors/inputColors.js';
import '../../../../../../../platform/theme/common/colors/listColors.js';
import '../../../../../../../platform/theme/common/colors/menuColors.js';
import '../../../../../../../platform/theme/common/colors/minimapColors.js';
import '../../../../../../../platform/theme/common/colors/miscColors.js';
import '../../../../../../../platform/theme/common/colors/quickpickColors.js';
import '../../../../../../../platform/theme/common/colors/searchColors.js';
import { IThemeService } from '../../../../../../../platform/theme/common/themeService.js';
import { observableCodeEditor } from '../../../../../../browser/observableCodeEditor.js';
import { renderLines, RenderOptions, LineSource } from '../../../../../../browser/widget/diffEditor/components/diffEditorViewZones/renderLines.js';
import { Rect } from '../../../../../../common/core/2d/rect.js';
import { LineRange } from '../../../../../../common/core/ranges/lineRange.js';
import { InlineCompletionHintStyle } from '../../../../../../common/languages.js';
import { ILanguageService } from '../../../../../../common/languages/language.js';
import { TokenArray, LineTokens } from '../../../../../../common/tokens/lineTokens.js';
import { InlineEditTabAction } from '../inlineEditsViewInterface.js';
import { getEditorBlendedColor, inlineEditIndicatorsuccessfulBackground, inlineEditIndicatorPrimaryBackground, inlineEditIndicatorSecondaryBackground } from '../theme.js';
import { maxContentWidthInRange, getContentRenderWidth, rectToProps } from '../utils/utils.js';
import { observableValue } from '../../../../../../../base/common/observableInternal/observables/observableValue.js';
import { derived } from '../../../../../../../base/common/observableInternal/observables/derived.js';
import { derivedObservableWithCache } from '../../../../../../../base/common/observableInternal/utils/utils.js';
import { constObservable } from '../../../../../../../base/common/observableInternal/observables/constObservable.js';
import { autorun } from '../../../../../../../base/common/observableInternal/reactions/autorun.js';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const MIN_END_OF_LINE_PADDING = 14;
const PADDING_VERTICALLY = 0;
const PADDING_HORIZONTALLY = 4;
const HORIZONTAL_OFFSET_WHEN_ABOVE_BELOW = 4;
const VERTICAL_OFFSET_WHEN_ABOVE_BELOW = 2;
// !! minEndOfLinePadding should always be larger than paddingHorizontally + horizontalOffsetWhenAboveBelow
let InlineEditsCustomView = class InlineEditsCustomView extends Disposable {
    constructor(_editor, displayLocation, tabAction, themeService, _languageService) {
        super();
        this._editor = _editor;
        this._languageService = _languageService;
        this._onDidClick = this._register(new Emitter());
        this.onDidClick = this._onDidClick.event;
        this._isHovered = observableValue(this, false);
        this.isHovered = this._isHovered;
        this._viewRef = n.ref();
        this._editorObs = observableCodeEditor(this._editor);
        const styles = tabAction.map((v, reader) => {
            let border;
            switch (v) {
                case InlineEditTabAction.Inactive:
                    border = inlineEditIndicatorSecondaryBackground;
                    break;
                case InlineEditTabAction.Jump:
                    border = inlineEditIndicatorPrimaryBackground;
                    break;
                case InlineEditTabAction.Accept:
                    border = inlineEditIndicatorsuccessfulBackground;
                    break;
            }
            return {
                border: getEditorBlendedColor(border, themeService).read(reader).toString(),
                background: asCssVariable(editorBackground)
            };
        });
        const state = displayLocation.map(dl => dl ? this.getState(dl) : undefined);
        const view = state.map(s => s ? this.getRendering(s, styles) : undefined);
        this.minEditorScrollHeight = derived(this, reader => {
            const s = state.read(reader);
            if (!s) {
                return 0;
            }
            return s.rect.read(reader).bottom + this._editor.getScrollTop();
        });
        const overlay = n.div({
            class: 'inline-edits-custom-view',
            style: {
                position: 'absolute',
                overflow: 'visible',
                top: '0px',
                left: '0px',
                display: 'block',
            },
        }, [view]).keepUpdated(this._store);
        this._register(this._editorObs.createOverlayWidget({
            domNode: overlay.element,
            position: constObservable(null),
            allowEditorOverflow: false,
            minContentWidthInPx: derivedObservableWithCache(this, (reader, prev) => {
                const s = state.read(reader);
                if (!s) {
                    return prev ?? 0;
                }
                const current = s.rect.map(rect => rect.right).read(reader)
                    + this._editorObs.layoutInfoVerticalScrollbarWidth.read(reader)
                    + PADDING_HORIZONTALLY
                    - this._editorObs.layoutInfoContentLeft.read(reader);
                return Math.max(prev ?? 0, current); // will run into infinite loop otherwise TODO: fix this
            }).recomputeInitiallyAndOnChange(this._store),
        }));
        this._register(autorun((reader) => {
            const v = view.read(reader);
            if (!v) {
                this._isHovered.set(false, undefined);
                return;
            }
            this._isHovered.set(overlay.isHovered.read(reader), undefined);
        }));
    }
    // TODO: this is very similar to side by side `fitsInsideViewport`, try to use the same function
    fitsInsideViewport(range, displayLabel, reader) {
        const editorWidth = this._editorObs.layoutInfoWidth.read(reader);
        const editorContentLeft = this._editorObs.layoutInfoContentLeft.read(reader);
        const editorVerticalScrollbar = this._editor.getLayoutInfo().verticalScrollbarWidth;
        const minimapWidth = this._editorObs.layoutInfoMinimap.read(reader).minimapLeft !== 0 ? this._editorObs.layoutInfoMinimap.read(reader).minimapWidth : 0;
        const maxOriginalContent = maxContentWidthInRange(this._editorObs, range, undefined);
        const maxModifiedContent = getContentRenderWidth(displayLabel, this._editor, this._editor.getModel());
        const padding = PADDING_HORIZONTALLY + MIN_END_OF_LINE_PADDING;
        return maxOriginalContent + maxModifiedContent + padding < editorWidth - editorContentLeft - editorVerticalScrollbar - minimapWidth;
    }
    getState(displayLocation) {
        const contentState = derived(this, (reader) => {
            const startLineNumber = displayLocation.range.startLineNumber;
            const endLineNumber = displayLocation.range.endLineNumber;
            const startColumn = displayLocation.range.startColumn;
            const endColumn = displayLocation.range.endColumn;
            const lineCount = this._editor.getModel()?.getLineCount() ?? 0;
            const lineWidth = maxContentWidthInRange(this._editorObs, new LineRange(startLineNumber, startLineNumber + 1), reader);
            const lineWidthBelow = startLineNumber + 1 <= lineCount ? maxContentWidthInRange(this._editorObs, new LineRange(startLineNumber + 1, startLineNumber + 2), reader) : undefined;
            const lineWidthAbove = startLineNumber - 1 >= 1 ? maxContentWidthInRange(this._editorObs, new LineRange(startLineNumber - 1, startLineNumber), reader) : undefined;
            const startContentLeftOffset = this._editor.getOffsetForColumn(startLineNumber, startColumn);
            const endContentLeftOffset = this._editor.getOffsetForColumn(endLineNumber, endColumn);
            return {
                lineWidth,
                lineWidthBelow,
                lineWidthAbove,
                startContentLeftOffset,
                endContentLeftOffset
            };
        });
        const startLineNumber = displayLocation.range.startLineNumber;
        const endLineNumber = displayLocation.range.endLineNumber;
        // only check viewport once in the beginning when rendering the view
        const fitsInsideViewport = this.fitsInsideViewport(new LineRange(startLineNumber, endLineNumber + 1), displayLocation.content, undefined);
        const rect = derived(this, reader => {
            const w = this._editorObs.getOption(59 /* EditorOption.fontInfo */).read(reader).typicalHalfwidthCharacterWidth;
            const { lineWidth, lineWidthBelow, lineWidthAbove, startContentLeftOffset, endContentLeftOffset } = contentState.read(reader);
            const contentLeft = this._editorObs.layoutInfoContentLeft.read(reader);
            const lineHeight = this._editorObs.observeLineHeightForLine(startLineNumber).recomputeInitiallyAndOnChange(reader.store).read(reader);
            const scrollTop = this._editorObs.scrollTop.read(reader);
            const scrollLeft = this._editorObs.scrollLeft.read(reader);
            let position;
            if (startLineNumber === endLineNumber && endContentLeftOffset + 5 * w >= lineWidth && fitsInsideViewport) {
                position = 'end'; // Render at the end of the line if the range ends almost at the end of the line
            }
            else if (lineWidthBelow !== undefined && lineWidthBelow + MIN_END_OF_LINE_PADDING - HORIZONTAL_OFFSET_WHEN_ABOVE_BELOW - PADDING_HORIZONTALLY < startContentLeftOffset) {
                position = 'below'; // Render Below if possible
            }
            else if (lineWidthAbove !== undefined && lineWidthAbove + MIN_END_OF_LINE_PADDING - HORIZONTAL_OFFSET_WHEN_ABOVE_BELOW - PADDING_HORIZONTALLY < startContentLeftOffset) {
                position = 'above'; // Render Above if possible
            }
            else {
                position = 'end'; // Render at the end of the line otherwise
            }
            let topOfLine;
            let contentStartOffset;
            let deltaX = 0;
            let deltaY = 0;
            switch (position) {
                case 'end': {
                    topOfLine = this._editorObs.editor.getTopForLineNumber(startLineNumber);
                    contentStartOffset = lineWidth;
                    deltaX = PADDING_HORIZONTALLY + MIN_END_OF_LINE_PADDING;
                    break;
                }
                case 'below': {
                    topOfLine = this._editorObs.editor.getTopForLineNumber(startLineNumber + 1);
                    contentStartOffset = startContentLeftOffset;
                    deltaX = PADDING_HORIZONTALLY + HORIZONTAL_OFFSET_WHEN_ABOVE_BELOW;
                    deltaY = PADDING_VERTICALLY + VERTICAL_OFFSET_WHEN_ABOVE_BELOW;
                    break;
                }
                case 'above': {
                    topOfLine = this._editorObs.editor.getTopForLineNumber(startLineNumber - 1);
                    contentStartOffset = startContentLeftOffset;
                    deltaX = PADDING_HORIZONTALLY + HORIZONTAL_OFFSET_WHEN_ABOVE_BELOW;
                    deltaY = -PADDING_VERTICALLY + VERTICAL_OFFSET_WHEN_ABOVE_BELOW;
                    break;
                }
            }
            const textRect = Rect.fromLeftTopWidthHeight(contentLeft + contentStartOffset - scrollLeft, topOfLine - scrollTop, w * displayLocation.content.length, lineHeight);
            return textRect.withMargin(PADDING_VERTICALLY, PADDING_HORIZONTALLY).translateX(deltaX).translateY(deltaY);
        });
        return {
            rect,
            label: displayLocation.content,
            kind: displayLocation.style
        };
    }
    getRendering(state, styles) {
        const line = document.createElement('div');
        const t = this._editor.getModel().tokenization.tokenizeLinesAt(1, [state.label])?.[0];
        let tokens;
        if (t && state.kind === InlineCompletionHintStyle.Code) {
            tokens = TokenArray.fromLineTokens(t).toLineTokens(state.label, this._languageService.languageIdCodec);
        }
        else {
            tokens = LineTokens.createEmpty(state.label, this._languageService.languageIdCodec);
        }
        const result = renderLines(new LineSource([tokens]), RenderOptions.fromEditor(this._editor).withSetWidth(false).withScrollBeyondLastColumn(0), [], line, true);
        line.style.width = `${result.minWidthInPx}px`;
        const rect = state.rect.map(r => r.withMargin(0, PADDING_HORIZONTALLY));
        return n.div({
            class: 'collapsedView',
            ref: this._viewRef,
            style: {
                position: 'absolute',
                ...rectToProps(reader => rect.read(reader)),
                overflow: 'hidden',
                boxSizing: 'border-box',
                cursor: 'pointer',
                border: styles.map(s => `1px solid ${s.border}`),
                borderRadius: '4px',
                backgroundColor: styles.map(s => s.background),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
            },
            onmousedown: e => {
                e.preventDefault(); // This prevents that the editor loses focus
            },
            onclick: (e) => { this._onDidClick.fire(new StandardMouseEvent(getWindow(e), e)); }
        }, [
            line
        ]);
    }
};
InlineEditsCustomView = __decorate([
    __param(3, IThemeService),
    __param(4, ILanguageService)
], InlineEditsCustomView);

export { InlineEditsCustomView };
