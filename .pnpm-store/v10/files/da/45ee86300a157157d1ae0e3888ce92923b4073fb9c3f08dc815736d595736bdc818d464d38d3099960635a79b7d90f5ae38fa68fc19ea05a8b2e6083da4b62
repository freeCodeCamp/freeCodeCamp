/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const NullDependency = require("./NullDependency");

/** @typedef {import("../Dependency").ExportsSpec} ExportsSpec */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

/** @typedef {string[] | true} Exports */

class StaticExportsDependency extends NullDependency {
	/**
	 * Creates an instance of StaticExportsDependency.
	 * @param {Exports} exports export names
	 * @param {boolean} canMangle true, if mangling exports names is allowed
	 */
	constructor(exports, canMangle) {
		super();
		this.exports = exports;
		this.canMangle = canMangle;
	}

	get type() {
		return "static exports";
	}

	/**
	 * Returns the exported names
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {ExportsSpec | undefined} export names
	 */
	getExports(moduleGraph) {
		return {
			exports: this.exports,
			canMangle: this.canMangle,
			dependencies: undefined
		};
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.exports);
		write(this.canMangle);
		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.exports = read();
		this.canMangle = read();
		super.deserialize(context);
	}
}

makeSerializable(
	StaticExportsDependency,
	"webpack/lib/dependencies/StaticExportsDependency"
);

module.exports = StaticExportsDependency;
