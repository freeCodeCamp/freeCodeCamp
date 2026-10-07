"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const EventInit = require("./EventInit.js");

exports._convertInherit = (globalObject, obj, ret, { context = "The provided value" } = {}) => {
  EventInit._convertInherit(globalObject, obj, ret, { context });

  {
    const key = "code";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["unsigned short"](value, {
        context: context + " has member 'code' that",
        globals: globalObject
      });

      ret[key] = value;
    } else {
      ret[key] = 0;
    }
  }

  {
    const key = "reason";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["USVString"](value, {
        context: context + " has member 'reason' that",
        globals: globalObject
      });

      ret[key] = value;
    } else {
      ret[key] = "";
    }
  }

  {
    const key = "wasClean";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, {
        context: context + " has member 'wasClean' that",
        globals: globalObject
      });

      ret[key] = value;
    } else {
      ret[key] = false;
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
