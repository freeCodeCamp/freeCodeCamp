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

class ModuleWarning extends WebpackError {
	/**
	 * @param {Error} warning error thrown
	 * @param {{from?: string|null}} info additional info
	 */
	constructor(warning, { from = null } = {}) {
		let message = "Module Warning";

		message += from ? ` (from ${from}):\n` : ": ";

		if (warning && typeof warning === "object" && warning.message) {
			message += warning.message;
		} else if (warning) {
			message += String(warning);
		}

		super(message);

		this.name = "ModuleWarning";
		this.warning = warning;
		this.details =
			warning && typeof warning === "object" && warning.stack
				? cleanUp(warning.stack, this.message)
				: undefined;
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;

		write(this.warning);

		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.warning = read();

		super.deserialize(context);
	}
}

makeSerializable(ModuleWarning, "webpack/lib/ModuleWarning");

module.exports = ModuleWarning;
