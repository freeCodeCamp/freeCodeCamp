"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");

function HTMLMeterElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLMeterElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLMeterElement, HTMLElement.interface);

Object.defineProperty(HTMLMeterElement, "prototype", {
  value: HTMLMeterElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(HTMLMeterElement.prototype, "value", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["value"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["double"](V, {
      context: "Failed to set the 'value' property on 'HTMLMeterElement': The provided value"
    });

    this[impl]["value"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMeterElement.prototype, "min", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["min"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["double"](V, {
      context: "Failed to set the 'min' property on 'HTMLMeterElement': The provided value"
    });

    this[impl]["min"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMeterElement.prototype, "max", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["max"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["double"](V, {
      context: "Failed to set the 'max' property on 'HTMLMeterElement': The provided value"
    });

    this[impl]["max"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMeterElement.prototype, "low", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["low"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["double"](V, {
      context: "Failed to set the 'low' property on 'HTMLMeterElement': The provided value"
    });

    this[impl]["low"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMeterElement.prototype, "high", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["high"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["double"](V, {
      context: "Failed to set the 'high' property on 'HTMLMeterElement': The provided value"
    });

    this[impl]["high"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMeterElement.prototype, "optimum", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["optimum"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["double"](V, {
      context: "Failed to set the 'optimum' property on 'HTMLMeterElement': The provided value"
    });

    this[impl]["optimum"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMeterElement.prototype, "labels", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["labels"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMeterElement.prototype, Symbol.toStringTag, {
  value: "HTMLMeterElement",
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
    throw new TypeError(`${context} is not of type 'HTMLMeterElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLMeterElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLMeterElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    HTMLElement._internalSetup(obj);
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
  interface: HTMLMeterElement,
  expose: {
    Window: { HTMLMeterElement }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/HTMLMeterElement-impl.js");
