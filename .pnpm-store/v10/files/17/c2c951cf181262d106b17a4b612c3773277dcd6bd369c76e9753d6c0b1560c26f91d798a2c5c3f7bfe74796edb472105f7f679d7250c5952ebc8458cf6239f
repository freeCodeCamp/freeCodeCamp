/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const makeSerializable = require("../util/makeSerializable");
const NullDependency = require("./NullDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

class RequireHeaderDependency extends NullDependency {
	/**
	 * @param {Range} range range
	 */
	constructor(range) {
		super();
		if (!Array.isArray(range)) throw new Error("range must be valid");
		this.range = range;
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.range);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 * @returns {RequireHeaderDependency} RequireHeaderDependency
	 */
	static deserialize(context) {
		const obj = new RequireHeaderDependency(context.read());
		obj.deserialize(context);
		return obj;
	}
}

makeSerializable(
	RequireHeaderDependency,
	"webpack/lib/dependencies/RequireHeaderDependency"
);

RequireHeaderDependency.Template = class RequireHeaderDependencyTemplate extends (
	NullDependency.Template
) {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, { runtimeRequirements }) {
		const dep = /** @type {RequireHeaderDependency} */ (dependency);
		runtimeRequirements.add(RuntimeGlobals.require);
		source.replace(dep.range[0], dep.range[1] - 1, RuntimeGlobals.require);
	}
};

module.exports = RequireHeaderDependency;
