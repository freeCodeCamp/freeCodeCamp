/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as browser from 'vs/base/browser/browser';
import { IframeUtils } from 'vs/base/browser/iframe';
import * as platform from 'vs/base/common/platform';

export interface IMouseEvent {
	readonly browserEvent: MouseEvent;
	readonly leftButton: boolean;
	readonly middleButton: boolean;
	readonly rightButton: boolean;
	readonly buttons: number;
	readonly target: HTMLElement;
	readonly detail: number;
	readonly posx: number;
	readonly posy: number;
	readonly ctrlKey: boolean;
	readonly shiftKey: boolean;
	readonly altKey: boolean;
	readonly metaKey: boolean;
	readonly timestamp: number;

	preventDefault(): void;
	stopPropagation(): void;
}

export class StandardMouseEvent implements IMouseEvent {

	public readonly browserEvent: MouseEvent;

	public readonly leftButton: boolean;
	public readonly middleButton: boolean;
	public readonly rightButton: boolean;
	public readonly buttons: number;
	public readonly target: HTMLElement;
	public detail: number;
	public readonly posx: number;
	public readonly posy: number;
	public readonly ctrlKey: boolean;
	public readonly shiftKey: boolean;
	public readonly altKey: boolean;
	public readonly metaKey: boolean;
	public readonly timestamp: number;

	constructor(targetWindow: Window, e: MouseEvent) {
		this.timestamp = Date.now();
		this.browserEvent = e;
		this.leftButton = e.button === 0;
		this.middleButton = e.button === 1;
		this.rightButton = e.button === 2;
		this.buttons = e.buttons;

		this.target = <HTMLElement>e.target;

		this.detail = e.detail || 1;
		if (e.type === 'dblclick') {
			this.detail = 2;
		}
		this.ctrlKey = e.ctrlKey;
		this.shiftKey = e.shiftKey;
		this.altKey = e.altKey;
		this.metaKey = e.metaKey;

		if (typeof e.pageX === 'number') {
			this.posx = e.pageX;
			this.posy = e.pageY;
		} else {
			// Probably hit by MSGestureEvent
			this.posx = e.clientX + this.target.ownerDocument.body.scrollLeft + this.target.ownerDocument.documentElement.scrollLeft;
			this.posy = e.clientY + this.target.ownerDocument.body.scrollTop + this.target.ownerDocument.documentElement.scrollTop;
		}

		// Find the position of the iframe this code is executing in relative to the iframe where the event was captured.
		const iframeOffsets = IframeUtils.getPositionOfChildWindowRelativeToAncestorWindow(targetWindow, e.view);
		this.posx -= iframeOffsets.left;
		this.posy -= iframeOffsets.top;
	}

	public preventDefault(): void {
		this.browserEvent.preventDefault();
	}

	public stopPropagation(): void {
		this.browserEvent.stopPropagation();
	}
}

export class DragMouseEvent extends StandardMouseEvent {

	public readonly dataTransfer: DataTransfer;

	constructor(targetWindow: Window, e: MouseEvent) {
		super(targetWindow, e);
		this.dataTransfer = (<any>e).dataTransfer;
	}
}

export interface IMouseWheelEvent extends MouseEvent {
	readonly wheelDelta: number;
	readonly wheelDeltaX: number;
	readonly wheelDeltaY: number;

	readonly deltaX: number;
	readonly deltaY: number;
	readonly deltaZ: number;
	readonly deltaMode: number;
}

interface IWebKitMouseWheelEvent {
	wheelDeltaY: number;
	wheelDeltaX: number;
}

interface IGeckoMouseWheelEvent {
	HORIZONTAL_AXIS: number;
	VERTICAL_AXIS: number;
	axis: number;
	detail: number;
}

export class StandardWheelEvent {

	public readonly browserEvent: IMouseWheelEvent | null;
	public readonly deltaY: number;
	public readonly deltaX: number;
	public readonly target: Node;

