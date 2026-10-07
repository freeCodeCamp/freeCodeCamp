/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Sean Larkin @thelarkinn
*/

"use strict";

/**
 * @param {number} size the size in bytes
 * @returns {string} the formatted size
 */
module.exports.formatSize = size => {
	if (typeof size !== "number" || Number.isNaN(size) === true) {
		return "unknown size";
	}

	if (size <= 0) {
		return "0 bytes";
	}

	const abbreviations = ["bytes", "KiB", "MiB", "GiB"];
	const index = Math.floor(Math.log(size) / Math.log(1024));

	return `${Number((size / 1024 ** index).toPrecision(3))} ${abbreviations[index]}`;
};
