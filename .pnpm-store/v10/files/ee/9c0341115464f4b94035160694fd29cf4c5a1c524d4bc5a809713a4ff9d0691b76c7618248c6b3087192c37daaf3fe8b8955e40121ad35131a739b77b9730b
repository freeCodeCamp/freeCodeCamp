// src/node/setup-server.ts
import { ClientRequestInterceptor } from "@mswjs/interceptors/ClientRequest";
import { XMLHttpRequestInterceptor } from "@mswjs/interceptors/XMLHttpRequest";
import { FetchInterceptor } from "@mswjs/interceptors/fetch";
import { WebSocketInterceptor } from "@mswjs/interceptors/WebSocket";
import {
  defineNetwork as defineNetwork2
} from '../core/experimental/define-network.mjs';
import { InterceptorSource as InterceptorSource2 } from '../core/experimental/sources/interceptor-source.mjs';

// src/node/async-handlers-controller.ts
import { AsyncLocalStorage } from "async_hooks";
import {
  HandlersController
} from '../core/experimental/handlers-controller.mjs';
var AsyncHandlersController = class extends HandlersController {
  #asyncContext;
  #fallbackContext;
  constructor(initialHandlers) {
    super();
    const initialState = this.getInitialState(initialHandlers);
    this.#asyncContext = new AsyncLocalStorage();
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
import {
  NetworkReadyState,
  defineNetwork
} from '../core/experimental/define-network.mjs';
import { InterceptorSource } from '../core/experimental/sources/interceptor-source.mjs';
import { fromLegacyOnUnhandledRequest } from '../core/experimental/compat.mjs';
function defineSetupServerApi(network) {
  return {
    events: network.events,
    listen(options) {
      network.configure({
        onUnhandledFrame: fromLegacyOnUnhandledRequest(() => {
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
      if (network.readyState === NetworkReadyState.DISABLED) {
        return;
      }
      network.disable();
    }
  };
}
var SetupServerCommonApi = class {
  network;
  constructor(interceptors, handlers) {
    this.network = defineNetwork({
      sources: [new InterceptorSource({ interceptors })],
      handlers
    });
  }
  get events() {
    return this.network.events;
  }
  listen(options) {
    this.network.configure({
      onUnhandledFrame: fromLegacyOnUnhandledRequest(() => {
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
  new ClientRequestInterceptor(),
  new XMLHttpRequestInterceptor(),
  new FetchInterceptor(),
  /**
   * @fixme WebSocketInterceptor is in a browser-only export of Interceptors
   * while the Interceptor class imported from the root module points to `lib/node`.
   * An absolute madness to solve as it requires to duplicate the build config we have
   * in MSW: shared core, CJS/ESM patching, .d.ts patching...
   */
  new WebSocketInterceptor()
];
var defaultNetworkOptions = {
  sources: [
    new InterceptorSource2({
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
  const network = defineNetwork2({
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
export {
  AsyncHandlersController,
  SetupServerApi,
  SetupServerCommonApi,
  defaultNetworkOptions,
  setupServer
};
//# sourceMappingURL=index.mjs.map