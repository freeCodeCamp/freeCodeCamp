'use strict';

const Assert = require('@hapi/hoek/lib/assert');
const Clone = require('@hapi/hoek/lib/clone');

const Common = require('./common');


const internals = {
    max: 1000,
    supported: new Set(['undefined', 'boolean', 'number', 'string'])
};


exports.provider = {

    provision(options) {

        return new internals.Cache(options);
    }
};


// Least Recently Used (LRU) Cache

internals.Cache = class {

    constructor(options = {}) {

        Common.assertOptions(options, ['max']);
        Assert(options.max === undefined || options.max && options.max > 0 && isFinite(options.max), 'Invalid max cache size');

        this._max = options.max || internals.max;

        this._map = new Map();                          // Map of nodes by key
        this._list = new internals.List();              // List of nodes (most recently used in head)
    }

    get length() {

        return this._map.size;
    }

    set(key, value) {

        if (key !== null &&
            !internals.supported.has(typeof key)) {

            return;
        }

        let node = this._map.get(key);
        if (node) {
            node.value = value;
            this._list.first(node);
            return;
        }

        node = this._list.unshift({ key, value });
        this._map.set(key, node);
        this._compact();
    }

    get(key) {

        const node = this._map.get(key);
        if (node) {
            this._list.first(node);
            return Clone(node.value);
        }
    }

    _compact() {

        if (this._map.size > this._max) {
            const node = this._list.pop();
            this._map.delete(node.key);
        }
    }
};


internals.List = class {

    constructor() {

        this.tail = null;
        this.head = null;
    }

    unshift(node) {

        node.next = null;
        node.prev = this.head;

        if (this.head) {
            this.head.next = node;
        }

        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }

        return node;
    }

    first(node) {

        if (node === this.head) {
            return;
        }

        this._remove(node);
        this.unshift(node);
    }

    pop() {

        return this._remove(this.tail);
    }

    _remove(node) {

        const { next, prev } = node;

        next.prev = prev;

        if (prev) {
            prev.next = next;
        }

        if (node === this.tail) {
            this.tail = next;
        }

        node.prev = null;
        node.next = null;

        return node;
    }
};
