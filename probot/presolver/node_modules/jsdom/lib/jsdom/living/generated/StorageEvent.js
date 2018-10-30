"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertStorageEventInit = require("./StorageEventInit.js").convert;
const impl = utils.implSymbol;
const Event = require("./Event.js");

function StorageEvent(type) {
  if (new.target === undefined) {
    throw new TypeError(
      "Failed to construct 'StorageEvent'. Please use the 'new' operator; this constructor " +
        "cannot be called as a function."
    );
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to construct 'StorageEvent': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, { context: "Failed to construct 'StorageEvent': parameter 1" });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = convertStorageEventInit(curArg, { context: "Failed to construct 'StorageEvent': parameter 2" });
    args.push(curArg);
  }

  iface.setup(this, args);
}

Object.setPrototypeOf(StorageEvent.prototype, Event.interface.prototype);
Object.setPrototypeOf(StorageEvent, Event.interface);

Object.defineProperty(StorageEvent, "prototype", {
  value: StorageEvent.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(StorageEvent.prototype, "key", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["key"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(StorageEvent.prototype, "oldValue", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["oldValue"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(StorageEvent.prototype, "newValue", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["newValue"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(StorageEvent.prototype, "url", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["url"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(StorageEvent.prototype, "storageArea", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["storageArea"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(StorageEvent.prototype, Symbol.toStringTag, {
  value: "StorageEvent",
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
    throw new TypeError(`${context} is not of type 'StorageEvent'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(StorageEvent.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(StorageEvent.prototype);
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
  interface: StorageEvent,
  expose: {
    Window: { StorageEvent }
  }
}; // iface
module.exports = iface;

const Impl = require("../events/StorageEvent-impl.js");
