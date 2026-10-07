Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const opentelemetry = require('@sentry/opentelemetry');

function setIsolationScope(isolationScope) {
  const scopes = opentelemetry.getScopesFromContext(api.context.active());
  if (scopes) {
    scopes.isolationScope = isolationScope;
  }
}

exports.setIsolationScope = setIsolationScope;
//# sourceMappingURL=scope.js.map
