/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Dependency = require("../Dependency");
const makeSerializable = require("../util/makeSerializable");
const ModuleDependency = require("./ModuleDependency");

/** @typedef {import("../Dependency").ReferencedExport} ReferencedExport */
/** @typedef {import("../Dependency").TRANSITIVE} TRANSITIVE */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

class WebAssemblyExportImportedDependency extends ModuleDependency {
	/**
	 * @param {string} exportName export name
	 * @param {string} request request
	 * @param {string} name name
	 * @param {TODO} valueType value type
	 */
	constructor(exportName, request, name, valueType) {
		super(request);
		/** @type {string} */
		this.exportName = exportName;
		/** @type {string} */
		this.name = name;
		/** @type {string} */
		this.valueType = valueType;
	}

	/**
	 * @returns {boolean | TRANSITIVE} true, when changes to the referenced module could affect the referencing module; TRANSITIVE, when changes to the referenced module could affect referencing modules of the referencing module
	 */
	couldAffectReferencingModule() {
		return Dependency.TRANSITIVE;
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {(string[] | ReferencedExport)[]} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		return [[this.name]];
	}

	get type() {
		return "wasm export import";
	}

	get category() {
		return "wasm";
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;

		write(this.exportName);
		write(this.name);
		write(this.valueType);

		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.exportName = read();
		this.name = read();
		this.valueType = read();

		super.deserialize(context);
	}
}

makeSerializable(
	WebAssemblyExportImportedDependency,
	"webpack/lib/dependencies/WebAssemblyExportImportedDependency"
);

module.exports = WebAssemblyExportImportedDependency;
