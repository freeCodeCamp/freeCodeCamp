/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

/**
 * Defines the function returning type used by this module.
 * @template T
 * @typedef {() => T} FunctionReturning
 */

/**
 * Returns new function.
 * @template T
 * @param {FunctionReturning<T>} fn memorized function
 * @returns {FunctionReturning<T>} new function
 */
const memoize = (fn) => {
	let cache = false;
	/** @type {T | undefined} */
	let result;
	return () => {
		if (cache) {
			return /** @type {T} */ (result);
		}

		result = fn();
		cache = true;
		// Allow to clean up memory for fn
		// and all dependent resources
		/** @type {FunctionReturning<T> | undefined} */
		(fn) = undefined;
		return /** @type {T} */ (result);
	};
};

module.exports = memoize;
