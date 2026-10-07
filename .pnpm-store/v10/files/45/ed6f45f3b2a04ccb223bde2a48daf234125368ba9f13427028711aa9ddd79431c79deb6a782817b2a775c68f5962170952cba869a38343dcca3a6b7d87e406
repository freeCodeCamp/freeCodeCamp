"use strict";

exports.removeLeadingAndTrailingHTTPWhitespace = string => {
  return string.replace(/^[ \t\n\r]+/, "").replace(/[ \t\n\r]+$/, "");
};

exports.removeTrailingHTTPWhitespace = string => {
  return string.replace(/[ \t\n\r]+$/, "");
};

exports.isHTTPWhitespaceChar = char => {
  return char === " " || char === "\t" || char === "\n" || char === "\r";
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
