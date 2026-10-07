/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const WebpackError = require("./WebpackError");

/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./ModuleBuildError").ErrorWithHideStack} ErrorWithHideStack */

class ModuleDependencyError extends WebpackError {
	/**
	 * Creates an instance of ModuleDependencyError.
	 * @param {Module} module module tied to dependency
	 * @param {ErrorWithHideStack} err error thrown
	 * @param {DependencyLocation} loc location of dependency
	 */
	constructor(module, err, loc) {
		super(err.message);

		/** @type {string} */
		this.name = "ModuleDependencyError";
		this.details =
			err && !err.hideStack
				? /** @type {string} */ (err.stack).split("\n").slice(1).join("\n")
				: undefined;
		this.module = module;
		this.loc = loc;
		/** error is not (de)serialized, so it might be undefined after deserialization */
		this.error = err;

		if (err && err.hideStack && err.stack) {
			this.stack = /** @type {string} */ `${err.stack
				.split("\n")
				.slice(1)
				.join("\n")}\n\n${this.stack}`;
		}
	}
}

module.exports = ModuleDependencyError;
