"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// ../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/pad.js
var require_pad = __commonJS({
  "../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/pad.js"(exports, module2) {
    module2.exports = function pad(num, size) {
      var s = "000000000" + num;
      return s.substr(s.length - size);
    };
  }
});

// ../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/fingerprint.browser.js
var require_fingerprint_browser = __commonJS({
  "../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/fingerprint.browser.js"(exports, module2) {
    var pad = require_pad();
    var env = typeof window === "object" ? window : self;
    var globalCount = Object.keys(env).length;
    var mimeTypesLength = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
    var clientId = pad((mimeTypesLength + navigator.userAgent.length).toString(36) + globalCount.toString(36), 4);
    module2.exports = function fingerprint() {
      return clientId;
    };
  }
});

// ../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/getRandomValue.browser.js
var require_getRandomValue_browser = __commonJS({
  "../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/getRandomValue.browser.js"(exports, module2) {
    var getRandomValue;
    var crypto = typeof window !== "undefined" && (window.crypto || window.msCrypto) || typeof self !== "undefined" && self.crypto;
    if (crypto) {
      lim = Math.pow(2, 32) - 1;
      getRandomValue = function() {
        return Math.abs(crypto.getRandomValues(new Uint32Array(1))[0] / lim);
      };
    } else {
      getRandomValue = Math.random;
    }
    var lim;
    module2.exports = getRandomValue;
  }
});

// ../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/index.js
var require_cuid = __commonJS({
  "../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/index.js"(exports, module2) {
    var fingerprint = require_fingerprint_browser();
    var pad = require_pad();
    var getRandomValue = require_getRandomValue_browser();
    var c = 0;
    var blockSize = 4;
    var base = 36;
    var discreteValues = Math.pow(base, blockSize);
    function randomBlock() {
      return pad((getRandomValue() * discreteValues << 0).toString(base), blockSize);
    }
    function safeCounter() {
      c = c < discreteValues ? c : 0;
      c++;
      return c - 1;
    }
    function cuid3() {
      var letter = "c", timestamp = new Date().getTime().toString(base), counter = pad(safeCounter().toString(base), blockSize), print = fingerprint(), random = randomBlock() + randomBlock();
      return letter + timestamp + counter + print + random;
    }
    cuid3.slug = function slug() {
      var date = new Date().getTime().toString(36), counter = safeCounter().toString(36).slice(-4), print = fingerprint().slice(0, 1) + fingerprint().slice(-1), random = randomBlock().slice(-2);
      return date.slice(-2) + counter + print + random;
    };
    cuid3.isCuid = function isCuid(stringToCheck) {
      if (typeof stringToCheck !== "string")
        return false;
      if (stringToCheck.startsWith("c"))
        return true;
      return false;
    };
    cuid3.isSlug = function isSlug(stringToCheck) {
      if (typeof stringToCheck !== "string")
        return false;
      var stringLength = stringToCheck.length;
      if (stringLength >= 7 && stringLength <= 10)
        return true;
      return false;
    };
    cuid3.fingerprint = fingerprint;
    module2.exports = cuid3;
  }
});

// ../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/createDeferredExecutor.js
var require_createDeferredExecutor = __commonJS({
  "../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/createDeferredExecutor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDeferredExecutor = void 0;
    function createDeferredExecutor() {
      const executor = (resolve, reject) => {
        executor.state = "pending";
        executor.resolve = (data) => {
          if (executor.state !== "pending") {
            return;
          }
          executor.result = data;
          const onFulfilled = (value) => {
            executor.state = "fulfilled";
            return value;
          };
          return resolve(data instanceof Promise ? data : Promise.resolve(data).then(onFulfilled));
        };
        executor.reject = (reason) => {
          if (executor.state !== "pending") {
            return;
          }
          queueMicrotask(() => {
            executor.state = "rejected";
          });
          return reject(executor.rejectionReason = reason);
        };
      };
      return executor;
    }
    exports.createDeferredExecutor = createDeferredExecutor;
  }
});

