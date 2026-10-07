"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const Function = require("./Function.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "Headers";

const IteratorPrototype = Object.create(utils.IteratorPrototype, {
  next: {
    value: function next() {
      const internal = this && this[utils.iterInternalSymbol];
      if (!internal) {
        throw new TypeError("next() called on a value that is not an iterator prototype object");
      }

      const { target, kind, index } = internal;
      const values = Array.from(target[implSymbol]);
      const len = values.length;
      if (index >= len) {
        return { value: undefined, done: true };
      }

      const pair = values[index];
      internal.index = index + 1;
      return utils.iteratorResult(pair.map(utils.tryWrapperForImpl), kind);
    },
    writable: true,
    enumerable: true,
    configurable: true
  },
  [Symbol.toStringTag]: {
    value: "Headers Iterator",
    configurable: true
  }
});

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
  throw new TypeError(`${context} is not of type 'Headers'.`);
};

exports.createDefaultIterator = (target, kind) => {
  const iterator = Object.create(IteratorPrototype);
  Object.defineProperty(iterator, utils.iterInternalSymbol, {
    value: { target, kind, index: 0 },
    configurable: true
  });
  return iterator;
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["Headers"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor Headers is not installed on the passed global object");
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

const exposed = new Set(["Window", "Worker"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }
  class Headers {
    constructor() {
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg !== undefined) {
          if (utils.isObject(curArg)) {
            if (curArg[Symbol.iterator] !== undefined) {
              if (!utils.isObject(curArg)) {
                throw new TypeError(
                  "Failed to construct 'Headers': parameter 1" + " sequence" + " is not an iterable object."
                );
              } else {
                const V = [];
                const tmp = curArg;
                for (let nextItem of tmp) {
                  if (!utils.isObject(nextItem)) {
                    throw new TypeError(
                      "Failed to construct 'Headers': parameter 1" +
                        " sequence" +
                        "'s element" +
                        " is not an iterable object."
                    );
                  } else {
                    const V = [];
                    const tmp = nextItem;
                    for (let nextItem of tmp) {
                      nextItem = conversions["ByteString"](nextItem, {
                        context:
                          "Failed to construct 'Headers': parameter 1" + " sequence" + "'s element" + "'s element"
                      });

                      V.push(nextItem);
                    }
                    nextItem = V;
                  }

                  V.push(nextItem);
                }
                curArg = V;
              }
            } else {
              if (!utils.isObject(curArg)) {
                throw new TypeError("Failed to construct 'Headers': parameter 1" + " record" + " is not an object.");
              } else {
                const result = Object.create(null);
                for (const key of Reflect.ownKeys(curArg)) {
                  const desc = Object.getOwnPropertyDescriptor(curArg, key);
                  if (desc && desc.enumerable) {
                    let typedKey = key;

                    typedKey = conversions["ByteString"](typedKey, {
                      context: "Failed to construct 'Headers': parameter 1" + " record" + "'s key"
                    });

                    let typedValue = curArg[key];

                    typedValue = conversions["ByteString"](typedValue, {
                      context: "Failed to construct 'Headers': parameter 1" + " record" + "'s value"
                    });

                    result[typedKey] = typedValue;
                  }
                }
                curArg = result;
              }
            }
          } else {
            throw new TypeError("Failed to construct 'Headers': parameter 1" + " is not of any supported type.");
          }
        }
        args.push(curArg);
      }
      return exports.setup(Object.create(new.target.prototype), globalObject, args);
    }

    append(name, value) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'append' called on an object that is not a valid instance of Headers.");
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'append' on 'Headers': 2 arguments required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["ByteString"](curArg, { context: "Failed to execute 'append' on 'Headers': parameter 1" });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["ByteString"](curArg, { context: "Failed to execute 'append' on 'Headers': parameter 2" });
        args.push(curArg);
      }
      return esValue[implSymbol].append(...args);
    }

    delete(name) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'delete' called on an object that is not a valid instance of Headers.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'delete' on 'Headers': 1 argument required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["ByteString"](curArg, { context: "Failed to execute 'delete' on 'Headers': parameter 1" });
        args.push(curArg);
      }
      return esValue[implSymbol].delete(...args);
    }

    get(name) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'get' called on an object that is not a valid instance of Headers.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'get' on 'Headers': 1 argument required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["ByteString"](curArg, { context: "Failed to execute 'get' on 'Headers': parameter 1" });
        args.push(curArg);
      }
      return esValue[implSymbol].get(...args);
    }

    has(name) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'has' called on an object that is not a valid instance of Headers.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'has' on 'Headers': 1 argument required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["ByteString"](curArg, { context: "Failed to execute 'has' on 'Headers': parameter 1" });
        args.push(curArg);
      }
      return esValue[implSymbol].has(...args);
    }

    set(name, value) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'set' called on an object that is not a valid instance of Headers.");
      }

      if (arguments.length < 2) {
        throw new TypeError(
          "Failed to execute 'set' on 'Headers': 2 arguments required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["ByteString"](curArg, { context: "Failed to execute 'set' on 'Headers': parameter 1" });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["ByteString"](curArg, { context: "Failed to execute 'set' on 'Headers': parameter 2" });
        args.push(curArg);
      }
      return esValue[implSymbol].set(...args);
    }

    keys() {
      if (!exports.is(this)) {
        throw new TypeError("'keys' called on an object that is not a valid instance of Headers.");
      }
      return exports.createDefaultIterator(this, "key");
    }

    values() {
      if (!exports.is(this)) {
        throw new TypeError("'values' called on an object that is not a valid instance of Headers.");
      }
      return exports.createDefaultIterator(this, "value");
    }

    entries() {
      if (!exports.is(this)) {
        throw new TypeError("'entries' called on an object that is not a valid instance of Headers.");
      }
      return exports.createDefaultIterator(this, "key+value");
    }

    forEach(callback) {
      if (!exports.is(this)) {
        throw new TypeError("'forEach' called on an object that is not a valid instance of Headers.");
      }
      if (arguments.length < 1) {
        throw new TypeError("Failed to execute 'forEach' on 'iterable': 1 argument required, " + "but only 0 present.");
      }
      callback = Function.convert(callback, {
        context: "Failed to execute 'forEach' on 'iterable': The callback provided as parameter 1"
      });
      const thisArg = arguments[1];
      let pairs = Array.from(this[implSymbol]);
      let i = 0;
      while (i < pairs.length) {
        const [key, value] = pairs[i].map(utils.tryWrapperForImpl);
        callback.call(thisArg, value, key, this);
        pairs = Array.from(this[implSymbol]);
        i++;
      }
    }
  }
  Object.defineProperties(Headers.prototype, {
    append: { enumerable: true },
    delete: { enumerable: true },
    get: { enumerable: true },
    has: { enumerable: true },
    set: { enumerable: true },
    keys: { enumerable: true },
    values: { enumerable: true },
    entries: { enumerable: true },
    forEach: { enumerable: true },
    [Symbol.toStringTag]: { value: "Headers", configurable: true },
    [Symbol.iterator]: { value: Headers.prototype.entries, configurable: true, writable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = Headers;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Headers
  });
};

const Impl = require("../fetch/Headers-impl.js");
