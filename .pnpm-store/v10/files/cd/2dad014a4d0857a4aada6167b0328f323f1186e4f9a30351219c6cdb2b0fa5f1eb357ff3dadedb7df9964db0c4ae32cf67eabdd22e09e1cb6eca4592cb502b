import { isWrapped } from '@opentelemetry/instrumentation';
import { getClient, getOriginalFunction, isEnabled, hasSpansEnabled, consoleSandbox, getGlobalScope } from '@sentry/core';
import { createMissingInstrumentationContext } from './createMissingInstrumentationContext.js';
import { isCjs } from './detection.js';

function ensureIsWrapped(maybeWrappedFunction, name) {
  const clientOptions = getClient()?.getOptions();
  if (!clientOptions?.disableInstrumentationWarnings && !(isWrapped(maybeWrappedFunction) || typeof getOriginalFunction(maybeWrappedFunction) === "function") && isEnabled() && hasSpansEnabled(clientOptions)) {
    consoleSandbox(() => {
      if (isCjs()) {
        console.warn(
          `[Sentry] ${name} is not instrumented. This is likely because you required/imported ${name} before calling \`Sentry.init()\`.`
        );
      } else {
        console.warn(
          `[Sentry] ${name} is not instrumented. Please make sure to initialize Sentry in a separate file that you \`--import\` when running node, see: https://docs.sentry.io/platforms/javascript/guides/${name}/install/esm/.`
        );
      }
    });
    getGlobalScope().setContext("missing_instrumentation", createMissingInstrumentationContext(name));
  }
}

export { ensureIsWrapped };
//# sourceMappingURL=ensureIsWrapped.js.map
