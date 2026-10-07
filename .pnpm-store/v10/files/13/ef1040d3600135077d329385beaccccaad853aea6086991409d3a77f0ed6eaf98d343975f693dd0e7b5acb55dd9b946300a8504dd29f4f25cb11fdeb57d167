"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const BlobPropertyBag = require("./BlobPropertyBag.js");

exports._convertInherit = (globalObject, obj, ret, { context = "The provided value" } = {}) => {
  BlobPropertyBag._convertInherit(globalObject, obj, ret, { context });

  {
    const key = "lastModified";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["long long"](value, {
        context: context + " has member 'lastModified' that",
        globals: globalObject
      });

      ret[key] = value;
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
