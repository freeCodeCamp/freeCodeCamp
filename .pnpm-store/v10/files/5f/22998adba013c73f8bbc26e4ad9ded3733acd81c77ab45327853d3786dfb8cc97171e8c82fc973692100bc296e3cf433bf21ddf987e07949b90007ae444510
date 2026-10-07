"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const MouseEventInit = require("./MouseEventInit.js");
const EventTarget = require("./EventTarget.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const UIEvent = require("./UIEvent.js");

const interfaceName = "MouseEvent";

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
  throw new globalObject.TypeError(`${context} is not of type 'MouseEvent'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["MouseEvent"].prototype;
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
  class MouseEvent extends globalObject.UIEvent {
    constructor(type) {
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to construct 'MouseEvent': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to construct 'MouseEvent': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = MouseEventInit.convert(globalObject, curArg, {
          context: "Failed to construct 'MouseEvent': parameter 2"
        });
        args.push(curArg);
      }
      return exports.setup(Object.create(new.target.prototype), globalObject, args);
    }

    getModifierState(keyArg) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'getModifierState' called on an object that is not a valid instance of MouseEvent."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'getModifierState' on 'MouseEvent': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getModifierState' on 'MouseEvent': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].getModifierState(...args);
    }

    initMouseEvent(typeArg) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'initMouseEvent' called on an object that is not a valid instance of MouseEvent."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'initMouseEvent' on 'MouseEvent': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["boolean"](curArg, {
            context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 2",
            globals: globalObject
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
            context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 3",
            globals: globalObject
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
          curArg = conversions["long"](curArg, {
            context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 5",
            globals: globalObject
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[5];
        if (curArg !== undefined) {
          curArg = conversions["long"](curArg, {
            context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 6",
            globals: globalObject
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[6];
        if (curArg !== undefined) {
          curArg = conversions["long"](curArg, {
            context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 7",
            globals: globalObject
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[7];
        if (curArg !== undefined) {
          curArg = conversions["long"](curArg, {
            context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 8",
            globals: globalObject
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[8];
        if (curArg !== undefined) {
          curArg = conversions["long"](curArg, {
            context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 9",
            globals: globalObject
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[9];
        if (curArg !== undefined) {
          curArg = conversions["boolean"](curArg, {
            context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 10",
            globals: globalObject
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[10];
        if (curArg !== undefined) {
          curArg = conversions["boolean"](curArg, {
            context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 11",
            globals: globalObject
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[11];
        if (curArg !== undefined) {
          curArg = conversions["boolean"](curArg, {
            context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 12",
            globals: globalObject
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[12];
        if (curArg !== undefined) {
          curArg = conversions["boolean"](curArg, {
            context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 13",
            globals: globalObject
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[13];
        if (curArg !== undefined) {
          curArg = conversions["short"](curArg, {
            context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 14",
            globals: globalObject
          });
        } else {
          curArg = 0;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[14];
        if (curArg !== undefined) {
          if (curArg === null || curArg === undefined) {
            curArg = null;
          } else {
            curArg = EventTarget.convert(globalObject, curArg, {
              context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 15"
            });
          }
        } else {
          curArg = null;
        }
        args.push(curArg);
      }
      return esValue[implSymbol].initMouseEvent(...args);
    }

    get screenX() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get screenX' called on an object that is not a valid instance of MouseEvent."
        );
      }

      return esValue[implSymbol]["screenX"];
    }

    get screenY() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get screenY' called on an object that is not a valid instance of MouseEvent."
        );
      }

      return esValue[implSymbol]["screenY"];
    }

    get clientX() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get clientX' called on an object that is not a valid instance of MouseEvent."
        );
      }

      return esValue[implSymbol]["clientX"];
    }

    get clientY() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get clientY' called on an object that is not a valid instance of MouseEvent."
        );
      }

      return esValue[implSymbol]["clientY"];
    }

    get ctrlKey() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ctrlKey' called on an object that is not a valid instance of MouseEvent."
        );
      }

      return esValue[implSymbol]["ctrlKey"];
    }

    get shiftKey() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get shiftKey' called on an object that is not a valid instance of MouseEvent."
        );
      }

      return esValue[implSymbol]["shiftKey"];
    }

    get altKey() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get altKey' called on an object that is not a valid instance of MouseEvent."
        );
      }

      return esValue[implSymbol]["altKey"];
    }

    get metaKey() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get metaKey' called on an object that is not a valid instance of MouseEvent."
        );
      }

      return esValue[implSymbol]["metaKey"];
    }

    get button() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get button' called on an object that is not a valid instance of MouseEvent."
        );
      }

      return esValue[implSymbol]["button"];
    }

    get buttons() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get buttons' called on an object that is not a valid instance of MouseEvent."
        );
      }

      return esValue[implSymbol]["buttons"];
    }

    get relatedTarget() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get relatedTarget' called on an object that is not a valid instance of MouseEvent."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["relatedTarget"]);
    }

    get pageX() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get pageX' called on an object that is not a valid instance of MouseEvent.");
      }

      return esValue[implSymbol]["pageX"];
    }

    get pageY() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get pageY' called on an object that is not a valid instance of MouseEvent.");
      }

      return esValue[implSymbol]["pageY"];
    }

    get x() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get x' called on an object that is not a valid instance of MouseEvent.");
      }

      return esValue[implSymbol]["x"];
    }

    get y() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get y' called on an object that is not a valid instance of MouseEvent.");
      }

      return esValue[implSymbol]["y"];
    }

    get offsetX() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get offsetX' called on an object that is not a valid instance of MouseEvent."
        );
      }

      return esValue[implSymbol]["offsetX"];
    }

    get offsetY() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get offsetY' called on an object that is not a valid instance of MouseEvent."
        );
      }

      return esValue[implSymbol]["offsetY"];
    }
  }
  Object.defineProperties(MouseEvent.prototype, {
    getModifierState: { enumerable: true },
    initMouseEvent: { enumerable: true },
    screenX: { enumerable: true },
    screenY: { enumerable: true },
    clientX: { enumerable: true },
    clientY: { enumerable: true },
    ctrlKey: { enumerable: true },
    shiftKey: { enumerable: true },
    altKey: { enumerable: true },
    metaKey: { enumerable: true },
    button: { enumerable: true },
    buttons: { enumerable: true },
    relatedTarget: { enumerable: true },
    pageX: { enumerable: true },
    pageY: { enumerable: true },
    x: { enumerable: true },
    y: { enumerable: true },
    offsetX: { enumerable: true },
    offsetY: { enumerable: true },
    [Symbol.toStringTag]: { value: "MouseEvent", configurable: true }
  });
  ctorRegistry[interfaceName] = MouseEvent;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: MouseEvent
  });
};

const Impl = require("../events/MouseEvent-impl.js");
