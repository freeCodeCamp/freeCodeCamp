import './inspectTokens.css';
import { reset, $, append } from '../../../../base/browser/dom.js';
import { Color } from '../../../../base/common/color.js';
import { Disposable } from '../../../../base/common/lifecycle.js';
import { registerEditorContribution, registerEditorAction, EditorAction } from '../../../browser/editorExtensions.js';
import { TokenizationRegistry } from '../../../common/languages.js';
import { TokenMetadata } from '../../../common/encodedTokenAttributes.js';
import { nullTokenizeEncoded, nullTokenize, NullState } from '../../../common/languages/nullTokenize.js';
import { ILanguageService } from '../../../common/languages/language.js';
import { IStandaloneThemeService } from '../../common/standaloneTheme.js';
import { InspectTokensNLS } from '../../../common/standaloneStrings.js';

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
var InspectTokensController_1;
let InspectTokensController = class InspectTokensController extends Disposable {
    static { InspectTokensController_1 = this; }
    static { this.ID = 'editor.contrib.inspectTokens'; }
    static get(editor) {
        return editor.getContribution(InspectTokensController_1.ID);
    }
    constructor(editor, standaloneColorService, languageService) {
        super();
        this._editor = editor;
        this._languageService = languageService;
        this._widget = null;
        this._register(this._editor.onDidChangeModel((e) => this.stop()));
        this._register(this._editor.onDidChangeModelLanguage((e) => this.stop()));
        this._register(TokenizationRegistry.onDidChange((e) => this.stop()));
        this._register(this._editor.onKeyUp((e) => e.keyCode === 9 /* KeyCode.Escape */ && this.stop()));
    }
    dispose() {
        this.stop();
        super.dispose();
    }
    launch() {
        if (this._widget) {
            return;
        }
        if (!this._editor.hasModel()) {
            return;
        }
        this._widget = new InspectTokensWidget(this._editor, this._languageService);
    }
    stop() {
        if (this._widget) {
            this._widget.dispose();
            this._widget = null;
        }
    }
};
InspectTokensController = InspectTokensController_1 = __decorate([
    __param(1, IStandaloneThemeService),
    __param(2, ILanguageService)
], InspectTokensController);
class InspectTokens extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.inspectTokens',
            label: InspectTokensNLS.inspectTokensAction,
            alias: 'Developer: Inspect Tokens',
            precondition: undefined
        });
    }
    run(accessor, editor) {
        const controller = InspectTokensController.get(editor);
        controller?.launch();
    }
}
function renderTokenText(tokenText) {
    let result = '';
    for (let charIndex = 0, len = tokenText.length; charIndex < len; charIndex++) {
        const charCode = tokenText.charCodeAt(charIndex);
        switch (charCode) {
            case 9 /* CharCode.Tab */:
                result += '\u2192'; // &rarr;
                break;
            case 32 /* CharCode.Space */:
                result += '\u00B7'; // &middot;
                break;
            default:
                result += String.fromCharCode(charCode);
        }
    }
    return result;
}
function getSafeTokenizationSupport(languageIdCodec, languageId) {
    const tokenizationSupport = TokenizationRegistry.get(languageId);
    if (tokenizationSupport) {
        return tokenizationSupport;
    }
    const encodedLanguageId = languageIdCodec.encodeLanguageId(languageId);
    return {
        getInitialState: () => NullState,
        tokenize: (line, hasEOL, state) => nullTokenize(languageId, state),
        tokenizeEncoded: (line, hasEOL, state) => nullTokenizeEncoded(encodedLanguageId, state)
    };
}
class InspectTokensWidget extends Disposable {
    static { this._ID = 'editor.contrib.inspectTokensWidget'; }
    constructor(editor, languageService) {
        super();
        // Editor.IContentWidget.allowEditorOverflow
        this.allowEditorOverflow = true;
        this._editor = editor;
        this._languageService = languageService;
        this._model = this._editor.getModel();
        this._domNode = document.createElement('div');
        this._domNode.className = 'tokens-inspect-widget';
        this._tokenizationSupport = getSafeTokenizationSupport(this._languageService.languageIdCodec, this._model.getLanguageId());
        this._compute(this._editor.getPosition());
        this._register(this._editor.onDidChangeCursorPosition((e) => this._compute(this._editor.getPosition())));
        this._editor.addContentWidget(this);
    }
    dispose() {
        this._editor.removeContentWidget(this);
        super.dispose();
    }
    getId() {
        return InspectTokensWidget._ID;
    }
    _compute(position) {
        const data = this._getTokensAtLine(position.lineNumber);
        let token1Index = 0;
        for (let i = data.tokens1.length - 1; i >= 0; i--) {
            const t = data.tokens1[i];
            if (position.column - 1 >= t.offset) {
                token1Index = i;
                break;
            }
        }
        let token2Index = 0;
        for (let i = (data.tokens2.length >>> 1); i >= 0; i--) {
            if (position.column - 1 >= data.tokens2[(i << 1)]) {
                token2Index = i;
                break;
            }
        }
        const lineContent = this._model.getLineContent(position.lineNumber);
        let tokenText = '';
        if (token1Index < data.tokens1.length) {
            const tokenStartIndex = data.tokens1[token1Index].offset;
            const tokenEndIndex = token1Index + 1 < data.tokens1.length ? data.tokens1[token1Index + 1].offset : lineContent.length;
            tokenText = lineContent.substring(tokenStartIndex, tokenEndIndex);
        }
        reset(this._domNode, $('h2.tm-token', undefined, renderTokenText(tokenText), $('span.tm-token-length', undefined, `${tokenText.length} ${tokenText.length === 1 ? 'char' : 'chars'}`)));
        append(this._domNode, $('hr.tokens-inspect-separator', { 'style': 'clear:both' }));
        const metadata = (token2Index << 1) + 1 < data.tokens2.length ? this._decodeMetadata(data.tokens2[(token2Index << 1) + 1]) : null;
        append(this._domNode, $('table.tm-metadata-table', undefined, $('tbody', undefined, $('tr', undefined, $('td.tm-metadata-key', undefined, 'language'), $('td.tm-metadata-value', undefined, `${metadata ? metadata.languageId : '-?-'}`)), $('tr', undefined, $('td.tm-metadata-key', undefined, 'token type'), $('td.tm-metadata-value', undefined, `${metadata ? this._tokenTypeToString(metadata.tokenType) : '-?-'}`)), $('tr', undefined, $('td.tm-metadata-key', undefined, 'font style'), $('td.tm-metadata-value', undefined, `${metadata ? this._fontStyleToString(metadata.fontStyle) : '-?-'}`)), $('tr', undefined, $('td.tm-metadata-key', undefined, 'foreground'), $('td.tm-metadata-value', undefined, `${metadata ? Color.Format.CSS.formatHex(metadata.foreground) : '-?-'}`)), $('tr', undefined, $('td.tm-metadata-key', undefined, 'background'), $('td.tm-metadata-value', undefined, `${metadata ? Color.Format.CSS.formatHex(metadata.background) : '-?-'}`)))));
        append(this._domNode, $('hr.tokens-inspect-separator'));
        if (token1Index < data.tokens1.length) {
            append(this._domNode, $('span.tm-token-type', undefined, data.tokens1[token1Index].type));
        }
        this._editor.layoutContentWidget(this);
    }
    _decodeMetadata(metadata) {
        const colorMap = TokenizationRegistry.getColorMap();
        const languageId = TokenMetadata.getLanguageId(metadata);
        const tokenType = TokenMetadata.getTokenType(metadata);
        const fontStyle = TokenMetadata.getFontStyle(metadata);
        const foreground = TokenMetadata.getForeground(metadata);
        const background = TokenMetadata.getBackground(metadata);
        return {
            languageId: this._languageService.languageIdCodec.decodeLanguageId(languageId),
            tokenType: tokenType,
            fontStyle: fontStyle,
            foreground: colorMap[foreground],
            background: colorMap[background]
        };
    }
    _tokenTypeToString(tokenType) {
        switch (tokenType) {
            case 0 /* StandardTokenType.Other */: return 'Other';
            case 1 /* StandardTokenType.Comment */: return 'Comment';
            case 2 /* StandardTokenType.String */: return 'String';
            case 3 /* StandardTokenType.RegEx */: return 'RegEx';
            default: return '??';
        }
    }
    _fontStyleToString(fontStyle) {
        let r = '';
        if (fontStyle & 1 /* FontStyle.Italic */) {
            r += 'italic ';
        }
        if (fontStyle & 2 /* FontStyle.Bold */) {
            r += 'bold ';
        }
        if (fontStyle & 4 /* FontStyle.Underline */) {
            r += 'underline ';
        }
        if (fontStyle & 8 /* FontStyle.Strikethrough */) {
            r += 'strikethrough ';
        }
        if (r.length === 0) {
            r = '---';
        }
        return r;
    }
    _getTokensAtLine(lineNumber) {
        const stateBeforeLine = this._getStateBeforeLine(lineNumber);
        const tokenizationResult1 = this._tokenizationSupport.tokenize(this._model.getLineContent(lineNumber), true, stateBeforeLine);
        const tokenizationResult2 = this._tokenizationSupport.tokenizeEncoded(this._model.getLineContent(lineNumber), true, stateBeforeLine);
        return {
            startState: stateBeforeLine,
            tokens1: tokenizationResult1.tokens,
            tokens2: tokenizationResult2.tokens,
            endState: tokenizationResult1.endState
        };
    }
    _getStateBeforeLine(lineNumber) {
        let state = this._tokenizationSupport.getInitialState();
        for (let i = 1; i < lineNumber; i++) {
            const tokenizationResult = this._tokenizationSupport.tokenize(this._model.getLineContent(i), true, state);
            state = tokenizationResult.endState;
        }
        return state;
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        return {
            position: this._editor.getPosition(),
            preference: [2 /* ContentWidgetPositionPreference.BELOW */, 1 /* ContentWidgetPositionPreference.ABOVE */]
        };
    }
}
registerEditorContribution(InspectTokensController.ID, InspectTokensController, 4 /* EditorContributionInstantiation.Lazy */);
registerEditorAction(InspectTokens);
