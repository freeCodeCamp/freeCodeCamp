/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { SAFE_IDENTIFIER, RESERVED_IDENTIFIER } = require("./propertyName");

/**
 * @param {ArrayLike<string>} properties properties
 * @param {number} start start index
 * @returns {string} chain of property accesses
 */
const propertyAccess = (properties, start = 0) => {
	let str = "";
	for (let i = start; i < properties.length; i++) {
		const p = properties[i];
		if (`${Number(p)}` === p) {
			str += `[${p}]`;
		} else if (SAFE_IDENTIFIER.test(p) && !RESERVED_IDENTIFIER.has(p)) {
			str += `.${p}`;
		} else {
			str += `[${JSON.stringify(p)}]`;
		}
	}
	return str;
};

module.exports = propertyAccess;
