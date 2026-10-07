import { compareBy } from '../../../base/common/arrays.js';
import { findFirstMin, findLastMax } from '../../../base/common/arraysFind.js';
import { CursorState } from '../cursorCommon.js';
import { Cursor } from './oneCursor.js';
import { Position } from '../core/position.js';
import { Range } from '../core/range.js';
import { Selection } from '../core/selection.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class CursorCollection {
    constructor(context) {
        this.context = context;
        this.cursors = [new Cursor(context)];
        this.lastAddedCursorIndex = 0;
    }
    dispose() {
        for (const cursor of this.cursors) {
            cursor.dispose(this.context);
        }
    }
    startTrackingSelections() {
        for (const cursor of this.cursors) {
            cursor.startTrackingSelection(this.context);
        }
    }
    stopTrackingSelections() {
        for (const cursor of this.cursors) {
            cursor.stopTrackingSelection(this.context);
        }
    }
    updateContext(context) {
        this.context = context;
    }
    ensureValidState() {
        for (const cursor of this.cursors) {
            cursor.ensureValidState(this.context);
        }
    }
    readSelectionFromMarkers() {
        return this.cursors.map(c => c.readSelectionFromMarkers(this.context));
    }
    getAll() {
        return this.cursors.map(c => c.asCursorState());
    }
    getViewPositions() {
        return this.cursors.map(c => c.viewState.position);
    }
    getTopMostViewPosition() {
        return findFirstMin(this.cursors, compareBy(c => c.viewState.position, Position.compare)).viewState.position;
    }
    getBottomMostViewPosition() {
        return findLastMax(this.cursors, compareBy(c => c.viewState.position, Position.compare)).viewState.position;
    }
    getSelections() {
        return this.cursors.map(c => c.modelState.selection);
    }
    getViewSelections() {
        return this.cursors.map(c => c.viewState.selection);
    }
    setSelections(selections) {
        this.setStates(CursorState.fromModelSelections(selections));
    }
    getPrimaryCursor() {
        return this.cursors[0].asCursorState();
    }
    setStates(states) {
        if (states === null) {
            return;
        }
        this.cursors[0].setState(this.context, states[0].modelState, states[0].viewState);
        this._setSecondaryStates(states.slice(1));
    }
    /**
     * Creates or disposes secondary cursors as necessary to match the number of `secondarySelections`.
     */
    _setSecondaryStates(secondaryStates) {
        const secondaryCursorsLength = this.cursors.length - 1;
        const secondaryStatesLength = secondaryStates.length;
        if (secondaryCursorsLength < secondaryStatesLength) {
            const createCnt = secondaryStatesLength - secondaryCursorsLength;
            for (let i = 0; i < createCnt; i++) {
                this._addSecondaryCursor();
            }
        }
        else if (secondaryCursorsLength > secondaryStatesLength) {
            const removeCnt = secondaryCursorsLength - secondaryStatesLength;
            for (let i = 0; i < removeCnt; i++) {
                this._removeSecondaryCursor(this.cursors.length - 2);
            }
        }
        for (let i = 0; i < secondaryStatesLength; i++) {
            this.cursors[i + 1].setState(this.context, secondaryStates[i].modelState, secondaryStates[i].viewState);
        }
    }
    killSecondaryCursors() {
        this._setSecondaryStates([]);
    }
    _addSecondaryCursor() {
        this.cursors.push(new Cursor(this.context));
        this.lastAddedCursorIndex = this.cursors.length - 1;
    }
    getLastAddedCursorIndex() {
        if (this.cursors.length === 1 || this.lastAddedCursorIndex === 0) {
            return 0;
        }
        return this.lastAddedCursorIndex;
    }
    _removeSecondaryCursor(removeIndex) {
        if (this.lastAddedCursorIndex >= removeIndex + 1) {
            this.lastAddedCursorIndex--;
        }
        this.cursors[removeIndex + 1].dispose(this.context);
        this.cursors.splice(removeIndex + 1, 1);
    }
    normalize() {
        if (this.cursors.length === 1) {
            return;
        }
        const cursors = this.cursors.slice(0);
        const sortedCursors = [];
        for (let i = 0, len = cursors.length; i < len; i++) {
            sortedCursors.push({
                index: i,
                selection: cursors[i].modelState.selection,
            });
        }
        sortedCursors.sort(compareBy(s => s.selection, Range.compareRangesUsingStarts));
        for (let sortedCursorIndex = 0; sortedCursorIndex < sortedCursors.length - 1; sortedCursorIndex++) {
            const current = sortedCursors[sortedCursorIndex];
            const next = sortedCursors[sortedCursorIndex + 1];
            const currentSelection = current.selection;
            const nextSelection = next.selection;
            if (!this.context.cursorConfig.multiCursorMergeOverlapping) {
                continue;
            }
            let shouldMergeCursors;
            if (nextSelection.isEmpty() || currentSelection.isEmpty()) {
                // Merge touching cursors if one of them is collapsed
                shouldMergeCursors = nextSelection.getStartPosition().isBeforeOrEqual(currentSelection.getEndPosition());
            }
            else {
                // Merge only overlapping cursors (i.e. allow touching ranges)
                shouldMergeCursors = nextSelection.getStartPosition().isBefore(currentSelection.getEndPosition());
            }
            if (shouldMergeCursors) {
                const winnerSortedCursorIndex = current.index < next.index ? sortedCursorIndex : sortedCursorIndex + 1;
                const looserSortedCursorIndex = current.index < next.index ? sortedCursorIndex + 1 : sortedCursorIndex;
                const looserIndex = sortedCursors[looserSortedCursorIndex].index;
                const winnerIndex = sortedCursors[winnerSortedCursorIndex].index;
                const looserSelection = sortedCursors[looserSortedCursorIndex].selection;
                const winnerSelection = sortedCursors[winnerSortedCursorIndex].selection;
                if (!looserSelection.equalsSelection(winnerSelection)) {
                    const resultingRange = looserSelection.plusRange(winnerSelection);
                    const looserSelectionIsLTR = (looserSelection.selectionStartLineNumber === looserSelection.startLineNumber && looserSelection.selectionStartColumn === looserSelection.startColumn);
                    const winnerSelectionIsLTR = (winnerSelection.selectionStartLineNumber === winnerSelection.startLineNumber && winnerSelection.selectionStartColumn === winnerSelection.startColumn);
                    // Give more importance to the last added cursor (think Ctrl-dragging + hitting another cursor)
                    let resultingSelectionIsLTR;
                    if (looserIndex === this.lastAddedCursorIndex) {
                        resultingSelectionIsLTR = looserSelectionIsLTR;
                        this.lastAddedCursorIndex = winnerIndex;
                    }
                    else {
                        // Winner takes it all
                        resultingSelectionIsLTR = winnerSelectionIsLTR;
                    }
                    let resultingSelection;
                    if (resultingSelectionIsLTR) {
                        resultingSelection = new Selection(resultingRange.startLineNumber, resultingRange.startColumn, resultingRange.endLineNumber, resultingRange.endColumn);
                    }
                    else {
                        resultingSelection = new Selection(resultingRange.endLineNumber, resultingRange.endColumn, resultingRange.startLineNumber, resultingRange.startColumn);
                    }
                    sortedCursors[winnerSortedCursorIndex].selection = resultingSelection;
                    const resultingState = CursorState.fromModelSelection(resultingSelection);
                    cursors[winnerIndex].setState(this.context, resultingState.modelState, resultingState.viewState);
                }
                for (const sortedCursor of sortedCursors) {
                    if (sortedCursor.index > looserIndex) {
                        sortedCursor.index--;
                    }
                }
                cursors.splice(looserIndex, 1);
                sortedCursors.splice(looserSortedCursorIndex, 1);
                this._removeSecondaryCursor(looserIndex - 1);
                sortedCursorIndex--;
            }
        }
    }
}

export { CursorCollection };
