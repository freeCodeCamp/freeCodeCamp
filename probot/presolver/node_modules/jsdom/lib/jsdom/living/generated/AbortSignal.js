"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const EventTarget = require("./EventTarget.js");

module.exports = {
  createInterface: function(defaultPrivateData = {}) {
    function AbortSignal() {
      throw new TypeError("Illegal constructor");
    }

    Object.setPrototypeOf(AbortSignal.prototype, EventTarget.interface.prototype);
    Object.setPrototypeOf(AbortSignal, EventTarget.interface);

    Object.defineProperty(AbortSignal, "prototype", {
      value: AbortSignal.prototype,
      writable: false,
      enumerable: false,
      configurable: false
    });

    Object.defineProperty(AbortSignal.prototype, "aborted", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return this[impl]["aborted"];
      },

      enumerable: true,
      configurable: true
    });

    Object.defineProperty(AbortSignal.prototype, "onabort", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return utils.tryWrapperForImpl(this[impl]["onabort"]);
      },

      set(V) {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        V = utils.tryImplForWrapper(V);

        this[impl]["onabort"] = V;
      },

      enumerable: true,
      configurable: true
    });

    Object.defineProperty(AbortSignal.prototype, Symbol.toStringTag, {
      value: "AbortSignal",
      writable: false,
      enumerable: false,
      configurable: true
    });

    const iface = {
      create(constructorArgs, privateData) {
        let obj = Object.create(AbortSignal.prototype);
        obj = this.setup(obj, constructorArgs, privateData);
        return obj;
      },
      createImpl(constructorArgs, privateData) {
        let obj = Object.create(AbortSignal.prototype);
        obj = this.setup(obj, constructorArgs, privateData);
        return utils.implForWrapper(obj);
      },
      _internalSetup(obj) {
        EventTarget._internalSetup(obj);
      },
      setup(obj, constructorArgs, privateData) {
        if (!privateData) privateData = {};

        for (var prop in defaultPrivateData) {
          if (!(prop in privateData)) {
            privateData[prop] = defaultPrivateData[prop];
          }
        }

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
      interface: AbortSignal,
      expose: {
        Window: { AbortSignal },
        Worker: { AbortSignal }
      }
    }; // iface
    return iface;
  }, // createInterface

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
    throw new TypeError(`${context} is not of type 'AbortSignal'.`);
  }
}; // module.exports

const Impl = require("../aborting/AbortSignal-impl.js");
