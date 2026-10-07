import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import { context } from '@opentelemetry/api';
import { getRPCMetadata, RPCType } from '@opentelemetry/core';
import { generateInstrumentOnce, ensureIsWrapped } from '@sentry/node-core';
import { SDK_VERSION, patchExpressModule, debug, defineIntegration, setupExpressErrorHandler as setupExpressErrorHandler$1 } from '@sentry/core';
export { expressErrorHandler } from '@sentry/core';
import { DEBUG_BUILD } from '../../debug-build.js';

const INTEGRATION_NAME = "Express";
const SUPPORTED_VERSIONS = [">=4.0.0 <6"];
function setupExpressErrorHandler(app, options) {
  setupExpressErrorHandler$1(app, options);
  ensureIsWrapped(app.use, "express");
}
const instrumentExpress = generateInstrumentOnce(
  INTEGRATION_NAME,
  (options) => new ExpressInstrumentation(options)
);
class ExpressInstrumentation extends InstrumentationBase {
  constructor(config = {}) {
    super("sentry-express", SDK_VERSION, config);
  }
  init() {
    const module = new InstrumentationNodeModuleDefinition(
      "express",
      SUPPORTED_VERSIONS,
      (express) => {
        try {
          patchExpressModule(express, () => ({
            ...this.getConfig(),
            onRouteResolved(route) {
              const rpcMetadata = getRPCMetadata(context.active());
              if (route && rpcMetadata?.type === RPCType.HTTP) {
                rpcMetadata.route = route;
              }
            }
          }));
        } catch (e) {
          DEBUG_BUILD && debug.error("Failed to patch express module:", e);
        }
        return express;
      },
      // we do not ever actually unpatch in our SDKs
      (express) => express
    );
    return module;
  }
}
const _expressIntegration = ((options) => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentExpress(options);
    }
  };
});
const expressIntegration = defineIntegration(_expressIntegration);

export { ExpressInstrumentation, expressIntegration, instrumentExpress, setupExpressErrorHandler };
//# sourceMappingURL=express.js.map
