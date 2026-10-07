/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { cutOffLoaderExecution } = require("./ErrorHelpers");
const WebpackError = require("./WebpackError");
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

/** @typedef {Error & { hideStack?: boolean }} ErrorWithHideStack */

class ModuleBuildError extends WebpackError {
	/**
	 * Creates an instance of ModuleBuildError.
	 * @param {string | ErrorWithHideStack} err error thrown
	 * @param {{ from?: string | null }} info additional info
	 */
	constructor(err, { from = null } = {}) {
		let message = "Module build failed";
		/** @type {undefined | string} */
		let details;

		message += from ? ` (from ${from}):\n` : ": ";

		if (err !== null && typeof err === "object") {
			if (typeof err.stack === "string" && err.stack) {
				const stack = cutOffLoaderExecution(err.stack);

				if (!err.hideStack) {
					message += stack;
				} else {
					details = stack;

					message +=
						typeof err.message === "string" && err.message ? err.message : err;
				}
			} else if (typeof err.message === "string" && err.message) {
				message += err.message;
			} else {
				message += String(err);
			}
		} else {
			message += String(err);
		}

		super(message);

		/** @type {string} */
		this.name = "ModuleBuildError";
		this.details = details;
		this.error = err;
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

makeSerializable(ModuleBuildError, "webpack/lib/ModuleBuildError");

module.exports = ModuleBuildError;
