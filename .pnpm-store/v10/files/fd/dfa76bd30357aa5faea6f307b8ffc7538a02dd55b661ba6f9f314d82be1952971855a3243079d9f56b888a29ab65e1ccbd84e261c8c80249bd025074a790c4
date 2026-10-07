"use strict";

const parsers = require("../parsers");
const borderWidth = require("./borderWidth");
const borderStyle = require("./borderStyle");
const borderColor = require("./borderColor");

const shorthandFor = new Map([
  ["border-width", borderWidth],
  ["border-style", borderStyle],
  ["border-color", borderColor]
]);

module.exports.definition = {
  set(v) {
    v = parsers.prepareValue(v, this._global);
    if (/^none$/i.test(v)) {
      v = "";
    }
    if (parsers.hasVarFunc(v)) {
      for (const [key] of shorthandFor) {
        this._setProperty(key, "");
      }
      this._setProperty("border", v);
    } else {
      this._midShorthandSetter("border", v, shorthandFor, ["top", "right", "bottom", "left"]);
    }
  },
  get() {
    let val = this.getPropertyValue("border");
    if (parsers.hasVarFunc(val)) {
      return val;
    }
    val = this._shorthandGetter("border", shorthandFor);
    if (parsers.hasVarFunc(val)) {
      return "";
    }
    return val;
  },
  enumerable: true,
  configurable: true
};
