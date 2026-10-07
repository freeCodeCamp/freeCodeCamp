"use strict";
const urlencoded = require("./urlencoded");

exports.implementation = class URLSearchParamsImpl {
  constructor(globalObject, constructorArgs, { doNotStripQMark = false }) {
    let init = constructorArgs[0];
    this._list = [];
    this._url = null;

    if (!doNotStripQMark && typeof init === "string" && init[0] === "?") {
      init = init.slice(1);
    }

    if (Array.isArray(init)) {
      for (const pair of init) {
        if (pair.length !== 2) {
          throw new TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence's element does not " +
                              "contain exactly two elements.");
        }
        this._list.push([pair[0], pair[1]]);
      }
    } else if (typeof init === "object" && Object.getPrototypeOf(init) === null) {
      for (const name of Object.keys(init)) {
        const value = init[name];
        this._list.push([name, value]);
      }
    } else {
      this._list = urlencoded.parseUrlencodedString(init);
    }
  }

  _updateSteps() {
    if (this._url !== null) {
      let serializedQuery = urlencoded.serializeUrlencoded(this._list);
      if (serializedQuery === "") {
        serializedQuery = null;
      }

      this._url._url.query = serializedQuery;
    }
  }

  get size() {
    return this._list.length;
  }

  append(name, value) {
    this._list.push([name, value]);
    this._updateSteps();
  }

  delete(name, value) {
    let i = 0;
    while (i < this._list.length) {
      if (this._list[i][0] === name && (value === undefined || this._list[i][1] === value)) {
        this._list.splice(i, 1);
      } else {
        i++;
      }
    }
    this._updateSteps();
  }

  get(name) {
    for (const tuple of this._list) {
      if (tuple[0] === name) {
        return tuple[1];
      }
    }
    return null;
  }

  getAll(name) {
    const output = [];
    for (const tuple of this._list) {
      if (tuple[0] === name) {
        output.push(tuple[1]);
      }
    }
    return output;
  }

  has(name, value) {
    for (const tuple of this._list) {
      if (tuple[0] === name && (value === undefined || tuple[1] === value)) {
        return true;
      }
    }
    return false;
  }

  set(name, value) {
    let found = false;
    let i = 0;
    while (i < this._list.length) {
      if (this._list[i][0] === name) {
        if (found) {
          this._list.splice(i, 1);
        } else {
          found = true;
          this._list[i][1] = value;
          i++;
        }
      } else {
        i++;
      }
    }
    if (!found) {
      this._list.push([name, value]);
    }
    this._updateSteps();
  }

  sort() {
    this._list.sort((a, b) => {
      if (a[0] < b[0]) {
        return -1;
      }
      if (a[0] > b[0]) {
        return 1;
      }
      return 0;
    });

    this._updateSteps();
  }

  [Symbol.iterator]() {
    return this._list[Symbol.iterator]();
  }

  toString() {
    return urlencoded.serializeUrlencoded(this._list);
  }
};