// ../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/DeferredPromise.js
var require_DeferredPromise = __commonJS({
  "../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/DeferredPromise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DeferredPromise = void 0;
    var createDeferredExecutor_1 = require_createDeferredExecutor();
    var _executor, _decorate, decorate_fn;
    var DeferredPromise4 = class extends Promise {
      constructor(executor = null) {
        const deferredExecutor = (0, createDeferredExecutor_1.createDeferredExecutor)();
        super((originalResolve, originalReject) => {
          deferredExecutor(originalResolve, originalReject);
          executor?.(deferredExecutor.resolve, deferredExecutor.reject);
        });
        __privateAdd(this, _decorate);
        __privateAdd(this, _executor, void 0);
        __publicField(this, "resolve");
        __publicField(this, "reject");
        __privateSet(this, _executor, deferredExecutor);
        this.resolve = __privateGet(this, _executor).resolve;
        this.reject = __privateGet(this, _executor).reject;
      }
      get state() {
        return __privateGet(this, _executor).state;
      }
      get rejectionReason() {
        return __privateGet(this, _executor).rejectionReason;
      }
      then(onFulfilled, onRejected) {
        return __privateMethod(this, _decorate, decorate_fn).call(this, super.then(onFulfilled, onRejected));
      }
      catch(onRejected) {
        return __privateMethod(this, _decorate, decorate_fn).call(this, super.catch(onRejected));
      }
      finally(onfinally) {
        return __privateMethod(this, _decorate, decorate_fn).call(this, super.finally(onfinally));
      }
    };
    _executor = new WeakMap();
    _decorate = new WeakSet();
    decorate_fn = function(promise) {
      return Object.defineProperties(promise, {
        resolve: { configurable: true, value: this.resolve },
        reject: { configurable: true, value: this.reject }
      });
    };
    exports.DeferredPromise = DeferredPromise4;
  }
});

// ../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/index.js
var require_build = __commonJS({
  "../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_createDeferredExecutor(), exports);
    __exportStar(require_DeferredPromise(), exports);
  }
});

// ../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/MemoryLeakError.js
var require_MemoryLeakError = __commonJS({
  "../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/MemoryLeakError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MemoryLeakError = void 0;
    var MemoryLeakError = class extends Error {
      constructor(emitter, type, count) {
        super(`Possible EventEmitter memory leak detected. ${count} ${type.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`);
        __publicField(this, "emitter");
        __publicField(this, "type");
        __publicField(this, "count");
        this.emitter = emitter;
        this.type = type;
        this.count = count;
        this.name = "MaxListenersExceededWarning";
      }
    };
    exports.MemoryLeakError = MemoryLeakError;
  }
});

