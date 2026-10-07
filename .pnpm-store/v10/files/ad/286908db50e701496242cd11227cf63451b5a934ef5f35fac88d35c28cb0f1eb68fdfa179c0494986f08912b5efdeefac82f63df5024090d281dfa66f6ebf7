/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * The minimal size of the slider (such that it can still be clickable) -- it is artificially enlarged.
 */
const MINIMUM_SLIDER_SIZE = 20;

export class ScrollbarState {

	/**
	 * For the vertical scrollbar: the width.
	 * For the horizontal scrollbar: the height.
	 */
	private _scrollbarSize: number;

	/**
	 * For the vertical scrollbar: the height of the pair horizontal scrollbar.
	 * For the horizontal scrollbar: the width of the pair vertical scrollbar.
	 */
	private _oppositeScrollbarSize: number;

	/**
	 * For the vertical scrollbar: the height of the scrollbar's arrows.
	 * For the horizontal scrollbar: the width of the scrollbar's arrows.
	 */
	private readonly _arrowSize: number;

	// --- variables
	/**
	 * For the vertical scrollbar: the viewport height.
	 * For the horizontal scrollbar: the viewport width.
	 */
	private _visibleSize: number;

	/**
	 * For the vertical scrollbar: the scroll height.
	 * For the horizontal scrollbar: the scroll width.
	 */
	private _scrollSize: number;

	/**
	 * For the vertical scrollbar: the scroll top.
	 * For the horizontal scrollbar: the scroll left.
	 */
	private _scrollPosition: number;

	// --- computed variables

	/**
	 * `visibleSize` - `oppositeScrollbarSize`
	 */
	private _computedAvailableSize: number;
	/**
	 * (`scrollSize` > 0 && `scrollSize` > `visibleSize`)
	 */
	private _computedIsNeeded: boolean;

	private _computedSliderSize: number;
	private _computedSliderRatio: number;
	private _computedSliderPosition: number;

	constructor(arrowSize: number, scrollbarSize: number, oppositeScrollbarSize: number, visibleSize: number, scrollSize: number, scrollPosition: number) {
		this._scrollbarSize = Math.round(scrollbarSize);
		this._oppositeScrollbarSize = Math.round(oppositeScrollbarSize);
		this._arrowSize = Math.round(arrowSize);

		this._visibleSize = visibleSize;
		this._scrollSize = scrollSize;
		this._scrollPosition = scrollPosition;

		this._computedAvailableSize = 0;
		this._computedIsNeeded = false;
		this._computedSliderSize = 0;
		this._computedSliderRatio = 0;
		this._computedSliderPosition = 0;

		this._refreshComputedValues();
	}

	public clone(): ScrollbarState {
		return new ScrollbarState(this._arrowSize, this._scrollbarSize, this._oppositeScrollbarSize, this._visibleSize, this._scrollSize, this._scrollPosition);
	}

	public setVisibleSize(visibleSize: number): boolean {
		const iVisibleSize = Math.round(visibleSize);
		if (this._visibleSize !== iVisibleSize) {
			this._visibleSize = iVisibleSize;
			this._refreshComputedValues();
			return true;
		}
		return false;
	}

	public setScrollSize(scrollSize: number): boolean {
		const iScrollSize = Math.round(scrollSize);
		if (this._scrollSize !== iScrollSize) {
			this._scrollSize = iScrollSize;
			this._refreshComputedValues();
			return true;
		}
		return false;
	}

	public setScrollPosition(scrollPosition: number): boolean {
		const iScrollPosition = Math.round(scrollPosition);
		if (this._scrollPosition !== iScrollPosition) {
			this._scrollPosition = iScrollPosition;
			this._refreshComputedValues();
			return true;
		}
		return false;
	}

	public setScrollbarSize(scrollbarSize: number): void {
		this._scrollbarSize = Math.round(scrollbarSize);
	}

	public setOppositeScrollbarSize(oppositeScrollbarSize: number): void {
		this._oppositeScrollbarSize = Math.round(oppositeScrollbarSize);
	}

