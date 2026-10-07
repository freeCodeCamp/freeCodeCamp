import { forEachAdjacent } from '../../../../../base/common/arrays.js';
import { BugIndicatingError } from '../../../../../base/common/errors.js';
import { OffsetRange } from '../../../core/ranges/offsetRange.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class DiffAlgorithmResult {
    static trivial(seq1, seq2) {
        return new DiffAlgorithmResult([new SequenceDiff(OffsetRange.ofLength(seq1.length), OffsetRange.ofLength(seq2.length))], false);
    }
    static trivialTimedOut(seq1, seq2) {
        return new DiffAlgorithmResult([new SequenceDiff(OffsetRange.ofLength(seq1.length), OffsetRange.ofLength(seq2.length))], true);
    }
    constructor(diffs, 
    /**
     * Indicates if the time out was reached.
     * In that case, the diffs might be an approximation and the user should be asked to rerun the diff with more time.
     */
    hitTimeout) {
        this.diffs = diffs;
        this.hitTimeout = hitTimeout;
    }
}
class SequenceDiff {
    static invert(sequenceDiffs, doc1Length) {
        const result = [];
        forEachAdjacent(sequenceDiffs, (a, b) => {
            result.push(SequenceDiff.fromOffsetPairs(a ? a.getEndExclusives() : OffsetPair.zero, b ? b.getStarts() : new OffsetPair(doc1Length, (a ? a.seq2Range.endExclusive - a.seq1Range.endExclusive : 0) + doc1Length)));
        });
        return result;
    }
    static fromOffsetPairs(start, endExclusive) {
        return new SequenceDiff(new OffsetRange(start.offset1, endExclusive.offset1), new OffsetRange(start.offset2, endExclusive.offset2));
    }
    static assertSorted(sequenceDiffs) {
        let last = undefined;
        for (const cur of sequenceDiffs) {
            if (last) {
                if (!(last.seq1Range.endExclusive <= cur.seq1Range.start && last.seq2Range.endExclusive <= cur.seq2Range.start)) {
                    throw new BugIndicatingError('Sequence diffs must be sorted');
                }
            }
            last = cur;
        }
    }
    constructor(seq1Range, seq2Range) {
        this.seq1Range = seq1Range;
        this.seq2Range = seq2Range;
    }
    swap() {
        return new SequenceDiff(this.seq2Range, this.seq1Range);
    }
    toString() {
        return `${this.seq1Range} <-> ${this.seq2Range}`;
    }
    join(other) {
        return new SequenceDiff(this.seq1Range.join(other.seq1Range), this.seq2Range.join(other.seq2Range));
    }
    delta(offset) {
        if (offset === 0) {
            return this;
        }
        return new SequenceDiff(this.seq1Range.delta(offset), this.seq2Range.delta(offset));
    }
    deltaStart(offset) {
        if (offset === 0) {
            return this;
        }
        return new SequenceDiff(this.seq1Range.deltaStart(offset), this.seq2Range.deltaStart(offset));
    }
    deltaEnd(offset) {
        if (offset === 0) {
            return this;
        }
        return new SequenceDiff(this.seq1Range.deltaEnd(offset), this.seq2Range.deltaEnd(offset));
    }
    intersect(other) {
        const i1 = this.seq1Range.intersect(other.seq1Range);
        const i2 = this.seq2Range.intersect(other.seq2Range);
        if (!i1 || !i2) {
            return undefined;
        }
        return new SequenceDiff(i1, i2);
    }
    getStarts() {
        return new OffsetPair(this.seq1Range.start, this.seq2Range.start);
    }
    getEndExclusives() {
        return new OffsetPair(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
    }
}
class OffsetPair {
    static { this.zero = new OffsetPair(0, 0); }
    static { this.max = new OffsetPair(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER); }
    constructor(offset1, offset2) {
        this.offset1 = offset1;
        this.offset2 = offset2;
    }
    toString() {
        return `${this.offset1} <-> ${this.offset2}`;
    }
    delta(offset) {
        if (offset === 0) {
            return this;
        }
        return new OffsetPair(this.offset1 + offset, this.offset2 + offset);
    }
    equals(other) {
        return this.offset1 === other.offset1 && this.offset2 === other.offset2;
    }
}
class InfiniteTimeout {
    static { this.instance = new InfiniteTimeout(); }
    isValid() {
        return true;
    }
}
class DateTimeout {
    constructor(timeout) {
        this.timeout = timeout;
        this.startTime = Date.now();
        this.valid = true;
        if (timeout <= 0) {
            throw new BugIndicatingError('timeout must be positive');
        }
    }
    // Recommendation: Set a log-point `{this.disable()}` in the body
    isValid() {
        const valid = Date.now() - this.startTime < this.timeout;
        if (!valid && this.valid) {
            this.valid = false; // timeout reached
        }
        return this.valid;
    }
}

export { DateTimeout, DiffAlgorithmResult, InfiniteTimeout, OffsetPair, SequenceDiff };
