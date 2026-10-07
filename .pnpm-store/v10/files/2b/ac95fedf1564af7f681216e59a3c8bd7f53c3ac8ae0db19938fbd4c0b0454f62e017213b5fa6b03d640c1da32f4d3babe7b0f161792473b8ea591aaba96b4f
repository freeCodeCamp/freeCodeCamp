/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * @param {string} str string
 * @returns {string} quoted meta
 */
const quoteMeta = str => str.replace(/[-[\]\\/{}()*+?.^$|]/g, "\\$&");

/**
 * @param {string} str string
 * @returns {string} string
 */
const toSimpleString = str => {
	if (`${Number(str)}` === str) {
		return str;
	}
	return JSON.stringify(str);
};

/**
 * @param {Record<string|number, boolean>} map value map
 * @returns {boolean|(function(string): string)} true/false, when unconditionally true/false, or a template function to determine the value at runtime
 */
const compileBooleanMatcher = map => {
	const positiveItems = Object.keys(map).filter(i => map[i]);
	const negativeItems = Object.keys(map).filter(i => !map[i]);
	if (positiveItems.length === 0) return false;
	if (negativeItems.length === 0) return true;
	return compileBooleanMatcherFromLists(positiveItems, negativeItems);
};

/**
 * @param {string[]} positiveItems positive items
 * @param {string[]} negativeItems negative items
 * @returns {function(string): string} a template function to determine the value at runtime
 */
const compileBooleanMatcherFromLists = (positiveItems, negativeItems) => {
	if (positiveItems.length === 0) return () => "false";
	if (negativeItems.length === 0) return () => "true";
	if (positiveItems.length === 1)
		return value => `${toSimpleString(positiveItems[0])} == ${value}`;
	if (negativeItems.length === 1)
		return value => `${toSimpleString(negativeItems[0])} != ${value}`;
	const positiveRegexp = itemsToRegexp(positiveItems);
	const negativeRegexp = itemsToRegexp(negativeItems);
	if (positiveRegexp.length <= negativeRegexp.length) {
		return value => `/^${positiveRegexp}$/.test(${value})`;
	}
	return value => `!/^${negativeRegexp}$/.test(${value})`;
};

/**
 * @param {Set<string>} itemsSet items set
 * @param {(str: string) => string | false} getKey get key function
 * @param {(str: Array<string>) => boolean} condition condition
 * @returns {Array<Array<string>>} list of common items
 */
const popCommonItems = (itemsSet, getKey, condition) => {
	/** @type {Map<string, Array<string>>} */
	const map = new Map();
	for (const item of itemsSet) {
		const key = getKey(item);
		if (key) {
			let list = map.get(key);
			if (list === undefined) {
				/** @type {Array<string>} */
				list = [];
				map.set(key, list);
			}
			list.push(item);
		}
	}
	/** @type {Array<Array<string>>} */
	const result = [];
	for (const list of map.values()) {
		if (condition(list)) {
			for (const item of list) {
				itemsSet.delete(item);
			}
			result.push(list);
		}
	}
	return result;
};

/**
 * @param {Array<string>} items items
 * @returns {string} common prefix
 */
const getCommonPrefix = items => {
	let prefix = items[0];
	for (let i = 1; i < items.length; i++) {
		const item = items[i];
		for (let p = 0; p < prefix.length; p++) {
			if (item[p] !== prefix[p]) {
				prefix = prefix.slice(0, p);
				break;
			}
		}
	}
	return prefix;
};

/**
 * @param {Array<string>} items items
 * @returns {string} common suffix
 */
const getCommonSuffix = items => {
	let suffix = items[0];
	for (let i = 1; i < items.length; i++) {
		const item = items[i];
		for (let p = item.length - 1, s = suffix.length - 1; s >= 0; p--, s--) {
			if (item[p] !== suffix[s]) {
				suffix = suffix.slice(s + 1);
				break;
			}
		}
	}
	return suffix;
};

