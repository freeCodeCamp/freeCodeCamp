Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const currentScopes = require('../currentScopes.js');
const exports$1 = require('../exports.js');
const console = require('../instrument/console.js');
const integration = require('../integration.js');
const debugLogger = require('../utils/debug-logger.js');
const misc = require('../utils/misc.js');
const severity = require('../utils/severity.js');
const string = require('../utils/string.js');
const worldwide = require('../utils/worldwide.js');

const INTEGRATION_NAME = "CaptureConsole";
const _captureConsoleIntegration = ((options = {}) => {
  const levels = options.levels || debugLogger.CONSOLE_LEVELS;
  const handled = options.handled ?? true;
  return {
    name: INTEGRATION_NAME,
    setup(client) {
      if (!("console" in worldwide.GLOBAL_OBJ)) {
        return;
      }
      console.addConsoleInstrumentationHandler(({ args, level }) => {
        if (currentScopes.getClient() !== client || !levels.includes(level)) {
          return;
        }
        consoleHandler(args, level, handled);
      });
    }
  };
});
const captureConsoleIntegration = integration.defineIntegration(_captureConsoleIntegration);
function consoleHandler(args, level, handled) {
  const severityLevel = severity.severityLevelFromString(level);
  const syntheticException = new Error();
  const captureContext = {
    level: severity.severityLevelFromString(level),
    extra: {
      arguments: args
    }
  };
  currentScopes.withScope((scope) => {
    scope.addEventProcessor((event) => {
      event.logger = "console";
      misc.addExceptionMechanism(event, {
        handled,
        type: "auto.core.capture_console"
      });
      return event;
    });
    if (level === "assert") {
      if (!args[0]) {
        const message2 = `Assertion failed: ${string.safeJoin(args.slice(1), " ") || "console.assert"}`;
        scope.setExtra("arguments", args.slice(1));
        scope.captureMessage(message2, severityLevel, { captureContext, syntheticException });
      }
      return;
    }
    const error = args.find((arg) => arg instanceof Error);
    if (error) {
      exports$1.captureException(error, captureContext);
      return;
    }
    const message = string.safeJoin(args, " ");
    scope.captureMessage(message, severityLevel, { captureContext, syntheticException });
  });
}

exports.captureConsoleIntegration = captureConsoleIntegration;
//# sourceMappingURL=captureconsole.js.map
