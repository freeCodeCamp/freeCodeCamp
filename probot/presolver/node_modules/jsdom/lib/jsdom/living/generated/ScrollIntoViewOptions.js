"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertScrollLogicalPosition = require("./ScrollLogicalPosition.js").convert;
const ScrollOptions = require("./ScrollOptions.js");

module.exports = {
  convertInherit(obj, ret, { context = "The provided value" } = {}) {
    ScrollOptions.convertInherit(obj, ret, { context });

    {
      const key = "block";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        value = convertScrollLogicalPosition(value, { context: context + " has member block that" });

        ret[key] = value;
      } else {
        ret[key] = "start";
      }
    }

    {
      const key = "inline";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        value = convertScrollLogicalPosition(value, { context: context + " has member inline that" });

        ret[key] = value;
      } else {
        ret[key] = "nearest";
      }
    }
  },

  convert(obj, { context = "The provided value" } = {}) {
    if (obj !== undefined && typeof obj !== "object" && typeof obj !== "function") {
      throw new TypeError(`${context} is not an object.`);
    }

    const ret = Object.create(null);
    module.exports.convertInherit(obj, ret, { context });
    return ret;
  }
};
