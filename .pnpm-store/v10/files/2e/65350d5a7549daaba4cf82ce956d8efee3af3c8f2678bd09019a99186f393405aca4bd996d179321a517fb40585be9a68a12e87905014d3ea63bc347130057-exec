'use strict';

const { assert, clone, reach } = require('@hapi/hoek');

const Common = require('./common');

let Template;


const internals = {
    symbol: Symbol('ref'),      // Used to internally identify references (shared with other joi versions)
    defaults: {
        adjust: null,
        in: false,
        iterables: null,
        map: null,
        separator: '.',
        type: 'value'
    }
};


exports.create = function (key, options = {}) {

    assert(typeof key === 'string', 'Invalid reference key:', key);
    Common.assertOptions(options, ['adjust', 'ancestor', 'in', 'iterables', 'map', 'prefix', 'render', 'separator']);
    assert(!options.prefix || typeof options.prefix === 'object', 'options.prefix must be of type object');

    const ref = Object.assign({}, internals.defaults, options);
    delete ref.prefix;

    const separator = ref.separator;
    const context = internals.context(key, separator, options.prefix);
    ref.type = context.type;
    key = context.key;

    if (ref.type === 'value') {
        if (context.root) {
            assert(!separator || key[0] !== separator, 'Cannot specify relative path with root prefix');
            ref.ancestor = 'root';
            if (!key) {
                key = null;
            }
        }

        if (separator &&
            separator === key) {

            key = null;
            ref.ancestor = 0;
        }
        else {
            if (ref.ancestor !== undefined) {
                assert(!separator || !key || key[0] !== separator, 'Cannot combine prefix with ancestor option');
            }
            else {
                const [ancestor, slice] = internals.ancestor(key, separator);
                if (slice) {
                    key = key.slice(slice);
                    if (key === '') {
                        key = null;
                    }
                }

                ref.ancestor = ancestor;
            }
        }
    }

    ref.path = separator ? (key === null ? [] : key.split(separator)) : [key];

    return new internals.Ref(ref);
};


exports.in = function (key, options = {}) {

    return exports.create(key, { ...options, in: true });
};


exports.isRef = function (ref) {

    return ref ? !!ref[Common.symbols.ref] : false;
};


internals.Ref = class {

    constructor(options) {

        assert(typeof options === 'object', 'Invalid reference construction');
        Common.assertOptions(options, [
            'adjust', 'ancestor', 'in', 'iterables', 'map', 'path', 'render', 'separator', 'type',  // Copied
            'depth', 'key', 'root', 'display'                                                       // Overridden
        ]);

        assert([false, undefined].includes(options.separator) || typeof options.separator === 'string' && options.separator.length === 1, 'Invalid separator');
        assert(!options.adjust || typeof options.adjust === 'function', 'options.adjust must be a function');
        assert(!options.map || Array.isArray(options.map), 'options.map must be an array');
        assert(!options.map || !options.adjust, 'Cannot set both map and adjust options');

        Object.assign(this, internals.defaults, options);

        assert(this.type === 'value' || this.ancestor === undefined, 'Non-value references cannot reference ancestors');

        if (Array.isArray(this.map)) {
            this.map = new Map(this.map);
        }

        this.depth = this.path.length;
        this.key = this.path.length ? this.path.join(this.separator) : null;
        this.root = this.path[0];

        this.updateDisplay();
    }

    resolve(value, state, prefs, local, options = {}) {

        assert(!this.in || options.in, 'Invalid in() reference usage');

        if (this.type === 'global') {
            return this._resolve(prefs.context, state, options);
        }

        if (this.type === 'local') {
            return this._resolve(local, state, options);
        }

        if (!this.ancestor) {
            return this._resolve(value, state, options);
        }

        if (this.ancestor === 'root') {
            return this._resolve(state.ancestors[state.ancestors.length - 1], state, options);
        }

        assert(this.ancestor <= state.ancestors.length, 'Invalid reference exceeds the schema root:', this.display);
        return this._resolve(state.ancestors[this.ancestor - 1], state, options);
    }

    _resolve(target, state, options) {

        let resolved;

        if (this.type === 'value' &&
            state.mainstay.shadow &&
            options.shadow !== false) {

            resolved = state.mainstay.shadow.get(this.absolute(state));
        }

        if (resolved === undefined) {
            resolved = reach(target, this.path, { iterables: this.iterables, functions: true });
        }

        if (this.adjust) {
            resolved = this.adjust(resolved);
        }

        if (this.map) {
            const mapped = this.map.get(resolved);
            if (mapped !== undefined) {
                resolved = mapped;
            }
        }

        if (state.mainstay) {
            state.mainstay.tracer.resolve(state, this, resolved);
        }

        return resolved;
    }

    toString() {

        return this.display;
    }

    absolute(state) {

        return [...state.path.slice(0, -this.ancestor), ...this.path];
    }

    clone() {

        return new internals.Ref(this);
    }

    describe() {

        const ref = { path: this.path };

        if (this.type !== 'value') {
            ref.type = this.type;
        }

        if (this.separator !== '.') {
            ref.separator = this.separator;
        }

        if (this.type === 'value' &&
            this.ancestor !== 1) {

            ref.ancestor = this.ancestor;
        }

        if (this.map) {
            ref.map = [...this.map];
        }

        for (const key of ['adjust', 'iterables', 'render']) {
            if (this[key] !== null &&
                this[key] !== undefined) {

                ref[key] = this[key];
            }
        }

        if (this.in !== false) {
            ref.in = true;
        }

        return { ref };
    }

    updateDisplay() {

        const key = this.key !== null ? this.key : '';
        if (this.type !== 'value') {
            this.display = `ref:${this.type}:${key}`;
            return;
        }

        if (!this.separator) {
            this.display = `ref:${key}`;
            return;
        }

        if (!this.ancestor) {
            this.display = `ref:${this.separator}${key}`;
            return;
        }

        if (this.ancestor === 'root') {
            this.display = `ref:root:${key}`;
            return;
        }

        if (this.ancestor === 1) {
            this.display = `ref:${key || '..'}`;
            return;
        }

        const lead = new Array(this.ancestor + 1).fill(this.separator).join('');
        this.display = `ref:${lead}${key || ''}`;
    }
};


