"use strict";

const parsers = require("../parsers");
const borderTopWidth = require("./borderTopWidth");
const borderTopStyle = require("./borderTopStyle");
const borderTopColor = require("./borderTopColor");

const shorthandFor = new Map([
  ["border-top-width", borderTopWidth],
  ["border-top-style", borderTopStyle],
  ["border-top-color", borderTopColor]
]);

module.exports.definition = {
  set(v) {
    v = parsers.prepareValue(v, this._global);
    if (parsers.hasVarFunc(v)) {
      for (const [key] of shorthandFor) {
        this._setProperty(key, "");
      }
      this._setProperty("border", "");
      this._setProperty("border-top", v);
    } else {
      this._shorthandSetter("border-top", v, shorthandFor);
    }
  },
  get() {
    let val = this.getPropertyValue("border-top");
    if (parsers.hasVarFunc(val)) {
      return val;
    }
    val = this._shorthandGetter("border-top", shorthandFor);
    if (parsers.hasVarFunc(val)) {
      return "";
    }
    return val;
  },
  enumerable: true,
  configurable: true
};
