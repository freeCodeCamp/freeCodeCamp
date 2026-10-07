import { onUnexpectedExternalError, CancellationError } from '../../../../base/common/errors.js';
import { DisposableStore } from '../../../../base/common/lifecycle.js';
import { Position } from '../../../common/core/position.js';
import { Range } from '../../../common/core/range.js';
import { createCommandUri } from '../../../../base/common/htmlContent.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class InlayHintAnchor {
    constructor(range, direction) {
        this.range = range;
        this.direction = direction;
    }
}
class InlayHintItem {
    constructor(hint, anchor, provider) {
        this.hint = hint;
        this.anchor = anchor;
        this.provider = provider;
        this._isResolved = false;
    }
    with(delta) {
        const result = new InlayHintItem(this.hint, delta.anchor, this.provider);
        result._isResolved = this._isResolved;
        result._currentResolve = this._currentResolve;
        return result;
    }
    async resolve(token) {
        if (typeof this.provider.resolveInlayHint !== 'function') {
            return;
        }
        if (this._currentResolve) {
            // wait for an active resolve operation and try again
            // when that's done.
            await this._currentResolve;
            if (token.isCancellationRequested) {
                return;
            }
            return this.resolve(token);
        }
        if (!this._isResolved) {
            this._currentResolve = this._doResolve(token)
                .finally(() => this._currentResolve = undefined);
        }
        await this._currentResolve;
    }
    async _doResolve(token) {
        try {
            const newHint = await Promise.resolve(this.provider.resolveInlayHint(this.hint, token));
            this.hint.tooltip = newHint?.tooltip ?? this.hint.tooltip;
            this.hint.label = newHint?.label ?? this.hint.label;
            this.hint.textEdits = newHint?.textEdits ?? this.hint.textEdits;
            this._isResolved = true;
        }
        catch (err) {
            onUnexpectedExternalError(err);
            this._isResolved = false;
        }
    }
}
class InlayHintsFragments {
    static { this._emptyInlayHintList = Object.freeze({ dispose() { }, hints: [] }); }
    static async create(registry, model, ranges, token) {
        const data = [];
        const promises = registry.ordered(model).reverse().map(provider => ranges.map(async (range) => {
            try {
                const result = await provider.provideInlayHints(model, range, token);
                if (result?.hints.length || provider.onDidChangeInlayHints) {
                    data.push([result ?? InlayHintsFragments._emptyInlayHintList, provider]);
                }
            }
            catch (err) {
                onUnexpectedExternalError(err);
            }
        }));
        await Promise.all(promises.flat());
        if (token.isCancellationRequested || model.isDisposed()) {
            throw new CancellationError();
        }
        return new InlayHintsFragments(ranges, data, model);
    }
    constructor(ranges, data, model) {
        this._disposables = new DisposableStore();
        this.ranges = ranges;
        this.provider = new Set();
        const items = [];
        for (const [list, provider] of data) {
            this._disposables.add(list);
            this.provider.add(provider);
            for (const hint of list.hints) {
                // compute the range to which the item should be attached to
                const position = model.validatePosition(hint.position);
                let direction = 'before';
                const wordRange = InlayHintsFragments._getRangeAtPosition(model, position);
                let range;
                if (wordRange.getStartPosition().isBefore(position)) {
                    range = Range.fromPositions(wordRange.getStartPosition(), position);
                    direction = 'after';
                }
                else {
                    range = Range.fromPositions(position, wordRange.getEndPosition());
                    direction = 'before';
                }
                items.push(new InlayHintItem(hint, new InlayHintAnchor(range, direction), provider));
            }
        }
        this.items = items.sort((a, b) => Position.compare(a.hint.position, b.hint.position));
    }
    dispose() {
        this._disposables.dispose();
    }
    static _getRangeAtPosition(model, position) {
        const line = position.lineNumber;
        const word = model.getWordAtPosition(position);
        if (word) {
            // always prefer the word range
            return new Range(line, word.startColumn, line, word.endColumn);
        }
        model.tokenization.tokenizeIfCheap(line);
        const tokens = model.tokenization.getLineTokens(line);
        const offset = position.column - 1;
        const idx = tokens.findTokenIndexAtOffset(offset);
        let start = tokens.getStartOffset(idx);
        let end = tokens.getEndOffset(idx);
        if (end - start === 1) {
            // single character token, when at its end try leading/trailing token instead
            if (start === offset && idx > 1) {
                // leading token
                start = tokens.getStartOffset(idx - 1);
                end = tokens.getEndOffset(idx - 1);
            }
            else if (end === offset && idx < tokens.getCount() - 1) {
                // trailing token
                start = tokens.getStartOffset(idx + 1);
                end = tokens.getEndOffset(idx + 1);
            }
        }
        return new Range(line, start + 1, line, end + 1);
    }
}
function asCommandLink(command) {
    return createCommandUri(command.id, ...(command.arguments ?? [])).toString();
}

export { InlayHintAnchor, InlayHintItem, InlayHintsFragments, asCommandLink };
