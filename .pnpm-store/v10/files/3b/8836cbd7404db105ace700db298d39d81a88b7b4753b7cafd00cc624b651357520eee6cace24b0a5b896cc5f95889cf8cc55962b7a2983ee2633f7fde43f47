import '../colorPicker.css';
import { $ as $$1, append, addDisposableListener, EventType } from '../../../../../base/browser/dom.js';
import { Color } from '../../../../../base/common/color.js';
import { Disposable } from '../../../../../base/common/lifecycle.js';
import { localize } from '../../../../../nls.js';
import '../../../../../platform/theme/common/colorUtils.js';
import '../../../../../platform/theme/common/colors/baseColors.js';
import '../../../../../platform/theme/common/colors/chartsColors.js';
import { editorHoverBackground } from '../../../../../platform/theme/common/colors/editorColors.js';
import '../../../../../platform/theme/common/colors/inputColors.js';
import '../../../../../platform/theme/common/colors/listColors.js';
import '../../../../../platform/theme/common/colors/menuColors.js';
import '../../../../../platform/theme/common/colors/minimapColors.js';
import '../../../../../platform/theme/common/colors/miscColors.js';
import '../../../../../platform/theme/common/colors/quickpickColors.js';
import '../../../../../platform/theme/common/colors/searchColors.js';
import { CloseButton } from './colorPickerCloseButton.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const $ = $$1;
class ColorPickerHeader extends Disposable {
    constructor(container, model, themeService, type) {
        super();
        this.model = model;
        this.type = type;
        this._closeButton = null;
        this._domNode = $('.colorpicker-header');
        append(container, this._domNode);
        this._pickedColorNode = append(this._domNode, $('.picked-color'));
        append(this._pickedColorNode, $('span.codicon.codicon-color-mode'));
        this._pickedColorPresentation = append(this._pickedColorNode, document.createElement('span'));
        this._pickedColorPresentation.classList.add('picked-color-presentation');
        const tooltip = localize(886, "Click to toggle color options (rgb/hsl/hex)");
        this._pickedColorNode.setAttribute('title', tooltip);
        this._originalColorNode = append(this._domNode, $('.original-color'));
        this._originalColorNode.style.backgroundColor = Color.Format.CSS.format(this.model.originalColor) || '';
        this.backgroundColor = themeService.getColorTheme().getColor(editorHoverBackground) || Color.white;
        this._register(themeService.onDidColorThemeChange(theme => {
            this.backgroundColor = theme.getColor(editorHoverBackground) || Color.white;
        }));
        this._register(addDisposableListener(this._pickedColorNode, EventType.CLICK, () => this.model.selectNextColorPresentation()));
        this._register(addDisposableListener(this._originalColorNode, EventType.CLICK, () => {
            this.model.color = this.model.originalColor;
            this.model.flushColor();
        }));
        this._register(model.onDidChangeColor(this.onDidChangeColor, this));
        this._register(model.onDidChangePresentation(this.onDidChangePresentation, this));
        this._pickedColorNode.style.backgroundColor = Color.Format.CSS.format(model.color) || '';
        this._pickedColorNode.classList.toggle('light', model.color.rgba.a < 0.5 ? this.backgroundColor.isLighter() : model.color.isLighter());
        this.onDidChangeColor(this.model.color);
        // When the color picker widget is a standalone color picker widget, then add a close button
        if (this.type === "standalone" /* ColorPickerWidgetType.Standalone */) {
            this._domNode.classList.add('standalone-colorpicker');
            this._closeButton = this._register(new CloseButton(this._domNode));
        }
    }
    get closeButton() {
        return this._closeButton;
    }
    get pickedColorNode() {
        return this._pickedColorNode;
    }
    get originalColorNode() {
        return this._originalColorNode;
    }
    onDidChangeColor(color) {
        this._pickedColorNode.style.backgroundColor = Color.Format.CSS.format(color) || '';
        this._pickedColorNode.classList.toggle('light', color.rgba.a < 0.5 ? this.backgroundColor.isLighter() : color.isLighter());
        this.onDidChangePresentation();
    }
    onDidChangePresentation() {
        this._pickedColorPresentation.textContent = this.model.presentation ? this.model.presentation.label : '';
    }
}

export { ColorPickerHeader };
