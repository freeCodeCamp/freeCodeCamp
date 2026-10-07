import { getClient } from '../currentScopes.js';
import { DEBUG_BUILD } from '../debug-build.js';
import { addConsoleInstrumentationHandler } from '../instrument/console.js';
import { defineIntegration } from '../integration.js';
import { SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN } from '../semanticAttributes.js';
import { CONSOLE_LEVELS, debug } from '../utils/debug-logger.js';
import { _INTERNAL_captureLog } from './internal.js';
import { formatConsoleArgs, hasConsoleSubstitutions, createConsoleTemplateAttributes } from './utils.js';

const INTEGRATION_NAME = "ConsoleLogs";
const DEFAULT_ATTRIBUTES = {
  [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.log.console"
};
const _consoleLoggingIntegration = ((options = {}) => {
  const levels = options.levels || CONSOLE_LEVELS;
  return {
    name: INTEGRATION_NAME,
    setup(client) {
      const { enableLogs, normalizeDepth = 3, normalizeMaxBreadth = 1e3 } = client.getOptions();
      if (!enableLogs) {
        DEBUG_BUILD && debug.warn("`enableLogs` is not enabled, ConsoleLogs integration disabled");
        return;
      }
      const unsubscribe = addConsoleInstrumentationHandler(({ args, level }) => {
        if (getClient() !== client || !levels.includes(level)) {
          return;
        }
        const firstArg = args[0];
        const followingArgs = args.slice(1);
        if (level === "assert") {
          if (!firstArg) {
            const assertionMessage = followingArgs.length > 0 ? `Assertion failed: ${formatConsoleArgs(followingArgs, normalizeDepth, normalizeMaxBreadth)}` : "Assertion failed";
            _INTERNAL_captureLog({ level: "error", message: assertionMessage, attributes: DEFAULT_ATTRIBUTES });
          }
          return;
        }
        const isLevelLog = level === "log";
        const shouldGenerateTemplate = args.length > 1 && typeof args[0] === "string" && !hasConsoleSubstitutions(args[0]);
        const attributes = {
          ...DEFAULT_ATTRIBUTES,
          ...shouldGenerateTemplate ? createConsoleTemplateAttributes(firstArg, followingArgs) : {}
        };
        _INTERNAL_captureLog({
          level: isLevelLog ? "info" : level,
          message: formatConsoleArgs(args, normalizeDepth, normalizeMaxBreadth),
          severityNumber: isLevelLog ? 10 : void 0,
          attributes
        });
      });
      client.registerCleanup(unsubscribe);
    }
  };
});
const consoleLoggingIntegration = defineIntegration(_consoleLoggingIntegration);

export { consoleLoggingIntegration };
//# sourceMappingURL=console-integration.js.map
