import { RunOnceScheduler } from '../../../../base/common/async.js';
import { CancellationTokenSource } from '../../../../base/common/cancellation.js';
import { Disposable, toDisposable } from '../../../../base/common/lifecycle.js';
import '../../../../base/common/observableInternal/index.js';
import { IDiffProviderFactoryService } from './diffProviderFactoryService.js';
import { filterWithPrevious } from './utils.js';
import { LineRange, LineRangeSet } from '../../../common/core/ranges/lineRange.js';
import { groupAdjacentBy } from '../../../../base/common/arrays.js';
import { softAssert } from '../../../../base/common/assert.js';
import '../../../common/core/text/textLength.js';
import '../../../common/core/text/positionToOffsetImpl.js';
import { LineRangeMapping, DetailedLineRangeMapping, RangeMapping } from '../../../common/diff/rangeMapping.js';
import '../../../common/diff/defaultLinesDiffComputer/algorithms/diffAlgorithm.js';
import '../../../common/diff/defaultLinesDiffComputer/utils.js';
import '../../../../base/common/arraysFind.js';
import '../../../../base/common/map.js';
import { TextEditInfo } from '../../../common/model/bracketPairsTextModelPart/bracketPairsTree/beforeEditPositionMapper.js';
import { combineTextEditInfos } from '../../../common/model/bracketPairsTextModelPart/bracketPairsTree/combineTextEditInfos.js';
import { isDefined } from '../../../../base/common/types.js';
import { waitForState } from '../../../../base/common/observableInternal/utils/utilsCancellation.js';
import { observableValue } from '../../../../base/common/observableInternal/observables/observableValue.js';
import { derived } from '../../../../base/common/observableInternal/observables/derived.js';
import { transaction } from '../../../../base/common/observableInternal/transaction.js';
import { observableSignalFromEvent } from '../../../../base/common/observableInternal/observables/observableSignalFromEvent.js';
import { observableSignal } from '../../../../base/common/observableInternal/observables/observableSignal.js';
import { autorun, autorunWithStore } from '../../../../base/common/observableInternal/reactions/autorun.js';

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
let DiffEditorViewModel = class DiffEditorViewModel extends Disposable {
    setActiveMovedText(movedText) {
        this._activeMovedText.set(movedText, undefined);
    }
    constructor(model, _options, _diffProviderFactoryService) {
        super();
        this.model = model;
        this._options = _options;
        this._diffProviderFactoryService = _diffProviderFactoryService;
        this._isDiffUpToDate = observableValue(this, false);
        this.isDiffUpToDate = this._isDiffUpToDate;
        this._diff = observableValue(this, undefined);
        this.diff = this._diff;
        this._unchangedRegions = observableValue(this, undefined);
        this.unchangedRegions = derived(this, r => {
            if (this._options.hideUnchangedRegions.read(r)) {
                return this._unchangedRegions.read(r)?.regions ?? [];
            }
            else {
                // Reset state
                transaction(tx => {
                    for (const r of this._unchangedRegions.read(undefined)?.regions || []) {
                        r.collapseAll(tx);
                    }
                });
                return [];
            }
        });
        this.movedTextToCompare = observableValue(this, undefined);
        this._activeMovedText = observableValue(this, undefined);
        this._hoveredMovedText = observableValue(this, undefined);
        this.activeMovedText = derived(this, r => this.movedTextToCompare.read(r) ?? this._hoveredMovedText.read(r) ?? this._activeMovedText.read(r));
        this._cancellationTokenSource = new CancellationTokenSource();
        this._diffProvider = derived(this, reader => {
            const diffProvider = this._diffProviderFactoryService.createDiffProvider({
                diffAlgorithm: this._options.diffAlgorithm.read(reader)
            });
            const onChangeSignal = observableSignalFromEvent('onDidChange', diffProvider.onDidChange);
            return {
                diffProvider,
                onChangeSignal,
            };
        });
        this._register(toDisposable(() => this._cancellationTokenSource.cancel()));
        const contentChangedSignal = observableSignal('contentChangedSignal');
        const debouncer = this._register(new RunOnceScheduler(() => contentChangedSignal.trigger(undefined), 200));
        this._register(autorun(reader => {
            /** @description collapse touching unchanged ranges */
            const lastUnchangedRegions = this._unchangedRegions.read(reader);
            if (!lastUnchangedRegions || lastUnchangedRegions.regions.some(r => r.isDragged.read(reader))) {
                return;
            }
            const lastUnchangedRegionsOrigRanges = lastUnchangedRegions.originalDecorationIds
                .map(id => model.original.getDecorationRange(id))
                .map(r => r ? LineRange.fromRangeInclusive(r) : undefined);
            const lastUnchangedRegionsModRanges = lastUnchangedRegions.modifiedDecorationIds
                .map(id => model.modified.getDecorationRange(id))
                .map(r => r ? LineRange.fromRangeInclusive(r) : undefined);
            const updatedLastUnchangedRegions = lastUnchangedRegions.regions.map((r, idx) => (!lastUnchangedRegionsOrigRanges[idx] || !lastUnchangedRegionsModRanges[idx]) ? undefined :
                new UnchangedRegion(lastUnchangedRegionsOrigRanges[idx].startLineNumber, lastUnchangedRegionsModRanges[idx].startLineNumber, lastUnchangedRegionsOrigRanges[idx].length, r.visibleLineCountTop.read(reader), r.visibleLineCountBottom.read(reader))).filter(isDefined);
            const newRanges = [];
            let didChange = false;
            for (const touching of groupAdjacentBy(updatedLastUnchangedRegions, (a, b) => a.getHiddenModifiedRange(reader).endLineNumberExclusive === b.getHiddenModifiedRange(reader).startLineNumber)) {
                if (touching.length > 1) {
                    didChange = true;
                    const sumLineCount = touching.reduce((sum, r) => sum + r.lineCount, 0);
                    const r = new UnchangedRegion(touching[0].originalLineNumber, touching[0].modifiedLineNumber, sumLineCount, touching[0].visibleLineCountTop.read(undefined), touching[touching.length - 1].visibleLineCountBottom.read(undefined));
                    newRanges.push(r);
                }
                else {
                    newRanges.push(touching[0]);
                }
            }
            if (didChange) {
                const originalDecorationIds = model.original.deltaDecorations(lastUnchangedRegions.originalDecorationIds, newRanges.map(r => ({ range: r.originalUnchangedRange.toInclusiveRange(), options: { description: 'unchanged' } })));
                const modifiedDecorationIds = model.modified.deltaDecorations(lastUnchangedRegions.modifiedDecorationIds, newRanges.map(r => ({ range: r.modifiedUnchangedRange.toInclusiveRange(), options: { description: 'unchanged' } })));
                transaction(tx => {
                    this._unchangedRegions.set({
                        regions: newRanges,
                        originalDecorationIds,
                        modifiedDecorationIds
                    }, tx);
                });
            }
        }));
        const updateUnchangedRegions = (result, tx, reader) => {
            const newUnchangedRegions = UnchangedRegion.fromDiffs(result.changes, model.original.getLineCount(), model.modified.getLineCount(), this._options.hideUnchangedRegionsMinimumLineCount.read(reader), this._options.hideUnchangedRegionsContextLineCount.read(reader));
            // Transfer state from cur state
            let visibleRegions = undefined;
            const lastUnchangedRegions = this._unchangedRegions.get();
            if (lastUnchangedRegions) {
                const lastUnchangedRegionsOrigRanges = lastUnchangedRegions.originalDecorationIds
                    .map(id => model.original.getDecorationRange(id))
                    .map(r => r ? LineRange.fromRangeInclusive(r) : undefined);
                const lastUnchangedRegionsModRanges = lastUnchangedRegions.modifiedDecorationIds
                    .map(id => model.modified.getDecorationRange(id))
                    .map(r => r ? LineRange.fromRangeInclusive(r) : undefined);
                const updatedLastUnchangedRegions = filterWithPrevious(lastUnchangedRegions.regions
                    .map((r, idx) => {
                    if (!lastUnchangedRegionsOrigRanges[idx] || !lastUnchangedRegionsModRanges[idx]) {
                        return undefined;
                    }
                    const length = lastUnchangedRegionsOrigRanges[idx].length;
                    return new UnchangedRegion(lastUnchangedRegionsOrigRanges[idx].startLineNumber, lastUnchangedRegionsModRanges[idx].startLineNumber, length, 
                    // The visible area can shrink by edits -> we have to account for this
                    Math.min(r.visibleLineCountTop.get(), length), Math.min(r.visibleLineCountBottom.get(), length - r.visibleLineCountTop.get()));
                }).filter(isDefined), (cur, prev) => !prev || (cur.modifiedLineNumber >= prev.modifiedLineNumber + prev.lineCount && cur.originalLineNumber >= prev.originalLineNumber + prev.lineCount));
                let hiddenRegions = updatedLastUnchangedRegions.map(r => new LineRangeMapping(r.getHiddenOriginalRange(reader), r.getHiddenModifiedRange(reader)));
                hiddenRegions = LineRangeMapping.clip(hiddenRegions, LineRange.ofLength(1, model.original.getLineCount()), LineRange.ofLength(1, model.modified.getLineCount()));
                visibleRegions = LineRangeMapping.inverse(hiddenRegions, model.original.getLineCount(), model.modified.getLineCount());
            }
            const newUnchangedRegions2 = [];
            if (visibleRegions) {
                for (const r of newUnchangedRegions) {
                    const intersecting = visibleRegions.filter(f => f.original.intersectsStrict(r.originalUnchangedRange) && f.modified.intersectsStrict(r.modifiedUnchangedRange));
                    newUnchangedRegions2.push(...r.setVisibleRanges(intersecting, tx));
                }
            }
            else {
                newUnchangedRegions2.push(...newUnchangedRegions);
            }
            const originalDecorationIds = model.original.deltaDecorations(lastUnchangedRegions?.originalDecorationIds || [], newUnchangedRegions2.map(r => ({ range: r.originalUnchangedRange.toInclusiveRange(), options: { description: 'unchanged' } })));
            const modifiedDecorationIds = model.modified.deltaDecorations(lastUnchangedRegions?.modifiedDecorationIds || [], newUnchangedRegions2.map(r => ({ range: r.modifiedUnchangedRange.toInclusiveRange(), options: { description: 'unchanged' } })));
            this._unchangedRegions.set({
                regions: newUnchangedRegions2,
                originalDecorationIds,
                modifiedDecorationIds
            }, tx);
        };
        this._register(model.modified.onDidChangeContent((e) => {
            const diff = this._diff.get();
            if (diff) {
                const textEdits = TextEditInfo.fromModelContentChanges(e.changes);
                applyModifiedEdits(this._lastDiff, textEdits, model.original, model.modified);
            }
            this._isDiffUpToDate.set(false, undefined);
            debouncer.schedule();
        }));
        this._register(model.original.onDidChangeContent((e) => {
            const diff = this._diff.get();
            if (diff) {
                const textEdits = TextEditInfo.fromModelContentChanges(e.changes);
                applyOriginalEdits(this._lastDiff, textEdits, model.original, model.modified);
            }
            this._isDiffUpToDate.set(false, undefined);
            debouncer.schedule();
        }));
        this._register(autorunWithStore(async (reader, store) => {
            /** @description compute diff */
            // So that they get recomputed when these settings change
            this._options.hideUnchangedRegionsMinimumLineCount.read(reader);
            this._options.hideUnchangedRegionsContextLineCount.read(reader);
            debouncer.cancel();
            contentChangedSignal.read(reader);
            const documentDiffProvider = this._diffProvider.read(reader);
            documentDiffProvider.onChangeSignal.read(reader);
            this._isDiffUpToDate.set(false, undefined);
            let originalTextEditInfos = [];
            store.add(model.original.onDidChangeContent((e) => {
                const edits = TextEditInfo.fromModelContentChanges(e.changes);
                originalTextEditInfos = combineTextEditInfos(originalTextEditInfos, edits);
            }));
            let modifiedTextEditInfos = [];
            store.add(model.modified.onDidChangeContent((e) => {
                const edits = TextEditInfo.fromModelContentChanges(e.changes);
                modifiedTextEditInfos = combineTextEditInfos(modifiedTextEditInfos, edits);
            }));
            let result = await documentDiffProvider.diffProvider.computeDiff(model.original, model.modified, {
                ignoreTrimWhitespace: this._options.ignoreTrimWhitespace.read(reader),
                maxComputationTimeMs: this._options.maxComputationTimeMs.read(reader),
                computeMoves: this._options.showMoves.read(reader),
            }, this._cancellationTokenSource.token);
            if (this._cancellationTokenSource.token.isCancellationRequested) {
                return;
            }
            if (model.original.isDisposed() || model.modified.isDisposed()) {
                // TODO@hediet fishy?
                return;
            }
            result = normalizeDocumentDiff(result, model.original, model.modified);
            result = applyOriginalEdits(result, originalTextEditInfos, model.original, model.modified) ?? result;
            result = applyModifiedEdits(result, modifiedTextEditInfos, model.original, model.modified) ?? result;
            transaction(tx => {
                /** @description write diff result */
                updateUnchangedRegions(result, tx);
                this._lastDiff = result;
                const state = DiffState.fromDiffResult(result);
                this._diff.set(state, tx);
                this._isDiffUpToDate.set(true, tx);
                const currentSyncedMovedText = this.movedTextToCompare.read(undefined);
                this.movedTextToCompare.set(currentSyncedMovedText ? this._lastDiff.moves.find(m => m.lineRangeMapping.modified.intersect(currentSyncedMovedText.lineRangeMapping.modified)) : undefined, tx);
            });
        }));
    }
    ensureModifiedLineIsVisible(lineNumber, preference, tx) {
        if (this.diff.get()?.mappings.length === 0) {
            return;
        }
        const unchangedRegions = this._unchangedRegions.get()?.regions || [];
        for (const r of unchangedRegions) {
            if (r.getHiddenModifiedRange(undefined).contains(lineNumber)) {
                r.showModifiedLine(lineNumber, preference, tx);
                return;
            }
        }
    }
    ensureOriginalLineIsVisible(lineNumber, preference, tx) {
        if (this.diff.get()?.mappings.length === 0) {
            return;
        }
        const unchangedRegions = this._unchangedRegions.get()?.regions || [];
        for (const r of unchangedRegions) {
            if (r.getHiddenOriginalRange(undefined).contains(lineNumber)) {
                r.showOriginalLine(lineNumber, preference, tx);
                return;
            }
        }
    }
    async waitForDiff() {
        await waitForState(this.isDiffUpToDate, s => s);
    }
    serializeState() {
        const regions = this._unchangedRegions.get();
        return {
            collapsedRegions: regions?.regions.map(r => ({ range: r.getHiddenModifiedRange(undefined).serialize() }))
        };
    }
    restoreSerializedState(state) {
        const ranges = state.collapsedRegions?.map(r => LineRange.deserialize(r.range));
        const regions = this._unchangedRegions.get();
        if (!regions || !ranges) {
            return;
        }
        transaction(tx => {
            for (const r of regions.regions) {
                for (const range of ranges) {
                    if (r.modifiedUnchangedRange.intersect(range)) {
                        r.setHiddenModifiedRange(range, tx);
                        break;
                    }
                }
            }
        });
    }
};
DiffEditorViewModel = __decorate([
    __param(2, IDiffProviderFactoryService)
], DiffEditorViewModel);
function normalizeDocumentDiff(diff, original, modified) {
    return {
        changes: diff.changes.map(c => new DetailedLineRangeMapping(c.original, c.modified, c.innerChanges ? c.innerChanges.map(i => normalizeRangeMapping(i, original, modified)) : undefined)),
        moves: diff.moves,
        identical: diff.identical,
        quitEarly: diff.quitEarly,
    };
}
function normalizeRangeMapping(rangeMapping, original, modified) {
    let originalRange = rangeMapping.originalRange;
    let modifiedRange = rangeMapping.modifiedRange;
    if (originalRange.startColumn === 1 && modifiedRange.startColumn === 1 &&
        (originalRange.endColumn !== 1 || modifiedRange.endColumn !== 1) &&
        originalRange.endColumn === original.getLineMaxColumn(originalRange.endLineNumber)
        && modifiedRange.endColumn === modified.getLineMaxColumn(modifiedRange.endLineNumber)
        && originalRange.endLineNumber < original.getLineCount()
        && modifiedRange.endLineNumber < modified.getLineCount()) {
        originalRange = originalRange.setEndPosition(originalRange.endLineNumber + 1, 1);
        modifiedRange = modifiedRange.setEndPosition(modifiedRange.endLineNumber + 1, 1);
    }
    return new RangeMapping(originalRange, modifiedRange);
}
class DiffState {
    static fromDiffResult(result) {
        return new DiffState(result.changes.map(c => new DiffMapping(c)), result.moves || [], result.identical, result.quitEarly);
    }
    constructor(mappings, movedTexts, identical, quitEarly) {
        this.mappings = mappings;
        this.movedTexts = movedTexts;
        this.identical = identical;
        this.quitEarly = quitEarly;
    }
}
class DiffMapping {
    constructor(lineRangeMapping) {
        this.lineRangeMapping = lineRangeMapping;
        /*
        readonly movedTo: MovedText | undefined,
        readonly movedFrom: MovedText | undefined,

        if (movedTo) {
            assertFn(() =>
                movedTo.lineRangeMapping.modifiedRange.equals(lineRangeMapping.modifiedRange)
                && lineRangeMapping.originalRange.isEmpty
                && !movedFrom
            );
        } else if (movedFrom) {
            assertFn(() =>
                movedFrom.lineRangeMapping.originalRange.equals(lineRangeMapping.originalRange)
                && lineRangeMapping.modifiedRange.isEmpty
                && !movedTo
            );
        }
        */
    }
}
class UnchangedRegion {
    static fromDiffs(changes, originalLineCount, modifiedLineCount, minHiddenLineCount, minContext) {
        const inversedMappings = DetailedLineRangeMapping.inverse(changes, originalLineCount, modifiedLineCount);
        const result = [];
        for (const mapping of inversedMappings) {
            let origStart = mapping.original.startLineNumber;
            let modStart = mapping.modified.startLineNumber;
            let length = mapping.original.length;
            const atStart = origStart === 1 && modStart === 1;
            const atEnd = origStart + length === originalLineCount + 1 && modStart + length === modifiedLineCount + 1;
            if ((atStart || atEnd) && length >= minContext + minHiddenLineCount) {
                if (atStart && !atEnd) {
                    length -= minContext;
                }
                if (atEnd && !atStart) {
                    origStart += minContext;
                    modStart += minContext;
                    length -= minContext;
                }
                result.push(new UnchangedRegion(origStart, modStart, length, 0, 0));
            }
            else if (length >= minContext * 2 + minHiddenLineCount) {
                origStart += minContext;
                modStart += minContext;
                length -= minContext * 2;
                result.push(new UnchangedRegion(origStart, modStart, length, 0, 0));
            }
        }
        return result;
    }
    get originalUnchangedRange() {
        return LineRange.ofLength(this.originalLineNumber, this.lineCount);
    }
    get modifiedUnchangedRange() {
        return LineRange.ofLength(this.modifiedLineNumber, this.lineCount);
    }
    constructor(originalLineNumber, modifiedLineNumber, lineCount, visibleLineCountTop, visibleLineCountBottom) {
        this.originalLineNumber = originalLineNumber;
        this.modifiedLineNumber = modifiedLineNumber;
        this.lineCount = lineCount;
        this._visibleLineCountTop = observableValue(this, 0);
        this.visibleLineCountTop = this._visibleLineCountTop;
        this._visibleLineCountBottom = observableValue(this, 0);
        this.visibleLineCountBottom = this._visibleLineCountBottom;
        this._shouldHideControls = derived(this, reader => /** @description isVisible */ this.visibleLineCountTop.read(reader) + this.visibleLineCountBottom.read(reader) === this.lineCount && !this.isDragged.read(reader));
        this.isDragged = observableValue(this, undefined);
        const visibleLineCountTop2 = Math.max(Math.min(visibleLineCountTop, this.lineCount), 0);
        const visibleLineCountBottom2 = Math.max(Math.min(visibleLineCountBottom, this.lineCount - visibleLineCountTop), 0);
        softAssert(visibleLineCountTop === visibleLineCountTop2);
        softAssert(visibleLineCountBottom === visibleLineCountBottom2);
        this._visibleLineCountTop.set(visibleLineCountTop2, undefined);
        this._visibleLineCountBottom.set(visibleLineCountBottom2, undefined);
    }
    setVisibleRanges(visibleRanges, tx) {
        const result = [];
        const hiddenModified = new LineRangeSet(visibleRanges.map(r => r.modified)).subtractFrom(this.modifiedUnchangedRange);
        let originalStartLineNumber = this.originalLineNumber;
        let modifiedStartLineNumber = this.modifiedLineNumber;
        const modifiedEndLineNumberEx = this.modifiedLineNumber + this.lineCount;
        if (hiddenModified.ranges.length === 0) {
            this.showAll(tx);
            result.push(this);
        }
        else {
            let i = 0;
            for (const r of hiddenModified.ranges) {
                const isLast = i === hiddenModified.ranges.length - 1;
                i++;
                const length = (isLast ? modifiedEndLineNumberEx : r.endLineNumberExclusive) - modifiedStartLineNumber;
                const newR = new UnchangedRegion(originalStartLineNumber, modifiedStartLineNumber, length, 0, 0);
                newR.setHiddenModifiedRange(r, tx);
                result.push(newR);
                originalStartLineNumber = newR.originalUnchangedRange.endLineNumberExclusive;
                modifiedStartLineNumber = newR.modifiedUnchangedRange.endLineNumberExclusive;
            }
        }
        return result;
    }
    shouldHideControls(reader) {
        return this._shouldHideControls.read(reader);
    }
    getHiddenOriginalRange(reader) {
        return LineRange.ofLength(this.originalLineNumber + this._visibleLineCountTop.read(reader), this.lineCount - this._visibleLineCountTop.read(reader) - this._visibleLineCountBottom.read(reader));
    }
    getHiddenModifiedRange(reader) {
        return LineRange.ofLength(this.modifiedLineNumber + this._visibleLineCountTop.read(reader), this.lineCount - this._visibleLineCountTop.read(reader) - this._visibleLineCountBottom.read(reader));
    }
    setHiddenModifiedRange(range, tx) {
        const visibleLineCountTop = range.startLineNumber - this.modifiedLineNumber;
        const visibleLineCountBottom = (this.modifiedLineNumber + this.lineCount) - range.endLineNumberExclusive;
        this.setState(visibleLineCountTop, visibleLineCountBottom, tx);
    }
    getMaxVisibleLineCountTop() {
        return this.lineCount - this._visibleLineCountBottom.get();
    }
    getMaxVisibleLineCountBottom() {
        return this.lineCount - this._visibleLineCountTop.get();
    }
    showMoreAbove(count = 10, tx) {
        const maxVisibleLineCountTop = this.getMaxVisibleLineCountTop();
        this._visibleLineCountTop.set(Math.min(this._visibleLineCountTop.get() + count, maxVisibleLineCountTop), tx);
    }
    showMoreBelow(count = 10, tx) {
        const maxVisibleLineCountBottom = this.lineCount - this._visibleLineCountTop.get();
        this._visibleLineCountBottom.set(Math.min(this._visibleLineCountBottom.get() + count, maxVisibleLineCountBottom), tx);
    }
    showAll(tx) {
        this._visibleLineCountBottom.set(this.lineCount - this._visibleLineCountTop.get(), tx);
    }
    showModifiedLine(lineNumber, preference, tx) {
        const top = lineNumber + 1 - (this.modifiedLineNumber + this._visibleLineCountTop.get());
        const bottom = (this.modifiedLineNumber - this._visibleLineCountBottom.get() + this.lineCount) - lineNumber;
        if (preference === 0 /* RevealPreference.FromCloserSide */ && top < bottom || preference === 1 /* RevealPreference.FromTop */) {
            this._visibleLineCountTop.set(this._visibleLineCountTop.get() + top, tx);
        }
        else {
            this._visibleLineCountBottom.set(this._visibleLineCountBottom.get() + bottom, tx);
        }
    }
    showOriginalLine(lineNumber, preference, tx) {
        const top = lineNumber - this.originalLineNumber;
        const bottom = (this.originalLineNumber + this.lineCount) - lineNumber;
        if (preference === 0 /* RevealPreference.FromCloserSide */ && top < bottom || preference === 1 /* RevealPreference.FromTop */) {
            this._visibleLineCountTop.set(Math.min(this._visibleLineCountTop.get() + bottom - top, this.getMaxVisibleLineCountTop()), tx);
        }
        else {
            this._visibleLineCountBottom.set(Math.min(this._visibleLineCountBottom.get() + top - bottom, this.getMaxVisibleLineCountBottom()), tx);
        }
    }
    collapseAll(tx) {
        this._visibleLineCountTop.set(0, tx);
        this._visibleLineCountBottom.set(0, tx);
    }
    setState(visibleLineCountTop, visibleLineCountBottom, tx) {
        visibleLineCountTop = Math.max(Math.min(visibleLineCountTop, this.lineCount), 0);
        visibleLineCountBottom = Math.max(Math.min(visibleLineCountBottom, this.lineCount - visibleLineCountTop), 0);
        this._visibleLineCountTop.set(visibleLineCountTop, tx);
        this._visibleLineCountBottom.set(visibleLineCountBottom, tx);
    }
}
function applyOriginalEdits(diff, textEdits, originalTextModel, modifiedTextModel) {
    return undefined;
    /*
    TODO@hediet
    if (textEdits.length === 0) {
        return diff;
    }

    const diff2 = flip(diff);
    const diff3 = applyModifiedEdits(diff2, textEdits, modifiedTextModel, originalTextModel);
    if (!diff3) {
        return undefined;
    }
    return flip(diff3);*/
}
/*
function flip(diff: IDocumentDiff): IDocumentDiff {
    return {
        changes: diff.changes.map(c => c.flip()),
        moves: diff.moves.map(m => m.flip()),
        identical: diff.identical,
        quitEarly: diff.quitEarly,
    };
}
*/
function applyModifiedEdits(diff, textEdits, originalTextModel, modifiedTextModel) {
    return undefined;
    /*
    TODO@hediet
    if (textEdits.length === 0) {
        return diff;
    }
    if (diff.changes.some(c => !c.innerChanges) || diff.moves.length > 0) {
        // TODO support these cases
        return undefined;
    }

    const changes = applyModifiedEditsToLineRangeMappings(diff.changes, textEdits, originalTextModel, modifiedTextModel);

    const moves = diff.moves.map(m => {
        const newModifiedRange = applyEditToLineRange(m.lineRangeMapping.modified, textEdits);
        return newModifiedRange ? new MovedText(
            new SimpleLineRangeMapping(m.lineRangeMapping.original, newModifiedRange),
            applyModifiedEditsToLineRangeMappings(m.changes, textEdits, originalTextModel, modifiedTextModel),
        ) : undefined;
    }).filter(isDefined);

    return {
        identical: false,
        quitEarly: false,
        changes,
        moves,
    };*/
}
/*
function applyEditToLineRange(range: LineRange, textEdits: TextEditInfo[]): LineRange | undefined {
    let rangeStartLineNumber = range.startLineNumber;
    let rangeEndLineNumberEx = range.endLineNumberExclusive;

    for (let i = textEdits.length - 1; i >= 0; i--) {
        const textEdit = textEdits[i];
        const textEditStartLineNumber = lengthGetLineCount(textEdit.startOffset) + 1;
        const textEditEndLineNumber = lengthGetLineCount(textEdit.endOffset) + 1;
        const newLengthLineCount = lengthGetLineCount(textEdit.newLength);
        const delta = newLengthLineCount - (textEditEndLineNumber - textEditStartLineNumber);

        if (textEditEndLineNumber < rangeStartLineNumber) {
            // the text edit is before us
            rangeStartLineNumber += delta;
            rangeEndLineNumberEx += delta;
        } else if (textEditStartLineNumber > rangeEndLineNumberEx) {
            // the text edit is after us
            // NOOP
        } else if (textEditStartLineNumber < rangeStartLineNumber && rangeEndLineNumberEx < textEditEndLineNumber) {
            // the range is fully contained in the text edit
            return undefined;
        } else if (textEditStartLineNumber < rangeStartLineNumber && textEditEndLineNumber <= rangeEndLineNumberEx) {
            // the text edit ends inside our range
            rangeStartLineNumber = textEditEndLineNumber + 1;
            rangeStartLineNumber += delta;
            rangeEndLineNumberEx += delta;
        } else if (rangeStartLineNumber <= textEditStartLineNumber && textEditEndLineNumber < rangeStartLineNumber) {
            // the text edit starts inside our range
            rangeEndLineNumberEx = textEditStartLineNumber;
        } else {
            rangeEndLineNumberEx += delta;
        }
    }

    return new LineRange(rangeStartLineNumber, rangeEndLineNumberEx);
}

function applyModifiedEditsToLineRangeMappings(changes: readonly LineRangeMapping[], textEdits: TextEditInfo[], originalTextModel: ITextModel, modifiedTextModel: ITextModel): LineRangeMapping[] {
    const diffTextEdits = changes.flatMap(c => c.innerChanges!.map(c => new TextEditInfo(
        positionToLength(c.originalRange.getStartPosition()),
        positionToLength(c.originalRange.getEndPosition()),
        lengthOfRange(c.modifiedRange).toLength(),
    )));

    const combined = combineTextEditInfos(diffTextEdits, textEdits);

    let lastOriginalEndOffset = lengthZero;
    let lastModifiedEndOffset = lengthZero;
    const rangeMappings = combined.map(c => {
        const modifiedStartOffset = lengthAdd(lastModifiedEndOffset, lengthDiffNonNegative(lastOriginalEndOffset, c.startOffset));
        lastOriginalEndOffset = c.endOffset;
        lastModifiedEndOffset = lengthAdd(modifiedStartOffset, c.newLength);

        return new RangeMapping(
            Range.fromPositions(lengthToPosition(c.startOffset), lengthToPosition(c.endOffset)),
            Range.fromPositions(lengthToPosition(modifiedStartOffset), lengthToPosition(lastModifiedEndOffset)),
        );
    });

    const newChanges = lineRangeMappingFromRangeMappings(
        rangeMappings,
        originalTextModel.getLinesContent(),
        modifiedTextModel.getLinesContent(),
    );
    return newChanges;
}
*/

export { DiffEditorViewModel, DiffMapping, DiffState, UnchangedRegion };
