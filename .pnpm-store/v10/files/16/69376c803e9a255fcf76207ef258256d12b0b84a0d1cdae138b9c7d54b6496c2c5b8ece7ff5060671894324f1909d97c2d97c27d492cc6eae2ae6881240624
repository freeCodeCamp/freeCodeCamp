"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const Node = require("./Node.js");

const interfaceName = "Attr";

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
  throw new globalObject.TypeError(`${context} is not of type 'Attr'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["Attr"].prototype;
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

exports._internalSetup = (wrapper, globalObject) => {
  Node._internalSetup(wrapper, globalObject);
};

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
  class Attr extends globalObject.Node {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    get namespaceURI() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get namespaceURI' called on an object that is not a valid instance of Attr."
        );
      }

      return esValue[implSymbol]["namespaceURI"];
    }

    get prefix() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get prefix' called on an object that is not a valid instance of Attr.");
      }

      return esValue[implSymbol]["prefix"];
    }

    get localName() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get localName' called on an object that is not a valid instance of Attr.");
      }

      return esValue[implSymbol]["localName"];
    }

    get name() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get name' called on an object that is not a valid instance of Attr.");
      }

      return esValue[implSymbol]["name"];
    }

    get value() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get value' called on an object that is not a valid instance of Attr.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["value"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set value(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'set value' called on an object that is not a valid instance of Attr.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'value' property on 'Attr': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["value"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get ownerElement() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ownerElement' called on an object that is not a valid instance of Attr."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ownerElement"]);
    }

    get specified() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get specified' called on an object that is not a valid instance of Attr.");
      }

      return esValue[implSymbol]["specified"];
    }
  }
  Object.defineProperties(Attr.prototype, {
    namespaceURI: { enumerable: true },
    prefix: { enumerable: true },
    localName: { enumerable: true },
    name: { enumerable: true },
    value: { enumerable: true },
    ownerElement: { enumerable: true },
    specified: { enumerable: true },
    [Symbol.toStringTag]: { value: "Attr", configurable: true }
  });
  ctorRegistry[interfaceName] = Attr;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Attr
  });
};

const Impl = require("../attributes/Attr-impl.js");
