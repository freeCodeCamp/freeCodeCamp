import { renderMarkdown } from '../../../base/browser/markdownRenderer.js';
import { onUnexpectedError } from '../../../base/common/errors.js';
import { registerSingleton } from '../../instantiation/common/extensions.js';
import { createDecorator } from '../../instantiation/common/instantiation.js';
import { IOpenerService } from '../../opener/common/opener.js';

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
const IMarkdownRendererService = createDecorator('markdownRendererService');
let MarkdownRendererService = class MarkdownRendererService {
    constructor(_openerService) {
        this._openerService = _openerService;
    }
    render(markdown, options, outElement) {
        const resolvedOptions = { ...options };
        if (!resolvedOptions.actionHandler) {
            resolvedOptions.actionHandler = (link, mdStr) => {
                return openLinkFromMarkdown(this._openerService, link, mdStr.isTrusted);
            };
        }
        if (!resolvedOptions.codeBlockRenderer) {
            resolvedOptions.codeBlockRenderer = (alias, value) => {
                return this._defaultCodeBlockRenderer?.renderCodeBlock(alias, value, resolvedOptions ?? {}) ?? Promise.resolve(document.createElement('span'));
            };
        }
        const rendered = renderMarkdown(markdown, resolvedOptions, outElement);
        rendered.element.classList.add('rendered-markdown');
        return rendered;
    }
    setDefaultCodeBlockRenderer(renderer) {
        this._defaultCodeBlockRenderer = renderer;
    }
};
MarkdownRendererService = __decorate([
    __param(0, IOpenerService)
], MarkdownRendererService);
async function openLinkFromMarkdown(openerService, link, isTrusted, skipValidation) {
    try {
        return await openerService.open(link, {
            fromUserGesture: true,
            allowContributedOpeners: true,
            allowCommands: toAllowCommandsOption(isTrusted),
            skipValidation
        });
    }
    catch (e) {
        onUnexpectedError(e);
        return false;
    }
}
function toAllowCommandsOption(isTrusted) {
    if (isTrusted === true) {
        return true; // Allow all commands
    }
    if (isTrusted && Array.isArray(isTrusted.enabledCommands)) {
        return isTrusted.enabledCommands; // Allow subset of commands
    }
    return false; // Block commands
}
registerSingleton(IMarkdownRendererService, MarkdownRendererService, 1 /* InstantiationType.Delayed */);

export { IMarkdownRendererService, MarkdownRendererService, openLinkFromMarkdown };
