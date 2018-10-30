"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");
const HTMLHyperlinkElementUtils = require("./HTMLHyperlinkElementUtils.js");

function HTMLAnchorElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLAnchorElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLAnchorElement, HTMLElement.interface);

Object.defineProperty(HTMLAnchorElement, "prototype", {
  value: HTMLAnchorElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(HTMLAnchorElement.prototype, "target", {
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
      context: "Failed to set the 'target' property on 'HTMLAnchorElement': The provided value"
    });

    this.setAttribute("target", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "download", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("download");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'download' property on 'HTMLAnchorElement': The provided value"
    });

    this.setAttribute("download", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "rel", {
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
      context: "Failed to set the 'rel' property on 'HTMLAnchorElement': The provided value"
    });

    this.setAttribute("rel", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "hreflang", {
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
      context: "Failed to set the 'hreflang' property on 'HTMLAnchorElement': The provided value"
    });

    this.setAttribute("hreflang", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "type", {
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
      context: "Failed to set the 'type' property on 'HTMLAnchorElement': The provided value"
    });

    this.setAttribute("type", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "text", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["text"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'text' property on 'HTMLAnchorElement': The provided value"
    });

    this[impl]["text"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "coords", {
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
      context: "Failed to set the 'coords' property on 'HTMLAnchorElement': The provided value"
    });

    this.setAttribute("coords", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "charset", {
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
      context: "Failed to set the 'charset' property on 'HTMLAnchorElement': The provided value"
    });

    this.setAttribute("charset", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "name", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("name");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'name' property on 'HTMLAnchorElement': The provided value"
    });

    this.setAttribute("name", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "rev", {
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
      context: "Failed to set the 'rev' property on 'HTMLAnchorElement': The provided value"
    });

    this.setAttribute("rev", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "shape", {
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
      context: "Failed to set the 'shape' property on 'HTMLAnchorElement': The provided value"
    });

    this.setAttribute("shape", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "href", {
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
      context: "Failed to set the 'href' property on 'HTMLAnchorElement': The provided value"
    });

    this[impl]["href"] = V;
  },

  enumerable: true,
  configurable: true
});

HTMLAnchorElement.prototype.toString = function toString() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return this[impl]["href"];
};

Object.defineProperty(HTMLAnchorElement.prototype, "origin", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["origin"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "protocol", {
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
      context: "Failed to set the 'protocol' property on 'HTMLAnchorElement': The provided value"
    });

    this[impl]["protocol"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "username", {
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
      context: "Failed to set the 'username' property on 'HTMLAnchorElement': The provided value"
    });

    this[impl]["username"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "password", {
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
      context: "Failed to set the 'password' property on 'HTMLAnchorElement': The provided value"
    });

    this[impl]["password"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "host", {
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
      context: "Failed to set the 'host' property on 'HTMLAnchorElement': The provided value"
    });

    this[impl]["host"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "hostname", {
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
      context: "Failed to set the 'hostname' property on 'HTMLAnchorElement': The provided value"
    });

    this[impl]["hostname"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "port", {
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
      context: "Failed to set the 'port' property on 'HTMLAnchorElement': The provided value"
    });

    this[impl]["port"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "pathname", {
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
      context: "Failed to set the 'pathname' property on 'HTMLAnchorElement': The provided value"
    });

    this[impl]["pathname"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "search", {
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
      context: "Failed to set the 'search' property on 'HTMLAnchorElement': The provided value"
    });

    this[impl]["search"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, "hash", {
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
      context: "Failed to set the 'hash' property on 'HTMLAnchorElement': The provided value"
    });

    this[impl]["hash"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLAnchorElement.prototype, Symbol.toStringTag, {
  value: "HTMLAnchorElement",
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
    throw new TypeError(`${context} is not of type 'HTMLAnchorElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLAnchorElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLAnchorElement.prototype);
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
  interface: HTMLAnchorElement,
  expose: {
    Window: { HTMLAnchorElement }
  }
}; // iface
module.exports = iface;

HTMLHyperlinkElementUtils._mixedIntoPredicates.push(module.exports.is);

const Impl = require("../nodes/HTMLAnchorElement-impl.js");
