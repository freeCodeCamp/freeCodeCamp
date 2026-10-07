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

  // src/preview/relay/main.ts
  var import_outvariant = __toESM(require_lib());
  var import_deferred_promise = __toESM(require_build());

  // src/preview/relay/constants.ts
  var CHANNEL_NAME = "$CSB_RELAY";

  // src/preview/relay/utils.ts
  function getWorkerInstance(registration) {
    return registration.installing || registration.waiting || registration.active;
  }

  // src/preview/relay/main.ts
  var workerChannel = new MessageChannel();
  var workerReadyPromise = new import_deferred_promise.DeferredPromise();
  workerReadyPromise.then((worker) => {
    const workerInitMessage = {
      $channel: CHANNEL_NAME,
      $type: "worker/init"
    };
    worker.postMessage(workerInitMessage, [workerChannel.port2]);
    return worker;
  });
  var parentPortPromise = new import_deferred_promise.DeferredPromise();
  window.addEventListener(
    "message",
    (event) => {
      if (event.data.$type === "preview/init") {
        const parentPort = event.ports[0];
        parentPort.onmessage = async (evt) => {
          if (typeof evt.data === "object" && evt.data.$channel === CHANNEL_NAME && evt.data.$type === "preview/response") {
            const msg = evt.data;
            workerChannel.port1.postMessage(msg);
          }
        };
        parentPortPromise.resolve(parentPort);
      }
    }
  );
  workerChannel.port1.onmessage = async (event) => {
    const data = event.data;
    if (data.$channel === CHANNEL_NAME) {
      const port = await parentPortPromise;
      const message = data;
      port.postMessage(message);
    }
  };
  var workerUrl = new URL("/__csb_sw.rpfsli6sirrzs1630o3lgzuxwlr2uqc.js", location.origin).href;
  function preventStaleTermination(worker) {
    const keepaliveInterval = setInterval(() => {
      const pingMessage = {
        $channel: CHANNEL_NAME,
        $type: "worker/ping"
      };
      worker.postMessage(pingMessage);
    }, 5e3);
    worker.addEventListener("statechange", () => {
      if (worker.state === "redundant") {
        clearInterval(keepaliveInterval);
      }
    });
  }
  async function getServiceWorker() {
    (0, import_outvariant.invariant)(
      "serviceWorker" in navigator,
      "Failed to start the relay Service Worker: Service Worker API is not supported in this browser"
    );
    const registerWorker = async () => {
      const registration2 = await navigator.serviceWorker.register(
        "/__csb_sw.rpfsli6sirrzs1630o3lgzuxwlr2uqc.js",
        {
          scope: "/"
        }
      );
      return getWorkerInstance(registration2);
    };
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(
      registrations.map((registration2) => {
        const worker = getWorkerInstance(registration2);
        if (worker && worker.scriptURL !== workerUrl) {
          return registration2.unregister();
        }
      })
    );
    const { controller } = navigator.serviceWorker;
    if (!controller) {
      return registerWorker();
    }
    if (controller.scriptURL === workerUrl) {
      return controller;
    }
    const [controllerRegistration, registration] = await Promise.all([
      navigator.serviceWorker.getRegistration(controller.scriptURL),
      navigator.serviceWorker.getRegistration(workerUrl)
    ]);
    if (!registration) {
      await controllerRegistration?.unregister();
      return registerWorker();
    }
    if (registration.waiting) {
      await registration.update();
      const worker = getWorkerInstance(registration);
      (0, import_outvariant.invariant)(
        worker,
        "Failed to retrieve the worker instance after promotion: worked does not exist"
      );
      (0, import_outvariant.invariant)(
        registration.active,
        'Failed to promove a waiting Service Worker: expected the worker state to be "active" but got "%s"',
        worker.state
      );
      return worker;
    }
    return null;
  }
  async function start() {
    const worker = await getServiceWorker().catch((error) => {
      console.error(
        "Failed to ensure the relay has a Service Worker registered. See details below."
      );
      console.error(error);
      return;
    });
    await navigator.serviceWorker.ready;
    (0, import_outvariant.invariant)(worker, "Failed to retrieve the worker instance: worker not found");
    preventStaleTermination(worker);
    workerReadyPromise.resolve(worker);
    const parentPort = await parentPortPromise;
    const readyMessage = {
      $channel: CHANNEL_NAME,
      $type: "preview/ready"
    };
    parentPort.postMessage(readyMessage);
  }
  start().catch(console.error);
})();
