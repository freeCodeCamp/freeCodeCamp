"use strict";

const parsers = require("../parsers");
const borderTopWidth = require("./borderTopWidth");
const borderTopStyle = require("./borderTopStyle");
const borderTopColor = require("./borderTopColor");

const shorthandFor = new Map([
  ["border-left-width", borderTopWidth],
  ["border-left-style", borderTopStyle],
  ["border-left-color", borderTopColor]
]);

module.exports.definition = {
  set(v) {
    v = parsers.prepareValue(v, this._global);
    if (parsers.hasVarFunc(v)) {
      for (const [key] of shorthandFor) {
        this._setProperty(key, "");
      }
      this._setProperty("border", "");
      this._setProperty("border-left", v);
    } else {
      this._shorthandSetter("border-left", v, shorthandFor);
    }
  },
  get() {
    let val = this.getPropertyValue("border-left");
    if (parsers.hasVarFunc(val)) {
      return val;
    }
    val = this._shorthandGetter("border-left", shorthandFor);
    if (parsers.hasVarFunc(val)) {
      return "";
    }
    return val;
  },
  enumerable: true,
  configurable: true
};
