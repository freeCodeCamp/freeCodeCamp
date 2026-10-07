/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const WebpackError = require("./WebpackError");

const CURRENT_METHOD_REGEXP = /at ([a-zA-Z0-9_.]*)/;

/**
 * Creates the error message shown when an abstract API is called without
 * being implemented by a subclass.
 * @param {string=} method method name
 * @returns {string} message
 */
function createMessage(method) {
	return `Abstract method${method ? ` ${method}` : ""}. Must be overridden.`;
}

/**
 * Captures a stack trace so the calling method name can be folded into the
 * final abstract-method error message.
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
 * Error thrown when code reaches a method that is intended to be overridden by
 * a subclass.
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
	/**
	 * Creates an error whose message points at the abstract method that was
	 * invoked.
	 */
	constructor() {
		super(new Message().message);
		/** @type {string} */
		this.name = "AbstractMethodError";
	}
}

module.exports = AbstractMethodError;
