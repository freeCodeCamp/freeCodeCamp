"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");

function HTMLTableRowElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLTableRowElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLTableRowElement, HTMLElement.interface);

Object.defineProperty(HTMLTableRowElement, "prototype", {
  value: HTMLTableRowElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

HTMLTableRowElement.prototype.insertCell = function insertCell() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  const args = [];
  {
    let curArg = arguments[0];
    if (curArg !== undefined) {
      curArg = conversions["long"](curArg, {
        context: "Failed to execute 'insertCell' on 'HTMLTableRowElement': parameter 1"
      });
    } else {
      curArg = -1;
    }
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].insertCell(...args));
};

HTMLTableRowElement.prototype.deleteCell = function deleteCell(index) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'deleteCell' on 'HTMLTableRowElement': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["long"](curArg, {
      context: "Failed to execute 'deleteCell' on 'HTMLTableRowElement': parameter 1"
    });
    args.push(curArg);
  }
  return this[impl].deleteCell(...args);
};

Object.defineProperty(HTMLTableRowElement.prototype, "rowIndex", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["rowIndex"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableRowElement.prototype, "sectionRowIndex", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["sectionRowIndex"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableRowElement.prototype, "cells", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "cells", () => {
      return utils.tryWrapperForImpl(this[impl]["cells"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableRowElement.prototype, "align", {
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
      context: "Failed to set the 'align' property on 'HTMLTableRowElement': The provided value"
    });

    this.setAttribute("align", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableRowElement.prototype, "ch", {
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
      context: "Failed to set the 'ch' property on 'HTMLTableRowElement': The provided value"
    });

    this.setAttribute("char", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableRowElement.prototype, "chOff", {
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
      context: "Failed to set the 'chOff' property on 'HTMLTableRowElement': The provided value"
    });

    this.setAttribute("charoff", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableRowElement.prototype, "vAlign", {
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
      context: "Failed to set the 'vAlign' property on 'HTMLTableRowElement': The provided value"
    });

    this.setAttribute("vAlign", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableRowElement.prototype, "bgColor", {
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
      context: "Failed to set the 'bgColor' property on 'HTMLTableRowElement': The provided value",
      treatNullAsEmptyString: true
    });

    this.setAttribute("bgColor", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableRowElement.prototype, Symbol.toStringTag, {
  value: "HTMLTableRowElement",
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
    throw new TypeError(`${context} is not of type 'HTMLTableRowElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLTableRowElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLTableRowElement.prototype);
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
  interface: HTMLTableRowElement,
  expose: {
    Window: { HTMLTableRowElement }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/HTMLTableRowElement-impl.js");
