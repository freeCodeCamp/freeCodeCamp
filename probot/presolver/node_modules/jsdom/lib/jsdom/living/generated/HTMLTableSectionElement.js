"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");

function HTMLTableSectionElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLTableSectionElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLTableSectionElement, HTMLElement.interface);

Object.defineProperty(HTMLTableSectionElement, "prototype", {
  value: HTMLTableSectionElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

HTMLTableSectionElement.prototype.insertRow = function insertRow() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  const args = [];
  {
    let curArg = arguments[0];
    if (curArg !== undefined) {
      curArg = conversions["long"](curArg, {
        context: "Failed to execute 'insertRow' on 'HTMLTableSectionElement': parameter 1"
      });
    } else {
      curArg = -1;
    }
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].insertRow(...args));
};

HTMLTableSectionElement.prototype.deleteRow = function deleteRow(index) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'deleteRow' on 'HTMLTableSectionElement': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["long"](curArg, {
      context: "Failed to execute 'deleteRow' on 'HTMLTableSectionElement': parameter 1"
    });
    args.push(curArg);
  }
  return this[impl].deleteRow(...args);
};

Object.defineProperty(HTMLTableSectionElement.prototype, "rows", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "rows", () => {
      return utils.tryWrapperForImpl(this[impl]["rows"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableSectionElement.prototype, "align", {
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
      context: "Failed to set the 'align' property on 'HTMLTableSectionElement': The provided value"
    });

    this.setAttribute("align", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableSectionElement.prototype, "ch", {
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
      context: "Failed to set the 'ch' property on 'HTMLTableSectionElement': The provided value"
    });

    this.setAttribute("char", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableSectionElement.prototype, "chOff", {
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
      context: "Failed to set the 'chOff' property on 'HTMLTableSectionElement': The provided value"
    });

    this.setAttribute("charoff", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableSectionElement.prototype, "vAlign", {
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
      context: "Failed to set the 'vAlign' property on 'HTMLTableSectionElement': The provided value"
    });

    this.setAttribute("vAlign", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableSectionElement.prototype, Symbol.toStringTag, {
  value: "HTMLTableSectionElement",
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
    throw new TypeError(`${context} is not of type 'HTMLTableSectionElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLTableSectionElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLTableSectionElement.prototype);
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
  interface: HTMLTableSectionElement,
  expose: {
    Window: { HTMLTableSectionElement }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/HTMLTableSectionElement-impl.js");
