import '../colorPicker.css';
import { $ as $$1, append, addDisposableListener, EventType, getDomNodePagePosition } from '../../../../../base/browser/dom.js';
import { GlobalPointerMoveMonitor } from '../../../../../base/browser/globalPointerMoveMonitor.js';
import { Color, HSVA } from '../../../../../base/common/color.js';
import { Emitter } from '../../../../../base/common/event.js';
import { Disposable } from '../../../../../base/common/lifecycle.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const $ = $$1;
class SaturationBox extends Disposable {
    constructor(container, model, pixelRatio) {
        super();
        this.model = model;
        this.pixelRatio = pixelRatio;
        this._onDidChange = new Emitter();
        this.onDidChange = this._onDidChange.event;
        this._onColorFlushed = new Emitter();
        this.onColorFlushed = this._onColorFlushed.event;
        this._domNode = $('.saturation-wrap');
        append(container, this._domNode);
        // Create canvas, draw selected color
        this._canvas = document.createElement('canvas');
        this._canvas.className = 'saturation-box';
        append(this._domNode, this._canvas);
        // Add selection circle
        this.selection = $('.saturation-selection');
        append(this._domNode, this.selection);
        this.layout();
        this._register(addDisposableListener(this._domNode, EventType.POINTER_DOWN, e => this.onPointerDown(e)));
        this._register(this.model.onDidChangeColor(this.onDidChangeColor, this));
        this.monitor = null;
    }
    get domNode() {
        return this._domNode;
    }
    onPointerDown(e) {
        if (!e.target || !(e.target instanceof Element)) {
            return;
        }
        this.monitor = this._register(new GlobalPointerMoveMonitor());
        const origin = getDomNodePagePosition(this._domNode);
        if (e.target !== this.selection) {
            this.onDidChangePosition(e.offsetX, e.offsetY);
        }
        this.monitor.startMonitoring(e.target, e.pointerId, e.buttons, event => this.onDidChangePosition(event.pageX - origin.left, event.pageY - origin.top), () => null);
        const pointerUpListener = addDisposableListener(e.target.ownerDocument, EventType.POINTER_UP, () => {
            this._onColorFlushed.fire();
            pointerUpListener.dispose();
            if (this.monitor) {
                this.monitor.stopMonitoring(true);
                this.monitor = null;
            }
        }, true);
    }
    onDidChangePosition(left, top) {
        const s = Math.max(0, Math.min(1, left / this.width));
        const v = Math.max(0, Math.min(1, 1 - (top / this.height)));
        this.paintSelection(s, v);
        this._onDidChange.fire({ s, v });
    }
    layout() {
        this.width = this._domNode.offsetWidth;
        this.height = this._domNode.offsetHeight;
        this._canvas.width = this.width * this.pixelRatio;
        this._canvas.height = this.height * this.pixelRatio;
        this.paint();
        const hsva = this.model.color.hsva;
        this.paintSelection(hsva.s, hsva.v);
    }
    paint() {
        const hsva = this.model.color.hsva;
        const saturatedColor = new Color(new HSVA(hsva.h, 1, 1, 1));
        const ctx = this._canvas.getContext('2d');
        const whiteGradient = ctx.createLinearGradient(0, 0, this._canvas.width, 0);
        whiteGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        whiteGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
        whiteGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        const blackGradient = ctx.createLinearGradient(0, 0, 0, this._canvas.height);
        blackGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        blackGradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
        ctx.rect(0, 0, this._canvas.width, this._canvas.height);
        ctx.fillStyle = Color.Format.CSS.format(saturatedColor);
        ctx.fill();
        ctx.fillStyle = whiteGradient;
        ctx.fill();
        ctx.fillStyle = blackGradient;
        ctx.fill();
    }
    paintSelection(s, v) {
        this.selection.style.left = `${s * this.width}px`;
        this.selection.style.top = `${this.height - v * this.height}px`;
    }
    onDidChangeColor(color) {
        if (this.monitor && this.monitor.isMonitoring()) {
            return;
        }
        this.paint();
        const hsva = color.hsva;
        this.paintSelection(hsva.s, hsva.v);
    }
}

export { SaturationBox };
