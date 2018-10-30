/**
 * @fileoverview Implements the Node.js require.resolve algorithm
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const Module = require("module");

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------

const DEFAULT_OPTIONS = {

    /*
     * module.paths is an array of paths to search for resolving things relative
     * to this file. Module.globalPaths contains all of the special Node.js
     * directories that can also be searched for modules.
     *
     * Need to check for existence of module.paths because Jest seems not to
     * include it. See https://github.com/eslint/eslint/issues/5791.
     */
    lookupPaths: module.paths ? module.paths.concat(Module.globalPaths) : Module.globalPaths.concat()
};

/**
 * Resolves modules based on a set of options.
 */
class ModuleResolver {

    /**
     * Resolves modules based on a set of options.
     * @param {Object} options The options for resolving modules.
     * @param {string[]} options.lookupPaths An array of paths to include in the
     *      lookup with the highest priority paths coming first.
     */
    constructor(options) {
        this.options = Object.assign({}, DEFAULT_OPTIONS, options || {});
    }

    /**
     * Resolves the file location of a given module relative to the configured
     * lookup paths.
     * @param {string} name The module name to resolve.
     * @param {string} extraLookupPath An extra path to look into for the module.
     *      This path is used with the highest priority.
     * @returns {string} The resolved file path for the module.
     * @throws {Error} If the module cannot be resolved.
     */
    resolve(name, extraLookupPath) {

        /*
         * First, clone the lookup paths so we're not messing things up for
         * subsequent calls to this function. Then, move the extraLookupPath to the
         * top of the lookup paths list so it will be searched first.
         */
        const lookupPaths = this.options.lookupPaths.concat();

        lookupPaths.unshift(extraLookupPath);

        /**
         * Module._findPath is an internal method to Node.js, then one they use to
         * lookup file paths when require() is called. So, we are hooking into the
         * exact same logic that Node.js uses.
         */
        const result = Module._findPath(name, lookupPaths);   // eslint-disable-line no-underscore-dangle

        if (!result) {
            throw new Error(`Cannot find module '${name}'`);
        }

        return result;
    }
}

//------------------------------------------------------------------------------
// Public API
//------------------------------------------------------------------------------

module.exports = ModuleResolver;
