/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

/** @typedef {import("./ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

/** @typedef {(arg0?: any) => void} CacheAssoc */

/**
 * @template T
 * @typedef {WeakMap<CacheAssoc, ObjectStructure<T>>}
 */
const cache = new WeakMap();

/**
 * @template T
 */
class ObjectStructure {
	constructor() {
		this.keys = undefined;
		this.children = undefined;
	}

	/**
	 * @param {keyof T[]} keys keys
	 * @returns {keyof T[]} keys
	 */
	getKeys(keys) {
		if (this.keys === undefined) this.keys = keys;
		return this.keys;
	}

	/**
	 * @param {keyof T} key key
	 * @returns {ObjectStructure<T>} object structure
	 */
	key(key) {
		if (this.children === undefined) this.children = new Map();
		const child = this.children.get(key);
		if (child !== undefined) return child;
		const newChild = new ObjectStructure();
		this.children.set(key, newChild);
		return newChild;
	}
}

/**
 * @template T
 * @param {(keyof T)[]} keys keys
 * @param {CacheAssoc} cacheAssoc cache assoc fn
 * @returns {(keyof T)[]} keys
 */
const getCachedKeys = (keys, cacheAssoc) => {
	let root = cache.get(cacheAssoc);
	if (root === undefined) {
		root = new ObjectStructure();
		cache.set(cacheAssoc, root);
	}
	let current = root;
	for (const key of keys) {
		current = current.key(key);
	}
	return current.getKeys(keys);
};

class PlainObjectSerializer {
	/**
	 * @template {object} T
	 * @param {T} obj plain object
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(obj, context) {
		const keys = /** @type {(keyof T)[]} */ (Object.keys(obj));
		if (keys.length > 128) {
			// Objects with so many keys are unlikely to share structure
			// with other objects
			context.write(keys);
			for (const key of keys) {
				context.write(obj[key]);
			}
		} else if (keys.length > 1) {
			context.write(getCachedKeys(keys, context.write));
			for (const key of keys) {
				context.write(obj[key]);
			}
		} else if (keys.length === 1) {
			const key = keys[0];
			context.write(key);
			context.write(obj[key]);
		} else {
			context.write(null);
		}
	}

	/**
	 * @template {object} T
	 * @param {ObjectDeserializerContext} context context
	 * @returns {T} plain object
	 */
	deserialize(context) {
		const keys = context.read();
		const obj = /** @type {T} */ ({});
		if (Array.isArray(keys)) {
			for (const key of keys) {
				obj[/** @type {keyof T} */ (key)] = context.read();
			}
		} else if (keys !== null) {
			obj[/** @type {keyof T} */ (keys)] = context.read();
		}
		return obj;
	}
}

module.exports = PlainObjectSerializer;
