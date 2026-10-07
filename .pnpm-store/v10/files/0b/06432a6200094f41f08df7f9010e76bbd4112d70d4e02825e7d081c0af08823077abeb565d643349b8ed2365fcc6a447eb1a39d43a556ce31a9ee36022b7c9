import { debug, consoleSandbox, getCurrentScope, applySdkMetadata, envToBool, stackParserFromStackParserOptions, getIntegrationsToSetup, spanStreamingIntegration, propagationContextFromHeaders, inboundFiltersIntegration, functionToStringIntegration, linkedErrorsIntegration, requestDataIntegration, conversationIdIntegration, hasSpansEnabled } from '@sentry/core';
import { setOpenTelemetryContextAsyncContextStrategy, enhanceDscWithOpenTelemetryRootSpanName, setupEventContextTrace, openTelemetrySetupCheck } from '@sentry/opentelemetry';
import { DEBUG_BUILD } from '../debug-build.js';
import { childProcessIntegration } from '../integrations/childProcess.js';
import { nodeContextIntegration } from '../integrations/context.js';
import { contextLinesIntegration } from '../integrations/contextlines.js';
import { httpIntegration } from '../integrations/http/index.js';
import { localVariablesIntegration } from '../integrations/local-variables/index.js';
import { modulesIntegration } from '../integrations/modules.js';
import { nativeNodeFetchIntegration } from '../integrations/node-fetch/index.js';
import { onUncaughtExceptionIntegration } from '../integrations/onuncaughtexception.js';
import { onUnhandledRejectionIntegration } from '../integrations/onunhandledrejection.js';
import { processSessionIntegration } from '../integrations/processSession.js';
import { INTEGRATION_NAME, spotlightIntegration } from '../integrations/spotlight.js';
import { consoleIntegration } from '../integrations/console.js';
import { systemErrorIntegration } from '../integrations/systemError.js';
import { makeNodeTransport } from '../transports/http.js';
import { isCjs } from '../utils/detection.js';
import { getSpotlightConfig } from '../utils/spotlight.js';
import { defaultStackParser, getSentryRelease } from './api.js';
import { NodeClient } from './client.js';
import { initializeEsmLoader } from './esmLoader.js';

