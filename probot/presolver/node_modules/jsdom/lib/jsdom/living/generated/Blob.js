"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertBlobPropertyBag = require("./BlobPropertyBag.js").convert;
const impl = utils.implSymbol;

function Blob() {
  if (new.target === undefined) {
    throw new TypeError(
      "Failed to construct 'Blob'. Please use the 'new' operator; this constructor " + "cannot be called as a function."
    );
  }
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
          if (module.exports.is(nextItem)) {
            nextItem = utils.implForWrapper(nextItem);
          } else if (nextItem instanceof ArrayBuffer) {
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
    curArg = convertBlobPropertyBag(curArg, { context: "Failed to construct 'Blob': parameter 2" });
    args.push(curArg);
  }

  iface.setup(this, args);
}

Object.defineProperty(Blob, "prototype", {
  value: Blob.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Blob.prototype.slice = function slice() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
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
  return utils.tryWrapperForImpl(this[impl].slice(...args));
};

Object.defineProperty(Blob.prototype, "size", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["size"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Blob.prototype, "type", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["type"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
  value: "Blob",
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
    throw new TypeError(`${context} is not of type 'Blob'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(Blob.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(Blob.prototype);
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
  interface: Blob,
  expose: {
    Window: { Blob },
    Worker: { Blob }
  }
}; // iface
module.exports = iface;

const Impl = require("../file-api/Blob-impl.js");
