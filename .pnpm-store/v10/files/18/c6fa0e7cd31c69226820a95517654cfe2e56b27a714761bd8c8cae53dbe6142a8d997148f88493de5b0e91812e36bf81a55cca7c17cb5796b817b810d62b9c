/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as arrays from 'vs/base/common/arrays';

export type EqualityComparer<T> = (a: T, b: T) => boolean;

/**
 * Compares two items for equality using strict equality.
*/
export const strictEquals: EqualityComparer<any> = (a, b) => a === b;

/**
 * Checks if the items of two arrays are equal.
 * By default, strict equality is used to compare elements, but a custom equality comparer can be provided.
 */
export function itemsEquals<T>(itemEquals: EqualityComparer<T> = strictEquals): EqualityComparer<readonly T[]> {
	return (a, b) => arrays.equals(a, b, itemEquals);
}

/**
 * Two items are considered equal, if their stringified representations are equal.
*/
export function jsonStringifyEquals<T>(): EqualityComparer<T> {
	return (a, b) => JSON.stringify(a) === JSON.stringify(b);
}

/**
 * Uses `item.equals(other)` to determine equality.
 */
export function itemEquals<T extends { equals(other: T): boolean }>(): EqualityComparer<T> {
	return (a, b) => a.equals(b);
}

/**
 * Checks if two items are both null or undefined, or are equal according to the provided equality comparer.
*/
export function equalsIfDefined<T>(v1: T | undefined | null, v2: T | undefined | null, equals: EqualityComparer<T>): boolean;
/**
 * Returns an equality comparer that checks if two items are both null or undefined, or are equal according to the provided equality comparer.
*/
export function equalsIfDefined<T>(equals: EqualityComparer<T>): EqualityComparer<T | undefined | null>;
export function equalsIfDefined<T>(equalsOrV1: EqualityComparer<T> | T, v2?: T | undefined | null, equals?: EqualityComparer<T>): EqualityComparer<T | undefined | null> | boolean {
	if (equals !== undefined) {
		const v1 = equalsOrV1 as T | undefined;
		if (v1 === undefined || v1 === null || v2 === undefined || v2 === null) {
			return v2 === v1;
		}
		return equals(v1, v2);
	} else {
		const equals = equalsOrV1 as EqualityComparer<T>;
		return (v1, v2) => {
			if (v1 === undefined || v1 === null || v2 === undefined || v2 === null) {
				return v2 === v1;
			}
			return equals(v1, v2);
		};
	}
}

/**
 * Drills into arrays (items ordered) and objects (keys unordered) and uses strict equality on everything else.
*/
export function structuralEquals<T>(a: T, b: T): boolean {
	if (a === b) {
		return true;
	}

	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) {
			return false;
		}
		for (let i = 0; i < a.length; i++) {
			if (!structuralEquals(a[i], b[i])) {
				return false;
			}
		}
		return true;
	}

	if (a && typeof a === 'object' && b && typeof b === 'object') {
		if (Object.getPrototypeOf(a) === Object.prototype && Object.getPrototypeOf(b) === Object.prototype) {
			const aObj = a as Record<string, unknown>;
			const bObj = b as Record<string, unknown>;
			const keysA = Object.keys(aObj);
			const keysB = Object.keys(bObj);
			const keysBSet = new Set(keysB);

			if (keysA.length !== keysB.length) {
				return false;
			}

			for (const key of keysA) {
				if (!keysBSet.has(key)) {
					return false;
				}
				if (!structuralEquals(aObj[key], bObj[key])) {
					return false;
				}
			}

			return true;
		}
	}

	return false;
}

/**
 * `getStructuralKey(a) === getStructuralKey(b) <=> structuralEquals(a, b)`
 * (assuming that a and b are not cyclic structures and nothing extends globalThis Array).
*/
export function getStructuralKey(t: unknown): string {
	return JSON.stringify(toNormalizedJsonStructure(t));
}

let objectId = 0;
const objIds = new WeakMap<object, number>();

function toNormalizedJsonStructure(t: unknown): unknown {
	if (Array.isArray(t)) {
		return t.map(toNormalizedJsonStructure);
	}

	if (t && typeof t === 'object') {
		if (Object.getPrototypeOf(t) === Object.prototype) {
			const tObj = t as Record<string, unknown>;
			const res: Record<string, unknown> = Object.create(null);
			for (const key of Object.keys(tObj).sort()) {
				res[key] = toNormalizedJsonStructure(tObj[key]);
			}
			return res;
		} else {
			let objId = objIds.get(t);
			if (objId === undefined) {
				objId = objectId++;
				objIds.set(t, objId);
			}
			// Random string to prevent collisions
			return objId + '----2b76a038c20c4bcc';
		}
	}
	return t;
}
