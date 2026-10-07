import { diag, DiagLogLevel } from '@opentelemetry/api';
import { debug } from '@sentry/core';

function setupOpenTelemetryLogger() {
  diag.disable();
  diag.setLogger(
    {
      error: debug.error,
      warn: debug.warn,
      info: debug.log,
      debug: debug.log,
      verbose: debug.log
    },
    DiagLogLevel.DEBUG
  );
}

export { setupOpenTelemetryLogger };
//# sourceMappingURL=logger.js.map
