/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as browser from 'vs/base/browser/browser';
import { BrowserFeatures } from 'vs/base/browser/canIUse';
import { IKeyboardEvent, StandardKeyboardEvent } from 'vs/base/browser/keyboardEvent';
import { IMouseEvent, StandardMouseEvent } from 'vs/base/browser/mouseEvent';
import { AbstractIdleValue, IntervalTimer, TimeoutTimer, _runWhenIdle, IdleDeadline } from 'vs/base/common/async';
import { onUnexpectedError } from 'vs/base/common/errors';
import * as event from 'vs/base/common/event';
import { KeyCode } from 'vs/base/common/keyCodes';
import { Disposable, DisposableStore, IDisposable, toDisposable } from 'vs/base/common/lifecycle';
import * as platform from 'vs/base/common/platform';
import { hash } from 'vs/base/common/hash';
import { CodeWindow, ensureCodeWindow, mainWindow } from 'vs/base/browser/window';
import { isPointWithinTriangle } from 'vs/base/common/numbers';

export interface IRegisteredCodeWindow {
	readonly window: CodeWindow;
	readonly disposables: DisposableStore;
}

//# region Multi-Window Support Utilities

export const {
	registerWindow,
	getWindow,
	getDocument,
	getWindows,
	getWindowsCount,
	getWindowId,
	getWindowById,
	hasWindow,
	onDidRegisterWindow,
	onWillUnregisterWindow,
	onDidUnregisterWindow
} = (function () {
	const windows = new Map<number, IRegisteredCodeWindow>();

	ensureCodeWindow(mainWindow, 1);
	const mainWindowRegistration = { window: mainWindow, disposables: new DisposableStore() };
	windows.set(mainWindow.vscodeWindowId, mainWindowRegistration);

	const onDidRegisterWindow = new event.Emitter<IRegisteredCodeWindow>();
	const onDidUnregisterWindow = new event.Emitter<CodeWindow>();
	const onWillUnregisterWindow = new event.Emitter<CodeWindow>();

	function getWindowById(windowId: number): IRegisteredCodeWindow | undefined;
	function getWindowById(windowId: number | undefined, fallbackToMain: true): IRegisteredCodeWindow;
	function getWindowById(windowId: number | undefined, fallbackToMain?: boolean): IRegisteredCodeWindow | undefined {
		const window = typeof windowId === 'number' ? windows.get(windowId) : undefined;

		return window ?? (fallbackToMain ? mainWindowRegistration : undefined);
	}

	return {
		onDidRegisterWindow: onDidRegisterWindow.event,
		onWillUnregisterWindow: onWillUnregisterWindow.event,
		onDidUnregisterWindow: onDidUnregisterWindow.event,
		registerWindow(window: CodeWindow): IDisposable {
			if (windows.has(window.vscodeWindowId)) {
				return Disposable.None;
			}

			const disposables = new DisposableStore();

			const registeredWindow = {
				window,
				disposables: disposables.add(new DisposableStore())
			};
			windows.set(window.vscodeWindowId, registeredWindow);

			disposables.add(toDisposable(() => {
				windows.delete(window.vscodeWindowId);
				onDidUnregisterWindow.fire(window);
			}));

			disposables.add(addDisposableListener(window, EventType.BEFORE_UNLOAD, () => {
				onWillUnregisterWindow.fire(window);
			}));

			onDidRegisterWindow.fire(registeredWindow);

			return disposables;
		},
		getWindows(): Iterable<IRegisteredCodeWindow> {
			return windows.values();
		},
		getWindowsCount(): number {
			return windows.size;
		},
		getWindowId(targetWindow: Window): number {
			return (targetWindow as CodeWindow).vscodeWindowId;
		},
		hasWindow(windowId: number): boolean {
			return windows.has(windowId);
		},
		getWindowById,
		getWindow(e: Node | UIEvent | undefined | null): CodeWindow {
			const candidateNode = e as Node | undefined | null;
			if (candidateNode?.ownerDocument?.defaultView) {
				return candidateNode.ownerDocument.defaultView.window as CodeWindow;
			}

			const candidateEvent = e as UIEvent | undefined | null;
			if (candidateEvent?.view) {
				return candidateEvent.view.window as CodeWindow;
			}

			return mainWindow;
		},
		getDocument(e: Node | UIEvent | undefined | null): Document {
			const candidateNode = e as Node | undefined | null;
			return getWindow(candidateNode).document;
		}
	};
})();

//#endregion

export function clearNode(node: HTMLElement): void {
	while (node.firstChild) {
		node.firstChild.remove();
	}
}


export function clearNodeRecursively(domNode: ChildNode) {
	while (domNode.firstChild) {
		const element = domNode.firstChild;
		element.remove();
		clearNodeRecursively(element);
	}
}


class DomListener implements IDisposable {

	private _handler: (e: any) => void;
	private _node: EventTarget;
	private readonly _type: string;
	private readonly _options: boolean | AddEventListenerOptions;

	constructor(node: EventTarget, type: string, handler: (e: any) => void, options?: boolean | AddEventListenerOptions) {
		this._node = node;
		this._type = type;
		this._handler = handler;
		this._options = (options || false);
		this._node.addEventListener(this._type, this._handler, this._options);
	}

	dispose(): void {
		if (!this._handler) {
			// Already disposed
			return;
		}

		this._node.removeEventListener(this._type, this._handler, this._options);

		// Prevent leakers from holding on to the dom or handler func
		this._node = null!;
		this._handler = null!;
	}
}

export function addDisposableListener<K extends keyof GlobalEventHandlersEventMap>(node: EventTarget, type: K, handler: (event: GlobalEventHandlersEventMap[K]) => void, useCapture?: boolean): IDisposable;
export function addDisposableListener(node: EventTarget, type: string, handler: (event: any) => void, useCapture?: boolean): IDisposable;
export function addDisposableListener(node: EventTarget, type: string, handler: (event: any) => void, options: AddEventListenerOptions): IDisposable;
export function addDisposableListener(node: EventTarget, type: string, handler: (event: any) => void, useCaptureOrOptions?: boolean | AddEventListenerOptions): IDisposable {
	return new DomListener(node, type, handler, useCaptureOrOptions);
}

export interface IAddStandardDisposableListenerSignature {
	(node: HTMLElement, type: 'click', handler: (event: IMouseEvent) => void, useCapture?: boolean): IDisposable;
	(node: HTMLElement, type: 'mousedown', handler: (event: IMouseEvent) => void, useCapture?: boolean): IDisposable;
	(node: HTMLElement, type: 'keydown', handler: (event: IKeyboardEvent) => void, useCapture?: boolean): IDisposable;
	(node: HTMLElement, type: 'keypress', handler: (event: IKeyboardEvent) => void, useCapture?: boolean): IDisposable;
	(node: HTMLElement, type: 'keyup', handler: (event: IKeyboardEvent) => void, useCapture?: boolean): IDisposable;
	(node: HTMLElement, type: 'pointerdown', handler: (event: PointerEvent) => void, useCapture?: boolean): IDisposable;
	(node: HTMLElement, type: 'pointermove', handler: (event: PointerEvent) => void, useCapture?: boolean): IDisposable;
	(node: HTMLElement, type: 'pointerup', handler: (event: PointerEvent) => void, useCapture?: boolean): IDisposable;
	(node: HTMLElement, type: string, handler: (event: any) => void, useCapture?: boolean): IDisposable;
}
function _wrapAsStandardMouseEvent(targetWindow: Window, handler: (e: IMouseEvent) => void): (e: MouseEvent) => void {
	return function (e: MouseEvent) {
		return handler(new StandardMouseEvent(targetWindow, e));
	};
}
function _wrapAsStandardKeyboardEvent(handler: (e: IKeyboardEvent) => void): (e: KeyboardEvent) => void {
	return function (e: KeyboardEvent) {
		return handler(new StandardKeyboardEvent(e));
	};
}
export const addStandardDisposableListener: IAddStandardDisposableListenerSignature = function addStandardDisposableListener(node: HTMLElement, type: string, handler: (event: any) => void, useCapture?: boolean): IDisposable {
	let wrapHandler = handler;

	if (type === 'click' || type === 'mousedown' || type === 'contextmenu') {
		wrapHandler = _wrapAsStandardMouseEvent(getWindow(node), handler);
	} else if (type === 'keydown' || type === 'keypress' || type === 'keyup') {
		wrapHandler = _wrapAsStandardKeyboardEvent(handler);
	}

	return addDisposableListener(node, type, wrapHandler, useCapture);
};

export const addStandardDisposableGenericMouseDownListener = function addStandardDisposableListener(node: HTMLElement, handler: (event: any) => void, useCapture?: boolean): IDisposable {
	const wrapHandler = _wrapAsStandardMouseEvent(getWindow(node), handler);

	return addDisposableGenericMouseDownListener(node, wrapHandler, useCapture);
};

export const addStandardDisposableGenericMouseUpListener = function addStandardDisposableListener(node: HTMLElement, handler: (event: any) => void, useCapture?: boolean): IDisposable {
	const wrapHandler = _wrapAsStandardMouseEvent(getWindow(node), handler);

	return addDisposableGenericMouseUpListener(node, wrapHandler, useCapture);
};
export function addDisposableGenericMouseDownListener(node: EventTarget, handler: (event: any) => void, useCapture?: boolean): IDisposable {
	return addDisposableListener(node, platform.isIOS && BrowserFeatures.pointerEvents ? EventType.POINTER_DOWN : EventType.MOUSE_DOWN, handler, useCapture);
}

export function addDisposableGenericMouseMoveListener(node: EventTarget, handler: (event: any) => void, useCapture?: boolean): IDisposable {
	return addDisposableListener(node, platform.isIOS && BrowserFeatures.pointerEvents ? EventType.POINTER_MOVE : EventType.MOUSE_MOVE, handler, useCapture);
}

export function addDisposableGenericMouseUpListener(node: EventTarget, handler: (event: any) => void, useCapture?: boolean): IDisposable {
	return addDisposableListener(node, platform.isIOS && BrowserFeatures.pointerEvents ? EventType.POINTER_UP : EventType.MOUSE_UP, handler, useCapture);
}

