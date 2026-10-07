"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * GraphemerIterator
 *
 * Takes a string and a "BreakHandler" method during initialisation
 * and creates an iterable object that returns individual graphemes.
 *
 * @param str {string}
 * @return GraphemerIterator
 */
class GraphemerIterator {
    constructor(str, nextBreak) {
        this._index = 0;
        this._str = str;
        this._nextBreak = nextBreak;
    }
    [Symbol.iterator]() {
        return this;
    }
    next() {
        let brk;
        if ((brk = this._nextBreak(this._str, this._index)) < this._str.length) {
            const value = this._str.slice(this._index, brk);
            this._index = brk;
            return { value: value, done: false };
        }
        if (this._index < this._str.length) {
            const value = this._str.slice(this._index);
            this._index = this._str.length;
            return { value: value, done: false };
        }
        return { value: undefined, done: true };
    }
}
exports.default = GraphemerIterator;
