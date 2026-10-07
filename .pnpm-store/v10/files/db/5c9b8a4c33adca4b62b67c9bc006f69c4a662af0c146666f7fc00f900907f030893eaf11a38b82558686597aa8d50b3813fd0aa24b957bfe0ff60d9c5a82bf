/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { AbstractScrollbar, ISimplifiedPointerEvent, ScrollbarHost } from 'vs/base/browser/ui/scrollbar/abstractScrollbar';
import { ScrollableElementResolvedOptions } from 'vs/base/browser/ui/scrollbar/scrollableElementOptions';
import { ScrollbarState } from 'vs/base/browser/ui/scrollbar/scrollbarState';
import { INewScrollPosition, Scrollable, ScrollbarVisibility, ScrollEvent } from 'vs/base/common/scrollable';



export class VerticalScrollbar extends AbstractScrollbar {

	constructor(scrollable: Scrollable, options: ScrollableElementResolvedOptions, host: ScrollbarHost) {
		const scrollDimensions = scrollable.getScrollDimensions();
		const scrollPosition = scrollable.getCurrentScrollPosition();
		super({
			lazyRender: options.lazyRender,
			host: host,
			scrollbarState: new ScrollbarState(
				(options.verticalHasArrows ? options.arrowSize : 0),
				(options.vertical === ScrollbarVisibility.Hidden ? 0 : options.verticalScrollbarSize),
				// give priority to vertical scroll bar over horizontal and let it scroll all the way to the bottom
				0,
				scrollDimensions.height,
				scrollDimensions.scrollHeight,
				scrollPosition.scrollTop
			),
			visibility: options.vertical,
			extraScrollbarClassName: 'vertical',
			scrollable: scrollable,
			scrollByPage: options.scrollByPage
		});

		if (options.verticalHasArrows) {
      throw new Error('horizontalHasArrows is not supported in xterm.js');
			// const arrowDelta = (options.arrowSize - ARROW_IMG_SIZE) / 2;
			// const scrollbarDelta = (options.verticalScrollbarSize - ARROW_IMG_SIZE) / 2;

			// this._createArrow({
			// 	className: 'scra',
			// 	icon: Codicon.scrollbarButtonUp,
			// 	top: arrowDelta,
			// 	left: scrollbarDelta,
			// 	bottom: undefined,
			// 	right: undefined,
			// 	bgWidth: options.verticalScrollbarSize,
			// 	bgHeight: options.arrowSize,
			// 	onActivate: () => this._host.onMouseWheel(new StandardWheelEvent(null, 0, 1)),
			// });

			// this._createArrow({
			// 	className: 'scra',
			// 	icon: Codicon.scrollbarButtonDown,
			// 	top: undefined,
			// 	left: scrollbarDelta,
			// 	bottom: arrowDelta,
			// 	right: undefined,
			// 	bgWidth: options.verticalScrollbarSize,
			// 	bgHeight: options.arrowSize,
			// 	onActivate: () => this._host.onMouseWheel(new StandardWheelEvent(null, 0, -1)),
			// });
		}

		this._createSlider(0, Math.floor((options.verticalScrollbarSize - options.verticalSliderSize) / 2), options.verticalSliderSize, undefined);
	}

	protected _updateSlider(sliderSize: number, sliderPosition: number): void {
		this.slider.setHeight(sliderSize);
		this.slider.setTop(sliderPosition);
	}

	protected _renderDomNode(largeSize: number, smallSize: number): void {
		this.domNode.setWidth(smallSize);
		this.domNode.setHeight(largeSize);
		this.domNode.setRight(0);
		this.domNode.setTop(0);
	}

	public onDidScroll(e: ScrollEvent): boolean {
		this._shouldRender = this._onElementScrollSize(e.scrollHeight) || this._shouldRender;
		this._shouldRender = this._onElementScrollPosition(e.scrollTop) || this._shouldRender;
		this._shouldRender = this._onElementSize(e.height) || this._shouldRender;
		return this._shouldRender;
	}

	protected _pointerDownRelativePosition(offsetX: number, offsetY: number): number {
		return offsetY;
	}

	protected _sliderPointerPosition(e: ISimplifiedPointerEvent): number {
		return e.pageY;
	}

	protected _sliderOrthogonalPointerPosition(e: ISimplifiedPointerEvent): number {
		return e.pageX;
	}

	protected _updateScrollbarSize(size: number): void {
		this.slider.setWidth(size);
	}

	public writeScrollPosition(target: INewScrollPosition, scrollPosition: number): void {
		target.scrollTop = scrollPosition;
	}

	public updateOptions(options: ScrollableElementResolvedOptions): void {
		this.updateScrollbarSize(options.vertical === ScrollbarVisibility.Hidden ? 0 : options.verticalScrollbarSize);
		// give priority to vertical scroll bar over horizontal and let it scroll all the way to the bottom
		this._scrollbarState.setOppositeScrollbarSize(0);
		this._visibilityController.setVisibility(options.vertical);
		this._scrollByPage = options.scrollByPage;
	}

}
