"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");

function HTMLFrameElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLFrameElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLFrameElement, HTMLElement.interface);

Object.defineProperty(HTMLFrameElement, "prototype", {
  value: HTMLFrameElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(HTMLFrameElement.prototype, "name", {
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
      context: "Failed to set the 'name' property on 'HTMLFrameElement': The provided value"
    });

    this.setAttribute("name", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLFrameElement.prototype, "scrolling", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("scrolling");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'scrolling' property on 'HTMLFrameElement': The provided value"
    });

    this.setAttribute("scrolling", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLFrameElement.prototype, "src", {
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
      context: "Failed to set the 'src' property on 'HTMLFrameElement': The provided value"
    });

    this[impl]["src"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLFrameElement.prototype, "frameBorder", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("frameBorder");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'frameBorder' property on 'HTMLFrameElement': The provided value"
    });

    this.setAttribute("frameBorder", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLFrameElement.prototype, "longDesc", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["longDesc"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, {
      context: "Failed to set the 'longDesc' property on 'HTMLFrameElement': The provided value"
    });

    this[impl]["longDesc"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLFrameElement.prototype, "noResize", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this.hasAttribute("noResize");
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'noResize' property on 'HTMLFrameElement': The provided value"
    });

    if (V) {
      this.setAttribute("noResize", "");
    } else {
      this.removeAttribute("noResize");
    }
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLFrameElement.prototype, "contentDocument", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["contentDocument"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLFrameElement.prototype, "contentWindow", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["contentWindow"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLFrameElement.prototype, "marginHeight", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("marginHeight");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'marginHeight' property on 'HTMLFrameElement': The provided value",
      treatNullAsEmptyString: true
    });

    this.setAttribute("marginHeight", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLFrameElement.prototype, "marginWidth", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("marginWidth");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'marginWidth' property on 'HTMLFrameElement': The provided value",
      treatNullAsEmptyString: true
    });

    this.setAttribute("marginWidth", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLFrameElement.prototype, Symbol.toStringTag, {
  value: "HTMLFrameElement",
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
    throw new TypeError(`${context} is not of type 'HTMLFrameElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLFrameElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLFrameElement.prototype);
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
  interface: HTMLFrameElement,
  expose: {
    Window: { HTMLFrameElement }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/HTMLFrameElement-impl.js");
