Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');
const http = require('../integrations/http.js');
const index$1 = require('../integrations/node-fetch/index.js');
const index = require('../integrations/tracing/index.js');
const initOtel = require('./initOtel.js');

function getDefaultIntegrationsWithoutPerformance() {
  const nodeCoreIntegrations = nodeCore.getDefaultIntegrations();
  return nodeCoreIntegrations.filter((integration) => integration.name !== "Http" && integration.name !== "NodeFetch").concat(http.httpIntegration(), index$1.nativeNodeFetchIntegration());
}
function getDefaultIntegrations(options) {
  return [
    ...getDefaultIntegrationsWithoutPerformance(),
    // We only add performance integrations if tracing is enabled
    // Note that this means that without tracing enabled, e.g. `expressIntegration()` will not be added
    // This means that generally request isolation will work (because that is done by httpIntegration)
    // But `transactionName` will not be set automatically
    ...core.hasSpansEnabled(options) ? index.getAutoPerformanceIntegrations() : []
  ];
}
function init(options = {}) {
  return _init(options, getDefaultIntegrations);
}
function _init(options = {}, getDefaultIntegrationsImpl) {
  core.applySdkMetadata(options, "node");
  const client = nodeCore.init({
    ...options,
    // Only use Node SDK defaults if none provided
    defaultIntegrations: options.defaultIntegrations ?? getDefaultIntegrationsImpl(options)
  });
  if (client && !options.skipOpenTelemetrySetup) {
    initOtel.initOpenTelemetry(client, {
      spanProcessors: options.openTelemetrySpanProcessors
    });
    nodeCore.validateOpenTelemetrySetup();
  }
  return client;
}
function initWithoutDefaultIntegrations(options = {}) {
  return _init(options, () => []);
}

exports.getDefaultIntegrations = getDefaultIntegrations;
exports.getDefaultIntegrationsWithoutPerformance = getDefaultIntegrationsWithoutPerformance;
exports.init = init;
exports.initWithoutDefaultIntegrations = initWithoutDefaultIntegrations;
//# sourceMappingURL=index.js.map
