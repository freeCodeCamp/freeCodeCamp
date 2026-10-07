Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const debugBuild = require('../debug-build.js');
const childProcess = require('../integrations/childProcess.js');
const context = require('../integrations/context.js');
const contextlines = require('../integrations/contextlines.js');
const index = require('../integrations/local-variables/index.js');
const modules = require('../integrations/modules.js');
const onuncaughtexception = require('../integrations/onuncaughtexception.js');
const onunhandledrejection = require('../integrations/onunhandledrejection.js');
const processSession = require('../integrations/processSession.js');
const spotlight = require('../integrations/spotlight.js');
const console$1 = require('../integrations/console.js');
const systemError = require('../integrations/systemError.js');
const api = require('../sdk/api.js');
const http = require('../transports/http.js');
const detection = require('../utils/detection.js');
const spotlight$1 = require('../utils/spotlight.js');
const asyncLocalStorageStrategy = require('./asyncLocalStorageStrategy.js');
const client = require('./client.js');
const httpIntegration = require('./integrations/httpIntegration.js');
const nativeNodeFetchIntegration = require('./integrations/nativeNodeFetchIntegration.js');

function getDefaultIntegrations() {
  return [
    // Common
    core.eventFiltersIntegration(),
    core.functionToStringIntegration(),
    core.linkedErrorsIntegration(),
    core.requestDataIntegration(),
    systemError.systemErrorIntegration(),
    // Native Wrappers
    console$1.consoleIntegration(),
    httpIntegration.httpIntegration(),
    nativeNodeFetchIntegration.nativeNodeFetchIntegration(),
    // Global Handlers
    onuncaughtexception.onUncaughtExceptionIntegration(),
    onunhandledrejection.onUnhandledRejectionIntegration(),
    // Event Info
    contextlines.contextLinesIntegration(),
    index.localVariablesIntegration(),
    context.nodeContextIntegration(),
    childProcess.childProcessIntegration(),
    processSession.processSessionIntegration(),
    modules.modulesIntegration()
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
    if (debugBuild.DEBUG_BUILD) {
      core.debug.enable();
    } else {
      core.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  asyncLocalStorageStrategy.setAsyncLocalStorageAsyncContextStrategy();
  const scope = core.getCurrentScope();
  scope.update(options.initialScope);
  if (options.spotlight && !options.integrations.some(({ name }) => name === spotlight.INTEGRATION_NAME)) {
    options.integrations.push(
      spotlight.spotlightIntegration({
        sidecarUrl: typeof options.spotlight === "string" ? options.spotlight : void 0
      })
    );
  }
  core.applySdkMetadata(options, "node-light", ["node-core"]);
  const client$1 = new client.LightNodeClient(options);
  core.getCurrentScope().setClient(client$1);
  client$1.init();
  core.debug.log(`SDK initialized from ${detection.isCjs() ? "CommonJS" : "ESM"} (light mode)`);
  client$1.startClientReportTracking();
  updateScopeFromEnvVariables();
  if (process.env.VERCEL) {
    process.on("SIGTERM", async () => {
      await client$1.flush(200);
    });
  }
  return client$1;
}
function getClientOptions(options, getDefaultIntegrationsImpl) {
  const release = getRelease(options.release);
  const spotlight = spotlight$1.getSpotlightConfig(options.spotlight);
  const tracesSampleRate = getTracesSampleRate(options.tracesSampleRate);
  const mergedOptions = {
    ...options,
    dsn: options.dsn ?? process.env.SENTRY_DSN,
    environment: options.environment ?? process.env.SENTRY_ENVIRONMENT,
    sendClientReports: options.sendClientReports ?? true,
    transport: options.transport ?? http.makeNodeTransport,
    stackParser: core.stackParserFromStackParserOptions(options.stackParser || api.defaultStackParser),
    release,
    tracesSampleRate,
    spotlight,
    debug: core.envToBool(options.debug ?? process.env.SENTRY_DEBUG)
  };
  const integrations = options.integrations;
  const defaultIntegrations = options.defaultIntegrations ?? getDefaultIntegrationsImpl(mergedOptions);
  const resolvedIntegrations = core.getIntegrationsToSetup({
    defaultIntegrations,
    integrations
  });
  if (mergedOptions.traceLifecycle === "stream" && !resolvedIntegrations.some((i) => i.name === "SpanStreaming")) {
    resolvedIntegrations.push(core.spanStreamingIntegration());
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
  const detectedRelease = api.getSentryRelease();
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
  if (core.envToBool(process.env.SENTRY_USE_ENVIRONMENT) !== false) {
    const sentryTraceEnv = process.env.SENTRY_TRACE;
    const baggageEnv = process.env.SENTRY_BAGGAGE;
    const propagationContext = core.propagationContextFromHeaders(sentryTraceEnv, baggageEnv);
    core.getCurrentScope().setPropagationContext(propagationContext);
  }
}

exports.getDefaultIntegrations = getDefaultIntegrations;
exports.init = init;
exports.initWithoutDefaultIntegrations = initWithoutDefaultIntegrations;
//# sourceMappingURL=sdk.js.map
