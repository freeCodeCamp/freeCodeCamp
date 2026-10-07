/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

/** @typedef {import("./ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

class DateObjectSerializer {
	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {Date} obj date
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(obj, context) {
		context.write(obj.getTime());
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 * @returns {Date} date
	 */
	deserialize(context) {
		return new Date(context.read());
	}
}

module.exports = DateObjectSerializer;
