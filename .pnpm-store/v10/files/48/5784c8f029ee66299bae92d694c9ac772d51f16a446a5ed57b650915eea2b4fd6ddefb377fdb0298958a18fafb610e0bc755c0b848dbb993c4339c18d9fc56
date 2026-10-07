import { eventFiltersIntegration, functionToStringIntegration, linkedErrorsIntegration, requestDataIntegration, debug, consoleSandbox, getCurrentScope, applySdkMetadata, envToBool, stackParserFromStackParserOptions, getIntegrationsToSetup, spanStreamingIntegration, propagationContextFromHeaders } from '@sentry/core';
import { DEBUG_BUILD } from '../debug-build.js';
import { childProcessIntegration } from '../integrations/childProcess.js';
import { nodeContextIntegration } from '../integrations/context.js';
import { contextLinesIntegration } from '../integrations/contextlines.js';
import { localVariablesIntegration } from '../integrations/local-variables/index.js';
import { modulesIntegration } from '../integrations/modules.js';
import { onUncaughtExceptionIntegration } from '../integrations/onuncaughtexception.js';
import { onUnhandledRejectionIntegration } from '../integrations/onunhandledrejection.js';
import { processSessionIntegration } from '../integrations/processSession.js';
import { INTEGRATION_NAME, spotlightIntegration } from '../integrations/spotlight.js';
import { consoleIntegration } from '../integrations/console.js';
import { systemErrorIntegration } from '../integrations/systemError.js';
import { defaultStackParser, getSentryRelease } from '../sdk/api.js';
import { makeNodeTransport } from '../transports/http.js';
import { isCjs } from '../utils/detection.js';
import { getSpotlightConfig } from '../utils/spotlight.js';
import { setAsyncLocalStorageAsyncContextStrategy } from './asyncLocalStorageStrategy.js';
import { LightNodeClient } from './client.js';
import { httpIntegration } from './integrations/httpIntegration.js';
import { nativeNodeFetchIntegration } from './integrations/nativeNodeFetchIntegration.js';

function getDefaultIntegrations() {
  return [
    // Common
    eventFiltersIntegration(),
    functionToStringIntegration(),
    linkedErrorsIntegration(),
    requestDataIntegration(),
    systemErrorIntegration(),
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
  setAsyncLocalStorageAsyncContextStrategy();
  const scope = getCurrentScope();
  scope.update(options.initialScope);
  if (options.spotlight && !options.integrations.some(({ name }) => name === INTEGRATION_NAME)) {
    options.integrations.push(
      spotlightIntegration({
        sidecarUrl: typeof options.spotlight === "string" ? options.spotlight : void 0
      })
    );
  }
  applySdkMetadata(options, "node-light", ["node-core"]);
  const client = new LightNodeClient(options);
  getCurrentScope().setClient(client);
  client.init();
  debug.log(`SDK initialized from ${isCjs() ? "CommonJS" : "ESM"} (light mode)`);
  client.startClientReportTracking();
  updateScopeFromEnvVariables();
  if (process.env.VERCEL) {
    process.on("SIGTERM", async () => {
      await client.flush(200);
    });
  }
  return client;
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

export { getDefaultIntegrations, init, initWithoutDefaultIntegrations };
//# sourceMappingURL=sdk.js.map
