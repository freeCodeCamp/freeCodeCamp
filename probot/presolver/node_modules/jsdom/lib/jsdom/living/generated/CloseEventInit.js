"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const EventInit = require("./EventInit.js");

module.exports = {
  convertInherit(obj, ret, { context = "The provided value" } = {}) {
    EventInit.convertInherit(obj, ret, { context });

    {
      const key = "code";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        value = conversions["unsigned short"](value, { context: context + " has member code that" });

        ret[key] = value;
      } else {
        ret[key] = 0;
      }
    }

    {
      const key = "reason";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        value = conversions["USVString"](value, { context: context + " has member reason that" });

        ret[key] = value;
      } else {
        ret[key] = "";
      }
    }

    {
      const key = "wasClean";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        value = conversions["boolean"](value, { context: context + " has member wasClean that" });

        ret[key] = value;
      } else {
        ret[key] = false;
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
