"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "Location";

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
  throw new TypeError(`${context} is not of type 'Location'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["Location"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor Location is not installed on the passed global object");
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

exports._internalSetup = (wrapper, globalObject) => {
  Object.defineProperties(
    wrapper,
    Object.getOwnPropertyDescriptors({
      assign(url) {
        const esValue = this !== null && this !== undefined ? this : globalObject;
        if (!exports.is(esValue)) {
          throw new TypeError("'assign' called on an object that is not a valid instance of Location.");
        }

        if (arguments.length < 1) {
          throw new TypeError(
            "Failed to execute 'assign' on 'Location': 1 argument required, but only " + arguments.length + " present."
          );
        }
        const args = [];
        {
          let curArg = arguments[0];
          curArg = conversions["USVString"](curArg, {
            context: "Failed to execute 'assign' on 'Location': parameter 1"
          });
          args.push(curArg);
        }
        return esValue[implSymbol].assign(...args);
      },
      replace(url) {
        const esValue = this !== null && this !== undefined ? this : globalObject;
        if (!exports.is(esValue)) {
          throw new TypeError("'replace' called on an object that is not a valid instance of Location.");
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
        return esValue[implSymbol].replace(...args);
      },
      reload() {
        const esValue = this !== null && this !== undefined ? this : globalObject;
        if (!exports.is(esValue)) {
          throw new TypeError("'reload' called on an object that is not a valid instance of Location.");
        }

        return esValue[implSymbol].reload();
      },
      get href() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new TypeError("'get href' called on an object that is not a valid instance of Location.");
        }

        return esValue[implSymbol]["href"];
      },
      set href(V) {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new TypeError("'set href' called on an object that is not a valid instance of Location.");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'href' property on 'Location': The provided value"
        });

        esValue[implSymbol]["href"] = V;
      },
      toString() {
        const esValue = this;
        if (!exports.is(esValue)) {
          throw new TypeError("'toString' called on an object that is not a valid instance of Location.");
        }

        return esValue[implSymbol]["href"];
      },
      get origin() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new TypeError("'get origin' called on an object that is not a valid instance of Location.");
        }

        return esValue[implSymbol]["origin"];
      },
      get protocol() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new TypeError("'get protocol' called on an object that is not a valid instance of Location.");
        }

        return esValue[implSymbol]["protocol"];
      },
      set protocol(V) {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new TypeError("'set protocol' called on an object that is not a valid instance of Location.");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'protocol' property on 'Location': The provided value"
        });

        esValue[implSymbol]["protocol"] = V;
      },
      get host() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new TypeError("'get host' called on an object that is not a valid instance of Location.");
        }

        return esValue[implSymbol]["host"];
      },
      set host(V) {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new TypeError("'set host' called on an object that is not a valid instance of Location.");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'host' property on 'Location': The provided value"
        });

        esValue[implSymbol]["host"] = V;
      },
      get hostname() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new TypeError("'get hostname' called on an object that is not a valid instance of Location.");
        }

        return esValue[implSymbol]["hostname"];
      },
      set hostname(V) {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new TypeError("'set hostname' called on an object that is not a valid instance of Location.");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'hostname' property on 'Location': The provided value"
        });

        esValue[implSymbol]["hostname"] = V;
      },
      get port() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new TypeError("'get port' called on an object that is not a valid instance of Location.");
        }

        return esValue[implSymbol]["port"];
      },
      set port(V) {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new TypeError("'set port' called on an object that is not a valid instance of Location.");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'port' property on 'Location': The provided value"
        });

        esValue[implSymbol]["port"] = V;
      },
      get pathname() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new TypeError("'get pathname' called on an object that is not a valid instance of Location.");
        }

        return esValue[implSymbol]["pathname"];
      },
      set pathname(V) {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new TypeError("'set pathname' called on an object that is not a valid instance of Location.");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'pathname' property on 'Location': The provided value"
        });

        esValue[implSymbol]["pathname"] = V;
      },
      get search() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new TypeError("'get search' called on an object that is not a valid instance of Location.");
        }

        return esValue[implSymbol]["search"];
      },
      set search(V) {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new TypeError("'set search' called on an object that is not a valid instance of Location.");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'search' property on 'Location': The provided value"
        });

        esValue[implSymbol]["search"] = V;
      },
      get hash() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new TypeError("'get hash' called on an object that is not a valid instance of Location.");
        }

        return esValue[implSymbol]["hash"];
      },
      set hash(V) {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new TypeError("'set hash' called on an object that is not a valid instance of Location.");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'hash' property on 'Location': The provided value"
        });

        esValue[implSymbol]["hash"] = V;
      }
    })
  );

  Object.defineProperties(wrapper, {
    assign: { configurable: false, writable: false },
    replace: { configurable: false, writable: false },
    reload: { configurable: false, writable: false },
    href: { configurable: false },
    toString: { configurable: false, writable: false },
    origin: { configurable: false },
    protocol: { configurable: false },
    host: { configurable: false },
    hostname: { configurable: false },
    port: { configurable: false },
    pathname: { configurable: false },
    search: { configurable: false },
    hash: { configurable: false }
  });
};

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

const exposed = new Set(["Window"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }
  class Location {
    constructor() {
      throw new TypeError("Illegal constructor");
    }
  }
  Object.defineProperties(Location.prototype, { [Symbol.toStringTag]: { value: "Location", configurable: true } });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = Location;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Location
  });
};

const Impl = require("../window/Location-impl.js");