// ../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/Emitter.js
var require_Emitter = __commonJS({
  "../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/Emitter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Emitter = void 0;
    var MemoryLeakError_1 = require_MemoryLeakError();
    var _events, _maxListeners, _hasWarnedAboutPotentialMemortyLeak, _getListeners, getListeners_fn, _removeListener, removeListener_fn, _wrapOnceListener, wrapOnceListener_fn, _internalEmit, internalEmit_fn;
    var _Emitter = class {
      constructor() {
        __privateAdd(this, _getListeners);
        __privateAdd(this, _removeListener);
        __privateAdd(this, _wrapOnceListener);
        __privateAdd(this, _internalEmit);
        __privateAdd(this, _events, void 0);
        __privateAdd(this, _maxListeners, void 0);
        __privateAdd(this, _hasWarnedAboutPotentialMemortyLeak, void 0);
        __privateSet(this, _events, /* @__PURE__ */ new Map());
        __privateSet(this, _maxListeners, _Emitter.defaultMaxListeners);
        __privateSet(this, _hasWarnedAboutPotentialMemortyLeak, false);
      }
      static listenerCount(emitter, eventName) {
        return emitter.listenerCount(eventName);
      }
      setMaxListeners(maxListeners) {
        __privateSet(this, _maxListeners, maxListeners);
        return this;
      }
      getMaxListeners() {
        return __privateGet(this, _maxListeners);
      }
      eventNames() {
        return Array.from(__privateGet(this, _events).keys());
      }
      emit(eventName, ...data) {
        const listeners = __privateMethod(this, _getListeners, getListeners_fn).call(this, eventName);
        listeners.forEach((listener) => {
          listener.apply(this, data);
        });
        return listeners.length > 0;
      }
      addListener(eventName, listener) {
        __privateMethod(this, _internalEmit, internalEmit_fn).call(this, "newListener", eventName, listener);
        const nextListeners = __privateMethod(this, _getListeners, getListeners_fn).call(this, eventName).concat(listener);
        __privateGet(this, _events).set(eventName, nextListeners);
        if (__privateGet(this, _maxListeners) > 0 && this.listenerCount(eventName) > __privateGet(this, _maxListeners) && !__privateGet(this, _hasWarnedAboutPotentialMemortyLeak)) {
          __privateSet(this, _hasWarnedAboutPotentialMemortyLeak, true);
          const memoryLeakWarning = new MemoryLeakError_1.MemoryLeakError(this, eventName, this.listenerCount(eventName));
          console.warn(memoryLeakWarning);
        }
        return this;
      }
      on(eventName, listener) {
        return this.addListener(eventName, listener);
      }
      once(eventName, listener) {
        return this.addListener(eventName, __privateMethod(this, _wrapOnceListener, wrapOnceListener_fn).call(this, eventName, listener));
      }
      prependListener(eventName, listener) {
        const listeners = __privateMethod(this, _getListeners, getListeners_fn).call(this, eventName);
        if (listeners.length > 0) {
          const nextListeners = [listener].concat(listeners);
          __privateGet(this, _events).set(eventName, nextListeners);
        } else {
          __privateGet(this, _events).set(eventName, listeners.concat(listener));
        }
        return this;
      }
      prependOnceListener(eventName, listener) {
        return this.prependListener(eventName, __privateMethod(this, _wrapOnceListener, wrapOnceListener_fn).call(this, eventName, listener));
      }
      removeListener(eventName, listener) {
        const listeners = __privateMethod(this, _getListeners, getListeners_fn).call(this, eventName);
        if (listeners.length > 0) {
          __privateMethod(this, _removeListener, removeListener_fn).call(this, listeners, listener);
          __privateGet(this, _events).set(eventName, listeners);
          __privateMethod(this, _internalEmit, internalEmit_fn).call(this, "removeListener", eventName, listener);
        }
        return this;
      }
      off(eventName, listener) {
        return this.removeListener(eventName, listener);
      }
      removeAllListeners(eventName) {
        if (eventName) {
          __privateGet(this, _events).delete(eventName);
        } else {
          __privateGet(this, _events).clear();
        }
        return this;
      }
      listeners(eventName) {
        return Array.from(__privateMethod(this, _getListeners, getListeners_fn).call(this, eventName));
      }
      listenerCount(eventName) {
        return __privateMethod(this, _getListeners, getListeners_fn).call(this, eventName).length;
      }
      rawListeners(eventName) {
        return this.listeners(eventName);
      }
    };
    var Emitter2 = _Emitter;
    _events = new WeakMap();
    _maxListeners = new WeakMap();
    _hasWarnedAboutPotentialMemortyLeak = new WeakMap();
    _getListeners = new WeakSet();
    getListeners_fn = function(eventName) {
      return __privateGet(this, _events).get(eventName) || [];
    };
    _removeListener = new WeakSet();
    removeListener_fn = function(listeners, listener) {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
      return [];
    };
    _wrapOnceListener = new WeakSet();
    wrapOnceListener_fn = function(eventName, listener) {
      const onceListener = (...data) => {
        this.removeListener(eventName, onceListener);
        listener.apply(this, data);
      };
      return onceListener;
    };
    _internalEmit = new WeakSet();
    internalEmit_fn = function(internalEventName, eventName, listener) {
      this.emit(
        internalEventName,
        ...[eventName, listener]
      );
    };
    __publicField(Emitter2, "defaultMaxListeners", 10);
    exports.Emitter = Emitter2;
  }
});

