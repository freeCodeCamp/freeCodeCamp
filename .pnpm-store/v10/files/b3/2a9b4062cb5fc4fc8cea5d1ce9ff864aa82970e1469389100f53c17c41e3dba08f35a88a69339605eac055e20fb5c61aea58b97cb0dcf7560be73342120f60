/**
 * @fileoverview A collection of methods for processing Espree's options.
 * @author Kai Cataldo
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const DEFAULT_ECMA_VERSION = 5;
const SUPPORTED_VERSIONS = [
    3,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
];

/**
 * Normalize ECMAScript version from the initial config
 * @param {number} ecmaVersion ECMAScript version from the initial config
 * @throws {Error} throws an error if the ecmaVersion is invalid.
 * @returns {number} normalized ECMAScript version
 */
function normalizeEcmaVersion(ecmaVersion = DEFAULT_ECMA_VERSION) {
    if (typeof ecmaVersion !== "number") {
        throw new Error(`ecmaVersion must be a number. Received value of type ${typeof ecmaVersion} instead.`);
    }

    let version = ecmaVersion;

    // Calculate ECMAScript edition number from official year version starting with
    // ES2015, which corresponds with ES6 (or a difference of 2009).
    if (version >= 2015) {
        version -= 2009;
    }

    if (!SUPPORTED_VERSIONS.includes(version)) {
        throw new Error("Invalid ecmaVersion.");
    }

    return version;
}

/**
 * Normalize sourceType from the initial config
 * @param {string} sourceType to normalize
 * @throws {Error} throw an error if sourceType is invalid
 * @returns {string} normalized sourceType
 */
function normalizeSourceType(sourceType = "script") {
    if (sourceType === "script" || sourceType === "module") {
        return sourceType;
    }
    throw new Error("Invalid sourceType.");
}

/**
 * Normalize parserOptions
 * @param {Object} options the parser options to normalize
 * @throws {Error} throw an error if found invalid option.
 * @returns {Object} normalized options
 */
function normalizeOptions(options) {
    const ecmaVersion = normalizeEcmaVersion(options.ecmaVersion);
    const sourceType = normalizeSourceType(options.sourceType);
    const ranges = options.range === true;
    const locations = options.loc === true;

    if (sourceType === "module" && ecmaVersion < 6) {
        throw new Error("sourceType 'module' is not supported when ecmaVersion < 2015. Consider adding `{ ecmaVersion: 2015 }` to the parser options.");
    }
    return Object.assign({}, options, { ecmaVersion, sourceType, ranges, locations });
}

/**
 * Get the latest ECMAScript version supported by Espree.
 * @returns {number} The latest ECMAScript version.
 */
function getLatestEcmaVersion() {
    return SUPPORTED_VERSIONS[SUPPORTED_VERSIONS.length - 1];
}

/**
 * Get the list of ECMAScript versions supported by Espree.
 * @returns {number[]} An array containing the supported ECMAScript versions.
 */
function getSupportedEcmaVersions() {
    return [...SUPPORTED_VERSIONS];
}

//------------------------------------------------------------------------------
// Public
//------------------------------------------------------------------------------

module.exports = {
    normalizeOptions,
    getLatestEcmaVersion,
    getSupportedEcmaVersions
};
