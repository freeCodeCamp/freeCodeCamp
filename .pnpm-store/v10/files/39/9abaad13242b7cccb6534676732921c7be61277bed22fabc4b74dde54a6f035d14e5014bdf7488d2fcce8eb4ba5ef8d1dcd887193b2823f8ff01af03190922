/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const A_CODE = "a".charCodeAt(0);

/**
 * @param {string} hash hash
 * @param {number} hashLength hash length
 * @returns {string} returns hash that has at least one non numeric char
 */
module.exports = (hash, hashLength) => {
	if (hashLength < 1) return "";
	const slice = hash.slice(0, hashLength);
	if (/[^\d]/.test(slice)) return slice;
	return `${String.fromCharCode(
		A_CODE + (Number.parseInt(hash[0], 10) % 6)
	)}${slice.slice(1)}`;
};
