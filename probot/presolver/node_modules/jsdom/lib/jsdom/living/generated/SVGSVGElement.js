"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const SVGGraphicsElement = require("./SVGGraphicsElement.js");
const WindowEventHandlers = require("./WindowEventHandlers.js");

function SVGSVGElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(SVGSVGElement.prototype, SVGGraphicsElement.interface.prototype);
Object.setPrototypeOf(SVGSVGElement, SVGGraphicsElement.interface);

Object.defineProperty(SVGSVGElement, "prototype", {
  value: SVGSVGElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

SVGSVGElement.prototype.createSVGNumber = function createSVGNumber() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return utils.tryWrapperForImpl(this[impl].createSVGNumber());
};

SVGSVGElement.prototype.getElementById = function getElementById(elementId) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'getElementById' on 'SVGSVGElement': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'getElementById' on 'SVGSVGElement': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].getElementById(...args));
};

SVGSVGElement.prototype.suspendRedraw = function suspendRedraw(maxWaitMilliseconds) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'suspendRedraw' on 'SVGSVGElement': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["unsigned long"](curArg, {
      context: "Failed to execute 'suspendRedraw' on 'SVGSVGElement': parameter 1"
    });
    args.push(curArg);
  }
  return this[impl].suspendRedraw(...args);
};

SVGSVGElement.prototype.unsuspendRedraw = function unsuspendRedraw(suspendHandleID) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'unsuspendRedraw' on 'SVGSVGElement': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["unsigned long"](curArg, {
      context: "Failed to execute 'unsuspendRedraw' on 'SVGSVGElement': parameter 1"
    });
    args.push(curArg);
  }
  return this[impl].unsuspendRedraw(...args);
};

SVGSVGElement.prototype.unsuspendRedrawAll = function unsuspendRedrawAll() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].unsuspendRedrawAll();
};

SVGSVGElement.prototype.forceRedraw = function forceRedraw() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].forceRedraw();
};

Object.defineProperty(SVGSVGElement.prototype, "onafterprint", {
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

Object.defineProperty(SVGSVGElement.prototype, "onbeforeprint", {
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

Object.defineProperty(SVGSVGElement.prototype, "onbeforeunload", {
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

Object.defineProperty(SVGSVGElement.prototype, "onhashchange", {
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

Object.defineProperty(SVGSVGElement.prototype, "onlanguagechange", {
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

Object.defineProperty(SVGSVGElement.prototype, "onmessage", {
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

Object.defineProperty(SVGSVGElement.prototype, "onmessageerror", {
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

Object.defineProperty(SVGSVGElement.prototype, "onoffline", {
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

Object.defineProperty(SVGSVGElement.prototype, "ononline", {
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

Object.defineProperty(SVGSVGElement.prototype, "onpagehide", {
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

Object.defineProperty(SVGSVGElement.prototype, "onpageshow", {
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

Object.defineProperty(SVGSVGElement.prototype, "onpopstate", {
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

Object.defineProperty(SVGSVGElement.prototype, "onrejectionhandled", {
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

Object.defineProperty(SVGSVGElement.prototype, "onstorage", {
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

Object.defineProperty(SVGSVGElement.prototype, "onunhandledrejection", {
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

Object.defineProperty(SVGSVGElement.prototype, "onunload", {
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

Object.defineProperty(SVGSVGElement.prototype, Symbol.toStringTag, {
  value: "SVGSVGElement",
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
    throw new TypeError(`${context} is not of type 'SVGSVGElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(SVGSVGElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(SVGSVGElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    SVGGraphicsElement._internalSetup(obj);
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
  interface: SVGSVGElement,
  expose: {
    Window: { SVGSVGElement }
  }
}; // iface
module.exports = iface;

WindowEventHandlers._mixedIntoPredicates.push(module.exports.is);

const Impl = require("../nodes/SVGSVGElement-impl.js");
