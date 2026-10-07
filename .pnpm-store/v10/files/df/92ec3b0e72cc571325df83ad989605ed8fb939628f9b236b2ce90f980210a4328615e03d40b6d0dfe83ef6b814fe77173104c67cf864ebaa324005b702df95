/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

/** @typedef {import("./ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

class SetObjectSerializer {
	/**
	 * @template T
	 * @param {Set<T>} obj set
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(obj, context) {
		context.write(obj.size);
		for (const value of obj) {
			context.write(value);
		}
	}

	/**
	 * @template T
	 * @param {ObjectDeserializerContext} context context
	 * @returns {Set<T>} date
	 */
	deserialize(context) {
		/** @type {number} */
		const size = context.read();
		/** @type {Set<T>} */
		const set = new Set();
		for (let i = 0; i < size; i++) {
			set.add(context.read());
		}
		return set;
	}
}

module.exports = SetObjectSerializer;
