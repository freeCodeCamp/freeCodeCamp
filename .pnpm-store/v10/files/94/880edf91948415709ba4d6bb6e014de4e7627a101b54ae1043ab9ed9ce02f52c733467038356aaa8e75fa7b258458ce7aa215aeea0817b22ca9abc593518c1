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

// src/node/index.ts
var index_exports = {};
__export(index_exports, {
  AsyncHandlersController: () => AsyncHandlersController,
  SetupServerApi: () => SetupServerApi,
  SetupServerCommonApi: () => SetupServerCommonApi,
  defaultNetworkOptions: () => defaultNetworkOptions,
  setupServer: () => setupServer
});
module.exports = __toCommonJS(index_exports);

// src/node/setup-server.ts
var import_ClientRequest = require("@mswjs/interceptors/ClientRequest");
var import_XMLHttpRequest = require("@mswjs/interceptors/XMLHttpRequest");
var import_fetch = require("@mswjs/interceptors/fetch");
var import_WebSocket = require("@mswjs/interceptors/WebSocket");
var import_define_network2 = require("../core/experimental/define-network");
var import_interceptor_source2 = require("../core/experimental/sources/interceptor-source");

// src/node/async-handlers-controller.ts
var import_node_async_hooks = require("async_hooks");
var import_handlers_controller = require("../core/experimental/handlers-controller");
var AsyncHandlersController = class extends import_handlers_controller.HandlersController {
  #asyncContext;
  #fallbackContext;
  constructor(initialHandlers) {
    super();
    const initialState = this.getInitialState(initialHandlers);
    this.#asyncContext = new import_node_async_hooks.AsyncLocalStorage();
    this.#fallbackContext = {
      initialHandlers: initialState.initialHandlers,
      handlers: initialState.handlers
    };
  }
  getState() {
    const { initialHandlers, handlers } = this.#getContext();
    return {
      initialHandlers,
      handlers
    };
  }
  setState(nextState) {
    const context = this.#getContext();
    if (nextState.initialHandlers) {
      context.initialHandlers = nextState.initialHandlers;
    }
    if (nextState.handlers) {
      context.handlers = nextState.handlers;
    }
  }
  boundary(callback) {
    return (...args) => {
      const initialHandlers = { ...this.getState().handlers };
      return this.#asyncContext.run(
        {
          initialHandlers,
          handlers: { ...initialHandlers }
        },
        callback,
        ...args
      );
    };
  }
  #getContext() {
    return this.#asyncContext.getStore() || this.#fallbackContext;
  }
};

// src/node/setup-server-common.ts
var import_define_network = require("../core/experimental/define-network");
var import_interceptor_source = require("../core/experimental/sources/interceptor-source");
var import_compat = require("../core/experimental/compat");
function defineSetupServerApi(network) {
  return {
    events: network.events,
    listen(options) {
      network.configure({
        onUnhandledFrame: (0, import_compat.fromLegacyOnUnhandledRequest)(() => {
          return options?.onUnhandledRequest || "warn";
        })
      });
      network.enable();
    },
    use: network.use.bind(network),
    resetHandlers: network.resetHandlers.bind(network),
    restoreHandlers: network.restoreHandlers.bind(network),
    listHandlers: network.listHandlers.bind(network),
    close() {
      if (network.readyState === import_define_network.NetworkReadyState.DISABLED) {
        return;
      }
      network.disable();
    }
  };
}
var SetupServerCommonApi = class {
  network;
  constructor(interceptors, handlers) {
    this.network = (0, import_define_network.defineNetwork)({
      sources: [new import_interceptor_source.InterceptorSource({ interceptors })],
      handlers
    });
  }
  get events() {
    return this.network.events;
  }
  listen(options) {
    this.network.configure({
      onUnhandledFrame: (0, import_compat.fromLegacyOnUnhandledRequest)(() => {
        return options?.onUnhandledRequest || "warn";
      })
    });
    this.network.enable();
  }
  use(...handlers) {
    this.network.use(...handlers);
  }
  resetHandlers(...nextHandlers) {
    return this.network.resetHandlers(...nextHandlers);
  }
  restoreHandlers() {
    return this.network.restoreHandlers();
  }
  listHandlers() {
    return this.network.listHandlers();
  }
  close() {
    this.network.disable();
  }
};

// src/node/setup-server.ts
var defaultInterceptors = [
  new import_ClientRequest.ClientRequestInterceptor(),
  new import_XMLHttpRequest.XMLHttpRequestInterceptor(),
  new import_fetch.FetchInterceptor(),
  /**
   * @fixme WebSocketInterceptor is in a browser-only export of Interceptors
   * while the Interceptor class imported from the root module points to `lib/node`.
   * An absolute madness to solve as it requires to duplicate the build config we have
   * in MSW: shared core, CJS/ESM patching, .d.ts patching...
   */
  new import_WebSocket.WebSocketInterceptor()
];
var defaultNetworkOptions = {
  sources: [
    new import_interceptor_source2.InterceptorSource({
      interceptors: defaultInterceptors
    })
  ],
  onUnhandledFrame: "warn",
  context: {
    quiet: true
  }
};
function setupServer(...handlers) {
  const handlersController = new AsyncHandlersController(handlers);
  const network = (0, import_define_network2.defineNetwork)({
    ...defaultNetworkOptions,
    handlers: handlersController
  });
  const commonApi = defineSetupServerApi(network);
  return {
    ...commonApi,
    boundary: handlersController.boundary.bind(handlersController)
  };
}
var SetupServerApi = class extends SetupServerCommonApi {
  #handlersController;
  boundary;
  constructor(handlers, interceptors) {
    const controller = new AsyncHandlersController(handlers);
    super(interceptors, controller);
    const { sources: _, ...networkOptions } = defaultNetworkOptions;
    this.network.configure(networkOptions);
    this.#handlersController = controller;
    this.boundary = this.#handlersController.boundary.bind(
      this.#handlersController
    );
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AsyncHandlersController,
  SetupServerApi,
  SetupServerCommonApi,
  defaultNetworkOptions,
  setupServer
});
//# sourceMappingURL=index.js.map