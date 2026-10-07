import { h, addDisposableListener, EventType } from '../../../../../base/browser/dom.js';
import { Disposable } from '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observableInternal/index.js';
import { MenuWorkbenchToolBar } from '../../../../../platform/actions/browser/toolbar.js';
import { IMenuService, MenuId } from '../../../../../platform/actions/common/actions.js';
import { IContextKeyService } from '../../../../../platform/contextkey/common/contextkey.js';
import { WorkbenchHoverDelegate } from '../../../../../platform/hover/browser/hover.js';
import { IInstantiationService } from '../../../../../platform/instantiation/common/instantiation.js';
import { LineRangeSet, LineRange } from '../../../../common/core/ranges/lineRange.js';
import { OffsetRange } from '../../../../common/core/ranges/offsetRange.js';
import { Range } from '../../../../common/core/range.js';
import { TextEdit } from '../../../../common/core/edits/textEdit.js';
import { DetailedLineRangeMapping } from '../../../../common/diff/rangeMapping.js';
import { TextModelText } from '../../../../common/model/textModelText.js';
import { ActionRunnerWithContext } from '../../multiDiffEditor/utils.js';
import { DiffEditorSash } from '../components/diffEditorSash.js';
import { prependRemoveOnDispose, applyStyle, appendRemoveOnDispose } from '../utils.js';
import { EditorGutter } from '../utils/editorGutter.js';
import { derived, derivedDisposable, derivedWithSetter } from '../../../../../base/common/observableInternal/observables/derived.js';
import { observableFromEvent } from '../../../../../base/common/observableInternal/observables/observableFromEvent.js';
import { observableValue } from '../../../../../base/common/observableInternal/observables/observableValue.js';
import { autorun, autorunWithStore } from '../../../../../base/common/observableInternal/reactions/autorun.js';

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
const emptyArr = [];
const width = 35;
let DiffEditorGutter = class DiffEditorGutter extends Disposable {
    constructor(diffEditorRoot, _diffModel, _editors, _options, _sashLayout, _boundarySashes, _instantiationService, _contextKeyService, _menuService) {
        super();
        this._diffModel = _diffModel;
        this._editors = _editors;
        this._options = _options;
        this._sashLayout = _sashLayout;
        this._boundarySashes = _boundarySashes;
        this._instantiationService = _instantiationService;
        this._contextKeyService = _contextKeyService;
        this._menuService = _menuService;
        this._menu = this._register(this._menuService.createMenu(MenuId.DiffEditorHunkToolbar, this._contextKeyService));
        this._actions = observableFromEvent(this, this._menu.onDidChange, () => this._menu.getActions());
        this._hasActions = this._actions.map(a => a.length > 0);
        this._showSash = derived(this, reader => this._options.renderSideBySide.read(reader) && this._hasActions.read(reader));
        this.width = derived(this, reader => this._hasActions.read(reader) ? width : 0);
        this.elements = h('div.gutter@gutter', { style: { position: 'absolute', height: '100%', width: width + 'px' } }, []);
        this._currentDiff = derived(this, (reader) => {
            const model = this._diffModel.read(reader);
            if (!model) {
                return undefined;
            }
            const mappings = model.diff.read(reader)?.mappings;
            const cursorPosition = this._editors.modifiedCursor.read(reader);
            if (!cursorPosition) {
                return undefined;
            }
            return mappings?.find(m => m.lineRangeMapping.modified.contains(cursorPosition.lineNumber));
        });
        this._selectedDiffs = derived(this, (reader) => {
            /** @description selectedDiffs */
            const model = this._diffModel.read(reader);
            const diff = model?.diff.read(reader);
            // Return `emptyArr` because it is a constant. [] is always a new array and would trigger a change.
            if (!diff) {
                return emptyArr;
            }
            const selections = this._editors.modifiedSelections.read(reader);
            if (selections.every(s => s.isEmpty())) {
                return emptyArr;
            }
            const selectedLineNumbers = new LineRangeSet(selections.map(s => LineRange.fromRangeInclusive(s)));
            const selectedMappings = diff.mappings.filter(m => m.lineRangeMapping.innerChanges && selectedLineNumbers.intersects(m.lineRangeMapping.modified));
            const result = selectedMappings.map(mapping => ({
                mapping,
                rangeMappings: mapping.lineRangeMapping.innerChanges.filter(c => selections.some(s => Range.areIntersecting(c.modifiedRange, s)))
            }));
            if (result.length === 0 || result.every(r => r.rangeMappings.length === 0)) {
                return emptyArr;
            }
            return result;
        });
        this._register(prependRemoveOnDispose(diffEditorRoot, this.elements.root));
        this._register(addDisposableListener(this.elements.root, 'click', () => {
            this._editors.modified.focus();
        }));
        this._register(applyStyle(this.elements.root, { display: this._hasActions.map(a => a ? 'block' : 'none') }));
        derivedDisposable(this, reader => {
            const showSash = this._showSash.read(reader);
            return !showSash ? undefined : new DiffEditorSash(diffEditorRoot, this._sashLayout.dimensions, this._options.enableSplitViewResizing, this._boundarySashes, derivedWithSetter(this, reader => this._sashLayout.sashLeft.read(reader) - width, (v, tx) => this._sashLayout.sashLeft.set(v + width, tx)), () => this._sashLayout.resetSash());
        }).recomputeInitiallyAndOnChange(this._store);
        const gutterItems = derived(this, reader => {
            const model = this._diffModel.read(reader);
            if (!model) {
                return [];
            }
            const diffs = model.diff.read(reader);
            if (!diffs) {
                return [];
            }
            const selection = this._selectedDiffs.read(reader);
            if (selection.length > 0) {
                const m = DetailedLineRangeMapping.fromRangeMappings(selection.flatMap(s => s.rangeMappings));
                return [
                    new DiffGutterItem(m, true, MenuId.DiffEditorSelectionToolbar, undefined, model.model.original.uri, model.model.modified.uri)
                ];
            }
            const currentDiff = this._currentDiff.read(reader);
            return diffs.mappings.map(m => new DiffGutterItem(m.lineRangeMapping.withInnerChangesFromLineRanges(), m.lineRangeMapping === currentDiff?.lineRangeMapping, MenuId.DiffEditorHunkToolbar, undefined, model.model.original.uri, model.model.modified.uri));
        });
        this._register(new EditorGutter(this._editors.modified, this.elements.root, {
            getIntersectingGutterItems: (range, reader) => gutterItems.read(reader),
            createView: (item, target) => {
                return this._instantiationService.createInstance(DiffToolBar, item, target, this);
            },
        }));
        this._register(addDisposableListener(this.elements.gutter, EventType.MOUSE_WHEEL, (e) => {
            if (this._editors.modified.getOption(117 /* EditorOption.scrollbar */).handleMouseWheel) {
                this._editors.modified.delegateScrollFromMouseWheelEvent(e);
            }
        }, { passive: false }));
    }
    computeStagedValue(mapping) {
        const c = mapping.innerChanges ?? [];
        const modified = new TextModelText(this._editors.modifiedModel.get());
        const original = new TextModelText(this._editors.original.getModel());
        const edit = new TextEdit(c.map(c => c.toTextEdit(modified)));
        const value = edit.apply(original);
        return value;
    }
    layout(left) {
        this.elements.gutter.style.left = left + 'px';
    }
};
DiffEditorGutter = __decorate([
    __param(6, IInstantiationService),
    __param(7, IContextKeyService),
    __param(8, IMenuService)
], DiffEditorGutter);
class DiffGutterItem {
    constructor(mapping, showAlways, menuId, rangeOverride, originalUri, modifiedUri) {
        this.mapping = mapping;
        this.showAlways = showAlways;
        this.menuId = menuId;
        this.rangeOverride = rangeOverride;
        this.originalUri = originalUri;
        this.modifiedUri = modifiedUri;
    }
    get id() { return this.mapping.modified.toString(); }
    get range() { return this.rangeOverride ?? this.mapping.modified; }
}
let DiffToolBar = class DiffToolBar extends Disposable {
    constructor(_item, target, gutter, instantiationService) {
        super();
        this._item = _item;
        this._elements = h('div.gutterItem', { style: { height: '20px', width: '34px' } }, [
            h('div.background@background', {}, []),
            h('div.buttons@buttons', {}, []),
        ]);
        this._showAlways = this._item.map(this, item => item.showAlways);
        this._menuId = this._item.map(this, item => item.menuId);
        this._isSmall = observableValue(this, false);
        this._lastItemRange = undefined;
        this._lastViewRange = undefined;
        const hoverDelegate = this._register(instantiationService.createInstance(WorkbenchHoverDelegate, 'element', { instantHover: true }, { position: { hoverPosition: 1 /* HoverPosition.RIGHT */ } }));
        this._register(appendRemoveOnDispose(target, this._elements.root));
        this._register(autorun(reader => {
            /** @description update showAlways */
            const showAlways = this._showAlways.read(reader);
            this._elements.root.classList.toggle('noTransition', true);
            this._elements.root.classList.toggle('showAlways', showAlways);
            setTimeout(() => {
                this._elements.root.classList.toggle('noTransition', false);
            }, 0);
        }));
        this._register(autorunWithStore((reader, store) => {
            this._elements.buttons.replaceChildren();
            const i = store.add(instantiationService.createInstance(MenuWorkbenchToolBar, this._elements.buttons, this._menuId.read(reader), {
                orientation: 1 /* ActionsOrientation.VERTICAL */,
                hoverDelegate,
                toolbarOptions: {
                    primaryGroup: g => g.startsWith('primary'),
                },
                overflowBehavior: { maxItems: this._isSmall.read(reader) ? 1 : 3 },
                hiddenItemStrategy: 0 /* HiddenItemStrategy.Ignore */,
                actionRunner: store.add(new ActionRunnerWithContext(() => {
                    const item = this._item.read(undefined);
                    const mapping = item.mapping;
                    return {
                        mapping,
                        originalWithModifiedChanges: gutter.computeStagedValue(mapping),
                        originalUri: item.originalUri,
                        modifiedUri: item.modifiedUri,
                    };
                })),
                menuOptions: {
                    shouldForwardArgs: true,
                },
            }));
            store.add(i.onDidChangeMenuItems(() => {
                if (this._lastItemRange) {
                    this.layout(this._lastItemRange, this._lastViewRange);
                }
            }));
        }));
    }
    layout(itemRange, viewRange) {
        this._lastItemRange = itemRange;
        this._lastViewRange = viewRange;
        let itemHeight = this._elements.buttons.clientHeight;
        this._isSmall.set(this._item.get().mapping.original.startLineNumber === 1 && itemRange.length < 30, undefined);
        // Item might have changed
        itemHeight = this._elements.buttons.clientHeight;
        const middleHeight = itemRange.length / 2 - itemHeight / 2;
        const margin = itemHeight;
        let effectiveCheckboxTop = itemRange.start + middleHeight;
        const preferredViewPortRange = OffsetRange.tryCreate(margin, viewRange.endExclusive - margin - itemHeight);
        const preferredParentRange = OffsetRange.tryCreate(itemRange.start + margin, itemRange.endExclusive - itemHeight - margin);
        if (preferredParentRange && preferredViewPortRange && preferredParentRange.start < preferredParentRange.endExclusive) {
            effectiveCheckboxTop = preferredViewPortRange.clip(effectiveCheckboxTop);
            effectiveCheckboxTop = preferredParentRange.clip(effectiveCheckboxTop);
        }
        this._elements.buttons.style.top = `${effectiveCheckboxTop - itemRange.start}px`;
    }
};
DiffToolBar = __decorate([
    __param(3, IInstantiationService)
], DiffToolBar);

export { DiffEditorGutter };
