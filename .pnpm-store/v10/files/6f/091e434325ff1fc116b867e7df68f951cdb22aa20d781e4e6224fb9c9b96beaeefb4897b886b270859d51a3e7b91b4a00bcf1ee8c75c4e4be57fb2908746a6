"use strict";

const parsers = require("../parsers");

module.exports.parse = function parse(v) {
  const keywords = ["normal", "italic", "oblique"];
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
      this._setProperty("font-style", v);
    } else {
      this._setProperty("font-style", module.exports.parse(v));
    }
  },
  get() {
    return this.getPropertyValue("font-style");
  },
  enumerable: true,
  configurable: true
};
