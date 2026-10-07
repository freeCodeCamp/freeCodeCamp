Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('./vendored/instrumentation.js');
const semanticConventions = require('@opentelemetry/semantic-conventions');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');
const debugBuild = require('../../../debug-build.js');

const INTEGRATION_NAME = "Koa";
const instrumentKoa = nodeCore.generateInstrumentOnce(
  INTEGRATION_NAME,
  instrumentation.KoaInstrumentation,
  (options = {}) => {
    return {
      ignoreLayersType: options.ignoreLayersType,
      requestHook(span, info) {
        nodeCore.addOriginToSpan(span, "auto.http.otel.koa");
        const attributes = core.spanToJSON(span).data;
        const type = attributes["koa.type"];
        if (type) {
          span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_OP, `${type}.koa`);
        }
        const name = attributes["koa.name"];
        if (typeof name === "string") {
          span.updateName(name || "< unknown >");
        }
        if (core.getIsolationScope() === core.getDefaultIsolationScope()) {
          debugBuild.DEBUG_BUILD && core.debug.warn("Isolation scope is default isolation scope - skipping setting transactionName");
          return;
        }
        const route = attributes[semanticConventions.ATTR_HTTP_ROUTE];
        const method = info.context?.request?.method?.toUpperCase() || "GET";
        if (route) {
          core.getIsolationScope().setTransactionName(`${method} ${route}`);
        }
      }
    };
  }
);
const _koaIntegration = ((options = {}) => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentKoa(options);
    }
  };
});
const koaIntegration = core.defineIntegration(_koaIntegration);
const setupKoaErrorHandler = (app) => {
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      core.captureException(error, {
        mechanism: {
          handled: false,
          type: "auto.middleware.koa"
        }
      });
      throw error;
    }
  });
  nodeCore.ensureIsWrapped(app.use, "koa");
};

exports.instrumentKoa = instrumentKoa;
exports.koaIntegration = koaIntegration;
exports.setupKoaErrorHandler = setupKoaErrorHandler;
//# sourceMappingURL=index.js.map
