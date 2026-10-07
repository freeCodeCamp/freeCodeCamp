import { SequenceDiff } from './algorithms/diffAlgorithm.js';
import { LineRangeMapping } from '../rangeMapping.js';
import { pushMany, compareBy, numberComparator, reverseOrder } from '../../../../base/common/arrays.js';
import { MonotonousArray, findLastMonotonous } from '../../../../base/common/arraysFind.js';
import { SetMap } from '../../../../base/common/map.js';
import { LineRange, LineRangeSet } from '../../core/ranges/lineRange.js';
import { LinesSliceCharSequence } from './linesSliceCharSequence.js';
import { LineRangeFragment, isSpace } from './utils.js';
import { MyersDiffAlgorithm } from './algorithms/myersDiffAlgorithm.js';
import { Range } from '../../core/range.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function computeMovedLines(changes, originalLines, modifiedLines, hashedOriginalLines, hashedModifiedLines, timeout) {
    let { moves, excludedChanges } = computeMovesFromSimpleDeletionsToSimpleInsertions(changes, originalLines, modifiedLines, timeout);
    if (!timeout.isValid()) {
        return [];
    }
    const filteredChanges = changes.filter(c => !excludedChanges.has(c));
    const unchangedMoves = computeUnchangedMoves(filteredChanges, hashedOriginalLines, hashedModifiedLines, originalLines, modifiedLines, timeout);
    pushMany(moves, unchangedMoves);
    moves = joinCloseConsecutiveMoves(moves);
    // Ignore too short moves
    moves = moves.filter(current => {
        const lines = current.original.toOffsetRange().slice(originalLines).map(l => l.trim());
        const originalText = lines.join('\n');
        return originalText.length >= 15 && countWhere(lines, l => l.length >= 2) >= 2;
    });
    moves = removeMovesInSameDiff(changes, moves);
    return moves;
}
function countWhere(arr, predicate) {
    let count = 0;
    for (const t of arr) {
        if (predicate(t)) {
            count++;
        }
    }
    return count;
}
function computeMovesFromSimpleDeletionsToSimpleInsertions(changes, originalLines, modifiedLines, timeout) {
    const moves = [];
    const deletions = changes
        .filter(c => c.modified.isEmpty && c.original.length >= 3)
        .map(d => new LineRangeFragment(d.original, originalLines, d));
    const insertions = new Set(changes
        .filter(c => c.original.isEmpty && c.modified.length >= 3)
        .map(d => new LineRangeFragment(d.modified, modifiedLines, d)));
    const excludedChanges = new Set();
    for (const deletion of deletions) {
        let highestSimilarity = -1;
        let best;
        for (const insertion of insertions) {
            const similarity = deletion.computeSimilarity(insertion);
            if (similarity > highestSimilarity) {
                highestSimilarity = similarity;
                best = insertion;
            }
        }
        if (highestSimilarity > 0.90 && best) {
            insertions.delete(best);
            moves.push(new LineRangeMapping(deletion.range, best.range));
            excludedChanges.add(deletion.source);
            excludedChanges.add(best.source);
        }
        if (!timeout.isValid()) {
            return { moves, excludedChanges };
        }
    }
    return { moves, excludedChanges };
}
function computeUnchangedMoves(changes, hashedOriginalLines, hashedModifiedLines, originalLines, modifiedLines, timeout) {
    const moves = [];
    const original3LineHashes = new SetMap();
    for (const change of changes) {
        for (let i = change.original.startLineNumber; i < change.original.endLineNumberExclusive - 2; i++) {
            const key = `${hashedOriginalLines[i - 1]}:${hashedOriginalLines[i + 1 - 1]}:${hashedOriginalLines[i + 2 - 1]}`;
            original3LineHashes.add(key, { range: new LineRange(i, i + 3) });
        }
    }
    const possibleMappings = [];
    changes.sort(compareBy(c => c.modified.startLineNumber, numberComparator));
    for (const change of changes) {
        let lastMappings = [];
        for (let i = change.modified.startLineNumber; i < change.modified.endLineNumberExclusive - 2; i++) {
            const key = `${hashedModifiedLines[i - 1]}:${hashedModifiedLines[i + 1 - 1]}:${hashedModifiedLines[i + 2 - 1]}`;
            const currentModifiedRange = new LineRange(i, i + 3);
            const nextMappings = [];
            original3LineHashes.forEach(key, ({ range }) => {
                for (const lastMapping of lastMappings) {
                    // does this match extend some last match?
                    if (lastMapping.originalLineRange.endLineNumberExclusive + 1 === range.endLineNumberExclusive &&
                        lastMapping.modifiedLineRange.endLineNumberExclusive + 1 === currentModifiedRange.endLineNumberExclusive) {
                        lastMapping.originalLineRange = new LineRange(lastMapping.originalLineRange.startLineNumber, range.endLineNumberExclusive);
                        lastMapping.modifiedLineRange = new LineRange(lastMapping.modifiedLineRange.startLineNumber, currentModifiedRange.endLineNumberExclusive);
                        nextMappings.push(lastMapping);
                        return;
                    }
                }
                const mapping = {
                    modifiedLineRange: currentModifiedRange,
                    originalLineRange: range,
                };
                possibleMappings.push(mapping);
                nextMappings.push(mapping);
            });
            lastMappings = nextMappings;
        }
        if (!timeout.isValid()) {
            return [];
        }
    }
    possibleMappings.sort(reverseOrder(compareBy(m => m.modifiedLineRange.length, numberComparator)));
    const modifiedSet = new LineRangeSet();
    const originalSet = new LineRangeSet();
    for (const mapping of possibleMappings) {
        const diffOrigToMod = mapping.modifiedLineRange.startLineNumber - mapping.originalLineRange.startLineNumber;
        const modifiedSections = modifiedSet.subtractFrom(mapping.modifiedLineRange);
        const originalTranslatedSections = originalSet.subtractFrom(mapping.originalLineRange).getWithDelta(diffOrigToMod);
        const modifiedIntersectedSections = modifiedSections.getIntersection(originalTranslatedSections);
        for (const s of modifiedIntersectedSections.ranges) {
            if (s.length < 3) {
                continue;
            }
            const modifiedLineRange = s;
            const originalLineRange = s.delta(-diffOrigToMod);
            moves.push(new LineRangeMapping(originalLineRange, modifiedLineRange));
            modifiedSet.addRange(modifiedLineRange);
            originalSet.addRange(originalLineRange);
        }
    }
    moves.sort(compareBy(m => m.original.startLineNumber, numberComparator));
    const monotonousChanges = new MonotonousArray(changes);
    for (let i = 0; i < moves.length; i++) {
        const move = moves[i];
        const firstTouchingChangeOrig = monotonousChanges.findLastMonotonous(c => c.original.startLineNumber <= move.original.startLineNumber);
        const firstTouchingChangeMod = findLastMonotonous(changes, c => c.modified.startLineNumber <= move.modified.startLineNumber);
        const linesAbove = Math.max(move.original.startLineNumber - firstTouchingChangeOrig.original.startLineNumber, move.modified.startLineNumber - firstTouchingChangeMod.modified.startLineNumber);
        const lastTouchingChangeOrig = monotonousChanges.findLastMonotonous(c => c.original.startLineNumber < move.original.endLineNumberExclusive);
        const lastTouchingChangeMod = findLastMonotonous(changes, c => c.modified.startLineNumber < move.modified.endLineNumberExclusive);
        const linesBelow = Math.max(lastTouchingChangeOrig.original.endLineNumberExclusive - move.original.endLineNumberExclusive, lastTouchingChangeMod.modified.endLineNumberExclusive - move.modified.endLineNumberExclusive);
        let extendToTop;
        for (extendToTop = 0; extendToTop < linesAbove; extendToTop++) {
            const origLine = move.original.startLineNumber - extendToTop - 1;
            const modLine = move.modified.startLineNumber - extendToTop - 1;
            if (origLine > originalLines.length || modLine > modifiedLines.length) {
                break;
            }
            if (modifiedSet.contains(modLine) || originalSet.contains(origLine)) {
                break;
            }
            if (!areLinesSimilar(originalLines[origLine - 1], modifiedLines[modLine - 1], timeout)) {
                break;
            }
        }
        if (extendToTop > 0) {
            originalSet.addRange(new LineRange(move.original.startLineNumber - extendToTop, move.original.startLineNumber));
            modifiedSet.addRange(new LineRange(move.modified.startLineNumber - extendToTop, move.modified.startLineNumber));
        }
        let extendToBottom;
        for (extendToBottom = 0; extendToBottom < linesBelow; extendToBottom++) {
            const origLine = move.original.endLineNumberExclusive + extendToBottom;
            const modLine = move.modified.endLineNumberExclusive + extendToBottom;
            if (origLine > originalLines.length || modLine > modifiedLines.length) {
                break;
            }
            if (modifiedSet.contains(modLine) || originalSet.contains(origLine)) {
                break;
            }
            if (!areLinesSimilar(originalLines[origLine - 1], modifiedLines[modLine - 1], timeout)) {
                break;
            }
        }
        if (extendToBottom > 0) {
            originalSet.addRange(new LineRange(move.original.endLineNumberExclusive, move.original.endLineNumberExclusive + extendToBottom));
            modifiedSet.addRange(new LineRange(move.modified.endLineNumberExclusive, move.modified.endLineNumberExclusive + extendToBottom));
        }
        if (extendToTop > 0 || extendToBottom > 0) {
            moves[i] = new LineRangeMapping(new LineRange(move.original.startLineNumber - extendToTop, move.original.endLineNumberExclusive + extendToBottom), new LineRange(move.modified.startLineNumber - extendToTop, move.modified.endLineNumberExclusive + extendToBottom));
        }
    }
    return moves;
}
function areLinesSimilar(line1, line2, timeout) {
    if (line1.trim() === line2.trim()) {
        return true;
    }
    if (line1.length > 300 && line2.length > 300) {
        return false;
    }
    const myersDiffingAlgorithm = new MyersDiffAlgorithm();
    const result = myersDiffingAlgorithm.compute(new LinesSliceCharSequence([line1], new Range(1, 1, 1, line1.length), false), new LinesSliceCharSequence([line2], new Range(1, 1, 1, line2.length), false), timeout);
    let commonNonSpaceCharCount = 0;
    const inverted = SequenceDiff.invert(result.diffs, line1.length);
    for (const seq of inverted) {
        seq.seq1Range.forEach(idx => {
            if (!isSpace(line1.charCodeAt(idx))) {
                commonNonSpaceCharCount++;
            }
        });
    }
    function countNonWsChars(str) {
        let count = 0;
        for (let i = 0; i < line1.length; i++) {
            if (!isSpace(str.charCodeAt(i))) {
                count++;
            }
        }
        return count;
    }
    const longerLineLength = countNonWsChars(line1.length > line2.length ? line1 : line2);
    const r = commonNonSpaceCharCount / longerLineLength > 0.6 && longerLineLength > 10;
    return r;
}
function joinCloseConsecutiveMoves(moves) {
    if (moves.length === 0) {
        return moves;
    }
    moves.sort(compareBy(m => m.original.startLineNumber, numberComparator));
    const result = [moves[0]];
    for (let i = 1; i < moves.length; i++) {
        const last = result[result.length - 1];
        const current = moves[i];
        const originalDist = current.original.startLineNumber - last.original.endLineNumberExclusive;
        const modifiedDist = current.modified.startLineNumber - last.modified.endLineNumberExclusive;
        const currentMoveAfterLast = originalDist >= 0 && modifiedDist >= 0;
        if (currentMoveAfterLast && originalDist + modifiedDist <= 2) {
            result[result.length - 1] = last.join(current);
            continue;
        }
        result.push(current);
    }
    return result;
}
function removeMovesInSameDiff(changes, moves) {
    const changesMonotonous = new MonotonousArray(changes);
    moves = moves.filter(m => {
        const diffBeforeEndOfMoveOriginal = changesMonotonous.findLastMonotonous(c => c.original.startLineNumber < m.original.endLineNumberExclusive)
            || new LineRangeMapping(new LineRange(1, 1), new LineRange(1, 1));
        const diffBeforeEndOfMoveModified = findLastMonotonous(changes, c => c.modified.startLineNumber < m.modified.endLineNumberExclusive);
        const differentDiffs = diffBeforeEndOfMoveOriginal !== diffBeforeEndOfMoveModified;
        return differentDiffs;
    });
    return moves;
}

export { computeMovedLines };
