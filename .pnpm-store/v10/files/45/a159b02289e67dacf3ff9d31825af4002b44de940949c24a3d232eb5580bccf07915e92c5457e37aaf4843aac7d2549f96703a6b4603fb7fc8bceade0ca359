"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

exports.convert = (value, { context = "The provided value" } = {}) => {
  if (typeof value !== "function") {
    throw new TypeError(context + " is not a function");
  }

  function invokeTheCallbackFunction(blob) {
    if (new.target !== undefined) {
      throw new Error("Internal error: invokeTheCallbackFunction is not a constructor");
    }

    const thisArg = utils.tryWrapperForImpl(this);
    let callResult;

    blob = utils.tryWrapperForImpl(blob);

    callResult = Reflect.apply(value, thisArg, [blob]);
  }

  invokeTheCallbackFunction.construct = blob => {
    blob = utils.tryWrapperForImpl(blob);

    let callResult = Reflect.construct(value, [blob]);
  };

  invokeTheCallbackFunction[utils.wrapperSymbol] = value;
  invokeTheCallbackFunction.objectReference = value;

  return invokeTheCallbackFunction;
};
