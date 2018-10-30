/**
 * @fileoverview An inherited `glob.GlobSync` to support .gitignore patterns.
 * @author Kael Zhang
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const Sync = require("glob").GlobSync,
    util = require("util");

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------

const IGNORE = Symbol("ignore");

/**
 * Subclass of `glob.GlobSync`
 * @param {string}     pattern      Pattern to be matched.
 * @param {Object}     options      `options` for `glob`
 * @param {function()} shouldIgnore Method to check whether a directory should be ignored.
 * @constructor
 */
function GlobSync(pattern, options, shouldIgnore) {

    /**
     * We don't put this thing to argument `options` to avoid
     * further problems, such as `options` validation.
     *
     * Use `Symbol` as much as possible to avoid confliction.
     */
    this[IGNORE] = shouldIgnore;

    Sync.call(this, pattern, options);
}

util.inherits(GlobSync, Sync);

/* eslint no-underscore-dangle: ["error", { "allow": ["_readdir", "_mark"] }] */

GlobSync.prototype._readdir = function(abs, inGlobStar) {

    /**
     * `options.nodir` makes `options.mark` as `true`.
     * Mark `abs` first
     * to make sure `"node_modules"` will be ignored immediately with ignore pattern `"node_modules/"`.

     * There is a built-in cache about marked `File.Stat` in `glob`, so that we could not worry about the extra invocation of `this._mark()`
     */
    const marked = this._mark(abs);

    if (this[IGNORE](marked)) {
        return null;
    }

    return Sync.prototype._readdir.call(this, abs, inGlobStar);
};


module.exports = GlobSync;
