"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");
const LinkStyle = require("./LinkStyle.js");

function HTMLLinkElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLLinkElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLLinkElement, HTMLElement.interface);

Object.defineProperty(HTMLLinkElement, "prototype", {
  value: HTMLLinkElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(HTMLLinkElement.prototype, "href", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["href"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, {
      context: "Failed to set the 'href' property on 'HTMLLinkElement': The provided value"
    });

    this[impl]["href"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLLinkElement.prototype, "crossOrigin", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("crossOrigin");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    if (V === null || V === undefined) {
      V = null;
    } else {
      V = conversions["DOMString"](V, {
        context: "Failed to set the 'crossOrigin' property on 'HTMLLinkElement': The provided value"
      });
    }
    this.setAttribute("crossOrigin", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLLinkElement.prototype, "rel", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("rel");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'rel' property on 'HTMLLinkElement': The provided value"
    });

    this.setAttribute("rel", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLLinkElement.prototype, "media", {
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
      context: "Failed to set the 'media' property on 'HTMLLinkElement': The provided value"
    });

    this.setAttribute("media", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLLinkElement.prototype, "hreflang", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("hreflang");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'hreflang' property on 'HTMLLinkElement': The provided value"
    });

    this.setAttribute("hreflang", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLLinkElement.prototype, "type", {
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
      context: "Failed to set the 'type' property on 'HTMLLinkElement': The provided value"
    });

    this.setAttribute("type", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLLinkElement.prototype, "charset", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("charset");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'charset' property on 'HTMLLinkElement': The provided value"
    });

    this.setAttribute("charset", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLLinkElement.prototype, "rev", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("rev");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'rev' property on 'HTMLLinkElement': The provided value"
    });

    this.setAttribute("rev", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLLinkElement.prototype, "target", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("target");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'target' property on 'HTMLLinkElement': The provided value"
    });

    this.setAttribute("target", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLLinkElement.prototype, "sheet", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["sheet"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLLinkElement.prototype, Symbol.toStringTag, {
  value: "HTMLLinkElement",
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
    throw new TypeError(`${context} is not of type 'HTMLLinkElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLLinkElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLLinkElement.prototype);
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
  interface: HTMLLinkElement,
  expose: {
    Window: { HTMLLinkElement }
  }
}; // iface
module.exports = iface;

LinkStyle._mixedIntoPredicates.push(module.exports.is);

const Impl = require("../nodes/HTMLLinkElement-impl.js");
