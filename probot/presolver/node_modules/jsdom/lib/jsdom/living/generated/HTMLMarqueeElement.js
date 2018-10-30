"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");

function HTMLMarqueeElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLMarqueeElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLMarqueeElement, HTMLElement.interface);

Object.defineProperty(HTMLMarqueeElement, "prototype", {
  value: HTMLMarqueeElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(HTMLMarqueeElement.prototype, "behavior", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("behavior");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'behavior' property on 'HTMLMarqueeElement': The provided value"
    });

    this.setAttribute("behavior", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMarqueeElement.prototype, "bgColor", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("bgcolor");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'bgColor' property on 'HTMLMarqueeElement': The provided value"
    });

    this.setAttribute("bgcolor", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMarqueeElement.prototype, "direction", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("direction");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'direction' property on 'HTMLMarqueeElement': The provided value"
    });

    this.setAttribute("direction", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMarqueeElement.prototype, "height", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("height");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'height' property on 'HTMLMarqueeElement': The provided value"
    });

    this.setAttribute("height", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMarqueeElement.prototype, "hspace", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = parseInt(this.getAttribute("hspace"));
    return isNaN(value) || value < 0 || value > 2147483647 ? 0 : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["unsigned long"](V, {
      context: "Failed to set the 'hspace' property on 'HTMLMarqueeElement': The provided value"
    });

    this.setAttribute("hspace", String(V > 2147483647 ? 0 : V));
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMarqueeElement.prototype, "scrollAmount", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = parseInt(this.getAttribute("scrollamount"));
    return isNaN(value) || value < 0 || value > 2147483647 ? 0 : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["unsigned long"](V, {
      context: "Failed to set the 'scrollAmount' property on 'HTMLMarqueeElement': The provided value"
    });

    this.setAttribute("scrollamount", String(V > 2147483647 ? 0 : V));
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMarqueeElement.prototype, "scrollDelay", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = parseInt(this.getAttribute("scrolldelay"));
    return isNaN(value) || value < 0 || value > 2147483647 ? 0 : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["unsigned long"](V, {
      context: "Failed to set the 'scrollDelay' property on 'HTMLMarqueeElement': The provided value"
    });

    this.setAttribute("scrolldelay", String(V > 2147483647 ? 0 : V));
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMarqueeElement.prototype, "trueSpeed", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this.hasAttribute("truespeed");
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'trueSpeed' property on 'HTMLMarqueeElement': The provided value"
    });

    if (V) {
      this.setAttribute("truespeed", "");
    } else {
      this.removeAttribute("truespeed");
    }
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMarqueeElement.prototype, "vspace", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = parseInt(this.getAttribute("vspace"));
    return isNaN(value) || value < 0 || value > 2147483647 ? 0 : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["unsigned long"](V, {
      context: "Failed to set the 'vspace' property on 'HTMLMarqueeElement': The provided value"
    });

    this.setAttribute("vspace", String(V > 2147483647 ? 0 : V));
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMarqueeElement.prototype, "width", {
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
      context: "Failed to set the 'width' property on 'HTMLMarqueeElement': The provided value"
    });

    this.setAttribute("width", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLMarqueeElement.prototype, Symbol.toStringTag, {
  value: "HTMLMarqueeElement",
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
    throw new TypeError(`${context} is not of type 'HTMLMarqueeElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLMarqueeElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLMarqueeElement.prototype);
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
  interface: HTMLMarqueeElement,
  expose: {
    Window: { HTMLMarqueeElement }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/HTMLMarqueeElement-impl.js");
