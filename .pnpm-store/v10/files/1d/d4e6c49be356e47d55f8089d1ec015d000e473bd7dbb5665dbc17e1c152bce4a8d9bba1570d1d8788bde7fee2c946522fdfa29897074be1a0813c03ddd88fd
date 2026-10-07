"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const MouseEventInit = require("./MouseEventInit.js");

exports._convertInherit = (globalObject, obj, ret, { context = "The provided value" } = {}) => {
  MouseEventInit._convertInherit(globalObject, obj, ret, { context });

  {
    const key = "deltaMode";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["unsigned long"](value, {
        context: context + " has member 'deltaMode' that",
        globals: globalObject
      });

      ret[key] = value;
    } else {
      ret[key] = 0;
    }
  }

  {
    const key = "deltaX";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["double"](value, { context: context + " has member 'deltaX' that", globals: globalObject });

      ret[key] = value;
    } else {
      ret[key] = 0.0;
    }
  }

  {
    const key = "deltaY";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["double"](value, { context: context + " has member 'deltaY' that", globals: globalObject });

      ret[key] = value;
    } else {
      ret[key] = 0.0;
    }
  }

  {
    const key = "deltaZ";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["double"](value, { context: context + " has member 'deltaZ' that", globals: globalObject });

      ret[key] = value;
    } else {
      ret[key] = 0.0;
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
