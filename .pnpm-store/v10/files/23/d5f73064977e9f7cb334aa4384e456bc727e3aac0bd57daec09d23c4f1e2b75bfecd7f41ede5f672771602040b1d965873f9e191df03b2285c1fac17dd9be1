import { defineIntegration, maybeInstrument, consoleIntegration as consoleIntegration$1, GLOBAL_OBJ, CONSOLE_LEVELS, originalConsoleMethods, markFunctionWrapped, fill, triggerHandlers } from '@sentry/core';

const consoleIntegration = defineIntegration((options = {}) => {
  return {
    name: "Console",
    setup(client) {
      if (process.env.LAMBDA_TASK_ROOT) {
        maybeInstrument("console", instrumentConsoleLambda);
      }
      const core = consoleIntegration$1({
        ...options,
        filter: [
          ...options.filter || [],
          // Deprecation on Node 26 for module.require(), which is used by IITM
          "[DEP0205] DeprecationWarning"
        ]
      });
      core.setup?.(client);
    }
  };
});
function instrumentConsoleLambda() {
  const consoleObj = GLOBAL_OBJ?.console;
  if (!consoleObj) {
    return;
  }
  CONSOLE_LEVELS.forEach((level) => {
    if (level in consoleObj) {
      patchWithDefineProperty(consoleObj, level);
    }
  });
}
function patchWithDefineProperty(consoleObj, level) {
  const nativeMethod = consoleObj[level];
  originalConsoleMethods[level] = nativeMethod;
  let delegate = nativeMethod;
  let savedDelegate;
  let isExecuting = false;
  const wrapper = function(...args) {
    if (isExecuting) {
      nativeMethod.apply(consoleObj, args);
      return;
    }
    isExecuting = true;
    try {
      triggerHandlers("console", { args, level });
      delegate.apply(consoleObj, args);
    } finally {
      isExecuting = false;
    }
  };
  markFunctionWrapped(wrapper, nativeMethod);
  const sandboxBypass = nativeMethod.bind(consoleObj);
  originalConsoleMethods[level] = sandboxBypass;
  try {
    let current = wrapper;
    Object.defineProperty(consoleObj, level, {
      configurable: true,
      enumerable: true,
      get() {
        return current;
      },
      set(newValue) {
        if (newValue === wrapper) {
          if (savedDelegate !== void 0) {
            delegate = savedDelegate;
            savedDelegate = void 0;
          }
          current = wrapper;
        } else if (newValue === sandboxBypass) {
          savedDelegate = delegate;
          current = sandboxBypass;
        } else if (typeof newValue === "function" && !newValue.__sentry_original__) {
          delegate = newValue;
          current = wrapper;
        } else {
          current = newValue;
        }
      }
    });
  } catch {
    fill(consoleObj, level, function(originalConsoleMethod) {
      originalConsoleMethods[level] = originalConsoleMethod;
      return function(...args) {
        triggerHandlers("console", { args, level });
        originalConsoleMethods[level]?.apply(this, args);
      };
    });
  }
}

export { consoleIntegration };
//# sourceMappingURL=console.js.map
