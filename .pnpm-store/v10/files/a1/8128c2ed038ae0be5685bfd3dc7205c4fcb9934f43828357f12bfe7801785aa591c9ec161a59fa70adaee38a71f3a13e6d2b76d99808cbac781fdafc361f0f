"use strict";

const parsers = require("../parsers");

module.exports.parse = function parse(v) {
  const keywords = ["thin", "medium", "thick"];
  const key = parsers.parseKeyword(v, keywords);
  if (key) {
    return key;
  }
  return parsers.parseLength(v, true);
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
      this._setProperty("border", "");
      this._setProperty("border-bottom", "");
      this._setProperty("border-width", "");
    }
    this._setProperty("border-bottom-width", module.exports.parse(v));
  },
  get() {
    return this.getPropertyValue("border-bottom-width");
  },
  enumerable: true,
  configurable: true
};
