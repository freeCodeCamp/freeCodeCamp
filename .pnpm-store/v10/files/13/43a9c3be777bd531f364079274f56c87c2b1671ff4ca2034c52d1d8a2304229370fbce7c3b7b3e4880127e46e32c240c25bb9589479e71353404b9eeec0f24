"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

exports.convert = (value, { context = "The provided value" } = {}) => {
  if (typeof value !== "function") {
    throw new TypeError(context + " is not a function");
  }

  function invokeTheCallbackFunction(mutations, observer) {
    if (new.target !== undefined) {
      throw new Error("Internal error: invokeTheCallbackFunction is not a constructor");
    }

    const thisArg = utils.tryWrapperForImpl(this);
    let callResult;

    mutations = utils.tryWrapperForImpl(mutations);

    observer = utils.tryWrapperForImpl(observer);

    callResult = Reflect.apply(value, thisArg, [mutations, observer]);
  }

  invokeTheCallbackFunction.construct = (mutations, observer) => {
    mutations = utils.tryWrapperForImpl(mutations);

    observer = utils.tryWrapperForImpl(observer);

    let callResult = Reflect.construct(value, [mutations, observer]);
  };

  invokeTheCallbackFunction[utils.wrapperSymbol] = value;
  invokeTheCallbackFunction.objectReference = value;

  return invokeTheCallbackFunction;
};
