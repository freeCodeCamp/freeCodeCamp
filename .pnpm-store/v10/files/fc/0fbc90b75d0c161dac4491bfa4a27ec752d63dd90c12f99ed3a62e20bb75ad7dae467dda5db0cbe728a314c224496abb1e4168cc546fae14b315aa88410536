/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("webpack-sources").Source} Source */

/** @type {WeakMap<Source, WeakMap<Source, boolean>>} */
const equalityCache = new WeakMap();

/**
 * @param {Source} a a source
 * @param {Source} b another source
 * @returns {boolean} true, when both sources are equal
 */
const _isSourceEqual = (a, b) => {
	// prefer .buffer(), it's called anyway during emit
	/** @type {Buffer|string} */
	let aSource = typeof a.buffer === "function" ? a.buffer() : a.source();
	/** @type {Buffer|string} */
	let bSource = typeof b.buffer === "function" ? b.buffer() : b.source();
	if (aSource === bSource) return true;
	if (typeof aSource === "string" && typeof bSource === "string") return false;
	if (!Buffer.isBuffer(aSource)) aSource = Buffer.from(aSource, "utf-8");
	if (!Buffer.isBuffer(bSource)) bSource = Buffer.from(bSource, "utf-8");
	return aSource.equals(bSource);
};

/**
 * @param {Source} a a source
 * @param {Source} b another source
 * @returns {boolean} true, when both sources are equal
 */
const isSourceEqual = (a, b) => {
	if (a === b) return true;
	const cache1 = equalityCache.get(a);
	if (cache1 !== undefined) {
		const result = cache1.get(b);
		if (result !== undefined) return result;
	}
	const result = _isSourceEqual(a, b);
	if (cache1 !== undefined) {
		cache1.set(b, result);
	} else {
		const map = new WeakMap();
		map.set(b, result);
		equalityCache.set(a, map);
	}
	const cache2 = equalityCache.get(b);
	if (cache2 !== undefined) {
		cache2.set(a, result);
	} else {
		const map = new WeakMap();
		map.set(a, result);
		equalityCache.set(b, map);
	}
	return result;
};
module.exports.isSourceEqual = isSourceEqual;
