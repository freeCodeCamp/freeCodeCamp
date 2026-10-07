import { forEachWithNeighbors } from '../../../../base/common/arrays.js';
import { OffsetRange } from '../../core/ranges/offsetRange.js';
import { SequenceDiff, OffsetPair } from './algorithms/diffAlgorithm.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function optimizeSequenceDiffs(sequence1, sequence2, sequenceDiffs) {
    let result = sequenceDiffs;
    result = joinSequenceDiffsByShifting(sequence1, sequence2, result);
    // Sometimes, calling this function twice improves the result.
    // Uncomment the second invocation and run the tests to see the difference.
    result = joinSequenceDiffsByShifting(sequence1, sequence2, result);
    result = shiftSequenceDiffs(sequence1, sequence2, result);
    return result;
}
/**
 * This function fixes issues like this:
 * ```
 * import { Baz, Bar } from "foo";
 * ```
 * <->
 * ```
 * import { Baz, Bar, Foo } from "foo";
 * ```
 * Computed diff: [ {Add "," after Bar}, {Add "Foo " after space} }
 * Improved diff: [{Add ", Foo" after Bar}]
 */
function joinSequenceDiffsByShifting(sequence1, sequence2, sequenceDiffs) {
    if (sequenceDiffs.length === 0) {
        return sequenceDiffs;
    }
    const result = [];
    result.push(sequenceDiffs[0]);
    // First move them all to the left as much as possible and join them if possible
    for (let i = 1; i < sequenceDiffs.length; i++) {
        const prevResult = result[result.length - 1];
        let cur = sequenceDiffs[i];
        if (cur.seq1Range.isEmpty || cur.seq2Range.isEmpty) {
            const length = cur.seq1Range.start - prevResult.seq1Range.endExclusive;
            let d;
            for (d = 1; d <= length; d++) {
                if (sequence1.getElement(cur.seq1Range.start - d) !== sequence1.getElement(cur.seq1Range.endExclusive - d) ||
                    sequence2.getElement(cur.seq2Range.start - d) !== sequence2.getElement(cur.seq2Range.endExclusive - d)) {
                    break;
                }
            }
            d--;
            if (d === length) {
                // Merge previous and current diff
                result[result.length - 1] = new SequenceDiff(new OffsetRange(prevResult.seq1Range.start, cur.seq1Range.endExclusive - length), new OffsetRange(prevResult.seq2Range.start, cur.seq2Range.endExclusive - length));
                continue;
            }
            cur = cur.delta(-d);
        }
        result.push(cur);
    }
    const result2 = [];
    // Then move them all to the right and join them again if possible
    for (let i = 0; i < result.length - 1; i++) {
        const nextResult = result[i + 1];
        let cur = result[i];
        if (cur.seq1Range.isEmpty || cur.seq2Range.isEmpty) {
            const length = nextResult.seq1Range.start - cur.seq1Range.endExclusive;
            let d;
            for (d = 0; d < length; d++) {
                if (!sequence1.isStronglyEqual(cur.seq1Range.start + d, cur.seq1Range.endExclusive + d) ||
                    !sequence2.isStronglyEqual(cur.seq2Range.start + d, cur.seq2Range.endExclusive + d)) {
                    break;
                }
            }
            if (d === length) {
                // Merge previous and current diff, write to result!
                result[i + 1] = new SequenceDiff(new OffsetRange(cur.seq1Range.start + length, nextResult.seq1Range.endExclusive), new OffsetRange(cur.seq2Range.start + length, nextResult.seq2Range.endExclusive));
                continue;
            }
            if (d > 0) {
                cur = cur.delta(d);
            }
        }
        result2.push(cur);
    }
    if (result.length > 0) {
        result2.push(result[result.length - 1]);
    }
    return result2;
}
// align character level diffs at whitespace characters
// import { IBar } from "foo";
// import { I[Arr, I]Bar } from "foo";
// ->
// import { [IArr, ]IBar } from "foo";
// import { ITransaction, observableValue, transaction } from 'vs/base/common/observable';
// import { ITransaction, observable[FromEvent, observable]Value, transaction } from 'vs/base/common/observable';
// ->
// import { ITransaction, [observableFromEvent, ]observableValue, transaction } from 'vs/base/common/observable';
// collectBrackets(level + 1, levelPerBracketType);
// collectBrackets(level + 1, levelPerBracket[ + 1, levelPerBracket]Type);
// ->
// collectBrackets(level + 1, [levelPerBracket + 1, ]levelPerBracketType);
function shiftSequenceDiffs(sequence1, sequence2, sequenceDiffs) {
    if (!sequence1.getBoundaryScore || !sequence2.getBoundaryScore) {
        return sequenceDiffs;
    }
    for (let i = 0; i < sequenceDiffs.length; i++) {
        const prevDiff = (i > 0 ? sequenceDiffs[i - 1] : undefined);
        const diff = sequenceDiffs[i];
        const nextDiff = (i + 1 < sequenceDiffs.length ? sequenceDiffs[i + 1] : undefined);
        const seq1ValidRange = new OffsetRange(prevDiff ? prevDiff.seq1Range.endExclusive + 1 : 0, nextDiff ? nextDiff.seq1Range.start - 1 : sequence1.length);
        const seq2ValidRange = new OffsetRange(prevDiff ? prevDiff.seq2Range.endExclusive + 1 : 0, nextDiff ? nextDiff.seq2Range.start - 1 : sequence2.length);
        if (diff.seq1Range.isEmpty) {
            sequenceDiffs[i] = shiftDiffToBetterPosition(diff, sequence1, sequence2, seq1ValidRange, seq2ValidRange);
        }
        else if (diff.seq2Range.isEmpty) {
            sequenceDiffs[i] = shiftDiffToBetterPosition(diff.swap(), sequence2, sequence1, seq2ValidRange, seq1ValidRange).swap();
        }
    }
    return sequenceDiffs;
}
function shiftDiffToBetterPosition(diff, sequence1, sequence2, seq1ValidRange, seq2ValidRange) {
    const maxShiftLimit = 100; // To prevent performance issues
    // don't touch previous or next!
    let deltaBefore = 1;
    while (diff.seq1Range.start - deltaBefore >= seq1ValidRange.start &&
        diff.seq2Range.start - deltaBefore >= seq2ValidRange.start &&
        sequence2.isStronglyEqual(diff.seq2Range.start - deltaBefore, diff.seq2Range.endExclusive - deltaBefore) && deltaBefore < maxShiftLimit) {
        deltaBefore++;
    }
    deltaBefore--;
    let deltaAfter = 0;
    while (diff.seq1Range.start + deltaAfter < seq1ValidRange.endExclusive &&
        diff.seq2Range.endExclusive + deltaAfter < seq2ValidRange.endExclusive &&
        sequence2.isStronglyEqual(diff.seq2Range.start + deltaAfter, diff.seq2Range.endExclusive + deltaAfter) && deltaAfter < maxShiftLimit) {
        deltaAfter++;
    }
    if (deltaBefore === 0 && deltaAfter === 0) {
        return diff;
    }
    // Visualize `[sequence1.text, diff.seq1Range.start + deltaAfter]`
    // and `[sequence2.text, diff.seq2Range.start + deltaAfter, diff.seq2Range.endExclusive + deltaAfter]`
    let bestDelta = 0;
    let bestScore = -1;
    // find best scored delta
    for (let delta = -deltaBefore; delta <= deltaAfter; delta++) {
        const seq2OffsetStart = diff.seq2Range.start + delta;
        const seq2OffsetEndExclusive = diff.seq2Range.endExclusive + delta;
        const seq1Offset = diff.seq1Range.start + delta;
        const score = sequence1.getBoundaryScore(seq1Offset) + sequence2.getBoundaryScore(seq2OffsetStart) + sequence2.getBoundaryScore(seq2OffsetEndExclusive);
        if (score > bestScore) {
            bestScore = score;
            bestDelta = delta;
        }
    }
    return diff.delta(bestDelta);
}
function removeShortMatches(sequence1, sequence2, sequenceDiffs) {
    const result = [];
    for (const s of sequenceDiffs) {
        const last = result[result.length - 1];
        if (!last) {
            result.push(s);
            continue;
        }
        if (s.seq1Range.start - last.seq1Range.endExclusive <= 2 || s.seq2Range.start - last.seq2Range.endExclusive <= 2) {
            result[result.length - 1] = new SequenceDiff(last.seq1Range.join(s.seq1Range), last.seq2Range.join(s.seq2Range));
        }
        else {
            result.push(s);
        }
    }
    return result;
}
function extendDiffsToEntireWordIfAppropriate(sequence1, sequence2, sequenceDiffs, findParent, force = false) {
    const equalMappings = SequenceDiff.invert(sequenceDiffs, sequence1.length);
    const additional = [];
    let lastPoint = new OffsetPair(0, 0);
    function scanWord(pair, equalMapping) {
        if (pair.offset1 < lastPoint.offset1 || pair.offset2 < lastPoint.offset2) {
            return;
        }
        const w1 = findParent(sequence1, pair.offset1);
        const w2 = findParent(sequence2, pair.offset2);
        if (!w1 || !w2) {
            return;
        }
        let w = new SequenceDiff(w1, w2);
        const equalPart = w.intersect(equalMapping);
        let equalChars1 = equalPart.seq1Range.length;
        let equalChars2 = equalPart.seq2Range.length;
        // The words do not touch previous equals mappings, as we would have processed them already.
        // But they might touch the next ones.
        while (equalMappings.length > 0) {
            const next = equalMappings[0];
            const intersects = next.seq1Range.intersects(w.seq1Range) || next.seq2Range.intersects(w.seq2Range);
            if (!intersects) {
                break;
            }
            const v1 = findParent(sequence1, next.seq1Range.start);
            const v2 = findParent(sequence2, next.seq2Range.start);
            // Because there is an intersection, we know that the words are not empty.
            const v = new SequenceDiff(v1, v2);
            const equalPart = v.intersect(next);
            equalChars1 += equalPart.seq1Range.length;
            equalChars2 += equalPart.seq2Range.length;
            w = w.join(v);
            if (w.seq1Range.endExclusive >= next.seq1Range.endExclusive) {
                // The word extends beyond the next equal mapping.
                equalMappings.shift();
            }
            else {
                break;
            }
        }
        if ((force && equalChars1 + equalChars2 < w.seq1Range.length + w.seq2Range.length) || equalChars1 + equalChars2 < (w.seq1Range.length + w.seq2Range.length) * 2 / 3) {
            additional.push(w);
        }
        lastPoint = w.getEndExclusives();
    }
    while (equalMappings.length > 0) {
        const next = equalMappings.shift();
        if (next.seq1Range.isEmpty) {
            continue;
        }
        scanWord(next.getStarts(), next);
        // The equal parts are not empty, so -1 gives us a character that is equal in both parts.
        scanWord(next.getEndExclusives().delta(-1), next);
    }
    const merged = mergeSequenceDiffs(sequenceDiffs, additional);
    return merged;
}
function mergeSequenceDiffs(sequenceDiffs1, sequenceDiffs2) {
    const result = [];
    while (sequenceDiffs1.length > 0 || sequenceDiffs2.length > 0) {
        const sd1 = sequenceDiffs1[0];
        const sd2 = sequenceDiffs2[0];
        let next;
        if (sd1 && (!sd2 || sd1.seq1Range.start < sd2.seq1Range.start)) {
            next = sequenceDiffs1.shift();
        }
        else {
            next = sequenceDiffs2.shift();
        }
        if (result.length > 0 && result[result.length - 1].seq1Range.endExclusive >= next.seq1Range.start) {
            result[result.length - 1] = result[result.length - 1].join(next);
        }
        else {
            result.push(next);
        }
    }
    return result;
}
function removeVeryShortMatchingLinesBetweenDiffs(sequence1, _sequence2, sequenceDiffs) {
    let diffs = sequenceDiffs;
    if (diffs.length === 0) {
        return diffs;
    }
    let counter = 0;
    let shouldRepeat;
    do {
        shouldRepeat = false;
        const result = [
            diffs[0]
        ];
        for (let i = 1; i < diffs.length; i++) {
            const cur = diffs[i];
            const lastResult = result[result.length - 1];
            function shouldJoinDiffs(before, after) {
                const unchangedRange = new OffsetRange(lastResult.seq1Range.endExclusive, cur.seq1Range.start);
                const unchangedText = sequence1.getText(unchangedRange);
                const unchangedTextWithoutWs = unchangedText.replace(/\s/g, '');
                if (unchangedTextWithoutWs.length <= 4
                    && (before.seq1Range.length + before.seq2Range.length > 5 || after.seq1Range.length + after.seq2Range.length > 5)) {
                    return true;
                }
                return false;
            }
            const shouldJoin = shouldJoinDiffs(lastResult, cur);
            if (shouldJoin) {
                shouldRepeat = true;
                result[result.length - 1] = result[result.length - 1].join(cur);
            }
            else {
                result.push(cur);
            }
        }
        diffs = result;
    } while (counter++ < 10 && shouldRepeat);
    return diffs;
}
function removeVeryShortMatchingTextBetweenLongDiffs(sequence1, sequence2, sequenceDiffs) {
    let diffs = sequenceDiffs;
    if (diffs.length === 0) {
        return diffs;
    }
    let counter = 0;
    let shouldRepeat;
    do {
        shouldRepeat = false;
        const result = [
            diffs[0]
        ];
        for (let i = 1; i < diffs.length; i++) {
            const cur = diffs[i];
            const lastResult = result[result.length - 1];
            function shouldJoinDiffs(before, after) {
                const unchangedRange = new OffsetRange(lastResult.seq1Range.endExclusive, cur.seq1Range.start);
                const unchangedLineCount = sequence1.countLinesIn(unchangedRange);
                if (unchangedLineCount > 5 || unchangedRange.length > 500) {
                    return false;
                }
                const unchangedText = sequence1.getText(unchangedRange).trim();
                if (unchangedText.length > 20 || unchangedText.split(/\r\n|\r|\n/).length > 1) {
                    return false;
                }
                const beforeLineCount1 = sequence1.countLinesIn(before.seq1Range);
                const beforeSeq1Length = before.seq1Range.length;
                const beforeLineCount2 = sequence2.countLinesIn(before.seq2Range);
                const beforeSeq2Length = before.seq2Range.length;
                const afterLineCount1 = sequence1.countLinesIn(after.seq1Range);
                const afterSeq1Length = after.seq1Range.length;
                const afterLineCount2 = sequence2.countLinesIn(after.seq2Range);
                const afterSeq2Length = after.seq2Range.length;
                // TODO: Maybe a neural net can be used to derive the result from these numbers
                const max = 2 * 40 + 50;
                function cap(v) {
                    return Math.min(v, max);
                }
                if (Math.pow(Math.pow(cap(beforeLineCount1 * 40 + beforeSeq1Length), 1.5) + Math.pow(cap(beforeLineCount2 * 40 + beforeSeq2Length), 1.5), 1.5)
                    + Math.pow(Math.pow(cap(afterLineCount1 * 40 + afterSeq1Length), 1.5) + Math.pow(cap(afterLineCount2 * 40 + afterSeq2Length), 1.5), 1.5) > ((max ** 1.5) ** 1.5) * 1.3) {
                    return true;
                }
                return false;
            }
            const shouldJoin = shouldJoinDiffs(lastResult, cur);
            if (shouldJoin) {
                shouldRepeat = true;
                result[result.length - 1] = result[result.length - 1].join(cur);
            }
            else {
                result.push(cur);
            }
        }
        diffs = result;
    } while (counter++ < 10 && shouldRepeat);
    const newDiffs = [];
    // Remove short suffixes/prefixes
    forEachWithNeighbors(diffs, (prev, cur, next) => {
        let newDiff = cur;
        function shouldMarkAsChanged(text) {
            return text.length > 0 && text.trim().length <= 3 && cur.seq1Range.length + cur.seq2Range.length > 100;
        }
        const fullRange1 = sequence1.extendToFullLines(cur.seq1Range);
        const prefix = sequence1.getText(new OffsetRange(fullRange1.start, cur.seq1Range.start));
        if (shouldMarkAsChanged(prefix)) {
            newDiff = newDiff.deltaStart(-prefix.length);
        }
        const suffix = sequence1.getText(new OffsetRange(cur.seq1Range.endExclusive, fullRange1.endExclusive));
        if (shouldMarkAsChanged(suffix)) {
            newDiff = newDiff.deltaEnd(suffix.length);
        }
        const availableSpace = SequenceDiff.fromOffsetPairs(prev ? prev.getEndExclusives() : OffsetPair.zero, next ? next.getStarts() : OffsetPair.max);
        const result = newDiff.intersect(availableSpace);
        if (newDiffs.length > 0 && result.getStarts().equals(newDiffs[newDiffs.length - 1].getEndExclusives())) {
            newDiffs[newDiffs.length - 1] = newDiffs[newDiffs.length - 1].join(result);
        }
        else {
            newDiffs.push(result);
        }
    });
    return newDiffs;
}

export { extendDiffsToEntireWordIfAppropriate, optimizeSequenceDiffs, removeShortMatches, removeVeryShortMatchingLinesBetweenDiffs, removeVeryShortMatchingTextBetweenLongDiffs };
