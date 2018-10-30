"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");

function HTMLHRElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLHRElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLHRElement, HTMLElement.interface);

Object.defineProperty(HTMLHRElement, "prototype", {
  value: HTMLHRElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(HTMLHRElement.prototype, "align", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("align");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'align' property on 'HTMLHRElement': The provided value"
    });

    this.setAttribute("align", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLHRElement.prototype, "color", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("color");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'color' property on 'HTMLHRElement': The provided value"
    });

    this.setAttribute("color", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLHRElement.prototype, "noShade", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this.hasAttribute("noShade");
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'noShade' property on 'HTMLHRElement': The provided value"
    });

    if (V) {
      this.setAttribute("noShade", "");
    } else {
      this.removeAttribute("noShade");
    }
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLHRElement.prototype, "size", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("size");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'size' property on 'HTMLHRElement': The provided value"
    });

    this.setAttribute("size", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLHRElement.prototype, "width", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("width");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'width' property on 'HTMLHRElement': The provided value"
    });

    this.setAttribute("width", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLHRElement.prototype, Symbol.toStringTag, {
  value: "HTMLHRElement",
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
    throw new TypeError(`${context} is not of type 'HTMLHRElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLHRElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLHRElement.prototype);
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
  interface: HTMLHRElement,
  expose: {
    Window: { HTMLHRElement }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/HTMLHRElement-impl.js");
