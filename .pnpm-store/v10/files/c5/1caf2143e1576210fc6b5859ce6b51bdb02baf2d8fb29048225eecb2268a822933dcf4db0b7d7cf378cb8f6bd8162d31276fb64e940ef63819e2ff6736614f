"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const DOMRectInit = require("./DOMRectInit.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const DOMRectReadOnly = require("./DOMRectReadOnly.js");

const interfaceName = "DOMRect";

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
  throw new globalObject.TypeError(`${context} is not of type 'DOMRect'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["DOMRect"].prototype;
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

exports._internalSetup = (wrapper, globalObject) => {
  DOMRectReadOnly._internalSetup(wrapper, globalObject);
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

const exposed = new Set(["Window", "Worker"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class DOMRect extends globalObject.DOMRectReadOnly {
    constructor() {
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg !== undefined) {
          curArg = conversions["unrestricted double"](curArg, {
            context: "Failed to construct 'DOMRect': parameter 1",
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
            context: "Failed to construct 'DOMRect': parameter 2",
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
            context: "Failed to construct 'DOMRect': parameter 3",
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
            context: "Failed to construct 'DOMRect': parameter 4",
            globals: globalObject
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      return exports.setup(Object.create(new.target.prototype), globalObject, args);
    }

    get x() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get x' called on an object that is not a valid instance of DOMRect.");
      }

      return esValue[implSymbol]["x"];
    }

    set x(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'set x' called on an object that is not a valid instance of DOMRect.");
      }

      V = conversions["unrestricted double"](V, {
        context: "Failed to set the 'x' property on 'DOMRect': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["x"] = V;
    }

    get y() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get y' called on an object that is not a valid instance of DOMRect.");
      }

      return esValue[implSymbol]["y"];
    }

    set y(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'set y' called on an object that is not a valid instance of DOMRect.");
      }

      V = conversions["unrestricted double"](V, {
        context: "Failed to set the 'y' property on 'DOMRect': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["y"] = V;
    }

    get width() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get width' called on an object that is not a valid instance of DOMRect.");
      }

      return esValue[implSymbol]["width"];
    }

    set width(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'set width' called on an object that is not a valid instance of DOMRect.");
      }

      V = conversions["unrestricted double"](V, {
        context: "Failed to set the 'width' property on 'DOMRect': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["width"] = V;
    }

    get height() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get height' called on an object that is not a valid instance of DOMRect.");
      }

      return esValue[implSymbol]["height"];
    }

    set height(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'set height' called on an object that is not a valid instance of DOMRect.");
      }

      V = conversions["unrestricted double"](V, {
        context: "Failed to set the 'height' property on 'DOMRect': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["height"] = V;
    }

    static fromRect() {
      const args = [];
      {
        let curArg = arguments[0];
        curArg = DOMRectInit.convert(globalObject, curArg, {
          context: "Failed to execute 'fromRect' on 'DOMRect': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(Impl.implementation.fromRect(globalObject, ...args));
    }
  }
  Object.defineProperties(DOMRect.prototype, {
    x: { enumerable: true },
    y: { enumerable: true },
    width: { enumerable: true },
    height: { enumerable: true },
    [Symbol.toStringTag]: { value: "DOMRect", configurable: true }
  });
  Object.defineProperties(DOMRect, { fromRect: { enumerable: true } });
  ctorRegistry[interfaceName] = DOMRect;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: DOMRect
  });
};

const Impl = require("../geometry/DOMRect-impl.js");
