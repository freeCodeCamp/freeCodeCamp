import { addNonEnumerableProperty } from '../utils/object.js';
import { derefWeakRef, makeWeakRef } from '../utils/weakRef.js';

const SCOPE_ON_START_SPAN_FIELD = "_sentryScope";
const ISOLATION_SCOPE_ON_START_SPAN_FIELD = "_sentryIsolationScope";
function setCapturedScopesOnSpan(span, scope, isolationScope) {
  if (span) {
    addNonEnumerableProperty(span, ISOLATION_SCOPE_ON_START_SPAN_FIELD, makeWeakRef(isolationScope));
    addNonEnumerableProperty(span, SCOPE_ON_START_SPAN_FIELD, scope);
  }
}
function getCapturedScopesOnSpan(span) {
  const spanWithScopes = span;
  return {
    scope: spanWithScopes[SCOPE_ON_START_SPAN_FIELD],
    isolationScope: derefWeakRef(spanWithScopes[ISOLATION_SCOPE_ON_START_SPAN_FIELD])
  };
}

export { getCapturedScopesOnSpan, setCapturedScopesOnSpan };
//# sourceMappingURL=utils.js.map
