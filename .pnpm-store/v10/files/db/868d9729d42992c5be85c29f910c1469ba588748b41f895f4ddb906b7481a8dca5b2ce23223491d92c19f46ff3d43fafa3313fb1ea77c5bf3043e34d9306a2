"use strict";

const parsers = require("../parsers");
const borderTopWidth = require("./borderTopWidth");
const borderTopStyle = require("./borderTopStyle");
const borderTopColor = require("./borderTopColor");

const shorthandFor = new Map([
  ["border-right-width", borderTopWidth],
  ["border-right-style", borderTopStyle],
  ["border-right-color", borderTopColor]
]);

module.exports.definition = {
  set(v) {
    v = parsers.prepareValue(v, this._global);
    if (parsers.hasVarFunc(v)) {
      for (const [key] of shorthandFor) {
        this._setProperty(key, "");
      }
      this._setProperty("border", "");
      this._setProperty("border-right", v);
    } else {
      this._shorthandSetter("border-right", v, shorthandFor);
    }
  },
  get() {
    let val = this.getPropertyValue("border-right");
    if (parsers.hasVarFunc(val)) {
      return val;
    }
    val = this._shorthandGetter("border-right", shorthandFor);
    if (parsers.hasVarFunc(val)) {
      return "";
    }
    return val;
  },
  enumerable: true,
  configurable: true
};
