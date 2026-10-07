/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as dom from 'vs/base/browser/dom';
import { createFastDomNode, FastDomNode } from 'vs/base/browser/fastDomNode';
import { GlobalPointerMoveMonitor } from 'vs/base/browser/globalPointerMoveMonitor';
import { StandardWheelEvent } from 'vs/base/browser/mouseEvent';
import { ScrollbarArrow, ScrollbarArrowOptions } from 'vs/base/browser/ui/scrollbar/scrollbarArrow';
import { ScrollbarState } from 'vs/base/browser/ui/scrollbar/scrollbarState';
import { ScrollbarVisibilityController } from 'vs/base/browser/ui/scrollbar/scrollbarVisibilityController';
import { Widget } from 'vs/base/browser/ui/widget';
import * as platform from 'vs/base/common/platform';
import { INewScrollPosition, Scrollable, ScrollbarVisibility } from 'vs/base/common/scrollable';

/**
 * The orthogonal distance to the slider at which dragging "resets". This implements "snapping"
 */
const POINTER_DRAG_RESET_DISTANCE = 140;

export interface ISimplifiedPointerEvent {
	buttons: number;
	pageX: number;
	pageY: number;
}

export interface ScrollbarHost {
	onMouseWheel(mouseWheelEvent: StandardWheelEvent): void;
	onDragStart(): void;
	onDragEnd(): void;
}

export interface AbstractScrollbarOptions {
	lazyRender: boolean;
	host: ScrollbarHost;
	scrollbarState: ScrollbarState;
	visibility: ScrollbarVisibility;
	extraScrollbarClassName: string;
	scrollable: Scrollable;
	scrollByPage: boolean;
}

export abstract class AbstractScrollbar extends Widget {

	protected _host: ScrollbarHost;
	protected _scrollable: Scrollable;
	protected _scrollByPage: boolean;
	private _lazyRender: boolean;
	protected _scrollbarState: ScrollbarState;
	protected _visibilityController: ScrollbarVisibilityController;
	private _pointerMoveMonitor: GlobalPointerMoveMonitor;

	public domNode: FastDomNode<HTMLElement>;
	public slider!: FastDomNode<HTMLElement>;

	protected _shouldRender: boolean;

	constructor(opts: AbstractScrollbarOptions) {
		super();
		this._lazyRender = opts.lazyRender;
		this._host = opts.host;
		this._scrollable = opts.scrollable;
		this._scrollByPage = opts.scrollByPage;
		this._scrollbarState = opts.scrollbarState;
		this._visibilityController = this._register(new ScrollbarVisibilityController(opts.visibility, 'visible scrollbar ' + opts.extraScrollbarClassName, 'invisible scrollbar ' + opts.extraScrollbarClassName));
		this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded());
		this._pointerMoveMonitor = this._register(new GlobalPointerMoveMonitor());
		this._shouldRender = true;
		this.domNode = createFastDomNode(document.createElement('div'));
		this.domNode.setAttribute('role', 'presentation');
		this.domNode.setAttribute('aria-hidden', 'true');

		this._visibilityController.setDomNode(this.domNode);
		this.domNode.setPosition('absolute');

