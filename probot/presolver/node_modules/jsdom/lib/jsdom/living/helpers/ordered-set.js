"use strict";

// https://infra.spec.whatwg.org/#sets
//
// Only use this class if a Set cannot be used, e.g. when "replace" operation is needed, since there's no way to replace
// an element while keep the relative order using a Set, only remove and then add something at the end.

module.exports = class OrderedSet {
  constructor() {
    this._items = [];
  }

  append(item) {
    if (!this.contains(item)) {
      this._items.push(item);
    }
  }

  prepend(item) {
    if (!this.contains(item)) {
      this._items.unshift(item);
    }
  }

  replace(item, replacement) {
    let seen = false;
    for (let i = 0; i < this._items.length;) {
      const isInstance = this._items[i] === item || this._items[i] === replacement;
      if (seen && isInstance) {
        this._items.splice(i, 1);
      } else {
        if (isInstance) {
          this._items[i] = replacement;
          seen = true;
        }
        i++;
      }
    }
  }

  remove(...items) {
    this.removePredicate(item => items.includes(item));
  }

  removePredicate(predicate) {
    for (let i = 0; i < this._items.length;) {
      if (predicate(this._items[i])) {
        this._items.splice(i, 1);
      } else {
        i++;
      }
    }
  }

  empty() {
    this._items.length = 0;
  }

  contains(item) {
    return this._items.includes(item);
  }

  get size() {
    return this._items.length;
  }

  isEmpty() {
    return this._items.length === 0;
  }

  // Useful for other parts of jsdom

  [Symbol.iterator]() {
    return this._items[Symbol.iterator]();
  }

  keys() {
    return this._items.keys();
  }

  get(index) {
    return this._items[index];
  }

  some(func) {
    return this._items.some(func);
  }

  // https://dom.spec.whatwg.org/#concept-ordered-set-parser
  static parse(input) {
    const tokens = new OrderedSet();
    for (const token of input.split(/[\t\n\f\r ]+/)) {
      if (token) {
        tokens.append(token);
      }
    }
    return tokens;
  }

  // https://dom.spec.whatwg.org/#concept-ordered-set-serializer
  serialize() {
    return this._items.join(" ");
  }
};
