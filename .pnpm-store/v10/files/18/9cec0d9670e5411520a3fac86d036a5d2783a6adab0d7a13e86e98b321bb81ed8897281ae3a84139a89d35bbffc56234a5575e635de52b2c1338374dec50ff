/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Alexander Akait @alexander-akait
*/

"use strict";

const createHash = require("./createHash");

/**
 * @param {string | Buffer} content content
 * @param {string} file file
 * @returns {string} generated debug id
 */
module.exports = (content, file) => {
	// We need a uuid which is 128 bits so we need 2x 64 bit hashes.
	// The first 64 bits is a hash of the source.
	const sourceHash = createHash("xxhash64").update(content).digest("hex");
	// The next 64 bits is a hash of the filename and sourceHash
	const hash128 = `${sourceHash}${createHash("xxhash64")
		.update(file)
		.update(sourceHash)
		.digest("hex")}`;

	return [
		hash128.slice(0, 8),
		hash128.slice(8, 12),
		`4${hash128.slice(12, 15)}`,
		((Number.parseInt(hash128.slice(15, 16), 16) & 3) | 8).toString(16) +
			hash128.slice(17, 20),
		hash128.slice(20, 32)
	].join("-");
};
