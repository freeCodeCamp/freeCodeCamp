Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const currentScopes = require('./currentScopes.js');
const debugBuild = require('./debug-build.js');
const debugLogger = require('./utils/debug-logger.js');

function initAndBind(clientClass, options) {
  if (options.debug === true) {
    if (debugBuild.DEBUG_BUILD) {
      debugLogger.debug.enable();
    } else {
      debugLogger.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const scope = currentScopes.getCurrentScope();
  scope.update(options.initialScope);
  const client = new clientClass(options);
  setCurrentClient(client);
  client.init();
  return client;
}
function setCurrentClient(client) {
  currentScopes.getCurrentScope().setClient(client);
}

exports.initAndBind = initAndBind;
exports.setCurrentClient = setCurrentClient;
//# sourceMappingURL=sdk.js.map
