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
exports.convert = (globalObject, value, { context = "The provided value" } = {}) => {
  if (exports.is(value)) {
    return utils.implForWrapper(value);
  }
  throw new globalObject.TypeError(`${context} is not of type 'Location'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["Location"].prototype;
  }

  return Object.create(proto);
}

exports.create = (globalObject, constructorArgs, privateData) => {
  const wrapper = makeWrapper(globalObject);
  return exports.setup(wrapper, globalObject, constructorArgs, privateData);
};

exports.createImpl = (globalObject, constructorArgs, privateData) => {
  const wrapper = exports.create(globalObject, constructorArgs, privateData);
  return utils.implForWrapper(wrapper);
};

function getUnforgeables(globalObject) {
  let unforgeables = unforgeablesMap.get(globalObject);
  if (unforgeables === undefined) {
    unforgeables = Object.create(null);
    utils.define(unforgeables, {
      assign(url) {
        const esValue = this !== null && this !== undefined ? this : globalObject;
        if (!exports.is(esValue)) {
          throw new globalObject.TypeError("'assign' called on an object that is not a valid instance of Location.");
        }

        if (arguments.length < 1) {
          throw new globalObject.TypeError(
            `Failed to execute 'assign' on 'Location': 1 argument required, but only ${arguments.length} present.`
          );
        }
        const args = [];
        {
          let curArg = arguments[0];
          curArg = conversions["USVString"](curArg, {
            context: "Failed to execute 'assign' on 'Location': parameter 1",
            globals: globalObject
          });
          args.push(curArg);
        }
        return esValue[implSymbol].assign(...args);
      },
      replace(url) {
        const esValue = this !== null && this !== undefined ? this : globalObject;
        if (!exports.is(esValue)) {
          throw new globalObject.TypeError("'replace' called on an object that is not a valid instance of Location.");
        }

        if (arguments.length < 1) {
          throw new globalObject.TypeError(
            `Failed to execute 'replace' on 'Location': 1 argument required, but only ${arguments.length} present.`
          );
        }
        const args = [];
        {
          let curArg = arguments[0];
          curArg = conversions["USVString"](curArg, {
            context: "Failed to execute 'replace' on 'Location': parameter 1",
            globals: globalObject
          });
          args.push(curArg);
        }
        return esValue[implSymbol].replace(...args);
      },
      reload() {
        const esValue = this !== null && this !== undefined ? this : globalObject;
        if (!exports.is(esValue)) {
          throw new globalObject.TypeError("'reload' called on an object that is not a valid instance of Location.");
        }

        return esValue[implSymbol].reload();
      },
      get href() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new globalObject.TypeError("'get href' called on an object that is not a valid instance of Location.");
        }

        return esValue[implSymbol]["href"];
      },
      set href(V) {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new globalObject.TypeError("'set href' called on an object that is not a valid instance of Location.");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'href' property on 'Location': The provided value",
          globals: globalObject
        });

        esValue[implSymbol]["href"] = V;
      },
      toString() {
        const esValue = this;
        if (!exports.is(esValue)) {
          throw new globalObject.TypeError("'toString' called on an object that is not a valid instance of Location.");
        }

        return esValue[implSymbol]["href"];
      },
      get origin() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new globalObject.TypeError(
            "'get origin' called on an object that is not a valid instance of Location."
          );
        }

        return esValue[implSymbol]["origin"];
      },
      get protocol() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new globalObject.TypeError(
            "'get protocol' called on an object that is not a valid instance of Location."
          );
        }

        return esValue[implSymbol]["protocol"];
      },
      set protocol(V) {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new globalObject.TypeError(
            "'set protocol' called on an object that is not a valid instance of Location."
          );
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'protocol' property on 'Location': The provided value",
          globals: globalObject
        });

        esValue[implSymbol]["protocol"] = V;
      },
      get host() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new globalObject.TypeError("'get host' called on an object that is not a valid instance of Location.");
        }

        return esValue[implSymbol]["host"];
      },
      set host(V) {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new globalObject.TypeError("'set host' called on an object that is not a valid instance of Location.");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'host' property on 'Location': The provided value",
          globals: globalObject
        });

        esValue[implSymbol]["host"] = V;
      },
      get hostname() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new globalObject.TypeError(
            "'get hostname' called on an object that is not a valid instance of Location."
          );
        }

        return esValue[implSymbol]["hostname"];
      },
      set hostname(V) {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new globalObject.TypeError(
            "'set hostname' called on an object that is not a valid instance of Location."
          );
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'hostname' property on 'Location': The provided value",
          globals: globalObject
        });

        esValue[implSymbol]["hostname"] = V;
      },
      get port() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new globalObject.TypeError("'get port' called on an object that is not a valid instance of Location.");
        }

        return esValue[implSymbol]["port"];
      },
      set port(V) {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new globalObject.TypeError("'set port' called on an object that is not a valid instance of Location.");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'port' property on 'Location': The provided value",
          globals: globalObject
        });

        esValue[implSymbol]["port"] = V;
      },
      get pathname() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new globalObject.TypeError(
            "'get pathname' called on an object that is not a valid instance of Location."
          );
        }

        return esValue[implSymbol]["pathname"];
      },
      set pathname(V) {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new globalObject.TypeError(
            "'set pathname' called on an object that is not a valid instance of Location."
          );
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'pathname' property on 'Location': The provided value",
          globals: globalObject
        });

        esValue[implSymbol]["pathname"] = V;
      },
      get search() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new globalObject.TypeError(
            "'get search' called on an object that is not a valid instance of Location."
          );
        }

        return esValue[implSymbol]["search"];
      },
      set search(V) {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new globalObject.TypeError(
            "'set search' called on an object that is not a valid instance of Location."
          );
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'search' property on 'Location': The provided value",
          globals: globalObject
        });

        esValue[implSymbol]["search"] = V;
      },
      get hash() {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new globalObject.TypeError("'get hash' called on an object that is not a valid instance of Location.");
        }

        return esValue[implSymbol]["hash"];
      },
      set hash(V) {
        const esValue = this !== null && this !== undefined ? this : globalObject;

        if (!exports.is(esValue)) {
          throw new globalObject.TypeError("'set hash' called on an object that is not a valid instance of Location.");
        }

        V = conversions["USVString"](V, {
          context: "Failed to set the 'hash' property on 'Location': The provided value",
          globals: globalObject
        });

        esValue[implSymbol]["hash"] = V;
      }
    });
    Object.defineProperties(unforgeables, {
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
    unforgeablesMap.set(globalObject, unforgeables);
  }
  return unforgeables;
}

exports._internalSetup = (wrapper, globalObject) => {
  utils.define(wrapper, getUnforgeables(globalObject));
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

exports.new = (globalObject, newTarget) => {
  const wrapper = makeWrapper(globalObject, newTarget);

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

const unforgeablesMap = new WeakMap();
const exposed = new Set(["Window"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class Location {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }
  }
  Object.defineProperties(Location.prototype, { [Symbol.toStringTag]: { value: "Location", configurable: true } });
  ctorRegistry[interfaceName] = Location;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Location
  });
};

const Impl = require("../window/Location-impl.js");
