/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { compareModulesByIdentifier } = require("../util/comparators");
const {
	assignAscendingModuleIds,
	assignNames,
	getLongModuleName,
	getShortModuleName,
	getUsedModuleIdsAndModules
} = require("./IdHelpers");

/** @typedef {import("../Compiler")} Compiler */

/**
 * Defines the named module ids plugin options type used by this module.
 * @typedef {object} NamedModuleIdsPluginOptions
 * @property {string=} context context
 */

const PLUGIN_NAME = "NamedModuleIdsPlugin";

class NamedModuleIdsPlugin {
	/**
	 * Creates an instance of NamedModuleIdsPlugin.
	 * @param {NamedModuleIdsPluginOptions=} options options
	 */
	constructor(options = {}) {
		/** @type {NamedModuleIdsPluginOptions} */
		this.options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const { root } = compiler;
		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			const hashFunction = compilation.outputOptions.hashFunction;
			compilation.hooks.moduleIds.tap(PLUGIN_NAME, () => {
				const chunkGraph = compilation.chunkGraph;
				const context = this.options.context
					? this.options.context
					: compiler.context;

				const [usedIds, modules] = getUsedModuleIdsAndModules(compilation);
				const unnamedModules = assignNames(
					modules,
					(m) => getShortModuleName(m, context, root),
					(m, shortName) =>
						getLongModuleName(shortName, m, context, hashFunction, root),
					compareModulesByIdentifier,
					usedIds,
					(m, name) => chunkGraph.setModuleId(m, name)
				);
				if (unnamedModules.length > 0) {
					assignAscendingModuleIds(usedIds, unnamedModules, compilation);
				}
			});
		});
	}
}

module.exports = NamedModuleIdsPlugin;
