/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../Cache").Etag} Etag */

class MergedEtag {
	/**
	 * @param {Etag} a first
	 * @param {Etag} b second
	 */
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}

	toString() {
		return `${this.a.toString()}|${this.b.toString()}`;
	}
}

const dualObjectMap = new WeakMap();
const objectStringMap = new WeakMap();

/**
 * @param {Etag} a first
 * @param {Etag} b second
 * @returns {Etag} result
 */
const mergeEtags = (a, b) => {
	if (typeof a === "string") {
		if (typeof b === "string") {
			return `${a}|${b}`;
		}
		const temp = b;
		b = a;
		a = temp;
	} else if (typeof b !== "string") {
		// both a and b are objects
		let map = dualObjectMap.get(a);
		if (map === undefined) {
			dualObjectMap.set(a, (map = new WeakMap()));
		}
		const mergedEtag = map.get(b);
		if (mergedEtag === undefined) {
			const newMergedEtag = new MergedEtag(a, b);
			map.set(b, newMergedEtag);
			return newMergedEtag;
		}
		return mergedEtag;
	}
	// a is object, b is string
	let map = objectStringMap.get(a);
	if (map === undefined) {
		objectStringMap.set(a, (map = new Map()));
	}
	const mergedEtag = map.get(b);
	if (mergedEtag === undefined) {
		const newMergedEtag = new MergedEtag(a, b);
		map.set(b, newMergedEtag);
		return newMergedEtag;
	}
	return mergedEtag;
};

module.exports = mergeEtags;
