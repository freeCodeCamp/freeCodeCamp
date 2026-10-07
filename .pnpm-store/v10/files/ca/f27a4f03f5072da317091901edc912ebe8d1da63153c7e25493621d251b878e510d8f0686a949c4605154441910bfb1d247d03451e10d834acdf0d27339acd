/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const WebpackError = require("./WebpackError");
const CURRENT_METHOD_REGEXP = /at ([a-zA-Z0-9_.]*)/;

/**
 * @param {string=} method method name
 * @returns {string} message
 */
function createMessage(method) {
	return `Abstract method${method ? ` ${method}` : ""}. Must be overridden.`;
}

/**
 * @constructor
 */
function Message() {
	/** @type {string | undefined} */
	this.stack = undefined;
	Error.captureStackTrace(this);
	/** @type {RegExpMatchArray | null} */
	const match =
		/** @type {string} */
		(/** @type {unknown} */ (this.stack))
			.split("\n")[3]
			.match(CURRENT_METHOD_REGEXP);

	this.message = match && match[1] ? createMessage(match[1]) : createMessage();
}

/**
 * Error for abstract method
 * @example
 * ```js
 * class FooClass {
 *     abstractMethod() {
 *         throw new AbstractMethodError(); // error message: Abstract method FooClass.abstractMethod. Must be overridden.
 *     }
 * }
 * ```
 */
class AbstractMethodError extends WebpackError {
	constructor() {
		super(new Message().message);
		this.name = "AbstractMethodError";
	}
}

module.exports = AbstractMethodError;
