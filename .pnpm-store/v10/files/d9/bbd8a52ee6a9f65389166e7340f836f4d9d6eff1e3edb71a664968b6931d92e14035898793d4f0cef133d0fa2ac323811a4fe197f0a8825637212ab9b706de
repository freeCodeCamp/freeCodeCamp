Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugBuild = require('../debug-build.js');
const debugLogger = require('../utils/debug-logger.js');
const stacktrace = require('../utils/stacktrace.js');

const handlers = {};
const instrumented = {};
function addHandler(type, handler) {
  handlers[type] = handlers[type] || [];
  handlers[type].push(handler);
  return () => {
    const typeHandlers = handlers[type];
    if (typeHandlers) {
      const index = typeHandlers.indexOf(handler);
      if (index !== -1) {
        typeHandlers.splice(index, 1);
      }
    }
  };
}
function resetInstrumentationHandlers() {
  Object.keys(handlers).forEach((key) => {
    handlers[key] = void 0;
  });
}
function maybeInstrument(type, instrumentFn) {
  if (!instrumented[type]) {
    instrumented[type] = true;
    try {
      instrumentFn();
    } catch (e) {
      debugBuild.DEBUG_BUILD && debugLogger.debug.error(`Error while instrumenting ${type}`, e);
    }
  }
}
function triggerHandlers(type, data) {
  const typeHandlers = type && handlers[type];
  if (!typeHandlers) {
    return;
  }
  for (const handler of typeHandlers) {
    try {
      handler(data);
    } catch (e) {
      debugBuild.DEBUG_BUILD && debugLogger.debug.error(
        `Error while triggering instrumentation handler.
Type: ${type}
Name: ${stacktrace.getFunctionName(handler)}
Error:`,
        e
      );
    }
  }
}

exports.addHandler = addHandler;
exports.maybeInstrument = maybeInstrument;
exports.resetInstrumentationHandlers = resetInstrumentationHandlers;
exports.triggerHandlers = triggerHandlers;
//# sourceMappingURL=handlers.js.map
