import { CursorColumns } from '../core/cursorColumns.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class AtomicTabMoveOperations {
    /**
     * Get the visible column at the position. If we get to a non-whitespace character first
     * or past the end of string then return -1.
     *
     * **Note** `position` and the return value are 0-based.
     */
    static whitespaceVisibleColumn(lineContent, position, tabSize) {
        const lineLength = lineContent.length;
        let visibleColumn = 0;
        let prevTabStopPosition = -1;
        let prevTabStopVisibleColumn = -1;
        for (let i = 0; i < lineLength; i++) {
            if (i === position) {
                return [prevTabStopPosition, prevTabStopVisibleColumn, visibleColumn];
            }
            if (visibleColumn % tabSize === 0) {
                prevTabStopPosition = i;
                prevTabStopVisibleColumn = visibleColumn;
            }
            const chCode = lineContent.charCodeAt(i);
            switch (chCode) {
                case 32 /* CharCode.Space */:
                    visibleColumn += 1;
                    break;
                case 9 /* CharCode.Tab */:
                    // Skip to the next multiple of tabSize.
                    visibleColumn = CursorColumns.nextRenderTabStop(visibleColumn, tabSize);
                    break;
                default:
                    return [-1, -1, -1];
            }
        }
        if (position === lineLength) {
            return [prevTabStopPosition, prevTabStopVisibleColumn, visibleColumn];
        }
        return [-1, -1, -1];
    }
    /**
     * Return the position that should result from a move left, right or to the
     * nearest tab, if atomic tabs are enabled. Left and right are used for the
     * arrow key movements, nearest is used for mouse selection. It returns
     * -1 if atomic tabs are not relevant and you should fall back to normal
     * behaviour.
     *
     * **Note**: `position` and the return value are 0-based.
     */
    static atomicPosition(lineContent, position, tabSize, direction) {
        const lineLength = lineContent.length;
        // Get the 0-based visible column corresponding to the position, or return
        // -1 if it is not in the initial whitespace.
        const [prevTabStopPosition, prevTabStopVisibleColumn, visibleColumn] = AtomicTabMoveOperations.whitespaceVisibleColumn(lineContent, position, tabSize);
        if (visibleColumn === -1) {
            return -1;
        }
        // Is the output left or right of the current position. The case for nearest
        // where it is the same as the current position is handled in the switch.
        let left;
        switch (direction) {
            case 0 /* Direction.Left */:
                left = true;
                break;
            case 1 /* Direction.Right */:
                left = false;
                break;
            case 2 /* Direction.Nearest */:
                // The code below assumes the output position is either left or right
                // of the input position. If it is the same, return immediately.
                if (visibleColumn % tabSize === 0) {
                    return position;
                }
                // Go to the nearest indentation.
                left = visibleColumn % tabSize <= (tabSize / 2);
                break;
        }
        // If going left, we can just use the info about the last tab stop position and
        // last tab stop visible column that we computed in the first walk over the whitespace.
        if (left) {
            if (prevTabStopPosition === -1) {
                return -1;
            }
            // If the direction is left, we need to keep scanning right to ensure
            // that targetVisibleColumn + tabSize is before non-whitespace.
            // This is so that when we press left at the end of a partial
            // indentation it only goes one character. For example '      foo' with
            // tabSize 4, should jump from position 6 to position 5, not 4.
            let currentVisibleColumn = prevTabStopVisibleColumn;
            for (let i = prevTabStopPosition; i < lineLength; ++i) {
                if (currentVisibleColumn === prevTabStopVisibleColumn + tabSize) {
                    // It is a full indentation.
                    return prevTabStopPosition;
                }
                const chCode = lineContent.charCodeAt(i);
                switch (chCode) {
                    case 32 /* CharCode.Space */:
                        currentVisibleColumn += 1;
                        break;
                    case 9 /* CharCode.Tab */:
                        currentVisibleColumn = CursorColumns.nextRenderTabStop(currentVisibleColumn, tabSize);
                        break;
                    default:
                        return -1;
                }
            }
            if (currentVisibleColumn === prevTabStopVisibleColumn + tabSize) {
                return prevTabStopPosition;
            }
            // It must have been a partial indentation.
            return -1;
        }
        // We are going right.
        const targetVisibleColumn = CursorColumns.nextRenderTabStop(visibleColumn, tabSize);
        // We can just continue from where whitespaceVisibleColumn got to.
        let currentVisibleColumn = visibleColumn;
        for (let i = position; i < lineLength; i++) {
            if (currentVisibleColumn === targetVisibleColumn) {
                return i;
            }
            const chCode = lineContent.charCodeAt(i);
            switch (chCode) {
                case 32 /* CharCode.Space */:
                    currentVisibleColumn += 1;
                    break;
                case 9 /* CharCode.Tab */:
                    currentVisibleColumn = CursorColumns.nextRenderTabStop(currentVisibleColumn, tabSize);
                    break;
                default:
                    return -1;
            }
        }
        // This condition handles when the target column is at the end of the line.
        if (currentVisibleColumn === targetVisibleColumn) {
            return lineLength;
        }
        return -1;
    }
}

export { AtomicTabMoveOperations };
