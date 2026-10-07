/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * @template {any[]} T
 */
class TupleSet {
	/**
	 * @param {Iterable<T>=} init init
	 */
	constructor(init) {
		/** @type {Map<T, TODO>} */
		this._map = new Map();
		this.size = 0;
		if (init) {
			for (const tuple of init) {
				this.add(...tuple);
			}
		}
	}

	/**
	 * @param  {T} args tuple
	 * @returns {void}
	 */
	add(...args) {
		let map = this._map;
		for (let i = 0; i < args.length - 2; i++) {
			const arg = args[i];
			const innerMap = map.get(arg);
			if (innerMap === undefined) {
				map.set(arg, (map = new Map()));
			} else {
				map = innerMap;
			}
		}

		const beforeLast = args[args.length - 2];
		let set = map.get(beforeLast);
		if (set === undefined) {
			map.set(beforeLast, (set = new Set()));
		}

		const last = args[args.length - 1];
		this.size -= set.size;
		set.add(last);
		this.size += set.size;
	}

	/**
	 * @param  {T} args tuple
	 * @returns {boolean} true, if the tuple is in the Set
	 */
	has(...args) {
		let map = this._map;
		for (let i = 0; i < args.length - 2; i++) {
			const arg = args[i];
			map = map.get(arg);
			if (map === undefined) {
				return false;
			}
		}

		const beforeLast = args[args.length - 2];
		const set = map.get(beforeLast);
		if (set === undefined) {
			return false;
		}

		const last = args[args.length - 1];
		return set.has(last);
	}

	/**
	 * @param {T} args tuple
	 * @returns {void}
	 */
	delete(...args) {
		let map = this._map;
		for (let i = 0; i < args.length - 2; i++) {
			const arg = args[i];
			map = map.get(arg);
			if (map === undefined) {
				return;
			}
		}

		const beforeLast = args[args.length - 2];
		const set = map.get(beforeLast);
		if (set === undefined) {
			return;
		}

		const last = args[args.length - 1];
		this.size -= set.size;
		set.delete(last);
		this.size += set.size;
	}

	/**
	 * @returns {Iterator<T>} iterator
	 */
	[Symbol.iterator]() {
		/** @type {TODO[]} */
		const iteratorStack = [];
		/** @type {T[]} */
		const tuple = [];
		/** @type {Iterator<T> | undefined} */
		let currentSetIterator;

		/**
		 * @param {TODO} it iterator
		 * @returns {boolean} result
		 */
		const next = it => {
			const result = it.next();
			if (result.done) {
				if (iteratorStack.length === 0) return false;
				tuple.pop();
				return next(iteratorStack.pop());
			}
			const [key, value] = result.value;
			iteratorStack.push(it);
			tuple.push(key);
			if (value instanceof Set) {
				currentSetIterator = value[Symbol.iterator]();
				return true;
			}
			return next(value[Symbol.iterator]());
		};

		next(this._map[Symbol.iterator]());

		return {
			next() {
				while (currentSetIterator) {
					const result = currentSetIterator.next();
					if (result.done) {
						tuple.pop();
						if (!next(iteratorStack.pop())) {
							currentSetIterator = undefined;
						}
					} else {
						return {
							done: false,
							value: /** @type {T} */ (tuple.concat(result.value))
						};
					}
				}
				return { done: true, value: undefined };
			}
		};
	}
}

module.exports = TupleSet;
