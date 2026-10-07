"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const EndingType = require("./EndingType.js");

exports._convertInherit = (globalObject, obj, ret, { context = "The provided value" } = {}) => {
  {
    const key = "endings";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = EndingType.convert(globalObject, value, { context: context + " has member 'endings' that" });

      ret[key] = value;
    } else {
      ret[key] = "transparent";
    }
  }

  {
    const key = "type";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["DOMString"](value, { context: context + " has member 'type' that", globals: globalObject });

      ret[key] = value;
    } else {
      ret[key] = "";
    }
  }
};

exports.convert = (globalObject, obj, { context = "The provided value" } = {}) => {
  if (obj !== undefined && typeof obj !== "object" && typeof obj !== "function") {
    throw new globalObject.TypeError(`${context} is not an object.`);
  }

  const ret = Object.create(null);
  exports._convertInherit(globalObject, obj, ret, { context });
  return ret;
};
