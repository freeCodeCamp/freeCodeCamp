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
    value: "URLSearchParamsIterator",
    writable: false,
    enumerable: false,
    configurable: true
  }
});

function URLSearchParams() {
  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }

  if (args[0] !== undefined) {
    if (utils.isObject(args[0])) {
      if (args[0][Symbol.iterator] !== undefined) {
        if (!utils.isObject(args[0])) {
          throw new TypeError(
            "Failed to construct 'URLSearchParams': parameter 1" + " sequence" + " is not an iterable object."
          );
        } else {
          const V = [];
          const tmp = args[0];
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
          args[0] = V;
        }
      } else {
        if (!utils.isObject(args[0])) {
          throw new TypeError("Failed to construct 'URLSearchParams': parameter 1" + " record" + " is not an object.");
        } else {
          const result = Object.create(null);
          for (const key of Reflect.ownKeys(args[0])) {
            const desc = Object.getOwnPropertyDescriptor(args[0], key);
            if (desc && desc.enumerable) {
              let typedKey = key;
              let typedValue = args[0][key];

              typedKey = conversions["USVString"](typedKey, {
                context: "Failed to construct 'URLSearchParams': parameter 1" + " record" + "'s key"
              });

              typedValue = conversions["USVString"](typedValue, {
                context: "Failed to construct 'URLSearchParams': parameter 1" + " record" + "'s value"
              });

              result[typedKey] = typedValue;
            }
          }
          args[0] = result;
        }
      }
    } else {
      args[0] = conversions["USVString"](args[0], { context: "Failed to construct 'URLSearchParams': parameter 1" });
    }
  } else {
    args[0] = "";
  }

  iface.setup(this, args);
}

Object.defineProperty(URLSearchParams, "prototype", {
  value: URLSearchParams.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(URLSearchParams.prototype, Symbol.iterator, {
  writable: true,
  enumerable: false,
  configurable: true,
  value: function entries() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }
    return module.exports.createDefaultIterator(this, "key+value");
  }
});
URLSearchParams.prototype.forEach = function forEach(callback) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'forEach' on 'URLSearchParams': 1 argument required, " + "but only 0 present."
    );
  }
  if (typeof callback !== "function") {
    throw new TypeError(
      "Failed to execute 'forEach' on 'URLSearchParams': The callback provided " + "as parameter 1 is not a function."
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
};
URLSearchParams.prototype.append = function append(name, value) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'append' on 'URLSearchParams': 2 " +
        "arguments required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = arguments[i];
  }

  args[0] = conversions["USVString"](args[0], {
    context: "Failed to execute 'append' on 'URLSearchParams': parameter 1"
  });

  args[1] = conversions["USVString"](args[1], {
    context: "Failed to execute 'append' on 'URLSearchParams': parameter 2"
  });

  return this[impl].append(...args);
};

URLSearchParams.prototype.delete = function _(name) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'delete' on 'URLSearchParams': 1 " +
        "argument required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }

  args[0] = conversions["USVString"](args[0], {
    context: "Failed to execute 'delete' on 'URLSearchParams': parameter 1"
  });

  return this[impl].delete(...args);
};

URLSearchParams.prototype.get = function get(name) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'get' on 'URLSearchParams': 1 " +
        "argument required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }

  args[0] = conversions["USVString"](args[0], { context: "Failed to execute 'get' on 'URLSearchParams': parameter 1" });

  return this[impl].get(...args);
};

URLSearchParams.prototype.getAll = function getAll(name) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'getAll' on 'URLSearchParams': 1 " +
        "argument required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }

  args[0] = conversions["USVString"](args[0], {
    context: "Failed to execute 'getAll' on 'URLSearchParams': parameter 1"
  });

  return utils.tryWrapperForImpl(this[impl].getAll(...args));
};

URLSearchParams.prototype.has = function has(name) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'has' on 'URLSearchParams': 1 " +
        "argument required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }

  args[0] = conversions["USVString"](args[0], { context: "Failed to execute 'has' on 'URLSearchParams': parameter 1" });

  return this[impl].has(...args);
};

URLSearchParams.prototype.set = function set(name, value) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'set' on 'URLSearchParams': 2 " +
        "arguments required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = arguments[i];
  }

  args[0] = conversions["USVString"](args[0], { context: "Failed to execute 'set' on 'URLSearchParams': parameter 1" });

  args[1] = conversions["USVString"](args[1], { context: "Failed to execute 'set' on 'URLSearchParams': parameter 2" });

  return this[impl].set(...args);
};

URLSearchParams.prototype.sort = function sort() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].sort();
};

URLSearchParams.prototype.toString = function toString() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].toString();
};

URLSearchParams.prototype.entries = URLSearchParams.prototype[Symbol.iterator];

URLSearchParams.prototype.keys = function keys() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return module.exports.createDefaultIterator(this, "key");
};

URLSearchParams.prototype.values = function values() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return module.exports.createDefaultIterator(this, "value");
};

Object.defineProperty(URLSearchParams.prototype, Symbol.toStringTag, {
  value: "URLSearchParams",
  writable: false,
  enumerable: false,
  configurable: true
});

const iface = {
  mixedInto: [],
  is(obj) {
    if (obj) {
      if (obj[impl] instanceof Impl.implementation) {
        return true;
      }
      for (let i = 0; i < module.exports.mixedInto.length; ++i) {
        if (obj instanceof module.exports.mixedInto[i]) {
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
      for (let i = 0; i < module.exports.mixedInto.length; ++i) {
        if (wrapper instanceof module.exports.mixedInto[i]) {
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
      writable: false,
      enumerable: false,
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
      writable: false,
      enumerable: false,
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

const Impl = require(".//URLSearchParams-impl.js");
