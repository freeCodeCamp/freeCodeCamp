import { EditorOptions } from './common/config/editorOptions.js';
import { createMonacoBaseAPI } from './common/services/editorBaseApi.js';
import { createMonacoEditorAPI } from './standalone/browser/standaloneEditor.js';
import { createMonacoLanguagesAPI } from './standalone/browser/standaloneLanguages.js';
import { FormattingConflicts } from './contrib/format/browser/format.js';
import { getMonacoEnvironment } from '../base/browser/browser.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// Set defaults for standalone editor
EditorOptions.wrappingIndent.defaultValue = 0 /* WrappingIndent.None */;
EditorOptions.glyphMargin.defaultValue = false;
EditorOptions.autoIndent.defaultValue = 3 /* EditorAutoIndentStrategy.Advanced */;
EditorOptions.overviewRulerLanes.defaultValue = 2;
// We need to register a formatter selector which simply picks the first available formatter.
// See https://github.com/microsoft/monaco-editor/issues/2327
FormattingConflicts.setFormatterSelector((formatter, document, mode) => Promise.resolve(formatter[0]));
const api = createMonacoBaseAPI();
api.editor = createMonacoEditorAPI();
api.languages = createMonacoLanguagesAPI();
const CancellationTokenSource = api.CancellationTokenSource;
const Emitter = api.Emitter;
const KeyCode = api.KeyCode;
const KeyMod = api.KeyMod;
const Position = api.Position;
const Range = api.Range;
const Selection = api.Selection;
const SelectionDirection = api.SelectionDirection;
const MarkerSeverity = api.MarkerSeverity;
const MarkerTag = api.MarkerTag;
const Uri = api.Uri;
const Token = api.Token;
const editor = api.editor;
const languages = api.languages;
const monacoEnvironment = getMonacoEnvironment();
const globalWithAMD = globalThis;
if (monacoEnvironment?.globalAPI || (typeof globalWithAMD.define === 'function' && globalWithAMD.define.amd)) {
    globalWithAMD.monaco = api;
}
if (typeof globalWithAMD.require !== 'undefined' && typeof globalWithAMD.require.config === 'function') {
    globalWithAMD.require.config({
        ignoreDuplicateModules: [
            'vscode-languageserver-types',
            'vscode-languageserver-types/main',
            'vscode-languageserver-textdocument',
            'vscode-languageserver-textdocument/main',
            'vscode-nls',
            'vscode-nls/vscode-nls',
            'jsonc-parser',
            'jsonc-parser/main',
            'vscode-uri',
            'vscode-uri/index',
            'vs/basic-languages/typescript/typescript'
        ]
    });
}

export { CancellationTokenSource, Emitter, KeyCode, KeyMod, MarkerSeverity, MarkerTag, Position, Range, Selection, SelectionDirection, Token, Uri, editor, languages };
