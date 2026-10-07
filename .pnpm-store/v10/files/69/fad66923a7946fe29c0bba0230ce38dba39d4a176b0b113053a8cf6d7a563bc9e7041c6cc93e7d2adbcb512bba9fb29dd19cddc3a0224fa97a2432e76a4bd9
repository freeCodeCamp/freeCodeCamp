Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const sdkTraceBase = require('@opentelemetry/sdk-trace-base');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');
const opentelemetry = require('@sentry/opentelemetry');
const debugBuild = require('../debug-build.js');
const index = require('../integrations/tracing/index.js');

const MAX_MAX_SPAN_WAIT_DURATION = 1e6;
function initOpenTelemetry(client, options = {}) {
  if (client.getOptions().debug) {
    nodeCore.setupOpenTelemetryLogger();
  }
  const [provider, asyncLocalStorageLookup] = setupOtel(client, options);
  client.traceProvider = provider;
  client.asyncLocalStorageLookup = asyncLocalStorageLookup;
}
function preloadOpenTelemetry(options = {}) {
  const { debug } = options;
  if (debug) {
    core.debug.enable();
  }
  nodeCore.initializeEsmLoader();
  getPreloadMethods(options.integrations).forEach((fn) => {
    fn();
    if (debug) {
      core.debug.log(`[Sentry] Preloaded ${fn.id} instrumentation`);
    }
  });
}
function getPreloadMethods(integrationNames) {
  const instruments = index.getOpenTelemetryInstrumentationToPreload();
  if (!integrationNames) {
    return instruments;
  }
  return instruments.filter((instrumentation) => {
    const id = instrumentation.id;
    return integrationNames.some((integrationName) => id === integrationName || id.startsWith(`${integrationName}.`));
  });
}
function setupOtel(client, options = {}) {
  const provider = new sdkTraceBase.BasicTracerProvider({
    sampler: new opentelemetry.SentrySampler(client),
    resource: opentelemetry.getSentryResource("node"),
    forceFlushTimeoutMillis: 500,
    spanProcessors: [
      new opentelemetry.SentrySpanProcessor({
        timeout: _clampSpanProcessorTimeout(client.getOptions().maxSpanWaitDuration)
      }),
      ...options.spanProcessors || []
    ]
  });
  api.trace.setGlobalTracerProvider(provider);
  api.propagation.setGlobalPropagator(new opentelemetry.SentryPropagator());
  const ctxManager = new nodeCore.SentryContextManager();
  api.context.setGlobalContextManager(ctxManager);
  return [provider, ctxManager.getAsyncLocalStorageLookup()];
}
function _clampSpanProcessorTimeout(maxSpanWaitDuration) {
  if (maxSpanWaitDuration == null) {
    return void 0;
  }
  if (maxSpanWaitDuration > MAX_MAX_SPAN_WAIT_DURATION) {
    debugBuild.DEBUG_BUILD && core.debug.warn(`\`maxSpanWaitDuration\` is too high, using the maximum value of ${MAX_MAX_SPAN_WAIT_DURATION}`);
    return MAX_MAX_SPAN_WAIT_DURATION;
  } else if (maxSpanWaitDuration <= 0 || Number.isNaN(maxSpanWaitDuration)) {
    debugBuild.DEBUG_BUILD && core.debug.warn("`maxSpanWaitDuration` must be a positive number, using default value instead.");
    return void 0;
  }
  return maxSpanWaitDuration;
}

exports._clampSpanProcessorTimeout = _clampSpanProcessorTimeout;
exports.initOpenTelemetry = initOpenTelemetry;
exports.preloadOpenTelemetry = preloadOpenTelemetry;
exports.setupOtel = setupOtel;
//# sourceMappingURL=initOtel.js.map
