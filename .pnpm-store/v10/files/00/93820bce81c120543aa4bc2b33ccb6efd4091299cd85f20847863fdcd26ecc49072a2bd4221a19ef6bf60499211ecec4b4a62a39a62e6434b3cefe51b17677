import { context } from '@opentelemetry/api';
import { getScopesFromContext } from '@sentry/opentelemetry';

function setIsolationScope(isolationScope) {
  const scopes = getScopesFromContext(context.active());
  if (scopes) {
    scopes.isolationScope = isolationScope;
  }
}

export { setIsolationScope };
//# sourceMappingURL=scope.js.map
