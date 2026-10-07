/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * @template T
 * @param {Iterable<T>} set a set
 * @returns {T | undefined} last item
 */
const last = set => {
	let last;
	for (const item of set) last = item;
	return last;
};

/**
 * @template T
 * @param {Iterable<T>} iterable iterable
 * @param {function(T): boolean | null | undefined} filter predicate
 * @returns {boolean} true, if some items match the filter predicate
 */
const someInIterable = (iterable, filter) => {
	for (const item of iterable) {
		if (filter(item)) return true;
	}
	return false;
};

/**
 * @template T
 * @param {Iterable<T>} iterable an iterable
 * @returns {number} count of items
 */
const countIterable = iterable => {
	let i = 0;
	for (const _ of iterable) i++;
	return i;
};

module.exports.last = last;
module.exports.someInIterable = someInIterable;
module.exports.countIterable = countIterable;
