"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");

function HTMLSourceElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLSourceElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLSourceElement, HTMLElement.interface);

Object.defineProperty(HTMLSourceElement, "prototype", {
  value: HTMLSourceElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(HTMLSourceElement.prototype, "src", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["src"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, {
      context: "Failed to set the 'src' property on 'HTMLSourceElement': The provided value"
    });

    this[impl]["src"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSourceElement.prototype, "type", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("type");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'type' property on 'HTMLSourceElement': The provided value"
    });

    this.setAttribute("type", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSourceElement.prototype, "srcset", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["srcset"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, {
      context: "Failed to set the 'srcset' property on 'HTMLSourceElement': The provided value"
    });

    this[impl]["srcset"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSourceElement.prototype, "sizes", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("sizes");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'sizes' property on 'HTMLSourceElement': The provided value"
    });

    this.setAttribute("sizes", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSourceElement.prototype, "media", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("media");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'media' property on 'HTMLSourceElement': The provided value"
    });

    this.setAttribute("media", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSourceElement.prototype, Symbol.toStringTag, {
  value: "HTMLSourceElement",
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
    throw new TypeError(`${context} is not of type 'HTMLSourceElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLSourceElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLSourceElement.prototype);
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
  interface: HTMLSourceElement,
  expose: {
    Window: { HTMLSourceElement }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/HTMLSourceElement-impl.js");
