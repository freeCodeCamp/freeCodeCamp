/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const ImportDependency = require("./ImportDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").ReferencedExport} ReferencedExport */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../javascript/JavascriptParser").ImportAttributes} ImportAttributes */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */

class ImportWeakDependency extends ImportDependency {
	/**
	 * @param {string} request the request
	 * @param {Range} range expression range
	 * @param {(string[][] | null)=} referencedExports list of referenced exports
	 * @param {ImportAttributes=} attributes import attributes
	 */
	constructor(request, range, referencedExports, attributes) {
		super(request, range, referencedExports, attributes);
		this.weak = true;
	}

	get type() {
		return "import() weak";
	}
}

makeSerializable(
	ImportWeakDependency,
	"webpack/lib/dependencies/ImportWeakDependency"
);

ImportWeakDependency.Template = class ImportDependencyTemplate extends (
	ImportDependency.Template
) {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(
		dependency,
		source,
		{ runtimeTemplate, module, moduleGraph, chunkGraph, runtimeRequirements }
	) {
		const dep = /** @type {ImportWeakDependency} */ (dependency);
		const content = runtimeTemplate.moduleNamespacePromise({
			chunkGraph,
			module: /** @type {Module} */ (moduleGraph.getModule(dep)),
			request: dep.request,
			strict: /** @type {BuildMeta} */ (module.buildMeta).strictHarmonyModule,
			message: "import() weak",
			weak: true,
			runtimeRequirements
		});

		source.replace(dep.range[0], dep.range[1] - 1, content);
	}
};

module.exports = ImportWeakDependency;
