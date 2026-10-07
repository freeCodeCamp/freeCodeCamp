import { getClientArea } from '../../../base/browser/dom.js';
import { mainWindow } from '../../../base/browser/window.js';
import { coalesce } from '../../../base/common/arrays.js';
import { Event } from '../../../base/common/event.js';
import { ICodeEditorService } from '../../browser/services/codeEditorService.js';
import { registerSingleton } from '../../../platform/instantiation/common/extensions.js';
import { ILayoutService } from '../../../platform/layout/browser/layoutService.js';

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
let StandaloneLayoutService = class StandaloneLayoutService {
    get mainContainer() {
        return this._codeEditorService.listCodeEditors().at(0)?.getContainerDomNode() ?? mainWindow.document.body;
    }
    get activeContainer() {
        const activeCodeEditor = this._codeEditorService.getFocusedCodeEditor() ?? this._codeEditorService.getActiveCodeEditor();
        return activeCodeEditor?.getContainerDomNode() ?? this.mainContainer;
    }
    get mainContainerDimension() {
        return getClientArea(this.mainContainer);
    }
    get activeContainerDimension() {
        return getClientArea(this.activeContainer);
    }
    get containers() {
        return coalesce(this._codeEditorService.listCodeEditors().map(codeEditor => codeEditor.getContainerDomNode()));
    }
    getContainer() {
        return this.activeContainer;
    }
    whenContainerStylesLoaded() { return undefined; }
    focus() {
        this._codeEditorService.getFocusedCodeEditor()?.focus();
    }
    constructor(_codeEditorService) {
        this._codeEditorService = _codeEditorService;
        this.onDidLayoutMainContainer = Event.None;
        this.onDidLayoutActiveContainer = Event.None;
        this.onDidLayoutContainer = Event.None;
        this.onDidChangeActiveContainer = Event.None;
        this.onDidAddContainer = Event.None;
        this.mainContainerOffset = { top: 0, quickPickTop: 0 };
        this.activeContainerOffset = { top: 0, quickPickTop: 0 };
    }
};
StandaloneLayoutService = __decorate([
    __param(0, ICodeEditorService)
], StandaloneLayoutService);
let EditorScopedLayoutService = class EditorScopedLayoutService extends StandaloneLayoutService {
    get mainContainer() {
        return this._container;
    }
    constructor(_container, codeEditorService) {
        super(codeEditorService);
        this._container = _container;
    }
};
EditorScopedLayoutService = __decorate([
    __param(1, ICodeEditorService)
], EditorScopedLayoutService);
registerSingleton(ILayoutService, StandaloneLayoutService, 1 /* InstantiationType.Delayed */);

export { EditorScopedLayoutService };
