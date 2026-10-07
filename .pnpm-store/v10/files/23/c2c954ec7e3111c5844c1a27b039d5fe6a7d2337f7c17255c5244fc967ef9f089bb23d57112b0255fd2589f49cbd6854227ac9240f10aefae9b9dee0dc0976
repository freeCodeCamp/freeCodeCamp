import { DisposableStore } from '../../../../base/common/lifecycle.js';
import { assertType } from '../../../../base/common/types.js';
import { registerEditorContribution, EditorCommand, registerEditorCommand } from '../../../browser/editorExtensions.js';
import { Position } from '../../../common/core/position.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { ILanguageConfigurationService } from '../../../common/languages/languageConfigurationRegistry.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';
import { showSimpleSuggestions } from '../../suggest/browser/suggest.js';
import { localize } from '../../../../nls.js';
import { RawContextKey, IContextKeyService, ContextKeyExpr } from '../../../../platform/contextkey/common/contextkey.js';
import { ILogService } from '../../../../platform/log/common/log.js';
import { SnippetSession } from './snippetSession.js';
import '../../../../base/common/observableInternal/index.js';
import { observableValue } from '../../../../base/common/observableInternal/observables/observableValue.js';

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
var SnippetController2_1;
const _defaultOptions = {
    overwriteBefore: 0,
    overwriteAfter: 0,
    undoStopBefore: true,
    undoStopAfter: true,
    adjustWhitespace: true,
    clipboardText: undefined,
    overtypingCapturer: undefined
};
let SnippetController2 = class SnippetController2 {
    static { SnippetController2_1 = this; }
    static { this.ID = 'snippetController2'; }
    static get(editor) {
        return editor.getContribution(SnippetController2_1.ID);
    }
    static { this.InSnippetMode = new RawContextKey('inSnippetMode', false, localize(1402, "Whether the editor in current in snippet mode")); }
    static { this.HasNextTabstop = new RawContextKey('hasNextTabstop', false, localize(1403, "Whether there is a next tab stop when in snippet mode")); }
    static { this.HasPrevTabstop = new RawContextKey('hasPrevTabstop', false, localize(1404, "Whether there is a previous tab stop when in snippet mode")); }
    constructor(_editor, _logService, _languageFeaturesService, contextKeyService, _languageConfigurationService) {
        this._editor = _editor;
        this._logService = _logService;
        this._languageFeaturesService = _languageFeaturesService;
        this._languageConfigurationService = _languageConfigurationService;
        this._inSnippetObservable = observableValue(this, false);
        this._snippetListener = new DisposableStore();
        this._modelVersionId = -1;
        this._inSnippet = SnippetController2_1.InSnippetMode.bindTo(contextKeyService);
        this._hasNextTabstop = SnippetController2_1.HasNextTabstop.bindTo(contextKeyService);
        this._hasPrevTabstop = SnippetController2_1.HasPrevTabstop.bindTo(contextKeyService);
    }
    dispose() {
        this._inSnippet.reset();
        this._inSnippetObservable.set(false, undefined);
        this._hasPrevTabstop.reset();
        this._hasNextTabstop.reset();
        this._session?.dispose();
        this._snippetListener.dispose();
    }
    insert(template, opts) {
        // this is here to find out more about the yet-not-understood
        // error that sometimes happens when we fail to inserted a nested
        // snippet
        try {
            this._doInsert(template, typeof opts === 'undefined' ? _defaultOptions : { ..._defaultOptions, ...opts });
        }
        catch (e) {
            this.cancel();
            this._logService.error(e);
            this._logService.error('snippet_error');
            this._logService.error('insert_template=', template);
            this._logService.error('existing_template=', this._session ? this._session._logInfo() : '<no_session>');
        }
    }
    _doInsert(template, opts) {
        if (!this._editor.hasModel()) {
            return;
        }
        // don't listen while inserting the snippet
        // as that is the inflight state causing cancelation
        this._snippetListener.clear();
        if (opts.undoStopBefore) {
            this._editor.getModel().pushStackElement();
        }
        // don't merge
        if (this._session && typeof template !== 'string') {
            this.cancel();
        }
        if (!this._session) {
            this._modelVersionId = this._editor.getModel().getAlternativeVersionId();
            this._session = new SnippetSession(this._editor, template, opts, this._languageConfigurationService);
            this._session.insert(opts.reason);
        }
        else {
            assertType(typeof template === 'string');
            this._session.merge(template, opts);
        }
        if (opts.undoStopAfter) {
            this._editor.getModel().pushStackElement();
        }
        // regster completion item provider when there is any choice element
        if (this._session?.hasChoice) {
            const provider = {
                _debugDisplayName: 'snippetChoiceCompletions',
                provideCompletionItems: (model, position) => {
                    if (!this._session || model !== this._editor.getModel() || !Position.equals(this._editor.getPosition(), position)) {
                        return undefined;
                    }
                    const { activeChoice } = this._session;
                    if (!activeChoice || activeChoice.choice.options.length === 0) {
                        return undefined;
                    }
                    const word = model.getValueInRange(activeChoice.range);
                    const isAnyOfOptions = Boolean(activeChoice.choice.options.find(o => o.value === word));
                    const suggestions = [];
                    for (let i = 0; i < activeChoice.choice.options.length; i++) {
                        const option = activeChoice.choice.options[i];
                        suggestions.push({
                            kind: 13 /* CompletionItemKind.Value */,
                            label: option.value,
                            insertText: option.value,
                            sortText: 'a'.repeat(i + 1),
                            range: activeChoice.range,
                            filterText: isAnyOfOptions ? `${word}_${option.value}` : undefined,
                            command: { id: 'jumpToNextSnippetPlaceholder', title: localize(1405, 'Go to next placeholder...') }
                        });
                    }
                    return { suggestions };
                }
            };
            const model = this._editor.getModel();
            let registration;
            let isRegistered = false;
            const disable = () => {
                registration?.dispose();
                isRegistered = false;
            };
            const enable = () => {
                if (!isRegistered) {
                    registration = this._languageFeaturesService.completionProvider.register({
                        language: model.getLanguageId(),
                        pattern: model.uri.fsPath,
                        scheme: model.uri.scheme,
                        exclusive: true
                    }, provider);
                    this._snippetListener.add(registration);
                    isRegistered = true;
                }
            };
            this._choiceCompletions = { provider, enable, disable };
        }
        this._updateState();
        this._snippetListener.add(this._editor.onDidChangeModelContent(e => e.isFlush && this.cancel()));
        this._snippetListener.add(this._editor.onDidChangeModel(() => this.cancel()));
        this._snippetListener.add(this._editor.onDidChangeCursorSelection(() => this._updateState()));
    }
    _updateState() {
        if (!this._session || !this._editor.hasModel()) {
            // canceled in the meanwhile
            return;
        }
        if (this._modelVersionId === this._editor.getModel().getAlternativeVersionId()) {
            // undo until the 'before' state happened
            // and makes use cancel snippet mode
            return this.cancel();
        }
        if (!this._session.hasPlaceholder) {
            // don't listen for selection changes and don't
            // update context keys when the snippet is plain text
            return this.cancel();
        }
        if (this._session.isAtLastPlaceholder || !this._session.isSelectionWithinPlaceholders()) {
            this._editor.getModel().pushStackElement();
            return this.cancel();
        }
        this._inSnippet.set(true);
        this._inSnippetObservable.set(true, undefined);
        this._hasPrevTabstop.set(!this._session.isAtFirstPlaceholder);
        this._hasNextTabstop.set(!this._session.isAtLastPlaceholder);
        this._handleChoice();
    }
    _handleChoice() {
        if (!this._session || !this._editor.hasModel()) {
            this._currentChoice = undefined;
            return;
        }
        const { activeChoice } = this._session;
        if (!activeChoice || !this._choiceCompletions) {
            this._choiceCompletions?.disable();
            this._currentChoice = undefined;
            return;
        }
        if (this._currentChoice !== activeChoice.choice) {
            this._currentChoice = activeChoice.choice;
            this._choiceCompletions.enable();
            // trigger suggest with the special choice completion provider
            queueMicrotask(() => {
                showSimpleSuggestions(this._editor, this._choiceCompletions.provider);
            });
        }
    }
    finish() {
        while (this._inSnippet.get()) {
            this.next();
        }
    }
    cancel(resetSelection = false) {
        this._inSnippet.reset();
        this._inSnippetObservable.set(false, undefined);
        this._hasPrevTabstop.reset();
        this._hasNextTabstop.reset();
        this._snippetListener.clear();
        this._currentChoice = undefined;
        this._session?.dispose();
        this._session = undefined;
        this._modelVersionId = -1;
        if (resetSelection) {
            // reset selection to the primary cursor when being asked
            // for. this happens when explicitly cancelling snippet mode,
            // e.g. when pressing ESC
            this._editor.setSelections([this._editor.getSelection()]);
        }
    }
    prev() {
        this._session?.prev();
        this._updateState();
    }
    next() {
        this._session?.next();
        this._updateState();
    }
    isInSnippet() {
        return Boolean(this._inSnippet.get());
    }
    get isInSnippetObservable() {
        return this._inSnippetObservable;
    }
};
SnippetController2 = SnippetController2_1 = __decorate([
    __param(1, ILogService),
    __param(2, ILanguageFeaturesService),
    __param(3, IContextKeyService),
    __param(4, ILanguageConfigurationService)
], SnippetController2);
registerEditorContribution(SnippetController2.ID, SnippetController2, 4 /* EditorContributionInstantiation.Lazy */);
const CommandCtor = EditorCommand.bindToContribution(SnippetController2.get);
registerEditorCommand(new CommandCtor({
    id: 'jumpToNextSnippetPlaceholder',
    precondition: ContextKeyExpr.and(SnippetController2.InSnippetMode, SnippetController2.HasNextTabstop),
    handler: ctrl => ctrl.next(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 30,
        kbExpr: EditorContextKeys.textInputFocus,
        primary: 2 /* KeyCode.Tab */
    }
}));
registerEditorCommand(new CommandCtor({
    id: 'jumpToPrevSnippetPlaceholder',
    precondition: ContextKeyExpr.and(SnippetController2.InSnippetMode, SnippetController2.HasPrevTabstop),
    handler: ctrl => ctrl.prev(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 30,
        kbExpr: EditorContextKeys.textInputFocus,
        primary: 1024 /* KeyMod.Shift */ | 2 /* KeyCode.Tab */
    }
}));
registerEditorCommand(new CommandCtor({
    id: 'leaveSnippet',
    precondition: SnippetController2.InSnippetMode,
    handler: ctrl => ctrl.cancel(true),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 30,
        kbExpr: EditorContextKeys.textInputFocus,
        primary: 9 /* KeyCode.Escape */,
        secondary: [1024 /* KeyMod.Shift */ | 9 /* KeyCode.Escape */]
    }
}));
registerEditorCommand(new CommandCtor({
    id: 'acceptSnippet',
    precondition: SnippetController2.InSnippetMode,
    handler: ctrl => ctrl.finish(),
    // kbOpts: {
    // 	weight: KeybindingWeight.EditorContrib + 30,
    // 	kbExpr: EditorContextKeys.textFocus,
    // 	primary: KeyCode.Enter,
    // }
}));

export { SnippetController2 };
