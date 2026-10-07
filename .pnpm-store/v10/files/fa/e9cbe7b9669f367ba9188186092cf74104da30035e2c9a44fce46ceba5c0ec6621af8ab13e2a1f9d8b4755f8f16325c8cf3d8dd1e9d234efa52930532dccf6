"use strict";

const fastDecode = require("fast-decode-uri-component");

const plusRegex = /\+/g;
const Empty = function () {};
Empty.prototype = Object.create(null);

/**
 * @callback parse
 * @param {string} input
 */
function parse(input) {
  // Optimization: Use new Empty() instead of Object.create(null) for performance
  // v8 has a better optimization for initializing functions compared to Object
  const result = new Empty();

  if (typeof input !== "string") {
    return result;
  }

  let inputLength = input.length;
  let key = "";
  let value = "";
  let startingIndex = -1;
  let equalityIndex = -1;
  let shouldDecodeKey = false;
  let shouldDecodeValue = false;
  let keyHasPlus = false;
  let valueHasPlus = false;
  let hasBothKeyValuePair = false;
  let c = 0;

  // Have a boundary of input.length + 1 to access last pair inside the loop.
  for (let i = 0; i < inputLength + 1; i++) {
    c = i !== inputLength ? input.charCodeAt(i) : 38;

    // Handle '&' and end of line to pass the current values to result
    if (c === 38) {
      hasBothKeyValuePair = equalityIndex > startingIndex;

      // Optimization: Reuse equality index to store the end of key
      if (!hasBothKeyValuePair) {
        equalityIndex = i;
      }

      key = input.slice(startingIndex + 1, equalityIndex);

      // Add key/value pair only if the range size is greater than 1; a.k.a. contains at least "="
      if (hasBothKeyValuePair || key.length > 0) {
        // Optimization: Replace '+' with space
        if (keyHasPlus) {
          key = key.replace(plusRegex, " ");
        }

        // Optimization: Do not decode if it's not necessary.
        if (shouldDecodeKey) {
          key = fastDecode(key) || key;
        }

        if (hasBothKeyValuePair) {
          value = input.slice(equalityIndex + 1, i);

          if (valueHasPlus) {
            value = value.replace(plusRegex, " ");
          }

          if (shouldDecodeValue) {
            value = fastDecode(value) || value;
          }
        }
        const currentValue = result[key];

        if (currentValue === undefined) {
          result[key] = value;
        } else {
          // Optimization: value.pop is faster than Array.isArray(value)
          if (currentValue.pop) {
            currentValue.push(value);
          } else {
            result[key] = [currentValue, value];
          }
        }
      }

      // Reset reading key value pairs
      value = "";
      startingIndex = i;
      equalityIndex = i;
      shouldDecodeKey = false;
      shouldDecodeValue = false;
      keyHasPlus = false;
      valueHasPlus = false;
    }
    // Check '='
    else if (c === 61) {
      if (equalityIndex <= startingIndex) {
        equalityIndex = i;
      }
      // If '=' character occurs again, we should decode the input.
      else {
        shouldDecodeValue = true;
      }
    }
    // Check '+', and remember to replace it with empty space.
    else if (c === 43) {
      if (equalityIndex > startingIndex) {
        valueHasPlus = true;
      } else {
        keyHasPlus = true;
      }
    }
    // Check '%' character for encoding
    else if (c === 37) {
      if (equalityIndex > startingIndex) {
        shouldDecodeValue = true;
      } else {
        shouldDecodeKey = true;
      }
    }
  }

  return result;
}

module.exports = parse;
