import { assertNever } from '../../../../../base/common/assert.js';
import { AsyncIterableProducer } from '../../../../../base/common/async.js';
import { CancellationTokenSource } from '../../../../../base/common/cancellation.js';
import { onUnexpectedExternalError } from '../../../../../base/common/errors.js';
import { Disposable } from '../../../../../base/common/lifecycle.js';
import { prefixedUuid } from '../../../../../base/common/uuid.js';
import { StringReplacement } from '../../../../common/core/edits/stringEdit.js';
import { OffsetRange } from '../../../../common/core/ranges/offsetRange.js';
import { Range } from '../../../../common/core/range.js';
import { TextReplacement } from '../../../../common/core/edits/textEdit.js';
import { InlineCompletionEndOfLifeReasonKind } from '../../../../common/languages.js';
import { fixBracketsInLine } from '../../../../common/model/bracketPairsTextModelPart/fixBrackets.js';
import { SnippetParser, Text } from '../../../snippet/browser/snippetParser.js';
import { getReadonlyEmptyArray } from '../utils.js';
import { groupByMap } from '../../../../../base/common/collections.js';
import { DirectedGraph } from './graph.js';
import { CachedFunction } from '../../../../../base/common/cache.js';
import { InlineCompletionViewKind } from '../view/inlineEdits/inlineEditsViewInterface.js';
import { isDefined } from '../../../../../base/common/types.js';
import { inlineCompletionIsVisible } from './inlineSuggestionItem.js';
import { EditDeltaInfo } from '../../../../common/textModelEditSource.js';
import { URI } from '../../../../../base/common/uri.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function provideInlineCompletions(providers, position, model, context, requestInfo, languageConfigurationService) {
    const requestUuid = prefixedUuid('icr');
    const cancellationTokenSource = new CancellationTokenSource();
    let cancelReason = undefined;
    const contextWithUuid = { ...context, requestUuid: requestUuid };
    const defaultReplaceRange = getDefaultRange(position, model);
    const providersByGroupId = groupByMap(providers, p => p.groupId);
    const yieldsToGraph = DirectedGraph.from(providers, p => {
        return p.yieldsToGroupIds?.flatMap(groupId => providersByGroupId.get(groupId) ?? []) ?? [];
    });
    const { foundCycles } = yieldsToGraph.removeCycles();
    if (foundCycles.length > 0) {
        onUnexpectedExternalError(new Error(`Inline completions: cyclic yield-to dependency detected.`
            + ` Path: ${foundCycles.map(s => s.toString ? s.toString() : ('' + s)).join(' -> ')}`));
    }
    let runningCount = 0;
    const queryProvider = new CachedFunction(async (provider) => {
        try {
            runningCount++;
            if (cancellationTokenSource.token.isCancellationRequested) {
                return undefined;
            }
            const yieldsTo = yieldsToGraph.getOutgoing(provider);
            for (const p of yieldsTo) {
                // We know there is no cycle, so no recursion here
                const result = await queryProvider.get(p);
                if (result) {
                    for (const item of result.inlineSuggestions.items) {
                        if (item.isInlineEdit || typeof item.insertText !== 'string' && item.insertText !== undefined) {
                            return undefined;
                        }
                        if (item.insertText !== undefined) {
                            const t = new TextReplacement(Range.lift(item.range) ?? defaultReplaceRange, item.insertText);
                            if (inlineCompletionIsVisible(t, undefined, model, position)) {
                                return undefined;
                            }
                        }
                        // else: inline completion is not visible, so lets not block
                    }
                }
            }
            let result;
            const providerStartTime = Date.now();
            try {
                result = await provider.provideInlineCompletions(model, position, contextWithUuid, cancellationTokenSource.token);
            }
            catch (e) {
                onUnexpectedExternalError(e);
                return undefined;
            }
            const providerEndTime = Date.now();
            if (!result) {
                return undefined;
            }
            const data = [];
            const list = new InlineSuggestionList(result, data, provider);
            list.addRef();
            runWhenCancelled(cancellationTokenSource.token, () => {
                return list.removeRef(cancelReason);
            });
            if (cancellationTokenSource.token.isCancellationRequested) {
                return undefined; // The list is disposed now, so we cannot return the items!
            }
            for (const item of result.items) {
                data.push(toInlineSuggestData(item, list, defaultReplaceRange, model, languageConfigurationService, contextWithUuid, requestInfo, { startTime: providerStartTime, endTime: providerEndTime }));
            }
            return list;
        }
        finally {
            runningCount--;
        }
    });
    const inlineCompletionLists = AsyncIterableProducer.fromPromisesResolveOrder(providers.map(p => queryProvider.get(p))).filter(isDefined);
    return {
        contextWithUuid,
        get didAllProvidersReturn() { return runningCount === 0; },
        lists: inlineCompletionLists,
        cancelAndDispose: reason => {
            if (cancelReason !== undefined) {
                return;
            }
            cancelReason = reason;
            cancellationTokenSource.dispose(true);
        }
    };
}
/** If the token is eventually cancelled, this will not leak either. */
function runWhenCancelled(token, callback) {
    if (token.isCancellationRequested) {
        callback();
        return Disposable.None;
    }
    else {
        const listener = token.onCancellationRequested(() => {
            listener.dispose();
            callback();
        });
        return { dispose: () => listener.dispose() };
    }
}
function toInlineSuggestData(inlineCompletion, source, defaultReplaceRange, textModel, languageConfigurationService, context, requestInfo, providerRequestInfo) {
    let insertText;
    let snippetInfo;
    let range = inlineCompletion.range ? Range.lift(inlineCompletion.range) : defaultReplaceRange;
    if (typeof inlineCompletion.insertText === 'string') {
        insertText = inlineCompletion.insertText;
        if (languageConfigurationService && inlineCompletion.completeBracketPairs) {
            insertText = closeBrackets(insertText, range.getStartPosition(), textModel, languageConfigurationService);
            // Modify range depending on if brackets are added or removed
            const diff = insertText.length - inlineCompletion.insertText.length;
            if (diff !== 0) {
                range = new Range(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn + diff);
            }
        }
        snippetInfo = undefined;
    }
    else if (inlineCompletion.insertText === undefined) {
        insertText = ''; // TODO use undefined
        snippetInfo = undefined;
        range = new Range(1, 1, 1, 1);
    }
    else if ('snippet' in inlineCompletion.insertText) {
        const preBracketCompletionLength = inlineCompletion.insertText.snippet.length;
        if (languageConfigurationService && inlineCompletion.completeBracketPairs) {
            inlineCompletion.insertText.snippet = closeBrackets(inlineCompletion.insertText.snippet, range.getStartPosition(), textModel, languageConfigurationService);
            // Modify range depending on if brackets are added or removed
            const diff = inlineCompletion.insertText.snippet.length - preBracketCompletionLength;
            if (diff !== 0) {
                range = new Range(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn + diff);
            }
        }
        const snippet = new SnippetParser().parse(inlineCompletion.insertText.snippet);
        if (snippet.children.length === 1 && snippet.children[0] instanceof Text) {
            insertText = snippet.children[0].value;
            snippetInfo = undefined;
        }
        else {
            insertText = snippet.toString();
            snippetInfo = {
                snippet: inlineCompletion.insertText.snippet,
                range: range
            };
        }
    }
    else {
        assertNever(inlineCompletion.insertText);
    }
    return new InlineSuggestData(range, insertText, snippetInfo, URI.revive(inlineCompletion.uri), inlineCompletion.hint, inlineCompletion.additionalTextEdits || getReadonlyEmptyArray(), inlineCompletion, source, context, inlineCompletion.isInlineEdit ?? false, requestInfo, providerRequestInfo, inlineCompletion.correlationId);
}
class InlineSuggestData {
    constructor(range, insertText, snippetInfo, uri, hint, additionalTextEdits, sourceInlineCompletion, source, context, isInlineEdit, _requestInfo, _providerRequestInfo, _correlationId) {
        this.range = range;
        this.insertText = insertText;
        this.snippetInfo = snippetInfo;
        this.uri = uri;
        this.hint = hint;
        this.additionalTextEdits = additionalTextEdits;
        this.sourceInlineCompletion = sourceInlineCompletion;
        this.source = source;
        this.context = context;
        this.isInlineEdit = isInlineEdit;
        this._requestInfo = _requestInfo;
        this._providerRequestInfo = _providerRequestInfo;
        this._correlationId = _correlationId;
        this._didShow = false;
        this._timeUntilShown = undefined;
        this._showStartTime = undefined;
        this._shownDuration = 0;
        this._showUncollapsedStartTime = undefined;
        this._showUncollapsedDuration = 0;
        this._notShownReason = undefined;
        this._didReportEndOfLife = false;
        this._lastSetEndOfLifeReason = undefined;
        this._isPreceeded = false;
        this._partiallyAcceptedCount = 0;
        this._partiallyAcceptedSinceOriginal = { characters: 0, ratio: 0, count: 0 };
        this._viewData = { editorType: _requestInfo.editorType };
    }
    get showInlineEditMenu() { return this.sourceInlineCompletion.showInlineEditMenu ?? false; }
    get partialAccepts() { return this._partiallyAcceptedSinceOriginal; }
    async reportInlineEditShown(commandService, updatedInsertText, viewKind, viewData) {
        this.updateShownDuration(viewKind);
        if (this._didShow) {
            return;
        }
        this._didShow = true;
        this._viewData.viewKind = viewKind;
        this._viewData.renderData = viewData;
        this._timeUntilShown = Date.now() - this._requestInfo.startTime;
        const editDeltaInfo = new EditDeltaInfo(viewData.lineCountModified, viewData.lineCountOriginal, viewData.characterCountModified, viewData.characterCountOriginal);
        this.source.provider.handleItemDidShow?.(this.source.inlineSuggestions, this.sourceInlineCompletion, updatedInsertText, editDeltaInfo);
        if (this.sourceInlineCompletion.shownCommand) {
            await commandService.executeCommand(this.sourceInlineCompletion.shownCommand.id, ...(this.sourceInlineCompletion.shownCommand.arguments || []));
        }
    }
    reportPartialAccept(acceptedCharacters, info, partialAcceptance) {
        this._partiallyAcceptedCount++;
        this._partiallyAcceptedSinceOriginal.characters += partialAcceptance.characters;
        this._partiallyAcceptedSinceOriginal.ratio = Math.min(this._partiallyAcceptedSinceOriginal.ratio + (1 - this._partiallyAcceptedSinceOriginal.ratio) * partialAcceptance.ratio, 1);
        this._partiallyAcceptedSinceOriginal.count += partialAcceptance.count;
        this.source.provider.handlePartialAccept?.(this.source.inlineSuggestions, this.sourceInlineCompletion, acceptedCharacters, info);
    }
    /**
     * Sends the end of life event to the provider.
     * If no reason is provided, the last set reason is used.
     * If no reason was set, the default reason is used.
    */
    reportEndOfLife(reason) {
        if (this._didReportEndOfLife) {
            return;
        }
        this._didReportEndOfLife = true;
        this.reportInlineEditHidden();
        if (!reason) {
            reason = this._lastSetEndOfLifeReason ?? { kind: InlineCompletionEndOfLifeReasonKind.Ignored, userTypingDisagreed: false, supersededBy: undefined };
        }
        if (reason.kind === InlineCompletionEndOfLifeReasonKind.Rejected && this.source.provider.handleRejection) {
            this.source.provider.handleRejection(this.source.inlineSuggestions, this.sourceInlineCompletion);
        }
        if (this.source.provider.handleEndOfLifetime) {
            const summary = {
                requestUuid: this.context.requestUuid,
                correlationId: this._correlationId,
                selectedSuggestionInfo: !!this.context.selectedSuggestionInfo,
                partiallyAccepted: this._partiallyAcceptedCount,
                partiallyAcceptedCountSinceOriginal: this._partiallyAcceptedSinceOriginal.count,
                partiallyAcceptedRatioSinceOriginal: this._partiallyAcceptedSinceOriginal.ratio,
                partiallyAcceptedCharactersSinceOriginal: this._partiallyAcceptedSinceOriginal.characters,
                shown: this._didShow,
                shownDuration: this._shownDuration,
                shownDurationUncollapsed: this._showUncollapsedDuration,
                preceeded: this._isPreceeded,
                timeUntilShown: this._timeUntilShown,
                timeUntilProviderRequest: this._providerRequestInfo.startTime - this._requestInfo.startTime,
                timeUntilProviderResponse: this._providerRequestInfo.endTime - this._requestInfo.startTime,
                editorType: this._viewData.editorType,
                languageId: this._requestInfo.languageId,
                requestReason: this._requestInfo.reason,
                viewKind: this._viewData.viewKind,
                notShownReason: this._notShownReason,
                typingInterval: this._requestInfo.typingInterval,
                typingIntervalCharacterCount: this._requestInfo.typingIntervalCharacterCount,
                availableProviders: this._requestInfo.availableProviders.map(p => p.toString()).join(','),
                ...this._viewData.renderData,
            };
            this.source.provider.handleEndOfLifetime(this.source.inlineSuggestions, this.sourceInlineCompletion, reason, summary);
        }
    }
    setIsPreceeded(partialAccepts) {
        this._isPreceeded = true;
        if (this._partiallyAcceptedSinceOriginal.characters !== 0 || this._partiallyAcceptedSinceOriginal.ratio !== 0 || this._partiallyAcceptedSinceOriginal.count !== 0) {
            console.warn('Expected partiallyAcceptedCountSinceOriginal to be { characters: 0, rate: 0, partialAcceptances: 0 } before setIsPreceeded.');
        }
        this._partiallyAcceptedSinceOriginal = partialAccepts;
    }
    setNotShownReason(reason) {
        this._notShownReason ??= reason;
    }
    /**
     * Sets the end of life reason, but does not send the event to the provider yet.
    */
    setEndOfLifeReason(reason) {
        this.reportInlineEditHidden();
        this._lastSetEndOfLifeReason = reason;
    }
    updateShownDuration(viewKind) {
        const timeNow = Date.now();
        if (!this._showStartTime) {
            this._showStartTime = timeNow;
        }
        const isCollapsed = viewKind === InlineCompletionViewKind.Collapsed;
        if (!isCollapsed && this._showUncollapsedStartTime === undefined) {
            this._showUncollapsedStartTime = timeNow;
        }
        if (isCollapsed && this._showUncollapsedStartTime !== undefined) {
            this._showUncollapsedDuration += timeNow - this._showUncollapsedStartTime;
        }
    }
    reportInlineEditHidden() {
        if (this._showStartTime === undefined) {
            return;
        }
        const timeNow = Date.now();
        this._shownDuration += timeNow - this._showStartTime;
        this._showStartTime = undefined;
        if (this._showUncollapsedStartTime === undefined) {
            return;
        }
        this._showUncollapsedDuration += timeNow - this._showUncollapsedStartTime;
        this._showUncollapsedStartTime = undefined;
    }
}
var InlineCompletionEditorType;
(function (InlineCompletionEditorType) {
    InlineCompletionEditorType["TextEditor"] = "textEditor";
    InlineCompletionEditorType["DiffEditor"] = "diffEditor";
    InlineCompletionEditorType["Notebook"] = "notebook";
})(InlineCompletionEditorType || (InlineCompletionEditorType = {}));
/**
 * A ref counted pointer to the computed `InlineCompletions` and the `InlineCompletionsProvider` that
 * computed them.
 */
