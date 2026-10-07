import { addDisposableListener } from '../../../../base/browser/dom.js';
import { coalesce } from '../../../../base/common/arrays.js';
import { createCancelablePromise, DeferredPromise, raceCancellation } from '../../../../base/common/async.js';
import { CancellationTokenSource } from '../../../../base/common/cancellation.js';
import { matchesMimeType, createStringDataTransferItem, UriList } from '../../../../base/common/dataTransfer.js';
import { isCancellationError } from '../../../../base/common/errors.js';
import { HierarchicalKind } from '../../../../base/common/hierarchicalKind.js';
import { Disposable, DisposableStore } from '../../../../base/common/lifecycle.js';
import { Mimes } from '../../../../base/common/mime.js';
import { isWindows } from '../../../../base/common/platform.js';
import { upcast } from '../../../../base/common/types.js';
import { generateUuid } from '../../../../base/common/uuid.js';
import { localize } from '../../../../nls.js';
import { IClipboardService } from '../../../../platform/clipboard/common/clipboardService.js';
import { ICommandService } from '../../../../platform/commands/common/commands.js';
import { IConfigurationService } from '../../../../platform/configuration/common/configuration.js';
import { RawContextKey } from '../../../../platform/contextkey/common/contextkey.js';
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import { ILogService } from '../../../../platform/log/common/log.js';
import { IProgressService } from '../../../../platform/progress/common/progress.js';
import { IQuickInputService } from '../../../../platform/quickinput/common/quickInput.js';
import { ClipboardEventUtils, InMemoryClipboardMetadataManager } from '../../../browser/controller/editContext/clipboardUtils.js';
import { toVSDataTransfer, toExternalVSDataTransfer } from '../../../browser/dataTransfer.js';
import { IBulkEditService } from '../../../browser/services/bulkEditService.js';
import { Range } from '../../../common/core/range.js';
import { DocumentPasteTriggerKind } from '../../../common/languages.js';
import { ILanguageFeaturesService } from '../../../common/services/languageFeatures.js';
import { EditorStateCancellationTokenSource } from '../../editorState/browser/editorState.js';
import { InlineProgressManager } from '../../inlineProgress/browser/inlineProgress.js';
import { MessageController } from '../../message/browser/messageController.js';
import { DefaultTextPasteOrDropEditProvider } from './defaultProviders.js';
import { createCombinedWorkspaceEdit, sortEditsByYieldTo } from './edit.js';
import { PostEditWidgetManager } from './postEditWidget.js';

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
var CopyPasteController_1;
const changePasteTypeCommandId = 'editor.changePasteType';
const pasteAsPreferenceConfig = 'editor.pasteAs.preferences';
const pasteWidgetVisibleCtx = new RawContextKey('pasteWidgetVisible', false, localize(917, "Whether the paste widget is showing"));
const vscodeClipboardMime = 'application/vnd.code.copymetadata';
let CopyPasteController = class CopyPasteController extends Disposable {
    static { CopyPasteController_1 = this; }
    static { this.ID = 'editor.contrib.copyPasteActionController'; }
    static get(editor) {
        return editor.getContribution(CopyPasteController_1.ID);
    }
    constructor(editor, instantiationService, _logService, _bulkEditService, _clipboardService, _commandService, _configService, _languageFeaturesService, _quickInputService, _progressService) {
        super();
        this._logService = _logService;
        this._bulkEditService = _bulkEditService;
        this._clipboardService = _clipboardService;
        this._commandService = _commandService;
        this._configService = _configService;
        this._languageFeaturesService = _languageFeaturesService;
        this._quickInputService = _quickInputService;
        this._progressService = _progressService;
        this._editor = editor;
        const container = editor.getContainerDomNode();
        this._register(addDisposableListener(container, 'copy', e => this.handleCopy(e)));
        this._register(addDisposableListener(container, 'cut', e => this.handleCopy(e)));
        this._register(addDisposableListener(container, 'paste', e => this.handlePaste(e), true));
        this._pasteProgressManager = this._register(new InlineProgressManager('pasteIntoEditor', editor, instantiationService));
        this._postPasteWidgetManager = this._register(instantiationService.createInstance(PostEditWidgetManager, 'pasteIntoEditor', editor, pasteWidgetVisibleCtx, { id: changePasteTypeCommandId, label: localize(918, "Show paste options...") }, () => CopyPasteController_1._configureDefaultAction ? [CopyPasteController_1._configureDefaultAction] : []));
    }
    changePasteType() {
        this._postPasteWidgetManager.tryShowSelector();
    }
    async pasteAs(preferred) {
        this._logService.trace('CopyPasteController.pasteAs');
        this._editor.focus();
        try {
            this._logService.trace('Before calling editor.action.clipboardPasteAction');
            this._pasteAsActionContext = { preferred };
            await this._commandService.executeCommand('editor.action.clipboardPasteAction');
        }
        finally {
            this._pasteAsActionContext = undefined;
        }
    }
    clearWidgets() {
        this._postPasteWidgetManager.clear();
    }
    isPasteAsEnabled() {
        return this._editor.getOption(97 /* EditorOption.pasteAs */).enabled;
    }
    async finishedPaste() {
        await this._currentPasteOperation;
    }
    handleCopy(e) {
        let id = null;
        if (e.clipboardData) {
            const [text, metadata] = ClipboardEventUtils.getTextData(e.clipboardData);
            const storedMetadata = metadata || InMemoryClipboardMetadataManager.INSTANCE.get(text);
            id = storedMetadata?.id || null;
            this._logService.trace('CopyPasteController#handleCopy for id : ', id, ' with text.length : ', text.length);
        }
        else {
            this._logService.trace('CopyPasteController#handleCopy');
        }
        if (!this._editor.hasTextFocus()) {
            return;
        }
        // Explicitly clear the clipboard internal state.
        // This is needed because on web, the browser clipboard is faked out using an in-memory store.
        // This means the resources clipboard is not properly updated when copying from the editor.
        this._clipboardService.clearInternalState?.();
        if (!e.clipboardData || !this.isPasteAsEnabled()) {
            return;
        }
        const model = this._editor.getModel();
        const selections = this._editor.getSelections();
        if (!model || !selections?.length) {
            return;
        }
        const enableEmptySelectionClipboard = this._editor.getOption(45 /* EditorOption.emptySelectionClipboard */);
        let ranges = selections;
        const wasFromEmptySelection = selections.length === 1 && selections[0].isEmpty();
        if (wasFromEmptySelection) {
            if (!enableEmptySelectionClipboard) {
                return;
            }
            ranges = [new Range(ranges[0].startLineNumber, 1, ranges[0].startLineNumber, 1 + model.getLineLength(ranges[0].startLineNumber))];
        }
        const toCopy = this._editor._getViewModel()?.getPlainTextToCopy(selections, enableEmptySelectionClipboard, isWindows);
        const multicursorText = Array.isArray(toCopy) ? toCopy : null;
        const defaultPastePayload = {
            multicursorText,
            pasteOnNewLine: wasFromEmptySelection,
            mode: null
        };
        const providers = this._languageFeaturesService.documentPasteEditProvider
            .ordered(model)
            .filter(x => !!x.prepareDocumentPaste);
        if (!providers.length) {
            this.setCopyMetadata(e.clipboardData, { defaultPastePayload });
            return;
        }
        const dataTransfer = toVSDataTransfer(e.clipboardData);
        const providerCopyMimeTypes = providers.flatMap(x => x.copyMimeTypes ?? []);
        // Save off a handle pointing to data that VS Code maintains.
        const handle = id ?? generateUuid();
        this.setCopyMetadata(e.clipboardData, {
            id: handle,
            providerCopyMimeTypes,
            defaultPastePayload
        });
        const operations = providers.map((provider) => {
            return {
                providerMimeTypes: provider.copyMimeTypes,
                operation: createCancelablePromise(token => provider.prepareDocumentPaste(model, ranges, dataTransfer, token)
                    .catch(err => {
                    console.error(err);
                    return undefined;
                }))
            };
        });
        CopyPasteController_1._currentCopyOperation?.operations.forEach(entry => entry.operation.cancel());
        CopyPasteController_1._currentCopyOperation = { handle, operations };
    }
    async handlePaste(e) {
        if (e.clipboardData) {
            const [text, metadata] = ClipboardEventUtils.getTextData(e.clipboardData);
            const metadataComputed = metadata || InMemoryClipboardMetadataManager.INSTANCE.get(text);
            this._logService.trace('CopyPasteController#handlePaste for id : ', metadataComputed?.id);
        }
        else {
            this._logService.trace('CopyPasteController#handlePaste');
        }
        if (!e.clipboardData || !this._editor.hasTextFocus()) {
            return;
        }
        MessageController.get(this._editor)?.closeMessage();
        this._currentPasteOperation?.cancel();
        this._currentPasteOperation = undefined;
        const model = this._editor.getModel();
        const selections = this._editor.getSelections();
        if (!selections?.length || !model) {
            return;
        }
        if (this._editor.getOption(104 /* EditorOption.readOnly */) // Never enabled if editor is readonly.
            || (!this.isPasteAsEnabled() && !this._pasteAsActionContext) // Or feature disabled (but still enable if paste was explicitly requested)
        ) {
            return;
        }
        const metadata = this.fetchCopyMetadata(e);
        this._logService.trace('CopyPasteController#handlePaste with metadata : ', metadata?.id, ' and text.length : ', e.clipboardData.getData('text/plain').length);
        const dataTransfer = toExternalVSDataTransfer(e.clipboardData);
        dataTransfer.delete(vscodeClipboardMime);
        const fileTypes = Array.from(e.clipboardData.files).map(file => file.type);
        const allPotentialMimeTypes = [
            ...e.clipboardData.types,
            ...fileTypes,
            ...metadata?.providerCopyMimeTypes ?? [],
            // TODO: always adds `uri-list` because this get set if there are resources in the system clipboard.
            // However we can only check the system clipboard async. For this early check, just add it in.
            // We filter providers again once we have the final dataTransfer we will use.
            Mimes.uriList,
        ];
        const allProviders = this._languageFeaturesService.documentPasteEditProvider
            .ordered(model)
            .filter(provider => {
            // Filter out providers that don't match the requested paste types
            const preference = this._pasteAsActionContext?.preferred;
            if (preference) {
                if (!this.providerMatchesPreference(provider, preference)) {
                    return false;
                }
            }
            // And providers that don't handle any of mime types in the clipboard
            return provider.pasteMimeTypes?.some(type => matchesMimeType(type, allPotentialMimeTypes));
        });
        if (!allProviders.length) {
            if (this._pasteAsActionContext?.preferred) {
                this.showPasteAsNoEditMessage(selections, this._pasteAsActionContext.preferred);
                // Also prevent default paste from applying
                e.preventDefault();
                e.stopImmediatePropagation();
            }
            return;
        }
        // Prevent the editor's default paste handler from running.
        // Note that after this point, we are fully responsible for handling paste.
        // If we can't provider a paste for any reason, we need to explicitly delegate pasting back to the editor.
        e.preventDefault();
        e.stopImmediatePropagation();
        if (this._pasteAsActionContext) {
            this.showPasteAsPick(this._pasteAsActionContext.preferred, allProviders, selections, dataTransfer, metadata);
        }
        else {
            this.doPasteInline(allProviders, selections, dataTransfer, metadata, e);
        }
    }
    showPasteAsNoEditMessage(selections, preference) {
        const kindLabel = 'only' in preference
            ? preference.only.value
            : 'preferences' in preference
                ? (preference.preferences.length ? preference.preferences.map(preference => preference.value).join(', ') : localize(919, "empty"))
                : preference.providerId;
        MessageController.get(this._editor)?.showMessage(localize(920, "No paste edits for '{0}' found", kindLabel), selections[0].getStartPosition());
    }
    doPasteInline(allProviders, selections, dataTransfer, metadata, clipboardEvent) {
        this._logService.trace('CopyPasteController#doPasteInline');
        const editor = this._editor;
        if (!editor.hasModel()) {
            return;
        }
        const editorStateCts = new EditorStateCancellationTokenSource(editor, 1 /* CodeEditorStateFlag.Value */ | 2 /* CodeEditorStateFlag.Selection */, undefined);
        const p = createCancelablePromise(async (pToken) => {
            const editor = this._editor;
            if (!editor.hasModel()) {
                return;
            }
            const model = editor.getModel();
            const disposables = new DisposableStore();
            const cts = disposables.add(new CancellationTokenSource(pToken));
            disposables.add(editorStateCts.token.onCancellationRequested(() => cts.cancel()));
            const token = cts.token;
            try {
                await this.mergeInDataFromCopy(allProviders, dataTransfer, metadata, token);
                if (token.isCancellationRequested) {
                    return;
                }
                const supportedProviders = allProviders.filter(provider => this.isSupportedPasteProvider(provider, dataTransfer));
                if (!supportedProviders.length
                    || (supportedProviders.length === 1 && supportedProviders[0] instanceof DefaultTextPasteOrDropEditProvider) // Only our default text provider is active
                ) {
                    return this.applyDefaultPasteHandler(dataTransfer, metadata, token, clipboardEvent);
                }
                const context = {
                    triggerKind: DocumentPasteTriggerKind.Automatic,
                };
                const editSession = await this.getPasteEdits(supportedProviders, dataTransfer, model, selections, context, token);
                disposables.add(editSession);
                if (token.isCancellationRequested) {
                    return;
                }
                // If the only edit returned is our default text edit, use the default paste handler
                if (editSession.edits.length === 1 && editSession.edits[0].provider instanceof DefaultTextPasteOrDropEditProvider) {
                    return this.applyDefaultPasteHandler(dataTransfer, metadata, token, clipboardEvent);
                }
                if (editSession.edits.length) {
                    const canShowWidget = editor.getOption(97 /* EditorOption.pasteAs */).showPasteSelector === 'afterPaste';
                    return this._postPasteWidgetManager.applyEditAndShowIfNeeded(selections, { activeEditIndex: this.getInitialActiveEditIndex(model, editSession.edits), allEdits: editSession.edits }, canShowWidget, async (edit, resolveToken) => {
                        if (!edit.provider.resolveDocumentPasteEdit) {
                            return edit;
                        }
                        const resolveP = edit.provider.resolveDocumentPasteEdit(edit, resolveToken);
                        const showP = new DeferredPromise();
                        const resolved = await this._pasteProgressManager.showWhile(selections[0].getEndPosition(), localize(921, "Resolving paste edit for '{0}'. Click to cancel", edit.title), raceCancellation(Promise.race([showP.p, resolveP]), resolveToken), {
                            cancel: () => showP.cancel()
                        }, 0);
                        if (resolved) {
                            edit.insertText = resolved.insertText;
                            edit.additionalEdit = resolved.additionalEdit;
                        }
                        return edit;
                    }, token);
                }
                await this.applyDefaultPasteHandler(dataTransfer, metadata, token, clipboardEvent);
            }
            finally {
                disposables.dispose();
                if (this._currentPasteOperation === p) {
                    this._currentPasteOperation = undefined;
                }
            }
        });
        this._pasteProgressManager.showWhile(selections[0].getEndPosition(), localize(922, "Running paste handlers. Click to cancel and do basic paste"), p, {
            cancel: async () => {
                p.cancel();
                if (editorStateCts.token.isCancellationRequested) {
                    return;
                }
                await this.applyDefaultPasteHandler(dataTransfer, metadata, editorStateCts.token, clipboardEvent);
            }
        }).finally(() => {
            editorStateCts.dispose();
        });
        this._currentPasteOperation = p;
    }
    showPasteAsPick(preference, allProviders, selections, dataTransfer, metadata) {
        this._logService.trace('CopyPasteController#showPasteAsPick');
        const p = createCancelablePromise(async (token) => {
            const editor = this._editor;
            if (!editor.hasModel()) {
                return;
            }
            const model = editor.getModel();
            const disposables = new DisposableStore();
            const tokenSource = disposables.add(new EditorStateCancellationTokenSource(editor, 1 /* CodeEditorStateFlag.Value */ | 2 /* CodeEditorStateFlag.Selection */, undefined, token));
            try {
                await this.mergeInDataFromCopy(allProviders, dataTransfer, metadata, tokenSource.token);
                if (tokenSource.token.isCancellationRequested) {
                    return;
                }
                // Filter out any providers the don't match the full data transfer we will send them.
                let supportedProviders = allProviders.filter(provider => this.isSupportedPasteProvider(provider, dataTransfer, preference));
                if (preference) {
                    // We are looking for a specific edit
                    supportedProviders = supportedProviders.filter(provider => this.providerMatchesPreference(provider, preference));
                }
                const context = {
                    triggerKind: DocumentPasteTriggerKind.PasteAs,
                    only: preference && 'only' in preference ? preference.only : undefined,
                };
                let editSession = disposables.add(await this.getPasteEdits(supportedProviders, dataTransfer, model, selections, context, tokenSource.token));
                if (tokenSource.token.isCancellationRequested) {
                    return;
                }
                // Filter out any edits that don't match the requested kind
                if (preference) {
                    editSession = {
                        edits: editSession.edits.filter(edit => {
                            if ('only' in preference) {
                                return preference.only.contains(edit.kind);
                            }
                            else if ('preferences' in preference) {
                                return preference.preferences.some(preference => preference.contains(edit.kind));
                            }
                            else {
                                return preference.providerId === edit.provider.id;
                            }
                        }),
                        dispose: editSession.dispose
                    };
                }
                if (!editSession.edits.length) {
                    if (preference) {
                        this.showPasteAsNoEditMessage(selections, preference);
                    }
                    return;
                }
                let pickedEdit;
                if (preference) {
                    pickedEdit = editSession.edits.at(0);
                }
                else {
                    const configureDefaultItem = {
                        id: 'editor.pasteAs.default',
                        label: localize(923, "Configure default paste action"),
                        edit: undefined,
                    };
                    const selected = await this._quickInputService.pick([
                        ...editSession.edits.map((edit) => ({
                            label: edit.title,
                            description: edit.kind?.value,
                            edit,
                        })),
                        ...(CopyPasteController_1._configureDefaultAction ? [
                            upcast({ type: 'separator' }),
                            {
                                label: CopyPasteController_1._configureDefaultAction.label,
                                edit: undefined,
                            }
                        ] : [])
                    ], {
                        placeHolder: localize(924, "Select Paste Action"),
                    });
                    if (selected === configureDefaultItem) {
                        CopyPasteController_1._configureDefaultAction?.run();
                        return;
                    }
                    pickedEdit = selected?.edit;
                }
                if (!pickedEdit) {
                    return;
                }
                const combinedWorkspaceEdit = createCombinedWorkspaceEdit(model.uri, selections, pickedEdit);
                await this._bulkEditService.apply(combinedWorkspaceEdit, { editor: this._editor });
            }
            finally {
                disposables.dispose();
                if (this._currentPasteOperation === p) {
                    this._currentPasteOperation = undefined;
                }
            }
        });
        this._progressService.withProgress({
            location: 10 /* ProgressLocation.Window */,
            title: localize(925, "Running paste handlers"),
        }, () => p);
    }
    setCopyMetadata(dataTransfer, metadata) {
        this._logService.trace('CopyPasteController#setCopyMetadata new id : ', metadata.id);
        dataTransfer.setData(vscodeClipboardMime, JSON.stringify(metadata));
    }
    fetchCopyMetadata(e) {
        this._logService.trace('CopyPasteController#fetchCopyMetadata');
        if (!e.clipboardData) {
            return;
        }
        // Prefer using the clipboard data we saved off
        const rawMetadata = e.clipboardData.getData(vscodeClipboardMime);
        if (rawMetadata) {
            try {
                return JSON.parse(rawMetadata);
            }
            catch {
                return undefined;
            }
        }
        // Otherwise try to extract the generic text editor metadata
        const [_, metadata] = ClipboardEventUtils.getTextData(e.clipboardData);
        if (metadata) {
            return {
                defaultPastePayload: {
                    mode: metadata.mode,
                    multicursorText: metadata.multicursorText ?? null,
                    pasteOnNewLine: !!metadata.isFromEmptySelection,
                },
            };
        }
        return undefined;
    }
    async mergeInDataFromCopy(allProviders, dataTransfer, metadata, token) {
        this._logService.trace('CopyPasteController#mergeInDataFromCopy with metadata : ', metadata?.id);
        if (metadata?.id && CopyPasteController_1._currentCopyOperation?.handle === metadata.id) {
            // Only resolve providers that have data we may care about
            const toResolve = CopyPasteController_1._currentCopyOperation.operations
                .filter(op => allProviders.some(provider => provider.pasteMimeTypes.some(type => matchesMimeType(type, op.providerMimeTypes))))
                .map(op => op.operation);
            const toMergeResults = await Promise.all(toResolve);
            if (token.isCancellationRequested) {
                return;
            }
            // Values from higher priority providers should overwrite values from lower priority ones.
            // Reverse the array to so that the calls to `DataTransfer.replace` later will do this
            for (const toMergeData of toMergeResults.reverse()) {
                if (toMergeData) {
                    for (const [key, value] of toMergeData) {
                        dataTransfer.replace(key, value);
                    }
                }
            }
        }
        if (!dataTransfer.has(Mimes.uriList)) {
            const resources = await this._clipboardService.readResources();
            if (token.isCancellationRequested) {
                return;
            }
            if (resources.length) {
                dataTransfer.append(Mimes.uriList, createStringDataTransferItem(UriList.create(resources)));
            }
        }
    }
    async getPasteEdits(providers, dataTransfer, model, selections, context, token) {
        const disposables = new DisposableStore();
        const results = await raceCancellation(Promise.all(providers.map(async (provider) => {
            try {
                const edits = await provider.provideDocumentPasteEdits?.(model, selections, dataTransfer, context, token);
                if (edits) {
                    disposables.add(edits);
                }
                return edits?.edits?.map(edit => ({ ...edit, provider }));
            }
            catch (err) {
                if (!isCancellationError(err)) {
                    console.error(err);
                }
                return undefined;
            }
        })), token);
        const edits = coalesce(results ?? []).flat().filter(edit => {
            return !context.only || context.only.contains(edit.kind);
        });
        return {
            edits: sortEditsByYieldTo(edits),
            dispose: () => disposables.dispose()
        };
    }
    async applyDefaultPasteHandler(dataTransfer, metadata, token, clipboardEvent) {
        const textDataTransfer = dataTransfer.get(Mimes.text) ?? dataTransfer.get('text');
        const text = (await textDataTransfer?.asString()) ?? '';
        if (token.isCancellationRequested) {
            return;
        }
        const payload = {
            clipboardEvent,
            text,
            pasteOnNewLine: metadata?.defaultPastePayload.pasteOnNewLine ?? false,
            multicursorText: metadata?.defaultPastePayload.multicursorText ?? null,
            mode: null,
        };
        this._logService.trace('CopyPasteController#applyDefaultPasteHandler for id : ', metadata?.id);
        this._editor.trigger('keyboard', "paste" /* Handler.Paste */, payload);
    }
    /**
     * Filter out providers if they:
     * - Don't handle any of the data transfer types we have
     * - Don't match the preferred paste kind
     */
    isSupportedPasteProvider(provider, dataTransfer, preference) {
        if (!provider.pasteMimeTypes?.some(type => dataTransfer.matches(type))) {
            return false;
        }
        return !preference || this.providerMatchesPreference(provider, preference);
    }
    providerMatchesPreference(provider, preference) {
        if ('only' in preference) {
            return provider.providedPasteEditKinds.some(providedKind => preference.only.contains(providedKind));
        }
        else if ('preferences' in preference) {
            return preference.preferences.some(providedKind => preference.preferences.some(preferredKind => preferredKind.contains(providedKind)));
        }
        else {
            return provider.id === preference.providerId;
        }
    }
    getInitialActiveEditIndex(model, edits) {
        const preferredProviders = this._configService.getValue(pasteAsPreferenceConfig, { resource: model.uri });
        for (const config of Array.isArray(preferredProviders) ? preferredProviders : []) {
            const desiredKind = new HierarchicalKind(config);
            const editIndex = edits.findIndex(edit => desiredKind.contains(edit.kind));
            if (editIndex >= 0) {
                return editIndex;
            }
        }
        return 0;
    }
};
CopyPasteController = CopyPasteController_1 = __decorate([
    __param(1, IInstantiationService),
    __param(2, ILogService),
    __param(3, IBulkEditService),
    __param(4, IClipboardService),
    __param(5, ICommandService),
    __param(6, IConfigurationService),
    __param(7, ILanguageFeaturesService),
    __param(8, IQuickInputService),
    __param(9, IProgressService)
], CopyPasteController);

export { CopyPasteController, changePasteTypeCommandId, pasteAsPreferenceConfig, pasteWidgetVisibleCtx };
