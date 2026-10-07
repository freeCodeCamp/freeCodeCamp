Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const debugBuild = require('../debug-build.js');

const DEFAULT_SHUTDOWN_TIMEOUT = 2e3;
function logAndExitProcess(error) {
  core.consoleSandbox(() => {
    console.error(error);
  });
  const client = core.getClient();
  if (client === void 0) {
    debugBuild.DEBUG_BUILD && core.debug.warn("No NodeClient was defined, we are exiting the process now.");
    global.process.exit(1);
    return;
  }
  const options = client.getOptions();
  const timeout = options?.shutdownTimeout && options.shutdownTimeout > 0 ? options.shutdownTimeout : DEFAULT_SHUTDOWN_TIMEOUT;
  client.close(timeout).then(
    (result) => {
      if (!result) {
        debugBuild.DEBUG_BUILD && core.debug.warn("We reached the timeout for emptying the request buffer, still exiting now!");
      }
      global.process.exit(1);
    },
    (error2) => {
      debugBuild.DEBUG_BUILD && core.debug.error(error2);
    }
  );
}

exports.logAndExitProcess = logAndExitProcess;
//# sourceMappingURL=errorhandling.js.map
