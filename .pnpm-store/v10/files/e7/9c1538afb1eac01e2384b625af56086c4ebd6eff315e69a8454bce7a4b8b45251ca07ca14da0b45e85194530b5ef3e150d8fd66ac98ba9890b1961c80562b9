import { BrowserFeatures } from '../../canIUse.js';
import { $, hide, addStandardDisposableListener, clearNode, show, isHTMLElement, getDomNodePagePosition, getDomNodeZoomLevel, getTotalWidth, getTotalHeight, getActiveWindow, getWindow, isAncestor } from '../../dom.js';
import { Disposable, toDisposable, DisposableStore } from '../../../common/lifecycle.js';
import { isIOS } from '../../../common/platform.js';
import { Range } from '../../../common/range.js';
import './contextview.css';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function isAnchor(obj) {
    const anchor = obj;
    return !!anchor && typeof anchor.x === 'number' && typeof anchor.y === 'number';
}
var LayoutAnchorMode;
(function (LayoutAnchorMode) {
    LayoutAnchorMode[LayoutAnchorMode["AVOID"] = 0] = "AVOID";
    LayoutAnchorMode[LayoutAnchorMode["ALIGN"] = 1] = "ALIGN";
})(LayoutAnchorMode || (LayoutAnchorMode = {}));
/**
 * Lays out a one dimensional view next to an anchor in a viewport.
 *
 * @returns The view offset within the viewport.
 */
