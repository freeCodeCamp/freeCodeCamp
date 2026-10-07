import { append, $, scheduleAtNextAnimationFrame, getWindow, addDisposableListener } from '../../dom.js';
import { DomEmitter } from '../../event.js';
import { Sash } from '../sash/sash.js';
import { SmoothScrollableElement } from '../scrollbar/scrollableElement.js';
import { range, pushToStart, pushToEnd } from '../../../common/arrays.js';
import { Color } from '../../../common/color.js';
import { Emitter, Event } from '../../../common/event.js';
import { Disposable, combinedDisposable, toDisposable, dispose } from '../../../common/lifecycle.js';
import { clamp } from '../../../common/numbers.js';
import { Scrollable } from '../../../common/scrollable.js';
import { isUndefined } from '../../../common/types.js';
import './splitview.css';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const defaultStyles = {
    separatorBorder: Color.transparent
};
class ViewItem {
    set size(size) {
        this._size = size;
    }
    get size() {
        return this._size;
    }
    get visible() {
        return typeof this._cachedVisibleSize === 'undefined';
    }
    setVisible(visible, size) {
        if (visible === this.visible) {
            return;
        }
        if (visible) {
            this.size = clamp(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize);
            this._cachedVisibleSize = undefined;
        }
        else {
            this._cachedVisibleSize = typeof size === 'number' ? size : this.size;
            this.size = 0;
        }
        this.container.classList.toggle('visible', visible);
        try {
            this.view.setVisible?.(visible);
        }
        catch (e) {
            console.error('Splitview: Failed to set visible view');
            console.error(e);
        }
    }
    get minimumSize() { return this.visible ? this.view.minimumSize : 0; }
    get viewMinimumSize() { return this.view.minimumSize; }
    get maximumSize() { return this.visible ? this.view.maximumSize : 0; }
    get viewMaximumSize() { return this.view.maximumSize; }
    get priority() { return this.view.priority; }
    get proportionalLayout() { return this.view.proportionalLayout ?? true; }
    get snap() { return !!this.view.snap; }
    set enabled(enabled) {
        this.container.style.pointerEvents = enabled ? '' : 'none';
    }
    constructor(container, view, size, disposable) {
        this.container = container;
        this.view = view;
        this.disposable = disposable;
        this._cachedVisibleSize = undefined;
        if (typeof size === 'number') {
            this._size = size;
            this._cachedVisibleSize = undefined;
            container.classList.add('visible');
        }
        else {
            this._size = 0;
            this._cachedVisibleSize = size.cachedVisibleSize;
        }
    }
    layout(offset, layoutContext) {
        this.layoutContainer(offset);
        try {
            this.view.layout(this.size, offset, layoutContext);
        }
        catch (e) {
            console.error('Splitview: Failed to layout view');
            console.error(e);
        }
    }
    dispose() {
        this.disposable.dispose();
    }
}
class VerticalViewItem extends ViewItem {
    layoutContainer(offset) {
        this.container.style.top = `${offset}px`;
        this.container.style.height = `${this.size}px`;
    }
}
class HorizontalViewItem extends ViewItem {
    layoutContainer(offset) {
        this.container.style.left = `${offset}px`;
        this.container.style.width = `${this.size}px`;
    }
}
var State;
(function (State) {
    State[State["Idle"] = 0] = "Idle";
    State[State["Busy"] = 1] = "Busy";
})(State || (State = {}));
var Sizing;
(function (Sizing) {
    /**
     * When adding or removing views, distribute the delta space among
     * all other views.
     */
    Sizing.Distribute = { type: 'distribute' };
    /**
     * When adding or removing views, split the delta space with another
     * specific view, indexed by the provided `index`.
     */
    function Split(index) { return { type: 'split', index }; }
    Sizing.Split = Split;
    /**
     * When adding a view, use DistributeSizing when all pre-existing views are
     * distributed evenly, otherwise use SplitSizing.
     */
    function Auto(index) { return { type: 'auto', index }; }
    Sizing.Auto = Auto;
    /**
     * When adding or removing views, assume the view is invisible.
     */
    function Invisible(cachedVisibleSize) { return { type: 'invisible', cachedVisibleSize }; }
    Sizing.Invisible = Invisible;
})(Sizing || (Sizing = {}));
/**
 * The {@link SplitView} is the UI component which implements a one dimensional
 * flex-like layout algorithm for a collection of {@link IView} instances, which
 * are essentially HTMLElement instances with the following size constraints:
 *
 * - {@link IView.minimumSize}
 * - {@link IView.maximumSize}
 * - {@link IView.priority}
 * - {@link IView.snap}
 *
 * In case the SplitView doesn't have enough size to fit all views, it will overflow
 * its content with a scrollbar.
 *
 * In between each pair of views there will be a {@link Sash} allowing the user
 * to resize the views, making sure the constraints are respected.
 *
 * An optional {@link TLayoutContext layout context type} may be used in order to
 * pass along layout contextual data from the {@link SplitView.layout} method down
 * to each view's {@link IView.layout} calls.
 *
 * Features:
 * - Flex-like layout algorithm
 * - Snap support
 * - Orthogonal sash support, for corner sashes
 * - View hide/show support
 * - View swap/move support
 * - Alt key modifier behavior, macOS style
 */
