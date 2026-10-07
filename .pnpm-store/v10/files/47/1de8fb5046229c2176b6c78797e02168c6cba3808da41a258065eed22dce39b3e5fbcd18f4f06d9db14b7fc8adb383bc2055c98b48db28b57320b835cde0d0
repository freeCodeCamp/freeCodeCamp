/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { getZoomFactor, isChrome } from 'vs/base/browser/browser';
import * as dom from 'vs/base/browser/dom';
import { FastDomNode, createFastDomNode } from 'vs/base/browser/fastDomNode';
import { IMouseEvent, IMouseWheelEvent, StandardWheelEvent } from 'vs/base/browser/mouseEvent';
import { ScrollbarHost } from 'vs/base/browser/ui/scrollbar/abstractScrollbar';
import { HorizontalScrollbar } from 'vs/base/browser/ui/scrollbar/horizontalScrollbar';
import { ScrollableElementChangeOptions, ScrollableElementCreationOptions, ScrollableElementResolvedOptions } from 'vs/base/browser/ui/scrollbar/scrollableElementOptions';
import { VerticalScrollbar } from 'vs/base/browser/ui/scrollbar/verticalScrollbar';
import { Widget } from 'vs/base/browser/ui/widget';
import { TimeoutTimer } from 'vs/base/common/async';
import { Emitter, Event } from 'vs/base/common/event';
import { IDisposable, dispose } from 'vs/base/common/lifecycle';
import * as platform from 'vs/base/common/platform';
import { INewScrollDimensions, INewScrollPosition, IScrollDimensions, IScrollPosition, ScrollEvent, Scrollable, ScrollbarVisibility } from 'vs/base/common/scrollable';
// import 'vs/css!./media/scrollbars';

const HIDE_TIMEOUT = 500;
const SCROLL_WHEEL_SENSITIVITY = 50;
const SCROLL_WHEEL_SMOOTH_SCROLL_ENABLED = true;

export interface IOverviewRulerLayoutInfo {
	parent: HTMLElement;
	insertBefore: HTMLElement;
}

class MouseWheelClassifierItem {
	public timestamp: number;
	public deltaX: number;
	public deltaY: number;
	public score: number;

	constructor(timestamp: number, deltaX: number, deltaY: number) {
		this.timestamp = timestamp;
		this.deltaX = deltaX;
		this.deltaY = deltaY;
		this.score = 0;
	}
}

export class MouseWheelClassifier {

	public static readonly INSTANCE = new MouseWheelClassifier();

	private readonly _capacity: number;
	private _memory: MouseWheelClassifierItem[];
	private _front: number;
	private _rear: number;

	constructor() {
		this._capacity = 5;
		this._memory = [];
		this._front = -1;
		this._rear = -1;
	}

	public isPhysicalMouseWheel(): boolean {
		if (this._front === -1 && this._rear === -1) {
			// no elements
			return false;
		}

		// 0.5 * last + 0.25 * 2nd last + 0.125 * 3rd last + ...
		let remainingInfluence = 1;
		let score = 0;
		let iteration = 1;

		let index = this._rear;
		do {
			const influence = (index === this._front ? remainingInfluence : Math.pow(2, -iteration));
			remainingInfluence -= influence;
			score += this._memory[index].score * influence;

			if (index === this._front) {
				break;
			}

			index = (this._capacity + index - 1) % this._capacity;
			iteration++;
		} while (true);

		return (score <= 0.5);
	}

	public acceptStandardWheelEvent(e: StandardWheelEvent): void {
		if (isChrome) {
			const targetWindow = dom.getWindow(e.browserEvent);
			const pageZoomFactor = getZoomFactor(targetWindow);
			// On Chrome, the incoming delta events are multiplied with the OS zoom factor.
			// The OS zoom factor can be reverse engineered by using the device pixel ratio and the configured zoom factor into account.
			this.accept(Date.now(), e.deltaX * pageZoomFactor, e.deltaY * pageZoomFactor);
		} else {
			this.accept(Date.now(), e.deltaX, e.deltaY);
		}
	}

