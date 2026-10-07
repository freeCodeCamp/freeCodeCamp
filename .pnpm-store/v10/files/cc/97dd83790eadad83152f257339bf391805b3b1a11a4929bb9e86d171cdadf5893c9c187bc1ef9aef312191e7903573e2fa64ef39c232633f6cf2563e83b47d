"use strict";

const parsers = require("../parsers");

module.exports.parse = function parse(v) {
  return parsers.parseImage(v);
};

module.exports.isValid = function isValid(v) {
  if (v === "" || typeof parsers.parseKeyword(v, ["none"]) === "string") {
    return true;
  }
  return typeof module.exports.parse(v) === "string";
};

module.exports.definition = {
  set(v) {
    v = parsers.prepareValue(v, this._global);
    if (parsers.hasVarFunc(v)) {
      this._setProperty("background", "");
      this._setProperty("background-image", v);
    } else {
      this._setProperty("background-image", module.exports.parse(v));
    }
  },
  get() {
    return this.getPropertyValue("background-image");
  },
  enumerable: true,
  configurable: true
};