// ../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_Emitter(), exports);
    __exportStar(require_MemoryLeakError(), exports);
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  INJECT_MESSAGE_TYPE: () => INJECT_MESSAGE_TYPE,
  MessageReceiver: () => MessageReceiver,
  MessageSender: () => MessageSender,
  Nodebox: () => Nodebox,
  PREVIEW_LOADED_MESSAGE_TYPE: () => PREVIEW_LOADED_MESSAGE_TYPE
});
module.exports = __toCommonJS(src_exports);

// src/messages.ts
var import_cuid = __toESM(require_cuid());

// ../../node_modules/.pnpm/outvariant@1.4.0/node_modules/outvariant/lib/index.mjs
var POSITIONALS_EXP = /(%?)(%([sdjo]))/g;
function serializePositional(positional, flag) {
  switch (flag) {
    case "s":
      return positional;
    case "d":
    case "i":
      return Number(positional);
    case "j":
      return JSON.stringify(positional);
    case "o": {
      if (typeof positional === "string") {
        return positional;
      }
      const json = JSON.stringify(positional);
      if (json === "{}" || json === "[]" || /^\[object .+?\]$/.test(json)) {
        return positional;
      }
      return json;
    }
  }
}
function format(message, ...positionals) {
  if (positionals.length === 0) {
    return message;
  }
  let positionalIndex = 0;
  let formattedMessage = message.replace(
    POSITIONALS_EXP,
    (match, isEscaped, _, flag) => {
      const positional = positionals[positionalIndex];
      const value = serializePositional(positional, flag);
      if (!isEscaped) {
        positionalIndex++;
        return value;
      }
      return match;
    }
  );
  if (positionalIndex < positionals.length) {
    formattedMessage += ` ${positionals.slice(positionalIndex).join(" ")}`;
  }
  formattedMessage = formattedMessage.replace(/%{2,2}/g, "%");
  return formattedMessage;
}
var STACK_FRAMES_TO_IGNORE = 2;
function cleanErrorStack(error) {
  if (!error.stack) {
    return;
  }
  const nextStack = error.stack.split("\n");
  nextStack.splice(1, STACK_FRAMES_TO_IGNORE);
  error.stack = nextStack.join("\n");
}
var InvariantError = class extends Error {
  constructor(message, ...positionals) {
    super(message);
    this.message = message;
    this.name = "Invariant Violation";
    this.message = format(message, ...positionals);
    cleanErrorStack(this);
  }
};
var invariant = (predicate, message, ...positionals) => {
  if (!predicate) {
    throw new InvariantError(message, ...positionals);
  }
};
invariant.as = (ErrorConstructor, predicate, message, ...positionals) => {
  if (!predicate) {
    const isConstructor = ErrorConstructor.prototype.name != null;
    const error = isConstructor ? new ErrorConstructor(format(message, positionals)) : ErrorConstructor(format(message, positionals));
    throw error;
  }
};

// src/messages.ts
var import_deferred_promise = __toESM(require_build());

// src/logger.ts
var FLAG = window.localStorage["CSB_EMULATOR_DEBUG"];
var DEFAULT = "\x1B[0m";
var GREEN = "\x1B[32;1m";
var RED = "\x1B[31m";
var BLUE = "\x1B[34m";
var YELLOW = "\x1B[33;1m";
var MAGENTA = "\x1B[35;1m";
var CYAN = "\x1B[36;1m";
var COLOR_SCOPE = {
  preview: YELLOW,
  emulator: MAGENTA,
  runtime: CYAN,
  bridge: BLUE,
  "runtime:worker": CYAN
};
function createDebug(scope) {
  return function debug3(message, ...data) {
    if (FLAG === "true") {
      const direction = () => {
        if (message.includes("sender"))
          return `${GREEN}sender`;
        if (message.includes("receiver"))
          return `${RED}receiver`;
        return "";
      };
      const cleanMessage = message.replace(/\[.+\]:/, "");
      console.debug(`${COLOR_SCOPE[scope]}${scope}:${direction()}${DEFAULT}:${cleanMessage}`, ...data);
    }
  };
}

