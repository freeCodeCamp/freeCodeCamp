import { isFullWidthCharacter, isEmojiImprecise, GraphemeIterator, getNextCodePoint } from '../../../base/common/strings.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * A column in a position is the gap between two adjacent characters. The methods here
 * work with a concept called "visible column". A visible column is a very rough approximation
 * of the horizontal screen position of a column. For example, using a tab size of 4:
 * ```txt
 * |<TAB>|<TAB>|T|ext
 * |     |     | \---- column = 4, visible column = 9
 * |     |     \------ column = 3, visible column = 8
 * |     \------------ column = 2, visible column = 4
 * \------------------ column = 1, visible column = 0
 * ```
 *
 * **NOTE**: Visual columns do not work well for RTL text or variable-width fonts or characters.
 *
 * **NOTE**: These methods work and make sense both on the model and on the view model.
 */
class CursorColumns {
    static _nextVisibleColumn(codePoint, visibleColumn, tabSize) {
        if (codePoint === 9 /* CharCode.Tab */) {
            return CursorColumns.nextRenderTabStop(visibleColumn, tabSize);
        }
        if (isFullWidthCharacter(codePoint) || isEmojiImprecise(codePoint)) {
            return visibleColumn + 2;
        }
        return visibleColumn + 1;
    }
    /**
     * Returns a visible column from a column.
     * @see {@link CursorColumns}
     */
    static visibleColumnFromColumn(lineContent, column, tabSize) {
        const textLen = Math.min(column - 1, lineContent.length);
        const text = lineContent.substring(0, textLen);
        const iterator = new GraphemeIterator(text);
        let result = 0;
        while (!iterator.eol()) {
            const codePoint = getNextCodePoint(text, textLen, iterator.offset);
            iterator.nextGraphemeLength();
            result = this._nextVisibleColumn(codePoint, result, tabSize);
        }
        return result;
    }
    /**
     * Returns a column from a visible column.
     * @see {@link CursorColumns}
     */
    static columnFromVisibleColumn(lineContent, visibleColumn, tabSize) {
        if (visibleColumn <= 0) {
            return 1;
        }
        const lineContentLength = lineContent.length;
        const iterator = new GraphemeIterator(lineContent);
        let beforeVisibleColumn = 0;
        let beforeColumn = 1;
        while (!iterator.eol()) {
            const codePoint = getNextCodePoint(lineContent, lineContentLength, iterator.offset);
            iterator.nextGraphemeLength();
            const afterVisibleColumn = this._nextVisibleColumn(codePoint, beforeVisibleColumn, tabSize);
            const afterColumn = iterator.offset + 1;
            if (afterVisibleColumn >= visibleColumn) {
                const beforeDelta = visibleColumn - beforeVisibleColumn;
                const afterDelta = afterVisibleColumn - visibleColumn;
                if (afterDelta < beforeDelta) {
                    return afterColumn;
                }
                else {
                    return beforeColumn;
                }
            }
            beforeVisibleColumn = afterVisibleColumn;
            beforeColumn = afterColumn;
        }
        // walked the entire string
        return lineContentLength + 1;
    }
    /**
     * ATTENTION: This works with 0-based columns (as opposed to the regular 1-based columns)
     * @see {@link CursorColumns}
     */
    static nextRenderTabStop(visibleColumn, tabSize) {
        return visibleColumn + tabSize - visibleColumn % tabSize;
    }
    /**
     * ATTENTION: This works with 0-based columns (as opposed to the regular 1-based columns)
     * @see {@link CursorColumns}
     */
    static nextIndentTabStop(visibleColumn, indentSize) {
        return CursorColumns.nextRenderTabStop(visibleColumn, indentSize);
    }
    /**
     * ATTENTION: This works with 0-based columns (as opposed to the regular 1-based columns)
     * @see {@link CursorColumns}
     */
    static prevRenderTabStop(column, tabSize) {
        return Math.max(0, column - 1 - (column - 1) % tabSize);
    }
    /**
     * ATTENTION: This works with 0-based columns (as opposed to the regular 1-based columns)
     * @see {@link CursorColumns}
     */
    static prevIndentTabStop(column, indentSize) {
        return CursorColumns.prevRenderTabStop(column, indentSize);
    }
}

export { CursorColumns };
