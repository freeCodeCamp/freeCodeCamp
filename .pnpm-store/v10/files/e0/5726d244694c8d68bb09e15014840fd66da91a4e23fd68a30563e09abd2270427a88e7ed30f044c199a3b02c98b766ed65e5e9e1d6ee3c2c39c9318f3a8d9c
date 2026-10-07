"use strict";

const parsers = require("../parsers");

module.exports.parse = function parse(v) {
  const keywords = [
    "none",
    "hidden",
    "dotted",
    "dashed",
    "solid",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset"
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
    const val = module.exports.parse(v);
    if (val === "none" || val === "hidden") {
      this._setProperty("border-left-style", "");
      this._setProperty("border-left-color", "");
      this._setProperty("border-left-width", "");
      return;
    }
    if (parsers.hasVarFunc(v)) {
      this._setProperty("border", "");
      this._setProperty("border-left", "");
      this._setProperty("border-style", "");
    }
    this._setProperty("border-left-style", val);
  },
  get() {
    return this.getPropertyValue("border-left-style");
  },
  enumerable: true,
  configurable: true
};
