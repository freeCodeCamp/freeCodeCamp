import { n, getWindow } from '../../../../../../../base/browser/dom.js';
import { StandardMouseEvent } from '../../../../../../../base/browser/mouseEvent.js';
import { Emitter } from '../../../../../../../base/common/event.js';
import { Disposable } from '../../../../../../../base/common/lifecycle.js';
import '../../../../../../../base/common/observableInternal/index.js';
import { asCssVariable } from '../../../../../../../platform/theme/common/colorUtils.js';
import '../../../../../../../platform/theme/common/colors/baseColors.js';
import '../../../../../../../platform/theme/common/colors/chartsColors.js';
import { editorBackground, editorHoverForeground } from '../../../../../../../platform/theme/common/colors/editorColors.js';
import '../../../../../../../platform/theme/common/colors/inputColors.js';
import '../../../../../../../platform/theme/common/colors/listColors.js';
import '../../../../../../../platform/theme/common/colors/menuColors.js';
import '../../../../../../../platform/theme/common/colors/minimapColors.js';
import '../../../../../../../platform/theme/common/colors/miscColors.js';
import '../../../../../../../platform/theme/common/colors/quickpickColors.js';
import '../../../../../../../platform/theme/common/colors/searchColors.js';
import { renderLines, RenderOptions, LineSource } from '../../../../../../browser/widget/diffEditor/components/diffEditorViewZones/renderLines.js';
import { Point } from '../../../../../../common/core/2d/point.js';
import { Rect } from '../../../../../../common/core/2d/rect.js';
import { StringReplacement } from '../../../../../../common/core/edits/stringEdit.js';
import { OffsetRange } from '../../../../../../common/core/ranges/offsetRange.js';
import { ILanguageService } from '../../../../../../common/languages/language.js';
import { TokenArray, LineTokens } from '../../../../../../common/tokens/lineTokens.js';
import { getOriginalBorderColor, getModifiedBorderColor, modifiedChangedTextOverlayColor, originalChangedTextOverlayColor } from '../theme.js';
import { mapOutFalsy, rectToProps, getEditorValidOverlayRect } from '../utils/utils.js';
import { constObservable } from '../../../../../../../base/common/observableInternal/observables/constObservable.js';
import { observableValue } from '../../../../../../../base/common/observableInternal/observables/observableValue.js';
import { derived } from '../../../../../../../base/common/observableInternal/observables/derived.js';

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
const BORDER_WIDTH = 1;
let InlineEditsWordReplacementView = class InlineEditsWordReplacementView extends Disposable {
    static { this.MAX_LENGTH = 100; }
    constructor(_editor, 
    /** Must be single-line in both sides */
    _edit, _tabAction, _languageService) {
        super();
        this._editor = _editor;
        this._edit = _edit;
        this._tabAction = _tabAction;
        this._languageService = _languageService;
        this._onDidClick = this._register(new Emitter());
        this.onDidClick = this._onDidClick.event;
        this._start = this._editor.observePosition(constObservable(this._edit.range.getStartPosition()), this._store);
        this._end = this._editor.observePosition(constObservable(this._edit.range.getEndPosition()), this._store);
        this._line = document.createElement('div');
        this._hoverableElement = observableValue(this, null);
        this.isHovered = this._hoverableElement.map((e, reader) => e?.didMouseMoveDuringHover.read(reader) ?? false);
        this._renderTextEffect = derived(this, _reader => {
            const tm = this._editor.model.get();
            const origLine = tm.getLineContent(this._edit.range.startLineNumber);
            const edit = StringReplacement.replace(new OffsetRange(this._edit.range.startColumn - 1, this._edit.range.endColumn - 1), this._edit.text);
            const lineToTokenize = edit.replace(origLine);
            const t = tm.tokenization.tokenizeLinesAt(this._edit.range.startLineNumber, [lineToTokenize])?.[0];
            let tokens;
            if (t) {
                tokens = TokenArray.fromLineTokens(t).slice(edit.getRangeAfterReplace()).toLineTokens(this._edit.text, this._languageService.languageIdCodec);
            }
            else {
                tokens = LineTokens.createEmpty(this._edit.text, this._languageService.languageIdCodec);
            }
            const res = renderLines(new LineSource([tokens]), RenderOptions.fromEditor(this._editor.editor).withSetWidth(false).withScrollBeyondLastColumn(0), [], this._line, true);
            this._line.style.width = `${res.minWidthInPx}px`;
        });
        const modifiedLineHeight = this._editor.observeLineHeightForPosition(this._edit.range.getStartPosition());
        this._layout = derived(this, reader => {
            this._renderTextEffect.read(reader);
            const widgetStart = this._start.read(reader);
            const widgetEnd = this._end.read(reader);
            // TODO@hediet better about widgetStart and widgetEnd in a single transaction!
            if (!widgetStart || !widgetEnd || widgetStart.x > widgetEnd.x || widgetStart.y > widgetEnd.y) {
                return undefined;
            }
            const lineHeight = modifiedLineHeight.read(reader);
            const scrollLeft = this._editor.scrollLeft.read(reader);
            const w = this._editor.getOption(59 /* EditorOption.fontInfo */).read(reader).typicalHalfwidthCharacterWidth;
            const modifiedLeftOffset = 3 * w;
            const modifiedTopOffset = 4;
            const modifiedOffset = new Point(modifiedLeftOffset, modifiedTopOffset);
            const originalLine = Rect.fromPoints(widgetStart, widgetEnd).withHeight(lineHeight).translateX(-scrollLeft);
            const modifiedLine = Rect.fromPointSize(originalLine.getLeftBottom().add(modifiedOffset), new Point(this._edit.text.length * w, originalLine.height));
            const lowerBackground = modifiedLine.withLeft(originalLine.left);
            // debugView(debugLogRects({ lowerBackground }, this._editor.editor.getContainerDomNode()), reader);
            return {
                originalLine,
                modifiedLine,
                lowerBackground,
                lineHeight,
            };
        });
        this.minEditorScrollHeight = derived(this, reader => {
            const layout = mapOutFalsy(this._layout).read(reader);
            if (!layout) {
                return 0;
            }
            return layout.read(reader).modifiedLine.bottom + BORDER_WIDTH + this._editor.editor.getScrollTop();
        });
        this._root = n.div({
            class: 'word-replacement',
        }, [
            derived(this, reader => {
                const layout = mapOutFalsy(this._layout).read(reader);
                if (!layout) {
                    return [];
                }
                const originalBorderColor = getOriginalBorderColor(this._tabAction).map(c => asCssVariable(c)).read(reader);
                const modifiedBorderColor = getModifiedBorderColor(this._tabAction).map(c => asCssVariable(c)).read(reader);
                return [
                    n.div({
                        style: {
                            position: 'absolute',
                            ...rectToProps((r) => getEditorValidOverlayRect(this._editor).read(r)),
                            overflow: 'hidden',
                            pointerEvents: 'none',
                        }
                    }, [
                        n.div({
                            style: {
                                position: 'absolute',
                                ...rectToProps(reader => layout.read(reader).lowerBackground.withMargin(BORDER_WIDTH, 2 * BORDER_WIDTH, BORDER_WIDTH, 0)),
                                background: asCssVariable(editorBackground),
                                //boxShadow: `${asCssVariable(scrollbarShadow)} 0 6px 6px -6px`,
                                cursor: 'pointer',
                                pointerEvents: 'auto',
                            },
                            onmousedown: e => {
                                e.preventDefault(); // This prevents that the editor loses focus
                            },
                            onmouseup: (e) => this._onDidClick.fire(new StandardMouseEvent(getWindow(e), e)),
                            obsRef: (elem) => {
                                this._hoverableElement.set(elem, undefined);
                            }
                        }),
                        n.div({
                            style: {
                                position: 'absolute',
                                ...rectToProps(reader => layout.read(reader).modifiedLine.withMargin(BORDER_WIDTH, 2 * BORDER_WIDTH)),
                                fontFamily: this._editor.getOption(58 /* EditorOption.fontFamily */),
                                fontSize: this._editor.getOption(61 /* EditorOption.fontSize */),
                                fontWeight: this._editor.getOption(62 /* EditorOption.fontWeight */),
                                pointerEvents: 'none',
                                boxSizing: 'border-box',
                                borderRadius: '4px',
                                border: `${BORDER_WIDTH}px solid ${modifiedBorderColor}`,
                                background: asCssVariable(modifiedChangedTextOverlayColor),
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                outline: `2px solid ${asCssVariable(editorBackground)}`,
                            }
                        }, [this._line]),
                        n.div({
                            style: {
                                position: 'absolute',
                                ...rectToProps(reader => layout.read(reader).originalLine.withMargin(BORDER_WIDTH)),
                                boxSizing: 'border-box',
                                borderRadius: '4px',
                                border: `${BORDER_WIDTH}px solid ${originalBorderColor}`,
                                background: asCssVariable(originalChangedTextOverlayColor),
                                pointerEvents: 'none',
                            }
                        }, []),
                        n.svg({
                            width: 11,
                            height: 14,
                            viewBox: '0 0 11 14',
                            fill: 'none',
                            style: {
                                position: 'absolute',
                                left: layout.map(l => l.modifiedLine.left - 16),
                                top: layout.map(l => l.modifiedLine.top + Math.round((l.lineHeight - 14 - 5) / 2)),
                            }
                        }, [
                            n.svgElem('path', {
                                d: 'M1 0C1 2.98966 1 5.92087 1 8.49952C1 9.60409 1.89543 10.5 3 10.5H10.5',
                                stroke: asCssVariable(editorHoverForeground),
                            }),
                            n.svgElem('path', {
                                d: 'M6 7.5L9.99999 10.49998L6 13.5',
                                stroke: asCssVariable(editorHoverForeground),
                            })
                        ]),
                    ])
                ];
            })
        ]).keepUpdated(this._store);
        this._register(this._editor.createOverlayWidget({
            domNode: this._root.element,
            minContentWidthInPx: constObservable(0),
            position: constObservable({ preference: { top: 0, left: 0 } }),
            allowEditorOverflow: false,
        }));
    }
};
InlineEditsWordReplacementView = __decorate([
    __param(3, ILanguageService)
], InlineEditsWordReplacementView);

export { InlineEditsWordReplacementView };
