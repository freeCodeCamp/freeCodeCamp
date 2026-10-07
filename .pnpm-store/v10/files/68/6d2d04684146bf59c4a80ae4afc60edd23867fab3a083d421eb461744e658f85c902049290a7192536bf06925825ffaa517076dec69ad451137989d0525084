"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "NodeIterator";

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
  throw new TypeError(`${context} is not of type 'NodeIterator'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["NodeIterator"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor NodeIterator is not installed on the passed global object");
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
  class NodeIterator {
    constructor() {
      throw new TypeError("Illegal constructor");
    }

    nextNode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'nextNode' called on an object that is not a valid instance of NodeIterator.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].nextNode());
    }

    previousNode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'previousNode' called on an object that is not a valid instance of NodeIterator.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].previousNode());
    }

    detach() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'detach' called on an object that is not a valid instance of NodeIterator.");
      }

      return esValue[implSymbol].detach();
    }

    get root() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get root' called on an object that is not a valid instance of NodeIterator.");
      }

      return utils.getSameObject(this, "root", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["root"]);
      });
    }

    get referenceNode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get referenceNode' called on an object that is not a valid instance of NodeIterator.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["referenceNode"]);
    }

    get pointerBeforeReferenceNode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get pointerBeforeReferenceNode' called on an object that is not a valid instance of NodeIterator."
        );
      }

      return esValue[implSymbol]["pointerBeforeReferenceNode"];
    }

    get whatToShow() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get whatToShow' called on an object that is not a valid instance of NodeIterator.");
      }

      return esValue[implSymbol]["whatToShow"];
    }

    get filter() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get filter' called on an object that is not a valid instance of NodeIterator.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["filter"]);
    }
  }
  Object.defineProperties(NodeIterator.prototype, {
    nextNode: { enumerable: true },
    previousNode: { enumerable: true },
    detach: { enumerable: true },
    root: { enumerable: true },
    referenceNode: { enumerable: true },
    pointerBeforeReferenceNode: { enumerable: true },
    whatToShow: { enumerable: true },
    filter: { enumerable: true },
    [Symbol.toStringTag]: { value: "NodeIterator", configurable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = NodeIterator;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: NodeIterator
  });
};

const Impl = require("../traversal/NodeIterator-impl.js");
