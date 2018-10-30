/**
 * @fileoverview Tools for obtaining SourceCode objects.
 * @author Ian VanSchooten
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const CLIEngine = require("../cli-engine"),
    eslint = require("../eslint"),
    globUtil = require("./glob-util"),
    baseDefaultOptions = require("../../conf/cli-options");

const debug = require("debug")("eslint:source-code-util");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Get the SourceCode object for a single file
 * @param   {string}     filename The fully resolved filename to get SourceCode from.
 * @param   {Object}     options  A CLIEngine options object.
 * @returns {Array}               Array of the SourceCode object representing the file
 *                                and fatal error message.
 */
function getSourceCodeOfFile(filename, options) {
    debug("getting sourceCode of", filename);
    const opts = Object.assign({}, options, { rules: {} });
    const cli = new CLIEngine(opts);
    const results = cli.executeOnFiles([filename]);

    if (results && results.results[0] && results.results[0].messages[0] && results.results[0].messages[0].fatal) {
        const msg = results.results[0].messages[0];

        throw new Error(`(${filename}:${msg.line}:${msg.column}) ${msg.message}`);
    }
    const sourceCode = eslint.getSourceCode();

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
 * @param   {string[]|string}  patterns   A filename, directory name, or glob,
 *                                        or an array of them
 * @param   {Object}           [options]  A CLIEngine options object. If not provided,
 *                                        the default cli options will be used.
 * @param   {progressCallback} [cb]       Callback for reporting execution status
 * @returns {Object}                      The SourceCode of all processed files.
 */
function getSourceCodeOfFiles(patterns, options, cb) {
    const sourceCodes = {};
    let opts;

    if (typeof patterns === "string") {
        patterns = [patterns];
    }

    const defaultOptions = Object.assign({}, baseDefaultOptions, { cwd: process.cwd() });

    if (typeof options === "undefined") {
        opts = defaultOptions;
    } else if (typeof options === "function") {
        cb = options;
        opts = defaultOptions;
    } else if (typeof options === "object") {
        opts = Object.assign({}, defaultOptions, options);
    }
    debug("constructed options:", opts);
    patterns = globUtil.resolveFileGlobPatterns(patterns, opts);

    const filenames = globUtil.listFilesToProcess(patterns, opts)
        .filter(fileInfo => !fileInfo.ignored)
        .reduce((files, fileInfo) => files.concat(fileInfo.filename), []);

    if (filenames.length === 0) {
        debug(`Did not find any files matching pattern(s): ${patterns}`);
    }
    filenames.forEach(filename => {
        const sourceCode = getSourceCodeOfFile(filename, opts);

        if (sourceCode) {
            debug("got sourceCode of", filename);
            sourceCodes[filename] = sourceCode;
        }
        if (cb) {
            cb(filenames.length); // eslint-disable-line callback-return
        }
    });
    return sourceCodes;
}

module.exports = {
    getSourceCodeOfFiles
};
