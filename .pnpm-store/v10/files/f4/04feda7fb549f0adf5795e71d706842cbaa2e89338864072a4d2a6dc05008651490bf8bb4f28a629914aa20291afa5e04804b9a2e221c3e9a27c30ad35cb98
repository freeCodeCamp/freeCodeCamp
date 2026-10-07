"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const EventModifierInit = require("./EventModifierInit.js");

exports._convertInherit = (obj, ret, { context = "The provided value" } = {}) => {
  EventModifierInit._convertInherit(obj, ret, { context });

  {
    const key = "charCode";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["unsigned long"](value, { context: context + " has member 'charCode' that" });

      ret[key] = value;
    } else {
      ret[key] = 0;
    }
  }

  {
    const key = "code";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["DOMString"](value, { context: context + " has member 'code' that" });

      ret[key] = value;
    } else {
      ret[key] = "";
    }
  }

  {
    const key = "isComposing";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'isComposing' that" });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "key";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["DOMString"](value, { context: context + " has member 'key' that" });

      ret[key] = value;
    } else {
      ret[key] = "";
    }
  }

  {
    const key = "keyCode";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["unsigned long"](value, { context: context + " has member 'keyCode' that" });

      ret[key] = value;
    } else {
      ret[key] = 0;
    }
  }

  {
    const key = "location";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["unsigned long"](value, { context: context + " has member 'location' that" });

      ret[key] = value;
    } else {
      ret[key] = 0;
    }
  }

  {
    const key = "repeat";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'repeat' that" });

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
