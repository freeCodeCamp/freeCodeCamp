/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const NullDependency = require("./NullDependency");

/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Dependency").ExportSpec} ExportSpec */
/** @typedef {import("../Dependency").ExportsSpec} ExportsSpec */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */

class StaticExportsDependency extends NullDependency {
	/**
	 * @param {string[] | true} exports export names
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
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.exports);
		write(this.canMangle);
		super.serialize(context);
	}

	/**
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
