"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "MutationRecord";

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
  throw new globalObject.TypeError(`${context} is not of type 'MutationRecord'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["MutationRecord"].prototype;
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
  class MutationRecord {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    get type() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get type' called on an object that is not a valid instance of MutationRecord."
        );
      }

      return esValue[implSymbol]["type"];
    }

    get target() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get target' called on an object that is not a valid instance of MutationRecord."
        );
      }

      return utils.getSameObject(this, "target", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["target"]);
      });
    }

    get addedNodes() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get addedNodes' called on an object that is not a valid instance of MutationRecord."
        );
      }

      return utils.getSameObject(this, "addedNodes", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["addedNodes"]);
      });
    }

    get removedNodes() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get removedNodes' called on an object that is not a valid instance of MutationRecord."
        );
      }

      return utils.getSameObject(this, "removedNodes", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["removedNodes"]);
      });
    }

    get previousSibling() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get previousSibling' called on an object that is not a valid instance of MutationRecord."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["previousSibling"]);
    }

    get nextSibling() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get nextSibling' called on an object that is not a valid instance of MutationRecord."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["nextSibling"]);
    }

    get attributeName() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get attributeName' called on an object that is not a valid instance of MutationRecord."
        );
      }

      return esValue[implSymbol]["attributeName"];
    }

    get attributeNamespace() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get attributeNamespace' called on an object that is not a valid instance of MutationRecord."
        );
      }

      return esValue[implSymbol]["attributeNamespace"];
    }

    get oldValue() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get oldValue' called on an object that is not a valid instance of MutationRecord."
        );
      }

      return esValue[implSymbol]["oldValue"];
    }
  }
  Object.defineProperties(MutationRecord.prototype, {
    type: { enumerable: true },
    target: { enumerable: true },
    addedNodes: { enumerable: true },
    removedNodes: { enumerable: true },
    previousSibling: { enumerable: true },
    nextSibling: { enumerable: true },
    attributeName: { enumerable: true },
    attributeNamespace: { enumerable: true },
    oldValue: { enumerable: true },
    [Symbol.toStringTag]: { value: "MutationRecord", configurable: true }
  });
  ctorRegistry[interfaceName] = MutationRecord;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: MutationRecord
  });
};

const Impl = require("../mutation-observer/MutationRecord-impl.js");
