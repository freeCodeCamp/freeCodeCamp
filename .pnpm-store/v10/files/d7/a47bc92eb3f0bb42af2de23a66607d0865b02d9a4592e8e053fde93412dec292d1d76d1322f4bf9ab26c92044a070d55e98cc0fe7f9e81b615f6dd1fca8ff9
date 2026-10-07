/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Sean Larkin @thelarkinn
*/

"use strict";

const WebpackError = require("./WebpackError");
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

/**
 * Defines the callback callback.
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
		super(error ? error.message : undefined, error ? { cause: error } : {});

		this.hook = hook;
		this.error = error;
		/** @type {string} */
		this.name = "HookWebpackError";
		this.hideStack = true;
		this.stack += `\n-- inner error --\n${error ? error.stack : ""}`;
		this.details = `caused by plugins in ${hook}\n${error ? error.stack : ""}`;
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;

		write(this.error);
		write(this.hook);

		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.error = read();
		this.hook = read();

		super.deserialize(context);
	}
}

makeSerializable(HookWebpackError, "webpack/lib/HookWebpackError");

module.exports = HookWebpackError;

/**
 * Creates webpack error.
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
 * Creates webpack error callback.
 * @template T
 * @param {(err: WebpackError | null, result?: T) => void} callback webpack error callback
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
 * Try run or webpack error.
 * @template T
 * @param {() => T} fn function which will be wrapping in try catch
 * @param {string} hook name of hook
 * @returns {T} the result
 */
const tryRunOrWebpackError = (fn, hook) => {
	/** @type {T} */
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
