"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const EventListenerOptions = require("./EventListenerOptions.js");

exports._convertInherit = (obj, ret, { context = "The provided value" } = {}) => {
  EventListenerOptions._convertInherit(obj, ret, { context });

  {
    const key = "once";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'once' that" });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "passive";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'passive' that" });

      ret[key] = value;
    } else {
      ret[key] = false;
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