	constructor(e: IMouseWheelEvent | null, deltaX: number = 0, deltaY: number = 0) {

		this.browserEvent = e || null;
		this.target = e ? (e.target || (<any>e).targetNode || e.srcElement) : null;

		this.deltaY = deltaY;
		this.deltaX = deltaX;

		let shouldFactorDPR: boolean = false;
		if (browser.isChrome) {
			// Chrome version >= 123 contains the fix to factor devicePixelRatio into the wheel event.
			// See https://chromium.googlesource.com/chromium/src.git/+/be51b448441ff0c9d1f17e0f25c4bf1ab3f11f61
			const chromeVersionMatch = navigator.userAgent.match(/Chrome\/(\d+)/);
			const chromeMajorVersion = chromeVersionMatch ? parseInt(chromeVersionMatch[1]) : 123;
			shouldFactorDPR = chromeMajorVersion <= 122;
		}

		if (e) {
			// Old (deprecated) wheel events
			const e1 = <IWebKitMouseWheelEvent><any>e;
			const e2 = <IGeckoMouseWheelEvent><any>e;
			const devicePixelRatio = e.view?.devicePixelRatio || 1;

			// vertical delta scroll
			if (typeof e1.wheelDeltaY !== 'undefined') {
				if (shouldFactorDPR) {
					// Refs https://github.com/microsoft/vscode/issues/146403#issuecomment-1854538928
					this.deltaY = e1.wheelDeltaY / (120 * devicePixelRatio);
				} else {
					this.deltaY = e1.wheelDeltaY / 120;
				}
			} else if (typeof e2.VERTICAL_AXIS !== 'undefined' && e2.axis === e2.VERTICAL_AXIS) {
				this.deltaY = -e2.detail / 3;
			} else if (e.type === 'wheel') {
				// Modern wheel event
				// https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent
				const ev = <WheelEvent><unknown>e;

				if (ev.deltaMode === ev.DOM_DELTA_LINE) {
					// the deltas are expressed in lines
					if (browser.isFirefox && !platform.isMacintosh) {
						this.deltaY = -e.deltaY / 3;
					} else {
						this.deltaY = -e.deltaY;
					}
				} else {
					this.deltaY = -e.deltaY / 40;
				}
			}

			// horizontal delta scroll
			if (typeof e1.wheelDeltaX !== 'undefined') {
				if (browser.isSafari && platform.isWindows) {
					this.deltaX = - (e1.wheelDeltaX / 120);
				} else if (shouldFactorDPR) {
					// Refs https://github.com/microsoft/vscode/issues/146403#issuecomment-1854538928
					this.deltaX = e1.wheelDeltaX / (120 * devicePixelRatio);
				} else {
					this.deltaX = e1.wheelDeltaX / 120;
				}
			} else if (typeof e2.HORIZONTAL_AXIS !== 'undefined' && e2.axis === e2.HORIZONTAL_AXIS) {
				this.deltaX = -e.detail / 3;
			} else if (e.type === 'wheel') {
				// Modern wheel event
				// https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent
				const ev = <WheelEvent><unknown>e;

				if (ev.deltaMode === ev.DOM_DELTA_LINE) {
					// the deltas are expressed in lines
					if (browser.isFirefox && !platform.isMacintosh) {
						this.deltaX = -e.deltaX / 3;
					} else {
						this.deltaX = -e.deltaX;
					}
				} else {
					this.deltaX = -e.deltaX / 40;
				}
			}

			// Assume a vertical scroll if nothing else worked
			if (this.deltaY === 0 && this.deltaX === 0 && e.wheelDelta) {
				if (shouldFactorDPR) {
					// Refs https://github.com/microsoft/vscode/issues/146403#issuecomment-1854538928
					this.deltaY = e.wheelDelta / (120 * devicePixelRatio);
				} else {
					this.deltaY = e.wheelDelta / 120;
				}
			}
		}
	}

	public preventDefault(): void {
		this.browserEvent?.preventDefault();
	}

	public stopPropagation(): void {
		this.browserEvent?.stopPropagation();
	}
}
