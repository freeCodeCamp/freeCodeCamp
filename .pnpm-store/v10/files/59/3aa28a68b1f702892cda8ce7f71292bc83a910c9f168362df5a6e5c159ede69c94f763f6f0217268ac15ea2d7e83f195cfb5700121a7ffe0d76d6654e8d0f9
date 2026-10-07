import '../colorPicker.css';
import { Disposable, MutableDisposable } from '../../../../../base/common/lifecycle.js';
import { IInstantiationService } from '../../../../../platform/instantiation/common/instantiation.js';
import { EditorHoverStatusBar } from '../../../hover/browser/contentHoverStatusBar.js';
import { IKeybindingService } from '../../../../../platform/keybinding/common/keybinding.js';
import { Emitter } from '../../../../../base/common/event.js';
import { ILanguageFeaturesService } from '../../../../common/services/languageFeatures.js';
import { DefaultDocumentColorProvider } from '../defaultDocumentColorProvider.js';
import { IEditorWorkerService } from '../../../../common/services/editorWorker.js';
import { StandaloneColorPickerParticipant } from './standaloneColorPickerParticipant.js';
import { trackFocus } from '../../../../../base/browser/dom.js';
import { IHoverService } from '../../../../../platform/hover/browser/hover.js';

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
var StandaloneColorPickerWidget_1;
class StandaloneColorPickerResult {
    // The color picker result consists of: an array of color results and a boolean indicating if the color was found in the editor
    constructor(value, foundInEditor) {
        this.value = value;
        this.foundInEditor = foundInEditor;
    }
}
const PADDING = 8;
const CLOSE_BUTTON_WIDTH = 22;
let StandaloneColorPickerWidget = class StandaloneColorPickerWidget extends Disposable {
    static { StandaloneColorPickerWidget_1 = this; }
    static { this.ID = 'editor.contrib.standaloneColorPickerWidget'; }
    constructor(_editor, _standaloneColorPickerVisible, _standaloneColorPickerFocused, _instantiationService, _keybindingService, _languageFeaturesService, _editorWorkerService, _hoverService) {
        super();
        this._editor = _editor;
        this._standaloneColorPickerVisible = _standaloneColorPickerVisible;
        this._standaloneColorPickerFocused = _standaloneColorPickerFocused;
        this._keybindingService = _keybindingService;
        this._languageFeaturesService = _languageFeaturesService;
        this._editorWorkerService = _editorWorkerService;
        this._hoverService = _hoverService;
        this.allowEditorOverflow = true;
        this._position = undefined;
        this._body = document.createElement('div');
        this._colorHover = null;
        this._selectionSetInEditor = false;
        this._onResult = this._register(new Emitter());
        this.onResult = this._onResult.event;
        this._renderedHoverParts = this._register(new MutableDisposable());
        this._renderedStatusBar = this._register(new MutableDisposable());
        this._standaloneColorPickerVisible.set(true);
        this._standaloneColorPickerParticipant = _instantiationService.createInstance(StandaloneColorPickerParticipant, this._editor);
        this._position = this._editor._getViewModel()?.getPrimaryCursorState().modelState.position;
        const editorSelection = this._editor.getSelection();
        const selection = editorSelection ?
            {
                startLineNumber: editorSelection.startLineNumber,
                startColumn: editorSelection.startColumn,
                endLineNumber: editorSelection.endLineNumber,
                endColumn: editorSelection.endColumn
            } : { startLineNumber: 0, endLineNumber: 0, endColumn: 0, startColumn: 0 };
        const focusTracker = this._register(trackFocus(this._body));
        this._register(focusTracker.onDidBlur(_ => {
            this.hide();
        }));
        this._register(focusTracker.onDidFocus(_ => {
            this.focus();
        }));
        // When the cursor position changes, hide the color picker
        this._register(this._editor.onDidChangeCursorPosition(() => {
            // Do not hide the color picker when the cursor changes position due to the keybindings
            if (!this._selectionSetInEditor) {
                this.hide();
            }
            else {
                this._selectionSetInEditor = false;
            }
        }));
        this._register(this._editor.onMouseMove((e) => {
            const classList = e.target.element?.classList;
            if (classList && classList.contains('colorpicker-color-decoration')) {
                this.hide();
            }
        }));
        this._register(this.onResult((result) => {
            this._render(result.value, result.foundInEditor);
        }));
        this._start(selection);
        this._body.style.zIndex = '50';
        this._editor.addContentWidget(this);
    }
    updateEditor() {
        if (this._colorHover) {
            this._standaloneColorPickerParticipant.updateEditorModel(this._colorHover);
        }
    }
    getId() {
        return StandaloneColorPickerWidget_1.ID;
    }
    getDomNode() {
        return this._body;
    }
    getPosition() {
        if (!this._position) {
            return null;
        }
        const positionPreference = this._editor.getOption(69 /* EditorOption.hover */).above;
        return {
            position: this._position,
            secondaryPosition: this._position,
            preference: positionPreference ? [1 /* ContentWidgetPositionPreference.ABOVE */, 2 /* ContentWidgetPositionPreference.BELOW */] : [2 /* ContentWidgetPositionPreference.BELOW */, 1 /* ContentWidgetPositionPreference.ABOVE */],
            positionAffinity: 2 /* PositionAffinity.None */
        };
    }
    hide() {
        this.dispose();
        this._standaloneColorPickerVisible.set(false);
        this._standaloneColorPickerFocused.set(false);
        this._editor.removeContentWidget(this);
        this._editor.focus();
    }
    focus() {
        this._standaloneColorPickerFocused.set(true);
        this._body.focus();
    }
    async _start(selection) {
        const computeAsyncResult = await this._computeAsync(selection);
        if (!computeAsyncResult) {
            return;
        }
        this._onResult.fire(new StandaloneColorPickerResult(computeAsyncResult.result, computeAsyncResult.foundInEditor));
    }
    async _computeAsync(range) {
        if (!this._editor.hasModel()) {
            return null;
        }
        const colorInfo = {
            range: range,
            color: { red: 0, green: 0, blue: 0, alpha: 1 }
        };
        const colorHoverResult = await this._standaloneColorPickerParticipant.createColorHover(colorInfo, new DefaultDocumentColorProvider(this._editorWorkerService), this._languageFeaturesService.colorProvider);
        if (!colorHoverResult) {
            return null;
        }
        return { result: colorHoverResult.colorHover, foundInEditor: colorHoverResult.foundInEditor };
    }
    _render(colorHover, foundInEditor) {
        const fragment = document.createDocumentFragment();
        this._renderedStatusBar.value = this._register(new EditorHoverStatusBar(this._keybindingService, this._hoverService));
        const context = {
            fragment,
            statusBar: this._renderedStatusBar.value,
            onContentsChanged: () => { },
            setMinimumDimensions: () => { },
            hide: () => this.hide(),
            focus: () => this.focus()
        };
        this._colorHover = colorHover;
        this._renderedHoverParts.value = this._standaloneColorPickerParticipant.renderHoverParts(context, [colorHover]);
        if (!this._renderedHoverParts.value) {
            this._renderedStatusBar.clear();
            this._renderedHoverParts.clear();
            return;
        }
        const colorPicker = this._renderedHoverParts.value.colorPicker;
        this._body.classList.add('standalone-colorpicker-body');
        this._body.style.maxHeight = Math.max(this._editor.getLayoutInfo().height / 4, 250) + 'px';
        this._body.style.maxWidth = Math.max(this._editor.getLayoutInfo().width * 0.66, 500) + 'px';
        this._body.tabIndex = 0;
        this._body.appendChild(fragment);
        colorPicker.layout();
        const colorPickerBody = colorPicker.body;
        const saturationBoxWidth = colorPickerBody.saturationBox.domNode.clientWidth;
        const widthOfOriginalColorBox = colorPickerBody.domNode.clientWidth - saturationBoxWidth - CLOSE_BUTTON_WIDTH - PADDING;
        const enterButton = colorPicker.body.enterButton;
        enterButton?.onClicked(() => {
            this.updateEditor();
            this.hide();
        });
        const colorPickerHeader = colorPicker.header;
        const pickedColorNode = colorPickerHeader.pickedColorNode;
        pickedColorNode.style.width = saturationBoxWidth + PADDING + 'px';
        const originalColorNode = colorPickerHeader.originalColorNode;
        originalColorNode.style.width = widthOfOriginalColorBox + 'px';
        const closeButton = colorPicker.header.closeButton;
        closeButton?.onClicked(() => {
            this.hide();
        });
        // When found in the editor, highlight the selection in the editor
        if (foundInEditor) {
            if (enterButton) {
                enterButton.button.textContent = 'Replace';
            }
            this._selectionSetInEditor = true;
            this._editor.setSelection(colorHover.range);
        }
        this._editor.layoutContentWidget(this);
    }
};
StandaloneColorPickerWidget = StandaloneColorPickerWidget_1 = __decorate([
    __param(3, IInstantiationService),
    __param(4, IKeybindingService),
    __param(5, ILanguageFeaturesService),
    __param(6, IEditorWorkerService),
    __param(7, IHoverService)
], StandaloneColorPickerWidget);

export { StandaloneColorPickerWidget };
