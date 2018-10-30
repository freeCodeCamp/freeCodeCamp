"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;

const IteratorPrototype = Object.create(utils.IteratorPrototype, {
  next: {
    value: function next() {
      const internal = this[utils.iterInternalSymbol];
      const { target, kind, index } = internal;
      const values = Array.from(target[impl]);
      const len = values.length;
      if (index >= len) {
        return { value: undefined, done: true };
      }

      const pair = values[index];
      internal.index = index + 1;
      const [key, value] = pair.map(utils.tryWrapperForImpl);

      let result;
      switch (kind) {
        case "key":
          result = key;
          break;
        case "value":
          result = value;
          break;
        case "key+value":
          result = [key, value];
          break;
      }
      return { value: result, done: false };
    },
    writable: true,
    enumerable: true,
    configurable: true
  },
  [Symbol.toStringTag]: {
    value: "URLSearchParams Iterator",
    configurable: true
  }
});
class URLSearchParams {
  constructor() {
    const args = [];
    {
      let curArg = arguments[0];
      if (curArg !== undefined) {
        if (utils.isObject(curArg)) {
          if (curArg[Symbol.iterator] !== undefined) {
            if (!utils.isObject(curArg)) {
              throw new TypeError(
                "Failed to construct 'URLSearchParams': parameter 1" + " sequence" + " is not an iterable object."
              );
            } else {
              const V = [];
              const tmp = curArg;
              for (let nextItem of tmp) {
                if (!utils.isObject(nextItem)) {
                  throw new TypeError(
                    "Failed to construct 'URLSearchParams': parameter 1" +
                      " sequence" +
                      "'s element" +
                      " is not an iterable object."
                  );
                } else {
                  const V = [];
                  const tmp = nextItem;
                  for (let nextItem of tmp) {
                    nextItem = conversions["USVString"](nextItem, {
                      context:
                        "Failed to construct 'URLSearchParams': parameter 1" + " sequence" + "'s element" + "'s element"
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
              throw new TypeError(
                "Failed to construct 'URLSearchParams': parameter 1" + " record" + " is not an object."
              );
            } else {
              const result = Object.create(null);
              for (const key of Reflect.ownKeys(curArg)) {
                const desc = Object.getOwnPropertyDescriptor(curArg, key);
                if (desc && desc.enumerable) {
                  let typedKey = key;
                  let typedValue = curArg[key];

                  typedKey = conversions["USVString"](typedKey, {
                    context: "Failed to construct 'URLSearchParams': parameter 1" + " record" + "'s key"
                  });

                  typedValue = conversions["USVString"](typedValue, {
                    context: "Failed to construct 'URLSearchParams': parameter 1" + " record" + "'s value"
                  });

                  result[typedKey] = typedValue;
                }
              }
              curArg = result;
            }
          }
        } else {
          curArg = conversions["USVString"](curArg, { context: "Failed to construct 'URLSearchParams': parameter 1" });
        }
      } else {
        curArg = "";
      }
      args.push(curArg);
    }
    return iface.setup(Object.create(new.target.prototype), args);
  }

  append(name, value) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    if (arguments.length < 2) {
      throw new TypeError(
        "Failed to execute 'append' on 'URLSearchParams': 2 arguments required, but only " +
          arguments.length +
          " present."
      );
    }
    const args = [];
    {
      let curArg = arguments[0];
      curArg = conversions["USVString"](curArg, {
        context: "Failed to execute 'append' on 'URLSearchParams': parameter 1"
      });
      args.push(curArg);
    }
    {
      let curArg = arguments[1];
      curArg = conversions["USVString"](curArg, {
        context: "Failed to execute 'append' on 'URLSearchParams': parameter 2"
      });
      args.push(curArg);
    }
    return this[impl].append(...args);
  }

  delete(name) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    if (arguments.length < 1) {
      throw new TypeError(
        "Failed to execute 'delete' on 'URLSearchParams': 1 argument required, but only " +
          arguments.length +
          " present."
      );
    }
    const args = [];
    {
      let curArg = arguments[0];
      curArg = conversions["USVString"](curArg, {
        context: "Failed to execute 'delete' on 'URLSearchParams': parameter 1"
      });
      args.push(curArg);
    }
    return this[impl].delete(...args);
  }

  get(name) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    if (arguments.length < 1) {
      throw new TypeError(
        "Failed to execute 'get' on 'URLSearchParams': 1 argument required, but only " + arguments.length + " present."
      );
    }
    const args = [];
    {
      let curArg = arguments[0];
      curArg = conversions["USVString"](curArg, {
        context: "Failed to execute 'get' on 'URLSearchParams': parameter 1"
      });
      args.push(curArg);
    }
    return this[impl].get(...args);
  }

  getAll(name) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    if (arguments.length < 1) {
      throw new TypeError(
        "Failed to execute 'getAll' on 'URLSearchParams': 1 argument required, but only " +
          arguments.length +
          " present."
      );
    }
    const args = [];
    {
      let curArg = arguments[0];
      curArg = conversions["USVString"](curArg, {
        context: "Failed to execute 'getAll' on 'URLSearchParams': parameter 1"
      });
      args.push(curArg);
    }
    return utils.tryWrapperForImpl(this[impl].getAll(...args));
  }

  has(name) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    if (arguments.length < 1) {
      throw new TypeError(
        "Failed to execute 'has' on 'URLSearchParams': 1 argument required, but only " + arguments.length + " present."
      );
    }
    const args = [];
    {
      let curArg = arguments[0];
      curArg = conversions["USVString"](curArg, {
        context: "Failed to execute 'has' on 'URLSearchParams': parameter 1"
      });
      args.push(curArg);
    }
    return this[impl].has(...args);
  }

