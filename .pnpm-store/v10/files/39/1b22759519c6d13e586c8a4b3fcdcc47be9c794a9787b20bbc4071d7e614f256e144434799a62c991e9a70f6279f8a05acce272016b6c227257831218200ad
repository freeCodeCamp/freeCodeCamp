/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const memoize = require("../util/memoize");

const LAZY_TARGET = Symbol("lazy serialization target");
const LAZY_SERIALIZED_VALUE = Symbol("lazy serialization data");

/**
 * @template DeserializedType
 * @template SerializedType
 */
class SerializerMiddleware {
	/* istanbul ignore next */
	/**
	 * @abstract
	 * @param {DeserializedType} data data
	 * @param {object} context context object
	 * @returns {SerializedType|Promise<SerializedType>} serialized data
	 */
	serialize(data, context) {
		const AbstractMethodError = require("../AbstractMethodError");
		throw new AbstractMethodError();
	}

	/* istanbul ignore next */
	/**
	 * @abstract
	 * @param {SerializedType} data data
	 * @param {object} context context object
	 * @returns {DeserializedType|Promise<DeserializedType>} deserialized data
	 */
	deserialize(data, context) {
		const AbstractMethodError = require("../AbstractMethodError");
		throw new AbstractMethodError();
	}

	/**
	 * @param {any | function(): Promise<any> | any} value contained value or function to value
	 * @param {SerializerMiddleware<any, any>} target target middleware
	 * @param {object=} options lazy options
	 * @param {any=} serializedValue serialized value
	 * @returns {function(): Promise<any> | any} lazy function
	 */
	static createLazy(value, target, options = {}, serializedValue = undefined) {
		if (SerializerMiddleware.isLazy(value, target)) return value;
		const fn = typeof value === "function" ? value : () => value;
		fn[LAZY_TARGET] = target;
		/** @type {any} */ (fn).options = options;
		fn[LAZY_SERIALIZED_VALUE] = serializedValue;
		return fn;
	}

	/**
	 * @param {function(): Promise<any> | any} fn lazy function
	 * @param {SerializerMiddleware<any, any>=} target target middleware
	 * @returns {boolean} true, when fn is a lazy function (optionally of that target)
	 */
	static isLazy(fn, target) {
		if (typeof fn !== "function") return false;
		const t = fn[LAZY_TARGET];
		return target ? t === target : Boolean(t);
	}

	/**
	 * @param {function(): Promise<any> | any} fn lazy function
	 * @returns {object | undefined} options
	 */
	static getLazyOptions(fn) {
		if (typeof fn !== "function") return;
		return /** @type {any} */ (fn).options;
	}

	/**
	 * @param {function(): Promise<any> | any} fn lazy function
	 * @returns {any | undefined} serialized value
	 */
	static getLazySerializedValue(fn) {
		if (typeof fn !== "function") return;
		return fn[LAZY_SERIALIZED_VALUE];
	}

	/**
	 * @param {function(): Promise<any> | any} fn lazy function
	 * @param {any} value serialized value
	 * @returns {void}
	 */
	static setLazySerializedValue(fn, value) {
		fn[LAZY_SERIALIZED_VALUE] = value;
	}

	/**
	 * @param {function(): Promise<any> | any} lazy lazy function
	 * @param {function(any): Promise<any> | any} serialize serialize function
	 * @returns {function(): Promise<any> | any} new lazy
	 */
	static serializeLazy(lazy, serialize) {
		const fn = memoize(() => {
			const r = lazy();
			if (r && typeof r.then === "function") {
				return r.then(data => data && serialize(data));
			}
			return serialize(r);
		});
		fn[LAZY_TARGET] = lazy[LAZY_TARGET];
		/** @type {any} */ (fn).options = /** @type {any} */ (lazy).options;
		lazy[LAZY_SERIALIZED_VALUE] = fn;
		return fn;
	}

	/**
	 * @template T
	 * @param {function(): Promise<any> | any} lazy lazy function
	 * @param {function(T): Promise<T> | T} deserialize deserialize function
	 * @returns {function(): Promise<T> | T} new lazy
	 */
	static deserializeLazy(lazy, deserialize) {
		const fn = memoize(() => {
			const r = lazy();
			if (r && typeof r.then === "function") {
				return r.then(data => deserialize(data));
			}
			return deserialize(r);
		});
		fn[LAZY_TARGET] = lazy[LAZY_TARGET];
		/** @type {any} */ (fn).options = /** @type {any} */ (lazy).options;
		fn[LAZY_SERIALIZED_VALUE] = lazy;
		return fn;
	}

	/**
	 * @param {function(): Promise<any> | any} lazy lazy function
	 * @returns {function(): Promise<any> | any} new lazy
	 */
	static unMemoizeLazy(lazy) {
		if (!SerializerMiddleware.isLazy(lazy)) return lazy;
		const fn = () => {
			throw new Error(
				"A lazy value that has been unmemorized can't be called again"
			);
		};
		fn[LAZY_SERIALIZED_VALUE] = SerializerMiddleware.unMemoizeLazy(
			lazy[LAZY_SERIALIZED_VALUE]
		);
		fn[LAZY_TARGET] = lazy[LAZY_TARGET];
		fn.options = /** @type {any} */ (lazy).options;
		return fn;
	}
}

module.exports = SerializerMiddleware;
