/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Dependency = require("../Dependency");
const makeSerializable = require("../util/makeSerializable");
const ContextDependency = require("./ContextDependency");
const ContextDependencyTemplateAsRequireCall = require("./ContextDependencyTemplateAsRequireCall");

/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("./ContextDependency").ContextDependencyOptions} ContextDependencyOptions */
/** @typedef {import("../Dependency").RawReferencedExports} RawReferencedExports */
/** @typedef {import("../Dependency").ReferencedExports} ReferencedExports */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

class CommonJsRequireContextDependency extends ContextDependency {
	/**
	 * Creates an instance of CommonJsRequireContextDependency.
	 * @param {ContextDependencyOptions} options options for the context module
	 * @param {Range} range location in source code
	 * @param {Range=} valueRange location of the require call
	 * @param {boolean | string=} inShorthand true or name
	 * @param {string=} context context
	 */
	constructor(options, range, valueRange, inShorthand, context) {
		super(options, context);

		this.range = range;
		this.valueRange = valueRange;
		// inShorthand must be serialized by subclasses that use it
		this.inShorthand = inShorthand;
	}

	get type() {
		return "cjs require context";
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {ReferencedExports} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		if (!this.options.referencedExports) {
			return Dependency.EXPORTS_OBJECT_REFERENCED;
		}
		return this.options.referencedExports.map((name) => ({
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

		write(this.range);
		write(this.valueRange);
		write(this.inShorthand);

		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.range = read();
		this.valueRange = read();
		this.inShorthand = read();

		super.deserialize(context);
	}
}

makeSerializable(
	CommonJsRequireContextDependency,
	"webpack/lib/dependencies/CommonJsRequireContextDependency"
);

CommonJsRequireContextDependency.Template =
	ContextDependencyTemplateAsRequireCall;

module.exports = CommonJsRequireContextDependency;