	public accept(timestamp: number, deltaX: number, deltaY: number): void {
		let previousItem = null;
		const item = new MouseWheelClassifierItem(timestamp, deltaX, deltaY);

		if (this._front === -1 && this._rear === -1) {
			this._memory[0] = item;
			this._front = 0;
			this._rear = 0;
		} else {
			previousItem = this._memory[this._rear];

			this._rear = (this._rear + 1) % this._capacity;
			if (this._rear === this._front) {
				// Drop oldest
				this._front = (this._front + 1) % this._capacity;
			}
			this._memory[this._rear] = item;
		}

		item.score = this._computeScore(item, previousItem);
	}

	/**
	 * A score between 0 and 1 for `item`.
	 *  - a score towards 0 indicates that the source appears to be a physical mouse wheel
	 *  - a score towards 1 indicates that the source appears to be a touchpad or magic mouse, etc.
	 */
	private _computeScore(item: MouseWheelClassifierItem, previousItem: MouseWheelClassifierItem | null): number {

		if (Math.abs(item.deltaX) > 0 && Math.abs(item.deltaY) > 0) {
			// both axes exercised => definitely not a physical mouse wheel
			return 1;
		}

		let score: number = 0.5;

		if (!this._isAlmostInt(item.deltaX) || !this._isAlmostInt(item.deltaY)) {
			// non-integer deltas => indicator that this is not a physical mouse wheel
			score += 0.25;
		}

		// Non-accelerating scroll => indicator that this is a physical mouse wheel
		// These can be identified by seeing whether they are the module of one another.
		if (previousItem) {
			const absDeltaX = Math.abs(item.deltaX);
			const absDeltaY = Math.abs(item.deltaY);

			const absPreviousDeltaX = Math.abs(previousItem.deltaX);
			const absPreviousDeltaY = Math.abs(previousItem.deltaY);

			// Min 1 to avoid division by zero, module 1 will still be 0.
			const minDeltaX = Math.max(Math.min(absDeltaX, absPreviousDeltaX), 1);
			const minDeltaY = Math.max(Math.min(absDeltaY, absPreviousDeltaY), 1);

			const maxDeltaX = Math.max(absDeltaX, absPreviousDeltaX);
			const maxDeltaY = Math.max(absDeltaY, absPreviousDeltaY);

			const isSameModulo = (maxDeltaX % minDeltaX === 0 && maxDeltaY % minDeltaY === 0);
			if (isSameModulo) {
				score -= 0.5;
			}
		}

		return Math.min(Math.max(score, 0), 1);
	}

	private _isAlmostInt(value: number): boolean {
		const delta = Math.abs(Math.round(value) - value);
		return (delta < 0.01);
	}
}

export abstract class AbstractScrollableElement extends Widget {

	private readonly _options: ScrollableElementResolvedOptions;
	protected readonly _scrollable: Scrollable;
	private readonly _verticalScrollbar: VerticalScrollbar;
	private readonly _horizontalScrollbar: HorizontalScrollbar;
	private readonly _domNode: HTMLElement;

	private readonly _leftShadowDomNode: FastDomNode<HTMLElement> | null;
	private readonly _topShadowDomNode: FastDomNode<HTMLElement> | null;
	private readonly _topLeftShadowDomNode: FastDomNode<HTMLElement> | null;

	private readonly _listenOnDomNode: HTMLElement;

	private _mouseWheelToDispose: IDisposable[];

	private _isDragging: boolean;
	private _mouseIsOver: boolean;

	private readonly _hideTimeout: TimeoutTimer;
	private _shouldRender: boolean;

	private _revealOnScroll: boolean;

	private readonly _onScroll = this._register(new Emitter<ScrollEvent>());
	public readonly onScroll: Event<ScrollEvent> = this._onScroll.event;

	private readonly _onWillScroll = this._register(new Emitter<ScrollEvent>());
	public readonly onWillScroll: Event<ScrollEvent> = this._onWillScroll.event;

	public get options(): Readonly<ScrollableElementResolvedOptions> {
		return this._options;
	}

