/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { GlobalPointerMoveMonitor } from 'vs/base/browser/globalPointerMoveMonitor';
import { Widget } from 'vs/base/browser/ui/widget';
import { TimeoutTimer } from 'vs/base/common/async';
import * as dom from 'vs/base/browser/dom';

/**
 * The arrow image size.
 */
export const ARROW_IMG_SIZE = 11;

export interface ScrollbarArrowOptions {
	onActivate: () => void;
	className: string;
	// icon: ThemeIcon;

	bgWidth: number;
	bgHeight: number;

	top?: number;
	left?: number;
	bottom?: number;
	right?: number;
}

export class ScrollbarArrow extends Widget {

	private _onActivate: () => void;
	public bgDomNode: HTMLElement;
	public domNode: HTMLElement;
	private _pointerdownRepeatTimer: dom.WindowIntervalTimer;
	private _pointerdownScheduleRepeatTimer: TimeoutTimer;
	private _pointerMoveMonitor: GlobalPointerMoveMonitor;

	constructor(opts: ScrollbarArrowOptions) {
		super();
		this._onActivate = opts.onActivate;

		this.bgDomNode = document.createElement('div');
		this.bgDomNode.className = 'arrow-background';
		this.bgDomNode.style.position = 'absolute';
		this.bgDomNode.style.width = opts.bgWidth + 'px';
		this.bgDomNode.style.height = opts.bgHeight + 'px';
		if (typeof opts.top !== 'undefined') {
			this.bgDomNode.style.top = '0px';
		}
		if (typeof opts.left !== 'undefined') {
			this.bgDomNode.style.left = '0px';
		}
		if (typeof opts.bottom !== 'undefined') {
			this.bgDomNode.style.bottom = '0px';
		}
		if (typeof opts.right !== 'undefined') {
			this.bgDomNode.style.right = '0px';
		}

		this.domNode = document.createElement('div');
		this.domNode.className = opts.className;
		// this.domNode.classList.add(...ThemeIcon.asClassNameArray(opts.icon));

		this.domNode.style.position = 'absolute';
		this.domNode.style.width = ARROW_IMG_SIZE + 'px';
		this.domNode.style.height = ARROW_IMG_SIZE + 'px';
		if (typeof opts.top !== 'undefined') {
			this.domNode.style.top = opts.top + 'px';
		}
		if (typeof opts.left !== 'undefined') {
			this.domNode.style.left = opts.left + 'px';
		}
		if (typeof opts.bottom !== 'undefined') {
			this.domNode.style.bottom = opts.bottom + 'px';
		}
		if (typeof opts.right !== 'undefined') {
			this.domNode.style.right = opts.right + 'px';
		}

		this._pointerMoveMonitor = this._register(new GlobalPointerMoveMonitor());
		this._register(dom.addStandardDisposableListener(this.bgDomNode, dom.EventType.POINTER_DOWN, (e) => this._arrowPointerDown(e)));
		this._register(dom.addStandardDisposableListener(this.domNode, dom.EventType.POINTER_DOWN, (e) => this._arrowPointerDown(e)));

		this._pointerdownRepeatTimer = this._register(new dom.WindowIntervalTimer());
		this._pointerdownScheduleRepeatTimer = this._register(new TimeoutTimer());
	}

	private _arrowPointerDown(e: PointerEvent): void {
		if (!e.target || !(e.target instanceof Element)) {
			return;
		}
		const scheduleRepeater = () => {
			this._pointerdownRepeatTimer.cancelAndSet(() => this._onActivate(), 1000 / 24, dom.getWindow(e));
		};

		this._onActivate();
		this._pointerdownRepeatTimer.cancel();
		this._pointerdownScheduleRepeatTimer.cancelAndSet(scheduleRepeater, 200);

		this._pointerMoveMonitor.startMonitoring(
			e.target,
			e.pointerId,
			e.buttons,
			(pointerMoveData) => { /* Intentional empty */ },
			() => {
				this._pointerdownRepeatTimer.cancel();
				this._pointerdownScheduleRepeatTimer.cancel();
			}
		);

		e.preventDefault();
	}
}
