"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;

const { asciiLowercase, parseNonNegativeInteger } = require("../helpers/strings");
const { closest } = require("../helpers/traversal");

function reflectedAttributeClampedToRange(attrValue, min, max, defaultValue = 0) {
  if (attrValue === null) {
    return defaultValue;
  }
  const parsed = parseNonNegativeInteger(attrValue);
  if (parsed === null) {
    return defaultValue;
  }
  if (parsed < min) {
    return min;
  }
  if (parsed > max) {
    return max;
  }
  return parsed;
}

class HTMLTableCellElementImpl extends HTMLElementImpl {
  get colSpan() {
    return reflectedAttributeClampedToRange(this.getAttributeNS(null, "colspan"), 1, 1000, 1);
  }

  set colSpan(V) {
    this.setAttributeNS(null, "colspan", String(V));
  }

  get rowSpan() {
    return reflectedAttributeClampedToRange(this.getAttributeNS(null, "rowspan"), 0, 65534, 1);
  }

  set rowSpan(V) {
    this.setAttributeNS(null, "rowspan", String(V));
  }

  get cellIndex() {
    const tr = closest(this, "tr");
    if (tr === null) {
      return -1;
    }

    return tr.cells.indexOf(this);
  }

  get scope() {
    let value = this.getAttributeNS(null, "scope");
    if (value === null) {
      return "";
    }

    // Enumerated attribute is matched ASCII-case-insensitively.
    value = asciiLowercase(value);
    if (value === "row" || value === "col" || value === "rowgroup" || value === "colgroup") {
      return value;
    }

    return "";
  }

  set scope(V) {
    this.setAttributeNS(null, "scope", V);
  }
}

module.exports = {
  implementation: HTMLTableCellElementImpl
};
