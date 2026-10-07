/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var _a, _b, _c;
class ResourceMapEntry {
    constructor(uri, value) {
        this.uri = uri;
        this.value = value;
    }
}
function isEntries(arg) {
    return Array.isArray(arg);
}
class ResourceMap {
    static { this.defaultToKey = (resource) => resource.toString(); }
    constructor(arg, toKey) {
        this[_a] = 'ResourceMap';
        if (arg instanceof ResourceMap) {
            this.map = new Map(arg.map);
            this.toKey = toKey ?? ResourceMap.defaultToKey;
        }
        else if (isEntries(arg)) {
            this.map = new Map();
            this.toKey = toKey ?? ResourceMap.defaultToKey;
            for (const [resource, value] of arg) {
                this.set(resource, value);
            }
        }
        else {
            this.map = new Map();
            this.toKey = arg ?? ResourceMap.defaultToKey;
        }
    }
    set(resource, value) {
        this.map.set(this.toKey(resource), new ResourceMapEntry(resource, value));
        return this;
    }
    get(resource) {
        return this.map.get(this.toKey(resource))?.value;
    }
    has(resource) {
        return this.map.has(this.toKey(resource));
    }
    get size() {
        return this.map.size;
    }
    clear() {
        this.map.clear();
    }
    delete(resource) {
        return this.map.delete(this.toKey(resource));
    }
    forEach(clb, thisArg) {
        if (typeof thisArg !== 'undefined') {
            clb = clb.bind(thisArg);
        }
        for (const [_, entry] of this.map) {
            clb(entry.value, entry.uri, this);
        }
    }
    *values() {
        for (const entry of this.map.values()) {
            yield entry.value;
        }
    }
    *keys() {
        for (const entry of this.map.values()) {
            yield entry.uri;
        }
    }
    *entries() {
        for (const entry of this.map.values()) {
            yield [entry.uri, entry.value];
        }
    }
    *[(_a = Symbol.toStringTag, Symbol.iterator)]() {
        for (const [, entry] of this.map) {
            yield [entry.uri, entry.value];
        }
    }
}
class ResourceSet {
    constructor(entriesOrKey, toKey) {
        this[_b] = 'ResourceSet';
        if (!entriesOrKey || typeof entriesOrKey === 'function') {
            this._map = new ResourceMap(entriesOrKey);
        }
        else {
            this._map = new ResourceMap(toKey);
            entriesOrKey.forEach(this.add, this);
        }
    }
    get size() {
        return this._map.size;
    }
    add(value) {
        this._map.set(value, value);
        return this;
    }
    clear() {
        this._map.clear();
    }
    delete(value) {
        return this._map.delete(value);
    }
    forEach(callbackfn, thisArg) {
        this._map.forEach((_value, key) => callbackfn.call(thisArg, key, key, this));
    }
    has(value) {
        return this._map.has(value);
    }
    entries() {
        return this._map.entries();
    }
    keys() {
        return this._map.keys();
    }
    values() {
        return this._map.keys();
    }
    [(_b = Symbol.toStringTag, Symbol.iterator)]() {
        return this.keys();
    }
}
class LinkedMap {
    constructor() {
        this[_c] = 'LinkedMap';
        this._map = new Map();
        this._head = undefined;
        this._tail = undefined;
        this._size = 0;
        this._state = 0;
    }
    clear() {
        this._map.clear();
        this._head = undefined;
        this._tail = undefined;
        this._size = 0;
        this._state++;
    }
    isEmpty() {
        return !this._head && !this._tail;
    }
    get size() {
        return this._size;
    }
    get first() {
        return this._head?.value;
    }
    get last() {
        return this._tail?.value;
    }
    has(key) {
        return this._map.has(key);
    }
    get(key, touch = 0 /* Touch.None */) {
        const item = this._map.get(key);
        if (!item) {
            return undefined;
        }
        if (touch !== 0 /* Touch.None */) {
            this.touch(item, touch);
        }
        return item.value;
    }
    set(key, value, touch = 0 /* Touch.None */) {
        let item = this._map.get(key);
        if (item) {
            item.value = value;
            if (touch !== 0 /* Touch.None */) {
                this.touch(item, touch);
            }
        }
        else {
            item = { key, value, next: undefined, previous: undefined };
            switch (touch) {
                case 0 /* Touch.None */:
                    this.addItemLast(item);
                    break;
                case 1 /* Touch.AsOld */:
                    this.addItemFirst(item);
                    break;
                case 2 /* Touch.AsNew */:
                    this.addItemLast(item);
                    break;
                default:
                    this.addItemLast(item);
                    break;
            }
            this._map.set(key, item);
            this._size++;
        }
        return this;
    }
    delete(key) {
        return !!this.remove(key);
    }
    remove(key) {
        const item = this._map.get(key);
        if (!item) {
            return undefined;
        }
        this._map.delete(key);
        this.removeItem(item);
        this._size--;
        return item.value;
    }
    shift() {
        if (!this._head && !this._tail) {
            return undefined;
        }
        if (!this._head || !this._tail) {
            throw new Error('Invalid list');
        }
        const item = this._head;
        this._map.delete(item.key);
        this.removeItem(item);
        this._size--;
        return item.value;
    }
    forEach(callbackfn, thisArg) {
        const state = this._state;
        let current = this._head;
        while (current) {
            if (thisArg) {
                callbackfn.bind(thisArg)(current.value, current.key, this);
            }
            else {
                callbackfn(current.value, current.key, this);
            }
            if (this._state !== state) {
                throw new Error(`LinkedMap got modified during iteration.`);
            }
            current = current.next;
        }
    }
    keys() {
        const map = this;
        const state = this._state;
        let current = this._head;
        const iterator = {
            [Symbol.iterator]() {
                return iterator;
            },
            next() {
                if (map._state !== state) {
                    throw new Error(`LinkedMap got modified during iteration.`);
                }
                if (current) {
                    const result = { value: current.key, done: false };
                    current = current.next;
                    return result;
                }
                else {
                    return { value: undefined, done: true };
                }
            }
        };
        return iterator;
    }
    values() {
        const map = this;
        const state = this._state;
        let current = this._head;
        const iterator = {
            [Symbol.iterator]() {
                return iterator;
            },
            next() {
                if (map._state !== state) {
                    throw new Error(`LinkedMap got modified during iteration.`);
                }
                if (current) {
                    const result = { value: current.value, done: false };
                    current = current.next;
                    return result;
                }
                else {
                    return { value: undefined, done: true };
                }
            }
        };
        return iterator;
    }
    entries() {
        const map = this;
        const state = this._state;
        let current = this._head;
        const iterator = {
            [Symbol.iterator]() {
                return iterator;
            },
            next() {
                if (map._state !== state) {
                    throw new Error(`LinkedMap got modified during iteration.`);
                }
                if (current) {
                    const result = { value: [current.key, current.value], done: false };
                    current = current.next;
                    return result;
                }
                else {
                    return { value: undefined, done: true };
                }
            }
        };
        return iterator;
    }
    [(_c = Symbol.toStringTag, Symbol.iterator)]() {
        return this.entries();
    }
    trimOld(newSize) {
        if (newSize >= this.size) {
            return;
        }
        if (newSize === 0) {
            this.clear();
            return;
        }
        let current = this._head;
        let currentSize = this.size;
        while (current && currentSize > newSize) {
            this._map.delete(current.key);
            current = current.next;
            currentSize--;
        }
        this._head = current;
        this._size = currentSize;
        if (current) {
            current.previous = undefined;
        }
        this._state++;
    }
    trimNew(newSize) {
        if (newSize >= this.size) {
            return;
        }
        if (newSize === 0) {
            this.clear();
            return;
        }
        let current = this._tail;
        let currentSize = this.size;
        while (current && currentSize > newSize) {
            this._map.delete(current.key);
            current = current.previous;
            currentSize--;
        }
        this._tail = current;
        this._size = currentSize;
        if (current) {
            current.next = undefined;
        }
        this._state++;
    }
    addItemFirst(item) {
        // First time Insert
        if (!this._head && !this._tail) {
            this._tail = item;
        }
        else if (!this._head) {
            throw new Error('Invalid list');
        }
        else {
            item.next = this._head;
            this._head.previous = item;
        }
        this._head = item;
        this._state++;
    }
    addItemLast(item) {
        // First time Insert
        if (!this._head && !this._tail) {
            this._head = item;
        }
        else if (!this._tail) {
            throw new Error('Invalid list');
        }
        else {
            item.previous = this._tail;
            this._tail.next = item;
        }
        this._tail = item;
        this._state++;
    }
    removeItem(item) {
        if (item === this._head && item === this._tail) {
            this._head = undefined;
            this._tail = undefined;
        }
        else if (item === this._head) {
            // This can only happen if size === 1 which is handled
            // by the case above.
            if (!item.next) {
                throw new Error('Invalid list');
            }
            item.next.previous = undefined;
            this._head = item.next;
        }
        else if (item === this._tail) {
            // This can only happen if size === 1 which is handled
            // by the case above.
            if (!item.previous) {
                throw new Error('Invalid list');
            }
            item.previous.next = undefined;
            this._tail = item.previous;
        }
        else {
            const next = item.next;
            const previous = item.previous;
            if (!next || !previous) {
                throw new Error('Invalid list');
            }
            next.previous = previous;
            previous.next = next;
        }
        item.next = undefined;
        item.previous = undefined;
        this._state++;
    }
    touch(item, touch) {
        if (!this._head || !this._tail) {
            throw new Error('Invalid list');
        }
        if ((touch !== 1 /* Touch.AsOld */ && touch !== 2 /* Touch.AsNew */)) {
            return;
        }
        if (touch === 1 /* Touch.AsOld */) {
            if (item === this._head) {
                return;
            }
            const next = item.next;
            const previous = item.previous;
            // Unlink the item
            if (item === this._tail) {
                // previous must be defined since item was not head but is tail
                // So there are more than on item in the map
                previous.next = undefined;
                this._tail = previous;
            }
            else {
                // Both next and previous are not undefined since item was neither head nor tail.
                next.previous = previous;
                previous.next = next;
            }
            // Insert the node at head
            item.previous = undefined;
            item.next = this._head;
            this._head.previous = item;
            this._head = item;
            this._state++;
        }
        else if (touch === 2 /* Touch.AsNew */) {
            if (item === this._tail) {
                return;
            }
            const next = item.next;
            const previous = item.previous;
            // Unlink the item.
            if (item === this._head) {
                // next must be defined since item was not tail but is head
                // So there are more than on item in the map
                next.previous = undefined;
                this._head = next;
            }
            else {
                // Both next and previous are not undefined since item was neither head nor tail.
                next.previous = previous;
                previous.next = next;
            }
            item.next = undefined;
            item.previous = this._tail;
            this._tail.next = item;
            this._tail = item;
            this._state++;
        }
    }
    toJSON() {
        const data = [];
        this.forEach((value, key) => {
            data.push([key, value]);
        });
        return data;
    }
    fromJSON(data) {
        this.clear();
        for (const [key, value] of data) {
            this.set(key, value);
        }
    }
}
class Cache extends LinkedMap {
    constructor(limit, ratio = 1) {
        super();
        this._limit = limit;
        this._ratio = Math.min(Math.max(0, ratio), 1);
    }
    get limit() {
        return this._limit;
    }
    set limit(limit) {
        this._limit = limit;
        this.checkTrim();
    }
    get(key, touch = 2 /* Touch.AsNew */) {
        return super.get(key, touch);
    }
    peek(key) {
        return super.get(key, 0 /* Touch.None */);
    }
    set(key, value) {
        super.set(key, value, 2 /* Touch.AsNew */);
        return this;
    }
    checkTrim() {
        if (this.size > this._limit) {
            this.trim(Math.round(this._limit * this._ratio));
        }
    }
}
class LRUCache extends Cache {
    constructor(limit, ratio = 1) {
        super(limit, ratio);
    }
    trim(newSize) {
        this.trimOld(newSize);
    }
    set(key, value) {
        super.set(key, value);
        this.checkTrim();
        return this;
    }
}
/**
 * A map that allows access both by keys and values.
 * **NOTE**: values need to be unique.
 */
