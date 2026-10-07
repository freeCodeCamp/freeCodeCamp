import { arrayInsert } from '../../../base/common/arrays.js';
import { toUint32 } from '../../../base/common/uint.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class PrefixSumComputer {
    constructor(values) {
        this.values = values;
        this.prefixSum = new Uint32Array(values.length);
        this.prefixSumValidIndex = new Int32Array(1);
        this.prefixSumValidIndex[0] = -1;
    }
    insertValues(insertIndex, insertValues) {
        insertIndex = toUint32(insertIndex);
        const oldValues = this.values;
        const oldPrefixSum = this.prefixSum;
        const insertValuesLen = insertValues.length;
        if (insertValuesLen === 0) {
            return false;
        }
        this.values = new Uint32Array(oldValues.length + insertValuesLen);
        this.values.set(oldValues.subarray(0, insertIndex), 0);
        this.values.set(oldValues.subarray(insertIndex), insertIndex + insertValuesLen);
        this.values.set(insertValues, insertIndex);
        if (insertIndex - 1 < this.prefixSumValidIndex[0]) {
            this.prefixSumValidIndex[0] = insertIndex - 1;
        }
        this.prefixSum = new Uint32Array(this.values.length);
        if (this.prefixSumValidIndex[0] >= 0) {
            this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
        }
        return true;
    }
    setValue(index, value) {
        index = toUint32(index);
        value = toUint32(value);
        if (this.values[index] === value) {
            return false;
        }
        this.values[index] = value;
        if (index - 1 < this.prefixSumValidIndex[0]) {
            this.prefixSumValidIndex[0] = index - 1;
        }
        return true;
    }
    removeValues(startIndex, count) {
        startIndex = toUint32(startIndex);
        count = toUint32(count);
        const oldValues = this.values;
        const oldPrefixSum = this.prefixSum;
        if (startIndex >= oldValues.length) {
            return false;
        }
        const maxCount = oldValues.length - startIndex;
        if (count >= maxCount) {
            count = maxCount;
        }
        if (count === 0) {
            return false;
        }
        this.values = new Uint32Array(oldValues.length - count);
        this.values.set(oldValues.subarray(0, startIndex), 0);
        this.values.set(oldValues.subarray(startIndex + count), startIndex);
        this.prefixSum = new Uint32Array(this.values.length);
        if (startIndex - 1 < this.prefixSumValidIndex[0]) {
            this.prefixSumValidIndex[0] = startIndex - 1;
        }
        if (this.prefixSumValidIndex[0] >= 0) {
            this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
        }
        return true;
    }
    getTotalSum() {
        if (this.values.length === 0) {
            return 0;
        }
        return this._getPrefixSum(this.values.length - 1);
    }
    /**
     * Returns the sum of the first `index + 1` many items.
     * @returns `SUM(0 <= j <= index, values[j])`.
     */
    getPrefixSum(index) {
        if (index < 0) {
            return 0;
        }
        index = toUint32(index);
        return this._getPrefixSum(index);
    }
    _getPrefixSum(index) {
        if (index <= this.prefixSumValidIndex[0]) {
            return this.prefixSum[index];
        }
        let startIndex = this.prefixSumValidIndex[0] + 1;
        if (startIndex === 0) {
            this.prefixSum[0] = this.values[0];
            startIndex++;
        }
        if (index >= this.values.length) {
            index = this.values.length - 1;
        }
        for (let i = startIndex; i <= index; i++) {
            this.prefixSum[i] = this.prefixSum[i - 1] + this.values[i];
        }
        this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], index);
        return this.prefixSum[index];
    }
    getIndexOf(sum) {
        sum = Math.floor(sum);
        // Compute all sums (to get a fully valid prefixSum)
        this.getTotalSum();
        let low = 0;
        let high = this.values.length - 1;
        let mid = 0;
        let midStop = 0;
        let midStart = 0;
        while (low <= high) {
            mid = low + ((high - low) / 2) | 0;
            midStop = this.prefixSum[mid];
            midStart = midStop - this.values[mid];
            if (sum < midStart) {
                high = mid - 1;
            }
            else if (sum >= midStop) {
                low = mid + 1;
            }
            else {
                break;
            }
        }
        return new PrefixSumIndexOfResult(mid, sum - midStart);
    }
}
/**
 * {@link getIndexOf} has an amortized runtime complexity of O(1).
 *
 * ({@link PrefixSumComputer.getIndexOf} is just  O(log n))
*/
class ConstantTimePrefixSumComputer {
    constructor(values) {
        this._values = values;
        this._isValid = false;
        this._validEndIndex = -1;
        this._prefixSum = [];
        this._indexBySum = [];
    }
    /**
     * @returns SUM(0 <= j < values.length, values[j])
     */
    getTotalSum() {
        this._ensureValid();
        return this._indexBySum.length;
    }
    /**
     * Returns the sum of the first `count` many items.
     * @returns `SUM(0 <= j < count, values[j])`.
     */
    getPrefixSum(count) {
        this._ensureValid();
        if (count === 0) {
            return 0;
        }
        return this._prefixSum[count - 1];
    }
    /**
     * @returns `result`, such that `getPrefixSum(result.index) + result.remainder = sum`
     */
    getIndexOf(sum) {
        this._ensureValid();
        const idx = this._indexBySum[sum];
        const viewLinesAbove = idx > 0 ? this._prefixSum[idx - 1] : 0;
        return new PrefixSumIndexOfResult(idx, sum - viewLinesAbove);
    }
    removeValues(start, deleteCount) {
        this._values.splice(start, deleteCount);
        this._invalidate(start);
    }
    insertValues(insertIndex, insertArr) {
        this._values = arrayInsert(this._values, insertIndex, insertArr);
        this._invalidate(insertIndex);
    }
    _invalidate(index) {
        this._isValid = false;
        this._validEndIndex = Math.min(this._validEndIndex, index - 1);
    }
    _ensureValid() {
        if (this._isValid) {
            return;
        }
        for (let i = this._validEndIndex + 1, len = this._values.length; i < len; i++) {
            const value = this._values[i];
            const sumAbove = i > 0 ? this._prefixSum[i - 1] : 0;
            this._prefixSum[i] = sumAbove + value;
            for (let j = 0; j < value; j++) {
                this._indexBySum[sumAbove + j] = i;
            }
        }
        // trim things
        this._prefixSum.length = this._values.length;
        this._indexBySum.length = this._prefixSum[this._prefixSum.length - 1];
        // mark as valid
        this._isValid = true;
        this._validEndIndex = this._values.length - 1;
    }
    setValue(index, value) {
        if (this._values[index] === value) {
            // no change
            return;
        }
        this._values[index] = value;
        this._invalidate(index);
    }
}
class PrefixSumIndexOfResult {
    constructor(index, remainder) {
        this.index = index;
        this.remainder = remainder;
        this._prefixSumIndexOfResultBrand = undefined;
        this.index = index;
        this.remainder = remainder;
    }
}

export { ConstantTimePrefixSumComputer, PrefixSumComputer, PrefixSumIndexOfResult };
