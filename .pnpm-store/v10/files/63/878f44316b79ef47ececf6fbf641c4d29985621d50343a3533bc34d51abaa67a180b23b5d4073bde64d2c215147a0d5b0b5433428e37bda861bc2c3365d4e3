/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const Dependency = require("../Dependency");
const Template = require("../Template");
const makeSerializable = require("../util/makeSerializable");
const ModuleDependency = require("./ModuleDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Dependency").ReferencedExport} ReferencedExport */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

class WebpackIsIncludedDependency extends ModuleDependency {
	/**
	 * @param {string} request the request string
	 * @param {Range} range location in source code
	 */
	constructor(request, range) {
		super(request);

		this.weak = true;
		this.range = range;
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {(string[] | ReferencedExport)[]} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		// This doesn't use any export
		return Dependency.NO_EXPORTS_REFERENCED;
	}

	get type() {
		return "__webpack_is_included__";
	}
}

makeSerializable(
	WebpackIsIncludedDependency,
	"webpack/lib/dependencies/WebpackIsIncludedDependency"
);

WebpackIsIncludedDependency.Template = class WebpackIsIncludedDependencyTemplate extends (
	ModuleDependency.Template
) {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, { runtimeTemplate, chunkGraph, moduleGraph }) {
		const dep = /** @type {WebpackIsIncludedDependency} */ (dependency);
		const connection = moduleGraph.getConnection(dep);
		const included = connection
			? chunkGraph.getNumberOfModuleChunks(connection.module) > 0
			: false;
		const comment = runtimeTemplate.outputOptions.pathinfo
			? Template.toComment(
					`__webpack_is_included__ ${runtimeTemplate.requestShortener.shorten(
						dep.request
					)}`
				)
			: "";

		source.replace(
			dep.range[0],
			dep.range[1] - 1,
			`${comment}${JSON.stringify(included)}`
		);
	}
};

module.exports = WebpackIsIncludedDependency;
