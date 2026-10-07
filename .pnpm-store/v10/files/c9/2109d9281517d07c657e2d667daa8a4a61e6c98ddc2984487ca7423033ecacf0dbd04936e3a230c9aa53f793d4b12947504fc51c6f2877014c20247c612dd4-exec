"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _array = require("./array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-underscore-dangle */
class ArraySet {
  constructor(values = []) {
    this._values = values.slice(0);
  }

  values() {
    return this._values.slice(0);
  }

  add(value) {
    this._values.push(value);
  }

  has(value) {
    const index = this.findIndex(value);
    return index !== -1;
  }

  delete(value) {
    const index = this.findIndex(value);
    return this._deleteAtIndex(index);
  }

  deleteBy(finder) {
    const index = this.findIndexBy(finder);
    return this._deleteAtIndex(index);
  }

  findIndex(value) {
    return this.findIndexBy(item => (0, _lodash.default)(item, value));
  }

  findIndexBy(finder) {
    return (0, _array.findIndex)(this._values, finder);
  }

  _deleteAtIndex(index) {
    if (index !== -1) {
      this._values.splice(index, 1);

      return true;
    }

    return false;
  }

}

exports.default = ArraySet;