// src/messages.ts
var debug = createDebug("emulator");
var MessageReceiver = class {
  constructor() {
    __publicField(this, "emitter");
    __publicField(this, "senderPort", null);
    this.emitter = new EventTarget();
    this.waitForHandshake();
  }
  waitForHandshake() {
    const handshakePromise = new import_deferred_promise.DeferredPromise();
    const handshakeListener = (message) => {
      const { data } = message;
      debug("[message-receiver]: incoming", message);
      if (data.type === "internal/handshake") {
        invariant(
          message.ports.length > 0,
          "Failed to confirm a MessageReceiver handshake: received event has no ports"
        );
        this.senderPort = message.ports[0];
        this.addMessageListener();
        debug("[message-receiver]: handshake received!", this.senderPort);
        this.send("internal/handshake/done");
        debug("[message-receiver]: finish handshake");
      }
    };
    window.addEventListener("message", handshakeListener);
    handshakePromise.then(() => {
      window.removeEventListener("message", handshakeListener);
    });
    window.parent.postMessage({ type: "internal/ready" }, "*");
    return handshakePromise;
  }
  addMessageListener() {
    invariant(
      this.senderPort,
      "[MessageReceiver] Failed to add a message listener: sender port is not defined. Did you forget to await a handshake?"
    );
    this.senderPort.onmessage = (evt) => {
      const data = evt.data;
      if (data.type == null) {
        return;
      }
      this.emitter.dispatchEvent(
        new MessageEvent(data.type, {
          data: data.payload
        })
      );
    };
  }
  on(event, listener, options) {
    this.emitter.addEventListener(
      event,
      async (message) => {
        if (!(message instanceof MessageEvent)) {
          return;
        }
        const { operationId, payload } = message.data;
        try {
          const listenerPayload = await listener(payload);
          this.send("internal/operation/done", { operationId, listenerPayload });
        } catch (error) {
          if (error instanceof Error) {
            this.send("internal/operation/failed", { operationId, error });
          }
        }
      },
      options
    );
  }
  send(event, ...data) {
    invariant(
      this.senderPort,
      '[MessageReceiver] Failed to send a message "%j": sender port is not defined. Did you forget to await a handshake?',
      event
    );
    const payload = data[0] || {};
    debug('[message-receiver]: send "%s"', event, payload);
    this.senderPort.postMessage({ type: event, payload });
  }
};
var MessageSender = class {
  constructor(target) {
    this.target = target;
    __publicField(this, "emitter");
    __publicField(this, "channel");
    __publicField(this, "receiverPort");
    __publicField(this, "receiverReadyPromise");
    this.emitter = new EventTarget();
    this.channel = new MessageChannel();
    this.receiverPort = this.channel.port1;
    const receiverReadyPromise = new import_deferred_promise.DeferredPromise();
    const handshakeListener = (message) => {
      if (message.data.type === "internal/ready") {
        debug("[message-sender]: runtime is ready");
        receiverReadyPromise.resolve();
      }
    };
    window.addEventListener("message", handshakeListener);
    receiverReadyPromise.then(() => {
      window.removeEventListener("message", handshakeListener);
    });
    this.receiverReadyPromise = receiverReadyPromise;
    this.receiverPort.onmessage = (evt) => {
      const data = evt.data;
      if (data.type != null) {
        debug('[message-sender]: emitting "%s" event...', data.type, data.payload);
        this.emitter.dispatchEvent(new MessageEvent(data.type, { data: data.payload }));
      }
    };
  }
  async handshake() {
    const handshakePromise = new import_deferred_promise.DeferredPromise();
    await this.receiverReadyPromise;
    debug("[message-sender]: sending handshake");
    this.target.postMessage(
      {
        type: "internal/handshake"
      },
      "*",
      [this.channel.port2]
    );
    this.on("internal/handshake/done", () => {
      handshakePromise.resolve();
      clearTimeout(rejectionTimeout);
    });
    const rejectionTimeout = setTimeout(() => {
      handshakePromise.reject(new Error("MessageSender: Handshake timeout"));
    }, 5e3);
    return handshakePromise;
  }
  on(event, listener, options) {
    debug('[message-sender]: add listener "%s"', event);
    this.emitter.addEventListener(
      event,
      (message) => {
        if (message instanceof MessageEvent) {
          listener(message);
        }
      },
      options
    );
  }
  off(event, listener, options) {
    this.emitter.removeEventListener(event, listener, options);
  }
  async send(event, ...data) {
    const operationPromise = new import_deferred_promise.DeferredPromise();
    const operationId = (0, import_cuid.default)();
    const payload = data[0] || {};
    debug('[message-sender]: send "%s" (%s)', event, operationId, payload);
    this.receiverPort.postMessage({ type: event, payload: { operationId, payload } });
    debug('[message-sender]: adding done listener for "%s" (%s)', event, operationId);
    const handleOperationDone = (doneEvent) => {
      const { data: data2 } = doneEvent;
      if (data2.operationId === operationId) {
        const listenerPayload = data2.listenerPayload || {};
        debug('[message-sender]: resolving "%s (%s) promise!', event, operationId);
        operationPromise.resolve({
          ...listenerPayload,
          operationId: data2.operationId
        });
      }
    };
    const handleOperationFailed = (failEvent) => {
      const { data: data2 } = failEvent;
      if (data2.operationId === operationId) {
        debug('[message-sender]: rejecting "%s (%s) promise!', event, operationId);
        operationPromise.reject(data2.error);
      }
    };
    this.on("internal/operation/done", handleOperationDone);
    this.on("internal/operation/failed", handleOperationFailed);
    return operationPromise.finally(() => {
      this.emitter.removeEventListener("internal/operation/done", handleOperationDone);
      this.emitter.removeEventListener("internal/operation/failed", handleOperationFailed);
    });
  }
};

