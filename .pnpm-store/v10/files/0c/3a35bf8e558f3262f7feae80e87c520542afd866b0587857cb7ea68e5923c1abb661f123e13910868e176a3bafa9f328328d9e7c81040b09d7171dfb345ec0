import { trace, propagation, context } from '@opentelemetry/api';
import { BasicTracerProvider } from '@opentelemetry/sdk-trace-base';
import { debug } from '@sentry/core';
import { setupOpenTelemetryLogger, SentryContextManager, initializeEsmLoader } from '@sentry/node-core';
import { SentrySpanProcessor, SentrySampler, getSentryResource, SentryPropagator } from '@sentry/opentelemetry';
import { DEBUG_BUILD } from '../debug-build.js';
import { getOpenTelemetryInstrumentationToPreload } from '../integrations/tracing/index.js';

const MAX_MAX_SPAN_WAIT_DURATION = 1e6;
function initOpenTelemetry(client, options = {}) {
  if (client.getOptions().debug) {
    setupOpenTelemetryLogger();
  }
  const [provider, asyncLocalStorageLookup] = setupOtel(client, options);
  client.traceProvider = provider;
  client.asyncLocalStorageLookup = asyncLocalStorageLookup;
}
function preloadOpenTelemetry(options = {}) {
  const { debug: debug$1 } = options;
  if (debug$1) {
    debug.enable();
  }
  initializeEsmLoader();
  getPreloadMethods(options.integrations).forEach((fn) => {
    fn();
    if (debug$1) {
      debug.log(`[Sentry] Preloaded ${fn.id} instrumentation`);
    }
  });
}
function getPreloadMethods(integrationNames) {
  const instruments = getOpenTelemetryInstrumentationToPreload();
  if (!integrationNames) {
    return instruments;
  }
  return instruments.filter((instrumentation) => {
    const id = instrumentation.id;
    return integrationNames.some((integrationName) => id === integrationName || id.startsWith(`${integrationName}.`));
  });
}
function setupOtel(client, options = {}) {
  const provider = new BasicTracerProvider({
    sampler: new SentrySampler(client),
    resource: getSentryResource("node"),
    forceFlushTimeoutMillis: 500,
    spanProcessors: [
      new SentrySpanProcessor({
        timeout: _clampSpanProcessorTimeout(client.getOptions().maxSpanWaitDuration)
      }),
      ...options.spanProcessors || []
    ]
  });
  trace.setGlobalTracerProvider(provider);
  propagation.setGlobalPropagator(new SentryPropagator());
  const ctxManager = new SentryContextManager();
  context.setGlobalContextManager(ctxManager);
  return [provider, ctxManager.getAsyncLocalStorageLookup()];
}
function _clampSpanProcessorTimeout(maxSpanWaitDuration) {
  if (maxSpanWaitDuration == null) {
    return void 0;
  }
  if (maxSpanWaitDuration > MAX_MAX_SPAN_WAIT_DURATION) {
    DEBUG_BUILD && debug.warn(`\`maxSpanWaitDuration\` is too high, using the maximum value of ${MAX_MAX_SPAN_WAIT_DURATION}`);
    return MAX_MAX_SPAN_WAIT_DURATION;
  } else if (maxSpanWaitDuration <= 0 || Number.isNaN(maxSpanWaitDuration)) {
    DEBUG_BUILD && debug.warn("`maxSpanWaitDuration` must be a positive number, using default value instead.");
    return void 0;
  }
  return maxSpanWaitDuration;
}

export { _clampSpanProcessorTimeout, initOpenTelemetry, preloadOpenTelemetry, setupOtel };
//# sourceMappingURL=initOtel.js.map
