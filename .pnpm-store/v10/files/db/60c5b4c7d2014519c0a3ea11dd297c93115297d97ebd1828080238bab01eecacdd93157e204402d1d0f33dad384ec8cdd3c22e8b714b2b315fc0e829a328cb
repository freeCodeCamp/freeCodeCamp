/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Florent Cailhol @ooflorent
*/

"use strict";

const WebpackError = require("./WebpackError");

/** @typedef {import("./Compiler")} Compiler */

class WarnDeprecatedOptionPlugin {
	/**
	 * Create an instance of the plugin
	 * @param {string} option the target option
	 * @param {string | number} value the deprecated option value
	 * @param {string} suggestion the suggestion replacement
	 */
	constructor(option, value, suggestion) {
		this.option = option;
		this.value = value;
		this.suggestion = suggestion;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.thisCompilation.tap(
			"WarnDeprecatedOptionPlugin",
			compilation => {
				compilation.warnings.push(
					new DeprecatedOptionWarning(this.option, this.value, this.suggestion)
				);
			}
		);
	}
}

class DeprecatedOptionWarning extends WebpackError {
	/**
	 * Create an instance deprecated option warning
	 * @param {string} option the target option
	 * @param {string | number} value the deprecated option value
	 * @param {string} suggestion the suggestion replacement
	 */
	constructor(option, value, suggestion) {
		super();

		this.name = "DeprecatedOptionWarning";
		this.message =
			"configuration\n" +
			`The value '${value}' for option '${option}' is deprecated. ` +
			`Use '${suggestion}' instead.`;
	}
}

module.exports = WarnDeprecatedOptionPlugin;
