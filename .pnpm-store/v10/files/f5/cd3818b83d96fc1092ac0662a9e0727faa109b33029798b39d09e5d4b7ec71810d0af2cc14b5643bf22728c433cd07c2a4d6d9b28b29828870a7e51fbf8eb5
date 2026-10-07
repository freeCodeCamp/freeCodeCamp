/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const HarmonyImportDependency = require("../dependencies/HarmonyImportDependency");

/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module")} Module */

const PLUGIN_NAME = "InferAsyncModulesPlugin";

class InferAsyncModulesPlugin {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			const { moduleGraph } = compilation;
			compilation.hooks.finishModules.tap(PLUGIN_NAME, (modules) => {
				/** @type {Set<Module>} */
				const queue = new Set();
				for (const module of modules) {
					if (module.buildMeta && module.buildMeta.async) {
						queue.add(module);
					}
				}
				for (const module of queue) {
					moduleGraph.setAsync(module);
					for (const [
						originModule,
						connections
					] of moduleGraph.getIncomingConnectionsByOriginModule(module)) {
						if (
							connections.some(
								(c) =>
									c.dependency instanceof HarmonyImportDependency &&
									c.isTargetActive(undefined)
							)
						) {
							queue.add(/** @type {Module} */ (originModule));
						}
					}
				}
			});
		});
	}
}

module.exports = InferAsyncModulesPlugin;
