/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const ContextDependency = require("./ContextDependency");
const ContextDependencyTemplateAsId = require("./ContextDependencyTemplateAsId");

/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("./ContextDependency").ContextDependencyOptions} ContextDependencyOptions */

class RequireResolveContextDependency extends ContextDependency {
	/**
	 * @param {ContextDependencyOptions} options options
	 * @param {Range} range range
	 * @param {Range} valueRange value range
	 * @param {TODO} context context
	 */
	constructor(options, range, valueRange, context) {
		super(options, context);

		this.range = range;
		this.valueRange = valueRange;
	}

	get type() {
		return "amd require context";
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;

		write(this.range);
		write(this.valueRange);

		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.range = read();
		this.valueRange = read();

		super.deserialize(context);
	}
}

makeSerializable(
	RequireResolveContextDependency,
	"webpack/lib/dependencies/RequireResolveContextDependency"
);

RequireResolveContextDependency.Template = ContextDependencyTemplateAsId;

module.exports = RequireResolveContextDependency;
