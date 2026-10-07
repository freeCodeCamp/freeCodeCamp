"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const UIEventInit = require("./UIEventInit.js");

exports._convertInherit = (obj, ret, { context = "The provided value" } = {}) => {
  UIEventInit._convertInherit(obj, ret, { context });

  {
    const key = "altKey";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'altKey' that" });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "ctrlKey";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'ctrlKey' that" });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "metaKey";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'metaKey' that" });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierAltGraph";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'modifierAltGraph' that" });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierCapsLock";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'modifierCapsLock' that" });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierFn";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'modifierFn' that" });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierFnLock";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'modifierFnLock' that" });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierHyper";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'modifierHyper' that" });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierNumLock";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'modifierNumLock' that" });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierScrollLock";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'modifierScrollLock' that" });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierSuper";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'modifierSuper' that" });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierSymbol";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'modifierSymbol' that" });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "modifierSymbolLock";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'modifierSymbolLock' that" });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }

  {
    const key = "shiftKey";
    let value = obj === undefined || obj === null ? undefined : obj[key];
    if (value !== undefined) {
      value = conversions["boolean"](value, { context: context + " has member 'shiftKey' that" });

      ret[key] = value;
    } else {
      ret[key] = false;
    }
  }
};

exports.convert = function convert(obj, { context = "The provided value" } = {}) {
  if (obj !== undefined && typeof obj !== "object" && typeof obj !== "function") {
    throw new TypeError(`${context} is not an object.`);
  }

  const ret = Object.create(null);
  exports._convertInherit(obj, ret, { context });
  return ret;
};
