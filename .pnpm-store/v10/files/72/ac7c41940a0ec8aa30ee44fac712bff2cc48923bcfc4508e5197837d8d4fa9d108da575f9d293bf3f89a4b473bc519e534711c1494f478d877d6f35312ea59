/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Jarid Margolin @jaridmargolin
*/

"use strict";

const inspect = require("util").inspect.custom;
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

class WebpackError extends Error {
	/**
	 * Creates an instance of WebpackError.
	 * @param {string=} message error message
	 */
	constructor(message) {
		super(message);

		/** @type {string=} */
		this.details = undefined;
		/** @type {(Module | null)=} */
		this.module = undefined;
		/** @type {DependencyLocation=} */
		this.loc = undefined;
		/** @type {boolean=} */
		this.hideStack = undefined;
		/** @type {Chunk=} */
		this.chunk = undefined;
		/** @type {string=} */
		this.file = undefined;
	}

	[inspect]() {
		return this.stack + (this.details ? `\n${this.details}` : "");
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize({ write }) {
		write(this.name);
		write(this.message);
		write(this.stack);
		write(this.details);
		write(this.loc);
		write(this.hideStack);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize({ read }) {
		this.name = read();
		this.message = read();
		this.stack = read();
		this.details = read();
		this.loc = read();
		this.hideStack = read();
	}
}

makeSerializable(WebpackError, "webpack/lib/WebpackError");

module.exports = WebpackError;
