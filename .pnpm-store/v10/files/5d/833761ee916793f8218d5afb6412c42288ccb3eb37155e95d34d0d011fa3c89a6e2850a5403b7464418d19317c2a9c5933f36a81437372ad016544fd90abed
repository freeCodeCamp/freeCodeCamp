Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const instrumentation = require('./vendored/instrumentation.js');
const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');
const opentelemetry = require('@sentry/opentelemetry');

const INTEGRATION_NAME = "Graphql";
const instrumentGraphql = nodeCore.generateInstrumentOnce(
  INTEGRATION_NAME,
  instrumentation.GraphQLInstrumentation,
  (_options) => {
    const options = getOptionsWithDefaults(_options);
    return {
      ...options,
      responseHook(span, result) {
        nodeCore.addOriginToSpan(span, "auto.graphql.otel.graphql");
        const resultWithMaybeError = result;
        if (resultWithMaybeError.errors?.length && !core.spanToJSON(span).status) {
          span.setStatus({ code: api.SpanStatusCode.ERROR });
        }
        const attributes = core.spanToJSON(span).data;
        const operationType = attributes["graphql.operation.type"];
        const operationName = attributes["graphql.operation.name"];
        if (options.useOperationNameForRootSpan && operationType) {
          const rootSpan = core.getRootSpan(span);
          const rootSpanAttributes = core.spanToJSON(rootSpan).data;
          const existingOperations = rootSpanAttributes[opentelemetry.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION] || [];
          const newOperation = operationName ? `${operationType} ${operationName}` : `${operationType}`;
          if (Array.isArray(existingOperations)) {
            existingOperations.push(newOperation);
            rootSpan.setAttribute(opentelemetry.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION, existingOperations);
          } else if (typeof existingOperations === "string") {
            rootSpan.setAttribute(opentelemetry.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION, [existingOperations, newOperation]);
          } else {
            rootSpan.setAttribute(opentelemetry.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION, newOperation);
          }
          if (!core.spanToJSON(rootSpan).data["original-description"]) {
            rootSpan.setAttribute("original-description", core.spanToJSON(rootSpan).description);
          }
          rootSpan.updateName(
            `${core.spanToJSON(rootSpan).data["original-description"]} (${getGraphqlOperationNamesFromAttribute(
              existingOperations
            )})`
          );
        }
      }
    };
  }
);
const _graphqlIntegration = ((options = {}) => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      instrumentGraphql(getOptionsWithDefaults(options));
    }
  };
});
const graphqlIntegration = core.defineIntegration(_graphqlIntegration);
function getOptionsWithDefaults(options) {
  return {
    ignoreResolveSpans: true,
    ignoreTrivialResolveSpans: true,
    useOperationNameForRootSpan: true,
    ...options
  };
}
function getGraphqlOperationNamesFromAttribute(attr) {
  if (Array.isArray(attr)) {
    const sorted = attr.slice().sort();
    if (sorted.length <= 5) {
      return sorted.join(", ");
    } else {
      return `${sorted.slice(0, 5).join(", ")}, +${sorted.length - 5}`;
    }
  }
  return `${attr}`;
}

exports.graphqlIntegration = graphqlIntegration;
exports.instrumentGraphql = instrumentGraphql;
//# sourceMappingURL=index.js.map
