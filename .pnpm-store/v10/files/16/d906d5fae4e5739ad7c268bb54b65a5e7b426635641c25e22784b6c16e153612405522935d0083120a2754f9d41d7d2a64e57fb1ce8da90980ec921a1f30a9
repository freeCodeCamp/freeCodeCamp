/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const NullDependency = require("./NullDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("./LocalModule")} LocalModule */

class LocalModuleDependency extends NullDependency {
	/**
	 * @param {LocalModule} localModule local module
	 * @param {Range | undefined} range range
	 * @param {boolean} callNew true, when the local module should be called with new
	 */
	constructor(localModule, range, callNew) {
		super();

		this.localModule = localModule;
		this.range = range;
		this.callNew = callNew;
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;

		write(this.localModule);
		write(this.range);
		write(this.callNew);

		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.localModule = read();
		this.range = read();
		this.callNew = read();

		super.deserialize(context);
	}
}

makeSerializable(
	LocalModuleDependency,
	"webpack/lib/dependencies/LocalModuleDependency"
);

LocalModuleDependency.Template = class LocalModuleDependencyTemplate extends (
	NullDependency.Template
) {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, templateContext) {
		const dep = /** @type {LocalModuleDependency} */ (dependency);
		if (!dep.range) return;
		const moduleInstance = dep.callNew
			? `new (function () { return ${dep.localModule.variableName()}; })()`
			: dep.localModule.variableName();
		source.replace(dep.range[0], dep.range[1] - 1, moduleInstance);
	}
};

module.exports = LocalModuleDependency;
