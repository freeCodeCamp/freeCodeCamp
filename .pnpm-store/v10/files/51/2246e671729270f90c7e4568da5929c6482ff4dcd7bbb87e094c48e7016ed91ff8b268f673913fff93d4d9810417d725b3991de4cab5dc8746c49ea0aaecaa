"use strict";

const parsers = require("../parsers");

module.exports.parse = function parse(v) {
  const keywords = ["repeat", "repeat-x", "repeat-y", "no-repeat", "space", "round"];
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
      this._setProperty("background", "");
      this._setProperty("background-repeat", v);
    } else {
      this._setProperty("background-repeat", module.exports.parse(v));
    }
  },
  get() {
    return this.getPropertyValue("background-repeat");
  },
  enumerable: true,
  configurable: true
};
