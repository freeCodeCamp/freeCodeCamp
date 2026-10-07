/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const memoize = require("../util/memoize");

const LAZY_TARGET = Symbol("lazy serialization target");
const LAZY_SERIALIZED_VALUE = Symbol("lazy serialization data");

/** @typedef {SerializerMiddleware<EXPECTED_ANY, EXPECTED_ANY, Record<string, EXPECTED_ANY>>} LazyTarget */
/** @typedef {Record<string, EXPECTED_ANY>} LazyOptions */

/**
 * Defines the lazy function type used by this module.
 * @template InputValue
 * @template OutputValue
 * @template {LazyTarget} InternalLazyTarget
 * @template {LazyOptions | undefined} InternalLazyOptions
 * @typedef {(() => InputValue | Promise<InputValue>) & Partial<{ [LAZY_TARGET]: InternalLazyTarget, options: InternalLazyOptions, [LAZY_SERIALIZED_VALUE]?: OutputValue | LazyFunction<OutputValue, InputValue, InternalLazyTarget, InternalLazyOptions> | undefined }>} LazyFunction
 */

/**
 * Represents SerializerMiddleware.
 * @template DeserializedType
 * @template SerializedType
 * @template Context
 */
class SerializerMiddleware {
	/* istanbul ignore next */
	/**
	 * Serializes this instance into the provided serializer context.
	 * @abstract
	 * @param {DeserializedType} data data
	 * @param {Context} context context object
	 * @returns {SerializedType | Promise<SerializedType> | null} serialized data
	 */
	serialize(data, context) {
		const AbstractMethodError = require("../AbstractMethodError");

		throw new AbstractMethodError();
	}

	/* istanbul ignore next */
	/**
	 * Restores this instance from the provided deserializer context.
	 * @abstract
	 * @param {SerializedType} data data
	 * @param {Context} context context object
	 * @returns {DeserializedType | Promise<DeserializedType>} deserialized data
	 */
	deserialize(data, context) {
		const AbstractMethodError = require("../AbstractMethodError");

		throw new AbstractMethodError();
	}

	/**
	 * Creates a lazy from the provided value.
	 * @template TLazyInputValue
	 * @template TLazyOutputValue
	 * @template {LazyTarget} TLazyTarget
	 * @template {LazyOptions | undefined} TLazyOptions
	 * @param {TLazyInputValue | (() => TLazyInputValue)} value contained value or function to value
	 * @param {TLazyTarget} target target middleware
	 * @param {TLazyOptions=} options lazy options
	 * @param {TLazyOutputValue=} serializedValue serialized value
	 * @returns {LazyFunction<TLazyInputValue, TLazyOutputValue, TLazyTarget, TLazyOptions>} lazy function
	 */
	static createLazy(
		value,
		target,
		options = /** @type {TLazyOptions} */ ({}),
		serializedValue = undefined
	) {
		if (SerializerMiddleware.isLazy(value, target)) return value;
		const fn =
			/** @type {LazyFunction<TLazyInputValue, TLazyOutputValue, TLazyTarget, TLazyOptions>} */
			(typeof value === "function" ? value : () => value);
		fn[LAZY_TARGET] = target;
		fn.options = options;
		fn[LAZY_SERIALIZED_VALUE] = serializedValue;
		return fn;
	}

	/**
	 * Checks whether this serializer middleware is lazy.
	 * @template {LazyTarget} TLazyTarget
	 * @param {EXPECTED_ANY} fn lazy function
	 * @param {TLazyTarget=} target target middleware
	 * @returns {fn is LazyFunction<EXPECTED_ANY, EXPECTED_ANY, TLazyTarget, EXPECTED_ANY>} true, when fn is a lazy function (optionally of that target)
	 */
	static isLazy(fn, target) {
		if (typeof fn !== "function") return false;
		const t = fn[LAZY_TARGET];
		return target ? t === target : Boolean(t);
	}

	/**
	 * Returns options.
	 * @template TLazyInputValue
	 * @template TLazyOutputValue
	 * @template {LazyTarget} TLazyTarget
	 * @template {Record<string, EXPECTED_ANY>} TLazyOptions
	 * @param {LazyFunction<TLazyInputValue, TLazyOutputValue, TLazyTarget, TLazyOptions>} fn lazy function
	 * @returns {LazyOptions | undefined} options
	 */
	static getLazyOptions(fn) {
		if (typeof fn !== "function") return;
		return fn.options;
	}

	/**
	 * Gets lazy serialized value.
	 * @template TLazyInputValue
	 * @template TLazyOutputValue
	 * @template {LazyTarget} TLazyTarget
	 * @template {LazyOptions} TLazyOptions
	 * @param {LazyFunction<TLazyInputValue, TLazyOutputValue, TLazyTarget, TLazyOptions> | EXPECTED_ANY} fn lazy function
	 * @returns {TLazyOutputValue | undefined} serialized value
	 */
	static getLazySerializedValue(fn) {
		if (typeof fn !== "function") return;
		return fn[LAZY_SERIALIZED_VALUE];
	}

