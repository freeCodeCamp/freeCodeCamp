/**
 * Utility for resolving a module relative to another module
 * @author Teddy Katz
 */

"use strict";

const Module = require("module");

/*
 * `Module.createRequire` is added in v12.2.0. It supports URL as well.
 * We only support the case where the argument is a filepath, not a URL.
 */
// eslint-disable-next-line node/no-unsupported-features/node-builtins, node/no-deprecated-api
const createRequire = Module.createRequire || Module.createRequireFromPath;

module.exports = {

    /**
     * Resolves a Node module relative to another module
     * @param {string} moduleName The name of a Node module, or a path to a Node module.
     * @param {string} relativeToPath An absolute path indicating the module that `moduleName` should be resolved relative to. This must be
     * a file rather than a directory, but the file need not actually exist.
     * @returns {string} The absolute path that would result from calling `require.resolve(moduleName)` in a file located at `relativeToPath`
     */
    resolve(moduleName, relativeToPath) {
        try {
            return createRequire(relativeToPath).resolve(moduleName);
        } catch (error) {

            // This `if` block is for older Node.js than 12.0.0. We can remove this block in the future.
            if (
                typeof error === "object" &&
                error !== null &&
                error.code === "MODULE_NOT_FOUND" &&
                !error.requireStack &&
                error.message.includes(moduleName)
            ) {
                error.message += `\nRequire stack:\n- ${relativeToPath}`;
            }
            throw error;
        }
    }
};
