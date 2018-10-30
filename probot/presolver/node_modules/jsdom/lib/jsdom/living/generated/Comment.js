"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const CharacterData = require("./CharacterData.js");

function Comment() {
  if (new.target === undefined) {
    throw new TypeError(
      "Failed to construct 'Comment'. Please use the 'new' operator; this constructor " +
        "cannot be called as a function."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    if (curArg !== undefined) {
      curArg = conversions["DOMString"](curArg, { context: "Failed to construct 'Comment': parameter 1" });
    } else {
      curArg = "";
    }
    args.push(curArg);
  }

  iface.setup(this, args);
}

Object.setPrototypeOf(Comment.prototype, CharacterData.interface.prototype);
Object.setPrototypeOf(Comment, CharacterData.interface);

Object.defineProperty(Comment, "prototype", {
  value: Comment.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(Comment.prototype, Symbol.toStringTag, {
  value: "Comment",
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
    throw new TypeError(`${context} is not of type 'Comment'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(Comment.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(Comment.prototype);
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
  interface: Comment,
  expose: {
    Window: { Comment }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/Comment-impl.js");
