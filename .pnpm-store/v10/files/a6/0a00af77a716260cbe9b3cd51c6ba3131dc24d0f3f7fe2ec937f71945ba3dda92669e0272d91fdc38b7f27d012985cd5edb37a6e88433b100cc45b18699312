/**
 * @filedescription Merge Strategy
 */

"use strict";

//-----------------------------------------------------------------------------
// Class
//-----------------------------------------------------------------------------

/**
 * Container class for several different merge strategies.
 */
class MergeStrategy {

    /**
     * Merges two keys by overwriting the first with the second.
     * @param {*} value1 The value from the first object key. 
     * @param {*} value2 The value from the second object key.
     * @returns {*} The second value.
     */
    static overwrite(value1, value2) {
        return value2;
    }

    /**
     * Merges two keys by replacing the first with the second only if the
     * second is defined.
     * @param {*} value1 The value from the first object key. 
     * @param {*} value2 The value from the second object key.
     * @returns {*} The second value if it is defined.
     */
    static replace(value1, value2) {
        if (typeof value2 !== "undefined") {
            return value2;
        }

        return value1;
    }

    /**
     * Merges two properties by assigning properties from the second to the first.
     * @param {*} value1 The value from the first object key.
     * @param {*} value2 The value from the second object key.
     * @returns {*} A new object containing properties from both value1 and
     *      value2.
     */
    static assign(value1, value2) {
        return Object.assign({}, value1, value2);
    }
}

exports.MergeStrategy = MergeStrategy;
