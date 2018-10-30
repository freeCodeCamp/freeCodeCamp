"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const EventInit = require("./EventInit.js");

module.exports = {
  convertInherit(obj, ret, { context = "The provided value" } = {}) {
    EventInit.convertInherit(obj, ret, { context });

    {
      const key = "detail";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        value = conversions["long"](value, { context: context + " has member detail that" });

        ret[key] = value;
      } else {
        ret[key] = 0;
      }
    }

    {
      const key = "view";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        if (value === null || value === undefined) {
          value = null;
        } else {
          value = utils.tryImplForWrapper(value);
        }
        ret[key] = value;
      } else {
        ret[key] = null;
      }
    }

    {
      const key = "which";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        value = conversions["unsigned long"](value, { context: context + " has member which that" });

        ret[key] = value;
      } else {
        ret[key] = 0;
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
