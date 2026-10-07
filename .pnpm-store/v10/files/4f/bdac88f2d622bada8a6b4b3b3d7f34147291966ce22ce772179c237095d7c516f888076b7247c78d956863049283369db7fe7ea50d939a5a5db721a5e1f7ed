/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const ImportDependency = require("./ImportDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../javascript/JavascriptParser").ImportAttributes} ImportAttributes */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {ImportDependency.RawReferencedExports} RawReferencedExports */
/** @typedef {import("./ImportPhase").ImportPhaseType} ImportPhaseType */

class ImportEagerDependency extends ImportDependency {
	/**
	 * Creates an instance of ImportEagerDependency.
	 * @param {string} request the request
	 * @param {Range} range expression range
	 * @param {RawReferencedExports | null} referencedExports list of referenced exports
	 * @param {ImportPhaseType} phase import phase
	 * @param {ImportAttributes=} attributes import attributes
	 */
	constructor(request, range, referencedExports, phase, attributes) {
		super(request, range, referencedExports, phase, attributes);
	}

	get type() {
		return "import() eager";
	}

	get category() {
		return "esm";
	}
}

makeSerializable(
	ImportEagerDependency,
	"webpack/lib/dependencies/ImportEagerDependency"
);

ImportEagerDependency.Template = class ImportEagerDependencyTemplate extends (
	ImportDependency.Template
) {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
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
		const dep = /** @type {ImportEagerDependency} */ (dependency);
		const content = runtimeTemplate.moduleNamespacePromise({
			chunkGraph,
			module: /** @type {Module} */ (moduleGraph.getModule(dep)),
			request: dep.request,
			strict: /** @type {BuildMeta} */ (module.buildMeta).strictHarmonyModule,
			message: "import() eager",
			dependency: dep,
			runtimeRequirements
		});

		source.replace(dep.range[0], dep.range[1] - 1, content);
	}
};

module.exports = ImportEagerDependency;
