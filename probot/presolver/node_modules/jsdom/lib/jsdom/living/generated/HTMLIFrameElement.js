"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");

function HTMLIFrameElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLIFrameElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLIFrameElement, HTMLElement.interface);

Object.defineProperty(HTMLIFrameElement, "prototype", {
  value: HTMLIFrameElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

HTMLIFrameElement.prototype.getSVGDocument = function getSVGDocument() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return utils.tryWrapperForImpl(this[impl].getSVGDocument());
};

Object.defineProperty(HTMLIFrameElement.prototype, "src", {
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
      context: "Failed to set the 'src' property on 'HTMLIFrameElement': The provided value"
    });

    this[impl]["src"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLIFrameElement.prototype, "srcdoc", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("srcdoc");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'srcdoc' property on 'HTMLIFrameElement': The provided value"
    });

    this.setAttribute("srcdoc", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLIFrameElement.prototype, "name", {
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
      context: "Failed to set the 'name' property on 'HTMLIFrameElement': The provided value"
    });

    this.setAttribute("name", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLIFrameElement.prototype, "allowFullscreen", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this.hasAttribute("allowFullscreen");
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'allowFullscreen' property on 'HTMLIFrameElement': The provided value"
    });

    if (V) {
      this.setAttribute("allowFullscreen", "");
    } else {
      this.removeAttribute("allowFullscreen");
    }
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLIFrameElement.prototype, "width", {
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
      context: "Failed to set the 'width' property on 'HTMLIFrameElement': The provided value"
    });

    this.setAttribute("width", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLIFrameElement.prototype, "height", {
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
      context: "Failed to set the 'height' property on 'HTMLIFrameElement': The provided value"
    });

    this.setAttribute("height", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLIFrameElement.prototype, "contentDocument", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["contentDocument"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLIFrameElement.prototype, "contentWindow", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["contentWindow"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLIFrameElement.prototype, "align", {
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
      context: "Failed to set the 'align' property on 'HTMLIFrameElement': The provided value"
    });

    this.setAttribute("align", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLIFrameElement.prototype, "scrolling", {
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
      context: "Failed to set the 'scrolling' property on 'HTMLIFrameElement': The provided value"
    });

    this.setAttribute("scrolling", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLIFrameElement.prototype, "frameBorder", {
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
      context: "Failed to set the 'frameBorder' property on 'HTMLIFrameElement': The provided value"
    });

    this.setAttribute("frameBorder", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLIFrameElement.prototype, "longDesc", {
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
      context: "Failed to set the 'longDesc' property on 'HTMLIFrameElement': The provided value"
    });

    this[impl]["longDesc"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLIFrameElement.prototype, "marginHeight", {
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
      context: "Failed to set the 'marginHeight' property on 'HTMLIFrameElement': The provided value",
      treatNullAsEmptyString: true
    });

    this.setAttribute("marginHeight", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLIFrameElement.prototype, "marginWidth", {
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
      context: "Failed to set the 'marginWidth' property on 'HTMLIFrameElement': The provided value",
      treatNullAsEmptyString: true
    });

    this.setAttribute("marginWidth", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLIFrameElement.prototype, Symbol.toStringTag, {
  value: "HTMLIFrameElement",
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
    throw new TypeError(`${context} is not of type 'HTMLIFrameElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLIFrameElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLIFrameElement.prototype);
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
  interface: HTMLIFrameElement,
  expose: {
    Window: { HTMLIFrameElement }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/HTMLIFrameElement-impl.js");