class BidirectionalMap {
    constructor(entries) {
        this._m1 = new Map();
        this._m2 = new Map();
        if (entries) {
            for (const [key, value] of entries) {
                this.set(key, value);
            }
        }
    }
    clear() {
        this._m1.clear();
        this._m2.clear();
    }
    set(key, value) {
        this._m1.set(key, value);
        this._m2.set(value, key);
    }
    get(key) {
        return this._m1.get(key);
    }
    getKey(value) {
        return this._m2.get(value);
    }
    delete(key) {
        const value = this._m1.get(key);
        if (value === undefined) {
            return false;
        }
        this._m1.delete(key);
        this._m2.delete(value);
        return true;
    }
    keys() {
        return this._m1.keys();
    }
    values() {
        return this._m1.values();
    }
}
class SetMap {
    constructor() {
        this.map = new Map();
    }
    add(key, value) {
        let values = this.map.get(key);
        if (!values) {
            values = new Set();
            this.map.set(key, values);
        }
        values.add(value);
    }
    delete(key, value) {
        const values = this.map.get(key);
        if (!values) {
            return;
        }
        values.delete(value);
        if (values.size === 0) {
            this.map.delete(key);
        }
    }
    forEach(key, fn) {
        const values = this.map.get(key);
        if (!values) {
            return;
        }
        values.forEach(fn);
    }
}
/**
 * A map that is addressable with an arbitrary number of keys. This is useful in high performance
 * scenarios where creating a composite key whenever the data is accessed is too expensive. For
 * example for a very hot function, constructing a string like `first-second-third` for every call
 * will cause a significant hit to performance.
 */
