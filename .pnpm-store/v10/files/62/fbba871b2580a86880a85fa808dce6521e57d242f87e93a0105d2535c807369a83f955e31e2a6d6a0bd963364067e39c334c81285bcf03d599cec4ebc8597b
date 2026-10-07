import { setARIAContainer } from '../../../base/browser/ui/aria/aria.js';
import { Disposable, DisposableStore, toDisposable } from '../../../base/common/lifecycle.js';
import { ICodeEditorService } from '../../browser/services/codeEditorService.js';
import { CodeEditorWidget } from '../../browser/widget/codeEditor/codeEditorWidget.js';
import { InternalEditorAction } from '../../common/editorAction.js';
import { StandaloneKeybindingService, updateConfigurationService } from './standaloneServices.js';
import { IStandaloneThemeService } from '../common/standaloneTheme.js';
import { MenuRegistry, MenuId } from '../../../platform/actions/common/actions.js';
import { ICommandService, CommandsRegistry } from '../../../platform/commands/common/commands.js';
import { IConfigurationService } from '../../../platform/configuration/common/configuration.js';
import { IContextKeyService, ContextKeyExpr } from '../../../platform/contextkey/common/contextkey.js';
import { IContextMenuService } from '../../../platform/contextview/browser/contextView.js';
import { IInstantiationService } from '../../../platform/instantiation/common/instantiation.js';
import { IKeybindingService } from '../../../platform/keybinding/common/keybinding.js';
import { INotificationService } from '../../../platform/notification/common/notification.js';
import { IThemeService } from '../../../platform/theme/common/themeService.js';
import { IAccessibilityService } from '../../../platform/accessibility/common/accessibility.js';
import { StandaloneCodeEditorNLS } from '../../common/standaloneStrings.js';
import { IClipboardService } from '../../../platform/clipboard/common/clipboardService.js';
import { IEditorProgressService } from '../../../platform/progress/common/progress.js';
import { IModelService } from '../../common/services/model.js';
import { ILanguageService } from '../../common/languages/language.js';
import { StandaloneCodeEditorService } from './standaloneCodeEditorService.js';
import { PLAINTEXT_LANGUAGE_ID } from '../../common/languages/modesRegistry.js';
import { ILanguageConfigurationService } from '../../common/languages/languageConfigurationRegistry.js';
import { ILanguageFeaturesService } from '../../common/services/languageFeatures.js';
import { DiffEditorWidget } from '../../browser/widget/diffEditor/diffEditorWidget.js';
import { IAccessibilitySignalService } from '../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import { mainWindow } from '../../../base/browser/window.js';
import { setHoverDelegateFactory } from '../../../base/browser/ui/hover/hoverDelegateFactory.js';
import { IHoverService, WorkbenchHoverDelegate } from '../../../platform/hover/browser/hover.js';
import { setBaseLayerHoverDelegate } from '../../../base/browser/ui/hover/hoverDelegate2.js';
import { IMarkdownRendererService } from '../../../platform/markdown/browser/markdownRenderer.js';
import { EditorMarkdownCodeBlockRenderer } from '../../browser/widget/markdownRenderer/browser/editorMarkdownCodeBlockRenderer.js';

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
let LAST_GENERATED_COMMAND_ID = 0;
let ariaDomNodeCreated = false;
/**
 * Create ARIA dom node inside parent,
 * or only for the first editor instantiation inside document.body.
 * @param parent container element for ARIA dom node
 */
function createAriaDomNode(parent) {
    if (!parent) {
        if (ariaDomNodeCreated) {
            return;
        }
        ariaDomNodeCreated = true;
    }
    setARIAContainer(parent || mainWindow.document.body);
}
/**
 * A code editor to be used both by the standalone editor and the standalone diff editor.
 */
