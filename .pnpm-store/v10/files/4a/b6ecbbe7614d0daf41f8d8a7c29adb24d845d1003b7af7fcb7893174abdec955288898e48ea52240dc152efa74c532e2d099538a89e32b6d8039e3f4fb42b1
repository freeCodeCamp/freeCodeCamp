"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const EventModifierInit = require("./EventModifierInit.js");

exports._convertInherit = (globalObject, obj, ret, { context = "The provided value" } = {}) => {
  EventModifierInit._convertInherit(globalObject, obj, ret, { context });

  {
    const key = "changedTouches";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      if (!utils.isObject(value)) {
        throw new globalObject.TypeError(context + " has member 'changedTouches' that" + " is not an iterable object.");
      } else {
        const V = [];
        const tmp = value;
        for (let nextItem of tmp) {
          nextItem = utils.tryImplForWrapper(nextItem);

          V.push(nextItem);
        }
        value = V;
      }

      ret[key] = value;
    } else {
      ret[key] = [];
    }
  }

  {
    const key = "targetTouches";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      if (!utils.isObject(value)) {
        throw new globalObject.TypeError(context + " has member 'targetTouches' that" + " is not an iterable object.");
      } else {
        const V = [];
        const tmp = value;
        for (let nextItem of tmp) {
          nextItem = utils.tryImplForWrapper(nextItem);

          V.push(nextItem);
        }
        value = V;
      }

      ret[key] = value;
    } else {
      ret[key] = [];
    }
  }

  {
    const key = "touches";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      if (!utils.isObject(value)) {
        throw new globalObject.TypeError(context + " has member 'touches' that" + " is not an iterable object.");
      } else {
        const V = [];
        const tmp = value;
        for (let nextItem of tmp) {
          nextItem = utils.tryImplForWrapper(nextItem);

          V.push(nextItem);
        }
        value = V;
      }

      ret[key] = value;
    } else {
      ret[key] = [];
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
