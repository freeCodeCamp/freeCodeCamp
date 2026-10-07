"use strict";

const parsers = require("../parsers");

module.exports.parse = function parse(v) {
  const keywords = ["fixed", "scroll", "local"];
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
      this._setProperty("background-attachment", v);
    } else {
      this._setProperty("background-attachment", module.exports.parse(v));
    }
  },
  get() {
    return this.getPropertyValue("background-attachment");
  },
  enumerable: true,
  configurable: true
};
