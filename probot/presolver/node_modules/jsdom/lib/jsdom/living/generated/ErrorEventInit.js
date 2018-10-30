"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const EventInit = require("./EventInit.js");

module.exports = {
  convertInherit(obj, ret, { context = "The provided value" } = {}) {
    EventInit.convertInherit(obj, ret, { context });

    {
      const key = "colno";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        value = conversions["unsigned long"](value, { context: context + " has member colno that" });

        ret[key] = value;
      } else {
        ret[key] = 0;
      }
    }

    {
      const key = "error";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        value = conversions["any"](value, { context: context + " has member error that" });

        ret[key] = value;
      } else {
        ret[key] = null;
      }
    }

    {
      const key = "filename";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        value = conversions["USVString"](value, { context: context + " has member filename that" });

        ret[key] = value;
      } else {
        ret[key] = "";
      }
    }

    {
      const key = "lineno";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        value = conversions["unsigned long"](value, { context: context + " has member lineno that" });

        ret[key] = value;
      } else {
        ret[key] = 0;
      }
    }

    {
      const key = "message";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        value = conversions["DOMString"](value, { context: context + " has member message that" });

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
