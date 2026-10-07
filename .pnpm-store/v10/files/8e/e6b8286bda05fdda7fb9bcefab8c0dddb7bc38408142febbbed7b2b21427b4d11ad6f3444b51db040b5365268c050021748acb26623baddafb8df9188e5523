"use strict";

const parsers = require("../parsers");

module.exports.parse = function parse(v) {
  const val = parsers.parseMeasurement(v);
  if (val) {
    return val;
  }
  const keywords = ["content", "auto", "min-content", "max-content"];
  return parsers.parseKeyword(v, keywords);
};

module.exports.isValid = function isValid(v) {
  return typeof module.exports.parse(v) === "string";
};

module.exports.definition = {
  set(v) {
    v = parsers.prepareValue(v, this._global);
    if (parsers.hasVarFunc(v)) {
      this._setProperty("flex", "");
      this._setProperty("flex-basis", v);
    } else {
      this._setProperty("flex-basis", module.exports.parse(v));
    }
  },
  get() {
    return this.getPropertyValue("flex-basis");
  },
  enumerable: true,
  configurable: true
};
