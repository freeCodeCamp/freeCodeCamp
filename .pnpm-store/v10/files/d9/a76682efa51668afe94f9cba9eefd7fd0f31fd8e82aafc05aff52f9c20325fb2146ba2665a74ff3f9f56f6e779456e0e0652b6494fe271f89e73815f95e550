import { mainWindow } from '../../../base/browser/window.js';
import { Disposable, DisposableStore } from '../../../base/common/lifecycle.js';
import { splitLines } from '../../../base/common/strings.js';
import { URI } from '../../../base/common/uri.js';
import './standalone-tokens.css';
import { FontMeasurements } from '../../browser/config/fontMeasurements.js';
import { EditorCommand } from '../../browser/editorExtensions.js';
import { ICodeEditorService } from '../../browser/services/codeEditorService.js';
import { createWebWorker as createWebWorker$1 } from './standaloneWebWorker.js';
import { EditorOptions, ApplyUpdateResult, ConfigurationChangedEvent } from '../../common/config/editorOptions.js';
import { EditorZoom } from '../../common/config/editorZoom.js';
import { FontInfo, BareFontInfo } from '../../common/config/fontInfo.js';
import { EditorType } from '../../common/editorCommon.js';
import { TokenizationRegistry } from '../../common/languages.js';
import { ILanguageService } from '../../common/languages/language.js';
import { PLAINTEXT_LANGUAGE_ID } from '../../common/languages/modesRegistry.js';
import { nullTokenize, NullState } from '../../common/languages/nullTokenize.js';
import { FindMatch, TextModelResolvedOptions } from '../../common/model.js';
import { IModelService } from '../../common/services/model.js';
import { TextDirection, ShowLightbulbIconMode, PositionAffinity, InjectedTextCursorStops, WrappingIndent, TrackedRangeStickiness, TextEditorCursorStyle, TextEditorCursorBlinkingStyle, ScrollType, ScrollbarVisibility, RenderMinimap, RenderLineNumbersType, GlyphMarginLane, OverviewRulerLane, OverlayWidgetPositionPreference, MouseTargetType, MinimapSectionHeaderStyle, MinimapPosition, EndOfLineSequence, EndOfLinePreference, EditorOption, EditorAutoIndentStrategy, DefaultEndOfLine, CursorChangeReason, ContentWidgetPositionPreference, AccessibilitySupport } from '../../common/standalone/standaloneEnums.js';
import { Colorizer } from './colorizer.js';
import { createTextModel, StandaloneDiffEditor2, StandaloneEditor } from './standaloneCodeEditor.js';
import { StandaloneServices, StandaloneKeybindingService } from './standaloneServices.js';
import { IStandaloneThemeService } from '../common/standaloneTheme.js';
import { MenuRegistry, MenuId } from '../../../platform/actions/common/actions.js';
import { CommandsRegistry } from '../../../platform/commands/common/commands.js';
import { ContextKeyExpr } from '../../../platform/contextkey/common/contextkey.js';
import { IKeybindingService } from '../../../platform/keybinding/common/keybinding.js';
import { IMarkerService } from '../../../platform/markers/common/markers.js';
import { IOpenerService } from '../../../platform/opener/common/opener.js';
import { MultiDiffEditorWidget } from '../../browser/widget/multiDiffEditor/multiDiffEditorWidget.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Create a new editor under `domElement`.
 * `domElement` should be empty (not contain other dom nodes).
 * The editor will read the size of `domElement`.
 */
function create(domElement, options, override) {
    const instantiationService = StandaloneServices.initialize(override || {});
    return instantiationService.createInstance(StandaloneEditor, domElement, options);
}
/**
 * Emitted when an editor is created.
 * Creating a diff editor might cause this listener to be invoked with the two editors.
 * @event
 */
function onDidCreateEditor(listener) {
    const codeEditorService = StandaloneServices.get(ICodeEditorService);
    return codeEditorService.onCodeEditorAdd((editor) => {
        listener(editor);
    });
}
/**
 * Emitted when an diff editor is created.
 * @event
 */
function onDidCreateDiffEditor(listener) {
    const codeEditorService = StandaloneServices.get(ICodeEditorService);
    return codeEditorService.onDiffEditorAdd((editor) => {
        listener(editor);
    });
}
/**
 * Get all the created editors.
 */
function getEditors() {
    const codeEditorService = StandaloneServices.get(ICodeEditorService);
    return codeEditorService.listCodeEditors();
}
/**
 * Get all the created diff editors.
 */
