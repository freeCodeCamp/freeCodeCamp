"use strict";

const idlUtils = require("../generated/utils.js");

exports.implementation = class NodeListImpl {
  constructor(globalObject, args, privateData) {
    if (privateData.nodes) {
      this._list = [...privateData.nodes];
      this._isLive = false;
    } else {
      this._list = [];
      this._isLive = true;
      this._version = -1;
      this._element = privateData.element;
      this._query = privateData.query;
      this._update();
    }
  }
  get length() {
    this._update();
    return this._list.length;
  }
  item(index) {
    this._update();
    return this._list[index] || null;
  }
  _update() {
    if (this._isLive) {
      if (this._version < this._element._version) {
        const snapshot = this._query();
        for (let i = 0; i < snapshot.length; i++) {
          this._list[i] = snapshot[i];
        }
        this._list.length = snapshot.length;
        this._version = this._element._version;
      }
    }
  }
  get [idlUtils.supportedPropertyIndices]() {
    this._update();
    return this._list.keys();
  }
};
