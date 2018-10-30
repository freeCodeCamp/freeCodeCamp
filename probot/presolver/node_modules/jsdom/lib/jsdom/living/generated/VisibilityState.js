"use strict";

const enumerationValues = new Set(["hidden", "visible", "prerender"]);
module.exports = {
  enumerationValues,
  convert(value, { context = "The provided value" } = {}) {
    const string = `${value}`;
    if (!enumerationValues.has(value)) {
      throw new TypeError(`${context} '${value}' is not a valid enumeration value for VisibilityState`);
    }
    return string;
  }
};
