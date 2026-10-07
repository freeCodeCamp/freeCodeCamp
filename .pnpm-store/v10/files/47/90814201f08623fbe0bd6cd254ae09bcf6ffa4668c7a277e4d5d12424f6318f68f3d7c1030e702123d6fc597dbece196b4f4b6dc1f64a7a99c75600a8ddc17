/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const CHAR_CODE_NEW_LINE = "\n".charCodeAt(0);

/**
 * @typedef {object} GeneratedSourceInfo
 * @property {number=} generatedLine generated line
 * @property {number=} generatedColumn generated column
 * @property {string=} source source
 */

/**
 * @param {string | undefined} source source
 * @returns {GeneratedSourceInfo} source info
 */
const getGeneratedSourceInfo = (source) => {
	if (source === undefined) {
		return {};
	}
	const lastLineStart = source.lastIndexOf("\n");
	if (lastLineStart === -1) {
		return {
			generatedLine: 1,
			generatedColumn: source.length,
			source,
		};
	}
	let generatedLine = 2;
	for (let i = 0; i < lastLineStart; i++) {
		if (source.charCodeAt(i) === CHAR_CODE_NEW_LINE) generatedLine++;
	}
	return {
		generatedLine,
		generatedColumn: source.length - lastLineStart - 1,
		source,
	};
};

module.exports = getGeneratedSourceInfo;
