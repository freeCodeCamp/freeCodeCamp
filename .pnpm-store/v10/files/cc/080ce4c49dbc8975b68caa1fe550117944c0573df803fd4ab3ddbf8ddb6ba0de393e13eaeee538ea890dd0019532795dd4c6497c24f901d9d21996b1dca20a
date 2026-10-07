Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const currentScopes = require('../currentScopes.js');
const debugBuild = require('../debug-build.js');
const console = require('../instrument/console.js');
const integration = require('../integration.js');
const semanticAttributes = require('../semanticAttributes.js');
const debugLogger = require('../utils/debug-logger.js');
const internal = require('./internal.js');
const utils = require('./utils.js');

const INTEGRATION_NAME = "ConsoleLogs";
const DEFAULT_ATTRIBUTES = {
  [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.log.console"
};
const _consoleLoggingIntegration = ((options = {}) => {
  const levels = options.levels || debugLogger.CONSOLE_LEVELS;
  return {
    name: INTEGRATION_NAME,
    setup(client) {
      const { enableLogs, normalizeDepth = 3, normalizeMaxBreadth = 1e3 } = client.getOptions();
      if (!enableLogs) {
        debugBuild.DEBUG_BUILD && debugLogger.debug.warn("`enableLogs` is not enabled, ConsoleLogs integration disabled");
        return;
      }
      const unsubscribe = console.addConsoleInstrumentationHandler(({ args, level }) => {
        if (currentScopes.getClient() !== client || !levels.includes(level)) {
          return;
        }
        const firstArg = args[0];
        const followingArgs = args.slice(1);
        if (level === "assert") {
          if (!firstArg) {
            const assertionMessage = followingArgs.length > 0 ? `Assertion failed: ${utils.formatConsoleArgs(followingArgs, normalizeDepth, normalizeMaxBreadth)}` : "Assertion failed";
            internal._INTERNAL_captureLog({ level: "error", message: assertionMessage, attributes: DEFAULT_ATTRIBUTES });
          }
          return;
        }
        const isLevelLog = level === "log";
        const shouldGenerateTemplate = args.length > 1 && typeof args[0] === "string" && !utils.hasConsoleSubstitutions(args[0]);
        const attributes = {
          ...DEFAULT_ATTRIBUTES,
          ...shouldGenerateTemplate ? utils.createConsoleTemplateAttributes(firstArg, followingArgs) : {}
        };
        internal._INTERNAL_captureLog({
          level: isLevelLog ? "info" : level,
          message: utils.formatConsoleArgs(args, normalizeDepth, normalizeMaxBreadth),
          severityNumber: isLevelLog ? 10 : void 0,
          attributes
        });
      });
      client.registerCleanup(unsubscribe);
    }
  };
});
const consoleLoggingIntegration = integration.defineIntegration(_consoleLoggingIntegration);

exports.consoleLoggingIntegration = consoleLoggingIntegration;
//# sourceMappingURL=console-integration.js.map
