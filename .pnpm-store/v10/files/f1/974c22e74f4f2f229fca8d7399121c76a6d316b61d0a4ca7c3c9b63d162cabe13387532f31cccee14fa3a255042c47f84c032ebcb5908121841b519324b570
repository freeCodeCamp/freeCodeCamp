/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { getEntryRuntime, mergeRuntimeOwned } = require("./util/runtime");

/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./Module").FactoryMeta} FactoryMeta */
/** @typedef {import("./util/runtime").RuntimeSpec} RuntimeSpec */

const PLUGIN_NAME = "FlagAllModulesAsUsedPlugin";
class FlagAllModulesAsUsedPlugin {
	/**
	 * @param {string} explanation explanation
	 */
	constructor(explanation) {
		this.explanation = explanation;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(PLUGIN_NAME, compilation => {
			const moduleGraph = compilation.moduleGraph;
			compilation.hooks.optimizeDependencies.tap(PLUGIN_NAME, modules => {
				/** @type {RuntimeSpec} */
				let runtime;
				for (const [name, { options }] of compilation.entries) {
					runtime = mergeRuntimeOwned(
						runtime,
						getEntryRuntime(compilation, name, options)
					);
				}
				for (const module of modules) {
					const exportsInfo = moduleGraph.getExportsInfo(module);
					exportsInfo.setUsedInUnknownWay(runtime);
					moduleGraph.addExtraReason(module, this.explanation);
					if (module.factoryMeta === undefined) {
						module.factoryMeta = {};
					}
					/** @type {FactoryMeta} */
					(module.factoryMeta).sideEffectFree = false;
				}
			});
		});
	}
}

module.exports = FlagAllModulesAsUsedPlugin;
