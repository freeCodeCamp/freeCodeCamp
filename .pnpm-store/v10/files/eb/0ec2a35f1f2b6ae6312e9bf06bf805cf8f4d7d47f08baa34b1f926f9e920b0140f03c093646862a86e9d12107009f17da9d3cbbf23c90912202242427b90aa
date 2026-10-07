/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * getOrInsert is a helper function for maps that allows you to get a value
 * from a map if it exists, or insert a new value if it doesn't. If it value doesn't
 * exist, it will be computed by the provided function.
 * @template K
 * @template V
 * @param {Map<K, V>} map The map object to check
 * @param {K} key The key to check
 * @param {function(): V} computer function which will compute the value if it doesn't exist
 * @returns {V} The value from the map, or the computed value
 * @example
 * ```js
 * const map = new Map();
 * const value = getOrInsert(map, "key", () => "value");
 * console.log(value); // "value"
 * ```
 */
module.exports.getOrInsert = (map, key, computer) => {
	// Grab key from map
	const value = map.get(key);
	// If the value already exists, return it
	if (value !== undefined) return value;
	// Otherwise compute the value, set it in the map, and return it
	const newValue = computer();
	map.set(key, newValue);
	return newValue;
};
