/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const WebpackError = require("./WebpackError");
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */

class UnsupportedFeatureWarning extends WebpackError {
	/**
	 * Creates an instance of UnsupportedFeatureWarning.
	 * @param {string} message description of warning
	 * @param {DependencyLocation} loc location start and end positions of the module
	 */
	constructor(message, loc) {
		super(message);

		/** @type {string} */
		this.name = "UnsupportedFeatureWarning";
		/** @type {DependencyLocation} */
		this.loc = loc;
		/** @type {boolean} */
		this.hideStack = true;
	}
}

makeSerializable(
	UnsupportedFeatureWarning,
	"webpack/lib/UnsupportedFeatureWarning"
);

module.exports = UnsupportedFeatureWarning;
