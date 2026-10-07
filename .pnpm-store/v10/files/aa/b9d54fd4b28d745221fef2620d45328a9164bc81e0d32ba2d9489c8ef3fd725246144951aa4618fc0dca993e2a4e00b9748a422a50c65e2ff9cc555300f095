/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { DEFAULTS } = require("../config/defaults");
const createHash = require("../util/createHash");

/** @typedef {import("../util/Hash")} Hash */
/** @typedef {typeof import("../util/Hash")} HashConstructor */
/** @typedef {import("../util/Hash").HashFunction} HashFunction */

/**
 * Represents the lazy hashed etag runtime component.
 * @typedef {object} HashableObject
 * @property {(hash: Hash) => void} updateHash
 */

class LazyHashedEtag {
	/**
	 * Creates an instance of LazyHashedEtag.
	 * @param {HashableObject} obj object with updateHash method
	 * @param {HashFunction} hashFunction the hash function to use
	 */
	constructor(obj, hashFunction = DEFAULTS.HASH_FUNCTION) {
		/** @type {HashableObject} */
		this._obj = obj;
		/** @type {undefined | string} */
		this._hash = undefined;
		/** @type {HashFunction} */
		this._hashFunction = hashFunction;
	}

	/**
	 * Returns a string representation.
	 * @returns {string} hash of object
	 */
	toString() {
		if (this._hash === undefined) {
			const hash = createHash(this._hashFunction);
			this._obj.updateHash(hash);
			this._hash = hash.digest("base64");
		}
		return this._hash;
	}
}

/** @typedef {WeakMap<HashableObject, LazyHashedEtag>} InnerCache */

/** @type {Map<HashFunction, InnerCache>} */
const mapStrings = new Map();

/** @type {WeakMap<HashConstructor, InnerCache>} */
const mapObjects = new WeakMap();

/**
 * Returns etag.
 * @param {HashableObject} obj object with updateHash method
 * @param {HashFunction=} hashFunction the hash function to use
 * @returns {LazyHashedEtag} etag
 */
const getter = (obj, hashFunction = DEFAULTS.HASH_FUNCTION) => {
	/** @type {undefined | InnerCache} */
	let innerMap;
	if (typeof hashFunction === "string") {
		innerMap = mapStrings.get(hashFunction);
		if (innerMap === undefined) {
			const newHash = new LazyHashedEtag(obj, hashFunction);
			/** @type {InnerCache} */
			innerMap = new WeakMap();
			innerMap.set(obj, newHash);
			mapStrings.set(hashFunction, innerMap);
			return newHash;
		}
	} else {
		innerMap = mapObjects.get(hashFunction);
		if (innerMap === undefined) {
			const newHash = new LazyHashedEtag(obj, hashFunction);
			/** @type {InnerCache} */
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