internals.Ref.prototype[Common.symbols.ref] = true;


exports.build = function (desc) {

    desc = Object.assign({}, internals.defaults, desc);
    if (desc.type === 'value' &&
        desc.ancestor === undefined) {

        desc.ancestor = 1;
    }

    return new internals.Ref(desc);
};


internals.context = function (key, separator, prefix = {}) {

    key = key.trim();

    if (prefix) {
        const globalp = prefix.global === undefined ? '$' : prefix.global;
        if (globalp !== separator &&
            key.startsWith(globalp)) {

            return { key: key.slice(globalp.length), type: 'global' };
        }

        const local = prefix.local === undefined ? '#' : prefix.local;
        if (local !== separator &&
            key.startsWith(local)) {

            return { key: key.slice(local.length), type: 'local' };
        }

        const root = prefix.root === undefined ? '/' : prefix.root;
        if (root !== separator &&
            key.startsWith(root)) {

            return { key: key.slice(root.length), type: 'value', root: true };
        }
    }

    return { key, type: 'value' };
};


internals.ancestor = function (key, separator) {

    if (!separator) {
        return [1, 0];              // 'a_b' -> 1 (parent)
    }

    if (key[0] !== separator) {     // 'a.b' -> 1 (parent)
        return [1, 0];
    }

    if (key[1] !== separator) {     // '.a.b' -> 0 (self)
        return [0, 1];
    }

    let i = 2;
    while (key[i] === separator) {
        ++i;
    }

    return [i - 1, i];              // '...a.b.' -> 2 (grandparent)
};


exports.toSibling = 0;

exports.toParent = 1;


exports.Manager = class {

    constructor() {

        this.refs = [];                     // 0: [self refs], 1: [parent refs], 2: [grandparent refs], ...
    }

    register(source, target) {

        if (!source) {
            return;
        }

        target = target === undefined ? exports.toParent : target;

        // Array

        if (Array.isArray(source)) {
            for (const ref of source) {
                this.register(ref, target);
            }

            return;
        }

        // Schema

        if (Common.isSchema(source)) {
            for (const item of source._refs.refs) {
                if (item.ancestor - target >= 0) {
                    this.refs.push({ ancestor: item.ancestor - target, root: item.root });
                }
            }

            return;
        }

        // Reference

        if (exports.isRef(source) &&
            source.type === 'value' &&
            source.ancestor - target >= 0) {

            this.refs.push({ ancestor: source.ancestor - target, root: source.root });
        }

        // Template

        Template = Template || require('./template');

        if (Template.isTemplate(source)) {
            this.register(source.refs(), target);
        }
    }

    get length() {

        return this.refs.length;
    }

    clone() {

        const copy = new exports.Manager();
        copy.refs = clone(this.refs);
        return copy;
    }

    reset() {

        this.refs = [];
    }

    roots() {

        return this.refs.filter((ref) => !ref.ancestor).map((ref) => ref.root);
    }
};
