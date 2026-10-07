/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const JavascriptModulesPlugin = require("./javascript/JavascriptModulesPlugin");

/** @typedef {import("../declarations/plugins/SourceMapDevToolPlugin").SourceMapDevToolPluginOptions} SourceMapDevToolPluginOptions */
/** @typedef {import("./Compilation")} Compilation */

class SourceMapDevToolModuleOptionsPlugin {
	/**
	 * @param {SourceMapDevToolPluginOptions} options options
	 */
	constructor(options) {
		this.options = options;
	}

	/**
	 * @param {Compilation} compilation the compiler instance
	 * @returns {void}
	 */
	apply(compilation) {
		const options = this.options;
		if (options.module !== false) {
			compilation.hooks.buildModule.tap(
				"SourceMapDevToolModuleOptionsPlugin",
				module => {
					module.useSourceMap = true;
				}
			);
			compilation.hooks.runtimeModule.tap(
				"SourceMapDevToolModuleOptionsPlugin",
				module => {
					module.useSourceMap = true;
				}
			);
		} else {
			compilation.hooks.buildModule.tap(
				"SourceMapDevToolModuleOptionsPlugin",
				module => {
					module.useSimpleSourceMap = true;
				}
			);
			compilation.hooks.runtimeModule.tap(
				"SourceMapDevToolModuleOptionsPlugin",
				module => {
					module.useSimpleSourceMap = true;
				}
			);
		}
		JavascriptModulesPlugin.getCompilationHooks(compilation).useSourceMap.tap(
			"SourceMapDevToolModuleOptionsPlugin",
			() => true
		);
	}
}

module.exports = SourceMapDevToolModuleOptionsPlugin;
