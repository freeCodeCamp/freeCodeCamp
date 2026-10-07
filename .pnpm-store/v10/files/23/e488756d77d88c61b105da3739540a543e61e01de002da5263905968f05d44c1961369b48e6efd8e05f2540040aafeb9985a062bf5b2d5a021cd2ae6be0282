/**
 * @fileoverview Applies default rule options
 * @author JoshuaKGoldberg
 */

"use strict";

/**
 * Check if the variable contains an object strictly rejecting arrays
 * @param {unknown} value an object
 * @returns {boolean} Whether value is an object
 */
function isObjectNotArray(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Deeply merges second on top of first, creating a new {} object if needed.
 * @param {T} first Base, default value.
 * @param {U} second User-specified value.
 * @returns {T | U | (T & U)} Merged equivalent of second on top of first.
 */
function deepMergeObjects(first, second) {
	if (second === void 0) {
		return first;
	}

	if (!isObjectNotArray(first) || !isObjectNotArray(second)) {
		return second;
	}

	const result = { ...first, ...second };

	for (const key of Object.keys(second)) {
		if (Object.prototype.propertyIsEnumerable.call(first, key)) {
			result[key] = deepMergeObjects(first[key], second[key]);
		}
	}

	return result;
}

/**
 * Deeply merges second on top of first, creating a new [] array if needed.
 * @param {T[]} first Base, default values.
 * @param {U[]} second User-specified values.
 * @returns {(T | U | (T & U))[]} Merged equivalent of second on top of first.
 */
function deepMergeArrays(first, second) {
	if (!first || !second) {
		return second || first || [];
	}

	return [
		...first.map((value, i) =>
			deepMergeObjects(value, i < second.length ? second[i] : void 0),
		),
		...second.slice(first.length),
	];
}

module.exports = { deepMergeArrays };
