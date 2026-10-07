"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const Node = require("./Node.js");

exports._convertInherit = (obj, ret, { context = "The provided value" } = {}) => {
  {
    const key = "endContainer";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = Node.convert(value, { context: context + " has member 'endContainer' that" });

      ret[key] = value;
    } else {
      throw new TypeError("endContainer is required in 'StaticRangeInit'");
    }
  }

  {
    const key = "endOffset";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["unsigned long"](value, { context: context + " has member 'endOffset' that" });

      ret[key] = value;
    } else {
      throw new TypeError("endOffset is required in 'StaticRangeInit'");
    }
  }

  {
    const key = "startContainer";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = Node.convert(value, { context: context + " has member 'startContainer' that" });

      ret[key] = value;
    } else {
      throw new TypeError("startContainer is required in 'StaticRangeInit'");
    }
  }

  {
    const key = "startOffset";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["unsigned long"](value, { context: context + " has member 'startOffset' that" });

      ret[key] = value;
    } else {
      throw new TypeError("startOffset is required in 'StaticRangeInit'");
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
