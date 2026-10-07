/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Emitter, Event } from 'vs/base/common/event';
import { Disposable, IDisposable } from 'vs/base/common/lifecycle';

export const enum ScrollbarVisibility {
	Auto = 1,
	Hidden = 2,
	Visible = 3
}

export interface ScrollEvent {
	inSmoothScrolling: boolean;

	oldWidth: number;
	oldScrollWidth: number;
	oldScrollLeft: number;

	width: number;
	scrollWidth: number;
	scrollLeft: number;

	oldHeight: number;
	oldScrollHeight: number;
	oldScrollTop: number;

	height: number;
	scrollHeight: number;
	scrollTop: number;

	widthChanged: boolean;
	scrollWidthChanged: boolean;
	scrollLeftChanged: boolean;

	heightChanged: boolean;
	scrollHeightChanged: boolean;
	scrollTopChanged: boolean;
}

export class ScrollState implements IScrollDimensions, IScrollPosition {
	_scrollStateBrand: void = undefined;

	public readonly rawScrollLeft: number;
	public readonly rawScrollTop: number;

	public readonly width: number;
	public readonly scrollWidth: number;
	public readonly scrollLeft: number;
	public readonly height: number;
	public readonly scrollHeight: number;
	public readonly scrollTop: number;

	constructor(
		private readonly _forceIntegerValues: boolean,
		width: number,
		scrollWidth: number,
		scrollLeft: number,
		height: number,
		scrollHeight: number,
		scrollTop: number
	) {
		if (this._forceIntegerValues) {
			width = width | 0;
			scrollWidth = scrollWidth | 0;
			scrollLeft = scrollLeft | 0;
			height = height | 0;
			scrollHeight = scrollHeight | 0;
			scrollTop = scrollTop | 0;
		}

		this.rawScrollLeft = scrollLeft; // before validation
		this.rawScrollTop = scrollTop; // before validation

		if (width < 0) {
			width = 0;
		}
		if (scrollLeft + width > scrollWidth) {
			scrollLeft = scrollWidth - width;
		}
		if (scrollLeft < 0) {
			scrollLeft = 0;
		}

		if (height < 0) {
			height = 0;
		}
		if (scrollTop + height > scrollHeight) {
			scrollTop = scrollHeight - height;
		}
		if (scrollTop < 0) {
			scrollTop = 0;
		}

		this.width = width;
		this.scrollWidth = scrollWidth;
		this.scrollLeft = scrollLeft;
		this.height = height;
		this.scrollHeight = scrollHeight;
		this.scrollTop = scrollTop;
	}

	public equals(other: ScrollState): boolean {
		return (
			this.rawScrollLeft === other.rawScrollLeft
			&& this.rawScrollTop === other.rawScrollTop
			&& this.width === other.width
			&& this.scrollWidth === other.scrollWidth
			&& this.scrollLeft === other.scrollLeft
			&& this.height === other.height
			&& this.scrollHeight === other.scrollHeight
			&& this.scrollTop === other.scrollTop
		);
	}

	public withScrollDimensions(update: INewScrollDimensions, useRawScrollPositions: boolean): ScrollState {
		return new ScrollState(
			this._forceIntegerValues,
			(typeof update.width !== 'undefined' ? update.width : this.width),
			(typeof update.scrollWidth !== 'undefined' ? update.scrollWidth : this.scrollWidth),
			useRawScrollPositions ? this.rawScrollLeft : this.scrollLeft,
			(typeof update.height !== 'undefined' ? update.height : this.height),
			(typeof update.scrollHeight !== 'undefined' ? update.scrollHeight : this.scrollHeight),
			useRawScrollPositions ? this.rawScrollTop : this.scrollTop
		);
	}

	public withScrollPosition(update: INewScrollPosition): ScrollState {
		return new ScrollState(
			this._forceIntegerValues,
			this.width,
			this.scrollWidth,
			(typeof update.scrollLeft !== 'undefined' ? update.scrollLeft : this.rawScrollLeft),
			this.height,
			this.scrollHeight,
			(typeof update.scrollTop !== 'undefined' ? update.scrollTop : this.rawScrollTop)
		);
	}

