import { binarySearch2 } from '../../../base/common/arrays.js';
import { intersection } from '../../../base/common/collections.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class CustomLine {
    constructor(decorationId, index, lineNumber, specialHeight, prefixSum) {
        this.decorationId = decorationId;
        this.index = index;
        this.lineNumber = lineNumber;
        this.specialHeight = specialHeight;
        this.prefixSum = prefixSum;
        this.maximumSpecialHeight = specialHeight;
        this.deleted = false;
    }
}
/**
 * Manages line heights in the editor with support for custom line heights from decorations.
 *
 * This class maintains an ordered collection of line heights, where each line can have either
 * the default height or a custom height specified by decorations. It supports efficient querying
 * of individual line heights as well as accumulated heights up to a specific line.
 *
 * Line heights are stored in a sorted array for efficient binary search operations. Each line
 * with custom height is represented by a {@link CustomLine} object which tracks its special height,
 * accumulated height prefix sum, and associated decoration ID.
 *
 * The class optimizes performance by:
 * - Using binary search to locate lines in the ordered array
 * - Batching updates through a pending changes mechanism
 * - Computing prefix sums for O(1) accumulated height lookup
 * - Tracking maximum height for lines with multiple decorations
 * - Efficiently handling document changes (line insertions and deletions)
 *
 * When lines are inserted or deleted, the manager updates line numbers and prefix sums
 * for all affected lines. It also handles special cases like decorations that span
 * the insertion/deletion points by re-applying those decorations appropriately.
 *
 * All query operations automatically commit pending changes to ensure consistent results.
 * Clients can modify line heights by adding or removing custom line height decorations,
 * which are tracked by their unique decoration IDs.
 */
