import { h, scheduleAtNextAnimationFrame, getWindow } from '../../../../base/browser/dom.js';
import { SmoothScrollableElement } from '../../../../base/browser/ui/scrollbar/scrollableElement.js';
import { compareBy, numberComparator } from '../../../../base/common/arrays.js';
import { findFirstMax } from '../../../../base/common/arraysFind.js';
import { BugIndicatingError } from '../../../../base/common/errors.js';
import { Disposable, toDisposable } from '../../../../base/common/lifecycle.js';
import '../../../../base/common/observableInternal/index.js';
import { Scrollable } from '../../../../base/common/scrollable.js';
import { localize } from '../../../../nls.js';
import { IContextKeyService } from '../../../../platform/contextkey/common/contextkey.js';
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import { ServiceCollection } from '../../../../platform/instantiation/common/serviceCollection.js';
import { OffsetRange } from '../../../common/core/ranges/offsetRange.js';
import { Selection } from '../../../common/core/selection.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { ObservableElementSizeObserver } from '../diffEditor/utils.js';
import { DiffEditorItemTemplate, TemplateData } from './diffEditorItemTemplate.js';
import { ObjectPool } from './objectPool.js';
import './style.css';
import { observableFromEvent } from '../../../../base/common/observableInternal/observables/observableFromEvent.js';
import { derived } from '../../../../base/common/observableInternal/observables/derived.js';
import { transaction, globalTransaction } from '../../../../base/common/observableInternal/transaction.js';
import { autorunWithStore, autorun } from '../../../../base/common/observableInternal/reactions/autorun.js';
import { disposableObservableValue, observableValue } from '../../../../base/common/observableInternal/observables/observableValue.js';

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
let MultiDiffEditorWidgetImpl = class MultiDiffEditorWidgetImpl extends Disposable {
    constructor(_element, _dimension, _viewModel, _workbenchUIElementFactory, _parentContextKeyService, _parentInstantiationService) {
        super();
        this._element = _element;
        this._dimension = _dimension;
        this._viewModel = _viewModel;
        this._workbenchUIElementFactory = _workbenchUIElementFactory;
        this._parentContextKeyService = _parentContextKeyService;
        this._parentInstantiationService = _parentInstantiationService;
        this._scrollableElements = h('div.scrollContent', [
            h('div@content', {
                style: {
                    overflow: 'hidden',
                }
            }),
            h('div.monaco-editor@overflowWidgetsDomNode', {}),
        ]);
        this._scrollable = this._register(new Scrollable({
            forceIntegerValues: false,
            scheduleAtNextAnimationFrame: (cb) => scheduleAtNextAnimationFrame(getWindow(this._element), cb),
            smoothScrollDuration: 100,
        }));
        this._scrollableElement = this._register(new SmoothScrollableElement(this._scrollableElements.root, {
            vertical: 1 /* ScrollbarVisibility.Auto */,
            horizontal: 1 /* ScrollbarVisibility.Auto */,
            useShadows: false,
        }, this._scrollable));
        this._elements = h('div.monaco-component.multiDiffEditor', {}, [
            h('div', {}, [this._scrollableElement.getDomNode()]),
            h('div.placeholder@placeholder', {}, [h('div')]),
        ]);
        this._sizeObserver = this._register(new ObservableElementSizeObserver(this._element, undefined));
        this._objectPool = this._register(new ObjectPool((data) => {
            const template = this._instantiationService.createInstance(DiffEditorItemTemplate, this._scrollableElements.content, this._scrollableElements.overflowWidgetsDomNode, this._workbenchUIElementFactory);
            template.setData(data);
            return template;
        }));
        this.scrollTop = observableFromEvent(this, this._scrollableElement.onScroll, () => /** @description scrollTop */ this._scrollableElement.getScrollPosition().scrollTop);
        this.scrollLeft = observableFromEvent(this, this._scrollableElement.onScroll, () => /** @description scrollLeft */ this._scrollableElement.getScrollPosition().scrollLeft);
        this._viewItemsInfo = derived(this, (reader) => {
            const vm = this._viewModel.read(reader);
            if (!vm) {
                return { items: [], getItem: _d => { throw new BugIndicatingError(); } };
            }
            const viewModels = vm.items.read(reader);
            const map = new Map();
            const items = viewModels.map(d => {
                const item = reader.store.add(new VirtualizedViewItem(d, this._objectPool, this.scrollLeft, delta => {
                    this._scrollableElement.setScrollPosition({ scrollTop: this._scrollableElement.getScrollPosition().scrollTop + delta });
                }));
                const data = this._lastDocStates?.[item.getKey()];
                if (data) {
                    transaction(tx => {
                        item.setViewState(data, tx);
                    });
                }
                map.set(d, item);
                return item;
            });
            return { items, getItem: d => map.get(d) };
        });
        this._viewItems = this._viewItemsInfo.map(this, items => items.items);
        this._spaceBetweenPx = 0;
        this._totalHeight = this._viewItems.map(this, (items, reader) => items.reduce((r, i) => r + i.contentHeight.read(reader) + this._spaceBetweenPx, 0));
        this.activeControl = derived(this, reader => {
            const activeDiffItem = this._viewModel.read(reader)?.activeDiffItem.read(reader);
            if (!activeDiffItem) {
                return undefined;
            }
            const viewItem = this._viewItemsInfo.read(reader).getItem(activeDiffItem);
            return viewItem.template.read(reader)?.editor;
        });
        this._contextKeyService = this._register(this._parentContextKeyService.createScoped(this._element));
        this._instantiationService = this._register(this._parentInstantiationService.createChild(new ServiceCollection([IContextKeyService, this._contextKeyService])));
        this._contextKeyService.createKey(EditorContextKeys.inMultiDiffEditor.key, true);
        this._lastDocStates = {};
        this._register(autorunWithStore((reader, store) => {
            const viewModel = this._viewModel.read(reader);
            if (viewModel && viewModel.contextKeys) {
                for (const [key, value] of Object.entries(viewModel.contextKeys)) {
                    const contextKey = this._contextKeyService.createKey(key, undefined);
                    contextKey.set(value);
                    store.add(toDisposable(() => contextKey.reset()));
                }
            }
        }));
        const ctxAllCollapsed = this._parentContextKeyService.createKey(EditorContextKeys.multiDiffEditorAllCollapsed.key, false);
        this._register(autorun((reader) => {
            const viewModel = this._viewModel.read(reader);
            if (viewModel) {
                const allCollapsed = viewModel.items.read(reader).every(item => item.collapsed.read(reader));
                ctxAllCollapsed.set(allCollapsed);
            }
        }));
        this._register(autorun((reader) => {
            /** @description Update widget dimension */
            const dimension = this._dimension.read(reader);
            this._sizeObserver.observe(dimension);
        }));
        const placeholderMessage = derived(reader => {
            const items = this._viewItems.read(reader);
            if (items.length > 0) {
                return undefined;
            }
            const vm = this._viewModel.read(reader);
            return (!vm || vm.isLoading.read(reader))
                ? localize(145, 'Loading...')
                : localize(146, 'No Changed Files');
        });
        this._register(autorun((reader) => {
            const message = placeholderMessage.read(reader);
            this._elements.placeholder.innerText = message ?? '';
            this._elements.placeholder.classList.toggle('visible', !!message);
        }));
        this._scrollableElements.content.style.position = 'relative';
        this._register(autorun((reader) => {
            /** @description Update scroll dimensions */
            const height = this._sizeObserver.height.read(reader);
            this._scrollableElements.root.style.height = `${height}px`;
            const totalHeight = this._totalHeight.read(reader);
            this._scrollableElements.content.style.height = `${totalHeight}px`;
            const width = this._sizeObserver.width.read(reader);
            let scrollWidth = width;
            const viewItems = this._viewItems.read(reader);
            const max = findFirstMax(viewItems, compareBy(i => i.maxScroll.read(reader).maxScroll, numberComparator));
            if (max) {
                const maxScroll = max.maxScroll.read(reader);
                scrollWidth = width + maxScroll.maxScroll;
            }
            this._scrollableElement.setScrollDimensions({
                width: width,
                height: height,
                scrollHeight: totalHeight,
                scrollWidth,
            });
        }));
        _element.replaceChildren(this._elements.root);
        this._register(toDisposable(() => {
            _element.replaceChildren();
        }));
        // Automatically select the first change in the first file when items are loaded
        this._register(autorun(reader => {
            /** @description Initialize first change */
            const viewModel = this._viewModel.read(reader);
            if (!viewModel) {
                return;
            }
            // Only initialize when loading is complete
            if (!viewModel.isLoading.read(reader)) {
                const items = viewModel.items.read(reader);
                if (items.length === 0) {
                    return;
                }
                // Only initialize if there's no active item yet
                const activeDiffItem = viewModel.activeDiffItem.read(reader);
                if (activeDiffItem) {
                    return;
                }
                // Navigate to the first change using the existing navigation logic
                this.goToNextChange();
            }
        }));
        this._register(this._register(autorun(reader => {
            /** @description Render all */
            globalTransaction(tx => {
                this.render(reader);
            });
        })));
    }
    reveal(resource, options) {
        const viewItems = this._viewItems.get();
        const index = viewItems.findIndex((item) => item.viewModel.originalUri?.toString() === resource.original?.toString()
            && item.viewModel.modifiedUri?.toString() === resource.modified?.toString());
        if (index === -1) {
            throw new BugIndicatingError('Resource not found in diff editor');
        }
        const viewItem = viewItems[index];
        this._viewModel.get().activeDiffItem.setCache(viewItem.viewModel, undefined);
        let scrollTop = 0;
        for (let i = 0; i < index; i++) {
            scrollTop += viewItems[i].contentHeight.get() + this._spaceBetweenPx;
        }
        this._scrollableElement.setScrollPosition({ scrollTop });
        const diffEditor = viewItem.template.get()?.editor;
        const editor = 'original' in resource ? diffEditor?.getOriginalEditor() : diffEditor?.getModifiedEditor();
        if (editor && options?.range) {
            editor.revealRangeInCenter(options.range);
            highlightRange(editor, options.range);
        }
    }
    goToNextChange() {
        this._navigateToChange('next');
    }
    _navigateToChange(direction) {
        const viewItems = this._viewItems.get();
        if (viewItems.length === 0) {
            return;
        }
        const activeViewModel = this._viewModel.get()?.activeDiffItem.get();
        const currentIndex = activeViewModel ? viewItems.findIndex(v => v.viewModel === activeViewModel) : -1;
        // Start with first file if no active item
        if (currentIndex === -1) {
            this._goToFile(0, 'first');
            return;
        }
        // Try current file first - expand if collapsed
        const currentItem = viewItems[currentIndex];
        if (currentItem.viewModel.collapsed.get()) {
            currentItem.viewModel.collapsed.set(false, undefined);
        }
        const editor = currentItem.template.get()?.editor;
        if (editor?.getDiffComputationResult()?.changes2?.length) {
            const pos = editor.getModifiedEditor().getPosition()?.lineNumber || 1;
            const changes = editor.getDiffComputationResult().changes2;
            const hasNext = direction === 'next' ? changes.some(c => c.modified.startLineNumber > pos) : changes.some(c => c.modified.endLineNumberExclusive <= pos);
            if (hasNext) {
                editor.goToDiff(direction);
                return;
            }
        }
        // Move to next/previous file
        const nextIndex = (currentIndex + (direction === 'next' ? 1 : -1) + viewItems.length) % viewItems.length;
        this._goToFile(nextIndex, direction === 'next' ? 'first' : 'last');
    }
    _goToFile(index, position) {
        const item = this._viewItems.get()[index];
        if (item.viewModel.collapsed.get()) {
            item.viewModel.collapsed.set(false, undefined);
        }
        this.reveal({ original: item.viewModel.originalUri, modified: item.viewModel.modifiedUri });
        const editor = item.template.get()?.editor;
        if (editor?.getDiffComputationResult()?.changes2?.length) {
            if (position === 'first') {
                editor.revealFirstDiff();
            }
            else {
                const lastChange = editor.getDiffComputationResult().changes2.at(-1);
                const modifiedEditor = editor.getModifiedEditor();
                modifiedEditor.setPosition({ lineNumber: lastChange.modified.startLineNumber, column: 1 });
                modifiedEditor.revealLineInCenter(lastChange.modified.startLineNumber);
            }
        }
        editor?.focus();
    }
    render(reader) {
        const scrollTop = this.scrollTop.read(reader);
        let contentScrollOffsetToScrollOffset = 0;
        let itemHeightSumBefore = 0;
        let itemContentHeightSumBefore = 0;
        const viewPortHeight = this._sizeObserver.height.read(reader);
        const contentViewPort = OffsetRange.ofStartAndLength(scrollTop, viewPortHeight);
        const width = this._sizeObserver.width.read(reader);
        for (const v of this._viewItems.read(reader)) {
            const itemContentHeight = v.contentHeight.read(reader);
            const itemHeight = Math.min(itemContentHeight, viewPortHeight);
            const itemRange = OffsetRange.ofStartAndLength(itemHeightSumBefore, itemHeight);
            const itemContentRange = OffsetRange.ofStartAndLength(itemContentHeightSumBefore, itemContentHeight);
            if (itemContentRange.isBefore(contentViewPort)) {
                contentScrollOffsetToScrollOffset -= itemContentHeight - itemHeight;
                v.hide();
            }
            else if (itemContentRange.isAfter(contentViewPort)) {
                v.hide();
            }
            else {
                const scroll = Math.max(0, Math.min(contentViewPort.start - itemContentRange.start, itemContentHeight - itemHeight));
                contentScrollOffsetToScrollOffset -= scroll;
                const viewPort = OffsetRange.ofStartAndLength(scrollTop + contentScrollOffsetToScrollOffset, viewPortHeight);
                v.render(itemRange, scroll, width, viewPort);
            }
            itemHeightSumBefore += itemHeight + this._spaceBetweenPx;
            itemContentHeightSumBefore += itemContentHeight + this._spaceBetweenPx;
        }
        this._scrollableElements.content.style.transform = `translateY(${-(scrollTop + contentScrollOffsetToScrollOffset)}px)`;
    }
};
MultiDiffEditorWidgetImpl = __decorate([
    __param(4, IContextKeyService),
    __param(5, IInstantiationService)
], MultiDiffEditorWidgetImpl);
function highlightRange(targetEditor, range) {
    const modelNow = targetEditor.getModel();
    const decorations = targetEditor.createDecorationsCollection([{ range, options: { description: 'symbol-navigate-action-highlight', className: 'symbolHighlight' } }]);
    setTimeout(() => {
        if (targetEditor.getModel() === modelNow) {
            decorations.clear();
        }
    }, 350);
}
class VirtualizedViewItem extends Disposable {
    constructor(viewModel, _objectPool, _scrollLeft, _deltaScrollVertical) {
        super();
        this.viewModel = viewModel;
        this._objectPool = _objectPool;
        this._scrollLeft = _scrollLeft;
        this._deltaScrollVertical = _deltaScrollVertical;
        this._templateRef = this._register(disposableObservableValue(this, undefined));
        this.contentHeight = derived(this, reader => this._templateRef.read(reader)?.object.contentHeight?.read(reader) ?? this.viewModel.lastTemplateData.read(reader).contentHeight);
        this.maxScroll = derived(this, reader => this._templateRef.read(reader)?.object.maxScroll.read(reader) ?? { maxScroll: 0, scrollWidth: 0 });
        this.template = derived(this, reader => this._templateRef.read(reader)?.object);
        this._isHidden = observableValue(this, false);
        this._isFocused = derived(this, reader => this.template.read(reader)?.isFocused.read(reader) ?? false);
        this.viewModel.setIsFocused(this._isFocused, undefined);
        this._register(autorun((reader) => {
            const scrollLeft = this._scrollLeft.read(reader);
            this._templateRef.read(reader)?.object.setScrollLeft(scrollLeft);
        }));
        this._register(autorun(reader => {
            const ref = this._templateRef.read(reader);
            if (!ref) {
                return;
            }
            const isHidden = this._isHidden.read(reader);
            if (!isHidden) {
                return;
            }
            const isFocused = ref.object.isFocused.read(reader);
            if (isFocused) {
                return;
            }
            this._clear();
        }));
    }
    dispose() {
        this._clear();
        super.dispose();
    }
    toString() {
        return `VirtualViewItem(${this.viewModel.documentDiffItem.modified?.uri.toString()})`;
    }
    getKey() {
        return this.viewModel.getKey();
    }
    setViewState(viewState, tx) {
        this.viewModel.collapsed.set(viewState.collapsed, tx);
        this._updateTemplateData(tx);
        const data = this.viewModel.lastTemplateData.get();
        const selections = viewState.selections?.map(Selection.liftSelection);
        this.viewModel.lastTemplateData.set({
            ...data,
            selections,
        }, tx);
        const ref = this._templateRef.get();
        if (ref) {
            if (selections) {
                ref.object.editor.setSelections(selections);
            }
        }
    }
    _updateTemplateData(tx) {
        const ref = this._templateRef.get();
        if (!ref) {
            return;
        }
        this.viewModel.lastTemplateData.set({
            contentHeight: ref.object.contentHeight.get(),
            selections: ref.object.editor.getSelections() ?? undefined,
        }, tx);
    }
    _clear() {
        const ref = this._templateRef.get();
        if (!ref) {
            return;
        }
        transaction(tx => {
            this._updateTemplateData(tx);
            ref.object.hide();
            this._templateRef.set(undefined, tx);
        });
    }
    hide() {
        this._isHidden.set(true, undefined);
    }
    render(verticalSpace, offset, width, viewPort) {
        this._isHidden.set(false, undefined);
        let ref = this._templateRef.get();
        if (!ref) {
            ref = this._objectPool.getUnusedObj(new TemplateData(this.viewModel, this._deltaScrollVertical));
            this._templateRef.set(ref, undefined);
            const selections = this.viewModel.lastTemplateData.get().selections;
            if (selections) {
                ref.object.editor.setSelections(selections);
            }
        }
        ref.object.render(verticalSpace, width, offset, viewPort);
    }
}

export { MultiDiffEditorWidgetImpl };
