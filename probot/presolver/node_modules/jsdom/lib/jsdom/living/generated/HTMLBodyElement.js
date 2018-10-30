"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");
const WindowEventHandlers = require("./WindowEventHandlers.js");

function HTMLBodyElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLBodyElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLBodyElement, HTMLElement.interface);

Object.defineProperty(HTMLBodyElement, "prototype", {
  value: HTMLBodyElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(HTMLBodyElement.prototype, "text", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("text");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'text' property on 'HTMLBodyElement': The provided value",
      treatNullAsEmptyString: true
    });

    this.setAttribute("text", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "link", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("link");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'link' property on 'HTMLBodyElement': The provided value",
      treatNullAsEmptyString: true
    });

    this.setAttribute("link", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "vLink", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("vLink");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'vLink' property on 'HTMLBodyElement': The provided value",
      treatNullAsEmptyString: true
    });

    this.setAttribute("vLink", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "aLink", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("aLink");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'aLink' property on 'HTMLBodyElement': The provided value",
      treatNullAsEmptyString: true
    });

    this.setAttribute("aLink", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "bgColor", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("bgColor");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'bgColor' property on 'HTMLBodyElement': The provided value",
      treatNullAsEmptyString: true
    });

    this.setAttribute("bgColor", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "background", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("background");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'background' property on 'HTMLBodyElement': The provided value"
    });

    this.setAttribute("background", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "onafterprint", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onafterprint"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onafterprint"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "onbeforeprint", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onbeforeprint"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onbeforeprint"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "onbeforeunload", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onbeforeunload"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onbeforeunload"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "onhashchange", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onhashchange"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onhashchange"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "onlanguagechange", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onlanguagechange"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onlanguagechange"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "onmessage", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onmessage"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onmessage"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "onmessageerror", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onmessageerror"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onmessageerror"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "onoffline", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onoffline"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onoffline"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "ononline", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ononline"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ononline"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "onpagehide", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onpagehide"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onpagehide"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "onpageshow", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onpageshow"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onpageshow"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "onpopstate", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onpopstate"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onpopstate"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "onrejectionhandled", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onrejectionhandled"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onrejectionhandled"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "onstorage", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onstorage"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onstorage"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "onunhandledrejection", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onunhandledrejection"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onunhandledrejection"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, "onunload", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onunload"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onunload"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLBodyElement.prototype, Symbol.toStringTag, {
  value: "HTMLBodyElement",
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
    throw new TypeError(`${context} is not of type 'HTMLBodyElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLBodyElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLBodyElement.prototype);
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
  interface: HTMLBodyElement,
  expose: {
    Window: { HTMLBodyElement }
  }
}; // iface
module.exports = iface;

WindowEventHandlers._mixedIntoPredicates.push(module.exports.is);

const Impl = require("../nodes/HTMLBodyElement-impl.js");
