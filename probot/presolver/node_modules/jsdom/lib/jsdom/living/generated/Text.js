"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const CharacterData = require("./CharacterData.js");

function Text() {
  if (new.target === undefined) {
    throw new TypeError(
      "Failed to construct 'Text'. Please use the 'new' operator; this constructor " + "cannot be called as a function."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    if (curArg !== undefined) {
      curArg = conversions["DOMString"](curArg, { context: "Failed to construct 'Text': parameter 1" });
    } else {
      curArg = "";
    }
    args.push(curArg);
  }

  iface.setup(this, args);
}

Object.setPrototypeOf(Text.prototype, CharacterData.interface.prototype);
Object.setPrototypeOf(Text, CharacterData.interface);

Object.defineProperty(Text, "prototype", {
  value: Text.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Text.prototype.splitText = function splitText(offset) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'splitText' on 'Text': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["unsigned long"](curArg, { context: "Failed to execute 'splitText' on 'Text': parameter 1" });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].splitText(...args));
};

Object.defineProperty(Text.prototype, "wholeText", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["wholeText"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Text.prototype, Symbol.toStringTag, {
  value: "Text",
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
    throw new TypeError(`${context} is not of type 'Text'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(Text.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(Text.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    CharacterData._internalSetup(obj);
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
  interface: Text,
  expose: {
    Window: { Text }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/Text-impl.js");