class SplitView extends Disposable {
    get orthogonalStartSash() { return this._orthogonalStartSash; }
    get orthogonalEndSash() { return this._orthogonalEndSash; }
    get startSnappingEnabled() { return this._startSnappingEnabled; }
    get endSnappingEnabled() { return this._endSnappingEnabled; }
    /**
     * A reference to a sash, perpendicular to all sashes in this {@link SplitView},
     * located at the left- or top-most side of the SplitView.
     * Corner sashes will be created automatically at the intersections.
     */
    set orthogonalStartSash(sash) {
        for (const sashItem of this.sashItems) {
            sashItem.sash.orthogonalStartSash = sash;
        }
        this._orthogonalStartSash = sash;
    }
    /**
     * A reference to a sash, perpendicular to all sashes in this {@link SplitView},
     * located at the right- or bottom-most side of the SplitView.
     * Corner sashes will be created automatically at the intersections.
     */
    set orthogonalEndSash(sash) {
        for (const sashItem of this.sashItems) {
            sashItem.sash.orthogonalEndSash = sash;
        }
        this._orthogonalEndSash = sash;
    }
    /**
     * Enable/disable snapping at the beginning of this {@link SplitView}.
     */
    set startSnappingEnabled(startSnappingEnabled) {
        if (this._startSnappingEnabled === startSnappingEnabled) {
            return;
        }
        this._startSnappingEnabled = startSnappingEnabled;
        this.updateSashEnablement();
    }
    /**
     * Enable/disable snapping at the end of this {@link SplitView}.
     */
    set endSnappingEnabled(endSnappingEnabled) {
        if (this._endSnappingEnabled === endSnappingEnabled) {
            return;
        }
        this._endSnappingEnabled = endSnappingEnabled;
        this.updateSashEnablement();
    }
    /**
     * Create a new {@link SplitView} instance.
     */
    constructor(container, options = {}) {
        super();
        this.size = 0;
        this._contentSize = 0;
        this.proportions = undefined;
        this.viewItems = [];
        this.sashItems = []; // used in tests
        this.state = State.Idle;
        this._onDidSashChange = this._register(new Emitter());
        this._onDidSashReset = this._register(new Emitter());
        this._startSnappingEnabled = true;
        this._endSnappingEnabled = true;
        /**
         * Fires whenever the user resizes a {@link Sash sash}.
         */
        this.onDidSashChange = this._onDidSashChange.event;
        /**
         * Fires whenever the user double clicks a {@link Sash sash}.
         */
        this.onDidSashReset = this._onDidSashReset.event;
        this.orientation = options.orientation ?? 0 /* Orientation.VERTICAL */;
        this.inverseAltBehavior = options.inverseAltBehavior ?? false;
        this.proportionalLayout = options.proportionalLayout ?? true;
        this.getSashOrthogonalSize = options.getSashOrthogonalSize;
        this.el = document.createElement('div');
        this.el.classList.add('monaco-split-view2');
        this.el.classList.add(this.orientation === 0 /* Orientation.VERTICAL */ ? 'vertical' : 'horizontal');
        container.appendChild(this.el);
        this.sashContainer = append(this.el, $('.sash-container'));
        this.viewContainer = $('.split-view-container');
        this.scrollable = this._register(new Scrollable({
            forceIntegerValues: true,
            smoothScrollDuration: 125,
            scheduleAtNextAnimationFrame: callback => scheduleAtNextAnimationFrame(getWindow(this.el), callback),
        }));
        this.scrollableElement = this._register(new SmoothScrollableElement(this.viewContainer, {
            vertical: this.orientation === 0 /* Orientation.VERTICAL */ ? (options.scrollbarVisibility ?? 1 /* ScrollbarVisibility.Auto */) : 2 /* ScrollbarVisibility.Hidden */,
            horizontal: this.orientation === 1 /* Orientation.HORIZONTAL */ ? (options.scrollbarVisibility ?? 1 /* ScrollbarVisibility.Auto */) : 2 /* ScrollbarVisibility.Hidden */
        }, this.scrollable));
        // https://github.com/microsoft/vscode/issues/157737
        const onDidScrollViewContainer = this._register(new DomEmitter(this.viewContainer, 'scroll')).event;
        this._register(onDidScrollViewContainer(_ => {
            const position = this.scrollableElement.getScrollPosition();
            const scrollLeft = Math.abs(this.viewContainer.scrollLeft - position.scrollLeft) <= 1 ? undefined : this.viewContainer.scrollLeft;
            const scrollTop = Math.abs(this.viewContainer.scrollTop - position.scrollTop) <= 1 ? undefined : this.viewContainer.scrollTop;
            if (scrollLeft !== undefined || scrollTop !== undefined) {
                this.scrollableElement.setScrollPosition({ scrollLeft, scrollTop });
            }
        }));
        this.onDidScroll = this.scrollableElement.onScroll;
        this._register(this.onDidScroll(e => {
            if (e.scrollTopChanged) {
                this.viewContainer.scrollTop = e.scrollTop;
            }
            if (e.scrollLeftChanged) {
                this.viewContainer.scrollLeft = e.scrollLeft;
            }
        }));
        append(this.el, this.scrollableElement.getDomNode());
        this.style(options.styles || defaultStyles);
        // We have an existing set of view, add them now
        if (options.descriptor) {
            this.size = options.descriptor.size;
            options.descriptor.views.forEach((viewDescriptor, index) => {
                const sizing = isUndefined(viewDescriptor.visible) || viewDescriptor.visible ? viewDescriptor.size : { type: 'invisible', cachedVisibleSize: viewDescriptor.size };
                const view = viewDescriptor.view;
                this.doAddView(view, sizing, index, true);
            });
            // Initialize content size and proportions for first layout
            this._contentSize = this.viewItems.reduce((r, i) => r + i.size, 0);
            this.saveProportions();
        }
    }
    style(styles) {
        if (styles.separatorBorder.isTransparent()) {
            this.el.classList.remove('separator-border');
            this.el.style.removeProperty('--separator-border');
        }
        else {
            this.el.classList.add('separator-border');
            this.el.style.setProperty('--separator-border', styles.separatorBorder.toString());
        }
    }
    /**
     * Add a {@link IView view} to this {@link SplitView}.
     *
     * @param view The view to add.
     * @param size Either a fixed size, or a dynamic {@link Sizing} strategy.
     * @param index The index to insert the view on.
     * @param skipLayout Whether layout should be skipped.
     */
    addView(view, size, index = this.viewItems.length, skipLayout) {
        this.doAddView(view, size, index, skipLayout);
    }
    /**
     * Layout the {@link SplitView}.
     *
     * @param size The entire size of the {@link SplitView}.
     * @param layoutContext An optional layout context to pass along to {@link IView views}.
     */
    layout(size, layoutContext) {
        const previousSize = Math.max(this.size, this._contentSize);
        this.size = size;
        this.layoutContext = layoutContext;
        if (!this.proportions) {
            const indexes = range(this.viewItems.length);
            const lowPriorityIndexes = indexes.filter(i => this.viewItems[i].priority === 1 /* LayoutPriority.Low */);
            const highPriorityIndexes = indexes.filter(i => this.viewItems[i].priority === 2 /* LayoutPriority.High */);
            this.resize(this.viewItems.length - 1, size - previousSize, undefined, lowPriorityIndexes, highPriorityIndexes);
        }
        else {
            let total = 0;
            for (let i = 0; i < this.viewItems.length; i++) {
                const item = this.viewItems[i];
                const proportion = this.proportions[i];
                if (typeof proportion === 'number') {
                    total += proportion;
                }
                else {
                    size -= item.size;
                }
            }
            for (let i = 0; i < this.viewItems.length; i++) {
                const item = this.viewItems[i];
                const proportion = this.proportions[i];
                if (typeof proportion === 'number' && total > 0) {
                    item.size = clamp(Math.round(proportion * size / total), item.minimumSize, item.maximumSize);
                }
            }
        }
        this.distributeEmptySpace();
        this.layoutViews();
    }
    saveProportions() {
        if (this.proportionalLayout && this._contentSize > 0) {
            this.proportions = this.viewItems.map(v => v.proportionalLayout && v.visible ? v.size / this._contentSize : undefined);
        }
    }
    onSashStart({ sash, start, alt }) {
        for (const item of this.viewItems) {
            item.enabled = false;
        }
        const index = this.sashItems.findIndex(item => item.sash === sash);
        // This way, we can press Alt while we resize a sash, macOS style!
        const disposable = combinedDisposable(addDisposableListener(this.el.ownerDocument.body, 'keydown', e => resetSashDragState(this.sashDragState.current, e.altKey)), addDisposableListener(this.el.ownerDocument.body, 'keyup', () => resetSashDragState(this.sashDragState.current, false)));
        const resetSashDragState = (start, alt) => {
            const sizes = this.viewItems.map(i => i.size);
            let minDelta = Number.NEGATIVE_INFINITY;
            let maxDelta = Number.POSITIVE_INFINITY;
            if (this.inverseAltBehavior) {
                alt = !alt;
            }
            if (alt) {
                // When we're using the last sash with Alt, we're resizing
                // the view to the left/up, instead of right/down as usual
                // Thus, we must do the inverse of the usual
                const isLastSash = index === this.sashItems.length - 1;
                if (isLastSash) {
                    const viewItem = this.viewItems[index];
                    minDelta = (viewItem.minimumSize - viewItem.size) / 2;
                    maxDelta = (viewItem.maximumSize - viewItem.size) / 2;
                }
                else {
                    const viewItem = this.viewItems[index + 1];
                    minDelta = (viewItem.size - viewItem.maximumSize) / 2;
                    maxDelta = (viewItem.size - viewItem.minimumSize) / 2;
                }
            }
            let snapBefore;
            let snapAfter;
            if (!alt) {
                const upIndexes = range(index, -1);
                const downIndexes = range(index + 1, this.viewItems.length);
                const minDeltaUp = upIndexes.reduce((r, i) => r + (this.viewItems[i].minimumSize - sizes[i]), 0);
                const maxDeltaUp = upIndexes.reduce((r, i) => r + (this.viewItems[i].viewMaximumSize - sizes[i]), 0);
                const maxDeltaDown = downIndexes.length === 0 ? Number.POSITIVE_INFINITY : downIndexes.reduce((r, i) => r + (sizes[i] - this.viewItems[i].minimumSize), 0);
                const minDeltaDown = downIndexes.length === 0 ? Number.NEGATIVE_INFINITY : downIndexes.reduce((r, i) => r + (sizes[i] - this.viewItems[i].viewMaximumSize), 0);
                const minDelta = Math.max(minDeltaUp, minDeltaDown);
                const maxDelta = Math.min(maxDeltaDown, maxDeltaUp);
                const snapBeforeIndex = this.findFirstSnapIndex(upIndexes);
                const snapAfterIndex = this.findFirstSnapIndex(downIndexes);
                if (typeof snapBeforeIndex === 'number') {
                    const viewItem = this.viewItems[snapBeforeIndex];
                    const halfSize = Math.floor(viewItem.viewMinimumSize / 2);
                    snapBefore = {
                        index: snapBeforeIndex,
                        limitDelta: viewItem.visible ? minDelta - halfSize : minDelta + halfSize,
                        size: viewItem.size
                    };
                }
                if (typeof snapAfterIndex === 'number') {
                    const viewItem = this.viewItems[snapAfterIndex];
                    const halfSize = Math.floor(viewItem.viewMinimumSize / 2);
                    snapAfter = {
                        index: snapAfterIndex,
                        limitDelta: viewItem.visible ? maxDelta + halfSize : maxDelta - halfSize,
                        size: viewItem.size
                    };
                }
            }
            this.sashDragState = { start, current: start, index, sizes, minDelta, maxDelta, alt, snapBefore, snapAfter, disposable };
        };
        resetSashDragState(start, alt);
    }
    onSashChange({ current }) {
        const { index, start, sizes, alt, minDelta, maxDelta, snapBefore, snapAfter } = this.sashDragState;
        this.sashDragState.current = current;
        const delta = current - start;
        const newDelta = this.resize(index, delta, sizes, undefined, undefined, minDelta, maxDelta, snapBefore, snapAfter);
        if (alt) {
            const isLastSash = index === this.sashItems.length - 1;
            const newSizes = this.viewItems.map(i => i.size);
            const viewItemIndex = isLastSash ? index : index + 1;
            const viewItem = this.viewItems[viewItemIndex];
            const newMinDelta = viewItem.size - viewItem.maximumSize;
            const newMaxDelta = viewItem.size - viewItem.minimumSize;
            const resizeIndex = isLastSash ? index - 1 : index + 1;
            this.resize(resizeIndex, -newDelta, newSizes, undefined, undefined, newMinDelta, newMaxDelta);
        }
        this.distributeEmptySpace();
        this.layoutViews();
    }
    onSashEnd(index) {
        this._onDidSashChange.fire(index);
        this.sashDragState.disposable.dispose();
        this.saveProportions();
        for (const item of this.viewItems) {
            item.enabled = true;
        }
    }
    onViewChange(item, size) {
        const index = this.viewItems.indexOf(item);
        if (index < 0 || index >= this.viewItems.length) {
            return;
        }
        size = typeof size === 'number' ? size : item.size;
        size = clamp(size, item.minimumSize, item.maximumSize);
        if (this.inverseAltBehavior && index > 0) {
            // In this case, we want the view to grow or shrink both sides equally
            // so we just resize the "left" side by half and let `resize` do the clamping magic
            this.resize(index - 1, Math.floor((item.size - size) / 2));
            this.distributeEmptySpace();
            this.layoutViews();
        }
        else {
            item.size = size;
            this.relayout([index], undefined);
        }
    }
    /**
     * Resize a {@link IView view} within the {@link SplitView}.
     *
     * @param index The {@link IView view} index.
     * @param size The {@link IView view} size.
     */
    resizeView(index, size) {
        if (index < 0 || index >= this.viewItems.length) {
            return;
        }
        if (this.state !== State.Idle) {
            throw new Error('Cant modify splitview');
        }
        this.state = State.Busy;
        try {
            const indexes = range(this.viewItems.length).filter(i => i !== index);
            const lowPriorityIndexes = [...indexes.filter(i => this.viewItems[i].priority === 1 /* LayoutPriority.Low */), index];
            const highPriorityIndexes = indexes.filter(i => this.viewItems[i].priority === 2 /* LayoutPriority.High */);
            const item = this.viewItems[index];
            size = Math.round(size);
            size = clamp(size, item.minimumSize, Math.min(item.maximumSize, this.size));
            item.size = size;
            this.relayout(lowPriorityIndexes, highPriorityIndexes);
        }
        finally {
            this.state = State.Idle;
        }
    }
    /**
     * Distribute the entire {@link SplitView} size among all {@link IView views}.
     */
    distributeViewSizes() {
        const flexibleViewItems = [];
        let flexibleSize = 0;
        for (const item of this.viewItems) {
            if (item.maximumSize - item.minimumSize > 0) {
                flexibleViewItems.push(item);
                flexibleSize += item.size;
            }
        }
        const size = Math.floor(flexibleSize / flexibleViewItems.length);
        for (const item of flexibleViewItems) {
            item.size = clamp(size, item.minimumSize, item.maximumSize);
        }
        const indexes = range(this.viewItems.length);
        const lowPriorityIndexes = indexes.filter(i => this.viewItems[i].priority === 1 /* LayoutPriority.Low */);
        const highPriorityIndexes = indexes.filter(i => this.viewItems[i].priority === 2 /* LayoutPriority.High */);
        this.relayout(lowPriorityIndexes, highPriorityIndexes);
    }
    /**
     * Returns the size of a {@link IView view}.
     */
    getViewSize(index) {
        if (index < 0 || index >= this.viewItems.length) {
            return -1;
        }
        return this.viewItems[index].size;
    }
    doAddView(view, size, index = this.viewItems.length, skipLayout) {
        if (this.state !== State.Idle) {
            throw new Error('Cant modify splitview');
        }
        this.state = State.Busy;
        try {
            // Add view
            const container = $('.split-view-view');
            if (index === this.viewItems.length) {
                this.viewContainer.appendChild(container);
            }
            else {
                this.viewContainer.insertBefore(container, this.viewContainer.children.item(index));
            }
            const onChangeDisposable = view.onDidChange(size => this.onViewChange(item, size));
            const containerDisposable = toDisposable(() => container.remove());
            const disposable = combinedDisposable(onChangeDisposable, containerDisposable);
            let viewSize;
            if (typeof size === 'number') {
                viewSize = size;
            }
            else {
                if (size.type === 'auto') {
                    if (this.areViewsDistributed()) {
                        size = { type: 'distribute' };
                    }
                    else {
                        size = { type: 'split', index: size.index };
                    }
                }
                if (size.type === 'split') {
                    viewSize = this.getViewSize(size.index) / 2;
                }
                else if (size.type === 'invisible') {
                    viewSize = { cachedVisibleSize: size.cachedVisibleSize };
                }
                else {
                    viewSize = view.minimumSize;
                }
            }
            const item = this.orientation === 0 /* Orientation.VERTICAL */
                ? new VerticalViewItem(container, view, viewSize, disposable)
                : new HorizontalViewItem(container, view, viewSize, disposable);
            this.viewItems.splice(index, 0, item);
            // Add sash
            if (this.viewItems.length > 1) {
                const opts = { orthogonalStartSash: this.orthogonalStartSash, orthogonalEndSash: this.orthogonalEndSash };
                const sash = this.orientation === 0 /* Orientation.VERTICAL */
                    ? new Sash(this.sashContainer, { getHorizontalSashTop: s => this.getSashPosition(s), getHorizontalSashWidth: this.getSashOrthogonalSize }, { ...opts, orientation: 1 /* Orientation.HORIZONTAL */ })
                    : new Sash(this.sashContainer, { getVerticalSashLeft: s => this.getSashPosition(s), getVerticalSashHeight: this.getSashOrthogonalSize }, { ...opts, orientation: 0 /* Orientation.VERTICAL */ });
                const sashEventMapper = this.orientation === 0 /* Orientation.VERTICAL */
                    ? (e) => ({ sash, start: e.startY, current: e.currentY, alt: e.altKey })
                    : (e) => ({ sash, start: e.startX, current: e.currentX, alt: e.altKey });
                const onStart = Event.map(sash.onDidStart, sashEventMapper);
                const onStartDisposable = onStart(this.onSashStart, this);
                const onChange = Event.map(sash.onDidChange, sashEventMapper);
                const onChangeDisposable = onChange(this.onSashChange, this);
                const onEnd = Event.map(sash.onDidEnd, () => this.sashItems.findIndex(item => item.sash === sash));
                const onEndDisposable = onEnd(this.onSashEnd, this);
                const onDidResetDisposable = sash.onDidReset(() => {
                    const index = this.sashItems.findIndex(item => item.sash === sash);
                    const upIndexes = range(index, -1);
                    const downIndexes = range(index + 1, this.viewItems.length);
                    const snapBeforeIndex = this.findFirstSnapIndex(upIndexes);
                    const snapAfterIndex = this.findFirstSnapIndex(downIndexes);
                    if (typeof snapBeforeIndex === 'number' && !this.viewItems[snapBeforeIndex].visible) {
                        return;
                    }
                    if (typeof snapAfterIndex === 'number' && !this.viewItems[snapAfterIndex].visible) {
                        return;
                    }
                    this._onDidSashReset.fire(index);
                });
                const disposable = combinedDisposable(onStartDisposable, onChangeDisposable, onEndDisposable, onDidResetDisposable, sash);
                const sashItem = { sash, disposable };
                this.sashItems.splice(index - 1, 0, sashItem);
            }
            container.appendChild(view.element);
            let highPriorityIndexes;
            if (typeof size !== 'number' && size.type === 'split') {
                highPriorityIndexes = [size.index];
            }
            if (!skipLayout) {
                this.relayout([index], highPriorityIndexes);
            }
            if (!skipLayout && typeof size !== 'number' && size.type === 'distribute') {
                this.distributeViewSizes();
            }
        }
        finally {
            this.state = State.Idle;
        }
    }
    relayout(lowPriorityIndexes, highPriorityIndexes) {
        const contentSize = this.viewItems.reduce((r, i) => r + i.size, 0);
        this.resize(this.viewItems.length - 1, this.size - contentSize, undefined, lowPriorityIndexes, highPriorityIndexes);
        this.distributeEmptySpace();
        this.layoutViews();
        this.saveProportions();
    }
    resize(index, delta, sizes = this.viewItems.map(i => i.size), lowPriorityIndexes, highPriorityIndexes, overloadMinDelta = Number.NEGATIVE_INFINITY, overloadMaxDelta = Number.POSITIVE_INFINITY, snapBefore, snapAfter) {
        if (index < 0 || index >= this.viewItems.length) {
            return 0;
        }
        const upIndexes = range(index, -1);
        const downIndexes = range(index + 1, this.viewItems.length);
        if (highPriorityIndexes) {
            for (const index of highPriorityIndexes) {
                pushToStart(upIndexes, index);
                pushToStart(downIndexes, index);
            }
        }
        if (lowPriorityIndexes) {
            for (const index of lowPriorityIndexes) {
                pushToEnd(upIndexes, index);
                pushToEnd(downIndexes, index);
            }
        }
        const upItems = upIndexes.map(i => this.viewItems[i]);
        const upSizes = upIndexes.map(i => sizes[i]);
        const downItems = downIndexes.map(i => this.viewItems[i]);
        const downSizes = downIndexes.map(i => sizes[i]);
        const minDeltaUp = upIndexes.reduce((r, i) => r + (this.viewItems[i].minimumSize - sizes[i]), 0);
        const maxDeltaUp = upIndexes.reduce((r, i) => r + (this.viewItems[i].maximumSize - sizes[i]), 0);
        const maxDeltaDown = downIndexes.length === 0 ? Number.POSITIVE_INFINITY : downIndexes.reduce((r, i) => r + (sizes[i] - this.viewItems[i].minimumSize), 0);
        const minDeltaDown = downIndexes.length === 0 ? Number.NEGATIVE_INFINITY : downIndexes.reduce((r, i) => r + (sizes[i] - this.viewItems[i].maximumSize), 0);
        const minDelta = Math.max(minDeltaUp, minDeltaDown, overloadMinDelta);
        const maxDelta = Math.min(maxDeltaDown, maxDeltaUp, overloadMaxDelta);
        let snapped = false;
        if (snapBefore) {
            const snapView = this.viewItems[snapBefore.index];
            const visible = delta >= snapBefore.limitDelta;
            snapped = visible !== snapView.visible;
            snapView.setVisible(visible, snapBefore.size);
        }
        if (!snapped && snapAfter) {
            const snapView = this.viewItems[snapAfter.index];
            const visible = delta < snapAfter.limitDelta;
            snapped = visible !== snapView.visible;
            snapView.setVisible(visible, snapAfter.size);
        }
        if (snapped) {
            return this.resize(index, delta, sizes, lowPriorityIndexes, highPriorityIndexes, overloadMinDelta, overloadMaxDelta);
        }
        delta = clamp(delta, minDelta, maxDelta);
        for (let i = 0, deltaUp = delta; i < upItems.length; i++) {
            const item = upItems[i];
            const size = clamp(upSizes[i] + deltaUp, item.minimumSize, item.maximumSize);
            const viewDelta = size - upSizes[i];
            deltaUp -= viewDelta;
            item.size = size;
        }
        for (let i = 0, deltaDown = delta; i < downItems.length; i++) {
            const item = downItems[i];
            const size = clamp(downSizes[i] - deltaDown, item.minimumSize, item.maximumSize);
            const viewDelta = size - downSizes[i];
            deltaDown += viewDelta;
            item.size = size;
        }
        return delta;
    }
    distributeEmptySpace(lowPriorityIndex) {
        const contentSize = this.viewItems.reduce((r, i) => r + i.size, 0);
        let emptyDelta = this.size - contentSize;
        const indexes = range(this.viewItems.length - 1, -1);
        const lowPriorityIndexes = indexes.filter(i => this.viewItems[i].priority === 1 /* LayoutPriority.Low */);
        const highPriorityIndexes = indexes.filter(i => this.viewItems[i].priority === 2 /* LayoutPriority.High */);
        for (const index of highPriorityIndexes) {
            pushToStart(indexes, index);
        }
        for (const index of lowPriorityIndexes) {
            pushToEnd(indexes, index);
        }
        if (typeof lowPriorityIndex === 'number') {
            pushToEnd(indexes, lowPriorityIndex);
        }
        for (let i = 0; emptyDelta !== 0 && i < indexes.length; i++) {
            const item = this.viewItems[indexes[i]];
            const size = clamp(item.size + emptyDelta, item.minimumSize, item.maximumSize);
            const viewDelta = size - item.size;
            emptyDelta -= viewDelta;
            item.size = size;
        }
    }
    layoutViews() {
        // Save new content size
        this._contentSize = this.viewItems.reduce((r, i) => r + i.size, 0);
        // Layout views
        let offset = 0;
        for (const viewItem of this.viewItems) {
            viewItem.layout(offset, this.layoutContext);
            offset += viewItem.size;
        }
        // Layout sashes
        this.sashItems.forEach(item => item.sash.layout());
        this.updateSashEnablement();
        this.updateScrollableElement();
    }
    updateScrollableElement() {
        if (this.orientation === 0 /* Orientation.VERTICAL */) {
            this.scrollableElement.setScrollDimensions({
                height: this.size,
                scrollHeight: this._contentSize
            });
        }
        else {
            this.scrollableElement.setScrollDimensions({
                width: this.size,
                scrollWidth: this._contentSize
            });
        }
    }
    updateSashEnablement() {
        let previous = false;
        const collapsesDown = this.viewItems.map(i => previous = (i.size - i.minimumSize > 0) || previous);
        previous = false;
        const expandsDown = this.viewItems.map(i => previous = (i.maximumSize - i.size > 0) || previous);
        const reverseViews = [...this.viewItems].reverse();
        previous = false;
        const collapsesUp = reverseViews.map(i => previous = (i.size - i.minimumSize > 0) || previous).reverse();
        previous = false;
        const expandsUp = reverseViews.map(i => previous = (i.maximumSize - i.size > 0) || previous).reverse();
        let position = 0;
        for (let index = 0; index < this.sashItems.length; index++) {
            const { sash } = this.sashItems[index];
            const viewItem = this.viewItems[index];
            position += viewItem.size;
            const min = !(collapsesDown[index] && expandsUp[index + 1]);
            const max = !(expandsDown[index] && collapsesUp[index + 1]);
            if (min && max) {
                const upIndexes = range(index, -1);
                const downIndexes = range(index + 1, this.viewItems.length);
                const snapBeforeIndex = this.findFirstSnapIndex(upIndexes);
                const snapAfterIndex = this.findFirstSnapIndex(downIndexes);
                const snappedBefore = typeof snapBeforeIndex === 'number' && !this.viewItems[snapBeforeIndex].visible;
                const snappedAfter = typeof snapAfterIndex === 'number' && !this.viewItems[snapAfterIndex].visible;
                if (snappedBefore && collapsesUp[index] && (position > 0 || this.startSnappingEnabled)) {
                    sash.state = 1 /* SashState.AtMinimum */;
                }
                else if (snappedAfter && collapsesDown[index] && (position < this._contentSize || this.endSnappingEnabled)) {
                    sash.state = 2 /* SashState.AtMaximum */;
                }
                else {
                    sash.state = 0 /* SashState.Disabled */;
                }
            }
            else if (min && !max) {
                sash.state = 1 /* SashState.AtMinimum */;
            }
            else if (!min && max) {
                sash.state = 2 /* SashState.AtMaximum */;
            }
            else {
                sash.state = 3 /* SashState.Enabled */;
            }
        }
    }
    getSashPosition(sash) {
        let position = 0;
        for (let i = 0; i < this.sashItems.length; i++) {
            position += this.viewItems[i].size;
            if (this.sashItems[i].sash === sash) {
                return position;
            }
        }
        return 0;
    }
    findFirstSnapIndex(indexes) {
        // visible views first
        for (const index of indexes) {
            const viewItem = this.viewItems[index];
            if (!viewItem.visible) {
                continue;
            }
            if (viewItem.snap) {
                return index;
            }
        }
        // then, hidden views
        for (const index of indexes) {
            const viewItem = this.viewItems[index];
            if (viewItem.visible && viewItem.maximumSize - viewItem.minimumSize > 0) {
                return undefined;
            }
            if (!viewItem.visible && viewItem.snap) {
                return index;
            }
        }
        return undefined;
    }
    areViewsDistributed() {
        let min = undefined, max = undefined;
        for (const view of this.viewItems) {
            min = min === undefined ? view.size : Math.min(min, view.size);
            max = max === undefined ? view.size : Math.max(max, view.size);
            if (max - min > 2) {
                return false;
            }
        }
        return true;
    }
    dispose() {
        this.sashDragState?.disposable.dispose();
        dispose(this.viewItems);
        this.viewItems = [];
        this.sashItems.forEach(i => i.disposable.dispose());
        this.sashItems = [];
        super.dispose();
    }
}

export { Sizing, SplitView };
