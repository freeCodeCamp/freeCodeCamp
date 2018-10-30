"use strict";
const { solelyContainsHTTPTokenCodePoints } = require("./utils.js");

module.exports = mimeType => {
  let serialization = `${mimeType.type}/${mimeType.subtype}`;

  if (mimeType.parameters.size === 0) {
    return serialization;
  }

  for (let [name, value] of mimeType.parameters) {
    serialization += ";";
    serialization += name;
    serialization += "=";

    if (!solelyContainsHTTPTokenCodePoints(value) || value.length === 0) {
      value = value.replace(/(["\\])/g, "\\$1");
      value = `"${value}"`;
    }

    serialization += value;
  }

  return serialization;
};
