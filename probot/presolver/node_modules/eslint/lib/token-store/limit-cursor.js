/**
 * @fileoverview Define the cursor which limits the number of tokens.
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
 * The decorative cursor which limits the number of tokens.
 */
module.exports = class LimitCursor extends DecorativeCursor {

    /**
     * Initializes this cursor.
     * @param {Cursor} cursor - The cursor to be decorated.
     * @param {number} count - The count of tokens this cursor iterates.
     */
    constructor(cursor, count) {
        super(cursor);
        this.count = count;
    }

    /** @inheritdoc */
    moveNext() {
        if (this.count > 0) {
            this.count -= 1;
            return super.moveNext();
        }
        return false;
    }
};
