/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const NoModeWarning = require("./NoModeWarning");

/** @typedef {import("./Compiler")} Compiler */

const PLUGIN_NAME = "WarnNoModeSetPlugin";

class WarnNoModeSetPlugin {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
			compilation.warnings.push(new NoModeWarning());
		});
	}
}

module.exports = WarnNoModeSetPlugin;