	public createScrollEvent(previous: ScrollState, inSmoothScrolling: boolean): ScrollEvent {
		const widthChanged = (this.width !== previous.width);
		const scrollWidthChanged = (this.scrollWidth !== previous.scrollWidth);
		const scrollLeftChanged = (this.scrollLeft !== previous.scrollLeft);

		const heightChanged = (this.height !== previous.height);
		const scrollHeightChanged = (this.scrollHeight !== previous.scrollHeight);
		const scrollTopChanged = (this.scrollTop !== previous.scrollTop);

		return {
			inSmoothScrolling: inSmoothScrolling,
			oldWidth: previous.width,
			oldScrollWidth: previous.scrollWidth,
			oldScrollLeft: previous.scrollLeft,

			width: this.width,
			scrollWidth: this.scrollWidth,
			scrollLeft: this.scrollLeft,

			oldHeight: previous.height,
			oldScrollHeight: previous.scrollHeight,
			oldScrollTop: previous.scrollTop,

			height: this.height,
			scrollHeight: this.scrollHeight,
			scrollTop: this.scrollTop,

			widthChanged: widthChanged,
			scrollWidthChanged: scrollWidthChanged,
			scrollLeftChanged: scrollLeftChanged,

			heightChanged: heightChanged,
			scrollHeightChanged: scrollHeightChanged,
			scrollTopChanged: scrollTopChanged,
		};
	}

}

export interface IScrollDimensions {
	readonly width: number;
	readonly scrollWidth: number;
	readonly height: number;
	readonly scrollHeight: number;
}
export interface INewScrollDimensions {
	width?: number;
	scrollWidth?: number;
	height?: number;
	scrollHeight?: number;
}

export interface IScrollPosition {
	readonly scrollLeft: number;
	readonly scrollTop: number;
}
export interface ISmoothScrollPosition {
	readonly scrollLeft: number;
	readonly scrollTop: number;

	readonly width: number;
	readonly height: number;
}
export interface INewScrollPosition {
	scrollLeft?: number;
	scrollTop?: number;
}

export interface IScrollableOptions {
	/**
	 * Define if the scroll values should always be integers.
	 */
	forceIntegerValues: boolean;
	/**
	 * Set the duration (ms) used for smooth scroll animations.
	 */
	smoothScrollDuration: number;
	/**
	 * A function to schedule an update at the next frame (used for smooth scroll animations).
	 */
	scheduleAtNextAnimationFrame: (callback: () => void) => IDisposable;
}

export class Scrollable extends Disposable {

	_scrollableBrand: void = undefined;

	private _smoothScrollDuration: number;
	private readonly _scheduleAtNextAnimationFrame: (callback: () => void) => IDisposable;
	private _state: ScrollState;
	private _smoothScrolling: SmoothScrollingOperation | null;

	private _onScroll = this._register(new Emitter<ScrollEvent>());
	public readonly onScroll: Event<ScrollEvent> = this._onScroll.event;

	constructor(options: IScrollableOptions) {
		super();

		this._smoothScrollDuration = options.smoothScrollDuration;
		this._scheduleAtNextAnimationFrame = options.scheduleAtNextAnimationFrame;
		this._state = new ScrollState(options.forceIntegerValues, 0, 0, 0, 0, 0, 0);
		this._smoothScrolling = null;
	}

	public override dispose(): void {
		if (this._smoothScrolling) {
			this._smoothScrolling.dispose();
			this._smoothScrolling = null;
		}
		super.dispose();
	}

	public setSmoothScrollDuration(smoothScrollDuration: number): void {
		this._smoothScrollDuration = smoothScrollDuration;
	}

	public validateScrollPosition(scrollPosition: INewScrollPosition): IScrollPosition {
		return this._state.withScrollPosition(scrollPosition);
	}

	public getScrollDimensions(): IScrollDimensions {
		return this._state;
	}

	public setScrollDimensions(dimensions: INewScrollDimensions, useRawScrollPositions: boolean): void {
		const newState = this._state.withScrollDimensions(dimensions, useRawScrollPositions);
		this._setState(newState, Boolean(this._smoothScrolling));

		// Validate outstanding animated scroll position target
		this._smoothScrolling?.acceptScrollDimensions(this._state);
	}

