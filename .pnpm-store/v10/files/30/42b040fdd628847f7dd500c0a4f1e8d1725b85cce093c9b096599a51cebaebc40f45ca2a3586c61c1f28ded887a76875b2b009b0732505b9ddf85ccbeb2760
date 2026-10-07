/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");

/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

class LocalModule {
	/**
	 * @param {string} name name
	 * @param {number} idx index
	 */
	constructor(name, idx) {
		this.name = name;
		this.idx = idx;
		this.used = false;
	}

	flagUsed() {
		this.used = true;
	}

	/**
	 * @returns {string} variable name
	 */
	variableName() {
		return `__WEBPACK_LOCAL_MODULE_${this.idx}__`;
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;

		write(this.name);
		write(this.idx);
		write(this.used);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.name = read();
		this.idx = read();
		this.used = read();
	}
}

makeSerializable(LocalModule, "webpack/lib/dependencies/LocalModule");

module.exports = LocalModule;
