"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "SVGRect";

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
  throw new globalObject.TypeError(`${context} is not of type 'SVGRect'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["SVGRect"].prototype;
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
  class SVGRect {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    get x() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get x' called on an object that is not a valid instance of SVGRect.");
      }

      return esValue[implSymbol]["x"];
    }

    set x(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'set x' called on an object that is not a valid instance of SVGRect.");
      }

      V = conversions["float"](V, {
        context: "Failed to set the 'x' property on 'SVGRect': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["x"] = V;
    }

    get y() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get y' called on an object that is not a valid instance of SVGRect.");
      }

      return esValue[implSymbol]["y"];
    }

    set y(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'set y' called on an object that is not a valid instance of SVGRect.");
      }

      V = conversions["float"](V, {
        context: "Failed to set the 'y' property on 'SVGRect': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["y"] = V;
    }

    get width() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get width' called on an object that is not a valid instance of SVGRect.");
      }

      return esValue[implSymbol]["width"];
    }

    set width(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'set width' called on an object that is not a valid instance of SVGRect.");
      }

      V = conversions["float"](V, {
        context: "Failed to set the 'width' property on 'SVGRect': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["width"] = V;
    }

    get height() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get height' called on an object that is not a valid instance of SVGRect.");
      }

      return esValue[implSymbol]["height"];
    }

    set height(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'set height' called on an object that is not a valid instance of SVGRect.");
      }

      V = conversions["float"](V, {
        context: "Failed to set the 'height' property on 'SVGRect': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["height"] = V;
    }
  }
  Object.defineProperties(SVGRect.prototype, {
    x: { enumerable: true },
    y: { enumerable: true },
    width: { enumerable: true },
    height: { enumerable: true },
    [Symbol.toStringTag]: { value: "SVGRect", configurable: true }
  });
  ctorRegistry[interfaceName] = SVGRect;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: SVGRect
  });
};

const Impl = require("../svg/SVGRect-impl.js");
