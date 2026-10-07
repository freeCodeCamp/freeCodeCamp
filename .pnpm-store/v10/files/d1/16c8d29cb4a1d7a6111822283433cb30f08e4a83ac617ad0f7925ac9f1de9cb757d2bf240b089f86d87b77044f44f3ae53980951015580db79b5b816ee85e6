/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class DomReadingContext {
    get didDomLayout() {
        return this._didDomLayout;
    }
    readClientRect() {
        if (!this._clientRectRead) {
            this._clientRectRead = true;
            const rect = this._domNode.getBoundingClientRect();
            this.markDidDomLayout();
            this._clientRectDeltaLeft = rect.left;
            this._clientRectScale = rect.width / this._domNode.offsetWidth;
        }
    }
    get clientRectDeltaLeft() {
        if (!this._clientRectRead) {
            this.readClientRect();
        }
        return this._clientRectDeltaLeft;
    }
    get clientRectScale() {
        if (!this._clientRectRead) {
            this.readClientRect();
        }
        return this._clientRectScale;
    }
    constructor(_domNode, endNode) {
        this._domNode = _domNode;
        this.endNode = endNode;
        this._didDomLayout = false;
        this._clientRectDeltaLeft = 0;
        this._clientRectScale = 1;
        this._clientRectRead = false;
    }
    markDidDomLayout() {
        this._didDomLayout = true;
    }
}

export { DomReadingContext };
