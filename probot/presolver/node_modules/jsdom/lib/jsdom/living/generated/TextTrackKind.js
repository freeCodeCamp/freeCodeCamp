"use strict";

const enumerationValues = new Set(["subtitles", "captions", "descriptions", "chapters", "metadata"]);
module.exports = {
  enumerationValues,
  convert(value, { context = "The provided value" } = {}) {
    const string = `${value}`;
    if (!enumerationValues.has(value)) {
      throw new TypeError(`${context} '${value}' is not a valid enumeration value for TextTrackKind`);
    }
    return string;
  }
};
