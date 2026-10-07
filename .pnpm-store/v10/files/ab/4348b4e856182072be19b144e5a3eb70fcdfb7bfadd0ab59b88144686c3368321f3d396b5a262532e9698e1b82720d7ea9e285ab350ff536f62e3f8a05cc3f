import { getCurrentScope } from './currentScopes.js';
import { DEBUG_BUILD } from './debug-build.js';
import { debug, consoleSandbox } from './utils/debug-logger.js';

function initAndBind(clientClass, options) {
  if (options.debug === true) {
    if (DEBUG_BUILD) {
      debug.enable();
    } else {
      consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const scope = getCurrentScope();
  scope.update(options.initialScope);
  const client = new clientClass(options);
  setCurrentClient(client);
  client.init();
  return client;
}
function setCurrentClient(client) {
  getCurrentScope().setClient(client);
}

export { initAndBind, setCurrentClient };
//# sourceMappingURL=sdk.js.map
