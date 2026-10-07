"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const UIEventInit = require("./UIEventInit.js");

exports._convertInherit = (globalObject, obj, ret, { context = "The provided value" } = {}) => {
  UIEventInit._convertInherit(globalObject, obj, ret, { context });

  {
    const key = "altKey";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'altKey' that", globals: globalObject });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "ctrlKey";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'ctrlKey' that", globals: globalObject });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "metaKey";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'metaKey' that", globals: globalObject });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierAltGraph";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, {
        context: context + " has member 'modifierAltGraph' that",
        globals: globalObject
      });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierCapsLock";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, {
        context: context + " has member 'modifierCapsLock' that",
        globals: globalObject
      });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierFn";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, {
        context: context + " has member 'modifierFn' that",
        globals: globalObject
      });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierFnLock";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, {
        context: context + " has member 'modifierFnLock' that",
        globals: globalObject
      });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierHyper";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, {
        context: context + " has member 'modifierHyper' that",
        globals: globalObject
      });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierNumLock";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, {
        context: context + " has member 'modifierNumLock' that",
        globals: globalObject
      });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierScrollLock";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, {
        context: context + " has member 'modifierScrollLock' that",
        globals: globalObject
      });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierSuper";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, {
        context: context + " has member 'modifierSuper' that",
        globals: globalObject
      });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierSymbol";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, {
        context: context + " has member 'modifierSymbol' that",
        globals: globalObject
      });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierSymbolLock";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, {
        context: context + " has member 'modifierSymbolLock' that",
        globals: globalObject
      });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "shiftKey";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, {
        context: context + " has member 'shiftKey' that",
        globals: globalObject
      });

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
