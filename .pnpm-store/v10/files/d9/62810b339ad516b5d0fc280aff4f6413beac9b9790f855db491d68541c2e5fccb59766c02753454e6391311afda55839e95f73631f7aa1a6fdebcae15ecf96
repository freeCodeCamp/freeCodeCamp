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
	 * @param {string} message description of warning
	 * @param {DependencyLocation} loc location start and end positions of the module
	 */
	constructor(message, loc) {
		super(message);

		this.name = "UnsupportedFeatureWarning";
		this.loc = loc;
		this.hideStack = true;
	}
}

makeSerializable(
	UnsupportedFeatureWarning,
	"webpack/lib/UnsupportedFeatureWarning"
);

module.exports = UnsupportedFeatureWarning;
