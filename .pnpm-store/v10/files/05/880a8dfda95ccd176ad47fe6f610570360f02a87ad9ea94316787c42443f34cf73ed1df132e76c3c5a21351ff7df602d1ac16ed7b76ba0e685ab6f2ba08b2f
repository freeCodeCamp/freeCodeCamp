/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const NormalModule = require("./NormalModule");

/** @typedef {import("./Compiler")} Compiler */

class LoaderTargetPlugin {
	/**
	 * @param {string} target the target
	 */
	constructor(target) {
		this.target = target;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap("LoaderTargetPlugin", compilation => {
			NormalModule.getCompilationHooks(compilation).loader.tap(
				"LoaderTargetPlugin",
				loaderContext => {
					loaderContext.target = this.target;
				}
			);
		});
	}
}

module.exports = LoaderTargetPlugin;
