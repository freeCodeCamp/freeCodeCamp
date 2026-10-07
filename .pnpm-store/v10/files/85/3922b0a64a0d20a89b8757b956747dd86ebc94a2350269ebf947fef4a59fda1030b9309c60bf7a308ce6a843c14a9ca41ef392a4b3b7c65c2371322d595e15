"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const Attr = require("./Attr.js");
const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "NamedNodeMap";

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
  throw new TypeError(`${context} is not of type 'NamedNodeMap'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["NamedNodeMap"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor NamedNodeMap is not installed on the passed global object");
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

  wrapper = new Proxy(wrapper, proxyHandler);

  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
  if (Impl.init) {
    Impl.init(wrapper[implSymbol]);
  }
  return wrapper;
};

exports.new = globalObject => {
  let wrapper = makeWrapper(globalObject);

  exports._internalSetup(wrapper, globalObject);
  Object.defineProperty(wrapper, implSymbol, {
    value: Object.create(Impl.implementation.prototype),
    configurable: true
  });

  wrapper = new Proxy(wrapper, proxyHandler);

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
  class NamedNodeMap {
    constructor() {
      throw new TypeError("Illegal constructor");
    }

    item(index) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'item' called on an object that is not a valid instance of NamedNodeMap.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'item' on 'NamedNodeMap': 1 argument required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'item' on 'NamedNodeMap': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].item(...args));
    }

    getNamedItem(qualifiedName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getNamedItem' called on an object that is not a valid instance of NamedNodeMap.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'getNamedItem' on 'NamedNodeMap': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getNamedItem' on 'NamedNodeMap': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getNamedItem(...args));
    }

    getNamedItemNS(namespace, localName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getNamedItemNS' called on an object that is not a valid instance of NamedNodeMap.");
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'getNamedItemNS' on 'NamedNodeMap': 2 arguments required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'getNamedItemNS' on 'NamedNodeMap': parameter 1"
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getNamedItemNS' on 'NamedNodeMap': parameter 2"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getNamedItemNS(...args));
    }

    setNamedItem(attr) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'setNamedItem' called on an object that is not a valid instance of NamedNodeMap.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'setNamedItem' on 'NamedNodeMap': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Attr.convert(curArg, { context: "Failed to execute 'setNamedItem' on 'NamedNodeMap': parameter 1" });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].setNamedItem(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    setNamedItemNS(attr) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'setNamedItemNS' called on an object that is not a valid instance of NamedNodeMap.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'setNamedItemNS' on 'NamedNodeMap': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Attr.convert(curArg, { context: "Failed to execute 'setNamedItemNS' on 'NamedNodeMap': parameter 1" });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].setNamedItemNS(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    removeNamedItem(qualifiedName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'removeNamedItem' called on an object that is not a valid instance of NamedNodeMap.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'removeNamedItem' on 'NamedNodeMap': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'removeNamedItem' on 'NamedNodeMap': parameter 1"
        });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].removeNamedItem(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    removeNamedItemNS(namespace, localName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'removeNamedItemNS' called on an object that is not a valid instance of NamedNodeMap.");
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'removeNamedItemNS' on 'NamedNodeMap': 2 arguments required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'removeNamedItemNS' on 'NamedNodeMap': parameter 1"
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'removeNamedItemNS' on 'NamedNodeMap': parameter 2"
        });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return utils.tryWrapperForImpl(esValue[implSymbol].removeNamedItemNS(...args));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get length() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get length' called on an object that is not a valid instance of NamedNodeMap.");
      }

      return esValue[implSymbol]["length"];
    }
  }
  Object.defineProperties(NamedNodeMap.prototype, {
    item: { enumerable: true },
    getNamedItem: { enumerable: true },
    getNamedItemNS: { enumerable: true },
    setNamedItem: { enumerable: true },
    setNamedItemNS: { enumerable: true },
    removeNamedItem: { enumerable: true },
    removeNamedItemNS: { enumerable: true },
    length: { enumerable: true },
    [Symbol.toStringTag]: { value: "NamedNodeMap", configurable: true },
    [Symbol.iterator]: { value: Array.prototype[Symbol.iterator], configurable: true, writable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = NamedNodeMap;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: NamedNodeMap
  });
};

const proxyHandler = {
  get(target, P, receiver) {
    if (typeof P === "symbol") {
      return Reflect.get(target, P, receiver);
    }
    const desc = this.getOwnPropertyDescriptor(target, P);
    if (desc === undefined) {
      const parent = Object.getPrototypeOf(target);
      if (parent === null) {
        return undefined;
      }
      return Reflect.get(target, P, receiver);
    }
    if (!desc.get && !desc.set) {
      return desc.value;
    }
    const getter = desc.get;
    if (getter === undefined) {
      return undefined;
    }
    return Reflect.apply(getter, receiver, []);
  },

  has(target, P) {
    if (typeof P === "symbol") {
      return Reflect.has(target, P);
    }
    const desc = this.getOwnPropertyDescriptor(target, P);
    if (desc !== undefined) {
      return true;
    }
    const parent = Object.getPrototypeOf(target);
    if (parent !== null) {
      return Reflect.has(parent, P);
    }
    return false;
  },

  ownKeys(target) {
    const keys = new Set();

    for (const key of target[implSymbol][utils.supportedPropertyIndices]) {
      keys.add(`${key}`);
    }

    for (const key of target[implSymbol][utils.supportedPropertyNames]) {
      if (!(key in target)) {
        keys.add(`${key}`);
      }
    }

    for (const key of Reflect.ownKeys(target)) {
      keys.add(key);
    }
    return [...keys];
  },

  getOwnPropertyDescriptor(target, P) {
    if (typeof P === "symbol") {
      return Reflect.getOwnPropertyDescriptor(target, P);
    }
    let ignoreNamedProps = false;

    if (utils.isArrayIndexPropName(P)) {
      const index = P >>> 0;
      const indexedValue = target[implSymbol].item(index);
      if (indexedValue !== null) {
        return {
          writable: false,
          enumerable: true,
          configurable: true,
          value: utils.tryWrapperForImpl(indexedValue)
        };
      }
      ignoreNamedProps = true;
    }

    const namedValue = target[implSymbol].getNamedItem(P);

    if (namedValue !== null && !(P in target) && !ignoreNamedProps) {
      return {
        writable: false,
        enumerable: false,
        configurable: true,
        value: utils.tryWrapperForImpl(namedValue)
      };
    }

    return Reflect.getOwnPropertyDescriptor(target, P);
  },

  set(target, P, V, receiver) {
    if (typeof P === "symbol") {
      return Reflect.set(target, P, V, receiver);
    }
    // The `receiver` argument refers to the Proxy exotic object or an object
    // that inherits from it, whereas `target` refers to the Proxy target:
    if (target[implSymbol][utils.wrapperSymbol] === receiver) {
    }
    let ownDesc;

    if (utils.isArrayIndexPropName(P)) {
      const index = P >>> 0;
      const indexedValue = target[implSymbol].item(index);
      if (indexedValue !== null) {
        ownDesc = {
          writable: false,
          enumerable: true,
          configurable: true,
          value: utils.tryWrapperForImpl(indexedValue)
        };
      }
    }

    if (ownDesc === undefined) {
      ownDesc = Reflect.getOwnPropertyDescriptor(target, P);
    }
    if (ownDesc === undefined) {
      const parent = Reflect.getPrototypeOf(target);
      if (parent !== null) {
        return Reflect.set(parent, P, V, receiver);
      }
      ownDesc = { writable: true, enumerable: true, configurable: true, value: undefined };
    }
    if (!ownDesc.writable) {
      return false;
    }
    if (!utils.isObject(receiver)) {
      return false;
    }
    const existingDesc = Reflect.getOwnPropertyDescriptor(receiver, P);
    let valueDesc;
    if (existingDesc !== undefined) {
      if (existingDesc.get || existingDesc.set) {
        return false;
      }
      if (!existingDesc.writable) {
        return false;
      }
      valueDesc = { value: V };
    } else {
      valueDesc = { writable: true, enumerable: true, configurable: true, value: V };
    }
    return Reflect.defineProperty(receiver, P, valueDesc);
  },

  defineProperty(target, P, desc) {
    if (typeof P === "symbol") {
      return Reflect.defineProperty(target, P, desc);
    }

    if (utils.isArrayIndexPropName(P)) {
      return false;
    }
    if (!utils.hasOwn(target, P)) {
      const creating = !(target[implSymbol].getNamedItem(P) !== null);
      if (!creating) {
        return false;
      }
    }
    return Reflect.defineProperty(target, P, desc);
  },

  deleteProperty(target, P) {
    if (typeof P === "symbol") {
      return Reflect.deleteProperty(target, P);
    }

    if (utils.isArrayIndexPropName(P)) {
      const index = P >>> 0;
      return !(target[implSymbol].item(index) !== null);
    }

    if (target[implSymbol].getNamedItem(P) !== null && !(P in target)) {
      return false;
    }

    return Reflect.deleteProperty(target, P);
  },

  preventExtensions() {
    return false;
  }
};

const Impl = require("../attributes/NamedNodeMap-impl.js");
