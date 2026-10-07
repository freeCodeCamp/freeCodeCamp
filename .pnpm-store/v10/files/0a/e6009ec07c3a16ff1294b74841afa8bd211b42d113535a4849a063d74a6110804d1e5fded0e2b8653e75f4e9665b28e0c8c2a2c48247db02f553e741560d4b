import { addBreadcrumb } from '../breadcrumbs.js';
import { getClient } from '../currentScopes.js';
import { addConsoleInstrumentationHandler, addConsoleInstrumentationFilter } from '../instrument/console.js';
import { defineIntegration } from '../integration.js';
import { CONSOLE_LEVELS } from '../utils/debug-logger.js';
import { severityLevelFromString } from '../utils/severity.js';
import { safeJoin } from '../utils/string.js';
import { GLOBAL_OBJ } from '../utils/worldwide.js';

const INTEGRATION_NAME = "Console";
const consoleIntegration = defineIntegration((options = {}) => {
  const levels = new Set(options.levels || CONSOLE_LEVELS);
  return {
    name: INTEGRATION_NAME,
    setup(client) {
      const unsubscribe = addConsoleInstrumentationHandler(({ args, level }) => {
        if (getClient() !== client || !levels.has(level)) {
          return;
        }
        addConsoleBreadcrumb(level, args);
      });
      client.registerCleanup(unsubscribe);
      if (options.filter) {
        const unsubscribe2 = addConsoleInstrumentationFilter(options.filter);
        client.registerCleanup(unsubscribe2);
      }
    }
  };
});
function addConsoleBreadcrumb(level, args) {
  const breadcrumb = {
    category: "console",
    data: {
      arguments: args,
      logger: "console"
    },
    level: severityLevelFromString(level),
    message: formatConsoleArgs(args)
  };
  if (level === "assert") {
    if (args[0] === false) {
      const assertionArgs = args.slice(1);
      breadcrumb.message = assertionArgs.length > 0 ? `Assertion failed: ${formatConsoleArgs(assertionArgs)}` : "Assertion failed";
      breadcrumb.data.arguments = assertionArgs;
    } else {
      return;
    }
  }
  addBreadcrumb(breadcrumb, {
    input: args,
    level
  });
}
function formatConsoleArgs(values) {
  return "util" in GLOBAL_OBJ && typeof GLOBAL_OBJ.util.format === "function" ? GLOBAL_OBJ.util.format(...values) : safeJoin(values, " ");
}

export { addConsoleBreadcrumb, consoleIntegration };
//# sourceMappingURL=console.js.map