function getDiffEditors() {
    const codeEditorService = StandaloneServices.get(ICodeEditorService);
    return codeEditorService.listDiffEditors();
}
/**
 * Create a new diff editor under `domElement`.
 * `domElement` should be empty (not contain other dom nodes).
 * The editor will read the size of `domElement`.
 */
function createDiffEditor(domElement, options, override) {
    const instantiationService = StandaloneServices.initialize(override || {});
    return instantiationService.createInstance(StandaloneDiffEditor2, domElement, options);
}
function createMultiFileDiffEditor(domElement, override) {
    const instantiationService = StandaloneServices.initialize(override || {});
    return new MultiDiffEditorWidget(domElement, {}, instantiationService);
}
/**
 * Add a command.
 */
function addCommand(descriptor) {
    if ((typeof descriptor.id !== 'string') || (typeof descriptor.run !== 'function')) {
        throw new Error('Invalid command descriptor, `id` and `run` are required properties!');
    }
    return CommandsRegistry.registerCommand(descriptor.id, descriptor.run);
}
/**
 * Add an action to all editors.
 */
function addEditorAction(descriptor) {
    if ((typeof descriptor.id !== 'string') || (typeof descriptor.label !== 'string') || (typeof descriptor.run !== 'function')) {
        throw new Error('Invalid action descriptor, `id`, `label` and `run` are required properties!');
    }
    const precondition = ContextKeyExpr.deserialize(descriptor.precondition);
    const run = (accessor, ...args) => {
        return EditorCommand.runEditorCommand(accessor, args, precondition, (accessor, editor, args) => Promise.resolve(descriptor.run(editor, ...args)));
    };
    const toDispose = new DisposableStore();
    // Register the command
    toDispose.add(CommandsRegistry.registerCommand(descriptor.id, run));
    // Register the context menu item
    if (descriptor.contextMenuGroupId) {
        const menuItem = {
            command: {
                id: descriptor.id,
                title: descriptor.label
            },
            when: precondition,
            group: descriptor.contextMenuGroupId,
            order: descriptor.contextMenuOrder || 0
        };
        toDispose.add(MenuRegistry.appendMenuItem(MenuId.EditorContext, menuItem));
    }
    // Register the keybindings
    if (Array.isArray(descriptor.keybindings)) {
        const keybindingService = StandaloneServices.get(IKeybindingService);
        if (!(keybindingService instanceof StandaloneKeybindingService)) {
            console.warn('Cannot add keybinding because the editor is configured with an unrecognized KeybindingService');
        }
        else {
            const keybindingsWhen = ContextKeyExpr.and(precondition, ContextKeyExpr.deserialize(descriptor.keybindingContext));
            toDispose.add(keybindingService.addDynamicKeybindings(descriptor.keybindings.map((keybinding) => {
                return {
                    keybinding,
                    command: descriptor.id,
                    when: keybindingsWhen
                };
            })));
        }
    }
    return toDispose;
}
/**
 * Add a keybinding rule.
 */
function addKeybindingRule(rule) {
    return addKeybindingRules([rule]);
}
/**
 * Add keybinding rules.
 */
function addKeybindingRules(rules) {
    const keybindingService = StandaloneServices.get(IKeybindingService);
    if (!(keybindingService instanceof StandaloneKeybindingService)) {
        console.warn('Cannot add keybinding because the editor is configured with an unrecognized KeybindingService');
        return Disposable.None;
    }
    return keybindingService.addDynamicKeybindings(rules.map((rule) => {
        return {
            keybinding: rule.keybinding,
            command: rule.command,
            commandArgs: rule.commandArgs,
            when: ContextKeyExpr.deserialize(rule.when),
        };
    }));
}
/**
 * Create a new editor model.
 * You can specify the language that should be set for this model or let the language be inferred from the `uri`.
 */
function createModel(value, language, uri) {
    const languageService = StandaloneServices.get(ILanguageService);
    const languageId = languageService.getLanguageIdByMimeType(language) || language;
    return createTextModel(StandaloneServices.get(IModelService), languageService, value, languageId, uri);
}
/**
 * Change the language for a model.
 */
