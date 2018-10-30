"use strict";

const idlUtils = require("../generated/utils.js");
const { HTML_NS } = require("../helpers/namespaces");

exports.implementation = class HTMLCollectionImpl {
  constructor(args, privateData) {
    this._list = [];
    this._version = -1;
    this._element = privateData.element;
    this._query = privateData.query;
    this._update();
  }
  get length() {
    this._update();
    return this._list.length;
  }
  item(index) {
    this._update();
    return this._list[index] || null;
  }
  namedItem(key) {
    if (key === "") {
      return null;
    }
    this._update();
    for (const element of this._list) {
      if (element.getAttribute("id") === key) {
        return element;
      }
      if (element._namespaceURI === HTML_NS) {
        const name = element.getAttribute("name");
        if (name === key) {
          return element;
        }
      }
    }
    return null;
  }
  _update() {
    if (this._version < this._element._version) {
      const snapshot = this._query();
      for (let i = 0; i < snapshot.length; i++) {
        this._list[i] = snapshot[i];
      }
      this._list.length = snapshot.length;
      this._version = this._element._version;
    }
  }
  get [idlUtils.supportedPropertyIndices]() {
    this._update();
    return this._list.keys();
  }
  get [idlUtils.supportedPropertyNames]() {
    this._update();
    const result = new Set();
    for (const element of this._list) {
      const id = element.getAttribute("id");
      if (id) {
        result.add(id);
      }
      if (element._namespaceURI === HTML_NS) {
        const name = element.getAttribute("name");
        if (name) {
          result.add(name);
        }
      }
    }
    return result;
  }

  // Inherit some useful functions from Array.
  [Symbol.iterator]() {
    this._update();
    return this._list[Symbol.iterator]();
  }
  entries() {
    this._update();
    return this._list.entries();
  }
  filter(...args) {
    this._update();
    return this._list.filter(...args);
  }
  map(...args) {
    this._update();
    return this._list.map(...args);
  }
  indexOf(...args) {
    this._update();
    return this._list.indexOf(...args);
  }
};
