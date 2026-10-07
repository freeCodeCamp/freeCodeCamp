import { Disposable, MutableDisposable } from '../../../../../base/common/lifecycle.js';
import { localize } from '../../../../../nls.js';
import { IAccessibilityService } from '../../../../../platform/accessibility/common/accessibility.js';
import { IKeybindingService } from '../../../../../platform/keybinding/common/keybinding.js';
import { Selection } from '../../../../common/core/selection.js';
import { applyFontInfo } from '../../../config/domFontInfo.js';
import { ariaLabelForScreenReaderContent } from '../screenReaderUtils.js';
import { RichScreenReaderContent } from './screenReaderContentRich.js';
import { SimpleScreenReaderContent } from './screenReaderContentSimple.js';

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
let ScreenReaderSupport = class ScreenReaderSupport extends Disposable {
    constructor(_domNode, _context, _viewController, _keybindingService, _accessibilityService) {
        super();
        this._domNode = _domNode;
        this._context = _context;
        this._viewController = _viewController;
        this._keybindingService = _keybindingService;
        this._accessibilityService = _accessibilityService;
        // Configuration values
        this._contentLeft = 1;
        this._contentWidth = 1;
        this._contentHeight = 1;
        this._divWidth = 1;
        this._primarySelection = new Selection(1, 1, 1, 1);
        this._primaryCursorVisibleRange = null;
        this._state = this._register(new MutableDisposable());
        this._instantiateScreenReaderContent();
        this._updateConfigurationSettings();
        this._updateDomAttributes();
    }
    onWillPaste() {
        this._state.value?.onWillPaste();
    }
    onWillCut() {
        this._state.value?.onWillCut();
    }
    handleFocusChange(newFocusValue) {
        this._state.value?.onFocusChange(newFocusValue);
        this.writeScreenReaderContent();
    }
    onConfigurationChanged(e) {
        this._instantiateScreenReaderContent();
        this._updateConfigurationSettings();
        this._updateDomAttributes();
        if (e.hasChanged(2 /* EditorOption.accessibilitySupport */)) {
            this.writeScreenReaderContent();
        }
    }
    _instantiateScreenReaderContent() {
        const renderRichContent = this._context.configuration.options.get(107 /* EditorOption.renderRichScreenReaderContent */);
        if (this._renderRichContent !== renderRichContent) {
            this._renderRichContent = renderRichContent;
            this._state.value = this._createScreenReaderContent(renderRichContent);
        }
    }
    _createScreenReaderContent(renderRichContent) {
        if (renderRichContent) {
            return new RichScreenReaderContent(this._domNode, this._context, this._viewController, this._accessibilityService);
        }
        else {
            return new SimpleScreenReaderContent(this._domNode, this._context, this._viewController, this._accessibilityService);
        }
    }
    _updateConfigurationSettings() {
        const options = this._context.configuration.options;
        const layoutInfo = options.get(165 /* EditorOption.layoutInfo */);
        const wrappingColumn = layoutInfo.wrappingColumn;
        this._contentLeft = layoutInfo.contentLeft;
        this._contentWidth = layoutInfo.contentWidth;
        this._contentHeight = layoutInfo.height;
        this._fontInfo = options.get(59 /* EditorOption.fontInfo */);
        this._divWidth = Math.round(wrappingColumn * this._fontInfo.typicalHalfwidthCharacterWidth);
        this._state.value?.onConfigurationChanged(options);
    }
    _updateDomAttributes() {
        const options = this._context.configuration.options;
        this._domNode.domNode.setAttribute('role', 'textbox');
        this._domNode.domNode.setAttribute('aria-required', options.get(9 /* EditorOption.ariaRequired */) ? 'true' : 'false');
        this._domNode.domNode.setAttribute('aria-multiline', 'true');
        this._domNode.domNode.setAttribute('aria-autocomplete', options.get(104 /* EditorOption.readOnly */) ? 'none' : 'both');
        this._domNode.domNode.setAttribute('aria-roledescription', localize(60, "editor"));
        this._domNode.domNode.setAttribute('aria-label', ariaLabelForScreenReaderContent(options, this._keybindingService));
        const tabSize = this._context.viewModel.model.getOptions().tabSize;
        const spaceWidth = options.get(59 /* EditorOption.fontInfo */).spaceWidth;
        this._domNode.domNode.style.tabSize = `${tabSize * spaceWidth}px`;
        const wordWrapOverride2 = options.get(154 /* EditorOption.wordWrapOverride2 */);
        const wordWrapOverride1 = (wordWrapOverride2 === 'inherit' ? options.get(153 /* EditorOption.wordWrapOverride1 */) : wordWrapOverride2);
        const wordWrap = (wordWrapOverride1 === 'inherit' ? options.get(149 /* EditorOption.wordWrap */) : wordWrapOverride1);
        this._domNode.domNode.style.textWrap = wordWrap === 'off' ? 'nowrap' : 'wrap';
    }
    onCursorStateChanged(e) {
        this._primarySelection = e.selections[0] ?? new Selection(1, 1, 1, 1);
    }
    prepareRender(ctx) {
        this.writeScreenReaderContent();
        this._primaryCursorVisibleRange = ctx.visibleRangeForPosition(this._primarySelection.getPosition());
    }
    render(ctx) {
        if (!this._primaryCursorVisibleRange) {
            // The primary cursor is outside the viewport => place textarea to the top left
            this._renderAtTopLeft();
            return;
        }
        const editorScrollLeft = this._context.viewLayout.getCurrentScrollLeft();
        const left = this._contentLeft + this._primaryCursorVisibleRange.left - editorScrollLeft;
        if (left < this._contentLeft || left > this._contentLeft + this._contentWidth) {
            // cursor is outside the viewport
            this._renderAtTopLeft();
            return;
        }
        const editorScrollTop = this._context.viewLayout.getCurrentScrollTop();
        const positionLineNumber = this._primarySelection.positionLineNumber;
        const top = this._context.viewLayout.getVerticalOffsetForLineNumber(positionLineNumber) - editorScrollTop;
        if (top < 0 || top > this._contentHeight) {
            // cursor is outside the viewport
            this._renderAtTopLeft();
            return;
        }
        // The <div> where we render the screen reader content does not support variable line heights,
        // all the lines must have the same height. We use the line height of the cursor position as the
        // line height for all lines.
        const lineHeight = this._context.viewLayout.getLineHeightForLineNumber(positionLineNumber);
        this._doRender(top, this._contentLeft, this._divWidth, lineHeight);
        this._state.value?.updateScrollTop(this._primarySelection);
    }
    _renderAtTopLeft() {
        this._doRender(0, 0, this._contentWidth, 1);
    }
    _doRender(top, left, width, height) {
        // For correct alignment of the screen reader content, we need to apply the correct font
        applyFontInfo(this._domNode, this._fontInfo);
        this._domNode.setTop(top);
        this._domNode.setLeft(left);
        this._domNode.setWidth(width);
        this._domNode.setHeight(height);
        this._domNode.setLineHeight(height);
    }
    setAriaOptions(options) {
        if (options.activeDescendant) {
            this._domNode.setAttribute('aria-haspopup', 'true');
            this._domNode.setAttribute('aria-autocomplete', 'list');
            this._domNode.setAttribute('aria-activedescendant', options.activeDescendant);
        }
        else {
            this._domNode.setAttribute('aria-haspopup', 'false');
            this._domNode.setAttribute('aria-autocomplete', 'both');
            this._domNode.removeAttribute('aria-activedescendant');
        }
        if (options.role) {
            this._domNode.setAttribute('role', options.role);
        }
    }
    writeScreenReaderContent() {
        this._state.value?.updateScreenReaderContent(this._primarySelection);
    }
};
ScreenReaderSupport = __decorate([
    __param(3, IKeybindingService),
    __param(4, IAccessibilityService)
], ScreenReaderSupport);

export { ScreenReaderSupport };