function setModelLanguage(model, mimeTypeOrLanguageId) {
    const languageService = StandaloneServices.get(ILanguageService);
    const languageId = languageService.getLanguageIdByMimeType(mimeTypeOrLanguageId) || mimeTypeOrLanguageId || PLAINTEXT_LANGUAGE_ID;
    model.setLanguage(languageService.createById(languageId));
}
/**
 * Set the markers for a model.
 */
function setModelMarkers(model, owner, markers) {
    if (model) {
        const markerService = StandaloneServices.get(IMarkerService);
        markerService.changeOne(owner, model.uri, markers);
    }
}
/**
 * Remove all markers of an owner.
 */
function removeAllMarkers(owner) {
    const markerService = StandaloneServices.get(IMarkerService);
    markerService.changeAll(owner, []);
}
/**
 * Get markers for owner and/or resource
 *
 * @returns list of markers
 */
function getModelMarkers(filter) {
    const markerService = StandaloneServices.get(IMarkerService);
    return markerService.read(filter);
}
/**
 * Emitted when markers change for a model.
 * @event
 */
function onDidChangeMarkers(listener) {
    const markerService = StandaloneServices.get(IMarkerService);
    return markerService.onMarkerChanged(listener);
}
/**
 * Get the model that has `uri` if it exists.
 */
function getModel(uri) {
    const modelService = StandaloneServices.get(IModelService);
    return modelService.getModel(uri);
}
/**
 * Get all the created models.
 */
function getModels() {
    const modelService = StandaloneServices.get(IModelService);
    return modelService.getModels();
}
/**
 * Emitted when a model is created.
 * @event
 */
function onDidCreateModel(listener) {
    const modelService = StandaloneServices.get(IModelService);
    return modelService.onModelAdded(listener);
}
/**
 * Emitted right before a model is disposed.
 * @event
 */
function onWillDisposeModel(listener) {
    const modelService = StandaloneServices.get(IModelService);
    return modelService.onModelRemoved(listener);
}
/**
 * Emitted when a different language is set to a model.
 * @event
 */
function onDidChangeModelLanguage(listener) {
    const modelService = StandaloneServices.get(IModelService);
    return modelService.onModelLanguageChanged((e) => {
        listener({
            model: e.model,
            oldLanguage: e.oldLanguageId
        });
    });
}
/**
 * Create a new web worker that has model syncing capabilities built in.
 * Specify an AMD module to load that will `create` an object that will be proxied.
 */
function createWebWorker(opts) {
    return createWebWorker$1(StandaloneServices.get(IModelService), opts);
}
/**
 * Colorize the contents of `domNode` using attribute `data-lang`.
 */
function colorizeElement(domNode, options) {
    const languageService = StandaloneServices.get(ILanguageService);
    const themeService = StandaloneServices.get(IStandaloneThemeService);
    return Colorizer.colorizeElement(themeService, languageService, domNode, options).then(() => {
        themeService.registerEditorContainer(domNode);
    });
}
/**
 * Colorize `text` using language `languageId`.
 */
function colorize(text, languageId, options) {
    const languageService = StandaloneServices.get(ILanguageService);
    const themeService = StandaloneServices.get(IStandaloneThemeService);
    themeService.registerEditorContainer(mainWindow.document.body);
    return Colorizer.colorize(languageService, text, languageId, options);
}
/**
 * Colorize a line in a model.
 */
function colorizeModelLine(model, lineNumber, tabSize = 4) {
    const themeService = StandaloneServices.get(IStandaloneThemeService);
    themeService.registerEditorContainer(mainWindow.document.body);
    return Colorizer.colorizeModelLine(model, lineNumber, tabSize);
}
/**
 * @internal
 */
function getSafeTokenizationSupport(language) {
    const tokenizationSupport = TokenizationRegistry.get(language);
    if (tokenizationSupport) {
        return tokenizationSupport;
    }
    return {
        getInitialState: () => NullState,
        tokenize: (line, hasEOL, state) => nullTokenize(language, state)
    };
}
/**
 * Tokenize `text` using language `languageId`
 */
function tokenize(text, languageId) {
    // Needed in order to get the mode registered for subsequent look-ups
    TokenizationRegistry.getOrCreate(languageId);
    const tokenizationSupport = getSafeTokenizationSupport(languageId);
    const lines = splitLines(text);
    const result = [];
    let state = tokenizationSupport.getInitialState();
    for (let i = 0, len = lines.length; i < len; i++) {
        const line = lines[i];
        const tokenizationResult = tokenizationSupport.tokenize(line, true, state);
        result[i] = tokenizationResult.tokens;
        state = tokenizationResult.endState;
    }
    return result;
}
/**
 * Define a new theme or update an existing theme.
 */