function layout(viewportSize, viewSize, anchor) {
    const layoutAfterAnchorBoundary = anchor.mode === LayoutAnchorMode.ALIGN ? anchor.offset : anchor.offset + anchor.size;
    const layoutBeforeAnchorBoundary = anchor.mode === LayoutAnchorMode.ALIGN ? anchor.offset + anchor.size : anchor.offset;
    if (anchor.position === 0 /* LayoutAnchorPosition.Before */) {
        if (viewSize <= viewportSize - layoutAfterAnchorBoundary) {
            return layoutAfterAnchorBoundary; // happy case, lay it out after the anchor
        }
        if (viewSize <= layoutBeforeAnchorBoundary) {
            return layoutBeforeAnchorBoundary - viewSize; // ok case, lay it out before the anchor
        }
        return Math.max(viewportSize - viewSize, 0); // sad case, lay it over the anchor
    }
    else {
        if (viewSize <= layoutBeforeAnchorBoundary) {
            return layoutBeforeAnchorBoundary - viewSize; // happy case, lay it out before the anchor
        }
        if (viewSize <= viewportSize - layoutAfterAnchorBoundary) {
            return layoutAfterAnchorBoundary; // ok case, lay it out after the anchor
        }
        return 0; // sad case, lay it over the anchor
    }
}
class ContextView extends Disposable {
    static { this.BUBBLE_UP_EVENTS = ['click', 'keydown', 'focus', 'blur']; }
    static { this.BUBBLE_DOWN_EVENTS = ['click']; }
    constructor(container, domPosition) {
        super();
        this.container = null;
        this.useFixedPosition = false;
        this.useShadowDOM = false;
        this.delegate = null;
        this.toDisposeOnClean = Disposable.None;
        this.toDisposeOnSetContainer = Disposable.None;
        this.shadowRoot = null;
        this.shadowRootHostElement = null;
        this.view = $('.context-view');
        hide(this.view);
        this.setContainer(container, domPosition);
        this._register(toDisposable(() => this.setContainer(null, 1 /* ContextViewDOMPosition.ABSOLUTE */)));
    }
    setContainer(container, domPosition) {
        this.useFixedPosition = domPosition !== 1 /* ContextViewDOMPosition.ABSOLUTE */;
        const usedShadowDOM = this.useShadowDOM;
        this.useShadowDOM = domPosition === 3 /* ContextViewDOMPosition.FIXED_SHADOW */;
        if (container === this.container && usedShadowDOM === this.useShadowDOM) {
            return; // container is the same and no shadow DOM usage has changed
        }
        if (this.container) {
            this.toDisposeOnSetContainer.dispose();
            this.view.remove();
            if (this.shadowRoot) {
                this.shadowRoot = null;
                this.shadowRootHostElement?.remove();
                this.shadowRootHostElement = null;
            }
            this.container = null;
        }
        if (container) {
            this.container = container;
            if (this.useShadowDOM) {
                this.shadowRootHostElement = $('.shadow-root-host');
                this.container.appendChild(this.shadowRootHostElement);
                this.shadowRoot = this.shadowRootHostElement.attachShadow({ mode: 'open' });
                const style = document.createElement('style');
                style.textContent = SHADOW_ROOT_CSS;
                this.shadowRoot.appendChild(style);
                this.shadowRoot.appendChild(this.view);
                this.shadowRoot.appendChild($('slot'));
            }
            else {
                this.container.appendChild(this.view);
            }
            const toDisposeOnSetContainer = new DisposableStore();
            ContextView.BUBBLE_UP_EVENTS.forEach(event => {
                toDisposeOnSetContainer.add(addStandardDisposableListener(this.container, event, e => {
                    this.onDOMEvent(e, false);
                }));
            });
            ContextView.BUBBLE_DOWN_EVENTS.forEach(event => {
                toDisposeOnSetContainer.add(addStandardDisposableListener(this.container, event, e => {
                    this.onDOMEvent(e, true);
                }, true));
            });
            this.toDisposeOnSetContainer = toDisposeOnSetContainer;
        }
    }
    show(delegate) {
        if (this.isVisible()) {
            this.hide();
        }
        // Show static box
        clearNode(this.view);
        this.view.className = 'context-view monaco-component';
        this.view.style.top = '0px';
        this.view.style.left = '0px';
        this.view.style.zIndex = `${2575 + (delegate.layer ?? 0)}`;
        this.view.style.position = this.useFixedPosition ? 'fixed' : 'absolute';
        show(this.view);
        // Render content
        this.toDisposeOnClean = delegate.render(this.view) || Disposable.None;
        // Set active delegate
        this.delegate = delegate;
        // Layout
        this.doLayout();
        // Focus
        this.delegate.focus?.();
    }
    getViewElement() {
        return this.view;
    }
    layout() {
        if (!this.isVisible()) {
            return;
        }
        if (this.delegate.canRelayout === false && !(isIOS && BrowserFeatures.pointerEvents)) {
            this.hide();
            return;
        }
        this.delegate?.layout?.();
        this.doLayout();
    }
    doLayout() {
        // Check that we still have a delegate - this.delegate.layout may have hidden
        if (!this.isVisible()) {
            return;
        }
        // Get anchor
        const anchor = this.delegate.getAnchor();
        // Compute around
        let around;
        // Get the element's position and size (to anchor the view)
        if (isHTMLElement(anchor)) {
            const elementPosition = getDomNodePagePosition(anchor);
            // In areas where zoom is applied to the element or its ancestors, we need to adjust the size of the element
            // e.g. The title bar has counter zoom behavior meaning it applies the inverse of zoom level.
            // Window Zoom Level: 1.5, Title Bar Zoom: 1/1.5, Size Multiplier: 1.5
            const zoom = getDomNodeZoomLevel(anchor);
            around = {
                top: elementPosition.top * zoom,
                left: elementPosition.left * zoom,
                width: elementPosition.width * zoom,
                height: elementPosition.height * zoom
            };
        }
        else if (isAnchor(anchor)) {
            around = {
                top: anchor.y,
                left: anchor.x,
                width: anchor.width || 1,
                height: anchor.height || 2
            };
        }
        else {
            around = {
                top: anchor.posy,
                left: anchor.posx,
                // We are about to position the context view where the mouse
                // cursor is. To prevent the view being exactly under the mouse
                // when showing and thus potentially triggering an action within,
                // we treat the mouse location like a small sized block element.
                width: 2,
                height: 2
            };
        }
        const viewSizeWidth = getTotalWidth(this.view);
        const viewSizeHeight = getTotalHeight(this.view);
        const anchorPosition = this.delegate.anchorPosition ?? 0 /* AnchorPosition.BELOW */;
        const anchorAlignment = this.delegate.anchorAlignment ?? 0 /* AnchorAlignment.LEFT */;
        const anchorAxisAlignment = this.delegate.anchorAxisAlignment ?? 0 /* AnchorAxisAlignment.VERTICAL */;
        let top;
        let left;
        const activeWindow = getActiveWindow();
        if (anchorAxisAlignment === 0 /* AnchorAxisAlignment.VERTICAL */) {
            const verticalAnchor = { offset: around.top - activeWindow.pageYOffset, size: around.height, position: anchorPosition === 0 /* AnchorPosition.BELOW */ ? 0 /* LayoutAnchorPosition.Before */ : 1 /* LayoutAnchorPosition.After */ };
            const horizontalAnchor = { offset: around.left, size: around.width, position: anchorAlignment === 0 /* AnchorAlignment.LEFT */ ? 0 /* LayoutAnchorPosition.Before */ : 1 /* LayoutAnchorPosition.After */, mode: LayoutAnchorMode.ALIGN };
            top = layout(activeWindow.innerHeight, viewSizeHeight, verticalAnchor) + activeWindow.pageYOffset;
            // if view intersects vertically with anchor,  we must avoid the anchor
            if (Range.intersects({ start: top, end: top + viewSizeHeight }, { start: verticalAnchor.offset, end: verticalAnchor.offset + verticalAnchor.size })) {
                horizontalAnchor.mode = LayoutAnchorMode.AVOID;
            }
            left = layout(activeWindow.innerWidth, viewSizeWidth, horizontalAnchor);
        }
        else {
            const horizontalAnchor = { offset: around.left, size: around.width, position: anchorAlignment === 0 /* AnchorAlignment.LEFT */ ? 0 /* LayoutAnchorPosition.Before */ : 1 /* LayoutAnchorPosition.After */ };
            const verticalAnchor = { offset: around.top, size: around.height, position: anchorPosition === 0 /* AnchorPosition.BELOW */ ? 0 /* LayoutAnchorPosition.Before */ : 1 /* LayoutAnchorPosition.After */, mode: LayoutAnchorMode.ALIGN };
            left = layout(activeWindow.innerWidth, viewSizeWidth, horizontalAnchor);
            // if view intersects horizontally with anchor, we must avoid the anchor
            if (Range.intersects({ start: left, end: left + viewSizeWidth }, { start: horizontalAnchor.offset, end: horizontalAnchor.offset + horizontalAnchor.size })) {
                verticalAnchor.mode = LayoutAnchorMode.AVOID;
            }
            top = layout(activeWindow.innerHeight, viewSizeHeight, verticalAnchor) + activeWindow.pageYOffset;
        }
        this.view.classList.remove('top', 'bottom', 'left', 'right');
        this.view.classList.add(anchorPosition === 0 /* AnchorPosition.BELOW */ ? 'bottom' : 'top');
        this.view.classList.add(anchorAlignment === 0 /* AnchorAlignment.LEFT */ ? 'left' : 'right');
        this.view.classList.toggle('fixed', this.useFixedPosition);
        const containerPosition = getDomNodePagePosition(this.container);
        // Account for container scroll when positioning the context view
        const containerScrollTop = this.container.scrollTop || 0;
        const containerScrollLeft = this.container.scrollLeft || 0;
        this.view.style.top = `${top - (this.useFixedPosition ? getDomNodePagePosition(this.view).top : containerPosition.top) + containerScrollTop}px`;
        this.view.style.left = `${left - (this.useFixedPosition ? getDomNodePagePosition(this.view).left : containerPosition.left) + containerScrollLeft}px`;
        this.view.style.width = 'initial';
    }
    hide(data) {
        const delegate = this.delegate;
        this.delegate = null;
        if (delegate?.onHide) {
            delegate.onHide(data);
        }
        this.toDisposeOnClean.dispose();
        hide(this.view);
    }
    isVisible() {
        return !!this.delegate;
    }
    onDOMEvent(e, onCapture) {
        if (this.delegate) {
            if (this.delegate.onDOMEvent) {
                this.delegate.onDOMEvent(e, getWindow(e).document.activeElement);
            }
            else if (onCapture && !isAncestor(e.target, this.container)) {
                this.hide();
            }
        }
    }
    dispose() {
        this.hide();
        super.dispose();
    }
}
const SHADOW_ROOT_CSS = /* css */ `
	:host {
		all: initial; /* 1st rule so subsequent properties are reset. */
	}

	.codicon[class*='codicon-'] {
		font: normal normal normal 16px/1 codicon;
		display: inline-block;
		text-decoration: none;
		text-rendering: auto;
		text-align: center;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}

	:host {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", "HelveticaNeue-Light", system-ui, "Ubuntu", "Droid Sans", sans-serif;
	}

	:host-context(.mac) { font-family: -apple-system, BlinkMacSystemFont, sans-serif; }
	:host-context(.mac:lang(zh-Hans)) { font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", sans-serif; }
	:host-context(.mac:lang(zh-Hant)) { font-family: -apple-system, BlinkMacSystemFont, "PingFang TC", sans-serif; }
	:host-context(.mac:lang(ja)) { font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic Pro", sans-serif; }
	:host-context(.mac:lang(ko)) { font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Nanum Gothic", "AppleGothic", sans-serif; }

	:host-context(.windows) { font-family: "Segoe WPC", "Segoe UI", sans-serif; }
	:host-context(.windows:lang(zh-Hans)) { font-family: "Segoe WPC", "Segoe UI", "Microsoft YaHei", sans-serif; }
	:host-context(.windows:lang(zh-Hant)) { font-family: "Segoe WPC", "Segoe UI", "Microsoft Jhenghei", sans-serif; }
	:host-context(.windows:lang(ja)) { font-family: "Segoe WPC", "Segoe UI", "Yu Gothic UI", "Meiryo UI", sans-serif; }
	:host-context(.windows:lang(ko)) { font-family: "Segoe WPC", "Segoe UI", "Malgun Gothic", "Dotom", sans-serif; }

	:host-context(.linux) { font-family: system-ui, "Ubuntu", "Droid Sans", sans-serif; }
	:host-context(.linux:lang(zh-Hans)) { font-family: system-ui, "Ubuntu", "Droid Sans", "Source Han Sans SC", "Source Han Sans CN", "Source Han Sans", sans-serif; }
	:host-context(.linux:lang(zh-Hant)) { font-family: system-ui, "Ubuntu", "Droid Sans", "Source Han Sans TC", "Source Han Sans TW", "Source Han Sans", sans-serif; }
	:host-context(.linux:lang(ja)) { font-family: system-ui, "Ubuntu", "Droid Sans", "Source Han Sans J", "Source Han Sans JP", "Source Han Sans", sans-serif; }
	:host-context(.linux:lang(ko)) { font-family: system-ui, "Ubuntu", "Droid Sans", "Source Han Sans K", "Source Han Sans JR", "Source Han Sans", "UnDotum", "FBaekmuk Gulim", sans-serif; }
`;

export { ContextView, LayoutAnchorMode, isAnchor, layout };