/**
 * Execute the callback the next time the browser is idle, returning an
 * {@link IDisposable} that will cancel the callback when disposed. This wraps
 * [requestIdleCallback] so it will fallback to [setTimeout] if the environment
 * doesn't support it.
 *
 * @param targetWindow The window for which to run the idle callback
 * @param callback The callback to run when idle, this includes an
 * [IdleDeadline] that provides the time alloted for the idle callback by the
 * browser. Not respecting this deadline will result in a degraded user
 * experience.
 * @param timeout A timeout at which point to queue no longer wait for an idle
 * callback but queue it on the regular event loop (like setTimeout). Typically
 * this should not be used.
 *
 * [IdleDeadline]: https://developer.mozilla.org/en-US/docs/Web/API/IdleDeadline
 * [requestIdleCallback]: https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback
 * [setTimeout]: https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
 */
export function runWhenWindowIdle(targetWindow: Window | typeof globalThis, callback: (idle: IdleDeadline) => void, timeout?: number): IDisposable {
	return _runWhenIdle(targetWindow, callback, timeout);
}

/**
 * An implementation of the "idle-until-urgent"-strategy as introduced
 * here: https://philipwalton.com/articles/idle-until-urgent/
 */
export class WindowIdleValue<T> extends AbstractIdleValue<T> {
	constructor(targetWindow: Window | typeof globalThis, executor: () => T) {
		super(targetWindow, executor);
	}
}

/**
 * Schedule a callback to be run at the next animation frame.
 * This allows multiple parties to register callbacks that should run at the next animation frame.
 * If currently in an animation frame, `runner` will be executed immediately.
 * @return token that can be used to cancel the scheduled runner (only if `runner` was not executed immediately).
 */
export let runAtThisOrScheduleAtNextAnimationFrame: (targetWindow: Window, runner: () => void, priority?: number) => IDisposable;
/**
 * Schedule a callback to be run at the next animation frame.
 * This allows multiple parties to register callbacks that should run at the next animation frame.
 * If currently in an animation frame, `runner` will be executed at the next animation frame.
 * @return token that can be used to cancel the scheduled runner.
 */
export let scheduleAtNextAnimationFrame: (targetWindow: Window, runner: () => void, priority?: number) => IDisposable;

export function disposableWindowInterval(targetWindow: Window, handler: () => void | boolean /* stop interval */ | Promise<unknown>, interval: number, iterations?: number): IDisposable {
	let iteration = 0;
	const timer = targetWindow.setInterval(() => {
		iteration++;
		if ((typeof iterations === 'number' && iteration >= iterations) || handler() === true) {
			disposable.dispose();
		}
	}, interval);
	const disposable = toDisposable(() => {
		targetWindow.clearInterval(timer);
	});
	return disposable;
}

export class WindowIntervalTimer extends IntervalTimer {

	private readonly defaultTarget?: Window & typeof globalThis;

	/**
	 *
	 * @param node The optional node from which the target window is determined
	 */
	constructor(node?: Node) {
		super();
		this.defaultTarget = node && getWindow(node);
	}

	override cancelAndSet(runner: () => void, interval: number, targetWindow?: Window & typeof globalThis): void {
		return super.cancelAndSet(runner, interval, targetWindow ?? this.defaultTarget);
	}
}

class AnimationFrameQueueItem implements IDisposable {

	private _runner: () => void;
	public priority: number;
	private _canceled: boolean;

	constructor(runner: () => void, priority: number = 0) {
		this._runner = runner;
		this.priority = priority;
		this._canceled = false;
	}

	dispose(): void {
		this._canceled = true;
	}

	execute(): void {
		if (this._canceled) {
			return;
		}

		try {
			this._runner();
		} catch (e) {
			onUnexpectedError(e);
		}
	}

	// Sort by priority (largest to lowest)
	static sort(a: AnimationFrameQueueItem, b: AnimationFrameQueueItem): number {
		return b.priority - a.priority;
	}
}

(function () {
	/**
	 * The runners scheduled at the next animation frame
	 */
	const NEXT_QUEUE = new Map<number /* window ID */, AnimationFrameQueueItem[]>();
	/**
	 * The runners scheduled at the current animation frame
	 */
	const CURRENT_QUEUE = new Map<number /* window ID */, AnimationFrameQueueItem[]>();
	/**
	 * A flag to keep track if the native requestAnimationFrame was already called
	 */
	const animFrameRequested = new Map<number /* window ID */, boolean>();
	/**
	 * A flag to indicate if currently handling a native requestAnimationFrame callback
	 */
	const inAnimationFrameRunner = new Map<number /* window ID */, boolean>();

	const animationFrameRunner = (targetWindowId: number) => {
		animFrameRequested.set(targetWindowId, false);

		const currentQueue = NEXT_QUEUE.get(targetWindowId) ?? [];
		CURRENT_QUEUE.set(targetWindowId, currentQueue);
		NEXT_QUEUE.set(targetWindowId, []);

		inAnimationFrameRunner.set(targetWindowId, true);
		while (currentQueue.length > 0) {
			currentQueue.sort(AnimationFrameQueueItem.sort);
			const top = currentQueue.shift()!;
			top.execute();
		}
		inAnimationFrameRunner.set(targetWindowId, false);
	};

	scheduleAtNextAnimationFrame = (targetWindow: Window, runner: () => void, priority: number = 0) => {
		const targetWindowId = getWindowId(targetWindow);
		const item = new AnimationFrameQueueItem(runner, priority);

		let nextQueue = NEXT_QUEUE.get(targetWindowId);
		if (!nextQueue) {
			nextQueue = [];
			NEXT_QUEUE.set(targetWindowId, nextQueue);
		}
		nextQueue.push(item);

		if (!animFrameRequested.get(targetWindowId)) {
			animFrameRequested.set(targetWindowId, true);
			targetWindow.requestAnimationFrame(() => animationFrameRunner(targetWindowId));
		}

		return item;
	};

	runAtThisOrScheduleAtNextAnimationFrame = (targetWindow: Window, runner: () => void, priority?: number) => {
		const targetWindowId = getWindowId(targetWindow);
		if (inAnimationFrameRunner.get(targetWindowId)) {
			const item = new AnimationFrameQueueItem(runner, priority);
			let currentQueue = CURRENT_QUEUE.get(targetWindowId);
			if (!currentQueue) {
				currentQueue = [];
				CURRENT_QUEUE.set(targetWindowId, currentQueue);
			}
			currentQueue.push(item);
			return item;
		} else {
			return scheduleAtNextAnimationFrame(targetWindow, runner, priority);
		}
	};
})();

export function measure(targetWindow: Window, callback: () => void): IDisposable {
	return scheduleAtNextAnimationFrame(targetWindow, callback, 10000 /* must be early */);
}

export function modify(targetWindow: Window, callback: () => void): IDisposable {
	return scheduleAtNextAnimationFrame(targetWindow, callback, -10000 /* must be late */);
}

/**
 * Add a throttled listener. `handler` is fired at most every 8.33333ms or with the next animation frame (if browser supports it).
 */
export interface IEventMerger<R, E> {
	(lastEvent: R | null, currentEvent: E): R;
}

const MINIMUM_TIME_MS = 8;
const DEFAULT_EVENT_MERGER: IEventMerger<Event, Event> = function (lastEvent: Event | null, currentEvent: Event) {
	return currentEvent;
};

class TimeoutThrottledDomListener<R, E extends Event> extends Disposable {

	constructor(node: any, type: string, handler: (event: R) => void, eventMerger: IEventMerger<R, E> = <any>DEFAULT_EVENT_MERGER, minimumTimeMs: number = MINIMUM_TIME_MS) {
		super();

		let lastEvent: R | null = null;
		let lastHandlerTime = 0;
		const timeout = this._register(new TimeoutTimer());

		const invokeHandler = () => {
			lastHandlerTime = (new Date()).getTime();
			handler(<R>lastEvent);
			lastEvent = null;
		};

		this._register(addDisposableListener(node, type, (e) => {

			lastEvent = eventMerger(lastEvent, e);
			const elapsedTime = (new Date()).getTime() - lastHandlerTime;

			if (elapsedTime >= minimumTimeMs) {
				timeout.cancel();
				invokeHandler();
			} else {
				timeout.setIfNotSet(invokeHandler, minimumTimeMs - elapsedTime);
			}
		}));
	}
}

export function addDisposableThrottledListener<R, E extends Event = Event>(node: any, type: string, handler: (event: R) => void, eventMerger?: IEventMerger<R, E>, minimumTimeMs?: number): IDisposable {
	return new TimeoutThrottledDomListener<R, E>(node, type, handler, eventMerger, minimumTimeMs);
}

export function getComputedStyle(el: HTMLElement): CSSStyleDeclaration {
	return getWindow(el).getComputedStyle(el, null);
}

export function getClientArea(element: HTMLElement, fallback?: HTMLElement): Dimension {
	const elWindow = getWindow(element);
	const elDocument = elWindow.document;

	// Try with DOM clientWidth / clientHeight
	if (element !== elDocument.body) {
		return new Dimension(element.clientWidth, element.clientHeight);
	}

	// If visual view port exits and it's on mobile, it should be used instead of window innerWidth / innerHeight, or document.body.clientWidth / document.body.clientHeight
	if (platform.isIOS && elWindow?.visualViewport) {
		return new Dimension(elWindow.visualViewport.width, elWindow.visualViewport.height);
	}

	// Try innerWidth / innerHeight
	if (elWindow?.innerWidth && elWindow.innerHeight) {
		return new Dimension(elWindow.innerWidth, elWindow.innerHeight);
	}

	// Try with document.body.clientWidth / document.body.clientHeight
	if (elDocument.body && elDocument.body.clientWidth && elDocument.body.clientHeight) {
		return new Dimension(elDocument.body.clientWidth, elDocument.body.clientHeight);
	}

	// Try with document.documentElement.clientWidth / document.documentElement.clientHeight
	if (elDocument.documentElement && elDocument.documentElement.clientWidth && elDocument.documentElement.clientHeight) {
		return new Dimension(elDocument.documentElement.clientWidth, elDocument.documentElement.clientHeight);
	}

	if (fallback) {
		return getClientArea(fallback);
	}

	throw new Error('Unable to figure out browser width and height');
}

