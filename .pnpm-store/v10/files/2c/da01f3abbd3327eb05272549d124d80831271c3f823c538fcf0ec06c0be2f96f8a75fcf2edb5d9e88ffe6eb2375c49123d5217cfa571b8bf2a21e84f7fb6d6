/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { cleanUp } = require("./ErrorHelpers");
const WebpackError = require("./WebpackError");
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

class ModuleError extends WebpackError {
	/**
	 * @param {Error} err error thrown
	 * @param {{ from?: string | null }} info additional info
	 */
	constructor(err, { from = null } = {}) {
		let message = "Module Error";

		message += from ? ` (from ${from}):\n` : ": ";

		if (err && typeof err === "object" && err.message) {
			message += err.message;
		} else if (err) {
			message += err;
		}

		super(message);

		/** @type {string} */
		this.name = "ModuleError";
		/** @type {Error} */
		this.error = err;
		/** @type {string | undefined} */
		this.details =
			err && typeof err === "object" && err.stack
				? cleanUp(err.stack, this.message)
				: undefined;
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;

		write(this.error);

		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.error = read();

		super.deserialize(context);
	}
}

makeSerializable(ModuleError, "webpack/lib/ModuleError");

module.exports = ModuleError;
