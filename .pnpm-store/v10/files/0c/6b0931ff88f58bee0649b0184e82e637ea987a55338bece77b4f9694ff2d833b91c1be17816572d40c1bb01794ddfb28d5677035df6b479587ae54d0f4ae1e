/**
 * @fileoverview Helper to locate and load configuration files.
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const fs = require("fs"),
    path = require("path"),
    stringify = require("json-stable-stringify-without-jsonify");

const debug = require("debug")("eslint:config-file");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Determines sort order for object keys for json-stable-stringify
 *
 * see: https://github.com/samn/json-stable-stringify#cmp
 * @param   {Object} a The first comparison object ({key: akey, value: avalue})
 * @param   {Object} b The second comparison object ({key: bkey, value: bvalue})
 * @returns {number}   1 or -1, used in stringify cmp method
 */
function sortByKey(a, b) {
    return a.key > b.key ? 1 : -1;
}

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------

/**
 * Writes a configuration file in JSON format.
 * @param {Object} config The configuration object to write.
 * @param {string} filePath The filename to write to.
 * @returns {void}
 * @private
 */
function writeJSONConfigFile(config, filePath) {
    debug(`Writing JSON config file: ${filePath}`);

    const content = `${stringify(config, { cmp: sortByKey, space: 4 })}\n`;

    fs.writeFileSync(filePath, content, "utf8");
}

/**
 * Writes a configuration file in YAML format.
 * @param {Object} config The configuration object to write.
 * @param {string} filePath The filename to write to.
 * @returns {void}
 * @private
 */
function writeYAMLConfigFile(config, filePath) {
    debug(`Writing YAML config file: ${filePath}`);

    // lazy load YAML to improve performance when not used
    const yaml = require("js-yaml");

    const content = yaml.safeDump(config, { sortKeys: true });

    fs.writeFileSync(filePath, content, "utf8");
}

/**
 * Writes a configuration file in JavaScript format.
 * @param {Object} config The configuration object to write.
 * @param {string} filePath The filename to write to.
 * @throws {Error} If an error occurs linting the config file contents.
 * @returns {void}
 * @private
 */
function writeJSConfigFile(config, filePath) {
    debug(`Writing JS config file: ${filePath}`);

    let contentToWrite;
    const stringifiedContent = `module.exports = ${stringify(config, { cmp: sortByKey, space: 4 })};\n`;

    try {
        const { CLIEngine } = require("../cli-engine");
        const linter = new CLIEngine({
            baseConfig: config,
            fix: true,
            useEslintrc: false
        });
        const report = linter.executeOnText(stringifiedContent);

        contentToWrite = report.results[0].output || stringifiedContent;
    } catch (e) {
        debug("Error linting JavaScript config file, writing unlinted version");
        const errorMessage = e.message;

        contentToWrite = stringifiedContent;
        e.message = "An error occurred while generating your JavaScript config file. ";
        e.message += "A config file was still generated, but the config file itself may not follow your linting rules.";
        e.message += `\nError: ${errorMessage}`;
        throw e;
    } finally {
        fs.writeFileSync(filePath, contentToWrite, "utf8");
    }
}

/**
 * Writes a configuration file.
 * @param {Object} config The configuration object to write.
 * @param {string} filePath The filename to write to.
 * @returns {void}
 * @throws {Error} When an unknown file type is specified.
 * @private
 */
function write(config, filePath) {
    switch (path.extname(filePath)) {
        case ".js":
        case ".cjs":
            writeJSConfigFile(config, filePath);
            break;

        case ".json":
            writeJSONConfigFile(config, filePath);
            break;

        case ".yaml":
        case ".yml":
            writeYAMLConfigFile(config, filePath);
            break;

        default:
            throw new Error("Can't write to unknown file type.");
    }
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {
    write
};
