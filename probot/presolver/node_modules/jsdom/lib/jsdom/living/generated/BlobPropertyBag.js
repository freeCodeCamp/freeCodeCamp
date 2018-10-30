"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertEndingType = require("./EndingType.js").convert;

module.exports = {
  convertInherit(obj, ret, { context = "The provided value" } = {}) {
    {
      const key = "endings";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        value = convertEndingType(value, { context: context + " has member endings that" });

        ret[key] = value;
      } else {
        ret[key] = "transparent";
      }
    }

    {
      const key = "type";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        value = conversions["DOMString"](value, { context: context + " has member type that" });

        ret[key] = value;
      } else {
        ret[key] = "";
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
