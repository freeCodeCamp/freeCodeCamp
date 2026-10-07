"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

exports.convert = function convert(value, { context = "The provided value" } = {}) {
  if (!utils.isObject(value)) {
    throw new TypeError(`${context} is not an object.`);
  }

  function callTheUserObjectsOperation(event) {
    let thisArg = utils.tryWrapperForImpl(this);
    let O = value;
    let X = O;

    if (typeof O !== "function") {
      X = O["handleEvent"];
      if (typeof X !== "function") {
        throw new TypeError(`${context} does not correctly implement EventListener.`);
      }
      thisArg = O;
    }

    event = utils.tryWrapperForImpl(event);

    let callResult = Reflect.apply(X, thisArg, [event]);
  }

  callTheUserObjectsOperation[utils.wrapperSymbol] = value;
  callTheUserObjectsOperation.objectReference = value;

  return callTheUserObjectsOperation;
};

exports.install = (globalObject, globalNames) => {};
