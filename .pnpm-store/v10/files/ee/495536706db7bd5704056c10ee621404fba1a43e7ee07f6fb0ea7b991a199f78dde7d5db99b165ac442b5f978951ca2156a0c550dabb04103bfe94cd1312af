/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Alexander Akait @alexander-akait
*/

"use strict";

/**
 * Returns result without BOM.
 * @param {string | Buffer} strOrBuffer string or buffer
 * @returns {string | Buffer} result without BOM
 */
module.exports = (strOrBuffer) => {
	if (typeof strOrBuffer === "string" && strOrBuffer.charCodeAt(0) === 0xfeff) {
		return strOrBuffer.slice(1);
	} else if (
		Buffer.isBuffer(strOrBuffer) &&
		strOrBuffer[0] === 0xef &&
		strOrBuffer[1] === 0xbb &&
		strOrBuffer[2] === 0xbf
	) {
		return strOrBuffer.subarray(3);
	}

	return strOrBuffer;
};
