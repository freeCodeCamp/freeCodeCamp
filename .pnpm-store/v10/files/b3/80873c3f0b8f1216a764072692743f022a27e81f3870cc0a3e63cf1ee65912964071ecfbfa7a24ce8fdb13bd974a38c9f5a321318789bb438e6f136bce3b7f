import { isNonEmptyArray } from '../../../../base/common/arrays.js';
import { CancellationTokenSource, CancellationToken } from '../../../../base/common/cancellation.js';
import { onUnexpectedError } from '../../../../base/common/errors.js';
import { KeyChord } from '../../../../base/common/keyCodes.js';
import { DisposableStore } from '../../../../base/common/lifecycle.js';
import { registerEditorContribution, registerEditorAction, EditorAction } from '../../../browser/editorExtensions.js';
import { ICodeEditorService } from '../../../browser/services/codeEditorService.js';
import { CharacterSet } from '../../../common/core/characterClassifier.js';
import { Range } from '../../../common/core/range.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { IEditorWorkerService } from '../../../common/services/editorWorker.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';
import { getOnTypeFormattingEdits, formatDocumentRangesWithSelectedProvider, formatDocumentWithSelectedProvider } from './format.js';
import { FormattingEdit } from './formattingEdit.js';
import { localize2 } from '../../../../nls.js';
import { IAccessibilitySignalService, AccessibilitySignal } from '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import { CommandsRegistry, ICommandService } from '../../../../platform/commands/common/commands.js';
import { ContextKeyExpr } from '../../../../platform/contextkey/common/contextkey.js';
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import { Progress, IEditorProgressService } from '../../../../platform/progress/common/progress.js';

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
let FormatOnType = class FormatOnType {
    static { this.ID = 'editor.contrib.autoFormat'; }
    constructor(_editor, _languageFeaturesService, _workerService, _accessibilitySignalService) {
        this._editor = _editor;
        this._languageFeaturesService = _languageFeaturesService;
        this._workerService = _workerService;
        this._accessibilitySignalService = _accessibilitySignalService;
        this._disposables = new DisposableStore();
        this._sessionDisposables = new DisposableStore();
        this._disposables.add(_languageFeaturesService.onTypeFormattingEditProvider.onDidChange(this._update, this));
        this._disposables.add(_editor.onDidChangeModel(() => this._update()));
        this._disposables.add(_editor.onDidChangeModelLanguage(() => this._update()));
        this._disposables.add(_editor.onDidChangeConfiguration(e => {
            if (e.hasChanged(65 /* EditorOption.formatOnType */)) {
                this._update();
            }
        }));
        this._update();
    }
    dispose() {
        this._disposables.dispose();
        this._sessionDisposables.dispose();
    }
    _update() {
        // clean up
        this._sessionDisposables.clear();
        // we are disabled
        if (!this._editor.getOption(65 /* EditorOption.formatOnType */)) {
            return;
        }
        // no model
        if (!this._editor.hasModel()) {
            return;
        }
        const model = this._editor.getModel();
        // no support
        const [support] = this._languageFeaturesService.onTypeFormattingEditProvider.ordered(model);
        if (!support || !support.autoFormatTriggerCharacters) {
            return;
        }
        // register typing listeners that will trigger the format
        const triggerChars = new CharacterSet();
        for (const ch of support.autoFormatTriggerCharacters) {
            triggerChars.add(ch.charCodeAt(0));
        }
        this._sessionDisposables.add(this._editor.onDidType((text) => {
            const lastCharCode = text.charCodeAt(text.length - 1);
            if (triggerChars.has(lastCharCode)) {
                this._trigger(String.fromCharCode(lastCharCode));
            }
        }));
    }
    _trigger(ch) {
        if (!this._editor.hasModel()) {
            return;
        }
        if (this._editor.getSelections().length > 1 || !this._editor.getSelection().isEmpty()) {
            return;
        }
        const model = this._editor.getModel();
        const position = this._editor.getPosition();
        const cts = new CancellationTokenSource();
        // install a listener that checks if edits happens before the
        // position on which we format right now. If so, we won't
        // apply the format edits
        const unbind = this._editor.onDidChangeModelContent((e) => {
            if (e.isFlush) {
                // a model.setValue() was called
                // cancel only once
                cts.cancel();
                unbind.dispose();
                return;
            }
            for (let i = 0, len = e.changes.length; i < len; i++) {
                const change = e.changes[i];
                if (change.range.endLineNumber <= position.lineNumber) {
                    // cancel only once
                    cts.cancel();
                    unbind.dispose();
                    return;
                }
            }
        });
        getOnTypeFormattingEdits(this._workerService, this._languageFeaturesService, model, position, ch, model.getFormattingOptions(), cts.token).then(edits => {
            if (cts.token.isCancellationRequested) {
                return;
            }
            if (isNonEmptyArray(edits)) {
                this._accessibilitySignalService.playSignal(AccessibilitySignal.format, { userGesture: false });
                FormattingEdit.execute(this._editor, edits, true);
            }
        }).finally(() => {
            unbind.dispose();
        });
    }
};
FormatOnType = __decorate([
    __param(1, ILanguageFeaturesService),
    __param(2, IEditorWorkerService),
    __param(3, IAccessibilitySignalService)
], FormatOnType);
let FormatOnPaste = class FormatOnPaste {
    static { this.ID = 'editor.contrib.formatOnPaste'; }
    constructor(editor, _languageFeaturesService, _instantiationService) {
        this.editor = editor;
        this._languageFeaturesService = _languageFeaturesService;
        this._instantiationService = _instantiationService;
        this._callOnDispose = new DisposableStore();
        this._callOnModel = new DisposableStore();
        this._callOnDispose.add(editor.onDidChangeConfiguration(() => this._update()));
        this._callOnDispose.add(editor.onDidChangeModel(() => this._update()));
        this._callOnDispose.add(editor.onDidChangeModelLanguage(() => this._update()));
        this._callOnDispose.add(_languageFeaturesService.documentRangeFormattingEditProvider.onDidChange(this._update, this));
    }
    dispose() {
        this._callOnDispose.dispose();
        this._callOnModel.dispose();
    }
    _update() {
        // clean up
        this._callOnModel.clear();
        // we are disabled
        if (!this.editor.getOption(64 /* EditorOption.formatOnPaste */)) {
            return;
        }
        // no model
        if (!this.editor.hasModel()) {
            return;
        }
        // no formatter
        if (!this._languageFeaturesService.documentRangeFormattingEditProvider.has(this.editor.getModel())) {
            return;
        }
        this._callOnModel.add(this.editor.onDidPaste(({ range }) => this._trigger(range)));
    }
    _trigger(range) {
        if (!this.editor.hasModel()) {
            return;
        }
        if (this.editor.getSelections().length > 1) {
            return;
        }
        this._instantiationService.invokeFunction(formatDocumentRangesWithSelectedProvider, this.editor, range, 2 /* FormattingMode.Silent */, Progress.None, CancellationToken.None, false).catch(onUnexpectedError);
    }
};
FormatOnPaste = __decorate([
    __param(1, ILanguageFeaturesService),
    __param(2, IInstantiationService)
], FormatOnPaste);
class FormatDocumentAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.formatDocument',
            label: localize2(1014, "Format Document"),
            precondition: ContextKeyExpr.and(EditorContextKeys.notInCompositeEditor, EditorContextKeys.writable, EditorContextKeys.hasDocumentFormattingProvider),
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 36 /* KeyCode.KeyF */,
                linux: { primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 39 /* KeyCode.KeyI */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            contextMenuOpts: {
                group: '1_modification',
                order: 1.3
            }
        });
    }
    async run(accessor, editor) {
        if (editor.hasModel()) {
            const instaService = accessor.get(IInstantiationService);
            const progressService = accessor.get(IEditorProgressService);
            await progressService.showWhile(instaService.invokeFunction(formatDocumentWithSelectedProvider, editor, 1 /* FormattingMode.Explicit */, Progress.None, CancellationToken.None, true), 250);
        }
    }
}
class FormatSelectionAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.formatSelection',
            label: localize2(1015, "Format Selection"),
            precondition: ContextKeyExpr.and(EditorContextKeys.writable, EditorContextKeys.hasDocumentSelectionFormattingProvider),
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: KeyChord(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 36 /* KeyCode.KeyF */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            contextMenuOpts: {
                when: EditorContextKeys.hasNonEmptySelection,
                group: '1_modification',
                order: 1.31
            }
        });
    }
    async run(accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const instaService = accessor.get(IInstantiationService);
        const model = editor.getModel();
        const ranges = editor.getSelections().map(range => {
            return range.isEmpty()
                ? new Range(range.startLineNumber, 1, range.startLineNumber, model.getLineMaxColumn(range.startLineNumber))
                : range;
        });
        const progressService = accessor.get(IEditorProgressService);
        await progressService.showWhile(instaService.invokeFunction(formatDocumentRangesWithSelectedProvider, editor, ranges, 1 /* FormattingMode.Explicit */, Progress.None, CancellationToken.None, true), 250);
    }
}
registerEditorContribution(FormatOnType.ID, FormatOnType, 2 /* EditorContributionInstantiation.BeforeFirstInteraction */);
registerEditorContribution(FormatOnPaste.ID, FormatOnPaste, 2 /* EditorContributionInstantiation.BeforeFirstInteraction */);
registerEditorAction(FormatDocumentAction);
registerEditorAction(FormatSelectionAction);
// this is the old format action that does both (format document OR format selection)
// and we keep it here such that existing keybinding configurations etc will still work
CommandsRegistry.registerCommand('editor.action.format', async (accessor) => {
    const editor = accessor.get(ICodeEditorService).getFocusedCodeEditor();
    if (!editor || !editor.hasModel()) {
        return;
    }
    const commandService = accessor.get(ICommandService);
    if (editor.getSelection().isEmpty()) {
        await commandService.executeCommand('editor.action.formatDocument');
    }
    else {
        await commandService.executeCommand('editor.action.formatSelection');
    }
});

export { FormatOnType };
