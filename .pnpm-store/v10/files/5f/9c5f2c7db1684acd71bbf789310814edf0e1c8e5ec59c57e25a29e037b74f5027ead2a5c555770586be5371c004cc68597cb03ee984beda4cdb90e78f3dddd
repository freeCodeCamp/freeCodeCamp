/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * intersect creates Set containing the intersection of elements between all sets
 * @template T
 * @param {Set<T>[]} sets an array of sets being checked for shared elements
 * @returns {Set<T>} returns a new Set containing the intersecting items
 */
const intersect = sets => {
	if (sets.length === 0) return new Set();
	if (sets.length === 1) return new Set(sets[0]);
	let minSize = Infinity;
	let minIndex = -1;
	for (let i = 0; i < sets.length; i++) {
		const size = sets[i].size;
		if (size < minSize) {
			minIndex = i;
			minSize = size;
		}
	}
	const current = new Set(sets[minIndex]);
	for (let i = 0; i < sets.length; i++) {
		if (i === minIndex) continue;
		const set = sets[i];
		for (const item of current) {
			if (!set.has(item)) {
				current.delete(item);
			}
		}
	}
	return current;
};

/**
 * Checks if a set is the subset of another set
 * @template T
 * @param {Set<T>} bigSet a Set which contains the original elements to compare against
 * @param {Set<T>} smallSet the set whose elements might be contained inside of bigSet
 * @returns {boolean} returns true if smallSet contains all elements inside of the bigSet
 */
const isSubset = (bigSet, smallSet) => {
	if (bigSet.size < smallSet.size) return false;
	for (const item of smallSet) {
		if (!bigSet.has(item)) return false;
	}
	return true;
};

/**
 * @template T
 * @param {Set<T>} set a set
 * @param {function(T): boolean} fn selector function
 * @returns {T | undefined} found item
 */
const find = (set, fn) => {
	for (const item of set) {
		if (fn(item)) return item;
	}
};

/**
 * @template T
 * @param {Set<T> | ReadonlySet<T>} set a set
 * @returns {T | undefined} first item
 */
const first = set => {
	const entry = set.values().next();
	return entry.done ? undefined : entry.value;
};

/**
 * @template T
 * @param {Set<T>} a first
 * @param {Set<T>} b second
 * @returns {Set<T>} combined set, may be identical to a or b
 */
const combine = (a, b) => {
	if (b.size === 0) return a;
	if (a.size === 0) return b;
	const set = new Set(a);
	for (const item of b) set.add(item);
	return set;
};

module.exports.intersect = intersect;
module.exports.isSubset = isSubset;
module.exports.find = find;
module.exports.first = first;
module.exports.combine = combine;
