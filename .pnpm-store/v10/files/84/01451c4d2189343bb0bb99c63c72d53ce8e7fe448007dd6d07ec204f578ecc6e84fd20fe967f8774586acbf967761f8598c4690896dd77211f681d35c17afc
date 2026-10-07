import { windowOpenNoOpener } from '../../../base/browser/dom.js';
import { Schemas } from '../../../base/common/network.js';
import { AbstractCodeEditorService } from '../../browser/services/abstractCodeEditorService.js';
import { ICodeEditorService } from '../../browser/services/codeEditorService.js';
import { IContextKeyService } from '../../../platform/contextkey/common/contextkey.js';
import { registerSingleton } from '../../../platform/instantiation/common/extensions.js';
import { IThemeService } from '../../../platform/theme/common/themeService.js';

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
let StandaloneCodeEditorService = class StandaloneCodeEditorService extends AbstractCodeEditorService {
    constructor(contextKeyService, themeService) {
        super(themeService);
        this._register(this.onCodeEditorAdd(() => this._checkContextKey()));
        this._register(this.onCodeEditorRemove(() => this._checkContextKey()));
        this._editorIsOpen = contextKeyService.createKey('editorIsOpen', false);
        this._activeCodeEditor = null;
        this._register(this.registerCodeEditorOpenHandler(async (input, source, sideBySide) => {
            if (!source) {
                return null;
            }
            return this.doOpenEditor(source, input);
        }));
    }
    _checkContextKey() {
        let hasCodeEditor = false;
        for (const editor of this.listCodeEditors()) {
            if (!editor.isSimpleWidget) {
                hasCodeEditor = true;
                break;
            }
        }
        this._editorIsOpen.set(hasCodeEditor);
    }
    setActiveCodeEditor(activeCodeEditor) {
        this._activeCodeEditor = activeCodeEditor;
    }
    getActiveCodeEditor() {
        return this._activeCodeEditor;
    }
    doOpenEditor(editor, input) {
        const model = this.findModel(editor, input.resource);
        if (!model) {
            if (input.resource) {
                const schema = input.resource.scheme;
                if (schema === Schemas.http || schema === Schemas.https) {
                    // This is a fully qualified http or https URL
                    windowOpenNoOpener(input.resource.toString());
                    return editor;
                }
            }
            return null;
        }
        const selection = (input.options ? input.options.selection : null);
        if (selection) {
            if (typeof selection.endLineNumber === 'number' && typeof selection.endColumn === 'number') {
                editor.setSelection(selection);
                editor.revealRangeInCenter(selection, 1 /* ScrollType.Immediate */);
            }
            else {
                const pos = {
                    lineNumber: selection.startLineNumber,
                    column: selection.startColumn
                };
                editor.setPosition(pos);
                editor.revealPositionInCenter(pos, 1 /* ScrollType.Immediate */);
            }
        }
        return editor;
    }
    findModel(editor, resource) {
        const model = editor.getModel();
        if (model && model.uri.toString() !== resource.toString()) {
            return null;
        }
        return model;
    }
};
StandaloneCodeEditorService = __decorate([
    __param(0, IContextKeyService),
    __param(1, IThemeService)
], StandaloneCodeEditorService);
registerSingleton(ICodeEditorService, StandaloneCodeEditorService, 0 /* InstantiationType.Eager */);

export { StandaloneCodeEditorService };
