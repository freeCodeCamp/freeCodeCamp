/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

/** @typedef {import("./ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

class NullPrototypeObjectSerializer {
	/**
	 * @template {object} T
	 * @param {T} obj null object
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(obj, context) {
		/** @type {string[]} */
		const keys = Object.keys(obj);
		for (const key of keys) {
			context.write(key);
		}
		context.write(null);
		for (const key of keys) {
			context.write(obj[/** @type {keyof T} */ (key)]);
		}
	}

	/**
	 * @template {object} T
	 * @param {ObjectDeserializerContext} context context
	 * @returns {T} null object
	 */
	deserialize(context) {
		/** @type {T} */
		const obj = Object.create(null);
		/** @type {string[]} */
		const keys = [];
		/** @type {string | null} */
		let key = context.read();
		while (key !== null) {
			keys.push(key);
			key = context.read();
		}
		for (const key of keys) {
			obj[/** @type {keyof T} */ (key)] = context.read();
		}
		return obj;
	}
}

module.exports = NullPrototypeObjectSerializer;
