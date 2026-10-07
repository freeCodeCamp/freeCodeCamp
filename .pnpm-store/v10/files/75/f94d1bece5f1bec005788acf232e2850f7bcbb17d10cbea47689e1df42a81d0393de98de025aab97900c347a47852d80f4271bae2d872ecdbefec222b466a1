"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "SVGStringList";

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
  throw new TypeError(`${context} is not of type 'SVGStringList'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["SVGStringList"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor SVGStringList is not installed on the passed global object");
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
  class SVGStringList {
    constructor() {
      throw new TypeError("Illegal constructor");
    }

    clear() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'clear' called on an object that is not a valid instance of SVGStringList.");
      }

      return esValue[implSymbol].clear();
    }

    initialize(newItem) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'initialize' called on an object that is not a valid instance of SVGStringList.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'initialize' on 'SVGStringList': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'initialize' on 'SVGStringList': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].initialize(...args);
    }

    getItem(index) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getItem' called on an object that is not a valid instance of SVGStringList.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'getItem' on 'SVGStringList': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'getItem' on 'SVGStringList': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].getItem(...args);
    }

    insertItemBefore(newItem, index) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'insertItemBefore' called on an object that is not a valid instance of SVGStringList.");
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'insertItemBefore' on 'SVGStringList': 2 arguments required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'insertItemBefore' on 'SVGStringList': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'insertItemBefore' on 'SVGStringList': parameter 2"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].insertItemBefore(...args);
    }

    replaceItem(newItem, index) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'replaceItem' called on an object that is not a valid instance of SVGStringList.");
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'replaceItem' on 'SVGStringList': 2 arguments required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'replaceItem' on 'SVGStringList': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'replaceItem' on 'SVGStringList': parameter 2"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].replaceItem(...args);
    }

    removeItem(index) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'removeItem' called on an object that is not a valid instance of SVGStringList.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'removeItem' on 'SVGStringList': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'removeItem' on 'SVGStringList': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].removeItem(...args);
    }

    appendItem(newItem) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'appendItem' called on an object that is not a valid instance of SVGStringList.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'appendItem' on 'SVGStringList': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'appendItem' on 'SVGStringList': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].appendItem(...args);
    }

    get length() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get length' called on an object that is not a valid instance of SVGStringList.");
      }

      return esValue[implSymbol]["length"];
    }

    get numberOfItems() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get numberOfItems' called on an object that is not a valid instance of SVGStringList.");
      }

      return esValue[implSymbol]["numberOfItems"];
    }
  }
  Object.defineProperties(SVGStringList.prototype, {
    clear: { enumerable: true },
    initialize: { enumerable: true },
    getItem: { enumerable: true },
    insertItemBefore: { enumerable: true },
    replaceItem: { enumerable: true },
    removeItem: { enumerable: true },
    appendItem: { enumerable: true },
    length: { enumerable: true },
    numberOfItems: { enumerable: true },
    [Symbol.toStringTag]: { value: "SVGStringList", configurable: true },
    [Symbol.iterator]: { value: Array.prototype[Symbol.iterator], configurable: true, writable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = SVGStringList;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: SVGStringList
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

      if (target[implSymbol][utils.supportsPropertyIndex](index)) {
        const indexedValue = target[implSymbol].getItem(index);
        return {
          writable: true,
          enumerable: true,
          configurable: true,
          value: utils.tryWrapperForImpl(indexedValue)
        };
      }
      ignoreNamedProps = true;
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
      if (utils.isArrayIndexPropName(P)) {
        const index = P >>> 0;
        let indexedValue = V;

        indexedValue = conversions["DOMString"](indexedValue, {
          context: "Failed to set the " + index + " property on 'SVGStringList': The provided value"
        });

        const creating = !target[implSymbol][utils.supportsPropertyIndex](index);
        if (creating) {
          target[implSymbol][utils.indexedSetNew](index, indexedValue);
        } else {
          target[implSymbol][utils.indexedSetExisting](index, indexedValue);
        }

        return true;
      }
    }
    let ownDesc;

    if (utils.isArrayIndexPropName(P)) {
      const index = P >>> 0;

      if (target[implSymbol][utils.supportsPropertyIndex](index)) {
        const indexedValue = target[implSymbol].getItem(index);
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
  },

  defineProperty(target, P, desc) {
    if (typeof P === "symbol") {
      return Reflect.defineProperty(target, P, desc);
    }

    if (utils.isArrayIndexPropName(P)) {
      if (desc.get || desc.set) {
        return false;
      }

      const index = P >>> 0;
      let indexedValue = desc.value;

      indexedValue = conversions["DOMString"](indexedValue, {
        context: "Failed to set the " + index + " property on 'SVGStringList': The provided value"
      });

      const creating = !target[implSymbol][utils.supportsPropertyIndex](index);
      if (creating) {
        target[implSymbol][utils.indexedSetNew](index, indexedValue);
      } else {
        target[implSymbol][utils.indexedSetExisting](index, indexedValue);
      }

      return true;
    }

    return Reflect.defineProperty(target, P, desc);
  },

  deleteProperty(target, P) {
    if (typeof P === "symbol") {
      return Reflect.deleteProperty(target, P);
    }

    if (utils.isArrayIndexPropName(P)) {
      const index = P >>> 0;
      return !target[implSymbol][utils.supportsPropertyIndex](index);
    }

    return Reflect.deleteProperty(target, P);
  },

  preventExtensions() {
    return false;
  }
};

const Impl = require("../svg/SVGStringList-impl.js");
