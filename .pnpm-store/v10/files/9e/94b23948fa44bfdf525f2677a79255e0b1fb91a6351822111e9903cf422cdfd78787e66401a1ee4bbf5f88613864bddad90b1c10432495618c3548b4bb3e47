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
    if (parsers.hasVarFunc(v)) {
      this._setProperty("background", "");
      this._setProperty("background-color", v);
    } else {
      this._setProperty("background-color", module.exports.parse(v));
    }
  },
  get() {
    return this.getPropertyValue("background-color");
  },
  enumerable: true,
  configurable: true
};
