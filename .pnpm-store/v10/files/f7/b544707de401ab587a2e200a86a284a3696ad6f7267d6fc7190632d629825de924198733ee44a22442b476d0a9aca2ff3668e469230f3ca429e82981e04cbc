"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const EventInit = require("./EventInit.js");

exports._convertInherit = (obj, ret, { context = "The provided value" } = {}) => {
  EventInit._convertInherit(obj, ret, { context });

  {
    const key = "lengthComputable";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'lengthComputable' that" });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "loaded";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["unsigned long long"](value, { context: context + " has member 'loaded' that" });

      ret[key] = value;
    } else {
      ret[key] = 0;
    }
  }

  {
    const key = "total";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["unsigned long long"](value, { context: context + " has member 'total' that" });

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
