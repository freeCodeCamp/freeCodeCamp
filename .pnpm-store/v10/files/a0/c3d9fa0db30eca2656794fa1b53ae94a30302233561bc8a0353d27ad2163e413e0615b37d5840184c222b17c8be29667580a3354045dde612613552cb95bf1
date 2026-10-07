"use strict";

/**
 * Provides some utility functions for somewhat efficiently modifying a
 * collection of headers.
 *
 * Note that this class only operates on ByteStrings (which is also why we use
 * toLowerCase internally).
 */
class HeaderList {
  constructor() {
    this.headers = new Map();
  }

  append(name, value) {
    const existing = this.headers.get(name.toLowerCase());
    if (existing) {
      name = existing[0].name;
      existing.push({ name, value });
    } else {
      this.headers.set(name.toLowerCase(), [{ name, value }]);
    }
  }

  contains(name) {
    return this.headers.has(name.toLowerCase());
  }

  get(name) {
    name = name.toLowerCase();
    const values = this.headers.get(name);
    if (!values) {
      return null;
    }
    return values.map(h => h.value).join(", ");
  }

  delete(name) {
    this.headers.delete(name.toLowerCase());
  }

  set(name, value) {
    const lowerName = name.toLowerCase();
    this.headers.delete(lowerName);
    this.headers.set(lowerName, [{ name, value }]);
  }

  sortAndCombine() {
    const names = [...this.headers.keys()].sort();
    return names.map(n => [n, this.get(n)]);
  }
}

module.exports = HeaderList;
