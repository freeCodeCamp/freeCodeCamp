import { createTrustedTypesPolicy } from '../../../base/browser/trustedTypes.js';
import { startsWithUTF8BOM, splitLines } from '../../../base/common/strings.js';
import { TokenizationRegistry } from '../../common/languages.js';
import { LineTokens } from '../../common/tokens/lineTokens.js';
import { renderViewLine2, RenderLineInput } from '../../common/viewLayout/viewLineRenderer.js';
import { ViewLineRenderingData } from '../../common/viewModel.js';
import { MonarchTokenizer } from '../common/monarch/monarchLexer.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const ttPolicy = createTrustedTypesPolicy('standaloneColorizer', { createHTML: value => value });
class Colorizer {
    static colorizeElement(themeService, languageService, domNode, options) {
        options = options || {};
        const theme = options.theme || 'vs';
        const mimeType = options.mimeType || domNode.getAttribute('lang') || domNode.getAttribute('data-lang');
        if (!mimeType) {
            console.error('Mode not detected');
            return Promise.resolve();
        }
        const languageId = languageService.getLanguageIdByMimeType(mimeType) || mimeType;
        themeService.setTheme(theme);
        const text = domNode.firstChild ? domNode.firstChild.nodeValue : '';
        domNode.className += ' ' + theme;
        const render = (str) => {
            const trustedhtml = ttPolicy?.createHTML(str) ?? str;
            domNode.innerHTML = trustedhtml;
        };
        return this.colorize(languageService, text || '', languageId, options).then(render, (err) => console.error(err));
    }
    static async colorize(languageService, text, languageId, options) {
        const languageIdCodec = languageService.languageIdCodec;
        let tabSize = 4;
        if (options && typeof options.tabSize === 'number') {
            tabSize = options.tabSize;
        }
        if (startsWithUTF8BOM(text)) {
            text = text.substr(1);
        }
        const lines = splitLines(text);
        if (!languageService.isRegisteredLanguageId(languageId)) {
            return _fakeColorize(lines, tabSize, languageIdCodec);
        }
        const tokenizationSupport = await TokenizationRegistry.getOrCreate(languageId);
        if (tokenizationSupport) {
            return _colorize(lines, tabSize, tokenizationSupport, languageIdCodec);
        }
        return _fakeColorize(lines, tabSize, languageIdCodec);
    }
    static colorizeLine(line, mightContainNonBasicASCII, mightContainRTL, tokens, tabSize = 4) {
        const isBasicASCII = ViewLineRenderingData.isBasicASCII(line, mightContainNonBasicASCII);
        const containsRTL = ViewLineRenderingData.containsRTL(line, isBasicASCII, mightContainRTL);
        const renderResult = renderViewLine2(new RenderLineInput(false, true, line, false, isBasicASCII, containsRTL, 0, tokens, [], tabSize, 0, 0, 0, 0, -1, 'none', false, false, null, null, 0));
        return renderResult.html;
    }
    static colorizeModelLine(model, lineNumber, tabSize = 4) {
        const content = model.getLineContent(lineNumber);
        model.tokenization.forceTokenization(lineNumber);
        const tokens = model.tokenization.getLineTokens(lineNumber);
        const inflatedTokens = tokens.inflate();
        return this.colorizeLine(content, model.mightContainNonBasicASCII(), model.mightContainRTL(), inflatedTokens, tabSize);
    }
}
function _colorize(lines, tabSize, tokenizationSupport, languageIdCodec) {
    return new Promise((c, e) => {
        const execute = () => {
            const result = _actualColorize(lines, tabSize, tokenizationSupport, languageIdCodec);
            if (tokenizationSupport instanceof MonarchTokenizer) {
                const status = tokenizationSupport.getLoadStatus();
                if (status.loaded === false) {
                    status.promise.then(execute, e);
                    return;
                }
            }
            c(result);
        };
        execute();
    });
}
function _fakeColorize(lines, tabSize, languageIdCodec) {
    let html = [];
    const defaultMetadata = ((0 /* FontStyle.None */ << 11 /* MetadataConsts.FONT_STYLE_OFFSET */)
        | (1 /* ColorId.DefaultForeground */ << 15 /* MetadataConsts.FOREGROUND_OFFSET */)
        | (2 /* ColorId.DefaultBackground */ << 24 /* MetadataConsts.BACKGROUND_OFFSET */)) >>> 0;
    const tokens = new Uint32Array(2);
    tokens[0] = 0;
    tokens[1] = defaultMetadata;
    for (let i = 0, length = lines.length; i < length; i++) {
        const line = lines[i];
        tokens[0] = line.length;
        const lineTokens = new LineTokens(tokens, line, languageIdCodec);
        const isBasicASCII = ViewLineRenderingData.isBasicASCII(line, /* check for basic ASCII */ true);
        const containsRTL = ViewLineRenderingData.containsRTL(line, isBasicASCII, /* check for RTL */ true);
        const renderResult = renderViewLine2(new RenderLineInput(false, true, line, false, isBasicASCII, containsRTL, 0, lineTokens, [], tabSize, 0, 0, 0, 0, -1, 'none', false, false, null, null, 0));
        html = html.concat(renderResult.html);
        html.push('<br/>');
    }
    return html.join('');
}
function _actualColorize(lines, tabSize, tokenizationSupport, languageIdCodec) {
    let html = [];
    let state = tokenizationSupport.getInitialState();
    for (let i = 0, length = lines.length; i < length; i++) {
        const line = lines[i];
        const tokenizeResult = tokenizationSupport.tokenizeEncoded(line, true, state);
        LineTokens.convertToEndOffset(tokenizeResult.tokens, line.length);
        const lineTokens = new LineTokens(tokenizeResult.tokens, line, languageIdCodec);
        const isBasicASCII = ViewLineRenderingData.isBasicASCII(line, /* check for basic ASCII */ true);
        const containsRTL = ViewLineRenderingData.containsRTL(line, isBasicASCII, /* check for RTL */ true);
        const renderResult = renderViewLine2(new RenderLineInput(false, true, line, false, isBasicASCII, containsRTL, 0, lineTokens.inflate(), [], tabSize, 0, 0, 0, 0, -1, 'none', false, false, null, null, 0));
        html = html.concat(renderResult.html);
        html.push('<br/>');
        state = tokenizeResult.endState;
    }
    return html.join('');
}

export { Colorizer };
