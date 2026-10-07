import { Dimension } from '../../dom.js';
import { Sash, OrthogonalEdge } from '../sash/sash.js';
import { Emitter, Event } from '../../../common/event.js';
import { DisposableStore } from '../../../common/lifecycle.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ResizableHTMLElement {
    get onDidWillResize() { return this._onDidWillResize.event; }
    get onDidResize() { return this._onDidResize.event; }
    constructor() {
        this._onDidWillResize = new Emitter();
        this._onDidResize = new Emitter();
        this._sashListener = new DisposableStore();
        this._size = new Dimension(0, 0);
        this._minSize = new Dimension(0, 0);
        this._maxSize = new Dimension(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
        this.domNode = document.createElement('div');
        this._eastSash = new Sash(this.domNode, { getVerticalSashLeft: () => this._size.width }, { orientation: 0 /* Orientation.VERTICAL */ });
        this._westSash = new Sash(this.domNode, { getVerticalSashLeft: () => 0 }, { orientation: 0 /* Orientation.VERTICAL */ });
        this._northSash = new Sash(this.domNode, { getHorizontalSashTop: () => 0 }, { orientation: 1 /* Orientation.HORIZONTAL */, orthogonalEdge: OrthogonalEdge.North });
        this._southSash = new Sash(this.domNode, { getHorizontalSashTop: () => this._size.height }, { orientation: 1 /* Orientation.HORIZONTAL */, orthogonalEdge: OrthogonalEdge.South });
        this._northSash.orthogonalStartSash = this._westSash;
        this._northSash.orthogonalEndSash = this._eastSash;
        this._southSash.orthogonalStartSash = this._westSash;
        this._southSash.orthogonalEndSash = this._eastSash;
        let currentSize;
        let deltaY = 0;
        let deltaX = 0;
        this._sashListener.add(Event.any(this._northSash.onDidStart, this._eastSash.onDidStart, this._southSash.onDidStart, this._westSash.onDidStart)(() => {
            if (currentSize === undefined) {
                this._onDidWillResize.fire();
                currentSize = this._size;
                deltaY = 0;
                deltaX = 0;
            }
        }));
        this._sashListener.add(Event.any(this._northSash.onDidEnd, this._eastSash.onDidEnd, this._southSash.onDidEnd, this._westSash.onDidEnd)(() => {
            if (currentSize !== undefined) {
                currentSize = undefined;
                deltaY = 0;
                deltaX = 0;
                this._onDidResize.fire({ dimension: this._size, done: true });
            }
        }));
        this._sashListener.add(this._eastSash.onDidChange(e => {
            if (currentSize) {
                deltaX = e.currentX - e.startX;
                this.layout(currentSize.height + deltaY, currentSize.width + deltaX);
                this._onDidResize.fire({ dimension: this._size, done: false, east: true });
            }
        }));
        this._sashListener.add(this._westSash.onDidChange(e => {
            if (currentSize) {
                deltaX = -(e.currentX - e.startX);
                this.layout(currentSize.height + deltaY, currentSize.width + deltaX);
                this._onDidResize.fire({ dimension: this._size, done: false, west: true });
            }
        }));
        this._sashListener.add(this._northSash.onDidChange(e => {
            if (currentSize) {
                deltaY = -(e.currentY - e.startY);
                this.layout(currentSize.height + deltaY, currentSize.width + deltaX);
                this._onDidResize.fire({ dimension: this._size, done: false, north: true });
            }
        }));
        this._sashListener.add(this._southSash.onDidChange(e => {
            if (currentSize) {
                deltaY = e.currentY - e.startY;
                this.layout(currentSize.height + deltaY, currentSize.width + deltaX);
                this._onDidResize.fire({ dimension: this._size, done: false, south: true });
            }
        }));
        this._sashListener.add(Event.any(this._eastSash.onDidReset, this._westSash.onDidReset)(e => {
            if (this._preferredSize) {
                this.layout(this._size.height, this._preferredSize.width);
                this._onDidResize.fire({ dimension: this._size, done: true });
            }
        }));
        this._sashListener.add(Event.any(this._northSash.onDidReset, this._southSash.onDidReset)(e => {
            if (this._preferredSize) {
                this.layout(this._preferredSize.height, this._size.width);
                this._onDidResize.fire({ dimension: this._size, done: true });
            }
        }));
    }
    dispose() {
        this._northSash.dispose();
        this._southSash.dispose();
        this._eastSash.dispose();
        this._westSash.dispose();
        this._sashListener.dispose();
        this._onDidResize.dispose();
        this._onDidWillResize.dispose();
        this.domNode.remove();
    }
    enableSashes(north, east, south, west) {
        this._northSash.state = north ? 3 /* SashState.Enabled */ : 0 /* SashState.Disabled */;
        this._eastSash.state = east ? 3 /* SashState.Enabled */ : 0 /* SashState.Disabled */;
        this._southSash.state = south ? 3 /* SashState.Enabled */ : 0 /* SashState.Disabled */;
        this._westSash.state = west ? 3 /* SashState.Enabled */ : 0 /* SashState.Disabled */;
    }
    layout(height = this.size.height, width = this.size.width) {
        const { height: minHeight, width: minWidth } = this._minSize;
        const { height: maxHeight, width: maxWidth } = this._maxSize;
        height = Math.max(minHeight, Math.min(maxHeight, height));
        width = Math.max(minWidth, Math.min(maxWidth, width));
        const newSize = new Dimension(width, height);
        if (!Dimension.equals(newSize, this._size)) {
            this.domNode.style.height = height + 'px';
            this.domNode.style.width = width + 'px';
            this._size = newSize;
            this._northSash.layout();
            this._eastSash.layout();
            this._southSash.layout();
            this._westSash.layout();
        }
    }
    clearSashHoverState() {
        this._eastSash.clearSashHoverState();
        this._westSash.clearSashHoverState();
        this._northSash.clearSashHoverState();
        this._southSash.clearSashHoverState();
    }
    get size() {
        return this._size;
    }
    set maxSize(value) {
        this._maxSize = value;
    }
    get maxSize() {
        return this._maxSize;
    }
    set minSize(value) {
        this._minSize = value;
    }
    get minSize() {
        return this._minSize;
    }
    set preferredSize(value) {
        this._preferredSize = value;
    }
    get preferredSize() {
        return this._preferredSize;
    }
}

export { ResizableHTMLElement };
