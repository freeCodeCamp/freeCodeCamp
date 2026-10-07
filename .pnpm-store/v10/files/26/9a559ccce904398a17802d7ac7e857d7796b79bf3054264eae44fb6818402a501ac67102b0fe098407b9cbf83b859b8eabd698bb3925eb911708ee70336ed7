/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

/**
 * @template T, K
 * @typedef {import("./SerializerMiddleware")<T, K>} SerializerMiddleware
 */

class Serializer {
	/**
	 * @param {SerializerMiddleware<any, any>[]} middlewares serializer middlewares
	 * @param {TODO=} context context
	 */
	constructor(middlewares, context) {
		this.serializeMiddlewares = middlewares.slice();
		this.deserializeMiddlewares = middlewares.slice().reverse();
		this.context = context;
	}

	/**
	 * @param {any} obj object
	 * @param {TODO} context content
	 * @returns {Promise<any>} result
	 */
	serialize(obj, context) {
		const ctx = { ...context, ...this.context };
		let current = obj;
		for (const middleware of this.serializeMiddlewares) {
			if (current && typeof current.then === "function") {
				current = current.then(data => data && middleware.serialize(data, ctx));
			} else if (current) {
				try {
					current = middleware.serialize(current, ctx);
				} catch (err) {
					current = Promise.reject(err);
				}
			} else break;
		}
		return current;
	}

	/**
	 * @param {any} value value
	 * @param {TODO} context context
	 * @returns {Promise<any>} result
	 */
	deserialize(value, context) {
		const ctx = { ...context, ...this.context };
		/** @type {any} */
		let current = value;
		for (const middleware of this.deserializeMiddlewares) {
			current =
				current && typeof current.then === "function"
					? current.then(data => middleware.deserialize(data, ctx))
					: middleware.deserialize(current, ctx);
		}
		return current;
	}
}

module.exports = Serializer;
