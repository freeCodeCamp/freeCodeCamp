"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;

function URL(url) {
  if (!new.target) {
    throw new TypeError(
      "Failed to construct 'URL'. Please use the 'new' operator; this constructor " + "cannot be called as a function."
    );
  }
  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to construct 'URL': 1 " + "argument required, but only " + arguments.length + " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 2; ++i) {
    args[i] = arguments[i];
  }

  args[0] = conversions["USVString"](args[0], { context: "Failed to construct 'URL': parameter 1" });

  if (args[1] !== undefined) {
    args[1] = conversions["USVString"](args[1], { context: "Failed to construct 'URL': parameter 2" });
  }

  iface.setup(this, args);
}

Object.defineProperty(URL, "prototype", {
  value: URL.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

URL.prototype.toJSON = function toJSON() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].toJSON();
};

Object.defineProperty(URL.prototype, "href", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["href"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, { context: "Failed to set the 'href' property on 'URL': The provided value" });

    this[impl]["href"] = V;
  },

  enumerable: true,
  configurable: true
});

URL.prototype.toString = function toString() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  return this[impl]["href"];
};

Object.defineProperty(URL.prototype, "origin", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["origin"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, "protocol", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["protocol"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, { context: "Failed to set the 'protocol' property on 'URL': The provided value" });

    this[impl]["protocol"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, "username", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["username"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, { context: "Failed to set the 'username' property on 'URL': The provided value" });

    this[impl]["username"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, "password", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["password"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, { context: "Failed to set the 'password' property on 'URL': The provided value" });

    this[impl]["password"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, "host", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["host"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, { context: "Failed to set the 'host' property on 'URL': The provided value" });

    this[impl]["host"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, "hostname", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["hostname"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, { context: "Failed to set the 'hostname' property on 'URL': The provided value" });

    this[impl]["hostname"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, "port", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["port"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, { context: "Failed to set the 'port' property on 'URL': The provided value" });

    this[impl]["port"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, "pathname", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["pathname"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, { context: "Failed to set the 'pathname' property on 'URL': The provided value" });

    this[impl]["pathname"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, "search", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["search"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, { context: "Failed to set the 'search' property on 'URL': The provided value" });

    this[impl]["search"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, "searchParams", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "searchParams", () => {
      return utils.tryWrapperForImpl(this[impl]["searchParams"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, "hash", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["hash"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, { context: "Failed to set the 'hash' property on 'URL': The provided value" });

    this[impl]["hash"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(URL.prototype, Symbol.toStringTag, {
  value: "URL",
  writable: false,
  enumerable: false,
  configurable: true
});

const iface = {
  mixedInto: [],
  is(obj) {
    if (obj) {
      if (obj[impl] instanceof Impl.implementation) {
        return true;
      }
      for (let i = 0; i < module.exports.mixedInto.length; ++i) {
        if (obj instanceof module.exports.mixedInto[i]) {
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
      for (let i = 0; i < module.exports.mixedInto.length; ++i) {
        if (wrapper instanceof module.exports.mixedInto[i]) {
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
    throw new TypeError(`${context} is not of type 'URL'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(URL.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(URL.prototype);
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
  interface: URL,
  expose: {
    Window: { URL },
    Worker: { URL }
  }
}; // iface
module.exports = iface;

const Impl = require(".//URL-impl.js");
