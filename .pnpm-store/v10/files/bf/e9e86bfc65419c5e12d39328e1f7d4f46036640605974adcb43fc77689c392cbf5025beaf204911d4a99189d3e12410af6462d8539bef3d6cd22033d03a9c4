"use strict";

const idlUtils = require("../generated/utils.js");

exports.implementation = class StyleSheetList {
  constructor() {
    this._list = [];
  }

  get length() {
    return this._list.length;
  }

  item(index) {
    const result = this._list[index];
    return result !== undefined ? result : null;
  }

  get [idlUtils.supportedPropertyIndices]() {
    return this._list.keys();
  }

  _add(sheet) {
    const { _list } = this;
    if (!_list.includes(sheet)) {
      _list.push(sheet);
    }
  }

  _remove(sheet) {
    const { _list } = this;

    const index = _list.indexOf(sheet);
    if (index >= 0) {
      _list.splice(index, 1);
    }
  }
};
