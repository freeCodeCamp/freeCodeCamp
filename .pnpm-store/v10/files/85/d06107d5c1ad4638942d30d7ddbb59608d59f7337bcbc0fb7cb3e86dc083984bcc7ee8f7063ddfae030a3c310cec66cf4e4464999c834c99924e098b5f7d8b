/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

/** @typedef {import("./ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

class ArraySerializer {
	/**
	 * @template T
	 * @param {T[]} array array
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(array, context) {
		context.write(array.length);
		for (const item of array) context.write(item);
	}

	/**
	 * @template T
	 * @param {ObjectDeserializerContext} context context
	 * @returns {T[]} array
	 */
	deserialize(context) {
		/** @type {number} */
		const length = context.read();
		/** @type {T[]} */
		const array = [];
		for (let i = 0; i < length; i++) {
			array.push(context.read());
		}
		return array;
	}
}

module.exports = ArraySerializer;
