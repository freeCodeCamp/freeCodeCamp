/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const createHash = require("../util/createHash");

/** @typedef {import("../util/Hash")} Hash */
/** @typedef {typeof import("../util/Hash")} HashConstructor */

/**
 * @typedef {object} HashableObject
 * @property {function(Hash): void} updateHash
 */

class LazyHashedEtag {
	/**
	 * @param {HashableObject} obj object with updateHash method
	 * @param {string | HashConstructor} hashFunction the hash function to use
	 */
	constructor(obj, hashFunction = "md4") {
		this._obj = obj;
		this._hash = undefined;
		this._hashFunction = hashFunction;
	}

	/**
	 * @returns {string} hash of object
	 */
	toString() {
		if (this._hash === undefined) {
			const hash = createHash(this._hashFunction);
			this._obj.updateHash(hash);
			this._hash = /** @type {string} */ (hash.digest("base64"));
		}
		return this._hash;
	}
}

/** @type {Map<string | HashConstructor, WeakMap<HashableObject, LazyHashedEtag>>} */
const mapStrings = new Map();

/** @type {WeakMap<HashConstructor, WeakMap<HashableObject, LazyHashedEtag>>} */
const mapObjects = new WeakMap();

/**
 * @param {HashableObject} obj object with updateHash method
 * @param {(string | HashConstructor)=} hashFunction the hash function to use
 * @returns {LazyHashedEtag} etag
 */
const getter = (obj, hashFunction = "md4") => {
	let innerMap;
	if (typeof hashFunction === "string") {
		innerMap = mapStrings.get(hashFunction);
		if (innerMap === undefined) {
			const newHash = new LazyHashedEtag(obj, hashFunction);
			innerMap = new WeakMap();
			innerMap.set(obj, newHash);
			mapStrings.set(hashFunction, innerMap);
			return newHash;
		}
	} else {
		innerMap = mapObjects.get(hashFunction);
		if (innerMap === undefined) {
			const newHash = new LazyHashedEtag(obj, hashFunction);
			innerMap = new WeakMap();
			innerMap.set(obj, newHash);
			mapObjects.set(hashFunction, innerMap);
			return newHash;
		}
	}
	const hash = innerMap.get(obj);
	if (hash !== undefined) return hash;
	const newHash = new LazyHashedEtag(obj, hashFunction);
	innerMap.set(obj, newHash);
	return newHash;
};

module.exports = getter;
