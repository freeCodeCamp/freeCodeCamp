"use strict";

const parsers = require("../parsers");

module.exports.parse = function parse(v) {
  return parsers.parseNumber(v, true);
};

module.exports.isValid = function isValid(v) {
  return typeof module.exports.parse(v) === "string";
};

module.exports.definition = {
  set(v) {
    v = parsers.prepareValue(v, this._global);
    if (parsers.hasVarFunc(v)) {
      this._setProperty("flex", "");
      this._setProperty("flex-shrink", v);
    } else {
      this._setProperty("flex-shrink", module.exports.parse(v));
    }
  },
  get() {
    return this.getPropertyValue("flex-shrink");
  },
  enumerable: true,
  configurable: true
};