function defineTheme(themeName, themeData) {
    const standaloneThemeService = StandaloneServices.get(IStandaloneThemeService);
    standaloneThemeService.defineTheme(themeName, themeData);
}
/**
 * Switches to a theme.
 */
function setTheme(themeName) {
    const standaloneThemeService = StandaloneServices.get(IStandaloneThemeService);
    standaloneThemeService.setTheme(themeName);
}
/**
 * Clears all cached font measurements and triggers re-measurement.
 */
function remeasureFonts() {
    FontMeasurements.clearAllFontInfos();
}
/**
 * Register a command.
 */
function registerCommand(id, handler) {
    return CommandsRegistry.registerCommand({ id, handler });
}
/**
 * Registers a handler that is called when a link is opened in any editor. The handler callback should return `true` if the link was handled and `false` otherwise.
 * The handler that was registered last will be called first when a link is opened.
 *
 * Returns a disposable that can unregister the opener again.
 */
function registerLinkOpener(opener) {
    const openerService = StandaloneServices.get(IOpenerService);
    return openerService.registerOpener({
        async open(resource) {
            if (typeof resource === 'string') {
                resource = URI.parse(resource);
            }
            return opener.open(resource);
        }
    });
}
/**
 * Registers a handler that is called when a resource other than the current model should be opened in the editor (e.g. "go to definition").
 * The handler callback should return `true` if the request was handled and `false` otherwise.
 *
 * Returns a disposable that can unregister the opener again.
 *
 * If no handler is registered the default behavior is to do nothing for models other than the currently attached one.
 */
function registerEditorOpener(opener) {
    const codeEditorService = StandaloneServices.get(ICodeEditorService);
    return codeEditorService.registerCodeEditorOpenHandler(async (input, source, sideBySide) => {
        if (!source) {
            return null;
        }
        const selection = input.options?.selection;
        let selectionOrPosition;
        if (selection && typeof selection.endLineNumber === 'number' && typeof selection.endColumn === 'number') {
            selectionOrPosition = selection;
        }
        else if (selection) {
            selectionOrPosition = { lineNumber: selection.startLineNumber, column: selection.startColumn };
        }
        if (await opener.openCodeEditor(source, input.resource, selectionOrPosition)) {
            return source; // return source editor to indicate that this handler has successfully handled the opening
        }
        return null; // fallback to other registered handlers
    });
}
/**
 * @internal
 */
