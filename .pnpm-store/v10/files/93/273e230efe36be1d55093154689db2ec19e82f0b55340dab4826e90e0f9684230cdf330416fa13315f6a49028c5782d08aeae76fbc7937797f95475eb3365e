"use strict";

const parsers = require("../parsers");

module.exports.parse = function parse(v) {
  const val = parsers.parseMeasurement(v, true);
  if (val) {
    return val;
  }
  const keywords = [
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "xx-large",
    "xxx-large",
    "smaller",
    "larger"
  ];
  return parsers.parseKeyword(v, keywords);
};

module.exports.isValid = function isValid(v) {
  if (v === "") {
    return true;
  }
  return typeof module.exports.parse(v) === "string";
};

module.exports.definition = {
  set(v) {
    v = parsers.prepareValue(v, this._global);
    if (parsers.hasVarFunc(v)) {
      this._setProperty("font", "");
      this._setProperty("font-size", v);
    } else {
      this._setProperty("font-size", module.exports.parse(v));
    }
  },
  get() {
    return this.getPropertyValue("font-size");
  },
  enumerable: true,
  configurable: true
};
