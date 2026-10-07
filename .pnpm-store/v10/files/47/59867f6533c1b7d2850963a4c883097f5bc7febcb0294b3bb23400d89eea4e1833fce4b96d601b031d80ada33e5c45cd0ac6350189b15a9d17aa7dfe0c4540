"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const MutationCallback = require("./MutationCallback.js");
const Node = require("./Node.js");
const MutationObserverInit = require("./MutationObserverInit.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "MutationObserver";

exports.is = value => {
  return utils.isObject(value) && utils.hasOwn(value, implSymbol) && value[implSymbol] instanceof Impl.implementation;
};
exports.isImpl = value => {
  return utils.isObject(value) && value instanceof Impl.implementation;
};
exports.convert = (value, { context = "The provided value" } = {}) => {
  if (exports.is(value)) {
    return utils.implForWrapper(value);
  }
  throw new TypeError(`${context} is not of type 'MutationObserver'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["MutationObserver"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor MutationObserver is not installed on the passed global object");
  }

  return Object.create(ctor.prototype);
}

exports.create = (globalObject, constructorArgs, privateData) => {
  const wrapper = makeWrapper(globalObject);
  return exports.setup(wrapper, globalObject, constructorArgs, privateData);
};

exports.createImpl = (globalObject, constructorArgs, privateData) => {
  const wrapper = exports.create(globalObject, constructorArgs, privateData);
  return utils.implForWrapper(wrapper);
};

exports._internalSetup = (wrapper, globalObject) => {};

exports.setup = (wrapper, globalObject, constructorArgs = [], privateData = {}) => {
  privateData.wrapper = wrapper;

  exports._internalSetup(wrapper, globalObject);
  Object.defineProperty(wrapper, implSymbol, {
    value: new Impl.implementation(globalObject, constructorArgs, privateData),
    configurable: true
  });

  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
  if (Impl.init) {
    Impl.init(wrapper[implSymbol]);
  }
  return wrapper;
};

exports.new = globalObject => {
  const wrapper = makeWrapper(globalObject);

  exports._internalSetup(wrapper, globalObject);
  Object.defineProperty(wrapper, implSymbol, {
    value: Object.create(Impl.implementation.prototype),
    configurable: true
  });

  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
  if (Impl.init) {
    Impl.init(wrapper[implSymbol]);
  }
  return wrapper[implSymbol];
};

const exposed = new Set(["Window"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }
  class MutationObserver {
    constructor(callback) {
      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to construct 'MutationObserver': 1 argument required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = MutationCallback.convert(curArg, { context: "Failed to construct 'MutationObserver': parameter 1" });
        args.push(curArg);
      }
      return exports.setup(Object.create(new.target.prototype), globalObject, args);
    }

    observe(target) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'observe' called on an object that is not a valid instance of MutationObserver.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'observe' on 'MutationObserver': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(curArg, { context: "Failed to execute 'observe' on 'MutationObserver': parameter 1" });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = MutationObserverInit.convert(curArg, {
          context: "Failed to execute 'observe' on 'MutationObserver': parameter 2"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].observe(...args);
    }

    disconnect() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'disconnect' called on an object that is not a valid instance of MutationObserver.");
      }

      return esValue[implSymbol].disconnect();
    }

    takeRecords() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'takeRecords' called on an object that is not a valid instance of MutationObserver.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].takeRecords());
    }
  }
  Object.defineProperties(MutationObserver.prototype, {
    observe: { enumerable: true },
    disconnect: { enumerable: true },
    takeRecords: { enumerable: true },
    [Symbol.toStringTag]: { value: "MutationObserver", configurable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = MutationObserver;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: MutationObserver
  });
};

const Impl = require("../mutation-observer/MutationObserver-impl.js");
