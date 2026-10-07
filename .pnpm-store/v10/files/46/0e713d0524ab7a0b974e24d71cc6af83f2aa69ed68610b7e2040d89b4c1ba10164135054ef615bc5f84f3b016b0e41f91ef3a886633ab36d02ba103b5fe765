import { getClient } from './currentScopes.js';
import { DEBUG_BUILD } from './debug-build.js';
import { debug } from './utils/debug-logger.js';

function isProfilingIntegrationWithProfiler(integration) {
  return !!integration && typeof integration["_profiler"] !== "undefined" && typeof integration["_profiler"]["start"] === "function" && typeof integration["_profiler"]["stop"] === "function";
}
function startProfiler() {
  const client = getClient();
  if (!client) {
    DEBUG_BUILD && debug.warn("No Sentry client available, profiling is not started");
    return;
  }
  const integration = client.getIntegrationByName("ProfilingIntegration");
  if (!integration) {
    DEBUG_BUILD && debug.warn("ProfilingIntegration is not available");
    return;
  }
  if (!isProfilingIntegrationWithProfiler(integration)) {
    DEBUG_BUILD && debug.warn("Profiler is not available on profiling integration.");
    return;
  }
  integration._profiler.start();
}
function stopProfiler() {
  const client = getClient();
  if (!client) {
    DEBUG_BUILD && debug.warn("No Sentry client available, profiling is not started");
    return;
  }
  const integration = client.getIntegrationByName("ProfilingIntegration");
  if (!integration) {
    DEBUG_BUILD && debug.warn("ProfilingIntegration is not available");
    return;
  }
  if (!isProfilingIntegrationWithProfiler(integration)) {
    DEBUG_BUILD && debug.warn("Profiler is not available on profiling integration.");
    return;
  }
  integration._profiler.stop();
}
const profiler = {
  startProfiler,
  stopProfiler
};

export { profiler };
//# sourceMappingURL=profiling.js.map
