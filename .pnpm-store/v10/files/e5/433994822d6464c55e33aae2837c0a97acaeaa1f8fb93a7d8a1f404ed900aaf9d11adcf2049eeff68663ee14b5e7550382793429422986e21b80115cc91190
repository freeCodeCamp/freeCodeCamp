/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Sean Larkin @thelarkinn
*/

"use strict";

const WebpackError = require("./WebpackError");

/** @typedef {import("./Module")} Module */

/**
 * @template T
 * @callback Callback
 * @param {Error | null} err
 * @param {T=} stats
 * @returns {void}
 */

class HookWebpackError extends WebpackError {
	/**
	 * Creates an instance of HookWebpackError.
	 * @param {Error} error inner error
	 * @param {string} hook name of hook
	 */
	constructor(error, hook) {
		super(error.message);

		this.name = "HookWebpackError";
		this.hook = hook;
		this.error = error;
		this.hideStack = true;
		this.details = `caused by plugins in ${hook}\n${error.stack}`;

		this.stack += `\n-- inner error --\n${error.stack}`;
	}
}

module.exports = HookWebpackError;

/**
 * @param {Error} error an error
 * @param {string} hook name of the hook
 * @returns {WebpackError} a webpack error
 */
const makeWebpackError = (error, hook) => {
	if (error instanceof WebpackError) return error;
	return new HookWebpackError(error, hook);
};
module.exports.makeWebpackError = makeWebpackError;

/**
 * @template T
 * @param {function(WebpackError | null, T=): void} callback webpack error callback
 * @param {string} hook name of hook
 * @returns {Callback<T>} generic callback
 */
const makeWebpackErrorCallback = (callback, hook) => (err, result) => {
	if (err) {
		if (err instanceof WebpackError) {
			callback(err);
			return;
		}
		callback(new HookWebpackError(err, hook));
		return;
	}
	callback(null, result);
};

module.exports.makeWebpackErrorCallback = makeWebpackErrorCallback;

/**
 * @template T
 * @param {function(): T} fn function which will be wrapping in try catch
 * @param {string} hook name of hook
 * @returns {T} the result
 */
const tryRunOrWebpackError = (fn, hook) => {
	let r;
	try {
		r = fn();
	} catch (err) {
		if (err instanceof WebpackError) {
			throw err;
		}
		throw new HookWebpackError(/** @type {Error} */ (err), hook);
	}
	return r;
};

module.exports.tryRunOrWebpackError = tryRunOrWebpackError;
