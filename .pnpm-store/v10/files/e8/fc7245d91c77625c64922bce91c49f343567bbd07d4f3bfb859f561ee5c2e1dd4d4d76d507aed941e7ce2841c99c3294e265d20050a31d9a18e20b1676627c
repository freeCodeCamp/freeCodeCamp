/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Haijie Xie @hai-x
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const ContextDependency = require("./ContextDependency");
const ContextDependencyTemplateAsRequireCall = require("./ContextDependencyTemplateAsRequireCall");

/** @typedef {import("../ContextModule").ContextOptions} ContextOptions */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

/** @typedef {ContextOptions & { request: string }} ContextDependencyOptions */

class URLContextDependency extends ContextDependency {
	/**
	 * Creates an instance of URLContextDependency.
	 * @param {ContextDependencyOptions} options options
	 * @param {Range} range range
	 * @param {Range} valueRange value range
	 */
	constructor(options, range, valueRange) {
		super(options);
		this.range = range;
		this.valueRange = valueRange;
	}

	get type() {
		return "new URL() context";
	}

	get category() {
		return "url";
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.valueRange);
		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.valueRange = read();
		super.deserialize(context);
	}
}

makeSerializable(
	URLContextDependency,
	"webpack/lib/dependencies/URLContextDependency"
);

URLContextDependency.Template = ContextDependencyTemplateAsRequireCall;

module.exports = URLContextDependency;
