Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('@opentelemetry/instrumentation');
const core = require('@sentry/core');
const createMissingInstrumentationContext = require('./createMissingInstrumentationContext.js');
const detection = require('./detection.js');

function ensureIsWrapped(maybeWrappedFunction, name) {
  const clientOptions = core.getClient()?.getOptions();
  if (!clientOptions?.disableInstrumentationWarnings && !(instrumentation.isWrapped(maybeWrappedFunction) || typeof core.getOriginalFunction(maybeWrappedFunction) === "function") && core.isEnabled() && core.hasSpansEnabled(clientOptions)) {
    core.consoleSandbox(() => {
      if (detection.isCjs()) {
        console.warn(
          `[Sentry] ${name} is not instrumented. This is likely because you required/imported ${name} before calling \`Sentry.init()\`.`
        );
      } else {
        console.warn(
          `[Sentry] ${name} is not instrumented. Please make sure to initialize Sentry in a separate file that you \`--import\` when running node, see: https://docs.sentry.io/platforms/javascript/guides/${name}/install/esm/.`
        );
      }
    });
    core.getGlobalScope().setContext("missing_instrumentation", createMissingInstrumentationContext.createMissingInstrumentationContext(name));
  }
}

exports.ensureIsWrapped = ensureIsWrapped;
//# sourceMappingURL=ensureIsWrapped.js.map
