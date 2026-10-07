/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const JavascriptModulesPlugin = require("./javascript/JavascriptModulesPlugin");

/** @typedef {import("../declarations/plugins/SourceMapDevToolPlugin").SourceMapDevToolPluginOptions} SourceMapDevToolPluginOptions */
/** @typedef {import("./Compilation")} Compilation */

const PLUGIN_NAME = "SourceMapDevToolModuleOptionsPlugin";

class SourceMapDevToolModuleOptionsPlugin {
	/**
	 * Creates an instance of SourceMapDevToolModuleOptionsPlugin.
	 * @param {SourceMapDevToolPluginOptions=} options options
	 */
	constructor(options = {}) {
		/** @type {SourceMapDevToolPluginOptions} */
		this.options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compilation} compilation the compiler instance
	 * @returns {void}
	 */
	apply(compilation) {
		const options = this.options;
		if (options.module !== false) {
			compilation.hooks.buildModule.tap(PLUGIN_NAME, (module) => {
				module.useSourceMap = true;
			});
			compilation.hooks.runtimeModule.tap(PLUGIN_NAME, (module) => {
				module.useSourceMap = true;
			});
		} else {
			compilation.hooks.buildModule.tap(PLUGIN_NAME, (module) => {
				module.useSimpleSourceMap = true;
			});
			compilation.hooks.runtimeModule.tap(PLUGIN_NAME, (module) => {
				module.useSimpleSourceMap = true;
			});
		}
		JavascriptModulesPlugin.getCompilationHooks(compilation).useSourceMap.tap(
			PLUGIN_NAME,
			() => true
		);
	}
}

module.exports = SourceMapDevToolModuleOptionsPlugin;
