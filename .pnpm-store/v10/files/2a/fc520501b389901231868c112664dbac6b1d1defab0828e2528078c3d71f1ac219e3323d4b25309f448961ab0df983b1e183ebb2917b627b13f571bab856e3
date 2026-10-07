import './standaloneQuickInput.css';
import { Event } from '../../../../base/common/event.js';
import { registerEditorContribution } from '../../../browser/editorExtensions.js';
import { IThemeService } from '../../../../platform/theme/common/themeService.js';
import { CancellationToken } from '../../../../base/common/cancellation.js';
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import { IContextKeyService } from '../../../../platform/contextkey/common/contextkey.js';
import { EditorScopedLayoutService } from '../standaloneLayoutService.js';
import { ICodeEditorService } from '../../../browser/services/codeEditorService.js';
import { QuickInputService } from '../../../../platform/quickinput/browser/quickInputService.js';
import { createSingleCallFunction } from '../../../../base/common/functional.js';
import { IConfigurationService } from '../../../../platform/configuration/common/configuration.js';

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
let EditorScopedQuickInputService = class EditorScopedQuickInputService extends QuickInputService {
    constructor(editor, instantiationService, contextKeyService, themeService, codeEditorService, configurationService) {
        super(instantiationService, contextKeyService, themeService, new EditorScopedLayoutService(editor.getContainerDomNode(), codeEditorService), configurationService);
        this.host = undefined;
        // Use the passed in code editor as host for the quick input widget
        const contribution = QuickInputEditorContribution.get(editor);
        if (contribution) {
            const widget = contribution.widget;
            this.host = {
                _serviceBrand: undefined,
                get mainContainer() { return widget.getDomNode(); },
                getContainer() { return widget.getDomNode(); },
                whenContainerStylesLoaded() { return undefined; },
                get containers() { return [widget.getDomNode()]; },
                get activeContainer() { return widget.getDomNode(); },
                get mainContainerDimension() { return editor.getLayoutInfo(); },
                get activeContainerDimension() { return editor.getLayoutInfo(); },
                get onDidLayoutMainContainer() { return editor.onDidLayoutChange; },
                get onDidLayoutActiveContainer() { return editor.onDidLayoutChange; },
                get onDidLayoutContainer() { return Event.map(editor.onDidLayoutChange, dimension => ({ container: widget.getDomNode(), dimension })); },
                get onDidChangeActiveContainer() { return Event.None; },
                get onDidAddContainer() { return Event.None; },
                get mainContainerOffset() { return { top: 0, quickPickTop: 0 }; },
                get activeContainerOffset() { return { top: 0, quickPickTop: 0 }; },
                focus: () => editor.focus()
            };
        }
        else {
            this.host = undefined;
        }
    }
    createController() {
        return super.createController(this.host);
    }
};
EditorScopedQuickInputService = __decorate([
    __param(1, IInstantiationService),
    __param(2, IContextKeyService),
    __param(3, IThemeService),
    __param(4, ICodeEditorService),
    __param(5, IConfigurationService)
], EditorScopedQuickInputService);
let StandaloneQuickInputService = class StandaloneQuickInputService {
    get activeService() {
        const editor = this.codeEditorService.getFocusedCodeEditor();
        if (!editor) {
            throw new Error('Quick input service needs a focused editor to work.');
        }
        // Find the quick input implementation for the focused
        // editor or create it lazily if not yet created
        let quickInputService = this.mapEditorToService.get(editor);
        if (!quickInputService) {
            const newQuickInputService = quickInputService = this.instantiationService.createInstance(EditorScopedQuickInputService, editor);
            this.mapEditorToService.set(editor, quickInputService);
            createSingleCallFunction(editor.onDidDispose)(() => {
                newQuickInputService.dispose();
                this.mapEditorToService.delete(editor);
            });
        }
        return quickInputService;
    }
    get currentQuickInput() { return this.activeService.currentQuickInput; }
    get quickAccess() { return this.activeService.quickAccess; }
    constructor(instantiationService, codeEditorService) {
        this.instantiationService = instantiationService;
        this.codeEditorService = codeEditorService;
        this.mapEditorToService = new Map();
    }
    pick(picks, options, token = CancellationToken.None) {
        return this.activeService /* TS fail */.pick(picks, options, token);
    }
    input(options, token) {
        return this.activeService.input(options, token);
    }
    createQuickPick(options = { useSeparators: false }) {
        return this.activeService.createQuickPick(options);
    }
    createInputBox() {
        return this.activeService.createInputBox();
    }
    toggleHover() {
        return this.activeService.toggleHover();
    }
};
StandaloneQuickInputService = __decorate([
    __param(0, IInstantiationService),
    __param(1, ICodeEditorService)
], StandaloneQuickInputService);
class QuickInputEditorContribution {
    static { this.ID = 'editor.controller.quickInput'; }
    static get(editor) {
        return editor.getContribution(QuickInputEditorContribution.ID);
    }
    constructor(editor) {
        this.editor = editor;
        this.widget = new QuickInputEditorWidget(this.editor);
    }
    dispose() {
        this.widget.dispose();
    }
}
class QuickInputEditorWidget {
    static { this.ID = 'editor.contrib.quickInputWidget'; }
    constructor(codeEditor) {
        this.codeEditor = codeEditor;
        this.domNode = document.createElement('div');
        this.codeEditor.addOverlayWidget(this);
    }
    getId() {
        return QuickInputEditorWidget.ID;
    }
    getDomNode() {
        return this.domNode;
    }
    getPosition() {
        return { preference: { top: 0, left: 0 } };
    }
    dispose() {
        this.codeEditor.removeOverlayWidget(this);
    }
}
registerEditorContribution(QuickInputEditorContribution.ID, QuickInputEditorContribution, 4 /* EditorContributionInstantiation.Lazy */);

export { QuickInputEditorContribution, QuickInputEditorWidget, StandaloneQuickInputService };
