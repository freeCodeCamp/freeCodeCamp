"use strict";

const parsers = require("../parsers");

module.exports.parse = function parse(v) {
  const val = parsers.parseMeasurement(v, true);
  if (val) {
    return val;
  }
  return parsers.parseKeyword(v);
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
      this._setProperty("padding", "");
      this._setProperty("padding-top", v);
    } else {
      this._subImplicitSetter("padding", "top", v, module.exports.isValid, module.exports.parse, [
        "top",
        "right",
        "bottom",
        "left"
      ]);
    }
  },
  get() {
    return this.getPropertyValue("padding-top");
  },
  enumerable: true,
  configurable: true
};
