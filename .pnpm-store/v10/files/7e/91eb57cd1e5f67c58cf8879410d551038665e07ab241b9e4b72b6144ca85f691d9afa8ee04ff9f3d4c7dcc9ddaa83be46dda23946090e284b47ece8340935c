Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');

const consoleIntegration = core.defineIntegration((options = {}) => {
  return {
    name: "Console",
    setup(client) {
      if (process.env.LAMBDA_TASK_ROOT) {
        core.maybeInstrument("console", instrumentConsoleLambda);
      }
      const core$1 = core.consoleIntegration({
        ...options,
        filter: [
          ...options.filter || [],
          // Deprecation on Node 26 for module.require(), which is used by IITM
          "[DEP0205] DeprecationWarning"
        ]
      });
      core$1.setup?.(client);
    }
  };
});
function instrumentConsoleLambda() {
  const consoleObj = core.GLOBAL_OBJ?.console;
  if (!consoleObj) {
    return;
  }
  core.CONSOLE_LEVELS.forEach((level) => {
    if (level in consoleObj) {
      patchWithDefineProperty(consoleObj, level);
    }
  });
}
function patchWithDefineProperty(consoleObj, level) {
  const nativeMethod = consoleObj[level];
  core.originalConsoleMethods[level] = nativeMethod;
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
      core.triggerHandlers("console", { args, level });
      delegate.apply(consoleObj, args);
    } finally {
      isExecuting = false;
    }
  };
  core.markFunctionWrapped(wrapper, nativeMethod);
  const sandboxBypass = nativeMethod.bind(consoleObj);
  core.originalConsoleMethods[level] = sandboxBypass;
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
    core.fill(consoleObj, level, function(originalConsoleMethod) {
      core.originalConsoleMethods[level] = originalConsoleMethod;
      return function(...args) {
        core.triggerHandlers("console", { args, level });
        core.originalConsoleMethods[level]?.apply(this, args);
      };
    });
  }
}

exports.consoleIntegration = consoleIntegration;
//# sourceMappingURL=console.js.map