class SizeUtils {
	// Adapted from WinJS
	// Converts a CSS positioning string for the specified element to pixels.
	private static convertToPixels(element: HTMLElement, value: string): number {
		return parseFloat(value) || 0;
	}

	private static getDimension(element: HTMLElement, cssPropertyName: string, jsPropertyName: string): number {
		const computedStyle = getComputedStyle(element);
		const value = computedStyle ? computedStyle.getPropertyValue(cssPropertyName) : '0';
		return SizeUtils.convertToPixels(element, value);
	}

	static getBorderLeftWidth(element: HTMLElement): number {
		return SizeUtils.getDimension(element, 'border-left-width', 'borderLeftWidth');
	}
	static getBorderRightWidth(element: HTMLElement): number {
		return SizeUtils.getDimension(element, 'border-right-width', 'borderRightWidth');
	}
	static getBorderTopWidth(element: HTMLElement): number {
		return SizeUtils.getDimension(element, 'border-top-width', 'borderTopWidth');
	}
	static getBorderBottomWidth(element: HTMLElement): number {
		return SizeUtils.getDimension(element, 'border-bottom-width', 'borderBottomWidth');
	}

	static getPaddingLeft(element: HTMLElement): number {
		return SizeUtils.getDimension(element, 'padding-left', 'paddingLeft');
	}
	static getPaddingRight(element: HTMLElement): number {
		return SizeUtils.getDimension(element, 'padding-right', 'paddingRight');
	}
	static getPaddingTop(element: HTMLElement): number {
		return SizeUtils.getDimension(element, 'padding-top', 'paddingTop');
	}
	static getPaddingBottom(element: HTMLElement): number {
		return SizeUtils.getDimension(element, 'padding-bottom', 'paddingBottom');
	}

	static getMarginLeft(element: HTMLElement): number {
		return SizeUtils.getDimension(element, 'margin-left', 'marginLeft');
	}
	static getMarginTop(element: HTMLElement): number {
		return SizeUtils.getDimension(element, 'margin-top', 'marginTop');
	}
	static getMarginRight(element: HTMLElement): number {
		return SizeUtils.getDimension(element, 'margin-right', 'marginRight');
	}
	static getMarginBottom(element: HTMLElement): number {
		return SizeUtils.getDimension(element, 'margin-bottom', 'marginBottom');
	}
}

// ----------------------------------------------------------------------------------------
// Position & Dimension

export interface IDimension {
	readonly width: number;
	readonly height: number;
}

export class Dimension implements IDimension {

	static readonly None = new Dimension(0, 0);

	constructor(
		readonly width: number,
		readonly height: number,
	) { }

	with(width: number = this.width, height: number = this.height): Dimension {
		if (width !== this.width || height !== this.height) {
			return new Dimension(width, height);
		} else {
			return this;
		}
	}

	static is(obj: unknown): obj is IDimension {
		return typeof obj === 'object' && typeof (<IDimension>obj).height === 'number' && typeof (<IDimension>obj).width === 'number';
	}

	static lift(obj: IDimension): Dimension {
		if (obj instanceof Dimension) {
			return obj;
		} else {
			return new Dimension(obj.width, obj.height);
		}
	}

	static equals(a: Dimension | undefined, b: Dimension | undefined): boolean {
		if (a === b) {
			return true;
		}
		if (!a || !b) {
			return false;
		}
		return a.width === b.width && a.height === b.height;
	}
}

export interface IDomPosition {
	readonly left: number;
	readonly top: number;
}

export function getTopLeftOffset(element: HTMLElement): IDomPosition {
	// Adapted from WinJS.Utilities.getPosition
	// and added borders to the mix

	let offsetParent = element.offsetParent;
	let top = element.offsetTop;
	let left = element.offsetLeft;

	while (
		(element = <HTMLElement>element.parentNode) !== null
		&& element !== element.ownerDocument.body
		&& element !== element.ownerDocument.documentElement
	) {
		top -= element.scrollTop;
		const c = isShadowRoot(element) ? null : getComputedStyle(element);
		if (c) {
			left -= c.direction !== 'rtl' ? element.scrollLeft : -element.scrollLeft;
		}

		if (element === offsetParent) {
			left += SizeUtils.getBorderLeftWidth(element);
			top += SizeUtils.getBorderTopWidth(element);
			top += element.offsetTop;
			left += element.offsetLeft;
			offsetParent = element.offsetParent;
		}
	}

	return {
		left: left,
		top: top
	};
}

export interface IDomNodePagePosition {
	left: number;
	top: number;
	width: number;
	height: number;
}

export function size(element: HTMLElement, width: number | null, height: number | null): void {
	if (typeof width === 'number') {
		element.style.width = `${width}px`;
	}

	if (typeof height === 'number') {
		element.style.height = `${height}px`;
	}
}

export function position(element: HTMLElement, top: number, right?: number, bottom?: number, left?: number, position: string = 'absolute'): void {
	if (typeof top === 'number') {
		element.style.top = `${top}px`;
	}

	if (typeof right === 'number') {
		element.style.right = `${right}px`;
	}

	if (typeof bottom === 'number') {
		element.style.bottom = `${bottom}px`;
	}

	if (typeof left === 'number') {
		element.style.left = `${left}px`;
	}

	element.style.position = position;
}

/**
 * Returns the position of a dom node relative to the entire page.
 */
export function getDomNodePagePosition(domNode: HTMLElement): IDomNodePagePosition {
	const bb = domNode.getBoundingClientRect();
	const window = getWindow(domNode);
	return {
		left: bb.left + window.scrollX,
		top: bb.top + window.scrollY,
		width: bb.width,
		height: bb.height
	};
}

/**
 * Returns the effective zoom on a given element before window zoom level is applied
 */
export function getDomNodeZoomLevel(domNode: HTMLElement): number {
	let testElement: HTMLElement | null = domNode;
	let zoom = 1.0;
	do {
		const elementZoomLevel = (getComputedStyle(testElement) as any).zoom;
		if (elementZoomLevel !== null && elementZoomLevel !== undefined && elementZoomLevel !== '1') {
			zoom *= elementZoomLevel;
		}

		testElement = testElement.parentElement;
	} while (testElement !== null && testElement !== testElement.ownerDocument.documentElement);

	return zoom;
}


// Adapted from WinJS
// Gets the width of the element, including margins.
export function getTotalWidth(element: HTMLElement): number {
	const margin = SizeUtils.getMarginLeft(element) + SizeUtils.getMarginRight(element);
	return element.offsetWidth + margin;
}

export function getContentWidth(element: HTMLElement): number {
	const border = SizeUtils.getBorderLeftWidth(element) + SizeUtils.getBorderRightWidth(element);
	const padding = SizeUtils.getPaddingLeft(element) + SizeUtils.getPaddingRight(element);
	return element.offsetWidth - border - padding;
}

export function getTotalScrollWidth(element: HTMLElement): number {
	const margin = SizeUtils.getMarginLeft(element) + SizeUtils.getMarginRight(element);
	return element.scrollWidth + margin;
}

// Adapted from WinJS
// Gets the height of the content of the specified element. The content height does not include borders or padding.
export function getContentHeight(element: HTMLElement): number {
	const border = SizeUtils.getBorderTopWidth(element) + SizeUtils.getBorderBottomWidth(element);
	const padding = SizeUtils.getPaddingTop(element) + SizeUtils.getPaddingBottom(element);
	return element.offsetHeight - border - padding;
}

// Adapted from WinJS
// Gets the height of the element, including its margins.
export function getTotalHeight(element: HTMLElement): number {
	const margin = SizeUtils.getMarginTop(element) + SizeUtils.getMarginBottom(element);
	return element.offsetHeight + margin;
}

// Gets the left coordinate of the specified element relative to the specified parent.
function getRelativeLeft(element: HTMLElement, parent: HTMLElement): number {
	if (element === null) {
		return 0;
	}

	const elementPosition = getTopLeftOffset(element);
	const parentPosition = getTopLeftOffset(parent);
	return elementPosition.left - parentPosition.left;
}

export function getLargestChildWidth(parent: HTMLElement, children: HTMLElement[]): number {
	const childWidths = children.map((child) => {
		return Math.max(getTotalScrollWidth(child), getTotalWidth(child)) + getRelativeLeft(child, parent) || 0;
	});
	const maxWidth = Math.max(...childWidths);
	return maxWidth;
}

// ----------------------------------------------------------------------------------------

export function isAncestor(testChild: Node | null, testAncestor: Node | null): boolean {
	return Boolean(testAncestor?.contains(testChild));
}

const parentFlowToDataKey = 'parentFlowToElementId';

/**
 * Set an explicit parent to use for nodes that are not part of the
 * regular dom structure.
 */
export function setParentFlowTo(fromChildElement: HTMLElement, toParentElement: Element): void {
	fromChildElement.dataset[parentFlowToDataKey] = toParentElement.id;
}

function getParentFlowToElement(node: HTMLElement): HTMLElement | null {
	const flowToParentId = node.dataset[parentFlowToDataKey];
	if (typeof flowToParentId === 'string') {
		return node.ownerDocument.getElementById(flowToParentId);
	}
	return null;
}

/**
 * Check if `testAncestor` is an ancestor of `testChild`, observing the explicit
 * parents set by `setParentFlowTo`.
 */
export function isAncestorUsingFlowTo(testChild: Node, testAncestor: Node): boolean {
	let node: Node | null = testChild;
	while (node) {
		if (node === testAncestor) {
			return true;
		}

		if (isHTMLElement(node)) {
			const flowToParentElement = getParentFlowToElement(node);
			if (flowToParentElement) {
				node = flowToParentElement;
				continue;
			}
		}
		node = node.parentNode;
	}

	return false;
}

export function findParentWithClass(node: HTMLElement, clazz: string, stopAtClazzOrNode?: string | HTMLElement): HTMLElement | null {
	while (node && node.nodeType === node.ELEMENT_NODE) {
		if (node.classList.contains(clazz)) {
			return node;
		}

		if (stopAtClazzOrNode) {
			if (typeof stopAtClazzOrNode === 'string') {
				if (node.classList.contains(stopAtClazzOrNode)) {
					return null;
				}
			} else {
				if (node === stopAtClazzOrNode) {
					return null;
				}
			}
		}

		node = <HTMLElement>node.parentNode;
	}

	return null;
}

