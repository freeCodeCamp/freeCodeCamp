import { KoaInstrumentation } from './vendored/instrumentation.js';
import { ATTR_HTTP_ROUTE } from '@opentelemetry/semantic-conventions';
import { spanToJSON, SEMANTIC_ATTRIBUTE_SENTRY_OP, getIsolationScope, getDefaultIsolationScope, debug, defineIntegration, captureException } from '@sentry/core';
import { generateInstrumentOnce, addOriginToSpan, ensureIsWrapped } from '@sentry/node-core';
import { DEBUG_BUILD } from '../../../debug-build.js';

const INTEGRATION_NAME = "Koa";
const instrumentKoa = generateInstrumentOnce(
  INTEGRATION_NAME,
  KoaInstrumentation,
  (options = {}) => {
    return {
      ignoreLayersType: options.ignoreLayersType,
      requestHook(span, info) {
        addOriginToSpan(span, "auto.http.otel.koa");
        const attributes = spanToJSON(span).data;
        const type = attributes["koa.type"];
        if (type) {
          span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_OP, `${type}.koa`);
        }
        const name = attributes["koa.name"];
        if (typeof name === "string") {
          span.updateName(name || "< unknown >");
        }
        if (getIsolationScope() === getDefaultIsolationScope()) {
          DEBUG_BUILD && debug.warn("Isolation scope is default isolation scope - skipping setting transactionName");
          return;
        }
        const route = attributes[ATTR_HTTP_ROUTE];
        const method = info.context?.request?.method?.toUpperCase() || "GET";
        if (route) {
          getIsolationScope().setTransactionName(`${method} ${route}`);
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
const koaIntegration = defineIntegration(_koaIntegration);
const setupKoaErrorHandler = (app) => {
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      captureException(error, {
        mechanism: {
          handled: false,
          type: "auto.middleware.koa"
        }
      });
      throw error;
    }
  });
  ensureIsWrapped(app.use, "koa");
};

export { instrumentKoa, koaIntegration, setupKoaErrorHandler };
//# sourceMappingURL=index.js.map
