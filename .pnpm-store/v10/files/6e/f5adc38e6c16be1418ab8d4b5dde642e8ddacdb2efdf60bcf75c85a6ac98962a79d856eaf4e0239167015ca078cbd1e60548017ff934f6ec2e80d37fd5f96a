/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const WebpackError = require("../WebpackError");

/** @typedef {import("../Module")} Module */

class BuildCycleError extends WebpackError {
	/**
	 * Creates an instance of BuildCycleError.
	 * @param {Module} module the module starting the cycle
	 */
	constructor(module) {
		super(
			"There is a circular build dependency, which makes it impossible to create this module"
		);

		/** @type {string} */
		this.name = "BuildCycleError";
		/** @type {Module} */
		this.module = module;
	}
}

/** @type {typeof BuildCycleError} */
module.exports = BuildCycleError;
