Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const node_diagnostics_channel = require('node:diagnostics_channel');
const api = require('@opentelemetry/api');
const core = require('@sentry/core');
const debugBuild = require('./debug-build-CQngOfDt.js');

function tracingChannel(channelNameOrInstance, transformStart) {
  const channel = node_diagnostics_channel.tracingChannel(
    channelNameOrInstance
  );
  let lookup;
  try {
    const contextManager = api.context._getContextManager();
    lookup = contextManager.getAsyncLocalStorageLookup();
  } catch {
  }
  if (!lookup) {
    debugBuild.DEBUG_BUILD && core.logger.warn(
      "[TracingChannel] Could not access OpenTelemetry AsyncLocalStorage, context propagation will not work."
    );
    return channel;
  }
  const otelStorage = lookup.asyncLocalStorage;
  channel.start.bindStore(otelStorage, (data) => {
    const span = transformStart(data);
    data._sentrySpan = span;
    return api.trace.setSpan(api.context.active(), span);
  });
  return channel;
}

exports.tracingChannel = tracingChannel;
//# sourceMappingURL=tracingChannel.js.map
