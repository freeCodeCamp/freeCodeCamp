/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const WebpackError = require("./WebpackError");
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */

/**
 * Warning used for comment-related compilation issues, such as malformed magic
 * comments that webpack can parse but wants to report.
 */
class CommentCompilationWarning extends WebpackError {
	/**
	 * Captures a warning message together with the dependency location that
	 * triggered it.
	 * @param {string} message warning message
	 * @param {DependencyLocation} loc affected lines of code
	 */
	constructor(message, loc) {
		super(message);

		/** @type {string} */
		this.name = "CommentCompilationWarning";
		/** @type {DependencyLocation} */
		this.loc = loc;
	}
}

makeSerializable(
	CommentCompilationWarning,
	"webpack/lib/CommentCompilationWarning"
);

module.exports = CommentCompilationWarning;
