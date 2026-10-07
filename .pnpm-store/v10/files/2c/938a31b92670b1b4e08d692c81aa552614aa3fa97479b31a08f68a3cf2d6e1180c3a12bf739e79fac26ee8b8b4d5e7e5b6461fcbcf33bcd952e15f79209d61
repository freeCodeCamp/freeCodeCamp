import { createTrustedTypesPolicy } from '../../../../../../base/browser/trustedTypes.js';
import '../../../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../../../base/common/codicons.js';
import { Emitter, Event } from '../../../../../../base/common/event.js';
import { createHotClass } from '../../../../../../base/common/hotReloadHelpers.js';
import { Disposable, toDisposable, MutableDisposable, DisposableStore } from '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/observableInternal/index.js';
import { containsRTL, isBasicASCII } from '../../../../../../base/common/strings.js';
import { applyFontInfo } from '../../../../../browser/config/domFontInfo.js';
import { observableCodeEditor } from '../../../../../browser/observableCodeEditor.js';
import { EditorFontLigatures } from '../../../../../common/config/editorOptions.js';
import { StringEdit, StringReplacement } from '../../../../../common/core/edits/stringEdit.js';
import { Position } from '../../../../../common/core/position.js';
import { Range } from '../../../../../common/core/range.js';
import { StringBuilder } from '../../../../../common/core/stringBuilder.js';
import { ILanguageService } from '../../../../../common/languages/language.js';
import { InjectedTextCursorStops } from '../../../../../common/model.js';
import { LineTokens } from '../../../../../common/tokens/lineTokens.js';
import { LineDecoration } from '../../../../../common/viewLayout/lineDecorations.js';
import { renderViewLine, RenderLineInput } from '../../../../../common/viewLayout/viewLineRenderer.js';
import { GhostTextReplacement } from '../../model/ghostText.js';
import { RangeSingleLine } from '../../../../../common/core/ranges/rangeSingleLine.js';
import { ColumnRange } from '../../../../../common/core/ranges/columnRange.js';
import { addDisposableListener, getWindow, isHTMLElement } from '../../../../../../base/browser/dom.js';
import './ghostTextView.css';
import { StandardMouseEvent } from '../../../../../../base/browser/mouseEvent.js';
import { CodeEditorWidget } from '../../../../../browser/widget/codeEditor/codeEditorWidget.js';
import { TokenWithTextArray } from '../../../../../common/tokens/tokenWithTextArray.js';
import { sum } from '../../../../../../base/common/arrays.js';
import { observableValue } from '../../../../../../base/common/observableInternal/observables/observableValue.js';
import { derived } from '../../../../../../base/common/observableInternal/observables/derived.js';
import { autorunWithStore, autorun } from '../../../../../../base/common/observableInternal/reactions/autorun.js';
import { observableSignalFromEvent } from '../../../../../../base/common/observableInternal/observables/observableSignalFromEvent.js';

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
const GHOST_TEXT_CLASS_NAME = 'ghost-text';
let GhostTextView = class GhostTextView extends Disposable {
    static { this.hot = createHotClass(this); }
    constructor(_editor, _model, _options, _shouldKeepCursorStable, _isClickable, _languageService) {
        super();
        this._editor = _editor;
        this._model = _model;
        this._options = _options;
        this._shouldKeepCursorStable = _shouldKeepCursorStable;
        this._isClickable = _isClickable;
        this._languageService = _languageService;
        this._isDisposed = observableValue(this, false);
        this._editorObs = observableCodeEditor(this._editor);
        this._warningState = derived(reader => {
            const gt = this._model.ghostText.read(reader);
            if (!gt) {
                return undefined;
            }
            const warning = this._model.warning.read(reader);
            if (!warning) {
                return undefined;
            }
            return { lineNumber: gt.lineNumber, position: new Position(gt.lineNumber, gt.parts[0].column), icon: warning.icon };
        });
        this._onDidClick = this._register(new Emitter());
        this.onDidClick = this._onDidClick.event;
        this._useSyntaxHighlighting = this._options.map(o => o.syntaxHighlightingEnabled);
        this._extraClassNames = derived(this, reader => {
            const extraClasses = [...this._options.read(reader).extraClasses ?? []];
            if (this._useSyntaxHighlighting.read(reader)) {
                extraClasses.push('syntax-highlighted');
            }
            if (this._warningState.read(reader)) {
                extraClasses.push('warning');
            }
            const extraClassNames = extraClasses.map(c => ` ${c}`).join('');
            return extraClassNames;
        });
        this.uiState = derived(this, reader => {
            if (this._isDisposed.read(reader)) {
                return undefined;
            }
            const textModel = this._editorObs.model.read(reader);
            if (textModel !== this._model.targetTextModel.read(reader)) {
                return undefined;
            }
            const ghostText = this._model.ghostText.read(reader);
            if (!ghostText) {
                return undefined;
            }
            const replacedRange = ghostText instanceof GhostTextReplacement ? ghostText.columnRange : undefined;
            const syntaxHighlightingEnabled = this._useSyntaxHighlighting.read(reader);
            const extraClassNames = this._extraClassNames.read(reader);
            const { inlineTexts, additionalLines, hiddenRange, additionalLinesOriginalSuffix } = computeGhostTextViewData(ghostText, textModel, GHOST_TEXT_CLASS_NAME + extraClassNames);
            const currentLine = textModel.getLineContent(ghostText.lineNumber);
            const edit = new StringEdit(inlineTexts.map(t => StringReplacement.insert(t.column - 1, t.text)));
            const tokens = syntaxHighlightingEnabled ? textModel.tokenization.tokenizeLinesAt(ghostText.lineNumber, [edit.apply(currentLine), ...additionalLines.map(l => l.content)]) : undefined;
            const newRanges = edit.getNewRanges();
            const inlineTextsWithTokens = inlineTexts.map((t, idx) => ({ ...t, tokens: tokens?.[0]?.getTokensInRange(newRanges[idx]) }));
            const tokenizedAdditionalLines = additionalLines.map((l, idx) => {
                let content = tokens?.[idx + 1] ?? LineTokens.createEmpty(l.content, this._languageService.languageIdCodec);
                if (idx === additionalLines.length - 1 && additionalLinesOriginalSuffix) {
                    const t = TokenWithTextArray.fromLineTokens(textModel.tokenization.getLineTokens(additionalLinesOriginalSuffix.lineNumber));
                    const existingContent = t.slice(additionalLinesOriginalSuffix.columnRange.toZeroBasedOffsetRange());
                    content = TokenWithTextArray.fromLineTokens(content).append(existingContent).toLineTokens(content.languageIdCodec);
                }
                return {
                    content,
                    decorations: l.decorations,
                };
            });
            const cursorColumn = this._editor.getSelection()?.getStartPosition().column;
            const disjointInlineTexts = inlineTextsWithTokens.filter(inline => inline.text !== '');
            const hasInsertionOnCurrentLine = disjointInlineTexts.length !== 0;
            const renderData = {
                cursorColumnDistance: (hasInsertionOnCurrentLine ? disjointInlineTexts[0].column : 1) - cursorColumn,
                cursorLineDistance: hasInsertionOnCurrentLine ? 0 : (additionalLines.findIndex(line => line.content !== '') + 1),
                lineCountOriginal: hasInsertionOnCurrentLine ? 1 : 0,
                lineCountModified: additionalLines.length + (hasInsertionOnCurrentLine ? 1 : 0),
                characterCountOriginal: 0,
                characterCountModified: sum(disjointInlineTexts.map(inline => inline.text.length)) + sum(tokenizedAdditionalLines.map(line => line.content.getTextLength())),
                disjointReplacements: disjointInlineTexts.length + (additionalLines.length > 0 ? 1 : 0),
                sameShapeReplacements: disjointInlineTexts.length > 1 && tokenizedAdditionalLines.length === 0 ? disjointInlineTexts.every(inline => inline.text === disjointInlineTexts[0].text) : undefined,
            };
            this._model.handleInlineCompletionShown.read(reader)?.(renderData);
            return {
                replacedRange,
                inlineTexts: inlineTextsWithTokens,
                additionalLines: tokenizedAdditionalLines,
                hiddenRange,
                lineNumber: ghostText.lineNumber,
                additionalReservedLineCount: this._model.minReservedLineCount.read(reader),
                targetTextModel: textModel,
                syntaxHighlightingEnabled,
            };
        });
        this.decorations = derived(this, reader => {
            const uiState = this.uiState.read(reader);
            if (!uiState) {
                return [];
            }
            const decorations = [];
            const extraClassNames = this._extraClassNames.read(reader);
            if (uiState.replacedRange) {
                decorations.push({
                    range: uiState.replacedRange.toRange(uiState.lineNumber),
                    options: { inlineClassName: 'inline-completion-text-to-replace' + extraClassNames, description: 'GhostTextReplacement' }
                });
            }
            if (uiState.hiddenRange) {
                decorations.push({
                    range: uiState.hiddenRange.toRange(uiState.lineNumber),
                    options: { inlineClassName: 'ghost-text-hidden', description: 'ghost-text-hidden', }
                });
            }
            for (const p of uiState.inlineTexts) {
                decorations.push({
                    range: Range.fromPositions(new Position(uiState.lineNumber, p.column)),
                    options: {
                        description: 'ghost-text-decoration',
                        after: {
                            content: p.text,
                            tokens: p.tokens,
                            inlineClassName: (p.preview ? 'ghost-text-decoration-preview' : 'ghost-text-decoration')
                                + (this._isClickable ? ' clickable' : '')
                                + extraClassNames
                                + p.lineDecorations.map(d => ' ' + d.className).join(' '), // TODO: take the ranges into account for line decorations
                            cursorStops: InjectedTextCursorStops.Left,
                            attachedData: new GhostTextAttachedData(this),
                        },
                        showIfCollapsed: true,
                    }
                });
            }
            return decorations;
        });
        this._additionalLinesWidget = this._register(new AdditionalLinesWidget(this._editor, derived(reader => {
            /** @description lines */
            const uiState = this.uiState.read(reader);
            return uiState ? {
                lineNumber: uiState.lineNumber,
                additionalLines: uiState.additionalLines,
                minReservedLineCount: uiState.additionalReservedLineCount,
                targetTextModel: uiState.targetTextModel,
            } : undefined;
        }), this._shouldKeepCursorStable, this._isClickable));
        this._isInlineTextHovered = this._editorObs.isTargetHovered(p => p.target.type === 6 /* MouseTargetType.CONTENT_TEXT */ &&
            p.target.detail.injectedText?.options.attachedData instanceof GhostTextAttachedData &&
            p.target.detail.injectedText.options.attachedData.owner === this, this._store);
        this.isHovered = derived(this, reader => {
            if (this._isDisposed.read(reader)) {
                return false;
            }
            return this._isInlineTextHovered.read(reader) || this._additionalLinesWidget.isHovered.read(reader);
        });
        this.height = derived(this, reader => {
            const lineHeight = this._editorObs.getOption(75 /* EditorOption.lineHeight */).read(reader);
            return lineHeight + (this._additionalLinesWidget.viewZoneHeight.read(reader) ?? 0);
        });
        this._register(toDisposable(() => { this._isDisposed.set(true, undefined); }));
        this._register(this._editorObs.setDecorations(this.decorations));
        if (this._isClickable) {
            this._register(this._additionalLinesWidget.onDidClick((e) => this._onDidClick.fire(e)));
            this._register(this._editor.onMouseUp(e => {
                if (e.target.type !== 6 /* MouseTargetType.CONTENT_TEXT */) {
                    return;
                }
                const a = e.target.detail.injectedText?.options.attachedData;
                if (a instanceof GhostTextAttachedData && a.owner === this) {
                    this._onDidClick.fire(e.event);
                }
            }));
        }
        this._register(autorunWithStore((reader, store) => {
            {
                return;
            }
        }));
    }
    static getWarningWidgetContext(domNode) {
        // eslint-disable-next-line local/code-no-any-casts
        const data = domNode.ghostTextViewWarningWidgetData;
        if (data) {
            return data;
        }
        else if (domNode.parentElement) {
            return this.getWarningWidgetContext(domNode.parentElement);
        }
        return undefined;
    }
    ownsViewZone(viewZoneId) {
        return this._additionalLinesWidget.viewZoneId === viewZoneId;
    }
};
GhostTextView = __decorate([
    __param(5, ILanguageService)
], GhostTextView);
class GhostTextAttachedData {
    constructor(owner) {
        this.owner = owner;
    }
}
function computeGhostTextViewData(ghostText, textModel, ghostTextClassName) {
    const inlineTexts = [];
    const additionalLines = [];
    function addToAdditionalLines(ghLines, className) {
        if (additionalLines.length > 0) {
            const lastLine = additionalLines[additionalLines.length - 1];
            if (className) {
                lastLine.decorations.push(new LineDecoration(lastLine.content.length + 1, lastLine.content.length + 1 + ghLines[0].line.length, className, 0 /* InlineDecorationType.Regular */));
            }
            lastLine.content += ghLines[0].line;
            ghLines = ghLines.slice(1);
        }
        for (const ghLine of ghLines) {
            additionalLines.push({
                content: ghLine.line,
                decorations: className ? [new LineDecoration(1, ghLine.line.length + 1, className, 0 /* InlineDecorationType.Regular */), ...ghLine.lineDecorations] : [...ghLine.lineDecorations]
            });
        }
    }
    const textBufferLine = textModel.getLineContent(ghostText.lineNumber);
    let hiddenTextStartColumn = undefined;
    let lastIdx = 0;
    for (const part of ghostText.parts) {
        let ghLines = part.lines;
        if (hiddenTextStartColumn === undefined) {
            inlineTexts.push({ column: part.column, text: ghLines[0].line, preview: part.preview, lineDecorations: ghLines[0].lineDecorations });
            ghLines = ghLines.slice(1);
        }
        else {
            addToAdditionalLines([{ line: textBufferLine.substring(lastIdx, part.column - 1), lineDecorations: [] }], undefined);
        }
        if (ghLines.length > 0) {
            addToAdditionalLines(ghLines, ghostTextClassName);
            if (hiddenTextStartColumn === undefined && part.column <= textBufferLine.length) {
                hiddenTextStartColumn = part.column;
            }
        }
        lastIdx = part.column - 1;
    }
    let additionalLinesOriginalSuffix = undefined;
    if (hiddenTextStartColumn !== undefined) {
        additionalLinesOriginalSuffix = new RangeSingleLine(ghostText.lineNumber, new ColumnRange(lastIdx + 1, textBufferLine.length + 1));
    }
    const hiddenRange = hiddenTextStartColumn !== undefined ? new ColumnRange(hiddenTextStartColumn, textBufferLine.length + 1) : undefined;
    return {
        inlineTexts,
        additionalLines,
        hiddenRange,
        additionalLinesOriginalSuffix,
    };
}
class AdditionalLinesWidget extends Disposable {
    get viewZoneId() { return this._viewZoneInfo?.viewZoneId; }
    get viewZoneHeight() { return this._viewZoneHeight; }
    constructor(_editor, _lines, _shouldKeepCursorStable, _isClickable) {
        super();
        this._editor = _editor;
        this._lines = _lines;
        this._shouldKeepCursorStable = _shouldKeepCursorStable;
        this._isClickable = _isClickable;
        this._viewZoneHeight = observableValue('viewZoneHeight', undefined);
        this.editorOptionsChanged = observableSignalFromEvent('editorOptionChanged', Event.filter(this._editor.onDidChangeConfiguration, e => e.hasChanged(40 /* EditorOption.disableMonospaceOptimizations */)
            || e.hasChanged(133 /* EditorOption.stopRenderingLineAfter */)
            || e.hasChanged(113 /* EditorOption.renderWhitespace */)
            || e.hasChanged(108 /* EditorOption.renderControlCharacters */)
            || e.hasChanged(60 /* EditorOption.fontLigatures */)
            || e.hasChanged(59 /* EditorOption.fontInfo */)
            || e.hasChanged(75 /* EditorOption.lineHeight */)));
        this._onDidClick = this._register(new Emitter());
        this.onDidClick = this._onDidClick.event;
        this._viewZoneListener = this._register(new MutableDisposable());
        this.isHovered = observableCodeEditor(this._editor).isTargetHovered(p => isTargetGhostText(p.target.element), this._store);
        this.hasBeenAccepted = false;
        if (this._editor instanceof CodeEditorWidget && this._shouldKeepCursorStable) {
            this._register(this._editor.onBeforeExecuteEdit(e => this.hasBeenAccepted = e.source === 'inlineSuggestion.accept'));
        }
        this._register(autorun(reader => {
            /** @description update view zone */
            const lines = this._lines.read(reader);
            this.editorOptionsChanged.read(reader);
            if (lines) {
                this.hasBeenAccepted = false;
                this.updateLines(lines.lineNumber, lines.additionalLines, lines.minReservedLineCount);
            }
            else {
                this.clear();
            }
        }));
    }
    dispose() {
        super.dispose();
        this.clear();
    }
    clear() {
        this._viewZoneListener.clear();
        this._editor.changeViewZones((changeAccessor) => {
            this.removeActiveViewZone(changeAccessor);
        });
    }
    updateLines(lineNumber, additionalLines, minReservedLineCount) {
        const textModel = this._editor.getModel();
        if (!textModel) {
            return;
        }
        const { tabSize } = textModel.getOptions();
        this._editor.changeViewZones((changeAccessor) => {
            const store = new DisposableStore();
            this.removeActiveViewZone(changeAccessor);
            const heightInLines = Math.max(additionalLines.length, minReservedLineCount);
            if (heightInLines > 0) {
                const domNode = document.createElement('div');
                renderLines(domNode, tabSize, additionalLines, this._editor.getOptions(), this._isClickable);
                if (this._isClickable) {
                    store.add(addDisposableListener(domNode, 'mousedown', (e) => {
                        e.preventDefault(); // This prevents that the editor loses focus
                    }));
                    store.add(addDisposableListener(domNode, 'click', (e) => {
                        if (isTargetGhostText(e.target)) {
                            this._onDidClick.fire(new StandardMouseEvent(getWindow(e), e));
                        }
                    }));
                }
                this.addViewZone(changeAccessor, lineNumber, heightInLines, domNode);
            }
            this._viewZoneListener.value = store;
        });
    }
    addViewZone(changeAccessor, afterLineNumber, heightInLines, domNode) {
        const id = changeAccessor.addZone({
            afterLineNumber: afterLineNumber,
            heightInLines: heightInLines,
            domNode,
            afterColumnAffinity: 1 /* PositionAffinity.Right */,
            onComputedHeight: (height) => {
                this._viewZoneHeight.set(height, undefined); // TODO: can a transaction be used to avoid flickering?
            }
        });
        this.keepCursorStable(afterLineNumber, heightInLines);
        this._viewZoneInfo = { viewZoneId: id, heightInLines, lineNumber: afterLineNumber };
    }
    removeActiveViewZone(changeAccessor) {
        if (this._viewZoneInfo) {
            changeAccessor.removeZone(this._viewZoneInfo.viewZoneId);
            if (!this.hasBeenAccepted) {
                this.keepCursorStable(this._viewZoneInfo.lineNumber, -this._viewZoneInfo.heightInLines);
            }
            this._viewZoneInfo = undefined;
            this._viewZoneHeight.set(undefined, undefined);
        }
    }
    keepCursorStable(lineNumber, heightInLines) {
        if (!this._shouldKeepCursorStable) {
            return;
        }
        const cursorLineNumber = this._editor.getSelection()?.getStartPosition()?.lineNumber;
        if (cursorLineNumber !== undefined && lineNumber < cursorLineNumber) {
            this._editor.setScrollTop(this._editor.getScrollTop() + heightInLines * this._editor.getOption(75 /* EditorOption.lineHeight */));
        }
    }
}
function isTargetGhostText(target) {
    return isHTMLElement(target) && target.classList.contains(GHOST_TEXT_CLASS_NAME);
}
function renderLines(domNode, tabSize, lines, opts, isClickable) {
    const disableMonospaceOptimizations = opts.get(40 /* EditorOption.disableMonospaceOptimizations */);
    const stopRenderingLineAfter = opts.get(133 /* EditorOption.stopRenderingLineAfter */);
    // To avoid visual confusion, we don't want to render visible whitespace
    const renderWhitespace = 'none';
    const renderControlCharacters = opts.get(108 /* EditorOption.renderControlCharacters */);
    const fontLigatures = opts.get(60 /* EditorOption.fontLigatures */);
    const fontInfo = opts.get(59 /* EditorOption.fontInfo */);
    const lineHeight = opts.get(75 /* EditorOption.lineHeight */);
    let classNames = 'suggest-preview-text';
    if (isClickable) {
        classNames += ' clickable';
    }
    const sb = new StringBuilder(10000);
    sb.appendString(`<div class="${classNames}">`);
    for (let i = 0, len = lines.length; i < len; i++) {
        const lineData = lines[i];
        const lineTokens = lineData.content;
        sb.appendString('<div class="view-line');
        sb.appendString('" style="top:');
        sb.appendString(String(i * lineHeight));
        sb.appendString('px;width:1000000px;">');
        const line = lineTokens.getLineContent();
        const isBasicASCII$1 = isBasicASCII(line);
        const containsRTL$1 = containsRTL(line);
        renderViewLine(new RenderLineInput((fontInfo.isMonospace && !disableMonospaceOptimizations), fontInfo.canUseHalfwidthRightwardsArrow, line, false, isBasicASCII$1, containsRTL$1, 0, lineTokens, lineData.decorations, tabSize, 0, fontInfo.spaceWidth, fontInfo.middotWidth, fontInfo.wsmiddotWidth, stopRenderingLineAfter, renderWhitespace, renderControlCharacters, fontLigatures !== EditorFontLigatures.OFF, null, null, 0), sb);
        sb.appendString('</div>');
    }
    sb.appendString('</div>');
    applyFontInfo(domNode, fontInfo);
    const html = sb.build();
    const trustedhtml = ttPolicy ? ttPolicy.createHTML(html) : html;
    domNode.innerHTML = trustedhtml;
}
const ttPolicy = createTrustedTypesPolicy('editorGhostText', { createHTML: value => value });

export { AdditionalLinesWidget, GhostTextView, ttPolicy };
