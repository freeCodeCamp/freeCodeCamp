/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const DependencyTemplate = require("../DependencyTemplate");
const makeSerializable = require("../util/makeSerializable");
const NullDependency = require("./NullDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("./AMDRequireItemDependency")} AMDRequireItemDependency */
/** @typedef {import("./LocalModuleDependency")} LocalModuleDependency */

class AMDRequireArrayDependency extends NullDependency {
	/**
	 * @param {(string | LocalModuleDependency | AMDRequireItemDependency)[]} depsArray deps array
	 * @param {Range} range range
	 */
	constructor(depsArray, range) {
		super();

		this.depsArray = depsArray;
		this.range = range;
	}

	get type() {
		return "amd require array";
	}

	get category() {
		return "amd";
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;

		write(this.depsArray);
		write(this.range);

		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.depsArray = read();
		this.range = read();

		super.deserialize(context);
	}
}

makeSerializable(
	AMDRequireArrayDependency,
	"webpack/lib/dependencies/AMDRequireArrayDependency"
);

AMDRequireArrayDependency.Template = class AMDRequireArrayDependencyTemplate extends (
	DependencyTemplate
) {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, templateContext) {
		const dep = /** @type {AMDRequireArrayDependency} */ (dependency);
		const content = this.getContent(dep, templateContext);
		source.replace(dep.range[0], dep.range[1] - 1, content);
	}

	/**
	 * @param {AMDRequireArrayDependency} dep the dependency for which the template should be applied
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {string} content
	 */
	getContent(dep, templateContext) {
		const requires = dep.depsArray.map(dependency =>
			this.contentForDependency(dependency, templateContext)
		);
		return `[${requires.join(", ")}]`;
	}

	/**
	 * @param {TODO} dep the dependency for which the template should be applied
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {string} content
	 */
	contentForDependency(
		dep,
		{ runtimeTemplate, moduleGraph, chunkGraph, runtimeRequirements }
	) {
		if (typeof dep === "string") {
			return dep;
		}

		if (dep.localModule) {
			return dep.localModule.variableName();
		}
		return runtimeTemplate.moduleExports({
			module: moduleGraph.getModule(dep),
			chunkGraph,
			request: dep.request,
			runtimeRequirements
		});
	}
};

module.exports = AMDRequireArrayDependency;
