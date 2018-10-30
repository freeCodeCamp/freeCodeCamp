"use strict";

const enumerationValues = new Set(["transparent", "native"]);
module.exports = {
  enumerationValues,
  convert(value, { context = "The provided value" } = {}) {
    const string = `${value}`;
    if (!enumerationValues.has(value)) {
      throw new TypeError(`${context} '${value}' is not a valid enumeration value for EndingType`);
    }
    return string;
  }
};
