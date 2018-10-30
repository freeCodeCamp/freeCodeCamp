"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const isBlob = require("./Blob.js").is;
const convertFilePropertyBag = require("./FilePropertyBag.js").convert;
const impl = utils.implSymbol;
const Blob = require("./Blob.js");

function File(fileBits, fileName) {
  if (new.target === undefined) {
    throw new TypeError(
      "Failed to construct 'File'. Please use the 'new' operator; this constructor " + "cannot be called as a function."
    );
  }

  if (arguments.length < 2) {
    throw new TypeError("Failed to construct 'File': 2 arguments required, but only " + arguments.length + " present.");
  }
  const args = [];
  {
    let curArg = arguments[0];
    if (!utils.isObject(curArg)) {
      throw new TypeError("Failed to construct 'File': parameter 1" + " is not an iterable object.");
    } else {
      const V = [];
      const tmp = curArg;
      for (let nextItem of tmp) {
        if (isBlob(nextItem)) {
          nextItem = utils.implForWrapper(nextItem);
        } else if (nextItem instanceof ArrayBuffer) {
        } else if (ArrayBuffer.isView(nextItem)) {
        } else {
          nextItem = conversions["USVString"](nextItem, {
            context: "Failed to construct 'File': parameter 1" + "'s element"
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
    curArg = conversions["USVString"](curArg, { context: "Failed to construct 'File': parameter 2" });
    args.push(curArg);
  }
  {
    let curArg = arguments[2];
    curArg = convertFilePropertyBag(curArg, { context: "Failed to construct 'File': parameter 3" });
    args.push(curArg);
  }

  iface.setup(this, args);
}

Object.setPrototypeOf(File.prototype, Blob.interface.prototype);
Object.setPrototypeOf(File, Blob.interface);

Object.defineProperty(File, "prototype", {
  value: File.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(File.prototype, "name", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["name"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(File.prototype, "lastModified", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["lastModified"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(File.prototype, Symbol.toStringTag, {
  value: "File",
  writable: false,
  enumerable: false,
  configurable: true
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
    throw new TypeError(`${context} is not of type 'File'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(File.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(File.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    Blob._internalSetup(obj);
  },
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
  interface: File,
  expose: {
    Window: { File },
    Worker: { File }
  }
}; // iface
module.exports = iface;

const Impl = require("../file-api/File-impl.js");
