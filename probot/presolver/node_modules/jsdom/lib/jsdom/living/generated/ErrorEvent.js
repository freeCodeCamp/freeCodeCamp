"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertErrorEventInit = require("./ErrorEventInit.js").convert;
const impl = utils.implSymbol;
const Event = require("./Event.js");

function ErrorEvent(type) {
  if (new.target === undefined) {
    throw new TypeError(
      "Failed to construct 'ErrorEvent'. Please use the 'new' operator; this constructor " +
        "cannot be called as a function."
    );
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to construct 'ErrorEvent': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, { context: "Failed to construct 'ErrorEvent': parameter 1" });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = convertErrorEventInit(curArg, { context: "Failed to construct 'ErrorEvent': parameter 2" });
    args.push(curArg);
  }

  iface.setup(this, args);
}

Object.setPrototypeOf(ErrorEvent.prototype, Event.interface.prototype);
Object.setPrototypeOf(ErrorEvent, Event.interface);

Object.defineProperty(ErrorEvent, "prototype", {
  value: ErrorEvent.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(ErrorEvent.prototype, "message", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["message"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ErrorEvent.prototype, "filename", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["filename"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ErrorEvent.prototype, "lineno", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["lineno"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ErrorEvent.prototype, "colno", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["colno"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ErrorEvent.prototype, "error", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["error"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ErrorEvent.prototype, Symbol.toStringTag, {
  value: "ErrorEvent",
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
    throw new TypeError(`${context} is not of type 'ErrorEvent'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(ErrorEvent.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(ErrorEvent.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    Event._internalSetup(obj);
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
  interface: ErrorEvent,
  expose: {
    Window: { ErrorEvent },
    Worker: { ErrorEvent }
  }
}; // iface
module.exports = iface;

const Impl = require("../events/ErrorEvent-impl.js");
