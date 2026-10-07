"use strict";

const parsers = require("../parsers");

module.exports.parse = function parse(v) {
  const val = parsers.parseColor(v);
  if (val) {
    return val;
  }
  return parsers.parseKeyword(v);
};

module.exports.isValid = function isValid(v) {
  if (v === "" || typeof parsers.parseKeyword(v) === "string") {
    return true;
  }
  return parsers.isValidColor(v);
};

module.exports.definition = {
  set(v) {
    v = parsers.prepareValue(v, this._global);
    if (parsers.hasVarFunc(v)) {
      this._setProperty("border", "");
      this._setProperty("border-color", v);
    } else {
      const positions = ["top", "right", "bottom", "left"];
      this._implicitSetter(
        "border",
        "color",
        v,
        module.exports.isValid,
        module.exports.parse,
        positions
      );
    }
  },
  get() {
    return this.getPropertyValue("border-color");
  },
  enumerable: true,
  configurable: true
};
