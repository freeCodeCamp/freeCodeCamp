"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "Navigator";

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
  throw new globalObject.TypeError(`${context} is not of type 'Navigator'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["Navigator"].prototype;
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

const exposed = new Set(["Window"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class Navigator {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    javaEnabled() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'javaEnabled' called on an object that is not a valid instance of Navigator."
        );
      }

      return esValue[implSymbol].javaEnabled();
    }

    get appCodeName() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get appCodeName' called on an object that is not a valid instance of Navigator."
        );
      }

      return esValue[implSymbol]["appCodeName"];
    }

    get appName() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get appName' called on an object that is not a valid instance of Navigator."
        );
      }

      return esValue[implSymbol]["appName"];
    }

    get appVersion() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get appVersion' called on an object that is not a valid instance of Navigator."
        );
      }

      return esValue[implSymbol]["appVersion"];
    }

    get platform() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get platform' called on an object that is not a valid instance of Navigator."
        );
      }

      return esValue[implSymbol]["platform"];
    }

    get product() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get product' called on an object that is not a valid instance of Navigator."
        );
      }

      return esValue[implSymbol]["product"];
    }

    get productSub() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get productSub' called on an object that is not a valid instance of Navigator."
        );
      }

      return esValue[implSymbol]["productSub"];
    }

    get userAgent() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get userAgent' called on an object that is not a valid instance of Navigator."
        );
      }

      return esValue[implSymbol]["userAgent"];
    }

    get vendor() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get vendor' called on an object that is not a valid instance of Navigator.");
      }

      return esValue[implSymbol]["vendor"];
    }

    get vendorSub() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get vendorSub' called on an object that is not a valid instance of Navigator."
        );
      }

      return esValue[implSymbol]["vendorSub"];
    }

    get language() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get language' called on an object that is not a valid instance of Navigator."
        );
      }

      return esValue[implSymbol]["language"];
    }

    get languages() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get languages' called on an object that is not a valid instance of Navigator."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["languages"]);
    }

    get onLine() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get onLine' called on an object that is not a valid instance of Navigator.");
      }

      return esValue[implSymbol]["onLine"];
    }

    get cookieEnabled() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get cookieEnabled' called on an object that is not a valid instance of Navigator."
        );
      }

      return esValue[implSymbol]["cookieEnabled"];
    }

    get plugins() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get plugins' called on an object that is not a valid instance of Navigator."
        );
      }

      return utils.getSameObject(this, "plugins", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["plugins"]);
      });
    }

    get mimeTypes() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get mimeTypes' called on an object that is not a valid instance of Navigator."
        );
      }

      return utils.getSameObject(this, "mimeTypes", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["mimeTypes"]);
      });
    }

    get hardwareConcurrency() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get hardwareConcurrency' called on an object that is not a valid instance of Navigator."
        );
      }

      return esValue[implSymbol]["hardwareConcurrency"];
    }
  }
  Object.defineProperties(Navigator.prototype, {
    javaEnabled: { enumerable: true },
    appCodeName: { enumerable: true },
    appName: { enumerable: true },
    appVersion: { enumerable: true },
    platform: { enumerable: true },
    product: { enumerable: true },
    productSub: { enumerable: true },
    userAgent: { enumerable: true },
    vendor: { enumerable: true },
    vendorSub: { enumerable: true },
    language: { enumerable: true },
    languages: { enumerable: true },
    onLine: { enumerable: true },
    cookieEnabled: { enumerable: true },
    plugins: { enumerable: true },
    mimeTypes: { enumerable: true },
    hardwareConcurrency: { enumerable: true },
    [Symbol.toStringTag]: { value: "Navigator", configurable: true }
  });
  ctorRegistry[interfaceName] = Navigator;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: Navigator
  });
};

const Impl = require("../navigator/Navigator-impl.js");
