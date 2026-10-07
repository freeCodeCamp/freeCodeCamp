import { OffsetRange } from '../../../core/ranges/offsetRange.js';
import { InfiniteTimeout, DiffAlgorithmResult, SequenceDiff } from './diffAlgorithm.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * An O(ND) diff algorithm that has a quadratic space worst-case complexity.
*/
class MyersDiffAlgorithm {
    compute(seq1, seq2, timeout = InfiniteTimeout.instance) {
        // These are common special cases.
        // The early return improves performance dramatically.
        if (seq1.length === 0 || seq2.length === 0) {
            return DiffAlgorithmResult.trivial(seq1, seq2);
        }
        const seqX = seq1; // Text on the x axis
        const seqY = seq2; // Text on the y axis
        function getXAfterSnake(x, y) {
            while (x < seqX.length && y < seqY.length && seqX.getElement(x) === seqY.getElement(y)) {
                x++;
                y++;
            }
            return x;
        }
        let d = 0;
        // V[k]: X value of longest d-line that ends in diagonal k.
        // d-line: path from (0,0) to (x,y) that uses exactly d non-diagonals.
        // diagonal k: Set of points (x,y) with x-y = k.
        // k=1 -> (1,0),(2,1)
        const V = new FastInt32Array();
        V.set(0, getXAfterSnake(0, 0));
        const paths = new FastArrayNegativeIndices();
        paths.set(0, V.get(0) === 0 ? null : new SnakePath(null, 0, 0, V.get(0)));
        let k = 0;
        loop: while (true) {
            d++;
            if (!timeout.isValid()) {
                return DiffAlgorithmResult.trivialTimedOut(seqX, seqY);
            }
            // The paper has `for (k = -d; k <= d; k += 2)`, but we can ignore diagonals that cannot influence the result.
            const lowerBound = -Math.min(d, seqY.length + (d % 2));
            const upperBound = Math.min(d, seqX.length + (d % 2));
            for (k = lowerBound; k <= upperBound; k += 2) {
                // We can use the X values of (d-1)-lines to compute X value of the longest d-lines.
                const maxXofDLineTop = k === upperBound ? -1 : V.get(k + 1); // We take a vertical non-diagonal (add a symbol in seqX)
                const maxXofDLineLeft = k === lowerBound ? -1 : V.get(k - 1) + 1; // We take a horizontal non-diagonal (+1 x) (delete a symbol in seqX)
                const x = Math.min(Math.max(maxXofDLineTop, maxXofDLineLeft), seqX.length);
                const y = x - k;
                if (x > seqX.length || y > seqY.length) {
                    // This diagonal is irrelevant for the result.
                    // TODO: Don't pay the cost for this in the next iteration.
                    continue;
                }
                const newMaxX = getXAfterSnake(x, y);
                V.set(k, newMaxX);
                const lastPath = x === maxXofDLineTop ? paths.get(k + 1) : paths.get(k - 1);
                paths.set(k, newMaxX !== x ? new SnakePath(lastPath, x, y, newMaxX - x) : lastPath);
                if (V.get(k) === seqX.length && V.get(k) - k === seqY.length) {
                    break loop;
                }
            }
        }
        let path = paths.get(k);
        const result = [];
        let lastAligningPosS1 = seqX.length;
        let lastAligningPosS2 = seqY.length;
        while (true) {
            const endX = path ? path.x + path.length : 0;
            const endY = path ? path.y + path.length : 0;
            if (endX !== lastAligningPosS1 || endY !== lastAligningPosS2) {
                result.push(new SequenceDiff(new OffsetRange(endX, lastAligningPosS1), new OffsetRange(endY, lastAligningPosS2)));
            }
            if (!path) {
                break;
            }
            lastAligningPosS1 = path.x;
            lastAligningPosS2 = path.y;
            path = path.prev;
        }
        result.reverse();
        return new DiffAlgorithmResult(result, false);
    }
}
class SnakePath {
    constructor(prev, x, y, length) {
        this.prev = prev;
        this.x = x;
        this.y = y;
        this.length = length;
    }
}
/**
 * An array that supports fast negative indices.
*/
class FastInt32Array {
    constructor() {
        this.positiveArr = new Int32Array(10);
        this.negativeArr = new Int32Array(10);
    }
    get(idx) {
        if (idx < 0) {
            idx = -idx - 1;
            return this.negativeArr[idx];
        }
        else {
            return this.positiveArr[idx];
        }
    }
    set(idx, value) {
        if (idx < 0) {
            idx = -idx - 1;
            if (idx >= this.negativeArr.length) {
                const arr = this.negativeArr;
                this.negativeArr = new Int32Array(arr.length * 2);
                this.negativeArr.set(arr);
            }
            this.negativeArr[idx] = value;
        }
        else {
            if (idx >= this.positiveArr.length) {
                const arr = this.positiveArr;
                this.positiveArr = new Int32Array(arr.length * 2);
                this.positiveArr.set(arr);
            }
            this.positiveArr[idx] = value;
        }
    }
}
/**
 * An array that supports fast negative indices.
*/
class FastArrayNegativeIndices {
    constructor() {
        this.positiveArr = [];
        this.negativeArr = [];
    }
    get(idx) {
        if (idx < 0) {
            idx = -idx - 1;
            return this.negativeArr[idx];
        }
        else {
            return this.positiveArr[idx];
        }
    }
    set(idx, value) {
        if (idx < 0) {
            idx = -idx - 1;
            this.negativeArr[idx] = value;
        }
        else {
            this.positiveArr[idx] = value;
        }
    }
}

export { MyersDiffAlgorithm };
