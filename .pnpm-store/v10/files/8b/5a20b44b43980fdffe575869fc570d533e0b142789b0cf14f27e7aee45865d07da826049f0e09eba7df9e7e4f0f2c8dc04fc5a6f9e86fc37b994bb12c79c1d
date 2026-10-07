import { singleLetterHash } from '../../../base/common/strings.js';
import { LineHeightsManager } from './lineHeights.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class PendingChanges {
    constructor() {
        this._hasPending = false;
        this._inserts = [];
        this._changes = [];
        this._removes = [];
    }
    insert(x) {
        this._hasPending = true;
        this._inserts.push(x);
    }
    change(x) {
        this._hasPending = true;
        this._changes.push(x);
    }
    remove(x) {
        this._hasPending = true;
        this._removes.push(x);
    }
    commit(linesLayout) {
        if (!this._hasPending) {
            return;
        }
        const inserts = this._inserts;
        const changes = this._changes;
        const removes = this._removes;
        this._hasPending = false;
        this._inserts = [];
        this._changes = [];
        this._removes = [];
        linesLayout._commitPendingChanges(inserts, changes, removes);
    }
}
class EditorWhitespace {
    constructor(id, afterLineNumber, ordinal, height, minWidth) {
        this.id = id;
        this.afterLineNumber = afterLineNumber;
        this.ordinal = ordinal;
        this.height = height;
        this.minWidth = minWidth;
        this.prefixSum = 0;
    }
}
/**
 * Layouting of objects that take vertical space (by having a height) and push down other objects.
 *
 * These objects are basically either text (lines) or spaces between those lines (whitespaces).
 * This provides commodity operations for working with lines that contain whitespace that pushes lines lower (vertically).
 */
