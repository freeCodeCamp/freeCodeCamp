"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringListFromEnv = exports.getBooleanFromEnv = exports.getStringFromEnv = exports.getNumberFromEnv = void 0;
const api_1 = require("@opentelemetry/api");
const util_1 = require("util");
/**
 * Retrieves a number from an environment variable.
 * - Returns `undefined` if the environment variable is empty, unset, contains only whitespace, or is not a number.
 * - Returns a number in all other cases.
 *
 * @param {string} key - The name of the environment variable to retrieve.
 * @returns {number | undefined} - The number value or `undefined`.
 */
function getNumberFromEnv(key) {
    const raw = process.env[key];
    if (raw == null || raw.trim() === '') {
        return undefined;
    }
    const value = Number(raw);
    if (isNaN(value)) {
        api_1.diag.warn(`Unknown value ${(0, util_1.inspect)(raw)} for ${key}, expected a number, using defaults`);
        return undefined;
    }
    return value;
}
exports.getNumberFromEnv = getNumberFromEnv;
/**
 * Retrieves a string from an environment variable.
 * - Returns `undefined` if the environment variable is empty, unset, or contains only whitespace.
 *
 * @param {string} key - The name of the environment variable to retrieve.
 * @returns {string | undefined} - The string value or `undefined`.
 */
function getStringFromEnv(key) {
    const raw = process.env[key];
    if (raw == null || raw.trim() === '') {
        return undefined;
    }
    return raw;
}
exports.getStringFromEnv = getStringFromEnv;
/**
 * Retrieves a boolean value from an environment variable.
 * - Trims leading and trailing whitespace and ignores casing.
 * - Returns `false` if the environment variable is empty, unset, or contains only whitespace.
 * - Returns `false` for strings that cannot be mapped to a boolean.
 *
 * @param {string} key - The name of the environment variable to retrieve.
 * @returns {boolean} - The boolean value or `false` if the environment variable is unset empty, unset, or contains only whitespace.
 */
function getBooleanFromEnv(key) {
    const raw = process.env[key]?.trim().toLowerCase();
    if (raw == null || raw === '') {
        // NOTE: falling back to `false` instead of `undefined` as required by the specification.
        // If you have a use-case that requires `undefined`, consider using `getStringFromEnv()` and applying the necessary
        // normalizations in the consuming code.
        return false;
    }
    if (raw === 'true') {
        return true;
    }
    else if (raw === 'false') {
        return false;
    }
    else {
        api_1.diag.warn(`Unknown value ${(0, util_1.inspect)(raw)} for ${key}, expected 'true' or 'false', falling back to 'false' (default)`);
        return false;
    }
}
exports.getBooleanFromEnv = getBooleanFromEnv;
/**
 * Retrieves a list of strings from an environment variable.
 * - Uses ',' as the delimiter.
 * - Trims leading and trailing whitespace from each entry.
 * - Excludes empty entries.
 * - Returns `undefined` if the environment variable is empty or contains only whitespace.
 * - Returns an empty array if all entries are empty or whitespace.
 *
 * @param {string} key - The name of the environment variable to retrieve.
 * @returns {string[] | undefined} - The list of strings or `undefined`.
 */
function getStringListFromEnv(key) {
    return getStringFromEnv(key)
        ?.split(',')
        .map(v => v.trim())
        .filter(s => s !== '');
}
exports.getStringListFromEnv = getStringListFromEnv;
//# sourceMappingURL=environment.js.map