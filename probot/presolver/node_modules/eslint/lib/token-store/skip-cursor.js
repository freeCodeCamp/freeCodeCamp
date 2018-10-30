/**
 * @fileoverview Define the cursor which ignores the first few tokens.
 * @author Toru Nagashima
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const DecorativeCursor = require("./decorative-cursor");

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

/**
 * The decorative cursor which ignores the first few tokens.
 */
module.exports = class SkipCursor extends DecorativeCursor {

    /**
     * Initializes this cursor.
     * @param {Cursor} cursor - The cursor to be decorated.
     * @param {number} count - The count of tokens this cursor skips.
     */
    constructor(cursor, count) {
        super(cursor);
        this.count = count;
    }

    /** @inheritdoc */
    moveNext() {
        while (this.count > 0) {
            this.count -= 1;
            if (!super.moveNext()) {
                return false;
            }
        }
        return super.moveNext();
    }
};
