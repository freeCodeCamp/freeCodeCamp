"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");
const HTMLHyperlinkElementUtils = require("./HTMLHyperlinkElementUtils.js");

function HTMLAreaElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLAreaElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLAreaElement, HTMLElement.interface);

Object.defineProperty(HTMLAreaElement, "prototype", {
  value: HTMLAreaElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(HTMLAreaElement.prototype, "alt", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("alt");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'alt' property on 'HTMLAreaElement': The provided value"
    });

    this.setAttribute("alt", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAreaElement.prototype, "coords", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("coords");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'coords' property on 'HTMLAreaElement': The provided value"
    });

    this.setAttribute("coords", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAreaElement.prototype, "shape", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("shape");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'shape' property on 'HTMLAreaElement': The provided value"
    });

    this.setAttribute("shape", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAreaElement.prototype, "target", {
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
      context: "Failed to set the 'target' property on 'HTMLAreaElement': The provided value"
    });

    this.setAttribute("target", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAreaElement.prototype, "rel", {
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
      context: "Failed to set the 'rel' property on 'HTMLAreaElement': The provided value"
    });

    this.setAttribute("rel", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAreaElement.prototype, "noHref", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this.hasAttribute("noHref");
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'noHref' property on 'HTMLAreaElement': The provided value"
    });

    if (V) {
      this.setAttribute("noHref", "");
    } else {
      this.removeAttribute("noHref");
    }
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAreaElement.prototype, "href", {
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
      context: "Failed to set the 'href' property on 'HTMLAreaElement': The provided value"
    });

    this[impl]["href"] = V;
  },

  enumerable: true,
  configurable: true
});

HTMLAreaElement.prototype.toString = function toString() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return this[impl]["href"];
};

Object.defineProperty(HTMLAreaElement.prototype, "origin", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["origin"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAreaElement.prototype, "protocol", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["protocol"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, {
      context: "Failed to set the 'protocol' property on 'HTMLAreaElement': The provided value"
    });

    this[impl]["protocol"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAreaElement.prototype, "username", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["username"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, {
      context: "Failed to set the 'username' property on 'HTMLAreaElement': The provided value"
    });

    this[impl]["username"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAreaElement.prototype, "password", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["password"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, {
      context: "Failed to set the 'password' property on 'HTMLAreaElement': The provided value"
    });

    this[impl]["password"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAreaElement.prototype, "host", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["host"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, {
      context: "Failed to set the 'host' property on 'HTMLAreaElement': The provided value"
    });

    this[impl]["host"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAreaElement.prototype, "hostname", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["hostname"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, {
      context: "Failed to set the 'hostname' property on 'HTMLAreaElement': The provided value"
    });

    this[impl]["hostname"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAreaElement.prototype, "port", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["port"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, {
      context: "Failed to set the 'port' property on 'HTMLAreaElement': The provided value"
    });

    this[impl]["port"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAreaElement.prototype, "pathname", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["pathname"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, {
      context: "Failed to set the 'pathname' property on 'HTMLAreaElement': The provided value"
    });

    this[impl]["pathname"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAreaElement.prototype, "search", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["search"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, {
      context: "Failed to set the 'search' property on 'HTMLAreaElement': The provided value"
    });

    this[impl]["search"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAreaElement.prototype, "hash", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["hash"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, {
      context: "Failed to set the 'hash' property on 'HTMLAreaElement': The provided value"
    });

    this[impl]["hash"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAreaElement.prototype, Symbol.toStringTag, {
  value: "HTMLAreaElement",
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
    throw new TypeError(`${context} is not of type 'HTMLAreaElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLAreaElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLAreaElement.prototype);
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
  interface: HTMLAreaElement,
  expose: {
    Window: { HTMLAreaElement }
  }
}; // iface
module.exports = iface;

HTMLHyperlinkElementUtils._mixedIntoPredicates.push(module.exports.is);

const Impl = require("../nodes/HTMLAreaElement-impl.js");
