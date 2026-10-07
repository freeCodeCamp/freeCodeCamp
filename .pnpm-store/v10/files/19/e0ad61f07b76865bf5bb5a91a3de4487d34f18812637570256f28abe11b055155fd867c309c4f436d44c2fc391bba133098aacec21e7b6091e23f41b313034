"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const Blob = require("./Blob.js");
const EventHandlerNonNull = require("./EventHandlerNonNull.js");
const BinaryType = require("./BinaryType.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const EventTarget = require("./EventTarget.js");

const interfaceName = "WebSocket";

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
  throw new globalObject.TypeError(`${context} is not of type 'WebSocket'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["WebSocket"].prototype;
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
  EventTarget._internalSetup(wrapper, globalObject);
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
  class WebSocket extends globalObject.EventTarget {
    constructor(url) {
      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to construct 'WebSocket': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["USVString"](curArg, {
          context: "Failed to construct 'WebSocket': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          if (utils.isObject(curArg)) {
            if (curArg[Symbol.iterator] !== undefined) {
              if (!utils.isObject(curArg)) {
                throw new globalObject.TypeError(
                  "Failed to construct 'WebSocket': parameter 2" + " sequence" + " is not an iterable object."
                );
              } else {
                const V = [];
                const tmp = curArg;
                for (let nextItem of tmp) {
                  nextItem = conversions["DOMString"](nextItem, {
                    context: "Failed to construct 'WebSocket': parameter 2" + " sequence" + "'s element",
                    globals: globalObject
                  });

                  V.push(nextItem);
                }
                curArg = V;
              }
            } else {
            }
          } else {
            curArg = conversions["DOMString"](curArg, {
              context: "Failed to construct 'WebSocket': parameter 2",
              globals: globalObject
            });
          }
        } else {
          curArg = [];
        }
        args.push(curArg);
      }
      return exports.setup(Object.create(new.target.prototype), globalObject, args);
    }

    close() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'close' called on an object that is not a valid instance of WebSocket.");
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg !== undefined) {
          curArg = conversions["unsigned short"](curArg, {
            context: "Failed to execute 'close' on 'WebSocket': parameter 1",
            globals: globalObject,
            clamp: true
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["USVString"](curArg, {
            context: "Failed to execute 'close' on 'WebSocket': parameter 2",
            globals: globalObject
          });
        }
        args.push(curArg);
      }
      return esValue[implSymbol].close(...args);
    }

    send(data) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'send' called on an object that is not a valid instance of WebSocket.");
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'send' on 'WebSocket': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (Blob.is(curArg)) {
          {
            let curArg = arguments[0];
            curArg = Blob.convert(globalObject, curArg, {
              context: "Failed to execute 'send' on 'WebSocket': parameter 1"
            });
            args.push(curArg);
          }
        } else if (utils.isArrayBuffer(curArg)) {
          {
            let curArg = arguments[0];
            curArg = conversions["ArrayBuffer"](curArg, {
              context: "Failed to execute 'send' on 'WebSocket': parameter 1",
              globals: globalObject
            });
            args.push(curArg);
          }
        } else if (ArrayBuffer.isView(curArg)) {
          {
            let curArg = arguments[0];
            if (ArrayBuffer.isView(curArg)) {
            } else {
              throw new globalObject.TypeError(
                "Failed to execute 'send' on 'WebSocket': parameter 1" + " is not of any supported type."
              );
            }
            args.push(curArg);
          }
        } else {
          {
            let curArg = arguments[0];
            curArg = conversions["USVString"](curArg, {
              context: "Failed to execute 'send' on 'WebSocket': parameter 1",
              globals: globalObject
            });
            args.push(curArg);
          }
        }
      }
      return esValue[implSymbol].send(...args);
    }

    get url() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get url' called on an object that is not a valid instance of WebSocket.");
      }

      return esValue[implSymbol]["url"];
    }

    get readyState() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get readyState' called on an object that is not a valid instance of WebSocket."
        );
      }

      return esValue[implSymbol]["readyState"];
    }

    get bufferedAmount() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get bufferedAmount' called on an object that is not a valid instance of WebSocket."
        );
      }

      return esValue[implSymbol]["bufferedAmount"];
    }

    get onopen() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get onopen' called on an object that is not a valid instance of WebSocket.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onopen"]);
    }

    set onopen(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'set onopen' called on an object that is not a valid instance of WebSocket.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onopen' property on 'WebSocket': The provided value"
        });
      }
      esValue[implSymbol]["onopen"] = V;
    }

    get onerror() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onerror' called on an object that is not a valid instance of WebSocket."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onerror"]);
    }

    set onerror(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onerror' called on an object that is not a valid instance of WebSocket."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onerror' property on 'WebSocket': The provided value"
        });
      }
      esValue[implSymbol]["onerror"] = V;
    }

    get onclose() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onclose' called on an object that is not a valid instance of WebSocket."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onclose"]);
    }

    set onclose(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onclose' called on an object that is not a valid instance of WebSocket."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onclose' property on 'WebSocket': The provided value"
        });
      }
      esValue[implSymbol]["onclose"] = V;
    }

    get extensions() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get extensions' called on an object that is not a valid instance of WebSocket."
        );
      }

      return esValue[implSymbol]["extensions"];
    }

    get protocol() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get protocol' called on an object that is not a valid instance of WebSocket."
        );
      }

      return esValue[implSymbol]["protocol"];
    }

    get onmessage() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onmessage' called on an object that is not a valid instance of WebSocket."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmessage"]);
    }

    set onmessage(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onmessage' called on an object that is not a valid instance of WebSocket."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onmessage' property on 'WebSocket': The provided value"
        });
      }
      esValue[implSymbol]["onmessage"] = V;
    }

    get binaryType() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get binaryType' called on an object that is not a valid instance of WebSocket."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["binaryType"]);
    }

    set binaryType(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set binaryType' called on an object that is not a valid instance of WebSocket."
        );
      }

      V = `${V}`;
      if (!BinaryType.enumerationValues.has(V)) {
        return;
      }

      esValue[implSymbol]["binaryType"] = V;
    }
  }
  Object.defineProperties(WebSocket.prototype, {
    close: { enumerable: true },
    send: { enumerable: true },
    url: { enumerable: true },
    readyState: { enumerable: true },
    bufferedAmount: { enumerable: true },
    onopen: { enumerable: true },
    onerror: { enumerable: true },
    onclose: { enumerable: true },
    extensions: { enumerable: true },
    protocol: { enumerable: true },
    onmessage: { enumerable: true },
    binaryType: { enumerable: true },
    [Symbol.toStringTag]: { value: "WebSocket", configurable: true },
    CONNECTING: { value: 0, enumerable: true },
    OPEN: { value: 1, enumerable: true },
    CLOSING: { value: 2, enumerable: true },
    CLOSED: { value: 3, enumerable: true }
  });
  Object.defineProperties(WebSocket, {
    CONNECTING: { value: 0, enumerable: true },
    OPEN: { value: 1, enumerable: true },
    CLOSING: { value: 2, enumerable: true },
    CLOSED: { value: 3, enumerable: true }
  });
  ctorRegistry[interfaceName] = WebSocket;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: WebSocket
  });
};

const Impl = require("../websockets/WebSocket-impl.js");