	private static _computeValues(oppositeScrollbarSize: number, arrowSize: number, visibleSize: number, scrollSize: number, scrollPosition: number) {
		const computedAvailableSize = Math.max(0, visibleSize - oppositeScrollbarSize);
		const computedRepresentableSize = Math.max(0, computedAvailableSize - 2 * arrowSize);
		const computedIsNeeded = (scrollSize > 0 && scrollSize > visibleSize);

		if (!computedIsNeeded) {
			// There is no need for a slider
			return {
				computedAvailableSize: Math.round(computedAvailableSize),
				computedIsNeeded: computedIsNeeded,
				computedSliderSize: Math.round(computedRepresentableSize),
				computedSliderRatio: 0,
				computedSliderPosition: 0,
			};
		}

		// We must artificially increase the size of the slider if needed, since the slider would be too small to grab with the mouse otherwise
		const computedSliderSize = Math.round(Math.max(MINIMUM_SLIDER_SIZE, Math.floor(visibleSize * computedRepresentableSize / scrollSize)));

		// The slider can move from 0 to `computedRepresentableSize` - `computedSliderSize`
		// in the same way `scrollPosition` can move from 0 to `scrollSize` - `visibleSize`.
		const computedSliderRatio = (computedRepresentableSize - computedSliderSize) / (scrollSize - visibleSize);
		const computedSliderPosition = (scrollPosition * computedSliderRatio);

		return {
			computedAvailableSize: Math.round(computedAvailableSize),
			computedIsNeeded: computedIsNeeded,
			computedSliderSize: Math.round(computedSliderSize),
			computedSliderRatio: computedSliderRatio,
			computedSliderPosition: Math.round(computedSliderPosition),
		};
	}

	private _refreshComputedValues(): void {
		const r = ScrollbarState._computeValues(this._oppositeScrollbarSize, this._arrowSize, this._visibleSize, this._scrollSize, this._scrollPosition);
		this._computedAvailableSize = r.computedAvailableSize;
		this._computedIsNeeded = r.computedIsNeeded;
		this._computedSliderSize = r.computedSliderSize;
		this._computedSliderRatio = r.computedSliderRatio;
		this._computedSliderPosition = r.computedSliderPosition;
	}

	public getArrowSize(): number {
		return this._arrowSize;
	}

	public getScrollPosition(): number {
		return this._scrollPosition;
	}

	public getRectangleLargeSize(): number {
		return this._computedAvailableSize;
	}

	public getRectangleSmallSize(): number {
		return this._scrollbarSize;
	}

	public isNeeded(): boolean {
		return this._computedIsNeeded;
	}

	public getSliderSize(): number {
		return this._computedSliderSize;
	}

	public getSliderPosition(): number {
		return this._computedSliderPosition;
	}

	/**
	 * Compute a desired `scrollPosition` such that `offset` ends up in the center of the slider.
	 * `offset` is based on the same coordinate system as the `sliderPosition`.
	 */
	public getDesiredScrollPositionFromOffset(offset: number): number {
		if (!this._computedIsNeeded) {
			// no need for a slider
			return 0;
		}

		const desiredSliderPosition = offset - this._arrowSize - this._computedSliderSize / 2;
		return Math.round(desiredSliderPosition / this._computedSliderRatio);
	}

	/**
	 * Compute a desired `scrollPosition` from if offset is before or after the slider position.
	 * If offset is before slider, treat as a page up (or left).  If after, page down (or right).
	 * `offset` and `_computedSliderPosition` are based on the same coordinate system.
	 * `_visibleSize` corresponds to a "page" of lines in the returned coordinate system.
	 */
	public getDesiredScrollPositionFromOffsetPaged(offset: number): number {
		if (!this._computedIsNeeded) {
			// no need for a slider
			return 0;
		}

		const correctedOffset = offset - this._arrowSize;  // compensate if has arrows
		let desiredScrollPosition = this._scrollPosition;
		if (correctedOffset < this._computedSliderPosition) {
			desiredScrollPosition -= this._visibleSize;  // page up/left
		} else {
			desiredScrollPosition += this._visibleSize;  // page down/right
		}
		return desiredScrollPosition;
	}

	/**
	 * Compute a desired `scrollPosition` such that the slider moves by `delta`.
	 */
	public getDesiredScrollPositionFromDelta(delta: number): number {
		if (!this._computedIsNeeded) {
			// no need for a slider
			return 0;
		}

		const desiredSliderPosition = this._computedSliderPosition + delta;
		return Math.round(desiredSliderPosition / this._computedSliderRatio);
	}
}
