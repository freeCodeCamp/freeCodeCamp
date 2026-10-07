/**
 * @module create-prefix-transform-stream
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const stream = require("stream")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const ALL_BR = /\n/g

/**
 * The transform stream to insert a specific prefix.
 *
 * Several streams can exist for the same output stream.
 * This stream will insert the prefix if the last output came from other instance.
 * To do that, this stream is using a shared state object.
 *
 * @private
 */
class PrefixTransform extends stream.Transform {
    /**
     * @param {string} prefix - A prefix text to be inserted.
     * @param {object} state - A state object.
     * @param {string} state.lastPrefix - The last prefix which is printed.
     * @param {boolean} state.lastIsLinebreak -The flag to check whether the last output is a line break or not.
     */
    constructor(prefix, state) {
        super()

        this.prefix = prefix
        this.state = state
    }

    /**
     * Transforms the output chunk.
     *
     * @param {string|Buffer} chunk - A chunk to be transformed.
     * @param {string} _encoding - The encoding of the chunk.
     * @param {function} callback - A callback function that is called when done.
     * @returns {void}
     */
    _transform(chunk, _encoding, callback) {
        const prefix = this.prefix
        const nPrefix = `\n${prefix}`
        const state = this.state
        const firstPrefix =
            state.lastIsLinebreak ? prefix :
            (state.lastPrefix !== prefix) ? "\n" :
            /* otherwise */ ""
        const prefixed = `${firstPrefix}${chunk}`.replace(ALL_BR, nPrefix)
        const index = prefixed.indexOf(prefix, Math.max(0, prefixed.length - prefix.length))

        state.lastPrefix = prefix
        state.lastIsLinebreak = (index !== -1)

        callback(null, (index !== -1) ? prefixed.slice(0, index) : prefixed)
    }
}

//------------------------------------------------------------------------------
// Public API
//------------------------------------------------------------------------------

/**
 * Create a transform stream to insert the specific prefix.
 *
 * Several streams can exist for the same output stream.
 * This stream will insert the prefix if the last output came from other instance.
 * To do that, this stream is using a shared state object.
 *
 * @param {string} prefix - A prefix text to be inserted.
 * @param {object} state - A state object.
 * @param {string} state.lastPrefix - The last prefix which is printed.
 * @param {boolean} state.lastIsLinebreak -The flag to check whether the last output is a line break or not.
 * @returns {stream.Transform} The created transform stream.
 */
module.exports = function createPrefixTransform(prefix, state) {
    return new PrefixTransform(prefix, state)
}
