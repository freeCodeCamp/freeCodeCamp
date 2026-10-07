import './colorPicker.css';
import { PixelRatio } from '../../../../base/browser/pixelRatio.js';
import { getWindow, $ as $$1 } from '../../../../base/browser/dom.js';
import { Widget } from '../../../../base/browser/ui/widget.js';
import { ColorPickerBody } from './colorPickerParts/colorPickerBody.js';
import { ColorPickerHeader } from './colorPickerParts/colorPickerHeader.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const $ = $$1;
class ColorPickerWidget extends Widget {
    constructor(container, model, pixelRatio, themeService, type) {
        super();
        this.model = model;
        this.pixelRatio = pixelRatio;
        this._register(PixelRatio.getInstance(getWindow(container)).onDidChange(() => this.layout()));
        this._domNode = $('.colorpicker-widget');
        container.appendChild(this._domNode);
        this.header = this._register(new ColorPickerHeader(this._domNode, this.model, themeService, type));
        this.body = this._register(new ColorPickerBody(this._domNode, this.model, this.pixelRatio, type));
    }
    layout() {
        this.body.layout();
    }
    get domNode() {
        return this._domNode;
    }
}

export { ColorPickerWidget };
