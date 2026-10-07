import { invariant } from "outvariant";
import { Emitter } from "rettime";
import {
  NetworkSource
} from './sources/network-source.mjs';
import {} from './frames/network-frame.mjs';
import {} from './on-unhandled-frame.mjs';
import {
  HandlersController,
  InMemoryHandlersController
} from './handlers-controller.mjs';
import { toReadonlyArray } from '../utils/internal/toReadonlyArray.mjs';
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
  const events = new Emitter();
  const deriveHandlersController = (handlers) => {
    return handlers instanceof HandlersController ? handlers : new InMemoryHandlersController(handlers || []);
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
      invariant(readyState === 0 /* DISABLED */, "");
      if (options2.handlers && !Object.is(options2.handlers, resolvedOptions.handlers)) {
        handlersController = deriveHandlersController(options2.handlers);
      }
      resolvedOptions = {
        ...resolvedOptions,
        ...options2
      };
    },
    enable() {
      invariant(
        readyState === 0 /* DISABLED */,
        'Failed to call "enable" on the network: already enabled'
      );
      listenersController = new AbortController();
      readyState = 1 /* ENABLED */;
      const result = resolvedOptions.sources.map((source) => {
        NetworkSource.prototype.disable.call(source);
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
      invariant(
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
      return toReadonlyArray(handlersController.currentHandlers());
    }
  };
}
export {
  NetworkReadyState,
  defineNetwork
};
//# sourceMappingURL=define-network.mjs.map