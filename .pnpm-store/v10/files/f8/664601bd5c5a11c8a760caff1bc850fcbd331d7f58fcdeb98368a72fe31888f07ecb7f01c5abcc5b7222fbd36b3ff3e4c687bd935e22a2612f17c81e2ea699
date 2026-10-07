/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

/** @typedef {import("./ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

/** @typedef {Error & { cause?: unknown, errors: EXPECTED_ANY[] }} AggregateError */

class AggregateErrorSerializer {
	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {AggregateError} obj error
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(obj, context) {
		context.write(obj.errors);
		context.write(obj.message);
		context.write(obj.stack);
		context.write(obj.cause);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 * @returns {AggregateError} error
	 */
	deserialize(context) {
		const errors = context.read();
		// eslint-disable-next-line n/no-unsupported-features/es-builtins, n/no-unsupported-features/es-syntax, unicorn/error-message
		const err = new AggregateError(errors);

		err.message = context.read();
		err.stack = context.read();
		err.cause = context.read();

		return err;
	}
}

module.exports = AggregateErrorSerializer;
