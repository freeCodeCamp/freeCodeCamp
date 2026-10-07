/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as DomUtils from 'vs/base/browser/dom';
import { mainWindow } from 'vs/base/browser/window';
import * as arrays from 'vs/base/common/arrays';
import { memoize } from 'vs/base/common/decorators';
import { Event as EventUtils } from 'vs/base/common/event';
import { Disposable, IDisposable, markAsSingleton, toDisposable } from 'vs/base/common/lifecycle';
import { LinkedList } from 'vs/base/common/linkedList';

export namespace EventType {
	export const Tap = '-xterm-gesturetap';
	export const Change = '-xterm-gesturechange';
	export const Start = '-xterm-gesturestart';
	export const End = '-xterm-gesturesend';
	export const Contextmenu = '-xterm-gesturecontextmenu';
}

interface TouchData {
	id: number;
	initialTarget: EventTarget;
	initialTimeStamp: number;
	initialPageX: number;
	initialPageY: number;
	rollingTimestamps: number[];
	rollingPageX: number[];
	rollingPageY: number[];
}

export interface GestureEvent extends MouseEvent {
	initialTarget: EventTarget | undefined;
	translationX: number;
	translationY: number;
	pageX: number;
	pageY: number;
	tapCount: number;
}

interface Touch {
	identifier: number;
	screenX: number;
	screenY: number;
	clientX: number;
	clientY: number;
	pageX: number;
	pageY: number;
	radiusX: number;
	radiusY: number;
	rotationAngle: number;
	force: number;
	target: Element;
}

interface TouchList {
	[i: number]: Touch;
	length: number;
	item(index: number): Touch;
	identifiedTouch(id: number): Touch;
}

interface TouchEvent extends Event {
	touches: TouchList;
	targetTouches: TouchList;
	changedTouches: TouchList;
}

export class Gesture extends Disposable {

	private static readonly SCROLL_FRICTION = -0.005;
	private static INSTANCE: Gesture;
	private static readonly HOLD_DELAY = 700;

	private dispatched = false;
	private readonly targets = new LinkedList<HTMLElement>();
	private readonly ignoreTargets = new LinkedList<HTMLElement>();
	private handle: IDisposable | null;

	private readonly activeTouches: { [id: number]: TouchData };

	private _lastSetTapCountTime: number;

	private static readonly CLEAR_TAP_COUNT_TIME = 400; // ms


	private constructor() {
		super();

		this.activeTouches = {};
		this.handle = null;
		this._lastSetTapCountTime = 0;

		this._register(EventUtils.runAndSubscribe(DomUtils.onDidRegisterWindow, ({ window, disposables }) => {
			disposables.add(DomUtils.addDisposableListener(window.document, 'touchstart', (e: TouchEvent) => this.onTouchStart(e), { passive: false }));
			disposables.add(DomUtils.addDisposableListener(window.document, 'touchend', (e: TouchEvent) => this.onTouchEnd(window, e)));
			disposables.add(DomUtils.addDisposableListener(window.document, 'touchmove', (e: TouchEvent) => this.onTouchMove(e), { passive: false }));
		}, { window: mainWindow, disposables: this._store }));
	}

	public static addTarget(element: HTMLElement): IDisposable {
		if (!Gesture.isTouchDevice()) {
			return Disposable.None;
		}
		if (!Gesture.INSTANCE) {
			Gesture.INSTANCE = markAsSingleton(new Gesture());
		}

		const remove = Gesture.INSTANCE.targets.push(element);
		return toDisposable(remove);
	}

	public static ignoreTarget(element: HTMLElement): IDisposable {
		if (!Gesture.isTouchDevice()) {
			return Disposable.None;
		}
		if (!Gesture.INSTANCE) {
			Gesture.INSTANCE = markAsSingleton(new Gesture());
		}

		const remove = Gesture.INSTANCE.ignoreTargets.push(element);
		return toDisposable(remove);
	}

	@memoize
	static isTouchDevice(): boolean {
		// `'ontouchstart' in window` always evaluates to true with typescript's modern typings. This causes `window` to be
		// `never` later in `window.navigator`. That's why we need the explicit `window as Window` cast
		return 'ontouchstart' in mainWindow || navigator.maxTouchPoints > 0;
	}

