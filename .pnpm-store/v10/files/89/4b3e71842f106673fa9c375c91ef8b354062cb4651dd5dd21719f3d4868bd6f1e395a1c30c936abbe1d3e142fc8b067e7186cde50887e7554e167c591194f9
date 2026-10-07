/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

/**
 * Convert an object into an ES6 map
 * @template {object} T
 * @param {T} obj any object type that works with Object.entries()
 * @returns {Map<string, T[keyof T]>} an ES6 Map of KV pairs
 */
module.exports = function objectToMap(obj) {
	return new Map(Object.entries(obj));
};
