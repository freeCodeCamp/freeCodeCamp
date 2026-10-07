"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

exports.convert = (globalObject, value, { context = "The provided value" } = {}) => {
  function invokeTheCallbackFunction(event) {
    const thisArg = utils.tryWrapperForImpl(this);
    let callResult;

    if (typeof value === "function") {
      event = utils.tryWrapperForImpl(event);

      callResult = Reflect.apply(value, thisArg, [event]);
    }

    callResult = conversions["any"](callResult, { context: context, globals: globalObject });

    return callResult;
  }

  invokeTheCallbackFunction.construct = event => {
    event = utils.tryWrapperForImpl(event);

    let callResult = Reflect.construct(value, [event]);

    callResult = conversions["any"](callResult, { context: context, globals: globalObject });

    return callResult;
  };

  invokeTheCallbackFunction[utils.wrapperSymbol] = value;
  invokeTheCallbackFunction.objectReference = value;

  return invokeTheCallbackFunction;
};
