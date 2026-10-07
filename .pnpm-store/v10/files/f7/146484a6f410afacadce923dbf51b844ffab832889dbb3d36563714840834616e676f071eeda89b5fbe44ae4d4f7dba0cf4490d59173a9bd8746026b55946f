import { AsyncIterableProducer } from '../../../../../base/common/async.js';
import { Range } from '../../../../common/core/range.js';
import { ColorDetector } from '../colorDetector.js';
import { ColorPickerWidget } from '../colorPickerWidget.js';
import { RenderedHoverParts } from '../../../hover/browser/hoverTypes.js';
import { IThemeService } from '../../../../../platform/theme/common/themeService.js';
import { localize } from '../../../../../nls.js';
import { createColorHover, updateColorPresentations, updateEditorModel } from '../colorPickerParticipantUtils.js';
import { Dimension } from '../../../../../base/browser/dom.js';
import { DisposableStore } from '../../../../../base/common/lifecycle.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
class ColorHover {
    constructor(owner, range, model, provider) {
        this.owner = owner;
        this.range = range;
        this.model = model;
        this.provider = provider;
        /**
         * Force the hover to always be rendered at this specific range,
         * even in the case of multiple hover parts.
         */
        this.forceShowAtRange = true;
    }
    isValidForHoverAnchor(anchor) {
        return (anchor.type === 1 /* HoverAnchorType.Range */
            && this.range.startColumn <= anchor.range.startColumn
            && this.range.endColumn >= anchor.range.endColumn);
    }
    static fromBaseColor(owner, color) {
        return new ColorHover(owner, color.range, color.model, color.provider);
    }
}
let HoverColorPickerParticipant = class HoverColorPickerParticipant {
    constructor(_editor, _themeService) {
        this._editor = _editor;
        this._themeService = _themeService;
        this.hoverOrdinal = 2;
    }
    computeSync(_anchor, _lineDecorations, source) {
        return [];
    }
    computeAsync(anchor, lineDecorations, source, token) {
        return AsyncIterableProducer.fromPromise(this._computeAsync(anchor, lineDecorations, source));
    }
    async _computeAsync(_anchor, lineDecorations, source) {
        if (!this._editor.hasModel()) {
            return [];
        }
        if (!this._isValidRequest(source)) {
            return [];
        }
        const colorDetector = ColorDetector.get(this._editor);
        if (!colorDetector) {
            return [];
        }
        for (const d of lineDecorations) {
            if (!colorDetector.isColorDecoration(d)) {
                continue;
            }
            const colorData = colorDetector.getColorData(d.range.getStartPosition());
            if (colorData) {
                const colorHover = ColorHover.fromBaseColor(this, await createColorHover(this._editor.getModel(), colorData.colorInfo, colorData.provider));
                return [colorHover];
            }
        }
        return [];
    }
    _isValidRequest(source) {
        const decoratorActivatedOn = this._editor.getOption(168 /* EditorOption.colorDecoratorsActivatedOn */);
        switch (source) {
            case 0 /* HoverStartSource.Mouse */:
                return decoratorActivatedOn === 'hover' || decoratorActivatedOn === 'clickAndHover';
            case 1 /* HoverStartSource.Click */:
                return decoratorActivatedOn === 'click' || decoratorActivatedOn === 'clickAndHover';
            case 2 /* HoverStartSource.Keyboard */:
                return true;
        }
    }
    renderHoverParts(context, hoverParts) {
        const editor = this._editor;
        if (hoverParts.length === 0 || !editor.hasModel()) {
            return new RenderedHoverParts([]);
        }
        const minimumHeight = editor.getOption(75 /* EditorOption.lineHeight */) + 8;
        context.setMinimumDimensions(new Dimension(302, minimumHeight));
        const disposables = new DisposableStore();
        const colorHover = hoverParts[0];
        const editorModel = editor.getModel();
        const model = colorHover.model;
        this._colorPicker = disposables.add(new ColorPickerWidget(context.fragment, model, editor.getOption(163 /* EditorOption.pixelRatio */), this._themeService, "hover" /* ColorPickerWidgetType.Hover */));
        let editorUpdatedByColorPicker = false;
        let range = new Range(colorHover.range.startLineNumber, colorHover.range.startColumn, colorHover.range.endLineNumber, colorHover.range.endColumn);
        disposables.add(model.onColorFlushed(async (color) => {
            await updateColorPresentations(editorModel, model, color, range, colorHover);
            editorUpdatedByColorPicker = true;
            range = updateEditorModel(editor, range, model);
        }));
        disposables.add(model.onDidChangeColor((color) => {
            updateColorPresentations(editorModel, model, color, range, colorHover);
        }));
        disposables.add(editor.onDidChangeModelContent((e) => {
            if (editorUpdatedByColorPicker) {
                editorUpdatedByColorPicker = false;
            }
            else {
                context.hide();
                editor.focus();
            }
        }));
        const renderedHoverPart = {
            hoverPart: ColorHover.fromBaseColor(this, colorHover),
            hoverElement: this._colorPicker.domNode,
            dispose() { disposables.dispose(); }
        };
        return new RenderedHoverParts([renderedHoverPart]);
    }
    getAccessibleContent(hoverPart) {
        return localize(887, 'There is a color picker here.');
    }
    handleResize() {
        this._colorPicker?.layout();
    }
    handleContentsChanged() {
        this._colorPicker?.layout();
    }
    handleHide() {
        this._colorPicker?.dispose();
        this._colorPicker = undefined;
    }
    isColorPickerVisible() {
        return !!this._colorPicker;
    }
};
HoverColorPickerParticipant = __decorate([
    __param(1, IThemeService)
], HoverColorPickerParticipant);

export { ColorHover, HoverColorPickerParticipant };
