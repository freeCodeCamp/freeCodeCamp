"use strict";

const parsers = require("../parsers");

const positions = ["top", "right", "bottom", "left"];

module.exports.parse = function parse(v) {
  const val = parsers.parseMeasurement(v, true);
  if (val) {
    return val;
  }
  return parsers.parseKeyword(v);
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
      this._implicitSetter(
        "padding",
        "",
        "",
        module.exports.isValid,
        module.exports.parse,
        positions
      );
      this._setProperty("padding", v);
    } else {
      this._implicitSetter(
        "padding",
        "",
        v,
        module.exports.isValid,
        module.exports.parse,
        positions
      );
    }
  },
  get() {
    const val = this._implicitGetter("padding", positions);
    if (val === "") {
      return this.getPropertyValue("padding");
    }
    if (parsers.hasVarFunc(val)) {
      return "";
    }
    return val;
  },
  enumerable: true,
  configurable: true
};
