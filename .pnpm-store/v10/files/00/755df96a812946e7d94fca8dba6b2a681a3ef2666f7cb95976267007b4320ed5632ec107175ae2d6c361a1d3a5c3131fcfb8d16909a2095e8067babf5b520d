import { alert } from '../../../../base/browser/ui/aria/aria.js';
import { raceCancellation, createCancelablePromise } from '../../../../base/common/async.js';
import { KeyChord } from '../../../../base/common/keyCodes.js';
import { assertType } from '../../../../base/common/types.js';
import { URI } from '../../../../base/common/uri.js';
import { EditorStateCancellationTokenSource } from '../../editorState/browser/editorState.js';
import { isCodeEditor } from '../../../browser/editorBrowser.js';
import { EditorAction2 } from '../../../browser/editorExtensions.js';
import { ICodeEditorService } from '../../../browser/services/codeEditorService.js';
import { EmbeddedCodeEditorWidget } from '../../../browser/widget/codeEditor/embeddedCodeEditorWidget.js';
import { Position } from '../../../common/core/position.js';
import { Range } from '../../../common/core/range.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { isLocationLink } from '../../../common/languages.js';
import { ReferencesController } from './peek/referencesController.js';
import { ReferencesModel } from './referencesModel.js';
import { ISymbolNavigationService } from './symbolNavigation.js';
import { MessageController } from '../../message/browser/messageController.js';
import { PeekContext } from '../../peekView/browser/peekView.js';
import { localize, localize2 } from '../../../../nls.js';
import { MenuRegistry, MenuId, registerAction2 } from '../../../../platform/actions/common/actions.js';
import { CommandsRegistry, ICommandService } from '../../../../platform/commands/common/commands.js';
import { ContextKeyExpr } from '../../../../platform/contextkey/common/contextkey.js';
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import { INotificationService } from '../../../../platform/notification/common/notification.js';
import { IEditorProgressService } from '../../../../platform/progress/common/progress.js';
import { getReferencesAtPosition, getDefinitionsAtPosition, getDeclarationsAtPosition, getTypeDefinitionsAtPosition, getImplementationsAtPosition } from './goToSymbol.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';
import { Iterable } from '../../../../base/common/iterator.js';
import { IsWebContext } from '../../../../platform/contextkey/common/contextkeys.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
MenuRegistry.appendMenuItem(MenuId.EditorContext, {
    submenu: MenuId.EditorContextPeek,
    title: localize(1038, "Peek"),
    group: 'navigation',
    order: 100
});
class SymbolNavigationAnchor {
    static is(thing) {
        if (!thing || typeof thing !== 'object') {
            return false;
        }
        if (thing instanceof SymbolNavigationAnchor) {
            return true;
        }
        if (Position.isIPosition(thing.position) && thing.model) {
            return true;
        }
        return false;
    }
    constructor(model, position) {
        this.model = model;
        this.position = position;
    }
}
class SymbolNavigationAction extends EditorAction2 {
    static { this._allSymbolNavigationCommands = new Map(); }
    static { this._activeAlternativeCommands = new Set(); }
    static all() {
        return SymbolNavigationAction._allSymbolNavigationCommands.values();
    }
    static _patchConfig(opts) {
        const result = { ...opts, f1: true };
        // patch context menu when clause
        if (result.menu) {
            for (const item of Iterable.wrap(result.menu)) {
                if (item.id === MenuId.EditorContext || item.id === MenuId.EditorContextPeek) {
                    item.when = ContextKeyExpr.and(opts.precondition, item.when);
                }
            }
        }
        return result;
    }
    constructor(configuration, opts) {
        super(SymbolNavigationAction._patchConfig(opts));
        this.configuration = configuration;
        SymbolNavigationAction._allSymbolNavigationCommands.set(opts.id, this);
    }
    runEditorCommand(accessor, editor, arg, range) {
        if (!editor.hasModel()) {
            return Promise.resolve(undefined);
        }
        const notificationService = accessor.get(INotificationService);
        const editorService = accessor.get(ICodeEditorService);
        const progressService = accessor.get(IEditorProgressService);
        const symbolNavService = accessor.get(ISymbolNavigationService);
        const languageFeaturesService = accessor.get(ILanguageFeaturesService);
        const instaService = accessor.get(IInstantiationService);
        const model = editor.getModel();
        const position = editor.getPosition();
        const anchor = SymbolNavigationAnchor.is(arg) ? arg : new SymbolNavigationAnchor(model, position);
        const cts = new EditorStateCancellationTokenSource(editor, 1 /* CodeEditorStateFlag.Value */ | 4 /* CodeEditorStateFlag.Position */);
        const promise = raceCancellation(this._getLocationModel(languageFeaturesService, anchor.model, anchor.position, cts.token), cts.token).then(async (references) => {
            if (!references || cts.token.isCancellationRequested) {
                return;
            }
            alert(references.ariaMessage);
            let altAction;
            if (references.referenceAt(model.uri, position)) {
                const altActionId = this._getAlternativeCommand(editor);
                if (altActionId !== undefined && !SymbolNavigationAction._activeAlternativeCommands.has(altActionId) && SymbolNavigationAction._allSymbolNavigationCommands.has(altActionId)) {
                    altAction = SymbolNavigationAction._allSymbolNavigationCommands.get(altActionId);
                }
            }
            const referenceCount = references.references.length;
            if (referenceCount === 0) {
                // no result -> show message
                if (!this.configuration.muteMessage) {
                    const info = model.getWordAtPosition(position);
                    MessageController.get(editor)?.showMessage(this._getNoResultFoundMessage(info), position);
                }
            }
            else if (referenceCount === 1 && altAction) {
                // already at the only result, run alternative
                SymbolNavigationAction._activeAlternativeCommands.add(this.desc.id);
                instaService.invokeFunction((accessor) => altAction.runEditorCommand(accessor, editor, arg, range).finally(() => {
                    SymbolNavigationAction._activeAlternativeCommands.delete(this.desc.id);
                }));
            }
            else {
                // normal results handling
                return this._onResult(editorService, symbolNavService, editor, references, range);
            }
        }, (err) => {
            // report an error
            notificationService.error(err);
        }).finally(() => {
            cts.dispose();
        });
        progressService.showWhile(promise, 250);
        return promise;
    }
    async _onResult(editorService, symbolNavService, editor, model, range) {
        const gotoLocation = this._getGoToPreference(editor);
        if (!(editor instanceof EmbeddedCodeEditorWidget) && (this.configuration.openInPeek || (gotoLocation === 'peek' && model.references.length > 1))) {
            this._openInPeek(editor, model, range);
        }
        else {
            const next = model.firstReference();
            const peek = model.references.length > 1 && gotoLocation === 'gotoAndPeek';
            const targetEditor = await this._openReference(editor, editorService, next, this.configuration.openToSide, !peek);
            if (peek && targetEditor) {
                this._openInPeek(targetEditor, model, range);
            }
            else {
                model.dispose();
            }
            // keep remaining locations around when using
            // 'goto'-mode
            if (gotoLocation === 'goto') {
                symbolNavService.put(next);
            }
        }
    }
    async _openReference(editor, editorService, reference, sideBySide, highlight) {
        // range is the target-selection-range when we have one
        // and the fallback is the 'full' range
        let range = undefined;
        if (isLocationLink(reference)) {
            range = reference.targetSelectionRange;
        }
        if (!range) {
            range = reference.range;
        }
        if (!range) {
            return undefined;
        }
        const targetEditor = await editorService.openCodeEditor({
            resource: reference.uri,
            options: {
                selection: Range.collapseToStart(range),
                selectionRevealType: 3 /* TextEditorSelectionRevealType.NearTopIfOutsideViewport */,
                selectionSource: "code.jump" /* TextEditorSelectionSource.JUMP */
            }
        }, editor, sideBySide);
        if (!targetEditor) {
            return undefined;
        }
        if (highlight) {
            const modelNow = targetEditor.getModel();
            const decorations = targetEditor.createDecorationsCollection([{ range, options: { description: 'symbol-navigate-action-highlight', className: 'symbolHighlight' } }]);
            setTimeout(() => {
                if (targetEditor.getModel() === modelNow) {
                    decorations.clear();
                }
            }, 350);
        }
        return targetEditor;
    }
    _openInPeek(target, model, range) {
        const controller = ReferencesController.get(target);
        if (controller && target.hasModel()) {
            controller.toggleWidget(range ?? target.getSelection(), createCancelablePromise(_ => Promise.resolve(model)), this.configuration.openInPeek);
        }
        else {
            model.dispose();
        }
    }
}
//#region --- DEFINITION
class DefinitionAction extends SymbolNavigationAction {
    async _getLocationModel(languageFeaturesService, model, position, token) {
        return new ReferencesModel(await getDefinitionsAtPosition(languageFeaturesService.definitionProvider, model, position, false, token), localize(1039, 'Definitions'));
    }
    _getNoResultFoundMessage(info) {
        return info && info.word
            ? localize(1040, "No definition found for '{0}'", info.word)
            : localize(1041, "No definition found");
    }
    _getAlternativeCommand(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */).alternativeDefinitionCommand;
    }
    _getGoToPreference(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */).multipleDefinitions;
    }
}
registerAction2(class GoToDefinitionAction extends DefinitionAction {
    static { this.id = 'editor.action.revealDefinition'; }
    constructor() {
        super({
            openToSide: false,
            openInPeek: false,
            muteMessage: false
        }, {
            id: GoToDefinitionAction.id,
            title: {
                ...localize2(1065, "Go to Definition"),
                mnemonicTitle: localize(1042, "Go to &&Definition"),
            },
            precondition: EditorContextKeys.hasDefinitionProvider,
            keybinding: [{
                    when: EditorContextKeys.editorTextFocus,
                    primary: 70 /* KeyCode.F12 */,
                    weight: 100 /* KeybindingWeight.EditorContrib */
                }, {
                    when: ContextKeyExpr.and(EditorContextKeys.editorTextFocus, IsWebContext),
                    primary: 2048 /* KeyMod.CtrlCmd */ | 70 /* KeyCode.F12 */,
                    weight: 100 /* KeybindingWeight.EditorContrib */
                }],
            menu: [{
                    id: MenuId.EditorContext,
                    group: 'navigation',
                    order: 1.1
                }, {
                    id: MenuId.MenubarGoMenu,
                    precondition: null,
                    group: '4_symbol_nav',
                    order: 2,
                }]
        });
        CommandsRegistry.registerCommandAlias('editor.action.goToDeclaration', GoToDefinitionAction.id);
    }
});
registerAction2(class OpenDefinitionToSideAction extends DefinitionAction {
    static { this.id = 'editor.action.revealDefinitionAside'; }
    constructor() {
        super({
            openToSide: true,
            openInPeek: false,
            muteMessage: false
        }, {
            id: OpenDefinitionToSideAction.id,
            title: localize2(1066, "Open Definition to the Side"),
            precondition: ContextKeyExpr.and(EditorContextKeys.hasDefinitionProvider, EditorContextKeys.isInEmbeddedEditor.toNegated()),
            keybinding: [{
                    when: EditorContextKeys.editorTextFocus,
                    primary: KeyChord(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 70 /* KeyCode.F12 */),
                    weight: 100 /* KeybindingWeight.EditorContrib */
                }, {
                    when: ContextKeyExpr.and(EditorContextKeys.editorTextFocus, IsWebContext),
                    primary: KeyChord(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 70 /* KeyCode.F12 */),
                    weight: 100 /* KeybindingWeight.EditorContrib */
                }]
        });
        CommandsRegistry.registerCommandAlias('editor.action.openDeclarationToTheSide', OpenDefinitionToSideAction.id);
    }
});
registerAction2(class PeekDefinitionAction extends DefinitionAction {
    static { this.id = 'editor.action.peekDefinition'; }
    constructor() {
        super({
            openToSide: false,
            openInPeek: true,
            muteMessage: false
        }, {
            id: PeekDefinitionAction.id,
            title: localize2(1067, "Peek Definition"),
            precondition: ContextKeyExpr.and(EditorContextKeys.hasDefinitionProvider, PeekContext.notInPeekEditor, EditorContextKeys.isInEmbeddedEditor.toNegated()),
            keybinding: {
                when: EditorContextKeys.editorTextFocus,
                primary: 512 /* KeyMod.Alt */ | 70 /* KeyCode.F12 */,
                linux: { primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 68 /* KeyCode.F10 */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menu: {
                id: MenuId.EditorContextPeek,
                group: 'peek',
                order: 2
            }
        });
        CommandsRegistry.registerCommandAlias('editor.action.previewDeclaration', PeekDefinitionAction.id);
    }
});
//#endregion
//#region --- DECLARATION
class DeclarationAction extends SymbolNavigationAction {
    async _getLocationModel(languageFeaturesService, model, position, token) {
        return new ReferencesModel(await getDeclarationsAtPosition(languageFeaturesService.declarationProvider, model, position, false, token), localize(1043, 'Declarations'));
    }
    _getNoResultFoundMessage(info) {
        return info && info.word
            ? localize(1044, "No declaration found for '{0}'", info.word)
            : localize(1045, "No declaration found");
    }
    _getAlternativeCommand(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */).alternativeDeclarationCommand;
    }
    _getGoToPreference(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */).multipleDeclarations;
    }
}
registerAction2(class GoToDeclarationAction extends DeclarationAction {
    static { this.id = 'editor.action.revealDeclaration'; }
    constructor() {
        super({
            openToSide: false,
            openInPeek: false,
            muteMessage: false
        }, {
            id: GoToDeclarationAction.id,
            title: {
                ...localize2(1068, "Go to Declaration"),
                mnemonicTitle: localize(1046, "Go to &&Declaration"),
            },
            precondition: ContextKeyExpr.and(EditorContextKeys.hasDeclarationProvider, EditorContextKeys.isInEmbeddedEditor.toNegated()),
            menu: [{
                    id: MenuId.EditorContext,
                    group: 'navigation',
                    order: 1.3
                }, {
                    id: MenuId.MenubarGoMenu,
                    precondition: null,
                    group: '4_symbol_nav',
                    order: 3,
                }],
        });
    }
    _getNoResultFoundMessage(info) {
        return info && info.word
            ? localize(1047, "No declaration found for '{0}'", info.word)
            : localize(1048, "No declaration found");
    }
});
registerAction2(class PeekDeclarationAction extends DeclarationAction {
    constructor() {
        super({
            openToSide: false,
            openInPeek: true,
            muteMessage: false
        }, {
            id: 'editor.action.peekDeclaration',
            title: localize2(1069, "Peek Declaration"),
            precondition: ContextKeyExpr.and(EditorContextKeys.hasDeclarationProvider, PeekContext.notInPeekEditor, EditorContextKeys.isInEmbeddedEditor.toNegated()),
            menu: {
                id: MenuId.EditorContextPeek,
                group: 'peek',
                order: 3
            }
        });
    }
});
//#endregion
//#region --- TYPE DEFINITION
class TypeDefinitionAction extends SymbolNavigationAction {
    async _getLocationModel(languageFeaturesService, model, position, token) {
        return new ReferencesModel(await getTypeDefinitionsAtPosition(languageFeaturesService.typeDefinitionProvider, model, position, false, token), localize(1049, 'Type Definitions'));
    }
    _getNoResultFoundMessage(info) {
        return info && info.word
            ? localize(1050, "No type definition found for '{0}'", info.word)
            : localize(1051, "No type definition found");
    }
    _getAlternativeCommand(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */).alternativeTypeDefinitionCommand;
    }
    _getGoToPreference(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */).multipleTypeDefinitions;
    }
}
registerAction2(class GoToTypeDefinitionAction extends TypeDefinitionAction {
    static { this.ID = 'editor.action.goToTypeDefinition'; }
    constructor() {
        super({
            openToSide: false,
            openInPeek: false,
            muteMessage: false
        }, {
            id: GoToTypeDefinitionAction.ID,
            title: {
                ...localize2(1070, "Go to Type Definition"),
                mnemonicTitle: localize(1052, "Go to &&Type Definition"),
            },
            precondition: EditorContextKeys.hasTypeDefinitionProvider,
            keybinding: {
                when: EditorContextKeys.editorTextFocus,
                primary: 0,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menu: [{
                    id: MenuId.EditorContext,
                    group: 'navigation',
                    order: 1.4
                }, {
                    id: MenuId.MenubarGoMenu,
                    precondition: null,
                    group: '4_symbol_nav',
                    order: 3,
                }]
        });
    }
});
registerAction2(class PeekTypeDefinitionAction extends TypeDefinitionAction {
    static { this.ID = 'editor.action.peekTypeDefinition'; }
    constructor() {
        super({
            openToSide: false,
            openInPeek: true,
            muteMessage: false
        }, {
            id: PeekTypeDefinitionAction.ID,
            title: localize2(1071, "Peek Type Definition"),
            precondition: ContextKeyExpr.and(EditorContextKeys.hasTypeDefinitionProvider, PeekContext.notInPeekEditor, EditorContextKeys.isInEmbeddedEditor.toNegated()),
            menu: {
                id: MenuId.EditorContextPeek,
                group: 'peek',
                order: 4
            }
        });
    }
});
//#endregion
//#region --- IMPLEMENTATION
class ImplementationAction extends SymbolNavigationAction {
    async _getLocationModel(languageFeaturesService, model, position, token) {
        return new ReferencesModel(await getImplementationsAtPosition(languageFeaturesService.implementationProvider, model, position, false, token), localize(1053, 'Implementations'));
    }
    _getNoResultFoundMessage(info) {
        return info && info.word
            ? localize(1054, "No implementation found for '{0}'", info.word)
            : localize(1055, "No implementation found");
    }
    _getAlternativeCommand(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */).alternativeImplementationCommand;
    }
    _getGoToPreference(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */).multipleImplementations;
    }
}
registerAction2(class GoToImplementationAction extends ImplementationAction {
    static { this.ID = 'editor.action.goToImplementation'; }
    constructor() {
        super({
            openToSide: false,
            openInPeek: false,
            muteMessage: false
        }, {
            id: GoToImplementationAction.ID,
            title: {
                ...localize2(1072, "Go to Implementations"),
                mnemonicTitle: localize(1056, "Go to &&Implementations"),
            },
            precondition: EditorContextKeys.hasImplementationProvider,
            keybinding: {
                when: EditorContextKeys.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 70 /* KeyCode.F12 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menu: [{
                    id: MenuId.EditorContext,
                    group: 'navigation',
                    order: 1.45
                }, {
                    id: MenuId.MenubarGoMenu,
                    precondition: null,
                    group: '4_symbol_nav',
                    order: 4,
                }]
        });
    }
});
registerAction2(class PeekImplementationAction extends ImplementationAction {
    static { this.ID = 'editor.action.peekImplementation'; }
    constructor() {
        super({
            openToSide: false,
            openInPeek: true,
            muteMessage: false
        }, {
            id: PeekImplementationAction.ID,
            title: localize2(1073, "Peek Implementations"),
            precondition: ContextKeyExpr.and(EditorContextKeys.hasImplementationProvider, PeekContext.notInPeekEditor, EditorContextKeys.isInEmbeddedEditor.toNegated()),
            keybinding: {
                when: EditorContextKeys.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 70 /* KeyCode.F12 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menu: {
                id: MenuId.EditorContextPeek,
                group: 'peek',
                order: 5
            }
        });
    }
});
//#endregion
//#region --- REFERENCES
class ReferencesAction extends SymbolNavigationAction {
    _getNoResultFoundMessage(info) {
        return info
            ? localize(1057, "No references found for '{0}'", info.word)
            : localize(1058, "No references found");
    }
    _getAlternativeCommand(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */).alternativeReferenceCommand;
    }
    _getGoToPreference(editor) {
        return editor.getOption(67 /* EditorOption.gotoLocation */).multipleReferences;
    }
}
registerAction2(class GoToReferencesAction extends ReferencesAction {
    constructor() {
        super({
            openToSide: false,
            openInPeek: false,
            muteMessage: false
        }, {
            id: 'editor.action.goToReferences',
            title: {
                ...localize2(1074, "Go to References"),
                mnemonicTitle: localize(1059, "Go to &&References"),
            },
            precondition: ContextKeyExpr.and(EditorContextKeys.hasReferenceProvider, PeekContext.notInPeekEditor, EditorContextKeys.isInEmbeddedEditor.toNegated()),
            keybinding: {
                when: EditorContextKeys.editorTextFocus,
                primary: 1024 /* KeyMod.Shift */ | 70 /* KeyCode.F12 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menu: [{
                    id: MenuId.EditorContext,
                    group: 'navigation',
                    order: 1.45
                }, {
                    id: MenuId.MenubarGoMenu,
                    precondition: null,
                    group: '4_symbol_nav',
                    order: 5,
                }]
        });
    }
    async _getLocationModel(languageFeaturesService, model, position, token) {
        return new ReferencesModel(await getReferencesAtPosition(languageFeaturesService.referenceProvider, model, position, true, false, token), localize(1060, 'References'));
    }
});
registerAction2(class PeekReferencesAction extends ReferencesAction {
    constructor() {
        super({
            openToSide: false,
            openInPeek: true,
            muteMessage: false
        }, {
            id: 'editor.action.referenceSearch.trigger',
            title: localize2(1075, "Peek References"),
            precondition: ContextKeyExpr.and(EditorContextKeys.hasReferenceProvider, PeekContext.notInPeekEditor, EditorContextKeys.isInEmbeddedEditor.toNegated()),
            menu: {
                id: MenuId.EditorContextPeek,
                group: 'peek',
                order: 6
            }
        });
    }
    async _getLocationModel(languageFeaturesService, model, position, token) {
        return new ReferencesModel(await getReferencesAtPosition(languageFeaturesService.referenceProvider, model, position, false, false, token), localize(1061, 'References'));
    }
});
//#endregion
//#region --- GENERIC goto symbols command
class GenericGoToLocationAction extends SymbolNavigationAction {
    constructor(config, _references, _gotoMultipleBehaviour) {
        super(config, {
            id: 'editor.action.goToLocation',
            title: localize2(1076, "Go to Any Symbol"),
            precondition: ContextKeyExpr.and(PeekContext.notInPeekEditor, EditorContextKeys.isInEmbeddedEditor.toNegated()),
        });
        this._references = _references;
        this._gotoMultipleBehaviour = _gotoMultipleBehaviour;
    }
    async _getLocationModel(languageFeaturesService, _model, _position, _token) {
        return new ReferencesModel(this._references, localize(1062, 'Locations'));
    }
    _getNoResultFoundMessage(info) {
        return info && localize(1063, "No results for '{0}'", info.word) || '';
    }
    _getGoToPreference(editor) {
        return this._gotoMultipleBehaviour ?? editor.getOption(67 /* EditorOption.gotoLocation */).multipleReferences;
    }
    _getAlternativeCommand() {
        return undefined;
    }
}
CommandsRegistry.registerCommand({
    id: 'editor.action.goToLocations',
    metadata: {
        description: 'Go to locations from a position in a file',
        args: [
            { name: 'uri', description: 'The text document in which to start', constraint: URI },
            { name: 'position', description: 'The position at which to start', constraint: Position.isIPosition },
            { name: 'locations', description: 'An array of locations.', constraint: Array },
            { name: 'multiple', description: 'Define what to do when having multiple results, either `peek`, `gotoAndPeek`, or `goto`' },
            { name: 'noResultsMessage', description: 'Human readable message that shows when locations is empty.' },
        ]
    },
    handler: async (accessor, resource, position, references, multiple, noResultsMessage, openInPeek) => {
        assertType(URI.isUri(resource));
        assertType(Position.isIPosition(position));
        assertType(Array.isArray(references));
        assertType(typeof multiple === 'undefined' || typeof multiple === 'string');
        assertType(typeof openInPeek === 'undefined' || typeof openInPeek === 'boolean');
        const editorService = accessor.get(ICodeEditorService);
        const editor = await editorService.openCodeEditor({ resource }, editorService.getFocusedCodeEditor());
        if (isCodeEditor(editor)) {
            editor.setPosition(position);
            editor.revealPositionInCenterIfOutsideViewport(position, 0 /* ScrollType.Smooth */);
            return editor.invokeWithinContext(accessor => {
                const command = new class extends GenericGoToLocationAction {
                    _getNoResultFoundMessage(info) {
                        return noResultsMessage || super._getNoResultFoundMessage(info);
                    }
                }({
                    muteMessage: !Boolean(noResultsMessage),
                    openInPeek: Boolean(openInPeek),
                    openToSide: false
                }, references, multiple);
                accessor.get(IInstantiationService).invokeFunction(command.run.bind(command), editor);
            });
        }
    }
});
CommandsRegistry.registerCommand({
    id: 'editor.action.peekLocations',
    metadata: {
        description: 'Peek locations from a position in a file',
        args: [
            { name: 'uri', description: 'The text document in which to start', constraint: URI },
            { name: 'position', description: 'The position at which to start', constraint: Position.isIPosition },
            { name: 'locations', description: 'An array of locations.', constraint: Array },
            { name: 'multiple', description: 'Define what to do when having multiple results, either `peek`, `gotoAndPeek`, or `goto`' },
        ]
    },
    handler: async (accessor, resource, position, references, multiple) => {
        accessor.get(ICommandService).executeCommand('editor.action.goToLocations', resource, position, references, multiple, undefined, true);
    }
});
//#endregion
//#region --- REFERENCE search special commands
CommandsRegistry.registerCommand({
    id: 'editor.action.findReferences',
    handler: (accessor, resource, position) => {
        assertType(URI.isUri(resource));
        assertType(Position.isIPosition(position));
        const languageFeaturesService = accessor.get(ILanguageFeaturesService);
        const codeEditorService = accessor.get(ICodeEditorService);
        return codeEditorService.openCodeEditor({ resource }, codeEditorService.getFocusedCodeEditor()).then(control => {
            if (!isCodeEditor(control) || !control.hasModel()) {
                return undefined;
            }
            const controller = ReferencesController.get(control);
            if (!controller) {
                return undefined;
            }
            const references = createCancelablePromise(token => getReferencesAtPosition(languageFeaturesService.referenceProvider, control.getModel(), Position.lift(position), false, false, token).then(references => new ReferencesModel(references, localize(1064, 'References'))));
            const range = new Range(position.lineNumber, position.column, position.lineNumber, position.column);
            return Promise.resolve(controller.toggleWidget(range, references, false));
        });
    }
});
// use NEW command
CommandsRegistry.registerCommandAlias('editor.action.showReferences', 'editor.action.peekLocations');
//#endregion

export { DefinitionAction, SymbolNavigationAction, SymbolNavigationAnchor };