	/**
	 * Returns the final scroll position that the instance will have once the smooth scroll animation concludes.
	 * If no scroll animation is occurring, it will return the current scroll position instead.
	 */
	public getFutureScrollPosition(): IScrollPosition {
		if (this._smoothScrolling) {
			return this._smoothScrolling.to;
		}
		return this._state;
	}

	/**
	 * Returns the current scroll position.
	 * Note: This result might be an intermediate scroll position, as there might be an ongoing smooth scroll animation.
	 */
	public getCurrentScrollPosition(): IScrollPosition {
		return this._state;
	}

	public setScrollPositionNow(update: INewScrollPosition): void {
		// no smooth scrolling requested
		const newState = this._state.withScrollPosition(update);

		// Terminate any outstanding smooth scrolling
		if (this._smoothScrolling) {
			this._smoothScrolling.dispose();
			this._smoothScrolling = null;
		}

		this._setState(newState, false);
	}

	public setScrollPositionSmooth(update: INewScrollPosition, reuseAnimation?: boolean): void {
		if (this._smoothScrollDuration === 0) {
			// Smooth scrolling not supported.
			return this.setScrollPositionNow(update);
		}

		if (this._smoothScrolling) {
			// Combine our pending scrollLeft/scrollTop with incoming scrollLeft/scrollTop
			update = {
				scrollLeft: (typeof update.scrollLeft === 'undefined' ? this._smoothScrolling.to.scrollLeft : update.scrollLeft),
				scrollTop: (typeof update.scrollTop === 'undefined' ? this._smoothScrolling.to.scrollTop : update.scrollTop)
			};

			// Validate `update`
			const validTarget = this._state.withScrollPosition(update);

			if (this._smoothScrolling.to.scrollLeft === validTarget.scrollLeft && this._smoothScrolling.to.scrollTop === validTarget.scrollTop) {
				// No need to interrupt or extend the current animation since we're going to the same place
				return;
			}
			let newSmoothScrolling: SmoothScrollingOperation;
			if (reuseAnimation) {
				newSmoothScrolling = new SmoothScrollingOperation(this._smoothScrolling.from, validTarget, this._smoothScrolling.startTime, this._smoothScrolling.duration);
			} else {
				newSmoothScrolling = this._smoothScrolling.combine(this._state, validTarget, this._smoothScrollDuration);
			}
			this._smoothScrolling.dispose();
			this._smoothScrolling = newSmoothScrolling;
		} else {
			// Validate `update`
			const validTarget = this._state.withScrollPosition(update);

			this._smoothScrolling = SmoothScrollingOperation.start(this._state, validTarget, this._smoothScrollDuration);
		}

		// Begin smooth scrolling animation
		this._smoothScrolling.animationFrameDisposable = this._scheduleAtNextAnimationFrame(() => {
			if (!this._smoothScrolling) {
				return;
			}
			this._smoothScrolling.animationFrameDisposable = null;
			this._performSmoothScrolling();
		});
	}

	public hasPendingScrollAnimation(): boolean {
		return Boolean(this._smoothScrolling);
	}

	private _performSmoothScrolling(): void {
		if (!this._smoothScrolling) {
			return;
		}
		const update = this._smoothScrolling.tick();
		const newState = this._state.withScrollPosition(update);

		this._setState(newState, true);

		if (!this._smoothScrolling) {
			// Looks like someone canceled the smooth scrolling
			// from the scroll event handler
			return;
		}

		if (update.isDone) {
			this._smoothScrolling.dispose();
			this._smoothScrolling = null;
			return;
		}

		// Continue smooth scrolling animation
		this._smoothScrolling.animationFrameDisposable = this._scheduleAtNextAnimationFrame(() => {
			if (!this._smoothScrolling) {
				return;
			}
			this._smoothScrolling.animationFrameDisposable = null;
			this._performSmoothScrolling();
		});
	}

