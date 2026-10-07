"use strict";

const parsers = require("../parsers");

module.exports.parse = function parse(v) {
  const val = parsers.parseColor(v);
  if (val) {
    return val;
  }
  return parsers.parseKeyword(v);
};

module.exports.isValid = function isValid(v) {
  if (v === "" || typeof parsers.parseKeyword(v) === "string") {
    return true;
  }
  return parsers.isValidColor(v);
};

module.exports.definition = {
  set(v) {
    v = parsers.prepareValue(v, this._global);
    this._setProperty("-webkit-text-fill-color", module.exports.parse(v));
  },
  get() {
    return this.getPropertyValue("-webkit-text-fill-color");
  },
  enumerable: true,
  configurable: true
};
