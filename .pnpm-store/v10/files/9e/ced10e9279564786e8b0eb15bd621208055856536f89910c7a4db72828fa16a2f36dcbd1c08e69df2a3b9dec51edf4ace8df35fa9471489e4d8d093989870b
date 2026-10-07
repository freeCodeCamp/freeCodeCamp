/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export namespace Iterable {

	export function is<T = any>(thing: any): thing is Iterable<T> {
		return thing && typeof thing === 'object' && typeof thing[Symbol.iterator] === 'function';
	}

	const _empty: Iterable<any> = Object.freeze([]);
	export function empty<T = any>(): Iterable<T> {
		return _empty;
	}

	export function* single<T>(element: T): Iterable<T> {
		yield element;
	}

	export function wrap<T>(iterableOrElement: Iterable<T> | T): Iterable<T> {
		if (is(iterableOrElement)) {
			return iterableOrElement;
		} else {
			return single(iterableOrElement);
		}
	}

	export function from<T>(iterable: Iterable<T> | undefined | null): Iterable<T> {
		return iterable || _empty;
	}

	export function* reverse<T>(array: Array<T>): Iterable<T> {
		for (let i = array.length - 1; i >= 0; i--) {
			yield array[i];
		}
	}

	export function isEmpty<T>(iterable: Iterable<T> | undefined | null): boolean {
		return !iterable || iterable[Symbol.iterator]().next().done === true;
	}

	export function first<T>(iterable: Iterable<T>): T | undefined {
		return iterable[Symbol.iterator]().next().value;
	}

	export function some<T>(iterable: Iterable<T>, predicate: (t: T, i: number) => unknown): boolean {
		let i = 0;
		for (const element of iterable) {
			if (predicate(element, i++)) {
				return true;
			}
		}
		return false;
	}

	export function find<T, R extends T>(iterable: Iterable<T>, predicate: (t: T) => t is R): R | undefined;
	export function find<T>(iterable: Iterable<T>, predicate: (t: T) => boolean): T | undefined;
	export function find<T>(iterable: Iterable<T>, predicate: (t: T) => boolean): T | undefined {
		for (const element of iterable) {
			if (predicate(element)) {
				return element;
			}
		}

		return undefined;
	}

	export function filter<T, R extends T>(iterable: Iterable<T>, predicate: (t: T) => t is R): Iterable<R>;
	export function filter<T>(iterable: Iterable<T>, predicate: (t: T) => boolean): Iterable<T>;
	export function* filter<T>(iterable: Iterable<T>, predicate: (t: T) => boolean): Iterable<T> {
		for (const element of iterable) {
			if (predicate(element)) {
				yield element;
			}
		}
	}

	export function* map<T, R>(iterable: Iterable<T>, fn: (t: T, index: number) => R): Iterable<R> {
		let index = 0;
		for (const element of iterable) {
			yield fn(element, index++);
		}
	}

	export function* flatMap<T, R>(iterable: Iterable<T>, fn: (t: T, index: number) => Iterable<R>): Iterable<R> {
		let index = 0;
		for (const element of iterable) {
			yield* fn(element, index++);
		}
	}

	export function* concat<T>(...iterables: Iterable<T>[]): Iterable<T> {
		for (const iterable of iterables) {
			yield* iterable;
		}
	}

	export function reduce<T, R>(iterable: Iterable<T>, reducer: (previousValue: R, currentValue: T) => R, initialValue: R): R {
		let value = initialValue;
		for (const element of iterable) {
			value = reducer(value, element);
		}
		return value;
	}

	/**
	 * Returns an iterable slice of the array, with the same semantics as `array.slice()`.
	 */
	export function* slice<T>(arr: ReadonlyArray<T>, from: number, to = arr.length): Iterable<T> {
		if (from < 0) {
			from += arr.length;
		}

		if (to < 0) {
			to += arr.length;
		} else if (to > arr.length) {
			to = arr.length;
		}

		for (; from < to; from++) {
			yield arr[from];
		}
	}

	/**
	 * Consumes `atMost` elements from iterable and returns the consumed elements,
	 * and an iterable for the rest of the elements.
	 */
	export function consume<T>(iterable: Iterable<T>, atMost: number = Number.POSITIVE_INFINITY): [T[], Iterable<T>] {
		const consumed: T[] = [];

		if (atMost === 0) {
			return [consumed, iterable];
		}

		const iterator = iterable[Symbol.iterator]();

		for (let i = 0; i < atMost; i++) {
			const next = iterator.next();

			if (next.done) {
				return [consumed, Iterable.empty()];
			}

			consumed.push(next.value);
		}

		return [consumed, { [Symbol.iterator]() { return iterator; } }];
	}

	export async function asyncToArray<T>(iterable: AsyncIterable<T>): Promise<T[]> {
		const result: T[] = [];
		for await (const item of iterable) {
			result.push(item);
		}
		return Promise.resolve(result);
	}
}
