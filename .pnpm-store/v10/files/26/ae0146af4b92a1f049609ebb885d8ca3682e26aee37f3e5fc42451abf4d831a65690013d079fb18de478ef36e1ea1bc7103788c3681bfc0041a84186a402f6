"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "AbstractRange";

exports.is = value => {
  return utils.isObject(value) && utils.hasOwn(value, implSymbol) && value[implSymbol] instanceof Impl.implementation;
};
exports.isImpl = value => {
  return utils.isObject(value) && value instanceof Impl.implementation;
};
exports.convert = (globalObject, value, { context = "The provided value" } = {}) => {
  if (exports.is(value)) {
    return utils.implForWrapper(value);
  }
  throw new globalObject.TypeError(`${context} is not of type 'AbstractRange'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["AbstractRange"].prototype;
  }

  return Object.create(proto);
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

exports.new = (globalObject, newTarget) => {
  const wrapper = makeWrapper(globalObject, newTarget);

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

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class AbstractRange {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    get startContainer() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get startContainer' called on an object that is not a valid instance of AbstractRange."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["startContainer"]);
    }

    get startOffset() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get startOffset' called on an object that is not a valid instance of AbstractRange."
        );
      }

      return esValue[implSymbol]["startOffset"];
    }

    get endContainer() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get endContainer' called on an object that is not a valid instance of AbstractRange."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["endContainer"]);
    }

    get endOffset() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get endOffset' called on an object that is not a valid instance of AbstractRange."
        );
      }

      return esValue[implSymbol]["endOffset"];
    }

    get collapsed() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get collapsed' called on an object that is not a valid instance of AbstractRange."
        );
      }

      return esValue[implSymbol]["collapsed"];
    }
  }
  Object.defineProperties(AbstractRange.prototype, {
    startContainer: { enumerable: true },
    startOffset: { enumerable: true },
    endContainer: { enumerable: true },
    endOffset: { enumerable: true },
    collapsed: { enumerable: true },
    [Symbol.toStringTag]: { value: "AbstractRange", configurable: true }
  });
  ctorRegistry[interfaceName] = AbstractRange;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: AbstractRange
  });
};

const Impl = require("../range/AbstractRange-impl.js");
