/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * Compare two arrays or strings by performing strict equality check for each value.
 * @template T [T=any]
 * @param {ArrayLike<T>} a Array of values to be compared
 * @param {ArrayLike<T>} b Array of values to be compared
 * @returns {boolean} returns true if all the elements of passed arrays are strictly equal.
 */

module.exports.equals = (a, b) => {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) return false;
	}
	return true;
};

/**
 * Partition an array by calling a predicate function on each value.
 * @template T [T=any]
 * @param {Array<T>} arr Array of values to be partitioned
 * @param {(value: T) => boolean} fn Partition function which partitions based on truthiness of result.
 * @returns {[Array<T>, Array<T>]} returns the values of `arr` partitioned into two new arrays based on fn predicate.
 */

module.exports.groupBy = (
	// eslint-disable-next-line default-param-last
	arr = [],
	fn
) =>
	arr.reduce(
		/**
		 * @param {[Array<T>, Array<T>]} groups An accumulator storing already partitioned values returned from previous call.
		 * @param {T} value The value of the current element
		 * @returns {[Array<T>, Array<T>]} returns an array of partitioned groups accumulator resulting from calling a predicate on the current value.
		 */
		(groups, value) => {
			groups[fn(value) ? 0 : 1].push(value);
			return groups;
		},
		[[], []]
	);