	protected constructor(element: HTMLElement, options: ScrollableElementCreationOptions, scrollable: Scrollable) {
		super();
		// HACK: xterm.js currnetly requires overflow to allow decorations to escape the container
		// element.style.overflow = 'hidden';
		this._options = resolveOptions(options);
		this._scrollable = scrollable;

		this._register(this._scrollable.onScroll((e) => {
			this._onWillScroll.fire(e);
			this._onDidScroll(e);
			this._onScroll.fire(e);
		}));

		const scrollbarHost: ScrollbarHost = {
			onMouseWheel: (mouseWheelEvent: StandardWheelEvent) => this._onMouseWheel(mouseWheelEvent),
			onDragStart: () => this._onDragStart(),
			onDragEnd: () => this._onDragEnd(),
		};
		this._verticalScrollbar = this._register(new VerticalScrollbar(this._scrollable, this._options, scrollbarHost));
		this._horizontalScrollbar = this._register(new HorizontalScrollbar(this._scrollable, this._options, scrollbarHost));

		this._domNode = document.createElement('div');
		this._domNode.className = 'xterm-scrollable-element ' + this._options.className;
		this._domNode.setAttribute('role', 'presentation');
		this._domNode.style.position = 'relative';
		// HACK: xterm.js currnetly requires overflow to allow decorations to escape the container
		// this._domNode.style.overflow = 'hidden';
		this._domNode.appendChild(element);
		this._domNode.appendChild(this._horizontalScrollbar.domNode.domNode);
		this._domNode.appendChild(this._verticalScrollbar.domNode.domNode);

		if (this._options.useShadows) {
			this._leftShadowDomNode = createFastDomNode(document.createElement('div'));
			this._leftShadowDomNode.setClassName('shadow');
			this._domNode.appendChild(this._leftShadowDomNode.domNode);

			this._topShadowDomNode = createFastDomNode(document.createElement('div'));
			this._topShadowDomNode.setClassName('shadow');
			this._domNode.appendChild(this._topShadowDomNode.domNode);

			this._topLeftShadowDomNode = createFastDomNode(document.createElement('div'));
			this._topLeftShadowDomNode.setClassName('shadow');
			this._domNode.appendChild(this._topLeftShadowDomNode.domNode);
		} else {
			this._leftShadowDomNode = null;
			this._topShadowDomNode = null;
			this._topLeftShadowDomNode = null;
		}

		this._listenOnDomNode = this._options.listenOnDomNode || this._domNode;

		this._mouseWheelToDispose = [];
		this._setListeningToMouseWheel(this._options.handleMouseWheel);

		this.onmouseover(this._listenOnDomNode, (e) => this._onMouseOver(e));
		this.onmouseleave(this._listenOnDomNode, (e) => this._onMouseLeave(e));

		this._hideTimeout = this._register(new TimeoutTimer());
		this._isDragging = false;
		this._mouseIsOver = false;

		this._shouldRender = true;

		this._revealOnScroll = true;
	}

	public override dispose(): void {
		this._mouseWheelToDispose = dispose(this._mouseWheelToDispose);
		super.dispose();
	}

	/**
	 * Get the generated 'scrollable' dom node
	 */
	public getDomNode(): HTMLElement {
		return this._domNode;
	}

	public getOverviewRulerLayoutInfo(): IOverviewRulerLayoutInfo {
		return {
			parent: this._domNode,
			insertBefore: this._verticalScrollbar.domNode.domNode,
		};
	}

	/**
	 * Delegate a pointer down event to the vertical scrollbar.
	 * This is to help with clicking somewhere else and having the scrollbar react.
	 */
	public delegateVerticalScrollbarPointerDown(browserEvent: PointerEvent): void {
		this._verticalScrollbar.delegatePointerDown(browserEvent);
	}

	public getScrollDimensions(): IScrollDimensions {
		return this._scrollable.getScrollDimensions();
	}

	public setScrollDimensions(dimensions: INewScrollDimensions): void {
		this._scrollable.setScrollDimensions(dimensions, false);
	}

	/**
	 * Update the class name of the scrollable element.
	 */
	public updateClassName(newClassName: string): void {
		this._options.className = newClassName;
		// Defaults are different on Macs
		if (platform.isMacintosh) {
			this._options.className += ' mac';
		}
		this._domNode.className = 'xterm-scrollable-element ' + this._options.className;
	}

