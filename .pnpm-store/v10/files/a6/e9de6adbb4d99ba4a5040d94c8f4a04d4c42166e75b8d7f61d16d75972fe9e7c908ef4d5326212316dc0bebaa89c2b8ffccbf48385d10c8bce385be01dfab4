import { onUnexpectedError } from '../../../../base/common/errors.js';
import { Emitter } from '../../../../base/common/event.js';
import { MutableDisposable, DisposableMap } from '../../../../base/common/lifecycle.js';
import { countEOL } from '../../core/misc/eolCounter.js';
import { Position } from '../../core/position.js';
import { LineRange } from '../../core/ranges/lineRange.js';
import { TokenizationRegistry } from '../../languages.js';
import { ContiguousMultilineTokensBuilder } from '../../tokens/contiguousMultilineTokensBuilder.js';
import { ContiguousTokensStore } from '../../tokens/contiguousTokensStore.js';
import { TrackingTokenizationStateStore, TokenizerWithStateStoreAndTextModel, DefaultBackgroundTokenizer } from '../textModelTokens.js';
import { AbstractSyntaxTokenBackend, AttachedViewHandler } from './abstractSyntaxTokenBackend.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/** For TextMate */
class TokenizerSyntaxTokenBackend extends AbstractSyntaxTokenBackend {
    constructor(languageIdCodec, textModel, getLanguageId, attachedViews) {
        super(languageIdCodec, textModel);
        this.getLanguageId = getLanguageId;
        this._tokenizer = null;
        this._backgroundTokenizationState = 1 /* BackgroundTokenizationState.InProgress */;
        this._onDidChangeBackgroundTokenizationState = this._register(new Emitter());
        this.onDidChangeBackgroundTokenizationState = this._onDidChangeBackgroundTokenizationState.event;
        this._defaultBackgroundTokenizer = null;
        this._backgroundTokenizer = this._register(new MutableDisposable());
        this._tokens = new ContiguousTokensStore(this._languageIdCodec);
        this._debugBackgroundTokenizer = this._register(new MutableDisposable());
        this._attachedViewStates = this._register(new DisposableMap());
        this._register(TokenizationRegistry.onDidChange((e) => {
            const languageId = this.getLanguageId();
            if (e.changedLanguages.indexOf(languageId) === -1) {
                return;
            }
            this.todo_resetTokenization();
        }));
        this.todo_resetTokenization();
        this._register(attachedViews.onDidChangeVisibleRanges(({ view, state }) => {
            if (state) {
                let existing = this._attachedViewStates.get(view);
                if (!existing) {
                    existing = new AttachedViewHandler(() => this.refreshRanges(existing.lineRanges));
                    this._attachedViewStates.set(view, existing);
                }
                existing.handleStateChange(state);
            }
            else {
                this._attachedViewStates.deleteAndDispose(view);
            }
        }));
    }
    todo_resetTokenization(fireTokenChangeEvent = true) {
        this._tokens.flush();
        this._debugBackgroundTokens?.flush();
        if (this._debugBackgroundStates) {
            this._debugBackgroundStates = new TrackingTokenizationStateStore(this._textModel.getLineCount());
        }
        if (fireTokenChangeEvent) {
            this._onDidChangeTokens.fire({
                semanticTokensApplied: false,
                ranges: [
                    {
                        fromLineNumber: 1,
                        toLineNumber: this._textModel.getLineCount(),
                    },
                ],
            });
        }
        const initializeTokenization = () => {
            if (this._textModel.isTooLargeForTokenization()) {
                return [null, null];
            }
            const tokenizationSupport = TokenizationRegistry.get(this.getLanguageId());
            if (!tokenizationSupport) {
                return [null, null];
            }
            let initialState;
            try {
                initialState = tokenizationSupport.getInitialState();
            }
            catch (e) {
                onUnexpectedError(e);
                return [null, null];
            }
            return [tokenizationSupport, initialState];
        };
        const [tokenizationSupport, initialState] = initializeTokenization();
        if (tokenizationSupport && initialState) {
            this._tokenizer = new TokenizerWithStateStoreAndTextModel(this._textModel.getLineCount(), tokenizationSupport, this._textModel, this._languageIdCodec);
        }
        else {
            this._tokenizer = null;
        }
        this._backgroundTokenizer.clear();
        this._defaultBackgroundTokenizer = null;
        if (this._tokenizer) {
            const b = {
                setTokens: (tokens) => {
                    this.setTokens(tokens);
                },
                backgroundTokenizationFinished: () => {
                    if (this._backgroundTokenizationState === 2 /* BackgroundTokenizationState.Completed */) {
                        // We already did a full tokenization and don't go back to progressing.
                        return;
                    }
                    const newState = 2 /* BackgroundTokenizationState.Completed */;
                    this._backgroundTokenizationState = newState;
                    this._onDidChangeBackgroundTokenizationState.fire();
                },
                setEndState: (lineNumber, state) => {
                    if (!this._tokenizer) {
                        return;
                    }
                    const firstInvalidEndStateLineNumber = this._tokenizer.store.getFirstInvalidEndStateLineNumber();
                    // Don't accept states for definitely valid states, the renderer is ahead of the worker!
                    if (firstInvalidEndStateLineNumber !== null && lineNumber >= firstInvalidEndStateLineNumber) {
                        this._tokenizer?.store.setEndState(lineNumber, state);
                    }
                },
            };
            if (tokenizationSupport && tokenizationSupport.createBackgroundTokenizer && !tokenizationSupport.backgroundTokenizerShouldOnlyVerifyTokens) {
                this._backgroundTokenizer.value = tokenizationSupport.createBackgroundTokenizer(this._textModel, b);
            }
            if (!this._backgroundTokenizer.value && !this._textModel.isTooLargeForTokenization()) {
                this._backgroundTokenizer.value = this._defaultBackgroundTokenizer =
                    new DefaultBackgroundTokenizer(this._tokenizer, b);
                this._defaultBackgroundTokenizer.handleChanges();
            }
            if (tokenizationSupport?.backgroundTokenizerShouldOnlyVerifyTokens && tokenizationSupport.createBackgroundTokenizer) {
                this._debugBackgroundTokens = new ContiguousTokensStore(this._languageIdCodec);
                this._debugBackgroundStates = new TrackingTokenizationStateStore(this._textModel.getLineCount());
                this._debugBackgroundTokenizer.clear();
                this._debugBackgroundTokenizer.value = tokenizationSupport.createBackgroundTokenizer(this._textModel, {
                    setTokens: (tokens) => {
                        this._debugBackgroundTokens?.setMultilineTokens(tokens, this._textModel);
                    },
                    backgroundTokenizationFinished() {
                        // NO OP
                    },
                    setEndState: (lineNumber, state) => {
                        this._debugBackgroundStates?.setEndState(lineNumber, state);
                    },
                });
            }
            else {
                this._debugBackgroundTokens = undefined;
                this._debugBackgroundStates = undefined;
                this._debugBackgroundTokenizer.value = undefined;
            }
        }
        this.refreshAllVisibleLineTokens();
    }
    handleDidChangeAttached() {
        this._defaultBackgroundTokenizer?.handleChanges();
    }
    handleDidChangeContent(e) {
        if (e.isFlush) {
            // Don't fire the event, as the view might not have got the text change event yet
            this.todo_resetTokenization(false);
        }
        else if (!e.isEolChange) { // We don't have to do anything on an EOL change
            for (const c of e.changes) {
                const [eolCount, firstLineLength] = countEOL(c.text);
                this._tokens.acceptEdit(c.range, eolCount, firstLineLength);
                this._debugBackgroundTokens?.acceptEdit(c.range, eolCount, firstLineLength);
            }
            this._debugBackgroundStates?.acceptChanges(e.changes);
            if (this._tokenizer) {
                this._tokenizer.store.acceptChanges(e.changes);
            }
            this._defaultBackgroundTokenizer?.handleChanges();
        }
    }
    setTokens(tokens) {
        const { changes } = this._tokens.setMultilineTokens(tokens, this._textModel);
        if (changes.length > 0) {
            this._onDidChangeTokens.fire({ semanticTokensApplied: false, ranges: changes, });
        }
        return { changes: changes };
    }
    refreshAllVisibleLineTokens() {
        const ranges = LineRange.joinMany([...this._attachedViewStates].map(([_, s]) => s.lineRanges));
        this.refreshRanges(ranges);
    }
    refreshRanges(ranges) {
        for (const range of ranges) {
            this.refreshRange(range.startLineNumber, range.endLineNumberExclusive - 1);
        }
    }
    refreshRange(startLineNumber, endLineNumber) {
        if (!this._tokenizer) {
            return;
        }
        startLineNumber = Math.max(1, Math.min(this._textModel.getLineCount(), startLineNumber));
        endLineNumber = Math.min(this._textModel.getLineCount(), endLineNumber);
        const builder = new ContiguousMultilineTokensBuilder();
        const { heuristicTokens } = this._tokenizer.tokenizeHeuristically(builder, startLineNumber, endLineNumber);
        const changedTokens = this.setTokens(builder.finalize());
        if (heuristicTokens) {
            // We overrode tokens with heuristically computed ones.
            // Because old states might get reused (thus stopping invalidation),
            // we have to explicitly request the tokens for the changed ranges again.
            for (const c of changedTokens.changes) {
                this._backgroundTokenizer.value?.requestTokens(c.fromLineNumber, c.toLineNumber + 1);
            }
        }
        this._defaultBackgroundTokenizer?.checkFinished();
    }
    forceTokenization(lineNumber) {
        const builder = new ContiguousMultilineTokensBuilder();
        this._tokenizer?.updateTokensUntilLine(builder, lineNumber);
        this.setTokens(builder.finalize());
        this._defaultBackgroundTokenizer?.checkFinished();
    }
    hasAccurateTokensForLine(lineNumber) {
        if (!this._tokenizer) {
            return true;
        }
        return this._tokenizer.hasAccurateTokensForLine(lineNumber);
    }
    isCheapToTokenize(lineNumber) {
        if (!this._tokenizer) {
            return true;
        }
        return this._tokenizer.isCheapToTokenize(lineNumber);
    }
    getLineTokens(lineNumber) {
        const lineText = this._textModel.getLineContent(lineNumber);
        const result = this._tokens.getTokens(this._textModel.getLanguageId(), lineNumber - 1, lineText);
        if (this._debugBackgroundTokens && this._debugBackgroundStates && this._tokenizer) {
            if (this._debugBackgroundStates.getFirstInvalidEndStateLineNumberOrMax() > lineNumber && this._tokenizer.store.getFirstInvalidEndStateLineNumberOrMax() > lineNumber) {
                const backgroundResult = this._debugBackgroundTokens.getTokens(this._textModel.getLanguageId(), lineNumber - 1, lineText);
                if (!result.equals(backgroundResult) && this._debugBackgroundTokenizer.value?.reportMismatchingTokens) {
                    this._debugBackgroundTokenizer.value.reportMismatchingTokens(lineNumber);
                }
            }
        }
        return result;
    }
    getTokenTypeIfInsertingCharacter(lineNumber, column, character) {
        if (!this._tokenizer) {
            return 0 /* StandardTokenType.Other */;
        }
        const position = this._textModel.validatePosition(new Position(lineNumber, column));
        this.forceTokenization(position.lineNumber);
        return this._tokenizer.getTokenTypeIfInsertingCharacter(position, character);
    }
    tokenizeLinesAt(lineNumber, lines) {
        if (!this._tokenizer) {
            return null;
        }
        this.forceTokenization(lineNumber);
        return this._tokenizer.tokenizeLinesAt(lineNumber, lines);
    }
    get hasTokens() {
        return this._tokens.hasTokens;
    }
}

export { TokenizerSyntaxTokenBackend };