let StandaloneCodeEditor = class StandaloneCodeEditor extends CodeEditorWidget {
    constructor(domElement, _options, instantiationService, codeEditorService, commandService, contextKeyService, hoverService, keybindingService, themeService, notificationService, accessibilityService, languageConfigurationService, languageFeaturesService, markdownRendererService) {
        const options = { ..._options };
        options.ariaLabel = options.ariaLabel || StandaloneCodeEditorNLS.editorViewAccessibleLabel;
        super(domElement, options, {}, instantiationService, codeEditorService, commandService, contextKeyService, themeService, notificationService, accessibilityService, languageConfigurationService, languageFeaturesService);
        if (keybindingService instanceof StandaloneKeybindingService) {
            this._standaloneKeybindingService = keybindingService;
        }
        else {
            this._standaloneKeybindingService = null;
        }
        createAriaDomNode(options.ariaContainerElement);
        setHoverDelegateFactory((placement, enableInstantHover) => instantiationService.createInstance(WorkbenchHoverDelegate, placement, { instantHover: enableInstantHover }, {}));
        setBaseLayerHoverDelegate(hoverService);
        markdownRendererService.setDefaultCodeBlockRenderer(instantiationService.createInstance(EditorMarkdownCodeBlockRenderer));
    }
    addCommand(keybinding, handler, context) {
        if (!this._standaloneKeybindingService) {
            console.warn('Cannot add command because the editor is configured with an unrecognized KeybindingService');
            return null;
        }
        const commandId = 'DYNAMIC_' + (++LAST_GENERATED_COMMAND_ID);
        const whenExpression = ContextKeyExpr.deserialize(context);
        this._standaloneKeybindingService.addDynamicKeybinding(commandId, keybinding, handler, whenExpression);
        return commandId;
    }
    createContextKey(key, defaultValue) {
        return this._contextKeyService.createKey(key, defaultValue);
    }
    addAction(_descriptor) {
        if ((typeof _descriptor.id !== 'string') || (typeof _descriptor.label !== 'string') || (typeof _descriptor.run !== 'function')) {
            throw new Error('Invalid action descriptor, `id`, `label` and `run` are required properties!');
        }
        if (!this._standaloneKeybindingService) {
            console.warn('Cannot add keybinding because the editor is configured with an unrecognized KeybindingService');
            return Disposable.None;
        }
        // Read descriptor options
        const id = _descriptor.id;
        const label = _descriptor.label;
        const precondition = ContextKeyExpr.and(ContextKeyExpr.equals('editorId', this.getId()), ContextKeyExpr.deserialize(_descriptor.precondition));
        const keybindings = _descriptor.keybindings;
        const keybindingsWhen = ContextKeyExpr.and(precondition, ContextKeyExpr.deserialize(_descriptor.keybindingContext));
        const contextMenuGroupId = _descriptor.contextMenuGroupId || null;
        const contextMenuOrder = _descriptor.contextMenuOrder || 0;
        const run = (_accessor, ...args) => {
            return Promise.resolve(_descriptor.run(this, ...args));
        };
        const toDispose = new DisposableStore();
        // Generate a unique id to allow the same descriptor.id across multiple editor instances
        const uniqueId = this.getId() + ':' + id;
        // Register the command
        toDispose.add(CommandsRegistry.registerCommand(uniqueId, run));
        // Register the context menu item
        if (contextMenuGroupId) {
            const menuItem = {
                command: {
                    id: uniqueId,
                    title: label
                },
                when: precondition,
                group: contextMenuGroupId,
                order: contextMenuOrder
            };
            toDispose.add(MenuRegistry.appendMenuItem(MenuId.EditorContext, menuItem));
        }
        // Register the keybindings
        if (Array.isArray(keybindings)) {
            for (const kb of keybindings) {
                toDispose.add(this._standaloneKeybindingService.addDynamicKeybinding(uniqueId, kb, run, keybindingsWhen));
            }
        }
        // Finally, register an internal editor action
        const internalAction = new InternalEditorAction(uniqueId, label, label, undefined, precondition, (...args) => Promise.resolve(_descriptor.run(this, ...args)), this._contextKeyService);
        // Store it under the original id, such that trigger with the original id will work
        this._actions.set(id, internalAction);
        toDispose.add(toDisposable(() => {
            this._actions.delete(id);
        }));
        return toDispose;
    }
    _triggerCommand(handlerId, payload) {
        if (this._codeEditorService instanceof StandaloneCodeEditorService) {
            // Help commands find this editor as the active editor
            try {
                this._codeEditorService.setActiveCodeEditor(this);
                super._triggerCommand(handlerId, payload);
            }
            finally {
                this._codeEditorService.setActiveCodeEditor(null);
            }
        }
        else {
            super._triggerCommand(handlerId, payload);
        }
    }
};
StandaloneCodeEditor = __decorate([
    __param(2, IInstantiationService),
    __param(3, ICodeEditorService),
    __param(4, ICommandService),
    __param(5, IContextKeyService),
    __param(6, IHoverService),
    __param(7, IKeybindingService),
    __param(8, IThemeService),
    __param(9, INotificationService),
    __param(10, IAccessibilityService),
    __param(11, ILanguageConfigurationService),
    __param(12, ILanguageFeaturesService),
    __param(13, IMarkdownRendererService)
], StandaloneCodeEditor);
let StandaloneEditor = class StandaloneEditor extends StandaloneCodeEditor {
    constructor(domElement, _options, instantiationService, codeEditorService, commandService, contextKeyService, hoverService, keybindingService, themeService, notificationService, configurationService, accessibilityService, modelService, languageService, languageConfigurationService, languageFeaturesService, markdownRendererService) {
        const options = { ..._options };
        updateConfigurationService(configurationService, options, false);
        const themeDomRegistration = themeService.registerEditorContainer(domElement);
        if (typeof options.theme === 'string') {
            themeService.setTheme(options.theme);
        }
        if (typeof options.autoDetectHighContrast !== 'undefined') {
            themeService.setAutoDetectHighContrast(Boolean(options.autoDetectHighContrast));
        }
        const _model = options.model;
        delete options.model;
        super(domElement, options, instantiationService, codeEditorService, commandService, contextKeyService, hoverService, keybindingService, themeService, notificationService, accessibilityService, languageConfigurationService, languageFeaturesService, markdownRendererService);
        this._configurationService = configurationService;
        this._standaloneThemeService = themeService;
        this._register(themeDomRegistration);
        let model;
        if (typeof _model === 'undefined') {
            const languageId = languageService.getLanguageIdByMimeType(options.language) || options.language || PLAINTEXT_LANGUAGE_ID;
            model = createTextModel(modelService, languageService, options.value || '', languageId, undefined);
            this._ownsModel = true;
        }
        else {
            model = _model;
            this._ownsModel = false;
        }
        this._attachModel(model);
        if (model) {
            const e = {
                oldModelUrl: null,
                newModelUrl: model.uri
            };
            this._onDidChangeModel.fire(e);
        }
    }
    dispose() {
        super.dispose();
    }
    updateOptions(newOptions) {
        updateConfigurationService(this._configurationService, newOptions, false);
        if (typeof newOptions.theme === 'string') {
            this._standaloneThemeService.setTheme(newOptions.theme);
        }
        if (typeof newOptions.autoDetectHighContrast !== 'undefined') {
            this._standaloneThemeService.setAutoDetectHighContrast(Boolean(newOptions.autoDetectHighContrast));
        }
        super.updateOptions(newOptions);
    }
    _postDetachModelCleanup(detachedModel) {
        super._postDetachModelCleanup(detachedModel);
        if (detachedModel && this._ownsModel) {
            detachedModel.dispose();
            this._ownsModel = false;
        }
    }
};
StandaloneEditor = __decorate([
    __param(2, IInstantiationService),
    __param(3, ICodeEditorService),
    __param(4, ICommandService),
    __param(5, IContextKeyService),
    __param(6, IHoverService),
    __param(7, IKeybindingService),
    __param(8, IStandaloneThemeService),
    __param(9, INotificationService),
    __param(10, IConfigurationService),
    __param(11, IAccessibilityService),
    __param(12, IModelService),
    __param(13, ILanguageService),
    __param(14, ILanguageConfigurationService),
    __param(15, ILanguageFeaturesService),
    __param(16, IMarkdownRendererService)
], StandaloneEditor);
let StandaloneDiffEditor2 = class StandaloneDiffEditor2 extends DiffEditorWidget {
    constructor(domElement, _options, instantiationService, contextKeyService, codeEditorService, themeService, notificationService, configurationService, contextMenuService, editorProgressService, clipboardService, accessibilitySignalService) {
        const options = { ..._options };
        updateConfigurationService(configurationService, options, true);
        const themeDomRegistration = themeService.registerEditorContainer(domElement);
        if (typeof options.theme === 'string') {
            themeService.setTheme(options.theme);
        }
        if (typeof options.autoDetectHighContrast !== 'undefined') {
            themeService.setAutoDetectHighContrast(Boolean(options.autoDetectHighContrast));
        }
        super(domElement, options, {}, contextKeyService, instantiationService, codeEditorService, accessibilitySignalService, editorProgressService);
        this._configurationService = configurationService;
        this._standaloneThemeService = themeService;
        this._register(themeDomRegistration);
    }
    dispose() {
        super.dispose();
    }
    updateOptions(newOptions) {
        updateConfigurationService(this._configurationService, newOptions, true);
        if (typeof newOptions.theme === 'string') {
            this._standaloneThemeService.setTheme(newOptions.theme);
        }
        if (typeof newOptions.autoDetectHighContrast !== 'undefined') {
            this._standaloneThemeService.setAutoDetectHighContrast(Boolean(newOptions.autoDetectHighContrast));
        }
        super.updateOptions(newOptions);
    }
    _createInnerEditor(instantiationService, container, options) {
        return instantiationService.createInstance(StandaloneCodeEditor, container, options);
    }
    getOriginalEditor() {
        return super.getOriginalEditor();
    }
    getModifiedEditor() {
        return super.getModifiedEditor();
    }
    addCommand(keybinding, handler, context) {
        return this.getModifiedEditor().addCommand(keybinding, handler, context);
    }
    createContextKey(key, defaultValue) {
        return this.getModifiedEditor().createContextKey(key, defaultValue);
    }
    addAction(descriptor) {
        return this.getModifiedEditor().addAction(descriptor);
    }
};
StandaloneDiffEditor2 = __decorate([
    __param(2, IInstantiationService),
    __param(3, IContextKeyService),
    __param(4, ICodeEditorService),
    __param(5, IStandaloneThemeService),
    __param(6, INotificationService),
    __param(7, IConfigurationService),
    __param(8, IContextMenuService),
    __param(9, IEditorProgressService),
    __param(10, IClipboardService),
    __param(11, IAccessibilitySignalService)
], StandaloneDiffEditor2);
/**
 * @internal
 */
function createTextModel(modelService, languageService, value, languageId, uri) {
    value = value || '';
    if (!languageId) {
        const firstLF = value.indexOf('\n');
        let firstLine = value;
        if (firstLF !== -1) {
            firstLine = value.substring(0, firstLF);
        }
        return doCreateModel(modelService, value, languageService.createByFilepathOrFirstLine(uri || null, firstLine), uri);
    }
    return doCreateModel(modelService, value, languageService.createById(languageId), uri);
}
/**
 * @internal
 */
function doCreateModel(modelService, value, languageSelection, uri) {
    return modelService.createModel(value, languageSelection, uri);
}

export { StandaloneCodeEditor, StandaloneDiffEditor2, StandaloneEditor, createTextModel };