	/**
	 * Update configuration options for the scrollbar.
	 */
	public updateOptions(newOptions: ScrollableElementChangeOptions): void {
		if (typeof newOptions.handleMouseWheel !== 'undefined') {
			this._options.handleMouseWheel = newOptions.handleMouseWheel;
			this._setListeningToMouseWheel(this._options.handleMouseWheel);
		}
		if (typeof newOptions.mouseWheelScrollSensitivity !== 'undefined') {
			this._options.mouseWheelScrollSensitivity = newOptions.mouseWheelScrollSensitivity;
		}
		if (typeof newOptions.fastScrollSensitivity !== 'undefined') {
			this._options.fastScrollSensitivity = newOptions.fastScrollSensitivity;
		}
		if (typeof newOptions.scrollPredominantAxis !== 'undefined') {
			this._options.scrollPredominantAxis = newOptions.scrollPredominantAxis;
		}
		if (typeof newOptions.horizontal !== 'undefined') {
			this._options.horizontal = newOptions.horizontal;
		}
		if (typeof newOptions.vertical !== 'undefined') {
			this._options.vertical = newOptions.vertical;
		}
		if (typeof newOptions.horizontalScrollbarSize !== 'undefined') {
			this._options.horizontalScrollbarSize = newOptions.horizontalScrollbarSize;
		}
		if (typeof newOptions.verticalScrollbarSize !== 'undefined') {
			this._options.verticalScrollbarSize = newOptions.verticalScrollbarSize;
		}
		if (typeof newOptions.scrollByPage !== 'undefined') {
			this._options.scrollByPage = newOptions.scrollByPage;
		}
		this._horizontalScrollbar.updateOptions(this._options);
		this._verticalScrollbar.updateOptions(this._options);

		if (!this._options.lazyRender) {
			this._render();
		}
	}

	public setRevealOnScroll(value: boolean) {
		this._revealOnScroll = value;
	}

	public delegateScrollFromMouseWheelEvent(browserEvent: IMouseWheelEvent) {
		this._onMouseWheel(new StandardWheelEvent(browserEvent));
	}

	// -------------------- mouse wheel scrolling --------------------

	private _setListeningToMouseWheel(shouldListen: boolean): void {
		const isListening = (this._mouseWheelToDispose.length > 0);

		if (isListening === shouldListen) {
			// No change
			return;
		}

		// Stop listening (if necessary)
		this._mouseWheelToDispose = dispose(this._mouseWheelToDispose);

		// Start listening (if necessary)
		if (shouldListen) {
			const onMouseWheel = (browserEvent: IMouseWheelEvent) => {
				this._onMouseWheel(new StandardWheelEvent(browserEvent));
			};

			this._mouseWheelToDispose.push(dom.addDisposableListener(this._listenOnDomNode, dom.EventType.MOUSE_WHEEL, onMouseWheel, { passive: false }));
		}
	}

