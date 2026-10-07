"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

exports._convertInherit = (globalObject, obj, ret, { context = "The provided value" } = {}) => {
  {
    const key = "height";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["unrestricted double"](value, {
        context: context + " has member 'height' that",
        globals: globalObject
      });

      ret[key] = value;
    } else {
      ret[key] = 0;
    }
  }

  {
    const key = "width";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["unrestricted double"](value, {
        context: context + " has member 'width' that",
        globals: globalObject
      });

      ret[key] = value;
    } else {
      ret[key] = 0;
    }
  }

  {
    const key = "x";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["unrestricted double"](value, {
        context: context + " has member 'x' that",
        globals: globalObject
      });

      ret[key] = value;
    } else {
      ret[key] = 0;
    }
  }

  {
    const key = "y";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["unrestricted double"](value, {
        context: context + " has member 'y' that",
        globals: globalObject
      });

      ret[key] = value;
    } else {
      ret[key] = 0;
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
