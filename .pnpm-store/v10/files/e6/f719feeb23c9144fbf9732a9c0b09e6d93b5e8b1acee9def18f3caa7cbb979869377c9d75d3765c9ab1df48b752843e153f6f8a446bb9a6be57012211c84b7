"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const UIEventInit = require("./UIEventInit.js");

exports._convertInherit = (obj, ret, { context = "The provided value" } = {}) => {
  UIEventInit._convertInherit(obj, ret, { context });

  {
    const key = "data";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      if (value === null || value === undefined) {
        value = null;
      } else {
        value = conversions["DOMString"](value, { context: context + " has member 'data' that" });
      }
      ret[key] = value;
    } else {
      ret[key] = null;
    }
  }

  {
    const key = "inputType";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["DOMString"](value, { context: context + " has member 'inputType' that" });

      ret[key] = value;
    } else {
      ret[key] = "";
    }
  }

  {
    const key = "isComposing";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'isComposing' that" });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }
};

exports.convert = function convert(obj, { context = "The provided value" } = {}) {
  if (obj !== undefined && typeof obj !== "object" && typeof obj !== "function") {
    throw new TypeError(`${context} is not an object.`);
  }

  const ret = Object.create(null);
  exports._convertInherit(obj, ret, { context });
  return ret;
};
