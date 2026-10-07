import { Disposable } from '../../../base/common/lifecycle.js';
import { Emitter } from '../../../base/common/event.js';
import { scheduleAtNextAnimationFrame, getWindow } from '../../../base/browser/dom.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ElementSizeObserver extends Disposable {
    constructor(referenceDomElement, dimension) {
        super();
        this._onDidChange = this._register(new Emitter());
        this.onDidChange = this._onDidChange.event;
        this._referenceDomElement = referenceDomElement;
        this._width = -1;
        this._height = -1;
        this._resizeObserver = null;
        this.measureReferenceDomElement(false, dimension);
    }
    dispose() {
        this.stopObserving();
        super.dispose();
    }
    getWidth() {
        return this._width;
    }
    getHeight() {
        return this._height;
    }
    startObserving() {
        if (!this._resizeObserver && this._referenceDomElement) {
            // We want to react to the resize observer only once per animation frame
            // The first time the resize observer fires, we will react to it immediately.
            // Otherwise we will postpone to the next animation frame.
            // We'll use `observeContentRect` to store the content rect we received.
            let observedDimenstion = null;
            const observeNow = () => {
                if (observedDimenstion) {
                    this.observe({ width: observedDimenstion.width, height: observedDimenstion.height });
                }
                else {
                    this.observe();
                }
            };
            let shouldObserve = false;
            let alreadyObservedThisAnimationFrame = false;
            const update = () => {
                if (shouldObserve && !alreadyObservedThisAnimationFrame) {
                    try {
                        shouldObserve = false;
                        alreadyObservedThisAnimationFrame = true;
                        observeNow();
                    }
                    finally {
                        scheduleAtNextAnimationFrame(getWindow(this._referenceDomElement), () => {
                            alreadyObservedThisAnimationFrame = false;
                            update();
                        });
                    }
                }
            };
            this._resizeObserver = new ResizeObserver((entries) => {
                if (entries && entries[0] && entries[0].contentRect) {
                    observedDimenstion = { width: entries[0].contentRect.width, height: entries[0].contentRect.height };
                }
                else {
                    observedDimenstion = null;
                }
                shouldObserve = true;
                update();
            });
            this._resizeObserver.observe(this._referenceDomElement);
        }
    }
    stopObserving() {
        if (this._resizeObserver) {
            this._resizeObserver.disconnect();
            this._resizeObserver = null;
        }
    }
    observe(dimension) {
        this.measureReferenceDomElement(true, dimension);
    }
    measureReferenceDomElement(emitEvent, dimension) {
        let observedWidth = 0;
        let observedHeight = 0;
        if (dimension) {
            observedWidth = dimension.width;
            observedHeight = dimension.height;
        }
        else if (this._referenceDomElement) {
            observedWidth = this._referenceDomElement.clientWidth;
            observedHeight = this._referenceDomElement.clientHeight;
        }
        observedWidth = Math.max(5, observedWidth);
        observedHeight = Math.max(5, observedHeight);
        if (this._width !== observedWidth || this._height !== observedHeight) {
            this._width = observedWidth;
            this._height = observedHeight;
            if (emitEvent) {
                this._onDidChange.fire();
            }
        }
    }
}

export { ElementSizeObserver };
