"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const EventTarget = require("./EventTarget.js");
const UIEventInit = require("./UIEventInit.js");

exports._convertInherit = (globalObject, obj, ret, { context = "The provided value" } = {}) => {
  UIEventInit._convertInherit(globalObject, obj, ret, { context });

  {
    const key = "relatedTarget";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      if (value === null || value === undefined) {
        value = null;
      } else {
        value = EventTarget.convert(globalObject, value, { context: context + " has member 'relatedTarget' that" });
      }
      ret[key] = value;
    } else {
      ret[key] = null;
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
