"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const HTMLOptionElement = require("./HTMLOptionElement.js");
const HTMLOptGroupElement = require("./HTMLOptGroupElement.js");
const HTMLElement = require("./HTMLElement.js");
const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const HTMLCollection = require("./HTMLCollection.js");

const interfaceName = "HTMLOptionsCollection";

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
  throw new TypeError(`${context} is not of type 'HTMLOptionsCollection'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["HTMLOptionsCollection"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor HTMLOptionsCollection is not installed on the passed global object");
  }

  return Object.create(ctor.prototype);
}

function makeProxy(wrapper, globalObject) {
  let proxyHandler = proxyHandlerCache.get(globalObject);
  if (proxyHandler === undefined) {
    proxyHandler = new ProxyHandler(globalObject);
    proxyHandlerCache.set(globalObject, proxyHandler);
  }
  return new Proxy(wrapper, proxyHandler);
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
  HTMLCollection._internalSetup(wrapper, globalObject);
};

exports.setup = (wrapper, globalObject, constructorArgs = [], privateData = {}) => {
  privateData.wrapper = wrapper;

  exports._internalSetup(wrapper, globalObject);
  Object.defineProperty(wrapper, implSymbol, {
    value: new Impl.implementation(globalObject, constructorArgs, privateData),
    configurable: true
  });

  wrapper = makeProxy(wrapper, globalObject);

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

  wrapper = makeProxy(wrapper, globalObject);

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

  if (globalObject.HTMLCollection === undefined) {
    throw new Error("Internal error: attempting to evaluate HTMLOptionsCollection before HTMLCollection");
  }
  class HTMLOptionsCollection extends globalObject.HTMLCollection {
    constructor() {
      throw new TypeError("Illegal constructor");
    }

    add(element) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'add' called on an object that is not a valid instance of HTMLOptionsCollection.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'add' on 'HTMLOptionsCollection': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (HTMLOptionElement.is(curArg) || HTMLOptGroupElement.is(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else {
          throw new TypeError(
            "Failed to execute 'add' on 'HTMLOptionsCollection': parameter 1" + " is not of any supported type."
          );
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          if (curArg === null || curArg === undefined) {
            curArg = null;
          } else {
            if (HTMLElement.is(curArg)) {
              curArg = utils.implForWrapper(curArg);
            } else if (typeof curArg === "number") {
              curArg = conversions["long"](curArg, {
                context: "Failed to execute 'add' on 'HTMLOptionsCollection': parameter 2"
              });
            } else {
              curArg = conversions["long"](curArg, {
                context: "Failed to execute 'add' on 'HTMLOptionsCollection': parameter 2"
              });
            }
          }
        } else {
          curArg = null;
        }
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].add(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    remove(index) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'remove' called on an object that is not a valid instance of HTMLOptionsCollection.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'remove' on 'HTMLOptionsCollection': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["long"](curArg, {
          context: "Failed to execute 'remove' on 'HTMLOptionsCollection': parameter 1"
        });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].remove(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get length() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get length' called on an object that is not a valid instance of HTMLOptionsCollection.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["length"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set length(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set length' called on an object that is not a valid instance of HTMLOptionsCollection.");
      }

      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'length' property on 'HTMLOptionsCollection': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["length"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get selectedIndex() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get selectedIndex' called on an object that is not a valid instance of HTMLOptionsCollection."
        );
      }

      return esValue[implSymbol]["selectedIndex"];
    }

    set selectedIndex(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set selectedIndex' called on an object that is not a valid instance of HTMLOptionsCollection."
        );
      }

      V = conversions["long"](V, {
        context: "Failed to set the 'selectedIndex' property on 'HTMLOptionsCollection': The provided value"
      });

      esValue[implSymbol]["selectedIndex"] = V;
    }
  }
  Object.defineProperties(HTMLOptionsCollection.prototype, {
    add: { enumerable: true },
    remove: { enumerable: true },
    length: { enumerable: true },
    selectedIndex: { enumerable: true },
    [Symbol.toStringTag]: { value: "HTMLOptionsCollection", configurable: true },
    [Symbol.iterator]: { value: Array.prototype[Symbol.iterator], configurable: true, writable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = HTMLOptionsCollection;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: HTMLOptionsCollection
  });
};

const proxyHandlerCache = new WeakMap();
class ProxyHandler {
  constructor(globalObject) {
    this._globalObject = globalObject;
  }

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
  }

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
  }

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
  }

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
          writable: true,
          enumerable: true,
          configurable: true,
          value: utils.tryWrapperForImpl(indexedValue)
        };
      }
      ignoreNamedProps = true;
    }

    const namedValue = target[implSymbol].namedItem(P);

    if (namedValue !== null && !(P in target) && !ignoreNamedProps) {
      return {
        writable: false,
        enumerable: true,
        configurable: true,
        value: utils.tryWrapperForImpl(namedValue)
      };
    }

    return Reflect.getOwnPropertyDescriptor(target, P);
  }

  set(target, P, V, receiver) {
    if (typeof P === "symbol") {
      return Reflect.set(target, P, V, receiver);
    }
    // The `receiver` argument refers to the Proxy exotic object or an object
    // that inherits from it, whereas `target` refers to the Proxy target:
    if (target[implSymbol][utils.wrapperSymbol] === receiver) {
      const globalObject = this._globalObject;

      if (utils.isArrayIndexPropName(P)) {
        const index = P >>> 0;
        let indexedValue = V;

        if (indexedValue === null || indexedValue === undefined) {
          indexedValue = null;
        } else {
          indexedValue = HTMLOptionElement.convert(indexedValue, {
            context: "Failed to set the " + index + " property on 'HTMLOptionsCollection': The provided value"
          });
        }

        ceReactionsPreSteps_helpers_custom_elements(globalObject);
        try {
          const creating = !(target[implSymbol].item(index) !== null);
          if (creating) {
            target[implSymbol][utils.indexedSetNew](index, indexedValue);
          } else {
            target[implSymbol][utils.indexedSetExisting](index, indexedValue);
          }
        } finally {
          ceReactionsPostSteps_helpers_custom_elements(globalObject);
        }

        return true;
      }
    }
    let ownDesc;

    if (utils.isArrayIndexPropName(P)) {
      const index = P >>> 0;
      const indexedValue = target[implSymbol].item(index);
      if (indexedValue !== null) {
        ownDesc = {
          writable: true,
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
  }

  defineProperty(target, P, desc) {
    if (typeof P === "symbol") {
      return Reflect.defineProperty(target, P, desc);
    }

    const globalObject = this._globalObject;

    if (utils.isArrayIndexPropName(P)) {
      if (desc.get || desc.set) {
        return false;
      }

      const index = P >>> 0;
      let indexedValue = desc.value;

      if (indexedValue === null || indexedValue === undefined) {
        indexedValue = null;
      } else {
        indexedValue = HTMLOptionElement.convert(indexedValue, {
          context: "Failed to set the " + index + " property on 'HTMLOptionsCollection': The provided value"
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const creating = !(target[implSymbol].item(index) !== null);
        if (creating) {
          target[implSymbol][utils.indexedSetNew](index, indexedValue);
        } else {
          target[implSymbol][utils.indexedSetExisting](index, indexedValue);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }

      return true;
    }
    if (!utils.hasOwn(target, P)) {
      const creating = !(target[implSymbol].namedItem(P) !== null);
      if (!creating) {
        return false;
      }
    }
    return Reflect.defineProperty(target, P, desc);
  }

  deleteProperty(target, P) {
    if (typeof P === "symbol") {
      return Reflect.deleteProperty(target, P);
    }

    const globalObject = this._globalObject;

    if (utils.isArrayIndexPropName(P)) {
      const index = P >>> 0;
      return !(target[implSymbol].item(index) !== null);
    }

    if (target[implSymbol].namedItem(P) !== null && !(P in target)) {
      return false;
    }

    return Reflect.deleteProperty(target, P);
  }

  preventExtensions() {
    return false;
  }
}

const Impl = require("../nodes/HTMLOptionsCollection-impl.js");
