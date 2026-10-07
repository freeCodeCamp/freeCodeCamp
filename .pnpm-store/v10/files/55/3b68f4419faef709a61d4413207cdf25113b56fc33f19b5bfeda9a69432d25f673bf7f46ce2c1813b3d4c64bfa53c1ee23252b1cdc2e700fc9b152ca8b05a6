/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * An interface for a JavaScript object that
 * acts a dictionary. The keys are strings.
 */
export type IStringDictionary<V> = Record<string, V>;

/**
 * An interface for a JavaScript object that
 * acts a dictionary. The keys are numbers.
 */
export type INumberDictionary<V> = Record<number, V>;

/**
 * Groups the collection into a dictionary based on the provided
 * group function.
 */
export function groupBy<K extends string | number | symbol, V>(data: V[], groupFn: (element: V) => K): Record<K, V[]> {
	const result: Record<K, V[]> = Object.create(null);
	for (const element of data) {
		const key = groupFn(element);
		let target = result[key];
		if (!target) {
			target = result[key] = [];
		}
		target.push(element);
	}
	return result;
}

export function diffSets<T>(before: Set<T>, after: Set<T>): { removed: T[]; added: T[] } {
	const removed: T[] = [];
	const added: T[] = [];
	for (const element of before) {
		if (!after.has(element)) {
			removed.push(element);
		}
	}
	for (const element of after) {
		if (!before.has(element)) {
			added.push(element);
		}
	}
	return { removed, added };
}

export function diffMaps<K, V>(before: Map<K, V>, after: Map<K, V>): { removed: V[]; added: V[] } {
	const removed: V[] = [];
	const added: V[] = [];
	for (const [index, value] of before) {
		if (!after.has(index)) {
			removed.push(value);
		}
	}
	for (const [index, value] of after) {
		if (!before.has(index)) {
			added.push(value);
		}
	}
	return { removed, added };
}

/**
 * Computes the intersection of two sets.
 *
 * @param setA - The first set.
 * @param setB - The second iterable.
 * @returns A new set containing the elements that are in both `setA` and `setB`.
 */
export function intersection<T>(setA: Set<T>, setB: Iterable<T>): Set<T> {
	const result = new Set<T>();
	for (const elem of setB) {
		if (setA.has(elem)) {
			result.add(elem);
		}
	}
	return result;
}

export class SetWithKey<T> implements Set<T> {
	private _map = new Map<any, T>();

	constructor(values: T[], private toKey: (t: T) => any) {
		for (const value of values) {
			this.add(value);
		}
	}

	get size(): number {
		return this._map.size;
	}

	add(value: T): this {
		const key = this.toKey(value);
		this._map.set(key, value);
		return this;
	}

	delete(value: T): boolean {
		return this._map.delete(this.toKey(value));
	}

	has(value: T): boolean {
		return this._map.has(this.toKey(value));
	}

	*entries(): IterableIterator<[T, T]> {
		for (const entry of this._map.values()) {
			yield [entry, entry];
		}
	}

	keys(): IterableIterator<T> {
		return this.values();
	}

	*values(): IterableIterator<T> {
		for (const entry of this._map.values()) {
			yield entry;
		}
	}

	clear(): void {
		this._map.clear();
	}

	forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void {
		this._map.forEach(entry => callbackfn.call(thisArg, entry, entry, this));
	}

	[Symbol.iterator](): IterableIterator<T> {
		return this.values();
	}

	[Symbol.toStringTag]: string = 'SetWithKey';
}
