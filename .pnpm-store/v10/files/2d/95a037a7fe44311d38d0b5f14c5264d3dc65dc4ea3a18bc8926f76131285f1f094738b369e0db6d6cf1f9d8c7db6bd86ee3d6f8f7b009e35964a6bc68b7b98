"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const HTMLFormElement = require("./HTMLFormElement.js");
const HTMLElement = require("./HTMLElement.js");
const Blob = require("./Blob.js");
const Function = require("./Function.js");
const newObjectInRealm = utils.newObjectInRealm;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "FormData";

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
  throw new globalObject.TypeError(`${context} is not of type 'FormData'.`);
};

exports.createDefaultIterator = (globalObject, target, kind) => {
  const ctorRegistry = globalObject[ctorRegistrySymbol];
  const iteratorPrototype = ctorRegistry["FormData Iterator"];
  const iterator = Object.create(iteratorPrototype);
  Object.defineProperty(iterator, utils.iterInternalSymbol, {
    value: { target, kind, index: 0 },
    configurable: true
  });
  return iterator;
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["FormData"].prototype;
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

const exposed = new Set(["Window", "Worker"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class FormData {
    constructor() {
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg !== undefined) {
          curArg = HTMLFormElement.convert(globalObject, curArg, {
            context: "Failed to construct 'FormData': parameter 1"
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          if (curArg === null || curArg === undefined) {
            curArg = null;
          } else {
            curArg = HTMLElement.convert(globalObject, curArg, {
              context: "Failed to construct 'FormData': parameter 2"
            });
          }
        } else {
          curArg = null;
        }
        args.push(curArg);
      }
      return exports.setup(Object.create(new.target.prototype), globalObject, args);
    }

    append(name, value) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'append' called on an object that is not a valid instance of FormData.");
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'append' on 'FormData': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      switch (arguments.length) {
        case 2:
          {
            let curArg = arguments[0];
            curArg = conversions["USVString"](curArg, {
              context: "Failed to execute 'append' on 'FormData': parameter 1",
              globals: globalObject
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[1];
            if (Blob.is(curArg)) {
              {
                let curArg = arguments[1];
                curArg = Blob.convert(globalObject, curArg, {
                  context: "Failed to execute 'append' on 'FormData': parameter 2"
                });
                args.push(curArg);
              }
            } else {
              {
                let curArg = arguments[1];
                curArg = conversions["USVString"](curArg, {
                  context: "Failed to execute 'append' on 'FormData': parameter 2",
                  globals: globalObject
                });
                args.push(curArg);
              }
            }
          }
          break;
        default:
          {
            let curArg = arguments[0];
            curArg = conversions["USVString"](curArg, {
              context: "Failed to execute 'append' on 'FormData': parameter 1",
              globals: globalObject
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[1];
            curArg = Blob.convert(globalObject, curArg, {
              context: "Failed to execute 'append' on 'FormData': parameter 2"
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[2];
            if (curArg !== undefined) {
              curArg = conversions["USVString"](curArg, {
                context: "Failed to execute 'append' on 'FormData': parameter 3",
                globals: globalObject
              });
            }
            args.push(curArg);
          }
      }
      return esValue[implSymbol].append(...args);
    }

    delete(name) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'delete' called on an object that is not a valid instance of FormData.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'delete' on 'FormData': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["USVString"](curArg, {
          context: "Failed to execute 'delete' on 'FormData': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].delete(...args);
    }

    get(name) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get' called on an object that is not a valid instance of FormData.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'get' on 'FormData': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["USVString"](curArg, {
          context: "Failed to execute 'get' on 'FormData': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].get(...args));
    }

    getAll(name) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'getAll' called on an object that is not a valid instance of FormData.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'getAll' on 'FormData': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["USVString"](curArg, {
          context: "Failed to execute 'getAll' on 'FormData': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getAll(...args));
    }

    has(name) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'has' called on an object that is not a valid instance of FormData.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'has' on 'FormData': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["USVString"](curArg, {
          context: "Failed to execute 'has' on 'FormData': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].has(...args);
    }

    set(name, value) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'set' called on an object that is not a valid instance of FormData.");
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'set' on 'FormData': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      switch (arguments.length) {
        case 2:
          {
            let curArg = arguments[0];
            curArg = conversions["USVString"](curArg, {
              context: "Failed to execute 'set' on 'FormData': parameter 1",
              globals: globalObject
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[1];
            if (Blob.is(curArg)) {
              {
                let curArg = arguments[1];
                curArg = Blob.convert(globalObject, curArg, {
                  context: "Failed to execute 'set' on 'FormData': parameter 2"
                });
                args.push(curArg);
              }
            } else {
              {
                let curArg = arguments[1];
                curArg = conversions["USVString"](curArg, {
                  context: "Failed to execute 'set' on 'FormData': parameter 2",
                  globals: globalObject
                });
                args.push(curArg);
              }
            }
          }
          break;
        default:
          {
            let curArg = arguments[0];
            curArg = conversions["USVString"](curArg, {
              context: "Failed to execute 'set' on 'FormData': parameter 1",
              globals: globalObject
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[1];
            curArg = Blob.convert(globalObject, curArg, {
              context: "Failed to execute 'set' on 'FormData': parameter 2"
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[2];
            if (curArg !== undefined) {
              curArg = conversions["USVString"](curArg, {
                context: "Failed to execute 'set' on 'FormData': parameter 3",
                globals: globalObject
              });
            }
            args.push(curArg);
          }
      }
      return esValue[implSymbol].set(...args);
    }

    keys() {
      if (!exports.is(this)) {
        throw new globalObject.TypeError("'keys' called on an object that is not a valid instance of FormData.");
      }
      return exports.createDefaultIterator(globalObject, this, "key");
    }

    values() {
      if (!exports.is(this)) {
        throw new globalObject.TypeError("'values' called on an object that is not a valid instance of FormData.");
      }
      return exports.createDefaultIterator(globalObject, this, "value");
    }

    entries() {
      if (!exports.is(this)) {
        throw new globalObject.TypeError("'entries' called on an object that is not a valid instance of FormData.");
      }
      return exports.createDefaultIterator(globalObject, this, "key+value");
    }

    forEach(callback) {
      if (!exports.is(this)) {
        throw new globalObject.TypeError("'forEach' called on an object that is not a valid instance of FormData.");
      }
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          "Failed to execute 'forEach' on 'iterable': 1 argument required, but only 0 present."
        );
      }
      callback = Function.convert(globalObject, callback, {
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
  Object.defineProperties(FormData.prototype, {
    append: { enumerable: true },
    delete: { enumerable: true },
    get: { enumerable: true },
    getAll: { enumerable: true },
    has: { enumerable: true },
    set: { enumerable: true },
    keys: { enumerable: true },
    values: { enumerable: true },
    entries: { enumerable: true },
    forEach: { enumerable: true },
    [Symbol.toStringTag]: { value: "FormData", configurable: true },
    [Symbol.iterator]: { value: FormData.prototype.entries, configurable: true, writable: true }
  });
  ctorRegistry[interfaceName] = FormData;

  ctorRegistry["FormData Iterator"] = Object.create(ctorRegistry["%IteratorPrototype%"], {
    [Symbol.toStringTag]: {
      configurable: true,
      value: "FormData Iterator"
    }
  });
  utils.define(ctorRegistry["FormData Iterator"], {
    next() {
      const internal = this && this[utils.iterInternalSymbol];
      if (!internal) {
        throw new globalObject.TypeError("next() called on a value that is not a FormData iterator object");
      }

      const { target, kind, index } = internal;
      const values = Array.from(target[implSymbol]);
      const len = values.length;
      if (index >= len) {
        return newObjectInRealm(globalObject, { value: undefined, done: true });
      }

      const pair = values[index];
      internal.index = index + 1;
      return newObjectInRealm(globalObject, utils.iteratorResult(pair.map(utils.tryWrapperForImpl), kind));
    }
  });

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: FormData
  });
};

const Impl = require("../xhr/FormData-impl.js");
