/**
 * @fileoverview A collection of methods for processing Espree's options.
 * @author Kai Cataldo
 */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const SUPPORTED_VERSIONS = [
    3,
    5,
    6, // 2015
    7, // 2016
    8, // 2017
    9, // 2018
    10, // 2019
    11, // 2020
    12, // 2021
    13, // 2022
    14, // 2023
    15, // 2024
    16, // 2025
    17 // 2026
];

/**
 * Get the latest ECMAScript version supported by Espree.
 * @returns {number} The latest ECMAScript version.
 */
export function getLatestEcmaVersion() {
    return SUPPORTED_VERSIONS.at(-1);
}

/**
 * Get the list of ECMAScript versions supported by Espree.
 * @returns {number[]} An array containing the supported ECMAScript versions.
 */
export function getSupportedEcmaVersions() {
    return [...SUPPORTED_VERSIONS];
}

/**
 * Normalize ECMAScript version from the initial config
 * @param {(number|"latest")} ecmaVersion ECMAScript version from the initial config
 * @throws {Error} throws an error if the ecmaVersion is invalid.
 * @returns {number} normalized ECMAScript version
 */
function normalizeEcmaVersion(ecmaVersion = 5) {

    let version = ecmaVersion === "latest" ? getLatestEcmaVersion() : ecmaVersion;

    if (typeof version !== "number") {
        throw new Error(`ecmaVersion must be a number or "latest". Received value of type ${typeof ecmaVersion} instead.`);
    }

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

    if (sourceType === "commonjs") {
        return "script";
    }

    throw new Error("Invalid sourceType.");
}

/**
 * Normalize parserOptions
 * @param {Object} options the parser options to normalize
 * @throws {Error} throw an error if found invalid option.
 * @returns {Object} normalized options
 */
export function normalizeOptions(options) {
    const ecmaVersion = normalizeEcmaVersion(options.ecmaVersion);
    const sourceType = normalizeSourceType(options.sourceType);
    const ranges = options.range === true;
    const locations = options.loc === true;

    if (ecmaVersion !== 3 && options.allowReserved) {

        // a value of `false` is intentionally allowed here, so a shared config can overwrite it when needed
        throw new Error("`allowReserved` is only supported when ecmaVersion is 3");
    }
    if (typeof options.allowReserved !== "undefined" && typeof options.allowReserved !== "boolean") {
        throw new Error("`allowReserved`, when present, must be `true` or `false`");
    }
    const allowReserved = ecmaVersion === 3 ? (options.allowReserved || "never") : false;
    const ecmaFeatures = options.ecmaFeatures || {};
    const allowReturnOutsideFunction = options.sourceType === "commonjs" ||
        Boolean(ecmaFeatures.globalReturn);

    if (sourceType === "module" && ecmaVersion < 6) {
        throw new Error("sourceType 'module' is not supported when ecmaVersion < 2015. Consider adding `{ ecmaVersion: 2015 }` to the parser options.");
    }

    return Object.assign({}, options, {
        ecmaVersion,
        sourceType,
        ranges,
        locations,
        allowReserved,
        allowReturnOutsideFunction
    });
}
