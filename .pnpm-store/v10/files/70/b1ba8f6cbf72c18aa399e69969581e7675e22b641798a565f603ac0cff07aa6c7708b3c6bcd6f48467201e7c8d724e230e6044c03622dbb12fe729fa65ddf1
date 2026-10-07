import { addNonEnumerableProperty } from './object.js';

const SCOPE_SPAN_FIELD = "_sentrySpan";
function _setSpanForScope(scope, span) {
  if (span) {
    addNonEnumerableProperty(scope, SCOPE_SPAN_FIELD, span);
  } else {
    delete scope[SCOPE_SPAN_FIELD];
  }
}
function _getSpanForScope(scope) {
  return scope[SCOPE_SPAN_FIELD];
}

export { _getSpanForScope, _setSpanForScope };
//# sourceMappingURL=spanOnScope.js.map
