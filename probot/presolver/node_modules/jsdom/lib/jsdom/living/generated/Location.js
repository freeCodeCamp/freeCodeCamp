"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;

function Location() {
  throw new TypeError("Illegal constructor");
}

Object.defineProperty(Location, "prototype", {
  value: Location.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(Location.prototype, Symbol.toStringTag, {
  value: "Location",
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
    throw new TypeError(`${context} is not of type 'Location'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(Location.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(Location.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    obj.assign = function assign(url) {
      if (!this || !module.exports.is(this)) {
        throw new TypeError("Illegal invocation");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'assign' on 'Location': 1 argument required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["USVString"](curArg, { context: "Failed to execute 'assign' on 'Location': parameter 1" });
        args.push(curArg);
      }
      return this[impl].assign(...args);
    };

    obj.replace = function replace(url) {
      if (!this || !module.exports.is(this)) {
        throw new TypeError("Illegal invocation");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'replace' on 'Location': 1 argument required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["USVString"](curArg, {
          context: "Failed to execute 'replace' on 'Location': parameter 1"
        });
        args.push(curArg);
      }
      return this[impl].replace(...args);
    };

    obj.reload = function reload() {
      if (!this || !module.exports.is(this)) {
        throw new TypeError("Illegal invocation");
      }

      return this[impl].reload();
    };

    Object.defineProperty(obj, "href", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return obj[impl]["href"];
      },

      set(V) {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'href' property on 'Location': The provided value"
        });

        obj[impl]["href"] = V;
      },

      enumerable: true,
      configurable: false
    });

    Object.defineProperty(obj, "toString", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: function toString() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }
        return obj[impl]["href"];
      }
    });

    Object.defineProperty(obj, "origin", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return obj[impl]["origin"];
      },

      enumerable: true,
      configurable: false
    });

    Object.defineProperty(obj, "protocol", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return obj[impl]["protocol"];
      },

      set(V) {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'protocol' property on 'Location': The provided value"
        });

        obj[impl]["protocol"] = V;
      },

      enumerable: true,
      configurable: false
    });

    Object.defineProperty(obj, "host", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return obj[impl]["host"];
      },

      set(V) {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'host' property on 'Location': The provided value"
        });

        obj[impl]["host"] = V;
      },

      enumerable: true,
      configurable: false
    });

    Object.defineProperty(obj, "hostname", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return obj[impl]["hostname"];
      },

      set(V) {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'hostname' property on 'Location': The provided value"
        });

        obj[impl]["hostname"] = V;
      },

      enumerable: true,
      configurable: false
    });

    Object.defineProperty(obj, "port", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return obj[impl]["port"];
      },

      set(V) {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'port' property on 'Location': The provided value"
        });

        obj[impl]["port"] = V;
      },

      enumerable: true,
      configurable: false
    });

    Object.defineProperty(obj, "pathname", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return obj[impl]["pathname"];
      },

      set(V) {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'pathname' property on 'Location': The provided value"
        });

        obj[impl]["pathname"] = V;
      },

      enumerable: true,
      configurable: false
    });

    Object.defineProperty(obj, "search", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return obj[impl]["search"];
      },

      set(V) {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'search' property on 'Location': The provided value"
        });

        obj[impl]["search"] = V;
      },

      enumerable: true,
      configurable: false
    });

    Object.defineProperty(obj, "hash", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return obj[impl]["hash"];
      },

      set(V) {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'hash' property on 'Location': The provided value"
        });

        obj[impl]["hash"] = V;
      },

      enumerable: true,
      configurable: false
    });
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
  interface: Location,
  expose: {
    Window: { Location }
  }
}; // iface
module.exports = iface;

const Impl = require("../window/Location-impl.js");
