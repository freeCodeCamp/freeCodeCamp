/**
 * @module npm-run-all-error
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Error object with some additional info.
 */
module.exports = class NpmRunAllError extends Error {
    /**
     * Constructor.
     *
     * @param {{name: string, code: number}} causeResult -
     *      The result item of the npm-script which causes an error.
     * @param {Array.<{name: string, code: (number|undefined)}>} allResults -
     *      All result items of npm-scripts.
     */
    constructor(causeResult, allResults) {
        super(`"${causeResult.task}" exited with ${causeResult.code}.`)

        /**
         * The name of a npm-script which exited with a non-zero code.
         * @type {string}
         */
        this.name = causeResult.name

        /**
         * The code of a npm-script which exited with a non-zero code.
         * This can be `undefined`.
         * @type {number}
         */
        this.code = causeResult.code

        /**
         * All result items of npm-scripts.
         * @type {Array.<{name: string, code: (number|undefined)}>}
         */
        this.results = allResults
    }
}