class LinesLayout {
    static { this.INSTANCE_COUNT = 0; }
    constructor(lineCount, defaultLineHeight, paddingTop, paddingBottom, customLineHeightData) {
        this._instanceId = singleLetterHash(++LinesLayout.INSTANCE_COUNT);
        this._pendingChanges = new PendingChanges();
        this._lastWhitespaceId = 0;
        this._arr = [];
        this._prefixSumValidIndex = -1;
        this._minWidth = -1; /* marker for not being computed */
        this._lineCount = lineCount;
        this._paddingTop = paddingTop;
        this._paddingBottom = paddingBottom;
        this._lineHeightsManager = new LineHeightsManager(defaultLineHeight, customLineHeightData);
    }
    /**
     * Find the insertion index for a new value inside a sorted array of values.
     * If the value is already present in the sorted array, the insertion index will be after the already existing value.
     */
    static findInsertionIndex(arr, afterLineNumber, ordinal) {
        let low = 0;
        let high = arr.length;
        while (low < high) {
            const mid = ((low + high) >>> 1);
            if (afterLineNumber === arr[mid].afterLineNumber) {
                if (ordinal < arr[mid].ordinal) {
                    high = mid;
                }
                else {
                    low = mid + 1;
                }
            }
            else if (afterLineNumber < arr[mid].afterLineNumber) {
                high = mid;
            }
            else {
                low = mid + 1;
            }
        }
        return low;
    }
    /**
     * Change the height of a line in pixels.
     */
    setDefaultLineHeight(lineHeight) {
        this._lineHeightsManager.defaultLineHeight = lineHeight;
    }
    /**
     * Changes the padding used to calculate vertical offsets.
     */
    setPadding(paddingTop, paddingBottom) {
        this._paddingTop = paddingTop;
        this._paddingBottom = paddingBottom;
    }
    /**
     * Set the number of lines.
     *
     * @param lineCount New number of lines.
     */
    onFlushed(lineCount, customLineHeightData) {
        this._lineCount = lineCount;
        this._lineHeightsManager = new LineHeightsManager(this._lineHeightsManager.defaultLineHeight, customLineHeightData);
    }
    changeLineHeights(callback) {
        let hadAChange = false;
        try {
            const accessor = {
                insertOrChangeCustomLineHeight: (decorationId, startLineNumber, endLineNumber, lineHeight) => {
                    hadAChange = true;
                    this._lineHeightsManager.insertOrChangeCustomLineHeight(decorationId, startLineNumber, endLineNumber, lineHeight);
                },
                removeCustomLineHeight: (decorationId) => {
                    hadAChange = true;
                    this._lineHeightsManager.removeCustomLineHeight(decorationId);
                }
            };
            callback(accessor);
        }
        finally {
            this._lineHeightsManager.commit();
        }
        return hadAChange;
    }
    changeWhitespace(callback) {
        let hadAChange = false;
        try {
            const accessor = {
                insertWhitespace: (afterLineNumber, ordinal, heightInPx, minWidth) => {
                    hadAChange = true;
                    afterLineNumber = afterLineNumber | 0;
                    ordinal = ordinal | 0;
                    heightInPx = heightInPx | 0;
                    minWidth = minWidth | 0;
                    const id = this._instanceId + (++this._lastWhitespaceId);
                    this._pendingChanges.insert(new EditorWhitespace(id, afterLineNumber, ordinal, heightInPx, minWidth));
                    return id;
                },
                changeOneWhitespace: (id, newAfterLineNumber, newHeight) => {
                    hadAChange = true;
                    newAfterLineNumber = newAfterLineNumber | 0;
                    newHeight = newHeight | 0;
                    this._pendingChanges.change({ id, newAfterLineNumber, newHeight });
                },
                removeWhitespace: (id) => {
                    hadAChange = true;
                    this._pendingChanges.remove({ id });
                }
            };
            callback(accessor);
        }
        finally {
            this._pendingChanges.commit(this);
        }
        return hadAChange;
    }
    _commitPendingChanges(inserts, changes, removes) {
        if (inserts.length > 0 || removes.length > 0) {
            this._minWidth = -1; /* marker for not being computed */
        }
        if (inserts.length + changes.length + removes.length <= 1) {
            // when only one thing happened, handle it "delicately"
            for (const insert of inserts) {
                this._insertWhitespace(insert);
            }
            for (const change of changes) {
                this._changeOneWhitespace(change.id, change.newAfterLineNumber, change.newHeight);
            }
            for (const remove of removes) {
                const index = this._findWhitespaceIndex(remove.id);
                if (index === -1) {
                    continue;
                }
                this._removeWhitespace(index);
            }
            return;
        }
        // simply rebuild the entire datastructure
        const toRemove = new Set();
        for (const remove of removes) {
            toRemove.add(remove.id);
        }
        const toChange = new Map();
        for (const change of changes) {
            toChange.set(change.id, change);
        }
        const applyRemoveAndChange = (whitespaces) => {
            const result = [];
            for (const whitespace of whitespaces) {
                if (toRemove.has(whitespace.id)) {
                    continue;
                }
                if (toChange.has(whitespace.id)) {
                    const change = toChange.get(whitespace.id);
                    whitespace.afterLineNumber = change.newAfterLineNumber;
                    whitespace.height = change.newHeight;
                }
                result.push(whitespace);
            }
            return result;
        };
        const result = applyRemoveAndChange(this._arr).concat(applyRemoveAndChange(inserts));
        result.sort((a, b) => {
            if (a.afterLineNumber === b.afterLineNumber) {
                return a.ordinal - b.ordinal;
            }
            return a.afterLineNumber - b.afterLineNumber;
        });
        this._arr = result;
        this._prefixSumValidIndex = -1;
    }
    _insertWhitespace(whitespace) {
        const insertIndex = LinesLayout.findInsertionIndex(this._arr, whitespace.afterLineNumber, whitespace.ordinal);
        this._arr.splice(insertIndex, 0, whitespace);
        this._prefixSumValidIndex = Math.min(this._prefixSumValidIndex, insertIndex - 1);
    }
    _findWhitespaceIndex(id) {
        const arr = this._arr;
        for (let i = 0, len = arr.length; i < len; i++) {
            if (arr[i].id === id) {
                return i;
            }
        }
        return -1;
    }
    _changeOneWhitespace(id, newAfterLineNumber, newHeight) {
        const index = this._findWhitespaceIndex(id);
        if (index === -1) {
            return;
        }
        if (this._arr[index].height !== newHeight) {
            this._arr[index].height = newHeight;
            this._prefixSumValidIndex = Math.min(this._prefixSumValidIndex, index - 1);
        }
        if (this._arr[index].afterLineNumber !== newAfterLineNumber) {
            // `afterLineNumber` changed for this whitespace
            // Record old whitespace
            const whitespace = this._arr[index];
            // Since changing `afterLineNumber` can trigger a reordering, we're gonna remove this whitespace
            this._removeWhitespace(index);
            whitespace.afterLineNumber = newAfterLineNumber;
            // And add it again
            this._insertWhitespace(whitespace);
        }
    }
    _removeWhitespace(removeIndex) {
        this._arr.splice(removeIndex, 1);
        this._prefixSumValidIndex = Math.min(this._prefixSumValidIndex, removeIndex - 1);
    }
    /**
     * Notify the layouter that lines have been deleted (a continuous zone of lines).
     *
     * @param fromLineNumber The line number at which the deletion started, inclusive
     * @param toLineNumber The line number at which the deletion ended, inclusive
     */
    onLinesDeleted(fromLineNumber, toLineNumber) {
        fromLineNumber = fromLineNumber | 0;
        toLineNumber = toLineNumber | 0;
        this._lineCount -= (toLineNumber - fromLineNumber + 1);
        for (let i = 0, len = this._arr.length; i < len; i++) {
            const afterLineNumber = this._arr[i].afterLineNumber;
            if (fromLineNumber <= afterLineNumber && afterLineNumber <= toLineNumber) {
                // The line this whitespace was after has been deleted
                //  => move whitespace to before first deleted line
                this._arr[i].afterLineNumber = fromLineNumber - 1;
            }
            else if (afterLineNumber > toLineNumber) {
                // The line this whitespace was after has been moved up
                //  => move whitespace up
                this._arr[i].afterLineNumber -= (toLineNumber - fromLineNumber + 1);
            }
        }
        this._lineHeightsManager.onLinesDeleted(fromLineNumber, toLineNumber);
    }
    /**
     * Notify the layouter that lines have been inserted (a continuous zone of lines).
     *
     * @param fromLineNumber The line number at which the insertion started, inclusive
     * @param toLineNumber The line number at which the insertion ended, inclusive.
     */
    onLinesInserted(fromLineNumber, toLineNumber) {
        fromLineNumber = fromLineNumber | 0;
        toLineNumber = toLineNumber | 0;
        this._lineCount += (toLineNumber - fromLineNumber + 1);
        for (let i = 0, len = this._arr.length; i < len; i++) {
            const afterLineNumber = this._arr[i].afterLineNumber;
            if (fromLineNumber <= afterLineNumber) {
                this._arr[i].afterLineNumber += (toLineNumber - fromLineNumber + 1);
            }
        }
        this._lineHeightsManager.onLinesInserted(fromLineNumber, toLineNumber);
    }
    /**
     * Get the sum of all the whitespaces.
     */
    getWhitespacesTotalHeight() {
        if (this._arr.length === 0) {
            return 0;
        }
        return this.getWhitespacesAccumulatedHeight(this._arr.length - 1);
    }
    /**
     * Return the sum of the heights of the whitespaces at [0..index].
     * This includes the whitespace at `index`.
     *
     * @param index The index of the whitespace.
     * @return The sum of the heights of all whitespaces before the one at `index`, including the one at `index`.
     */
    getWhitespacesAccumulatedHeight(index) {
        index = index | 0;
        let startIndex = Math.max(0, this._prefixSumValidIndex + 1);
        if (startIndex === 0) {
            this._arr[0].prefixSum = this._arr[0].height;
            startIndex++;
        }
        for (let i = startIndex; i <= index; i++) {
            this._arr[i].prefixSum = this._arr[i - 1].prefixSum + this._arr[i].height;
        }
        this._prefixSumValidIndex = Math.max(this._prefixSumValidIndex, index);
        return this._arr[index].prefixSum;
    }
    /**
     * Get the sum of heights for all objects.
     *
     * @return The sum of heights for all objects.
     */
    getLinesTotalHeight() {
        const linesHeight = this._lineHeightsManager.getAccumulatedLineHeightsIncludingLineNumber(this._lineCount);
        const whitespacesHeight = this.getWhitespacesTotalHeight();
        return linesHeight + whitespacesHeight + this._paddingTop + this._paddingBottom;
    }
    /**
     * Returns the accumulated height of whitespaces before the given line number.
     *
     * @param lineNumber The line number
     */
    getWhitespaceAccumulatedHeightBeforeLineNumber(lineNumber) {
        lineNumber = lineNumber | 0;
        const lastWhitespaceBeforeLineNumber = this._findLastWhitespaceBeforeLineNumber(lineNumber);
        if (lastWhitespaceBeforeLineNumber === -1) {
            return 0;
        }
        return this.getWhitespacesAccumulatedHeight(lastWhitespaceBeforeLineNumber);
    }
    _findLastWhitespaceBeforeLineNumber(lineNumber) {
        lineNumber = lineNumber | 0;
        // Find the whitespace before line number
        const arr = this._arr;
        let low = 0;
        let high = arr.length - 1;
        while (low <= high) {
            const delta = (high - low) | 0;
            const halfDelta = (delta / 2) | 0;
            const mid = (low + halfDelta) | 0;
            if (arr[mid].afterLineNumber < lineNumber) {
                if (mid + 1 >= arr.length || arr[mid + 1].afterLineNumber >= lineNumber) {
                    return mid;
                }
                else {
                    low = (mid + 1) | 0;
                }
            }
            else {
                high = (mid - 1) | 0;
            }
        }
        return -1;
    }
    _findFirstWhitespaceAfterLineNumber(lineNumber) {
        lineNumber = lineNumber | 0;
        const lastWhitespaceBeforeLineNumber = this._findLastWhitespaceBeforeLineNumber(lineNumber);
        const firstWhitespaceAfterLineNumber = lastWhitespaceBeforeLineNumber + 1;
        if (firstWhitespaceAfterLineNumber < this._arr.length) {
            return firstWhitespaceAfterLineNumber;
        }
        return -1;
    }
    /**
     * Find the index of the first whitespace which has `afterLineNumber` >= `lineNumber`.
     * @return The index of the first whitespace with `afterLineNumber` >= `lineNumber` or -1 if no whitespace is found.
     */
    getFirstWhitespaceIndexAfterLineNumber(lineNumber) {
        lineNumber = lineNumber | 0;
        return this._findFirstWhitespaceAfterLineNumber(lineNumber);
    }
    /**
     * Get the vertical offset (the sum of heights for all objects above) a certain line number.
     *
     * @param lineNumber The line number
     * @return The sum of heights for all objects above `lineNumber`.
     */
    getVerticalOffsetForLineNumber(lineNumber, includeViewZones = false) {
        lineNumber = lineNumber | 0;
        let previousLinesHeight;
        if (lineNumber > 1) {
            previousLinesHeight = this._lineHeightsManager.getAccumulatedLineHeightsIncludingLineNumber(lineNumber - 1);
        }
        else {
            previousLinesHeight = 0;
        }
        const previousWhitespacesHeight = this.getWhitespaceAccumulatedHeightBeforeLineNumber(lineNumber - (includeViewZones ? 1 : 0));
        return previousLinesHeight + previousWhitespacesHeight + this._paddingTop;
    }
    getLineHeightForLineNumber(lineNumber) {
        return this._lineHeightsManager.heightForLineNumber(lineNumber);
    }
    /**
     * Get the vertical offset (the sum of heights for all objects above) a certain line number and also the line height of the line.
     *
     * @param lineNumber The line number
     * @return The sum of heights for all objects above `lineNumber`.
     */
    getVerticalOffsetAfterLineNumber(lineNumber, includeViewZones = false) {
        lineNumber = lineNumber | 0;
        const previousLinesHeight = this._lineHeightsManager.getAccumulatedLineHeightsIncludingLineNumber(lineNumber);
        const previousWhitespacesHeight = this.getWhitespaceAccumulatedHeightBeforeLineNumber(lineNumber + (includeViewZones ? 1 : 0));
        return previousLinesHeight + previousWhitespacesHeight + this._paddingTop;
    }
    /**
     * The maximum min width for all whitespaces.
     */
    getWhitespaceMinWidth() {
        if (this._minWidth === -1) {
            let minWidth = 0;
            for (let i = 0, len = this._arr.length; i < len; i++) {
                minWidth = Math.max(minWidth, this._arr[i].minWidth);
            }
            this._minWidth = minWidth;
        }
        return this._minWidth;
    }
    /**
     * Check if `verticalOffset` is below all lines.
     */
    isAfterLines(verticalOffset) {
        const totalHeight = this.getLinesTotalHeight();
        return verticalOffset > totalHeight;
    }
    isInTopPadding(verticalOffset) {
        if (this._paddingTop === 0) {
            return false;
        }
        return (verticalOffset < this._paddingTop);
    }
    isInBottomPadding(verticalOffset) {
        if (this._paddingBottom === 0) {
            return false;
        }
        const totalHeight = this.getLinesTotalHeight();
        return (verticalOffset >= totalHeight - this._paddingBottom);
    }
    /**
     * Find the first line number that is at or after vertical offset `verticalOffset`.
     * i.e. if getVerticalOffsetForLine(line) is x and getVerticalOffsetForLine(line + 1) is y, then
     * getLineNumberAtOrAfterVerticalOffset(i) = line, x <= i < y.
     *
     * @param verticalOffset The vertical offset to search at.
     * @return The line number at or after vertical offset `verticalOffset`.
     */
    getLineNumberAtOrAfterVerticalOffset(verticalOffset) {
        verticalOffset = verticalOffset | 0;
        if (verticalOffset < 0) {
            return 1;
        }
        const linesCount = this._lineCount | 0;
        let minLineNumber = 1;
        let maxLineNumber = linesCount;
        while (minLineNumber < maxLineNumber) {
            const midLineNumber = ((minLineNumber + maxLineNumber) / 2) | 0;
            const lineHeight = this.getLineHeightForLineNumber(midLineNumber);
            const midLineNumberVerticalOffset = this.getVerticalOffsetForLineNumber(midLineNumber) | 0;
            if (verticalOffset >= midLineNumberVerticalOffset + lineHeight) {
                // vertical offset is after mid line number
                minLineNumber = midLineNumber + 1;
            }
            else if (verticalOffset >= midLineNumberVerticalOffset) {
                // Hit
                return midLineNumber;
            }
            else {
                // vertical offset is before mid line number, but mid line number could still be what we're searching for
                maxLineNumber = midLineNumber;
            }
        }
        if (minLineNumber > linesCount) {
            return linesCount;
        }
        return minLineNumber;
    }
    /**
     * Get all the lines and their relative vertical offsets that are positioned between `verticalOffset1` and `verticalOffset2`.
     *
     * @param verticalOffset1 The beginning of the viewport.
     * @param verticalOffset2 The end of the viewport.
     * @return A structure describing the lines positioned between `verticalOffset1` and `verticalOffset2`.
     */
    getLinesViewportData(verticalOffset1, verticalOffset2) {
        verticalOffset1 = verticalOffset1 | 0;
        verticalOffset2 = verticalOffset2 | 0;
        // Find first line number
        // We don't live in a perfect world, so the line number might start before or after verticalOffset1
        const startLineNumber = this.getLineNumberAtOrAfterVerticalOffset(verticalOffset1) | 0;
        const startLineNumberVerticalOffset = this.getVerticalOffsetForLineNumber(startLineNumber) | 0;
        let endLineNumber = this._lineCount | 0;
        // Also keep track of what whitespace we've got
        let whitespaceIndex = this.getFirstWhitespaceIndexAfterLineNumber(startLineNumber) | 0;
        const whitespaceCount = this.getWhitespacesCount() | 0;
        let currentWhitespaceHeight;
        let currentWhitespaceAfterLineNumber;
        if (whitespaceIndex === -1) {
            whitespaceIndex = whitespaceCount;
            currentWhitespaceAfterLineNumber = endLineNumber + 1;
            currentWhitespaceHeight = 0;
        }
        else {
            currentWhitespaceAfterLineNumber = this.getAfterLineNumberForWhitespaceIndex(whitespaceIndex) | 0;
            currentWhitespaceHeight = this.getHeightForWhitespaceIndex(whitespaceIndex) | 0;
        }
        let currentVerticalOffset = startLineNumberVerticalOffset;
        let currentLineRelativeOffset = currentVerticalOffset;
        // IE (all versions) cannot handle units above about 1,533,908 px, so every 500k pixels bring numbers down
        const STEP_SIZE = 500000;
        let bigNumbersDelta = 0;
        if (startLineNumberVerticalOffset >= STEP_SIZE) {
            // Compute a delta that guarantees that lines are positioned at `lineHeight` increments
            bigNumbersDelta = Math.floor(startLineNumberVerticalOffset / STEP_SIZE) * STEP_SIZE;
            bigNumbersDelta = Math.floor(bigNumbersDelta / this._lineHeightsManager.defaultLineHeight) * this._lineHeightsManager.defaultLineHeight;
            currentLineRelativeOffset -= bigNumbersDelta;
        }
        const linesOffsets = [];
        const verticalCenter = verticalOffset1 + (verticalOffset2 - verticalOffset1) / 2;
        let centeredLineNumber = -1;
        // Figure out how far the lines go
        for (let lineNumber = startLineNumber; lineNumber <= endLineNumber; lineNumber++) {
            const lineHeight = this.getLineHeightForLineNumber(lineNumber);
            if (centeredLineNumber === -1) {
                const currentLineTop = currentVerticalOffset;
                const currentLineBottom = currentVerticalOffset + lineHeight;
                if ((currentLineTop <= verticalCenter && verticalCenter < currentLineBottom) || currentLineTop > verticalCenter) {
                    centeredLineNumber = lineNumber;
                }
            }
            // Count current line height in the vertical offsets
            currentVerticalOffset += lineHeight;
            linesOffsets[lineNumber - startLineNumber] = currentLineRelativeOffset;
            // Next line starts immediately after this one
            currentLineRelativeOffset += lineHeight;
            while (currentWhitespaceAfterLineNumber === lineNumber) {
                // Push down next line with the height of the current whitespace
                currentLineRelativeOffset += currentWhitespaceHeight;
                // Count current whitespace in the vertical offsets
                currentVerticalOffset += currentWhitespaceHeight;
                whitespaceIndex++;
                if (whitespaceIndex >= whitespaceCount) {
                    currentWhitespaceAfterLineNumber = endLineNumber + 1;
                }
                else {
                    currentWhitespaceAfterLineNumber = this.getAfterLineNumberForWhitespaceIndex(whitespaceIndex) | 0;
                    currentWhitespaceHeight = this.getHeightForWhitespaceIndex(whitespaceIndex) | 0;
                }
            }
            if (currentVerticalOffset >= verticalOffset2) {
                // We have covered the entire viewport area, time to stop
                endLineNumber = lineNumber;
                break;
            }
        }
        if (centeredLineNumber === -1) {
            centeredLineNumber = endLineNumber;
        }
        const endLineNumberVerticalOffset = this.getVerticalOffsetForLineNumber(endLineNumber) | 0;
        let completelyVisibleStartLineNumber = startLineNumber;
        let completelyVisibleEndLineNumber = endLineNumber;
        if (completelyVisibleStartLineNumber < completelyVisibleEndLineNumber) {
            if (startLineNumberVerticalOffset < verticalOffset1) {
                completelyVisibleStartLineNumber++;
            }
        }
        if (completelyVisibleStartLineNumber < completelyVisibleEndLineNumber) {
            const endLineHeight = this.getLineHeightForLineNumber(endLineNumber);
            if (endLineNumberVerticalOffset + endLineHeight > verticalOffset2) {
                completelyVisibleEndLineNumber--;
            }
        }
        return {
            bigNumbersDelta: bigNumbersDelta,
            startLineNumber: startLineNumber,
            endLineNumber: endLineNumber,
            relativeVerticalOffset: linesOffsets,
            centeredLineNumber: centeredLineNumber,
            completelyVisibleStartLineNumber: completelyVisibleStartLineNumber,
            completelyVisibleEndLineNumber: completelyVisibleEndLineNumber,
            lineHeight: this._lineHeightsManager.defaultLineHeight,
        };
    }
    getVerticalOffsetForWhitespaceIndex(whitespaceIndex) {
        whitespaceIndex = whitespaceIndex | 0;
        const afterLineNumber = this.getAfterLineNumberForWhitespaceIndex(whitespaceIndex);
        let previousLinesHeight;
        if (afterLineNumber >= 1) {
            previousLinesHeight = this._lineHeightsManager.getAccumulatedLineHeightsIncludingLineNumber(afterLineNumber);
        }
        else {
            previousLinesHeight = 0;
        }
        let previousWhitespacesHeight;
        if (whitespaceIndex > 0) {
            previousWhitespacesHeight = this.getWhitespacesAccumulatedHeight(whitespaceIndex - 1);
        }
        else {
            previousWhitespacesHeight = 0;
        }
        return previousLinesHeight + previousWhitespacesHeight + this._paddingTop;
    }
    getWhitespaceIndexAtOrAfterVerticallOffset(verticalOffset) {
        verticalOffset = verticalOffset | 0;
        let minWhitespaceIndex = 0;
        let maxWhitespaceIndex = this.getWhitespacesCount() - 1;
        if (maxWhitespaceIndex < 0) {
            return -1;
        }
        // Special case: nothing to be found
        const maxWhitespaceVerticalOffset = this.getVerticalOffsetForWhitespaceIndex(maxWhitespaceIndex);
        const maxWhitespaceHeight = this.getHeightForWhitespaceIndex(maxWhitespaceIndex);
        if (verticalOffset >= maxWhitespaceVerticalOffset + maxWhitespaceHeight) {
            return -1;
        }
        while (minWhitespaceIndex < maxWhitespaceIndex) {
            const midWhitespaceIndex = Math.floor((minWhitespaceIndex + maxWhitespaceIndex) / 2);
            const midWhitespaceVerticalOffset = this.getVerticalOffsetForWhitespaceIndex(midWhitespaceIndex);
            const midWhitespaceHeight = this.getHeightForWhitespaceIndex(midWhitespaceIndex);
            if (verticalOffset >= midWhitespaceVerticalOffset + midWhitespaceHeight) {
                // vertical offset is after whitespace
                minWhitespaceIndex = midWhitespaceIndex + 1;
            }
            else if (verticalOffset >= midWhitespaceVerticalOffset) {
                // Hit
                return midWhitespaceIndex;
            }
            else {
                // vertical offset is before whitespace, but midWhitespaceIndex might still be what we're searching for
                maxWhitespaceIndex = midWhitespaceIndex;
            }
        }
        return minWhitespaceIndex;
    }
    /**
     * Get exactly the whitespace that is layouted at `verticalOffset`.
     *
     * @param verticalOffset The vertical offset.
     * @return Precisely the whitespace that is layouted at `verticaloffset` or null.
     */
    getWhitespaceAtVerticalOffset(verticalOffset) {
        verticalOffset = verticalOffset | 0;
        const candidateIndex = this.getWhitespaceIndexAtOrAfterVerticallOffset(verticalOffset);
        if (candidateIndex < 0) {
            return null;
        }
        if (candidateIndex >= this.getWhitespacesCount()) {
            return null;
        }
        const candidateTop = this.getVerticalOffsetForWhitespaceIndex(candidateIndex);
        if (candidateTop > verticalOffset) {
            return null;
        }
        const candidateHeight = this.getHeightForWhitespaceIndex(candidateIndex);
        const candidateId = this.getIdForWhitespaceIndex(candidateIndex);
        const candidateAfterLineNumber = this.getAfterLineNumberForWhitespaceIndex(candidateIndex);
        return {
            id: candidateId,
            afterLineNumber: candidateAfterLineNumber,
            verticalOffset: candidateTop,
            height: candidateHeight
        };
    }
    /**
     * Get a list of whitespaces that are positioned between `verticalOffset1` and `verticalOffset2`.
     *
     * @param verticalOffset1 The beginning of the viewport.
     * @param verticalOffset2 The end of the viewport.
     * @return An array with all the whitespaces in the viewport. If no whitespace is in viewport, the array is empty.
     */
    getWhitespaceViewportData(verticalOffset1, verticalOffset2) {
        verticalOffset1 = verticalOffset1 | 0;
        verticalOffset2 = verticalOffset2 | 0;
        const startIndex = this.getWhitespaceIndexAtOrAfterVerticallOffset(verticalOffset1);
        const endIndex = this.getWhitespacesCount() - 1;
        if (startIndex < 0) {
            return [];
        }
        const result = [];
        for (let i = startIndex; i <= endIndex; i++) {
            const top = this.getVerticalOffsetForWhitespaceIndex(i);
            const height = this.getHeightForWhitespaceIndex(i);
            if (top >= verticalOffset2) {
                break;
            }
            result.push({
                id: this.getIdForWhitespaceIndex(i),
                afterLineNumber: this.getAfterLineNumberForWhitespaceIndex(i),
                verticalOffset: top,
                height: height
            });
        }
        return result;
    }
    /**
     * Get all whitespaces.
     */
    getWhitespaces() {
        return this._arr.slice(0);
    }
    /**
     * The number of whitespaces.
     */
    getWhitespacesCount() {
        return this._arr.length;
    }
    /**
     * Get the `id` for whitespace at index `index`.
     *
     * @param index The index of the whitespace.
     * @return `id` of whitespace at `index`.
     */
    getIdForWhitespaceIndex(index) {
        index = index | 0;
        return this._arr[index].id;
    }
    /**
     * Get the `afterLineNumber` for whitespace at index `index`.
     *
     * @param index The index of the whitespace.
     * @return `afterLineNumber` of whitespace at `index`.
     */
    getAfterLineNumberForWhitespaceIndex(index) {
        index = index | 0;
        return this._arr[index].afterLineNumber;
    }
    /**
     * Get the `height` for whitespace at index `index`.
     *
     * @param index The index of the whitespace.
     * @return `height` of whitespace at `index`.
     */
    getHeightForWhitespaceIndex(index) {
        index = index | 0;
        return this._arr[index].height;
    }
}

export { EditorWhitespace, LinesLayout };
