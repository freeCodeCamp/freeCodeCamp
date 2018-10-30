"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;

function ValidityState() {
  throw new TypeError("Illegal constructor");
}

Object.defineProperty(ValidityState, "prototype", {
  value: ValidityState.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(ValidityState.prototype, "valueMissing", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["valueMissing"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ValidityState.prototype, "typeMismatch", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["typeMismatch"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ValidityState.prototype, "patternMismatch", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["patternMismatch"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ValidityState.prototype, "tooLong", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["tooLong"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ValidityState.prototype, "tooShort", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["tooShort"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ValidityState.prototype, "rangeUnderflow", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["rangeUnderflow"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ValidityState.prototype, "rangeOverflow", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["rangeOverflow"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ValidityState.prototype, "stepMismatch", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["stepMismatch"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ValidityState.prototype, "badInput", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["badInput"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ValidityState.prototype, "customError", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["customError"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ValidityState.prototype, "valid", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["valid"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(ValidityState.prototype, Symbol.toStringTag, {
  value: "ValidityState",
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
    throw new TypeError(`${context} is not of type 'ValidityState'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(ValidityState.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(ValidityState.prototype);
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
  interface: ValidityState,
  expose: {
    Window: { ValidityState }
  }
}; // iface
module.exports = iface;

const Impl = require("../constraint-validation/ValidityState-impl.js");
