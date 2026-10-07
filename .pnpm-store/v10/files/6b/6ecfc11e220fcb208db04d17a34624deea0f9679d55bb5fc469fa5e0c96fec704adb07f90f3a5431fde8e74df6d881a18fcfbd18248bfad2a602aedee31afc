Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const util = require('node:util');
const core = require('@sentry/core');

const INTEGRATION_NAME = "NodeSystemError";
function isSystemError(error) {
  if (!(error instanceof Error)) {
    return false;
  }
  if (!("errno" in error) || typeof error.errno !== "number") {
    return false;
  }
  if (typeof util.getSystemErrorMap !== "function") {
    return false;
  }
  return util.getSystemErrorMap().has(error.errno);
}
const systemErrorIntegration = core.defineIntegration((options = {}) => {
  return {
    name: INTEGRATION_NAME,
    processEvent: (event, hint, client) => {
      if (!isSystemError(hint.originalException)) {
        return event;
      }
      const error = hint.originalException;
      const errorContext = {
        ...error
      };
      if (!client.getOptions().sendDefaultPii && options.includePaths !== true) {
        delete errorContext.path;
        delete errorContext.dest;
      }
      event.contexts = {
        ...event.contexts,
        node_system_error: errorContext
      };
      for (const exception of event.exception?.values || []) {
        if (exception.value) {
          if (error.path && exception.value.includes(error.path)) {
            exception.value = exception.value.replace(`'${error.path}'`, "").trim();
          }
          if (error.dest && exception.value.includes(error.dest)) {
            exception.value = exception.value.replace(`'${error.dest}'`, "").trim();
          }
        }
      }
      return event;
    }
  };
});

exports.systemErrorIntegration = systemErrorIntegration;
//# sourceMappingURL=systemError.js.map
