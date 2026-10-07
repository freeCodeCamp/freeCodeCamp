"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upperCase = exports.snakeCase = exports.pascalCase = exports.lowerCase = exports.kebabCase = exports.constantCase = exports.camelCase = void 0;
/**
 * Adapted from the `change-case` library.
 *
 * Copyright (c) 2014 Blake Embrey (hello@blakeembrey.com)
 */
/** @internal */
const lowerCase = str => str.toLowerCase();
/** @internal */
exports.lowerCase = lowerCase;
const upperCase = str => str.toUpperCase();
/**
 * Replace `re` in the input string with the replacement value.
 */
exports.upperCase = upperCase;
const replace = (input, re, value) => re instanceof RegExp ? input.replace(re, value) : re.reduce((input, re) => input.replace(re, value), input);
// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
const DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
const DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */
const noCase = (input, options = {}) => {
  const {
    delimiter = " ",
    splitRegexp = DEFAULT_SPLIT_REGEXP,
    stripRegexp = DEFAULT_STRIP_REGEXP,
    transform = lowerCase
  } = options;
  const result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
  let start = 0;
  let end = result.length;
  // Trim the delimiter from around the output string.
  while (result.charAt(start) === "\0") {
    start++;
  }
  while (result.charAt(end - 1) === "\0") {
    end--;
  }
  // Transform each token independently.
  return result.slice(start, end).split("\0").map(transform).join(delimiter);
};
const pascalCaseTransform = (input, index) => {
  const firstChar = input.charAt(0);
  const lowerChars = input.substring(1).toLowerCase();
  if (index > 0 && firstChar >= "0" && firstChar <= "9") {
    return `_${firstChar}${lowerChars}`;
  }
  return `${firstChar.toUpperCase()}${lowerChars}`;
};
/** @internal */
const pascalCase = (input, options) => noCase(input, {
  delimiter: "",
  transform: pascalCaseTransform,
  ...options
});
exports.pascalCase = pascalCase;
const camelCaseTransform = (input, index) => index === 0 ? input.toLowerCase() : pascalCaseTransform(input, index);
/** @internal */
const camelCase = (input, options) => pascalCase(input, {
  transform: camelCaseTransform,
  ...options
});
/** @internal */
exports.camelCase = camelCase;
const constantCase = (input, options) => noCase(input, {
  delimiter: "_",
  transform: upperCase,
  ...options
});
/** @internal */
exports.constantCase = constantCase;
const kebabCase = (input, options) => noCase(input, {
  delimiter: "-",
  ...options
});
/** @internal */
exports.kebabCase = kebabCase;
const snakeCase = (input, options) => noCase(input, {
  delimiter: "_",
  ...options
});
exports.snakeCase = snakeCase;
//# sourceMappingURL=string-utils.js.map