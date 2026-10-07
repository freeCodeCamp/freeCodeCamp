"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const Storage = require("./Storage.js");
const EventInit = require("./EventInit.js");

exports._convertInherit = (globalObject, obj, ret, { context = "The provided value" } = {}) => {
  EventInit._convertInherit(globalObject, obj, ret, { context });

  {
    const key = "key";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      if (value === null || value === undefined) {
        value = null;
      } else {
        value = conversions["DOMString"](value, { context: context + " has member 'key' that", globals: globalObject });
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
        value = conversions["DOMString"](value, {
          context: context + " has member 'newValue' that",
          globals: globalObject
        });
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
        value = conversions["DOMString"](value, {
          context: context + " has member 'oldValue' that",
          globals: globalObject
        });
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
        value = Storage.convert(globalObject, value, { context: context + " has member 'storageArea' that" });
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
      value = conversions["USVString"](value, { context: context + " has member 'url' that", globals: globalObject });

      ret[key] = value;
    } else {
      ret[key] = "";
    }
  }
};

exports.convert = (globalObject, obj, { context = "The provided value" } = {}) => {
  if (obj !== undefined && typeof obj !== "object" && typeof obj !== "function") {
    throw new globalObject.TypeError(`${context} is not an object.`);
  }

  const ret = Object.create(null);
  exports._convertInherit(globalObject, obj, ret, { context });
  return ret;
};
