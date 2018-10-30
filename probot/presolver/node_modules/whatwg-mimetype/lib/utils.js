"use strict";

exports.removeLeadingAndTrailingASCIIWhitespace = string => {
  return string.replace(/^[ \t\n\f\r]+/, "").replace(/[ \t\n\f\r]+$/, "");
};

exports.removeTrailingASCIIWhitespace = string => {
  return string.replace(/[ \t\n\f\r]+$/, "");
};

exports.isASCIIWhitespaceChar = char => {
  return char === " " || char === "\t" || char === "\n" || char === "\f" || char === "\r";
};

exports.solelyContainsHTTPTokenCodePoints = string => {
  return /^[-!#$%&'*+.^_`|~A-Za-z0-9]*$/.test(string);
};

exports.soleyContainsHTTPQuotedStringTokenCodePoints = string => {
  return /^[\t\u0020-\u007E\u0080-\u00FF]*$/.test(string);
};

exports.asciiLowercase = string => {
  return string.replace(/[A-Z]/g, l => l.toLowerCase());
};