	private _onMouseWheel(e: StandardWheelEvent): void {
		if (e.browserEvent?.defaultPrevented) {
			return;
		}

		const classifier = MouseWheelClassifier.INSTANCE;
		if (SCROLL_WHEEL_SMOOTH_SCROLL_ENABLED) {
			classifier.acceptStandardWheelEvent(e);
		}

		// useful for creating unit tests:
		// console.log(`${Date.now()}, ${e.deltaY}, ${e.deltaX}`);

		let didScroll = false;

		if (e.deltaY || e.deltaX) {
			let deltaY = e.deltaY * this._options.mouseWheelScrollSensitivity;
			let deltaX = e.deltaX * this._options.mouseWheelScrollSensitivity;

			if (this._options.scrollPredominantAxis) {
				if (this._options.scrollYToX && deltaX + deltaY === 0) {
					// when configured to map Y to X and we both see
					// no dominant axis and X and Y are competing with
					// identical values into opposite directions, we
					// ignore the delta as we cannot make a decision then
					deltaX = deltaY = 0;
				} else if (Math.abs(deltaY) >= Math.abs(deltaX)) {
					deltaX = 0;
				} else {
					deltaY = 0;
				}
			}

			if (this._options.flipAxes) {
				[deltaY, deltaX] = [deltaX, deltaY];
			}

			// Convert vertical scrolling to horizontal if shift is held, this
			// is handled at a higher level on Mac
			const shiftConvert = !platform.isMacintosh && e.browserEvent && e.browserEvent.shiftKey;
			if ((this._options.scrollYToX || shiftConvert) && !deltaX) {
				deltaX = deltaY;
				deltaY = 0;
			}

			if (e.browserEvent && e.browserEvent.altKey) {
				// fastScrolling
				deltaX = deltaX * this._options.fastScrollSensitivity;
				deltaY = deltaY * this._options.fastScrollSensitivity;
			}

			const futureScrollPosition = this._scrollable.getFutureScrollPosition();

			let desiredScrollPosition: INewScrollPosition = {};
			if (deltaY) {
				const deltaScrollTop = SCROLL_WHEEL_SENSITIVITY * deltaY;
				// Here we convert values such as -0.3 to -1 or 0.3 to 1, otherwise low speed scrolling will never scroll
				const desiredScrollTop = futureScrollPosition.scrollTop - (deltaScrollTop < 0 ? Math.floor(deltaScrollTop) : Math.ceil(deltaScrollTop));
				this._verticalScrollbar.writeScrollPosition(desiredScrollPosition, desiredScrollTop);
			}
			if (deltaX) {
				const deltaScrollLeft = SCROLL_WHEEL_SENSITIVITY * deltaX;
				// Here we convert values such as -0.3 to -1 or 0.3 to 1, otherwise low speed scrolling will never scroll
				const desiredScrollLeft = futureScrollPosition.scrollLeft - (deltaScrollLeft < 0 ? Math.floor(deltaScrollLeft) : Math.ceil(deltaScrollLeft));
				this._horizontalScrollbar.writeScrollPosition(desiredScrollPosition, desiredScrollLeft);
			}

			// Check that we are scrolling towards a location which is valid
			desiredScrollPosition = this._scrollable.validateScrollPosition(desiredScrollPosition);

			if (futureScrollPosition.scrollLeft !== desiredScrollPosition.scrollLeft || futureScrollPosition.scrollTop !== desiredScrollPosition.scrollTop) {

				const canPerformSmoothScroll = (
					SCROLL_WHEEL_SMOOTH_SCROLL_ENABLED
					&& this._options.mouseWheelSmoothScroll
					&& classifier.isPhysicalMouseWheel()
				);

				if (canPerformSmoothScroll) {
					this._scrollable.setScrollPositionSmooth(desiredScrollPosition);
				} else {
					this._scrollable.setScrollPositionNow(desiredScrollPosition);
				}

				didScroll = true;
			}
		}

		let consumeMouseWheel = didScroll;
		if (!consumeMouseWheel && this._options.alwaysConsumeMouseWheel) {
			consumeMouseWheel = true;
		}
		if (!consumeMouseWheel && this._options.consumeMouseWheelIfScrollbarIsNeeded && (this._verticalScrollbar.isNeeded() || this._horizontalScrollbar.isNeeded())) {
			consumeMouseWheel = true;
		}

		if (consumeMouseWheel) {
			e.preventDefault();
			e.stopPropagation();
		}
	}

	private _onDidScroll(e: ScrollEvent): void {
		this._shouldRender = this._horizontalScrollbar.onDidScroll(e) || this._shouldRender;
		this._shouldRender = this._verticalScrollbar.onDidScroll(e) || this._shouldRender;

		if (this._options.useShadows) {
			this._shouldRender = true;
		}

		if (this._revealOnScroll) {
			this._reveal();
		}

		if (!this._options.lazyRender) {
			this._render();
		}
	}

	/**
	 * Render / mutate the DOM now.
	 * Should be used together with the ctor option `lazyRender`.
	 */
	public renderNow(): void {
		if (!this._options.lazyRender) {
			throw new Error('Please use `lazyRender` together with `renderNow`!');
		}

		this._render();
	}

