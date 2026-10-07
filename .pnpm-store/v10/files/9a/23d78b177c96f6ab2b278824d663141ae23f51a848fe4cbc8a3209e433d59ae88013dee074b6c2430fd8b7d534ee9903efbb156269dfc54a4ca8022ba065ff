import { Delayer, createCancelablePromise } from '../../../../base/common/async.js';
import { onUnexpectedError } from '../../../../base/common/errors.js';
import { Emitter } from '../../../../base/common/event.js';
import { Disposable, MutableDisposable } from '../../../../base/common/lifecycle.js';
import { CharacterSet } from '../../../common/core/characterClassifier.js';
import { SignatureHelpTriggerKind } from '../../../common/languages.js';
import { provideSignatureHelp } from './provideSignatureHelp.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var ParameterHintState;
(function (ParameterHintState) {
    ParameterHintState.Default = { type: 0 /* Type.Default */ };
    class Pending {
        constructor(request, previouslyActiveHints) {
            this.request = request;
            this.previouslyActiveHints = previouslyActiveHints;
            this.type = 2 /* Type.Pending */;
        }
    }
    ParameterHintState.Pending = Pending;
    class Active {
        constructor(hints) {
            this.hints = hints;
            this.type = 1 /* Type.Active */;
        }
    }
    ParameterHintState.Active = Active;
})(ParameterHintState || (ParameterHintState = {}));
class ParameterHintsModel extends Disposable {
    static { this.DEFAULT_DELAY = 120; } // ms
    constructor(editor, providers, delay = ParameterHintsModel.DEFAULT_DELAY) {
        super();
        this._onChangedHints = this._register(new Emitter());
        this.onChangedHints = this._onChangedHints.event;
        this.triggerOnType = false;
        this._state = ParameterHintState.Default;
        this._pendingTriggers = [];
        this._lastSignatureHelpResult = this._register(new MutableDisposable());
        this.triggerChars = new CharacterSet();
        this.retriggerChars = new CharacterSet();
        this.triggerId = 0;
        this.editor = editor;
        this.providers = providers;
        this.throttledDelayer = new Delayer(delay);
        this._register(this.editor.onDidBlurEditorWidget(() => this.cancel()));
        this._register(this.editor.onDidChangeConfiguration(() => this.onEditorConfigurationChange()));
        this._register(this.editor.onDidChangeModel(e => this.onModelChanged()));
        this._register(this.editor.onDidChangeModelLanguage(_ => this.onModelChanged()));
        this._register(this.editor.onDidChangeCursorSelection(e => this.onCursorChange(e)));
        this._register(this.editor.onDidChangeModelContent(e => this.onModelContentChange()));
        this._register(this.providers.onDidChange(this.onModelChanged, this));
        this._register(this.editor.onDidType(text => this.onDidType(text)));
        this.onEditorConfigurationChange();
        this.onModelChanged();
    }
    get state() { return this._state; }
    set state(value) {
        if (this._state.type === 2 /* ParameterHintState.Type.Pending */) {
            this._state.request.cancel();
        }
        this._state = value;
    }
    cancel(silent = false) {
        this.state = ParameterHintState.Default;
        this.throttledDelayer.cancel();
        if (!silent) {
            this._onChangedHints.fire(undefined);
        }
    }
    trigger(context, delay) {
        const model = this.editor.getModel();
        if (!model || !this.providers.has(model)) {
            return;
        }
        const triggerId = ++this.triggerId;
        this._pendingTriggers.push(context);
        this.throttledDelayer.trigger(() => {
            return this.doTrigger(triggerId);
        }, delay)
            .catch(onUnexpectedError);
    }
    next() {
        if (this.state.type !== 1 /* ParameterHintState.Type.Active */) {
            return;
        }
        const length = this.state.hints.signatures.length;
        const activeSignature = this.state.hints.activeSignature;
        const last = (activeSignature % length) === (length - 1);
        const cycle = this.editor.getOption(98 /* EditorOption.parameterHints */).cycle;
        // If there is only one signature, or we're on last signature of list
        if ((length < 2 || last) && !cycle) {
            this.cancel();
            return;
        }
        this.updateActiveSignature(last && cycle ? 0 : activeSignature + 1);
    }
    previous() {
        if (this.state.type !== 1 /* ParameterHintState.Type.Active */) {
            return;
        }
        const length = this.state.hints.signatures.length;
        const activeSignature = this.state.hints.activeSignature;
        const first = activeSignature === 0;
        const cycle = this.editor.getOption(98 /* EditorOption.parameterHints */).cycle;
        // If there is only one signature, or we're on first signature of list
        if ((length < 2 || first) && !cycle) {
            this.cancel();
            return;
        }
        this.updateActiveSignature(first && cycle ? length - 1 : activeSignature - 1);
    }
    updateActiveSignature(activeSignature) {
        if (this.state.type !== 1 /* ParameterHintState.Type.Active */) {
            return;
        }
        this.state = new ParameterHintState.Active({ ...this.state.hints, activeSignature });
        this._onChangedHints.fire(this.state.hints);
    }
    async doTrigger(triggerId) {
        const isRetrigger = this.state.type === 1 /* ParameterHintState.Type.Active */ || this.state.type === 2 /* ParameterHintState.Type.Pending */;
        const activeSignatureHelp = this.getLastActiveHints();
        this.cancel(true);
        if (this._pendingTriggers.length === 0) {
            return false;
        }
        const context = this._pendingTriggers.reduce(mergeTriggerContexts);
        this._pendingTriggers = [];
        const triggerContext = {
            triggerKind: context.triggerKind,
            triggerCharacter: context.triggerCharacter,
            isRetrigger: isRetrigger,
            activeSignatureHelp: activeSignatureHelp
        };
        if (!this.editor.hasModel()) {
            return false;
        }
        const model = this.editor.getModel();
        const position = this.editor.getPosition();
        this.state = new ParameterHintState.Pending(createCancelablePromise(token => provideSignatureHelp(this.providers, model, position, triggerContext, token)), activeSignatureHelp);
        try {
            const result = await this.state.request;
            // Check that we are still resolving the correct signature help
            if (triggerId !== this.triggerId) {
                result?.dispose();
                return false;
            }
            if (!result || !result.value.signatures || result.value.signatures.length === 0) {
                result?.dispose();
                this._lastSignatureHelpResult.clear();
                this.cancel();
                return false;
            }
            else {
                this.state = new ParameterHintState.Active(result.value);
                this._lastSignatureHelpResult.value = result;
                this._onChangedHints.fire(this.state.hints);
                return true;
            }
        }
        catch (error) {
            if (triggerId === this.triggerId) {
                this.state = ParameterHintState.Default;
            }
            onUnexpectedError(error);
            return false;
        }
    }
    getLastActiveHints() {
        switch (this.state.type) {
            case 1 /* ParameterHintState.Type.Active */: return this.state.hints;
            case 2 /* ParameterHintState.Type.Pending */: return this.state.previouslyActiveHints;
            default: return undefined;
        }
    }
    get isTriggered() {
        return this.state.type === 1 /* ParameterHintState.Type.Active */
            || this.state.type === 2 /* ParameterHintState.Type.Pending */
            || this.throttledDelayer.isTriggered();
    }
    onModelChanged() {
        this.cancel();
        this.triggerChars.clear();
        this.retriggerChars.clear();
        const model = this.editor.getModel();
        if (!model) {
            return;
        }
        for (const support of this.providers.ordered(model)) {
            for (const ch of support.signatureHelpTriggerCharacters || []) {
                if (ch.length) {
                    const charCode = ch.charCodeAt(0);
                    this.triggerChars.add(charCode);
                    // All trigger characters are also considered retrigger characters
                    this.retriggerChars.add(charCode);
                }
            }
            for (const ch of support.signatureHelpRetriggerCharacters || []) {
                if (ch.length) {
                    this.retriggerChars.add(ch.charCodeAt(0));
                }
            }
        }
    }
    onDidType(text) {
        if (!this.triggerOnType) {
            return;
        }
        const lastCharIndex = text.length - 1;
        const triggerCharCode = text.charCodeAt(lastCharIndex);
        if (this.triggerChars.has(triggerCharCode) || this.isTriggered && this.retriggerChars.has(triggerCharCode)) {
            this.trigger({
                triggerKind: SignatureHelpTriggerKind.TriggerCharacter,
                triggerCharacter: text.charAt(lastCharIndex),
            });
        }
    }
    onCursorChange(e) {
        if (e.source === 'mouse') {
            this.cancel();
        }
        else if (this.isTriggered) {
            this.trigger({ triggerKind: SignatureHelpTriggerKind.ContentChange });
        }
    }
    onModelContentChange() {
        if (this.isTriggered) {
            this.trigger({ triggerKind: SignatureHelpTriggerKind.ContentChange });
        }
    }
    onEditorConfigurationChange() {
        this.triggerOnType = this.editor.getOption(98 /* EditorOption.parameterHints */).enabled;
        if (!this.triggerOnType) {
            this.cancel();
        }
    }
    dispose() {
        this.cancel(true);
        super.dispose();
    }
}
function mergeTriggerContexts(previous, current) {
    switch (current.triggerKind) {
        case SignatureHelpTriggerKind.Invoke:
            // Invoke overrides previous triggers.
            return current;
        case SignatureHelpTriggerKind.ContentChange:
            // Ignore content changes triggers
            return previous;
        case SignatureHelpTriggerKind.TriggerCharacter:
        default:
            return current;
    }
}

export { ParameterHintsModel };
