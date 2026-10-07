/**
 * @fileoverview Shared utilities for error messages.
 * @author Josh Goldberg
 */

"use strict";

/**
 * Converts a value to a string that may be printed in errors.
 * @param {any} value The invalid value.
 * @param {number} indentation How many spaces to indent
 * @returns {string} The value, stringified.
 */
function stringifyValueForError(value, indentation) {
	return value
		? JSON.stringify(value, null, 4).replace(
				/\n/gu,
				`\n${" ".repeat(indentation)}`,
			)
		: `${value}`;
}

module.exports = { stringifyValueForError };
