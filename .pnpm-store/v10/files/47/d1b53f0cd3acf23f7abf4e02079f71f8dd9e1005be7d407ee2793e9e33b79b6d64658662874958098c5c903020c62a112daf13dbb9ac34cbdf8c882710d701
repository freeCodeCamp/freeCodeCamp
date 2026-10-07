import { onUnexpectedExternalError } from '../../../../base/common/errors.js';
import { DisposableStore } from '../../../../base/common/lifecycle.js';
import { MAX_LINE_NUMBER, FoldingRegions } from './foldingRanges.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const foldingContext = {};
const ID_SYNTAX_PROVIDER = 'syntax';
class SyntaxRangeProvider {
    constructor(editorModel, providers, handleFoldingRangesChange, foldingRangesLimit, fallbackRangeProvider // used when all providers return null
    ) {
        this.editorModel = editorModel;
        this.providers = providers;
        this.handleFoldingRangesChange = handleFoldingRangesChange;
        this.foldingRangesLimit = foldingRangesLimit;
        this.fallbackRangeProvider = fallbackRangeProvider;
        this.id = ID_SYNTAX_PROVIDER;
        this.disposables = new DisposableStore();
        if (fallbackRangeProvider) {
            this.disposables.add(fallbackRangeProvider);
        }
        for (const provider of providers) {
            if (typeof provider.onDidChange === 'function') {
                this.disposables.add(provider.onDidChange(handleFoldingRangesChange));
            }
        }
    }
    compute(cancellationToken) {
        return collectSyntaxRanges(this.providers, this.editorModel, cancellationToken).then(ranges => {
            if (this.editorModel.isDisposed()) {
                return null;
            }
            if (ranges) {
                const res = sanitizeRanges(ranges, this.foldingRangesLimit);
                return res;
            }
            return this.fallbackRangeProvider?.compute(cancellationToken) ?? null;
        });
    }
    dispose() {
        this.disposables.dispose();
    }
}
function collectSyntaxRanges(providers, model, cancellationToken) {
    let rangeData = null;
    const promises = providers.map((provider, i) => {
        return Promise.resolve(provider.provideFoldingRanges(model, foldingContext, cancellationToken)).then(ranges => {
            if (cancellationToken.isCancellationRequested) {
                return;
            }
            if (Array.isArray(ranges)) {
                if (!Array.isArray(rangeData)) {
                    rangeData = [];
                }
                const nLines = model.getLineCount();
                for (const r of ranges) {
                    if (r.start > 0 && r.end > r.start && r.end <= nLines) {
                        rangeData.push({ start: r.start, end: r.end, rank: i, kind: r.kind });
                    }
                }
            }
        }, onUnexpectedExternalError);
    });
    return Promise.all(promises).then(_ => {
        return rangeData;
    });
}
class RangesCollector {
    constructor(foldingRangesLimit) {
        this._startIndexes = [];
        this._endIndexes = [];
        this._nestingLevels = [];
        this._nestingLevelCounts = [];
        this._types = [];
        this._length = 0;
        this._foldingRangesLimit = foldingRangesLimit;
    }
    add(startLineNumber, endLineNumber, type, nestingLevel) {
        if (startLineNumber > MAX_LINE_NUMBER || endLineNumber > MAX_LINE_NUMBER) {
            return;
        }
        const index = this._length;
        this._startIndexes[index] = startLineNumber;
        this._endIndexes[index] = endLineNumber;
        this._nestingLevels[index] = nestingLevel;
        this._types[index] = type;
        this._length++;
        if (nestingLevel < 30) {
            this._nestingLevelCounts[nestingLevel] = (this._nestingLevelCounts[nestingLevel] || 0) + 1;
        }
    }
    toIndentRanges() {
        const limit = this._foldingRangesLimit.limit;
        if (this._length <= limit) {
            this._foldingRangesLimit.update(this._length, false);
            const startIndexes = new Uint32Array(this._length);
            const endIndexes = new Uint32Array(this._length);
            for (let i = 0; i < this._length; i++) {
                startIndexes[i] = this._startIndexes[i];
                endIndexes[i] = this._endIndexes[i];
            }
            return new FoldingRegions(startIndexes, endIndexes, this._types);
        }
        else {
            this._foldingRangesLimit.update(this._length, limit);
            let entries = 0;
            let maxLevel = this._nestingLevelCounts.length;
            for (let i = 0; i < this._nestingLevelCounts.length; i++) {
                const n = this._nestingLevelCounts[i];
                if (n) {
                    if (n + entries > limit) {
                        maxLevel = i;
                        break;
                    }
                    entries += n;
                }
            }
            const startIndexes = new Uint32Array(limit);
            const endIndexes = new Uint32Array(limit);
            const types = [];
            for (let i = 0, k = 0; i < this._length; i++) {
                const level = this._nestingLevels[i];
                if (level < maxLevel || (level === maxLevel && entries++ < limit)) {
                    startIndexes[k] = this._startIndexes[i];
                    endIndexes[k] = this._endIndexes[i];
                    types[k] = this._types[i];
                    k++;
                }
            }
            return new FoldingRegions(startIndexes, endIndexes, types);
        }
    }
}
function sanitizeRanges(rangeData, foldingRangesLimit) {
    const sorted = rangeData.sort((d1, d2) => {
        let diff = d1.start - d2.start;
        if (diff === 0) {
            diff = d1.rank - d2.rank;
        }
        return diff;
    });
    const collector = new RangesCollector(foldingRangesLimit);
    let top = undefined;
    const previous = [];
    for (const entry of sorted) {
        if (!top) {
            top = entry;
            collector.add(entry.start, entry.end, entry.kind && entry.kind.value, previous.length);
        }
        else {
            if (entry.start > top.start) {
                if (entry.end <= top.end) {
                    previous.push(top);
                    top = entry;
                    collector.add(entry.start, entry.end, entry.kind && entry.kind.value, previous.length);
                }
                else {
                    if (entry.start > top.end) {
                        do {
                            top = previous.pop();
                        } while (top && entry.start > top.end);
                        if (top) {
                            previous.push(top);
                        }
                        top = entry;
                    }
                    collector.add(entry.start, entry.end, entry.kind && entry.kind.value, previous.length);
                }
            }
        }
    }
    return collector.toIndentRanges();
}

export { SyntaxRangeProvider, sanitizeRanges };
