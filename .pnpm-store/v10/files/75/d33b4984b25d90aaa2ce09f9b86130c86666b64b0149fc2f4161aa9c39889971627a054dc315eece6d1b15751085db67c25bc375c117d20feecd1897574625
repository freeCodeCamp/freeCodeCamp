"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/outvariant@1.3.0/node_modules/outvariant/lib/format.js
  var require_format = __commonJS({
    "node_modules/.pnpm/outvariant@1.3.0/node_modules/outvariant/lib/format.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.format = void 0;
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
            var json = JSON.stringify(positional);
            if (json === "{}" || json === "[]" || /^\[object .+?\]$/.test(json)) {
              return positional;
            }
            return json;
          }
        }
      }
      function format(message) {
        var positionals = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          positionals[_i - 1] = arguments[_i];
        }
        if (positionals.length === 0) {
          return message;
        }
        var positionalIndex = 0;
        var formattedMessage = message.replace(POSITIONALS_EXP, function(match, isEscaped, _, flag) {
          var positional = positionals[positionalIndex];
          var value = serializePositional(positional, flag);
          if (!isEscaped) {
            positionalIndex++;
            return value;
          }
          return match;
        });
        if (positionalIndex < positionals.length) {
          formattedMessage += " " + positionals.slice(positionalIndex).join(" ");
        }
        formattedMessage = formattedMessage.replace(/%{2,2}/g, "%");
        return formattedMessage;
      }
      exports.format = format;
    }
  });

  // node_modules/.pnpm/outvariant@1.3.0/node_modules/outvariant/lib/invariant.js
  var require_invariant = __commonJS({
    "node_modules/.pnpm/outvariant@1.3.0/node_modules/outvariant/lib/invariant.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __spreadArray = exports && exports.__spreadArray || function(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
          to[j] = from[i];
        return to;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.invariant = exports.createInvariantWith = exports.InvariantError = void 0;
      var format_1 = require_format();
      var STACK_FRAMES_TO_IGNORE = 2;
      function cleanErrorStack(error) {
        if (!error.stack) {
          return;
        }
        var nextStack = error.stack.split("\n");
        nextStack.splice(1, STACK_FRAMES_TO_IGNORE);
        error.stack = nextStack.join("\n");
      }
      var InvariantError = (
        /** @class */
        function(_super) {
          __extends(InvariantError2, _super);
          function InvariantError2(message) {
            var positionals = [];
            for (var _i = 1; _i < arguments.length; _i++) {
              positionals[_i - 1] = arguments[_i];
            }
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.name = "Invariant Violation";
            _this.message = format_1.format.apply(void 0, __spreadArray([message], positionals));
            cleanErrorStack(_this);
            return _this;
          }
          return InvariantError2;
        }(Error)
      );
      exports.InvariantError = InvariantError;
      function createInvariantWith(ErrorConstructor) {
        var invariant2 = function(predicate, message) {
          var positionals = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            positionals[_i - 2] = arguments[_i];
          }
          if (!predicate) {
            var resolvedMessage = format_1.format.apply(void 0, __spreadArray([message], positionals));
            var isConstructor = !!ErrorConstructor.prototype.name;
            var error = isConstructor ? (
              // @ts-expect-error Construct/call signature too dynamic.
              new ErrorConstructor(resolvedMessage)
            ) : (
              // @ts-expect-error Construct/call signature too dynamic.
              ErrorConstructor(resolvedMessage)
            );
            cleanErrorStack(error);
            throw error;
          }
        };
        return invariant2;
      }
      exports.createInvariantWith = createInvariantWith;
      function polymorphicInvariant(ErrorClass) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        return createInvariantWith(ErrorClass).apply(void 0, args);
      }
      exports.invariant = createInvariantWith(InvariantError);
      exports.invariant.as = polymorphicInvariant;
    }
  });

  // node_modules/.pnpm/outvariant@1.3.0/node_modules/outvariant/lib/index.js
  var require_lib = __commonJS({
    "node_modules/.pnpm/outvariant@1.3.0/node_modules/outvariant/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
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
      __exportStar(require_invariant(), exports);
      __exportStar(require_format(), exports);
    }
  });

  // node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/createDeferredExecutor.js
  var require_createDeferredExecutor = __commonJS({
    "node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/createDeferredExecutor.js"(exports) {
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

  // node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/DeferredPromise.js
  var require_DeferredPromise = __commonJS({
    "node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/DeferredPromise.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DeferredPromise = void 0;
      var createDeferredExecutor_1 = require_createDeferredExecutor();
      var DeferredPromise2 = class extends Promise {
        #executor;
        resolve;
        reject;
        constructor(executor = null) {
          const deferredExecutor = (0, createDeferredExecutor_1.createDeferredExecutor)();
          super((originalResolve, originalReject) => {
            deferredExecutor(originalResolve, originalReject);
            executor?.(deferredExecutor.resolve, deferredExecutor.reject);
          });
          this.#executor = deferredExecutor;
          this.resolve = this.#executor.resolve;
          this.reject = this.#executor.reject;
        }
        get state() {
          return this.#executor.state;
        }
        get rejectionReason() {
          return this.#executor.rejectionReason;
        }
        then(onFulfilled, onRejected) {
          return this.#decorate(super.then(onFulfilled, onRejected));
        }
        catch(onRejected) {
          return this.#decorate(super.catch(onRejected));
        }
        finally(onfinally) {
          return this.#decorate(super.finally(onfinally));
        }
        #decorate(promise) {
          return Object.defineProperties(promise, {
            resolve: { configurable: true, value: this.resolve },
            reject: { configurable: true, value: this.reject }
          });
        }
      };
      exports.DeferredPromise = DeferredPromise2;
    }
  });

  // node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/index.js
  var require_build = __commonJS({
    "node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/index.js"(exports) {
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

  // src/lib/utils.ts
  var counter = 0;
  function generateRandomId() {
    const now = Date.now();
    const randomNumber = Math.round(Math.random() * 1e4);
    const count = counter += 1;
    return (+`${now}${randomNumber}${count}`).toString(16);
  }

  // src/preview/relay/service-worker.ts
  var import_outvariant = __toESM(require_lib());
  var import_deferred_promise = __toESM(require_build());

  // src/preview/relay/constants.ts
  var CHANNEL_NAME = "$CSB_RELAY";

  // src/preview/relay/service-worker.ts
  self.addEventListener("install", function() {
    self.skipWaiting();
  });
  self.addEventListener("activate", async (event) => {
    event.waitUntil(self.clients.claim());
  });
  var pendingRequests = /* @__PURE__ */ new Map();
  function initRelayPort(relayPort) {
    relayPort.onmessage = (event) => {
      const { data } = event;
      switch (data.$type) {
        case "preview/response": {
          const message = data;
          const foundRequest = pendingRequests.get(message.id);
          (0, import_outvariant.invariant)(
            foundRequest,
            'Failed to handle "PREVIEW_RESPONSE_TYPE" message from the relay: unknown request ID "%s"',
            message.id
          );
          pendingRequests.delete(message.id);
          foundRequest.resolve({
            status: message.status,
            headers: message.headers,
            body: message.body
          });
          break;
        }
      }
    };
  }
  function createRelayPortPromise() {
    const promise = new import_deferred_promise.DeferredPromise();
    promise.then((port) => {
      initRelayPort(port);
      return port;
    });
    return promise;
  }
  var relayPortPromise = createRelayPortPromise();
  async function sendToRelay(message) {
    const relayPort = await relayPortPromise;
    (0, import_outvariant.invariant)(
      relayPort,
      "Failed to send message to the relay: relay message port is not defined",
      message
    );
    relayPort.postMessage(message);
  }
  self.addEventListener("message", async (event) => {
    if (typeof event.data !== "object" || event.data.$channel !== CHANNEL_NAME) {
      return;
    }
    const message = event.data;
    switch (message.$type) {
      case "worker/init": {
        const nextRelayPort = event.ports[0];
        (0, import_outvariant.invariant)(
          relayPortPromise.state === "pending",
          "Failed to initialize relay: relay port promise already fulfilled from previous evaluation."
        );
        relayPortPromise.resolve(nextRelayPort);
        break;
      }
      case "worker/ping": {
        if (!(event.source instanceof Client)) {
          return;
        }
        const client = await self.clients.get(event.source.id);
        if (client) {
          const pong = {
            $channel: CHANNEL_NAME,
            $type: "worker/pong"
          };
          client.postMessage(pong);
        }
        break;
      }
    }
  });
  function getResponse(request) {
    const requestId = generateRandomId();
    const requestPromise = new import_deferred_promise.DeferredPromise();
    const timeout = setTimeout(() => {
      pendingRequests.delete(requestId);
      requestPromise.reject(
        new Error(
          `Failed to handle ${request.method} ${request.url} request: no response received from the BroadcastChannel within timeout. There's likely an issue with the relay/worker communication.`
        )
      );
    }, 2e4);
    const requestMessage = {
      $channel: CHANNEL_NAME,
      $type: "preview/request",
      id: requestId,
      url: request.url,
      method: request.method
    };
    pendingRequests.set(requestId, requestPromise);
    sendToRelay(requestMessage);
    return requestPromise.finally(() => clearTimeout(timeout));
  }
  self.addEventListener("fetch", (event) => {
    const req = event.request.clone();
    const parsedUrl = new URL(req.url);
    if (parsedUrl.pathname.startsWith("/__csb")) {
      return;
    }
    const handleRequest = async () => {
      const response = await getResponse(req);
      const swResponse = new Response(response.body, {
        headers: response.headers,
        status: response.status
      });
      return swResponse;
    };
    return event.respondWith(handleRequest());
  });
})();
