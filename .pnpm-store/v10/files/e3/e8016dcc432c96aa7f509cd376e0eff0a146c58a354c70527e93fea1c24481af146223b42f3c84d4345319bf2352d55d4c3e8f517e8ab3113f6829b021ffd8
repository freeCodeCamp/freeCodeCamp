/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

/** @typedef {import("./ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

class RegExpObjectSerializer {
	/**
	 * @param {RegExp} obj regexp
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(obj, context) {
		context.write(obj.source);
		context.write(obj.flags);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 * @returns {RegExp} regexp
	 */
	deserialize(context) {
		return new RegExp(context.read(), context.read());
	}
}

module.exports = RegExpObjectSerializer;
