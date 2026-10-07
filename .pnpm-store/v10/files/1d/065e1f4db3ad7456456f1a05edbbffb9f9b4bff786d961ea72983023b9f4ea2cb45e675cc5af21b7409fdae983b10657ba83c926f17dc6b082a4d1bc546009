import { consoleSandbox, getClient, debug } from '@sentry/core';
import { DEBUG_BUILD } from '../debug-build.js';

const DEFAULT_SHUTDOWN_TIMEOUT = 2e3;
function logAndExitProcess(error) {
  consoleSandbox(() => {
    console.error(error);
  });
  const client = getClient();
  if (client === void 0) {
    DEBUG_BUILD && debug.warn("No NodeClient was defined, we are exiting the process now.");
    global.process.exit(1);
    return;
  }
  const options = client.getOptions();
  const timeout = options?.shutdownTimeout && options.shutdownTimeout > 0 ? options.shutdownTimeout : DEFAULT_SHUTDOWN_TIMEOUT;
  client.close(timeout).then(
    (result) => {
      if (!result) {
        DEBUG_BUILD && debug.warn("We reached the timeout for emptying the request buffer, still exiting now!");
      }
      global.process.exit(1);
    },
    (error2) => {
      DEBUG_BUILD && debug.error(error2);
    }
  );
}

export { logAndExitProcess };
//# sourceMappingURL=errorhandling.js.map
