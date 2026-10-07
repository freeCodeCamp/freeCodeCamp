import { Disposable } from '../../../../base/common/lifecycle.js';
import { IClipboardService } from '../../../../platform/clipboard/common/clipboardService.js';
import { IHoverService } from '../../../../platform/hover/browser/hover.js';
import { localize } from '../../../../nls.js';
import { Codicon } from '../../../../base/common/codicons.js';
import { SimpleButton } from '../../find/browser/findWidget.js';
import { status } from '../../../../base/browser/ui/aria/aria.js';

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
/**
 * A button that appears in hover parts to copy their content to the clipboard.
 */
let HoverCopyButton = class HoverCopyButton extends Disposable {
    constructor(_container, _getContent, _clipboardService, _hoverService) {
        super();
        this._container = _container;
        this._getContent = _getContent;
        this._clipboardService = _clipboardService;
        this._hoverService = _hoverService;
        this._container.classList.add('hover-row-with-copy');
        this._button = this._register(new SimpleButton({
            label: localize(1128, "Copy"),
            icon: Codicon.copy,
            onTrigger: () => this._copyContent(),
            className: 'hover-copy-button',
        }, this._hoverService));
        this._container.appendChild(this._button.domNode);
    }
    async _copyContent() {
        const content = this._getContent();
        if (content) {
            await this._clipboardService.writeText(content);
            status(localize(1129, "Copied to clipboard"));
        }
    }
};
HoverCopyButton = __decorate([
    __param(2, IClipboardService),
    __param(3, IHoverService)
], HoverCopyButton);

export { HoverCopyButton };
