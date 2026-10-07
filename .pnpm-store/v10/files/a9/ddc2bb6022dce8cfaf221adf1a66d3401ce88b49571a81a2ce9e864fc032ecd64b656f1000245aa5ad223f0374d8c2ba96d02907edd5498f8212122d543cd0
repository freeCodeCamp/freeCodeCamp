"use strict";

const parsers = require("../parsers");

module.exports.parse = function parse(v) {
  const parts = parsers.splitValue(v);
  if (!parts.length || parts.length > 2) {
    return;
  }
  const validKeywordsX = ["left", "center", "right"];
  const validKeywordsY = ["top", "center", "bottom"];
  if (parts.length === 1) {
    const dim = parsers.parseMeasurement(parts[0]);
    if (dim) {
      return dim;
    }
    const validKeywords = new Set([...validKeywordsX, ...validKeywordsY]);
    return parsers.parseKeyword(v, [...validKeywords]);
  }
  const [partX, partY] = parts;
  const posX = parsers.parseMeasurement(partX) || parsers.parseKeyword(partX, validKeywordsX);
  if (posX) {
    const posY = parsers.parseMeasurement(partY) || parsers.parseKeyword(partY, validKeywordsY);
    if (posY) {
      return `${posX} ${posY}`;
    }
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
      this._setProperty("background", "");
      this._setProperty("background-position", v);
    } else {
      this._setProperty("background-position", module.exports.parse(v));
    }
  },
  get() {
    return this.getPropertyValue("background-position");
  },
  enumerable: true,
  configurable: true
};