	/**
	 * Sets lazy serialized value.
	 * @template TLazyInputValue
	 * @template TLazyOutputValue
	 * @template {LazyTarget} TLazyTarget
	 * @template {LazyOptions} TLazyOptions
	 * @param {LazyFunction<TLazyInputValue, TLazyOutputValue, TLazyTarget, TLazyOptions>} fn lazy function
	 * @param {TLazyOutputValue} value serialized value
	 * @returns {void}
	 */
	static setLazySerializedValue(fn, value) {
		fn[LAZY_SERIALIZED_VALUE] = value;
	}

	/**
	 * Returns new lazy.
	 * @template TLazyInputValue DeserializedValue
	 * @template TLazyOutputValue SerializedValue
	 * @template {LazyTarget} TLazyTarget
	 * @template {LazyOptions | undefined} TLazyOptions
	 * @param {LazyFunction<TLazyInputValue, TLazyOutputValue, TLazyTarget, TLazyOptions>} lazy lazy function
	 * @param {(value: TLazyInputValue) => TLazyOutputValue} serialize serialize function
	 * @returns {LazyFunction<TLazyOutputValue, TLazyInputValue, TLazyTarget, TLazyOptions>} new lazy
	 */
	static serializeLazy(lazy, serialize) {
		const fn =
			/** @type {LazyFunction<TLazyOutputValue, TLazyInputValue, TLazyTarget, TLazyOptions>} */
			(
				memoize(() => {
					const r = lazy();
					if (
						r &&
						typeof (/** @type {Promise<TLazyInputValue>} */ (r).then) ===
							"function"
					) {
						return (
							/** @type {Promise<TLazyInputValue>} */
							(r).then((data) => data && serialize(data))
						);
					}
					return serialize(/** @type {TLazyInputValue} */ (r));
				})
			);
		fn[LAZY_TARGET] = lazy[LAZY_TARGET];
		fn.options = lazy.options;
		lazy[LAZY_SERIALIZED_VALUE] = fn;
		return fn;
	}

	/**
	 * Returns new lazy.
	 * @template TLazyInputValue SerializedValue
	 * @template TLazyOutputValue DeserializedValue
	 * @template {LazyTarget} TLazyTarget
	 * @template {LazyOptions | undefined} TLazyOptions
	 * @param {LazyFunction<TLazyInputValue, TLazyOutputValue, TLazyTarget, TLazyOptions>} lazy lazy function
	 * @param {(data: TLazyInputValue) => TLazyOutputValue} deserialize deserialize function
	 * @returns {LazyFunction<TLazyOutputValue, TLazyInputValue, TLazyTarget, TLazyOptions>} new lazy
	 */
	static deserializeLazy(lazy, deserialize) {
		const fn =
			/** @type {LazyFunction<TLazyOutputValue, TLazyInputValue, TLazyTarget, TLazyOptions>} */ (
				memoize(() => {
					const r = lazy();
					if (
						r &&
						typeof (/** @type {Promise<TLazyInputValue>} */ (r).then) ===
							"function"
					) {
						return (
							/** @type {Promise<TLazyInputValue>} */
							(r).then((data) => deserialize(data))
						);
					}
					return deserialize(/** @type {TLazyInputValue} */ (r));
				})
			);
		fn[LAZY_TARGET] = lazy[LAZY_TARGET];
		fn.options = lazy.options;
		fn[LAZY_SERIALIZED_VALUE] = lazy;
		return fn;
	}

	/**
	 * Returns new lazy.
	 * @template TLazyInputValue
	 * @template TLazyOutputValue
	 * @template {LazyTarget} TLazyTarget
	 * @template {LazyOptions} TLazyOptions
	 * @param {LazyFunction<TLazyInputValue | TLazyOutputValue, TLazyInputValue | TLazyOutputValue, TLazyTarget, TLazyOptions> | undefined} lazy lazy function
	 * @returns {LazyFunction<TLazyInputValue | TLazyOutputValue, TLazyInputValue | TLazyOutputValue, TLazyTarget, TLazyOptions> | undefined} new lazy
	 */
	static unMemoizeLazy(lazy) {
		if (!SerializerMiddleware.isLazy(lazy)) return lazy;
		/** @type {LazyFunction<TLazyInputValue | TLazyOutputValue, TLazyInputValue | TLazyOutputValue, TLazyTarget, TLazyOptions>} */
		const fn = () => {
			throw new Error(
				"A lazy value that has been unmemorized can't be called again"
			);
		};
		fn[LAZY_SERIALIZED_VALUE] = SerializerMiddleware.unMemoizeLazy(
			/** @type {LazyFunction<TLazyInputValue | TLazyOutputValue, TLazyInputValue | TLazyOutputValue, TLazyTarget, TLazyOptions>} */
			(lazy[LAZY_SERIALIZED_VALUE])
		);
		fn[LAZY_TARGET] = lazy[LAZY_TARGET];
		fn.options = lazy.options;
		return fn;
	}
}

module.exports = SerializerMiddleware;
