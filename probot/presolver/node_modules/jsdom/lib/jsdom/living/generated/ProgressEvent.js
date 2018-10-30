"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertProgressEventInit = require("./ProgressEventInit.js").convert;
const impl = utils.implSymbol;
const Event = require("./Event.js");

function ProgressEvent(type) {
  if (new.target === undefined) {
    throw new TypeError(
      "Failed to construct 'ProgressEvent'. Please use the 'new' operator; this constructor " +
        "cannot be called as a function."
    );
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to construct 'ProgressEvent': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, { context: "Failed to construct 'ProgressEvent': parameter 1" });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = convertProgressEventInit(curArg, { context: "Failed to construct 'ProgressEvent': parameter 2" });
    args.push(curArg);
  }

  iface.setup(this, args);
}

Object.setPrototypeOf(ProgressEvent.prototype, Event.interface.prototype);
Object.setPrototypeOf(ProgressEvent, Event.interface);

Object.defineProperty(ProgressEvent, "prototype", {
  value: ProgressEvent.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(ProgressEvent.prototype, "lengthComputable", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["lengthComputable"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ProgressEvent.prototype, "loaded", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["loaded"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ProgressEvent.prototype, "total", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["total"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ProgressEvent.prototype, Symbol.toStringTag, {
  value: "ProgressEvent",
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
    throw new TypeError(`${context} is not of type 'ProgressEvent'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(ProgressEvent.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(ProgressEvent.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    Event._internalSetup(obj);
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
  interface: ProgressEvent,
  expose: {
    Window: { ProgressEvent },
    DedicatedWorker: { ProgressEvent },
    SharedWorker: { ProgressEvent }
  }
}; // iface
module.exports = iface;

const Impl = require("../events/ProgressEvent-impl.js");
