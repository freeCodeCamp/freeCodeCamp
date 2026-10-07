import { localize2 } from '../../../../nls.js';
import { alert } from '../../../../base/browser/ui/aria/aria.js';
import { Delayer, first, createCancelablePromise } from '../../../../base/common/async.js';
import { CancellationToken } from '../../../../base/common/cancellation.js';
import { onUnexpectedError, onUnexpectedExternalError } from '../../../../base/common/errors.js';
import { DisposableStore, Disposable } from '../../../../base/common/lifecycle.js';
import { ResourceMap } from '../../../../base/common/map.js';
import { matchesScheme, Schemas } from '../../../../base/common/network.js';
import { isEqual } from '../../../../base/common/resources.js';
import { IConfigurationService } from '../../../../platform/configuration/common/configuration.js';
import { RawContextKey, IContextKeyService } from '../../../../platform/contextkey/common/contextkey.js';
import { ILogService } from '../../../../platform/log/common/log.js';
import { isDiffEditor } from '../../../browser/editorBrowser.js';
import { registerModelAndPositionCommand, registerEditorContribution, registerEditorAction, EditorAction } from '../../../browser/editorExtensions.js';
import { ICodeEditorService } from '../../../browser/services/codeEditorService.js';
import { Range } from '../../../common/core/range.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { registerEditorFeature } from '../../../common/editorFeatures.js';
import { score } from '../../../common/languageSelector.js';
import { shouldSynchronizeModel } from '../../../common/model.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';
import { ITextModelService } from '../../../common/services/resolverService.js';
import { getHighlightDecorationOptions } from './highlightDecorations.js';
import { TextualMultiDocumentHighlightFeature } from './textualHighlightProvider.js';

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
var WordHighlighter_1, WordHighlighterContribution_1;
const ctxHasWordHighlights = new RawContextKey('hasWordHighlights', false);
function getOccurrencesAtPosition(registry, model, position, token) {
    const orderedByScore = registry.ordered(model);
    // in order of score ask the occurrences provider
    // until someone response with a good result
    // (good = non undefined and non null value)
    // (result of size == 0 is valid, no highlights is a valid/expected result -- not a signal to fall back to other providers)
    return first(orderedByScore.map(provider => () => {
        return Promise.resolve(provider.provideDocumentHighlights(model, position, token))
            .then(undefined, onUnexpectedExternalError);
    }), (result) => result !== undefined && result !== null).then(result => {
        if (result) {
            const map = new ResourceMap();
            map.set(model.uri, result);
            return map;
        }
        return new ResourceMap();
    });
}
function getOccurrencesAcrossMultipleModels(registry, model, position, token, otherModels) {
    const orderedByScore = registry.ordered(model);
    // in order of score ask the occurrences provider
    // until someone response with a good result
    // (good = non undefined and non null ResourceMap)
    // (result of size == 0 is valid, no highlights is a valid/expected result -- not a signal to fall back to other providers)
    return first(orderedByScore.map(provider => () => {
        const filteredModels = otherModels.filter(otherModel => {
            return shouldSynchronizeModel(otherModel);
        }).filter(otherModel => {
            return score(provider.selector, otherModel.uri, otherModel.getLanguageId(), true, undefined, undefined) > 0;
        });
        return Promise.resolve(provider.provideMultiDocumentHighlights(model, position, filteredModels, token))
            .then(undefined, onUnexpectedExternalError);
    }), (result) => result !== undefined && result !== null);
}
class OccurenceAtPositionRequest {
    constructor(_model, _selection, _wordSeparators) {
        this._model = _model;
        this._selection = _selection;
        this._wordSeparators = _wordSeparators;
        this._wordRange = this._getCurrentWordRange(_model, _selection);
        this._result = null;
    }
    get result() {
        if (!this._result) {
            this._result = createCancelablePromise(token => this._compute(this._model, this._selection, this._wordSeparators, token));
        }
        return this._result;
    }
    _getCurrentWordRange(model, selection) {
        const word = model.getWordAtPosition(selection.getPosition());
        if (word) {
            return new Range(selection.startLineNumber, word.startColumn, selection.startLineNumber, word.endColumn);
        }
        return null;
    }
    cancel() {
        this.result.cancel();
    }
}
class SemanticOccurenceAtPositionRequest extends OccurenceAtPositionRequest {
    constructor(model, selection, wordSeparators, providers) {
        super(model, selection, wordSeparators);
        this._providers = providers;
    }
    _compute(model, selection, wordSeparators, token) {
        return getOccurrencesAtPosition(this._providers, model, selection.getPosition(), token).then(value => {
            if (!value) {
                return new ResourceMap();
            }
            return value;
        });
    }
}
class MultiModelOccurenceRequest extends OccurenceAtPositionRequest {
    constructor(model, selection, wordSeparators, providers, otherModels) {
        super(model, selection, wordSeparators);
        this._providers = providers;
        this._otherModels = otherModels;
    }
    _compute(model, selection, wordSeparators, token) {
        return getOccurrencesAcrossMultipleModels(this._providers, model, selection.getPosition(), token, this._otherModels).then(value => {
            if (!value) {
                return new ResourceMap();
            }
            return value;
        });
    }
}
function computeOccurencesAtPosition(registry, model, selection, wordSeparators) {
    return new SemanticOccurenceAtPositionRequest(model, selection, wordSeparators, registry);
}
function computeOccurencesMultiModel(registry, model, selection, wordSeparators, otherModels) {
    return new MultiModelOccurenceRequest(model, selection, wordSeparators, registry, otherModels);
}
registerModelAndPositionCommand('_executeDocumentHighlights', async (accessor, model, position) => {
    const languageFeaturesService = accessor.get(ILanguageFeaturesService);
    const map = await getOccurrencesAtPosition(languageFeaturesService.documentHighlightProvider, model, position, CancellationToken.None);
    return map?.get(model.uri);
});
let WordHighlighter = class WordHighlighter {
    static { WordHighlighter_1 = this; }
    static { this.storedDecorationIDs = new ResourceMap(); }
    static { this.query = null; }
    constructor(editor, providers, multiProviders, contextKeyService, textModelService, codeEditorService, configurationService, logService) {
        this.toUnhook = new DisposableStore();
        this.workerRequestTokenId = 0;
        this.workerRequestCompleted = false;
        this.workerRequestValue = new ResourceMap();
        this.lastCursorPositionChangeTime = 0;
        this.renderDecorationsTimer = undefined;
        this.runDelayer = this.toUnhook.add(new Delayer(50));
        this.editor = editor;
        this.providers = providers;
        this.multiDocumentProviders = multiProviders;
        this.codeEditorService = codeEditorService;
        this.textModelService = textModelService;
        this.configurationService = configurationService;
        this.logService = logService;
        this._hasWordHighlights = ctxHasWordHighlights.bindTo(contextKeyService);
        this._ignorePositionChangeEvent = false;
        this.occurrencesHighlightEnablement = this.editor.getOption(90 /* EditorOption.occurrencesHighlight */);
        this.occurrencesHighlightDelay = this.configurationService.getValue('editor.occurrencesHighlightDelay');
        this.model = this.editor.getModel();
        this.toUnhook.add(editor.onDidChangeCursorPosition((e) => {
            if (this._ignorePositionChangeEvent) {
                // We are changing the position => ignore this event
                return;
            }
            if (this.occurrencesHighlightEnablement === 'off') {
                // Early exit if nothing needs to be done!
                // Leave some form of early exit check here if you wish to continue being a cursor position change listener ;)
                return;
            }
            this.runDelayer.trigger(() => { this._onPositionChanged(e); });
        }));
        this.toUnhook.add(editor.onDidFocusEditorText((e) => {
            if (this.occurrencesHighlightEnablement === 'off') {
                // Early exit if nothing needs to be done
                return;
            }
            if (!this.workerRequest) {
                this.runDelayer.trigger(() => { this._run(); });
            }
        }));
        this.toUnhook.add(editor.onDidChangeModelContent((e) => {
            if (!matchesScheme(this.model.uri, 'output')) {
                this._stopAll();
            }
        }));
        this.toUnhook.add(editor.onDidChangeModel((e) => {
            if (!e.newModelUrl && e.oldModelUrl) {
                this._stopSingular();
            }
            else if (WordHighlighter_1.query) {
                this._run();
            }
        }));
        this.toUnhook.add(editor.onDidChangeConfiguration((e) => {
            const newEnablement = this.editor.getOption(90 /* EditorOption.occurrencesHighlight */);
            if (this.occurrencesHighlightEnablement !== newEnablement) {
                this.occurrencesHighlightEnablement = newEnablement;
                switch (newEnablement) {
                    case 'off':
                        this._stopAll();
                        break;
                    case 'singleFile':
                        this._stopAll(WordHighlighter_1.query?.modelInfo?.modelURI);
                        break;
                    case 'multiFile':
                        if (WordHighlighter_1.query) {
                            this._run(true);
                        }
                        break;
                    default:
                        console.warn('Unknown occurrencesHighlight setting value:', newEnablement);
                        break;
                }
            }
        }));
        this.toUnhook.add(this.configurationService.onDidChangeConfiguration((e) => {
            if (e.affectsConfiguration('editor.occurrencesHighlightDelay')) {
                const newDelay = configurationService.getValue('editor.occurrencesHighlightDelay');
                if (this.occurrencesHighlightDelay !== newDelay) {
                    this.occurrencesHighlightDelay = newDelay;
                }
            }
        }));
        this.toUnhook.add(editor.onDidBlurEditorWidget(() => {
            // logic is as follows
            // - didBlur => active null => stopall
            // - didBlur => active nb   => if this.editor is notebook, do nothing (new cell, so we don't want to stopAll)
            //              active nb   => if this.editor is NOT nb,   stopAll
            const activeEditor = this.codeEditorService.getFocusedCodeEditor();
            if (!activeEditor) { // clicked into nb cell list, outline, terminal, etc
                this._stopAll();
            }
            else if (activeEditor.getModel()?.uri.scheme === Schemas.vscodeNotebookCell && this.editor.getModel()?.uri.scheme !== Schemas.vscodeNotebookCell) { // switched tabs from non-nb to nb
                this._stopAll();
            }
        }));
        this.decorations = this.editor.createDecorationsCollection();
        this.workerRequestTokenId = 0;
        this.workerRequest = null;
        this.workerRequestCompleted = false;
        this.lastCursorPositionChangeTime = 0;
        this.renderDecorationsTimer = undefined;
        // if there is a query already, highlight off that query
        if (WordHighlighter_1.query) {
            this._run();
        }
    }
    hasDecorations() {
        return (this.decorations.length > 0);
    }
    restore(delay) {
        if (this.occurrencesHighlightEnablement === 'off') {
            return;
        }
        this.runDelayer.cancel();
        this.runDelayer.trigger(() => { this._run(false, delay); });
    }
    stop() {
        if (this.occurrencesHighlightEnablement === 'off') {
            return;
        }
        this._stopAll();
    }
    _getSortedHighlights() {
        return (this.decorations.getRanges()
            .sort(Range.compareRangesUsingStarts));
    }
    moveNext() {
        const highlights = this._getSortedHighlights();
        const index = highlights.findIndex((range) => range.containsPosition(this.editor.getPosition()));
        const newIndex = ((index + 1) % highlights.length);
        const dest = highlights[newIndex];
        try {
            this._ignorePositionChangeEvent = true;
            this.editor.setPosition(dest.getStartPosition());
            this.editor.revealRangeInCenterIfOutsideViewport(dest);
            const word = this._getWord();
            if (word) {
                const lineContent = this.editor.getModel().getLineContent(dest.startLineNumber);
                alert(`${lineContent}, ${newIndex + 1} of ${highlights.length} for '${word.word}'`);
            }
        }
        finally {
            this._ignorePositionChangeEvent = false;
        }
    }
    moveBack() {
        const highlights = this._getSortedHighlights();
        const index = highlights.findIndex((range) => range.containsPosition(this.editor.getPosition()));
        const newIndex = ((index - 1 + highlights.length) % highlights.length);
        const dest = highlights[newIndex];
        try {
            this._ignorePositionChangeEvent = true;
            this.editor.setPosition(dest.getStartPosition());
            this.editor.revealRangeInCenterIfOutsideViewport(dest);
            const word = this._getWord();
            if (word) {
                const lineContent = this.editor.getModel().getLineContent(dest.startLineNumber);
                alert(`${lineContent}, ${newIndex + 1} of ${highlights.length} for '${word.word}'`);
            }
        }
        finally {
            this._ignorePositionChangeEvent = false;
        }
    }
    _removeSingleDecorations() {
        // return if no model
        if (!this.editor.hasModel()) {
            return;
        }
        const currentDecorationIDs = WordHighlighter_1.storedDecorationIDs.get(this.editor.getModel().uri);
        if (!currentDecorationIDs) {
            return;
        }
        this.editor.removeDecorations(currentDecorationIDs);
        WordHighlighter_1.storedDecorationIDs.delete(this.editor.getModel().uri);
        if (this.decorations.length > 0) {
            this.decorations.clear();
            this._hasWordHighlights.set(false);
        }
    }
    _removeAllDecorations(preservedModel) {
        const currentEditors = this.codeEditorService.listCodeEditors();
        const deleteURI = [];
        // iterate over editors and store models in currentModels
        for (const editor of currentEditors) {
            if (!editor.hasModel() || isEqual(editor.getModel().uri, preservedModel)) {
                continue;
            }
            const currentDecorationIDs = WordHighlighter_1.storedDecorationIDs.get(editor.getModel().uri);
            if (!currentDecorationIDs) {
                continue;
            }
            editor.removeDecorations(currentDecorationIDs);
            deleteURI.push(editor.getModel().uri);
            const editorHighlighterContrib = WordHighlighterContribution.get(editor);
            if (!editorHighlighterContrib?.wordHighlighter) {
                continue;
            }
            if (editorHighlighterContrib.wordHighlighter.decorations.length > 0) {
                editorHighlighterContrib.wordHighlighter.decorations.clear();
                editorHighlighterContrib.wordHighlighter.workerRequest = null;
                editorHighlighterContrib.wordHighlighter._hasWordHighlights.set(false);
            }
        }
        for (const uri of deleteURI) {
            WordHighlighter_1.storedDecorationIDs.delete(uri);
        }
    }
    _stopSingular() {
        // Remove any existing decorations + a possible query, and re - run to update decorations
        this._removeSingleDecorations();
        if (this.editor.hasTextFocus()) {
            if (this.editor.getModel()?.uri.scheme !== Schemas.vscodeNotebookCell && WordHighlighter_1.query?.modelInfo?.modelURI.scheme !== Schemas.vscodeNotebookCell) { // clear query if focused non-nb editor
                WordHighlighter_1.query = null;
                this._run(); // TODO: @Yoyokrazy -- investigate why we need a full rerun here. likely addressed a case/patch in the first iteration of this feature
            }
            else { // remove modelInfo to account for nb cell being disposed
                if (WordHighlighter_1.query?.modelInfo) {
                    WordHighlighter_1.query.modelInfo = null;
                }
            }
        }
        // Cancel any renderDecorationsTimer
        if (this.renderDecorationsTimer !== undefined) {
            clearTimeout(this.renderDecorationsTimer);
            this.renderDecorationsTimer = undefined;
        }
        // Cancel any worker request
        if (this.workerRequest !== null) {
            this.workerRequest.cancel();
            this.workerRequest = null;
        }
        // Invalidate any worker request callback
        if (!this.workerRequestCompleted) {
            this.workerRequestTokenId++;
            this.workerRequestCompleted = true;
        }
    }
    _stopAll(preservedModel) {
        // Remove any existing decorations
        // TODO: @Yoyokrazy -- this triggers as notebooks scroll, causing highlights to disappear momentarily.
        // maybe a nb type check?
        this._removeAllDecorations(preservedModel);
        // Cancel any renderDecorationsTimer
        if (this.renderDecorationsTimer !== undefined) {
            clearTimeout(this.renderDecorationsTimer);
            this.renderDecorationsTimer = undefined;
        }
        // Cancel any worker request
        if (this.workerRequest !== null) {
            this.workerRequest.cancel();
            this.workerRequest = null;
        }
        // Invalidate any worker request callback
        if (!this.workerRequestCompleted) {
            this.workerRequestTokenId++;
            this.workerRequestCompleted = true;
        }
    }
    _onPositionChanged(e) {
        // disabled
        if (this.occurrencesHighlightEnablement === 'off') {
            this._stopAll();
            return;
        }
        // ignore typing & other
        // need to check if the model is a notebook cell, should not stop if nb
        if (e.source !== 'api' && e.reason !== 3 /* CursorChangeReason.Explicit */) {
            this._stopAll();
            return;
        }
        this._run();
    }
    _getWord() {
        const editorSelection = this.editor.getSelection();
        const lineNumber = editorSelection.startLineNumber;
        const startColumn = editorSelection.startColumn;
        if (this.model.isDisposed()) {
            return null;
        }
        return this.model.getWordAtPosition({
            lineNumber: lineNumber,
            column: startColumn
        });
    }
    getOtherModelsToHighlight(model) {
        if (!model) {
            return [];
        }
        // notebook case
        const isNotebookEditor = model.uri.scheme === Schemas.vscodeNotebookCell;
        if (isNotebookEditor) {
            const currentModels = [];
            const currentEditors = this.codeEditorService.listCodeEditors();
            for (const editor of currentEditors) {
                const tempModel = editor.getModel();
                if (tempModel && tempModel !== model && tempModel.uri.scheme === Schemas.vscodeNotebookCell) {
                    currentModels.push(tempModel);
                }
            }
            return currentModels;
        }
        // inline case
        // ? current works when highlighting outside of an inline diff, highlighting in.
        // ? broken when highlighting within a diff editor. highlighting the main editor does not work
        // ? editor group service could be useful here
        const currentModels = [];
        const currentEditors = this.codeEditorService.listCodeEditors();
        for (const editor of currentEditors) {
            if (!isDiffEditor(editor)) {
                continue;
            }
            const diffModel = editor.getModel();
            if (!diffModel) {
                continue;
            }
            if (model === diffModel.modified) { // embedded inline chat diff would pass this, allowing highlights
                //? currentModels.push(diffModel.original);
                currentModels.push(diffModel.modified);
            }
        }
        if (currentModels.length) { // no matching editors have been found
            return currentModels;
        }
        // multi-doc OFF
        if (this.occurrencesHighlightEnablement === 'singleFile') {
            return [];
        }
        // multi-doc ON
        for (const editor of currentEditors) {
            const tempModel = editor.getModel();
            const isValidModel = tempModel && tempModel !== model;
            if (isValidModel) {
                currentModels.push(tempModel);
            }
        }
        return currentModels;
    }
    async _run(multiFileConfigChange, delay) {
        const hasTextFocus = this.editor.hasTextFocus();
        if (!hasTextFocus) { // new nb cell scrolled in, didChangeModel fires
            if (!WordHighlighter_1.query) { // no previous query, nothing to highlight off of
                this._stopAll();
                return;
            }
        }
        else { // has text focus
            const editorSelection = this.editor.getSelection();
            // ignore multiline selection
            if (!editorSelection || editorSelection.startLineNumber !== editorSelection.endLineNumber) {
                WordHighlighter_1.query = null;
                this._stopAll();
                return;
            }
            const startColumn = editorSelection.startColumn;
            const endColumn = editorSelection.endColumn;
            const word = this._getWord();
            // The selection must be inside a word or surround one word at most
            if (!word || word.startColumn > startColumn || word.endColumn < endColumn) {
                // no previous query, nothing to highlight
                WordHighlighter_1.query = null;
                this._stopAll();
                return;
            }
            WordHighlighter_1.query = {
                modelInfo: {
                    modelURI: this.model.uri,
                    selection: editorSelection,
                }
            };
        }
        this.lastCursorPositionChangeTime = (new Date()).getTime();
        if (isEqual(this.editor.getModel().uri, WordHighlighter_1.query.modelInfo?.modelURI)) { // only trigger new worker requests from the primary model that initiated the query
            // case d)
            // check if the new queried word is contained in the range of a stored decoration for this model
            if (!multiFileConfigChange) {
                const currentModelDecorationRanges = this.decorations.getRanges();
                for (const storedRange of currentModelDecorationRanges) {
                    if (storedRange.containsPosition(this.editor.getPosition())) {
                        return;
                    }
                }
            }
            // stop all previous actions if new word is highlighted
            // if we trigger the run off a setting change -> multifile highlighting, we do not want to remove decorations from this model
            this._stopAll(multiFileConfigChange ? this.model.uri : undefined);
            const myRequestId = ++this.workerRequestTokenId;
            this.workerRequestCompleted = false;
            const otherModelsToHighlight = this.getOtherModelsToHighlight(this.editor.getModel());
            // when reaching here, there are two possible states.
            // 		1) we have text focus, and a valid query was updated.
            // 		2) we do not have text focus, and a valid query is cached.
            // the query will ALWAYS have the correct data for the current highlight request, so it can always be passed to the workerRequest safely
            if (!WordHighlighter_1.query || !WordHighlighter_1.query.modelInfo) {
                return;
            }
            const queryModelRef = await this.textModelService.createModelReference(WordHighlighter_1.query.modelInfo.modelURI);
            try {
                this.workerRequest = this.computeWithModel(queryModelRef.object.textEditorModel, WordHighlighter_1.query.modelInfo.selection, otherModelsToHighlight);
                this.workerRequest?.result.then(data => {
                    if (myRequestId === this.workerRequestTokenId) {
                        this.workerRequestCompleted = true;
                        this.workerRequestValue = data || [];
                        this._beginRenderDecorations(delay ?? this.occurrencesHighlightDelay);
                    }
                }, onUnexpectedError);
            }
            catch (e) {
                this.logService.error('Unexpected error during occurrence request. Log: ', e);
            }
            finally {
                queryModelRef.dispose();
            }
        }
        else if (this.model.uri.scheme === Schemas.vscodeNotebookCell) {
            // new wordHighlighter coming from a different model, NOT the query model, need to create a textModel ref
            const myRequestId = ++this.workerRequestTokenId;
            this.workerRequestCompleted = false;
            if (!WordHighlighter_1.query || !WordHighlighter_1.query.modelInfo) {
                return;
            }
            const queryModelRef = await this.textModelService.createModelReference(WordHighlighter_1.query.modelInfo.modelURI);
            try {
                this.workerRequest = this.computeWithModel(queryModelRef.object.textEditorModel, WordHighlighter_1.query.modelInfo.selection, [this.model]);
                this.workerRequest?.result.then(data => {
                    if (myRequestId === this.workerRequestTokenId) {
                        this.workerRequestCompleted = true;
                        this.workerRequestValue = data || [];
                        this._beginRenderDecorations(delay ?? this.occurrencesHighlightDelay);
                    }
                }, onUnexpectedError);
            }
            catch (e) {
                this.logService.error('Unexpected error during occurrence request. Log: ', e);
            }
            finally {
                queryModelRef.dispose();
            }
        }
    }
    computeWithModel(model, selection, otherModels) {
        if (!otherModels.length) {
            return computeOccurencesAtPosition(this.providers, model, selection, this.editor.getOption(148 /* EditorOption.wordSeparators */));
        }
        else {
            return computeOccurencesMultiModel(this.multiDocumentProviders, model, selection, this.editor.getOption(148 /* EditorOption.wordSeparators */), otherModels);
        }
    }
    _beginRenderDecorations(delay) {
        const currentTime = (new Date()).getTime();
        const minimumRenderTime = this.lastCursorPositionChangeTime + delay;
        if (currentTime >= minimumRenderTime) {
            // Synchronous
            this.renderDecorationsTimer = undefined;
            this.renderDecorations();
        }
        else {
            // Asynchronous
            this.renderDecorationsTimer = setTimeout(() => {
                this.renderDecorations();
            }, (minimumRenderTime - currentTime));
        }
    }
    renderDecorations() {
        this.renderDecorationsTimer = undefined;
        // create new loop, iterate over current editors using this.codeEditorService.listCodeEditors(),
        // if the URI of that codeEditor is in the map, then add the decorations to the decorations array
        // then set the decorations for the editor
        const currentEditors = this.codeEditorService.listCodeEditors();
        for (const editor of currentEditors) {
            const editorHighlighterContrib = WordHighlighterContribution.get(editor);
            if (!editorHighlighterContrib) {
                continue;
            }
            const newDecorations = [];
            const uri = editor.getModel()?.uri;
            if (uri && this.workerRequestValue.has(uri)) {
                const oldDecorationIDs = WordHighlighter_1.storedDecorationIDs.get(uri);
                const newDocumentHighlights = this.workerRequestValue.get(uri);
                if (newDocumentHighlights) {
                    for (const highlight of newDocumentHighlights) {
                        if (!highlight.range) {
                            continue;
                        }
                        newDecorations.push({
                            range: highlight.range,
                            options: getHighlightDecorationOptions(highlight.kind)
                        });
                    }
                }
                let newDecorationIDs = [];
                editor.changeDecorations((changeAccessor) => {
                    newDecorationIDs = changeAccessor.deltaDecorations(oldDecorationIDs ?? [], newDecorations);
                });
                WordHighlighter_1.storedDecorationIDs = WordHighlighter_1.storedDecorationIDs.set(uri, newDecorationIDs);
                if (newDecorations.length > 0) {
                    editorHighlighterContrib.wordHighlighter?.decorations.set(newDecorations);
                    editorHighlighterContrib.wordHighlighter?._hasWordHighlights.set(true);
                }
            }
        }
        // clear the worker request when decorations are completed
        this.workerRequest = null;
    }
    dispose() {
        this._stopSingular();
        this.toUnhook.dispose();
    }
};
WordHighlighter = WordHighlighter_1 = __decorate([
    __param(4, ITextModelService),
    __param(5, ICodeEditorService),
    __param(6, IConfigurationService),
    __param(7, ILogService)
], WordHighlighter);
let WordHighlighterContribution = class WordHighlighterContribution extends Disposable {
    static { WordHighlighterContribution_1 = this; }
    static { this.ID = 'editor.contrib.wordHighlighter'; }
    static get(editor) {
        return editor.getContribution(WordHighlighterContribution_1.ID);
    }
    constructor(editor, contextKeyService, languageFeaturesService, codeEditorService, textModelService, configurationService, logService) {
        super();
        this._wordHighlighter = null;
        const createWordHighlighterIfPossible = () => {
            if (editor.hasModel() && !editor.getModel().isTooLargeForTokenization() && editor.getModel().uri.scheme !== Schemas.accessibleView) {
                this._wordHighlighter = new WordHighlighter(editor, languageFeaturesService.documentHighlightProvider, languageFeaturesService.multiDocumentHighlightProvider, contextKeyService, textModelService, codeEditorService, configurationService, logService);
            }
        };
        this._register(editor.onDidChangeModel((e) => {
            if (this._wordHighlighter) {
                if (!e.newModelUrl && e.oldModelUrl?.scheme !== Schemas.vscodeNotebookCell) { // happens when switching tabs to a notebook that has focus in the cell list, no new model URI (this also doesn't make it to the wordHighlighter, bc no editor.hasModel)
                    this.wordHighlighter?.stop();
                }
                this._wordHighlighter.dispose();
                this._wordHighlighter = null;
            }
            createWordHighlighterIfPossible();
        }));
        createWordHighlighterIfPossible();
    }
    get wordHighlighter() {
        return this._wordHighlighter;
    }
    saveViewState() {
        if (this._wordHighlighter && this._wordHighlighter.hasDecorations()) {
            return true;
        }
        return false;
    }
    moveNext() {
        this._wordHighlighter?.moveNext();
    }
    moveBack() {
        this._wordHighlighter?.moveBack();
    }
    restoreViewState(state) {
        if (this._wordHighlighter && state) {
            this._wordHighlighter.restore(250); // 250 ms delay to restoring view state, since only exts call this
        }
    }
    dispose() {
        if (this._wordHighlighter) {
            this._wordHighlighter.dispose();
            this._wordHighlighter = null;
        }
        super.dispose();
    }
};
WordHighlighterContribution = WordHighlighterContribution_1 = __decorate([
    __param(1, IContextKeyService),
    __param(2, ILanguageFeaturesService),
    __param(3, ICodeEditorService),
    __param(4, ITextModelService),
    __param(5, IConfigurationService),
    __param(6, ILogService)
], WordHighlighterContribution);
class WordHighlightNavigationAction extends EditorAction {
    constructor(next, opts) {
        super(opts);
        this._isNext = next;
    }
    run(accessor, editor) {
        const controller = WordHighlighterContribution.get(editor);
        if (!controller) {
            return;
        }
        if (this._isNext) {
            controller.moveNext();
        }
        else {
            controller.moveBack();
        }
    }
}
class NextWordHighlightAction extends WordHighlightNavigationAction {
    constructor() {
        super(true, {
            id: 'editor.action.wordHighlight.next',
            label: localize2(1572, "Go to Next Symbol Highlight"),
            precondition: ctxHasWordHighlights,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 65 /* KeyCode.F7 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
}
class PrevWordHighlightAction extends WordHighlightNavigationAction {
    constructor() {
        super(false, {
            id: 'editor.action.wordHighlight.prev',
            label: localize2(1573, "Go to Previous Symbol Highlight"),
            precondition: ctxHasWordHighlights,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 1024 /* KeyMod.Shift */ | 65 /* KeyCode.F7 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
}
class TriggerWordHighlightAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.wordHighlight.trigger',
            label: localize2(1574, "Trigger Symbol Highlight"),
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 0,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor, args) {
        const controller = WordHighlighterContribution.get(editor);
        if (!controller) {
            return;
        }
        controller.restoreViewState(true);
    }
}
registerEditorContribution(WordHighlighterContribution.ID, WordHighlighterContribution, 0 /* EditorContributionInstantiation.Eager */); // eager because it uses `saveViewState`/`restoreViewState`
registerEditorAction(NextWordHighlightAction);
registerEditorAction(PrevWordHighlightAction);
registerEditorAction(TriggerWordHighlightAction);
registerEditorFeature(TextualMultiDocumentHighlightFeature);

export { WordHighlighterContribution, getOccurrencesAcrossMultipleModels, getOccurrencesAtPosition };