// src/Nodebox.ts
var import_deferred_promise3 = __toESM(require_build());

// src/modules/fs.ts
var import_cuid2 = __toESM(require_cuid());
var FileSystemApi = class {
  constructor(channel) {
    this.channel = channel;
  }
  async init(files) {
    await this.channel.send("fs/init", { files });
  }
  async readFile(path, encoding) {
    const response = await this.channel.send("fs/readFile", { path, encoding }).catch((error) => {
      throw new Error(format('Failed to read file at path "%s"', path), { cause: error });
    });
    if (!response) {
      throw new Error("File not found");
    }
    return response.data;
  }
  async writeFile(path, content, options) {
    let encoding = void 0;
    let recursive = false;
    if (typeof options === "object") {
      encoding = options.encoding;
      recursive = !!options.recursive;
    } else if (typeof options === "string") {
      encoding = options;
    }
    await this.channel.send("fs/writeFile", { path, content, encoding, recursive }).catch((error) => {
      throw new Error(format('Failed to write file at path "%s"', path), { cause: error });
    });
  }
  async readdir(path) {
    const response = await this.channel.send("fs/readdir", { path }).catch((error) => {
      throw new Error(format('Failed to read directory at path "%s"', path), { cause: error });
    });
    if (!response) {
      throw new Error("Directory not found");
    }
    return response.data;
  }
  async mkdir(path, options) {
    const recursive = !!options?.recursive;
    await this.channel.send("fs/mkdir", { path, recursive }).catch((error) => {
      throw new Error(format('Failed to make directory at path "%s"', path), { cause: error });
    });
  }
  async stat(path) {
    const response = await this.channel.send("fs/stat", { path }).catch((error) => {
      throw new Error(format('Failed to stat file at path "%s"', path), { cause: error });
    });
    if (!response) {
      throw new Error("File not found");
    }
    return response.data;
  }
  async rm(path, options) {
    const { force, recursive } = options || {};
    await this.channel.send("fs/rm", { path, force, recursive }).catch((error) => {
      throw new Error(format('Failed to remove file at path "%s"', path), { cause: error });
    });
  }
  async watch(includes, excludes, listener) {
    const watcherId = (0, import_cuid2.default)();
    await this.channel.send("fs/watch", { watcherId, includes, excludes });
    this.channel.on("fs/watch-event", ({ data }) => {
      if (data.watcherId === watcherId && listener) {
        const evt = { ...data };
        delete evt.watcherId;
        listener(evt);
      }
    });
    return {
      dispose: () => this.channel.send("fs/unwatch", { watcherId })
    };
  }
};

