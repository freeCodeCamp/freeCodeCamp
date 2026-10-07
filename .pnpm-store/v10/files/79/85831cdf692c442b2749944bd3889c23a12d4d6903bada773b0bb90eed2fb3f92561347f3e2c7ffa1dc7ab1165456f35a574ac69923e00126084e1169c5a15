"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const ScrollBehavior = require("./ScrollBehavior.js");

exports._convertInherit = (globalObject, obj, ret, { context = "The provided value" } = {}) => {
  {
    const key = "behavior";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = ScrollBehavior.convert(globalObject, value, { context: context + " has member 'behavior' that" });

      ret[key] = value;
    } else {
      ret[key] = "auto";
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
