"use strict";

const asciiWhitespaceRe = /^[\t\n\f\r ]$/;
exports.asciiWhitespaceRe = asciiWhitespaceRe;

// https://infra.spec.whatwg.org/#ascii-lowercase
exports.asciiLowercase = s => {
  return s.replace(/[A-Z]/g, l => l.toLowerCase());
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

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-floating-point-number
const floatingPointNumRe = /^-?(?:\d+|\d*\.\d+)(?:[eE][-+]?\d+)?$/;
exports.isValidFloatingPointNumber = str => floatingPointNumRe.test(str);

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#rules-for-parsing-floating-point-number-values
exports.parseFloatingPointNumber = str => {
  const parsed = parseFloat(str);
  return isFinite(parsed) ? parsed : NaN;
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
