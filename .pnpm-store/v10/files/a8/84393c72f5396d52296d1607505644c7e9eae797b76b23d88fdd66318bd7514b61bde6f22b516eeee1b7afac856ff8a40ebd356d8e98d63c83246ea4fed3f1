import { context } from '@opentelemetry/api';
import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import { SDK_VERSION } from '@sentry/core';

const PACKAGE_NAME = "@sentry/instrumentation-lru-memoizer";
class LruMemoizerInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super(PACKAGE_NAME, SDK_VERSION, config);
  }
  init() {
    return [
      new InstrumentationNodeModuleDefinition(
        "lru-memoizer",
        [">=1.3 <4"],
        (moduleExports) => {
          const asyncMemoizer = function() {
            const origMemoizer = moduleExports.apply(this, arguments);
            return function() {
              const modifiedArguments = [...arguments];
              const origCallback = modifiedArguments.pop();
              const callbackWithContext = typeof origCallback === "function" ? context.bind(context.active(), origCallback) : origCallback;
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

export { LruMemoizerInstrumentation };
//# sourceMappingURL=instrumentation.js.map
