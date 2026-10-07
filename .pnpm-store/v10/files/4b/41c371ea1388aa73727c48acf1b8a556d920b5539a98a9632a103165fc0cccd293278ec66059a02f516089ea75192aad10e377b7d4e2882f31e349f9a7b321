"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

exports.convert = (globalObject, value, { context = "The provided value" } = {}) => {
  if (typeof value !== "function") {
    throw new globalObject.TypeError(context + " is not a function");
  }

  function invokeTheCallbackFunction(...args) {
    const thisArg = utils.tryWrapperForImpl(this);
    let callResult;

    for (let i = 0; i < args.length; i++) {
      args[i] = utils.tryWrapperForImpl(args[i]);
    }

    callResult = Reflect.apply(value, thisArg, args);

    callResult = conversions["any"](callResult, { context: context, globals: globalObject });

    return callResult;
  }

  invokeTheCallbackFunction.construct = (...args) => {
    for (let i = 0; i < args.length; i++) {
      args[i] = utils.tryWrapperForImpl(args[i]);
    }

    let callResult = Reflect.construct(value, args);

    callResult = conversions["any"](callResult, { context: context, globals: globalObject });

    return callResult;
  };

  invokeTheCallbackFunction[utils.wrapperSymbol] = value;
  invokeTheCallbackFunction.objectReference = value;

  return invokeTheCallbackFunction;
};
