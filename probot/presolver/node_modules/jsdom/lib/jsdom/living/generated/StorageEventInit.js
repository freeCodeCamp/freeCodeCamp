"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertStorage = require("./Storage.js").convert;
const EventInit = require("./EventInit.js");

module.exports = {
  convertInherit(obj, ret, { context = "The provided value" } = {}) {
    EventInit.convertInherit(obj, ret, { context });

    {
      const key = "key";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        if (value === null || value === undefined) {
          value = null;
        } else {
          value = conversions["DOMString"](value, { context: context + " has member key that" });
        }
        ret[key] = value;
      } else {
        ret[key] = null;
      }
    }

    {
      const key = "newValue";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        if (value === null || value === undefined) {
          value = null;
        } else {
          value = conversions["DOMString"](value, { context: context + " has member newValue that" });
        }
        ret[key] = value;
      } else {
        ret[key] = null;
      }
    }

    {
      const key = "oldValue";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        if (value === null || value === undefined) {
          value = null;
        } else {
          value = conversions["DOMString"](value, { context: context + " has member oldValue that" });
        }
        ret[key] = value;
      } else {
        ret[key] = null;
      }
    }

    {
      const key = "storageArea";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        if (value === null || value === undefined) {
          value = null;
        } else {
          value = convertStorage(value, { context: context + " has member storageArea that" });
        }
        ret[key] = value;
      } else {
        ret[key] = null;
      }
    }

    {
      const key = "url";
      let value = obj === undefined || obj === null ? undefined : obj[key];
      if (value !== undefined) {
        value = conversions["USVString"](value, { context: context + " has member url that" });

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
