/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

/** @typedef {import("./ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

class MapObjectSerializer {
	/**
	 * @template K, V
	 * @param {Map<K, V>} obj map
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(obj, context) {
		context.write(obj.size);
		for (const key of obj.keys()) {
			context.write(key);
		}
		for (const value of obj.values()) {
			context.write(value);
		}
	}

	/**
	 * @template K, V
	 * @param {ObjectDeserializerContext} context context
	 * @returns {Map<K, V>} map
	 */
	deserialize(context) {
		/** @type {number} */
		const size = context.read();
		/** @type {Map<K, V>} */
		const map = new Map();
		/** @type {K[]} */
		const keys = [];
		for (let i = 0; i < size; i++) {
			keys.push(context.read());
		}
		for (let i = 0; i < size; i++) {
			map.set(keys[i], context.read());
		}
		return map;
	}
}

module.exports = MapObjectSerializer;
