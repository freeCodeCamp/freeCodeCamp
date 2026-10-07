/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../Source").RawSourceMap} RawSourceMap */

/**
 * @param {RawSourceMap} sourceMap source map
 * @param {number} index index
 * @returns {string | undefined | null} name
 */
const getName = (sourceMap, index) => {
	if (index < 0) return null;
	const { names } = sourceMap;
	return names[index];
};

module.exports = getName;