function getDefaultIntegrations() {
  return [
    // Common
    // TODO(v11): Replace with `eventFiltersIntegration` once we remove the deprecated `inboundFiltersIntegration`
    // eslint-disable-next-line deprecation/deprecation
    inboundFiltersIntegration(),
    functionToStringIntegration(),
    linkedErrorsIntegration(),
    requestDataIntegration(),
    systemErrorIntegration(),
    conversationIdIntegration(),
    // Native Wrappers
    consoleIntegration(),
    httpIntegration(),
    nativeNodeFetchIntegration(),
    // Global Handlers
    onUncaughtExceptionIntegration(),
    onUnhandledRejectionIntegration(),
    // Event Info
    contextLinesIntegration(),
    localVariablesIntegration(),
    nodeContextIntegration(),
    childProcessIntegration(),
    processSessionIntegration(),
    modulesIntegration()
  ];
}
function init(options = {}) {
  return _init(options, getDefaultIntegrations);
}
function initWithoutDefaultIntegrations(options = {}) {
  return _init(options, () => []);
}
function _init(_options = {}, getDefaultIntegrationsImpl) {
  const options = getClientOptions(_options, getDefaultIntegrationsImpl);
  if (options.debug === true) {
    if (DEBUG_BUILD) {
      debug.enable();
    } else {
      consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  if (options.registerEsmLoaderHooks !== false) {
    initializeEsmLoader();
  }
  setOpenTelemetryContextAsyncContextStrategy();
  const scope = getCurrentScope();
  scope.update(options.initialScope);
  if (options.spotlight && !options.integrations.some(({ name }) => name === INTEGRATION_NAME)) {
    options.integrations.push(
      spotlightIntegration({
        sidecarUrl: typeof options.spotlight === "string" ? options.spotlight : void 0
      })
    );
  }
  applySdkMetadata(options, "node-core");
  const client = new NodeClient(options);
  getCurrentScope().setClient(client);
  client.init();
  debug.log(`SDK initialized from ${isCjs() ? "CommonJS" : "ESM"}`);
  client.startClientReportTracking();
  updateScopeFromEnvVariables();
  enhanceDscWithOpenTelemetryRootSpanName(client);
  setupEventContextTrace(client);
  if (process.env.VERCEL) {
    process.on("SIGTERM", async () => {
      await client.flush(200);
    });
  }
  return client;
}
function validateOpenTelemetrySetup() {
  if (!DEBUG_BUILD) {
    return;
  }
  const setup = openTelemetrySetupCheck();
  const required = ["SentryContextManager", "SentryPropagator"];
  if (hasSpansEnabled()) {
    required.push("SentrySpanProcessor");
  }
  for (const k of required) {
    if (!setup.includes(k)) {
      debug.error(
        `You have to set up the ${k}. Without this, the OpenTelemetry & Sentry integration will not work properly.`
      );
    }
  }
  if (!setup.includes("SentrySampler")) {
    debug.warn(
      "You have to set up the SentrySampler. Without this, the OpenTelemetry & Sentry integration may still work, but sample rates set for the Sentry SDK will not be respected. If you use a custom sampler, make sure to use `wrapSamplingDecision`."
    );
  }
}
function getClientOptions(options, getDefaultIntegrationsImpl) {
  const release = getRelease(options.release);
  const spotlight = getSpotlightConfig(options.spotlight);
  const tracesSampleRate = getTracesSampleRate(options.tracesSampleRate);
  const mergedOptions = {
    ...options,
    dsn: options.dsn ?? process.env.SENTRY_DSN,
    environment: options.environment ?? process.env.SENTRY_ENVIRONMENT,
    sendClientReports: options.sendClientReports ?? true,
    transport: options.transport ?? makeNodeTransport,
    stackParser: stackParserFromStackParserOptions(options.stackParser || defaultStackParser),
    release,
    tracesSampleRate,
    spotlight,
    debug: envToBool(options.debug ?? process.env.SENTRY_DEBUG)
  };
  const integrations = options.integrations;
  const defaultIntegrations = options.defaultIntegrations ?? getDefaultIntegrationsImpl(mergedOptions);
  const resolvedIntegrations = getIntegrationsToSetup({
    defaultIntegrations,
    integrations
  });
  if (mergedOptions.traceLifecycle === "stream" && !resolvedIntegrations.some((i) => i.name === "SpanStreaming")) {
    resolvedIntegrations.push(spanStreamingIntegration());
  }
  return {
    ...mergedOptions,
    integrations: resolvedIntegrations
  };
}
function getRelease(release) {
  if (release !== void 0) {
    return release;
  }
  const detectedRelease = getSentryRelease();
  if (detectedRelease !== void 0) {
    return detectedRelease;
  }
  return void 0;
}
function getTracesSampleRate(tracesSampleRate) {
  if (tracesSampleRate !== void 0) {
    return tracesSampleRate;
  }
  const sampleRateFromEnv = process.env.SENTRY_TRACES_SAMPLE_RATE;
  if (!sampleRateFromEnv) {
    return void 0;
  }
  const parsed = parseFloat(sampleRateFromEnv);
  return isFinite(parsed) ? parsed : void 0;
}
function updateScopeFromEnvVariables() {
  if (envToBool(process.env.SENTRY_USE_ENVIRONMENT) !== false) {
    const sentryTraceEnv = process.env.SENTRY_TRACE;
    const baggageEnv = process.env.SENTRY_BAGGAGE;
    const propagationContext = propagationContextFromHeaders(sentryTraceEnv, baggageEnv);
    getCurrentScope().setPropagationContext(propagationContext);
  }
}

export { getDefaultIntegrations, init, initWithoutDefaultIntegrations, validateOpenTelemetrySetup };
//# sourceMappingURL=index.js.map
