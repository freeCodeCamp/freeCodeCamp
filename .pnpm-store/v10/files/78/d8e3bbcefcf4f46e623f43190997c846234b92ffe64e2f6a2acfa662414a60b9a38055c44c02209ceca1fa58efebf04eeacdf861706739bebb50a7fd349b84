/**
 * @fileoverview Tools for obtaining SourceCode objects.
 * @author Ian VanSchooten
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { CLIEngine } = require("../cli-engine");

/*
 * This is used for:
 *
 * 1. Enumerate target file because we have not expose such a API on `CLIEngine`
 *    (https://github.com/eslint/eslint/issues/11222).
 * 2. Create `SourceCode` instances. Because we don't have any function which
 *    instantiate `SourceCode` so it needs to take the created `SourceCode`
 *    instance out after linting.
 *
 * TODO1: Expose the API that enumerates target files.
 * TODO2: Extract the creation logic of `SourceCode` from `Linter` class.
 */
const { getCLIEngineInternalSlots } = require("../cli-engine/cli-engine"); // eslint-disable-line node/no-restricted-require

const debug = require("debug")("eslint:source-code-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Get the SourceCode object for a single file
 * @param   {string}     filename The fully resolved filename to get SourceCode from.
 * @param   {Object}     engine  A CLIEngine.
 * @returns {Array}               Array of the SourceCode object representing the file
 *                                and fatal error message.
 */
function getSourceCodeOfFile(filename, engine) {
    debug("getting sourceCode of", filename);
    const results = engine.executeOnFiles([filename]);

    if (results && results.results[0] && results.results[0].messages[0] && results.results[0].messages[0].fatal) {
        const msg = results.results[0].messages[0];

        throw new Error(`(${filename}:${msg.line}:${msg.column}) ${msg.message}`);
    }

    // TODO: extract the logic that creates source code objects to `SourceCode#parse(text, options)` or something like.
    const { linter } = getCLIEngineInternalSlots(engine);
    const sourceCode = linter.getSourceCode();

    return sourceCode;
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------


/**
 * This callback is used to measure execution status in a progress bar
 * @callback progressCallback
 * @param {number} The total number of times the callback will be called.
 */

/**
 * Gets the SourceCode of a single file, or set of files.
 * @param {string[]|string} patterns A filename, directory name, or glob, or an array of them
 * @param {Object} options A CLIEngine options object. If not provided, the default cli options will be used.
 * @param {progressCallback} callback Callback for reporting execution status
 * @returns {Object} The SourceCode of all processed files.
 */
function getSourceCodeOfFiles(patterns, options, callback) {
    const sourceCodes = {};
    const globPatternsList = typeof patterns === "string" ? [patterns] : patterns;
    const engine = new CLIEngine({ ...options, rules: {} });

    // TODO: make file iteration as a public API and use it.
    const { fileEnumerator } = getCLIEngineInternalSlots(engine);
    const filenames =
        Array.from(fileEnumerator.iterateFiles(globPatternsList))
            .filter(entry => !entry.ignored)
            .map(entry => entry.filePath);

    if (filenames.length === 0) {
        debug(`Did not find any files matching pattern(s): ${globPatternsList}`);
    }

    filenames.forEach(filename => {
        const sourceCode = getSourceCodeOfFile(filename, engine);

        if (sourceCode) {
            debug("got sourceCode of", filename);
            sourceCodes[filename] = sourceCode;
        }
        if (callback) {
            callback(filenames.length); // eslint-disable-line node/callback-return
        }
    });

    return sourceCodes;
}

module.exports = {
    getSourceCodeOfFiles
};
