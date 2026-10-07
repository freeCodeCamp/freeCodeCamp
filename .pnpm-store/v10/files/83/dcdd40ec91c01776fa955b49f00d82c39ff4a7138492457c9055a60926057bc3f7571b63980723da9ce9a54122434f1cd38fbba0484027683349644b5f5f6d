import { RawContextKey, IContextKeyService } from '../../../../platform/contextkey/common/contextkey.js';
import { localize } from '../../../../nls.js';

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
var WordContextKey_1;
let WordContextKey = class WordContextKey {
    static { WordContextKey_1 = this; }
    static { this.AtEnd = new RawContextKey('atEndOfWord', false, { type: 'boolean', description: localize(1494, "A context key that is true when at the end of a word. Note that this is only defined when tab-completions are enabled") }); }
    constructor(_editor, contextKeyService) {
        this._editor = _editor;
        this._enabled = false;
        this._ckAtEnd = WordContextKey_1.AtEnd.bindTo(contextKeyService);
        this._configListener = this._editor.onDidChangeConfiguration(e => e.hasChanged(139 /* EditorOption.tabCompletion */) && this._update());
        this._update();
    }
    dispose() {
        this._configListener.dispose();
        this._selectionListener?.dispose();
        this._ckAtEnd.reset();
    }
    _update() {
        // only update this when tab completions are enabled
        const enabled = this._editor.getOption(139 /* EditorOption.tabCompletion */) === 'on';
        if (this._enabled === enabled) {
            return;
        }
        this._enabled = enabled;
        if (this._enabled) {
            const checkForWordEnd = () => {
                if (!this._editor.hasModel()) {
                    this._ckAtEnd.set(false);
                    return;
                }
                const model = this._editor.getModel();
                const selection = this._editor.getSelection();
                const word = model.getWordAtPosition(selection.getStartPosition());
                if (!word) {
                    this._ckAtEnd.set(false);
                    return;
                }
                this._ckAtEnd.set(word.endColumn === selection.getStartPosition().column && selection.getStartPosition().lineNumber === selection.getEndPosition().lineNumber);
            };
            this._selectionListener = this._editor.onDidChangeCursorSelection(checkForWordEnd);
            checkForWordEnd();
        }
        else if (this._selectionListener) {
            this._ckAtEnd.reset();
            this._selectionListener.dispose();
            this._selectionListener = undefined;
        }
    }
};
WordContextKey = WordContextKey_1 = __decorate([
    __param(1, IContextKeyService)
], WordContextKey);

export { WordContextKey };
