"use strict";

const parsers = require("../parsers");
const flexGrow = require("./flexGrow");
const flexShrink = require("./flexShrink");
const flexBasis = require("./flexBasis");

const shorthandFor = new Map([
  ["flex-grow", flexGrow],
  ["flex-shrink", flexShrink],
  ["flex-basis", flexBasis]
]);

module.exports.parse = function parse(v) {
  const key = parsers.parseKeyword(v, ["auto", "none"]);
  if (key) {
    if (key === "auto") {
      return "1 1 auto";
    }
    if (key === "none") {
      return "0 0 auto";
    }
    if (key === "initial") {
      return "0 1 auto";
    }
    return;
  }
  const obj = parsers.parseShorthand(v, shorthandFor);
  if (obj) {
    const flex = {
      "flex-grow": "1",
      "flex-shrink": "1",
      "flex-basis": "0%"
    };
    const items = Object.entries(obj);
    for (const [property, value] of items) {
      flex[property] = value;
    }
    return [...Object.values(flex)].join(" ");
  }
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
      this._shorthandSetter("flex", "", shorthandFor);
      this._setProperty("flex", v);
    } else {
      this._shorthandSetter("flex", module.exports.parse(v), shorthandFor);
    }
  },
  get() {
    let val = this.getPropertyValue("flex");
    if (parsers.hasVarFunc(val)) {
      return val;
    }
    val = this._shorthandGetter("flex", shorthandFor);
    if (parsers.hasVarFunc(val)) {
      return "";
    }
    return val;
  },
  enumerable: true,
  configurable: true
};
