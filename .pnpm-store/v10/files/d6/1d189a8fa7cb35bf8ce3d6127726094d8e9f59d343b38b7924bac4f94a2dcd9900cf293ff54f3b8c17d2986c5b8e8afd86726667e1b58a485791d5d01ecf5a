"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const BlobPropertyBag = require("./BlobPropertyBag.js");

exports._convertInherit = (obj, ret, { context = "The provided value" } = {}) => {
  BlobPropertyBag._convertInherit(obj, ret, { context });

  {
    const key = "lastModified";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["long long"](value, { context: context + " has member 'lastModified' that" });

      ret[key] = value;
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
