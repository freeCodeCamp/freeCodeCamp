/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * @param {string} str string
 * @returns {string[]} array of string separated by lines
 */
const splitIntoLines = (str) => {
	const results = [];
	const len = str.length;
	let i = 0;
	while (i < len) {
		const cc = str.charCodeAt(i);
		// 10 is "\n".charCodeAt(0)
		if (cc === 10) {
			results.push("\n");
			i++;
		} else {
			let j = i + 1;
			// 10 is "\n".charCodeAt(0)
			while (j < len && str.charCodeAt(j) !== 10) j++;
			results.push(str.slice(i, j + 1));
			i = j + 1;
		}
	}
	return results;
};

module.exports = splitIntoLines;
