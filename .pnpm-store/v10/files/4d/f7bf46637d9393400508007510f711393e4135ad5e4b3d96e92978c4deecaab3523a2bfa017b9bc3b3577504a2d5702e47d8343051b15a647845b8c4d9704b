/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Gengkun He @ahabhgk
*/

"use strict";

/** @typedef {import("../../declarations/WebpackOptions").CssGeneratorExportsConvention} CssGeneratorExportsConvention */

/**
 * @param {string} input input
 * @param {CssGeneratorExportsConvention | undefined} convention convention
 * @returns {string[]} results
 */
module.exports.cssExportConvention = (input, convention) => {
	const set = new Set();
	if (typeof convention === "function") {
		set.add(convention(input));
	} else {
		switch (convention) {
			case "camel-case": {
				set.add(input);
				set.add(module.exports.camelCase(input));
				break;
			}
			case "camel-case-only": {
				set.add(module.exports.camelCase(input));
				break;
			}
			case "dashes": {
				set.add(input);
				set.add(module.exports.dashesCamelCase(input));
				break;
			}
			case "dashes-only": {
				set.add(module.exports.dashesCamelCase(input));
				break;
			}
			case "as-is": {
				set.add(input);
				break;
			}
		}
	}
	return Array.from(set);
};

// Copy from css-loader
/**
 * @param {string} input input
 * @returns {string} result
 */
module.exports.dashesCamelCase = input =>
	input.replace(/-+(\w)/g, (match, firstLetter) => firstLetter.toUpperCase());

// Copy from css-loader
/**
 * @param {string} input input
 * @returns {string} result
 */
module.exports.camelCase = input => {
	let result = input.trim();

	if (result.length === 0) {
		return "";
	}

	if (result.length === 1) {
		return result.toLowerCase();
	}

	const hasUpperCase = result !== result.toLowerCase();

	if (hasUpperCase) {
		result = preserveCamelCase(result);
	}

	return result
		.replace(/^[_.\- ]+/, "")
		.toLowerCase()
		.replace(/[_.\- ]+([\p{Alpha}\p{N}_]|$)/gu, (_, p1) => p1.toUpperCase())
		.replace(/\d+([\p{Alpha}\p{N}_]|$)/gu, m => m.toUpperCase());
};

// Copy from css-loader
/**
 * @param {string} string string
 * @returns {string} result
 */
const preserveCamelCase = string => {
	let result = string;
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < result.length; i++) {
		const character = result[i];

		if (isLastCharLower && /[\p{Lu}]/u.test(character)) {
			result = `${result.slice(0, i)}-${result.slice(i)}`;
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i += 1;
		} else if (
			isLastCharUpper &&
			isLastLastCharUpper &&
			/[\p{Ll}]/u.test(character)
		) {
			result = `${result.slice(0, i - 1)}-${result.slice(i - 1)}`;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower =
				character.toLowerCase() === character &&
				character.toUpperCase() !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper =
				character.toUpperCase() === character &&
				character.toLowerCase() !== character;
		}
	}

	return result;
};