export function hasParentWithClass(node: HTMLElement, clazz: string, stopAtClazzOrNode?: string | HTMLElement): boolean {
	return !!findParentWithClass(node, clazz, stopAtClazzOrNode);
}

export function isShadowRoot(node: Node): node is ShadowRoot {
	return (
		node && !!(<ShadowRoot>node).host && !!(<ShadowRoot>node).mode
	);
}

export function isInShadowDOM(domNode: Node): boolean {
	return !!getShadowRoot(domNode);
}

export function getShadowRoot(domNode: Node): ShadowRoot | null {
	while (domNode.parentNode) {
		if (domNode === domNode.ownerDocument?.body) {
			// reached the body
			return null;
		}
		domNode = domNode.parentNode;
	}
	return isShadowRoot(domNode) ? domNode : null;
}

/**
 * Returns the active element across all child windows
 * based on document focus. Falls back to the main
 * window if no window has focus.
 */
export function getActiveElement(): Element | null {
	let result = getActiveDocument().activeElement;

	while (result?.shadowRoot) {
		result = result.shadowRoot.activeElement;
	}

	return result;
}

/**
 * Returns true if the focused window active element matches
 * the provided element. Falls back to the main window if no
 * window has focus.
 */
export function isActiveElement(element: Element): boolean {
	return getActiveElement() === element;
}

/**
 * Returns true if the focused window active element is contained in
 * `ancestor`. Falls back to the main window if no window has focus.
 */
export function isAncestorOfActiveElement(ancestor: Element): boolean {
	return isAncestor(getActiveElement(), ancestor);
}

/**
 * Returns whether the element is in the active `document`. The active
 * document has focus or will be the main windows document.
 */
export function isActiveDocument(element: Element): boolean {
	return element.ownerDocument === getActiveDocument();
}

/**
 * Returns the active document across main and child windows.
 * Prefers the window with focus, otherwise falls back to
 * the main windows document.
 */
export function getActiveDocument(): Document {
	if (getWindowsCount() <= 1) {
		return mainWindow.document;
	}

	const documents = Array.from(getWindows()).map(({ window }) => window.document);
	return documents.find(doc => doc.hasFocus()) ?? mainWindow.document;
}

/**
 * Returns the active window across main and child windows.
 * Prefers the window with focus, otherwise falls back to
 * the main window.
 */
export function getActiveWindow(): CodeWindow {
	const document = getActiveDocument();
	return (document.defaultView?.window ?? mainWindow) as CodeWindow;
}

const globalStylesheets = new Map<HTMLStyleElement /* main stylesheet */, Set<HTMLStyleElement /* aux window clones that track the main stylesheet */>>();

export function isGlobalStylesheet(node: Node): boolean {
	return globalStylesheets.has(node as HTMLStyleElement);
}

/**
 * A version of createStyleSheet which has a unified API to initialize/set the style content.
 */
export function createStyleSheet2(): WrappedStyleElement {
	return new WrappedStyleElement();
}

class WrappedStyleElement {
	private _currentCssStyle = '';
	private _styleSheet: HTMLStyleElement | undefined = undefined;

	public setStyle(cssStyle: string): void {
		if (cssStyle === this._currentCssStyle) {
			return;
		}
		this._currentCssStyle = cssStyle;

		if (!this._styleSheet) {
			this._styleSheet = createStyleSheet(mainWindow.document.head, (s) => s.innerText = cssStyle);
		} else {
			this._styleSheet.innerText = cssStyle;
		}
	}

	public dispose(): void {
		if (this._styleSheet) {
			this._styleSheet.remove();
			this._styleSheet = undefined;
		}
	}
}

export function createStyleSheet(container: HTMLElement = mainWindow.document.head, beforeAppend?: (style: HTMLStyleElement) => void, disposableStore?: DisposableStore): HTMLStyleElement {
	const style = document.createElement('style');
	style.type = 'text/css';
	style.media = 'screen';
	beforeAppend?.(style);
	container.appendChild(style);

	if (disposableStore) {
		disposableStore.add(toDisposable(() => style.remove()));
	}

	// With <head> as container, the stylesheet becomes global and is tracked
	// to support auxiliary windows to clone the stylesheet.
	if (container === mainWindow.document.head) {
		const globalStylesheetClones = new Set<HTMLStyleElement>();
		globalStylesheets.set(style, globalStylesheetClones);

		for (const { window: targetWindow, disposables } of getWindows()) {
			if (targetWindow === mainWindow) {
				continue; // main window is already tracked
			}

			const cloneDisposable = disposables.add(cloneGlobalStyleSheet(style, globalStylesheetClones, targetWindow));
			disposableStore?.add(cloneDisposable);
		}
	}

	return style;
}

export function cloneGlobalStylesheets(targetWindow: Window): IDisposable {
	const disposables = new DisposableStore();

	for (const [globalStylesheet, clonedGlobalStylesheets] of globalStylesheets) {
		disposables.add(cloneGlobalStyleSheet(globalStylesheet, clonedGlobalStylesheets, targetWindow));
	}

	return disposables;
}

function cloneGlobalStyleSheet(globalStylesheet: HTMLStyleElement, globalStylesheetClones: Set<HTMLStyleElement>, targetWindow: Window): IDisposable {
	const disposables = new DisposableStore();

	const clone = globalStylesheet.cloneNode(true) as HTMLStyleElement;
	targetWindow.document.head.appendChild(clone);
	disposables.add(toDisposable(() => clone.remove()));

	for (const rule of getDynamicStyleSheetRules(globalStylesheet)) {
		clone.sheet?.insertRule(rule.cssText, clone.sheet?.cssRules.length);
	}

	disposables.add(sharedMutationObserver.observe(globalStylesheet, disposables, { childList: true })(() => {
		clone.textContent = globalStylesheet.textContent;
	}));

	globalStylesheetClones.add(clone);
	disposables.add(toDisposable(() => globalStylesheetClones.delete(clone)));

	return disposables;
}

interface IMutationObserver {
	users: number;
	readonly observer: MutationObserver;
	readonly onDidMutate: event.Event<MutationRecord[]>;
}

export const sharedMutationObserver = new class {

	readonly mutationObservers = new Map<Node, Map<number, IMutationObserver>>();

	observe(target: Node, disposables: DisposableStore, options?: MutationObserverInit): event.Event<MutationRecord[]> {
		let mutationObserversPerTarget = this.mutationObservers.get(target);
		if (!mutationObserversPerTarget) {
			mutationObserversPerTarget = new Map<number, IMutationObserver>();
			this.mutationObservers.set(target, mutationObserversPerTarget);
		}

		const optionsHash = hash(options);
		let mutationObserverPerOptions = mutationObserversPerTarget.get(optionsHash);
		if (!mutationObserverPerOptions) {
			const onDidMutate = new event.Emitter<MutationRecord[]>();
			const observer = new MutationObserver(mutations => onDidMutate.fire(mutations));
			observer.observe(target, options);

			const resolvedMutationObserverPerOptions = mutationObserverPerOptions = {
				users: 1,
				observer,
				onDidMutate: onDidMutate.event
			};

			disposables.add(toDisposable(() => {
				resolvedMutationObserverPerOptions.users -= 1;

				if (resolvedMutationObserverPerOptions.users === 0) {
					onDidMutate.dispose();
					observer.disconnect();

					mutationObserversPerTarget?.delete(optionsHash);
					if (mutationObserversPerTarget?.size === 0) {
						this.mutationObservers.delete(target);
					}
				}
			}));

			mutationObserversPerTarget.set(optionsHash, mutationObserverPerOptions);
		} else {
			mutationObserverPerOptions.users += 1;
		}

		return mutationObserverPerOptions.onDidMutate;
	}
};

export function createMetaElement(container: HTMLElement = mainWindow.document.head): HTMLMetaElement {
	return createHeadElement('meta', container) as HTMLMetaElement;
}

export function createLinkElement(container: HTMLElement = mainWindow.document.head): HTMLLinkElement {
	return createHeadElement('link', container) as HTMLLinkElement;
}

function createHeadElement(tagName: string, container: HTMLElement = mainWindow.document.head): HTMLElement {
	const element = document.createElement(tagName);
	container.appendChild(element);
	return element;
}

let _sharedStyleSheet: HTMLStyleElement | null = null;
function getSharedStyleSheet(): HTMLStyleElement {
	if (!_sharedStyleSheet) {
		_sharedStyleSheet = createStyleSheet();
	}
	return _sharedStyleSheet;
}

function getDynamicStyleSheetRules(style: HTMLStyleElement) {
	if (style?.sheet?.rules) {
		// Chrome, IE
		return style.sheet.rules;
	}
	if (style?.sheet?.cssRules) {
		// FF
		return style.sheet.cssRules;
	}
	return [];
}

export function createCSSRule(selector: string, cssText: string, style = getSharedStyleSheet()): void {
	if (!style || !cssText) {
		return;
	}

	style.sheet?.insertRule(`${selector} {${cssText}}`, 0);

	// Apply rule also to all cloned global stylesheets
	for (const clonedGlobalStylesheet of globalStylesheets.get(style) ?? []) {
		createCSSRule(selector, cssText, clonedGlobalStylesheet);
	}
}

export function removeCSSRulesContainingSelector(ruleName: string, style = getSharedStyleSheet()): void {
	if (!style) {
		return;
	}

	const rules = getDynamicStyleSheetRules(style);
	const toDelete: number[] = [];
	for (let i = 0; i < rules.length; i++) {
		const rule = rules[i];
		if (isCSSStyleRule(rule) && rule.selectorText.indexOf(ruleName) !== -1) {
			toDelete.push(i);
		}
	}

	for (let i = toDelete.length - 1; i >= 0; i--) {
		style.sheet?.deleteRule(toDelete[i]);
	}

	// Remove rules also from all cloned global stylesheets
	for (const clonedGlobalStylesheet of globalStylesheets.get(style) ?? []) {
		removeCSSRulesContainingSelector(ruleName, clonedGlobalStylesheet);
	}
}

