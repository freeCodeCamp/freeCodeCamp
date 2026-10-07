"use strict";

// https://infra.spec.whatwg.org/#ascii-whitespace
const asciiWhitespaceRe = /^[\t\n\f\r ]$/;
exports.asciiWhitespaceRe = asciiWhitespaceRe;

// https://infra.spec.whatwg.org/#ascii-lowercase
exports.asciiLowercase = s => {
  return s.replace(/[A-Z]/g, l => l.toLowerCase());
};

// https://infra.spec.whatwg.org/#ascii-uppercase
exports.asciiUppercase = s => {
  return s.replace(/[a-z]/g, l => l.toUpperCase());
};

// https://infra.spec.whatwg.org/#strip-newlines
exports.stripNewlines = s => {
  return s.replace(/[\n\r]+/g, "");
};

// https://infra.spec.whatwg.org/#strip-leading-and-trailing-ascii-whitespace
exports.stripLeadingAndTrailingASCIIWhitespace = s => {
  return s.replace(/^[ \t\n\f\r]+/, "").replace(/[ \t\n\f\r]+$/, "");
};

// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
exports.stripAndCollapseASCIIWhitespace = s => {
  return s.replace(/[ \t\n\f\r]+/g, " ").replace(/^[ \t\n\f\r]+/, "").replace(/[ \t\n\f\r]+$/, "");
};

// https://html.spec.whatwg.org/multipage/infrastructure.html#valid-simple-colour
exports.isValidSimpleColor = s => {
  return /^#[a-fA-F\d]{6}$/.test(s);
};

// https://infra.spec.whatwg.org/#ascii-case-insensitive
exports.asciiCaseInsensitiveMatch = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; ++i) {
    if ((a.charCodeAt(i) | 32) !== (b.charCodeAt(i) | 32)) {
      return false;
    }
  }

  return true;
};

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#rules-for-parsing-integers
// Error is represented as null.
const parseInteger = exports.parseInteger = input => {
  // The implementation here is slightly different from the spec's. We want to use parseInt(), but parseInt() trims
  // Unicode whitespace in addition to just ASCII ones, so we make sure that the trimmed prefix contains only ASCII
  // whitespace ourselves.
  const numWhitespace = input.length - input.trimStart().length;
  if (/[^\t\n\f\r ]/.test(input.slice(0, numWhitespace))) {
    return null;
  }
  // We don't allow hexadecimal numbers here.
  // eslint-disable-next-line radix
  const value = parseInt(input, 10);
  if (Number.isNaN(value)) {
    return null;
  }
  // parseInt() returns -0 for "-0". Normalize that here.
  return value === 0 ? 0 : value;
};

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#rules-for-parsing-non-negative-integers
// Error is represented as null.
exports.parseNonNegativeInteger = input => {
  const value = parseInteger(input);
  if (value === null) {
    return null;
  }
  if (value < 0) {
    return null;
  }
  return value;
};

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-floating-point-number
const floatingPointNumRe = /^-?(?:\d+|\d*\.\d+)(?:[eE][-+]?\d+)?$/;
exports.isValidFloatingPointNumber = str => floatingPointNumRe.test(str);

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#rules-for-parsing-floating-point-number-values
// Error is represented as null.
exports.parseFloatingPointNumber = str => {
  // The implementation here is slightly different from the spec's. We need to use parseFloat() in order to retain
  // accuracy, but parseFloat() trims Unicode whitespace in addition to just ASCII ones, so we make sure that the
  // trimmed prefix contains only ASCII whitespace ourselves.
  const numWhitespace = str.length - str.trimStart().length;
  if (/[^\t\n\f\r ]/.test(str.slice(0, numWhitespace))) {
    return null;
  }
  const parsed = parseFloat(str);
  return isFinite(parsed) ? parsed : null;
};

// https://infra.spec.whatwg.org/#split-on-ascii-whitespace
exports.splitOnASCIIWhitespace = str => {
  let position = 0;
  const tokens = [];
  while (position < str.length && asciiWhitespaceRe.test(str[position])) {
    position++;
  }
  if (position === str.length) {
    return tokens;
  }
  while (position < str.length) {
    const start = position;
    while (position < str.length && !asciiWhitespaceRe.test(str[position])) {
      position++;
    }
    tokens.push(str.slice(start, position));
    while (position < str.length && asciiWhitespaceRe.test(str[position])) {
      position++;
    }
  }
  return tokens;
};

// https://infra.spec.whatwg.org/#split-on-commas
exports.splitOnCommas = str => {
  let position = 0;
  const tokens = [];
  while (position < str.length) {
    let start = position;
    while (position < str.length && str[position] !== ",") {
      position++;
    }
    let end = position;
    while (start < str.length && asciiWhitespaceRe.test(str[start])) {
      start++;
    }
    while (end > start && asciiWhitespaceRe.test(str[end - 1])) {
      end--;
    }
    tokens.push(str.slice(start, end));
    if (position < str.length) {
      position++;
    }
  }
  return tokens;
};
