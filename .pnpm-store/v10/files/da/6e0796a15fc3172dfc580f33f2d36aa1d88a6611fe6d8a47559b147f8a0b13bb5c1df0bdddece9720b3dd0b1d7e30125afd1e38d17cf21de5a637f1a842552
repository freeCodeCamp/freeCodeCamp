/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

// \n = 10
// ; = 59
// { = 123
// } = 125
// <space> = 32
// \r = 13
// \t = 9

/**
 * @param {string} str string
 * @returns {string[] | null} array of string separated by potential tokens
 */
const splitIntoPotentialTokens = (str) => {
	const len = str.length;
	if (len === 0) return null;
	const results = [];
	let i = 0;
	while (i < len) {
		const start = i;
		block: {
			let cc = str.charCodeAt(i);
			while (cc !== 10 && cc !== 59 && cc !== 123 && cc !== 125) {
				if (++i >= len) break block;
				cc = str.charCodeAt(i);
			}
			while (
				cc === 59 ||
				cc === 32 ||
				cc === 123 ||
				cc === 125 ||
				cc === 13 ||
				cc === 9
			) {
				if (++i >= len) break block;
				cc = str.charCodeAt(i);
			}
			if (cc === 10) {
				i++;
			}
		}
		results.push(str.slice(start, i));
	}
	return results;
};

module.exports = splitIntoPotentialTokens;
