/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const WebpackError = require("./WebpackError");
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */

class CommentCompilationWarning extends WebpackError {
	/**
	 * @param {string} message warning message
	 * @param {DependencyLocation} loc affected lines of code
	 */
	constructor(message, loc) {
		super(message);

		this.name = "CommentCompilationWarning";

		this.loc = loc;
	}
}

makeSerializable(
	CommentCompilationWarning,
	"webpack/lib/CommentCompilationWarning"
);

module.exports = CommentCompilationWarning;
