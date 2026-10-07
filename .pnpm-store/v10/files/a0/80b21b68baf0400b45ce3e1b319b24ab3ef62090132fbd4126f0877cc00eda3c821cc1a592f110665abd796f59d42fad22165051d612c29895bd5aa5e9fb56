/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Comparator } from './arrays';

export function findLast<T>(array: readonly T[], predicate: (item: T) => boolean): T | undefined {
	const idx = findLastIdx(array, predicate);
	if (idx === -1) {
		return undefined;
	}
	return array[idx];
}

export function findLastIdx<T>(array: readonly T[], predicate: (item: T) => boolean, fromIndex = array.length - 1): number {
	for (let i = fromIndex; i >= 0; i--) {
		const element = array[i];

		if (predicate(element)) {
			return i;
		}
	}

	return -1;
}

/**
 * Finds the last item where predicate is true using binary search.
 * `predicate` must be monotonous, i.e. `arr.map(predicate)` must be like `[true, ..., true, false, ..., false]`!
 *
 * @returns `undefined` if no item matches, otherwise the last item that matches the predicate.
 */
export function findLastMonotonous<T>(array: readonly T[], predicate: (item: T) => boolean): T | undefined {
	const idx = findLastIdxMonotonous(array, predicate);
	return idx === -1 ? undefined : array[idx];
}

/**
 * Finds the last item where predicate is true using binary search.
 * `predicate` must be monotonous, i.e. `arr.map(predicate)` must be like `[true, ..., true, false, ..., false]`!
 *
 * @returns `startIdx - 1` if predicate is false for all items, otherwise the index of the last item that matches the predicate.
 */
export function findLastIdxMonotonous<T>(array: readonly T[], predicate: (item: T) => boolean, startIdx = 0, endIdxEx = array.length): number {
	let i = startIdx;
	let j = endIdxEx;
	while (i < j) {
		const k = Math.floor((i + j) / 2);
		if (predicate(array[k])) {
			i = k + 1;
		} else {
			j = k;
		}
	}
	return i - 1;
}

/**
 * Finds the first item where predicate is true using binary search.
 * `predicate` must be monotonous, i.e. `arr.map(predicate)` must be like `[false, ..., false, true, ..., true]`!
 *
 * @returns `undefined` if no item matches, otherwise the first item that matches the predicate.
 */
export function findFirstMonotonous<T>(array: readonly T[], predicate: (item: T) => boolean): T | undefined {
	const idx = findFirstIdxMonotonousOrArrLen(array, predicate);
	return idx === array.length ? undefined : array[idx];
}

/**
 * Finds the first item where predicate is true using binary search.
 * `predicate` must be monotonous, i.e. `arr.map(predicate)` must be like `[false, ..., false, true, ..., true]`!
 *
 * @returns `endIdxEx` if predicate is false for all items, otherwise the index of the first item that matches the predicate.
 */
export function findFirstIdxMonotonousOrArrLen<T>(array: readonly T[], predicate: (item: T) => boolean, startIdx = 0, endIdxEx = array.length): number {
	let i = startIdx;
	let j = endIdxEx;
	while (i < j) {
		const k = Math.floor((i + j) / 2);
		if (predicate(array[k])) {
			j = k;
		} else {
			i = k + 1;
		}
	}
	return i;
}

export function findFirstIdxMonotonous<T>(array: readonly T[], predicate: (item: T) => boolean, startIdx = 0, endIdxEx = array.length): number {
	const idx = findFirstIdxMonotonousOrArrLen(array, predicate, startIdx, endIdxEx);
	return idx === array.length ? -1 : idx;
}

/**
 * Use this when
 * * You have a sorted array
 * * You query this array with a monotonous predicate to find the last item that has a certain property.
 * * You query this array multiple times with monotonous predicates that get weaker and weaker.
 */
export class MonotonousArray<T> {
	public static assertInvariants = false;

	private _findLastMonotonousLastIdx = 0;
	private _prevFindLastPredicate: ((item: T) => boolean) | undefined;

	constructor(private readonly _array: readonly T[]) {
	}

	/**
	 * The predicate must be monotonous, i.e. `arr.map(predicate)` must be like `[true, ..., true, false, ..., false]`!
	 * For subsequent calls, current predicate must be weaker than (or equal to) the previous predicate, i.e. more entries must be `true`.
	 */
	findLastMonotonous(predicate: (item: T) => boolean): T | undefined {
		if (MonotonousArray.assertInvariants) {
			if (this._prevFindLastPredicate) {
				for (const item of this._array) {
					if (this._prevFindLastPredicate(item) && !predicate(item)) {
						throw new Error('MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.');
					}
				}
			}
			this._prevFindLastPredicate = predicate;
		}

		const idx = findLastIdxMonotonous(this._array, predicate, this._findLastMonotonousLastIdx);
		this._findLastMonotonousLastIdx = idx + 1;
		return idx === -1 ? undefined : this._array[idx];
	}
}

/**
 * Returns the first item that is equal to or greater than every other item.
*/
export function findFirstMax<T>(array: readonly T[], comparator: Comparator<T>): T | undefined {
	if (array.length === 0) {
		return undefined;
	}

	let max = array[0];
	for (let i = 1; i < array.length; i++) {
		const item = array[i];
		if (comparator(item, max) > 0) {
			max = item;
		}
	}
	return max;
}

/**
 * Returns the last item that is equal to or greater than every other item.
*/
export function findLastMax<T>(array: readonly T[], comparator: Comparator<T>): T | undefined {
	if (array.length === 0) {
		return undefined;
	}

	let max = array[0];
	for (let i = 1; i < array.length; i++) {
		const item = array[i];
		if (comparator(item, max) >= 0) {
			max = item;
		}
	}
	return max;
}

/**
 * Returns the first item that is equal to or less than every other item.
*/
export function findFirstMin<T>(array: readonly T[], comparator: Comparator<T>): T | undefined {
	return findFirstMax(array, (a, b) => -comparator(a, b));
}

export function findMaxIdx<T>(array: readonly T[], comparator: Comparator<T>): number {
	if (array.length === 0) {
		return -1;
	}

	let maxIdx = 0;
	for (let i = 1; i < array.length; i++) {
		const item = array[i];
		if (comparator(item, array[maxIdx]) > 0) {
			maxIdx = i;
		}
	}
	return maxIdx;
}

/**
 * Returns the first mapped value of the array which is not undefined.
 */
export function mapFindFirst<T, R>(items: Iterable<T>, mapFn: (value: T) => R | undefined): R | undefined {
	for (const value of items) {
		const mapped = mapFn(value);
		if (mapped !== undefined) {
			return mapped;
		}
	}

	return undefined;
}
