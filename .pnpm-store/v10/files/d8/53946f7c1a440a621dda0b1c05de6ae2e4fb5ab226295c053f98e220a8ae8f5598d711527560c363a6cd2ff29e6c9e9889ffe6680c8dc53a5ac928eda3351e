import { TediousInstrumentation } from './vendored/instrumentation.js';
import { defineIntegration, spanToJSON, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN } from '@sentry/core';
import { generateInstrumentOnce, instrumentWhenWrapped } from '@sentry/node-core';

const TEDIUS_INSTRUMENTED_METHODS = /* @__PURE__ */ new Set([
  "callProcedure",
  "execSql",
  "execSqlBatch",
  "execBulkLoad",
  "prepare",
  "execute"
]);
const INTEGRATION_NAME = "Tedious";
const instrumentTedious = generateInstrumentOnce(INTEGRATION_NAME, () => new TediousInstrumentation({}));
const _tediousIntegration = (() => {
  let instrumentationWrappedCallback;
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      const instrumentation = instrumentTedious();
      instrumentationWrappedCallback = instrumentWhenWrapped(instrumentation);
    },
    setup(client) {
      instrumentationWrappedCallback?.(
        () => client.on("spanStart", (span) => {
          const { description, data } = spanToJSON(span);
          if (!description || data["db.system"] !== "mssql") {
            return;
          }
          const operation = description.split(" ")[0] || "";
          if (TEDIUS_INSTRUMENTED_METHODS.has(operation)) {
            span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.db.otel.tedious");
          }
        })
      );
    }
  };
});
const tediousIntegration = defineIntegration(_tediousIntegration);

export { instrumentTedious, tediousIntegration };
//# sourceMappingURL=index.js.map
