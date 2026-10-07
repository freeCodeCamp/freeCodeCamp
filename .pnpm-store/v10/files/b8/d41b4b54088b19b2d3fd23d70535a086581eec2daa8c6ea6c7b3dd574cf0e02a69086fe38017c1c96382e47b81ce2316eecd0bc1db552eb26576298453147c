/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const WebpackError = require("./WebpackError");
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */

class NodeStuffInWebError extends WebpackError {
	/**
	 * @param {DependencyLocation} loc loc
	 * @param {string} expression expression
	 * @param {string} description description
	 */
	constructor(loc, expression, description) {
		super(
			`${JSON.stringify(
				expression
			)} has been used, it will be undefined in next major version.
${description}`
		);

		this.name = "NodeStuffInWebError";
		this.loc = loc;
	}
}

makeSerializable(NodeStuffInWebError, "webpack/lib/NodeStuffInWebError");

module.exports = NodeStuffInWebError;
