"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "Storage";

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
  throw new TypeError(`${context} is not of type 'Storage'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["Storage"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor Storage is not installed on the passed global object");
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
  class Storage {
    constructor() {
      throw new TypeError("Illegal constructor");
    }

    key(index) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'key' called on an object that is not a valid instance of Storage.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'key' on 'Storage': 1 argument required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["unsigned long"](curArg, { context: "Failed to execute 'key' on 'Storage': parameter 1" });
        args.push(curArg);
      }
      return esValue[implSymbol].key(...args);
    }

    getItem(key) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getItem' called on an object that is not a valid instance of Storage.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'getItem' on 'Storage': 1 argument required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, { context: "Failed to execute 'getItem' on 'Storage': parameter 1" });
        args.push(curArg);
      }
      return esValue[implSymbol].getItem(...args);
    }

    setItem(key, value) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'setItem' called on an object that is not a valid instance of Storage.");
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'setItem' on 'Storage': 2 arguments required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, { context: "Failed to execute 'setItem' on 'Storage': parameter 1" });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, { context: "Failed to execute 'setItem' on 'Storage': parameter 2" });
        args.push(curArg);
      }
      return esValue[implSymbol].setItem(...args);
    }

    removeItem(key) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'removeItem' called on an object that is not a valid instance of Storage.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'removeItem' on 'Storage': 1 argument required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'removeItem' on 'Storage': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].removeItem(...args);
    }

    clear() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'clear' called on an object that is not a valid instance of Storage.");
      }

      return esValue[implSymbol].clear();
    }

    get length() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get length' called on an object that is not a valid instance of Storage.");
      }

      return esValue[implSymbol]["length"];
    }
  }
  Object.defineProperties(Storage.prototype, {
    key: { enumerable: true },
    getItem: { enumerable: true },
    setItem: { enumerable: true },
    removeItem: { enumerable: true },
    clear: { enumerable: true },
    length: { enumerable: true },
    [Symbol.toStringTag]: { value: "Storage", configurable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = Storage;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Storage
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

    const namedValue = target[implSymbol].getItem(P);

    if (namedValue !== null && !(P in target) && !ignoreNamedProps) {
      return {
        writable: true,
        enumerable: true,
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
      if (typeof P === "string") {
        let namedValue = V;

        namedValue = conversions["DOMString"](namedValue, {
          context: "Failed to set the '" + P + "' property on 'Storage': The provided value"
        });

        target[implSymbol].setItem(P, namedValue);

        return true;
      }
    }
    let ownDesc;

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
    if (!utils.hasOwn(target, P)) {
      if (desc.get || desc.set) {
        return false;
      }

      let namedValue = desc.value;

      namedValue = conversions["DOMString"](namedValue, {
        context: "Failed to set the '" + P + "' property on 'Storage': The provided value"
      });

      target[implSymbol].setItem(P, namedValue);

      return true;
    }
    return Reflect.defineProperty(target, P, desc);
  },

  deleteProperty(target, P) {
    if (typeof P === "symbol") {
      return Reflect.deleteProperty(target, P);
    }

    if (target[implSymbol].getItem(P) !== null && !(P in target)) {
      target[implSymbol].removeItem(P);
      return true;
    }

    return Reflect.deleteProperty(target, P);
  },

  preventExtensions() {
    return false;
  }
};

const Impl = require("../webstorage/Storage-impl.js");
