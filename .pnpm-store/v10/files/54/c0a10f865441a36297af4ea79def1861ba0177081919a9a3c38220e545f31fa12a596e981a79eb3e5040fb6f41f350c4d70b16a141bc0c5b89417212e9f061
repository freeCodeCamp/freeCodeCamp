Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('@opentelemetry/instrumentation');
const api = require('@opentelemetry/api');
const core$1 = require('@opentelemetry/core');
const nodeCore = require('@sentry/node-core');
const core = require('@sentry/core');
const debugBuild = require('../../debug-build.js');

const INTEGRATION_NAME = "Express";
const SUPPORTED_VERSIONS = [">=4.0.0 <6"];
function setupExpressErrorHandler(app, options) {
  core.setupExpressErrorHandler(app, options);
  nodeCore.ensureIsWrapped(app.use, "express");
}
const instrumentExpress = nodeCore.generateInstrumentOnce(
  INTEGRATION_NAME,
  (options) => new ExpressInstrumentation(options)
);
class ExpressInstrumentation extends instrumentation.InstrumentationBase {
  constructor(config = {}) {
    super("sentry-express", core.SDK_VERSION, config);
  }
  init() {
    const module = new instrumentation.InstrumentationNodeModuleDefinition(
      "express",
      SUPPORTED_VERSIONS,
      (express) => {
        try {
          core.patchExpressModule(express, () => ({
            ...this.getConfig(),
            onRouteResolved(route) {
              const rpcMetadata = core$1.getRPCMetadata(api.context.active());
              if (route && rpcMetadata?.type === core$1.RPCType.HTTP) {
                rpcMetadata.route = route;
              }
            }
          }));
        } catch (e) {
          debugBuild.DEBUG_BUILD && core.debug.error("Failed to patch express module:", e);
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
const expressIntegration = core.defineIntegration(_expressIntegration);

exports.expressErrorHandler = core.expressErrorHandler;
exports.ExpressInstrumentation = ExpressInstrumentation;
exports.expressIntegration = expressIntegration;
exports.instrumentExpress = instrumentExpress;
exports.setupExpressErrorHandler = setupExpressErrorHandler;
//# sourceMappingURL=express.js.map
