/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * Returns last item.
 * @template T
 * @param {Iterable<T>} set a set
 * @returns {T | undefined} last item
 */
const last = (set) => {
	/** @type {T | undefined} */
	let last;
	for (const item of set) last = item;
	return last;
};

/**
 * Returns true, if some items match the filter predicate.
 * @template T
 * @param {Iterable<T>} iterable iterable
 * @param {(value: T) => boolean | null | undefined} filter predicate
 * @returns {boolean} true, if some items match the filter predicate
 */
const someInIterable = (iterable, filter) => {
	for (const item of iterable) {
		if (filter(item)) return true;
	}
	return false;
};

/**
 * Returns count of items.
 * @template T
 * @param {Iterable<T>} iterable an iterable
 * @returns {number} count of items
 */
const countIterable = (iterable) => {
	let i = 0;
	for (const _ of iterable) i++;
	return i;
};

module.exports.countIterable = countIterable;
module.exports.last = last;
module.exports.someInIterable = someInIterable;