/**
 * @param {Array<string>} itemsArr array of items
 * @returns {string} regexp
 */
const itemsToRegexp = itemsArr => {
	if (itemsArr.length === 1) {
		return quoteMeta(itemsArr[0]);
	}
	/** @type {Array<string>} */
	const finishedItems = [];

	// merge single char items: (a|b|c|d|ef) => ([abcd]|ef)
	let countOfSingleCharItems = 0;
	for (const item of itemsArr) {
		if (item.length === 1) {
			countOfSingleCharItems++;
		}
	}
	// special case for only single char items
	if (countOfSingleCharItems === itemsArr.length) {
		return `[${quoteMeta(itemsArr.sort().join(""))}]`;
	}
	const items = new Set(itemsArr.sort());
	if (countOfSingleCharItems > 2) {
		let singleCharItems = "";
		for (const item of items) {
			if (item.length === 1) {
				singleCharItems += item;
				items.delete(item);
			}
		}
		finishedItems.push(`[${quoteMeta(singleCharItems)}]`);
	}

	// special case for 2 items with common prefix/suffix
	if (finishedItems.length === 0 && items.size === 2) {
		const prefix = getCommonPrefix(itemsArr);
		const suffix = getCommonSuffix(
			itemsArr.map(item => item.slice(prefix.length))
		);
		if (prefix.length > 0 || suffix.length > 0) {
			return `${quoteMeta(prefix)}${itemsToRegexp(
				itemsArr.map(i => i.slice(prefix.length, -suffix.length || undefined))
			)}${quoteMeta(suffix)}`;
		}
	}

	// special case for 2 items with common suffix
	if (finishedItems.length === 0 && items.size === 2) {
		/** @type {Iterator<string>} */
		const it = items[Symbol.iterator]();
		const a = it.next().value;
		const b = it.next().value;
		if (a.length > 0 && b.length > 0 && a.slice(-1) === b.slice(-1)) {
			return `${itemsToRegexp([a.slice(0, -1), b.slice(0, -1)])}${quoteMeta(
				a.slice(-1)
			)}`;
		}
	}

	// find common prefix: (a1|a2|a3|a4|b5) => (a(1|2|3|4)|b5)
	const prefixed = popCommonItems(
		items,
		item => (item.length >= 1 ? item[0] : false),
		list => {
			if (list.length >= 3) return true;
			if (list.length <= 1) return false;
			return list[0][1] === list[1][1];
		}
	);
	for (const prefixedItems of prefixed) {
		const prefix = getCommonPrefix(prefixedItems);
		finishedItems.push(
			`${quoteMeta(prefix)}${itemsToRegexp(
				prefixedItems.map(i => i.slice(prefix.length))
			)}`
		);
	}

	// find common suffix: (a1|b1|c1|d1|e2) => ((a|b|c|d)1|e2)
	const suffixed = popCommonItems(
		items,
		item => (item.length >= 1 ? item.slice(-1) : false),
		list => {
			if (list.length >= 3) return true;
			if (list.length <= 1) return false;
			return list[0].slice(-2) === list[1].slice(-2);
		}
	);
	for (const suffixedItems of suffixed) {
		const suffix = getCommonSuffix(suffixedItems);
		finishedItems.push(
			`${itemsToRegexp(
				suffixedItems.map(i => i.slice(0, -suffix.length))
			)}${quoteMeta(suffix)}`
		);
	}

	// TODO further optimize regexp, i. e.
	// use ranges: (1|2|3|4|a) => [1-4a]
	const conditional = finishedItems.concat(Array.from(items, quoteMeta));
	if (conditional.length === 1) return conditional[0];
	return `(${conditional.join("|")})`;
};

compileBooleanMatcher.fromLists = compileBooleanMatcherFromLists;
compileBooleanMatcher.itemsToRegexp = itemsToRegexp;
module.exports = compileBooleanMatcher;
