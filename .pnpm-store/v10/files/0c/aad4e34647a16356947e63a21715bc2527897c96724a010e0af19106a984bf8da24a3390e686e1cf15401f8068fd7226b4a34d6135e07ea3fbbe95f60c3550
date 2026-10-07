"use strict";

const { asciiLowercase } = require("./strings");

// Utility to translate from `border-width` to `borderWidth`.
// NOTE: For values prefixed with webkit, e.g. `-webkit-foo`, we need to provide
// both `webkitFoo` and `WebkitFoo`. Here we only return `webkitFoo`.
exports.dashedToCamelCase = function (dashed) {
  if (dashed.startsWith("--")) {
    return dashed;
  }
  let camel = "";
  let nextCap = false;
  // skip leading hyphen in vendor prefixed value, e.g. -webkit-foo
  let i = /^-webkit-/.test(dashed) ? 1 : 0;
  for (; i < dashed.length; i++) {
    if (dashed[i] !== "-") {
      camel += nextCap ? dashed[i].toUpperCase() : dashed[i];
      nextCap = false;
    } else {
      nextCap = true;
    }
  }
  return camel;
};

// Utility to translate from `borderWidth` to `border-width`.
exports.camelCaseToDashed = function (camelCase) {
  if (camelCase.startsWith("--")) {
    return camelCase;
  }
  const dashed = asciiLowercase(camelCase.replace(/(?<=[a-z])[A-Z]/g, "-$&"));
  if (/^webkit-/.test(dashed)) {
    return `-${dashed}`;
  }
  return dashed;
};
