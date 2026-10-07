"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const ShadowRootMode = require("./ShadowRootMode.js");

exports._convertInherit = (globalObject, obj, ret, { context = "The provided value" } = {}) => {
  {
    const key = "mode";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = ShadowRootMode.convert(globalObject, value, { context: context + " has member 'mode' that" });

      ret[key] = value;
    } else {
      throw new globalObject.TypeError("mode is required in 'ShadowRootInit'");
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
