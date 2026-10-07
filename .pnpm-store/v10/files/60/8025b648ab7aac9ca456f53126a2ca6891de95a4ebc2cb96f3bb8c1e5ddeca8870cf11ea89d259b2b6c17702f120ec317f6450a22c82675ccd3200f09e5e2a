"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

exports._convertInherit = (globalObject, obj, ret, { context = "The provided value" } = {}) => {
  {
    const key = "attributeFilter";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      if (!utils.isObject(value)) {
        throw new globalObject.TypeError(
          context + " has member 'attributeFilter' that" + " is not an iterable object."
        );
      } else {
        const V = [];
        const tmp = value;
        for (let nextItem of tmp) {
          nextItem = conversions["DOMString"](nextItem, {
            context: context + " has member 'attributeFilter' that" + "'s element",
            globals: globalObject
          });

          V.push(nextItem);
        }
        value = V;
      }

      ret[key] = value;
    }
  }

  {
    const key = "attributeOldValue";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, {
        context: context + " has member 'attributeOldValue' that",
        globals: globalObject
      });

      ret[key] = value;
    }
  }

  {
    const key = "attributes";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, {
        context: context + " has member 'attributes' that",
        globals: globalObject
      });

      ret[key] = value;
    }
  }

  {
    const key = "characterData";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, {
        context: context + " has member 'characterData' that",
        globals: globalObject
      });

      ret[key] = value;
    }
  }

  {
    const key = "characterDataOldValue";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, {
        context: context + " has member 'characterDataOldValue' that",
        globals: globalObject
      });

      ret[key] = value;
    }
  }

  {
    const key = "childList";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, {
        context: context + " has member 'childList' that",
        globals: globalObject
      });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "subtree";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'subtree' that", globals: globalObject });

      ret[key] = value;
    } else {
      ret[key] = false;
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
