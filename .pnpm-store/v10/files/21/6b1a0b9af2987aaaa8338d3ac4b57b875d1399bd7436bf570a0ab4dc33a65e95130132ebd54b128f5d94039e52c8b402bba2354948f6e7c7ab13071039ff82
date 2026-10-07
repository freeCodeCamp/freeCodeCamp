"use strict";
// FIXME:
// * support multiple backgrounds
// * also fix longhands

const parsers = require("../parsers");
const strings = require("../utils/strings");
const backgroundImage = require("./backgroundImage");
const backgroundPosition = require("./backgroundPosition");
const backgroundRepeat = require("./backgroundRepeat");
const backgroundAttachment = require("./backgroundAttachment");
const backgroundColor = require("./backgroundColor");

const shorthandFor = new Map([
  ["background-image", backgroundImage],
  ["background-position", backgroundPosition],
  ["background-repeat", backgroundRepeat],
  ["background-attachment", backgroundAttachment],
  ["background-color", backgroundColor]
]);

module.exports.definition = {
  set(v) {
    v = parsers.prepareValue(v, this._global);
    if (/^none$/i.test(v)) {
      for (const [key] of shorthandFor) {
        this._setProperty(key, "");
      }
      this._setProperty("background", strings.asciiLowercase(v));
    } else if (parsers.hasVarFunc(v)) {
      for (const [key] of shorthandFor) {
        this._setProperty(key, "");
      }
      this._setProperty("background", v);
    } else {
      this._shorthandSetter("background", v, shorthandFor);
    }
  },
  get() {
    let val = this.getPropertyValue("background");
    if (parsers.hasVarFunc(val)) {
      return val;
    }
    val = this._shorthandGetter("background", shorthandFor);
    if (parsers.hasVarFunc(val)) {
      return "";
    }
    return val;
  },
  enumerable: true,
  configurable: true
};
