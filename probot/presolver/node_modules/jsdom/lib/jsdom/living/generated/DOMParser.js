"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertSupportedType = require("./SupportedType.js").convert;
const impl = utils.implSymbol;

function DOMParser() {
  if (new.target === undefined) {
    throw new TypeError(
      "Failed to construct 'DOMParser'. Please use the 'new' operator; this constructor " +
        "cannot be called as a function."
    );
  }

  iface.setup(this);
}

Object.defineProperty(DOMParser, "prototype", {
  value: DOMParser.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

DOMParser.prototype.parseFromString = function parseFromString(str, type) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'parseFromString' on 'DOMParser': 2 arguments required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'parseFromString' on 'DOMParser': parameter 1"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = convertSupportedType(curArg, {
      context: "Failed to execute 'parseFromString' on 'DOMParser': parameter 2"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].parseFromString(...args));
};

Object.defineProperty(DOMParser.prototype, Symbol.toStringTag, {
  value: "DOMParser",
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
    throw new TypeError(`${context} is not of type 'DOMParser'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(DOMParser.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(DOMParser.prototype);
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
  interface: DOMParser,
  expose: {
    Window: { DOMParser }
  }
}; // iface
module.exports = iface;

const Impl = require("../domparsing/DOMParser-impl.js");
