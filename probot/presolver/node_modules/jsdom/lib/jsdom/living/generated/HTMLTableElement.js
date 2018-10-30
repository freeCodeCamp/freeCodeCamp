"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertHTMLTableCaptionElement = require("./HTMLTableCaptionElement.js").convert;
const convertHTMLTableSectionElement = require("./HTMLTableSectionElement.js").convert;
const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");

function HTMLTableElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLTableElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLTableElement, HTMLElement.interface);

Object.defineProperty(HTMLTableElement, "prototype", {
  value: HTMLTableElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

HTMLTableElement.prototype.createCaption = function createCaption() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return utils.tryWrapperForImpl(this[impl].createCaption());
};

HTMLTableElement.prototype.deleteCaption = function deleteCaption() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].deleteCaption();
};

HTMLTableElement.prototype.createTHead = function createTHead() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return utils.tryWrapperForImpl(this[impl].createTHead());
};

HTMLTableElement.prototype.deleteTHead = function deleteTHead() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].deleteTHead();
};

HTMLTableElement.prototype.createTFoot = function createTFoot() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return utils.tryWrapperForImpl(this[impl].createTFoot());
};

HTMLTableElement.prototype.deleteTFoot = function deleteTFoot() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].deleteTFoot();
};

HTMLTableElement.prototype.createTBody = function createTBody() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return utils.tryWrapperForImpl(this[impl].createTBody());
};

HTMLTableElement.prototype.insertRow = function insertRow() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  const args = [];
  {
    let curArg = arguments[0];
    if (curArg !== undefined) {
      curArg = conversions["long"](curArg, {
        context: "Failed to execute 'insertRow' on 'HTMLTableElement': parameter 1"
      });
    } else {
      curArg = -1;
    }
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].insertRow(...args));
};

HTMLTableElement.prototype.deleteRow = function deleteRow(index) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'deleteRow' on 'HTMLTableElement': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["long"](curArg, {
      context: "Failed to execute 'deleteRow' on 'HTMLTableElement': parameter 1"
    });
    args.push(curArg);
  }
  return this[impl].deleteRow(...args);
};

Object.defineProperty(HTMLTableElement.prototype, "caption", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["caption"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    if (V === null || V === undefined) {
      V = null;
    } else {
      V = convertHTMLTableCaptionElement(V, {
        context: "Failed to set the 'caption' property on 'HTMLTableElement': The provided value"
      });
    }
    this[impl]["caption"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableElement.prototype, "tHead", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["tHead"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    if (V === null || V === undefined) {
      V = null;
    } else {
      V = convertHTMLTableSectionElement(V, {
        context: "Failed to set the 'tHead' property on 'HTMLTableElement': The provided value"
      });
    }
    this[impl]["tHead"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableElement.prototype, "tFoot", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["tFoot"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    if (V === null || V === undefined) {
      V = null;
    } else {
      V = convertHTMLTableSectionElement(V, {
        context: "Failed to set the 'tFoot' property on 'HTMLTableElement': The provided value"
      });
    }
    this[impl]["tFoot"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableElement.prototype, "tBodies", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "tBodies", () => {
      return utils.tryWrapperForImpl(this[impl]["tBodies"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableElement.prototype, "rows", {
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

Object.defineProperty(HTMLTableElement.prototype, "align", {
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
      context: "Failed to set the 'align' property on 'HTMLTableElement': The provided value"
    });

    this.setAttribute("align", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableElement.prototype, "border", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("border");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'border' property on 'HTMLTableElement': The provided value"
    });

    this.setAttribute("border", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableElement.prototype, "frame", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("frame");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'frame' property on 'HTMLTableElement': The provided value"
    });

    this.setAttribute("frame", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableElement.prototype, "rules", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("rules");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'rules' property on 'HTMLTableElement': The provided value"
    });

    this.setAttribute("rules", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableElement.prototype, "summary", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("summary");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'summary' property on 'HTMLTableElement': The provided value"
    });

    this.setAttribute("summary", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableElement.prototype, "width", {
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
      context: "Failed to set the 'width' property on 'HTMLTableElement': The provided value"
    });

    this.setAttribute("width", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableElement.prototype, "bgColor", {
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
      context: "Failed to set the 'bgColor' property on 'HTMLTableElement': The provided value",
      treatNullAsEmptyString: true
    });

    this.setAttribute("bgColor", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableElement.prototype, "cellPadding", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("cellPadding");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'cellPadding' property on 'HTMLTableElement': The provided value",
      treatNullAsEmptyString: true
    });

    this.setAttribute("cellPadding", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableElement.prototype, "cellSpacing", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("cellSpacing");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'cellSpacing' property on 'HTMLTableElement': The provided value",
      treatNullAsEmptyString: true
    });

    this.setAttribute("cellSpacing", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTableElement.prototype, Symbol.toStringTag, {
  value: "HTMLTableElement",
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
    throw new TypeError(`${context} is not of type 'HTMLTableElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLTableElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLTableElement.prototype);
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
  interface: HTMLTableElement,
  expose: {
    Window: { HTMLTableElement }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/HTMLTableElement-impl.js");
