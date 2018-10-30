"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const NavigatorID = require("./NavigatorID.js");
const NavigatorLanguage = require("./NavigatorLanguage.js");
const NavigatorOnLine = require("./NavigatorOnLine.js");
const NavigatorCookies = require("./NavigatorCookies.js");
const NavigatorPlugins = require("./NavigatorPlugins.js");
const NavigatorConcurrentHardware = require("./NavigatorConcurrentHardware.js");

function Navigator() {
  throw new TypeError("Illegal constructor");
}

Object.defineProperty(Navigator, "prototype", {
  value: Navigator.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Navigator.prototype.javaEnabled = function javaEnabled() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].javaEnabled();
};

Object.defineProperty(Navigator.prototype, "appCodeName", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["appCodeName"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Navigator.prototype, "appName", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["appName"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Navigator.prototype, "appVersion", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["appVersion"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Navigator.prototype, "platform", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["platform"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Navigator.prototype, "product", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["product"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Navigator.prototype, "productSub", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["productSub"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Navigator.prototype, "userAgent", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["userAgent"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Navigator.prototype, "vendor", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["vendor"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Navigator.prototype, "vendorSub", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["vendorSub"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Navigator.prototype, "language", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["language"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Navigator.prototype, "languages", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["languages"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Navigator.prototype, "onLine", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["onLine"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Navigator.prototype, "cookieEnabled", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["cookieEnabled"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Navigator.prototype, "hardwareConcurrency", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["hardwareConcurrency"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Navigator.prototype, Symbol.toStringTag, {
  value: "Navigator",
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
    throw new TypeError(`${context} is not of type 'Navigator'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(Navigator.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(Navigator.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {},
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
  interface: Navigator,
  expose: {
    Window: { Navigator }
  }
}; // iface
module.exports = iface;

NavigatorID._mixedIntoPredicates.push(module.exports.is);

NavigatorLanguage._mixedIntoPredicates.push(module.exports.is);

NavigatorOnLine._mixedIntoPredicates.push(module.exports.is);

NavigatorCookies._mixedIntoPredicates.push(module.exports.is);

NavigatorPlugins._mixedIntoPredicates.push(module.exports.is);

NavigatorConcurrentHardware._mixedIntoPredicates.push(module.exports.is);

const Impl = require("../navigator/Navigator-impl.js");
