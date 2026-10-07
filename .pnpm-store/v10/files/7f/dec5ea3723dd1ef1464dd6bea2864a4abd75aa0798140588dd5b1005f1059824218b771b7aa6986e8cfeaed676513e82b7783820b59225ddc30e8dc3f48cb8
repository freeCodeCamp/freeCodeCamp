import { mapFindFirst } from '../../../../../base/common/arraysFind.js';
import { itemsEquals } from '../../../../../base/common/equals.js';
import { BugIndicatingError, onUnexpectedExternalError } from '../../../../../base/common/errors.js';
import { Emitter } from '../../../../../base/common/event.js';
import { Disposable } from '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observableInternal/index.js';
import { firstNonWhitespaceIndex } from '../../../../../base/common/strings.js';
import { isDefined } from '../../../../../base/common/types.js';
import { IAccessibilityService } from '../../../../../platform/accessibility/common/accessibility.js';
import { ICommandService } from '../../../../../platform/commands/common/commands.js';
import { IInstantiationService } from '../../../../../platform/instantiation/common/instantiation.js';
import { observableCodeEditor } from '../../../../browser/observableCodeEditor.js';
import { CursorColumns } from '../../../../common/core/cursorColumns.js';
import { LineRange } from '../../../../common/core/ranges/lineRange.js';
import { Position } from '../../../../common/core/position.js';
import { Range } from '../../../../common/core/range.js';
import { Selection } from '../../../../common/core/selection.js';
import { TextEdit, TextReplacement } from '../../../../common/core/edits/textEdit.js';
import { TextLength } from '../../../../common/core/text/textLength.js';
import { InlineCompletionTriggerKind, InlineCompletionEndOfLifeReasonKind } from '../../../../common/languages.js';
import { ILanguageConfigurationService } from '../../../../common/languages/languageConfigurationRegistry.js';
import { TextModelText } from '../../../../common/model/textModelText.js';
import { ILanguageFeaturesService } from '../../../../common/services/languageFeatures.js';
import { SnippetController2 } from '../../../snippet/browser/snippetController2.js';
import { removeTextReplacementCommonSuffixPrefix, getEndPositionsAfterApplying } from '../utils.js';
import { ObservableAnimatedValue, AnimatedValue, easeOutCubic } from './animation.js';
import { computeGhostText } from './computeGhostText.js';
import { GhostText, ghostTextsOrReplacementsEqual, ghostTextOrReplacementEquals } from './ghostText.js';
import { InlineCompletionsSource } from './inlineCompletionsSource.js';
import { InlineEdit } from './inlineEdit.js';
import { InlineCompletionEditorType } from './provideInlineCompletions.js';
import { singleTextRemoveCommonPrefix, singleTextEditAugments } from './singleTextEditHelpers.js';
import { EditSources } from '../../../../common/textModelEditSource.js';
import { ICodeEditorService } from '../../../../browser/services/codeEditorService.js';
import { IInlineCompletionsService } from '../../../../browser/services/inlineCompletionsService.js';
import { TypingInterval } from './typingSpeed.js';
import { StringReplacement } from '../../../../common/core/edits/stringEdit.js';
import { OffsetRange } from '../../../../common/core/ranges/offsetRange.js';
import { URI } from '../../../../../base/common/uri.js';
import { derived, derivedHandleChanges, derivedOpts } from '../../../../../base/common/observableInternal/observables/derived.js';
import { recomputeInitiallyAndOnChange, mapObservableArrayCached } from '../../../../../base/common/observableInternal/utils/utils.js';
import { observableValue } from '../../../../../base/common/observableInternal/observables/observableValue.js';
import { observableSignal } from '../../../../../base/common/observableInternal/observables/observableSignal.js';
import { constObservable } from '../../../../../base/common/observableInternal/observables/constObservable.js';
import { autorun } from '../../../../../base/common/observableInternal/reactions/autorun.js';
import { observableFromEvent } from '../../../../../base/common/observableInternal/observables/observableFromEvent.js';
import { subtransaction, transaction } from '../../../../../base/common/observableInternal/transaction.js';

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
let InlineCompletionsModel = class InlineCompletionsModel extends Disposable {
    get isAcceptingPartially() { return this._isAcceptingPartially; }
    constructor(textModel, _selectedSuggestItem, _textModelVersionId, _positions, _debounceValue, _enabled, _editor, _instantiationService, _commandService, _languageConfigurationService, _accessibilityService, _languageFeaturesService, _codeEditorService, _inlineCompletionsService) {
        super();
        this.textModel = textModel;
        this._selectedSuggestItem = _selectedSuggestItem;
        this._textModelVersionId = _textModelVersionId;
        this._positions = _positions;
        this._debounceValue = _debounceValue;
        this._enabled = _enabled;
        this._editor = _editor;
        this._instantiationService = _instantiationService;
        this._commandService = _commandService;
        this._languageConfigurationService = _languageConfigurationService;
        this._accessibilityService = _accessibilityService;
        this._languageFeaturesService = _languageFeaturesService;
        this._codeEditorService = _codeEditorService;
        this._inlineCompletionsService = _inlineCompletionsService;
        this._isActive = observableValue(this, false);
        this._onlyRequestInlineEditsSignal = observableSignal(this);
        this._forceUpdateExplicitlySignal = observableSignal(this);
        this._noDelaySignal = observableSignal(this);
        this._fetchSpecificProviderSignal = observableSignal(this);
        // We use a semantic id to keep the same inline completion selected even if the provider reorders the completions.
        this._selectedInlineCompletionId = observableValue(this, undefined);
        this.primaryPosition = derived(this, reader => this._positions.read(reader)[0] ?? new Position(1, 1));
        this.allPositions = derived(this, reader => this._positions.read(reader));
        this._isAcceptingPartially = false;
        this._appearedInsideViewport = derived(this, reader => {
            const state = this.state.read(reader);
            if (!state || !state.inlineCompletion) {
                return false;
            }
            return isSuggestionInViewport(this._editor, state.inlineCompletion);
        });
        this._onDidAccept = new Emitter();
        this.onDidAccept = this._onDidAccept.event;
        this._lastShownInlineCompletionInfo = undefined;
        this._lastAcceptedInlineCompletionInfo = undefined;
        this._didUndoInlineEdits = derivedHandleChanges({
            owner: this,
            changeTracker: {
                createChangeSummary: () => ({ didUndo: false }),
                handleChange: (ctx, changeSummary) => {
                    changeSummary.didUndo = ctx.didChange(this._textModelVersionId) && !!ctx.change?.isUndoing;
                    return true;
                }
            }
        }, (reader, changeSummary) => {
            const versionId = this._textModelVersionId.read(reader);
            if (versionId !== null
                && this._lastAcceptedInlineCompletionInfo
                && this._lastAcceptedInlineCompletionInfo.textModelVersionIdAfter === versionId - 1
                && this._lastAcceptedInlineCompletionInfo.inlineCompletion.isInlineEdit
                && changeSummary.didUndo) {
                this._lastAcceptedInlineCompletionInfo = undefined;
                return true;
            }
            return false;
        });
        this._preserveCurrentCompletionReasons = new Set([
            VersionIdChangeReason.Redo,
            VersionIdChangeReason.Undo,
            VersionIdChangeReason.AcceptWord,
        ]);
        this.dontRefetchSignal = observableSignal(this);
        this._fetchInlineCompletionsPromise = derivedHandleChanges({
            owner: this,
            changeTracker: {
                createChangeSummary: () => ({
                    dontRefetch: false,
                    preserveCurrentCompletion: false,
                    inlineCompletionTriggerKind: InlineCompletionTriggerKind.Automatic,
                    onlyRequestInlineEdits: false,
                    shouldDebounce: true,
                    provider: undefined,
                    textChange: false,
                    changeReason: '',
                }),
                handleChange: (ctx, changeSummary) => {
                    /** @description fetch inline completions */
                    if (ctx.didChange(this._textModelVersionId)) {
                        if (this._preserveCurrentCompletionReasons.has(this._getReason(ctx.change))) {
                            changeSummary.preserveCurrentCompletion = true;
                        }
                        const detailedReasons = ctx.change?.detailedReasons ?? [];
                        changeSummary.changeReason = detailedReasons.length > 0 ? detailedReasons[0].getType() : '';
                        changeSummary.textChange = true;
                    }
                    else if (ctx.didChange(this._forceUpdateExplicitlySignal)) {
                        changeSummary.preserveCurrentCompletion = true;
                        changeSummary.inlineCompletionTriggerKind = InlineCompletionTriggerKind.Explicit;
                    }
                    else if (ctx.didChange(this.dontRefetchSignal)) {
                        changeSummary.dontRefetch = true;
                    }
                    else if (ctx.didChange(this._onlyRequestInlineEditsSignal)) {
                        changeSummary.onlyRequestInlineEdits = true;
                    }
                    else if (ctx.didChange(this._fetchSpecificProviderSignal)) {
                        changeSummary.provider = ctx.change;
                    }
                    return true;
                },
            },
        }, (reader, changeSummary) => {
            this._source.clearOperationOnTextModelChange.read(reader); // Make sure the clear operation runs before the fetch operation
            this._noDelaySignal.read(reader);
            this.dontRefetchSignal.read(reader);
            this._onlyRequestInlineEditsSignal.read(reader);
            this._forceUpdateExplicitlySignal.read(reader);
            this._fetchSpecificProviderSignal.read(reader);
            const shouldUpdate = ((this._enabled.read(reader) && this._selectedSuggestItem.read(reader)) || this._isActive.read(reader))
                && (!this._inlineCompletionsService.isSnoozing() || changeSummary.inlineCompletionTriggerKind === InlineCompletionTriggerKind.Explicit);
            if (!shouldUpdate) {
                this._source.cancelUpdate();
                return undefined;
            }
            this._textModelVersionId.read(reader); // Refetch on text change
            const suggestWidgetInlineCompletions = this._source.suggestWidgetInlineCompletions.read(undefined);
            let suggestItem = this._selectedSuggestItem.read(reader);
            if (this._shouldShowOnSuggestConflict.read(undefined)) {
                suggestItem = undefined;
            }
            if (suggestWidgetInlineCompletions && !suggestItem) {
                this._source.seedInlineCompletionsWithSuggestWidget();
            }
            if (changeSummary.dontRefetch) {
                return Promise.resolve(true);
            }
            if (this._didUndoInlineEdits.read(reader) && changeSummary.inlineCompletionTriggerKind !== InlineCompletionTriggerKind.Explicit) {
                transaction(tx => {
                    this._source.clear(tx);
                });
                return undefined;
            }
            let reason = '';
            if (changeSummary.provider) {
                reason += 'providerOnDidChange';
            }
            else if (changeSummary.inlineCompletionTriggerKind === InlineCompletionTriggerKind.Explicit) {
                reason += 'explicit';
            }
            if (changeSummary.changeReason) {
                reason += reason.length > 0 ? `:${changeSummary.changeReason}` : changeSummary.changeReason;
            }
            const typingInterval = this._typing.getTypingInterval();
            const requestInfo = {
                editorType: this.editorType,
                startTime: Date.now(),
                languageId: this.textModel.getLanguageId(),
                reason,
                typingInterval: typingInterval.averageInterval,
                typingIntervalCharacterCount: typingInterval.characterCount,
                availableProviders: [],
            };
            let context = {
                triggerKind: changeSummary.inlineCompletionTriggerKind,
                selectedSuggestionInfo: suggestItem?.toSelectedSuggestionInfo(),
                includeInlineCompletions: !changeSummary.onlyRequestInlineEdits,
                includeInlineEdits: this._inlineEditsEnabled.read(reader),
                requestIssuedDateTime: requestInfo.startTime,
                earliestShownDateTime: requestInfo.startTime + (changeSummary.inlineCompletionTriggerKind === InlineCompletionTriggerKind.Explicit || this.inAcceptFlow.read(undefined) ? 0 : this._minShowDelay.read(undefined)),
            };
            if (context.triggerKind === InlineCompletionTriggerKind.Automatic && changeSummary.textChange) {
                if (this.textModel.getAlternativeVersionId() === this._lastShownInlineCompletionInfo?.alternateTextModelVersionId) {
                    // When undoing back to a version where an inline edit/completion was shown,
                    // we want to show an inline edit (or completion) again if it was originally an inline edit (or completion).
                    context = {
                        ...context,
                        includeInlineCompletions: !this._lastShownInlineCompletionInfo.inlineCompletion.isInlineEdit,
                        includeInlineEdits: this._lastShownInlineCompletionInfo.inlineCompletion.isInlineEdit,
                    };
                }
            }
            const itemToPreserveCandidate = this.selectedInlineCompletion.read(undefined) ?? this._inlineCompletionItems.read(undefined)?.inlineEdit;
            const itemToPreserve = changeSummary.preserveCurrentCompletion || itemToPreserveCandidate?.forwardStable
                ? itemToPreserveCandidate : undefined;
            const userJumpedToActiveCompletion = this._jumpedToId.map(jumpedTo => !!jumpedTo && jumpedTo === this._inlineCompletionItems.read(undefined)?.inlineEdit?.semanticId);
            const providers = changeSummary.provider
                ? { providers: [changeSummary.provider], label: 'single:' + changeSummary.provider.providerId?.toString() }
                : { providers: this._languageFeaturesService.inlineCompletionsProvider.all(this.textModel), label: undefined }; // TODO: should use inlineCompletionProviders
            const availableProviders = this.getAvailableProviders(providers.providers);
            requestInfo.availableProviders = availableProviders.map(p => p.providerId).filter(isDefined);
            return this._source.fetch(availableProviders, providers.label, context, itemToPreserve?.identity, changeSummary.shouldDebounce, userJumpedToActiveCompletion, requestInfo);
        });
        this._inlineCompletionItems = derivedOpts({ owner: this }, reader => {
            const c = this._source.inlineCompletions.read(reader);
            if (!c) {
                return undefined;
            }
            const cursorPosition = this.primaryPosition.read(reader);
            let inlineEdit = undefined;
            const visibleCompletions = [];
            for (const completion of c.inlineCompletions) {
                if (!completion.isInlineEdit) {
                    if (completion.isVisible(this.textModel, cursorPosition)) {
                        visibleCompletions.push(completion);
                    }
                }
                else {
                    inlineEdit = completion;
                }
            }
            if (visibleCompletions.length !== 0) {
                // Don't show the inline edit if there is a visible completion
                inlineEdit = undefined;
            }
            return {
                inlineCompletions: visibleCompletions,
                inlineEdit,
            };
        });
        this._filteredInlineCompletionItems = derivedOpts({ owner: this, equalsFn: itemsEquals() }, reader => {
            const c = this._inlineCompletionItems.read(reader);
            return c?.inlineCompletions ?? [];
        });
        this.selectedInlineCompletionIndex = derived(this, (reader) => {
            const selectedInlineCompletionId = this._selectedInlineCompletionId.read(reader);
            const filteredCompletions = this._filteredInlineCompletionItems.read(reader);
            const idx = this._selectedInlineCompletionId === undefined ? -1
                : filteredCompletions.findIndex(v => v.semanticId === selectedInlineCompletionId);
            if (idx === -1) {
                // Reset the selection so that the selection does not jump back when it appears again
                this._selectedInlineCompletionId.set(undefined, undefined);
                return 0;
            }
            return idx;
        });
        this.selectedInlineCompletion = derived(this, (reader) => {
            const filteredCompletions = this._filteredInlineCompletionItems.read(reader);
            const idx = this.selectedInlineCompletionIndex.read(reader);
            return filteredCompletions[idx];
        });
        this.activeCommands = derivedOpts({ owner: this, equalsFn: itemsEquals() }, r => this.selectedInlineCompletion.read(r)?.source.inlineSuggestions.commands ?? []);
        this.inlineCompletionsCount = derived(this, reader => {
            if (this.lastTriggerKind.read(reader) === InlineCompletionTriggerKind.Explicit) {
                return this._filteredInlineCompletionItems.read(reader).length;
            }
            else {
                return undefined;
            }
        });
        this._hasVisiblePeekWidgets = derived(this, reader => this._editorObs.openedPeekWidgets.read(reader) > 0);
        this._shouldShowOnSuggestConflict = derived(this, reader => {
            const showOnSuggestConflict = this._showOnSuggestConflict.read(reader);
            if (showOnSuggestConflict !== 'never') {
                const hasInlineCompletion = !!this.selectedInlineCompletion.read(reader);
                if (hasInlineCompletion) {
                    const item = this._selectedSuggestItem.read(reader);
                    if (!item) {
                        return false;
                    }
                    if (showOnSuggestConflict === 'whenSuggestListIsIncomplete') {
                        return item.listIncomplete;
                    }
                    return true;
                }
            }
            return false;
        });
        this.state = derivedOpts({
            owner: this,
            equalsFn: (a, b) => {
                if (!a || !b) {
                    return a === b;
                }
                if (a.kind === 'ghostText' && b.kind === 'ghostText') {
                    return ghostTextsOrReplacementsEqual(a.ghostTexts, b.ghostTexts)
                        && a.inlineCompletion === b.inlineCompletion
                        && a.suggestItem === b.suggestItem;
                }
                else if (a.kind === 'inlineEdit' && b.kind === 'inlineEdit') {
                    return a.inlineEdit.equals(b.inlineEdit);
                }
                return false;
            }
        }, (reader) => {
            const model = this.textModel;
            if (this._suppressInSnippetMode.read(reader) && this._isInSnippetMode.read(reader)) {
                return undefined;
            }
            const item = this._inlineCompletionItems.read(reader);
            const inlineEditResult = item?.inlineEdit;
            if (inlineEditResult) {
                if (this._hasVisiblePeekWidgets.read(reader)) {
                    return undefined;
                }
                let edit = inlineEditResult.getSingleTextEdit();
                edit = singleTextRemoveCommonPrefix(edit, model);
                const cursorAtInlineEdit = this.primaryPosition.map(cursorPos => LineRange.fromRangeInclusive(inlineEditResult.targetRange).addMargin(1, 1).contains(cursorPos.lineNumber));
                const commands = inlineEditResult.source.inlineSuggestions.commands;
                const inlineEdit = new InlineEdit(edit, commands ?? [], inlineEditResult);
                const edits = inlineEditResult.updatedEdit;
                const e = edits ? TextEdit.fromStringEdit(edits, new TextModelText(this.textModel)).replacements : [edit];
                const nextEditUri = (item.inlineEdit?.command?.id === 'vscode.open' || item.inlineEdit?.command?.id === '_workbench.open') &&
                    // eslint-disable-next-line local/code-no-any-casts
                    item.inlineEdit?.command.arguments?.length ? URI.from(item.inlineEdit?.command.arguments[0]) : undefined;
                return { kind: 'inlineEdit', inlineEdit, inlineCompletion: inlineEditResult, edits: e, cursorAtInlineEdit, nextEditUri };
            }
            const suggestItem = this._selectedSuggestItem.read(reader);
            if (!this._shouldShowOnSuggestConflict.read(reader) && suggestItem) {
                const suggestCompletionEdit = singleTextRemoveCommonPrefix(suggestItem.getSingleTextEdit(), model);
                const augmentation = this._computeAugmentation(suggestCompletionEdit, reader);
                const isSuggestionPreviewEnabled = this._suggestPreviewEnabled.read(reader);
                if (!isSuggestionPreviewEnabled && !augmentation) {
                    return undefined;
                }
                const fullEdit = augmentation?.edit ?? suggestCompletionEdit;
                const fullEditPreviewLength = augmentation ? augmentation.edit.text.length - suggestCompletionEdit.text.length : 0;
                const mode = this._suggestPreviewMode.read(reader);
                const positions = this._positions.read(reader);
                const allPotentialEdits = [fullEdit, ...getSecondaryEdits(this.textModel, positions, fullEdit)];
                const validEditsAndGhostTexts = allPotentialEdits
                    .map((edit, idx) => ({ edit, ghostText: edit ? computeGhostText(edit, model, mode, positions[idx], fullEditPreviewLength) : undefined }))
                    .filter(({ edit, ghostText }) => edit !== undefined && ghostText !== undefined);
                const edits = validEditsAndGhostTexts.map(({ edit }) => edit);
                const ghostTexts = validEditsAndGhostTexts.map(({ ghostText }) => ghostText);
                const primaryGhostText = ghostTexts[0] ?? new GhostText(fullEdit.range.endLineNumber, []);
                return { kind: 'ghostText', edits, primaryGhostText, ghostTexts, inlineCompletion: augmentation?.completion, suggestItem };
            }
            else {
                if (!this._isActive.read(reader)) {
                    return undefined;
                }
                const inlineCompletion = this.selectedInlineCompletion.read(reader);
                if (!inlineCompletion) {
                    return undefined;
                }
                const replacement = inlineCompletion.getSingleTextEdit();
                const mode = this._inlineSuggestMode.read(reader);
                const positions = this._positions.read(reader);
                const allPotentialEdits = [replacement, ...getSecondaryEdits(this.textModel, positions, replacement)];
                const validEditsAndGhostTexts = allPotentialEdits
                    .map((edit, idx) => ({ edit, ghostText: edit ? computeGhostText(edit, model, mode, positions[idx], 0) : undefined }))
                    .filter(({ edit, ghostText }) => edit !== undefined && ghostText !== undefined);
                const edits = validEditsAndGhostTexts.map(({ edit }) => edit);
                const ghostTexts = validEditsAndGhostTexts.map(({ ghostText }) => ghostText);
                if (!ghostTexts[0]) {
                    return undefined;
                }
                return { kind: 'ghostText', edits, primaryGhostText: ghostTexts[0], ghostTexts, inlineCompletion, suggestItem: undefined };
            }
        });
        this.inlineCompletionState = derived(this, reader => {
            const s = this.state.read(reader);
            if (!s || s.kind !== 'ghostText') {
                return undefined;
            }
            if (this._editorObs.inComposition.read(reader)) {
                return undefined;
            }
            return s;
        });
        this.inlineEditState = derived(this, reader => {
            const s = this.state.read(reader);
            if (!s || s.kind !== 'inlineEdit') {
                return undefined;
            }
            return s;
        });
        this.inlineEditAvailable = derived(this, reader => {
            const s = this.inlineEditState.read(reader);
            return !!s;
        });
        this.warning = derived(this, reader => {
            return this.inlineCompletionState.read(reader)?.inlineCompletion?.warning;
        });
        this.ghostTexts = derivedOpts({ owner: this, equalsFn: ghostTextsOrReplacementsEqual }, reader => {
            const v = this.inlineCompletionState.read(reader);
            if (!v) {
                return undefined;
            }
            return v.ghostTexts;
        });
        this.primaryGhostText = derivedOpts({ owner: this, equalsFn: ghostTextOrReplacementEquals }, reader => {
            const v = this.inlineCompletionState.read(reader);
            if (!v) {
                return undefined;
            }
            return v?.primaryGhostText;
        });
        this.showCollapsed = derived(this, reader => {
            const state = this.state.read(reader);
            if (!state || state.kind !== 'inlineEdit') {
                return false;
            }
            if (state.inlineCompletion.hint) {
                return false;
            }
            const isCurrentModelVersion = state.inlineCompletion.updatedEditModelVersion === this._textModelVersionId.read(reader);
            return (this._inlineEditsShowCollapsedEnabled.read(reader) || !isCurrentModelVersion)
                && this._jumpedToId.read(reader) !== state.inlineCompletion.semanticId
                && !this._inAcceptFlow.read(reader);
        });
        this._tabShouldIndent = derived(this, reader => {
            if (this._inAcceptFlow.read(reader)) {
                return false;
            }
            function isMultiLine(range) {
                return range.startLineNumber !== range.endLineNumber;
            }
            function getNonIndentationRange(model, lineNumber) {
                const columnStart = model.getLineIndentColumn(lineNumber);
                const lastNonWsColumn = model.getLineLastNonWhitespaceColumn(lineNumber);
                const columnEnd = Math.max(lastNonWsColumn, columnStart);
                return new Range(lineNumber, columnStart, lineNumber, columnEnd);
            }
            const selections = this._editorObs.selections.read(reader);
            return selections?.some(s => {
                if (s.isEmpty()) {
                    return this.textModel.getLineLength(s.startLineNumber) === 0;
                }
                else {
                    return isMultiLine(s) || s.containsRange(getNonIndentationRange(this.textModel, s.startLineNumber));
                }
            });
        });
        this.tabShouldJumpToInlineEdit = derived(this, reader => {
            if (this._tabShouldIndent.read(reader)) {
                return false;
            }
            const s = this.inlineEditState.read(reader);
            if (!s) {
                return false;
            }
            if (this.showCollapsed.read(reader)) {
                return true;
            }
            if (this._inAcceptFlow.read(reader) && this._appearedInsideViewport.read(reader) && !s.inlineCompletion.hint?.jumpToEdit) {
                return false;
            }
            return !s.cursorAtInlineEdit.read(reader);
        });
        this.tabShouldAcceptInlineEdit = derived(this, reader => {
            const s = this.inlineEditState.read(reader);
            if (!s) {
                return false;
            }
            if (this.showCollapsed.read(reader)) {
                return false;
            }
            if (this._tabShouldIndent.read(reader)) {
                return false;
            }
            if (this._inAcceptFlow.read(reader) && this._appearedInsideViewport.read(reader) && !s.inlineCompletion.hint?.jumpToEdit) {
                return true;
            }
            if (s.inlineCompletion.targetRange.startLineNumber === this._editorObs.cursorLineNumber.read(reader)) {
                return true;
            }
            if (this._jumpedToId.read(reader) === s.inlineCompletion.semanticId) {
                return true;
            }
            return s.cursorAtInlineEdit.read(reader);
        });
        this._jumpedToId = observableValue(this, undefined);
        this._inAcceptFlow = observableValue(this, false);
        this.inAcceptFlow = this._inAcceptFlow;
        this._source = this._register(this._instantiationService.createInstance(InlineCompletionsSource, this.textModel, this._textModelVersionId, this._debounceValue, this.primaryPosition));
        this.lastTriggerKind = this._source.inlineCompletions.map(this, v => v?.request?.context.triggerKind);
        this._editorObs = observableCodeEditor(this._editor);
        const suggest = this._editorObs.getOption(134 /* EditorOption.suggest */);
        this._suggestPreviewEnabled = suggest.map(v => v.preview);
        this._suggestPreviewMode = suggest.map(v => v.previewMode);
        const inlineSuggest = this._editorObs.getOption(71 /* EditorOption.inlineSuggest */);
        this._inlineSuggestMode = inlineSuggest.map(v => v.mode);
        this._suppressedInlineCompletionGroupIds = inlineSuggest.map(v => new Set(v.experimental.suppressInlineSuggestions.split(',')));
        this._inlineEditsEnabled = inlineSuggest.map(v => !!v.edits.enabled);
        this._inlineEditsShowCollapsedEnabled = inlineSuggest.map(s => s.edits.showCollapsed);
        this._triggerCommandOnProviderChange = inlineSuggest.map(s => s.triggerCommandOnProviderChange);
        this._minShowDelay = inlineSuggest.map(s => s.minShowDelay);
        this._showOnSuggestConflict = inlineSuggest.map(s => s.experimental.showOnSuggestConflict);
        this._suppressInSnippetMode = inlineSuggest.map(s => s.suppressInSnippetMode);
        const snippetController = SnippetController2.get(this._editor);
        this._isInSnippetMode = snippetController?.isInSnippetObservable ?? constObservable(false);
        this._typing = this._register(new TypingInterval(this.textModel));
        this._register(this._inlineCompletionsService.onDidChangeIsSnoozing((isSnoozing) => {
            if (isSnoozing) {
                this.stop();
            }
        }));
        { // Determine editor type
            const isNotebook = this.textModel.uri.scheme === 'vscode-notebook-cell';
            const [diffEditor] = this._codeEditorService.listDiffEditors()
                .filter(d => d.getOriginalEditor().getId() === this._editor.getId() ||
                d.getModifiedEditor().getId() === this._editor.getId());
            this.isInDiffEditor = !!diffEditor;
            this.editorType = isNotebook ? InlineCompletionEditorType.Notebook
                : this.isInDiffEditor ? InlineCompletionEditorType.DiffEditor
                    : InlineCompletionEditorType.TextEditor;
        }
        this._register(recomputeInitiallyAndOnChange(this.state, (s) => {
            if (s && s.inlineCompletion) {
                this._inlineCompletionsService.reportNewCompletion(s.inlineCompletion.requestUuid);
            }
        }));
        this._register(recomputeInitiallyAndOnChange(this._fetchInlineCompletionsPromise));
        this._register(autorun(reader => {
            this._editorObs.versionId.read(reader);
            this._inAcceptFlow.set(false, undefined);
        }));
        this._register(autorun(reader => {
            const jumpToReset = this.state.map((s, reader) => !s || s.kind === 'inlineEdit' && !s.cursorAtInlineEdit.read(reader)).read(reader);
            if (jumpToReset) {
                this._jumpedToId.set(undefined, undefined);
            }
        }));
        const inlineEditSemanticId = this.inlineEditState.map(s => s?.inlineCompletion.semanticId);
        this._register(autorun(reader => {
            const id = inlineEditSemanticId.read(reader);
            if (id) {
                this._editor.pushUndoStop();
                this._lastShownInlineCompletionInfo = {
                    alternateTextModelVersionId: this.textModel.getAlternativeVersionId(),
                    inlineCompletion: this.state.get().inlineCompletion,
                };
            }
        }));
        // TODO: should use getAvailableProviders and update on _suppressedInlineCompletionGroupIds change
        const inlineCompletionProviders = observableFromEvent(this._languageFeaturesService.inlineCompletionsProvider.onDidChange, () => this._languageFeaturesService.inlineCompletionsProvider.all(textModel));
        mapObservableArrayCached(this, inlineCompletionProviders, (provider, store) => {
            if (!provider.onDidChangeInlineCompletions) {
                return;
            }
            store.add(provider.onDidChangeInlineCompletions(() => {
                if (!this._enabled.get()) {
                    return;
                }
                // Only update the active editor
                const activeEditor = this._codeEditorService.getFocusedCodeEditor() || this._codeEditorService.getActiveCodeEditor();
                if (activeEditor !== this._editor) {
                    return;
                }
                if (this._triggerCommandOnProviderChange.get()) {
                    // TODO@hediet remove this and always do the else branch.
                    this.trigger(undefined, { onlyFetchInlineEdits: true });
                    return;
                }
                // If there is an active suggestion from a different provider, we ignore the update
                const activeState = this.state.get();
                if (activeState && (activeState.inlineCompletion || activeState.edits) && activeState.inlineCompletion?.source.provider !== provider) {
                    return;
                }
                transaction(tx => {
                    this._fetchSpecificProviderSignal.trigger(tx, provider);
                    this.trigger(tx);
                });
            }));
        }).recomputeInitiallyAndOnChange(this._store);
        this._didUndoInlineEdits.recomputeInitiallyAndOnChange(this._store);
    }
    getIndentationInfo(reader) {
        let startsWithIndentation = false;
        let startsWithIndentationLessThanTabSize = true;
        const ghostText = this?.primaryGhostText.read(reader);
        if (!!this?._selectedSuggestItem && ghostText && ghostText.parts.length > 0) {
            const { column, lines } = ghostText.parts[0];
            const firstLine = lines[0].line;
            const indentationEndColumn = this.textModel.getLineIndentColumn(ghostText.lineNumber);
            const inIndentation = column <= indentationEndColumn;
            if (inIndentation) {
                let firstNonWsIdx = firstNonWhitespaceIndex(firstLine);
                if (firstNonWsIdx === -1) {
                    firstNonWsIdx = firstLine.length - 1;
                }
                startsWithIndentation = firstNonWsIdx > 0;
                const tabSize = this.textModel.getOptions().tabSize;
                const visibleColumnIndentation = CursorColumns.visibleColumnFromColumn(firstLine, firstNonWsIdx + 1, tabSize);
                startsWithIndentationLessThanTabSize = visibleColumnIndentation < tabSize;
            }
        }
        return {
            startsWithIndentation,
            startsWithIndentationLessThanTabSize,
        };
    }
    _getReason(e) {
        if (e?.isUndoing) {
            return VersionIdChangeReason.Undo;
        }
        if (e?.isRedoing) {
            return VersionIdChangeReason.Redo;
        }
        if (this.isAcceptingPartially) {
            return VersionIdChangeReason.AcceptWord;
        }
        return VersionIdChangeReason.Other;
    }
    // TODO: This is not an ideal implementation of excludesGroupIds, however as this is currently still behind proposed API
    // and due to the time constraints, we are using a simplified approach
    getAvailableProviders(providers) {
        const suppressedProviderGroupIds = this._suppressedInlineCompletionGroupIds.get();
        const unsuppressedProviders = providers.filter(provider => !(provider.groupId && suppressedProviderGroupIds.has(provider.groupId)));
        const excludedGroupIds = new Set();
        for (const provider of unsuppressedProviders) {
            provider.excludesGroupIds?.forEach(p => excludedGroupIds.add(p));
        }
        const availableProviders = [];
        for (const provider of unsuppressedProviders) {
            if (provider.groupId && excludedGroupIds.has(provider.groupId)) {
                continue;
            }
            availableProviders.push(provider);
        }
        return availableProviders;
    }
    async trigger(tx, options = {}) {
        subtransaction(tx, tx => {
            if (options.onlyFetchInlineEdits) {
                this._onlyRequestInlineEditsSignal.trigger(tx);
            }
            if (options.noDelay) {
                this._noDelaySignal.trigger(tx);
            }
            this._isActive.set(true, tx);
            if (options.explicit) {
                this._inAcceptFlow.set(true, tx);
                this._forceUpdateExplicitlySignal.trigger(tx);
            }
            if (options.provider) {
                this._fetchSpecificProviderSignal.trigger(tx, options.provider);
            }
        });
        await this._fetchInlineCompletionsPromise.get();
    }
    async triggerExplicitly(tx, onlyFetchInlineEdits = false) {
        return this.trigger(tx, { onlyFetchInlineEdits, explicit: true });
    }
    stop(stopReason = 'automatic', tx) {
        subtransaction(tx, tx => {
            if (stopReason === 'explicitCancel') {
                const inlineCompletion = this.state.get()?.inlineCompletion;
                if (inlineCompletion) {
                    inlineCompletion.reportEndOfLife({ kind: InlineCompletionEndOfLifeReasonKind.Rejected });
                }
            }
            this._isActive.set(false, tx);
            this._source.clear(tx);
        });
    }
    _computeAugmentation(suggestCompletion, reader) {
        const model = this.textModel;
        const suggestWidgetInlineCompletions = this._source.suggestWidgetInlineCompletions.read(reader);
        const candidateInlineCompletions = suggestWidgetInlineCompletions
            ? suggestWidgetInlineCompletions.inlineCompletions.filter(c => !c.isInlineEdit)
            : [this.selectedInlineCompletion.read(reader)].filter(isDefined);
        const augmentedCompletion = mapFindFirst(candidateInlineCompletions, completion => {
            let r = completion.getSingleTextEdit();
            r = singleTextRemoveCommonPrefix(r, model, Range.fromPositions(r.range.getStartPosition(), suggestCompletion.range.getEndPosition()));
            return singleTextEditAugments(r, suggestCompletion) ? { completion, edit: r } : undefined;
        });
        return augmentedCompletion;
    }
    async _deltaSelectedInlineCompletionIndex(delta) {
        await this.triggerExplicitly();
        const completions = this._filteredInlineCompletionItems.get() || [];
        if (completions.length > 0) {
            const newIdx = (this.selectedInlineCompletionIndex.get() + delta + completions.length) % completions.length;
            this._selectedInlineCompletionId.set(completions[newIdx].semanticId, undefined);
        }
        else {
            this._selectedInlineCompletionId.set(undefined, undefined);
        }
    }
    async next() { await this._deltaSelectedInlineCompletionIndex(1); }
    async previous() { await this._deltaSelectedInlineCompletionIndex(-1); }
    _getMetadata(completion, languageId, type = undefined) {
        if (type) {
            return EditSources.inlineCompletionPartialAccept({
                nes: completion.isInlineEdit,
                requestUuid: completion.requestUuid,
                providerId: completion.source.provider.providerId,
                languageId,
                type,
            });
        }
        else {
            return EditSources.inlineCompletionAccept({
                nes: completion.isInlineEdit,
                requestUuid: completion.requestUuid,
                providerId: completion.source.provider.providerId,
                languageId
            });
        }
    }
    async accept(editor = this._editor) {
        if (editor.getModel() !== this.textModel) {
            throw new BugIndicatingError();
        }
        let completion;
        let isNextEditUri = false;
        const state = this.state.get();
        if (state?.kind === 'ghostText') {
            if (!state || state.primaryGhostText.isEmpty() || !state.inlineCompletion) {
                return;
            }
            completion = state.inlineCompletion;
        }
        else if (state?.kind === 'inlineEdit') {
            completion = state.inlineCompletion;
            isNextEditUri = !!state.nextEditUri;
        }
        else {
            return;
        }
        // Make sure the completion list will not be disposed before the text change is sent.
        completion.addRef();
        try {
            editor.pushUndoStop();
            if (isNextEditUri) {
                // Do nothing
            }
            else if (completion.snippetInfo) {
                const mainEdit = TextReplacement.delete(completion.editRange);
                const additionalEdits = completion.additionalTextEdits.map(e => new TextReplacement(Range.lift(e.range), e.text ?? ''));
                const edit = TextEdit.fromParallelReplacementsUnsorted([mainEdit, ...additionalEdits]);
                editor.edit(edit, this._getMetadata(completion, this.textModel.getLanguageId()));
                editor.setPosition(completion.snippetInfo.range.getStartPosition(), 'inlineCompletionAccept');
                SnippetController2.get(editor)?.insert(completion.snippetInfo.snippet, { undoStopBefore: false });
            }
            else {
                const edits = state.edits;
                // The cursor should move to the end of the edit, not the end of the range provided by the extension
                // Inline Edit diffs (human readable) the suggestion from the extension so it already removes common suffix/prefix
                // Inline Completions does diff the suggestion so it may contain common suffix
                let minimalEdits = edits;
                if (state.kind === 'ghostText') {
                    minimalEdits = removeTextReplacementCommonSuffixPrefix(edits, this.textModel);
                }
                const selections = getEndPositionsAfterApplying(minimalEdits).map(p => Selection.fromPositions(p));
                const additionalEdits = completion.additionalTextEdits.map(e => new TextReplacement(Range.lift(e.range), e.text ?? ''));
                const edit = TextEdit.fromParallelReplacementsUnsorted([...edits, ...additionalEdits]);
                editor.edit(edit, this._getMetadata(completion, this.textModel.getLanguageId()));
                if (completion.hint === undefined) {
                    // do not move the cursor when the completion is displayed in a different location
                    editor.setSelections(state.kind === 'inlineEdit' ? selections.slice(-1) : selections, 'inlineCompletionAccept');
                }
                if (state.kind === 'inlineEdit' && !this._accessibilityService.isMotionReduced()) {
                    const editRanges = edit.getNewRanges();
                    const dec = this._store.add(new FadeoutDecoration(editor, editRanges, () => {
                        this._store.delete(dec);
                    }));
                }
            }
            this._onDidAccept.fire();
            // Reset before invoking the command, as the command might cause a follow up trigger (which we don't want to reset).
            this.stop();
            if (completion.command) {
                await this._commandService
                    .executeCommand(completion.command.id, ...(completion.command.arguments || []))
                    .then(undefined, onUnexpectedExternalError);
            }
            completion.reportEndOfLife({ kind: InlineCompletionEndOfLifeReasonKind.Accepted });
        }
        finally {
            completion.removeRef();
            this._inAcceptFlow.set(true, undefined);
            this._lastAcceptedInlineCompletionInfo = { textModelVersionIdAfter: this.textModel.getVersionId(), inlineCompletion: completion };
        }
    }
    async acceptNextWord() {
        await this._acceptNext(this._editor, 'word', (pos, text) => {
            const langId = this.textModel.getLanguageIdAtPosition(pos.lineNumber, pos.column);
            const config = this._languageConfigurationService.getLanguageConfiguration(langId);
            const wordRegExp = new RegExp(config.wordDefinition.source, config.wordDefinition.flags.replace('g', ''));
            const m1 = text.match(wordRegExp);
            let acceptUntilIndexExclusive = 0;
            if (m1 && m1.index !== undefined) {
                if (m1.index === 0) {
                    acceptUntilIndexExclusive = m1[0].length;
                }
                else {
                    acceptUntilIndexExclusive = m1.index;
                }
            }
            else {
                acceptUntilIndexExclusive = text.length;
            }
            const wsRegExp = /\s+/g;
            const m2 = wsRegExp.exec(text);
            if (m2 && m2.index !== undefined) {
                if (m2.index + m2[0].length < acceptUntilIndexExclusive) {
                    acceptUntilIndexExclusive = m2.index + m2[0].length;
                }
            }
            return acceptUntilIndexExclusive;
        }, 0 /* PartialAcceptTriggerKind.Word */);
    }
    async acceptNextLine() {
        await this._acceptNext(this._editor, 'line', (pos, text) => {
            const m = text.match(/\n/);
            if (m && m.index !== undefined) {
                return m.index + 1;
            }
            return text.length;
        }, 1 /* PartialAcceptTriggerKind.Line */);
    }
    async _acceptNext(editor, type, getAcceptUntilIndex, kind) {
        if (editor.getModel() !== this.textModel) {
            throw new BugIndicatingError();
        }
        const state = this.inlineCompletionState.get();
        if (!state || state.primaryGhostText.isEmpty() || !state.inlineCompletion) {
            return;
        }
        const ghostText = state.primaryGhostText;
        const completion = state.inlineCompletion;
        if (completion.snippetInfo) {
            // not in WYSIWYG mode, partial commit might change completion, thus it is not supported
            await this.accept(editor);
            return;
        }
        const firstPart = ghostText.parts[0];
        const ghostTextPos = new Position(ghostText.lineNumber, firstPart.column);
        const ghostTextVal = firstPart.text;
        const acceptUntilIndexExclusive = getAcceptUntilIndex(ghostTextPos, ghostTextVal);
        if (acceptUntilIndexExclusive === ghostTextVal.length && ghostText.parts.length === 1) {
            this.accept(editor);
            return;
        }
        const partialGhostTextVal = ghostTextVal.substring(0, acceptUntilIndexExclusive);
        const positions = this._positions.get();
        const cursorPosition = positions[0];
        // Executing the edit might free the completion, so we have to hold a reference on it.
        completion.addRef();
        try {
            this._isAcceptingPartially = true;
            try {
                editor.pushUndoStop();
                const replaceRange = Range.fromPositions(cursorPosition, ghostTextPos);
                const newText = editor.getModel().getValueInRange(replaceRange) + partialGhostTextVal;
                const primaryEdit = new TextReplacement(replaceRange, newText);
                const edits = [primaryEdit, ...getSecondaryEdits(this.textModel, positions, primaryEdit)].filter(isDefined);
                const selections = getEndPositionsAfterApplying(edits).map(p => Selection.fromPositions(p));
                editor.edit(TextEdit.fromParallelReplacementsUnsorted(edits), this._getMetadata(completion, type));
                editor.setSelections(selections, 'inlineCompletionPartialAccept');
                editor.revealPositionInCenterIfOutsideViewport(editor.getPosition(), 1 /* ScrollType.Immediate */);
            }
            finally {
                this._isAcceptingPartially = false;
            }
            const acceptedRange = Range.fromPositions(completion.editRange.getStartPosition(), TextLength.ofText(partialGhostTextVal).addToPosition(ghostTextPos));
            // This assumes that the inline completion and the model use the same EOL style.
            const text = editor.getModel().getValueInRange(acceptedRange, 1 /* EndOfLinePreference.LF */);
            const acceptedLength = text.length;
            completion.reportPartialAccept(acceptedLength, { kind, acceptedLength: acceptedLength }, { characters: acceptUntilIndexExclusive, ratio: acceptUntilIndexExclusive / ghostTextVal.length, count: 1 });
        }
        finally {
            completion.removeRef();
        }
    }
    handleSuggestAccepted(item) {
        const itemEdit = singleTextRemoveCommonPrefix(item.getSingleTextEdit(), this.textModel);
        const augmentedCompletion = this._computeAugmentation(itemEdit, undefined);
        if (!augmentedCompletion) {
            return;
        }
        // This assumes that the inline completion and the model use the same EOL style.
        const alreadyAcceptedLength = this.textModel.getValueInRange(augmentedCompletion.completion.editRange, 1 /* EndOfLinePreference.LF */).length;
        const acceptedLength = alreadyAcceptedLength + itemEdit.text.length;
        augmentedCompletion.completion.reportPartialAccept(itemEdit.text.length, {
            kind: 2 /* PartialAcceptTriggerKind.Suggest */,
            acceptedLength,
        }, {
            characters: itemEdit.text.length,
            count: 1,
            ratio: 1
        });
    }
    extractReproSample() {
        const value = this.textModel.getValue();
        const item = this.state.get()?.inlineCompletion;
        return {
            documentValue: value,
            inlineCompletion: item?.getSourceCompletion(),
        };
    }
    jump() {
        const s = this.inlineEditState.get();
        if (!s) {
            return;
        }
        transaction(tx => {
            this._jumpedToId.set(s.inlineCompletion.semanticId, tx);
            this.dontRefetchSignal.trigger(tx);
            const targetRange = s.inlineCompletion.targetRange;
            const targetPosition = targetRange.getStartPosition();
            this._editor.setPosition(targetPosition, 'inlineCompletions.jump');
            // TODO: consider using view information to reveal it
            const isSingleLineChange = targetRange.isSingleLine() && (s.inlineCompletion.hint || !s.inlineCompletion.insertText.includes('\n'));
            if (isSingleLineChange) {
                this._editor.revealPosition(targetPosition);
            }
            else {
                const revealRange = new Range(targetRange.startLineNumber - 1, 1, targetRange.endLineNumber + 1, 1);
                this._editor.revealRange(revealRange, 1 /* ScrollType.Immediate */);
            }
            s.inlineCompletion.identity.setJumpTo(tx);
            this._editor.focus();
        });
    }
    async handleInlineSuggestionShown(inlineCompletion, viewKind, viewData) {
        await inlineCompletion.reportInlineEditShown(this._commandService, viewKind, viewData);
    }
};
InlineCompletionsModel = __decorate([
    __param(7, IInstantiationService),
    __param(8, ICommandService),
    __param(9, ILanguageConfigurationService),
    __param(10, IAccessibilityService),
    __param(11, ILanguageFeaturesService),
    __param(12, ICodeEditorService),
    __param(13, IInlineCompletionsService)
], InlineCompletionsModel);
var VersionIdChangeReason;
(function (VersionIdChangeReason) {
    VersionIdChangeReason[VersionIdChangeReason["Undo"] = 0] = "Undo";
    VersionIdChangeReason[VersionIdChangeReason["Redo"] = 1] = "Redo";
    VersionIdChangeReason[VersionIdChangeReason["AcceptWord"] = 2] = "AcceptWord";
    VersionIdChangeReason[VersionIdChangeReason["Other"] = 3] = "Other";
})(VersionIdChangeReason || (VersionIdChangeReason = {}));
function getSecondaryEdits(textModel, positions, primaryTextRepl) {
    if (positions.length === 1) {
        // No secondary cursor positions
        return [];
    }
    const text = new TextModelText(textModel);
    const textTransformer = text.getTransformer();
    const primaryOffset = textTransformer.getOffset(positions[0]);
    const secondaryOffsets = positions.slice(1).map(pos => textTransformer.getOffset(pos));
    primaryTextRepl = primaryTextRepl.removeCommonPrefixAndSuffix(text);
    const primaryStringRepl = textTransformer.getStringReplacement(primaryTextRepl);
    const deltaFromOffsetToRangeStart = primaryStringRepl.replaceRange.start - primaryOffset;
    const primaryContextRange = primaryStringRepl.replaceRange.join(OffsetRange.emptyAt(primaryOffset));
    const primaryContextValue = text.getValueOfOffsetRange(primaryContextRange);
    const replacements = secondaryOffsets.map(secondaryOffset => {
        const newRangeStart = secondaryOffset + deltaFromOffsetToRangeStart;
        const newRangeEnd = newRangeStart + primaryStringRepl.replaceRange.length;
        const range = new OffsetRange(newRangeStart, newRangeEnd);
        const contextRange = range.join(OffsetRange.emptyAt(secondaryOffset));
        const contextValue = text.getValueOfOffsetRange(contextRange);
        if (contextValue !== primaryContextValue) {
            return undefined;
        }
        const stringRepl = new StringReplacement(range, primaryStringRepl.newText);
        const repl = textTransformer.getTextReplacement(stringRepl);
        return repl;
    }).filter(isDefined);
    return replacements;
}
class FadeoutDecoration extends Disposable {
    constructor(editor, ranges, onDispose) {
        super();
        if (onDispose) {
            this._register({ dispose: () => onDispose() });
        }
        this._register(observableCodeEditor(editor).setDecorations(constObservable(ranges.map(range => ({
            range: range,
            options: {
                description: 'animation',
                className: 'edits-fadeout-decoration',
                zIndex: 1,
            }
        })))));
        const animation = new AnimatedValue(1, 0, 1000, easeOutCubic);
        const val = new ObservableAnimatedValue(animation);
        this._register(autorun(reader => {
            const opacity = val.getValue(reader);
            editor.getContainerDomNode().style.setProperty('--animation-opacity', opacity.toString());
            if (animation.isFinished()) {
                this.dispose();
            }
        }));
    }
}
function isSuggestionInViewport(editor, suggestion) {
    const targetRange = suggestion.targetRange;
    const visibleRanges = editor.getVisibleRanges();
    if (visibleRanges.length < 1) {
        return false;
    }
    const viewportRange = new Range(visibleRanges[0].startLineNumber, visibleRanges[0].startColumn, visibleRanges[visibleRanges.length - 1].endLineNumber, visibleRanges[visibleRanges.length - 1].endColumn);
    return viewportRange.containsRange(targetRange);
}

export { InlineCompletionsModel, VersionIdChangeReason, getSecondaryEdits };
