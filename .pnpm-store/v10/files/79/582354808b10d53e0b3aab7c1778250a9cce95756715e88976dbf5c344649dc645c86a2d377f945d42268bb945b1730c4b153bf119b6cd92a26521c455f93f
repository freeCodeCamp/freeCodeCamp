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
      existing.push(value);
    } else {
      this.headers.set(name.toLowerCase(), [value]);
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
    return values;
  }

  delete(name) {
    this.headers.delete(name.toLowerCase());
  }

  set(name, value) {
    const lowerName = name.toLowerCase();
    this.headers.delete(lowerName);
    this.headers.set(lowerName, [value]);
  }

  sortAndCombine() {
    const names = [...this.headers.keys()].sort();

    const headers = [];
    for (const name of names) {
      if (name === "set-cookie") {
        for (const value of this.get(name)) {
          headers.push([name, value]);
        }
      } else {
        headers.push([name, this.get(name).join(", ")]);
      }
    }

    return headers;
  }
}

module.exports = HeaderList;
