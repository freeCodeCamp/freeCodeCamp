"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const KeyboardEventInit = require("./KeyboardEventInit.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const UIEvent = require("./UIEvent.js");

const interfaceName = "KeyboardEvent";

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
  throw new TypeError(`${context} is not of type 'KeyboardEvent'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["KeyboardEvent"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor KeyboardEvent is not installed on the passed global object");
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

  if (globalObject.UIEvent === undefined) {
    throw new Error("Internal error: attempting to evaluate KeyboardEvent before UIEvent");
  }
  class KeyboardEvent extends globalObject.UIEvent {
    constructor(type) {
      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to construct 'KeyboardEvent': 1 argument required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, { context: "Failed to construct 'KeyboardEvent': parameter 1" });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = KeyboardEventInit.convert(curArg, { context: "Failed to construct 'KeyboardEvent': parameter 2" });
        args.push(curArg);
      }
      return exports.setup(Object.create(new.target.prototype), globalObject, args);
    }

    getModifierState(keyArg) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'getModifierState' called on an object that is not a valid instance of KeyboardEvent.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'getModifierState' on 'KeyboardEvent': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getModifierState' on 'KeyboardEvent': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].getModifierState(...args);
    }

    initKeyboardEvent(typeArg) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'initKeyboardEvent' called on an object that is not a valid instance of KeyboardEvent.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["boolean"](curArg, {
            context: "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': parameter 2"
          });
        } else {
          curArg = false;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        if (curArg !== undefined) {
          curArg = conversions["boolean"](curArg, {
            context: "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': parameter 3"
          });
        } else {
          curArg = false;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[3];
        if (curArg !== undefined) {
          if (curArg === null || curArg === undefined) {
            curArg = null;
          } else {
            curArg = utils.tryImplForWrapper(curArg);
          }
        } else {
          curArg = null;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[4];
        if (curArg !== undefined) {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': parameter 5"
          });
        } else {
          curArg = "";
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[5];
        if (curArg !== undefined) {
          curArg = conversions["unsigned long"](curArg, {
            context: "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': parameter 6"
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[6];
        if (curArg !== undefined) {
          curArg = conversions["boolean"](curArg, {
            context: "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': parameter 7"
          });
        } else {
          curArg = false;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[7];
        if (curArg !== undefined) {
          curArg = conversions["boolean"](curArg, {
            context: "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': parameter 8"
          });
        } else {
          curArg = false;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[8];
        if (curArg !== undefined) {
          curArg = conversions["boolean"](curArg, {
            context: "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': parameter 9"
          });
        } else {
          curArg = false;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[9];
        if (curArg !== undefined) {
          curArg = conversions["boolean"](curArg, {
            context: "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': parameter 10"
          });
        } else {
          curArg = false;
        }
        args.push(curArg);
      }
      return esValue[implSymbol].initKeyboardEvent(...args);
    }

    get key() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get key' called on an object that is not a valid instance of KeyboardEvent.");
      }

      return esValue[implSymbol]["key"];
    }

    get code() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get code' called on an object that is not a valid instance of KeyboardEvent.");
      }

      return esValue[implSymbol]["code"];
    }

    get location() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get location' called on an object that is not a valid instance of KeyboardEvent.");
      }

      return esValue[implSymbol]["location"];
    }

    get ctrlKey() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ctrlKey' called on an object that is not a valid instance of KeyboardEvent.");
      }

      return esValue[implSymbol]["ctrlKey"];
    }

    get shiftKey() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get shiftKey' called on an object that is not a valid instance of KeyboardEvent.");
      }

      return esValue[implSymbol]["shiftKey"];
    }

    get altKey() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get altKey' called on an object that is not a valid instance of KeyboardEvent.");
      }

      return esValue[implSymbol]["altKey"];
    }

    get metaKey() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get metaKey' called on an object that is not a valid instance of KeyboardEvent.");
      }

      return esValue[implSymbol]["metaKey"];
    }

    get repeat() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get repeat' called on an object that is not a valid instance of KeyboardEvent.");
      }

      return esValue[implSymbol]["repeat"];
    }

    get isComposing() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get isComposing' called on an object that is not a valid instance of KeyboardEvent.");
      }

      return esValue[implSymbol]["isComposing"];
    }

    get charCode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get charCode' called on an object that is not a valid instance of KeyboardEvent.");
      }

      return esValue[implSymbol]["charCode"];
    }

    get keyCode() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get keyCode' called on an object that is not a valid instance of KeyboardEvent.");
      }

      return esValue[implSymbol]["keyCode"];
    }
  }
  Object.defineProperties(KeyboardEvent.prototype, {
    getModifierState: { enumerable: true },
    initKeyboardEvent: { enumerable: true },
    key: { enumerable: true },
    code: { enumerable: true },
    location: { enumerable: true },
    ctrlKey: { enumerable: true },
    shiftKey: { enumerable: true },
    altKey: { enumerable: true },
    metaKey: { enumerable: true },
    repeat: { enumerable: true },
    isComposing: { enumerable: true },
    charCode: { enumerable: true },
    keyCode: { enumerable: true },
    [Symbol.toStringTag]: { value: "KeyboardEvent", configurable: true },
    DOM_KEY_LOCATION_STANDARD: { value: 0x00, enumerable: true },
    DOM_KEY_LOCATION_LEFT: { value: 0x01, enumerable: true },
    DOM_KEY_LOCATION_RIGHT: { value: 0x02, enumerable: true },
    DOM_KEY_LOCATION_NUMPAD: { value: 0x03, enumerable: true }
  });
  Object.defineProperties(KeyboardEvent, {
    DOM_KEY_LOCATION_STANDARD: { value: 0x00, enumerable: true },
    DOM_KEY_LOCATION_LEFT: { value: 0x01, enumerable: true },
    DOM_KEY_LOCATION_RIGHT: { value: 0x02, enumerable: true },
    DOM_KEY_LOCATION_NUMPAD: { value: 0x03, enumerable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = KeyboardEvent;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: KeyboardEvent
  });
};

const Impl = require("../events/KeyboardEvent-impl.js");