function isCSSStyleRule(rule: CSSRule): rule is CSSStyleRule {
	return typeof (rule as CSSStyleRule).selectorText === 'string';
}

export function isHTMLElement(e: unknown): e is HTMLElement {
	// eslint-disable-next-line no-restricted-syntax
	return e instanceof HTMLElement || e instanceof getWindow(e as Node).HTMLElement;
}

export function isHTMLAnchorElement(e: unknown): e is HTMLAnchorElement {
	// eslint-disable-next-line no-restricted-syntax
	return e instanceof HTMLAnchorElement || e instanceof getWindow(e as Node).HTMLAnchorElement;
}

export function isHTMLSpanElement(e: unknown): e is HTMLSpanElement {
	// eslint-disable-next-line no-restricted-syntax
	return e instanceof HTMLSpanElement || e instanceof getWindow(e as Node).HTMLSpanElement;
}

export function isHTMLTextAreaElement(e: unknown): e is HTMLTextAreaElement {
	// eslint-disable-next-line no-restricted-syntax
	return e instanceof HTMLTextAreaElement || e instanceof getWindow(e as Node).HTMLTextAreaElement;
}

export function isHTMLInputElement(e: unknown): e is HTMLInputElement {
	// eslint-disable-next-line no-restricted-syntax
	return e instanceof HTMLInputElement || e instanceof getWindow(e as Node).HTMLInputElement;
}

export function isHTMLButtonElement(e: unknown): e is HTMLButtonElement {
	// eslint-disable-next-line no-restricted-syntax
	return e instanceof HTMLButtonElement || e instanceof getWindow(e as Node).HTMLButtonElement;
}

export function isHTMLDivElement(e: unknown): e is HTMLDivElement {
	// eslint-disable-next-line no-restricted-syntax
	return e instanceof HTMLDivElement || e instanceof getWindow(e as Node).HTMLDivElement;
}

export function isSVGElement(e: unknown): e is SVGElement {
	// eslint-disable-next-line no-restricted-syntax
	return e instanceof SVGElement || e instanceof getWindow(e as Node).SVGElement;
}

export function isMouseEvent(e: unknown): e is MouseEvent {
	// eslint-disable-next-line no-restricted-syntax
	return e instanceof MouseEvent || e instanceof getWindow(e as UIEvent).MouseEvent;
}

export function isKeyboardEvent(e: unknown): e is KeyboardEvent {
	// eslint-disable-next-line no-restricted-syntax
	return e instanceof KeyboardEvent || e instanceof getWindow(e as UIEvent).KeyboardEvent;
}

export function isPointerEvent(e: unknown): e is PointerEvent {
	// eslint-disable-next-line no-restricted-syntax
	return e instanceof PointerEvent || e instanceof getWindow(e as UIEvent).PointerEvent;
}

export function isDragEvent(e: unknown): e is DragEvent {
	// eslint-disable-next-line no-restricted-syntax
	return e instanceof DragEvent || e instanceof getWindow(e as UIEvent).DragEvent;
}

export const EventType = {
	// Mouse
	CLICK: 'click',
	AUXCLICK: 'auxclick',
	DBLCLICK: 'dblclick',
	MOUSE_UP: 'mouseup',
	MOUSE_DOWN: 'mousedown',
	MOUSE_OVER: 'mouseover',
	MOUSE_MOVE: 'mousemove',
	MOUSE_OUT: 'mouseout',
	MOUSE_ENTER: 'mouseenter',
	MOUSE_LEAVE: 'mouseleave',
	MOUSE_WHEEL: 'wheel',
	POINTER_UP: 'pointerup',
	POINTER_DOWN: 'pointerdown',
	POINTER_MOVE: 'pointermove',
	POINTER_LEAVE: 'pointerleave',
	CONTEXT_MENU: 'contextmenu',
	WHEEL: 'wheel',
	// Keyboard
	KEY_DOWN: 'keydown',
	KEY_PRESS: 'keypress',
	KEY_UP: 'keyup',
	// HTML Document
	LOAD: 'load',
	BEFORE_UNLOAD: 'beforeunload',
	UNLOAD: 'unload',
	PAGE_SHOW: 'pageshow',
	PAGE_HIDE: 'pagehide',
	PASTE: 'paste',
	ABORT: 'abort',
	ERROR: 'error',
	RESIZE: 'resize',
	SCROLL: 'scroll',
	FULLSCREEN_CHANGE: 'fullscreenchange',
	WK_FULLSCREEN_CHANGE: 'webkitfullscreenchange',
	// Form
	SELECT: 'select',
	CHANGE: 'change',
	SUBMIT: 'submit',
	RESET: 'reset',
	FOCUS: 'focus',
	FOCUS_IN: 'focusin',
	FOCUS_OUT: 'focusout',
	BLUR: 'blur',
	INPUT: 'input',
	// Local Storage
	STORAGE: 'storage',
	// Drag
	DRAG_START: 'dragstart',
	DRAG: 'drag',
	DRAG_ENTER: 'dragenter',
	DRAG_LEAVE: 'dragleave',
	DRAG_OVER: 'dragover',
	DROP: 'drop',
	DRAG_END: 'dragend',
	// Animation
	ANIMATION_START: browser.isWebKit ? 'webkitAnimationStart' : 'animationstart',
	ANIMATION_END: browser.isWebKit ? 'webkitAnimationEnd' : 'animationend',
	ANIMATION_ITERATION: browser.isWebKit ? 'webkitAnimationIteration' : 'animationiteration'
} as const;

export interface EventLike {
	preventDefault(): void;
	stopPropagation(): void;
}

export function isEventLike(obj: unknown): obj is EventLike {
	const candidate = obj as EventLike | undefined;

	return !!(candidate && typeof candidate.preventDefault === 'function' && typeof candidate.stopPropagation === 'function');
}

export const EventHelper = {
	stop: <T extends EventLike>(e: T, cancelBubble?: boolean): T => {
		e.preventDefault();
		if (cancelBubble) {
			e.stopPropagation();
		}
		return e;
	}
};

export interface IFocusTracker extends Disposable {
	readonly onDidFocus: event.Event<void>;
	readonly onDidBlur: event.Event<void>;
	refreshState(): void;
}

export function saveParentsScrollTop(node: Element): number[] {
	const r: number[] = [];
	for (let i = 0; node && node.nodeType === node.ELEMENT_NODE; i++) {
		r[i] = node.scrollTop;
		node = <Element>node.parentNode;
	}
	return r;
}

export function restoreParentsScrollTop(node: Element, state: number[]): void {
	for (let i = 0; node && node.nodeType === node.ELEMENT_NODE; i++) {
		if (node.scrollTop !== state[i]) {
			node.scrollTop = state[i];
		}
		node = <Element>node.parentNode;
	}
}

class FocusTracker extends Disposable implements IFocusTracker {

	private readonly _onDidFocus = this._register(new event.Emitter<void>());
	readonly onDidFocus = this._onDidFocus.event;

	private readonly _onDidBlur = this._register(new event.Emitter<void>());
	readonly onDidBlur = this._onDidBlur.event;

	private _refreshStateHandler: () => void;

	private static hasFocusWithin(element: HTMLElement | Window): boolean {
		if (isHTMLElement(element)) {
			const shadowRoot = getShadowRoot(element);
			const activeElement = (shadowRoot ? shadowRoot.activeElement : element.ownerDocument.activeElement);
			return isAncestor(activeElement, element);
		} else {
			const window = element;
			return isAncestor(window.document.activeElement, window.document);
		}
	}

	constructor(element: HTMLElement | Window) {
		super();
		let hasFocus = FocusTracker.hasFocusWithin(element);
		let loosingFocus = false;

		const onFocus = () => {
			loosingFocus = false;
			if (!hasFocus) {
				hasFocus = true;
				this._onDidFocus.fire();
			}
		};

		const onBlur = () => {
			if (hasFocus) {
				loosingFocus = true;
				(isHTMLElement(element) ? getWindow(element) : element).setTimeout(() => {
					if (loosingFocus) {
						loosingFocus = false;
						hasFocus = false;
						this._onDidBlur.fire();
					}
				}, 0);
			}
		};

		this._refreshStateHandler = () => {
			const currentNodeHasFocus = FocusTracker.hasFocusWithin(<HTMLElement>element);
			if (currentNodeHasFocus !== hasFocus) {
				if (hasFocus) {
					onBlur();
				} else {
					onFocus();
				}
			}
		};

		this._register(addDisposableListener(element, EventType.FOCUS, onFocus, true));
		this._register(addDisposableListener(element, EventType.BLUR, onBlur, true));
		if (isHTMLElement(element)) {
			this._register(addDisposableListener(element, EventType.FOCUS_IN, () => this._refreshStateHandler()));
			this._register(addDisposableListener(element, EventType.FOCUS_OUT, () => this._refreshStateHandler()));
		}

	}

	refreshState() {
		this._refreshStateHandler();
	}
}

/**
 * Creates a new `IFocusTracker` instance that tracks focus changes on the given `element` and its descendants.
 *
 * @param element The `HTMLElement` or `Window` to track focus changes on.
 * @returns An `IFocusTracker` instance.
 */
export function trackFocus(element: HTMLElement | Window): IFocusTracker {
	return new FocusTracker(element);
}

export function after<T extends Node>(sibling: HTMLElement, child: T): T {
	sibling.after(child);
	return child;
}

export function append<T extends Node>(parent: HTMLElement, child: T): T;
export function append<T extends Node>(parent: HTMLElement, ...children: (T | string)[]): void;
export function append<T extends Node>(parent: HTMLElement, ...children: (T | string)[]): T | void {
	parent.append(...children);
	if (children.length === 1 && typeof children[0] !== 'string') {
		return <T>children[0];
	}
}

export function prepend<T extends Node>(parent: HTMLElement, child: T): T {
	parent.insertBefore(child, parent.firstChild);
	return child;
}

/**
 * Removes all children from `parent` and appends `children`
 */
export function reset(parent: HTMLElement, ...children: Array<Node | string>): void {
	parent.innerText = '';
	append(parent, ...children);
}

