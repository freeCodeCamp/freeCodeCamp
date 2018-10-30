"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");

function HTMLTableCellElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLTableCellElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLTableCellElement, HTMLElement.interface);

Object.defineProperty(HTMLTableCellElement, "prototype", {
  value: HTMLTableCellElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(HTMLTableCellElement.prototype, "colSpan", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["colSpan"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["unsigned long"](V, {
      context: "Failed to set the 'colSpan' property on 'HTMLTableCellElement': The provided value"
    });

    this[impl]["colSpan"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableCellElement.prototype, "rowSpan", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["rowSpan"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["unsigned long"](V, {
      context: "Failed to set the 'rowSpan' property on 'HTMLTableCellElement': The provided value"
    });

    this[impl]["rowSpan"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableCellElement.prototype, "headers", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("headers");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'headers' property on 'HTMLTableCellElement': The provided value"
    });

    this.setAttribute("headers", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableCellElement.prototype, "cellIndex", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["cellIndex"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableCellElement.prototype, "scope", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["scope"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'scope' property on 'HTMLTableCellElement': The provided value"
    });

    this[impl]["scope"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableCellElement.prototype, "abbr", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("abbr");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'abbr' property on 'HTMLTableCellElement': The provided value"
    });

    this.setAttribute("abbr", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableCellElement.prototype, "align", {
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
      context: "Failed to set the 'align' property on 'HTMLTableCellElement': The provided value"
    });

    this.setAttribute("align", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableCellElement.prototype, "axis", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("axis");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'axis' property on 'HTMLTableCellElement': The provided value"
    });

    this.setAttribute("axis", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableCellElement.prototype, "height", {
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
      context: "Failed to set the 'height' property on 'HTMLTableCellElement': The provided value"
    });

    this.setAttribute("height", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableCellElement.prototype, "width", {
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
      context: "Failed to set the 'width' property on 'HTMLTableCellElement': The provided value"
    });

    this.setAttribute("width", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableCellElement.prototype, "ch", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("char");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'ch' property on 'HTMLTableCellElement': The provided value"
    });

    this.setAttribute("char", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableCellElement.prototype, "chOff", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("charoff");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'chOff' property on 'HTMLTableCellElement': The provided value"
    });

    this.setAttribute("charoff", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableCellElement.prototype, "noWrap", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this.hasAttribute("noWrap");
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'noWrap' property on 'HTMLTableCellElement': The provided value"
    });

    if (V) {
      this.setAttribute("noWrap", "");
    } else {
      this.removeAttribute("noWrap");
    }
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableCellElement.prototype, "vAlign", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("vAlign");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'vAlign' property on 'HTMLTableCellElement': The provided value"
    });

    this.setAttribute("vAlign", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableCellElement.prototype, "bgColor", {
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
      context: "Failed to set the 'bgColor' property on 'HTMLTableCellElement': The provided value",
      treatNullAsEmptyString: true
    });

    this.setAttribute("bgColor", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableCellElement.prototype, Symbol.toStringTag, {
  value: "HTMLTableCellElement",
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
    throw new TypeError(`${context} is not of type 'HTMLTableCellElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLTableCellElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLTableCellElement.prototype);
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
  interface: HTMLTableCellElement,
  expose: {
    Window: { HTMLTableCellElement }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/HTMLTableCellElement-impl.js");
