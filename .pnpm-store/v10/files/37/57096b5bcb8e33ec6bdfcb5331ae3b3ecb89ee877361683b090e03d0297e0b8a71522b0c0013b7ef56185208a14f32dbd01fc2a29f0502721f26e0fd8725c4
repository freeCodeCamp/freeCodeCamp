"use strict";

const parsers = require("../parsers");

module.exports.parse = function parse(v) {
  if (v === "") {
    return v;
  }
  const keywords = [
    "serif",
    "sans-serif",
    "cursive",
    "fantasy",
    "monospace",
    "system-ui",
    "math",
    "ui-serif",
    "ui-sans-serif",
    "ui-monospace",
    "ui-rounded"
  ];
  const genericValues = ["fangsong", "kai", "khmer-mul", "nastaliq"];
  const val = parsers.splitValue(v, {
    delimiter: ","
  });
  const font = [];
  let valid = false;
  for (const i of val) {
    const str = parsers.parseString(i);
    if (str) {
      font.push(str);
      valid = true;
      continue;
    }
    const key = parsers.parseKeyword(i, keywords);
    if (key) {
      font.push(key);
      valid = true;
      continue;
    }
    const obj = parsers.parseFunction(i);
    if (obj) {
      const { name, value } = obj;
      if (name === "generic" && genericValues.includes(value)) {
        font.push(`${name}(${value})`);
        valid = true;
        continue;
      }
    }
    // This implementation does not strictly follow the specification.
    // The spec does not require the first letter of the font-family to be
    // capitalized, and unquoted font-family names are not restricted to ASCII.
    // However, in the real world, the first letter of the ASCII font-family
    // names are capitalized, and unquoted font-family names do not contain
    // spaces, e.g. `Times`. And non-ASCII font-family names are quoted even
    // without spaces, e.g. `"メイリオ"`.
    // @see https://drafts.csswg.org/css-fonts/#font-family-prop
    if (
      i !== "undefined" &&
      /^(?:[A-Z][A-Za-z\d-]+(?:\s+[A-Z][A-Za-z\d-]+)*|-?[a-z][a-z-]+)$/.test(i)
    ) {
      font.push(i.trim());
      valid = true;
      continue;
    }
    if (!valid) {
      return;
    }
  }
  return font.join(", ");
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
      this._setProperty("font", "");
      this._setProperty("font-family", v);
    } else {
      this._setProperty("font-family", module.exports.parse(v));
    }
  },
  get() {
    return this.getPropertyValue("font-family");
  },
  enumerable: true,
  configurable: true
};
