"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");

function HTMLOptionElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLOptionElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLOptionElement, HTMLElement.interface);

Object.defineProperty(HTMLOptionElement, "prototype", {
  value: HTMLOptionElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(HTMLOptionElement.prototype, "disabled", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this.hasAttribute("disabled");
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'disabled' property on 'HTMLOptionElement': The provided value"
    });

    if (V) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLOptionElement.prototype, "form", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["form"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLOptionElement.prototype, "label", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["label"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'label' property on 'HTMLOptionElement': The provided value"
    });

    this[impl]["label"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLOptionElement.prototype, "defaultSelected", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this.hasAttribute("selected");
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'defaultSelected' property on 'HTMLOptionElement': The provided value"
    });

    if (V) {
      this.setAttribute("selected", "");
    } else {
      this.removeAttribute("selected");
    }
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLOptionElement.prototype, "selected", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["selected"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'selected' property on 'HTMLOptionElement': The provided value"
    });

    this[impl]["selected"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLOptionElement.prototype, "value", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["value"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'value' property on 'HTMLOptionElement': The provided value"
    });

    this[impl]["value"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLOptionElement.prototype, "text", {
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
      context: "Failed to set the 'text' property on 'HTMLOptionElement': The provided value"
    });

    this[impl]["text"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLOptionElement.prototype, "index", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["index"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLOptionElement.prototype, Symbol.toStringTag, {
  value: "HTMLOptionElement",
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
    throw new TypeError(`${context} is not of type 'HTMLOptionElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLOptionElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLOptionElement.prototype);
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
  interface: HTMLOptionElement,
  expose: {
    Window: { HTMLOptionElement }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/HTMLOptionElement-impl.js");
