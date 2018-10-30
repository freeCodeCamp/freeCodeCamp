"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertTouchEventInit = require("./TouchEventInit.js").convert;
const impl = utils.implSymbol;
const UIEvent = require("./UIEvent.js");

function TouchEvent(type) {
  if (new.target === undefined) {
    throw new TypeError(
      "Failed to construct 'TouchEvent'. Please use the 'new' operator; this constructor " +
        "cannot be called as a function."
    );
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to construct 'TouchEvent': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, { context: "Failed to construct 'TouchEvent': parameter 1" });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = convertTouchEventInit(curArg, { context: "Failed to construct 'TouchEvent': parameter 2" });
    args.push(curArg);
  }

  iface.setup(this, args);
}

Object.setPrototypeOf(TouchEvent.prototype, UIEvent.interface.prototype);
Object.setPrototypeOf(TouchEvent, UIEvent.interface);

Object.defineProperty(TouchEvent, "prototype", {
  value: TouchEvent.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(TouchEvent.prototype, "touches", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["touches"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(TouchEvent.prototype, "targetTouches", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["targetTouches"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(TouchEvent.prototype, "changedTouches", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["changedTouches"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(TouchEvent.prototype, "altKey", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["altKey"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(TouchEvent.prototype, "metaKey", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["metaKey"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(TouchEvent.prototype, "ctrlKey", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["ctrlKey"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(TouchEvent.prototype, "shiftKey", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["shiftKey"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(TouchEvent.prototype, Symbol.toStringTag, {
  value: "TouchEvent",
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
    throw new TypeError(`${context} is not of type 'TouchEvent'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(TouchEvent.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(TouchEvent.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    UIEvent._internalSetup(obj);
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
  interface: TouchEvent,
  expose: {
    Window: { TouchEvent }
  }
}; // iface
module.exports = iface;

const Impl = require("../events/TouchEvent-impl.js");