function createMonacoEditorAPI() {
    return {
        // methods
        // eslint-disable-next-line local/code-no-any-casts
        create: create,
        // eslint-disable-next-line local/code-no-any-casts
        getEditors: getEditors,
        // eslint-disable-next-line local/code-no-any-casts
        getDiffEditors: getDiffEditors,
        // eslint-disable-next-line local/code-no-any-casts
        onDidCreateEditor: onDidCreateEditor,
        // eslint-disable-next-line local/code-no-any-casts
        onDidCreateDiffEditor: onDidCreateDiffEditor,
        // eslint-disable-next-line local/code-no-any-casts
        createDiffEditor: createDiffEditor,
        // eslint-disable-next-line local/code-no-any-casts
        addCommand: addCommand,
        // eslint-disable-next-line local/code-no-any-casts
        addEditorAction: addEditorAction,
        // eslint-disable-next-line local/code-no-any-casts
        addKeybindingRule: addKeybindingRule,
        // eslint-disable-next-line local/code-no-any-casts
        addKeybindingRules: addKeybindingRules,
        // eslint-disable-next-line local/code-no-any-casts
        createModel: createModel,
        // eslint-disable-next-line local/code-no-any-casts
        setModelLanguage: setModelLanguage,
        // eslint-disable-next-line local/code-no-any-casts
        setModelMarkers: setModelMarkers,
        // eslint-disable-next-line local/code-no-any-casts
        getModelMarkers: getModelMarkers,
        removeAllMarkers: removeAllMarkers,
        // eslint-disable-next-line local/code-no-any-casts
        onDidChangeMarkers: onDidChangeMarkers,
        // eslint-disable-next-line local/code-no-any-casts
        getModels: getModels,
        // eslint-disable-next-line local/code-no-any-casts
        getModel: getModel,
        // eslint-disable-next-line local/code-no-any-casts
        onDidCreateModel: onDidCreateModel,
        // eslint-disable-next-line local/code-no-any-casts
        onWillDisposeModel: onWillDisposeModel,
        // eslint-disable-next-line local/code-no-any-casts
        onDidChangeModelLanguage: onDidChangeModelLanguage,
        // eslint-disable-next-line local/code-no-any-casts
        createWebWorker: createWebWorker,
        // eslint-disable-next-line local/code-no-any-casts
        colorizeElement: colorizeElement,
        // eslint-disable-next-line local/code-no-any-casts
        colorize: colorize,
        // eslint-disable-next-line local/code-no-any-casts
        colorizeModelLine: colorizeModelLine,
        // eslint-disable-next-line local/code-no-any-casts
        tokenize: tokenize,
        // eslint-disable-next-line local/code-no-any-casts
        defineTheme: defineTheme,
        // eslint-disable-next-line local/code-no-any-casts
        setTheme: setTheme,
        remeasureFonts: remeasureFonts,
        registerCommand: registerCommand,
        registerLinkOpener: registerLinkOpener,
        // eslint-disable-next-line local/code-no-any-casts
        registerEditorOpener: registerEditorOpener,
        // enums
        AccessibilitySupport: AccessibilitySupport,
        ContentWidgetPositionPreference: ContentWidgetPositionPreference,
        CursorChangeReason: CursorChangeReason,
        DefaultEndOfLine: DefaultEndOfLine,
        EditorAutoIndentStrategy: EditorAutoIndentStrategy,
        EditorOption: EditorOption,
        EndOfLinePreference: EndOfLinePreference,
        EndOfLineSequence: EndOfLineSequence,
        MinimapPosition: MinimapPosition,
        MinimapSectionHeaderStyle: MinimapSectionHeaderStyle,
        MouseTargetType: MouseTargetType,
        OverlayWidgetPositionPreference: OverlayWidgetPositionPreference,
        OverviewRulerLane: OverviewRulerLane,
        GlyphMarginLane: GlyphMarginLane,
        RenderLineNumbersType: RenderLineNumbersType,
        RenderMinimap: RenderMinimap,
        ScrollbarVisibility: ScrollbarVisibility,
        ScrollType: ScrollType,
        TextEditorCursorBlinkingStyle: TextEditorCursorBlinkingStyle,
        TextEditorCursorStyle: TextEditorCursorStyle,
        TrackedRangeStickiness: TrackedRangeStickiness,
        WrappingIndent: WrappingIndent,
        InjectedTextCursorStops: InjectedTextCursorStops,
        PositionAffinity: PositionAffinity,
        ShowLightbulbIconMode: ShowLightbulbIconMode,
        TextDirection: TextDirection,
        // classes
        // eslint-disable-next-line local/code-no-any-casts
        ConfigurationChangedEvent: ConfigurationChangedEvent,
        // eslint-disable-next-line local/code-no-any-casts
        BareFontInfo: BareFontInfo,
        // eslint-disable-next-line local/code-no-any-casts
        FontInfo: FontInfo,
        // eslint-disable-next-line local/code-no-any-casts
        TextModelResolvedOptions: TextModelResolvedOptions,
        // eslint-disable-next-line local/code-no-any-casts
        FindMatch: FindMatch,
        // eslint-disable-next-line local/code-no-any-casts
        ApplyUpdateResult: ApplyUpdateResult,
        // eslint-disable-next-line local/code-no-any-casts
        EditorZoom: EditorZoom,
        // eslint-disable-next-line local/code-no-any-casts
        createMultiFileDiffEditor: createMultiFileDiffEditor,
        // vars
        EditorType: EditorType,
        // eslint-disable-next-line local/code-no-any-casts
        EditorOptions: EditorOptions
    };
}

export { addCommand, addEditorAction, addKeybindingRule, addKeybindingRules, colorize, colorizeElement, colorizeModelLine, create, createDiffEditor, createModel, createMonacoEditorAPI, createMultiFileDiffEditor, createWebWorker, defineTheme, getDiffEditors, getEditors, getModel, getModelMarkers, getModels, onDidChangeMarkers, onDidChangeModelLanguage, onDidCreateDiffEditor, onDidCreateEditor, onDidCreateModel, onWillDisposeModel, registerCommand, registerEditorOpener, registerLinkOpener, remeasureFonts, removeAllMarkers, setModelLanguage, setModelMarkers, setTheme, tokenize };