class LineHeightsManager {
    constructor(defaultLineHeight, customLineHeightData) {
        this._decorationIDToCustomLine = new ArrayMap();
        this._orderedCustomLines = [];
        this._pendingSpecialLinesToInsert = [];
        this._invalidIndex = 0;
        this._hasPending = false;
        this._defaultLineHeight = defaultLineHeight;
        if (customLineHeightData.length > 0) {
            for (const data of customLineHeightData) {
                this.insertOrChangeCustomLineHeight(data.decorationId, data.startLineNumber, data.endLineNumber, data.lineHeight);
            }
            this.commit();
        }
    }
    set defaultLineHeight(defaultLineHeight) {
        this._defaultLineHeight = defaultLineHeight;
    }
    get defaultLineHeight() {
        return this._defaultLineHeight;
    }
    removeCustomLineHeight(decorationID) {
        const customLines = this._decorationIDToCustomLine.get(decorationID);
        if (!customLines) {
            return;
        }
        this._decorationIDToCustomLine.delete(decorationID);
        for (const customLine of customLines) {
            customLine.deleted = true;
            this._invalidIndex = Math.min(this._invalidIndex, customLine.index);
        }
        this._hasPending = true;
    }
    insertOrChangeCustomLineHeight(decorationId, startLineNumber, endLineNumber, lineHeight) {
        this.removeCustomLineHeight(decorationId);
        for (let lineNumber = startLineNumber; lineNumber <= endLineNumber; lineNumber++) {
            const customLine = new CustomLine(decorationId, -1, lineNumber, lineHeight, 0);
            this._pendingSpecialLinesToInsert.push(customLine);
        }
        this._hasPending = true;
    }
    heightForLineNumber(lineNumber) {
        const searchIndex = this._binarySearchOverOrderedCustomLinesArray(lineNumber);
        if (searchIndex >= 0) {
            return this._orderedCustomLines[searchIndex].maximumSpecialHeight;
        }
        return this._defaultLineHeight;
    }
    getAccumulatedLineHeightsIncludingLineNumber(lineNumber) {
        const searchIndex = this._binarySearchOverOrderedCustomLinesArray(lineNumber);
        if (searchIndex >= 0) {
            return this._orderedCustomLines[searchIndex].prefixSum + this._orderedCustomLines[searchIndex].maximumSpecialHeight;
        }
        if (searchIndex === -1) {
            return this._defaultLineHeight * lineNumber;
        }
        const modifiedIndex = -(searchIndex + 1);
        const previousSpecialLine = this._orderedCustomLines[modifiedIndex - 1];
        return previousSpecialLine.prefixSum + previousSpecialLine.maximumSpecialHeight + this._defaultLineHeight * (lineNumber - previousSpecialLine.lineNumber);
    }
    onLinesDeleted(fromLineNumber, toLineNumber) {
        const deleteCount = toLineNumber - fromLineNumber + 1;
        const numberOfCustomLines = this._orderedCustomLines.length;
        const candidateStartIndexOfDeletion = this._binarySearchOverOrderedCustomLinesArray(fromLineNumber);
        let startIndexOfDeletion;
        if (candidateStartIndexOfDeletion >= 0) {
            startIndexOfDeletion = candidateStartIndexOfDeletion;
            for (let i = candidateStartIndexOfDeletion - 1; i >= 0; i--) {
                if (this._orderedCustomLines[i].lineNumber === fromLineNumber) {
                    startIndexOfDeletion--;
                }
                else {
                    break;
                }
            }
        }
        else {
            startIndexOfDeletion = candidateStartIndexOfDeletion === -(numberOfCustomLines + 1) && candidateStartIndexOfDeletion !== -1 ? numberOfCustomLines - 1 : -(candidateStartIndexOfDeletion + 1);
        }
        const candidateEndIndexOfDeletion = this._binarySearchOverOrderedCustomLinesArray(toLineNumber);
        let endIndexOfDeletion;
        if (candidateEndIndexOfDeletion >= 0) {
            endIndexOfDeletion = candidateEndIndexOfDeletion;
            for (let i = candidateEndIndexOfDeletion + 1; i < numberOfCustomLines; i++) {
                if (this._orderedCustomLines[i].lineNumber === toLineNumber) {
                    endIndexOfDeletion++;
                }
                else {
                    break;
                }
            }
        }
        else {
            endIndexOfDeletion = candidateEndIndexOfDeletion === -(numberOfCustomLines + 1) && candidateEndIndexOfDeletion !== -1 ? numberOfCustomLines - 1 : -(candidateEndIndexOfDeletion + 1);
        }
        const isEndIndexBiggerThanStartIndex = endIndexOfDeletion > startIndexOfDeletion;
        const isEndIndexEqualToStartIndexAndCoversCustomLine = endIndexOfDeletion === startIndexOfDeletion
            && this._orderedCustomLines[startIndexOfDeletion]
            && this._orderedCustomLines[startIndexOfDeletion].lineNumber >= fromLineNumber
            && this._orderedCustomLines[startIndexOfDeletion].lineNumber <= toLineNumber;
        if (isEndIndexBiggerThanStartIndex || isEndIndexEqualToStartIndexAndCoversCustomLine) {
            let maximumSpecialHeightOnDeletedInterval = 0;
            for (let i = startIndexOfDeletion; i <= endIndexOfDeletion; i++) {
                maximumSpecialHeightOnDeletedInterval = Math.max(maximumSpecialHeightOnDeletedInterval, this._orderedCustomLines[i].maximumSpecialHeight);
            }
            let prefixSumOnDeletedInterval = 0;
            if (startIndexOfDeletion > 0) {
                const previousSpecialLine = this._orderedCustomLines[startIndexOfDeletion - 1];
                prefixSumOnDeletedInterval = previousSpecialLine.prefixSum + previousSpecialLine.maximumSpecialHeight + this._defaultLineHeight * (fromLineNumber - previousSpecialLine.lineNumber - 1);
            }
            else {
                prefixSumOnDeletedInterval = fromLineNumber > 0 ? (fromLineNumber - 1) * this._defaultLineHeight : 0;
            }
            const firstSpecialLineDeleted = this._orderedCustomLines[startIndexOfDeletion];
            const lastSpecialLineDeleted = this._orderedCustomLines[endIndexOfDeletion];
            const firstSpecialLineAfterDeletion = this._orderedCustomLines[endIndexOfDeletion + 1];
            const heightOfFirstLineAfterDeletion = firstSpecialLineAfterDeletion && firstSpecialLineAfterDeletion.lineNumber === toLineNumber + 1 ? firstSpecialLineAfterDeletion.maximumSpecialHeight : this._defaultLineHeight;
            const totalHeightDeleted = lastSpecialLineDeleted.prefixSum
                + lastSpecialLineDeleted.maximumSpecialHeight
                - firstSpecialLineDeleted.prefixSum
                + this._defaultLineHeight * (toLineNumber - lastSpecialLineDeleted.lineNumber)
                + this._defaultLineHeight * (firstSpecialLineDeleted.lineNumber - fromLineNumber)
                + heightOfFirstLineAfterDeletion - maximumSpecialHeightOnDeletedInterval;
            const decorationIdsSeen = new Set();
            const newOrderedCustomLines = [];
            const newDecorationIDToSpecialLine = new ArrayMap();
            let numberOfDeletions = 0;
            for (let i = 0; i < this._orderedCustomLines.length; i++) {
                const customLine = this._orderedCustomLines[i];
                if (i < startIndexOfDeletion) {
                    newOrderedCustomLines.push(customLine);
                    newDecorationIDToSpecialLine.add(customLine.decorationId, customLine);
                }
                else if (i >= startIndexOfDeletion && i <= endIndexOfDeletion) {
                    const decorationId = customLine.decorationId;
                    if (!decorationIdsSeen.has(decorationId)) {
                        customLine.index -= numberOfDeletions;
                        customLine.lineNumber = fromLineNumber;
                        customLine.prefixSum = prefixSumOnDeletedInterval;
                        customLine.maximumSpecialHeight = maximumSpecialHeightOnDeletedInterval;
                        newOrderedCustomLines.push(customLine);
                        newDecorationIDToSpecialLine.add(customLine.decorationId, customLine);
                    }
                    else {
                        numberOfDeletions++;
                    }
                }
                else if (i > endIndexOfDeletion) {
                    customLine.index -= numberOfDeletions;
                    customLine.lineNumber -= deleteCount;
                    customLine.prefixSum -= totalHeightDeleted;
                    newOrderedCustomLines.push(customLine);
                    newDecorationIDToSpecialLine.add(customLine.decorationId, customLine);
                }
                decorationIdsSeen.add(customLine.decorationId);
            }
            this._orderedCustomLines = newOrderedCustomLines;
            this._decorationIDToCustomLine = newDecorationIDToSpecialLine;
        }
        else {
            const totalHeightDeleted = deleteCount * this._defaultLineHeight;
            for (let i = endIndexOfDeletion; i < this._orderedCustomLines.length; i++) {
                const customLine = this._orderedCustomLines[i];
                if (customLine.lineNumber > toLineNumber) {
                    customLine.lineNumber -= deleteCount;
                    customLine.prefixSum -= totalHeightDeleted;
                }
            }
        }
    }
    onLinesInserted(fromLineNumber, toLineNumber) {
        const insertCount = toLineNumber - fromLineNumber + 1;
        const candidateStartIndexOfInsertion = this._binarySearchOverOrderedCustomLinesArray(fromLineNumber);
        let startIndexOfInsertion;
        if (candidateStartIndexOfInsertion >= 0) {
            startIndexOfInsertion = candidateStartIndexOfInsertion;
            for (let i = candidateStartIndexOfInsertion - 1; i >= 0; i--) {
                if (this._orderedCustomLines[i].lineNumber === fromLineNumber) {
                    startIndexOfInsertion--;
                }
                else {
                    break;
                }
            }
        }
        else {
            startIndexOfInsertion = -(candidateStartIndexOfInsertion + 1);
        }
        const toReAdd = [];
        const decorationsImmediatelyAfter = new Set();
        for (let i = startIndexOfInsertion; i < this._orderedCustomLines.length; i++) {
            if (this._orderedCustomLines[i].lineNumber === fromLineNumber) {
                decorationsImmediatelyAfter.add(this._orderedCustomLines[i].decorationId);
            }
        }
        const decorationsImmediatelyBefore = new Set();
        for (let i = startIndexOfInsertion - 1; i >= 0; i--) {
            if (this._orderedCustomLines[i].lineNumber === fromLineNumber - 1) {
                decorationsImmediatelyBefore.add(this._orderedCustomLines[i].decorationId);
            }
        }
        const decorationsWithGaps = intersection(decorationsImmediatelyBefore, decorationsImmediatelyAfter);
        for (let i = startIndexOfInsertion; i < this._orderedCustomLines.length; i++) {
            this._orderedCustomLines[i].lineNumber += insertCount;
            this._orderedCustomLines[i].prefixSum += this._defaultLineHeight * insertCount;
        }
        if (decorationsWithGaps.size > 0) {
            for (const decorationId of decorationsWithGaps) {
                const decoration = this._decorationIDToCustomLine.get(decorationId);
                if (decoration) {
                    const startLineNumber = decoration.reduce((min, l) => Math.min(min, l.lineNumber), fromLineNumber); // min
                    const endLineNumber = decoration.reduce((max, l) => Math.max(max, l.lineNumber), fromLineNumber); // max
                    const lineHeight = decoration.reduce((max, l) => Math.max(max, l.specialHeight), 0);
                    toReAdd.push({
                        decorationId,
                        startLineNumber,
                        endLineNumber,
                        lineHeight
                    });
                }
            }
            for (const dec of toReAdd) {
                this.insertOrChangeCustomLineHeight(dec.decorationId, dec.startLineNumber, dec.endLineNumber, dec.lineHeight);
            }
            this.commit();
        }
    }
    commit() {
        if (!this._hasPending) {
            return;
        }
        for (const pendingChange of this._pendingSpecialLinesToInsert) {
            const candidateInsertionIndex = this._binarySearchOverOrderedCustomLinesArray(pendingChange.lineNumber);
            const insertionIndex = candidateInsertionIndex >= 0 ? candidateInsertionIndex : -(candidateInsertionIndex + 1);
            this._orderedCustomLines.splice(insertionIndex, 0, pendingChange);
            this._invalidIndex = Math.min(this._invalidIndex, insertionIndex);
        }
        this._pendingSpecialLinesToInsert = [];
        const newDecorationIDToSpecialLine = new ArrayMap();
        const newOrderedSpecialLines = [];
        for (let i = 0; i < this._invalidIndex; i++) {
            const customLine = this._orderedCustomLines[i];
            newOrderedSpecialLines.push(customLine);
            newDecorationIDToSpecialLine.add(customLine.decorationId, customLine);
        }
        let numberOfDeletions = 0;
        let previousSpecialLine = (this._invalidIndex > 0) ? newOrderedSpecialLines[this._invalidIndex - 1] : undefined;
        for (let i = this._invalidIndex; i < this._orderedCustomLines.length; i++) {
            const customLine = this._orderedCustomLines[i];
            if (customLine.deleted) {
                numberOfDeletions++;
                continue;
            }
            customLine.index = i - numberOfDeletions;
            if (previousSpecialLine && previousSpecialLine.lineNumber === customLine.lineNumber) {
                customLine.maximumSpecialHeight = previousSpecialLine.maximumSpecialHeight;
                customLine.prefixSum = previousSpecialLine.prefixSum;
            }
            else {
                let maximumSpecialHeight = customLine.specialHeight;
                for (let j = i; j < this._orderedCustomLines.length; j++) {
                    const nextSpecialLine = this._orderedCustomLines[j];
                    if (nextSpecialLine.deleted) {
                        continue;
                    }
                    if (nextSpecialLine.lineNumber !== customLine.lineNumber) {
                        break;
                    }
                    maximumSpecialHeight = Math.max(maximumSpecialHeight, nextSpecialLine.specialHeight);
                }
                customLine.maximumSpecialHeight = maximumSpecialHeight;
                let prefixSum;
                if (previousSpecialLine) {
                    prefixSum = previousSpecialLine.prefixSum + previousSpecialLine.maximumSpecialHeight + this._defaultLineHeight * (customLine.lineNumber - previousSpecialLine.lineNumber - 1);
                }
                else {
                    prefixSum = this._defaultLineHeight * (customLine.lineNumber - 1);
                }
                customLine.prefixSum = prefixSum;
            }
            previousSpecialLine = customLine;
            newOrderedSpecialLines.push(customLine);
            newDecorationIDToSpecialLine.add(customLine.decorationId, customLine);
        }
        this._orderedCustomLines = newOrderedSpecialLines;
        this._decorationIDToCustomLine = newDecorationIDToSpecialLine;
        this._invalidIndex = Infinity;
        this._hasPending = false;
    }
    _binarySearchOverOrderedCustomLinesArray(lineNumber) {
        return binarySearch2(this._orderedCustomLines.length, (index) => {
            const line = this._orderedCustomLines[index];
            if (line.lineNumber === lineNumber) {
                return 0;
            }
            else if (line.lineNumber < lineNumber) {
                return -1;
            }
            else {
                return 1;
            }
        });
    }
}
class ArrayMap {
    constructor() {
        this._map = new Map();
    }
    add(key, value) {
        const array = this._map.get(key);
        if (!array) {
            this._map.set(key, [value]);
        }
        else {
            array.push(value);
        }
    }
    get(key) {
        return this._map.get(key);
    }
    delete(key) {
        this._map.delete(key);
    }
}

export { CustomLine, LineHeightsManager };
