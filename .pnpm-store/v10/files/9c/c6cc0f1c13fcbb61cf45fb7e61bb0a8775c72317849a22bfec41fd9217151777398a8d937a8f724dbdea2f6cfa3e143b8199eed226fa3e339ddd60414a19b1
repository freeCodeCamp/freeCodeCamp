/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const WebpackError = require("./WebpackError");

/** @typedef {import("./Module")} Module */

class ModuleHashingError extends WebpackError {
	/**
	 * Create a new ModuleHashingError
	 * @param {Module} module related module
	 * @param {Error} error Original error
	 */
	constructor(module, error) {
		super();

		this.name = "ModuleHashingError";
		this.error = error;
		this.message = error.message;
		this.details = error.stack;
		this.module = module;
	}
}

module.exports = ModuleHashingError;
