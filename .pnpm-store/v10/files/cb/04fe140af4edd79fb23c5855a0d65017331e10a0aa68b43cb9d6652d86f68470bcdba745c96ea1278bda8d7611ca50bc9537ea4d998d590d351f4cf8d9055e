/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const { register } = require("./serialization");

/** @typedef {import("../serialization/ObjectMiddleware").Constructor} Constructor */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

/** @typedef {{ serialize: (context: ObjectSerializerContext) => void, deserialize: (context: ObjectDeserializerContext) => void }} SerializableClass */
/**
 * Defines the serializable class constructor type used by this module.
 * @template {SerializableClass} T
 * @typedef {(new (...params: EXPECTED_ANY[]) => T) & { deserialize?: (context: ObjectDeserializerContext) => T }} SerializableClassConstructor
 */

/**
 * Represents ClassSerializer.
 * @template {SerializableClass} T
 */
class ClassSerializer {
	/**
	 * Creates an instance of ClassSerializer.
	 * @param {SerializableClassConstructor<T>} Constructor constructor
	 */
	constructor(Constructor) {
		this.Constructor = Constructor;
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {T} obj obj
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(obj, context) {
		obj.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 * @returns {T} obj
	 */
	deserialize(context) {
		if (typeof this.Constructor.deserialize === "function") {
			return this.Constructor.deserialize(context);
		}
		const obj = new this.Constructor();
		obj.deserialize(context);
		return obj;
	}
}

/**
 * Processes the provided constructor.
 * @template {Constructor} T
 * @param {T} Constructor the constructor
 * @param {string} request the request which will be required when deserializing
 * @param {string | null=} name the name to make multiple serializer unique when sharing a request
 */
module.exports = (Constructor, request, name = null) => {
	register(Constructor, request, name, new ClassSerializer(Constructor));
};
