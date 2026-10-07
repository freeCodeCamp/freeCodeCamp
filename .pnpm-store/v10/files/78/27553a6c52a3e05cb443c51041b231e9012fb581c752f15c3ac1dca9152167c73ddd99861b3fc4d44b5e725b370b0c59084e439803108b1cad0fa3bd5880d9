"use strict";

const parsers = require("../parsers");

const positions = ["top", "right", "bottom", "left"];

module.exports.parse = function parse(v) {
  const val = parsers.parseMeasurement(v);
  if (val) {
    return val;
  }
  return parsers.parseKeyword(v, ["auto"]);
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
        "margin",
        "",
        "",
        module.exports.isValid,
        module.exports.parse,
        positions
      );
      this._setProperty("margin", v);
    } else {
      this._implicitSetter(
        "margin",
        "",
        v,
        module.exports.isValid,
        module.exports.parse,
        positions
      );
    }
  },
  get() {
    const val = this._implicitGetter("margin", positions);
    if (val === "") {
      return this.getPropertyValue("margin");
    }
    if (parsers.hasVarFunc(val)) {
      return "";
    }
    return val;
  },
  enumerable: true,
  configurable: true
};