	public override dispose(): void {
		if (this.handle) {
			this.handle.dispose();
			this.handle = null;
		}

		super.dispose();
	}

	private onTouchStart(e: TouchEvent): void {
		const timestamp = Date.now(); // use Date.now() because on FF e.timeStamp is not epoch based.

		if (this.handle) {
			this.handle.dispose();
			this.handle = null;
		}

		for (let i = 0, len = e.targetTouches.length; i < len; i++) {
			const touch = e.targetTouches.item(i);

			this.activeTouches[touch.identifier] = {
				id: touch.identifier,
				initialTarget: touch.target,
				initialTimeStamp: timestamp,
				initialPageX: touch.pageX,
				initialPageY: touch.pageY,
				rollingTimestamps: [timestamp],
				rollingPageX: [touch.pageX],
				rollingPageY: [touch.pageY]
			};

			const evt = this.newGestureEvent(EventType.Start, touch.target);
			evt.pageX = touch.pageX;
			evt.pageY = touch.pageY;
			this.dispatchEvent(evt);
		}

		if (this.dispatched) {
			e.preventDefault();
			e.stopPropagation();
			this.dispatched = false;
		}
	}

	private onTouchEnd(targetWindow: Window, e: TouchEvent): void {
		const timestamp = Date.now(); // use Date.now() because on FF e.timeStamp is not epoch based.

		const activeTouchCount = Object.keys(this.activeTouches).length;

		for (let i = 0, len = e.changedTouches.length; i < len; i++) {

			const touch = e.changedTouches.item(i);

			if (!this.activeTouches.hasOwnProperty(String(touch.identifier))) {
				console.warn('move of an UNKNOWN touch', touch);
				continue;
			}

			const data = this.activeTouches[touch.identifier],
				holdTime = Date.now() - data.initialTimeStamp;

			if (holdTime < Gesture.HOLD_DELAY
				&& Math.abs(data.initialPageX - arrays.tail(data.rollingPageX)!) < 30
				&& Math.abs(data.initialPageY - arrays.tail(data.rollingPageY)!) < 30) {

				const evt = this.newGestureEvent(EventType.Tap, data.initialTarget);
				evt.pageX = arrays.tail(data.rollingPageX)!;
				evt.pageY = arrays.tail(data.rollingPageY)!;
				this.dispatchEvent(evt);

			} else if (holdTime >= Gesture.HOLD_DELAY
				&& Math.abs(data.initialPageX - arrays.tail(data.rollingPageX)!) < 30
				&& Math.abs(data.initialPageY - arrays.tail(data.rollingPageY)!) < 30) {

				const evt = this.newGestureEvent(EventType.Contextmenu, data.initialTarget);
				evt.pageX = arrays.tail(data.rollingPageX)!;
				evt.pageY = arrays.tail(data.rollingPageY)!;
				this.dispatchEvent(evt);

			} else if (activeTouchCount === 1) {
				const finalX = arrays.tail(data.rollingPageX)!;
				const finalY = arrays.tail(data.rollingPageY)!;

				const deltaT = arrays.tail(data.rollingTimestamps)! - data.rollingTimestamps[0];
				const deltaX = finalX - data.rollingPageX[0];
				const deltaY = finalY - data.rollingPageY[0];

				// We need to get all the dispatch targets on the start of the inertia event
				const dispatchTo = [...this.targets].filter(t => data.initialTarget instanceof Node && t.contains(data.initialTarget));
				this.inertia(targetWindow, dispatchTo, timestamp,	// time now
					Math.abs(deltaX) / deltaT,						// speed
					deltaX > 0 ? 1 : -1,							// x direction
					finalX,											// x now
					Math.abs(deltaY) / deltaT,  					// y speed
					deltaY > 0 ? 1 : -1,							// y direction
					finalY											// y now
				);
			}


			this.dispatchEvent(this.newGestureEvent(EventType.End, data.initialTarget));
			// forget about this touch
			delete this.activeTouches[touch.identifier];
		}

		if (this.dispatched) {
			e.preventDefault();
			e.stopPropagation();
			this.dispatched = false;
		}
	}

