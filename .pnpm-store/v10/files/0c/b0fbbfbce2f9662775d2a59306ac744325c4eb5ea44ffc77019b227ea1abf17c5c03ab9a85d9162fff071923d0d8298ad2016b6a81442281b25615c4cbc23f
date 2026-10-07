Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugBuild = require('../debug-build.js');
const debugLogger = require('../utils/debug-logger.js');
const object = require('../utils/object.js');
const string = require('../utils/string.js');
const worldwide = require('../utils/worldwide.js');
const handlers = require('./handlers.js');

const _filter = /* @__PURE__ */ new Set([]);
function addConsoleInstrumentationHandler(handler) {
  const type = "console";
  const removeHandler = handlers.addHandler(type, handler);
  handlers.maybeInstrument(type, instrumentConsole);
  return removeHandler;
}
function addConsoleInstrumentationFilter(filter) {
  for (const f of filter) {
    _filter.add(f);
  }
  return () => {
    for (const f of filter) {
      _filter.delete(f);
    }
  };
}
function instrumentConsole() {
  if (!("console" in worldwide.GLOBAL_OBJ)) {
    return;
  }
  debugLogger.CONSOLE_LEVELS.forEach(function(level) {
    if (!(level in worldwide.GLOBAL_OBJ.console)) {
      return;
    }
    object.fill(worldwide.GLOBAL_OBJ.console, level, function(originalConsoleMethod) {
      debugLogger.originalConsoleMethods[level] = originalConsoleMethod;
      return function(...args) {
        const firstArg = args[0];
        const log = debugLogger.originalConsoleMethods[level];
        const isFiltered = _filter.size && typeof firstArg === "string" && string.stringMatchesSomePattern(firstArg, _filter);
        if (!isFiltered) {
          handlers.triggerHandlers("console", { args, level });
        }
        if (!isFiltered || debugBuild.DEBUG_BUILD && debugLogger.debug.isEnabled()) {
          log?.apply(worldwide.GLOBAL_OBJ.console, args);
        }
      };
    });
  });
}

exports.addConsoleInstrumentationFilter = addConsoleInstrumentationFilter;
exports.addConsoleInstrumentationHandler = addConsoleInstrumentationHandler;
//# sourceMappingURL=console.js.map
