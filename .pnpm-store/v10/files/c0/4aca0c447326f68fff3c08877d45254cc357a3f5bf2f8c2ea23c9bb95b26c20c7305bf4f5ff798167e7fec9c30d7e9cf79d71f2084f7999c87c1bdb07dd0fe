"use strict";

const { encodeString } = require("./internals/querystring");

function getAsPrimitive(value) {
  const type = typeof value;

  if (type === "string") {
    // Length check is handled inside encodeString function
    return encodeString(value);
  } else if (type === "bigint") {
    return value.toString();
  } else if (type === "boolean") {
    return value ? "true" : "false";
  } else if (type === "number" && Number.isFinite(value)) {
    return value < 1e21 ? "" + value : encodeString("" + value);
  }

  return "";
}

/**
 * @param {Record<string, string | number | boolean
 * | ReadonlyArray<string | number | boolean> | null>} input
 * @returns {string}
 */
function stringify(input) {
  let result = "";

  if (input === null || typeof input !== "object") {
    return result;
  }

  const separator = "&";
  const keys = Object.keys(input);
  const keyLength = keys.length;
  let valueLength = 0;

  for (let i = 0; i < keyLength; i++) {
    const key = keys[i];
    const value = input[key];
    const encodedKey = encodeString(key) + "=";

    if (i) {
      result += separator;
    }

    if (Array.isArray(value)) {
      valueLength = value.length;
      for (let j = 0; j < valueLength; j++) {
        if (j) {
          result += separator;
        }

        // Optimization: Dividing into multiple lines improves the performance.
        // Since v8 does not need to care about the '+' character if it was one-liner.
        result += encodedKey;
        result += getAsPrimitive(value[j]);
      }
    } else {
      result += encodedKey;
      result += getAsPrimitive(value);
    }
  }

  return result;
}

module.exports = stringify;
