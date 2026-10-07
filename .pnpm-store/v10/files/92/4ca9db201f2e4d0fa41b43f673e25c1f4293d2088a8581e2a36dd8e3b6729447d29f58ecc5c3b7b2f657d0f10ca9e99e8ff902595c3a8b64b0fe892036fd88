"use strict";

const enumerationValues = new Set(["subtitles", "captions", "descriptions", "chapters", "metadata"]);
exports.enumerationValues = enumerationValues;

exports.convert = (globalObject, value, { context = "The provided value" } = {}) => {
  const string = `${value}`;
  if (!enumerationValues.has(string)) {
    throw new globalObject.TypeError(`${context} '${string}' is not a valid enumeration value for TextTrackKind`);
  }
  return string;
};
