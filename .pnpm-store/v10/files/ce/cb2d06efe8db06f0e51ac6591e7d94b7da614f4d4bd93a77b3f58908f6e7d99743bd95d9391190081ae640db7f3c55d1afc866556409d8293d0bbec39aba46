import { h, addStandardDisposableListener, EventType, addDisposableListener } from '../../../../../base/browser/dom.js';
import { createFastDomNode } from '../../../../../base/browser/fastDomNode.js';
import { ScrollbarState } from '../../../../../base/browser/ui/scrollbar/scrollbarState.js';
import { Disposable } from '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observableInternal/index.js';
import { appendRemoveOnDispose } from '../utils.js';
import { Position } from '../../../../common/core/position.js';
import { OverviewRulerZone } from '../../../../common/viewModel/overviewZoneManager.js';
import '../../../../../platform/theme/common/colorUtils.js';
import '../../../../../platform/theme/common/colors/baseColors.js';
import '../../../../../platform/theme/common/colors/chartsColors.js';
import { diffOverviewRulerInserted, defaultInsertColor, diffInserted, diffOverviewRulerRemoved, defaultRemoveColor, diffRemoved } from '../../../../../platform/theme/common/colors/editorColors.js';
import '../../../../../platform/theme/common/colors/inputColors.js';
import '../../../../../platform/theme/common/colors/listColors.js';
import '../../../../../platform/theme/common/colors/menuColors.js';
import '../../../../../platform/theme/common/colors/minimapColors.js';
import '../../../../../platform/theme/common/colors/miscColors.js';
import '../../../../../platform/theme/common/colors/quickpickColors.js';
import '../../../../../platform/theme/common/colors/searchColors.js';
import { IThemeService } from '../../../../../platform/theme/common/themeService.js';
import { observableFromEvent } from '../../../../../base/common/observableInternal/observables/observableFromEvent.js';
import { derived } from '../../../../../base/common/observableInternal/observables/derived.js';
import { autorunWithStore, autorun } from '../../../../../base/common/observableInternal/reactions/autorun.js';
import { observableSignalFromEvent } from '../../../../../base/common/observableInternal/observables/observableSignalFromEvent.js';

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
var OverviewRulerFeature_1;
let OverviewRulerFeature = class OverviewRulerFeature extends Disposable {
    static { OverviewRulerFeature_1 = this; }
    static { this.ONE_OVERVIEW_WIDTH = 15; }
    static { this.ENTIRE_DIFF_OVERVIEW_WIDTH = this.ONE_OVERVIEW_WIDTH * 2; }
    constructor(_editors, _rootElement, _diffModel, _rootWidth, _rootHeight, _modifiedEditorLayoutInfo, _themeService) {
        super();
        this._editors = _editors;
        this._rootElement = _rootElement;
        this._diffModel = _diffModel;
        this._rootWidth = _rootWidth;
        this._rootHeight = _rootHeight;
        this._modifiedEditorLayoutInfo = _modifiedEditorLayoutInfo;
        this._themeService = _themeService;
        this.width = OverviewRulerFeature_1.ENTIRE_DIFF_OVERVIEW_WIDTH;
        const currentColorTheme = observableFromEvent(this._themeService.onDidColorThemeChange, () => this._themeService.getColorTheme());
        const currentColors = derived(reader => {
            /** @description colors */
            const theme = currentColorTheme.read(reader);
            const insertColor = theme.getColor(diffOverviewRulerInserted) || (theme.getColor(diffInserted) || defaultInsertColor).transparent(2);
            const removeColor = theme.getColor(diffOverviewRulerRemoved) || (theme.getColor(diffRemoved) || defaultRemoveColor).transparent(2);
            return { insertColor, removeColor };
        });
        const viewportDomElement = createFastDomNode(document.createElement('div'));
        viewportDomElement.setClassName('diffViewport');
        viewportDomElement.setPosition('absolute');
        const diffOverviewRoot = h('div.diffOverview', {
            style: { position: 'absolute', top: '0px', width: OverviewRulerFeature_1.ENTIRE_DIFF_OVERVIEW_WIDTH + 'px' }
        }).root;
        this._register(appendRemoveOnDispose(diffOverviewRoot, viewportDomElement.domNode));
        this._register(addStandardDisposableListener(diffOverviewRoot, EventType.POINTER_DOWN, (e) => {
            this._editors.modified.delegateVerticalScrollbarPointerDown(e);
        }));
        this._register(addDisposableListener(diffOverviewRoot, EventType.MOUSE_WHEEL, (e) => {
            this._editors.modified.delegateScrollFromMouseWheelEvent(e);
        }, { passive: false }));
        this._register(appendRemoveOnDispose(this._rootElement, diffOverviewRoot));
        this._register(autorunWithStore((reader, store) => {
            /** @description recreate overview rules when model changes */
            const m = this._diffModel.read(reader);
            const originalOverviewRuler = this._editors.original.createOverviewRuler('original diffOverviewRuler');
            if (originalOverviewRuler) {
                store.add(originalOverviewRuler);
                store.add(appendRemoveOnDispose(diffOverviewRoot, originalOverviewRuler.getDomNode()));
            }
            const modifiedOverviewRuler = this._editors.modified.createOverviewRuler('modified diffOverviewRuler');
            if (modifiedOverviewRuler) {
                store.add(modifiedOverviewRuler);
                store.add(appendRemoveOnDispose(diffOverviewRoot, modifiedOverviewRuler.getDomNode()));
            }
            if (!originalOverviewRuler || !modifiedOverviewRuler) {
                // probably no model
                return;
            }
            const origViewZonesChanged = observableSignalFromEvent('viewZoneChanged', this._editors.original.onDidChangeViewZones);
            const modViewZonesChanged = observableSignalFromEvent('viewZoneChanged', this._editors.modified.onDidChangeViewZones);
            const origHiddenRangesChanged = observableSignalFromEvent('hiddenRangesChanged', this._editors.original.onDidChangeHiddenAreas);
            const modHiddenRangesChanged = observableSignalFromEvent('hiddenRangesChanged', this._editors.modified.onDidChangeHiddenAreas);
            store.add(autorun(reader => {
                /** @description set overview ruler zones */
                origViewZonesChanged.read(reader);
                modViewZonesChanged.read(reader);
                origHiddenRangesChanged.read(reader);
                modHiddenRangesChanged.read(reader);
                const colors = currentColors.read(reader);
                const diff = m?.diff.read(reader)?.mappings;
                function createZones(ranges, color, editor) {
                    const vm = editor._getViewModel();
                    if (!vm) {
                        return [];
                    }
                    return ranges
                        .filter(d => d.length > 0)
                        .map(r => {
                        const start = vm.coordinatesConverter.convertModelPositionToViewPosition(new Position(r.startLineNumber, 1));
                        const end = vm.coordinatesConverter.convertModelPositionToViewPosition(new Position(r.endLineNumberExclusive, 1));
                        // By computing the lineCount, we won't ask the view model later for the bottom vertical position.
                        // (The view model will take into account the alignment viewzones, which will give
                        // modifications and deletetions always the same height.)
                        const lineCount = end.lineNumber - start.lineNumber;
                        return new OverviewRulerZone(start.lineNumber, end.lineNumber, lineCount, color.toString());
                    });
                }
                const originalZones = createZones((diff || []).map(d => d.lineRangeMapping.original), colors.removeColor, this._editors.original);
                const modifiedZones = createZones((diff || []).map(d => d.lineRangeMapping.modified), colors.insertColor, this._editors.modified);
                originalOverviewRuler?.setZones(originalZones);
                modifiedOverviewRuler?.setZones(modifiedZones);
            }));
            store.add(autorun(reader => {
                /** @description layout overview ruler */
                const height = this._rootHeight.read(reader);
                const width = this._rootWidth.read(reader);
                const layoutInfo = this._modifiedEditorLayoutInfo.read(reader);
                if (layoutInfo) {
                    const freeSpace = OverviewRulerFeature_1.ENTIRE_DIFF_OVERVIEW_WIDTH - 2 * OverviewRulerFeature_1.ONE_OVERVIEW_WIDTH;
                    originalOverviewRuler.setLayout({
                        top: 0,
                        height: height,
                        right: freeSpace + OverviewRulerFeature_1.ONE_OVERVIEW_WIDTH,
                        width: OverviewRulerFeature_1.ONE_OVERVIEW_WIDTH,
                    });
                    modifiedOverviewRuler.setLayout({
                        top: 0,
                        height: height,
                        right: 0,
                        width: OverviewRulerFeature_1.ONE_OVERVIEW_WIDTH,
                    });
                    const scrollTop = this._editors.modifiedScrollTop.read(reader);
                    const scrollHeight = this._editors.modifiedScrollHeight.read(reader);
                    const scrollBarOptions = this._editors.modified.getOption(117 /* EditorOption.scrollbar */);
                    const state = new ScrollbarState(scrollBarOptions.verticalHasArrows ? scrollBarOptions.arrowSize : 0, scrollBarOptions.verticalScrollbarSize, 0, layoutInfo.height, scrollHeight, scrollTop);
                    viewportDomElement.setTop(state.getSliderPosition());
                    viewportDomElement.setHeight(state.getSliderSize());
                }
                else {
                    viewportDomElement.setTop(0);
                    viewportDomElement.setHeight(0);
                }
                diffOverviewRoot.style.height = height + 'px';
                diffOverviewRoot.style.left = (width - OverviewRulerFeature_1.ENTIRE_DIFF_OVERVIEW_WIDTH) + 'px';
                viewportDomElement.setWidth(OverviewRulerFeature_1.ENTIRE_DIFF_OVERVIEW_WIDTH);
            }));
        }));
    }
};
OverviewRulerFeature = OverviewRulerFeature_1 = __decorate([
    __param(6, IThemeService)
], OverviewRulerFeature);

export { OverviewRulerFeature };
