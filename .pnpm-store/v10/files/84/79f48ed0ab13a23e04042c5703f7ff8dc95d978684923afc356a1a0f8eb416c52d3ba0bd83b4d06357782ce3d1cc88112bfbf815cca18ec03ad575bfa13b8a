import { BugIndicatingError } from '../../../../base/common/errors.js';
import { OffsetRange } from './offsetRange.js';
import { Range } from '../range.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Represents a 1-based range of columns.
 * Use {@lik OffsetRange} to represent a 0-based range.
*/
class ColumnRange {
    constructor(
    /** 1-based */
    startColumn, endColumnExclusive) {
        this.startColumn = startColumn;
        this.endColumnExclusive = endColumnExclusive;
        if (startColumn > endColumnExclusive) {
            throw new BugIndicatingError(`startColumn ${startColumn} cannot be after endColumnExclusive ${endColumnExclusive}`);
        }
    }
    toRange(lineNumber) {
        return new Range(lineNumber, this.startColumn, lineNumber, this.endColumnExclusive);
    }
    equals(other) {
        return this.startColumn === other.startColumn
            && this.endColumnExclusive === other.endColumnExclusive;
    }
    toZeroBasedOffsetRange() {
        return new OffsetRange(this.startColumn - 1, this.endColumnExclusive - 1);
    }
}

export { ColumnRange };
