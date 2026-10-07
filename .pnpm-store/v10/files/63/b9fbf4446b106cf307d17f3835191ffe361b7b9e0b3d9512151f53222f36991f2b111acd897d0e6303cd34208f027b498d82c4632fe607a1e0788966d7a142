/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const WebpackError = require("../WebpackError");

/** @typedef {import("../Module")} Module */

class BuildCycleError extends WebpackError {
	/**
	 * Creates an instance of ModuleDependencyError.
	 * @param {Module} module the module starting the cycle
	 */
	constructor(module) {
		super(
			"There is a circular build dependency, which makes it impossible to create this module"
		);

		this.name = "BuildCycleError";
		this.module = module;
	}
}

module.exports = BuildCycleError;
