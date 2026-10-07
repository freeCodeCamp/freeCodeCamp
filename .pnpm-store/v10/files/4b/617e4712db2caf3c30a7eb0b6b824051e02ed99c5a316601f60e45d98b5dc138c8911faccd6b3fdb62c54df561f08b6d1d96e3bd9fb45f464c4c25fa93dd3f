/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Dependency = require("../Dependency");
const makeSerializable = require("../util/makeSerializable");
const ModuleDependency = require("./ModuleDependency");
const ModuleDependencyTemplateAsId = require("./ModuleDependencyTemplateAsId");

/** @typedef {import("../Dependency").RawReferencedExports} RawReferencedExports */
/** @typedef {import("../Dependency").ReferencedExports} ReferencedExports */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

class CommonJsRequireDependency extends ModuleDependency {
	/**
	 * Creates an instance of CommonJsRequireDependency.
	 * @param {string} request request
	 * @param {Range=} range location in source code
	 * @param {string=} context request context
	 * @param {RawReferencedExports | null=} referencedExports list of referenced exports
	 */
	constructor(request, range, context, referencedExports = null) {
		super(request);
		this.range = range;
		this._context = context;
		this.referencedExports = referencedExports;
	}

	get type() {
		return "cjs require";
	}

	get category() {
		return "commonjs";
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {ReferencedExports} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		if (!this.referencedExports) return Dependency.EXPORTS_OBJECT_REFERENCED;
		return this.referencedExports.map((name) => ({
			name,
			canMangle: false
		}));
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.referencedExports);
		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.referencedExports = read();
		super.deserialize(context);
	}
}

CommonJsRequireDependency.Template = ModuleDependencyTemplateAsId;

makeSerializable(
	CommonJsRequireDependency,
	"webpack/lib/dependencies/CommonJsRequireDependency"
);

module.exports = CommonJsRequireDependency;
