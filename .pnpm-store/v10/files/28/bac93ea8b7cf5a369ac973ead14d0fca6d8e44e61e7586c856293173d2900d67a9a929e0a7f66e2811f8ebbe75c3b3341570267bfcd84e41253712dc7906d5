/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const WebpackError = require("../WebpackError");
const makeSerializable = require("../util/makeSerializable");

class CriticalDependencyWarning extends WebpackError {
	/**
	 * @param {string} message message
	 */
	constructor(message) {
		super();

		this.name = "CriticalDependencyWarning";
		this.message = `Critical dependency: ${message}`;
	}
}

makeSerializable(
	CriticalDependencyWarning,
	"webpack/lib/dependencies/CriticalDependencyWarning"
);

module.exports = CriticalDependencyWarning;
