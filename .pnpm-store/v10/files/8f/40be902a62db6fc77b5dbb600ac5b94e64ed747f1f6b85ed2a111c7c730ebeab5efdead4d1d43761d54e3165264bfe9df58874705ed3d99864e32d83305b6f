"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const DOMRectInit = require("./DOMRectInit.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "DOMRectReadOnly";

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
  throw new globalObject.TypeError(`${context} is not of type 'DOMRectReadOnly'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["DOMRectReadOnly"].prototype;
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

const exposed = new Set(["Window", "Worker"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class DOMRectReadOnly {
    constructor() {
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg !== undefined) {
          curArg = conversions["unrestricted double"](curArg, {
            context: "Failed to construct 'DOMRectReadOnly': parameter 1",
            globals: globalObject
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["unrestricted double"](curArg, {
            context: "Failed to construct 'DOMRectReadOnly': parameter 2",
            globals: globalObject
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        if (curArg !== undefined) {
          curArg = conversions["unrestricted double"](curArg, {
            context: "Failed to construct 'DOMRectReadOnly': parameter 3",
            globals: globalObject
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[3];
        if (curArg !== undefined) {
          curArg = conversions["unrestricted double"](curArg, {
            context: "Failed to construct 'DOMRectReadOnly': parameter 4",
            globals: globalObject
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      return exports.setup(Object.create(new.target.prototype), globalObject, args);
    }

    toJSON() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'toJSON' called on an object that is not a valid instance of DOMRectReadOnly."
        );
      }

      return esValue[implSymbol].toJSON();
    }

    get x() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get x' called on an object that is not a valid instance of DOMRectReadOnly."
        );
      }

      return esValue[implSymbol]["x"];
    }

    get y() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get y' called on an object that is not a valid instance of DOMRectReadOnly."
        );
      }

      return esValue[implSymbol]["y"];
    }

    get width() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get width' called on an object that is not a valid instance of DOMRectReadOnly."
        );
      }

      return esValue[implSymbol]["width"];
    }

    get height() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get height' called on an object that is not a valid instance of DOMRectReadOnly."
        );
      }

      return esValue[implSymbol]["height"];
    }

    get top() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get top' called on an object that is not a valid instance of DOMRectReadOnly."
        );
      }

      return esValue[implSymbol]["top"];
    }

    get right() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get right' called on an object that is not a valid instance of DOMRectReadOnly."
        );
      }

      return esValue[implSymbol]["right"];
    }

    get bottom() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get bottom' called on an object that is not a valid instance of DOMRectReadOnly."
        );
      }

      return esValue[implSymbol]["bottom"];
    }

    get left() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get left' called on an object that is not a valid instance of DOMRectReadOnly."
        );
      }

      return esValue[implSymbol]["left"];
    }

    static fromRect() {
      const args = [];
      {
        let curArg = arguments[0];
        curArg = DOMRectInit.convert(globalObject, curArg, {
          context: "Failed to execute 'fromRect' on 'DOMRectReadOnly': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(Impl.implementation.fromRect(globalObject, ...args));
    }
  }
  Object.defineProperties(DOMRectReadOnly.prototype, {
    toJSON: { enumerable: true },
    x: { enumerable: true },
    y: { enumerable: true },
    width: { enumerable: true },
    height: { enumerable: true },
    top: { enumerable: true },
    right: { enumerable: true },
    bottom: { enumerable: true },
    left: { enumerable: true },
    [Symbol.toStringTag]: { value: "DOMRectReadOnly", configurable: true }
  });
  Object.defineProperties(DOMRectReadOnly, { fromRect: { enumerable: true } });
  ctorRegistry[interfaceName] = DOMRectReadOnly;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: DOMRectReadOnly
  });
};

const Impl = require("../geometry/DOMRectReadOnly-impl.js");
