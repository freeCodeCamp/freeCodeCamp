/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("./Compiler")} Compiler */

const PLUGIN_NAME = "NoEmitOnErrorsPlugin";

class NoEmitOnErrorsPlugin {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.shouldEmit.tap(PLUGIN_NAME, (compilation) => {
			if (compilation.getStats().hasErrors()) return false;
		});
		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			compilation.hooks.shouldRecord.tap(PLUGIN_NAME, () => {
				if (compilation.getStats().hasErrors()) return false;
			});
		});
	}
}

module.exports = NoEmitOnErrorsPlugin;
