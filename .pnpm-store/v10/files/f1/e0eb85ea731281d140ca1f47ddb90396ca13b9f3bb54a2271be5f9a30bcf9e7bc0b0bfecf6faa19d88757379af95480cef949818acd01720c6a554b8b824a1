/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const NoModeWarning = require("./NoModeWarning");

/** @typedef {import("./Compiler")} Compiler */

class WarnNoModeSetPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.thisCompilation.tap("WarnNoModeSetPlugin", compilation => {
			compilation.warnings.push(new NoModeWarning());
		});
	}
}

module.exports = WarnNoModeSetPlugin;
