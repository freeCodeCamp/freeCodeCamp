import { GlobalPointerMoveMonitor } from '../../globalPointerMoveMonitor.js';
import { Widget } from '../widget.js';
import { TimeoutTimer } from '../../../common/async.js';
import { ThemeIcon } from '../../../common/themables.js';
import { addStandardDisposableListener, EventType, WindowIntervalTimer, getWindow } from '../../dom.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * The arrow image size.
 */
const ARROW_IMG_SIZE = 11;
class ScrollbarArrow extends Widget {
    constructor(opts) {
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
        this.domNode.classList.add(...ThemeIcon.asClassNameArray(opts.icon));
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
        this._register(addStandardDisposableListener(this.bgDomNode, EventType.POINTER_DOWN, (e) => this._arrowPointerDown(e)));
        this._register(addStandardDisposableListener(this.domNode, EventType.POINTER_DOWN, (e) => this._arrowPointerDown(e)));
        this._pointerdownRepeatTimer = this._register(new WindowIntervalTimer());
        this._pointerdownScheduleRepeatTimer = this._register(new TimeoutTimer());
    }
    _arrowPointerDown(e) {
        if (!e.target || !(e.target instanceof Element)) {
            return;
        }
        const scheduleRepeater = () => {
            this._pointerdownRepeatTimer.cancelAndSet(() => this._onActivate(), 1000 / 24, getWindow(e));
        };
        this._onActivate();
        this._pointerdownRepeatTimer.cancel();
        this._pointerdownScheduleRepeatTimer.cancelAndSet(scheduleRepeater, 200);
        this._pointerMoveMonitor.startMonitoring(e.target, e.pointerId, e.buttons, (pointerMoveData) => { }, () => {
            this._pointerdownRepeatTimer.cancel();
            this._pointerdownScheduleRepeatTimer.cancel();
        });
        e.preventDefault();
    }
}

export { ARROW_IMG_SIZE, ScrollbarArrow };