const SELECTOR_REGEX = /([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/;

export enum Namespace {
	HTML = 'http://www.w3.org/1999/xhtml',
	SVG = 'http://www.w3.org/2000/svg'
}

function _$<T extends Element>(namespace: Namespace, description: string, attrs?: { [key: string]: any }, ...children: Array<Node | string>): T {
	const match = SELECTOR_REGEX.exec(description);

	if (!match) {
		throw new Error('Bad use of emmet');
	}

	const tagName = match[1] || 'div';
	let result: T;

	if (namespace !== Namespace.HTML) {
		result = document.createElementNS(namespace as string, tagName) as T;
	} else {
		result = document.createElement(tagName) as unknown as T;
	}

	if (match[3]) {
		result.id = match[3];
	}
	if (match[4]) {
		result.className = match[4].replace(/\./g, ' ').trim();
	}

	if (attrs) {
		Object.entries(attrs).forEach(([name, value]) => {
			if (typeof value === 'undefined') {
				return;
			}

			if (/^on\w+$/.test(name)) {
				(<any>result)[name] = value;
			} else if (name === 'selected') {
				if (value) {
					result.setAttribute(name, 'true');
				}

			} else {
				result.setAttribute(name, value);
			}
		});
	}

	result.append(...children);

	return result as T;
}

export function $<T extends HTMLElement>(description: string, attrs?: { [key: string]: any }, ...children: Array<Node | string>): T {
	return _$(Namespace.HTML, description, attrs, ...children);
}

$.SVG = function <T extends SVGElement>(description: string, attrs?: { [key: string]: any }, ...children: Array<Node | string>): T {
	return _$(Namespace.SVG, description, attrs, ...children);
};

export function join(nodes: Node[], separator: Node | string): Node[] {
	const result: Node[] = [];

	nodes.forEach((node, index) => {
		if (index > 0) {
			if (separator instanceof Node) {
				result.push(separator.cloneNode());
			} else {
				result.push(document.createTextNode(separator));
			}
		}

		result.push(node);
	});

	return result;
}

export function setVisibility(visible: boolean, ...elements: HTMLElement[]): void {
	if (visible) {
		show(...elements);
	} else {
		hide(...elements);
	}
}

export function show(...elements: HTMLElement[]): void {
	for (const element of elements) {
		element.style.display = '';
		element.removeAttribute('aria-hidden');
	}
}

export function hide(...elements: HTMLElement[]): void {
	for (const element of elements) {
		element.style.display = 'none';
		element.setAttribute('aria-hidden', 'true');
	}
}

function findParentWithAttribute(node: Node | null, attribute: string): HTMLElement | null {
	while (node && node.nodeType === node.ELEMENT_NODE) {
		if (isHTMLElement(node) && node.hasAttribute(attribute)) {
			return node;
		}

		node = node.parentNode;
	}

	return null;
}

export function removeTabIndexAndUpdateFocus(node: HTMLElement): void {
	if (!node || !node.hasAttribute('tabIndex')) {
		return;
	}

	// If we are the currently focused element and tabIndex is removed,
	// standard DOM behavior is to move focus to the <body> element. We
	// typically never want that, rather put focus to the closest element
	// in the hierarchy of the parent DOM nodes.
	if (node.ownerDocument.activeElement === node) {
		const parentFocusable = findParentWithAttribute(node.parentElement, 'tabIndex');
		parentFocusable?.focus();
	}

	node.removeAttribute('tabindex');
}

export function finalHandler<T extends Event>(fn: (event: T) => any): (event: T) => any {
	return e => {
		e.preventDefault();
		e.stopPropagation();
		fn(e);
	};
}

export function domContentLoaded(targetWindow: Window): Promise<void> {
	return new Promise<void>(resolve => {
		const readyState = targetWindow.document.readyState;
		if (readyState === 'complete' || (targetWindow.document && targetWindow.document.body !== null)) {
			resolve(undefined);
		} else {
			const listener = () => {
				targetWindow.window.removeEventListener('DOMContentLoaded', listener, false);
				resolve();
			};

			targetWindow.window.addEventListener('DOMContentLoaded', listener, false);
		}
	});
}

/**
 * Find a value usable for a dom node size such that the likelihood that it would be
 * displayed with constant screen pixels size is as high as possible.
 *
 * e.g. We would desire for the cursors to be 2px (CSS px) wide. Under a devicePixelRatio
 * of 1.25, the cursor will be 2.5 screen pixels wide. Depending on how the dom node aligns/"snaps"
 * with the screen pixels, it will sometimes be rendered with 2 screen pixels, and sometimes with 3 screen pixels.
 */
export function computeScreenAwareSize(window: Window, cssPx: number): number {
	const screenPx = window.devicePixelRatio * cssPx;
	return Math.max(1, Math.floor(screenPx)) / window.devicePixelRatio;
}

/**
 * Open safely a new window. This is the best way to do so, but you cannot tell
 * if the window was opened or if it was blocked by the browser's popup blocker.
 * If you want to tell if the browser blocked the new window, use {@link windowOpenWithSuccess}.
 *
 * See https://github.com/microsoft/monaco-editor/issues/601
 * To protect against malicious code in the linked site, particularly phishing attempts,
 * the window.opener should be set to null to prevent the linked site from having access
 * to change the location of the current page.
 * See https://mathiasbynens.github.io/rel-noopener/
 */
export function windowOpenNoOpener(url: string): void {
	// By using 'noopener' in the `windowFeatures` argument, the newly created window will
	// not be able to use `window.opener` to reach back to the current page.
	// See https://stackoverflow.com/a/46958731
	// See https://developer.mozilla.org/en-US/docs/Web/API/Window/open#noopener
	// However, this also doesn't allow us to realize if the browser blocked
	// the creation of the window.
	mainWindow.open(url, '_blank', 'noopener');
}

/**
 * Open a new window in a popup. This is the best way to do so, but you cannot tell
 * if the window was opened or if it was blocked by the browser's popup blocker.
 * If you want to tell if the browser blocked the new window, use {@link windowOpenWithSuccess}.
 *
 * Note: this does not set {@link window.opener} to null. This is to allow the opened popup to
 * be able to use {@link window.close} to close itself. Because of this, you should only use
 * this function on urls that you trust.
 *
 * In otherwords, you should almost always use {@link windowOpenNoOpener} instead of this function.
 */
const popupWidth = 780, popupHeight = 640;
export function windowOpenPopup(url: string): void {
	const left = Math.floor(mainWindow.screenLeft + mainWindow.innerWidth / 2 - popupWidth / 2);
	const top = Math.floor(mainWindow.screenTop + mainWindow.innerHeight / 2 - popupHeight / 2);
	mainWindow.open(
		url,
		'_blank',
		`width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
	);
}

/**
 * Attempts to open a window and returns whether it succeeded. This technique is
 * not appropriate in certain contexts, like for example when the JS context is
 * executing inside a sandboxed iframe. If it is not necessary to know if the
 * browser blocked the new window, use {@link windowOpenNoOpener}.
 *
 * See https://github.com/microsoft/monaco-editor/issues/601
 * See https://github.com/microsoft/monaco-editor/issues/2474
 * See https://mathiasbynens.github.io/rel-noopener/
 *
 * @param url the url to open
 * @param noOpener whether or not to set the {@link window.opener} to null. You should leave the default
 * (true) unless you trust the url that is being opened.
 * @returns boolean indicating if the {@link window.open} call succeeded
 */
export function windowOpenWithSuccess(url: string, noOpener = true): boolean {
	const newTab = mainWindow.open();
	if (newTab) {
		if (noOpener) {
			// see `windowOpenNoOpener` for details on why this is important
			(newTab as any).opener = null;
		}
		newTab.location.href = url;
		return true;
	}
	return false;
}

export function animate(targetWindow: Window, fn: () => void): IDisposable {
	const step = () => {
		fn();
		stepDisposable = scheduleAtNextAnimationFrame(targetWindow, step);
	};

	let stepDisposable = scheduleAtNextAnimationFrame(targetWindow, step);
	return toDisposable(() => stepDisposable.dispose());
}

export function asCSSPropertyValue(value: string) {
	return `'${value.replace(/'/g, '%27')}'`;
}

export function asCssValueWithDefault(cssPropertyValue: string | undefined, dflt: string): string {
	if (cssPropertyValue !== undefined) {
		const variableMatch = cssPropertyValue.match(/^\s*var\((.+)\)$/);
		if (variableMatch) {
			const varArguments = variableMatch[1].split(',', 2);
			if (varArguments.length === 2) {
				dflt = asCssValueWithDefault(varArguments[1].trim(), dflt);
			}
			return `var(${varArguments[0]}, ${dflt})`;
		}
		return cssPropertyValue;
	}
	return dflt;
}

export enum DetectedFullscreenMode {

	/**
	 * The document is fullscreen, e.g. because an element
	 * in the document requested to be fullscreen.
	 */
	DOCUMENT = 1,

	/**
	 * The browser is fullscreen, e.g. because the user enabled
	 * native window fullscreen for it.
	 */
	BROWSER
}

export interface IDetectedFullscreen {

	/**
	 * Figure out if the document is fullscreen or the browser.
	 */
	mode: DetectedFullscreenMode;

	/**
	 * Whether we know for sure that we are in fullscreen mode or
	 * it is a guess.
	 */
	guess: boolean;
}

export function detectFullscreen(targetWindow: Window): IDetectedFullscreen | null {

	// Browser fullscreen: use DOM APIs to detect
	if (targetWindow.document.fullscreenElement || (<any>targetWindow.document).webkitFullscreenElement || (<any>targetWindow.document).webkitIsFullScreen) {
		return { mode: DetectedFullscreenMode.DOCUMENT, guess: false };
	}

	// There is no standard way to figure out if the browser
	// is using native fullscreen. Via checking on screen
	// height and comparing that to window height, we can guess
	// it though.

	if (targetWindow.innerHeight === targetWindow.screen.height) {
		// if the height of the window matches the screen height, we can
		// safely assume that the browser is fullscreen because no browser
		// chrome is taking height away (e.g. like toolbars).
		return { mode: DetectedFullscreenMode.BROWSER, guess: false };
	}

	if (platform.isMacintosh || platform.isLinux) {
		// macOS and Linux do not properly report `innerHeight`, only Windows does
		if (targetWindow.outerHeight === targetWindow.screen.height && targetWindow.outerWidth === targetWindow.screen.width) {
			// if the height of the browser matches the screen height, we can
			// only guess that we are in fullscreen. It is also possible that
			// the user has turned off taskbars in the OS and the browser is
			// simply able to span the entire size of the screen.
			return { mode: DetectedFullscreenMode.BROWSER, guess: true };
		}
	}

	// Not in fullscreen
	return null;
}

/**
 * Convert a Unicode string to a string in which each 16-bit unit occupies only one byte
 *
 * From https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa
 */
function toBinary(str: string): string {
	const codeUnits = new Uint16Array(str.length);
	for (let i = 0; i < codeUnits.length; i++) {
		codeUnits[i] = str.charCodeAt(i);
	}
	let binary = '';
	const uint8array = new Uint8Array(codeUnits.buffer);
	for (let i = 0; i < uint8array.length; i++) {
		binary += String.fromCharCode(uint8array[i]);
	}
	return binary;
}

/**
 * Version of the global `btoa` function that handles multi-byte characters instead
 * of throwing an exception.
 */
export function multibyteAwareBtoa(str: string): string {
	return btoa(toBinary(str));
}

type ModifierKey = 'alt' | 'ctrl' | 'shift' | 'meta';

export interface IModifierKeyStatus {
	altKey: boolean;
	shiftKey: boolean;
	ctrlKey: boolean;
	metaKey: boolean;
	lastKeyPressed?: ModifierKey;
	lastKeyReleased?: ModifierKey;
	event?: KeyboardEvent;
}

export class ModifierKeyEmitter extends event.Emitter<IModifierKeyStatus> {

	private readonly _subscriptions = new DisposableStore();
	private _keyStatus: IModifierKeyStatus;
	private static instance: ModifierKeyEmitter;

	private constructor() {
		super();

		this._keyStatus = {
			altKey: false,
			shiftKey: false,
			ctrlKey: false,
			metaKey: false
		};

		this._subscriptions.add(event.Event.runAndSubscribe(onDidRegisterWindow, ({ window, disposables }) => this.registerListeners(window, disposables), { window: mainWindow, disposables: this._subscriptions }));
	}

	private registerListeners(window: Window, disposables: DisposableStore): void {
		disposables.add(addDisposableListener(window, 'keydown', e => {
			if (e.defaultPrevented) {
				return;
			}

			const event = new StandardKeyboardEvent(e);
			// If Alt-key keydown event is repeated, ignore it #112347
			// Only known to be necessary for Alt-Key at the moment #115810
			if (event.keyCode === KeyCode.Alt && e.repeat) {
				return;
			}

			if (e.altKey && !this._keyStatus.altKey) {
				this._keyStatus.lastKeyPressed = 'alt';
			} else if (e.ctrlKey && !this._keyStatus.ctrlKey) {
				this._keyStatus.lastKeyPressed = 'ctrl';
			} else if (e.metaKey && !this._keyStatus.metaKey) {
				this._keyStatus.lastKeyPressed = 'meta';
			} else if (e.shiftKey && !this._keyStatus.shiftKey) {
				this._keyStatus.lastKeyPressed = 'shift';
			} else if (event.keyCode !== KeyCode.Alt) {
				this._keyStatus.lastKeyPressed = undefined;
			} else {
				return;
			}

			this._keyStatus.altKey = e.altKey;
			this._keyStatus.ctrlKey = e.ctrlKey;
			this._keyStatus.metaKey = e.metaKey;
			this._keyStatus.shiftKey = e.shiftKey;

			if (this._keyStatus.lastKeyPressed) {
				this._keyStatus.event = e;
				this.fire(this._keyStatus);
			}
		}, true));

		disposables.add(addDisposableListener(window, 'keyup', e => {
			if (e.defaultPrevented) {
				return;
			}

			if (!e.altKey && this._keyStatus.altKey) {
				this._keyStatus.lastKeyReleased = 'alt';
			} else if (!e.ctrlKey && this._keyStatus.ctrlKey) {
				this._keyStatus.lastKeyReleased = 'ctrl';
			} else if (!e.metaKey && this._keyStatus.metaKey) {
				this._keyStatus.lastKeyReleased = 'meta';
			} else if (!e.shiftKey && this._keyStatus.shiftKey) {
				this._keyStatus.lastKeyReleased = 'shift';
			} else {
				this._keyStatus.lastKeyReleased = undefined;
			}

			if (this._keyStatus.lastKeyPressed !== this._keyStatus.lastKeyReleased) {
				this._keyStatus.lastKeyPressed = undefined;
			}

			this._keyStatus.altKey = e.altKey;
			this._keyStatus.ctrlKey = e.ctrlKey;
			this._keyStatus.metaKey = e.metaKey;
			this._keyStatus.shiftKey = e.shiftKey;

			if (this._keyStatus.lastKeyReleased) {
				this._keyStatus.event = e;
				this.fire(this._keyStatus);
			}
		}, true));

		disposables.add(addDisposableListener(window.document.body, 'mousedown', () => {
			this._keyStatus.lastKeyPressed = undefined;
		}, true));

		disposables.add(addDisposableListener(window.document.body, 'mouseup', () => {
			this._keyStatus.lastKeyPressed = undefined;
		}, true));

		disposables.add(addDisposableListener(window.document.body, 'mousemove', e => {
			if (e.buttons) {
				this._keyStatus.lastKeyPressed = undefined;
			}
		}, true));

		disposables.add(addDisposableListener(window, 'blur', () => {
			this.resetKeyStatus();
		}));
	}

	get keyStatus(): IModifierKeyStatus {
		return this._keyStatus;
	}

	get isModifierPressed(): boolean {
		return this._keyStatus.altKey || this._keyStatus.ctrlKey || this._keyStatus.metaKey || this._keyStatus.shiftKey;
	}

	/**
	 * Allows to explicitly reset the key status based on more knowledge (#109062)
	 */
	resetKeyStatus(): void {
		this.doResetKeyStatus();
		this.fire(this._keyStatus);
	}

	private doResetKeyStatus(): void {
		this._keyStatus = {
			altKey: false,
			shiftKey: false,
			ctrlKey: false,
			metaKey: false
		};
	}

	static getInstance() {
		if (!ModifierKeyEmitter.instance) {
			ModifierKeyEmitter.instance = new ModifierKeyEmitter();
		}

		return ModifierKeyEmitter.instance;
	}

	override dispose() {
		super.dispose();
		this._subscriptions.dispose();
	}
}

export function getCookieValue(name: string): string | undefined {
	const match = document.cookie.match('(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)'); // See https://stackoverflow.com/a/25490531

	return match ? match.pop() : undefined;
}

export interface IDragAndDropObserverCallbacks {
	readonly onDragEnter?: (e: DragEvent) => void;
	readonly onDragLeave?: (e: DragEvent) => void;
	readonly onDrop?: (e: DragEvent) => void;
	readonly onDragEnd?: (e: DragEvent) => void;
	readonly onDragStart?: (e: DragEvent) => void;
	readonly onDrag?: (e: DragEvent) => void;
	readonly onDragOver?: (e: DragEvent, dragDuration: number) => void;
}

export class DragAndDropObserver extends Disposable {

	// A helper to fix issues with repeated DRAG_ENTER / DRAG_LEAVE
	// calls see https://github.com/microsoft/vscode/issues/14470
	// when the element has child elements where the events are fired
	// repeadedly.
	private counter: number = 0;

	// Allows to measure the duration of the drag operation.
	private dragStartTime = 0;

	constructor(private readonly element: HTMLElement, private readonly callbacks: IDragAndDropObserverCallbacks) {
		super();

		this.registerListeners();
	}

	private registerListeners(): void {
		if (this.callbacks.onDragStart) {
			this._register(addDisposableListener(this.element, EventType.DRAG_START, (e: DragEvent) => {
				this.callbacks.onDragStart?.(e);
			}));
		}

		if (this.callbacks.onDrag) {
			this._register(addDisposableListener(this.element, EventType.DRAG, (e: DragEvent) => {
				this.callbacks.onDrag?.(e);
			}));
		}

		this._register(addDisposableListener(this.element, EventType.DRAG_ENTER, (e: DragEvent) => {
			this.counter++;
			this.dragStartTime = e.timeStamp;

			this.callbacks.onDragEnter?.(e);
		}));

		this._register(addDisposableListener(this.element, EventType.DRAG_OVER, (e: DragEvent) => {
			e.preventDefault(); // needed so that the drop event fires (https://stackoverflow.com/questions/21339924/drop-event-not-firing-in-chrome)

			this.callbacks.onDragOver?.(e, e.timeStamp - this.dragStartTime);
		}));

		this._register(addDisposableListener(this.element, EventType.DRAG_LEAVE, (e: DragEvent) => {
			this.counter--;

			if (this.counter === 0) {
				this.dragStartTime = 0;

				this.callbacks.onDragLeave?.(e);
			}
		}));

		this._register(addDisposableListener(this.element, EventType.DRAG_END, (e: DragEvent) => {
			this.counter = 0;
			this.dragStartTime = 0;

			this.callbacks.onDragEnd?.(e);
		}));

		this._register(addDisposableListener(this.element, EventType.DROP, (e: DragEvent) => {
			this.counter = 0;
			this.dragStartTime = 0;

			this.callbacks.onDrop?.(e);
		}));
	}
}

type HTMLElementAttributeKeys<T> = Partial<{ [K in keyof T]: T[K] extends Function ? never : T[K] extends object ? HTMLElementAttributeKeys<T[K]> : T[K] }>;
type ElementAttributes<T> = HTMLElementAttributeKeys<T> & Record<string, any>;
type RemoveHTMLElement<T> = T extends HTMLElement ? never : T;
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
type ArrayToObj<T extends readonly any[]> = UnionToIntersection<RemoveHTMLElement<T[number]>>;
type HHTMLElementTagNameMap = HTMLElementTagNameMap & { '': HTMLDivElement };

type TagToElement<T> = T extends `${infer TStart}#${string}`
	? TStart extends keyof HHTMLElementTagNameMap
	? HHTMLElementTagNameMap[TStart]
	: HTMLElement
	: T extends `${infer TStart}.${string}`
	? TStart extends keyof HHTMLElementTagNameMap
	? HHTMLElementTagNameMap[TStart]
	: HTMLElement
	: T extends keyof HTMLElementTagNameMap
	? HTMLElementTagNameMap[T]
	: HTMLElement;

type TagToElementAndId<TTag> = TTag extends `${infer TTag}@${infer TId}`
	? { element: TagToElement<TTag>; id: TId }
	: { element: TagToElement<TTag>; id: 'root' };

type TagToRecord<TTag> = TagToElementAndId<TTag> extends { element: infer TElement; id: infer TId }
	? Record<(TId extends string ? TId : never) | 'root', TElement>
	: never;

type Child = HTMLElement | string | Record<string, HTMLElement>;

const H_REGEX = /(?<tag>[\w\-]+)?(?:#(?<id>[\w\-]+))?(?<class>(?:\.(?:[\w\-]+))*)(?:@(?<name>(?:[\w\_])+))?/;

/**
 * A helper function to create nested dom nodes.
 *
 *
 * ```ts
 * const elements = h('div.code-view', [
 * 	h('div.title@title'),
 * 	h('div.container', [
 * 		h('div.gutter@gutterDiv'),
 * 		h('div@editor'),
 * 	]),
 * ]);
 * const editor = createEditor(elements.editor);
 * ```
*/
export function h<TTag extends string>
	(tag: TTag):
	TagToRecord<TTag> extends infer Y ? { [TKey in keyof Y]: Y[TKey] } : never;

export function h<TTag extends string, T extends Child[]>
	(tag: TTag, children: [...T]):
	(ArrayToObj<T> & TagToRecord<TTag>) extends infer Y ? { [TKey in keyof Y]: Y[TKey] } : never;

export function h<TTag extends string>
	(tag: TTag, attributes: Partial<ElementAttributes<TagToElement<TTag>>>):
	TagToRecord<TTag> extends infer Y ? { [TKey in keyof Y]: Y[TKey] } : never;

export function h<TTag extends string, T extends Child[]>
	(tag: TTag, attributes: Partial<ElementAttributes<TagToElement<TTag>>>, children: [...T]):
	(ArrayToObj<T> & TagToRecord<TTag>) extends infer Y ? { [TKey in keyof Y]: Y[TKey] } : never;

export function h(tag: string, ...args: [] | [attributes: { $: string } & Partial<ElementAttributes<HTMLElement>> | Record<string, any>, children?: any[]] | [children: any[]]): Record<string, HTMLElement> {
	let attributes: { $?: string } & Partial<ElementAttributes<HTMLElement>>;
	let children: (Record<string, HTMLElement> | HTMLElement)[] | undefined;

	if (Array.isArray(args[0])) {
		attributes = {};
		children = args[0];
	} else {
		attributes = args[0] as any || {};
		children = args[1];
	}

	const match = H_REGEX.exec(tag);

	if (!match || !match.groups) {
		throw new Error('Bad use of h');
	}

	const tagName = match.groups['tag'] || 'div';
	const el = document.createElement(tagName);

	if (match.groups['id']) {
		el.id = match.groups['id'];
	}

	const classNames = [];
	if (match.groups['class']) {
		for (const className of match.groups['class'].split('.')) {
			if (className !== '') {
				classNames.push(className);
			}
		}
	}
	if (attributes.className !== undefined) {
		for (const className of attributes.className.split('.')) {
			if (className !== '') {
				classNames.push(className);
			}
		}
	}
	if (classNames.length > 0) {
		el.className = classNames.join(' ');
	}

	const result: Record<string, HTMLElement> = {};

	if (match.groups['name']) {
		result[match.groups['name']] = el;
	}

	if (children) {
		for (const c of children) {
			if (isHTMLElement(c)) {
				el.appendChild(c);
			} else if (typeof c === 'string') {
				el.append(c);
			} else if ('root' in c) {
				Object.assign(result, c);
				el.appendChild(c.root);
			}
		}
	}

	for (const [key, value] of Object.entries(attributes)) {
		if (key === 'className') {
			continue;
		} else if (key === 'style') {
			for (const [cssKey, cssValue] of Object.entries(value)) {
				el.style.setProperty(
					camelCaseToHyphenCase(cssKey),
					typeof cssValue === 'number' ? cssValue + 'px' : '' + cssValue
				);
			}
		} else if (key === 'tabIndex') {
			el.tabIndex = value;
		} else {
			el.setAttribute(camelCaseToHyphenCase(key), value.toString());
		}
	}

	result['root'] = el;

	return result;
}

export function svgElem<TTag extends string>
	(tag: TTag):
	TagToRecord<TTag> extends infer Y ? { [TKey in keyof Y]: Y[TKey] } : never;

export function svgElem<TTag extends string, T extends Child[]>
	(tag: TTag, children: [...T]):
	(ArrayToObj<T> & TagToRecord<TTag>) extends infer Y ? { [TKey in keyof Y]: Y[TKey] } : never;

export function svgElem<TTag extends string>
	(tag: TTag, attributes: Partial<ElementAttributes<TagToElement<TTag>>>):
	TagToRecord<TTag> extends infer Y ? { [TKey in keyof Y]: Y[TKey] } : never;

export function svgElem<TTag extends string, T extends Child[]>
	(tag: TTag, attributes: Partial<ElementAttributes<TagToElement<TTag>>>, children: [...T]):
	(ArrayToObj<T> & TagToRecord<TTag>) extends infer Y ? { [TKey in keyof Y]: Y[TKey] } : never;

export function svgElem(tag: string, ...args: [] | [attributes: { $: string } & Partial<ElementAttributes<HTMLElement>> | Record<string, any>, children?: any[]] | [children: any[]]): Record<string, HTMLElement> {
	let attributes: { $?: string } & Partial<ElementAttributes<HTMLElement>>;
	let children: (Record<string, HTMLElement> | HTMLElement)[] | undefined;

	if (Array.isArray(args[0])) {
		attributes = {};
		children = args[0];
	} else {
		attributes = args[0] as any || {};
		children = args[1];
	}

	const match = H_REGEX.exec(tag);

	if (!match || !match.groups) {
		throw new Error('Bad use of h');
	}

	const tagName = match.groups['tag'] || 'div';
	const el = document.createElementNS('http://www.w3.org/2000/svg', tagName) as any as HTMLElement;

	if (match.groups['id']) {
		el.id = match.groups['id'];
	}

	const classNames = [];
	if (match.groups['class']) {
		for (const className of match.groups['class'].split('.')) {
			if (className !== '') {
				classNames.push(className);
			}
		}
	}
	if (attributes.className !== undefined) {
		for (const className of attributes.className.split('.')) {
			if (className !== '') {
				classNames.push(className);
			}
		}
	}
	if (classNames.length > 0) {
		el.className = classNames.join(' ');
	}

	const result: Record<string, HTMLElement> = {};

	if (match.groups['name']) {
		result[match.groups['name']] = el;
	}

	if (children) {
		for (const c of children) {
			if (isHTMLElement(c)) {
				el.appendChild(c);
			} else if (typeof c === 'string') {
				el.append(c);
			} else if ('root' in c) {
				Object.assign(result, c);
				el.appendChild(c.root);
			}
		}
	}

	for (const [key, value] of Object.entries(attributes)) {
		if (key === 'className') {
			continue;
		} else if (key === 'style') {
			for (const [cssKey, cssValue] of Object.entries(value)) {
				el.style.setProperty(
					camelCaseToHyphenCase(cssKey),
					typeof cssValue === 'number' ? cssValue + 'px' : '' + cssValue
				);
			}
		} else if (key === 'tabIndex') {
			el.tabIndex = value;
		} else {
			el.setAttribute(camelCaseToHyphenCase(key), value.toString());
		}
	}

	result['root'] = el;

	return result;
}

function camelCaseToHyphenCase(str: string) {
	return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function copyAttributes(from: Element, to: Element, filter?: string[]): void {
	for (const { name, value } of from.attributes) {
		if (!filter || filter.includes(name)) {
			to.setAttribute(name, value);
		}
	}
}

function copyAttribute(from: Element, to: Element, name: string): void {
	const value = from.getAttribute(name);
	if (value) {
		to.setAttribute(name, value);
	} else {
		to.removeAttribute(name);
	}
}

export function trackAttributes(from: Element, to: Element, filter?: string[]): IDisposable {
	copyAttributes(from, to, filter);

	const disposables = new DisposableStore();

	disposables.add(sharedMutationObserver.observe(from, disposables, { attributes: true, attributeFilter: filter })(mutations => {
		for (const mutation of mutations) {
			if (mutation.type === 'attributes' && mutation.attributeName) {
				copyAttribute(from, to, mutation.attributeName);
			}
		}
	}));

	return disposables;
}

/**
 * Helper for calculating the "safe triangle" occluded by hovers to avoid early dismissal.
 * @see https://www.smashingmagazine.com/2023/08/better-context-menus-safe-triangles/ for example
 */
export class SafeTriangle {
	// 4 triangles, 2 points (x, y) stored for each
	private triangles: number[] = [];

	constructor(
		private readonly originX: number,
		private readonly originY: number,
		target: HTMLElement
	) {
		const { top, left, right, bottom } = target.getBoundingClientRect();
		const t = this.triangles;
		let i = 0;

		t[i++] = left;
		t[i++] = top;
		t[i++] = right;
		t[i++] = top;

		t[i++] = left;
		t[i++] = top;
		t[i++] = left;
		t[i++] = bottom;

		t[i++] = right;
		t[i++] = top;
		t[i++] = right;
		t[i++] = bottom;

		t[i++] = left;
		t[i++] = bottom;
		t[i++] = right;
		t[i++] = bottom;
	}

	public contains(x: number, y: number) {
		const { triangles, originX, originY } = this;
		for (let i = 0; i < 4; i++) {
			if (isPointWithinTriangle(x, y, originX, originY, triangles[2 * i], triangles[2 * i + 1], triangles[2 * i + 2], triangles[2 * i + 3])) {
				return true;
			}
		}

		return false;
	}
}
