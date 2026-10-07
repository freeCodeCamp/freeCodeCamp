"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

exports.convert = (globalObject, value, { context = "The provided value" } = {}) => {
  function invokeTheCallbackFunction(...args) {
    const thisArg = utils.tryWrapperForImpl(this);
    let callResult;

    if (typeof value === "function") {
      for (let i = 0; i < Math.min(args.length, 5); i++) {
        args[i] = utils.tryWrapperForImpl(args[i]);
      }

      if (args.length < 1) {
        for (let i = args.length; i < 1; i++) {
          args[i] = undefined;
        }
      } else if (args.length > 5) {
        args.length = 5;
      }

      callResult = Reflect.apply(value, thisArg, args);
    }

    callResult = conversions["any"](callResult, { context: context, globals: globalObject });

    return callResult;
  }

  invokeTheCallbackFunction.construct = (...args) => {
    for (let i = 0; i < Math.min(args.length, 5); i++) {
      args[i] = utils.tryWrapperForImpl(args[i]);
    }

    if (args.length < 1) {
      for (let i = args.length; i < 1; i++) {
        args[i] = undefined;
      }
    } else if (args.length > 5) {
      args.length = 5;
    }

    let callResult = Reflect.construct(value, args);

    callResult = conversions["any"](callResult, { context: context, globals: globalObject });

    return callResult;
  };

  invokeTheCallbackFunction[utils.wrapperSymbol] = value;
  invokeTheCallbackFunction.objectReference = value;

  return invokeTheCallbackFunction;
};
