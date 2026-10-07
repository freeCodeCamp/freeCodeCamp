/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Natsu @xiaoxiaojx

	This file contains code ported from strip-json-comments:
	https://github.com/sindresorhus/strip-json-comments
	Original license: MIT
	Original author: Sindre Sorhus
*/

"use strict";

/**
 * @typedef {object} StripJsonCommentsOptions
 * @property {boolean=} whitespace Replace comments with whitespace
 * @property {boolean=} trailingCommas Strip trailing commas
 */

const singleComment = Symbol("singleComment");
const multiComment = Symbol("multiComment");

/**
 * Strip without whitespace (returns empty string)
 * @param {string} _string Unused
 * @param {number} _start Unused
 * @param {number} _end Unused
 * @returns {string} Empty string for all input
 */
const stripWithoutWhitespace = (_string, _start, _end) => "";

/**
 * Replace all characters except ASCII spaces, tabs and line endings with regular spaces to ensure valid JSON output.
 * @param {string} string String to process
 * @param {number} start Start index
 * @param {number} end End index
 * @returns {string} Processed string with comments replaced by whitespace
 */
const stripWithWhitespace = (string, start, end) =>
	string.slice(start, end).replace(/[^ \t\r\n]/g, " ");

/**
 * Check if a quote is escaped
 * @param {string} jsonString JSON string
 * @param {number} quotePosition Position of the quote
 * @returns {boolean} True if the quote at the given position is escaped
 */
const isEscaped = (jsonString, quotePosition) => {
	let index = quotePosition - 1;
	let backslashCount = 0;

	while (jsonString[index] === "\\") {
		index -= 1;
		backslashCount += 1;
	}

	return Boolean(backslashCount % 2);
};

/**
 * Strip comments from JSON string
 * @param {string} jsonString JSON string with potential comments
 * @param {StripJsonCommentsOptions} options Options
 * @returns {string} JSON string without comments
 */
function stripJsonComments(
	jsonString,
	{ whitespace = true, trailingCommas = false } = {},
) {
	if (typeof jsonString !== "string") {
		throw new TypeError(
			`Expected argument \`jsonString\` to be a \`string\`, got \`${typeof jsonString}\``,
		);
	}

	const strip = whitespace ? stripWithWhitespace : stripWithoutWhitespace;

	let isInsideString = false;
	/** @type {false | typeof singleComment | typeof multiComment} */
	let isInsideComment = false;
	let offset = 0;
	let buffer = "";
	let result = "";
	let commaIndex = -1;

	for (let index = 0; index < jsonString.length; index++) {
		const currentCharacter = jsonString[index];
		const nextCharacter = jsonString[index + 1];

		if (!isInsideComment && currentCharacter === '"') {
			// Enter or exit string
			const escaped = isEscaped(jsonString, index);
			if (!escaped) {
				isInsideString = !isInsideString;
			}
		}

		if (isInsideString) {
			continue;
		}

		if (!isInsideComment && currentCharacter + nextCharacter === "//") {
			// Enter single-line comment
			buffer += jsonString.slice(offset, index);
			offset = index;
			isInsideComment = singleComment;
			index++;
		} else if (
			isInsideComment === singleComment &&
			currentCharacter + nextCharacter === "\r\n"
		) {
			// Exit single-line comment via \r\n
			index++;
			isInsideComment = false;
			buffer += strip(jsonString, offset, index);
			offset = index;
			continue;
		} else if (isInsideComment === singleComment && currentCharacter === "\n") {
			// Exit single-line comment via \n
			isInsideComment = false;
			buffer += strip(jsonString, offset, index);
			offset = index;
		} else if (!isInsideComment && currentCharacter + nextCharacter === "/*") {
			// Enter multiline comment
			buffer += jsonString.slice(offset, index);
			offset = index;
			isInsideComment = multiComment;
			index++;
			continue;
		} else if (
			isInsideComment === multiComment &&
			currentCharacter + nextCharacter === "*/"
		) {
			// Exit multiline comment
			index++;
			isInsideComment = false;
			buffer += strip(jsonString, offset, index + 1);
			offset = index + 1;
			continue;
		} else if (trailingCommas && !isInsideComment) {
			if (commaIndex !== -1) {
				if (currentCharacter === "}" || currentCharacter === "]") {
					// Strip trailing comma
					buffer += jsonString.slice(offset, index);
					result += strip(buffer, 0, 1) + buffer.slice(1);
					buffer = "";
					offset = index;
					commaIndex = -1;
				} else if (
					currentCharacter !== " " &&
					currentCharacter !== "\t" &&
					currentCharacter !== "\r" &&
					currentCharacter !== "\n"
				) {
					// Hit non-whitespace following a comma; comma is not trailing
					buffer += jsonString.slice(offset, index);
					offset = index;
					commaIndex = -1;
				}
			} else if (currentCharacter === ",") {
				// Flush buffer prior to this point, and save new comma index
				result += buffer + jsonString.slice(offset, index);
				buffer = "";
				offset = index;
				commaIndex = index;
			}
		}
	}

	const remaining =
		isInsideComment === singleComment
			? strip(jsonString, offset, jsonString.length)
			: jsonString.slice(offset);

	return result + buffer + remaining;
}

module.exports = stripJsonComments;
