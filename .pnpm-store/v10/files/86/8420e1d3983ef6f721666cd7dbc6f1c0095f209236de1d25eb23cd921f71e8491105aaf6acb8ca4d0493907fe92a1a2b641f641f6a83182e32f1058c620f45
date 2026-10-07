"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const EventTarget = require("./EventTarget.js");
const EventModifierInit = require("./EventModifierInit.js");

exports._convertInherit = (obj, ret, { context = "The provided value" } = {}) => {
  EventModifierInit._convertInherit(obj, ret, { context });

  {
    const key = "button";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["short"](value, { context: context + " has member 'button' that" });

      ret[key] = value;
    } else {
      ret[key] = 0;
    }
  }

  {
    const key = "buttons";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["unsigned short"](value, { context: context + " has member 'buttons' that" });

      ret[key] = value;
    } else {
      ret[key] = 0;
    }
  }

  {
    const key = "clientX";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["long"](value, { context: context + " has member 'clientX' that" });

      ret[key] = value;
    } else {
      ret[key] = 0;
    }
  }

  {
    const key = "clientY";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["long"](value, { context: context + " has member 'clientY' that" });

      ret[key] = value;
    } else {
      ret[key] = 0;
    }
  }

  {
    const key = "relatedTarget";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      if (value === null || value === undefined) {
        value = null;
      } else {
        value = EventTarget.convert(value, { context: context + " has member 'relatedTarget' that" });
      }
      ret[key] = value;
    } else {
      ret[key] = null;
    }
  }

  {
    const key = "screenX";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["long"](value, { context: context + " has member 'screenX' that" });

      ret[key] = value;
    } else {
      ret[key] = 0;
    }
  }

  {
    const key = "screenY";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["long"](value, { context: context + " has member 'screenY' that" });

      ret[key] = value;
    } else {
      ret[key] = 0;
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