		this._register(dom.addDisposableListener(this.domNode.domNode, dom.EventType.POINTER_DOWN, (e: PointerEvent) => this._domNodePointerDown(e)));
	}

	// ----------------- creation

	/**
	 * Creates the dom node for an arrow & adds it to the container
	 */
	protected _createArrow(opts: ScrollbarArrowOptions): void {
		const arrow = this._register(new ScrollbarArrow(opts));
		this.domNode.domNode.appendChild(arrow.bgDomNode);
		this.domNode.domNode.appendChild(arrow.domNode);
	}

	/**
	 * Creates the slider dom node, adds it to the container & hooks up the events
	 */
	protected _createSlider(top: number, left: number, width: number | undefined, height: number | undefined): void {
		this.slider = createFastDomNode(document.createElement('div'));
		this.slider.setClassName('slider');
		this.slider.setPosition('absolute');
		this.slider.setTop(top);
		this.slider.setLeft(left);
		if (typeof width === 'number') {
			this.slider.setWidth(width);
		}
		if (typeof height === 'number') {
			this.slider.setHeight(height);
		}
		this.slider.setLayerHinting(true);
		this.slider.setContain('strict');

		this.domNode.domNode.appendChild(this.slider.domNode);

		this._register(dom.addDisposableListener(
			this.slider.domNode,
			dom.EventType.POINTER_DOWN,
			(e: PointerEvent) => {
				if (e.button === 0) {
					e.preventDefault();
					this._sliderPointerDown(e);
				}
			}
		));

		this.onclick(this.slider.domNode, e => {
			if (e.leftButton) {
				e.stopPropagation();
			}
		});
	}

	// ----------------- Update state

	protected _onElementSize(visibleSize: number): boolean {
		if (this._scrollbarState.setVisibleSize(visibleSize)) {
			this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded());
			this._shouldRender = true;
			if (!this._lazyRender) {
				this.render();
			}
		}
		return this._shouldRender;
	}

	protected _onElementScrollSize(elementScrollSize: number): boolean {
		if (this._scrollbarState.setScrollSize(elementScrollSize)) {
			this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded());
			this._shouldRender = true;
			if (!this._lazyRender) {
				this.render();
			}
		}
		return this._shouldRender;
	}

	protected _onElementScrollPosition(elementScrollPosition: number): boolean {
		if (this._scrollbarState.setScrollPosition(elementScrollPosition)) {
			this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded());
			this._shouldRender = true;
			if (!this._lazyRender) {
				this.render();
			}
		}
		return this._shouldRender;
	}

	// ----------------- rendering

	public beginReveal(): void {
		this._visibilityController.setShouldBeVisible(true);
	}

	public beginHide(): void {
		this._visibilityController.setShouldBeVisible(false);
	}

	public render(): void {
		if (!this._shouldRender) {
			return;
		}
		this._shouldRender = false;

		this._renderDomNode(this._scrollbarState.getRectangleLargeSize(), this._scrollbarState.getRectangleSmallSize());
		this._updateSlider(this._scrollbarState.getSliderSize(), this._scrollbarState.getArrowSize() + this._scrollbarState.getSliderPosition());
	}
	// ----------------- DOM events

	private _domNodePointerDown(e: PointerEvent): void {
		if (e.target !== this.domNode.domNode) {
			return;
		}
		this._onPointerDown(e);
	}

	public delegatePointerDown(e: PointerEvent): void {
		const domTop = this.domNode.domNode.getClientRects()[0].top;
		const sliderStart = domTop + this._scrollbarState.getSliderPosition();
		const sliderStop = domTop + this._scrollbarState.getSliderPosition() + this._scrollbarState.getSliderSize();
		const pointerPos = this._sliderPointerPosition(e);
		if (sliderStart <= pointerPos && pointerPos <= sliderStop) {
			// Act as if it was a pointer down on the slider
			if (e.button === 0) {
				e.preventDefault();
				this._sliderPointerDown(e);
			}
		} else {
			// Act as if it was a pointer down on the scrollbar
			this._onPointerDown(e);
		}
	}

	private _onPointerDown(e: PointerEvent): void {
		let offsetX: number;
		let offsetY: number;
		if (e.target === this.domNode.domNode && typeof e.offsetX === 'number' && typeof e.offsetY === 'number') {
			offsetX = e.offsetX;
			offsetY = e.offsetY;
		} else {
			const domNodePosition = dom.getDomNodePagePosition(this.domNode.domNode);
			offsetX = e.pageX - domNodePosition.left;
			offsetY = e.pageY - domNodePosition.top;
		}

		const offset = this._pointerDownRelativePosition(offsetX, offsetY);
		this._setDesiredScrollPositionNow(
			this._scrollByPage
				? this._scrollbarState.getDesiredScrollPositionFromOffsetPaged(offset)
				: this._scrollbarState.getDesiredScrollPositionFromOffset(offset)
		);

		if (e.button === 0) {
			// left button
			e.preventDefault();
			this._sliderPointerDown(e);
		}
	}

	private _sliderPointerDown(e: PointerEvent): void {
		if (!e.target || !(e.target instanceof Element)) {
			return;
		}
		const initialPointerPosition = this._sliderPointerPosition(e);
		const initialPointerOrthogonalPosition = this._sliderOrthogonalPointerPosition(e);
		const initialScrollbarState = this._scrollbarState.clone();
		this.slider.toggleClassName('active', true);

		this._pointerMoveMonitor.startMonitoring(
			e.target,
			e.pointerId,
			e.buttons,
			(pointerMoveData: PointerEvent) => {
				const pointerOrthogonalPosition = this._sliderOrthogonalPointerPosition(pointerMoveData);
				const pointerOrthogonalDelta = Math.abs(pointerOrthogonalPosition - initialPointerOrthogonalPosition);

				if (platform.isWindows && pointerOrthogonalDelta > POINTER_DRAG_RESET_DISTANCE) {
					// The pointer has wondered away from the scrollbar => reset dragging
					this._setDesiredScrollPositionNow(initialScrollbarState.getScrollPosition());
					return;
				}

				const pointerPosition = this._sliderPointerPosition(pointerMoveData);
				const pointerDelta = pointerPosition - initialPointerPosition;
				this._setDesiredScrollPositionNow(initialScrollbarState.getDesiredScrollPositionFromDelta(pointerDelta));
			},
			() => {
				this.slider.toggleClassName('active', false);
				this._host.onDragEnd();
			}
		);

		this._host.onDragStart();
	}

	private _setDesiredScrollPositionNow(_desiredScrollPosition: number): void {

		const desiredScrollPosition: INewScrollPosition = {};
		this.writeScrollPosition(desiredScrollPosition, _desiredScrollPosition);

		this._scrollable.setScrollPositionNow(desiredScrollPosition);
	}

	public updateScrollbarSize(scrollbarSize: number): void {
		this._updateScrollbarSize(scrollbarSize);
		this._scrollbarState.setScrollbarSize(scrollbarSize);
		this._shouldRender = true;
		if (!this._lazyRender) {
			this.render();
		}
	}

	public isNeeded(): boolean {
		return this._scrollbarState.isNeeded();
	}

	// ----------------- Overwrite these

	protected abstract _renderDomNode(largeSize: number, smallSize: number): void;
	protected abstract _updateSlider(sliderSize: number, sliderPosition: number): void;

	protected abstract _pointerDownRelativePosition(offsetX: number, offsetY: number): number;
	protected abstract _sliderPointerPosition(e: ISimplifiedPointerEvent): number;
	protected abstract _sliderOrthogonalPointerPosition(e: ISimplifiedPointerEvent): number;
	protected abstract _updateScrollbarSize(size: number): void;

	public abstract writeScrollPosition(target: INewScrollPosition, scrollPosition: number): void;
}
