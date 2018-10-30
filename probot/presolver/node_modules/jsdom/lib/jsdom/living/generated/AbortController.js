"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;

module.exports = {
  createInterface: function(defaultPrivateData = {}) {
    function AbortController() {
      if (new.target === undefined) {
        throw new TypeError(
          "Failed to construct 'AbortController'. Please use the 'new' operator; this constructor " +
            "cannot be called as a function."
        );
      }

      iface.setup(this);
    }

    Object.defineProperty(AbortController, "prototype", {
      value: AbortController.prototype,
      writable: false,
      enumerable: false,
      configurable: false
    });

    AbortController.prototype.abort = function abort() {
      if (!this || !module.exports.is(this)) {
        throw new TypeError("Illegal invocation");
      }

      return this[impl].abort();
    };

    Object.defineProperty(AbortController.prototype, "signal", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return utils.getSameObject(this, "signal", () => {
          return utils.tryWrapperForImpl(this[impl]["signal"]);
        });
      },

      enumerable: true,
      configurable: true
    });

    Object.defineProperty(AbortController.prototype, Symbol.toStringTag, {
      value: "AbortController",
      writable: false,
      enumerable: false,
      configurable: true
    });

    const iface = {
      create(constructorArgs, privateData) {
        let obj = Object.create(AbortController.prototype);
        obj = this.setup(obj, constructorArgs, privateData);
        return obj;
      },
      createImpl(constructorArgs, privateData) {
        let obj = Object.create(AbortController.prototype);
        obj = this.setup(obj, constructorArgs, privateData);
        return utils.implForWrapper(obj);
      },
      _internalSetup(obj) {},
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
      interface: AbortController,
      expose: {
        Window: { AbortController },
        Worker: { AbortController }
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
    throw new TypeError(`${context} is not of type 'AbortController'.`);
  }
}; // module.exports

const Impl = require("../aborting/AbortController-impl.js");
