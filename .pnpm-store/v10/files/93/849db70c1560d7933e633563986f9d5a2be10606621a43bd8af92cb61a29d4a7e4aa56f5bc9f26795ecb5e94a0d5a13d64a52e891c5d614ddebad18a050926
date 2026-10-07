import { isHTMLElement } from '../../../../../base/browser/dom.js';
import { createTrustedTypesPolicy } from '../../../../../base/browser/trustedTypes.js';
import { IConfigurationService } from '../../../../../platform/configuration/common/configuration.js';
import { createBareFontInfoFromRawSettings } from '../../../../common/config/fontInfoFromSettings.js';
import { ILanguageService } from '../../../../common/languages/language.js';
import { PLAINTEXT_LANGUAGE_ID } from '../../../../common/languages/modesRegistry.js';
import { tokenizeToString } from '../../../../common/languages/textToHtmlTokenizer.js';
import { applyFontInfo } from '../../../config/domFontInfo.js';
import { isCodeEditor } from '../../../editorBrowser.js';
import './renderedMarkdown.css';

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
var EditorMarkdownCodeBlockRenderer_1;
/**
 * Renders markdown code blocks using the editor's tokenization and font settings.
 */
let EditorMarkdownCodeBlockRenderer = class EditorMarkdownCodeBlockRenderer {
    static { EditorMarkdownCodeBlockRenderer_1 = this; }
    static { this._ttpTokenizer = createTrustedTypesPolicy('tokenizeToString', {
        createHTML(html) {
            return html;
        }
    }); }
    constructor(_configurationService, _languageService) {
        this._configurationService = _configurationService;
        this._languageService = _languageService;
    }
    async renderCodeBlock(languageAlias, value, options) {
        const editor = isCodeEditor(options.context) ? options.context : undefined;
        // In markdown, it is possible that we stumble upon language aliases (e.g.js instead of javascript).
        // it is possible no alias is given in which case we fall back to the current editor lang
        let languageId;
        if (languageAlias) {
            languageId = this._languageService.getLanguageIdByLanguageName(languageAlias);
        }
        else if (editor) {
            languageId = editor.getModel()?.getLanguageId();
        }
        if (!languageId) {
            languageId = PLAINTEXT_LANGUAGE_ID;
        }
        const html = await tokenizeToString(this._languageService, value, languageId);
        const content = EditorMarkdownCodeBlockRenderer_1._ttpTokenizer ? EditorMarkdownCodeBlockRenderer_1._ttpTokenizer.createHTML(html) ?? html : html;
        const root = document.createElement('span');
        root.innerHTML = content;
        // eslint-disable-next-line no-restricted-syntax
        const codeElement = root.querySelector('.monaco-tokenized-source');
        if (!isHTMLElement(codeElement)) {
            return document.createElement('span');
        }
        applyFontInfo(codeElement, this.getFontInfo(editor));
        return root;
    }
    getFontInfo(editor) {
        // Use editor's font if we have one
        if (editor) {
            return editor.getOption(59 /* EditorOption.fontInfo */);
        }
        else {
            // Otherwise use the global font settings.
            // Pass in fake pixel ratio of 1 since we only need the font info to apply font family
            return createBareFontInfoFromRawSettings({
                fontFamily: this._configurationService.getValue('editor').fontFamily
            }, 1);
        }
    }
};
EditorMarkdownCodeBlockRenderer = EditorMarkdownCodeBlockRenderer_1 = __decorate([
    __param(0, IConfigurationService),
    __param(1, ILanguageService)
], EditorMarkdownCodeBlockRenderer);

export { EditorMarkdownCodeBlockRenderer };
