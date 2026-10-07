/**
 * @fileoverview Assertion utilities equivalent to the Node.js node:asserts module.
 * @author Josh Goldberg
 */

"use strict";

/**
 * Throws an error if the input is not truthy.
 * @param {unknown} value The input that is checked for being truthy.
 * @param {string} message Message to throw if the input is not truthy.
 * @returns {void}
 * @throws {Error} When the condition is not truthy.
 */
function ok(value, message = "Assertion failed.") {
	if (!value) {
		throw new Error(message);
	}
}

module.exports = ok;
