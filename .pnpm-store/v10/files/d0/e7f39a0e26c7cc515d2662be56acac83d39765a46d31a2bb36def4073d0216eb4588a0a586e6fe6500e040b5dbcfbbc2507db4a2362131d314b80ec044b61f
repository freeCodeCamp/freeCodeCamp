import { SpanStatusCode } from '@opentelemetry/api';
import { GraphQLInstrumentation } from './vendored/instrumentation.js';
import { spanToJSON, getRootSpan, defineIntegration } from '@sentry/core';
import { generateInstrumentOnce, addOriginToSpan } from '@sentry/node-core';
import { SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION } from '@sentry/opentelemetry';

const INTEGRATION_NAME = "Graphql";
const instrumentGraphql = generateInstrumentOnce(
  INTEGRATION_NAME,
  GraphQLInstrumentation,
  (_options) => {
    const options = getOptionsWithDefaults(_options);
    return {
      ...options,
      responseHook(span, result) {
        addOriginToSpan(span, "auto.graphql.otel.graphql");
        const resultWithMaybeError = result;
        if (resultWithMaybeError.errors?.length && !spanToJSON(span).status) {
          span.setStatus({ code: SpanStatusCode.ERROR });
        }
        const attributes = spanToJSON(span).data;
        const operationType = attributes["graphql.operation.type"];
        const operationName = attributes["graphql.operation.name"];
        if (options.useOperationNameForRootSpan && operationType) {
          const rootSpan = getRootSpan(span);
          const rootSpanAttributes = spanToJSON(rootSpan).data;
          const existingOperations = rootSpanAttributes[SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION] || [];
          const newOperation = operationName ? `${operationType} ${operationName}` : `${operationType}`;
          if (Array.isArray(existingOperations)) {
            existingOperations.push(newOperation);
            rootSpan.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION, existingOperations);
          } else if (typeof existingOperations === "string") {
            rootSpan.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION, [existingOperations, newOperation]);
          } else {
            rootSpan.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION, newOperation);
          }
          if (!spanToJSON(rootSpan).data["original-description"]) {
            rootSpan.setAttribute("original-description", spanToJSON(rootSpan).description);
          }
          rootSpan.updateName(
            `${spanToJSON(rootSpan).data["original-description"]} (${getGraphqlOperationNamesFromAttribute(
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
const graphqlIntegration = defineIntegration(_graphqlIntegration);
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

export { graphqlIntegration, instrumentGraphql };
//# sourceMappingURL=index.js.map
