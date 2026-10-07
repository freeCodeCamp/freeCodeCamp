import { DEBUG_BUILD } from '../debug-build.js';
import { CONSOLE_LEVELS, originalConsoleMethods, debug } from '../utils/debug-logger.js';
import { fill } from '../utils/object.js';
import { stringMatchesSomePattern } from '../utils/string.js';
import { GLOBAL_OBJ } from '../utils/worldwide.js';
import { addHandler, maybeInstrument, triggerHandlers } from './handlers.js';

const _filter = /* @__PURE__ */ new Set([]);
function addConsoleInstrumentationHandler(handler) {
  const type = "console";
  const removeHandler = addHandler(type, handler);
  maybeInstrument(type, instrumentConsole);
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
  if (!("console" in GLOBAL_OBJ)) {
    return;
  }
  CONSOLE_LEVELS.forEach(function(level) {
    if (!(level in GLOBAL_OBJ.console)) {
      return;
    }
    fill(GLOBAL_OBJ.console, level, function(originalConsoleMethod) {
      originalConsoleMethods[level] = originalConsoleMethod;
      return function(...args) {
        const firstArg = args[0];
        const log = originalConsoleMethods[level];
        const isFiltered = _filter.size && typeof firstArg === "string" && stringMatchesSomePattern(firstArg, _filter);
        if (!isFiltered) {
          triggerHandlers("console", { args, level });
        }
        if (!isFiltered || DEBUG_BUILD && debug.isEnabled()) {
          log?.apply(GLOBAL_OBJ.console, args);
        }
      };
    });
  });
}

export { addConsoleInstrumentationFilter, addConsoleInstrumentationHandler };
//# sourceMappingURL=console.js.map
