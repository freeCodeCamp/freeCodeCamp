"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const EventListener = require("./EventListener.js");
const AddEventListenerOptions = require("./AddEventListenerOptions.js");
const EventListenerOptions = require("./EventListenerOptions.js");
const Event = require("./Event.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "EventTarget";

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
  throw new globalObject.TypeError(`${context} is not of type 'EventTarget'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["EventTarget"].prototype;
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

const exposed = new Set(["Window", "Worker", "AudioWorklet"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class EventTarget {
    constructor() {
      return exports.setup(Object.create(new.target.prototype), globalObject, undefined);
    }

    addEventListener(type, callback) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'addEventListener' called on an object that is not a valid instance of EventTarget."
        );
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'addEventListener' on 'EventTarget': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'addEventListener' on 'EventTarget': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = EventListener.convert(globalObject, curArg, {
            context: "Failed to execute 'addEventListener' on 'EventTarget': parameter 2"
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        if (curArg !== undefined) {
          if (curArg === null || curArg === undefined) {
            curArg = AddEventListenerOptions.convert(globalObject, curArg, {
              context: "Failed to execute 'addEventListener' on 'EventTarget': parameter 3"
            });
          } else if (utils.isObject(curArg)) {
            curArg = AddEventListenerOptions.convert(globalObject, curArg, {
              context: "Failed to execute 'addEventListener' on 'EventTarget': parameter 3" + " dictionary"
            });
          } else if (typeof curArg === "boolean") {
            curArg = conversions["boolean"](curArg, {
              context: "Failed to execute 'addEventListener' on 'EventTarget': parameter 3",
              globals: globalObject
            });
          } else {
            curArg = conversions["boolean"](curArg, {
              context: "Failed to execute 'addEventListener' on 'EventTarget': parameter 3",
              globals: globalObject
            });
          }
        }
        args.push(curArg);
      }
      return esValue[implSymbol].addEventListener(...args);
    }

    removeEventListener(type, callback) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'removeEventListener' called on an object that is not a valid instance of EventTarget."
        );
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'removeEventListener' on 'EventTarget': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'removeEventListener' on 'EventTarget': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg === null || curArg === undefined) {
          curArg = null;
        } else {
          curArg = EventListener.convert(globalObject, curArg, {
            context: "Failed to execute 'removeEventListener' on 'EventTarget': parameter 2"
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        if (curArg !== undefined) {
          if (curArg === null || curArg === undefined) {
            curArg = EventListenerOptions.convert(globalObject, curArg, {
              context: "Failed to execute 'removeEventListener' on 'EventTarget': parameter 3"
            });
          } else if (utils.isObject(curArg)) {
            curArg = EventListenerOptions.convert(globalObject, curArg, {
              context: "Failed to execute 'removeEventListener' on 'EventTarget': parameter 3" + " dictionary"
            });
          } else if (typeof curArg === "boolean") {
            curArg = conversions["boolean"](curArg, {
              context: "Failed to execute 'removeEventListener' on 'EventTarget': parameter 3",
              globals: globalObject
            });
          } else {
            curArg = conversions["boolean"](curArg, {
              context: "Failed to execute 'removeEventListener' on 'EventTarget': parameter 3",
              globals: globalObject
            });
          }
        }
        args.push(curArg);
      }
      return esValue[implSymbol].removeEventListener(...args);
    }

    dispatchEvent(event) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'dispatchEvent' called on an object that is not a valid instance of EventTarget."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'dispatchEvent' on 'EventTarget': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Event.convert(globalObject, curArg, {
          context: "Failed to execute 'dispatchEvent' on 'EventTarget': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].dispatchEvent(...args);
    }
  }
  Object.defineProperties(EventTarget.prototype, {
    addEventListener: { enumerable: true },
    removeEventListener: { enumerable: true },
    dispatchEvent: { enumerable: true },
    [Symbol.toStringTag]: { value: "EventTarget", configurable: true }
  });
  ctorRegistry[interfaceName] = EventTarget;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: EventTarget
  });
};

const Impl = require("../events/EventTarget-impl.js");