// src/modules/shell.ts
var import_strict_event_emitter = __toESM(require_lib());
var ShellApi = class {
  constructor(channel) {
    this.channel = channel;
  }
  create() {
    return new ShellProcess(this.channel);
  }
};
var ShellProcess = class {
  constructor(channel) {
    this.channel = channel;
    __publicField(this, "id");
    __publicField(this, "state");
    __publicField(this, "stdout");
    __publicField(this, "stderr");
    __publicField(this, "stdin");
    this.state = "running";
    this.stdout = new import_strict_event_emitter.Emitter();
    this.stderr = new import_strict_event_emitter.Emitter();
    this.stdin = {
      write: (data) => {
        if (!this.id) {
          throw new Error("Failed to write to stdin, no process is currently running");
        }
        return this.channel.send("shell/stdin", { data, workerId: this.id });
      }
    };
    this.forwardStdEvents();
  }
  forwardStdEvents() {
    this.channel.on("worker/tty", (message) => {
      const { data } = message;
      if (data.workerId !== this.id) {
        return;
      }
      switch (data.payload.type) {
        case "out": {
          this.stdout.emit("data", data.payload.data);
          break;
        }
        case "err": {
          this.stderr.emit("data", data.payload.data);
          break;
        }
      }
    });
  }
  async runCommand(command, args, options = {}) {
    invariant(!this.id, 'Failed to run "runCommand" on a ShellProcess: there is already a process running.');
    const shellInfo = await this.channel.send("shell/runCommand", { command, args, options });
    invariant(shellInfo, 'Failed to run "runCommand" on a ShellProcess: was not able to retrieve a running process.');
    this.id = shellInfo.id;
    this.state = "running";
    return shellInfo;
  }
  async on(message, listener) {
    switch (message) {
      case "progress": {
        this.channel.on("worker/progress", ({ data }) => {
          listener(data.status);
        });
        return;
      }
      case "exit": {
        this.channel.on("worker/exit", ({ data }) => {
          if (data.workerId === this.id) {
            listener(data.exitCode, data.error);
          }
        });
        return;
      }
    }
  }
  async kill() {
    invariant(
      this.id,
      'Failed to run "kill" on a ShellProcess: there is no process running. Did you forget to run it?'
    );
    this.state = "idle";
    await this.channel.send("shell/exit", { id: this.id }).catch((error) => {
      throw new Error(format('Failed to kill shell with ID "%s"', this.id), { cause: error });
    });
    this.id = void 0;
  }
};

// src/modules/preview.ts
var import_deferred_promise2 = __toESM(require_build());
var TIMEOUT = 2e4;
var PreviewApi = class {
  constructor(channel) {
    this.channel = channel;
  }
  async waitFor(payload, predicate, timeout = TIMEOUT) {
    const readyPromise = new import_deferred_promise2.DeferredPromise();
    const rejectTimeout = setTimeout(() => {
      readyPromise.reject();
    }, timeout);
    const previewInformation = await this.channel.send("preview/get/info", payload).catch((error) => {
      readyPromise.reject(
        new Error(
          format(
            'Failed to look up preview information for shell ID "%s" (port: %d)',
            payload.sourceShellId,
            payload.port
          )
        )
      );
    });
    const foundPreview = previewInformation && predicate(previewInformation);
    if (foundPreview) {
      readyPromise.resolve({
        url: previewInformation.url,
        port: previewInformation.port,
        sourceShellId: previewInformation.sourceShellId
      });
    }
    this.channel.on("preview/port/ready", ({ data }) => {
      if (!foundPreview && predicate(data)) {
        readyPromise.resolve({
          url: data.url,
          port: data.port,
          sourceShellId: data.sourceShellId
        });
      }
    });
    return readyPromise.finally(() => {
      clearTimeout(rejectTimeout);
    });
  }
  async getByShellId(sourceShellId, timeout) {
    return this.waitFor({ sourceShellId }, (data) => data.sourceShellId === sourceShellId, timeout).catch((error) => {
      throw new Error(format('Failed to get shell by ID "%s"', sourceShellId), { cause: error });
    });
  }
  async waitForPort(port, timeout) {
    return this.waitFor({ port }, (data) => data.port === port, timeout).catch((error) => {
      throw new Error(format("Failed to await port %d", port), { cause: error });
    });
  }
};

