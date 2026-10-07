"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var define_network_exports = {};
__export(define_network_exports, {
  NetworkReadyState: () => NetworkReadyState,
  defineNetwork: () => defineNetwork
});
module.exports = __toCommonJS(define_network_exports);
var import_outvariant = require("outvariant");
var import_rettime = require("rettime");
var import_network_source = require("./sources/network-source");
var import_network_frame = require("./frames/network-frame");
var import_on_unhandled_frame = require("./on-unhandled-frame");
var import_handlers_controller = require("./handlers-controller");
var import_toReadonlyArray = require("../utils/internal/toReadonlyArray");
function colorlessPromiseAll(values) {
  const promises = [];
  for (const value of values) {
    if (value instanceof Promise) {
      promises.push(value);
    }
  }
  if (promises.length > 0) {
    return Promise.all(promises).then(() => {
    });
  }
}
var NetworkReadyState = /* @__PURE__ */ ((NetworkReadyState2) => {
  NetworkReadyState2[NetworkReadyState2["DISABLED"] = 0] = "DISABLED";
  NetworkReadyState2[NetworkReadyState2["ENABLED"] = 1] = "ENABLED";
  return NetworkReadyState2;
})(NetworkReadyState || {});
function defineNetwork(options) {
  let readyState = 0 /* DISABLED */;
  const events = new import_rettime.Emitter();
  const deriveHandlersController = (handlers) => {
    return handlers instanceof import_handlers_controller.HandlersController ? handlers : new import_handlers_controller.InMemoryHandlersController(handlers || []);
  };
  let resolvedOptions = {
    ...options
  };
  let handlersController = deriveHandlersController(resolvedOptions.handlers);
  let listenersController;
  return {
    get readyState() {
      return readyState;
    },
    events,
    configure(options2) {
      (0, import_outvariant.invariant)(readyState === 0 /* DISABLED */, "");
      if (options2.handlers && !Object.is(options2.handlers, resolvedOptions.handlers)) {
        handlersController = deriveHandlersController(options2.handlers);
      }
      resolvedOptions = {
        ...resolvedOptions,
        ...options2
      };
    },
    enable() {
      (0, import_outvariant.invariant)(
        readyState === 0 /* DISABLED */,
        'Failed to call "enable" on the network: already enabled'
      );
      listenersController = new AbortController();
      readyState = 1 /* ENABLED */;
      const result = resolvedOptions.sources.map((source) => {
        import_network_source.NetworkSource.prototype.disable.call(source);
        source.on("frame", async ({ frame }) => {
          frame.events.on("*", (event) => events.emit(event), {
            signal: listenersController.signal
          });
          const handlers = frame.getHandlers(handlersController);
          await frame.resolve(
            handlers,
            resolvedOptions.onUnhandledFrame || "warn",
            resolvedOptions.context
          );
        });
        return source.enable();
      });
      return colorlessPromiseAll(result);
    },
    disable() {
      (0, import_outvariant.invariant)(
        readyState === 1 /* ENABLED */,
        'Failed to call "disable" on the network: already disabled'
      );
      listenersController.abort();
      readyState = 0 /* DISABLED */;
      return colorlessPromiseAll(
        resolvedOptions.sources.map((source) => source.disable())
      );
    },
    use(...handlers) {
      handlersController.use(handlers);
    },
    resetHandlers(...handlers) {
      handlersController.reset(handlers);
    },
    restoreHandlers() {
      handlersController.restore();
    },
    listHandlers() {
      return (0, import_toReadonlyArray.toReadonlyArray)(handlersController.currentHandlers());
    }
  };
}
//# sourceMappingURL=define-network.js.map