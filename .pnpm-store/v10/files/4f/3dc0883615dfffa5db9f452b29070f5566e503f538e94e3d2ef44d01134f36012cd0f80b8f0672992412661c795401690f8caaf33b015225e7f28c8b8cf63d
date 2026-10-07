"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const AbortSignal = require("./AbortSignal.js");
const EventListenerOptions = require("./EventListenerOptions.js");

exports._convertInherit = (globalObject, obj, ret, { context = "The provided value" } = {}) => {
  EventListenerOptions._convertInherit(globalObject, obj, ret, { context });

  {
    const key = "once";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'once' that", globals: globalObject });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "passive";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'passive' that", globals: globalObject });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "signal";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = AbortSignal.convert(globalObject, value, { context: context + " has member 'signal' that" });

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
