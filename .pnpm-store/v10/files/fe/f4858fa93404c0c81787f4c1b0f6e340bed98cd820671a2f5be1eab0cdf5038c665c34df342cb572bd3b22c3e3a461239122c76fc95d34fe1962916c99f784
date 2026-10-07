"use strict";

const parsers = require("../parsers");

module.exports.parse = function parse(v) {
  const dim = parsers.parseMeasurement(v);
  if (dim) {
    return dim;
  }
  return parsers.parseKeyword(v, ["auto"]);
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
    this._setProperty("right", module.exports.parse(v));
  },
  get() {
    return this.getPropertyValue("right");
  },
  enumerable: true,
  configurable: true
};
