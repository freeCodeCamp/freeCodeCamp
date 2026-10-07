"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const BlobPropertyBag = require("./BlobPropertyBag.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "Blob";

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
  throw new TypeError(`${context} is not of type 'Blob'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["Blob"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor Blob is not installed on the passed global object");
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
  class Blob {
    constructor() {
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg !== undefined) {
          if (!utils.isObject(curArg)) {
            throw new TypeError("Failed to construct 'Blob': parameter 1" + " is not an iterable object.");
          } else {
            const V = [];
            const tmp = curArg;
            for (let nextItem of tmp) {
              if (exports.is(nextItem)) {
                nextItem = utils.implForWrapper(nextItem);
              } else if (utils.isArrayBuffer(nextItem)) {
              } else if (ArrayBuffer.isView(nextItem)) {
              } else {
                nextItem = conversions["USVString"](nextItem, {
                  context: "Failed to construct 'Blob': parameter 1" + "'s element"
                });
              }
              V.push(nextItem);
            }
            curArg = V;
          }
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = BlobPropertyBag.convert(curArg, { context: "Failed to construct 'Blob': parameter 2" });
        args.push(curArg);
      }
      return exports.setup(Object.create(new.target.prototype), globalObject, args);
    }

    slice() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'slice' called on an object that is not a valid instance of Blob.");
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg !== undefined) {
          curArg = conversions["long long"](curArg, {
            context: "Failed to execute 'slice' on 'Blob': parameter 1",
            clamp: true
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["long long"](curArg, {
            context: "Failed to execute 'slice' on 'Blob': parameter 2",
            clamp: true
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        if (curArg !== undefined) {
          curArg = conversions["DOMString"](curArg, { context: "Failed to execute 'slice' on 'Blob': parameter 3" });
        }
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].slice(...args));
    }

    get size() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get size' called on an object that is not a valid instance of Blob.");
      }

      return esValue[implSymbol]["size"];
    }

    get type() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get type' called on an object that is not a valid instance of Blob.");
      }

      return esValue[implSymbol]["type"];
    }
  }
  Object.defineProperties(Blob.prototype, {
    slice: { enumerable: true },
    size: { enumerable: true },
    type: { enumerable: true },
    [Symbol.toStringTag]: { value: "Blob", configurable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = Blob;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Blob
  });
};

const Impl = require("../file-api/Blob-impl.js");
