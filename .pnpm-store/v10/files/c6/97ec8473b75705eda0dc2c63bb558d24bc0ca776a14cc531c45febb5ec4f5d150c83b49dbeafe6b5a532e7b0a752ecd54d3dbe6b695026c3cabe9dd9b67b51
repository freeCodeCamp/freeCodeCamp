"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const Blob = require("./Blob.js");
const FilePropertyBag = require("./FilePropertyBag.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "File";

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
  throw new globalObject.TypeError(`${context} is not of type 'File'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["File"].prototype;
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
  Blob._internalSetup(wrapper, globalObject);
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

const exposed = new Set(["Window", "Worker"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class File extends globalObject.Blob {
    constructor(fileBits, fileName) {
      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (!utils.isObject(curArg)) {
          throw new globalObject.TypeError("Failed to construct 'File': parameter 1" + " is not an iterable object.");
        } else {
          const V = [];
          const tmp = curArg;
          for (let nextItem of tmp) {
            if (Blob.is(nextItem)) {
              nextItem = utils.implForWrapper(nextItem);
            } else if (utils.isArrayBuffer(nextItem)) {
            } else if (ArrayBuffer.isView(nextItem)) {
            } else {
              nextItem = conversions["USVString"](nextItem, {
                context: "Failed to construct 'File': parameter 1" + "'s element",
                globals: globalObject
              });
            }
            V.push(nextItem);
          }
          curArg = V;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["USVString"](curArg, {
          context: "Failed to construct 'File': parameter 2",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        curArg = FilePropertyBag.convert(globalObject, curArg, { context: "Failed to construct 'File': parameter 3" });
        args.push(curArg);
      }
      return exports.setup(Object.create(new.target.prototype), globalObject, args);
    }

    get name() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get name' called on an object that is not a valid instance of File.");
      }

      return esValue[implSymbol]["name"];
    }

    get lastModified() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get lastModified' called on an object that is not a valid instance of File."
        );
      }

      return esValue[implSymbol]["lastModified"];
    }
  }
  Object.defineProperties(File.prototype, {
    name: { enumerable: true },
    lastModified: { enumerable: true },
    [Symbol.toStringTag]: { value: "File", configurable: true }
  });
  ctorRegistry[interfaceName] = File;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: File
  });
};

const Impl = require("../file-api/File-impl.js");