  set(name, value) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    if (arguments.length < 2) {
      throw new TypeError(
        "Failed to execute 'set' on 'URLSearchParams': 2 arguments required, but only " + arguments.length + " present."
      );
    }
    const args = [];
    {
      let curArg = arguments[0];
      curArg = conversions["USVString"](curArg, {
        context: "Failed to execute 'set' on 'URLSearchParams': parameter 1"
      });
      args.push(curArg);
    }
    {
      let curArg = arguments[1];
      curArg = conversions["USVString"](curArg, {
        context: "Failed to execute 'set' on 'URLSearchParams': parameter 2"
      });
      args.push(curArg);
    }
    return this[impl].set(...args);
  }

  sort() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl].sort();
  }

  toString() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl].toString();
  }

  keys() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }
    return module.exports.createDefaultIterator(this, "key");
  }

  values() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }
    return module.exports.createDefaultIterator(this, "value");
  }

  entries() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }
    return module.exports.createDefaultIterator(this, "key+value");
  }

  forEach(callback) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }
    if (arguments.length < 1) {
      throw new TypeError("Failed to execute 'forEach' on 'iterable': 1 argument required, " + "but only 0 present.");
    }
    if (typeof callback !== "function") {
      throw new TypeError(
        "Failed to execute 'forEach' on 'iterable': The callback provided " + "as parameter 1 is not a function."
      );
    }
    const thisArg = arguments[1];
    let pairs = Array.from(this[impl]);
    let i = 0;
    while (i < pairs.length) {
      const [key, value] = pairs[i].map(utils.tryWrapperForImpl);
      callback.call(thisArg, value, key, this);
      pairs = Array.from(this[impl]);
      i++;
    }
  }
}
Object.defineProperties(URLSearchParams.prototype, {
  append: { enumerable: true },
  delete: { enumerable: true },
  get: { enumerable: true },
  getAll: { enumerable: true },
  has: { enumerable: true },
  set: { enumerable: true },
  sort: { enumerable: true },
  toString: { enumerable: true },
  keys: { enumerable: true },
  values: { enumerable: true },
  entries: { enumerable: true },
  forEach: { enumerable: true },
  [Symbol.toStringTag]: { value: "URLSearchParams", configurable: true },
  [Symbol.iterator]: { value: URLSearchParams.prototype.entries, configurable: true, writable: true }
});
const iface = {
  // When an interface-module that implements this interface as a mixin is loaded, it will append its own `.is()`
  // method into this array. It allows objects that directly implements *those* interfaces to be recognized as
  // implementing this mixin interface.
  _mixedIntoPredicates: [],
  is(obj) {
    if (obj) {
      if (utils.hasOwn(obj, impl) && obj[impl] instanceof Impl.implementation) {
        return true;
      }
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(obj)) {
          return true;
        }
      }
    }
    return false;
  },
  isImpl(obj) {
    if (obj) {
      if (obj instanceof Impl.implementation) {
        return true;
      }

      const wrapper = utils.wrapperForImpl(obj);
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(wrapper)) {
          return true;
        }
      }
    }
    return false;
  },
  convert(obj, { context = "The provided value" } = {}) {
    if (module.exports.is(obj)) {
      return utils.implForWrapper(obj);
    }
    throw new TypeError(`${context} is not of type 'URLSearchParams'.`);
  },

  createDefaultIterator(target, kind) {
    const iterator = Object.create(IteratorPrototype);
    Object.defineProperty(iterator, utils.iterInternalSymbol, {
      value: { target, kind, index: 0 },
      configurable: true
    });
    return iterator;
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(URLSearchParams.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(URLSearchParams.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {},
  setup(obj, constructorArgs, privateData) {
    if (!privateData) privateData = {};

    privateData.wrapper = obj;

    this._internalSetup(obj);
    Object.defineProperty(obj, impl, {
      value: new Impl.implementation(constructorArgs, privateData),
      configurable: true
    });

    obj[impl][utils.wrapperSymbol] = obj;
    if (Impl.init) {
      Impl.init(obj[impl], privateData);
    }
    return obj;
  },
  interface: URLSearchParams,
  expose: {
    Window: { URLSearchParams },
    Worker: { URLSearchParams }
  }
}; // iface
module.exports = iface;

const Impl = require("./URLSearchParams-impl.js");
