"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const EventInit = require("./EventInit.js");

exports._convertInherit = (obj, ret, { context = "The provided value" } = {}) => {
  EventInit._convertInherit(obj, ret, { context });

  {
    const key = "colno";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["unsigned long"](value, { context: context + " has member 'colno' that" });

      ret[key] = value;
    } else {
      ret[key] = 0;
    }
  }

  {
    const key = "error";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["any"](value, { context: context + " has member 'error' that" });

      ret[key] = value;
    } else {
      ret[key] = null;
    }
  }

  {
    const key = "filename";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["USVString"](value, { context: context + " has member 'filename' that" });

      ret[key] = value;
    } else {
      ret[key] = "";
    }
  }

  {
    const key = "lineno";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["unsigned long"](value, { context: context + " has member 'lineno' that" });

      ret[key] = value;
    } else {
      ret[key] = 0;
    }
  }

  {
    const key = "message";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["DOMString"](value, { context: context + " has member 'message' that" });

      ret[key] = value;
    } else {
      ret[key] = "";
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
