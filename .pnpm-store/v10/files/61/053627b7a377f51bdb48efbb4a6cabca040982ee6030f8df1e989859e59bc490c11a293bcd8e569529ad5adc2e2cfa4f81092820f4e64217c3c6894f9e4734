"use strict";

const parsers = require("../parsers");

module.exports.parse = function parse(v) {
  const val = parsers.parseMeasurement(v);
  if (val) {
    return val;
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
    if (parsers.hasVarFunc(v)) {
      this._setProperty("margin", "");
      this._setProperty("margin-bottom", v);
    } else {
      this._subImplicitSetter("margin", "bottom", v, module.exports.isValid, module.exports.parse, [
        "top",
        "right",
        "bottom",
        "left"
      ]);
    }
  },
  get() {
    return this.getPropertyValue("margin-bottom");
  },
  enumerable: true,
  configurable: true
};
