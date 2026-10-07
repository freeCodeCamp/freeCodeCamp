"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const TouchEventInit = require("./TouchEventInit.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const UIEvent = require("./UIEvent.js");

const interfaceName = "TouchEvent";

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
  throw new globalObject.TypeError(`${context} is not of type 'TouchEvent'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["TouchEvent"].prototype;
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
  UIEvent._internalSetup(wrapper, globalObject);
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

const exposed = new Set(["Window"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class TouchEvent extends globalObject.UIEvent {
    constructor(type) {
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to construct 'TouchEvent': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to construct 'TouchEvent': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = TouchEventInit.convert(globalObject, curArg, {
          context: "Failed to construct 'TouchEvent': parameter 2"
        });
        args.push(curArg);
      }
      return exports.setup(Object.create(new.target.prototype), globalObject, args);
    }

    get touches() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get touches' called on an object that is not a valid instance of TouchEvent."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["touches"]);
    }

    get targetTouches() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get targetTouches' called on an object that is not a valid instance of TouchEvent."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["targetTouches"]);
    }

    get changedTouches() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get changedTouches' called on an object that is not a valid instance of TouchEvent."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["changedTouches"]);
    }

    get altKey() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get altKey' called on an object that is not a valid instance of TouchEvent."
        );
      }

      return esValue[implSymbol]["altKey"];
    }

    get metaKey() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get metaKey' called on an object that is not a valid instance of TouchEvent."
        );
      }

      return esValue[implSymbol]["metaKey"];
    }

    get ctrlKey() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ctrlKey' called on an object that is not a valid instance of TouchEvent."
        );
      }

      return esValue[implSymbol]["ctrlKey"];
    }

    get shiftKey() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get shiftKey' called on an object that is not a valid instance of TouchEvent."
        );
      }

      return esValue[implSymbol]["shiftKey"];
    }
  }
  Object.defineProperties(TouchEvent.prototype, {
    touches: { enumerable: true },
    targetTouches: { enumerable: true },
    changedTouches: { enumerable: true },
    altKey: { enumerable: true },
    metaKey: { enumerable: true },
    ctrlKey: { enumerable: true },
    shiftKey: { enumerable: true },
    [Symbol.toStringTag]: { value: "TouchEvent", configurable: true }
  });
  ctorRegistry[interfaceName] = TouchEvent;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: TouchEvent
  });
};

const Impl = require("../events/TouchEvent-impl.js");
