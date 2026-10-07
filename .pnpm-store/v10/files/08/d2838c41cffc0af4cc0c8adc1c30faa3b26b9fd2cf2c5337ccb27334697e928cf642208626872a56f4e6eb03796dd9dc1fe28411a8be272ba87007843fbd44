"use strict";

const parsers = require("../parsers");

module.exports.parse = function parse(v) {
  let num = parsers.parseNumber(v);
  if (num) {
    num = parseFloat(num);
    if (num < 0) {
      return "0";
    } else if (num > 1) {
      return "1";
    }
    return `${num}`;
  }
  let pct = parsers.parsePercent(v);
  if (pct) {
    pct = parseFloat(pct);
    if (pct < 0) {
      return "0%";
    } else if (pct > 100) {
      return "100%";
    }
    return `${pct}%`;
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
    this._setProperty("opacity", module.exports.parse(v));
  },
  get() {
    return this.getPropertyValue("opacity");
  },
  enumerable: true,
  configurable: true
};
