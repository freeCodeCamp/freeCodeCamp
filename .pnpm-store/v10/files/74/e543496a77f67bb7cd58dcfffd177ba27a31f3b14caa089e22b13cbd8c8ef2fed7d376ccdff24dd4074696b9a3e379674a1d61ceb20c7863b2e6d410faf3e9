import { TimeoutTimer } from '../../../../base/common/async.js';
import { CancellationTokenSource } from '../../../../base/common/cancellation.js';
import { onUnexpectedError } from '../../../../base/common/errors.js';
import { Emitter } from '../../../../base/common/event.js';
import { DisposableStore, dispose } from '../../../../base/common/lifecycle.js';
import { getLeadingWhitespace, isLowSurrogate, isHighSurrogate } from '../../../../base/common/strings.js';
import { Selection } from '../../../common/core/selection.js';
import { IEditorWorkerService } from '../../../common/services/editorWorker.js';
import { WordDistance } from './wordDistance.js';
import { IClipboardService } from '../../../../platform/clipboard/common/clipboardService.js';
import { IConfigurationService } from '../../../../platform/configuration/common/configuration.js';
import { IContextKeyService } from '../../../../platform/contextkey/common/contextkey.js';
import { ILogService } from '../../../../platform/log/common/log.js';
import { ITelemetryService } from '../../../../platform/telemetry/common/telemetry.js';
import { CompletionModel } from './completionModel.js';
import { QuickSuggestionsOptions, CompletionOptions, provideSuggestionItems } from './suggest.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';
import { FuzzyScoreOptions } from '../../../../base/common/filters.js';
import { assertType } from '../../../../base/common/types.js';
import { InlineCompletionContextKeys } from '../../inlineCompletions/browser/controller/inlineCompletionContextKeys.js';
import { SnippetController2 } from '../../snippet/browser/snippetController2.js';
import { IEnvironmentService } from '../../../../platform/environment/common/environment.js';

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
var SuggestModel_1;
class LineContext {
    static shouldAutoTrigger(editor) {
        if (!editor.hasModel()) {
            return false;
        }
        const model = editor.getModel();
        const pos = editor.getPosition();
        model.tokenization.tokenizeIfCheap(pos.lineNumber);
        const word = model.getWordAtPosition(pos);
        if (!word) {
            return false;
        }
        if (word.endColumn !== pos.column &&
            word.startColumn + 1 !== pos.column /* after typing a single character before a word */) {
            return false;
        }
        if (!isNaN(Number(word.word))) {
            return false;
        }
        return true;
    }
    constructor(model, position, triggerOptions) {
        this.leadingLineContent = model.getLineContent(position.lineNumber).substr(0, position.column - 1);
        this.leadingWord = model.getWordUntilPosition(position);
        this.lineNumber = position.lineNumber;
        this.column = position.column;
        this.triggerOptions = triggerOptions;
    }
}
function canShowQuickSuggest(editor, contextKeyService, configurationService) {
    if (!Boolean(contextKeyService.getContextKeyValue(InlineCompletionContextKeys.inlineSuggestionVisible.key))) {
        // Allow if there is no inline suggestion.
        return true;
    }
    const suppressSuggestions = contextKeyService.getContextKeyValue(InlineCompletionContextKeys.suppressSuggestions.key);
    if (suppressSuggestions !== undefined) {
        return !suppressSuggestions;
    }
    return !editor.getOption(71 /* EditorOption.inlineSuggest */).suppressSuggestions;
}
function canShowSuggestOnTriggerCharacters(editor, contextKeyService, configurationService) {
    if (!Boolean(contextKeyService.getContextKeyValue('inlineSuggestionVisible'))) {
        // Allow if there is no inline suggestion.
        return true;
    }
    const suppressSuggestions = contextKeyService.getContextKeyValue(InlineCompletionContextKeys.suppressSuggestions.key);
    if (suppressSuggestions !== undefined) {
        return !suppressSuggestions;
    }
    return !editor.getOption(71 /* EditorOption.inlineSuggest */).suppressSuggestions;
}
let SuggestModel = SuggestModel_1 = class SuggestModel {
    constructor(_editor, _editorWorkerService, _clipboardService, _telemetryService, _logService, _contextKeyService, _configurationService, _languageFeaturesService, _envService) {
        this._editor = _editor;
        this._editorWorkerService = _editorWorkerService;
        this._clipboardService = _clipboardService;
        this._telemetryService = _telemetryService;
        this._logService = _logService;
        this._contextKeyService = _contextKeyService;
        this._configurationService = _configurationService;
        this._languageFeaturesService = _languageFeaturesService;
        this._envService = _envService;
        this._toDispose = new DisposableStore();
        this._triggerCharacterListener = new DisposableStore();
        this._triggerQuickSuggest = new TimeoutTimer();
        this._triggerState = undefined;
        this._completionDisposables = new DisposableStore();
        this._onDidCancel = new Emitter();
        this._onDidTrigger = new Emitter();
        this._onDidSuggest = new Emitter();
        this.onDidCancel = this._onDidCancel.event;
        this.onDidTrigger = this._onDidTrigger.event;
        this.onDidSuggest = this._onDidSuggest.event;
        this._currentSelection = this._editor.getSelection() || new Selection(1, 1, 1, 1);
        // wire up various listeners
        this._toDispose.add(this._editor.onDidChangeModel(() => {
            this._updateTriggerCharacters();
            this.cancel();
        }));
        this._toDispose.add(this._editor.onDidChangeModelLanguage(() => {
            this._updateTriggerCharacters();
            this.cancel();
        }));
        this._toDispose.add(this._editor.onDidChangeConfiguration(() => {
            this._updateTriggerCharacters();
        }));
        this._toDispose.add(this._languageFeaturesService.completionProvider.onDidChange(() => {
            this._updateTriggerCharacters();
            this._updateActiveSuggestSession();
        }));
        let editorIsComposing = false;
        this._toDispose.add(this._editor.onDidCompositionStart(() => {
            editorIsComposing = true;
        }));
        this._toDispose.add(this._editor.onDidCompositionEnd(() => {
            editorIsComposing = false;
            this._onCompositionEnd();
        }));
        this._toDispose.add(this._editor.onDidChangeCursorSelection(e => {
            // only trigger suggest when the editor isn't composing a character
            if (!editorIsComposing) {
                this._onCursorChange(e);
            }
        }));
        this._toDispose.add(this._editor.onDidChangeModelContent(() => {
            // only filter completions when the editor isn't composing a character
            // allow-any-unicode-next-line
            // e.g. ¨ + u makes ü but just ¨ cannot be used for filtering
            if (!editorIsComposing && this._triggerState !== undefined) {
                this._refilterCompletionItems();
            }
        }));
        this._updateTriggerCharacters();
    }
    dispose() {
        dispose(this._triggerCharacterListener);
        dispose([this._onDidCancel, this._onDidSuggest, this._onDidTrigger, this._triggerQuickSuggest]);
        this._toDispose.dispose();
        this._completionDisposables.dispose();
        this.cancel();
    }
    _updateTriggerCharacters() {
        this._triggerCharacterListener.clear();
        if (this._editor.getOption(104 /* EditorOption.readOnly */)
            || !this._editor.hasModel()
            || !this._editor.getOption(137 /* EditorOption.suggestOnTriggerCharacters */)) {
            return;
        }
        const supportsByTriggerCharacter = new Map();
        for (const support of this._languageFeaturesService.completionProvider.all(this._editor.getModel())) {
            for (const ch of support.triggerCharacters || []) {
                let set = supportsByTriggerCharacter.get(ch);
                if (!set) {
                    set = new Set();
                    supportsByTriggerCharacter.set(ch, set);
                }
                set.add(support);
            }
        }
        const checkTriggerCharacter = (text) => {
            if (!canShowSuggestOnTriggerCharacters(this._editor, this._contextKeyService, this._configurationService)) {
                return;
            }
            if (LineContext.shouldAutoTrigger(this._editor)) {
                // don't trigger by trigger characters when this is a case for quick suggest
                return;
            }
            if (!text) {
                // came here from the compositionEnd-event
                const position = this._editor.getPosition();
                const model = this._editor.getModel();
                text = model.getLineContent(position.lineNumber).substr(0, position.column - 1);
            }
            let lastChar = '';
            if (isLowSurrogate(text.charCodeAt(text.length - 1))) {
                if (isHighSurrogate(text.charCodeAt(text.length - 2))) {
                    lastChar = text.substr(text.length - 2);
                }
            }
            else {
                lastChar = text.charAt(text.length - 1);
            }
            const supports = supportsByTriggerCharacter.get(lastChar);
            if (supports) {
                // keep existing items that where not computed by the
                // supports/providers that want to trigger now
                const providerItemsToReuse = new Map();
                if (this._completionModel) {
                    for (const [provider, items] of this._completionModel.getItemsByProvider()) {
                        if (!supports.has(provider)) {
                            providerItemsToReuse.set(provider, items);
                        }
                    }
                }
                this.trigger({
                    auto: true,
                    triggerKind: 1 /* CompletionTriggerKind.TriggerCharacter */,
                    triggerCharacter: lastChar,
                    retrigger: Boolean(this._completionModel),
                    clipboardText: this._completionModel?.clipboardText,
                    completionOptions: { providerFilter: supports, providerItemsToReuse }
                });
            }
        };
        this._triggerCharacterListener.add(this._editor.onDidType(checkTriggerCharacter));
        this._triggerCharacterListener.add(this._editor.onDidCompositionEnd(() => checkTriggerCharacter()));
    }
    // --- trigger/retrigger/cancel suggest
    get state() {
        if (!this._triggerState) {
            return 0 /* State.Idle */;
        }
        else if (!this._triggerState.auto) {
            return 1 /* State.Manual */;
        }
        else {
            return 2 /* State.Auto */;
        }
    }
    cancel(retrigger = false) {
        if (this._triggerState !== undefined) {
            this._triggerQuickSuggest.cancel();
            this._requestToken?.cancel();
            this._requestToken = undefined;
            this._triggerState = undefined;
            this._completionModel = undefined;
            this._context = undefined;
            this._onDidCancel.fire({ retrigger });
        }
    }
    clear() {
        this._completionDisposables.clear();
    }
    _updateActiveSuggestSession() {
        if (this._triggerState !== undefined) {
            if (!this._editor.hasModel() || !this._languageFeaturesService.completionProvider.has(this._editor.getModel())) {
                this.cancel();
            }
            else {
                this.trigger({ auto: this._triggerState.auto, retrigger: true });
            }
        }
    }
    _onCursorChange(e) {
        if (!this._editor.hasModel()) {
            return;
        }
        const prevSelection = this._currentSelection;
        this._currentSelection = this._editor.getSelection();
        if (!e.selection.isEmpty()
            || (e.reason !== 0 /* CursorChangeReason.NotSet */ && e.reason !== 3 /* CursorChangeReason.Explicit */)
            || (e.source !== 'keyboard' && e.source !== 'deleteLeft')) {
            // Early exit if nothing needs to be done!
            // Leave some form of early exit check here if you wish to continue being a cursor position change listener ;)
            this.cancel();
            return;
        }
        if (this._triggerState === undefined && e.reason === 0 /* CursorChangeReason.NotSet */) {
            if (prevSelection.containsRange(this._currentSelection) || prevSelection.getEndPosition().isBeforeOrEqual(this._currentSelection.getPosition())) {
                // cursor did move RIGHT due to typing -> trigger quick suggest
                this._doTriggerQuickSuggest();
            }
        }
        else if (this._triggerState !== undefined && e.reason === 3 /* CursorChangeReason.Explicit */) {
            // suggest is active and something like cursor keys are used to move
            // the cursor. this means we can refilter at the new position
            this._refilterCompletionItems();
        }
    }
    _onCompositionEnd() {
        // trigger or refilter when composition ends
        if (this._triggerState === undefined) {
            this._doTriggerQuickSuggest();
        }
        else {
            this._refilterCompletionItems();
        }
    }
    _doTriggerQuickSuggest() {
        if (QuickSuggestionsOptions.isAllOff(this._editor.getOption(102 /* EditorOption.quickSuggestions */))) {
            // not enabled
            return;
        }
        if (this._editor.getOption(134 /* EditorOption.suggest */).snippetsPreventQuickSuggestions && SnippetController2.get(this._editor)?.isInSnippet()) {
            // no quick suggestion when in snippet mode
            return;
        }
        this.cancel();
        this._triggerQuickSuggest.cancelAndSet(() => {
            if (this._triggerState !== undefined) {
                return;
            }
            if (!LineContext.shouldAutoTrigger(this._editor)) {
                return;
            }
            if (!this._editor.hasModel() || !this._editor.hasWidgetFocus()) {
                return;
            }
            const model = this._editor.getModel();
            const pos = this._editor.getPosition();
            // validate enabled now
            const config = this._editor.getOption(102 /* EditorOption.quickSuggestions */);
            if (QuickSuggestionsOptions.isAllOff(config)) {
                return;
            }
            if (!QuickSuggestionsOptions.isAllOn(config)) {
                // Check the type of the token that triggered this
                model.tokenization.tokenizeIfCheap(pos.lineNumber);
                const lineTokens = model.tokenization.getLineTokens(pos.lineNumber);
                const tokenType = lineTokens.getStandardTokenType(lineTokens.findTokenIndexAtOffset(Math.max(pos.column - 1 - 1, 0)));
                if (QuickSuggestionsOptions.valueFor(config, tokenType) !== 'on') {
                    return;
                }
            }
            if (!canShowQuickSuggest(this._editor, this._contextKeyService, this._configurationService)) {
                // do not trigger quick suggestions if inline suggestions are shown
                return;
            }
            if (!this._languageFeaturesService.completionProvider.has(model)) {
                return;
            }
            // we made it till here -> trigger now
            this.trigger({ auto: true });
        }, this._editor.getOption(103 /* EditorOption.quickSuggestionsDelay */));
    }
    _refilterCompletionItems() {
        assertType(this._editor.hasModel());
        assertType(this._triggerState !== undefined);
        const model = this._editor.getModel();
        const position = this._editor.getPosition();
        const ctx = new LineContext(model, position, { ...this._triggerState, refilter: true });
        this._onNewContext(ctx);
    }
    trigger(options) {
        if (!this._editor.hasModel()) {
            return;
        }
        const model = this._editor.getModel();
        const ctx = new LineContext(model, this._editor.getPosition(), options);
        // Cancel previous requests, change state & update UI
        this.cancel(options.retrigger);
        this._triggerState = options;
        this._onDidTrigger.fire({ auto: options.auto, shy: options.shy ?? false, position: this._editor.getPosition() });
        // Capture context when request was sent
        this._context = ctx;
        // Build context for request
        let suggestCtx = { triggerKind: options.triggerKind ?? 0 /* CompletionTriggerKind.Invoke */ };
        if (options.triggerCharacter) {
            suggestCtx = {
                triggerKind: 1 /* CompletionTriggerKind.TriggerCharacter */,
                triggerCharacter: options.triggerCharacter
            };
        }
        this._requestToken = new CancellationTokenSource();
        // kind filter and snippet sort rules
        const snippetSuggestions = this._editor.getOption(128 /* EditorOption.snippetSuggestions */);
        let snippetSortOrder = 1 /* SnippetSortOrder.Inline */;
        switch (snippetSuggestions) {
            case 'top':
                snippetSortOrder = 0 /* SnippetSortOrder.Top */;
                break;
            // 	↓ that's the default anyways...
            // case 'inline':
            // 	snippetSortOrder = SnippetSortOrder.Inline;
            // 	break;
            case 'bottom':
                snippetSortOrder = 2 /* SnippetSortOrder.Bottom */;
                break;
        }
        const { itemKind: itemKindFilter, showDeprecated } = SuggestModel_1.createSuggestFilter(this._editor);
        const completionOptions = new CompletionOptions(snippetSortOrder, options.completionOptions?.kindFilter ?? itemKindFilter, options.completionOptions?.providerFilter, options.completionOptions?.providerItemsToReuse, showDeprecated);
        const wordDistance = WordDistance.create(this._editorWorkerService, this._editor);
        const completions = provideSuggestionItems(this._languageFeaturesService.completionProvider, model, this._editor.getPosition(), completionOptions, suggestCtx, this._requestToken.token);
        Promise.all([completions, wordDistance]).then(async ([completions, wordDistance]) => {
            this._requestToken?.dispose();
            if (!this._editor.hasModel()) {
                completions.disposable.dispose();
                return;
            }
            let clipboardText = options?.clipboardText;
            if (!clipboardText && completions.needsClipboard) {
                clipboardText = await this._clipboardService.readText();
            }
            if (this._triggerState === undefined) {
                completions.disposable.dispose();
                return;
            }
            const model = this._editor.getModel();
            // const items = completions.items;
            // if (existing) {
            // 	const cmpFn = getSuggestionComparator(snippetSortOrder);
            // 	items = items.concat(existing.items).sort(cmpFn);
            // }
            const ctx = new LineContext(model, this._editor.getPosition(), options);
            const fuzzySearchOptions = {
                ...FuzzyScoreOptions.default,
                firstMatchCanBeWeak: !this._editor.getOption(134 /* EditorOption.suggest */).matchOnWordStartOnly
            };
            this._completionModel = new CompletionModel(completions.items, this._context.column, {
                leadingLineContent: ctx.leadingLineContent,
                characterCountDelta: ctx.column - this._context.column
            }, wordDistance, this._editor.getOption(134 /* EditorOption.suggest */), this._editor.getOption(128 /* EditorOption.snippetSuggestions */), fuzzySearchOptions, clipboardText);
            // store containers so that they can be disposed later
            this._completionDisposables.add(completions.disposable);
            this._onNewContext(ctx);
            // finally report telemetry about durations
            this._reportDurationsTelemetry(completions.durations);
            // report invalid completions by source
            if (!this._envService.isBuilt || this._envService.isExtensionDevelopment) {
                for (const item of completions.items) {
                    if (item.isInvalid) {
                        this._logService.warn(`[suggest] did IGNORE invalid completion item from ${item.provider._debugDisplayName}`, item.completion);
                    }
                }
            }
        }).catch(onUnexpectedError);
    }
    /**
     * Report durations telemetry with a 1% sampling rate.
     * The telemetry is reported only if a random number between 0 and 100 is less than or equal to 1.
     */
    _reportDurationsTelemetry(durations) {
        if (Math.random() > 0.0001) { // 0.01%
            return;
        }
        setTimeout(() => {
            this._telemetryService.publicLog2('suggest.durations.json', { data: JSON.stringify(durations) });
            this._logService.debug('suggest.durations.json', durations);
        });
    }
    static createSuggestFilter(editor) {
        // kind filter and snippet sort rules
        const result = new Set();
        // snippet setting
        const snippetSuggestions = editor.getOption(128 /* EditorOption.snippetSuggestions */);
        if (snippetSuggestions === 'none') {
            result.add(28 /* CompletionItemKind.Snippet */);
        }
        // type setting
        const suggestOptions = editor.getOption(134 /* EditorOption.suggest */);
        if (!suggestOptions.showMethods) {
            result.add(0 /* CompletionItemKind.Method */);
        }
        if (!suggestOptions.showFunctions) {
            result.add(1 /* CompletionItemKind.Function */);
        }
        if (!suggestOptions.showConstructors) {
            result.add(2 /* CompletionItemKind.Constructor */);
        }
        if (!suggestOptions.showFields) {
            result.add(3 /* CompletionItemKind.Field */);
        }
        if (!suggestOptions.showVariables) {
            result.add(4 /* CompletionItemKind.Variable */);
        }
        if (!suggestOptions.showClasses) {
            result.add(5 /* CompletionItemKind.Class */);
        }
        if (!suggestOptions.showStructs) {
            result.add(6 /* CompletionItemKind.Struct */);
        }
        if (!suggestOptions.showInterfaces) {
            result.add(7 /* CompletionItemKind.Interface */);
        }
        if (!suggestOptions.showModules) {
            result.add(8 /* CompletionItemKind.Module */);
        }
        if (!suggestOptions.showProperties) {
            result.add(9 /* CompletionItemKind.Property */);
        }
        if (!suggestOptions.showEvents) {
            result.add(10 /* CompletionItemKind.Event */);
        }
        if (!suggestOptions.showOperators) {
            result.add(11 /* CompletionItemKind.Operator */);
        }
        if (!suggestOptions.showUnits) {
            result.add(12 /* CompletionItemKind.Unit */);
        }
        if (!suggestOptions.showValues) {
            result.add(13 /* CompletionItemKind.Value */);
        }
        if (!suggestOptions.showConstants) {
            result.add(14 /* CompletionItemKind.Constant */);
        }
        if (!suggestOptions.showEnums) {
            result.add(15 /* CompletionItemKind.Enum */);
        }
        if (!suggestOptions.showEnumMembers) {
            result.add(16 /* CompletionItemKind.EnumMember */);
        }
        if (!suggestOptions.showKeywords) {
            result.add(17 /* CompletionItemKind.Keyword */);
        }
        if (!suggestOptions.showWords) {
            result.add(18 /* CompletionItemKind.Text */);
        }
        if (!suggestOptions.showColors) {
            result.add(19 /* CompletionItemKind.Color */);
        }
        if (!suggestOptions.showFiles) {
            result.add(20 /* CompletionItemKind.File */);
        }
        if (!suggestOptions.showReferences) {
            result.add(21 /* CompletionItemKind.Reference */);
        }
        if (!suggestOptions.showColors) {
            result.add(22 /* CompletionItemKind.Customcolor */);
        }
        if (!suggestOptions.showFolders) {
            result.add(23 /* CompletionItemKind.Folder */);
        }
        if (!suggestOptions.showTypeParameters) {
            result.add(24 /* CompletionItemKind.TypeParameter */);
        }
        if (!suggestOptions.showSnippets) {
            result.add(28 /* CompletionItemKind.Snippet */);
        }
        if (!suggestOptions.showUsers) {
            result.add(25 /* CompletionItemKind.User */);
        }
        if (!suggestOptions.showIssues) {
            result.add(26 /* CompletionItemKind.Issue */);
        }
        return { itemKind: result, showDeprecated: suggestOptions.showDeprecated };
    }
    _onNewContext(ctx) {
        if (!this._context) {
            // happens when 24x7 IntelliSense is enabled and still in its delay
            return;
        }
        if (ctx.lineNumber !== this._context.lineNumber) {
            // e.g. happens when pressing Enter while IntelliSense is computed
            this.cancel();
            return;
        }
        if (getLeadingWhitespace(ctx.leadingLineContent) !== getLeadingWhitespace(this._context.leadingLineContent)) {
            // cancel IntelliSense when line start changes
            // happens when the current word gets outdented
            this.cancel();
            return;
        }
        if (ctx.column < this._context.column) {
            // typed -> moved cursor LEFT -> retrigger if still on a word
            if (ctx.leadingWord.word) {
                this.trigger({ auto: this._context.triggerOptions.auto, retrigger: true });
            }
            else {
                this.cancel();
            }
            return;
        }
        if (!this._completionModel) {
            // happens when IntelliSense is not yet computed
            return;
        }
        if (ctx.leadingWord.word.length !== 0 && ctx.leadingWord.startColumn > this._context.leadingWord.startColumn) {
            // started a new word while IntelliSense shows -> retrigger but reuse all items that we currently have
            const shouldAutoTrigger = LineContext.shouldAutoTrigger(this._editor);
            if (shouldAutoTrigger && this._context) {
                // shouldAutoTrigger forces tokenization, which can cause pending cursor change events to be emitted, which can cause
                // suggestions to be cancelled, which causes `this._context` to be undefined
                const map = this._completionModel.getItemsByProvider();
                this.trigger({
                    auto: this._context.triggerOptions.auto,
                    retrigger: true,
                    clipboardText: this._completionModel.clipboardText,
                    completionOptions: { providerItemsToReuse: map }
                });
            }
            return;
        }
        if (ctx.column > this._context.column && this._completionModel.getIncompleteProvider().size > 0 && ctx.leadingWord.word.length !== 0) {
            // typed -> moved cursor RIGHT & incomple model & still on a word -> retrigger
            const providerItemsToReuse = new Map();
            const providerFilter = new Set();
            for (const [provider, items] of this._completionModel.getItemsByProvider()) {
                if (items.length > 0 && items[0].container.incomplete) {
                    providerFilter.add(provider);
                }
                else {
                    providerItemsToReuse.set(provider, items);
                }
            }
            this.trigger({
                auto: this._context.triggerOptions.auto,
                triggerKind: 2 /* CompletionTriggerKind.TriggerForIncompleteCompletions */,
                retrigger: true,
                clipboardText: this._completionModel.clipboardText,
                completionOptions: { providerFilter, providerItemsToReuse }
            });
        }
        else {
            // typed -> moved cursor RIGHT -> update UI
            const oldLineContext = this._completionModel.lineContext;
            let isFrozen = false;
            this._completionModel.lineContext = {
                leadingLineContent: ctx.leadingLineContent,
                characterCountDelta: ctx.column - this._context.column
            };
            if (this._completionModel.items.length === 0) {
                const shouldAutoTrigger = LineContext.shouldAutoTrigger(this._editor);
                if (!this._context) {
                    // shouldAutoTrigger forces tokenization, which can cause pending cursor change events to be emitted, which can cause
                    // suggestions to be cancelled, which causes `this._context` to be undefined
                    this.cancel();
                    return;
                }
                if (shouldAutoTrigger && this._context.leadingWord.endColumn < ctx.leadingWord.startColumn) {
                    // retrigger when heading into a new word
                    this.trigger({ auto: this._context.triggerOptions.auto, retrigger: true });
                    return;
                }
                if (!this._context.triggerOptions.auto) {
                    // freeze when IntelliSense was manually requested
                    this._completionModel.lineContext = oldLineContext;
                    isFrozen = this._completionModel.items.length > 0;
                    if (isFrozen && ctx.leadingWord.word.length === 0) {
                        // there were results before but now there aren't
                        // and also we are not on a word anymore -> cancel
                        this.cancel();
                        return;
                    }
                }
                else {
                    // nothing left
                    this.cancel();
                    return;
                }
            }
            this._onDidSuggest.fire({
                completionModel: this._completionModel,
                triggerOptions: ctx.triggerOptions,
                isFrozen,
            });
        }
    }
};
SuggestModel = SuggestModel_1 = __decorate([
    __param(1, IEditorWorkerService),
    __param(2, IClipboardService),
    __param(3, ITelemetryService),
    __param(4, ILogService),
    __param(5, IContextKeyService),
    __param(6, IConfigurationService),
    __param(7, ILanguageFeaturesService),
    __param(8, IEnvironmentService)
], SuggestModel);

export { LineContext, SuggestModel };
