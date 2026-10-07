import { BugIndicatingError } from '../../../../base/common/errors.js';
import { OffsetRange } from '../ranges/offsetRange.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class BaseEdit {
    constructor(replacements) {
        this.replacements = replacements;
        let lastEndEx = -1;
        for (const replacement of replacements) {
            if (!(replacement.replaceRange.start >= lastEndEx)) {
                throw new BugIndicatingError(`Edits must be disjoint and sorted. Found ${replacement} after ${lastEndEx}`);
            }
            lastEndEx = replacement.replaceRange.endExclusive;
        }
    }
    toString() {
        const edits = this.replacements.map(e => e.toString()).join(', ');
        return `[${edits}]`;
    }
    /**
     * Normalizes the edit by removing empty replacements and joining touching replacements (if the replacements allow joining).
     * Two edits have an equal normalized edit if and only if they have the same effect on any input.
     *
     * ![](https://raw.githubusercontent.com/microsoft/vscode/refs/heads/main/src/vs/editor/common/core/edits/docs/BaseEdit_normalize.drawio.png)
     *
     * Invariant:
     * ```
     * (forall base: TEdit.apply(base).equals(other.apply(base))) <-> this.normalize().equals(other.normalize())
     * ```
     * and
     * ```
     * forall base: TEdit.apply(base).equals(this.normalize().apply(base))
     * ```
     *
     */
    normalize() {
        const newReplacements = [];
        let lastReplacement;
        for (const r of this.replacements) {
            if (r.getNewLength() === 0 && r.replaceRange.length === 0) {
                continue;
            }
            if (lastReplacement && lastReplacement.replaceRange.endExclusive === r.replaceRange.start) {
                const joined = lastReplacement.tryJoinTouching(r);
                if (joined) {
                    lastReplacement = joined;
                    continue;
                }
            }
            if (lastReplacement) {
                newReplacements.push(lastReplacement);
            }
            lastReplacement = r;
        }
        if (lastReplacement) {
            newReplacements.push(lastReplacement);
        }
        return this._createNew(newReplacements);
    }
    /**
     * Combines two edits into one with the same effect.
     *
     * ![](https://raw.githubusercontent.com/microsoft/vscode/refs/heads/main/src/vs/editor/common/core/edits/docs/BaseEdit_compose.drawio.png)
     *
     * Invariant:
     * ```
     * other.apply(this.apply(s0)) = this.compose(other).apply(s0)
     * ```
     */
    compose(other) {
        const edits1 = this.normalize();
        const edits2 = other.normalize();
        if (edits1.isEmpty()) {
            return edits2;
        }
        if (edits2.isEmpty()) {
            return edits1;
        }
        const edit1Queue = [...edits1.replacements];
        const result = [];
        let edit1ToEdit2 = 0;
        for (const r2 of edits2.replacements) {
            // Copy over edit1 unmodified until it touches edit2.
            while (true) {
                const r1 = edit1Queue[0];
                if (!r1 || r1.replaceRange.start + edit1ToEdit2 + r1.getNewLength() >= r2.replaceRange.start) {
                    break;
                }
                edit1Queue.shift();
                result.push(r1);
                edit1ToEdit2 += r1.getNewLength() - r1.replaceRange.length;
            }
            const firstEdit1ToEdit2 = edit1ToEdit2;
            let firstIntersecting; // or touching
            let lastIntersecting; // or touching
            while (true) {
                const r1 = edit1Queue[0];
                if (!r1 || r1.replaceRange.start + edit1ToEdit2 > r2.replaceRange.endExclusive) {
                    break;
                }
                // else we intersect, because the new end of edit1 is after or equal to our start
                if (!firstIntersecting) {
                    firstIntersecting = r1;
                }
                lastIntersecting = r1;
                edit1Queue.shift();
                edit1ToEdit2 += r1.getNewLength() - r1.replaceRange.length;
            }
            if (!firstIntersecting) {
                result.push(r2.delta(-edit1ToEdit2));
            }
            else {
                const newReplaceRangeStart = Math.min(firstIntersecting.replaceRange.start, r2.replaceRange.start - firstEdit1ToEdit2);
                const prefixLength = r2.replaceRange.start - (firstIntersecting.replaceRange.start + firstEdit1ToEdit2);
                if (prefixLength > 0) {
                    const prefix = firstIntersecting.slice(OffsetRange.emptyAt(newReplaceRangeStart), new OffsetRange(0, prefixLength));
                    result.push(prefix);
                }
                if (!lastIntersecting) {
                    throw new BugIndicatingError(`Invariant violation: lastIntersecting is undefined`);
                }
                const suffixLength = (lastIntersecting.replaceRange.endExclusive + edit1ToEdit2) - r2.replaceRange.endExclusive;
                if (suffixLength > 0) {
                    const e = lastIntersecting.slice(OffsetRange.ofStartAndLength(lastIntersecting.replaceRange.endExclusive, 0), new OffsetRange(lastIntersecting.getNewLength() - suffixLength, lastIntersecting.getNewLength()));
                    edit1Queue.unshift(e);
                    edit1ToEdit2 -= e.getNewLength() - e.replaceRange.length;
                }
                const newReplaceRange = new OffsetRange(newReplaceRangeStart, r2.replaceRange.endExclusive - edit1ToEdit2);
                const middle = r2.slice(newReplaceRange, new OffsetRange(0, r2.getNewLength()));
                result.push(middle);
            }
        }
        while (true) {
            const item = edit1Queue.shift();
            if (!item) {
                break;
            }
            result.push(item);
        }
        return this._createNew(result).normalize();
    }
    /**
     * Returns the range of each replacement in the applied value.
    */
    getNewRanges() {
        const ranges = [];
        let offset = 0;
        for (const e of this.replacements) {
            ranges.push(OffsetRange.ofStartAndLength(e.replaceRange.start + offset, e.getNewLength()));
            offset += e.getLengthDelta();
        }
        return ranges;
    }
    isEmpty() {
        return this.replacements.length === 0;
    }
}
class BaseReplacement {
    constructor(
    /**
     * The range to be replaced.
    */
    replaceRange) {
        this.replaceRange = replaceRange;
    }
    delta(offset) {
        return this.slice(this.replaceRange.delta(offset), new OffsetRange(0, this.getNewLength()));
    }
    getLengthDelta() {
        return this.getNewLength() - this.replaceRange.length;
    }
    toString() {
        return `{ ${this.replaceRange.toString()} -> ${this.getNewLength()} }`;
    }
    get isEmpty() {
        return this.getNewLength() === 0 && this.replaceRange.length === 0;
    }
    getRangeAfterReplace() {
        return new OffsetRange(this.replaceRange.start, this.replaceRange.start + this.getNewLength());
    }
}

export { BaseEdit, BaseReplacement };
