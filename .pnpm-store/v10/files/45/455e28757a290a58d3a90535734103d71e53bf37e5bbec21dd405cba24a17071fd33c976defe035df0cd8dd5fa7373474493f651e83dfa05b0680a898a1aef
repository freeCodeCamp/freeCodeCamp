Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const breadcrumbs = require('../breadcrumbs.js');
const currentScopes = require('../currentScopes.js');
const console = require('../instrument/console.js');
const integration = require('../integration.js');
const debugLogger = require('../utils/debug-logger.js');
const severity = require('../utils/severity.js');
const string = require('../utils/string.js');
const worldwide = require('../utils/worldwide.js');

const INTEGRATION_NAME = "Console";
const consoleIntegration = integration.defineIntegration((options = {}) => {
  const levels = new Set(options.levels || debugLogger.CONSOLE_LEVELS);
  return {
    name: INTEGRATION_NAME,
    setup(client) {
      const unsubscribe = console.addConsoleInstrumentationHandler(({ args, level }) => {
        if (currentScopes.getClient() !== client || !levels.has(level)) {
          return;
        }
        addConsoleBreadcrumb(level, args);
      });
      client.registerCleanup(unsubscribe);
      if (options.filter) {
        const unsubscribe2 = console.addConsoleInstrumentationFilter(options.filter);
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
    level: severity.severityLevelFromString(level),
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
  breadcrumbs.addBreadcrumb(breadcrumb, {
    input: args,
    level
  });
}
function formatConsoleArgs(values) {
  return "util" in worldwide.GLOBAL_OBJ && typeof worldwide.GLOBAL_OBJ.util.format === "function" ? worldwide.GLOBAL_OBJ.util.format(...values) : string.safeJoin(values, " ");
}

exports.addConsoleBreadcrumb = addConsoleBreadcrumb;
exports.consoleIntegration = consoleIntegration;
//# sourceMappingURL=console.js.map
