/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const UnsupportedWebAssemblyFeatureError = require("../wasm-sync/UnsupportedWebAssemblyFeatureError");
const ModuleDependency = require("./ModuleDependency");

/** @typedef {import("@webassemblyjs/ast").ModuleImportDescription} ModuleImportDescription */
/** @typedef {import("../Dependency").ReferencedExport} ReferencedExport */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../WebpackError")} WebpackError */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

class WebAssemblyImportDependency extends ModuleDependency {
	/**
	 * @param {string} request the request
	 * @param {string} name the imported name
	 * @param {ModuleImportDescription} description the WASM ast node
	 * @param {false | string} onlyDirectImport if only direct imports are allowed
	 */
	constructor(request, name, description, onlyDirectImport) {
		super(request);
		/** @type {string} */
		this.name = name;
		/** @type {ModuleImportDescription} */
		this.description = description;
		/** @type {false | string} */
		this.onlyDirectImport = onlyDirectImport;
	}

	get type() {
		return "wasm import";
	}

	get category() {
		return "wasm";
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

	/**
	 * Returns errors
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {WebpackError[] | null | undefined} errors
	 */
	getErrors(moduleGraph) {
		const module = moduleGraph.getModule(this);

		if (
			this.onlyDirectImport &&
			module &&
			!module.type.startsWith("webassembly")
		) {
			return [
				new UnsupportedWebAssemblyFeatureError(
					`Import "${this.name}" from "${this.request}" with ${this.onlyDirectImport} can only be used for direct wasm to wasm dependencies`
				)
			];
		}
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;

		write(this.name);
		write(this.description);
		write(this.onlyDirectImport);

		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.name = read();
		this.description = read();
		this.onlyDirectImport = read();

		super.deserialize(context);
	}
}

makeSerializable(
	WebAssemblyImportDependency,
	"webpack/lib/dependencies/WebAssemblyImportDependency"
);

module.exports = WebAssemblyImportDependency;
