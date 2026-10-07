Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const instrumentation = require('@opentelemetry/instrumentation');
const core = require('@sentry/core');

const PACKAGE_NAME = "@sentry/instrumentation-lru-memoizer";
class LruMemoizerInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, core.SDK_VERSION, config);
  }
  init() {
    return [
      new instrumentation.InstrumentationNodeModuleDefinition(
        "lru-memoizer",
        [">=1.3 <4"],
        (moduleExports) => {
          const asyncMemoizer = function() {
            const origMemoizer = moduleExports.apply(this, arguments);
            return function() {
              const modifiedArguments = [...arguments];
              const origCallback = modifiedArguments.pop();
              const callbackWithContext = typeof origCallback === "function" ? api.context.bind(api.context.active(), origCallback) : origCallback;
              modifiedArguments.push(callbackWithContext);
              return origMemoizer.apply(this, modifiedArguments);
            };
          };
          asyncMemoizer.sync = moduleExports.sync;
          return asyncMemoizer;
        },
        void 0
        // no need to disable as this instrumentation does not create any spans
      )
    ];
  }
}

exports.LruMemoizerInstrumentation = LruMemoizerInstrumentation;
//# sourceMappingURL=instrumentation.js.map
