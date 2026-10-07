"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const MessageEventInit = require("./MessageEventInit.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const Event = require("./Event.js");

const interfaceName = "MessageEvent";

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
  throw new TypeError(`${context} is not of type 'MessageEvent'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["MessageEvent"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor MessageEvent is not installed on the passed global object");
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
  Event._internalSetup(wrapper, globalObject);
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

const exposed = new Set(["Window", "Worker", "AudioWorklet"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  if (globalObject.Event === undefined) {
    throw new Error("Internal error: attempting to evaluate MessageEvent before Event");
  }
  class MessageEvent extends globalObject.Event {
    constructor(type) {
      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to construct 'MessageEvent': 1 argument required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, { context: "Failed to construct 'MessageEvent': parameter 1" });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = MessageEventInit.convert(curArg, { context: "Failed to construct 'MessageEvent': parameter 2" });
        args.push(curArg);
      }
      return exports.setup(Object.create(new.target.prototype), globalObject, args);
    }

    initMessageEvent(type) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'initMessageEvent' called on an object that is not a valid instance of MessageEvent.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'initMessageEvent' on 'MessageEvent': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'initMessageEvent' on 'MessageEvent': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["boolean"](curArg, {
            context: "Failed to execute 'initMessageEvent' on 'MessageEvent': parameter 2"
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
            context: "Failed to execute 'initMessageEvent' on 'MessageEvent': parameter 3"
          });
        } else {
          curArg = false;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[3];
        if (curArg !== undefined) {
          curArg = conversions["any"](curArg, {
            context: "Failed to execute 'initMessageEvent' on 'MessageEvent': parameter 4"
          });
        } else {
          curArg = null;
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[4];
        if (curArg !== undefined) {
          curArg = conversions["USVString"](curArg, {
            context: "Failed to execute 'initMessageEvent' on 'MessageEvent': parameter 5"
          });
        } else {
          curArg = "";
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[5];
        if (curArg !== undefined) {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'initMessageEvent' on 'MessageEvent': parameter 6"
          });
        } else {
          curArg = "";
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[6];
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
        let curArg = arguments[7];
        if (curArg !== undefined) {
          if (!utils.isObject(curArg)) {
            throw new TypeError(
              "Failed to execute 'initMessageEvent' on 'MessageEvent': parameter 8" + " is not an iterable object."
            );
          } else {
            const V = [];
            const tmp = curArg;
            for (let nextItem of tmp) {
              nextItem = utils.tryImplForWrapper(nextItem);

              V.push(nextItem);
            }
            curArg = V;
          }
        } else {
          curArg = [];
        }
        args.push(curArg);
      }
      return esValue[implSymbol].initMessageEvent(...args);
    }

    get data() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get data' called on an object that is not a valid instance of MessageEvent.");
      }

      return esValue[implSymbol]["data"];
    }

    get origin() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get origin' called on an object that is not a valid instance of MessageEvent.");
      }

      return esValue[implSymbol]["origin"];
    }

    get lastEventId() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get lastEventId' called on an object that is not a valid instance of MessageEvent.");
      }

      return esValue[implSymbol]["lastEventId"];
    }

    get source() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get source' called on an object that is not a valid instance of MessageEvent.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["source"]);
    }

    get ports() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ports' called on an object that is not a valid instance of MessageEvent.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ports"]);
    }
  }
  Object.defineProperties(MessageEvent.prototype, {
    initMessageEvent: { enumerable: true },
    data: { enumerable: true },
    origin: { enumerable: true },
    lastEventId: { enumerable: true },
    source: { enumerable: true },
    ports: { enumerable: true },
    [Symbol.toStringTag]: { value: "MessageEvent", configurable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = MessageEvent;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: MessageEvent
  });
};

const Impl = require("../events/MessageEvent-impl.js");
