"use strict";

const parsers = require("../parsers");

module.exports.parse = function parse(v) {
  const num = parsers.parseNumber(v, true);
  if (num && parseFloat(num) <= 1000) {
    return num;
  }
  const keywords = ["normal", "none", "small-caps"];
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
      this._setProperty("font-valiant", v);
    } else {
      this._setProperty("font-variant", module.exports.parse(v));
    }
  },
  get() {
    return this.getPropertyValue("font-variant");
  },
  enumerable: true,
  configurable: true
};
