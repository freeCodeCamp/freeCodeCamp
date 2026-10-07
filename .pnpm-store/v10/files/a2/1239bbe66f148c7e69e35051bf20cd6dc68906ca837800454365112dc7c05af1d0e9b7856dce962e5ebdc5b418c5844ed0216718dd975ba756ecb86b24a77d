'use strict';

var createNode = require('../doc/createNode.js');
var stringifyCollection = require('../stringify/stringifyCollection.js');
var Collection = require('./Collection.js');
var identity = require('./identity.js');
var Scalar = require('./Scalar.js');
var toJS = require('./toJS.js');

class YAMLSeq extends Collection.Collection {
    static get tagName() {
        return 'tag:yaml.org,2002:seq';
    }
    constructor(schema) {
        super(identity.SEQ, schema);
        this.items = [];
    }
    add(value) {
        this.items.push(value);
    }
    /**
     * Removes a value from the collection.
     *
     * `key` must contain a representation of an integer for this to succeed.
     * It may be wrapped in a `Scalar`.
     *
     * @returns `true` if the item was found and removed.
     */
    delete(key) {
        const idx = asItemIndex(key);
        if (typeof idx !== 'number')
            return false;
        const del = this.items.splice(idx, 1);
        return del.length > 0;
    }
    get(key, keepScalar) {
        const idx = asItemIndex(key);
        if (typeof idx !== 'number')
            return undefined;
        const it = this.items[idx];
        return !keepScalar && identity.isScalar(it) ? it.value : it;
    }
    /**
     * Checks if the collection includes a value with the key `key`.
     *
     * `key` must contain a representation of an integer for this to succeed.
     * It may be wrapped in a `Scalar`.
     */
    has(key) {
        const idx = asItemIndex(key);
        return typeof idx === 'number' && idx < this.items.length;
    }
    /**
     * Sets a value in this collection. For `!!set`, `value` needs to be a
     * boolean to add/remove the item from the set.
     *
     * If `key` does not contain a representation of an integer, this will throw.
     * It may be wrapped in a `Scalar`.
     */
    set(key, value) {
        const idx = asItemIndex(key);
        if (typeof idx !== 'number')
            throw new Error(`Expected a valid index, not ${key}.`);
        const prev = this.items[idx];
        if (identity.isScalar(prev) && Scalar.isScalarValue(value))
            prev.value = value;
        else
            this.items[idx] = value;
    }
    toJSON(_, ctx) {
        const seq = [];
        if (ctx?.onCreate)
            ctx.onCreate(seq);
        let i = 0;
        for (const item of this.items)
            seq.push(toJS.toJS(item, String(i++), ctx));
        return seq;
    }
    toString(ctx, onComment, onChompKeep) {
        if (!ctx)
            return JSON.stringify(this);
        return stringifyCollection.stringifyCollection(this, ctx, {
            blockItemPrefix: '- ',
            flowChars: { start: '[', end: ']' },
            itemIndent: (ctx.indent || '') + '  ',
            onChompKeep,
            onComment
        });
    }
    static from(schema, obj, ctx) {
        const { replacer } = ctx;
        const seq = new this(schema);
        if (obj && Symbol.iterator in Object(obj)) {
            let i = 0;
            for (let it of obj) {
                if (typeof replacer === 'function') {
                    const key = obj instanceof Set ? it : String(i++);
                    it = replacer.call(obj, key, it);
                }
                seq.items.push(createNode.createNode(it, undefined, ctx));
            }
        }
        return seq;
    }
}
function asItemIndex(key) {
    let idx = identity.isScalar(key) ? key.value : key;
    if (idx && typeof idx === 'string')
        idx = Number(idx);
    return typeof idx === 'number' && Number.isInteger(idx) && idx >= 0
        ? idx
        : null;
}

exports.YAMLSeq = YAMLSeq;