// src/Nodebox.ts
var DEFAULT_RUNTIME_URL = "https://nodebox-runtime.codesandbox.io";
var debug2 = createDebug("emulator");
var Nodebox = class {
  constructor(options) {
    this.options = options;
    __publicField(this, "channel", null);
    __publicField(this, "isConnected");
    __publicField(this, "url");
    __publicField(this, "fileSystemApi", null);
    __publicField(this, "shellApi", null);
    __publicField(this, "previewApi", null);
    invariant(
      this.options.iframe,
      'Failed to create a Nodebox: expected "iframe" argument to be a reference to an <iframe> element but got %j',
      this.options.iframe
    );
    this.url = this.options.runtimeUrl || DEFAULT_RUNTIME_URL;
    this.isConnected = false;
  }
  async connect() {
    const { iframe, cdnUrl } = this.options;
    debug2("[message-sender]: Connecting to node emulator...");
    const connectionPromise = new import_deferred_promise3.DeferredPromise();
    if (!this.url) {
      connectionPromise.reject(
        new Error("Nodebox URL is missing. Did you forget to provide it when creating this Nodebox instance?")
      );
    }
    invariant(
      iframe.contentWindow,
      "Failed to create a MessageChannel with the Nodebox iframe: no content window found"
    );
    this.channel = new MessageSender(iframe.contentWindow);
    const frameLoadPromise = new import_deferred_promise3.DeferredPromise();
    iframe.setAttribute("src", this.url);
    iframe.addEventListener(
      "load",
      () => {
        frameLoadPromise.resolve();
      },
      { once: true }
    );
    iframe.addEventListener(
      "error",
      (event) => {
        frameLoadPromise.reject(event.error);
      },
      { once: true }
    );
    await frameLoadPromise;
    debug2("[message-sender]: IFrame loaded...");
    await this.channel.handshake();
    debug2("[message-sender]: Handshake completed...");
    this.channel.send("connect", {
      cdnUrl
    });
    this.channel.on("runtime/ready", () => {
      connectionPromise.resolve();
    });
    return connectionPromise.then(() => {
      debug2("[message-sender]: Connected to runtime...");
      this.isConnected = true;
    });
  }
  get fs() {
    invariant(
      this.isConnected,
      'Failed to access the File System API: consumer is not connected. Did you forget to run "connect()"?'
    );
    if (this.fileSystemApi) {
      return this.fileSystemApi;
    }
    this.fileSystemApi = new FileSystemApi(this.channel);
    return this.fileSystemApi;
  }
  get shell() {
    invariant(
      this.isConnected,
      'Failed to access the Shell API: consumer is not connected. Did you forget to run "connect()"?'
    );
    if (this.shellApi) {
      return this.shellApi;
    }
    this.shellApi = new ShellApi(this.channel);
    return this.shellApi;
  }
  get preview() {
    invariant(
      this.isConnected,
      'Failed to access the Preview API: consumer is not connected. Did you forget to run "connect()"?'
    );
    if (this.previewApi) {
      return this.previewApi;
    }
    this.previewApi = new PreviewApi(this.channel);
    return this.previewApi;
  }
};

// src/runtime-protocol.types.ts
var INJECT_MESSAGE_TYPE = "INJECT_AND_INVOKE";
var PREVIEW_LOADED_MESSAGE_TYPE = "PREVIEW_LOADED";
