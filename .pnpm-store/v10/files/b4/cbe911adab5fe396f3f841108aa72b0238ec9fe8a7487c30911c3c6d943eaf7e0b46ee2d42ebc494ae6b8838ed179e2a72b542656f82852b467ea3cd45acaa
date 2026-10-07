/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export function getOrSet<K, V>(map: Map<K, V>, key: K, value: V): V {
	let result = map.get(key);
	if (result === undefined) {
		result = value;
		map.set(key, result);
	}

	return result;
}

export function mapToString<K, V>(map: Map<K, V>): string {
	const entries: string[] = [];
	map.forEach((value, key) => {
		entries.push(`${key} => ${value}`);
	});

	return `Map(${map.size}) {${entries.join(', ')}}`;
}

export function setToString<K>(set: Set<K>): string {
	const entries: K[] = [];
	set.forEach(value => {
		entries.push(value);
	});

	return `Set(${set.size}) {${entries.join(', ')}}`;
}

export const enum Touch {
	None = 0,
	AsOld = 1,
	AsNew = 2
}

export class CounterSet<T> {

	private map = new Map<T, number>();

	add(value: T): CounterSet<T> {
		this.map.set(value, (this.map.get(value) || 0) + 1);
		return this;
	}

	delete(value: T): boolean {
		let counter = this.map.get(value) || 0;

		if (counter === 0) {
			return false;
		}

		counter--;

		if (counter === 0) {
			this.map.delete(value);
		} else {
			this.map.set(value, counter);
		}

		return true;
	}

	has(value: T): boolean {
		return this.map.has(value);
	}
}

/**
 * A map that allows access both by keys and values.
 * **NOTE**: values need to be unique.
 */
export class BidirectionalMap<K, V> {

	private readonly _m1 = new Map<K, V>();
	private readonly _m2 = new Map<V, K>();

	constructor(entries?: readonly (readonly [K, V])[]) {
		if (entries) {
			for (const [key, value] of entries) {
				this.set(key, value);
			}
		}
	}

	clear(): void {
		this._m1.clear();
		this._m2.clear();
	}

	set(key: K, value: V): void {
		this._m1.set(key, value);
		this._m2.set(value, key);
	}

	get(key: K): V | undefined {
		return this._m1.get(key);
	}

	getKey(value: V): K | undefined {
		return this._m2.get(value);
	}

	delete(key: K): boolean {
		const value = this._m1.get(key);
		if (value === undefined) {
			return false;
		}
		this._m1.delete(key);
		this._m2.delete(value);
		return true;
	}

	forEach(callbackfn: (value: V, key: K, map: BidirectionalMap<K, V>) => void, thisArg?: any): void {
		this._m1.forEach((value, key) => {
			callbackfn.call(thisArg, value, key, this);
		});
	}

	keys(): IterableIterator<K> {
		return this._m1.keys();
	}

	values(): IterableIterator<V> {
		return this._m1.values();
	}
}

export class SetMap<K, V> {

	private map = new Map<K, Set<V>>();

	add(key: K, value: V): void {
		let values = this.map.get(key);

		if (!values) {
			values = new Set<V>();
			this.map.set(key, values);
		}

		values.add(value);
	}

	delete(key: K, value: V): void {
		const values = this.map.get(key);

		if (!values) {
			return;
		}

		values.delete(value);

		if (values.size === 0) {
			this.map.delete(key);
		}
	}

	forEach(key: K, fn: (value: V) => void): void {
		const values = this.map.get(key);

		if (!values) {
			return;
		}

		values.forEach(fn);
	}

	get(key: K): ReadonlySet<V> {
		const values = this.map.get(key);
		if (!values) {
			return new Set<V>();
		}
		return values;
	}
}

export function mapsStrictEqualIgnoreOrder(a: Map<unknown, unknown>, b: Map<unknown, unknown>): boolean {
	if (a === b) {
		return true;
	}

	if (a.size !== b.size) {
		return false;
	}

	for (const [key, value] of a) {
		if (!b.has(key) || b.get(key) !== value) {
			return false;
		}
	}

	for (const [key] of b) {
		if (!a.has(key)) {
			return false;
		}
	}

	return true;
}
