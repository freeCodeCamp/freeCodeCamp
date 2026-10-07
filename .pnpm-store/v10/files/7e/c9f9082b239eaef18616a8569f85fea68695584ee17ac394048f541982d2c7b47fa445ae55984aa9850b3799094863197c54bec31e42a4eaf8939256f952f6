/**
 * These are commonly used parsers for CSS Values they take a string to parse
 * and return a string after it's been converted, if needed
 */
"use strict";

const { resolve: resolveColor, utils } = require("@asamuzakjp/css-color");
const { asciiLowercase } = require("./utils/strings");

const { cssCalc, isColor, isGradient, splitValue } = utils;

// CSS global values
// @see https://drafts.csswg.org/css-cascade-5/#defaulting-keywords
const GLOBAL_VALUE = Object.freeze(["initial", "inherit", "unset", "revert", "revert-layer"]);

// Numeric data types
const NUM_TYPE = Object.freeze({
  UNDEFINED: 0,
  VAR: 1,
  NUMBER: 2,
  PERCENT: 4,
  LENGTH: 8,
  ANGLE: 0x10,
  CALC: 0x20
});

// System colors
// @see https://drafts.csswg.org/css-color/#css-system-colors
// @see https://drafts.csswg.org/css-color/#deprecated-system-colors
const SYS_COLOR = Object.freeze([
  "accentcolor",
  "accentcolortext",
  "activeborder",
  "activecaption",
  "activetext",
  "appworkspace",
  "background",
  "buttonborder",
  "buttonface",
  "buttonhighlight",
  "buttonshadow",
  "buttontext",
  "canvas",
  "canvastext",
  "captiontext",
  "field",
  "fieldtext",
  "graytext",
  "highlight",
  "highlighttext",
  "inactiveborder",
  "inactivecaption",
  "inactivecaptiontext",
  "infobackground",
  "infotext",
  "linktext",
  "mark",
  "marktext",
  "menu",
  "menutext",
  "scrollbar",
  "selecteditem",
  "selecteditemtext",
  "threeddarkshadow",
  "threedface",
  "threedhighlight",
  "threedlightshadow",
  "threedshadow",
  "visitedtext",
  "window",
  "windowframe",
  "windowtext"
]);

