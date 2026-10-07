Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const currentScopes = require('./currentScopes.js');
const debugBuild = require('./debug-build.js');
const debugLogger = require('./utils/debug-logger.js');

function isProfilingIntegrationWithProfiler(integration) {
  return !!integration && typeof integration["_profiler"] !== "undefined" && typeof integration["_profiler"]["start"] === "function" && typeof integration["_profiler"]["stop"] === "function";
}
function startProfiler() {
  const client = currentScopes.getClient();
  if (!client) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.warn("No Sentry client available, profiling is not started");
    return;
  }
  const integration = client.getIntegrationByName("ProfilingIntegration");
  if (!integration) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.warn("ProfilingIntegration is not available");
    return;
  }
  if (!isProfilingIntegrationWithProfiler(integration)) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.warn("Profiler is not available on profiling integration.");
    return;
  }
  integration._profiler.start();
}
function stopProfiler() {
  const client = currentScopes.getClient();
  if (!client) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.warn("No Sentry client available, profiling is not started");
    return;
  }
  const integration = client.getIntegrationByName("ProfilingIntegration");
  if (!integration) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.warn("ProfilingIntegration is not available");
    return;
  }
  if (!isProfilingIntegrationWithProfiler(integration)) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.warn("Profiler is not available on profiling integration.");
    return;
  }
  integration._profiler.stop();
}
const profiler = {
  startProfiler,
  stopProfiler
};

exports.profiler = profiler;
//# sourceMappingURL=profiling.js.map
