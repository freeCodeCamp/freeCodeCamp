/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { AbstractScrollbar, ISimplifiedPointerEvent, ScrollbarHost } from 'vs/base/browser/ui/scrollbar/abstractScrollbar';
import { ScrollableElementResolvedOptions } from 'vs/base/browser/ui/scrollbar/scrollableElementOptions';
import { ScrollbarState } from 'vs/base/browser/ui/scrollbar/scrollbarState';
import { INewScrollPosition, Scrollable, ScrollbarVisibility, ScrollEvent } from 'vs/base/common/scrollable';




export class HorizontalScrollbar extends AbstractScrollbar {

	constructor(scrollable: Scrollable, options: ScrollableElementResolvedOptions, host: ScrollbarHost) {
		const scrollDimensions = scrollable.getScrollDimensions();
		const scrollPosition = scrollable.getCurrentScrollPosition();
		super({
			lazyRender: options.lazyRender,
			host: host,
			scrollbarState: new ScrollbarState(
				(options.horizontalHasArrows ? options.arrowSize : 0),
				(options.horizontal === ScrollbarVisibility.Hidden ? 0 : options.horizontalScrollbarSize),
				(options.vertical === ScrollbarVisibility.Hidden ? 0 : options.verticalScrollbarSize),
				scrollDimensions.width,
				scrollDimensions.scrollWidth,
				scrollPosition.scrollLeft
			),
			visibility: options.horizontal,
			extraScrollbarClassName: 'horizontal',
			scrollable: scrollable,
			scrollByPage: options.scrollByPage
		});

		if (options.horizontalHasArrows) {
      throw new Error('horizontalHasArrows is not supported in xterm.js');
			// const arrowDelta = (options.arrowSize - ARROW_IMG_SIZE) / 2;
			// const scrollbarDelta = (options.horizontalScrollbarSize - ARROW_IMG_SIZE) / 2;

			// this._createArrow({
			// 	className: 'scra',
			// 	icon: Codicon.scrollbarButtonLeft,
			// 	top: scrollbarDelta,
			// 	left: arrowDelta,
			// 	bottom: undefined,
			// 	right: undefined,
			// 	bgWidth: options.arrowSize,
			// 	bgHeight: options.horizontalScrollbarSize,
			// 	onActivate: () => this._host.onMouseWheel(new StandardWheelEvent(null, 1, 0)),
			// });

			// this._createArrow({
			// 	className: 'scra',
			// 	icon: Codicon.scrollbarButtonRight,
			// 	top: scrollbarDelta,
			// 	left: undefined,
			// 	bottom: undefined,
			// 	right: arrowDelta,
			// 	bgWidth: options.arrowSize,
			// 	bgHeight: options.horizontalScrollbarSize,
			// 	onActivate: () => this._host.onMouseWheel(new StandardWheelEvent(null, -1, 0)),
			// });
		}

		this._createSlider(Math.floor((options.horizontalScrollbarSize - options.horizontalSliderSize) / 2), 0, undefined, options.horizontalSliderSize);
	}

	protected _updateSlider(sliderSize: number, sliderPosition: number): void {
		this.slider.setWidth(sliderSize);
		this.slider.setLeft(sliderPosition);
	}

	protected _renderDomNode(largeSize: number, smallSize: number): void {
		this.domNode.setWidth(largeSize);
		this.domNode.setHeight(smallSize);
		this.domNode.setLeft(0);
		this.domNode.setBottom(0);
	}

	public onDidScroll(e: ScrollEvent): boolean {
		this._shouldRender = this._onElementScrollSize(e.scrollWidth) || this._shouldRender;
		this._shouldRender = this._onElementScrollPosition(e.scrollLeft) || this._shouldRender;
		this._shouldRender = this._onElementSize(e.width) || this._shouldRender;
		return this._shouldRender;
	}

	protected _pointerDownRelativePosition(offsetX: number, offsetY: number): number {
		return offsetX;
	}

	protected _sliderPointerPosition(e: ISimplifiedPointerEvent): number {
		return e.pageX;
	}

	protected _sliderOrthogonalPointerPosition(e: ISimplifiedPointerEvent): number {
		return e.pageY;
	}

	protected _updateScrollbarSize(size: number): void {
		this.slider.setHeight(size);
	}

	public writeScrollPosition(target: INewScrollPosition, scrollPosition: number): void {
		target.scrollLeft = scrollPosition;
	}

	public updateOptions(options: ScrollableElementResolvedOptions): void {
		this.updateScrollbarSize(options.horizontal === ScrollbarVisibility.Hidden ? 0 : options.horizontalScrollbarSize);
		this._scrollbarState.setOppositeScrollbarSize(options.vertical === ScrollbarVisibility.Hidden ? 0 : options.verticalScrollbarSize);
		this._visibilityController.setVisibility(options.horizontal);
		this._scrollByPage = options.scrollByPage;
	}
}
