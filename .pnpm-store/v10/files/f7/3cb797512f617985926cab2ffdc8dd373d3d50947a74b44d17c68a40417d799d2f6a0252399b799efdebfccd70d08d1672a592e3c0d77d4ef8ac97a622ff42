import { isIterable } from './types.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var Iterable;
(function (Iterable) {
    function is(thing) {
        return !!thing && typeof thing === 'object' && typeof thing[Symbol.iterator] === 'function';
    }
    Iterable.is = is;
    const _empty = Object.freeze([]);
    function empty() {
        return _empty;
    }
    Iterable.empty = empty;
    function* single(element) {
        yield element;
    }
    Iterable.single = single;
    function wrap(iterableOrElement) {
        if (is(iterableOrElement)) {
            return iterableOrElement;
        }
        else {
            return single(iterableOrElement);
        }
    }
    Iterable.wrap = wrap;
    function from(iterable) {
        return iterable || _empty;
    }
    Iterable.from = from;
    function* reverse(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            yield array[i];
        }
    }
    Iterable.reverse = reverse;
    function isEmpty(iterable) {
        return !iterable || iterable[Symbol.iterator]().next().done === true;
    }
    Iterable.isEmpty = isEmpty;
    function first(iterable) {
        return iterable[Symbol.iterator]().next().value;
    }
    Iterable.first = first;
    function some(iterable, predicate) {
        let i = 0;
        for (const element of iterable) {
            if (predicate(element, i++)) {
                return true;
            }
        }
        return false;
    }
    Iterable.some = some;
    function every(iterable, predicate) {
        let i = 0;
        for (const element of iterable) {
            if (!predicate(element, i++)) {
                return false;
            }
        }
        return true;
    }
    Iterable.every = every;
    function find(iterable, predicate) {
        for (const element of iterable) {
            if (predicate(element)) {
                return element;
            }
        }
        return undefined;
    }
    Iterable.find = find;
    function* filter(iterable, predicate) {
        for (const element of iterable) {
            if (predicate(element)) {
                yield element;
            }
        }
    }
    Iterable.filter = filter;
    function* map(iterable, fn) {
        let index = 0;
        for (const element of iterable) {
            yield fn(element, index++);
        }
    }
    Iterable.map = map;
    function* flatMap(iterable, fn) {
        let index = 0;
        for (const element of iterable) {
            yield* fn(element, index++);
        }
    }
    Iterable.flatMap = flatMap;
    function* concat(...iterables) {
        for (const item of iterables) {
            if (isIterable(item)) {
                yield* item;
            }
            else {
                yield item;
            }
        }
    }
    Iterable.concat = concat;
    function reduce(iterable, reducer, initialValue) {
        let value = initialValue;
        for (const element of iterable) {
            value = reducer(value, element);
        }
        return value;
    }
    Iterable.reduce = reduce;
    function length(iterable) {
        let count = 0;
        for (const _ of iterable) {
            count++;
        }
        return count;
    }
    Iterable.length = length;
    /**
     * Returns an iterable slice of the array, with the same semantics as `array.slice()`.
     */
    function* slice(arr, from, to = arr.length) {
        if (from < -arr.length) {
            from = 0;
        }
        if (from < 0) {
            from += arr.length;
        }
        if (to < 0) {
            to += arr.length;
        }
        else if (to > arr.length) {
            to = arr.length;
        }
        for (; from < to; from++) {
            yield arr[from];
        }
    }
    Iterable.slice = slice;
    /**
     * Consumes `atMost` elements from iterable and returns the consumed elements,
     * and an iterable for the rest of the elements.
     */
    function consume(iterable, atMost = Number.POSITIVE_INFINITY) {
        const consumed = [];
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
    Iterable.consume = consume;
    async function asyncToArray(iterable) {
        const result = [];
        for await (const item of iterable) {
            result.push(item);
        }
        return result;
    }
    Iterable.asyncToArray = asyncToArray;
    async function asyncToArrayFlat(iterable) {
        let result = [];
        for await (const item of iterable) {
            result = result.concat(item);
        }
        return result;
    }
    Iterable.asyncToArrayFlat = asyncToArrayFlat;
})(Iterable || (Iterable = {}));

export { Iterable };
