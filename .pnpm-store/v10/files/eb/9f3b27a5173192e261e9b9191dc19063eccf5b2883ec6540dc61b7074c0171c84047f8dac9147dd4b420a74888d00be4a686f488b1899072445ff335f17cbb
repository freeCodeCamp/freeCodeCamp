"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "SVGPreserveAspectRatio";

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
  throw new globalObject.TypeError(`${context} is not of type 'SVGPreserveAspectRatio'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["SVGPreserveAspectRatio"].prototype;
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
  class SVGPreserveAspectRatio {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    get align() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get align' called on an object that is not a valid instance of SVGPreserveAspectRatio."
        );
      }

      return esValue[implSymbol]["align"];
    }

    set align(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set align' called on an object that is not a valid instance of SVGPreserveAspectRatio."
        );
      }

      V = conversions["unsigned short"](V, {
        context: "Failed to set the 'align' property on 'SVGPreserveAspectRatio': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["align"] = V;
    }

    get meetOrSlice() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get meetOrSlice' called on an object that is not a valid instance of SVGPreserveAspectRatio."
        );
      }

      return esValue[implSymbol]["meetOrSlice"];
    }

    set meetOrSlice(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set meetOrSlice' called on an object that is not a valid instance of SVGPreserveAspectRatio."
        );
      }

      V = conversions["unsigned short"](V, {
        context: "Failed to set the 'meetOrSlice' property on 'SVGPreserveAspectRatio': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["meetOrSlice"] = V;
    }
  }
  Object.defineProperties(SVGPreserveAspectRatio.prototype, {
    align: { enumerable: true },
    meetOrSlice: { enumerable: true },
    [Symbol.toStringTag]: { value: "SVGPreserveAspectRatio", configurable: true },
    SVG_PRESERVEASPECTRATIO_UNKNOWN: { value: 0, enumerable: true },
    SVG_PRESERVEASPECTRATIO_NONE: { value: 1, enumerable: true },
    SVG_PRESERVEASPECTRATIO_XMINYMIN: { value: 2, enumerable: true },
    SVG_PRESERVEASPECTRATIO_XMIDYMIN: { value: 3, enumerable: true },
    SVG_PRESERVEASPECTRATIO_XMAXYMIN: { value: 4, enumerable: true },
    SVG_PRESERVEASPECTRATIO_XMINYMID: { value: 5, enumerable: true },
    SVG_PRESERVEASPECTRATIO_XMIDYMID: { value: 6, enumerable: true },
    SVG_PRESERVEASPECTRATIO_XMAXYMID: { value: 7, enumerable: true },
    SVG_PRESERVEASPECTRATIO_XMINYMAX: { value: 8, enumerable: true },
    SVG_PRESERVEASPECTRATIO_XMIDYMAX: { value: 9, enumerable: true },
    SVG_PRESERVEASPECTRATIO_XMAXYMAX: { value: 10, enumerable: true },
    SVG_MEETORSLICE_UNKNOWN: { value: 0, enumerable: true },
    SVG_MEETORSLICE_MEET: { value: 1, enumerable: true },
    SVG_MEETORSLICE_SLICE: { value: 2, enumerable: true }
  });
  Object.defineProperties(SVGPreserveAspectRatio, {
    SVG_PRESERVEASPECTRATIO_UNKNOWN: { value: 0, enumerable: true },
    SVG_PRESERVEASPECTRATIO_NONE: { value: 1, enumerable: true },
    SVG_PRESERVEASPECTRATIO_XMINYMIN: { value: 2, enumerable: true },
    SVG_PRESERVEASPECTRATIO_XMIDYMIN: { value: 3, enumerable: true },
    SVG_PRESERVEASPECTRATIO_XMAXYMIN: { value: 4, enumerable: true },
    SVG_PRESERVEASPECTRATIO_XMINYMID: { value: 5, enumerable: true },
    SVG_PRESERVEASPECTRATIO_XMIDYMID: { value: 6, enumerable: true },
    SVG_PRESERVEASPECTRATIO_XMAXYMID: { value: 7, enumerable: true },
    SVG_PRESERVEASPECTRATIO_XMINYMAX: { value: 8, enumerable: true },
    SVG_PRESERVEASPECTRATIO_XMIDYMAX: { value: 9, enumerable: true },
    SVG_PRESERVEASPECTRATIO_XMAXYMAX: { value: 10, enumerable: true },
    SVG_MEETORSLICE_UNKNOWN: { value: 0, enumerable: true },
    SVG_MEETORSLICE_MEET: { value: 1, enumerable: true },
    SVG_MEETORSLICE_SLICE: { value: 2, enumerable: true }
  });
  ctorRegistry[interfaceName] = SVGPreserveAspectRatio;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: SVGPreserveAspectRatio
  });
};

const Impl = require("../svg/SVGPreserveAspectRatio-impl.js");