	private _render(): void {
		if (!this._shouldRender) {
			return;
		}

		this._shouldRender = false;

		this._horizontalScrollbar.render();
		this._verticalScrollbar.render();

		if (this._options.useShadows) {
			const scrollState = this._scrollable.getCurrentScrollPosition();
			const enableTop = scrollState.scrollTop > 0;
			const enableLeft = scrollState.scrollLeft > 0;

			const leftClassName = (enableLeft ? ' left' : '');
			const topClassName = (enableTop ? ' top' : '');
			const topLeftClassName = (enableLeft || enableTop ? ' top-left-corner' : '');
			this._leftShadowDomNode!.setClassName(`shadow${leftClassName}`);
			this._topShadowDomNode!.setClassName(`shadow${topClassName}`);
			this._topLeftShadowDomNode!.setClassName(`shadow${topLeftClassName}${topClassName}${leftClassName}`);
		}
	}

	// -------------------- fade in / fade out --------------------

	private _onDragStart(): void {
		this._isDragging = true;
		this._reveal();
	}

	private _onDragEnd(): void {
		this._isDragging = false;
		this._hide();
	}

	private _onMouseLeave(e: IMouseEvent): void {
		this._mouseIsOver = false;
		this._hide();
	}

	private _onMouseOver(e: IMouseEvent): void {
		this._mouseIsOver = true;
		this._reveal();
	}

	private _reveal(): void {
		this._verticalScrollbar.beginReveal();
		this._horizontalScrollbar.beginReveal();
		this._scheduleHide();
	}

	private _hide(): void {
		if (!this._mouseIsOver && !this._isDragging) {
			this._verticalScrollbar.beginHide();
			this._horizontalScrollbar.beginHide();
		}
	}

	private _scheduleHide(): void {
		if (!this._mouseIsOver && !this._isDragging) {
			this._hideTimeout.cancelAndSet(() => this._hide(), HIDE_TIMEOUT);
		}
	}
}

export class ScrollableElement extends AbstractScrollableElement {

	constructor(element: HTMLElement, options: ScrollableElementCreationOptions) {
		options = options || {};
		options.mouseWheelSmoothScroll = false;
		const scrollable = new Scrollable({
			forceIntegerValues: true,
			smoothScrollDuration: 0,
			scheduleAtNextAnimationFrame: (callback) => dom.scheduleAtNextAnimationFrame(dom.getWindow(element), callback)
		});
		super(element, options, scrollable);
		this._register(scrollable);
	}

	public setScrollPosition(update: INewScrollPosition): void {
		this._scrollable.setScrollPositionNow(update);
	}

	public getScrollPosition(): IScrollPosition {
		return this._scrollable.getCurrentScrollPosition();
	}
}

export class SmoothScrollableElement extends AbstractScrollableElement {

	constructor(element: HTMLElement, options: ScrollableElementCreationOptions, scrollable: Scrollable) {
		super(element, options, scrollable);
	}

	public setScrollPosition(update: INewScrollPosition & { reuseAnimation?: boolean }): void {
		if (update.reuseAnimation) {
			this._scrollable.setScrollPositionSmooth(update, update.reuseAnimation);
		} else {
			this._scrollable.setScrollPositionNow(update);
		}
	}

	public getScrollPosition(): IScrollPosition {
		return this._scrollable.getCurrentScrollPosition();
	}

}

export class DomScrollableElement extends AbstractScrollableElement {

	private _element: HTMLElement;

	constructor(element: HTMLElement, options: ScrollableElementCreationOptions) {
		options = options || {};
		options.mouseWheelSmoothScroll = false;
		const scrollable = new Scrollable({
			forceIntegerValues: false, // See https://github.com/microsoft/vscode/issues/139877
			smoothScrollDuration: 0,
			scheduleAtNextAnimationFrame: (callback) => dom.scheduleAtNextAnimationFrame(dom.getWindow(element), callback)
		});
		super(element, options, scrollable);
		this._register(scrollable);
		this._element = element;
		this._register(this.onScroll((e) => {
			if (e.scrollTopChanged) {
				this._element.scrollTop = e.scrollTop;
			}
			if (e.scrollLeftChanged) {
				this._element.scrollLeft = e.scrollLeft;
			}
		}));
		this.scanDomNode();
	}

	public setScrollPosition(update: INewScrollPosition): void {
		this._scrollable.setScrollPositionNow(update);
	}

	public getScrollPosition(): IScrollPosition {
		return this._scrollable.getCurrentScrollPosition();
	}