class NKeyMap {
    constructor() {
        this._data = new Map();
    }
    /**
     * Sets a value on the map. Note that unlike a standard `Map`, the first argument is the value.
     * This is because the spread operator is used for the keys and must be last..
     * @param value The value to set.
     * @param keys The keys for the value.
     */
    set(value, ...keys) {
        let currentMap = this._data;
        for (let i = 0; i < keys.length - 1; i++) {
            if (!currentMap.has(keys[i])) {
                currentMap.set(keys[i], new Map());
            }
            currentMap = currentMap.get(keys[i]);
        }
        currentMap.set(keys[keys.length - 1], value);
    }
    get(...keys) {
        let currentMap = this._data;
        for (let i = 0; i < keys.length - 1; i++) {
            if (!currentMap.has(keys[i])) {
                return undefined;
            }
            currentMap = currentMap.get(keys[i]);
        }
        return currentMap.get(keys[keys.length - 1]);
    }
    clear() {
        this._data.clear();
    }
    /**
     * Get a textual representation of the map for debugging purposes.
     */
    toString() {
        const printMap = (map, depth) => {
            let result = '';
            for (const [key, value] of map) {
                result += `${'  '.repeat(depth)}${key}: `;
                if (value instanceof Map) {
                    result += '\n' + printMap(value, depth + 1);
                }
                else {
                    result += `${value}\n`;
                }
            }
            return result;
        };
        return printMap(this._data, 0);
    }
}

export { BidirectionalMap, LRUCache, LinkedMap, NKeyMap, ResourceMap, ResourceSet, SetMap };
