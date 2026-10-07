Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const instrumentation = require('./vendored/instrumentation.js');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');

const TEDIUS_INSTRUMENTED_METHODS = /* @__PURE__ */ new Set([
  "callProcedure",
  "execSql",
  "execSqlBatch",
  "execBulkLoad",
  "prepare",
  "execute"
]);
const INTEGRATION_NAME = "Tedious";
const instrumentTedious = nodeCore.generateInstrumentOnce(INTEGRATION_NAME, () => new instrumentation.TediousInstrumentation({}));
const _tediousIntegration = (() => {
  let instrumentationWrappedCallback;
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      const instrumentation = instrumentTedious();
      instrumentationWrappedCallback = nodeCore.instrumentWhenWrapped(instrumentation);
    },
    setup(client) {
      instrumentationWrappedCallback?.(
        () => client.on("spanStart", (span) => {
          const { description, data } = core.spanToJSON(span);
          if (!description || data["db.system"] !== "mssql") {
            return;
          }
          const operation = description.split(" ")[0] || "";
          if (TEDIUS_INSTRUMENTED_METHODS.has(operation)) {
            span.setAttribute(core.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.db.otel.tedious");
          }
        })
      );
    }
  };
});
const tediousIntegration = core.defineIntegration(_tediousIntegration);

exports.instrumentTedious = instrumentTedious;
exports.tediousIntegration = tediousIntegration;
//# sourceMappingURL=index.js.map
