"use strict";
const {
  removeLeadingAndTrailingASCIIWhitespace,
  removeTrailingASCIIWhitespace,
  isASCIIWhitespaceChar,
  solelyContainsHTTPTokenCodePoints,
  soleyContainsHTTPQuotedStringTokenCodePoints,
  asciiLowercase
} = require("./utils.js");

module.exports = input => {
  input = removeLeadingAndTrailingASCIIWhitespace(input);

  let position = 0;
  let type = "";
  while (position < input.length && input[position] !== "/") {
    type += input[position];
    ++position;
  }

  if (type.length === 0 || !solelyContainsHTTPTokenCodePoints(type)) {
    return null;
  }

  if (position >= input.length) {
    return null;
  }

  // Skips past "/"
  ++position;

  let subtype = "";
  while (position < input.length && input[position] !== ";") {
    subtype += input[position];
    ++position;
  }

  subtype = removeTrailingASCIIWhitespace(subtype);

  if (subtype.length === 0 || !solelyContainsHTTPTokenCodePoints(subtype)) {
    return null;
  }

  const mimeType = {
    type: asciiLowercase(type),
    subtype: asciiLowercase(subtype),
    parameters: new Map()
  };

  while (position < input.length) {
    // Skip past ";"
    ++position;

    while (isASCIIWhitespaceChar(input[position])) {
      ++position;
    }

    let parameterName = "";
    while (position < input.length && input[position] !== ";" && input[position] !== "=") {
      parameterName += input[position];
      ++position;
    }
    parameterName = asciiLowercase(parameterName);

    if (position < input.length) {
      if (input[position] === ";") {
        continue;
      }

      // Skip past "="
      ++position;
    }

    let parameterValue = "";
    if (input[position] === "\"") {
      ++position;

      while (true) {
        while (position < input.length && input[position] !== "\"" && input[position] !== "\\") {
          parameterValue += input[position];
          ++position;
        }

        if (position < input.length && input[position] === "\\") {
          ++position;
          if (position < input.length) {
            parameterValue += input[position];
            ++position;
            continue;
          } else {
            parameterValue += "\\";
            break;
          }
        } else {
          break;
        }
      }

      while (position < input.length && input[position] !== ";") {
        ++position;
      }
    } else {
      while (position < input.length && input[position] !== ";") {
        parameterValue += input[position];
        ++position;
      }

      parameterValue = removeTrailingASCIIWhitespace(parameterValue);

      if (parameterValue === "") {
        continue;
      }
    }

    if (parameterName.length > 0 &&
        solelyContainsHTTPTokenCodePoints(parameterName) &&
        soleyContainsHTTPQuotedStringTokenCodePoints(parameterValue) &&
        !mimeType.parameters.has(parameterName)) {
      mimeType.parameters.set(parameterName, parameterValue);
    }
  }

  return mimeType;
};
