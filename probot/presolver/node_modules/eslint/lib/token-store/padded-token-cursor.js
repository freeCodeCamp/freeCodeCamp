/**
 * @fileoverview Define the cursor which iterates tokens only, with inflated range.
 * @author Toru Nagashima
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const ForwardTokenCursor = require("./forward-token-cursor");

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

/**
 * The cursor which iterates tokens only, with inflated range.
 * This is for the backward compatibility of padding options.
 */
module.exports = class PaddedTokenCursor extends ForwardTokenCursor {

    /**
     * Initializes this cursor.
     * @param {Token[]} tokens - The array of tokens.
     * @param {Comment[]} comments - The array of comments.
     * @param {Object} indexMap - The map from locations to indices in `tokens`.
     * @param {number} startLoc - The start location of the iteration range.
     * @param {number} endLoc - The end location of the iteration range.
     * @param {number} beforeCount - The number of tokens this cursor iterates before start.
     * @param {number} afterCount - The number of tokens this cursor iterates after end.
     */
    constructor(tokens, comments, indexMap, startLoc, endLoc, beforeCount, afterCount) {
        super(tokens, comments, indexMap, startLoc, endLoc);
        this.index = Math.max(0, this.index - beforeCount);
        this.indexEnd = Math.min(tokens.length - 1, this.indexEnd + afterCount);
    }
};
