"use strict";

const parsers = require("../parsers");

module.exports.parse = function parse(v) {
  return parsers.parseKeyword(v, ["collapse", "separate"]);
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
    this._setProperty("border-collapse", module.exports.parse(v));
  },
  get() {
    return this.getPropertyValue("border-collapse");
  },
  enumerable: true,
  configurable: true
};
