"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertWheelEventInit = require("./WheelEventInit.js").convert;
const impl = utils.implSymbol;
const MouseEvent = require("./MouseEvent.js");

function WheelEvent(type) {
  if (new.target === undefined) {
    throw new TypeError(
      "Failed to construct 'WheelEvent'. Please use the 'new' operator; this constructor " +
        "cannot be called as a function."
    );
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to construct 'WheelEvent': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, { context: "Failed to construct 'WheelEvent': parameter 1" });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = convertWheelEventInit(curArg, { context: "Failed to construct 'WheelEvent': parameter 2" });
    args.push(curArg);
  }

  iface.setup(this, args);
}

Object.setPrototypeOf(WheelEvent.prototype, MouseEvent.interface.prototype);
Object.setPrototypeOf(WheelEvent, MouseEvent.interface);

Object.defineProperty(WheelEvent, "prototype", {
  value: WheelEvent.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(WheelEvent.prototype, "deltaX", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["deltaX"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(WheelEvent.prototype, "deltaY", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["deltaY"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(WheelEvent.prototype, "deltaZ", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["deltaZ"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(WheelEvent.prototype, "deltaMode", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["deltaMode"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(WheelEvent, "DOM_DELTA_PIXEL", {
  value: 0x00,
  enumerable: true
});
Object.defineProperty(WheelEvent.prototype, "DOM_DELTA_PIXEL", {
  value: 0x00,
  enumerable: true
});

Object.defineProperty(WheelEvent, "DOM_DELTA_LINE", {
  value: 0x01,
  enumerable: true
});
Object.defineProperty(WheelEvent.prototype, "DOM_DELTA_LINE", {
  value: 0x01,
  enumerable: true
});

Object.defineProperty(WheelEvent, "DOM_DELTA_PAGE", {
  value: 0x02,
  enumerable: true
});
Object.defineProperty(WheelEvent.prototype, "DOM_DELTA_PAGE", {
  value: 0x02,
  enumerable: true
});

Object.defineProperty(WheelEvent.prototype, Symbol.toStringTag, {
  value: "WheelEvent",
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
    throw new TypeError(`${context} is not of type 'WheelEvent'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(WheelEvent.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(WheelEvent.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    MouseEvent._internalSetup(obj);
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
  interface: WheelEvent,
  expose: {
    Window: { WheelEvent }
  }
}; // iface
module.exports = iface;

const Impl = require("../events/WheelEvent-impl.js");
