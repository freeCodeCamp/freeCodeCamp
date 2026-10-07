/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { getEntryRuntime } = require("./util/runtime");

/** @typedef {import("./Compiler")} Compiler */

const PLUGIN_NAME = "FlagEntryExportAsUsedPlugin";

class FlagEntryExportAsUsedPlugin {
	/**
	 * @param {boolean} nsObjectUsed true, if the ns object is used
	 * @param {string} explanation explanation for the reason
	 */
	constructor(nsObjectUsed, explanation) {
		this.nsObjectUsed = nsObjectUsed;
		this.explanation = explanation;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.thisCompilation.tap(PLUGIN_NAME, compilation => {
			const moduleGraph = compilation.moduleGraph;
			compilation.hooks.seal.tap(PLUGIN_NAME, () => {
				for (const [
					entryName,
					{ dependencies: deps, options }
				] of compilation.entries) {
					const runtime = getEntryRuntime(compilation, entryName, options);
					for (const dep of deps) {
						const module = moduleGraph.getModule(dep);
						if (module) {
							const exportsInfo = moduleGraph.getExportsInfo(module);
							if (this.nsObjectUsed) {
								exportsInfo.setUsedInUnknownWay(runtime);
							} else {
								exportsInfo.setAllKnownExportsUsed(runtime);
							}
							moduleGraph.addExtraReason(module, this.explanation);
						}
					}
				}
			});
		});
	}
}

module.exports = FlagEntryExportAsUsedPlugin;
