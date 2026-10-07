// src/native/index.ts
import { FetchInterceptor } from "@mswjs/interceptors/fetch";
import { XMLHttpRequestInterceptor } from "@mswjs/interceptors/XMLHttpRequest";
import {
  defineNetwork as defineNetwork2
} from '../core/experimental/define-network.mjs';
import { InterceptorSource as InterceptorSource2 } from '../core/experimental/sources/interceptor-source.mjs';

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

// src/native/index.ts
var defaultInterceptors = [
  new FetchInterceptor(),
  new XMLHttpRequestInterceptor()
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
  const network = defineNetwork2({
    ...defaultNetworkOptions,
    handlers
  });
  return defineSetupServerApi(network);
}
export {
  defaultNetworkOptions,
  setupServer
};
//# sourceMappingURL=index.mjs.map