// Regular expressions
const DIGIT = "(?:0|[1-9]\\d*)";
const NUMBER = `[+-]?(?:${DIGIT}(?:\\.\\d*)?|\\.\\d+)(?:e-?${DIGIT})?`;
const unitRegEx = new RegExp(`^(${NUMBER})([a-z]+|%)?$`, "i");
const urlRegEx = /^url\(\s*((?:[^)]|\\\))*)\s*\)$/;
const keywordRegEx = /^[a-z]+(?:-[a-z]+)*$/i;
const stringRegEx = /^("[^"]*"|'[^']*')$/;
const varRegEx = /^var\(/;
const varContainedRegEx = /(?<=[*/\s(])var\(/;
const calcRegEx =
  /^(?:a?(?:cos|sin|tan)|abs|atan2|calc|clamp|exp|hypot|log|max|min|mod|pow|rem|round|sign|sqrt)\(/;
const functionRegEx = /^([a-z][a-z\d]*(?:-[a-z\d]+)*)\(/i;

const getNumericType = function getNumericType(val) {
  if (varRegEx.test(val)) {
    return NUM_TYPE.VAR;
  }
  if (calcRegEx.test(val)) {
    return NUM_TYPE.CALC;
  }
  if (unitRegEx.test(val)) {
    const [, , unit] = unitRegEx.exec(val);
    if (!unit) {
      return NUM_TYPE.NUMBER;
    }
    if (unit === "%") {
      return NUM_TYPE.PERCENT;
    }
    if (/^(?:[cm]m|[dls]?v(?:[bhiw]|max|min)|in|p[ctx]|q|r?(?:[cl]h|cap|e[mx]|ic))$/i.test(unit)) {
      return NUM_TYPE.LENGTH;
    }
    if (/^(?:deg|g?rad|turn)$/i.test(unit)) {
      return NUM_TYPE.ANGLE;
    }
  }
  return NUM_TYPE.UNDEFINED;
};

// Prepare stringified value.
exports.prepareValue = function prepareValue(value, globalObject = globalThis) {
  // `null` is converted to an empty string.
  // @see https://webidl.spec.whatwg.org/#LegacyNullToEmptyString
  if (value === null) {
    return "";
  }
  const type = typeof value;
  switch (type) {
    case "string":
      return value.trim();
    case "number":
      return value.toString();
    case "undefined":
      return "undefined";
    case "symbol":
      throw new globalObject.TypeError("Can not convert symbol to string.");
    default: {
      const str = value.toString();
      if (typeof str === "string") {
        return str;
      }
      throw new globalObject.TypeError(`Can not convert ${type} to string.`);
    }
  }
};

exports.hasVarFunc = function hasVarFunc(val) {
  return varRegEx.test(val) || varContainedRegEx.test(val);
};

exports.parseNumber = function parseNumber(val, restrictToPositive = false) {
  if (val === "") {
    return "";
  }
  const type = getNumericType(val);
  switch (type) {
    case NUM_TYPE.VAR:
      return val;
    case NUM_TYPE.CALC:
      return cssCalc(val, {
        format: "specifiedValue"
      });
    case NUM_TYPE.NUMBER: {
      const num = parseFloat(val);
      if (restrictToPositive && num < 0) {
        return;
      }
      return `${num}`;
    }
    default:
      if (varContainedRegEx.test(val)) {
        return val;
      }
  }
};

exports.parseLength = function parseLength(val, restrictToPositive = false) {
  if (val === "") {
    return "";
  }
  const type = getNumericType(val);
  switch (type) {
    case NUM_TYPE.VAR:
      return val;
    case NUM_TYPE.CALC:
      return cssCalc(val, {
        format: "specifiedValue"
      });
    case NUM_TYPE.NUMBER:
      if (parseFloat(val) === 0) {
        return "0px";
      }
      return;
    case NUM_TYPE.LENGTH: {
      const [, numVal, unit] = unitRegEx.exec(val);
      const num = parseFloat(numVal);
      if (restrictToPositive && num < 0) {
        return;
      }
      return `${num}${asciiLowercase(unit)}`;
    }
    default:
      if (varContainedRegEx.test(val)) {
        return val;
      }
  }
};

exports.parsePercent = function parsePercent(val, restrictToPositive = false) {
  if (val === "") {
    return "";
  }
  const type = getNumericType(val);
  switch (type) {
    case NUM_TYPE.VAR:
      return val;
    case NUM_TYPE.CALC:
      return cssCalc(val, {
        format: "specifiedValue"
      });
    case NUM_TYPE.NUMBER:
      if (parseFloat(val) === 0) {
        return "0%";
      }
      return;
    case NUM_TYPE.PERCENT: {
      const [, numVal, unit] = unitRegEx.exec(val);
      const num = parseFloat(numVal);
      if (restrictToPositive && num < 0) {
        return;
      }
      return `${num}${asciiLowercase(unit)}`;
    }
    default:
      if (varContainedRegEx.test(val)) {
        return val;
      }
  }
};

// Either a length or a percent.
exports.parseMeasurement = function parseMeasurement(val, restrictToPositive = false) {
  if (val === "") {
    return "";
  }
  const type = getNumericType(val);
  switch (type) {
    case NUM_TYPE.VAR:
      return val;
    case NUM_TYPE.CALC:
      return cssCalc(val, {
        format: "specifiedValue"
      });
    case NUM_TYPE.NUMBER:
      if (parseFloat(val) === 0) {
        return "0px";
      }
      return;
    case NUM_TYPE.LENGTH:
    case NUM_TYPE.PERCENT: {
      const [, numVal, unit] = unitRegEx.exec(val);
      const num = parseFloat(numVal);
      if (restrictToPositive && num < 0) {
        return;
      }
      return `${num}${asciiLowercase(unit)}`;
    }
    default:
      if (varContainedRegEx.test(val)) {
        return val;
      }
  }
};

exports.parseAngle = function parseAngle(val, normalizeDeg = false) {
  if (val === "") {
    return "";
  }
  const type = getNumericType(val);
  switch (type) {
    case NUM_TYPE.VAR:
      return val;
    case NUM_TYPE.CALC:
      return cssCalc(val, {
        format: "specifiedValue"
      });
    case NUM_TYPE.NUMBER:
      if (parseFloat(val) === 0) {
        return "0deg";
      }
      return;
    case NUM_TYPE.ANGLE: {
      let [, numVal, unit] = unitRegEx.exec(val);
      numVal = parseFloat(numVal);
      unit = asciiLowercase(unit);
      if (unit === "deg") {
        if (normalizeDeg && numVal < 0) {
          while (numVal < 0) {
            numVal += 360;
          }
        }
        numVal %= 360;
      }
      return `${numVal}${unit}`;
    }
    default:
      if (varContainedRegEx.test(val)) {
        return val;
      }
  }
};

exports.parseUrl = function parseUrl(val) {
  if (val === "") {
    return val;
  }
  const res = urlRegEx.exec(val);
  if (!res) {
    return;
  }
  let str = res[1];
  // If it starts with single or double quotes, does it end with the same?
  if ((str[0] === '"' || str[0] === "'") && str[0] !== str[str.length - 1]) {
    return;
  }
  if (str[0] === '"' || str[0] === "'") {
    str = str.substr(1, str.length - 2);
  }
  let urlstr = "";
  let escaped = false;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "\\":
        if (escaped) {
          urlstr += "\\\\";
          escaped = false;
        } else {
          escaped = true;
        }
        break;
      case "(":
      case ")":
      case " ":
      case "\t":
      case "\n":
      case "'":
        if (!escaped) {
          return;
        }
        urlstr += str[i];
        escaped = false;
        break;
      case '"':
        if (!escaped) {
          return;
        }
        urlstr += '\\"';
        escaped = false;
        break;
      default:
        urlstr += str[i];
        escaped = false;
    }
  }
  return `url("${urlstr}")`;
};

exports.parseString = function parseString(val) {
  if (val === "") {
    return "";
  }
  if (!stringRegEx.test(val)) {
    return;
  }
  val = val.substr(1, val.length - 2);
  let str = "";
  let escaped = false;
  for (let i = 0; i < val.length; i++) {
    switch (val[i]) {
      case "\\":
        if (escaped) {
          str += "\\\\";
          escaped = false;
        } else {
          escaped = true;
        }
        break;
      case '"':
        str += '\\"';
        escaped = false;
        break;
      default:
        str += val[i];
        escaped = false;
    }
  }
  return `"${str}"`;
};

exports.parseKeyword = function parseKeyword(val, validKeywords = []) {
  if (val === "") {
    return "";
  }
  if (varRegEx.test(val)) {
    return val;
  }
  val = asciiLowercase(val.toString());
  if (validKeywords.includes(val) || GLOBAL_VALUE.includes(val)) {
    return val;
  }
};

exports.parseColor = function parseColor(val) {
  if (val === "") {
    return "";
  }
  if (varRegEx.test(val)) {
    return val;
  }
  if (/^[a-z]+$/i.test(val)) {
    const v = asciiLowercase(val);
    if (SYS_COLOR.includes(v)) {
      return v;
    }
  }
  const res = resolveColor(val, {
    format: "specifiedValue"
  });
  if (res) {
    return res;
  }
  return exports.parseKeyword(val);
};

exports.parseImage = function parseImage(val) {
  if (val === "") {
    return "";
  }
  if (varRegEx.test(val)) {
    return val;
  }
  if (keywordRegEx.test(val)) {
    return exports.parseKeyword(val, ["none"]);
  }
  const values = splitValue(val, {
    delimiter: ",",
    preserveComment: varContainedRegEx.test(val)
  });
  let isImage = Boolean(values.length);
  for (let i = 0; i < values.length; i++) {
    const image = values[i];
    if (image === "") {
      return "";
    }
    if (isGradient(image) || /^(?:none|inherit)$/i.test(image)) {
      continue;
    }
    const imageUrl = exports.parseUrl(image);
    if (imageUrl) {
      values[i] = imageUrl;
    } else {
      isImage = false;
      break;
    }
  }
  if (isImage) {
    return values.join(", ");
  }
};

exports.parseFunction = function parseFunction(val) {
  if (val === "") {
    return {
      name: null,
      value: ""
    };
  }
  if (functionRegEx.test(val) && val.endsWith(")")) {
    if (varRegEx.test(val) || varContainedRegEx.test(val)) {
      return {
        name: "var",
        value: val
      };
    }
    const [, name] = functionRegEx.exec(val);
    const value = val
      .replace(new RegExp(`^${name}\\(`), "")
      .replace(/\)$/, "")
      .trim();
    return {
      name,
      value
    };
  }
};

exports.parseShorthand = function parseShorthand(val, shorthandFor, preserve = false) {
  const obj = {};
  if (val === "" || exports.hasVarFunc(val)) {
    for (const [property] of shorthandFor) {
      obj[property] = "";
    }
    return obj;
  }
  const key = exports.parseKeyword(val);
  if (key) {
    if (key === "inherit") {
      return obj;
    }
    return;
  }
  const parts = splitValue(val);
  const shorthandArr = [...shorthandFor];
  for (const part of parts) {
    let partValid = false;
    for (let i = 0; i < shorthandArr.length; i++) {
      const [property, value] = shorthandArr[i];
      if (value.isValid(part)) {
        partValid = true;
        obj[property] = value.parse(part);
        if (!preserve) {
          shorthandArr.splice(i, 1);
          break;
        }
      }
    }
    if (!partValid) {
      return;
    }
  }
  return obj;
};

// Returns `false` for global values, e.g. "inherit".
exports.isValidColor = function isValidColor(val) {
  if (SYS_COLOR.includes(asciiLowercase(val))) {
    return true;
  }
  return isColor(val);
};

// Splits value into an array.
// @see https://github.com/asamuzaK/cssColor/blob/main/src/js/util.ts
exports.splitValue = splitValue;