class InlineSuggestionList {
    constructor(inlineSuggestions, inlineSuggestionsData, provider) {
        this.inlineSuggestions = inlineSuggestions;
        this.inlineSuggestionsData = inlineSuggestionsData;
        this.provider = provider;
        this.refCount = 0;
    }
    addRef() {
        this.refCount++;
    }
    removeRef(reason = { kind: 'other' }) {
        this.refCount--;
        if (this.refCount === 0) {
            for (const item of this.inlineSuggestionsData) {
                // Fallback if it has not been called before
                item.reportEndOfLife();
            }
            this.provider.disposeInlineCompletions(this.inlineSuggestions, reason);
        }
    }
}
function getDefaultRange(position, model) {
    const word = model.getWordAtPosition(position);
    const maxColumn = model.getLineMaxColumn(position.lineNumber);
    // By default, always replace up until the end of the current line.
    // This default might be subject to change!
    return word
        ? new Range(position.lineNumber, word.startColumn, position.lineNumber, maxColumn)
        : Range.fromPositions(position, position.with(undefined, maxColumn));
}
function closeBrackets(text, position, model, languageConfigurationService) {
    const currentLine = model.getLineContent(position.lineNumber);
    const edit = StringReplacement.replace(new OffsetRange(position.column - 1, currentLine.length), text);
    const proposedLineTokens = model.tokenization.tokenizeLinesAt(position.lineNumber, [edit.replace(currentLine)]);
    const textTokens = proposedLineTokens?.[0].sliceZeroCopy(edit.getRangeAfterReplace());
    if (!textTokens) {
        return text;
    }
    const fixedText = fixBracketsInLine(textTokens, languageConfigurationService);
    return fixedText;
}

export { InlineCompletionEditorType, InlineSuggestData, InlineSuggestionList, provideInlineCompletions, runWhenCancelled };
