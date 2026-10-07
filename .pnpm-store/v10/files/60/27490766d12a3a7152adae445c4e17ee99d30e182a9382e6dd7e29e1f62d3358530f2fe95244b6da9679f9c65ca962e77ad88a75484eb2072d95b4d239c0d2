/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Dependency = require("../Dependency");
const makeSerializable = require("../util/makeSerializable");
const ModuleDependency = require("./ModuleDependency");

/** @typedef {import("../ContextModule")} ContextModule */
/** @typedef {import("../Dependency").RawReferencedExports} RawReferencedExports */
/** @typedef {import("../Dependency").ReferencedExports} ReferencedExports */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../javascript/JavascriptParser").ImportAttributes} ImportAttributes */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

class ContextElementDependency extends ModuleDependency {
	/**
	 * Creates an instance of ContextElementDependency.
	 * @param {string} request request
	 * @param {string | undefined} userRequest user request
	 * @param {string | undefined} typePrefix type prefix
	 * @param {string} category category
	 * @param {RawReferencedExports | null=} referencedExports referenced exports
	 * @param {string=} context context
	 * @param {ImportAttributes=} attributes import assertions
	 */
	constructor(
		request,
		userRequest,
		typePrefix,
		category,
		referencedExports,
		context,
		attributes
	) {
		super(request);

		if (userRequest) {
			this.userRequest = userRequest;
		}

		this._typePrefix = typePrefix;
		this._category = category;
		this.referencedExports = referencedExports;
		this._context = context || undefined;
		this.attributes = attributes;
	}

	get type() {
		if (this._typePrefix) {
			return `${this._typePrefix} context element`;
		}

		return "context element";
	}

	get category() {
		return this._category;
	}

	/**
	 * Returns an identifier to merge equal requests.
	 * @returns {string | null} an identifier to merge equal requests
	 */
	getResourceIdentifier() {
		let str = super.getResourceIdentifier();
		if (this.attributes) {
			str += `|attributes${JSON.stringify(this.attributes)}`;
		}
		return str;
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {ReferencedExports} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		if (!this.referencedExports) return Dependency.EXPORTS_OBJECT_REFERENCED;
		/** @type {ReferencedExports} */
		const refs = [];
		for (const referencedExport of this.referencedExports) {
			if (
				this._typePrefix === "import()" &&
				referencedExport[0] === "default"
			) {
				const selfModule =
					/** @type {ContextModule} */
					(moduleGraph.getParentModule(this));
				const importedModule =
					/** @type {Module} */
					(moduleGraph.getModule(this));
				const exportsType = importedModule.getExportsType(
					moduleGraph,
					selfModule.options.namespaceObject === "strict"
				);
				if (
					exportsType === "default-only" ||
					exportsType === "default-with-named"
				) {
					return Dependency.EXPORTS_OBJECT_REFERENCED;
				}
			}
			refs.push({
				name: referencedExport,
				canMangle: false
			});
		}
		return refs;
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this._typePrefix);
		write(this._category);
		write(this.referencedExports);
		write(this.attributes);
		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this._typePrefix = read();
		this._category = read();
		this.referencedExports = read();
		this.attributes = read();
		super.deserialize(context);
	}
}

makeSerializable(
	ContextElementDependency,
	"webpack/lib/dependencies/ContextElementDependency"
);

module.exports = ContextElementDependency;
