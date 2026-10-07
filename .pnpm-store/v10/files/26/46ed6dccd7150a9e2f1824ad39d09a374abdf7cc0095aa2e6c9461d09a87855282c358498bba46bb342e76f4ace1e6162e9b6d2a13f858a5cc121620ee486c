"use strict";

const enumerationValues = new Set(["subtitles", "captions", "descriptions", "chapters", "metadata"]);
exports.enumerationValues = enumerationValues;

exports.convert = function convert(value, { context = "The provided value" } = {}) {
  const string = `${value}`;
  if (!enumerationValues.has(string)) {
    throw new TypeError(`${context} '${string}' is not a valid enumeration value for TextTrackKind`);
  }
  return string;
};
