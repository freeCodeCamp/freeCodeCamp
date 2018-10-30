"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");

function HTMLOutputElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLOutputElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLOutputElement, HTMLElement.interface);

Object.defineProperty(HTMLOutputElement, "prototype", {
  value: HTMLOutputElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

HTMLOutputElement.prototype.checkValidity = function checkValidity() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].checkValidity();
};

HTMLOutputElement.prototype.reportValidity = function reportValidity() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].reportValidity();
};

HTMLOutputElement.prototype.setCustomValidity = function setCustomValidity(error) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'setCustomValidity' on 'HTMLOutputElement': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'setCustomValidity' on 'HTMLOutputElement': parameter 1"
    });
    args.push(curArg);
  }
  return this[impl].setCustomValidity(...args);
};

Object.defineProperty(HTMLOutputElement.prototype, "name", {
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
      context: "Failed to set the 'name' property on 'HTMLOutputElement': The provided value"
    });

    this.setAttribute("name", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLOutputElement.prototype, "willValidate", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["willValidate"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLOutputElement.prototype, "validity", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["validity"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLOutputElement.prototype, "validationMessage", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["validationMessage"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLOutputElement.prototype, "labels", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["labels"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLOutputElement.prototype, Symbol.toStringTag, {
  value: "HTMLOutputElement",
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
    throw new TypeError(`${context} is not of type 'HTMLOutputElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLOutputElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLOutputElement.prototype);
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
  interface: HTMLOutputElement,
  expose: {
    Window: { HTMLOutputElement }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/HTMLOutputElement-impl.js");