	private newGestureEvent(type: string, initialTarget?: EventTarget): GestureEvent {
		const event = document.createEvent('CustomEvent') as unknown as GestureEvent;
		event.initEvent(type, false, true);
		event.initialTarget = initialTarget;
		event.tapCount = 0;
		return event;
	}

	private dispatchEvent(event: GestureEvent): void {
		if (event.type === EventType.Tap) {
			const currentTime = (new Date()).getTime();
			let setTapCount = 0;
			if (currentTime - this._lastSetTapCountTime > Gesture.CLEAR_TAP_COUNT_TIME) {
				setTapCount = 1;
			} else {
				setTapCount = 2;
			}

			this._lastSetTapCountTime = currentTime;
			event.tapCount = setTapCount;
		} else if (event.type === EventType.Change || event.type === EventType.Contextmenu) {
			// tap is canceled by scrolling or context menu
			this._lastSetTapCountTime = 0;
		}

		if (event.initialTarget instanceof Node) {
			for (const ignoreTarget of this.ignoreTargets) {
				if (ignoreTarget.contains(event.initialTarget)) {
					return;
				}
			}

			const targets: [number, HTMLElement][] = [];
			for (const target of this.targets) {
				if (target.contains(event.initialTarget)) {
					let depth = 0;
					let now: Node | null = event.initialTarget;
					while (now && now !== target) {
						depth++;
						now = now.parentElement;
					}
					targets.push([depth, target]);
				}
			}

			targets.sort((a, b) => a[0] - b[0]);

			for (const [_, target] of targets) {
				target.dispatchEvent(event);
				this.dispatched = true;
			}
		}
	}

	private inertia(targetWindow: Window, dispatchTo: readonly EventTarget[], t1: number, vX: number, dirX: number, x: number, vY: number, dirY: number, y: number): void {
		this.handle = DomUtils.scheduleAtNextAnimationFrame(targetWindow, () => {
			const now = Date.now();

			// velocity: old speed + accel_over_time
			const deltaT = now - t1;
			let delta_pos_x = 0, delta_pos_y = 0;
			let stopped = true;

			vX += Gesture.SCROLL_FRICTION * deltaT;
			vY += Gesture.SCROLL_FRICTION * deltaT;

			if (vX > 0) {
				stopped = false;
				delta_pos_x = dirX * vX * deltaT;
			}

			if (vY > 0) {
				stopped = false;
				delta_pos_y = dirY * vY * deltaT;
			}

			// dispatch translation event
			const evt = this.newGestureEvent(EventType.Change);
			evt.translationX = delta_pos_x;
			evt.translationY = delta_pos_y;
			dispatchTo.forEach(d => d.dispatchEvent(evt));

			if (!stopped) {
				this.inertia(targetWindow, dispatchTo, now, vX, dirX, x + delta_pos_x, vY, dirY, y + delta_pos_y);
			}
		});
	}

	private onTouchMove(e: TouchEvent): void {
		const timestamp = Date.now(); // use Date.now() because on FF e.timeStamp is not epoch based.

		for (let i = 0, len = e.changedTouches.length; i < len; i++) {

			const touch = e.changedTouches.item(i);

			if (!this.activeTouches.hasOwnProperty(String(touch.identifier))) {
				console.warn('end of an UNKNOWN touch', touch);
				continue;
			}

			const data = this.activeTouches[touch.identifier];

			const evt = this.newGestureEvent(EventType.Change, data.initialTarget);
			evt.translationX = touch.pageX - arrays.tail(data.rollingPageX)!;
			evt.translationY = touch.pageY - arrays.tail(data.rollingPageY)!;
			evt.pageX = touch.pageX;
			evt.pageY = touch.pageY;
			this.dispatchEvent(evt);

			// only keep a few data points, to average the final speed
			if (data.rollingPageX.length > 3) {
				data.rollingPageX.shift();
				data.rollingPageY.shift();
				data.rollingTimestamps.shift();
			}

			data.rollingPageX.push(touch.pageX);
			data.rollingPageY.push(touch.pageY);
			data.rollingTimestamps.push(timestamp);
		}

		if (this.dispatched) {
			e.preventDefault();
			e.stopPropagation();
			this.dispatched = false;
		}
	}
}
