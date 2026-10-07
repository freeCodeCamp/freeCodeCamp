"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const ScrollLogicalPosition = require("./ScrollLogicalPosition.js");
const ScrollOptions = require("./ScrollOptions.js");

exports._convertInherit = (globalObject, obj, ret, { context = "The provided value" } = {}) => {
  ScrollOptions._convertInherit(globalObject, obj, ret, { context });

  {
    const key = "block";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = ScrollLogicalPosition.convert(globalObject, value, { context: context + " has member 'block' that" });

      ret[key] = value;
    } else {
      ret[key] = "start";
    }
  }

  {
    const key = "inline";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = ScrollLogicalPosition.convert(globalObject, value, { context: context + " has member 'inline' that" });

      ret[key] = value;
    } else {
      ret[key] = "nearest";
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
