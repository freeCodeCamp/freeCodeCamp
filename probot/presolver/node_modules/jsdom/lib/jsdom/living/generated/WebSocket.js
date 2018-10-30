"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const isBlob = require("./Blob.js").is;
const convertBlob = require("./Blob.js").convert;
const BinaryType = require("./BinaryType.js");
const impl = utils.implSymbol;
const EventTarget = require("./EventTarget.js");

module.exports = {
  createInterface: function(defaultPrivateData = {}) {
    function WebSocket(url) {
      if (new.target === undefined) {
        throw new TypeError(
          "Failed to construct 'WebSocket'. Please use the 'new' operator; this constructor " +
            "cannot be called as a function."
        );
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to construct 'WebSocket': 1 argument required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["USVString"](curArg, { context: "Failed to construct 'WebSocket': parameter 1" });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          if (utils.isObject(curArg)) {
            if (curArg[Symbol.iterator] !== undefined) {
              if (!utils.isObject(curArg)) {
                throw new TypeError(
                  "Failed to construct 'WebSocket': parameter 2" + " sequence" + " is not an iterable object."
                );
              } else {
                const V = [];
                const tmp = curArg;
                for (let nextItem of tmp) {
                  nextItem = conversions["DOMString"](nextItem, {
                    context: "Failed to construct 'WebSocket': parameter 2" + " sequence" + "'s element"
                  });

                  V.push(nextItem);
                }
                curArg = V;
              }
            } else {
            }
          } else {
            curArg = conversions["DOMString"](curArg, { context: "Failed to construct 'WebSocket': parameter 2" });
          }
        } else {
          curArg = [];
        }
        args.push(curArg);
      }

      iface.setup(this, args);
    }

    Object.setPrototypeOf(WebSocket.prototype, EventTarget.interface.prototype);
    Object.setPrototypeOf(WebSocket, EventTarget.interface);

    Object.defineProperty(WebSocket, "prototype", {
      value: WebSocket.prototype,
      writable: false,
      enumerable: false,
      configurable: false
    });

    WebSocket.prototype.close = function close() {
      if (!this || !module.exports.is(this)) {
        throw new TypeError("Illegal invocation");
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg !== undefined) {
          curArg = conversions["unsigned short"](curArg, {
            context: "Failed to execute 'close' on 'WebSocket': parameter 1",
            clamp: true
          });
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["USVString"](curArg, {
            context: "Failed to execute 'close' on 'WebSocket': parameter 2"
          });
        }
        args.push(curArg);
      }
      return this[impl].close(...args);
    };

    WebSocket.prototype.send = function send(data) {
      if (!this || !module.exports.is(this)) {
        throw new TypeError("Illegal invocation");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'send' on 'WebSocket': 1 argument required, but only " + arguments.length + " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (isBlob(curArg)) {
          {
            let curArg = arguments[0];
            curArg = convertBlob(curArg, { context: "Failed to execute 'send' on 'WebSocket': parameter 1" });
            args.push(curArg);
          }
        } else if (
          curArg instanceof ArrayBuffer ||
          (typeof SharedArrayBuffer !== "undefined" && curArg instanceof SharedArrayBuffer)
        ) {
          {
            let curArg = arguments[0];
            curArg = conversions["ArrayBuffer"](curArg, {
              context: "Failed to execute 'send' on 'WebSocket': parameter 1"
            });
            args.push(curArg);
          }
        } else if (ArrayBuffer.isView(curArg)) {
          {
            let curArg = arguments[0];
            if (ArrayBuffer.isView(curArg)) {
            } else {
              throw new TypeError(
                "Failed to execute 'send' on 'WebSocket': parameter 1" + " is not of any supported type."
              );
            }
            args.push(curArg);
          }
        } else {
          {
            let curArg = arguments[0];
            curArg = conversions["USVString"](curArg, {
              context: "Failed to execute 'send' on 'WebSocket': parameter 1"
            });
            args.push(curArg);
          }
        }
      }
      return this[impl].send(...args);
    };

    Object.defineProperty(WebSocket.prototype, "url", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return this[impl]["url"];
      },

      enumerable: true,
      configurable: true
    });

    Object.defineProperty(WebSocket.prototype, "readyState", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return this[impl]["readyState"];
      },

      enumerable: true,
      configurable: true
    });

    Object.defineProperty(WebSocket.prototype, "bufferedAmount", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return this[impl]["bufferedAmount"];
      },

      enumerable: true,
      configurable: true
    });

    Object.defineProperty(WebSocket.prototype, "onopen", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return utils.tryWrapperForImpl(this[impl]["onopen"]);
      },

      set(V) {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        V = utils.tryImplForWrapper(V);

        this[impl]["onopen"] = V;
      },

      enumerable: true,
      configurable: true
    });

    Object.defineProperty(WebSocket.prototype, "onerror", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return utils.tryWrapperForImpl(this[impl]["onerror"]);
      },

      set(V) {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        V = utils.tryImplForWrapper(V);

        this[impl]["onerror"] = V;
      },

      enumerable: true,
      configurable: true
    });

    Object.defineProperty(WebSocket.prototype, "onclose", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return utils.tryWrapperForImpl(this[impl]["onclose"]);
      },

      set(V) {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        V = utils.tryImplForWrapper(V);

        this[impl]["onclose"] = V;
      },

      enumerable: true,
      configurable: true
    });

    Object.defineProperty(WebSocket.prototype, "extensions", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return this[impl]["extensions"];
      },

      enumerable: true,
      configurable: true
    });

    Object.defineProperty(WebSocket.prototype, "protocol", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return this[impl]["protocol"];
      },

      enumerable: true,
      configurable: true
    });

    Object.defineProperty(WebSocket.prototype, "onmessage", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return utils.tryWrapperForImpl(this[impl]["onmessage"]);
      },

      set(V) {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        V = utils.tryImplForWrapper(V);

        this[impl]["onmessage"] = V;
      },

      enumerable: true,
      configurable: true
    });

    Object.defineProperty(WebSocket.prototype, "binaryType", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return utils.tryWrapperForImpl(this[impl]["binaryType"]);
      },

      set(V) {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        V = `${V}`;
        if (!BinaryType.enumerationValues.has(V)) {
          return;
        }

        this[impl]["binaryType"] = V;
      },

      enumerable: true,
      configurable: true
    });

    Object.defineProperty(WebSocket, "CONNECTING", {
      value: 0,
      enumerable: true
    });
    Object.defineProperty(WebSocket.prototype, "CONNECTING", {
      value: 0,
      enumerable: true
    });

    Object.defineProperty(WebSocket, "OPEN", {
      value: 1,
      enumerable: true
    });
    Object.defineProperty(WebSocket.prototype, "OPEN", {
      value: 1,
      enumerable: true
    });

    Object.defineProperty(WebSocket, "CLOSING", {
      value: 2,
      enumerable: true
    });
    Object.defineProperty(WebSocket.prototype, "CLOSING", {
      value: 2,
      enumerable: true
    });

    Object.defineProperty(WebSocket, "CLOSED", {
      value: 3,
      enumerable: true
    });
    Object.defineProperty(WebSocket.prototype, "CLOSED", {
      value: 3,
      enumerable: true
    });

    Object.defineProperty(WebSocket.prototype, Symbol.toStringTag, {
      value: "WebSocket",
      writable: false,
      enumerable: false,
      configurable: true
    });

    const iface = {
      create(constructorArgs, privateData) {
        let obj = Object.create(WebSocket.prototype);
        obj = this.setup(obj, constructorArgs, privateData);
        return obj;
      },
      createImpl(constructorArgs, privateData) {
        let obj = Object.create(WebSocket.prototype);
        obj = this.setup(obj, constructorArgs, privateData);
        return utils.implForWrapper(obj);
      },
      _internalSetup(obj) {
        EventTarget._internalSetup(obj);
      },
      setup(obj, constructorArgs, privateData) {
        if (!privateData) privateData = {};

        for (var prop in defaultPrivateData) {
          if (!(prop in privateData)) {
            privateData[prop] = defaultPrivateData[prop];
          }
        }

        privateData.wrapper = obj;

        this._internalSetup(obj);
        Object.defineProperty(obj, impl, {
          value: new Impl.implementation(constructorArgs, privateData),
          writable: false,
          enumerable: false,
          configurable: true
        });

        obj[impl][utils.wrapperSymbol] = obj;
        if (Impl.init) {
          Impl.init(obj[impl], privateData);
        }
        return obj;
      },
      interface: WebSocket,
      expose: {
        Window: { WebSocket },
        Worker: { WebSocket }
      }
    }; // iface
    return iface;
  }, // createInterface

  // When an interface-module that implements this interface as a mixin is loaded, it will append its own `.is()`
  // method into this array. It allows objects that directly implements *those* interfaces to be recognized as
  // implementing this mixin interface.
  _mixedIntoPredicates: [],
  is(obj) {
    if (obj) {
      if (utils.hasOwn(obj, impl) && obj[impl] instanceof Impl.implementation) {
        return true;
      }
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(obj)) {
          return true;
        }
      }
    }
    return false;
  },
  isImpl(obj) {
    if (obj) {
      if (obj instanceof Impl.implementation) {
        return true;
      }

      const wrapper = utils.wrapperForImpl(obj);
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(wrapper)) {
          return true;
        }
      }
    }
    return false;
  },
  convert(obj, { context = "The provided value" } = {}) {
    if (module.exports.is(obj)) {
      return utils.implForWrapper(obj);
    }
    throw new TypeError(`${context} is not of type 'WebSocket'.`);
  }
}; // module.exports

const Impl = require("../websockets/WebSocket-impl.js");
