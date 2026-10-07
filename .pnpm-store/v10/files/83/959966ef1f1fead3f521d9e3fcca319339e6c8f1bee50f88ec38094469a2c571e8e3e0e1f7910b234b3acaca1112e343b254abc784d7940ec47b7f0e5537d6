import { tracingChannel as tracingChannel$1 } from 'node:diagnostics_channel';
import { context, trace } from '@opentelemetry/api';
import { logger } from '@sentry/core';
import { D as DEBUG_BUILD } from './debug-build-B98wrZ1j.js';

function tracingChannel(channelNameOrInstance, transformStart) {
  const channel = tracingChannel$1(
    channelNameOrInstance
  );
  let lookup;
  try {
    const contextManager = context._getContextManager();
    lookup = contextManager.getAsyncLocalStorageLookup();
  } catch {
  }
  if (!lookup) {
    DEBUG_BUILD && logger.warn(
      "[TracingChannel] Could not access OpenTelemetry AsyncLocalStorage, context propagation will not work."
    );
    return channel;
  }
  const otelStorage = lookup.asyncLocalStorage;
  channel.start.bindStore(otelStorage, (data) => {
    const span = transformStart(data);
    data._sentrySpan = span;
    return trace.setSpan(context.active(), span);
  });
  return channel;
}

export { tracingChannel };
//# sourceMappingURL=tracingChannel.js.map