	public scanDomNode(): void {
		// width, scrollLeft, scrollWidth, height, scrollTop, scrollHeight
		this.setScrollDimensions({
			width: this._element.clientWidth,
			scrollWidth: this._element.scrollWidth,
			height: this._element.clientHeight,
			scrollHeight: this._element.scrollHeight
		});
		this.setScrollPosition({
			scrollLeft: this._element.scrollLeft,
			scrollTop: this._element.scrollTop,
		});
	}
}

function resolveOptions(opts: ScrollableElementCreationOptions): ScrollableElementResolvedOptions {
	const result: ScrollableElementResolvedOptions = {
		lazyRender: (typeof opts.lazyRender !== 'undefined' ? opts.lazyRender : false),
		className: (typeof opts.className !== 'undefined' ? opts.className : ''),
		useShadows: (typeof opts.useShadows !== 'undefined' ? opts.useShadows : true),
		handleMouseWheel: (typeof opts.handleMouseWheel !== 'undefined' ? opts.handleMouseWheel : true),
		flipAxes: (typeof opts.flipAxes !== 'undefined' ? opts.flipAxes : false),
		consumeMouseWheelIfScrollbarIsNeeded: (typeof opts.consumeMouseWheelIfScrollbarIsNeeded !== 'undefined' ? opts.consumeMouseWheelIfScrollbarIsNeeded : false),
		alwaysConsumeMouseWheel: (typeof opts.alwaysConsumeMouseWheel !== 'undefined' ? opts.alwaysConsumeMouseWheel : false),
		scrollYToX: (typeof opts.scrollYToX !== 'undefined' ? opts.scrollYToX : false),
		mouseWheelScrollSensitivity: (typeof opts.mouseWheelScrollSensitivity !== 'undefined' ? opts.mouseWheelScrollSensitivity : 1),
		fastScrollSensitivity: (typeof opts.fastScrollSensitivity !== 'undefined' ? opts.fastScrollSensitivity : 5),
		scrollPredominantAxis: (typeof opts.scrollPredominantAxis !== 'undefined' ? opts.scrollPredominantAxis : true),
		mouseWheelSmoothScroll: (typeof opts.mouseWheelSmoothScroll !== 'undefined' ? opts.mouseWheelSmoothScroll : true),
		arrowSize: (typeof opts.arrowSize !== 'undefined' ? opts.arrowSize : 11),

		listenOnDomNode: (typeof opts.listenOnDomNode !== 'undefined' ? opts.listenOnDomNode : null),

		horizontal: (typeof opts.horizontal !== 'undefined' ? opts.horizontal : ScrollbarVisibility.Auto),
		horizontalScrollbarSize: (typeof opts.horizontalScrollbarSize !== 'undefined' ? opts.horizontalScrollbarSize : 10),
		horizontalSliderSize: (typeof opts.horizontalSliderSize !== 'undefined' ? opts.horizontalSliderSize : 0),
		horizontalHasArrows: (typeof opts.horizontalHasArrows !== 'undefined' ? opts.horizontalHasArrows : false),

		vertical: (typeof opts.vertical !== 'undefined' ? opts.vertical : ScrollbarVisibility.Auto),
		verticalScrollbarSize: (typeof opts.verticalScrollbarSize !== 'undefined' ? opts.verticalScrollbarSize : 10),
		verticalHasArrows: (typeof opts.verticalHasArrows !== 'undefined' ? opts.verticalHasArrows : false),
		verticalSliderSize: (typeof opts.verticalSliderSize !== 'undefined' ? opts.verticalSliderSize : 0),

		scrollByPage: (typeof opts.scrollByPage !== 'undefined' ? opts.scrollByPage : false)
	};

	result.horizontalSliderSize = (typeof opts.horizontalSliderSize !== 'undefined' ? opts.horizontalSliderSize : result.horizontalScrollbarSize);
	result.verticalSliderSize = (typeof opts.verticalSliderSize !== 'undefined' ? opts.verticalSliderSize : result.verticalScrollbarSize);

	// Defaults are different on Macs
	if (platform.isMacintosh) {
		result.className += ' mac';
	}

	return result;
}
