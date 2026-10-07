"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "URL";

exports.is = value => {
  return utils.isObject(value) && utils.hasOwn(value, implSymbol) && value[implSymbol] instanceof Impl.implementation;
};
exports.isImpl = value => {
  return utils.isObject(value) && value instanceof Impl.implementation;
};
exports.convert = (value, { context = "The provided value" } = {}) => {
  if (exports.is(value)) {
    return utils.implForWrapper(value);
  }
  throw new TypeError(`${context} is not of type 'URL'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["URL"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor URL is not installed on the passed global object");
  }

  return Object.create(ctor.prototype);
}

exports.create = (globalObject, constructorArgs, privateData) => {
  const wrapper = makeWrapper(globalObject);
  return exports.setup(wrapper, globalObject, constructorArgs, privateData);
};

exports.createImpl = (globalObject, constructorArgs, privateData) => {
  const wrapper = exports.create(globalObject, constructorArgs, privateData);
  return utils.implForWrapper(wrapper);
};

exports._internalSetup = (wrapper, globalObject) => {};

exports.setup = (wrapper, globalObject, constructorArgs = [], privateData = {}) => {
  privateData.wrapper = wrapper;

  exports._internalSetup(wrapper, globalObject);
  Object.defineProperty(wrapper, implSymbol, {
    value: new Impl.implementation(globalObject, constructorArgs, privateData),
    configurable: true
  });

  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
  if (Impl.init) {
    Impl.init(wrapper[implSymbol]);
  }
  return wrapper;
};

exports.new = globalObject => {
  const wrapper = makeWrapper(globalObject);

  exports._internalSetup(wrapper, globalObject);
  Object.defineProperty(wrapper, implSymbol, {
    value: Object.create(Impl.implementation.prototype),
    configurable: true
  });

  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
  if (Impl.init) {
    Impl.init(wrapper[implSymbol]);
  }
  return wrapper[implSymbol];
};

const exposed = new Set(["Window", "Worker"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }
  class URL {
    constructor(url) {
      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["USVString"](curArg, { context: "Failed to construct 'URL': parameter 1" });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["USVString"](curArg, { context: "Failed to construct 'URL': parameter 2" });
        }
        args.push(curArg);
      }
      return exports.setup(Object.create(new.target.prototype), globalObject, args);
    }

    toJSON() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'toJSON' called on an object that is not a valid instance of URL.");
      }

      return esValue[implSymbol].toJSON();
    }

    get href() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get href' called on an object that is not a valid instance of URL.");
      }

      return esValue[implSymbol]["href"];
    }

    set href(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set href' called on an object that is not a valid instance of URL.");
      }

      V = conversions["USVString"](V, { context: "Failed to set the 'href' property on 'URL': The provided value" });

      esValue[implSymbol]["href"] = V;
    }

    toString() {
      const esValue = this;
      if (!exports.is(esValue)) {
        throw new TypeError("'toString' called on an object that is not a valid instance of URL.");
      }

      return esValue[implSymbol]["href"];
    }

    get origin() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get origin' called on an object that is not a valid instance of URL.");
      }

      return esValue[implSymbol]["origin"];
    }

    get protocol() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get protocol' called on an object that is not a valid instance of URL.");
      }

      return esValue[implSymbol]["protocol"];
    }

    set protocol(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set protocol' called on an object that is not a valid instance of URL.");
      }

      V = conversions["USVString"](V, {
        context: "Failed to set the 'protocol' property on 'URL': The provided value"
      });

      esValue[implSymbol]["protocol"] = V;
    }

    get username() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get username' called on an object that is not a valid instance of URL.");
      }

      return esValue[implSymbol]["username"];
    }

    set username(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set username' called on an object that is not a valid instance of URL.");
      }

      V = conversions["USVString"](V, {
        context: "Failed to set the 'username' property on 'URL': The provided value"
      });

      esValue[implSymbol]["username"] = V;
    }

    get password() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get password' called on an object that is not a valid instance of URL.");
      }

      return esValue[implSymbol]["password"];
    }

    set password(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set password' called on an object that is not a valid instance of URL.");
      }

      V = conversions["USVString"](V, {
        context: "Failed to set the 'password' property on 'URL': The provided value"
      });

      esValue[implSymbol]["password"] = V;
    }

    get host() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get host' called on an object that is not a valid instance of URL.");
      }

      return esValue[implSymbol]["host"];
    }

    set host(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set host' called on an object that is not a valid instance of URL.");
      }

      V = conversions["USVString"](V, { context: "Failed to set the 'host' property on 'URL': The provided value" });

      esValue[implSymbol]["host"] = V;
    }

    get hostname() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get hostname' called on an object that is not a valid instance of URL.");
      }

      return esValue[implSymbol]["hostname"];
    }

    set hostname(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set hostname' called on an object that is not a valid instance of URL.");
      }

      V = conversions["USVString"](V, {
        context: "Failed to set the 'hostname' property on 'URL': The provided value"
      });

      esValue[implSymbol]["hostname"] = V;
    }

    get port() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get port' called on an object that is not a valid instance of URL.");
      }

      return esValue[implSymbol]["port"];
    }

    set port(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set port' called on an object that is not a valid instance of URL.");
      }

      V = conversions["USVString"](V, { context: "Failed to set the 'port' property on 'URL': The provided value" });

      esValue[implSymbol]["port"] = V;
    }

    get pathname() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get pathname' called on an object that is not a valid instance of URL.");
      }

      return esValue[implSymbol]["pathname"];
    }

    set pathname(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set pathname' called on an object that is not a valid instance of URL.");
      }

      V = conversions["USVString"](V, {
        context: "Failed to set the 'pathname' property on 'URL': The provided value"
      });

      esValue[implSymbol]["pathname"] = V;
    }

    get search() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get search' called on an object that is not a valid instance of URL.");
      }

      return esValue[implSymbol]["search"];
    }

    set search(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set search' called on an object that is not a valid instance of URL.");
      }

      V = conversions["USVString"](V, { context: "Failed to set the 'search' property on 'URL': The provided value" });

      esValue[implSymbol]["search"] = V;
    }

    get searchParams() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get searchParams' called on an object that is not a valid instance of URL.");
      }

      return utils.getSameObject(this, "searchParams", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["searchParams"]);
      });
    }

    get hash() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get hash' called on an object that is not a valid instance of URL.");
      }

      return esValue[implSymbol]["hash"];
    }

    set hash(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set hash' called on an object that is not a valid instance of URL.");
      }

      V = conversions["USVString"](V, { context: "Failed to set the 'hash' property on 'URL': The provided value" });

      esValue[implSymbol]["hash"] = V;
    }
  }
  Object.defineProperties(URL.prototype, {
    toJSON: { enumerable: true },
    href: { enumerable: true },
    toString: { enumerable: true },
    origin: { enumerable: true },
    protocol: { enumerable: true },
    username: { enumerable: true },
    password: { enumerable: true },
    host: { enumerable: true },
    hostname: { enumerable: true },
    port: { enumerable: true },
    pathname: { enumerable: true },
    search: { enumerable: true },
    searchParams: { enumerable: true },
    hash: { enumerable: true },
    [Symbol.toStringTag]: { value: "URL", configurable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = URL;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: URL
  });

  if (globalNames.includes("Window")) {
    Object.defineProperty(globalObject, "webkitURL", {
      configurable: true,
      writable: true,
      value: URL
    });
  }
};

const Impl = require("./URL-impl.js");