	private _setState(newState: ScrollState, inSmoothScrolling: boolean): void {
		const oldState = this._state;
		if (oldState.equals(newState)) {
			// no change
			return;
		}
		this._state = newState;
		this._onScroll.fire(this._state.createScrollEvent(oldState, inSmoothScrolling));
	}
}

export class SmoothScrollingUpdate {

	public readonly scrollLeft: number;
	public readonly scrollTop: number;
	public readonly isDone: boolean;

	constructor(scrollLeft: number, scrollTop: number, isDone: boolean) {
		this.scrollLeft = scrollLeft;
		this.scrollTop = scrollTop;
		this.isDone = isDone;
	}

}

interface IAnimation {
	(completion: number): number;
}

function createEaseOutCubic(from: number, to: number): IAnimation {
	const delta = to - from;
	return function (completion: number): number {
		return from + delta * easeOutCubic(completion);
	};
}

function createComposed(a: IAnimation, b: IAnimation, cut: number): IAnimation {
	return function (completion: number): number {
		if (completion < cut) {
			return a(completion / cut);
		}
		return b((completion - cut) / (1 - cut));
	};
}

export class SmoothScrollingOperation {

	public readonly from: ISmoothScrollPosition;
	public to: ISmoothScrollPosition;
	public readonly duration: number;
	public readonly startTime: number;
	public animationFrameDisposable: IDisposable | null;

	private scrollLeft!: IAnimation;
	private scrollTop!: IAnimation;

	constructor(from: ISmoothScrollPosition, to: ISmoothScrollPosition, startTime: number, duration: number) {
		this.from = from;
		this.to = to;
		this.duration = duration;
		this.startTime = startTime;

		this.animationFrameDisposable = null;

		this._initAnimations();
	}

	private _initAnimations(): void {
		this.scrollLeft = this._initAnimation(this.from.scrollLeft, this.to.scrollLeft, this.to.width);
		this.scrollTop = this._initAnimation(this.from.scrollTop, this.to.scrollTop, this.to.height);
	}

	private _initAnimation(from: number, to: number, viewportSize: number): IAnimation {
		const delta = Math.abs(from - to);
		if (delta > 2.5 * viewportSize) {
			let stop1: number, stop2: number;
			if (from < to) {
				// scroll to 75% of the viewportSize
				stop1 = from + 0.75 * viewportSize;
				stop2 = to - 0.75 * viewportSize;
			} else {
				stop1 = from - 0.75 * viewportSize;
				stop2 = to + 0.75 * viewportSize;
			}
			return createComposed(createEaseOutCubic(from, stop1), createEaseOutCubic(stop2, to), 0.33);
		}
		return createEaseOutCubic(from, to);
	}

	public dispose(): void {
		if (this.animationFrameDisposable !== null) {
			this.animationFrameDisposable.dispose();
			this.animationFrameDisposable = null;
		}
	}

	public acceptScrollDimensions(state: ScrollState): void {
		this.to = state.withScrollPosition(this.to);
		this._initAnimations();
	}

	public tick(): SmoothScrollingUpdate {
		return this._tick(Date.now());
	}

	protected _tick(now: number): SmoothScrollingUpdate {
		const completion = (now - this.startTime) / this.duration;

		if (completion < 1) {
			const newScrollLeft = this.scrollLeft(completion);
			const newScrollTop = this.scrollTop(completion);
			return new SmoothScrollingUpdate(newScrollLeft, newScrollTop, false);
		}

		return new SmoothScrollingUpdate(this.to.scrollLeft, this.to.scrollTop, true);
	}

	public combine(from: ISmoothScrollPosition, to: ISmoothScrollPosition, duration: number): SmoothScrollingOperation {
		return SmoothScrollingOperation.start(from, to, duration);
	}

	public static start(from: ISmoothScrollPosition, to: ISmoothScrollPosition, duration: number): SmoothScrollingOperation {
		// +10 / -10 : pretend the animation already started for a quicker response to a scroll request
		duration = duration + 10;
		const startTime = Date.now() - 10;

		return new SmoothScrollingOperation(from, to, startTime, duration);
	}
}

function easeInCubic(t: number) {
	return Math.pow(t, 3);
}

function easeOutCubic(t: number) {
	return 1 - easeInCubic(1 - t);
}
